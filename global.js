//Swup

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(
    SplitText,
    ScrollToPlugin,
    ScrollTrigger,
    ScrollSmoother,
    ScrambleTextPlugin,
    Flip,
  );
});

//gsap.registerPlugin(Flip);

//import Swup from "https://unpkg.com/swup@4?module";
import { initSjöstuganProject } from "./sjöstugan.js";
import { initWorkPage } from "./work.js";
import { initAboutPage } from "./about.js";
import { initSunshakeProject } from "./sunshake.js";
import { initAlbumProject } from "./albumproject.js";
import { initInternshipProjects } from "./internship.js";
import { initBookingSystemProject } from "./bookingsystem.js";

/*const swup = new Swup({
  containers: ["#swup"],
  plugins: [
    new window.SwupParallelPlugin(),
    new window.SwupHeadPlugin(),
    new window.SwupPreloadPlugin({ preloadVisibleLinks: true }),
  ],
});

let flipState = null;

swup.hooks.on("visit:start", () => {
  const state = Flip.getState("[data-flip-id='project-thumbnail']");

  if (state) {
    flipState = Flip.getState(state);
  }
});

swup.hooks.on("content:replace", () => {
  const target = document.querySelector("[data-flip-id='project-showcase']");

  if (flipState && target)
    Flip.from(flipState, {
      duration: 1,
      ease: "power1.inOut",
      absolute: true,
      onComplete: () => {
        flipState = null;
      },
    });
});*/

async function onPageLoad() {
  if (ctx) ctx.revert();

  ctx = gsap.context(async () => {
    runPageScript();
  });
}

let ctx;
onPageLoad();

function runPageScript() {
  if (
    window.location.pathname === "/" ||
    window.location.pathname.includes("index.html")
  ) {
    initWorkPage();
  } else if (window.location.pathname.includes("about.html")) {
    initAboutPage();
  } else if (window.location.pathname.includes("stugan")) {
    initSjöstuganProject();
  } else if (window.location.pathname.includes("sunshake.html")) {
    initSunshakeProject();
  } else if (window.location.pathname.includes("albumproject.html")) {
    initAlbumProject();
  } else if (window.location.pathname.includes("bookingsystem.html")) {
    initBookingSystemProject();
  } else if (window.location.pathname.includes("internship.html")) {
    initInternshipProjects();
  }
}

ScrollSmoother.create({
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});
