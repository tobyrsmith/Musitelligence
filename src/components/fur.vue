<template>
    <v-app id="inspire">
        <navigation></navigation>
        <v-container fluid grid-list-lg>
            <v-layout row wrap justify-center>
                <v-flex xs12>
                    <h1 class="st" style="text-align:center;">Fur Elise</h1>
                </v-flex>
            </v-layout>
            <v-flex xs12 style="text-align:center;">
                <v-btn class="general-btn" color="success" round large @click="g">
                    <v-icon>music_note</v-icon>Press Me!<v-icon>music_note</v-icon>
                </v-btn>
            </v-flex>
            <br><br>
            <v-layout row align-center>
                <v-flex xs12>
                    <v-slider name="bpm" label="BPM" :min="40" :max="300" step="5" v-model="bpm" @change="updateBPM" thumb-label="always" class="slider" height="30"></v-slider>
                </v-flex>
            </v-layout>
            <v-flex xs12>
                <v-slider name="volume" prepend-icon="volume_up" min="0" max="1" step="0.01" v-model="vol" @change="updateVol" class="slider" height="30"></v-slider>
            </v-flex>
            <v-layout column wrap align-center>
                <v-flex xs12>
                    <v-btn class="general-btn" color="primary" fab @click="piece.rhythm.toggleMetronome">Toggle Metronome</v-btn>
                </v-flex>
                <v-flex xs12>
                    <p v-if="piece.rhythm.metronome"> 
                        Current Beat:{{piece.rhythm.getBeat()}}
                    </p>
                </v-flex>
            </v-layout>
            <br><br><br>
        </v-container>
    </v-app>
</template>

<script>
import {
    Howl,
    Howler
} from 'howler'
import {Rhythm,Measure,Chord,Note, DiatonicScale, major_scale, Piece, Sequence, piano}  from './../Classes/'
import navigation from './Navigation'

export default {
    name: "Play",
    data() {
        const e = new Note('e', 5, 'e'),
            ds = new Note('d#', 5, 'e'),
            b = new Note('b', 4, 'e'),
            d = new Note('d', 5, 'e'),
            c = new Note('c', 5, 'e'),
            a = new Note('a', 4, 'q'),
            notes = []
        const ms1 = new Measure([piano.note('e5e'), piano.note('d#5e')]),
            ms2 = new Measure([piano.note('e5e'), piano.note('d#5e'), piano.note('e5e'), piano.note('b4e'), piano.note('d5e'), piano.note('c5e')]),
            ms3 = new Measure([
                [piano.note('a4q'), piano.note('a2e')], piano.note('e3e'), piano.note('a3e'), piano.note('c4e'), piano.note('e4e'), piano.note('a4e')
            ]),
            ms4 = new Measure([
                [b.newDuration('q'), piano.note('e2e')], piano.note('e3e'), new Note('g#', 3, 'e'), new Note('e', 4, 'e'), new Note('g#', 4, 'e'), new Note('b', 4, 'e')
            ]),
            ms5 = new Measure([
                [c.newDuration('q'), new Note('a', 2, 'e')], new Note('e', 3, 'e'), new Note('a', 3, 'e'), new Note('e', 4, 'e'), e, ds
            ]),
            ms6 = new Measure([
                [b.newDuration('q'), piano.note('e2e')], piano.note('e3e'), new Note('g#', 3, 'e'), new Note('e', 4, 'e'), c, b
            ]),
            ms7 = new Measure([
                [a, new Note('a', 2, 'h'), ], new Note('e', 3, 'e'), new Note('a', 3, 'q'), e, ds
            ])
        const sq1 = new Sequence([ms2, ms3, ms4, ms5]),
            sq2 = new Sequence([ms2, ms3, ms6, ms7])
        let bpm = 120
        const fur_elise = [ms1, sq1, sq2,sq1, sq2, sq1, sq2, sq1, sq2]
        return {
            bpm,
            beat: null,
            vol: 1,
            piece: new Piece(bpm, [4, 4], fur_elise),
            piano: piano.note('E5')
        }
    },
    components: {
        navigation
    },
    methods: {
        g() {
            this.piece.play()
            this.beat = this.piece.rhythm.getBeat()
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app{
    text-align: center;
}
  h1,
  h2 {
    font-weight: normal;
          font-size: 40pt;
      /* background-color: aqua; */
  }
  p, span{
      font-size: 20pt;
      color: red;
      display: inline;
  }
  .slider{
      background-color: lavender;
  }
.v-btn {
  width: 100pt;
  height: 60pt;
}

</style>
