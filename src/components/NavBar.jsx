import React, { useEffect, useRef } from 'react';

function NavBar() {
  const menuIconRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const menuIcon = menuIconRef.current;
    const navbar = navbarRef.current;

    function handleMenuIconClick() {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    }

    menuIcon.addEventListener('click', handleMenuIconClick);

    return () => {
      menuIcon.removeEventListener('click', handleMenuIconClick);
    };
  }, []);

  return (
    <header className="header" id='header'>
      <a href="#home" className="logo">
        <img src="https://i.ibb.co/GFY4SVL/icon.png" alt="icon" className="img-fluid"/>
      </a>

      <i className='bx bx-menu' id="menu-icon" ref={menuIconRef}></i>

      <nav className="navbar" ref={navbarRef}>
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default NavBar;
