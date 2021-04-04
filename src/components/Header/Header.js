import "./Header.scss";

import { React, useState } from "react";

import fullLogo from "../../assets/icons/fullLogo.svg";
import hamburger from "../../assets/icons/hamburger.svg";
import xMenu from "../../assets/icons/xMenu.svg";


const Header = () => {
  const [state, setState] = useState();

  const setShow = () => {
    setState("show");
  };

  const setHide = () => {
    setState("hide");
  };

  const styles = {
    animationName: state,
  };

  return (
    <>
      <header className="header flex">
        
        <a href="/">
          <img src={fullLogo} alt="logo" className="fullLogo" />
        </a>

        <img
          src={hamburger}
          alt="logo"
          className="hamburger"
          onClick={setShow}
        />
      </header>

      <nav className="navigation" style={styles}>
        <ul>
          <div className="space flex">
            <img
              src={xMenu}
              alt="hide menu"
              className="xMenu"
              onClick={setHide}
            />
          </div>

          <li onClick={setHide}>
            <a href="#start">Start</a>
          </li>

          <li onClick={setHide}>
            <a href="#explore">Explore</a>
          </li>

          <li onClick={setHide}>
            <a href="#pricing">Pricing</a>
          </li>

          <li onClick={setHide}>
            <a href="#join">Join</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
