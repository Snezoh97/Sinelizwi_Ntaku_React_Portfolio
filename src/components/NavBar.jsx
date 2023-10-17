import "./NavBar.css";
import React, { useEffect, useRef, useState } from "react";
import { motion, useCycle } from "framer-motion";

function NavBar() {
  const menuIconRef = useRef(null);
  const navbarRef = useRef(null);
  const [activeTab, setActiveTab] = useState("home");
  const [isBouncing, toggleBounce] = useCycle(false, true);

  useEffect(() => {
    const menuIcon = menuIconRef.current;
    const navbar = navbarRef.current;

    function handleMenuIconClick() {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    }

    function handleMenuItemClick(event) {
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
      const target = event.target;
      setActiveTab(target.getAttribute("href").substring(1));
    }

    menuIcon.addEventListener("click", handleMenuIconClick);

    const menuItems = navbar.querySelectorAll("a");
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener("click", handleMenuItemClick);
    });

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    };

    function handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const visibleSectionId = entry.target.id;
          console.log("Visible section:", visibleSectionId);
          setActiveTab(visibleSectionId);
        }
      });
    }

    const observer = new IntersectionObserver(handleIntersection, options);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      menuIcon.removeEventListener("click", handleMenuIconClick);
      menuItems.forEach((menuItem) => {
        menuItem.removeEventListener("click", handleMenuItemClick);
      });

      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    toggleBounce();
  }, [toggleBounce]);

  return (
    <header className="header" id="header">
      <a href="#home" className="logo">
        <img
          src="https://i.ibb.co/GFY4SVL/icon.png"
          alt="icon"
          className="img-fluid"
        />
      </a>

      <motion.i
        className={`bx bx-menu ${isBouncing ? "bounce" : ""}`}
        id="menu-icon"
        ref={menuIconRef}
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      ></motion.i>

      <nav className="navbar" ref={navbarRef}>
        <motion.a
          href="#home"
          className={activeTab === "home" ? "active" : ""}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Home
        </motion.a>
        <motion.a
          href="#about"
          className={activeTab === "about" ? "active" : ""}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.a>
        <motion.a
          href="#services"
          className={activeTab === "services" ? "active" : ""}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Services
        </motion.a>
        <motion.a
          href="#portfolio"
          className={activeTab === "portfolio" ? "active" : ""}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.a>
        {/* <motion.a
          href="#testimonials"
          className={activeTab === "testimonials" ? "active" : ""}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Testimonials
        </motion.a> */}
        <motion.a
          href="#contact"
          className={activeTab === "contact" ? "active" : ""}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.a>
      </nav>
    </header>
  );
}

export default NavBar;