import Note from "./Base/Note"
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
        // for (let i of this.data) {
        //     for (let note of i['notes']) {
        //         let tmp = new Note(note)
        //         tmp.playNote()
        //         setTimeout(() => {
        //         }, i['length'] * this.rhythm.beats_per_measure * 1000)
        //     }
        // }
        (function playMeasure (measure, i) {
            setTimeout(function () {
                for (let note of measure.data[i]['notes']) {
                    let tmp = new Note(note)
                    tmp.playNote()
                }
                if (++i < measure.data.length) {                  // If i > 0, keep going
                    console.log(measure.data[i]['length'], " " , measure.noteLengthToTime(measure.data[i]['length']))
                    playMeasure(measure, i)  // Call the loop again
                }
            }, measure.noteLengthToTime(measure.data[i]['length']) * measure.rhythm.beats_per_measure * 1000 * (measure.rhythm.bpm/60))
          })(this, 0)
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