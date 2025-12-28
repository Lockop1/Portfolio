window.addEventListener("load", () => {
  const heroBg = document.querySelector(".hero-bg");
  if (!heroBg) return;

  const maxShift = 40; // max px left/right

  function handleMouse(e) {
    // -1 (far left) → 0 (center) → 1 (far right)
    const ratio = (e.clientX / window.innerWidth - 0.5) * 2;
    const x = ratio * maxShift;
    heroBg.style.setProperty("--hero-mouse-x", `${x}px`);
  }

  function handleScroll() {
    heroBg.style.setProperty("--hero-scroll-y", `${window.scrollY}px`);
  }

  const supportsMouse = window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches;

  if (supportsMouse) {
    window.addEventListener("mousemove", handleMouse);
  } else {
    // Disable left/right effect
    heroBg.style.setProperty("--hero-mouse-x", "0px");
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
