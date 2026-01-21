"use client";
import Lenis from "lenis";
import { useEffect } from "react";

const LensiScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Scroll speed (seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      touchMultiplier: 2,
      wheelMultiplier: 1,
      lerp: 0.1, // Adjust lerp for smoother mobile experience
      infinite: false,
    });

    // Sync scroll with Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => cancelAnimationFrame(raf);
  }, []);
  return <>{children}</>;
};

export default LensiScroll;
