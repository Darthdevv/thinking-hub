import { useEffect } from "react";
import { useLocation } from "react-router-dom";



const ScrollToHash: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const element = document.querySelector<HTMLElement>(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return null;
};

export default ScrollToHash;
