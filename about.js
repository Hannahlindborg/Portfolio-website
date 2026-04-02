export function initAboutPage() {
  let mm = gsap.matchMedia();

  mm.add("(min-width: 769px)", () => {
    splitTitle();
    aboutText();
    portraitImage();
    skillSection();
    toolSection();
    educationSection();
  });
}

function splitTitle() {
  document.fonts.ready.then(() => {
    let split = SplitText.create("#split-text-title", { type: "words,chars" });
    gsap.from(split.words, {
      opacity: 0,
      y: +10,
      duration: 2,
      ease: "sine.out",
      stagger: 0.1,
      onComplete: () => split.revert(),
    });
  });
}

function portraitImage() {
  const leftSide = document.querySelector(".left-column");

  gsap.fromTo(
    leftSide,
    {
      autoAlpha: 0,
      x: -50,
      opacity: 0,
    },
    {
      autoAlpha: 1,
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
      delay: 0.5,
    },
  );
}

function aboutText() {
  let text = document.querySelectorAll(".about-text");
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
      delay: 2,
    },
  );
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
