const major_scale = [2, 2, 1, 2, 2, 2, 1];
const minor_scale = [2, 1, 2, 2, 1, 2, 2];
const Minor_pentatonic_scale = [3, 2, 2, 3, 2];
const Blues_scale = [3, 2, 1, 1, 3, 2];
const Major_pentatonic_scale = [2, 2, 3, 2, 3];
const Harmonic_Minor_scale = [2, 1, 2, 2, 1, 3, 1];
const Melodic_Minor_scale = [2, 1, 2, 2, 2, 2, 1];
const Ionian_scale = [2, 2, 1, 2, 2, 2, 1];
const Dorian_scale = [2, 1, 2, 2, 2, 1, 2];
const Phrygian_scale = [1, 2, 2, 2, 1, 2, 2];
const Lydian_scale = [2, 2, 2, 1, 2, 2, 1];
const Mixolydian_scale = [2, 2, 1, 2, 2, 1, 2];
const Aeolian_scale = [2, 1, 2, 2, 1, 2, 2];
const Locrian_scale = [1, 2, 2, 1, 2, 2, 2];
const Whole_tone_scale = [2, 2, 2, 2, 2, 2];
const Whole_Half_Diminished = [2, 1, 2, 1, 2, 1, 2, 1];
const Half_Whole_Diminished = [1, 2, 1, 2, 1, 2, 1, 2];

const scale_intervals = ['unison', 'second', 'third'];

const major_chord = [4, 7];

const semitone = Math.pow(2, 1 / 12);

const notes = {
    '#': ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
    'b': ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
};

export class Scale {
    constructor(tonic, formula) {
        this.tonic = new Note(tonic);
        this.formula = formula;
        let interval = 0;
        this.notes = [tonic];
        for (let i of formula) {
            interval += i;
            this.notes.push(this.tonic.getInterval(interval));
        }
    }
    getNotes() {
        return toString(this.notes);
    }
    unison() {
        return this.tonic.getInterval(0);
    }
    second() {
        return this.tonic.getInterval(this.formula[0]);
    }
    third() {
        return this.tonic.getInterval(this.formula[2]);
    }
    fourth() {
        return this.tonic.getInterval(this.formula[3]);
    }
    fifth() {
        return this.tonic.getInterval(this.formula[4]);
    }
    sixth() {
        return this.tonic.getInterval(this.formula[5]);
    }
    seventh() {
        return this.tonic.getInterval(this.formula[6]);
    }
    eighth() {
        return this.tonic.getInterval(this.formula[7]);
    }
}

function toString(data) {
    let formatted_data = "";
    for (let i of data)
        formatted_data += i + ', ';
    return formatted_data;
}

export class Note {
    constructor(note = 'A', octave = 3) {
        this.octave = octave;

        if (note.indexOf('#') > 0)
            this.lang = 'b';
        else
            this.lang = '#';
        this.index = notes[this.lang].indexOf(note);
        this.note = note;
    }
    frequency() {
        let octave_interval = this.octave - 4; //calculate octave difference
        return Math.pow(semitone, (this.index - 9) + octave_interval * 12) * 440;
    }

    getInterval(interval) {
        return notes[this.lang][(this.index + interval) % 12];
    }
    getMajorChord() {
        let chord = [this.note];
        for (let i of major_chord)
            chord.push(this.getInterval(i));
        return chord;
    }
    getMajorScale() {
        let interval = 0;
        let scale = [this.note];
        for (let i of major_scale) {
            interval += i;
            scale.push(this.getInterval(interval));
        }
        return toString(scale);
    }
}

// let a = new Note('A', '5');
// console.log(a.frequency(), a.getMajorChord(), (new Note('C', '3')).getMajorScale());
// console.log((new Note('C', '3')).getMajorScale());