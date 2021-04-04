import { React, useState } from "react";

import ToggleDisplay from "react-toggle-element";

import facebookIcon from "../../assets/icons/facebookIcon.svg";
import twitterIcon from "../../assets/icons/twitterIcon.svg";
import ellipse3 from "../../assets/images/ellipse3.svg";

import "./Join.scss";

const Join = () => {
  const [state, setState] = useState("show");

  const handleClick = () => {
    setState({
      show: !state.show,
    });
  };
  return (
    <section className="join flex" id="join">
      <div className="joinContnet flex">
        <div className="slogan">
          <h2>Join now</h2>
          <h3>Join WhiteBeat and discover the wonderful world of music.</h3>
        </div>


        <ToggleDisplay if={!state.show} className="toggle">
          <form className="register flex" action="#0">
            <h4>New account</h4>
            <input type="email" required placeholder="email adress.." />
            <input type="password" required placeholder="password..." />

            <div className="regulations flex">
              <span className="flex">
                {" "}
                <input
                  type="checkbox"
                  name=""
                  id="accept"
                  className="checkbox"
                  required
                />
                <p>
                  I accept the WhiteBeat <u>regulations</u>{" "}
                </p>
              </span>
            </div>

            <div className="submit flex">
              <button>sign up</button> or <u onClick={handleClick}>
                log in</u>
            </div>
          </form>
        </ToggleDisplay>

        <ToggleDisplay show={!!state.show} className="toggle">
          <form className="login flex" action="#0">
            <h4>Log in</h4>
            <input type="email" required placeholder="email adress.." />
            <input type="password" required placeholder="password..." />

            <span className="remember flex">
              <input type="checkbox" name="" id="" className="checkbox" required />

              <p>remember me</p>
            </span>

            <p className="forgot">Forgot your password?</p>

            <div className="submit flex">
              <button>log in</button> or <u onClick={handleClick}>sign up </u>
            </div>
          </form>


        </ToggleDisplay>


      </div>

      <footer className="footer flex">
        <div className="socialIcons">
          <a href="#0">
            <img src={facebookIcon} alt="facebook" />
          </a>

          <a href="#0">
            <img src={twitterIcon} alt="twitter" />
          </a>
        </div>

        <p className="copyright">&copy;2021. Marceli Bil.</p>
      </footer>

      <img src={ellipse3} alt="ellipse" className="ellipse" />
    </section>
  );
};

export default Join;
