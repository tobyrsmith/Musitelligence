<template>
    <div class="home">
        <h1>Scales!</h1>
        <!-- <v-btn color="success green" @click="test.playsHarmony()">{{test.toString()}}</v-btn>
         -->
        <div>
            <input class="in" type="text" v-model="n">
            <input class="in" type="text" v-model="octave">
            <v-btn @click="f" round color="primary green">get Scale</v-btn>
        </div>
        
        <v-btn color="blue" flat @click="note.play()" style="background-color: yellow;">
            {{note_output}}<v-icon>music_note</v-icon>
        </v-btn>
        <v-btn color="blue" flat @click="oct" style="background-color: yellow;">
            Study Note:<v-icon>music_note</v-icon>
        </v-btn>
        <transition-group name="fade" tag="span">
            <div class="diatonic_scales" v-for="(s, i) in scale" :key="i">
                <v-btn round class="scale_btn" color="secondary orange" @click="g(s)">{{i+1}}. {{n}} {{Object.keys(diatonic_scales)[i]}}
                    </v-btn>
                <v-btn color="blue" flat icon @click="s.plays()" style="background-color: yellow;">
                    <v-icon>music_note</v-icon>
                </v-btn>
                <template v-if="s.show == true">
                    <span v-for="c in s.chords" :key="c.toString()" class="chords">
                        <v-card
                            color="success blue">{{c.toString()}}
                        </v-card>
                        <v-btn color="blue" flat icon @click="c.play()" style="background-color: yellow;">
                            <v-icon>music_note</v-icon>
                        </v-btn>
                        <v-btn color="blue" flat icon @click="c.playsMelody()" style="background-color: yellow;">
                            <v-icon>music_note</v-icon>
                        </v-btn>
                    </span>
                </template>
            </div>
        </transition-group>
        <br><br>
<piano></piano>
    </div>
</template>

<script>
import {Note} from '../Classes/Base/Note'
import {DiatonicScale} from '../Classes/Base/Scale'
import {Chord} from '../Classes/Base/Chord'
import {diatonic_scales, notes} from '../Classes/Base/Patterns'
import keys1 from './../assets/keys1.svg'
import piano from './../Classes/Piano'
import Piano from './Piano'
function firstToUpper(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
export default {
    name: "Home",
    data() {
        return {
            n: "",
            octave: "",
            note: "",
            note_output: "",
            scale_output: "",
            scale: [],
            diatonic_scales,
            chord_types: ["root", "1st Inversion", "second Inversion"],
        };
    },
    components: {
        Piano
    },
    methods: {
        f() {
            if (this.n != null) this.n = firstToUpper(this.n);
            if (!notes["#"].includes(this.n) && !notes["b"].includes(this.n)) {
                this.note = "";
                this.note_output = "NOT A NOTE!";
                this.scale = [];
            } else {
                this.note = this.octave == "" ? new Note(this.n) : new Note(this.n, this.octave);
                this.note_output = "Note: " + this.note;
                this.scale = [];
                for (let s in diatonic_scales)
                    this.scale.push(new DiatonicScale(this.note, diatonic_scales[s]));
            }
        },
        g(s) {
            s.show = !s.show
        },
        oct() {
            let tmp = []
            for (let i = 1; i <= 7; i++)
                tmp.push(new Note(this.n, i))
            this.foo = tmp
            let timerId = setInterval(() => {
                let i = Math.floor(Math.random() * 7)
                this.foo[i].play()
            }, 2000)
            setTimeout(() => { clearInterval(timerId)
            }, 
            20000)
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  font-size: 50pt;
}
button{
    max-width: 100%;
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
    width: 15%;
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
