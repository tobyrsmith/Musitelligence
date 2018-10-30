<template>
    <div>
                        <navigation></navigation>
                        <br>
        <v-app id="inspire">
            <v-container fluid grid-list-lg>
                <br>
                <div class="n" v-for="note in notes['#']" :key="note.id">
                    <v-btn class="note" color="success" fab @click="pick=new Note(note)">{{note}}</v-btn>
                    <!-- <p v-if="notes['#'].indexOf(note)%3==0"> -->
                        <span></span>
                    <!-- </p> -->
                </div>
                <learn-note :note="pick"></learn-note>
            </v-container>
        </v-app>
    </div>
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
        }
    },
}
</script>

<style>
.head{
    font-size: 50pt;
    color: red;

}
.n{
    display: inline;
}
</style>

