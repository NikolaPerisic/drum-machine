import React from "react";
import "./Soundpad.scss";

const soundpad = props => {
	const myRef = React.createRef();

	return (
		<div className="Wrapper">
			<div onClick={props.playSound}>
				{props.hotkey}
				<audio ref={myRef} src={props.sound} autoPlay />
			</div>
		</div>
	);
};

export default soundpad;
