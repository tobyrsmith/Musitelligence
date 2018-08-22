<template>
  <div class="hello">
    <h1>Bit!</h1>
    <v-app id="lol">
    <div class="text-xs-center d-flex align-center">
    <v-flex xs12>
        <v-tooltip top>
            <v-btn slot="activator" @click="g">
                <v-icon>help</v-icon>
            </v-btn>
            <slot>JESUS</slot>
        </v-tooltip>
    </v-flex>
    </div>
    <audio ref="audio" id="audio">

<source v-bind:src="track">

Your browser does not support the audio element.

</audio>
  </v-app>
  </div>
</template>

<script>
import {g} from "/home/seanitzel/Documents/Programming/Web/Musitelligence/src/Rhythm.js"
function firstToUpper(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const track = "/home/seanitzel/Documents/Programming/Musitelligence"
export default {
  name: "Play",
  data() {
    return {
      g: g,
      track: track
    }
  },
  computed: {
    output: function() {}
  },
  methods: {

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
.scales{
  color: red;
  margin: 2%;
}
</style>
