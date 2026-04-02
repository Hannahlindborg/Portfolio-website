export function initAlbumProject() {
  collectionmockup();
  albumcovers();
}

function collectionmockup() {
  const sectionContainer = document.querySelector("#album-set-container");
  const albumCover = document.querySelector("#collection-cover");

  gsap.fromTo(
    albumCover,
    {
      scale: 1.1,
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

function albumcovers() {
  const imageContainerLeft = document.querySelectorAll(
    ".coverimage-container-left",
  );
  const imageContainerRight = document.querySelectorAll(
    ".coverimage-container-right",
  );

  imageContainerLeft.forEach((cover) => {
    gsap.fromTo(
      imageContainerLeft,
      {
        x: -50,
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cover,
          start: "top 80%",
          once: true,
        },
      },
    );
  });
  imageContainerRight.forEach((cover) => {
    gsap.fromTo(
      imageContainerRight,
      {
        x: +50,
        opacity: 0,
        autoAlpha: 0,
      },
      {
        x: 0,
        opacity: 1,
        autoAlpha: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cover,
          start: "top 80%",
          once: true,
        },
      },
    );
  });
}
