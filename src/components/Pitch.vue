<template>
    <div>
        <navigation></navigation>
        <br><br>
            <v-btn class="general-btn" color="orange" @click="toggleLiveInput">use live input</v-btn>
                        <v-btn class="general-btn" color="orange" @click="reset">Reset</v-btn>
<br><br>
                    <span>Note: {{pitch_data.note}} </span>
                    <br><br><br>
            <span >Frquency: {{pitch_data.pitch}}</span>
            <br><br><br>
            <span >Cents: {{pitch_data.detune}}</span>
            <br><br><br>
            <span >Notes: {{pitch_data.toString()}}</span>
            <br><br><br><br>
            <span >Cached Notes: {{cached_notes}}</span>
            <br><br><br><br>
            <span >Cached Frequencies: {{cached_frequencies}}</span>
            <br><br>
                        <v-btn class="general-btn" color="green" @click="pitch_data.play">Play!</v-btn>
            <v-btn class="general-btn" color="red" @click="stop">Stop</v-btn>
    </div>
</template>
<script>
import {pitch_data, toggleLiveInput, cached_notes, cached_frequencies, reset} from './../Classes/PitchDetect'
import piano from './../Classes/Piano'
import navigation from './Navigation'
export default {
    data() {
        return {
            toggleLiveInput,
            piano,
            timer: null,
            pitch_data,
            cached_notes,
            cached_frequencies,
            reset
        }
    },
    components:{
        navigation, 
    },
    methods: {
        getNote() {
            let note = 0
            this.timer = setInterval(()=>{
                this.piano.note(this.pitch_data.notes[note] + "q").play()
                note++
                if(note == pitch_data.notes.length)
                    clearInterval(this.timer)
            }, 500)
        },
        stop() {
            clearInterval(this.timer)
        },
        resetData(){
            this.reset
        }
    }
}
</script>

<style>
#note {
  font-size: 164px;
}

.droptarget {
  background-color: #348781
}

div.confident {
  color: black;
}

div.vague {
  color: lightgrey;
}

#note {
  display: inline-block;
  height: 180px;
  text-align: left;
}

#detector {
  width: 300px;
  height: 300px;
  border: 4px solid gray;
  border-radius: 8px;
  text-align: center;
  padding-top: 10px;
}

#output {
  width: 300px;
  height: 42px;
}

#flat {
  display: none;
}

#sharp {
  display: none;
}

.flat #flat {
  display: inline;
}

.sharp #sharp {
  display: inline;
}

</style>