import {
    notes,
    circle_of_fourths,
    semitone
} from './Patterns'
import NotesHash from './NotesHash'
import {firstToUpper} from './../Addons'
import Chord from './Chord'
let sound_data = new NotesHash()
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
    constructor(note = "A", octave = 3, instrument = 'Piano') {
        note = firstToUpper(note)
        note = !notes["#"].includes(note) && !notes.b.includes(note) ? "A" : note
        this.octave = octave
        this.lang = circle_of_fourths.includes(note) ? "b" : "#"
        this.index = notes[this.lang].indexOf(note)
        this.note = note
        this.instrument = "Piano"
        this.path = null
        this.sound = null
        Note.setSoundData(this.instrument, notes['b'][notes[this.lang].indexOf(this.note)], this._octave)
    }
    /**
     * Class function for adding notes to the note hash table.
     * @static
     * @param {string} instrument 
     * @param {string} note 
     * @param {number} octave 
     */
    static setSoundData(instrument, note, octave){
        sound_data.set(instrument, note, octave)
    }
    /**
     * Class function for retrieving a note sound from the note hash table.
     * @static
     * @param {Note} note Note Instance
     */
    static getSoundData(note){
        return sound_data.get(note)
    }
    /**
     * returns a clone of the note(new instance).
     */
    clone() {
        return (new Note(this.note, this.octave, this.instrument))
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
     * set octave of note.
     * @param {number} octave Octave Number
     */
    set octave(octave) {
        this._octave = octave
    }
    // /**
    //  * load the sound file to the instance.
    //  * the path to the file is constructed by the instrument, the note and the octave automatically.
    //  */
    // loadSound() {
    //     this.path = 'http://0.0.0.0:8000/' + this.instrument + '/' + 'FF_' + notes['b'][notes[this.lang].indexOf(this.note)] + this._octave + '.mp3'
    //     this.sound = new Howl({
    //         src: [this.path],
    //     })
    // }
    /**
     * get the frequancy of a note.
     */
    get frequency() {
        let octave_interval = this.octave - 4 //calculate octave difference
        return Math.pow(semitone, this.index - 9 + octave_interval * 12) * 440
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
     * returns only the letter of the note and the octave.
     */
    toString() {
        return this.note + this.octave
    }
    /**
     * check if 2 notes are equal in letter and octave.
     * @param {Note} note
     */
    isEqual(note) {
        if (this.note == note.note && this._octave == note._octave)
            return true
        return false
    }
    /**
     * returns string of of the note fields formatted as an object.
     */
    print() {
        return "{Note: " + this.note + ", Octave: " + this.octave + "}"
    }
    /**
     * plays the note.
     */
    play() {
        console.log(this._note)
        if (Note.getSoundData(this))
            Note.getSoundData(this).play()
        else
            console.log('Sound not loaded! please make sure you load with x.loadSound()')
    }
}

export default Note