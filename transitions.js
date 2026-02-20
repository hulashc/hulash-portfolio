/**
 * transitions.js — Smooth page-enter / page-exit transitions
 * for hulash.com (static HTML + jQuery site).
 *
 * Effect: on page-load the body fades + slides up into view (enter).
 *         on any internal link click the body fades + slides down out (exit)
 *         then the browser navigates to the new page.
 *
 * Respects prefers-reduced-motion: when set, all transitions are instant.
 */
(function () {
  'use strict';

  var DURATION  = 420;   // ms
  var REDUCED   = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── inject the overlay + keyframe CSS once ── */
  if (!document.getElementById('pt-style')) {
    var style = document.createElement('style');
    style.id  = 'pt-style';
    style.textContent = [
      '@keyframes pt-enter {',
      '  from { opacity: 0; transform: translateY(18px); }',
      '  to   { opacity: 1; transform: translateY(0);    }',
      '}',
      '@keyframes pt-exit {',
      '  from { opacity: 1; transform: translateY(0);    }',
      '  to   { opacity: 0; transform: translateY(-18px); }',
      '}',
      'body.pt-exiting {',
      '  animation: pt-exit ' + DURATION + 'ms cubic-bezier(0.4,0,0.2,1) forwards;',
      '  pointer-events: none;',
      '}',
      'body.pt-entering {',
      '  animation: pt-enter ' + DURATION + 'ms cubic-bezier(0.4,0,0.2,1) both;',
      '}',
    ].join('\n');
    document.head.appendChild(style);
  }

  /* ── page ENTER animation ── */
  function runEnter() {
    if (REDUCED) return;
    document.body.classList.add('pt-entering');
    document.body.addEventListener('animationend', function onEnd() {
      document.body.classList.remove('pt-entering');
      document.body.removeEventListener('animationend', onEnd);
    });
  }

  /* ── intercept internal link clicks for EXIT animation ── */
  function handleClick(e) {
    var anchor = e.target.closest('a');
    if (!anchor) return;

    var href = anchor.getAttribute('href');
    if (!href) return;

    /* skip: external, new-tab, hash-only, javascript: */
    var isExternal = anchor.hostname && anchor.hostname !== window.location.hostname;
    var isNewTab   = anchor.target === '_blank';
    var isHash     = href.charAt(0) === '#';
    var isJS       = href.indexOf('javascript:') === 0;
    if (isExternal || isNewTab || isHash || isJS) return;

    /* skip JS-controlled toggles used by app.min.js */
    var skip = ['js-grid','js-list','js-sort-alpha','js-sort-date','js-theme','color'];
    for (var i = 0; i < skip.length; i++) {
      if (anchor.classList.contains(skip[i])) return;
    }

    if (REDUCED) return; /* let browser navigate immediately */

    e.preventDefault();
    var target = anchor.href; /* absolute URL */

    document.body.classList.add('pt-exiting');
    setTimeout(function () {
      window.location.href = target;
    }, DURATION);
  }

  /* ── boot ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      runEnter();
      document.addEventListener('click', handleClick, true);
    });
  } else {
    runEnter();
    document.addEventListener('click', handleClick, true);
  }

  /* ── handle back/forward cache (bfcache) ── */
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      document.body.classList.remove('pt-exiting');
      runEnter();
    }
  });
})();
