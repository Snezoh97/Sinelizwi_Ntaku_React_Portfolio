import React from "react";
import "./Footer.css";
import "boxicons/css/boxicons.min.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>
          Copyright &copy; 2023 Developed By Sinelizwi Ntaku | All Right
          Reserved.
        </p>
      </div>
      <div className="footer-iconTop">
        <a href="#home" title="Top">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
