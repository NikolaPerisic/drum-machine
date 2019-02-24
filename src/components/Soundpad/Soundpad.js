import React from "react";
import "./Soundpad.scss";

const soundpad = props => {
    return (
        <div className="Wrapper" id="wrapper">
            <div
                onClick={props.playSound}
                onKeyDown={props.keyPress}
                tabIndex="0"
                id={props.id}
            >
                {props.hotkey}
                {/* <audio src={props.sound} /> */}
            </div>
        </div>
    );
};

export default soundpad;
