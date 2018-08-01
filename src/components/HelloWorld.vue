<template>
  <div class="hello">
    <h1>Scales!</h1>
    <input type="text" v-model="n">
    <button @click="f">get Scale</button>
    <p>{{note_output}}</p>
    <p>{{scale_output}}</p>
  </div>
</template>

<script>
import {
  Note,
  notes
} from "/home/seanitzel/Documents/Programming/Musitelligence/src/Lang.js";
function firstToUpper(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export default {
  name: "HelloWorld",
  data() {
    return {
      n: "",
      note: "",
      scale: "",
      note_output: "",
      scale_output: ""
    };
  },
  computed: {
    output: function() {}
  },
  methods: {
    f() {
      console.log(notes["b"].indexOf("Eb"));
      if (this.n != null) this.n = firstToUpper(this.n);
      if (notes["#"].indexOf(this.n) < 0 && notes["b"].indexOf(this.n) < 0) {
        this.note = "";
        this.note_output = "NOT A NOTE!";
        this.scale_output = "";
      } else {
        this.note = new Note(this.n);
        this.scale = this.note.getMajorScale();
        this.note_output = "Note: " + this.note;
        this.scale_output = "Major Scale: " + this.scale;
      }
    }
  }
};
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
</style>
