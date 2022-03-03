import React from "react";
import Logo from "./Logo";
import fb_logo from "../assets/Facebook.png";
import twitter_logo from "../assets/Twitter.png";
import insta_logo from "../assets/Instagram.png";

export default function Header() {
  return (
    <footer className="app__footer">
      <Logo />
      <div className="app_social-pages">
        <a href="#">
          <img src={fb_logo} />
        </a>
        <a href="#">
          <img src={twitter_logo} />
        </a>
        <a href="#">
          <img src={insta_logo} />
        </a>
      </div>
      <h7>For Support:help@rustleup.com</h7>
      <h7 className="app__end-statement">
        2022 Rustle Up. All Rights Reserved
      </h7>
    </footer>
  );
}
