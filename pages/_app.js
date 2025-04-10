import "@/styles/globals.scss";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.config({ trialWarn: false });
export default function App({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    if (!isClient) return;
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger, SplitText);
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      function setupSplits() {
        const targets = document.querySelectorAll('h2');
        if (!targets.length) {
          setTimeout(setupSplits, 1000);
          return;
        }
        targets.forEach((target) => {
          let splitHeading = new SplitText(target, { type: "words, chars" });
          let chars = splitHeading.chars;
          gsap.from(chars, {
            duration: 0.9,
            autoAlpha: 0,
            stagger: 0.021,
            ease: "circ.out",
            yPercent: 20,
            scrollTrigger: {
                // start: 'top 100%',
                trigger: target,
                markers: false
            }
        }); 
        });
        ScrollTrigger.refresh(); 
      }
      setTimeout(setupSplits, 1000);
      lenis.on("scroll", ScrollTrigger.update);
    }
  }, [isClient]);
  return <Component {...pageProps} />;
}
