import {
    notes,
    circle_of_fourths,
    semitone
} from './Patterns'
import {
    firstToUpper
} from './../Addons'
import Chord from './Chord'
import {
    Howl,
    Howler
} from 'howler'
const sounds = new Map()
/**
 * Represents a single musical note.
 * @class
 */
export class Note {
    /**
     * @param {String} note Musical Note
     * @param {number} octave Octave
     * @param {String} instrument Piano/Guitar/etc...
     * @constructor
     */
    constructor(note = "A", octave = 3, duration = 'q', instrument = 'Piano') {
        note = firstToUpper(note)
        note = !notes["#"].includes(note) && !notes.b.includes(note) ? "A" : note
        this._octave = octave
        this._duration = duration
        this.lang = circle_of_fourths.includes(note) ? "b" : "#"
        this.index = notes[this.lang].indexOf(note)
        this._note = note
        this.instrument = "Piano"
        this.path = null
        this.sound = null
        Note.setSound(this)
    }
    /**
     * gets a note and creates it's active Howl player so we can play it
     * @param {*} note 
     */
    static setSound(note) {
        const key = note.instrument + notes['b'][notes[note.lang].indexOf(note._note)] + note._octave
        if (!sounds.has(key)) {
            const path = '/static/Media/' + note.instrument + '/' + 'FF_' + notes['b'][notes[note.lang].indexOf(note._note)] + note._octave + '.mp3'
            sounds.set(key, new Howl({
                src: [path]
            }))
        }
    }
    /**
     * returns the note alphabet representation as a string.
     */
    get note() {
        return this._note
    }
    /**
     * set new value to note.
     * if value is not a note nothing happens.
     * @param {string} note Musical Note
     */
    set note(note) {
        this._note = !notes["#"].includes(note) && !notes.b.includes(note) ? this._note : note
    }
    /**
     * get octave of note.
     */
    get octave() {
        return this._octave
    }
    /**
     * set octave of _note.
     * @param {number} octave Octave Number
     */
    set octave(octave) {
        this._octave = octave
    }
    newOctave(octave) {
        return new Note(this.note, octave, this.duration)
    }
    /**
     * get the duration of a note
     */
    get duration() {
        return this._duration
    }
    /**
     * set the duration of a note
     * @param {String} duration
     */
    set duration(duration) {
        this._duration = duration
    }
    newDuration(duration) {
        return new Note(this.note, this.octave, duration)
    }
    /**
     * get the frequancy of a note.
     */
    get frequency() {
        let octave_interval = this._octave - 4 //calculate octave difference
        return Math.pow(semitone, this.index - 9 + octave_interval * 12) * 440
    }
    /**
     * returns a clone of the note(new instance).
     */
    clone() {
        return (new Note(this._note, this._octave, this.instrument))
    }
    /**
     * gets a number as interval and returns a new instance of a note 
     * which is constructed by the musical interval formula.
     * for example, if the note is a 'C' in octave 3, 
     * calling the function with the number 4(which is a major third) will return
     * a Note instance with the musical note 'E' in octave 3 with the same instrument.
     * @param {number} interval Musical Interval
     */
    getInterval(interval) {
        let oct_diff = (this.index + interval) / 12
        if (notes[this.lang][(this.index)][0] != notes[this.lang][(this.index + interval) % 12][0])
            return new Note(notes[this.lang][(this.index + interval) % 12], parseInt(this.octave) + parseInt(oct_diff), this.instrument)
        return new Note(notes[this.lang][(this.index + interval) % 12], parseInt(this.octave) + parseInt(oct_diff), this.instrument)
    }
    getMajorChord() {
        return new Chord(this, this.getInterval(4), this.getInterval(7))
    }
    getMajorScale() {
        let scale = [this.note]
        for (let i of major_scale) {
            scale.push(this.getInterval(i))
        }
        return toString(scale)
    }
    /**
     * Returns only the letter of the note and the octave.
     */
    toString() {
        return this.note + this.octave
    }
    /**
     * Check if 2 notes are equal in letter and octave.
     * @param {Note} note
     */
    isEqual(note) {
        if (this.note == note.note && this._octave == note._octave)
            return true
        return false
    }
    /**
     * Returns string of of the note fields formatted as an object.
     */
    print() {
        return "{Note: " + this.note + ", Octave: " + this._octave + "}"
    }
    /**
     * Play the note.
     */
    play() {
        if (sounds.get(this.instrument + notes['b'][notes[this.lang].indexOf(this.note)] + this._octave) instanceof Howl)
            sounds.get(this.instrument + notes['b'][notes[this.lang].indexOf(this.note)] + this._octave).play()
        else
            console.log('Sound not loaded! please make sure you load with x.loadSound()')
    }
}

export default Note