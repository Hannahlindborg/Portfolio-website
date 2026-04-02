// Gsap
export function initWorkPage() {
  scrollToProjects();
  scrambleTitle();
  imageAnimation();
  aboutText();
  //heroGalleryAnimation();
  hoverProject();
}

function scrollToProjects() {
  document.querySelector("#workbutton").addEventListener("click", () => {
    let projectShowcase = document.querySelector("#projects-showcase");
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: projectShowcase, autoKill: true },
      ease: "power2.out",
    });
  });
}

function scrambleTitle() {
  const timeline = gsap.timeline({ ease: "power2.out" });

  timeline.to("#web-development", {
    opacity: 1,
    duration: 2,
    scrambleText: { text: "WEB DEVELOPMENT", chars: "WEBDEVELOPMENT" },
  });
}

function imageAnimation() {
  const state = Flip.getState(".gallery-images");

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
}

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

/*function heroGalleryAnimation() {
  const galleryImages = gsap.utils.toArray(".gallery-images");
  let galleryTimeline = gsap.timeline({ repeat: -1 });

  galleryImages.forEach((image, i) => {
 galleryTimeline.to(image, { opacity: 0, duration: 1, delay: 2 }, "-=0.5");
    }
    .set(image, { zIndex: -1, opacity: 1 });
};*/

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
