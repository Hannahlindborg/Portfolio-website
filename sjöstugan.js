export function initSjöstuganProject() {
  let mm = gsap.matchMedia();

  mm.add("(min-width: 769px)", () => {
    problemSection();
    userflows();
    colorPalette();
    initVideoPlaying();
    webmockups();
    stackedCards();
    mobilemockups();
    outcomesection();
  });

  mm.add("max-width: 768px", () => {
    initVideoPlaying();
  });
}

function problemSection() {
  const sectionContainer = document.querySelector("#problem");

  gsap.fromTo(
    sectionContainer,
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
      scrollTrigger: {
        trigger: sectionContainer,
        start: "top 80%",
        once: true,
      },
    },
  );
}

function userflows() {
  const sectionContainer = document.querySelector("#user-needs");
  const needsContainer = document.querySelectorAll(".needs-container");

  gsap.fromTo(
    needsContainer,
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

function colorPalette() {
  const sectionContainer = document.querySelector("#sjöstugan-color-palette");
  const colorContainers = document.querySelectorAll(".swatch");

  gsap.fromTo(
    colorContainers,
    {
      autoAlpha: 0,
      x: -100,
    },
    {
      x: 0,
      autoAlpha: 1,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionContainer,
        start: "top 80%",
        once: true,
      },
    },
  );
}

function initVideoPlaying() {
  const sectionContainer = document.querySelector("#scroll-video");
  const homePageVideo = document.querySelector("#homepage-scroll-video");

  if (!homePageVideo) {
    return;
  }

  ScrollTrigger.create({
    trigger: sectionContainer,
    start: "top 80%",
    onEnter: () => homePageVideo.play(),
    onLeave: () => homePageVideo.pause(),
    onEnterBack: () => homePageVideo.play(),
    onLeaveBack: () => homePageVideo.pause(),
  });
}

function webmockups() {
  const sectionContainer = document.querySelector("#webpage-mockups");

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

/* Inspired by GSAP Official:
https://codepen.io/GreenSock/pen/LYvEYGj*/

function stackedCards() {
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
}

function mobilemockups() {
  const sectionContainer = document.querySelector("#sjöstugan-mobile-mockups");
  const imageContainer = document.querySelectorAll(".mobile-img-container");

  gsap.fromTo(
    imageContainer,
    {
      scale: 1.2,
      autoAlpha: 0,
    },
    {
      scale: 1,
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
  const sectionContainer = document.querySelector("#project-outcome");

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
