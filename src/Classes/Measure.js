import Note from "./Base/Note"
import Rhythm from './Base/Rhythm'
export class Measure {
    constructor(data) {
        this._data = data
    }
    get data(){
        return this._data
    }
    set data(data){
        this._data = data
    }
    getData(){
        const data = new Array()
        for(const i of this.data)
            data.push(i)
        return data
    }
    mutate(i, new_notes){
        const newData = JSON.parse(JSON.stringify(this.data))
        newData[i] = new_notes
        return new Measure(newData)
    }
}
export default Measure