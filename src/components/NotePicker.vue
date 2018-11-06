<template>
        <v-app id="inspire">
            <div v-if="!picked">
            <v-flex xs1>
                            <v-btn class="general-btn" color="error" to="/learnmenu">Back</v-btn>
            </v-flex>
            <v-container fluid grid-list-lg >
                <br>
                <div class="n" v-for="note in notes['#']" :key="note.id">
                    <v-btn class="general-btn" color="success" fab @click="gotPicked(note)">{{note}}</v-btn>
                </div>
            </v-container>
            </div>
            <div fluid grid-list-lg v-if="picked">
            <v-btn class="general-btn" color="error" @click="picked = false">Back</v-btn>
            <learn-note :note="pick"></learn-note>
            </div>
        </v-app>
</template>

<script>
import navigation from './Navigation'
import LearnNote from './LearnNote'
import {notes} from './../Classes/Base/Patterns'
import Note from './../Classes/Base/Note'
export default {
    name: "select-note",
    components:{
        navigation, 
        LearnNote
    },
    data(){
        return {
            notes,
            Note,
            pick: new Note('C'),
            picked: false,
        }
    },
    methods: {
        gotPicked(note){
            this.pick=new Note(note)
            this.picked = true
        }
    }
}
</script>
