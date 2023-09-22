import "./NavBar.css";
import React, { useEffect, useRef, useState } from "react";

function NavBar() {
  const menuIconRef = useRef(null);
  const navbarRef = useRef(null);
  const [activeTab, setActiveTab] = useState("home");

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

  return (
    <header className="header" id="header">
      <a href="#home" className="logo">
        <img
          src="https://i.ibb.co/GFY4SVL/icon.png"
          alt="icon"
          className="img-fluid"
        />
      </a>

      <i className="bx bx-menu" id="menu-icon" ref={menuIconRef}></i>

      <nav className="navbar" ref={navbarRef}>
        <a href="#home" className={activeTab === "home" ? "active" : ""}>
          Home
        </a>
        <a href="#about" className={activeTab === "about" ? "active" : ""}>
          About
        </a>
        <a
          href="#services"
          className={activeTab === "services" ? "active" : ""}
        >
          Services
        </a>
        <a
          href="#portfolio"
          className={activeTab === "portfolio" ? "active" : ""}
        >
          Portfolio
        </a>
        {/* <a
          href="#testimonials"
          className={activeTab === "testimonials" ? "active" : ""}
        >
          Testimonials
        </a> */}
        <a href="#contact" className={activeTab === "contact" ? "active" : ""}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default NavBar;
