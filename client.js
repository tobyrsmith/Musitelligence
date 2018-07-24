// import { Note, Scale } from './Lang';

let btn = document.getElementById("btn");
let in1 = document.getElementById("in1");
let p2 = document.getElementById("p2");
let s = new Audio("song.wav");
let lastPlay = "0";

function f() {
    //     setInterval(function() {
    //         if (lastPlay != "1") {
    //             s.play();
    //             lastPlay = "1";
    //         } else if (lastPlay != "0") {
    //             s.play();
    //             lastPlay = "0";
    //         }
    //     }, 1000);
    let note = in1.value.toUpperCase();
    // let s = new Audio("song.wav");
    g();
    if (notes["#"].indexOf(note) < 0 && notes.b.indexOf(note) < 0)
        p2.textContent = "NOT A NOTE!";
    else {
        let a = new Note(note);
        p2.textContent = "Note Chosen: " + note;
        document.getElementById("p1").textContent = a.getMajorScale();
    }
}

function g() {
    let s = new Audio("song.wav");
    setInterval(function() {
        if (lastPlay != "1") {
            s.play();
            lastPlay = "1";
        } else if (lastPlay != "0") {
            s.play();
            lastPlay = "0";
        }
    }, 1000);
}