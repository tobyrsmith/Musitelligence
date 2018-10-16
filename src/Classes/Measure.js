import Note from "./Base/Note"
import Rhythm from './Base/Rhythm'
const note_lengths = {
    'w': 1,
    'h': 1 / 2,
    'q': 1 / 4,
    'e': 1 / 8,
    's': 1 / 16,
    't': 1 / 32,
    'sf': 1 / 64
}
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