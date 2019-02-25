import React from "react";
import "./Soundpad.scss";

const soundpad = props => {
    const activated = props.bounce
        ? {
              backgroundColor: "#FFEE58",
              animationName: "bounce",
              animationDuration: "100ms",
              borderRadius: "50%"
          }
        : null;
    return (
        <div className="Soundpads">
            <div
                onClick={props.playSound}
                onKeyDown={props.keyPress}
                tabIndex="0"
                id={props.id}
                className="drum-pad"
                style={activated}
            >
                <p>{props.hotkey}</p>
                {/* <audio src={props.sound} /> */}
            </div>
        </div>
    );
};

export default soundpad;
