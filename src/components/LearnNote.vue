<template>
    <div>
        <v-app id="inspire">
            <v-container fluid grid-list-lg>
                <!-- <navigation></navigation>
                <br> -->
                <h1>{{note.note}}</h1>
                <v-btn color="success" @click="note.play()">play Note!</v-btn>
            </v-container>
        </v-app>
    </div>
</template>

<script>
import navigation from './Navigation'
import {notes} from './../Classes/Base/Patterns'
export default {
    name: "learn-note",
    components:{
        navigation, 
        
    },
    data(){
        return {
            notes
        }
    },
    props: ['note']
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

