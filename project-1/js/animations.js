document.addEventListener("DOMContentLoaded", (event) => {
  // register all plugins
  gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, ScrollSmoother);

  // Smooth Scroll
  const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 3,
  });

  // Pattern 1 Animation
  const tlPattern = gsap.timeline({
    scrollTrigger: {
      trigger: "#pattern-1, #pattern-2",
      scrub: true,
      start: "clamp(top 50%)",
      end: "clamp(bottom 20%)",
    },
  });

  tlPattern.from("#pattern-1, #pattern-2", {
    drawSVG: 0,
  });

  // Egg Scroll Animations
  function eggsScroll() {
    const tlEggs = gsap.timeline({
      scrollTrigger: {
        trigger: "#stage1-svg",
        scrub: true,
        start: "clamp(top 60%)",
        end: "clamp(bottom 100%)",
      },
    });

    tlEggs.from("ellipse", {
      duration: 2,
      opacity: 0,
      y: 20,
      ease: "power1.out",
      stagger: {
        each: 0.5,
        yoyo: true,
      },
    });

    return tlEggs;
  }

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
  const larvaScroll = gsap.timeline({
    scrollTrigger: {
      trigger: "#stage2-svg",
      scrub: true,
      start: "clamp(top 80%)",
      end: "clamp(bottom 95%)",
    },
  });

  larvaScroll.from("#worm1, #worm2, #worm3, #worm4, #worm5", {
    duration: 4,
    ease: "power1.out",
    y: "100%",
    opacity: 0,
    stagger: 1,
    yoyo: true,
  });

  // Pattern 3 Animation
  const tlPattern3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#pattern-5, #pattern-6",
      scrub: true,
      start: "clamp(top bottom-=500)",
      end: "clamp(bottom top)",
    },
  });

  tlPattern3.from("#pattern-5, #pattern-6", {
    duration: 3,
    drawSVG: 0,
  });

  // Pupa Animations
  const pupaScroll = gsap.timeline({
    scrollTrigger: {
      trigger: "#stage3-svg",
      scrub: true,
      start: "clamp(top 60%)",
      end: "clamp(bottom bottom)",
    },
  });

  pupaScroll
    .from("#pupa, #pupa-pattern-1, #pupa-pattern-2", {
      duration: 3,
      opacity: 0,
      ease: "power1.out",
    })
    .from("#pupa-pattern-1, #pupa-pattern-2", {
      duration: 4,
      drawSVG: 0,
      yoyo: true,
    });

  // Pattern 4 Animation
  const tlPattern4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#pattern-7, #pattern-8",
      scrub: true,
      start: "clamp(top bottom-=500)",
      end: "clamp(bottom top)",
    },
  });

  tlPattern4.from("#pattern-7, #pattern-8", {
    duration: 3,
    drawSVG: 0,
  });

  // Moth Animations
  const mothScroll = gsap.timeline({
    scrollTrigger: {
      trigger: "#stage4-svg",
      scrub: true,
      start: "clamp(top 60%)",
      end: "clamp(bottom bottom)",
    },
    onComplete: () => {
      gsap.delayedCall(0.5, () => {
        const mothWingtl = gsap.timeline({ ease: "power1.in" });

        mothWingtl
          .to("#left-wing", {
            repeat: 1,
            duration: 1.5,
            rotation: 15,
            transformOrigin: "100% 0",
            yoyo: true,
          })
          .to(
            "#right-wing",
            {
              repeat: 1,
              duration: 1.5,
              rotation: -15,
              transformOrigin: "0 0",
              yoyo: true,
            },
            "<.2"
          );
      });
    },
  });

  mothScroll.from("#moth", {
    opacity: 0,
    y: "100%",
    ease: "power1.out",
  });
  // .to("#left-wing", {
  //   duration: 1,
  //   rotation: 15,
  //   transformOrigin: "100% 0",
  // })
  // .to("#left-wing", {
  //   duration: 1,
  //   rotation: 0,
  //   transformOrigin: "100% 0",
  // });
  // .to(
  //   "#right-wing",
  //   {
  //     duration: 1,
  //     rotation: -15,
  //     transformOrigin: "0 0",
  //   },
  //   "<0.2"
  // )
  // .to("#right-wing", {
  //   duration: 1,
  //   rotation: 0,
  //   transformOrigin: "0 0",
  // });
});
