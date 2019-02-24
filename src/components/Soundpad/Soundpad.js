import React from "react";
import "./Soundpad.scss";

const soundpad = props => {
	const myRef = React.createRef();

	return (
		<div className="Wrapper">
			<div
				onClick={props.playSound}
				onKeyDown={props.keyPress}
				tabIndex="0"
				id={props.id}
			>
				{props.hotkey}
				<audio ref={myRef} src={props.sound} />
			</div>
		</div>
	);
};

export default soundpad;
