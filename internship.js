export function initInternshipProjects() {
  let mm = gsap.matchMedia();

  mm.add("(min-width: 769px)", () => {
    responsibilities();
    skills();
    takeaways();
  });
}

function responsibilities() {
  const sectionContainer = document.querySelector("#responsibilities");
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

function skills() {
  const sectionContainer = document.querySelector("#skills");
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

function takeaways() {
  const sectionContainer = document.querySelector("#internship-takeaways");
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
