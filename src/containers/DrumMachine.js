import React, { Component } from "react";
import Soundpad from "../components/Soundpad/Soundpad";
import "./DrumMachine.scss";
import data from "../assets/Data/Data";

class DrumMachine extends Component {
    state = {
        data: [...data]
    };
    componentDidMount() {
        document.addEventListener("keydown", this.keyPressedHandler);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyPressedHandler);
    }
    playSoundHandler = el => {
        const sound = new Audio(el);
        return sound.play();
    };
    keyPressedHandler = el => {
        console.log(el.keyCode);
        this.state.data.map(item => {
            if (el.keyCode === item.keyCode) {
                return this.playSoundHandler(item.source);
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
                    sound={el.source}
                    playSound={() => this.playSoundHandler(el.source)}
                    keyPress={this.keyPressed}
                />
            );
        });
        return <div className="GridWrapper">{instruments}</div>;
    }
}

export default DrumMachine;
