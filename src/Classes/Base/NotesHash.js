import {notes} from './Patterns'
import {Howl, Howler} from 'howler';

export default class NotesHash{
	constructor(){
		this.loaded = [];
	}
	set(instrument, note, octave){
		if(!this.loaded[instrument + note + octave]){
			let path = 'http://0.0.0.0:8000/' + instrument + '/' + 'FF_' + note + octave+ '.mp3'
			this.loaded[instrument + note + octave] = new Howl({
				src: [path]
			  });
		}
	}
	get(note){
		return this.loaded[note.instrument + notes['b'][notes[note.lang].indexOf(note.note)] + note.octave]
	}
}