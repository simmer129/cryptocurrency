"use client";
import { useEffect, useState } from "react";

// Define the type for the props
interface BackToTopProps {
  target: string;
}

export default function BackToTop({ target }: BackToTopProps) {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const element = document.querySelector(target) as HTMLElement;
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {hasScrolled && (
        <button className="btn btn-primary" onClick={handleClick}>
          Back to top
        </button>
      )}
    </>
  );
}
