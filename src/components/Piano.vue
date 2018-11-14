<template>
    <v-app>
        <v-container grid-list-xs pa-0 ma-0>
            <v-layout row style="overflow: auto;" pa-0 ma-0>
                <v-flex xs12 class="in" pa-0 ma-0 v-for="(k, i) in octaves" :key="k.id">

            <img :src="piano_keys" alt="" :usemap="'#piano-map'+i">
            <map :name="'piano-map' + i">
                <area target="" alt="k" title="k" @click="piano.note('c' + parseInt(i+1) + 'q').play()"  coords="0,2,37,125" shape="rect">
                <area target="" alt="" title="" @click="piano.note('c' + parseInt(i+1) + 'q').play()" coords="2,126,49,217" shape="rect">

                <area target="" alt="" title="" @click="piano.note('c#' + parseInt(i+1) + 'q').play()" coords="38,3,64,125" shape="rect">

                <area target="" alt="" title="" @click="piano.note('d' + parseInt(i+1) + 'q').play()" coords="63,1,87,125" shape="rect">
                <area target="" alt="" title="" @click="piano.note('d' + parseInt(i+1) + 'q').play()" coords="52,125,101,217" shape="0">

                <area target="" alt="" title="" @click="piano.note('d#' + parseInt(i+1) + 'q').play()" coords="87,2,113,124" shape="rect">

                <area target="" alt="" title="" @click="piano.note('e' + parseInt(i+1) + 'q').play()" coords="114,2,149,126" shape="rect">
                <area target="" alt="" title="" @click="piano.note('e' + parseInt(i+1) + 'q').play()" coords="102,125,151,217" shape="0">

                <area target="" alt="" title="" @click="piano.note('f' + parseInt(i+1) + 'q').play()" coords="151,4,188,127" shape="rect">
                <area target="" alt="" title="" @click="piano.note('f' + parseInt(i+1) + 'q').play()" coords="152,126,199,217" shape="0">

                <area target="" alt="" title="" @click="piano.note('f#' + parseInt(i+1) + 'q').play()" coords="187,2,213,124" shape="rect">

                <area target="" alt="" title="" @click="piano.note('g' + parseInt(i+1) + 'q').play()" coords="214,1,236,125" shape="rect">
                <area target="" alt="" title="" @click="piano.note('g' + parseInt(i+1) + 'q').play()" coords="200,125,249,217" shape="0">

                <area target="" alt="" title="" @click="piano.note('g#' + parseInt(i+1) + 'q').play()" coords="237,0,261,126" shape="rect">

                <area target="" alt="" title="" @click="piano.note('a' + parseInt(i+1) + 'q').play()" coords="263,2,289,126" shape="rect">
                <area target="" alt="" title="" @click="piano.note('a' + parseInt(i+1) + 'q').play()" coords="250,126,299,218" shape="0">

                <area target="" alt="" title="" @click="piano.note('a#' + parseInt(i+1) + 'q').play()" coords="288,0,312,126" shape="rect">

                <area target="" alt="" title="" @click="piano.note('b' + parseInt(i+1) + 'q').play()" coords="314,2,348,126" shape="rect">
                <area target="" alt="" title="" @click="piano.note('b' + parseInt(i+1) + 'q').play()" coords="300,125,349,217" shape="rect">
            </map>
        </div>
                </v-flex>
            </v-layout>            
        </v-container>
    </v-app>
</template>

<script>
    import piano_keys from './../assets/piano-keys.jpg'
    import {piano} from 'note-art'
    export default {
        name: "Piano",
        created() {
            window.addEventListener('keydown', this.onkey)
        },
        beforeDestroy: function() {
            window.removeEventListener('keydown', this.onkey)
        },
        data() {
            return {
                piano_keys,
                piano,
                octaves: 7
            }
        },
        methods: {
            onkey(event) {
                if (event.key == 'F' || event.key == 'f')
                    this.piano.note('c3q').play()
                if (event.key == 'T' || event.key == 't')
                    this.piano.note('c#3q').play()
                if (event.key == 'G' || event.key == 'g')
                    this.piano.note('d3q').play()
                if (event.key == 'Y' || event.key == 'y')
                    this.piano.note('D#3q').play()
                if (event.key == 'H' || event.key == 'h')
                    this.piano.note('E3q').play()
                if (event.key == 'J' || event.key == 'j')
                    this.piano.note('F3q').play()
                if (event.key == 'K' || event.key == 'k')
                    this.piano.note('G3q').play()
                if (event.key == 'I' || event.key == 'i')
                    this.piano.note('f#3q').play()
                if (event.key == 'O' || event.key == 'o')
                    this.piano.note('G#3q').play()
                if (event.key == 'L' || event.key == 'l')
                    this.piano.note('A3q').play()
                if (event.key == 'P' || event.key == 'p')
                    this.piano.note('A#3q').play()
                if (event.key == ';' || event.key == ';')
                    this.piano.note('B3q').play()
                if (event.key == "'")
                    this.piano.note('C4q').play()
                if (event.key == ']')
                    this.piano.note('C#4q').play()
                if (event.keyCode == 220)
                    this.piano.note('d4q').play()
                if (event.key == 'D' || event.key == 'd')
                    this.piano.note('B2q').play()
                if (event.key == 'E' || event.key == 'e')
                    this.piano.note('A#2q').play()
                if (event.key == 'S' || event.key == 's')
                    this.piano.note('A2q').play()
                if (event.key == 'W' || event.key == 'w')
                    this.piano.note('G#2q').play()
                if (event.key == 'A' || event.key == 'a')
                    this.piano.note('G2q').play()
                if (event.key == 'Q' || event.key == 'q')
                    this.piano.note('F#2q').play()
                if (event.code == 'CapsLock')
                    this.piano.note('F2q').play()
                if (event.key == 'Z' || event.key == 'z')
                    this.piano.note('c6q').play()
                if (event.key == 'X' || event.key == 'x')
                    this.piano.note('D6q').play()
                if (event.key == 'C' || event.key == 'c')
                    this.piano.note('E6q').play()
                if (event.key == 'V' || event.key == 'v')
                    this.piano.note('F6q').play()
                if (event.key == 'B' || event.key == 'b')
                    this.piano.note('G6q').play()
                if (event.key == 'N' || event.key == 'n')
                    this.piano.note('A6q').play()
                if (event.key == 'M' || event.key == 'm')
                    this.piano.note('B6q').play()
                if (event.key == ',')
                    this.piano.note('C7q').play()
                if (event.key == '.')
                    this.piano.note('D7q').play()
                if (event.key == '/')
                    this.piano.note('E7q').play()
            }
        }
    }
</script>
 <style>
 .in{
    display: inline-block;
    -moz-user-select: none;
-webkit-user-select: none;
user-select: none;
 }
 </style>
 