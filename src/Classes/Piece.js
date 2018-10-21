import Rhythm from './Base/Rhythm'
import Sequence from './Sequence'
import Measure from './Measure'
class Piece {
    constructor(BPM, time_signature, data) {
        this.rhythm = new Rhythm(BPM, time_signature)
        this._data = data
    }
    get data() {
        return this._data
    }
    set data(data) {
        this._data = data
    }
    getData() {
        const data = new Array()
        for (const i of this.data) {
            for (const j of i.getData()) {
                data.push(j)
            }
        }
        return data
    }
    play() {
        this.rhythm.addNotes(this.getData())
        this.rhythm.toggle()
    }
}
export default Piece