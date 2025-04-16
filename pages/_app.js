import "@/styles/globals.scss";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.config({ trialWarn: false });
export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    const setupSplits = () => {
      const targets = document.querySelectorAll("h2");
      targets.forEach((target) => {
        const split = new SplitText(target, { type: "words, chars" });
        const chars = split.chars;
        gsap.from(chars, {
          scrollTrigger: {
            trigger: target,
            start: "top bottom",
            toggleActions: "play none none none",
            markers: false,
          },
          duration: 0.6,
          autoAlpha: 0,
          ease: "circ.out",
          yPercent: 20,
          stagger: 0.025,
        });
      });
      ScrollTrigger.refresh();
    };
    setTimeout(setupSplits, 100);
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return <Component {...pageProps} />;
}
