import {
    Note,
} from '.'

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
    constructor(root, third, fifth, note4 = null, duration = 'q') {
        this.root      = root
        this._duration = duration
        this.isChord   = true
        if (this.root.index > third.index) {
            this.third = new Note(third.note, this.root.octave + 1, third.duration, third.instrument)
        } else {
            this.third = new Note(third.note, this.root.octave, third.duration, third.instrument)
        }
        if (this.root.index > fifth.index) {
            this.fifth = new Note(fifth.note, this.root.octave + 1, fifth.duration, fifth.instrument)
        } else {
            this.fifth = new Note(fifth.note, this.root.octave, third.duration, third.instrument)
        }
        if (this.root.getInterval(4).note === this.third.note) {
            if (this.root.getInterval(7).note === this.fifth.note) {
                if (note4 == null) {
                    this.type   = 'Major'
                    this.symbol = ''
                } else {
                    this.note4 = note4
                    if (this.root.getInterval(5).note === this.note4.note) {
                        this.type   = 'Added Fourth'
                        this.symbol = 'add4'
                    }
                    else if (this.root.getInterval(9).note === this.note4.note) {
                        this.type   = 'Sixth'
                        this.symbol = '6'
                    }
                    else if (this.root.getInterval(11).note === this.note4.note) {
                        this.type   = 'Major 7th'
                        this.symbol = 'Maj7'
                    }
                    else if (this.root.getInterval(10).note === this.note4.note) {
                        this.type   = 'Seventh'
                        this.symbol = '7'
                    }
                }
            } else if (this.root.getInterval(6).note === this.fifth.note) {
                this.type   = 'Major Flat Fifth'
                this.symbol = 'b5'
            }
            else if (this.root.getInterval(8).note === this.fifth.note) {
                this.type   = 'Major Augmented Fifth'
                this.symbol = 'aug'
            }
        }
        else if (this.root.getInterval(3).note === this.third.note) {
            if (this.root.getInterval(7).note === this.fifth.note) {
                if (note4 == null) {
                    this.type   = 'Minor'
                    this.symbol = 'm'
                } else {
                    this.note4 = note4
                    if (this.root.getInterval(5).note === this.note4.note) {
                        this.type   = 'Minor Added Fourth'
                        this.symbol = 'madd4'
                    } else if (this.root.getInterval(9).note === this.note4.note) {
                            this.type   = 'Minor Sixth'
                            this.symbol = 'm6'
                    }
                    else if (this.root.getInterval(10).note === this.note4.note) {
                            this.type   = 'Minor Seventh'
                            this.symbol = 'm7'
                    }
                }
            } else if (this.root.getInterval(6).note === this.fifth.note) {
                if (this.note4 == null) {
                    this.type   = 'Diminished'
                    this.symbol = 'dim'
                } else {
                    this.note4 = note4
                    if (this.root.getInterval(9).isEqual(this.note4)) {
                        this.type   = 'Diminished Seventh'
                        this.symbol = 'dim7'
                    }
                }
            }
        }
        if (this.type === undefined) {
            this.type   = this.root.note + '?'
            this.symbol = '?'
        }
        if (this.note4 == null) {
            this.chord_notes = [this.root, this.third, this.fifth]
        } else {
            this.chord_notes = [this.root, this.third, this.fifth, this.note4]
        }
    }

    get duration() {
        return this._duration
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
        console.log(this.root)
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
        this.root.octave  = this.root.octave + 1
        this.third.octave = this.third.octave + 1
        return this
    }

    /**
     * returns string of the name of the chord and all the notes it contains.
     */
    toString() {
        if (this.symbol == undefined) {
            if (this.note4 == null) {
                return this.root.note + ' {' + this.root + ', ' + this.third + ', ' + this.fifth + '}'
            } else if (this.note5 == null) {
                return this.root.note + ' {' + this.root + ', ' + this.third + ', ' + this.fifth + ', ' + this.note4 + '}'
            }
            return this.root.note + ' {' + this.root + ', ' + this.third + ', ' + this.fifth + ', ' + this.note4 + ', ' + this.note5 + '}'
        } else if (this.note4 == null) {
            return this.root.note + this.symbol + ' {' + this.root + ', ' + this.third + ', ' + this.fifth + '}'
        } else if (this.note5 == null) {
            return this.root.note + this.symbol + ' {' + this.root + ', ' + this.third + ', ' + this.fifth + ', ' + this.note4 + '}'
        }
        return this.root.note + this.symbol + ' {' + this.root + ', ' + this.third + ', ' + this.fifth + ', ' + this.note4 + ', ' + this.note5 + '}'
    }

    newDuration(duration) {
        return new Chord(this.root, this.third, this.fifth, this.note4, this.note5, duration)
    }
}
