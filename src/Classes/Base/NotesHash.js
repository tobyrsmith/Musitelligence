export class NotesHash{
	constructor(){
		this.loaded = [];
	}
	set(note){
		let n = note;
		if(this.loaded[n.instrument] == undefined)
			this.loaded[n.instrument] = n.instrument;
		if(this.loaded[n.instrument][n.note] == undefined)
			this.loaded[n.instrument][n.note] = n.note;
		if(this.loaded[n.instrument][n.note][n.octave] == undefined)
			this.loaded[n.instrument][n.note][n.octave];
	}
	get(note){
		return this.loaded[n.instrument][n.note][n.octave];
	}
}