import { initSjöstuganProject } from "./sjöstugan.js";
import { initWorkPage } from "./work.js";
import { initAboutPage } from "./about.js";
import { initSunshakeProject } from "./sunshake.js";
import { initAlbumProject } from "./albumproject.js";
import { initInternshipProjects } from "./internship.js";
import { initBookingSystemProject } from "./bookingsystem.js";

gsap.registerPlugin(
  SplitText,
  ScrollToPlugin,
  ScrollTrigger,
  ScrollSmoother,
  ScrambleTextPlugin,
  Flip,
);

let ctx;

function initAll() {
  if (ctx) ctx.revert();

  ctx = gsap.context(async () => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
      });
    });

    mm.add("(max-width: 768px)", () => {
      ScrollSmoother.create({
        smooth: 1,
        effects: false,
        smoothTouch: 0.1,
      });
    });
    runPageScript();
    ScrollTrigger.refresh();
  });
}

function runPageScript() {
  const path = window.location.pathname;
  if (path === "/" || path.includes("index.html") || path.endsWith("/")) {
    initWorkPage();
  } else if (path.includes("about.html")) {
    initAboutPage();
  } else if (path.includes("stugan")) {
    initSjöstuganProject();
  } else if (path.includes("sunshake.html")) {
    initSunshakeProject();
  } else if (path.includes("albumproject.html")) {
    initAlbumProject();
  } else if (path.includes("bookingsystem.html")) {
    initBookingSystemProject();
  } else if (path.includes("internship.html")) {
    initInternshipProjects();
  }
}

window.addEventListener("load", () => {
  initAll();
});
