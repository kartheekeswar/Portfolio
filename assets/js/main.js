(function () {
  const root = document.documentElement;

  window.addEventListener('pointermove', (e) => {
    root.style.setProperty('--mx', `${e.clientX}px`);
    root.style.setProperty('--my', `${e.clientY}px`);
  });

  let base = 560;
  window.addEventListener('wheel', (e) => {
    base = Math.min(900, Math.max(320, base + (e.deltaY > 0 ? -18 : 18)));
    root.style.setProperty('--glow-size', `${base}px`);
  }, { passive: true });

})();
