// import { Note, Scale } from './Lang';

let btn = document.getElementById("btn");
let in1 = document.getElementById("in1");
let p2 = document.getElementById("p2");

function f() {
    let note = in1.value.toUpperCase();
    if (notes["#"].indexOf(note) < 0 && notes.b.indexOf(note) < 0)
        p2.textContent = "NOT A NOTE!";
    else {
        let a = new Note(note);
        p2.textContent = "Note Chosen: " + note;
        document.getElementById("p1").textContent = a.getMajorScale();
    }
}