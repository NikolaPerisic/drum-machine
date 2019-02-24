import React, { Component } from "react";
import Soundpad from "../components/Soundpad/Soundpad";
import "./DrumMachine.scss";
import data from "../assets/Data/Data";

class DrumMachine extends Component {
	state = {
		data: [...data]
	};
	componentDidMount() {
		console.log("componentDidMount");
		document.getElementById("clap").focus();
	}

	playSound = el => {
		const sound = new Audio(el);
		return sound.play();
	};
	keyPressed = el => {
		console.log(el.keyCode);
		this.state.data.map(item => {
			if (el.keyCode === item.keyCode) {
				return this.playSound(item.source);
			}
			return null;
		});
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
					playSound={() => this.playSound(el.source)}
					keyPress={this.keyPressed}
				/>
			);
		});
		return <div className="GridWrapper">{instruments}</div>;
	}
}

export default DrumMachine;
