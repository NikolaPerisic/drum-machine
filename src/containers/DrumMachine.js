import React, { Component } from "react";
import Soundpad from "../components/Soundpad/Soundpad";
import "./DrumMachine.scss";
import data from "../assets/Data/Data";

class DrumMachine extends Component {
    state = {
        data: [...data],
        display: "TR808 beat monster"
    };
    componentDidMount() {
        document.addEventListener("keydown", this.keyPressedHandler);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyPressedHandler);
    }
    playSoundHandler = (el, i) => {
        const sound = new Audio(el.source);
        this.displayInstrumentHandler(el.id);
        this.bounceAnimationHandler(el, i);
        setTimeout(() => {
            this.bounceAnimationHandler(el, i);
        }, 100);
        return sound.play();
    };
    keyPressedHandler = el => {
        this.state.data.map(item => {
            if (el.keyCode === item.keyCode) {
                let index = this.state.data.indexOf(item);
                this.playSoundHandler(item, index);
                this.displayInstrumentHandler(item.id);
            }
            return null;
        });
    };
    displayInstrumentHandler = el => {
        this.setState({ display: el });
    };
    bounceAnimationHandler = (el, i) => {
        let data = [...this.state.data];
        data[i].active ? (data[i].active = false) : (data[i].active = true);
        this.setState({ data: data });
        console.log(this.state.data);
    };

    render() {
        const soundpads = this.state.data.map((el, index) => {
            return (
                <Soundpad
                    key={index}
                    id={el.id}
                    hotkey={el.hotkey}
                    sound={el.source}
                    bounce={el.active}
                    playSound={() => this.playSoundHandler(el, index)}
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
