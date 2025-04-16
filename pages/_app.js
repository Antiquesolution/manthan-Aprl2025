// pages/_app.js
import "@/styles/globals.scss";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";
import Lenis from "@studio-freight/lenis";
import { useRouter } from "next/router";
gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.config({ trialWarn: false });
export default function App({ Component, pageProps }) {
  const router = useRouter();
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
    const animateSplitText = () => {
      // Reset previously split elements
      document.querySelectorAll("h2.is-split").forEach((el) => {
        el.innerHTML = el.textContent;
        el.classList.remove("is-split");
      });
      const targets = document.querySelectorAll("h2");
      targets.forEach((target) => {
        const split = new SplitText(target, { type: "words, chars" });
        target.classList.add("is-split");
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
    setTimeout(() => requestAnimationFrame(animateSplitText), 1000);
    const handleRouteChange = () => {
      setTimeout(() => requestAnimationFrame(animateSplitText), 1000);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
