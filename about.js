export function initAboutPage() {
  let mm = gsap.matchMedia();

  mm.add("(min-width: 769px)", () => {
    document.fonts.ready.then(() => {
      animationTimeline();
    });

    /*Interaction based animations*/
    buttonsHover();
    skillSection();
    toolSection();
    educationSection();
  });
}

function animationTimeline() {
  const mainTimeline = gsap.timeline();

  /*Automatic animations*/
  mainTimeline
    .add(splitTitle(), "<")
    .add(aboutText(), "-=1.5")
    .add(buttonsAnimation(), "<")
    .add(portraitImage(), "<");
}

function splitTitle() {
  let split = SplitText.create("#split-text-title", { type: "words,chars" });
  let tl = gsap.timeline();

  tl.from(split.words, {
    opacity: 0,
    y: +10,
    duration: 2,
    ease: "sine.out",
    stagger: 0.1,
    onComplete: () => split.revert(),
  });

  return tl;
}

function portraitImage() {
  const rightSide = document.querySelector(".right-column");
  let tl = gsap.timeline();

  tl.fromTo(
    rightSide,
    {
      autoAlpha: 0,
      x: +50,
      opacity: 0,
    },
    {
      autoAlpha: 1,
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
    },
  );

  return tl;
}

function aboutText() {
  let text = document.querySelectorAll(".about-text");
  let tl = gsap.timeline();

  gsap.fromTo(
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

function buttonsAnimation() {
  let tl = gsap.timeline();

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

function skillSection() {
  const sectionContainer = document.querySelector(".skills");
  const skills = document.querySelectorAll(".skill-category");

  gsap.fromTo(
    skills,
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
      ease: "power2.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: sectionContainer,
        start: "top 70%",
        once: true,
      },
    },
  );
}

function toolSection() {
  const sectionContainer = document.querySelector(".tools");
  const tools = document.querySelector(".tool-icons");

  gsap.fromTo(
    tools,
    {
      autoAlpha: 0,
      x: -100,
      opacity: 0,
    },
    {
      autoAlpha: 1,
      x: 0,
      opacity: 1,
      duration: 4,
      ease: "expo.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: sectionContainer,
        start: "top 70%",
        once: true,
      },
    },
  );
}

function educationSection() {
  const sectionContainer = document.querySelector("#education");
  const school = document.querySelectorAll(".school");

  gsap.fromTo(
    school,
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
      ease: "power2.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: sectionContainer,
        start: "top 70%",
        once: true,
      },
    },
  );
}
