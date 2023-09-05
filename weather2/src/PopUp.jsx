import React from 'react';
import './weather.css';
function PopUp() {
    return (
        <div id="pop-up-container">
            {<div>
                <h2>About this location</h2>
                <span className="close-button">&#x2716;</span>
                <hr className="pop-up-line"></hr>
                <div className="map">future map</div>
                <p>Text below the map</p>
            </div>}

        </div>
    );
}

export default PopUp;
