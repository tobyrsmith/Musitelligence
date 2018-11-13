<template>
<v-app id="insipre">
    <template v-if="!test_on">
        <v-flex xs>
            <v-btn class="general-btn" color="error" to="/mainmenu">Back</v-btn>
        </v-flex>
        <v-flex xs12>
        <h2>Choose the notes you want to test your child on!</h2>
        </v-flex>
        <v-flex xs12>
            
    <v-layout justify-center wrap>
                <v-btn class="general-btn" color="success" @click="test_on = true">Go!</v-btn>
    </v-layout>
        </v-flex>
    <br><br><br>
        <v-flex xs12 sm6 offset-sm3>
        <v-container v-bind="{ [`grid-list-${'md'}`]: true }" fluid>
          <v-layout row wrap>
            <v-flex
              v-for="note in notes['#']" :key="note.id"
              xs4
            >
                    <v-checkbox class="display:inline-blick;" color="red" v-model="notes_picked" :label="note" :value="note"></v-checkbox>
            </v-flex>
          </v-layout>
        </v-container>
    </v-flex>
    </template>
        <test :notes_picked="notes_picked" v-if="test_on" @test-off='test_on=false'></test>
</v-app>
</template>

<script>
import {notes} from './../Classes/'
import test from './Test'
import navigation from './Navigation'

export default {
    data() {
        return {
        dialog: false,
        notes,
        notes_picked: ['C', 'G', 'B'],
        test_on: false,
        }
    },
    components: {
        test,
        navigation
    },
    methods: {
        play(){

        }
    }
}
</script>
