import Note from './Note'

var rhythm;

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
    // console.log(nextNoteTime + " " + audioCtx.currentTime)
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

        this.lastNoteDrawn = 3

        this.bpm = bpm
        this.beats_per_measure = time_signature[0]
        this.beat_length = time_signature[1]
        this.isPlaying = false
    }
    static getRhythm() {
        if (rhythm)
            return rhythm
        rhythm = new Rhythm(60, [4, 4])
        return rhythm
    }
    nextNote() {
        var secondsPerBeat = 60 / this.bpm // tempo

        nextNoteTime += secondsPerBeat// Add beat length to last beat time

        // Advance the beat number, wrap to zero
        this.currentNote++
        if (this.currentNote === 4) {
            this.currentNote = 0
        }
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
                let playNow = [],
                    n
                for (n of this.notes[0]['notes'])
                    playNow.push(n)
                for (n of playNow)
                    n.play()
                this.notes.splice(0, 1)
            }
    }

    scheduler() {
        // console.log(this)
        // while there are notes that will need to play before the next interval, schedule them and advance the pointer.
        while (nextNoteTime < audioCtx.currentTime + this.scheduleAheadTime) {
            console.log(nextNoteTime + " " + audioCtx.currentTime)
            this.scheduleNote(this.currentNote, nextNoteTime)
            this.nextNote()
        }
        console.log(nextNoteTime + " " + audioCtx.currentTime)
        this.timerID = setTimeout(this.scheduler, this.lookahead)
    }
    draw() {
        let drawNote = rhythm.lastNoteDrawn
        rhythm.currentTime = audioCtx.currentTime

        while (rhythm.notesInQueue.length && rhythm.notesInQueue[0].time < rhythm.currentTime) {
            drawNote = rhythm.notesInQueue[0].note
            rhythm.notesInQueue.splice(0, 1) // remove note from queue
        }

        // We only need to draw if the note has moved.
        if (rhythm.lastNoteDrawn != drawNote) {
            // if (rhythm.currentNote % 2 === 0)

            //     if(rhythm.notes)
            //     if(rhythm.notes[0]){
            //     let playNow = [], n
            //     for(n of rhythm.notes[0]['notes'])
            //         playNow.push(n)
            //     for(n of playNow)
            //         n.play()
            //         rhythm.notes.splice(0,1)
            // }

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