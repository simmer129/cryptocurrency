"use client";
import { useEffect, useState, ReactNode } from "react";
import AddClassBody from "../elements/AddClassBody";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import Footer from "./footer/Footer"; // Assuming you have a single Footer component
import Header from "./header/Header"; // Assuming you have a single Header component
import AOS from "aos";

// Define the types for the props
interface LayoutProps {
  breadcrumbTitle?: string; // Optional, defaults to undefined if not provided
  children: ReactNode; // Children prop to render nested components
}

export default function Layout({ breadcrumbTitle, children }: LayoutProps) {
  const [scroll, setScroll] = useState<boolean>(false);
  // Mobile Menu
  const [isMobileMenu, setMobileMenu] = useState<boolean>(false);

  const handleMobileMenu = () => setMobileMenu(!isMobileMenu);

  useEffect(() => {
    AOS.init();
    const handleScroll = () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => document.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  return (
    <>
      <div id="top" />
      <AddClassBody />
      <Header
        scroll={scroll}
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />

      {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

      {children}

      <Footer />

      <BackToTop target="#top" />
    </>
  );
}
