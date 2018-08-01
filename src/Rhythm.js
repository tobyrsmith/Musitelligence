class Bar {
    constructor() {

    }
}

class Rhythm {
    constructor(bpm, time_signature) {
        this.bpm = bpm;
        this.beats_per_measure = time_signature[0];
        this.beat_length = time_signature[1];
    }
}

function g() {
    let s = new Audio("song.wav");
    setInterval(function() {
        if (lastPlay != "1") {
            s.play();
            lastPlay = "1";
        } else if (lastPlay != "0") {
            s.play();
            lastPlay = "0";
        }
    }, 1000);
}

class Measure {
    constructor(rhythm) {
        this.rhythm = rhythm;
    }
}

let r = new Rhythm(80, "24");