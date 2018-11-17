import {expect}             from 'chai'
import {Chord, Note, Piano} from '../src'

const piano = new Piano()
const c     = new Note('c')
describe.only('Chord class', () => {
    describe('checks different ctor inputs', () => {
        it('calls ctor with Note type objects', () => {
            expect(new Chord(piano.note('c3q'), piano.note('e3q'),piano.note('g3q')).isChord).to.be.true
        })
        it('calls ctor with strings', () => {
            expect(new Chord('c','e','g','').isChord).to.be.true
        })
    })
})
