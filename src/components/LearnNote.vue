<template>
    <v-app id="inspire">
        <v-container fluid grid-list-lg>
            <v-layout column wrap align-center>

                <h1>{{note.note}}</h1>
                <v-btn class="general-btn" color="success" @click="note.play()">play Note!</v-btn>
                <v-btn class="general-btn" color="success" @click="learn">Learn Note!</v-btn>
                <v-btn class="general-btn" color="success" @click="stop">Stop!</v-btn>
                <v-dialog
                    ref="dialog"
                    v-model="time_comp"
                    :return-value.sync="time"
                    persistent
                    lazy
                    full-width
                    width="290px"
                >
                    <v-text-field
                        slot="activator"
                        v-model="time"
                        label="Picker in dialog"
                        prepend-icon="access_time"
                        readonly
                    ></v-text-field>
                    <v-time-picker
                        v-if="time_comp"
                        v-model="time"
                        full-width
                    >
                        <v-btn class="general-btn" flat color="primary" @click="time_comp = false">Cancel</v-btn>
                        <v-btn class="general-btn" flat color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
                    </v-time-picker>
                </v-dialog>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    import navigation from './Navigation'
    import {
        notes, Piano,
    }                 from 'note-art'

    export default {
        name:       'learn-note',
        props:      ['note'],
        components: {
            navigation,
        },
        data () {
            return {
                piano:     new Piano(),
                notes,
                time:      '00:00',
                time_comp: false,
                timerId:   null,
                sequence:  [
                    3,
                    4,
                    3,
                    4,
                    5,
                    4,
                    3,
                    4,
                    5,
                    6,
                    5,
                    4,
                    3,
                    4,
                    5,
                    6,
                    7,
                    6,
                    5,
                    4,
                    3,
                    2,
                    3,
                    4,
                    3,
                    5,
                    3,
                    6,
                    3,
                    7,
                    3,
                    4,
                    2,
                    3,
                    4,
                    5,
                    4,
                    6,
                    4,
                    7,
                    4,
                ],
            }
        },
        methods:    {
            learn () {
                let i        = 0
                this.timerId = setInterval(() => {
                    // let i = Math.floor(Math.random() * 7)
                    this.piano.note(this.note.note + this.sequence[i] + 'q').play()
                    i++
                    if (i == this.sequence.length) {
                        i = 0
                    }
                    let check     = this.time.split(':')
                    let curr_time = new Date()
                    if (curr_time.getHours() == check[0] && curr_time.getMinutes() == check[1]) {
                        clearInterval(this.timerId)
                    }
                }, 2000)
            },
            stop () {
                clearInterval(this.timerId)
            },
        },
    }
</script>

<style>
    .head {
        font-size: 50pt;
        color:     red;
    }

    .n {
        display: inline;
    }
</style>

