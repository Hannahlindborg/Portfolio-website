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
  });

  onPageLoad();
}

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

window.addEventListener("load", () => {
  initAll();
});
