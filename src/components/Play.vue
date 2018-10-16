<template>
  <div class="hello">
    <h1>Bit!</h1>
    <input name="bpm" id="bpm" type="range" min="60" max="180" value="120" step="1" />
	<span id="bpmval">120</span>
    <v-btn slot="activator" @click="g">
      <v-icon>help</v-icon>
    </v-btn>
  </div>
</template>

<script>
import {
    Howl,
    Howler
} from 'howler'
import Rhythm from './../Classes/Base/Rhythm'
import Measure from './../Classes/Measure'
export default {
    name: "Play",
    data() {
        const notes = [{
                notes: ['a', 'c', 'e'],
                length: 'q'
            },
            {
                notes: ['a', 'c', 'e'],
                length: 'q'
            },
            {
                notes: ['c', 'g', 'b'],
                length: 'q'
            },
                       {
                notes: ['c', 'g', 'b'],
                length: 'q'
            },
        ]
        return {
            notes,
            meas: new Measure(new Rhythm(60, [4, 4]), notes),
            r: new Rhythm(60, [4,4])
        }
    },
    methods: {
        g() {
            // setInterval(()=> {
            //     this.meas.play()
            // }, this.meas.rhythm.bpm/60*4*1000)
            this.r.toggle()
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
