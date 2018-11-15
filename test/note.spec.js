import {expect} from 'chai'
import {Note} from './../src'

const c = new Note('c')
const b = new Note('b')

describe('Note Methods', () => {
    it('checks properties', () => {
        expect(c.note).to.eql('C')
        expect(c.octave).to.eql(3)
        expect(c.lang).to.eql('b')
        expect(c.duration).to.eql('q')
        expect(c.lang).to.eql('b')
        expect(c.index).to.eql(0)
        expect(c.toString()).to.eql('C3')
        expect(c.isEqual(new Note('c'))).to.true
    })

    it('checks intervals', () => {
        expect(c.getInterval(-25)).to.eql(new Note('b',0))
        expect(c.getInterval(-24)).to.eql(new Note('c',1))
        expect(c.getInterval(-23)).to.eql(new Note('db',1))
        expect(c.getInterval(-13)).to.eql(new Note('b',1))
        expect(c.getInterval(-12)).to.eql(new Note('c',2))
        expect(c.getInterval(-11)).to.eql(new Note('db',2))
        expect(c.getInterval(-1)).to.eql(new Note('b',2))
        expect(c.getInterval(0)).to.eql(new Note('c'))
        expect(c.getInterval(1)).to.eql(new Note('db'))
        expect(c.getInterval(11)).to.eql(new Note('b'))
        expect(c.getInterval(12)).to.eql(new Note('c',4))
        expect(c.getInterval(13)).to.eql(new Note('db',4))
        expect(c.getInterval(23)).to.eql(new Note('b',4))
        expect(c.getInterval(24)).to.eql(new Note('c',5))
        expect(c.getInterval(25)).to.eql(new Note('db',5))
        expect(b.getInterval(1)).to.eql(new Note('c',4))
    })
})
