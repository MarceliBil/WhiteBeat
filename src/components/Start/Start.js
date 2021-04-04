import "./Start.scss";

import menuBg from "../../assets/images/menuBg.svg";

const Start = () => {

  return (
    <section className="start flex" id="start">

      <img src={menuBg} alt="ellipse" className="menuBg" />

      <div className="startContent" data-aos="fade-up">
        <h1>WhiteBeat</h1>
        <h2>Your favourite music always with you.</h2>
        <a href="#join">
          <button>Join now</button>
        </a>
      </div>
    </section>
  );
};

export default Start;
