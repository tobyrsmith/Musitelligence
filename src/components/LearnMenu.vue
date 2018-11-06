<template>
        <v-app id="inspire">
                <v-flex xs1>
                    <v-btn class="general-btn" color="error" to="/mainmenu" >Back</v-btn>
                </v-flex>
                <br><br><br>
                <v-container grid-list-xs>
                <v-layout column wrap align-center>
                    <v-btn class="general-btn" color="success" to="/schedule">Regular Course</v-btn>
                    <v-btn class="general-btn" color="success" to="/notepicker">Specific Note</v-btn>
                </v-layout>
                </v-container>
        </v-app>
</template>

<script>
import navigation from './Navigation'
import {
    notes
} from './../Classes/Base/Patterns'
import Note from './../Classes/Base/Note'
import piano from './../Classes/Piano'
import LearnNote from './LearnNote'

export default {
    name: "LearnMenu",
    components: {
        navigation,
        LearnNote
    },
    data() {
        return {

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

<style>
.head{
    font-size: 50pt;
    color: red;

}
.n{
    display: inline;
}
</style>

