<template>
  <div class="hello">
    <h1>Scales!</h1>
    <input type="text" v-model="n">
    <button @click="f">get Scale</button>
    <p>{{note_output}}</p>
    <!-- <p>{{scale_output}}</p> -->
    <div class="scales" v-for="s in m_scale" :key="s">{{s}}</div>
  </div>
</template>

<script>
import {
  Note,
  notes,
  DiatonicScale,
  minor_scale,
  scales
} from "/home/seanitzel/Documents/Programming/Web/Musitelligence/src/Lang.js";
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
      scale_output: "",
      m_scale: []
    };
  },
  computed: {
    output: function() {}
  },
  methods: {
    f() {
      if (this.n != null) this.n = firstToUpper(this.n);
      if (notes["#"].indexOf(this.n) < 0 && notes["b"].indexOf(this.n) < 0) {
        this.note = "";
        this.note_output = "NOT A NOTE!";
        this.scale_output = "";
        this.m_scale = "";
      } else {
        this.note = new Note(this.n);
        this.scale = this.note.getMajorScale();
        this.note_output = "Note: " + this.note;
        this.scale_output = "Major Scale: " + this.scale;
        this.m_scale = [];
          // this.m_scale.push("Major: " + (new DiatonicScale(this.n, scales["Major"])).getNotes());
        for(let s in scales)
          this.m_scale.push(s + ": " + (new DiatonicScale(this.n, scales[s])).getNotes());
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
.scales{
  color: red;
  margin: 2%;
}
</style>
