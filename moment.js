export function initMomentProject() {
  let mm = gsap.matchMedia();

  mm.add("(min-width: 769px)", () => {
    identitySection();
    colorpalette();
    tiktokads();
    mobilemockups();
    outcomesection();
    initVideoPlaying();
  });

  mm.add("max-width: 768px", () => {
    initVideoPlaying();
  });
}

function identitySection() {
  const sectionContainer = document.querySelector("#brandidentity-section");
  const identityContainer = document.querySelector("#identity-grid");

  gsap.fromTo(
    identityContainer,
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

function colorpalette() {
  const sectionContainer = document.querySelector("#color-section");
  const imageContainer = document.querySelectorAll(".color-img-container");

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

function tiktokads() {
  const sectionContainer = document.querySelector("#social-ad-section");
  const imageContainer = document.querySelectorAll(".tiktok-ad-container");

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

function initVideoPlaying() {
  const sectionContainer = document.querySelector("#social-video-section");
  const homePageVideo = document.querySelector("#social-video");

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
