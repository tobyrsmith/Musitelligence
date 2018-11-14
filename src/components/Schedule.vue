<template>
        <v-app id="inspire">
            <div  v-if="!learn">
            <v-flex xs1>
                <v-btn class="general-btn" color="error" to="/learnmenu">Back</v-btn>
            </v-flex>
            <v-container fluid grid-list-xs>
                <h1>Choose Week!</h1>
<div class="n" v-for="(week, i) in weeks" :key="i">
                    <v-btn class="general-btn week" color="success" fab @click="go(i)">{{i+1}}</v-btn>
                        <span></span>
                </div>
            </v-container>
            </div>
            <div fluid grid-list-lg v-if="learn">
                <v-btn class="general-btn" color="error" @click="learn = false">Back</v-btn>
                <learn-note :note="weeks[pick]"></learn-note>
            </div>
        </v-app>
</template>

<script>
import navigation from './Navigation'
import {
    notes, Note, piano
} from 'note-art'
import LearnNote from './LearnNote'

export default {
    name: "schedule",
    components: {
        navigation,
        LearnNote
    },
    data() {
        return {
            notes,
            weeks: [piano.note('c3q'), piano.note('g3q'), piano.note('d3q'),piano.note('a3q'), piano.note('e3q'),piano.note('b3q'),piano.note('f#3q'),
            piano.note('f3q'), piano.note('bb3q'),piano.note('eb3q'), piano.note('ab3q'), piano.note('db3q')],
            pick: null,
            learn: false,
        }
    },
    methods:{
        go(i){
            this.pick = i
            this.learn = true
        }
    }
}
</script>


