<template>
  <div class="hello">
    <h1>Bit!</h1>
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
        }
    },
    methods: {
        g() {
            setInterval(()=> {
                this.meas.play()
            }, this.meas.rhythm.bpm/60*4*1000)
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
