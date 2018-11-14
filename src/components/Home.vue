<template>
    <v-app class="home">
        <navigation></navigation>
        <template v-if="!composer_on">
            <v-container grid-list-xs>
                <v-flex xs12>
                    <h1 style="text-align:center;">Note Generator</h1>
                </v-flex>
                <v-layout row wrap>
                    <v-flex xs6>
                        <v-text-field v-model="n" label="Note" outline clearable></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                        <v-text-field v-model="octave" label="Octave" type="text" outline clearable></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row wrap justify-center>
                    <div class="text-xs-center">
                        <v-flex xs11>
                            <v-btn class="general-btn" large @click="generate" round color="primary">Generate</v-btn>
                        </v-flex>
                    </div>
                </v-layout>
                <v-layout wrap justify-center v-if="generated" align-center>
                    <v-flex xs1>
                        <span>
                            {{note.toString()}}
                        </span>
                    </v-flex>
                    <v-flex xs1>
                        <v-btn class="general-btn" color="blue" flat icon @click="note.play()" style="text-align:center;">
                            <v-icon>music_note</v-icon>
                        </v-btn>
                    </v-flex>
                    <v-flex xs12>
                    <v-layout row wrap>
                            <div  v-for="p in pages" :key="p">
                        <v-flex xs1>
                                <v-btn small fab color="warning" @click="goToPage(p)">{{p}} </v-btn>
                        </v-flex>
                            </div>
                    </v-layout>
                    </v-flex>
                </v-layout>
                <transition-group name="fade" tag="span" v-if="generated">
                    <v-container class="diatonic_scales" v-for="(s, i) in scales_shown" :key="i">
                        <v-layout row justify-center>
                            <v-flex xs1>
                                {{i+1}}.
                            </v-flex>
                            <v-flex x7>
                                <v-layout column wrap>
                                    <v-btn class="general-btn scale_btn" round color="secondary orange" @click="g(s)"> {{note.note}} {{diatonic[start_index + i]['Scale'].length > 12 ? diatonic[start_index + i]['Scale'].slice(0,10)+'...' : diatonic[start_index + i]['Scale']}}
                                    </v-btn>
                                    <v-flex xs6>
                                        <span class="scale-notes">
                                            Notes: {{s.toString()}}
                                        </span>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex xs2>
                                <v-btn class="general-btn" color="blue" flat icon @click="s.play()" style="background-color: yellow;">
                                    <v-icon>music_note</v-icon>
                                </v-btn>
                            </v-flex>
                            <v-flex xs2>
                                <v-btn class="general-btn" color="blue" flat icon @click="goToComposer(s)" style="background-color: yellow;">
                                    <v-icon>edit</v-icon>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                        <template v-if="s.show == true">
                            <v-layout wrap justify-center align-center>
                                <v-flex xs10>
                                    <v-flex 12>
                                        <h4>Chords In Scale:</h4>
                                    </v-flex>
                                    <span v-for="(c, j) in s.chords" :key="c.toString()" class="chords">
                                        <v-layout row wrap justify-center>
                                            <v-flex xs1>
                                                <span class="notes">
                                                    {{j+1}}.
                                                </span>
                                            </v-flex>
                                            <v-flex xs7>
                                                <span class="notes">
                                                    {{c.toString()}}
                                                </span>
                                            </v-flex>
                                            <v-flex xs2>
                                                <v-btn class="general-btn" color="blue" flat icon @click="c.play()" style="background-color: yellow;">
                                                    <v-icon>music_note</v-icon>
                                                </v-btn>
                                            </v-flex>
                                            <v-flex xs2>
                                                <v-btn class="general-btn" color="blue" flat icon @click="c.playMelody()" style="background-color: yellow;">
                                                    <v-icon>music_note</v-icon>
                                                </v-btn>
                                            </v-flex>
                                        </v-layout>
                                    </span>
                                </v-flex>
                            </v-layout>
                        </template>
                    </v-container>
                </transition-group>
                <br><br>
            </v-container>
        </template>
        <compose :scale="chosen_scale" v-if="composer_on" @toggle="composer_on=false">
        </compose>
    </v-app>
</template>

<script>
import {Rhythm,Measure, DiatonicScale,Chord, Note, major_scale, Piece, Sequence, piano, notes, all_scales, all_diatonic_scales}  from './../Classes/'
// import {Chord, Note} from 'm-note'
import navigation from './Navigation'
import Compose from './Compose'
function firstToUpper(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
export default {
    name: "Home",
    data() {
        let max_scales_shown = 30
        return {
            n: "",
            octave: "",
            note: "",
            note_output: "",
            scale_output: "",
            scale: [],
            chord_types: ["root", "1st Inversion", "second Inversion"],
            composer_on: false,
            chosen_scale: null,
            generated: false,
            all_scales,
            diatonic: [],
            scales_shown: null,
            max_scales_shown: 30,
            start_index: 0,
            end_index: 30,
            pages: Math.ceil(all_diatonic_scales.length/max_scales_shown),
            max_pages: 10,
        }
    },
    components: {
        navigation,
        Compose
    },
    computed: {
        generateScales(){

        }
    },
    methods: {
        generate() {
            this.generated = true
            this.scale_index = 0
            if (this.n != null) this.n = firstToUpper(this.n)
            if (!notes["#"].includes(this.n) && !notes["b"].includes(this.n)) {
                this.note = ""
                this.note_output = "NOT A NOTE!"
                this.scale = []
                this.generated = false
            } else {
                this.note = this.octave == "" ? new Note(this.n) : new Note(this.n, this.octave)
                this.note_output = "Note: " + this.note
                this.scale = []
                for (let s of all_diatonic_scales){
                    const pattern = s['Semi – Tones'].substring(1, s['Semi – Tones'].length - 1).split(',').map(Number)
                        this.diatonic.push(s)
                        this.scale.push(new DiatonicScale(this.note, pattern))
            }
            this.getPage()
            }
        },
        g(s) {
            s.show = !s.show
        },
        goToComposer(scale){
            this.composer_on = true
            this.chosen_scale = scale
        },
        getPage(){
            this.scales_shown = this.scale.slice(this.start_index, this.end_index)
        },
        goToPage(p){
            this.start_index = 0 + (p-1) * this.max_scales_shown
            this.end_index = this.start_index + this.max_scales_shown < this.diatonic.length ? this.start_index + this.max_scales_shown : this.diatonic.length
            this.getPage()
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  font-size: 35pt;
}
a {
  color: #42b983;
}

.diatonic_scales{
    text-align: center !important;
  font-size: 2em;
}
.scale_btn{
	background-color: coral !important;
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
.scale-notes{
    color: brown;
    font-size: 55%;
}
.notes{
    color: #42b983;
    font-size: 55%;
    text-align: center;
}
</style>
