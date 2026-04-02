export function initSunshakeProject() {
  logoSection();
  logoGifSection();
  colorPalette();
  typographysection();
  words();
  mobilemockups();
  outcomesection();
}

function logoSection() {
  const sectionContainer = document.querySelector("#logo-system-section");
  const logoContainer = document.querySelectorAll(".logo-container");

  gsap.fromTo(
    logoContainer,
    {
      y: 100,
      opacity: 0.5,
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      duration: 2,
      ease: "power2.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: sectionContainer,
        start: "top 80%",
        once: true,
      },
    },
  );
}

function logoGifSection() {
  const sectionContainer = document.querySelector("#gif-container");

  gsap.fromTo(
    sectionContainer,
    {
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionContainer,
        start: "top 80%",
        once: true,
      },
    },
  );
}

function colorPalette() {
  const sectionContainer = document.querySelector("#color-system-section");
  const colorSwatchesLeft = document.querySelectorAll(".swatch-left");
  const colorSwatchesRight = document.querySelectorAll(".swatch-right");

  gsap.fromTo(
    colorSwatchesLeft,
    {
      autoAlpha: 0,
      x: -100,
    },
    {
      x: 0,
      autoAlpha: 1,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: sectionContainer,
        start: "top 80%",
        once: true,
      },
    },
  );
  gsap.fromTo(
    colorSwatchesRight,
    {
      autoAlpha: 0,
      x: +100,
    },
    {
      x: 0,
      autoAlpha: 1,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: sectionContainer,
        start: "top 80%",
        once: true,
      },
    },
  );
}

function typographysection() {
  const sectionContainer = document.querySelector("#typography-system-section");

  gsap.fromTo(
    sectionContainer,
    {
      autoAlpha: 0,
      y: 50,
    },
    {
      autoAlpha: 1,
      y: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionContainer,
        start: "top 80%",
        once: true,
      },
    },
  );
}

function words() {
  document.fonts.ready.then(() => {
    const sectionContainer = document.querySelector("#real-life-usage-section");
    let brandWords = document.querySelectorAll(".brand-words");

    brandWords.forEach((word) => {
      let split = SplitText.create(word, { type: "chars" });
      gsap.fromTo(
        split.chars,
        {
          opacity: 0,
          y: +20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "sine.out",
          stagger: 0.1,
          onComplete: () => split.revert(),
          scrollTrigger: {
            trigger: sectionContainer,
            start: "top 80%",
            once: true,
          },
        },
      );
    });
  });
}

function mobilemockups() {
  const sectionContainer = document.querySelector("#instagram-story-section");
  const imageContainer = document.querySelectorAll(
    ".instagram-story-container",
  );

  gsap.fromTo(
    imageContainer,
    {
      scale: 1,
      autoAlpha: 0,
    },
    {
      scale: 0.9,
      autoAlpha: 1,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionContainer,
        start: "top 80%",
        once: true,
      },
    },
  );
}

function outcomesection() {
  const sectionContainer = document.querySelector("#outcome-section");

  gsap.fromTo(
    sectionContainer,
    {
      autoAlpha: 0,
      y: 50,
    },
    {
      autoAlpha: 1,
      y: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionContainer,
        start: "top 80%",
        once: true,
      },
    },
  );
}
