import {Chord} from './Chord'
import {Note} from './Note'
import {DiatonicScale} from './Scale'

/**
 * represents a Musical Key that is based on a specific Diatonic Scale., 
 * @extends DiatonicScale
 */
export class Key extends DiatonicScale{
    constructor(tonic, pattern){
        super(tonic, pattern)
    }
    addChordProgression(chords, ){
        
    }
}
export default Key