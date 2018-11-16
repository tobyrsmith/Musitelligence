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
     */
    constructor(root, third, fifth, note4 = null, duration = 'q') {
        this._duration = duration
        this.isChord   = true
        if (!(root instanceof Note)) {
            root  = new Note(root)
            third = new Note(third)
            fifth = new Note(fifth)
            note4 = note4 ? new Note(note4) : null
        }
        if (root.index > third.index) {
            third = new Note(third.note, root.octave + 1, third.duration, third.instrument)
        } else {
            third = new Note(third.note, root.octave, third.duration, third.instrument)
        }
        if (root.index > fifth.index) {
            fifth = new Note(fifth.note, root.octave + 1, fifth.duration, fifth.instrument)
        } else {
            fifth = new Note(fifth.note, root.octave, third.duration, third.instrument)
        }
        if (root.getInterval(4).note === third.note) {
            if (root.getInterval(7).note === fifth.note) {
                if (note4 == null) {
                    this.type   = 'Major'
                    this.symbol = ''
                } else {
                    if (root.getInterval(5).note === note4.note) {
                        this.type   = 'Added Fourth'
                        this.symbol = 'add4'
                    }
                    else if (root.getInterval(9).note === note4.note) {
                        this.type   = 'Sixth'
                        this.symbol = '6'
                    }
                    else if (root.getInterval(11).note === note4.note) {
                        this.type   = 'Major 7th'
                        this.symbol = 'Maj7'
                    }
                    else if (root.getInterval(10).note === note4.note) {
                        this.type   = 'Seventh'
                        this.symbol = '7'
                    }
                }
            } else if (root.getInterval(6).note === fifth.note) {
                this.type   = 'Major Flat Fifth'
                this.symbol = 'b5'
            }
            else if (root.getInterval(8).note === fifth.note) {
                this.type   = 'Major Augmented Fifth'
                this.symbol = 'aug'
            }
        }
        else if (root.getInterval(3).note === third.note) {
            if (root.getInterval(7).note === fifth.note) {
                if (note4 == null) {
                    this.type   = 'Minor'
                    this.symbol = 'm'
                } else {
                    if (root.getInterval(5).note === note4.note) {
                        this.type   = 'Minor Added Fourth'
                        this.symbol = 'madd4'
                    } else if (root.getInterval(9).note === note4.note) {
                        this.type   = 'Minor Sixth'
                        this.symbol = 'm6'
                    }
                    else if (root.getInterval(10).note === note4.note) {
                        this.type   = 'Minor Seventh'
                        this.symbol = 'm7'
                    }
                }
            } else if (root.getInterval(6).note === fifth.note) {
                if (note4 == null) {
                    this.type   = 'Diminished'
                    this.symbol = 'dim'
                } else {
                    if (root.getInterval(9).isEqual(note4)) {
                        this.type   = 'Diminished Seventh'
                        this.symbol = 'dim7'
                    }
                }
            }
        }
        if (this.type === undefined) {
            this.type    = root.note + '?'
            this.symbol  = '?'
            this.isChord = false
        }
        this.chord_notes = [root, third, fifth]
        if (note4) {
            this.chord_notes.push(note4)
        }
    }

    /**
     * The index of the root.
     * @type    {Number}
     * @readonly
     */
    static get ROOT() {return 0}

    /**
     * The index of the third.
     * @type    {Number}
     * @readonly
     */
    static get THIRD() {return 1}

    /**
     * The index of the fifth.
     * @type    {Number}
     * @readonly
     */
    static get FIFTH() {return 2}

    /**
     * The index of the fourth note.
     * @type    {Number}
     * @readonly
     */
    static get NOTE4() {return 3}

    /**
     * The root of the chord as Note
     * @returns {Note}
     * @readonly
     */
    get root() {
        return this.chord_notes[Chord.ROOT]
    }

    /**
     * The third of the chord as Note
     * @returns {Note}
     * @readonly
     */
    get third() { return this.chord_notes[Chord.THIRD]}

    /**
     * The fifth of the chord as Note
     * @returns {Note}
     * @readonly
     */
    get fifth() {return this.chord_notes[Chord.FIFTH]}

    /**
     * The fourth note of the chord as Note
     * @returns {Note}
     * @readonly
     */
    get note4() {return this.chord_notes[Chord.NOTE4]}

    /**
     * The duration of the chord as String
     * @returns {String}
     * @readonly
     */
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
        for (let i = 0; i < this.chord_notes.length; i++)
            this.chord_notes[i].play()
    }

    /**
     * Transforms the chord into its root position.
     */
    rootPosition() {
        // TODO
    }

    /**
     * Transforms the chord into its 1st-inversion.
     */
    inversionFirst() {
        //TODO
    }

    /**
     * Transforms the chord into its 2st-inversion.
     */
    inversionSecond() {
        //TODO
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
