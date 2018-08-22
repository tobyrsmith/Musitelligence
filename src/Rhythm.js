export class Bar {
    constructor() {

    }
}

export class Rhythm {
    constructor(bpm, time_signature) {
        this.bpm = bpm
        this.beats_per_measure = time_signature[0]
        this.beat_length = time_signature[1]
    }
}
let lastPlay = "0"
export function g() {
    let s = new Audio("/home/seanitzel/Documents/Programming/Musitelligence");
    let pl = s.play()
    setInterval(function() {
        if (lastPlay != "1") {
            if (pl !== undefined) {
                pl.then(function() {
                }).catch(function(error) {
                  console.log("failed to play");
                });
            }
            lastPlay = "1";
        } else if (lastPlay != "0") {
            if (pl !== undefined) {
                pl.then(function() {
                }).catch(function(error) {
                  console.log("failed to play");
                });
            }
            lastPlay = "0";
        }
    }, 1000);
} 


export class Measure {
    constructor(rhythm) {
        this.rhythm = rhythm
    }
}

let r = new Rhythm(80, "24")