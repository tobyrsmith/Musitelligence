<template>
    <div class="home">
        <navigation></navigation>
        <br>
        <v-app v-if="!composer_on">
                <h1>Song Composer</h1>
                <div>
                    <input class="in" type="text" v-model="n">
                    <input class="in" type="text" v-model="octave">
                    <v-btn @click="f" round color="primary green">get Scale</v-btn>
                </div>
                <div>
                <v-btn color="blue" flat @click="note.play()" style="background-color: yellow;">
                    {{note_output}}
                    <v-icon>music_note</v-icon>
                </v-btn>
                <v-btn color="blue" flat @click="oct" style="background-color: yellow;">
                    Study Note:<v-icon>music_note</v-icon>
                </v-btn>
                </div>
            <transition-group name="fade" tag="span">
                <div class="diatonic_scales" v-for="(s, i) in scale" :key="i">
                    <v-layout justify-center>
                        <v-flex xs4>
                            {{i+1}}.
                            <v-btn round class="scale_btn" color="secondary orange" @click="g(s)"> {{note.note}} {{Object.keys(diatonic_scales)[i]}} : {{s.toString()}}
                            </v-btn>
                        </v-flex>
                        <v-flex xs1>
                            <v-btn color="blue" flat icon @click="s.play()" style="background-color: yellow;">
                                <v-icon>music_note</v-icon>
                            </v-btn>
                        </v-flex>
                        <v-flex xs1>
                                                        <v-btn color="blue" flat icon @click="goToComposer(s)" style="background-color: yellow;">
                                <v-icon>edit</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                    <template v-if="s.show == true">
                        <br>
                        <span v-for="(c, j) in s.chords" :key="c.toString()" class="chords">
                            <v-layout row wrap justify-center>
                                <v-flex xs1>
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{j+1}}.
                                    </span>
                                </v-flex>
                                <v-flex xs3>
                                    {{c.toString()}}
                                </v-flex>
                                <v-flex xs1>
                                    <v-btn color="blue" flat icon @click="c.play()" style="background-color: yellow;">
                                        <v-icon>music_note</v-icon>
                                    </v-btn>
                                </v-flex>
                                <v-flex xs1>

                                    <v-btn color="blue" flat icon @click="c.playMelody()" style="background-color: yellow;">
                                        <v-icon>music_note</v-icon>
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                            <br>
                        </span>
                    </template>
                </div>
            </transition-group>
            <br><br>
        </v-app>
        <compose :scale="chosen_scale" v-if="composer_on" @toggle="composer_on=false">
        </compose>
    </div>
</template>

<script>
import {
    Note
} from '../Classes/Base/Note'
import {
    DiatonicScale
} from '../Classes/Base/Scale'
import {
    Chord
} from '../Classes/Base/Chord'
import {
    diatonic_scales,
    notes
} from '../Classes/Base/Patterns'
import Piano from './Piano'
import navigation from './Navigation'
import Compose from './Compose'
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
            composer_on: false,
            chosen_scale: null,
        };
    },
    components: {
        navigation,
        Compose
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
        goToComposer(scale){
            this.composer_on = true
            this.chosen_scale = scale
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
            setTimeout(() => {
                    clearInterval(timerId)
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
a {
  color: #42b983;
}
.home{
    text-align: center;
}

.diatonic_scales{
    text-align: center !important;
  font-size: 2em;
}
@media only screen and (min-width: 768px) {
    /* For mobile phones: */
    [class*="diatonic_scales"] {
        font-size: 30pt;
    }
}
.in{
    background-color: chartreuse;
    font-size: 30pt;
	color: black;
    width: 15%;
}
.scale_btn{
	text-transform: none !important;
	/* font-size: 20pt; */
	/* color:cyan !important; */
	background-color: coral !important;
}
@media only screen and (min-width: 768px) {
    /* For mobile phones: */
    [class*="scale_btn"] {
        font-size: 20pt;
    }
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
</style>
