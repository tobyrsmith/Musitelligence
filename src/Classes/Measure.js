import Note from "./Base/Note"
import Rhythm from './Base/Rhythm'
import Chord from "./Base/Chord";
/**
 * Measure - represents a single measure as part of a musical piece.
 * @class
 */
export class Measure {
    /**
     * 
     * @param {Array} data An array which contains notes or chords 
     */
    constructor(data = []) {
        this._data = data
    }
    /**
     * Array of all the notes in the measure
     */
    get data() {
        return this._data
    }
    /**
     * Assign new notes to measure 
     */
    set data(data) {
        this._data = data
    }
    /** 
     * Returns a new array with the same notes.
    */
    getData() {
        const data = new Array()
        for (const i of this.data)
            data.push(i)
        return data
    }
    /**
     * Change notes somewhere inside a measure
     * @param {Number} index The index where the notes will be changed 
     * @param {Array/Note} new_notes Notes to change to
     */
    mutate(i, new_notes) {
        const newData = JSON.parse(JSON.stringify(this.data))
        newData[i] = new_notes
        return new Measure(newData)
    }
    /**
     * Add data to the end of the measure
     * @param {Note/Chord} new_notes 
     */
    addNotes(new_notes){
        this.data.push(new_notes)
    }
    toString(){
        let string = "Measure: { "
        for(const i of this.data)
            if(i instanceof Note || i instanceof Chord)
                string += i.toString() + ", "
            else{
                string += '[ '
                for(const j of i)
                    string += j + ', ' 
                string += '] '
            }
            string += '} '
        return string
    }
}
export default Measure