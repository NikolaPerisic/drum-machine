import sounds from "../sounds/sounds";

const sound = {
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
    closethat: {
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
    }
};
export default sound;
