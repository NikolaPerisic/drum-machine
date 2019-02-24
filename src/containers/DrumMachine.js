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
					sound={el.source}
					keyCode={el.keyCode}
				/>
			);
		});
		return <div className="GridWrapper">{instruments}</div>;
	}
}

export default DrumMachine;
