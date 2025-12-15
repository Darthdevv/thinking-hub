import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Wait until the DOM is fully rendered
    const handleScroll = () => {
      if (!hash) {
        // Normal route, scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      // If hash exists, we skip here (HashLink handles it)
    };

    // Use requestAnimationFrame to wait for render
    requestAnimationFrame(() => {
      requestAnimationFrame(handleScroll);
    });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
