import React from "react";
import "./Soundpad.scss";

const soundpad = props => {
    const activated = props.bounce
        ? {
              backgroundColor: "#FFEE58",
              animationName: "bounce",
              animationDuration: "100ms",
              borderRadius: "50%",
              border: "1px solid black"
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
            </div>
        </div>
    );
};

export default soundpad;
