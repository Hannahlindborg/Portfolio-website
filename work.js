// Gsap
export function initWorkPage() {
  let mm = gsap.matchMedia();

  mm.add("(min-width: 769px)", () => {
    /*Interaction based animations*/
    scrollToProjects();
    imageGalleryInteractions();
    hoverProject();
    buttonsHover();
    introduceProjects();

    document.fonts.ready.then(() => {
      animationTimeline();
    });
  });
}

function animationTimeline() {
  const mainTimeline = gsap.timeline();
  const preloader = document.querySelector("#preloader");
  const hasVisited = sessionStorage.getItem("hasVisited");

  if (!hasVisited) {
    mainTimeline.add(preloadAnimation());
    sessionStorage.setItem("hasVisited", "true");
  }

  /*Automatic animations*/
  mainTimeline
    .add(scrambleTitle(), "-=0.2")
    .add(aboutText(), "<")
    .add(buttonsAnimation(), "-=1.5")
    .add(imageGallery(), "-=1.2");
}

/* Animation from https://www.youtube.com/watch?v=hwk1oxTt2So */
function preloadAnimation() {
  const repeat = 8;
  const tl = gsap.timeline();
  const char = document.querySelectorAll(".char");
  const rollTl = gsap.timeline();

  char.forEach((char, i) => {
    const original = char.querySelector(".original");
    const clone = char.querySelector(".clone");

    gsap.set(clone, {
      yPercent: i % 2 === 0 ? -100 : 100,
    });

    let roll = gsap.to([original, clone], {
      repeat: repeat,
      ease: "none",
      yPercent: i % 2 === 0 ? "+=100" : "-=100",
      duration: 1,
    });

    rollTl.add(roll, 0);
  });

  const mainTimeline = gsap.timeline();

  mainTimeline
    .to(rollTl, {
      progress: 1,
      duration: 4,
      ease: "power4.inOut",
    })
    .to(
      "#loader-name",
      {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.in",
      },
      "+=0.2",
    )
    .to(
      "#preloader",
      {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
        onComplete: () => {
          gsap.set("#preloader", {
            display: "none",
          });
        },
      },
      "-=0.1",
    );
  return mainTimeline;
}

function scrambleTitle() {
  const tl = gsap.timeline({ ease: "power2.out" });

  gsap.set("#line2", { opacity: 0 });

  tl.to("#line2", {
    opacity: 1,
    duration: 2,
    scrambleText: {
      text: "& Communications",
      chars: "& Communications",
    },
  });
  return tl;
}

function aboutText() {
  let text = document.querySelectorAll(".about-text");
  const tl = gsap.timeline();

  tl.fromTo(
    text,
    {
      autoAlpha: 0,
      y: 50,
      opacity: 0,
    },
    {
      autoAlpha: 1,
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "sine.out",
      stagger: 0.2,
    },
  );

  return tl;
}

function imageGallery() {
  const tl = gsap.timeline();

  tl.from(".gallery-img-container", {
    opacity: 0,
    y: 60,
    scale: 0.8,
    rotation: () => gsap.utils.random(-10, 10),
    stagger: { amount: 0.8, from: "random" },
    ease: "back.out(1.4)",
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

  return tl;
}

function buttonsAnimation() {
  const tl = gsap.timeline();

  tl.fromTo(
    ".buttons-container div",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    },
  );
  return tl;
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

function buttonsHover() {
  let buttons = document.querySelectorAll(".buttons-container div");

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
