<template>
    <div>
        <v-app id="inspire">
            <v-container fluid grid-list-lg>
                <navigation></navigation>
                <br>
                <h1 class="head">Piano!</h1>
                <br><br><br>
                <piano></piano>
            </v-container>
        </v-app>
    </div>
</template>

<script>
import Piano from './Piano'
import navigation from './Navigation'
export default {
    name: "PianoPage",
    components:{
        navigation, 
        Piano
    }
}
</script>

<style>
.head{
    font-size: 50pt;
    color: red;

}
</style>

