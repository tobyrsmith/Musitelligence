export const major_scale            = [2, 4, 5, 7, 9, 11, 12];
export const minor_scale            = [2, 3, 5, 7, 8, 10, 12];
export const Harmonic_Minor_scale   = [2, 3, 5, 7, 8, 11, 12];
export const Melodic_Minor_scale    = [2, 3, 5, 7, 9, 11, 12];
export const Ionian_scale           = major_scale;
export const Dorian_scale           = [2, 3, 5, 7, 9, 10, 12];
export const Phrygian_scale         = [1, 3, 5, 7, 8, 10, 12];
export const Lydian_scale           = [2, 4, 6, 7, 9, 11, 12];
export const Mixolydian_scale       = [2, 4, 5, 7, 9, 10, 12];
export const Aeolian_scale          = [2, 3, 5, 7, 8, 10, 12];
export const Locrian_scale          = [1, 3, 5, 6, 8, 10, 12];
export const Major_pentatonic_scale = [2, 4, 7, 9, 12];
export const Minor_pentatonic_scale = [3, 5, 7, 10, 12];
export const Blues_scale            = [3, 5, 6, 7, 10, 12];
export const Whole_tone_scale       = [2, 4, 6, 8, 10, 12];
export const Whole_Half_Diminished  = [2, 3, 5, 6, 8, 9, 11, 12];
export const Half_Whole_Diminished  = [1, 3, 4, 6, 7, 9, 10, 12];
export const scale_intervals        = [
	"unison",
	"second",
	"third",
	"fourth",
	"fifth",
	"sixth",
	"seventh",
	"eighth",
	"nineth",
	"tenth",
	"eleventh"
];
export const diatonic_scales = {
	"Major"                : major_scale,
	"Minor"                : minor_scale,
	"harmonic Minor"       : Harmonic_Minor_scale,
	"Melodic Minor"        : Melodic_Minor_scale,
	"Ionian"               : Ionian_scale,
	"Dorian"               : Dorian_scale,
	"Phrygian"             : Phrygian_scale,
	"Lydian"               : Lydian_scale,
	"Mixolydian"           : Mixolydian_scale,
	"Aeolian"              : Aeolian_scale,
	"Locrian"              : Locrian_scale,
};

export const scales = {
	"Major"                : major_scale,
	"Minor"                : minor_scale,
	"harmonic Minor"       : Harmonic_Minor_scale,
	"Melodic Minor"        : Melodic_Minor_scale,
	"Ionian"               : Ionian_scale,
	"Dorian"               : Dorian_scale,
	"Phrygian"             : Phrygian_scale,
	"Lydian"               : Lydian_scale,
	"Mixolydian"           : Mixolydian_scale,
	"Aeolian"              : Aeolian_scale,
	"Locrian"              : Locrian_scale,
	"Major Pentatonic"     : Major_pentatonic_scale,
	"Minor Pentatonic"     : Minor_pentatonic_scale,
	"Whole Tone"           : Whole_tone_scale,
	"Whole Half Diminished": Whole_Half_Diminished,
	"Half Whole Diminished": Half_Whole_Diminished
};

export const major_chord = [4, 7];

export const circle_of_fifths  = ["C", "G", "D", "A", "E", "B", "F#"];
export const circle_of_fourths = ["C", "F", "Bb", "Eb", "Ab", "Db", "Gb"];
export const note_letters      = ["C", "D", "E", "F", "G", "A", "B"];
export const whole_tone_notes  = ["C", "D", "F", "G", "A"];
export const half_tone_notes   = ["E", "B"];
export const notes             = {
	"#": ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
	"b": ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]
};

export const semitone = Math.pow(2, 1 / 12);

export function firstToUpper() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

export const add = (a, b) => a + b;

function toString(data) {
	let formatted_data                                        = "";
	for (let i = 0; i < data.length - 1; ++i) formatted_data += data[i] + ", ";
		formatted_data                                       += data[data.length - 1];
	return formatted_data;
}

export class MusicalPattern {
	constructor(tonic, pattern) {
		this.tonic       = new Note(tonic);
		this.pattern     = pattern;
		this.scale_notes = [this.tonic];
		for (let j of pattern) {
			this.scale_notes.push(this.tonic.getInterval(j));
		}
	}
	getNotes() {
		return toString(this.scale_notes);
	}
	getInterval(interval) {
		return this.tonic.getInterval(this.formula[interval - 2]);
	}
}

export class DiatonicScale extends MusicalPattern {
	constructor(tonic, formula) {
		super(tonic, formula);
		this.chords = [];
		this.show = false;
		for(let i in this.scale_notes.slice(0,7))
			this.chords.push("[" + this.scale_notes[i] + ", " + this.scale_notes[(parseInt(i)+2)%7] + ", " + this.scale_notes[(parseInt(i)+4)%7] + "]");
	}
	getChord(chord) {
		return(this.chords[chord]);
	}
	getChords(){
		return this.chords;
	}
}

export class Chord{
	constructor(){

	}
}

export class Note {
	constructor(note = "A", octave = 3) {
		note = 
			notes["#"].indexOf(note) < 0 && notes.b.indexOf(note) < 0 ? "A": note;  //validate input"
		this.octave = octave;
		this.lang   = circle_of_fourths.indexOf(note) > -1 ? "b" : "#";
		this.index  = notes[this.lang].indexOf(note);
		this.note   = note;
	}
	frequency() {
		let octave_interval = this.octave - 4;  //calculate octave difference
		return Math.pow(semitone, this.index - 9 + octave_interval * 12) * 440;
	}

	getInterval(interval) {
		if(notes[this.lang][(this.index)][0] != notes[this.lang][(this.index + interval) % 12][0])
			return new Note(notes[this.lang][(this.index + interval) % 12], this.octave);
		return new Note(notes[this.lang][(this.index + interval) % 12], this.octave);
	}
	getMajorChord() {
		let chord = [this.note];
		for (let i of major_chord) chord.push(this.getInterval(i));
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
		return this.note;
	}

	print(){
		return "{Note: " + this.note + ", Octave: " + this.octave + "}";
	}
	
}