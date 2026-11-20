/* Cover art, copied from gst-ppt/index.html (slide 0 cover art and the data-rings watermark). */
(function () {
  const $ = (q) => (document.querySelector(q) || document.createElement('div'));
  const MAPS = {"wb": {"v": "0 0 65.2 100.0", "d": "M47.0,1.8L48.0,2.6L48.7,5.1L49.7,5.6L51.6,6.8L53.3,7.6L56.3,7.1L57.1,7.4L58.6,7.9L59.7,8.0L60.7,8.6L62.4,9.4L64.8,9.4L65.2,12.6L64.3,16.2L62.6,18.4L61.7,18.3L60.4,18.8L60.2,19.7L60.5,20.8L59.8,21.9L58.5,22.3L56.9,21.9L55.6,21.4L53.9,20.2L52.7,18.5L52.6,16.6L52.0,15.4L51.3,14.8L50.2,14.8L50.1,16.1L50.7,17.0L50.0,17.7L48.2,17.6L47.1,17.1L45.9,16.9L45.8,15.8L44.8,14.4L43.2,12.9L41.6,11.9L40.4,13.1L41.9,14.3L42.0,15.5L41.0,16.5L40.3,17.5L38.7,18.9L37.3,20.5L37.0,21.7L36.4,22.8L36.2,24.0L36.6,24.8L38.9,25.7L40.7,27.4L42.2,29.5L43.0,30.2L44.4,30.9L47.2,31.0L48.1,33.2L50.1,34.6L49.8,35.8L48.0,36.6L46.9,36.7L45.8,36.5L44.1,36.4L42.2,36.4L40.9,40.4L39.9,41.8L37.9,41.1L35.6,44.8L35.3,46.3L36.2,47.6L37.2,48.8L38.5,49.2L39.5,48.9L40.3,49.3L41.3,50.5L42.9,51.2L45.2,51.6L46.5,52.5L46.6,54.1L46.4,56.1L46.1,57.3L44.9,60.4L44.0,63.1L44.5,64.4L45.1,65.3L46.1,66.3L46.8,67.3L46.2,69.8L47.9,70.9L49.3,71.3L48.6,74.3L48.8,76.1L49.3,77.8L49.7,80.5L49.7,81.5L50.5,83.6L51.8,87.8L51.8,89.4L51.8,91.0L51.4,93.8L50.1,93.8L51.3,95.6L51.6,96.9L51.8,98.8L50.4,99.0L49.5,98.8L48.7,97.2L48.3,98.6L46.9,100.0L46.0,98.6L46.0,97.4L46.8,92.6L46.3,91.7L45.2,90.5L44.0,95.6L44.5,97.7L44.3,98.7L42.1,99.5L39.8,97.5L39.0,99.3L36.8,99.1L35.8,98.1L36.5,96.3L37.8,92.1L38.0,90.2L36.3,88.8L34.8,88.0L33.9,86.1L34.3,88.2L35.1,88.9L36.2,89.4L37.4,90.5L36.6,91.8L35.7,92.6L34.1,95.7L32.1,97.5L29.7,98.8L26.5,99.6L25.4,96.4L23.2,95.9L22.5,95.3L21.9,93.4L20.6,93.2L19.8,94.3L18.7,93.1L18.6,91.5L16.1,90.5L13.8,88.8L15.3,87.6L15.4,85.3L14.3,84.4L14.8,83.0L12.6,82.0L12.2,80.6L9.2,78.8L9.4,76.0L10.0,74.9L5.0,74.5L3.1,72.3L1.0,72.1L0.0,70.4L1.1,67.7L0.0,66.5L2.7,66.0L3.7,64.4L4.9,65.1L4.7,66.2L6.2,67.1L8.2,66.0L8.3,65.0L10.1,63.7L13.1,62.7L15.6,62.2L15.8,60.6L16.8,58.9L20.1,60.6L21.5,60.7L22.7,60.0L23.7,56.3L24.2,57.3L26.7,56.5L26.6,55.2L28.0,55.3L29.4,54.1L29.0,52.6L30.4,51.7L31.7,48.5L31.5,47.4L32.9,47.0L33.2,45.5L32.5,44.0L32.9,40.8L32.4,39.0L31.4,38.1L31.4,35.9L32.3,34.8L31.2,32.0L34.2,30.3L35.6,30.0L35.6,27.9L33.4,26.2L31.8,24.3L32.2,21.8L34.6,19.5L36.2,18.6L37.8,17.0L39.7,16.1L39.4,14.5L38.0,13.2L36.4,12.6L36.7,11.7L37.5,9.2L37.4,7.8L36.7,5.6L34.8,2.9L34.9,0.0L36.8,1.9L38.6,2.0L40.6,2.9L42.1,2.4L43.2,1.3L45.6,1.3L47.0,1.8Z"}, "gj": {"v": "0 0 100.0 79.7", "d": "M45.8,0.4L49.0,1.2L51.1,1.1L53.7,0.3L55.4,0.9L57.0,0.5L60.1,0.8L61.7,0.0L62.5,0.9L65.1,1.7L68.9,3.7L71.5,4.3L72.8,5.6L75.2,6.0L76.2,5.5L76.8,3.7L78.3,3.5L79.0,6.4L78.1,8.7L80.7,11.9L82.5,10.4L83.6,13.2L82.6,14.1L82.6,15.9L84.9,17.6L86.7,19.4L86.7,21.6L88.1,22.3L89.7,21.9L91.2,23.7L92.1,23.2L94.4,25.2L94.5,26.1L96.4,26.7L97.9,28.8L98.5,31.6L99.5,31.6L100.0,32.8L98.7,35.4L97.1,36.1L95.3,37.7L93.7,37.7L93.1,38.4L94.5,39.6L96.2,39.6L96.3,40.6L93.6,41.6L93.9,43.2L95.0,45.6L94.8,47.5L93.7,47.7L91.4,48.9L89.7,49.5L90.0,52.7L88.8,53.3L89.9,55.1L92.7,54.3L95.8,54.5L97.4,55.0L94.4,56.1L93.6,55.8L92.1,57.1L91.4,58.8L89.5,59.0L89.2,60.1L87.9,61.8L90.6,64.3L91.2,65.9L91.3,67.7L89.7,69.4L89.4,70.6L88.0,71.4L84.4,69.4L83.3,69.5L84.1,71.8L82.6,74.7L83.1,76.4L82.6,78.0L81.1,77.8L80.7,78.7L79.5,79.1L77.5,78.4L77.6,77.3L78.6,76.7L77.6,75.4L75.2,77.3L76.0,78.9L72.2,79.7L73.9,74.5L74.3,73.3L74.9,71.4L75.1,69.5L74.9,66.8L74.3,64.7L74.0,62.4L72.9,61.6L71.9,60.8L70.9,57.5L71.8,56.4L72.6,55.8L71.6,56.0L72.3,54.4L73.8,53.2L77.2,51.8L78.6,50.9L76.5,51.7L74.3,52.0L69.6,51.9L70.4,48.7L71.2,47.7L72.1,47.1L70.8,47.3L69.2,47.1L69.7,43.9L70.9,43.2L72.2,43.1L73.8,42.6L72.1,42.1L70.3,41.9L68.2,42.4L66.2,42.0L63.8,42.0L64.8,42.4L65.8,43.4L65.3,45.1L64.8,46.2L63.5,46.9L62.4,48.0L62.1,49.0L61.5,49.7L62.6,50.2L63.7,50.5L64.3,51.3L65.0,52.5L65.0,54.7L62.2,60.0L61.2,61.2L54.1,64.4L51.3,66.1L45.4,68.4L43.1,68.8L40.6,68.3L36.9,66.6L31.2,62.2L29.7,60.8L25.2,55.2L21.9,52.2L19.4,49.4L16.3,46.8L13.4,43.3L12.8,41.6L13.0,40.0L14.1,39.1L15.4,39.5L16.4,40.9L17.1,41.5L22.0,39.6L23.7,39.7L24.8,38.6L26.3,38.9L29.3,37.2L30.5,37.1L32.0,36.8L34.4,32.6L36.2,29.9L37.3,29.4L36.9,27.9L35.5,28.9L35.0,29.9L33.1,29.9L32.2,30.0L31.0,30.3L26.8,31.9L25.0,33.3L23.8,33.6L17.0,32.0L10.4,28.5L7.6,26.1L5.8,23.2L4.0,19.6L4.6,18.6L7.3,16.4L9.7,14.7L7.6,15.5L5.3,16.5L4.1,17.3L2.8,18.8L1.1,19.1L0.4,16.9L0.0,14.7L1.1,13.9L1.9,13.4L3.4,13.0L5.1,12.8L6.7,12.8L8.9,12.8L8.9,7.6L9.8,6.8L10.5,7.7L11.7,7.2L13.0,7.5L14.1,7.3L15.2,7.6L17.0,7.6L20.3,7.5L22.2,7.5L23.3,8.3L24.6,9.2L26.1,9.4L28.1,9.2L29.5,8.9L30.2,8.1L30.7,7.2L33.8,6.1L36.9,5.1L37.8,5.0L38.0,6.5L38.4,7.4L39.6,8.0L40.5,8.1L42.0,7.7L43.2,6.3L44.8,6.0L45.7,5.3L45.1,4.5L44.6,3.8L44.6,2.4L45.1,0.9L45.8,0.4Z"}};
  /* ---------- slide 0 · cover art ---------- */
  try { (function () {
    const pts = MAPS.wb.d.replace(/[MZ]/g, '').split('L').map((p) => p.split(',').map(Number));
    const inside = (x, y) => { let c = false; for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) { const [xi, yi] = pts[i], [xj, yj] = pts[j]; if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c; } return c; };
    const S = 9.6, OX = 560, OY = 50, tx = (x) => OX + x * S, ty = (y) => OY + y * S;
    let sd = 11; const rnd = () => (sd = (sd * 16807) % 2147483647) / 2147483647;
    const N = []; let guard = 0; while (N.length < 150 && guard++ < 20000) { const x = rnd() * 65, y = rnd() * 100; if (inside(x, y)) N.push([tx(x), ty(y)]); }
    let g = `<defs><radialGradient id="cv2g" cx="78%" cy="62%" r="60%"><stop offset="0" stop-color="var(--wb-bengal)" stop-opacity=".10"/><stop offset="1" stop-color="var(--wb-bengal)" stop-opacity="0"/></radialGradient></defs><rect width="1230" height="1080" fill="url(#cv2g)"/>`;
    const K = [tx(47), ty(82)];
    [90, 170, 260, 360].forEach((r, i) => { g += `<circle cx="${K[0]}" cy="${K[1]}" r="${r}" style="fill:none;stroke:var(--wb-bengal);opacity:${.22 - i * .04}" stroke-width="1.5" stroke-dasharray="${i % 2 ? '2 6' : '10 8'}"/>`; });
    g += `<path d="${MAPS.wb.d}" transform="translate(${OX} ${OY}) scale(${S})" style="fill:color-mix(in srgb,var(--wb-bengal) 7%,transparent);stroke:color-mix(in srgb,var(--wb-bengal) 55%,transparent)" stroke-width="2" vector-effect="non-scaling-stroke" stroke-linejoin="round"/>`;
    const d2 = (a, b) => (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2;
    const E = new Set(); N.forEach((p, i) => { N.map((q, j) => [d2(p, q), j]).filter(([, j]) => j !== i).sort((a, b) => a[0] - b[0]).slice(0, 2).forEach(([dd, j]) => { if (dd < 9000) E.add(i < j ? i + '-' + j : j + '-' + i); }); });
    const hot = new Set(N.map((p, i) => [d2(p, [tx(44), ty(70)]), i]).sort((a, b) => a[0] - b[0]).slice(0, 11).map(([, i]) => i));
    E.forEach((e) => { const [i, j] = e.split('-').map(Number), h = hot.has(i) && hot.has(j); g += `<line x1="${N[i][0].toFixed(1)}" y1="${N[i][1].toFixed(1)}" x2="${N[j][0].toFixed(1)}" y2="${N[j][1].toFixed(1)}" style="stroke:${h ? 'var(--wb-bengal)' : 'color-mix(in srgb,var(--color-fg) 16%,transparent)'}" stroke-width="${h ? 2.2 : 1}"/>`; });
    N.forEach((p, i) => { const h = hot.has(i); g += `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="${h ? 6.5 : 2.5 + rnd() * 2.5}" style="fill:${h ? 'var(--wb-bengal)' : 'color-mix(in srgb,var(--color-fg) 28%,transparent)'}"/>`; });
    g += `<text x="${tx(30)}" y="${ty(103)}" text-anchor="middle" style="fill:var(--wb-bengal);font:700 16px var(--font-anthropic-sans);letter-spacing:.14em">WEST BENGAL</text>`;
    const svg = (s) => `<svg viewBox="0 0 1230 1080" preserveAspectRatio="xMaxYMid slice">${s}</svg>`;
    $('#cv2-art-o').innerHTML = svg(g);
    $('#cv2-art').innerHTML = svg(g);
  })(); } catch (e) { /* slide not in this deck */ }

  /* ---------- cover watermark · data rings (slide 6), leak taxonomy and fraud network (slide 7) ---------- */
  try { (function () {
    const mix = (c, p) => `color-mix(in srgb,${c} ${p}%,transparent)`;
    const F = 'font-family:var(--font-anthropic-sans)';
    let g = '';
    /* 1 · data rings, rising from the bottom-left corner */
    const C = [345, 1112], RG = [
      ['L0 · STANDALONE', 95, 'var(--now)', [['Returns', 1], ['Payments', 1]]],
      ['L1 · GSTN DATA', 160, 'var(--tech)', [['GSTR-3B', 1], ['E-way bill', 1]]],
      ['L2 · STATE ACTIONS', 225, 'var(--pol)', [['MyTask', .5], ['Scrutiny', 0], ['Audit', 0], ['Orders', 0]]],
      ['L3 · STATE RECORDS', 290, 'var(--kpi)', [['Vehicles', 0], ['Property', 0], ['Electricity', 0], ['Excise', 0]]],
      ['L4 · CENTRAL DATA', 355, 'var(--wb-gujarat)', [['UPI', 0], ['Banks', 0], ['MCA', 0], ['Income tax', 0]]]];
    const pt = (r, a) => [C[0] + r * Math.cos(a), C[1] - r * Math.sin(a)];
    const arc = (r, a, h) => { const [p0, p1] = [pt(r, a + h), pt(r, a - h)]; return `M${p0[0].toFixed(1)},${p0[1].toFixed(1)} A${r},${r} 0 0 1 ${p1[0].toFixed(1)},${p1[1].toFixed(1)}`; };
    let rg = '';
    RG.slice().reverse().forEach(([, r, c]) => { rg += `<circle cx="${C[0]}" cy="${C[1]}" r="${r}" style="fill:none;stroke:${mix(c, 11)}" stroke-width="50"/><circle cx="${C[0]}" cy="${C[1]}" r="${r}" style="fill:none;stroke:${mix(c, 45)}" stroke-width="1.2"/>`; });
    RG.forEach(([lb, r, c, src], k) => {
      /* ring name in a wedge at the top; pills share the two sides, clear of the slide's bottom edge */
      const lh = k ? (lb.length * 5.4 + 30) / r : 0;
      if (k) rg += `<path id="cvw-l${k}" d="${arc(r, Math.PI / 2, lh)}" fill="none"/><text dominant-baseline="central" style="${F};font-weight:800;font-size:12.5px;letter-spacing:.14em;fill:${c}"><textPath href="#cvw-l${k}" startOffset="50%" text-anchor="middle">${lb}</textPath></text>`;
      const half = Math.ceil(src.length / 2);
      src.forEach(([t, st], i) => {
        const side = i < half ? 1 : -1, n = side > 0 ? half : src.length - half, j = side > 0 ? i : i - half;
        const w = t.length * 7.4 + 22, hs = (w / 2 - 12) / r, ht = (w / 2 + 24) / r, hp = w / 2 / r, id = `cvw-p${k}-${i}`;
        const lo = Math.max(Math.asin(Math.min(.95, 42 / r)), Math.acos(Math.min(1, (C[0] - 75) / r))) + hp, hi = Math.PI / 2 - lh - hp - (k ? .04 : .12);
        const off = n > 1 ? hi - (hi - lo) * j / (n - 1) : (lo + hi) / 2, a = side > 0 ? Math.PI - off : off;
        const o = st === 1 ? c : st ? mix(c, 60) : mix(c, 55), inn = st === 1 ? c : st ? mix(c, 25) : 'var(--color-panel)';
        rg += `<path d="${arc(r, a, hs)}" style="fill:none;stroke:${o}" stroke-width="27" stroke-linecap="round"/><path d="${arc(r, a, hs)}" style="fill:none;stroke:${inn}" stroke-width="24" stroke-linecap="round"/>`
          + `<path id="${id}" d="${arc(r, a, ht)}" fill="none"/><text dominant-baseline="central" style="${F};font-weight:600;font-size:13px;fill:${st === 1 ? '#fff' : c}"><textPath href="#${id}" startOffset="50%" text-anchor="middle">${t}</textPath></text>`;
      });
    });
    rg += `<circle cx="${C[0]}" cy="${C[1]}" r="52" style="fill:var(--ink)"/><text x="${C[0]}" y="${C[1] - 22}" text-anchor="middle" style="${F};font-weight:700;font-size:13px;fill:var(--on-ink)">One taxpayer</text>`;
    g += `<g style="opacity:.28">${rg}</g>`;

    /* 2 · the leak taxonomy: one square per leak type, filled where a tool flags it */
    const CT = [['A', 9, 5], ['B', 17, 13], ['C', 20, 11], ['D', 29, 17], ['E', 11, 6], ['F', 6, 1], ['G', 17, 8], ['H', 9, 4], ['I', 5, 0], ['J', 4, 4]];
    const X0 = 700, Y0 = 820, SQ = 15, ST = 20;
    let tx = '';
    CT.forEach(([k, t, c], i) => {
      const y = Y0 + i * 22, col = `var(--c${k})`;
      tx += `<rect x="${X0}" y="${y}" width="18" height="18" rx="3" style="fill:${col}"/><text x="${X0 + 9}" y="${y + 13}" text-anchor="middle" style="${F};font-weight:800;font-size:11px;fill:#fff">${k}</text>`;
      for (let s = 0; s < t; s++) { const x = X0 + 30 + s * ST; tx += s < c ? `<rect x="${x}" y="${y + 1.5}" width="${SQ}" height="${SQ}" rx="2" style="fill:${col}"/>` : `<rect x="${x + .75}" y="${y + 2.25}" width="${SQ - 1.5}" height="${SQ - 1.5}" rx="2" style="fill:none;stroke:${col}" stroke-width="1.5"/>`; }
    });
    g += `<g style="opacity:.24">${tx}</g>`;

    /* 3 · fraud runs in networks: red clusters and the narrow view of one GSTIN */
    let sd = 29; const rnd = () => (sd = (sd * 16807) % 2147483647) / 2147483647;
    const N = [], E = [];
    const CL = [[290, 120, 48, 13], [430, 215, 56, 16], [575, 110, 50, 14], [710, 225, 52, 15], [850, 120, 40, 10]], HB = [];
    CL.forEach(([cx, cy, rr, n]) => {
      const b = N.length; HB.push(b); N.push([cx, cy]);
      for (let i = 1; i < n; i++) { const a = rnd() * 2 * Math.PI, d = rr * (.35 + .65 * Math.sqrt(rnd())); N.push([cx + d * Math.cos(a), cy + d * Math.sin(a)]); }
      for (let i = b + 1; i < N.length; i++) { if (rnd() < .45) E.push([b, i]); N.map((q, j) => [(q[0] - N[i][0]) ** 2 + (q[1] - N[i][1]) ** 2, j]).filter(([, j]) => j > b && j !== i).sort((p, q) => p[0] - q[0]).slice(0, 2).forEach(([, j]) => E.push([i, j])); }
    });
    [[0, 1], [1, 2], [2, 3], [3, 4], [0, 2], [1, 3]].forEach(([p, q]) => E.push([HB[p], HB[q]]));
    let nw = '';
    E.forEach(([i, j]) => { nw += `<line x1="${N[i][0].toFixed(1)}" y1="${N[i][1].toFixed(1)}" x2="${N[j][0].toFixed(1)}" y2="${N[j][1].toFixed(1)}" style="stroke:${mix('#C62828', 45)}" stroke-width="1.2"/>`; });
    N.forEach(([x, y], i) => { const h = HB.includes(i); nw += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${h ? 7 : (3 + rnd() * 2.5).toFixed(1)}" style="fill:${h ? '#C62828' : mix('#C62828', 80)}"/>`; });
    const L = [135, 175];
    nw += `<line x1="${L[0]}" y1="${L[1]}" x2="${N[HB[0]][0].toFixed(1)}" y2="${N[HB[0]][1].toFixed(1)}" style="stroke:${mix('#C62828', 45)}" stroke-width="1.2" stroke-dasharray="4 4"/>`;
    nw += `<circle cx="${L[0]}" cy="${L[1]}" r="76" style="fill:${mix('var(--wb-bengal)', 9)};stroke:var(--wb-bengal)" stroke-width="2.2" stroke-dasharray="8 6"/>`;
    for (let i = 0; i < 6; i++) { const a = i / 6 * 2 * Math.PI + .3, x = L[0] + 46 * Math.cos(a), y = L[1] + 46 * Math.sin(a); nw += `<line x1="${L[0]}" y1="${L[1]}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" style="stroke:var(--wb-bengal)" stroke-width="2.2"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="6" style="fill:var(--wb-bengal)"/>`; }
    nw += `<circle cx="${L[0]}" cy="${L[1]}" r="9" style="fill:var(--ink)"/>`;
    g += `<g style="opacity:.3">${nw}</g>`;

    /* two of the earlier line icons stay, for texture */
    [[1060, 90, 140, -8, '<path d="M5 2h11l5 5v15H5z"/><path d="M16 2v5h5M8 11h9M8 15h9M8 19h5"/><path d="M11 6.5h3"/>'],
     [1185, 330, 100, -4, '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>']].forEach(([x, y, s, r, d]) => { g += `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s / 24})" style="fill:none;stroke:${mix('var(--color-fg)', 7)}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">${d}</g>`; });
    $('#cv2-wm').innerHTML = `<svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">${g}</svg>`;
  })(); } catch (e) { /* slide not in this deck */ }

})();
