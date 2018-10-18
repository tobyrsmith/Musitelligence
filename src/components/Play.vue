<template>
  <div class="hello">
    <h1>Bit!</h1>
    <input name="bpm" id="bpm" type="range" min="60" max="180"  step="1" v-model="bpm" @change="updateBPM"/>
	<span id="bpmval">{{bpm}}</span>
    <v-btn slot="activator" @click="g">
      <v-icon>help</v-icon>
    </v-btn>
    <p v-if="r">{{meas.rhythm.getBeat()}}</p>
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
import { Note } from '../Classes/Base/Note'
import { DiatonicScale } from '../Classes/Base/Scale'
import { major_scale } from '../Classes/Base/Patterns';
export default {
    name: "Play",
    data() {
        const C = new DiatonicScale('C', major_scale),
        c =            {
                notes: [C.getChord(1)],
                length: 'h'
            },
            G = {
                notes: [C.getChord(5)],
                length: 'q'
            },
            F = {
                notes: [C.getChord(4)],
                length: 'q'
            },
            Am = {
                notes: [C.getChord(6)],
                length: 'h'
            },
        notes = []
        for(let i = 0; i < 100; i++)
            notes.push(c,G,G,Am,G,G)
        let bpm = 60
        return {
            notes,
            bpm,
            meas: new Measure(new Rhythm(bpm, [4, 4]), notes),
            r: new Rhythm(bpm, [4,4]),
            beat: null,
        }
    },
    methods: {
        g() {
            // setInterval(()=> {
            //     this.meas.play()
            // }, this.meas.rhythm.bpm/60*4*1000)

            this.meas.play()
            this.beat = this.meas.rhythm.getBeat()
        },
        updateBPM(){
            this.meas.rhythm.bpm = this.bpm
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .scales {
    color: red;
    margin: 2%;
  }

</style>
