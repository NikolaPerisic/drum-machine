import React, { Component } from "react";
import "./App.scss";
import DrumMachine from "./containers/DrumMachine";

class App extends Component {
    render() {
        return (
            <div>
                <DrumMachine />
            </div>
        );
    }
}

export default App;
