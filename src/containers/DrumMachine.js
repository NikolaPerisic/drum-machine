import React, { Component } from "react";
import Soundpad from "../components/Soundpad/Soundpad";
import classes from "./DrumMachine.module.css";

class DrumMachine extends Component {
	state = {
		id: "",
		hotkey: "",
		source: ""
	};
	render() {
		return (
			<div className={classes.GridWrapper}>
				<Soundpad />
				<Soundpad />
				<Soundpad />
				<Soundpad />
				<Soundpad />
				<Soundpad />
				<Soundpad />
				<Soundpad />
				<Soundpad />
			</div>
		);
	}
}

export default DrumMachine;
