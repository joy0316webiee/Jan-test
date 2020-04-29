import React from "react";

// icons
import { BellIcon, HamburgerIcon } from "../Icons";

// assets
import ImgProfile from "../../static/images/profile.png";

// styles
import "./styles.scss";

const Navbar = () => (
  <div className="navbar-container">
    <ul className="left-menu">
      <li>Browse</li>
      <li>How it works</li>
      <li>Help</li>
      <li>About</li>
    </ul>
    <ul className="right-menu">
      <li className="profile">
        <img src={ImgProfile} alt="profile" />
        <span>Alex Birdsman</span>
      </li>
      <li className="bell">
        <BellIcon />
        <span>2</span>
      </li>
      <li className="hamburger">
        <HamburgerIcon />
      </li>
    </ul>
  </div>
);

export default Navbar;
