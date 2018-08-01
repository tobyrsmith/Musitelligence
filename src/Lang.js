/* eslint-disable */
export const major_scale = [2, 4, 5, 7, 9, 11, 12];
export const minor_scale = [2, 3, 5, 7, 8, 10, 12];
export const Harmonic_Minor_scale = [2, 3, 5, 7, 8, 11, 12];
export const Melodic_Minor_scale = [2, 3, 5, 7, 9, 11, 12];
export const Ionian_scale = major_scale;
export const Dorian_scale = [2, 3, 5, 7, 9, 10, 12];
export const Phrygian_scale = [1, 3, 5, 7, 8, 10, 12];
export const Lydian_scale = [2, 4, 6, 7, 9, 11, 12];
export const Mixolydian_scale = [2, 4, 5, 7, 9, 10, 12];
export const Aeolian_scale = [2, 3, 5, 7, 8, 10, 12];
export const Locrian_scale = [1, 3, 5, 6, 8, 10, 12];
export const Major_pentatonic_scale = [2, 4, 7, 9, 12];
export const Minor_pentatonic_scale = [3, 5, 7, 10, 12];
export const Blues_scale = [3, 5, 6, 7, 10, 12];
export const Whole_tone_scale = [2, 4, 6, 8, 10, 12];
export const Whole_Half_Diminished = [2, 3, 5, 6, 8, 9, 11, 12];
export const Half_Whole_Diminished = [1, 3, 4, 6, 7, 9, 10, 12];

export const scale_intervals = ['unison', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'nineth', 'tenth', 'eleventh'];
export const scales = ['Major', 'Minor', 'harmonic Minor', 'Melodic Minor', 'Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian', 'Major Pentatonic', 'Minor Pentatonic', 'Whole Tone', 'Whole Half Diminished', 'Half Whole Diminished'];

export const major_chord = [4, 7];

export const semitone = Math.pow(2, 1 / 12);

export const circle_of_fifths = ['C', 'G', 'D', 'A', 'E', 'B', 'F#'];
export const circle_of_fourths = ['F', 'Bb']

export const notes = {
    '#': ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
    'b': ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
};

export function firstToUpper() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

export const add = (a, b) => a + b;

function toString(data) {
    let formatted_data = "";
    for (let i = 0; i < data.length - 1; ++i)
        formatted_data += data[i] + ', ';
    formatted_data += data[data.length - 1];
    return formatted_data;
}

export class MusicalPattern {
    constructor(tonic, pattern) {
        this.tonic = new Note(tonic);
        this.pattern = pattern;
        this.notes = [tonic];
        for (let i of pattern) {
            this.notes.push(this.tonic.getInterval(i));
        }
    }
    getNotes() {
        return toString(this.notes);
    }
    getInterval(interval) {
        return this.tonic.getInterval(this.formula[interval - 2]);
    }
}

export class DiatonicScale extends MusicalPattern {
    constructor(tonic, formula) {
        super(tonic, formula);
        this.chords = [];
    }
    getChord(chord) {

    }
}

export class Note {
    constructor(note = 'A', octave = 3) {
        note = ((notes["#"].indexOf(note) < 0 && notes.b.indexOf(note) < 0) ? 'A' : note); //validate input"
        this.octave = octave;
        this.lang = notes['b'].indexOf(note) > -1 ? 'b' : '#';
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
        let scale = [this.note];
        for (let i of major_scale) {
            scale.push(this.getInterval(i));
        }
        return toString(scale);
    }
    toString() {
        return "{Note: " + this.note +
            ", Octave: " + this.octave + "}";
    }
}