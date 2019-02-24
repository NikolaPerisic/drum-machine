import React from "react";
import "./Soundpad.scss";

const soundpad = props => {
	const myRef = React.createRef();
	return (
		<div className="Wrapper">
			<div onClick={props.playSound}>{props.hotkey}</div>
			<audio ref={myRef} src={"../../assets/sounds/" + props.sound} autoPlay />
		</div>
	);
};

export default soundpad;
