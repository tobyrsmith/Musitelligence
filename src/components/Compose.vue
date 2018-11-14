<template>
    <v-app id="insipre">
        <v-container grid-list-xl>
            <br>
            <v-btn class="general-btn" color="success" flat @click="$emit('toggle', false)">Change Scale</v-btn>
            <h1></h1>
            <h1>{{scale.toString()}}</h1>
            <div v-for="c in scale.chords" :key="c.toString()">
                <v-layout row wrap justify-center>
                    <v-btn class="general-btn" color="success" @click="c.play()">{{c.toString()}}</v-btn>
                    <span v-for="d in duration_types" :key="d">
                        <v-btn class="general-btn" color="success" @click="addData(c,d)" flat icon>{{d}}</v-btn>
                    </span>
                    <!-- <v-select :items="duration_types" v-model="durations[i]" label="Duration"></v-select>
                    <v-btn class="general-btn" @click="c.play()" flat icon>
                        <v-icon>music_note</v-icon>
                    </v-btn> -->
                </v-layout>
                <br>
            </div>
            <v-btn class="general-btn" @click="piece.play()">Play!</v-btn>
            <v-btn class="general-btn" @click="piece.rhythm.metronome = !piece.rhythm.metronome">Metronome!</v-btn>
            <v-btn class="general-btn" color="success" @click="removeData">Remove!</v-btn>
            <br>
            <span id="bpmval">BPM: {{bpm}}</span>
            <v-slider name="bpm" :min="40" :max="300" step="5" v-model="bpm" @change="updateBPM" thumb-label="always" class="slider" height="70"></v-slider>
            <br><br><br>
            <p>Current Beat: {{piece.rhythm.getBeat()}}
                <!-- <v-btn class="general-btn" color="primary" fab @click="piece.rhythm.toggleMetronome">Toggle Metronome</v-btn> -->
            </p>
            <br><br><br>
            <span>Volume: {{Math.floor(vol*100)}}</span>
            <!-- <input name="volume" type="range" id="vol" min="0" max="1" step="0.01" v-model="vol" @change="updateVol" class="slider"/> -->
            <v-slider name="volume" prepend-icon="volume_up" min="0" max="1" step="0.01" v-model="vol" @change="updateVol" class="slider"></v-slider>
            <br><br><br>
            <span>{{piece.toString()}}</span>
            <br>
            <!-- <span>{{piece.getData()}}</span> -->
        </v-container>
    </v-app>
</template>
<script>
import {Rhythm,Measure,Chord,Note, DiatonicScale, major_scale, Piece, Sequence, piano}  from 'note-art'
import navigation from './Navigation'
export default {
    name: 'compose',
    props: ['scale'],
    data(){
        return {
            measure1: new Measure(),
            seq1: new Sequence(),
            duration_types: ['w','h','q','e','s'],
            durations: ['q','q','q','q','q','q','q'],
            bpm: 80,
            vol: 1,
            piece: new Piece(80, [4,4]),

        }
    },
    methods: {
        addData(chord, duration){
            this.measure1.addNotes(chord.newDuration(duration))
            this.seq1.measures = [this.measure1]
            this.piece.data = [this.seq1]
        },
        removeData(){
            this.measure1.data.pop()
            this.seq1.measures = [this.measure1]
            this.piece.data = [this.seq1]
        },
        updateBPM() {
            this.piece.BPM = this.bpm
        },
        updateVol() {
            Howler.volume([this.vol])
        }
    } 
}
</script>
<style>
button{
    	text-transform: none !important;
}
</style>
