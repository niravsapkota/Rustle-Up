import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Header() {
  return (
    <footer className="app__footer">
      <Link style={{ color: "inherit", textDecoration: "inherit" }} to="/">
        <span className="app__footer-logo">
          Rustle<span className="app__footer-logopart">Up</span>
        </span>
      </Link>
      <div className="app_social-pages">
        <a href="#">
          <FaFacebook size={35} />
        </a>
        <a href="#">
          <FaTwitter size={35} />
        </a>
        <a href="#">
          <FaInstagram size={35} />
        </a>
      </div>
      <h7 className="app__footer-support">For Support:help@rustleup.com</h7>
      <h7 className="app__end-statement">
        2022 Rustle Up. All Rights Reserved
      </h7>
    </footer>
  );
}
