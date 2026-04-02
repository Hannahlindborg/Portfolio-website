export function initBookingSystemProject() {
  problems();
  bookingform();
}

function problems() {
  const sectionContainer = document.querySelector(
    "#management-problem-section",
  );
  const needsContainer = document.querySelectorAll(".problem");
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

function bookingform() {
  const sectionContainer = document.querySelector("#system-architecture");
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
