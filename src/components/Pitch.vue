<template>
    <div>
        <navigation></navigation>
<p>
			<!-- <button onclick="this.innerText = togglePlayback()">use demo audio</button> -->
			<!-- <button onclick="toggleLiveInput()">use live input</button> -->
            <v-btn color="" @click="toggleLiveInput">use live input</v-btn>
            <v-btn @click="getNote">get Note</v-btn>
			<!-- <button onclick="toggleOscillator()">use oscillator</button> -->
			<!--<button onclick="updatePitch(0);">sample</button>-->
		</p>

		<div id="detector" class="vague">
			<div class="pitch"><span id="pitch">--</span>Hz</div>
			<div class="note"><span id="note">--</span></div>   
			<canvas id="output" width=300 height=42></canvas>
			<div id="detune"><span id="detune_amt">--</span><span id="flat">cents &#9837;</span><span id="sharp">cents &#9839;</span></div>
		</div>
                    <span>Note: {{pitch_data.note}} </span>
                    <br>
            <span >Frquency: {{pitch_data.pitch}}</span>
            <br>
            <span >Cents: {{pitch_data.detune}}</span>
            <br>
            <v-btn color="purple" @click="stop">Stop</v-btn>
    </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
import {pitch_data, toggleLiveInput } from './../Classes/PitchDetect'
import piano from './../Classes/Piano'
import navigation from './Navigation'
export default {
    data() {
        return {
            toggleLiveInput,
            notes: [],
            piano,
            timer: null,
            pitch_data,
        }
    },
    components:{
        navigation, 
    },
    methods: {
        getNote() {
                this.notes.push(this.pitch)
                let octave
                    if (this.pitch.pitch > 33 && this.pitch.pitch < 63)
                        octave = 2
                    else if (this.pitch.pitch >= 63 && this.pitch.pitch <= 134)
                        octave = 3
                    else if (this.pitch.pitch > 134 && this.pitch.pitch < 269)
                        octave = 4
                    else if (this.pitch.pitch >= 269 && this.pitch.pitch <= 510)
                        octave = 5
                    else if (this.pitch.pitch > 510 && this.pitch.pitch < 1075)
                        octave = 6
                    else
                        octave = 3
                // this.piano.note(this.pitch.note + octave + "q").play()

                // count += 50
                
                //     this.piano.note(this.pitch.note + octave + "q").play()
                //     count = 0
                // }

            // this.timer = setInterval(()=> {
            // this.piano.note(this.pitch.note + "3q").play()
            // }, 1000)
        },
        stop() {
            clearInterval(this.timer)
        }
    }
}
</script>

<style>
			body { font: 14pt 'Alike', sans-serif;}
			#note { font-size: 164px; }
			.droptarget { background-color: #348781}
			div.confident { color: black; }
			div.vague { color: lightgrey; }
			#note { display: inline-block; height:180px; text-align: left;}
			
			#detector { width: 300px; height: 300px; border: 4px solid gray; border-radius: 8px; text-align: center; padding-top: 10px;}
			#output { width: 300px; height: 42px; }
			#flat { display: none; }
			#sharp { display: none; }
			.flat #flat { display: inline; }
			.sharp #sharp { display: inline; }
		</style>