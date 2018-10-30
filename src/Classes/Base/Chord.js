import Note from './Note'
/**
 * represents a Chord.
 */
export class Chord {
    /**
     * 
     * @param {Note} root 
     * @param {Note} third 
     * @param {Note} fifth 
     * @param {Note} note4(optional) 
     * @param {Note} note5(optional)
     */
    constructor(root, third, fifth, note4 = null, note5 = null, duration = 'q') {
        this.root = root.clone()
        this.third = third.clone()
        this.fifth = fifth.clone()
        this.duration = duration
        this.isChord = true
        this.third.octave = this.root.octave
        this.fifth.octave = this.root.octave
        if (this.root.index > this.third.index)
            this.third.octave = this.root.octave + 1
        if (this.root.index > this.fifth.index)
            this.fifth.octave = this.root.octave + 1
        if (this.root.getInterval(4).isEqual(this.third)) {
            if (this.root.getInterval(7).isEqual(this.fifth)) {
                if (note4 == null) {
                    this.type = "Major"
                    this.symbol = ""
                } else {
                    this.note4 = note4
                    if (this.root.getInterval(5).isEqual(this.note4)) {
                        this.type = "Added Fourth"
                        this.symbol = "add4"
                    } else if (this.root.getInterval(9).isEqual(this.note4)) {
                        if (note5 == null) {
                            this.note5 = note5
                            this.type = "Sixth"
                            this.symbol = "6"
                        } else {
                            if (this.root.getInterval(14).isEqual(this.note5)) {
                                this.type = "Six Nine"
                                this.symbol = "6/9"
                            } else {
                                this.isChord = false
                            }
                        }
                    } else if (this.root.getInterval(11).isEqual(this.note4)) {
                        if (note5 == null) {
                            this.type = "Major 7th"
                            this.symbol = "Maj7"
                        } else {
                            this.note5 = note5
                            if (this.root.getInterval(14).isEqual(note5)) {
                                this.type = "Major Ninth"
                                this.symbol = "Maj9"
                            } else if (this.root.getInterval(17).isEqual(note5)) {
                                this.type = "Major Eleventh"
                                this.symbol = "Maj11"
                            } else if (this.root.getInterval(21).isEqual(note5)) {
                                this.type = "Major Thirteenth"
                                this.symbol = "Maj13"
                            } else if (this.root.getInterval(18).isEqual(note5)) {
                                this.type = "Major Seven Sharp Eleventh"
                                this.symbol = "Maj7#11"
                            } else {
                                this.isChord = false
                            }
                        }
                    } else if (this.root.getInterval(10).isEqual(this.note4)) {
                        if (note5 == null) {
                            this.type = "Seventh"
                            this.symbol = "7"
                        } else {
                            this.note5 = note5
                            if (this.root.getInterval(14).isEqual(note5)) {
                                this.type = "Ninth"
                                this.symbol = "9"
                            } else if (this.root.getInterval(17).isEqual(note5)) {
                                this.type = "Eleventh"
                                this.symbol = "11"
                            } else if (this.root.getInterval(21).isEqual(note5)) {
                                this.type = "Thirteenth"
                                this.symbol = "13"
                            }
                        }
                    }
                }
            } else if (this.root.getInterval(6).isEqual(this.fifth)) {
                this.type = "Major Flat Fifth"
                this.symbol = "b5"
            } else if (this.root.getInterval(8).isEqual(this.fifth)) {
                this.type = "Major Augmented Fifth"
                this.symbol = "aug"
            }
        } else if (this.root.getInterval(3).isEqual(this.third)) {
            if (this.root.getInterval(7).isEqual(this.fifth)) {
                if (note4 == null) {
                    this.type = "Minor"
                    this.symbol = "m"
                } else {
                    this.note4 = note4.clone()
                    if (this.root.getInterval(5).isEqual(this.note4)) {
                        this.type = "Minor Added Fourth"
                        this.symbol = "madd4"
                    } else if (this.root.getInterval(9).isEqual(this.note4)) {
                        if (note5 == null) {
                            this.note5 = note5
                            this.type = "Minor Sixth"
                            this.symbol = "m6"
                        } else {
                            if (this.root.getInterval(14).isEqual(this.note5)) {
                                this.type = "Minor Six Nine"
                                this.symbol = "m6/9"
                            } else {
                                this.isChord = false
                            }
                        }
                    } else if (this.root.getInterval(10).isEqual(this.note4)) {
                        if (note5 == null) {
                            this.type = "Minor Seventh"
                            this.symbol = "m7"
                        } else {
                            this.note5 = note5.clone()
                            if (this.root.getInterval(14).isEqual(note5)) {
                                this.type = "Minor Ninth"
                                this.symbol = "m9"
                            } else if (this.root.getInterval(17).isEqual(note5)) {
                                this.type = "Minor Eleventh"
                                this.symbol = "m11"
                            } else if (this.root.getInterval(21).isEqual(note5)) {
                                this.type = "Minor Thirteenth"
                                this.symbol = "m13"
                            } else {
                                this.isChord = false
                            }
                        }
                    }
                }
            } else if (this.root.getInterval(6).isEqual(this.fifth)) {
                if (this.note4 == null) {
                    this.type = "Diminished"
                    this.symbol = "dim"
                } else {
                    this.note4 = note4
                    if (this.root.getInterval(9).isEqual(this.note4)) {
                        this.type = "Diminished Seventh"
                        this.symbol = "dim7"
                    }
                }
            }
        }
        if (this.type == undefined) {
            this.root.lang = "#" == this.root.lang ? "b" : "#"
            if (this.root.getInterval(4).isEqual(this.third)) {
                if (this.root.getInterval(7).isEqual(this.fifth)) {
                    if (note4 == null) {
                        this.type = "Major"
                        this.symbol = ""
                    } else {
                        this.note4 = note4
                        if (this.root.getInterval(5).isEqual(this.note4)) {
                            this.type = "Added Fourth"
                            this.symbol = "add4"
                        } else if (this.root.getInterval(9).isEqual(this.note4)) {
                            if (note5 == null) {
                                this.note5 = note5
                                this.type = "Sixth"
                                this.symbol = "6"
                            } else {
                                if (this.root.getInterval(14).isEqual(this.note5)) {
                                    this.type = "Six Nine"
                                    this.symbol = "6/9"
                                } else {
                                    this.isChord = false
                                }
                            }
                        } else if (this.root.getInterval(11).isEqual(this.note4)) {
                            if (note5 == null) {
                                this.type = "Major 7th"
                                this.symbol = "Maj7"
                            } else {
                                this.note5 = note5
                                if (this.root.getInterval(14).isEqual(note5)) {
                                    this.type = "Major Ninth"
                                    this.symbol = "Maj9"
                                } else if (this.root.getInterval(17).isEqual(note5)) {
                                    this.type = "Major Eleventh"
                                    this.symbol = "Maj11"
                                } else if (this.root.getInterval(21).isEqual(note5)) {
                                    this.type = "Major Thirteenth"
                                    this.symbol = "Maj13"
                                } else if (this.root.getInterval(18).isEqual(note5)) {
                                    this.type = "Major Seven Sharp Eleventh"
                                    this.symbol = "Maj7#11"
                                } else {
                                    this.isChord = false
                                }
                            }
                        } else if (this.root.getInterval(10).isEqual(this.note4)) {
                            if (note5 == null) {
                                this.type = "Seventh"
                                this.symbol = "7"
                            } else {
                                this.note5 = note5
                                if (this.root.getInterval(14).isEqual(note5)) {
                                    this.type = "Ninth"
                                    this.symbol = "9"
                                } else if (this.root.getInterval(17).isEqual(note5)) {
                                    this.type = "Eleventh"
                                    this.symbol = "11"
                                } else if (this.root.getInterval(21).isEqual(note5)) {
                                    this.type = "Thirteenth"
                                    this.symbol = "13"
                                }
                            }
                        }
                    }
                } else if (this.root.getInterval(6).isEqual(this.fifth)) {
                    this.type = "Major Flat Fifth"
                    this.symbol = "b5"
                } else if (this.root.getInterval(8).isEqual(this.fifth)) {
                    this.type = "Major Augmented Fifth"
                    this.symbol = "aug"
                }
            } else if (this.root.getInterval(3).isEqual(this.third)) {
                if (this.root.getInterval(7).isEqual(this.fifth)) {
                    if (note4 == null) {
                        this.type = "Minor"
                        this.symbol = "m"
                    } else {
                        this.note4 = note4
                        if (this.root.getInterval(5).isEqual(this.note4)) {
                            this.type = "Minor Added Fourth"
                            this.symbol = "madd4"
                        } else if (this.root.getInterval(9).isEqual(this.note4)) {
                            if (note5 == null) {
                                this.note5 = note5
                                this.type = "Minor Sixth"
                                this.symbol = "m6"
                            } else {
                                if (this.root.getInterval(14).isEqual(this.note5)) {
                                    this.type = "Minor Six Nine"
                                    this.symbol = "m6/9"
                                } else {
                                    this.isChord = false
                                }
                            }
                        } else if (this.root.getInterval(10).isEqual(this.note4)) {
                            if (note5 == null) {
                                this.type = "Minor Seventh"
                                this.symbol = "m7"
                            } else {
                                this.note5 = note5
                                if (this.root.getInterval(14).isEqual(note5)) {
                                    this.type = "Minor Ninth"
                                    this.symbol = "m9"
                                } else if (this.root.getInterval(17).isEqual(note5)) {
                                    this.type = "Minor Eleventh"
                                    this.symbol = "m11"
                                } else if (this.root.getInterval(21).isEqual(note5)) {
                                    this.type = "Minor Thirteenth"
                                    this.symbol = "m13"
                                } else {
                                    this.isChord = false
                                }
                            }
                        }
                    }
                } else if (this.root.getInterval(6).isEqual(this.fifth)) {
                    if (this.note4 == null) {
                        this.type = "Diminished"
                        this.symbol = "dim"
                    } else {
                        this.note4 = note4
                        if (this.root.getInterval(9).isEqual(this.note4)) {
                            this.type = "Diminished Seventh"
                            this.symbol = "dim7"
                        }
                    }
                }
            }
        }
        if (this.note4 == null)
            this.chord_notes = [this.root, this.third, this.fifth]
        else {
            if (this.note5 == null)
                this.chord_notes = [this.root, this.third, this.fifth, this.note4]
            else
                this.chord_notes = [this.root, this.third, this.fifth, this.note4, this.note5]
        }
    }
    /**
     * play all the notes in the chord as a melody.
     */
    playMelody() {
        let self = this
        for (let i = 0; i < this.chord_notes.length; i++) {
            setTimeout(function timer() {
                self.chord_notes[i].play()
            }, i * 500)
        }
    }
    /**
     * play all the notes in the chord as a harmony.
     */
    play() {
        for (let i = 0; i < this.chord_notes.length; i++)
            this.chord_notes[i].play()
    }
    /**
     * Transforms the chord into its root position.
     */
    rootPosition() {
        this.third._octave = this.root._octave
        this.fifth._octave = this.root._octave
        return this
    }
    /**
     * Transforms the chord into its 1st-inversion.
     */
    inversionFirst() {
        this.root._octave = this.root._octave + 1
        return this
    }
    /**
     * Transforms the chord into its 2st-inversion.
     */
    inversionSecond() {
        this.root.octave = this.root.octave + 1
        this.third.octave = this.third.octave + 1
        return this
    }
    /**
     * returns string of the name of the chord and all the notes it contains.
     */
    toString() {
        if (this.symbol == undefined) {
            if (this.note4 == null)
                return this.root.note + " {" + this.root + ", " + this.third + ", " + this.fifth + "}"
            else if (this.note5 == null)
                return this.root.note + " {" + this.root + ", " + this.third + ", " + this.fifth + ", " + this.note4 + "}"
            return this.root.note + " {" + this.root + ", " + this.third + ", " + this.fifth + ", " + this.note4 + ", " + this.note5 + "}"
        } else if (this.note4 == null)
            return this.root.note + this.symbol + " {" + this.root + ", " + this.third + ", " + this.fifth + "}"
        else if (this.note5 == null)
            return this.root.note + this.symbol + " {" + this.root + ", " + this.third + ", " + this.fifth + ", " + this.note4 + "}"
        return this.root.note + this.symbol + " {" + this.root + ", " + this.third + ", " + this.fifth + ", " + this.note4 + ", " + this.note5 + "}"
    }
    newDuration(duration){
        return new Chord(this.root, this.third,this.fifth, this.note4, this.note5, duration)
    }
}
export default Chord