<template>
    <v-app id="inspire">
        <v-container class="main-menu" fluid grid-list-xs>
            <v-layout column wrap align-center>
                <v-flex xs1>
                    <v-btn class="general-btn main-menu-btn" color="success" to="/learnmenu" round>Learn</v-btn>
                </v-flex>
                <v-flex xs1>
                    <v-btn class="general-btn" color="success" to="/testsetup" round>Test</v-btn>
                </v-flex>
                <v-flex xs1>
                    <v-btn class="general-btn" color="success" to="/Info" round>Info</v-btn>
                </v-flex>
                <v-flex xs1>
                    <v-btn class="general-btn" color="success" to="/" round>Quit</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
import navigation from './Navigation'
import {
    notes, Note, piano
} from 'note-art'
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

