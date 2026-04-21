document.addEventListener("DOMContentLoaded", (event) => {
  // register all plugins
  gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, ScrollSmoother);

  const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#pattern-1, #pattern-2",
      scrub: true,
      start: "clamp(top bottom-=300px)",
      end: "clamp(bottom top)",
    },
  });

  tl.from("#pattern-1, #pattern-2", {
    duration: 3,
    drawSVG: 0,
  });
});
