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
			this.chords.push(new Chord(this.scale_notes[i], this.scale_notes[(parseInt(i)+2)%7], this.scale_notes[(parseInt(i)+4)%7]));
	}
	getChord(chord) {
		return(this.chords[chord]);
	}
	getChords(){
		return this.chords;
	}
}

export class Chord{
	constructor(root, third, fifth, note4 = null, note5 = null){
		this.root = root;
		this.third = third;
		this.fifth = fifth;
		this.isChord = true;
		if(this.root.getInterval(4).isEqual(this.third)){
			if(this.root.getInterval(7).isEqual(this.fifth)){
				if(note4 == null){
					this.type = "Major";
					this.symbol = "";
				}
				else{
					this.note4 = note4;
					if(this.root.getInterval(5).isEqual(this.note4)){
						this.type = "Added Fourth";
						this.symbol = "add4";
					}
					else if(this.root.getInterval(9).isEqual(this.note4)){
						if(note5 == null){
							this.note5 = note5;
							this.type = "Sixth";
							this.symbol = "6";
						}
						else{
							if(this.root.getInterval(14).isEqual(this.note5)){
								this.type = "Six Nine";
								this.symbol = "6/9";
							}
							else{
								this.isChord = false;
							}
						}
					}
					else if(this.root.getInterval(11).isEqual(this.note4)){
						if(note5 == null){
							this.type = "Major 7th";
							this.symbol = "Maj7";
						}
						else{
							this.note5 = note5;
							if(this.root.getInterval(14).isEqual(note5)){
								this.type = "Major Ninth";
								this.symbol = "Maj9";
							}
							else if(this.root.getInterval(17).isEqual(note5)){
								this.type = "Major Eleventh";
								this.symbol = "Maj11";
							}
							else if(this.root.getInterval(21).isEqual(note5)){
								this.type = "Major Thirteenth";
								this.symbol = "Maj13";
							}
							else if(this.root.getInterval(18).isEqual(note5)){
								this.type = "Major Seven Sharp Eleventh";
								this.symbol = "Maj7#11";
							}
							else{
								this.isChord = false;
							}
						}
					}
					else if(this.root.getInterval(10).isEqual(this.note4)){
						if(note5 == null){
							this.type = "Seventh";
							this.symbol = "7";
						}
						else{
							this.note5 = note5;
							if(this.root.getInterval(14).isEqual(note5)){
								this.type = "Ninth";
								this.symbol = "9";
							}
							else if(this.root.getInterval(17).isEqual(note5)){
								this.type = "Eleventh";
								this.symbol = "11";
							}
							else if(this.root.getInterval(21).isEqual(note5)){
								this.type = "Thirteenth";
								this.symbol = "13";
							}
						}
					}
				}
			}
			else if(this.root.getInterval(6).isEqual(this.fifth)){
				this.type = "Major Flat Fifth";
				this.symbol = "b5";
			}

		}
		else if(this.root.getInterval(3).isEqual(this.third)){
			if(this.root.getInterval(7).isEqual(this.fifth)){
				if(note4 == null){
					this.type = "Minor";
					this.symbol = "m";
				}
				else{
					this.note4 = note4;
					if(this.root.getInterval(5).isEqual(this.note4)){
						this.type = "Minor Added Fourth";
						this.symbol = "madd4";
					}
					else if(this.root.getInterval(9).isEqual(this.note4)){
						if(note5 == null){
							this.note5 = note5;
							this.type = "Minor Sixth";
							this.symbol = "m6";
						}
						else{
							if(this.root.getInterval(14).isEqual(this.note5)){
								this.type = "Minor Six Nine";
								this.symbol = "m6/9";
							}
							else{
								this.isChord = false;
							}
						}
					}
					else if(this.root.getInterval(10).isEqual(this.note4)){
						if(note5 == null){
							this.type = "Minor Seventh";
							this.symbol = "m7";
						}
						else{
							this.note5 = note5;
							if(this.root.getInterval(14).isEqual(note5)){
								this.type = "Minor Ninth";
								this.symbol = "m9";
							}
							else if(this.root.getInterval(17).isEqual(note5)){
								this.type = "Minor Eleventh";
								this.symbol = "m11";
							}
							else if(this.root.getInterval(21).isEqual(note5)){
								this.type = "Minor Thirteenth";
								this.symbol = "m13";
							}
							else{
								this.isChord = false;
							}
						}
					}
				}
			}
			else if(this.root.getInterval(6).isEqual(this.fifth)){
				this.type = "Diminished";
				this.symbol = "dim";
			}
		}
	}
	toString(){
		return this.root + this.symbol + " {" + this.root + ", " + this.third + ", " + this.fifth + "}";
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
	isEqual(n){
		if(this.note == n.note && this.octave == n.octave)
			return true;
		return false;
	}

	print(){
		return "{Note: " + this.note + ", Octave: " + this.octave + "}";
	}
	
}