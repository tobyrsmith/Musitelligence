<template>
    <v-app id="insipre">
        <v-container grid-list-xl>
            <br>
            <v-btn
                class="general-btn"
                color="success"
                flat
                @click="$emit('toggle', false)"
            >Change Scale</v-btn>
            <h1></h1>
            <h1>{{scale.toString()}}</h1>
            <div v-for="c in scale.chords" :key="c.toString()">
                <v-layout row wrap justify-center>
                    <v-btn
                        class="general-btn"
                        color="success"
                        @click="c.play()"
                    >{{c.toString()}}</v-btn>
                    <span v-for="d in duration_types" :key="d">
                        <v-btn
                            class="general-btn"
                            color="success"
                            @click="addData(c,d)"
                            flat
                            icon
                        >{{d}}</v-btn>
                    </span>
                    <!-- <v-select :items="duration_types" v-model="durations[i]" label="Duration"></v-select>
                    <v-btn class="general-btn" @click="c.play()" flat icon>
                        <v-icon>music_note</v-icon>
                    </v-btn>-->
                </v-layout>
                <br>
            </div>
            <v-btn class="general-btn" @click="load">Load!</v-btn>
            <v-btn class="general-btn" @click="playPiece">Play!</v-btn>
            <v-btn
                class="general-btn"
                @click="piece.rhythm.metronome = !piece.rhythm.metronome"
            >Metronome!</v-btn>
            <v-btn
                class="general-btn"
                color="success"
                @click="removeData"
            >Remove!</v-btn>
            <br>
            <span id="bpmval">BPM: {{bpm}}</span>
            <v-slider
                name="bpm"
                :min="40"
                :max="300"
                step="5"
                v-model="bpm"
                @change="updateBPM"
                thumb-label="always"
                class="slider"
                height="70"
            ></v-slider>
            <br>
            <br>
            <br>
            <p>
                Current Beat: {{piece.rhythm.getBeat()}}
                <!-- <v-btn class="general-btn" color="primary" fab @click="piece.rhythm.toggleMetronome">Toggle Metronome</v-btn> -->
            </p>
            <br>
            <br>
            <br>
            <span>Volume: {{Math.floor(vol*100)}}</span>
            <!-- <input name="volume" type="range" id="vol" min="0" max="1" step="0.01" v-model="vol" @change="updateVol" class="slider"/> -->
            <v-slider
                name="volume"
                prepend-icon="volume_up"
                min="0"
                max="1"
                step="0.01"
                v-model="vol"
                @change="updateVol"
                class="slider"
            ></v-slider>
            <br>
            <br>
            <br>
            <span>{{piece.toString()}}</span>
            <br>
            <!-- <span>{{piece.getData()}}</span> -->
        </v-container>
    </v-app>
</template>
<script>
    import { Measure, major_scale, Piece, Sequence } from 'note-art'

    export default {
        name: 'compose',
        props: ['scale'],
        data() {
            let measures = [new Measure(1)]
            let piece = new Piece(80, [4, 4])
            piece.pushMeasure(measures[0])
            return {
                measures,
                duration_types: ['w', 'h', 'q', 'e', 's'],
                vol: 1,
                bpm: 80,
                piece,
                new_measure: true
            }
        },
        methods: {
            addData(chord, duration) {
                if (this.measures.length === 0 || this.measures[this.measures.length - 1].isFull()) {
                    this.measures.push(new Measure(1))
                    // this.new_measure = true
                    this.measures[this.measures.length - 1].push(chord.newDuration(duration).notes)
                    console.log(this.measures.length)
                    this.piece.pushMeasure(this.measures[this.measures.length - 1])
                }
                else {
                    // if (this.new_measure) {
                    //     this.piece.pushMeasure(this.measures.length - 1)
                    //     this.new_measure = false
                    // }
                    this.measures[this.measures.length - 1].push(chord.newDuration(duration).notes)
                }
            },
            removeData() {
                if (this.measures[this.measures.length - 1].notes.length === 0){
                    this.measures.splice(this.measures.length - 1, 1)
                    this.piece.popMeasure()
                }
                else
                    this.measures[this.measures.length - 1].pop()
            },
            load() {
                this.piece.pushMeasures(this.measures)
            },
            playPiece() {
                this.piece.play()
            },
            updateBPM() {
                this.piece.bpm = this.bpm
            },
            updateVol() {
                Howler.volume([this.vol])
            },
        },
    }
</script>
<style>
    button {
        text-transform: none !important;
    }
</style>
