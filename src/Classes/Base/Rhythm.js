import Note from './Note'

// for cross browser compatibility
const AudioContext = window.AudioContext || window.webkitAudioContext
const audioCtx = new AudioContext()

let tempo = 60.0
// const bpmControl = document.querySelector('#bpm')
// bpmControl.addEventListener('input', function() {
//     tempo = Number(this.value)
// }, false)
let timerID = null
let lookahead = 25.0 // How frequently to call scheduling function (in milliseconds)
let scheduleAheadTime = 0.1 // How far ahead to schedule audio (sec)

let currentNote = 0
let nextNoteTime = 0.0 // when the next note is due.

function nextNote() {
    var secondsPerBeat = 1.0 // tempo

    nextNoteTime += secondsPerBeat // Add beat length to last beat time

    // Advance the beat number, wrap to zero
    currentNote++
    if (currentNote === 4) {
        currentNote = 0
    }
}

var notesInQueue = []

function scheduleNote(beatNumber, time) {

    // push the note on the queue, even if we're not playing.
    notesInQueue.push({
            note: beatNumber,
            time: time
        })
    let n = new Note('c')
    n.playNote()
}

function scheduler() {
    // while there are notes that will need to play before the next interval, schedule them and advance the pointer.
    while (nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
        scheduleNote(currentNote, nextNoteTime);
        nextNote();
    }
    timerID = setTimeout(scheduler, lookahead);
}

let lastNoteDrawn = 3;

function draw() {
    let drawNote = lastNoteDrawn;
    let currentTime = audioCtx.currentTime;

    while (notesInQueue.length && notesInQueue[0].time < currentTime) {
        drawNote = notesInQueue[0].note;
        notesInQueue.splice(0, 1); // remove note from queue
    }

    // We only need to draw if the note has moved.
    if (lastNoteDrawn != drawNote) {
        console.log("note drawn")

        lastNoteDrawn = drawNote;
    }
    // set up to draw again
    requestAnimationFrame(draw);
}

/**
 * Creates a rhythm instance which holds bpm and time signature information.
 * @class 
 */
export class Rhythm {
    constructor(bpm, time_signature) {
        this.bpm = bpm
        this.beats_per_measure = time_signature[0]
        this.beat_length = time_signature[1]
        this.isPlaying = false
    }
    toggle() {
        this.isPlaying = !this.isPlaying
        if (this.isPlaying) { // start playing

            // check if context is in suspended state (autoplay policy)
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            currentNote = 0;
            nextNoteTime = audioCtx.currentTime;
            scheduler(); // kick off scheduling
            requestAnimationFrame(draw); // start the drawing loop.
        } else {
            clearTimeout(timerID);
        }
    }
}
export default Rhythm
