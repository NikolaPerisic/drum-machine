import React, { Component } from "react";
import Soundpad from "../components/Soundpad/Soundpad";
import "./DrumMachine.scss";
import data from "../assets/Data/Data";

class DrumMachine extends Component {
    state = {
        data: [...data],
        display: ""
    };
    componentDidMount() {
        document.addEventListener("keydown", this.keyPressedHandler);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyPressedHandler);
    }
    playSoundHandler = el => {
        const sound = new Audio(el.source);
        this.displayInstrumentHandler(el.id);
        return sound.play();
    };
    keyPressedHandler = el => {
        this.state.data.map(item => {
            if (el.keyCode === item.keyCode) {
                this.playSoundHandler(item);
                this.displayInstrumentHandler(item.id);
            }
            return null;
        });
    };
    displayInstrumentHandler = el => {
        this.setState({ display: el });
    };

    render() {
        const soundpads = this.state.data.map((el, index) => {
            return (
                <Soundpad
                    key={index}
                    id={el.id}
                    hotkey={el.hotkey}
                    sound={el.source}
                    playSound={() => this.playSoundHandler(el)}
                    keyPress={this.keyPressed}
                />
            );
        });
        return (
            <div id="drum-machine">
                <div id="display">{this.state.display}</div>
                <div className="Wrapper">{soundpads}</div>
            </div>
        );
    }
}

export default DrumMachine;
