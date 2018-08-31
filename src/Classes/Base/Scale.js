import {MusicalPattern} from './MusicalPattern'
import {Note} from './Note'
import {Chord} from './Chord'
/**
 * represents a Diatonic Scale(a scale that consists of 7 notes), 
 * @extends MusicalPattern
 */
export class DiatonicScale extends MusicalPattern {
    /**
     * 
     * @param {Note/String} tonic 
     * @param {Array} pattern 
     */
	constructor(tonic, pattern) {
		super(tonic, pattern)
		this.chords = []
		this.show = false
		for(let i in this.notes.slice(0,7))
			this.chords.push(new Chord(this.notes[i], this.notes[(parseInt(i)+2)%7], this.notes[(parseInt(i)+4)%7]))
    }
    /**
     * returns the x chord of the scale.
     * @param {number} chord 
     */
	getChord(chord) {
		return(this.chords[chord])
    }
    /**
     * returns array with all the chords in the scale.
     */
	getChords(){
		return this.chords
	}
}