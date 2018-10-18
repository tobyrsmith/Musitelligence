import Note from "./Base/Note"
import Rhythm from './Base/Rhythm'
export class Measure {
    constructor(rhythm, data) {
        this.rhythm = rhythm
        this.data = data
    }
    play() {
        this.rhythm.addNotes(this.data)
        this.rhythm.toggle()
    }
    noteLengthToTime(length) {
        return note_lengths[length[0]]
    }
}
export default Measure
let notes = [{
        notes: ['a', 'b'],
        length: 'h'
    },
    {
        notes: ['c', 'd'],
        length: 'h'
    },
]