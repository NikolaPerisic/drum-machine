import sounds from "../sounds/sounds";

const sound = [
    {
        id: "clap",
        hotkey: "Q",
        source: sounds.clap,
        keyCode: 81,
        active: false
    },
    {
        id: "clave",
        hotkey: "W",
        source: sounds.clave,
        keyCode: 87,
        active: false
    },
    {
        id: "closedhat",
        hotkey: "E",
        source: sounds.closedHat,
        keyCode: 69,
        active: false
    },
    {
        id: "kick_01",
        hotkey: "A",
        source: sounds.kick01,
        keyCode: 65,
        active: false
    },
    {
        id: "kick_03",
        hotkey: "S",
        source: sounds.kick03,
        keyCode: 83,
        active: false
    },
    {
        id: "kick_11",
        hotkey: "D",
        source: sounds.kick11,
        keyCode: 68,
        active: false
    },
    {
        id: "rimshot",
        hotkey: "Z",
        source: sounds.rimshot,
        keyCode: 90,
        active: false
    },
    {
        id: "snare",
        hotkey: "X",
        source: sounds.snare,
        keyCode: 88,
        active: false
    },
    {
        id: "tom",
        hotkey: "C",
        source: sounds.tom,
        keyCode: 67,
        active: false
    }
];
export default sound;
