<template>
    <v-app id="inspire">
        <navigation></navigation>
        <v-container fluid grid-list-lg>
            <v-layout row wrap justify-center>
                <v-flex xs12>
                    <h1
                        class="st"
                        style="text-align:center;"
                    >Fur Elise [{{piece.duration}}s]</h1>
                </v-flex>
            </v-layout>
            <v-flex xs12 style="text-align:center;">
                <v-btn
                    class="general-btn"
                    color="success"
                    round
                    large
                    @click="g"
                >
                    <v-icon>music_note</v-icon>Press Me!
                    <v-icon>music_note</v-icon>
                </v-btn>
            </v-flex>
            <br>
            <br>
            <v-layout row align-center>
                <v-flex xs12>
                    <v-slider
                        name="bpm"
                        label="BPM"
                        :min="40"
                        :max="300"
                        step="5"
                        v-model="bpm"
                        @change="updateBPM"
                        thumb-label="always"
                        class="slider"
                        height="30"
                    ></v-slider>
                </v-flex>
            </v-layout>
            <v-flex xs12>
                <v-slider
                    name="volume"
                    prepend-icon="volume_up"
                    min="0"
                    max="1"
                    step="0.01"
                    v-model="vol"
                    @change="updateVol"
                    class="slider"
                    height="30"
                ></v-slider>
            </v-flex>
            <v-layout column wrap align-center>
                <v-flex xs12>
                    <v-btn
                        class="general-btn"
                        color="primary"
                        fab
                        @click="piece.rhythm.toggleMetronome"
                    >
                        Toggle
                        Metronome
                    </v-btn>
                </v-flex>
                <v-flex xs12>
                    <p
                        v-if="piece.rhythm.metronome"
                    >Current Beat:{{piece.rhythm.getBeat()}}</p>
                </v-flex>
            </v-layout>
            <v-layout row wrap align-center justify-center>
                <v-flex xs1>
                    <v-text-field
                        v-model="trans"
                        name="Transpose"
                        label="Interval"
                        id="id"
                    ></v-text-field>
                </v-flex>
                <v-flex xs1>
                    <v-btn color="secondery" @click="transpose">Transpose</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    import {
        Howl,
        Howler,
    } from 'howler'
    import { Measure, Note, major_scale, Piece, Sequence, Piano } from 'note-art'
    import navigation from './Navigation'

    export default {
        name: 'Play',
        data() {
            const piano = new Piano()
            const fur_elise = []
            for (let i = 0; i < 7; i++)
                fur_elise.push(new Measure())
            const m_notes = [
                [
                    [piano.note('e5e')],
                    [piano.note('d#5e')]
                ],
                [
                    [piano.note('e5e')],
                    [piano.note('d#5e')],
                    [piano.note('e5e')],
                    [piano.note('b4e')],
                    [piano.note('d5e')],
                    [piano.note('c5e')],
                ],
                [
                    [piano.note('a4q'), piano.note('a2e')],
                    [piano.note('e3e')],
                    [piano.note('a3e')],
                    [piano.note('c4e')],
                    [piano.note('e4e')],
                    [piano.note('a4e')],
                ],
                [
                    [piano.note('b4q'), piano.note('e2e')], [piano.note('e3e')], [piano.note('g#3e')], [piano.note('e4e')],
                    [piano.note('g#4e')], [piano.note('b4e')]
                ],
                [
                    [piano.note('c5q'), piano.note('a2e')],
                    [piano.note('e3e')],
                    [piano.note('a3e')],
                    [piano.note('e4e')],
                    [piano.note('e5e')],
                    [piano.note('d#5e')],
                ],
                [
                    [piano.note('b4q'), piano.note('e2e')],
                    [piano.note('e3e')],
                    [piano.note('g#3e')],
                    [piano.note('e4e')],
                    [piano.note('c5e')],
                    [piano.note('b4e')],
                ],
                [
                    [piano.note('a4q'), piano.note('a2h')], [piano.note('e3e')], [piano.note('a3q')],
                    [piano.note('e5e')], [piano.note('d#5e')],
                ]]

            const sq1 = new Sequence(),
                sq2 = new Sequence()
            sq1.pushMeasures([fur_elise[1], fur_elise[2], fur_elise[3], fur_elise[4]])
            sq2.pushMeasures([fur_elise[1], fur_elise[2], fur_elise[5], fur_elise[6]])

            let bpm = 120
            for (let i = 0; i < 7; i++) {
                fur_elise[i].pushNotes(m_notes[i])
            }
            const piece = new Piece(120, [3, 4])
            piece.pushMandS([fur_elise[0], sq1,sq2,sq1,sq2,sq1,sq2])
            return {
                bpm,
                beat: null,
                vol: 1,
                piece,
                trans: 1,
            }
        },
        components: {
            navigation,
        },
        destroyed() {
            if (this.piece.isPlaying())
                this.piece.play()
        },
        methods: {
            g() {
                this.piece.play()
                this.beat = this.piece.rhythm.getBeat()
            },
            updateBPM() {
                this.piece.bpm = this.bpm
            },
            updateVol() {
                Howler.volume([this.vol])
            },
            transpose() {
                if (parseInt(this.trans))
                    this.piece = this.piece.transpose(this.trans)
            },
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #app {
        text-align: center;
    }

    h1,
    h2 {
        font-weight: normal;
        font-size: 40pt;
        /* background-color: aqua; */
    }

    p,
    span {
        font-size: 20pt;
        color: red;
        display: inline;
    }

    .slider {
        background-color: lavender;
    }

    .v-btn {
        width: 100pt;
        height: 60pt;
    }
</style>
