import Rhythm from './Base/Rhythm'
import Sequence from './Sequence'
import Measure from './Measure'
class Piece {
    constructor(BPM, time_signature, data) {
        this.rhythm = new Rhythm(BPM, time_signature)
        if (data)
            this._data = data
        else
            this._data = []
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
            if (i instanceof Measure || i instanceof Sequence){
                for (const j of i.getData()) {
                    data.push(j)
                }
            }
            else
                data.push(i)
        }
        return data
    }
    play() {
        this.rhythm.addNotes(this.getData())
        this.rhythm.toggle()
    }
    pushToData(new_data) {
        this.data.push(new_data)
    }
    toString(){
        let string = "Piece: { "
        for(let i of this.data)
            string += i.toString() + ', '
        string+= '} '
        return string
    }
}
export default Piece