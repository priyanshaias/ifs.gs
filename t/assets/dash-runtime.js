/*
  Small local stand-in for the claude.ai dashboard runtime, so pages written with
  dash.calc / dash.data / dash.draw run from a plain local web server.

  A page:
    1. loads d3, then this file, in <head>;
    2. registers calcs with dash.calc(id, {inputs, fn}) and charts with dash.draw(name, fn);
    3. calls dashBoot({sourceId: 'data/file.csv', ...}) at the end of <body>.
  dashBoot loads each CSV, runs the calcs in dependency order, then draws every
  element with a matching data-draw attribute, and redraws on resize.
*/
(function () {
  const calcs = {}, draws = {}, data = {}, results = {}, failed = {};
  let ready = false;

  function run(name) {
    const fn = draws[name];
    if (!fn) return;
    document.querySelectorAll('[data-draw="' + CSS.escape(name) + '"]').forEach((el) => {
      try { fn(el); } catch (e) { console.error('draw ' + name, e); }
    });
  }
  function drawAll() { Object.keys(draws).forEach(run); }

  window.dash = {
    colors: ['var(--c0)', 'var(--c1)', 'var(--c2)', 'var(--c3)', 'var(--c4)', 'var(--c5)'],
    calc(id, spec) { calcs[id] = spec; },
    data(id) {
      if (id in data) return {status: 'ok', data: data[id]};
      if (id in results) return {status: 'ok', data: results[id]};
      if (failed[id]) return {status: 'error', data: []};
      return {status: 'loading', data: []};
    },
    draw(name, fn) {
      if (fn) { draws[name] = fn; if (ready) run(name); return; }
      if (ready) run(name);
    },
    params: () => ({}), setParams() {}, setLink() {}, loader() {}, onData(f) { f(); }
  };

  window.dashBoot = async function (sources) {
    await Promise.all(Object.entries(sources).map(async ([id, url]) => {
      try {
        const res = await fetch(url, {cache: 'no-cache'});
        if (!res.ok) throw new Error(res.status + ' ' + url);
        data[id] = d3.csvParse(await res.text());
      } catch (e) {
        failed[id] = true; console.error('source ' + id, e);
      }
    }));
    if (Object.keys(failed).length) {
      const n = document.getElementById('app-notice');
      if (n) n.hidden = false;
    }
    // run calcs whose inputs are ready, until none are left
    let left = Object.keys(calcs);
    for (let pass = 0; left.length && pass < 50; pass++) {
      left = left.filter((id) => {
        const c = calcs[id];
        if (c.inputs.some((i) => failed[i])) { failed[id] = true; return false; }
        if (!c.inputs.every((i) => i in data || i in results)) return true;
        try { results[id] = c.fn(...c.inputs.map((i) => (i in data ? data[i] : results[i]))); }
        catch (e) { failed[id] = true; console.error('calc ' + id, e); }
        return false;
      });
    }
    ready = true;
    drawAll();
    let t, w = window.innerWidth;
    window.addEventListener('resize', () => {
      clearTimeout(t);
      t = setTimeout(() => { if (window.innerWidth !== w) { w = window.innerWidth; drawAll(); } }, 150);
    });
  };
})();
