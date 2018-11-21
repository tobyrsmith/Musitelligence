<template>
    <v-app id="inspire">
        <navigation></navigation>
        <v-container fluid grid-list-lg>
            <v-layout column align-center>
                <v-flex xs12>
                    <h1 class="head">Piano!</h1>
                </v-flex>
                <v-flex xs12>
                    <piano></piano>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    import Piano      from './Piano'
    import navigation from './Navigation'

    export default {
        name:       'PianoPage',
        components: {
            navigation,
            Piano,
        },
    }
</script>

<style>
    .head {
        font-size: 50pt;
        color:     red;
    }
</style>

