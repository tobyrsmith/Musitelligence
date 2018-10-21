<template>
    <div id="app">
        <v-app id="inspire">
            <v-container fluid grid-list-lg>
                <navigation></navigation>
                <h1 class="st">Fur Elise!</h1>
                <br><br><br>

                <span id="bpmval">BPM: {{bpm}}</span>
                <v-slider name="bpm" type="range" :min="40" :max="300" step="5" v-model="bpm" @change="updateBPM" thumb-label="always" class="slider" height="70"></v-slider>
                <br><br><br>

                <p v-if="r">Current Beat: {{piece.rhythm.getBeat()}}
                    <v-btn color="primary" fab @click="piece.rhythm.toggleMetronome">Toggle Metronome</v-btn>
                </p>
                <br><br><br>
                <span>Volume: {{Math.floor(vol*100)}}</span>
                <!-- <input name="volume" type="range" id="vol" min="0" max="1" step="0.01" v-model="vol" @change="updateVol" class="slider"/> -->
                <v-slider name="volume" prepend-icon="volume_up" min="0" max="1" step="0.01" v-model="vol" @change="updateVol" class="slider"></v-slider>
                <br><br><br>
                <v-btn color="success" round large @click="g" class="btn">
                    <v-icon>music_note</v-icon>Press Me!<v-icon>music_note</v-icon>
                </v-btn>
                <span>{{piano}}</span>
            </v-container>
        </v-app>
    </div>
</template>

<script>
import {
    Howl,
    Howler
} from 'howler'
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
        ms3 = new Measure([[piano.note('a4q'),piano.note('a2e')],piano.note('e3e'),piano.note('a3e'),piano.note('c4e'),piano.note('e4e'),piano.note('a4e')]),
        ms4 = new Measure([[b.newLength('q'), e.newOctave(2).newLength('e')], e.newOctave(3).newLength('e'), new Note('g#', 3, 'e'), new Note('e', 4, 'e'), new Note('g#', 4, 'e'), new Note('b', 4, 'e')]),
        ms5 = new Measure([[c.newLength('q'), new Note('a', 2, 'e')], new Note('e', 3, 'e'), new Note('a', 3, 'e'), new Note('e', 4, 'e'), e, ds]),
        ms6 = new Measure([[b.newLength('q'), e.newOctave(2).newLength('e')], e.newOctave(3).newLength('e'), new Note('g#', 3, 'e'), new Note('e', 4, 'e'),c,b]),
        ms7 = new Measure([[a, new Note('a', 2, 'h'),], new Note('e', 3, 'e'), new Note('a', 3, 'q'), e, ds])
        const sq1 = new Sequence([ms2, ms3, ms4, ms5]),
        sq2 = new Sequence([ms2, ms3, ms6, ms7])
        let bpm = 120
        return {
            bpm,
            r: new Rhythm(bpm, [4, 4]),
            beat: null,
            vol: 1,
            piece: new Piece(bpm, [3,4], [ms1, sq1, sq2, sq1, sq2,sq1, sq2]),
            piano: piano.note('E5')
        }
    },
    components: {
        navigation
    },
    methods: {
        g() {
            // setInterval(()=> {
            //     this.meas.play()
            // }, this.meas.rhythm.bpm/60*4*1000)
            this.piece.play()
            this.beat = this.piece.rhythm.getBeat()
        },
        updateBPM() {
            this.piece.rhythm.bpm = this.bpm
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
      background-color: aqua;
  }
  p, span{
      font-size: 30pt;
      color: red;
      /* background-color: lightcoral; */
      display: inline;
  }
  .slider{
      background-color: lavender;
  }
.v-btn {
  min-width: 0;
  width: 200pt;
  height: 100pt;
}

</style>
