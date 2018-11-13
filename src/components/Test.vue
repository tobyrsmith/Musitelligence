<template>
    <div>
        <v-app id="inspire">   
                <v-flex xs1>
                        <v-btn class="general-btn" color="error" @click="$emit('test-off')">Back</v-btn>
                </v-flex>
        <v-container grid-list-xs>
            <v-layout column align-center>    
                <v-flex xs12 align-center>
                    <br><br>
                    <v-btn class="general-btn" color="success" @click="play">
                        <v-icon>music_note</v-icon> Play! <v-icon>music_note</v-icon>
                    </v-btn>
                </v-flex>
                <br><br><br>
                <v-flex xs1>
                    <v-icon style="position: absolute; top: 30%;" v-show="chose" large>{{answer}}</v-icon>
                </v-flex>
                <v-flex xs6>
                    <v-flex xs12 sm6 offset-sm3>
                        <v-container v-bind="{ [`grid-list-${'md'}`]: true }" fluid>
                            <v-layout row wrap>
                                <v-flex v-for="(note,i) in notes_picked" :key="note.id" xs4>
                                    <v-btn fab class="general-btn" color="success" @click="choose(i)">{{note}}</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-flex>
                </v-flex>
                <template class="score">
                <v-flex xs1>
                    <span>
                        Questions: {{questions}}
                    </span>
                </v-flex>
                <v-flex xs1>
                    Right Answers: {{right_answers}}
                </v-flex>
                <v-flex xs1>
                    Wrong Answers: {{questions - right_answers}}
                </v-flex>
                </template>
            </v-layout>
        </v-container>
        </v-app>
    </div>
</template>

<script>
import {notes} from './../Classes/Base/Patterns'
import piano from './../Classes/Piano'
export default {
    name: 'test-perfect-pitch',
    data() {
        return {
            dialog: false,
            notes,
            choosing: false,
            rand_note: null,
            answer: 'mood',
            chose: false,
            last_note: null,
                    right_answers: 0,
        questions: 0
        }
    },
    props: ['notes_picked'],
    methods: {
        play() {
            if(!this.choosing){
            while(this.rand_note == this.last_note)
                this.rand_note = Math.floor(Math.random() * this.notes_picked.length)
            this.chose = false
            piano.note(this.notes_picked[this.rand_note] + 3 + 'q').play()
            this.choosing = true
            this.questions++
            }
            else
                piano.note(this.notes_picked[this.rand_note] + 3 + 'q').play()

        },
        choose(i) {
            if (!this.choosing)
                this.listen(i)
            else
            if (this.notes_picked[this.rand_note] == this.notes_picked[i])
                this.rightAns()
            else
                this.wrongAns()
        },
        listen(i) {
            piano.note(this.notes_picked[i] + 3 + 'q').play()
        },
        rightAns() {
            if(!this.chose)
            this.right_answers++
            this.chose = true
            this.answer = 'mood'
            this.choosing = false
            piano.note(this.notes_picked[this.rand_note] + 3 + 'q').play()
            this.last_note = this.rand_note
        },
        wrongAns() {
            this.chose = true
            this.answer = 'mood_bad'
        }
    }
}
</script>