import React, { Component } from "react";
import Soundpad from "../components/Soundpad/Soundpad";
import "./DrumMachine.scss";
import sounds from "../assets/sounds/sounds";

class DrumMachine extends Component {
    state = {
        clap: {
            id: "clap",
            hotkey: "Q",
            source: sounds.clap,
            keyCode: 81,
            active: false
        },
        clave: {
            id: "clave",
            hotkey: "W",
            source: sounds.clave,
            keyCode: 87,
            active: false
        },
        closedhat: {
            id: "closedhat",
            hotkey: "E",
            source: sounds.closedHat,
            keyCode: 69,
            active: false
        },
        kick_01: {
            id: "kick_01",
            hotkey: "A",
            source: sounds.kick01,
            keyCode: 65,
            active: false
        },
        kick_03: {
            id: "kick_03",
            hotkey: "S",
            source: sounds.kick03,
            keyCode: 83,
            active: false
        },
        kick_11: {
            id: "kick_11",
            hotkey: "D",
            source: sounds.kick11,
            keyCode: 68,
            active: false
        },
        rimshot: {
            id: "rimshot",
            hotkey: "Z",
            source: sounds.rimshot,
            keyCode: 90,
            active: false
        },
        snare: {
            id: "snare",
            hotkey: "X",
            source: sounds.snare,
            keyCode: 88,
            active: false
        },
        tom: {
            id: "tom",
            hotkey: "C",
            source: sounds.tom,
            keyCode: 67,
            active: false
        },
        display: "TR808 Beats"
    };

    componentDidMount() {
        document.addEventListener("keydown", this.keyPressedHandler);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyPressedHandler);
    }

    playSoundHandler = (el, key) => {
        const sound = new Audio(el.source);
        this.bounceAnimationHandler(key);
        this.updateDisplayHandler(key);
        setTimeout(() => {
            this.bounceAnimationHandler(key);
        }, 100);
        return sound.play();
    };

    keyPressedHandler = el => {
        Object.entries(this.state).map(([key, value]) => {
            if (el.keyCode === value.keyCode) {
                return this.playSoundHandler(value, key);
            } else {
                return null;
            }
        });
    };

    bounceAnimationHandler = key => {
        let data = { ...this.state[key] };
        data.active ? (data.active = false) : (data.active = true);
        this.setState({ [key]: data });
    };

    updateDisplayHandler = key => {
        let display = key.replace("_", " ");
        this.setState({ display: display });
    };

    render() {
        const soundpads = Object.entries(this.state).map(([key, value]) => {
            if (value !== this.state.display) {
                return (
                    <Soundpad
                        key={key}
                        id={value.id}
                        hotkey={value.hotkey}
                        bounce={value.active}
                        playSound={() => this.playSoundHandler(value, key)}
                        keyPress={this.keyPressed}
                    />
                );
            } else {
                return null;
            }
        });
        return (
            <div id="drum-machine">
                <div id="display">
                    <p>{this.state.display}</p>
                </div>
                <div className="Wrapper">{soundpads}</div>
            </div>
        );
    }
}

export default DrumMachine;
