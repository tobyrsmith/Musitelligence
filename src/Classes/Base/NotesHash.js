import {notes} from './Patterns'
import {Howl, Howler} from 'howler';
import { Note } from './Note';
/**
 * A hash table for holding all the note sounds and playing them efficiently.
 * @class
 */
export class NotesHash{
	constructor(){
		this.loaded = [];
    }
    /**
     * add a specific note sound to be played in the future.
     * @param {string} instrument Piano/Guitar
     * @param {string} note Musical Note
     * @param {number} octave According to the instrument.
     */
	set(instrument, note, octave){
		if(!this.loaded[instrument + note + octave]){
			let path = 'http://0.0.0.0:8000/' + instrument + '/' + 'FF_' + note + octave+ '.mp3'
			this.loaded[instrument + note + octave] = new Howl({
				src: [path]
			  });
		}
    }
    /**
     * retrieve a note sound from the note sound hash table.
     * @param {Note} note Note Instance.
     */
	get(note){
		return this.loaded[note.instrument + notes['b'][notes[note.lang].indexOf(note.note)] + note.octave]
	}
}