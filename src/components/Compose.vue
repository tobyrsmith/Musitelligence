<template>
  <v-container grid-list-xl>
      <v-app>
        <br>
        <v-btn color="success" flat @click="$emit('toggle', false)">Change Scale</v-btn>
        <h1></h1>
        <h1>{{scale.toString()}}</h1>
        <div v-for="(c,i) in scale.chords" :key="c.toString()">
            <v-layout row wrap justify-center>
            <v-btn color="success" @click="addData(c,durations[i])">{{c.toString()}}</v-btn>
            <v-select
                :items="duration_types"
                v-model="durations[i]"
                label="Duration"
            ></v-select>
            <v-btn @click="c.play()" flat icon> <v-icon>music_note</v-icon></v-btn>
            </v-layout>
        </div>
        <v-btn @click="piece.play()">Play!</v-btn>
        <br>
        <span>{{piece.toString()}}</span>
        <br>
        <!-- <span>{{piece.getData()}}</span> -->
      </v-app>
  </v-container>
</template>
<script>
import Rhythm from './../Classes/Base/Rhythm'
import Measure from './../Classes/Measure'
import Chord from './../Classes/Base/Chord'
import {
    Note
} from '../Classes/Base/Note'
import {
    DiatonicScale
} from '../Classes/Base/Scale'
import {
    major_scale
} from '../Classes/Base/Patterns'
import Piece from './../Classes/Piece'
import Sequence from './../Classes/Sequence'
import piano from './../Classes/Piano'
import navigation from './Navigation'
export default {
    name: 'compose',
    props: ['scale'],
    data(){
        return {
            piece: new Piece(120, [4,4]),
            measure1: new Measure(),
            seq1: new Sequence(),
            duration_types: ['w','h','q','e','s'],
            durations: ['q','q','q','q','q','q','q'],
        }
    },
    methods: {
        addData(chord, duration){
            this.measure1.addNotes(chord.newDuration(duration))
            this.seq1.measures = [this.measure1]
            this.piece.data = [this.seq1]
        }
    } 
}
</script>
<style>
button{
    	text-transform: none !important;
}
</style>
