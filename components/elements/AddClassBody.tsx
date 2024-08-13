"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AddClassBody() {
  const pathname = usePathname();

  useEffect(() => {
    const bodyElement = document.querySelector("body") as HTMLElement | null;

    if (bodyElement) {
      // Remove all classes related to home and other pages
      bodyElement.classList.remove("home", "home-2", "home-3", "markets");

      // Add class based on pathname
      switch (pathname) {
        case "/home":
          bodyElement.classList.add("home");
          break;
        case "/home-v2":
          bodyElement.classList.add("home-2");
          break;
        case "/home-v3":
          bodyElement.classList.add("home-3");
          break;
        case "/markets":
          bodyElement.classList.add("markets", "home-2"); // Assuming 'home-2' should still be added with 'markets'
          break;
        default:
          break;
      }
    }
  }, [pathname]);

  return null;
}
