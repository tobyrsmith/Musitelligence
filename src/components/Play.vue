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
  } from 'howler';

  function firstToUpper(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const track = 'http://0.0.0.0:8000/Grand%20Piano/piano-f-a1.wav'
  const sound = new Howl({
    src: [track],
  })
  export default {
    name: "Play",
    data() {
      return {
        sound,
      }
    },
    computed: {
      output: function () {}
    },
    methods: {
      g() {
        console.log(this.sound)
        this.sound.play();
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
