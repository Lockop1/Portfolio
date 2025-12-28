// Parallax background setup
window.addEventListener("load", () => {
  const heroBg = document.querySelector(".hero-bg");
  if (!heroBg) {
    console.warn("No .hero-bg found for parallax");
    return;
  }

  const maxShift = 40; // max px left/right

  function handleMouse(e) {
    // -1 (far left) → 0 (center) → 1 (far right)
    const ratio = (-e.clientX / window.innerWidth - 0.5) * 2;
    const x = ratio * maxShift;
    heroBg.style.setProperty("--hero-mouse-x", `${x}px`);
  }

  function handleScroll() {
    const scrollY = window.scrollY;
    heroBg.style.setProperty("--hero-scroll-y", `${scrollY}px`);
  }

  window.addEventListener("mousemove", handleMouse);
  window.addEventListener("scroll", handleScroll);

  // Set initial value so it’s correct even if you load mid-page
  handleScroll();
});
