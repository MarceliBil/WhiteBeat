import phonePreview from "../../assets/images/phonePreview.svg";

import "./Explore.scss";

const Explore = () => {


    const first = { color: '#8C4CA0' },
        second = { color: '#101010'},
        third = { color: '#F95C8B'}

    return (
        <section className="explore flex" id="explore">
            <img src={phonePreview} alt="phonePreview" className="phonePreview" />

            <ul className="features">
                <li style={first}>Songs</li>
                <li style={second}>Albums</li>
                <li style={third}>Playlists</li>
            </ul>
        </section>
    )
}

export default Explore;