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
export class Measure {
    constructor(rhythm) {
        this.rhythm = rhythm
    }
}

let r = new Rhythm(80, "24")
