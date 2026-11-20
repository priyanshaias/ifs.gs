/* Access code gate for ifs.gs/t pages.
   Use: <script src="../gate.js" data-sec="ppt"></script> in <head>.
   Sections: doc (report), ppt (presentation), utt (Unified Tax and Tasks).
   Codes are stored only as SHA-256 hashes of "ifsgs|" + code.
   lim > 0: the code opens the section that many times on one device (one opening = one browser session).
   lim = 0: no limit; the device is remembered. */
(function () {
  'use strict';
  var me = document.currentScript, SEC = (me && me.getAttribute('data-sec')) || 'doc';
  var CODES = [
    { h: '9c835ddfaf10542b651fb1d4eeb9002d1a948fe9cefde278a637842ae315bb76', s: ['*'], lim: 0 },
    { h: '98de6c7f1512a79d9e03c0823b3693afebdc1cd21a18515bef6c268cb1e12ce2', s: ['doc', 'ppt'], lim: 5 },
    { h: '50abd0b9042b45d3e486c50c88eb175c42f4091fac347264b415466118cf8475', s: ['doc', 'ppt'], lim: 0 },
    { h: '087baf1c6635277b6bce7b130b45083c69e03f2a2377fdfdf706e776b8722878', s: ['utt'], lim: 5 },
    { h: 'd54853b4ebdb8bd1a4dc5de60eeee1e4251028663b114baaa2f6f1c1e1371b0a', s: ['utt'], lim: 0 }
  ];
  var NAME = { doc: 'Detailed Report', ppt: 'Presentation', utt: 'Unified Tax and Tasks' };
  function get(st, k) { try { return st.getItem(k); } catch (e) { return null; } }
  function put(st, k, v) { try { st.setItem(k, v); } catch (e) {} }
  var L = window.localStorage, S = window.sessionStorage;
  function open() { return get(S, 'gate:' + SEC) || get(S, 'gate:*') || get(L, 'gate-always:' + SEC) || get(L, 'gate-always:*'); }
  if (open()) return;

  var root = document.documentElement; root.classList.add('gate-lock');
  var css = document.createElement('style');
  css.textContent =
    'html.gate-lock body{overflow:hidden!important}' +
    'html.gate-lock body>*:not(#gate){visibility:hidden!important}' +
    '#gate{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:16px;background:#f6f5f2;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;color:#14213d}' +
    '#gate::before{content:"";position:fixed;left:0;top:0;bottom:0;width:10px;background:#F47A00}' +
    '#gate form{width:100%;max-width:380px;background:#fff;border:1px solid #e3e1db;border-radius:14px;padding:28px 26px;box-shadow:0 20px 50px -24px rgba(0,0,0,.25)}' +
    '#gate .k{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#6b6a66;margin:0 0 8px}' +
    '#gate h1{font:400 28px/1.15 Georgia,"Times New Roman",serif;margin:0 0 18px}' +
    '#gate label{display:block;font-size:14px;font-weight:600;margin-bottom:6px}' +
    '#gate input{width:100%;box-sizing:border-box;height:44px;border:1px solid #c9c7c2;border-radius:9px;padding:0 12px;font-size:16px;color:#14213d;background:#fff}' +
    '#gate input:focus{outline:2px solid #F47A00;outline-offset:1px;border-color:#F47A00}' +
    '#gate button{margin-top:14px;width:100%;height:44px;border:0;border-radius:9px;background:#14213d;color:#fff;font-size:15px;font-weight:600;cursor:pointer}' +
    '#gate .m{min-height:20px;margin:10px 0 0;font-size:13.5px;color:#b3261e}' +
    '#gate a{display:inline-block;margin-top:14px;font-size:13.5px;color:#6b6a66}' +
    '@media (prefers-color-scheme: dark){#gate{background:#141413;color:#ecebe8}#gate form{background:#1d1d1b;border-color:#353532}#gate input{background:#141413;color:#ecebe8;border-color:#4a4a46}#gate button{background:#F47A00;color:#141413}#gate .k,#gate a{color:#a3a19c}#gate .m{color:#f59b80}}';
  document.head.appendChild(css);

  function sha(t) {
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(t)).then(function (b) {
      return Array.prototype.map.call(new Uint8Array(b), function (x) { return ('0' + x.toString(16)).slice(-2); }).join('');
    });
  }
  function build() {
    var home = SEC === 'utt' && location.pathname.indexOf('/tech-plan') > -1 ? '../../' : '../';
    var g = document.createElement('div'); g.id = 'gate';
    g.innerHTML = '<form autocomplete="off"><p class="k">GST · West Bengal</p><h1>' + NAME[SEC] + '</h1>' +
      '<label for="gate-c">Access code</label><input id="gate-c" type="password" autocomplete="off" autocapitalize="off" spellcheck="false" required>' +
      '<button type="submit">Open</button><p class="m" role="alert"></p><a href="' + home + '">← Back</a></form>';
    document.body.appendChild(g);
    var f = g.querySelector('form'), inp = g.querySelector('input'), msg = g.querySelector('.m');
    ['keydown', 'keyup', 'keypress'].forEach(function (ev) { inp.addEventListener(ev, function (e) { e.stopPropagation(); }); });
    setTimeout(function () { inp.focus(); }, 50);
    f.addEventListener('submit', function (e) {
      e.preventDefault(); msg.textContent = '';
      sha('ifsgs|' + inp.value.trim()).then(function (h) {
        var c = CODES.filter(function (x) { return x.h === h && (x.s[0] === '*' || x.s.indexOf(SEC) > -1); })[0];
        if (!c) { msg.textContent = 'This code is not valid for this page.'; inp.select(); return; }
        var key = c.s[0] === '*' ? '*' : SEC;
        if (c.lim) {
          var n = Number(get(L, 'gate-n:' + h) || 0);
          if (n >= c.lim) { msg.textContent = 'This code has already been used ' + c.lim + ' times on this device.'; inp.select(); return; }
          put(L, 'gate-n:' + h, String(n + 1));
        } else put(L, 'gate-always:' + key, '1');
        put(S, 'gate:' + key, '1');
        root.classList.remove('gate-lock'); g.remove();
        window.dispatchEvent(new Event('resize'));
      }).catch(function () { msg.textContent = 'Please open this page over https.'; });
    });
  }
  if (document.body) build(); else document.addEventListener('DOMContentLoaded', build);
})();
