import {
    all_notes, note_durations
} from './Base/Patterns'
import Note from './Base/Note'
import {firstToUpper} from './Addons'

class Piano {
    constructor() {
        this.piano = new Map()
        for (let i = 1; i <= 7; i++)
            for (const n of all_notes)
                for(let l in note_durations)
                    this.piano.set(n + i + l, new Note(n, i, l, "Piano"))
        for(let l in note_durations){
            this.piano.set('A0'+l, new Note('a', 0, l, "Piano"))
            this.piano.set('Bb0'+l, new Note('bb',0,l,"Piano"))
            this.piano.set('B0'+l, new Note('B', 0, l, "Piano"))
            this.piano.set('C8'+l, new Note('C', 8, l, "Piano"))
        }
    }
    note(note){
        return this.piano.get(firstToUpper(note))
    }
}
const piano = new Piano()
export default piano