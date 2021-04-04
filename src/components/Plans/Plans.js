import useEffect from "react";
import aos from "aos";


import tick from "../../assets/icons/tick.svg";
import tickDark from "../../assets/icons/tickDark.svg";
import xMark from "../../assets/icons/xMark.svg";


import "./Plans.scss";

const Plans = () => {
    return (
        <section className="plans flex" id="pricing">

            <h2>Get your plan</h2>

            <div className="offer flex">

                <div className="plan flex">
                    <h3>Free</h3>
                    <h4>0$/month</h4>

                    <ul>
                        <li><img src={tick} alt="tick" />Standard quality sound</li>
                        <li className="unavailable"> <img src={xMark} alt="tick" />No ads</li>
                        <li className="unavailable"> <img src={xMark} alt="tick" />Unlimited skips</li>
                        <li className="unavailable"><img src={xMark} alt="tick" />Offline mode</li>
                    </ul>

                    <button>Pick</button>

                </div>

                <div className="plan vip flex">
                    <h3>VIP</h3>
                    <h4>10$/month</h4>

                    <ul>
                        <li><img src={tickDark} alt="tick" />Best quality sound</li>
                        <li><img src={tickDark} alt="tick" />No ads</li>
                        <li><img src={tickDark} alt="tick" />Unlimited skips</li>
                        <li><img src={tickDark} alt="tick" />Offline mode</li>
                    </ul>

                    <button>Pick</button>

                </div>

                <div className="plan flex">
                    <h3>Standard</h3>
                    <h4>5$/month</h4>

                    <ul>
                        <li><img src={tick} alt="tick" />Very good quality sound</li>
                        <li><img src={tick} alt="tick" />No ads</li>
                        <li><img src={tick} alt="tick" />Unlimited skips</li>
                        <li className="unavailable"> <img src={xMark} alt="tick" />Offline mode</li>
                    </ul>

                    <button>Pick</button>

                </div>
            </div>
        </section>
    )
}

export default Plans;