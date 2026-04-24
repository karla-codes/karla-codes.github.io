document.addEventListener("DOMContentLoaded", (event) => {
  // register all plugins
  gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, ScrollSmoother);

  // Smooth Scroll
  const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 4,
  });

  // Pattern 1 Animation
  const tlPattern = gsap.timeline({
    scrollTrigger: {
      trigger: "#pattern-1, #pattern-2",
      scrub: true,
      start: "clamp(top bottom-=300px)",
      end: "clamp(bottom top)",
    },
  });

  tlPattern.from("#pattern-1, #pattern-2", {
    duration: 3,
    drawSVG: 0,
  });

  // Egg Scroll Animations
  function eggsScroll() {
    const tlEggs = gsap
      .timeline({
        scrollTrigger: {
          trigger: "ellipse",
          scrub: true,
          start: "clamp(top center)",
          end: "clamp(bottom center-=120)",
        },
      })
      .set("ellipse", {
        opacity: 0,
      });

    tlEggs
      .to("section", {
        scrollTrigger: {
          trigger: "section.stage-1",
          scrub: true,
          start: "clamp(top center-=300)",
          end: "clamp(bottom center-=120)",
        },
        "--lt-bg-color": "#32CD32",
        "--lt-text-color": "#292905",
      })
      .to("ellipse", {
        duration: 2,
        opacity: 1,
        ease: "power1.out",
        yoyo: true,
        stagger: 1.5,
      });

    return tlEggs;
  }

  //   function eggsBounce() {
  //   const tlEggsBounce = gsap.timeline();
  //
  //   tlEggsBounce
  //     .to(
  //       "#egg, #egg1, #egg2, #egg3, #egg7, #egg8, #egg9, #egg10, #egg14, #egg15, #egg16, #egg17, #egg21, #egg22, #egg23, #egg24",
  //       {
  //         duration: 1,
  //         repeat: 4,
  //         y: -20,
  //         ease: "power1.out",
  //         yoyo: true,
  //       }
  //     )
  //     .to(
  //       "#egg4, #egg5, #egg6, #egg11, #egg12, #egg13, #egg18, #egg19, #egg20, #egg25, #egg26, #egg27",
  //       {
  //         duration: 1,
  //         repeat: 4,
  //         y: -20,
  //         ease: "power1.out",
  //         yoyo: true,
  //       },
  //       "<-.3"
  //     );
  //
  //   return tlEggsBounce;
  // }

  const eggAnimations = gsap.timeline();

  eggAnimations.add(eggsScroll());

  // Pattern 2 Animation
  const tlPattern2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#pattern-3, #pattern-4",
      scrub: true,
      start: "clamp(top bottom-=300px)",
      end: "clamp(bottom top)",
    },
  });

  tlPattern2.from("#pattern-3, #pattern-4", {
    duration: 3,
    drawSVG: 0,
  });

  // Larva Animations

  const larvaScroll = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#worm5",
        scrub: true,
        start: "clamp(top bottom)",
        end: "clamp(bottom bottom-=100)",
      },
    })
    .set("#worm1, #worm2, #worm3, #worm4, #worm5", {
      y: "100%",
      opacity: 0,
    });

  larvaScroll.to("#worm1, #worm2, #worm3, #worm4, #worm5", {
    duration: 4,
    ease: "power1.out",
    y: 0,
    opacity: 1,
    stagger: 0.5,
    yoyo: true,
  });

  // Pattern 3 Animation
  const tlPattern3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#pattern-5, #pattern-6",
      scrub: true,
      start: "clamp(top bottom-=300px)",
      end: "clamp(bottom top)",
    },
  });

  tlPattern3.from("#pattern-5, #pattern-6", {
    duration: 3,
    drawSVG: 0,
  });
});
