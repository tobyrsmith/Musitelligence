<template>
  <div class="home">
    <h1>Scales!</h1>
    <div>
      <input class="in" type="text" v-model="n">
      <v-btn @click="f" round color="primary green">get Scale</v-btn>
    </div>
    <p>{{note_output}}</p>
    <v-btn color="blue" flat icon @click="" style="background-color: yellow;">
      <v-icon>music_note</v-icon>
    </v-btn>
    <!-- <p>{{scale_output}}</p> -->
    <transition-group name="fade" tag="span">
      <p class="diatonic_scales" v-for="(s, i) in scale" :key="i">
        <v-btn round class="scale_btn" color="secondary" @click="g(s)">{{i+1}}. {{Object.keys(diatonic_scales)[i]}} :
          {{s.toString()}}</v-btn>
    <v-btn color="blue" flat icon @click="s.playNotes()" style="background-color: yellow;">
      <v-icon>music_note</v-icon>
    </v-btn>
        <template v-if="s.show == true">
          <!-- <transition-group name="fade"> -->
          <span v-for="c in s.chords" :key="c.toString()" class="chords">
            {{c.toString()}}
					     <v-btn color="blue" flat icon @click="c.playNotesHarmony()" style="background-color: yellow;">
      <v-icon>music_note</v-icon>
    </v-btn>
						     <v-btn color="blue" flat icon @click="c.playNotesMelody()" style="background-color: yellow;">
      <v-icon>music_note</v-icon>
    </v-btn>
          </span>

          <!-- </transition-group> -->
        </template>

      </p>
    </transition-group>
    <div class="chords">
      <input v-model="chrd" type="text" class="in" />
      <v-btn color="success" style="background-color:grey;" @click="test">Get Chord</v-btn>
      <span>
        {{xchord.toString()}}
      </span>
    </div>
  </div>
</template>

<script>
import {Note} from '../Classes/Base/Note'
import {DiatonicScale} from '../Classes/Base/Scale'
import {Chord} from '../Classes/Base/Chord'
import {diatonic_scales, notes} from '../Classes/Base/Patterns'

function firstToUpper(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export default {
  name: "Home",
  data() {
    return {
    	n: "",
    	note: "",
    	note_output: "",
    	scale_output: "",
    	scale: [],
      	diatonic_scales,
		chrd: "",
		xchord: "",
    };
  },
  computed: {

  },
  methods: {
    f() {
      if (this.n != null) this.n = firstToUpper(this.n);
      if (!notes["#"].includes(this.n) && !notes["b"].includes(this.n)) {
        this.note = "";
        this.note_output = "NOT A NOTE!";
        this.scale = [];
      } else {
        this.note = new Note(this.n);
        this.note_output = "Note: " + this.note;
        this.scale = [];
        for (let s in diatonic_scales)
          this.scale.push(new DiatonicScale(this.n, diatonic_scales[s]));
      }
    },
    g(s) {
      s.show = !s.show
      // console.log((new Note('C')).getInterval(4).isEqual((new Note('E'))))
  },

	test(){
		// console.log((new Note('C')) === (new Note('C')));
		// console.log((new MusicalPattern('C', [2,2,1,2,2,2,1])).getInterval(4));
		// console.log(new Chord(new Note('A'), new Note('C'), new Note('E')))
		let b = new Note('b');
		console.log(b);
	  }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  font-size: 50pt;
}
ul {
  list-style-type: none;
  padding        : 0;
}
li {
  display: inline-block;
  margin : 0 10px;
}
a {
  color: #42b983;
}
.diatonic_scales{
  color : red;
  margin: 1%;
  font-size: 20pt;
}
.home{
    /* background-color: black; */
	color: blueviolet;
}
.in{
    background-color: chartreuse;
    font-size: 30pt;
	color: black;
}
.scale_btn{
	text-transform: none !important;
	font-size: 20pt;
	font-family: sans-serif;
	color:cyan;
	background-color: coral;
	display: inline-block;
}
.diatonic_scales{
	display: block;
}
.chords{
	display: block;
}
/* moving */
.fade-move {
  transition: all 200ms ease-in;
}

/* appearing */
.fade-enter-active {
  transition: all 200ms ease-in;
}

/* disappearing */
.fade-leave-active {
  transition: all 200ms ease-in;
}

/* appear at / disappear to */
.fade-enter,
.fade-leave-to {
  transition: all 200ms ease-in;
}
.chords{
	background-color: aqua;
	color: darkred;
	font-size: 20pt;
}
</style>
