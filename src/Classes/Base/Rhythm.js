import Note from './Note'

var rhythm;

const note_lengths = {
    'w': 1,
    'h': 1 / 2,
    'q': 1 / 4,
    'e': 1 / 8,
    's': 1 / 16,
    't': 1 / 32,
    'sf': 1 / 64
}
const time_signature_note_types = {
    4: 1 / 4,
    8: 1 / 8,
}

// for cross browser compatibility
const AudioContext = window.AudioContext || window.webkitAudioContext
const audioCtx = new AudioContext()
let nextNoteTime = 0.0 // when the next note is due.
function scheduler() {
    // while there are notes that will need to play before the next interval, schedule them and advance the pointer.
    while (nextNoteTime < audioCtx.currentTime + rhythm.scheduleAheadTime) {
        rhythm.scheduleNote(rhythm.currentNote, nextNoteTime)
        rhythm.nextNote()
    }
    rhythm.timerID = setTimeout(scheduler, rhythm.lookahead)
}
/**
 * Creates a rhythm instance which holds bpm and time signature information.
 * @class 
 */
export class Rhythm {
    constructor(bpm, time_signature) {
        // const bpmControl = document.querySelector('#bpm')
        // bpmControl.addEventListener('input', function() {
        //     tempo = Number(this.value)
        // }, false)
        this.timerID = null
        this.lookahead = 25.0 // How frequently to call scheduling function (in milliseconds)
        this.scheduleAheadTime = 0.1 // How far ahead to schedule audio (sec)

        this.currentNote = 0
        this.notesInQueue = []
        this.next_note_length = 1
        this.lastNoteDrawn = 3

        this.bpm = bpm
        this.beats_per_measure = time_signature[0]
        this.beat_length = time_signature[1]
        this.isPlaying = false
        this.beat_check = 0
    }
    static getRhythm() {
        if (rhythm)
            return rhythm
        rhythm = new Rhythm(60, [4, 4])
        return rhythm
    }
    scheduleNote(beatNumber, time) {
        // push the note on the queue, even if we're not playing.
        // console.log(this.notesInQueue)
        this.notesInQueue.push({
            note: beatNumber,
            time: time
        })
        if (this.notes)
            if (this.notes[0]) {
                console.log(this.notes[0].notes.toString())
                this.next_note_length = this.notes.length ? note_lengths[this.notes[0].length] : 1
                let playNow = [],
                    n
                for (n of this.notes[0]['notes'])
                    playNow.push(n)
                for (n of playNow)
                    n.play()

                this.notes.splice(0, 1)
                console.log(note_lengths[this.notes[0].length])
            }
    }
    nextNote() {
        var secondsPerBeat = 60 / this.bpm // tempo
        nextNoteTime += secondsPerBeat * this.next_note_length * this.beats_per_measure// Add beat length to last beat time
        // Advance the beat number, wrap to zero
        this.beat_check += secondsPerBeat * this.next_note_length
        console.log(this.beat_check + ' ' + secondsPerBeat)
        if (this.beat_check <= secondsPerBeat) {
            this.beat_check = 0
            this.currentNote++
            if (this.currentNote === this.beats_per_measure) {
                this.currentNote = 0
            }
        }
    }
    draw() {
        let drawNote = rhythm.lastNoteDrawn
        rhythm.currentTime = audioCtx.currentTime

        // while (rhythm.notesInQueue.length && rhythm.notesInQueue[0].time < rhythm.currentTime) {
        //     drawNote = rhythm.notesInQueue[0].note
        //     rhythm.notesInQueue.splice(0, 1) // remove note from queue
        // }

        // We only need to draw if the note has moved.
        if (rhythm.lastNoteDrawn != drawNote) {

            rhythm.lastNoteDrawn = drawNote
        }
        // set up to draw again
        requestAnimationFrame(rhythm.draw)
    }
    getBeat() {
        return this.currentNote
    }
    toggle() {
        rhythm = this
        this.isPlaying = !this.isPlaying
        if (this.isPlaying) { // start playing

            // check if context is in suspended state (autoplay policy)
            if (audioCtx.state === 'suspended') {
                audioCtx.resume()
            }
            this.currentNote = 0
            nextNoteTime = audioCtx.currentTime
            scheduler() // kick off scheduling
            // console.log(this.currentNote)
            requestAnimationFrame(this.draw) // start the drawing loop.
        } else {
            clearTimeout(this.timerID)
        }
    }
    addNotes(notes) {
        this.notes = notes
    }
}
export default Rhythm