// Gsap
export function initWorkPage() {
  let mm = gsap.matchMedia();

  mm.add("(min-width: 769px)", () => {
    scrollToProjects();
    /*splitTitle();*/
    scrambleTitle();
    //imageAnimation();
    aboutText();
    imageGallery();
    imageGalleryInteractions();
    buttonsAnimation();
    //heroGalleryAnimation();
    introduceProjects();
    hoverProject();
  });
}

function scrollToProjects() {
  document.querySelectorAll(".workbutton").forEach((button) => {
    button.addEventListener("click", () => {
      let projectShowcase = document.querySelector("#projects-section");
      if (projectShowcase) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: projectShowcase, autoKill: true },
          ease: "power2.out",
        });
      }
    });
  });
}

/*function splitTitle() {
  document.fonts.ready.then(() => {
    let split = SplitText.create("#line1", { type: "words,chars" });
    gsap.from(split.words, {
      opacity: 0,
      y: +10,
      duration: 2,
      ease: "sine.out",
      stagger: 0.1,
      onComplete: () => split.revert(),
    });
  });
}*/

function scrambleTitle() {
  const timeline = gsap.timeline({ ease: "power2.out" });

  gsap.set("#line2", { opacity: 0 });

  timeline.to("#line2", {
    opacity: 1,
    duration: 2,
    delay: 2,
    scrambleText: {
      text: "& Communications",
      chars: "& Communications",
    },
  });
}

function imageGallery() {
  gsap.from(".gallery-img-container", {
    opacity: 0,
    y: 60,
    scale: 0.8,
    rotation: () => gsap.utils.random(-10, 10),
    stagger: { amount: 0.8, from: "random" },
    ease: "back.out(1.4)",
    delay: 5,
  });

  gsap.to(".gallery-img-container", {
    opacity: 0,
    y: -60,
    scale: 0.83,
    rotation: () => gsap.utils.random(-8, 8),
    stagger: { amount: 0.4, from: "random" },
    ease: "power2.in",
    duration: 0.6,
    scrollTrigger: {
      trigger: "#hero-gallery",
      start: "bottom 80%",
      end: "bottom top",
      toggleActions: "play reverse play reverse",
    },
  });
}

function imageGalleryInteractions() {
  const galleryImages = document.querySelectorAll(".gallery-img-container");

  galleryImages.forEach((image) => {
    image.addEventListener("mouseenter", () => {
      galleryImages.forEach((other) => {
        if (other !== image) {
          gsap.to(other, {
            opacity: 0.7,
            filter: "blur(2px)",
            duration: 0.5,
            ease: "power2.out",
          });
        }
      });
      gsap.to(image, {
        scale: 1.1,
        zIndex: 100,
        duration: 0.5,
        ease: "power2.out",
      });
    });
    image.addEventListener("mouseleave", () => {
      galleryImages.forEach((other) => {
        if (other !== image) {
          gsap.to(other, {
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "power2.out",
          });
        }
      });
      gsap.to(image, {
        scale: 1,
        zIndex: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  });
}

/*function imageAnimation() {
  let mm = gsap.matchMedia();
  const state = Flip.getState(".gallery-images");

  mm.add("(min-width: 769px)", () => {
    Flip.from(state, {
      targets: ".project-image",
      duration: 1,
      absolute: true,
      props: "object-fit, object-position",
      ease: "power2.inOut",
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#projects-showcase",
        start: "top bottom",
        end: "top 20%",
        scrub: 1,
        toggleClass: { targets: "body", className: "is-flipping" },
      },
    });
  });
}*/

function aboutText() {
  document.fonts.ready.then(() => {
    let split = SplitText.create("#hero-description", {
      type: "lines",
      linesClass: "split-line",
    });
    gsap.from(split.lines, {
      opacity: 0,
      y: +50,
      duration: 1,
      ease: "sine.out",
      stagger: 0.2,
      delay: 2,
      onComplete: () => {
        split.revert();
        gsap.set("#hero-description", { clearProps: "all" });
      },
    });
  });
}

function buttonsAnimation() {
  gsap.fromTo(
    "#buttons-container div",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      delay: 2,
      ease: "power2.out",
    },
  );

  let buttons = document.querySelectorAll("#buttons-container div");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, {
        scale: 1.05,
        zIndex: 100,
        duration: 0.5,
        ease: "power2.out",
      });
    });
    button.addEventListener("mouseleave", () => {
      gsap.to(button, {
        scale: 1,
        zIndex: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  });
}

/*function heroGalleryAnimation() {
  const galleryImages = gsap.utils.toArray(".gallery-images");
  let galleryTimeline = gsap.timeline({ repeat: -1 });

  galleryImages.forEach((image, i) => {
 galleryTimeline.to(image, { opacity: 0, duration: 1, delay: 2 }, "-=0.5");
    }
    .set(image, { zIndex: -1, opacity: 1 });
};*/

/*function projectsPinned() {
  const pinnedCards = gsap.utils.toArray(".webpage-image");

  gsap.set(pinnedCards[0], { autoAlpha: 1 });

  pinnedCards.forEach((card, i) => {
    ScrollTrigger.create({
      trigger: card,
      start: "top top",
      endTrigger: "#webpage-mockups",
      pin: true,
      pinSpacing: false,
      onEnter: () => gsap.to(card, { autoAlpha: 1, duration: 0.35 }),
      onLeaveBack: () => i && gsap.to(card, { autoAlpha: 1 }),
      id: i + 1,
    });
  });
}*/

function introduceProjects() {
  gsap.set(".project-container", { opacity: 0, y: 50 });
  ScrollTrigger.batch(".project-container", {
    start: "top 75%",
    end: "bottom 25%",
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        duration: 1,
        ease: "power2.out",
      }),
    onLeaveBack: (batch) =>
      gsap.to(batch, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
      }),
  });
}

function hoverProject() {
  let projectContainer = document.querySelectorAll(".project-container");

  projectContainer.forEach((project) => {
    let hoverState = project.querySelectorAll(".project-overlay");
    let image = project.querySelectorAll(".project-image");

    let animationTimeline = gsap.timeline({ paused: true });

    animationTimeline
      .to(hoverState, {
        duration: 1,
        opacity: 1,
        ease: "power2.out",
      })
      .to(
        image,
        {
          duration: 1,
          scale: 1.05,
          ease: "power2.out",
        },
        0,
      );

    project.addEventListener("mouseenter", () => animationTimeline.play());
    project.addEventListener("mouseleave", () => animationTimeline.reverse());
  });
}
