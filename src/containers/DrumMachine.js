import React, { Component } from "react";
import Soundpad from "../components/Soundpad/Soundpad";
import "./DrumMachine.scss";
import data from "../assets/Data/Data";

class DrumMachine extends Component {
	state = {
		data: [...data]
	};

	render() {
		const instruments = this.state.data.map((el, index) => {
			return (
				<Soundpad
					key={index}
					id={el.id}
					hotkey={el.hotkey}
					keyCode={el.keyCode}
					sound={el.source}
				/>
			);
		});
		return <div className="GridWrapper">{instruments}</div>;
	}
}

export default DrumMachine;
