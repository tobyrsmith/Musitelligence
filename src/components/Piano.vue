<template>
    <div>
        <div class="in" v-for="(k, i) in keys" :key="k.id">
            <img :src="k" alt="" :usemap="'#piano-map'+i">
            <map :name="'piano-map' + i">
                <area target="" alt="k" title="k" @click="piano.note('c' + parseInt(i+1) + 'q').play()" @keyup.67="piano.note('c1q').play()" coords="0,2,37,125" shape="rect">
                <area target="" alt="" title="" @click="piano.note('c' + parseInt(i+1) + 'q').play()" coords="2,126,49,217" shape="rect">

                <area target="" alt="" title="" @click="piano.note('c#' + parseInt(i+1) + 'q').play()" coords="38,3,64,125" shape="rect">

                <area target="" alt="" title="" @click="piano.note('d' + parseInt(i+1) + 'q').play()" coords="63,1,87,125" shape="rect">
                <area target="" alt="" title="" @click="piano.note('d' + parseInt(i+1) + 'q').play()" coords="52,125,101,217" shape="0">

                <area target="" alt="" title="" @click="piano.note('d#' + parseInt(i+1) + 'q').play()" coords="87,2,113,124" shape="rect">

                <area target="" alt="" title="" @click="piano.note('e' + parseInt(i+1) + 'q').play()" coords="114,2,149,126" shape="rect">
                <area target="" alt="" title="" @click="piano.note('e' + parseInt(i+1) + 'q').play()" coords="102,125,151,217" shape="0">

                <area target="" alt="" title="" @click="piano.note('f' + parseInt(i+1) + 'q').play()" coords="151,4,188,127" shape="rect">
                <area target="" alt="" title="" @click="piano.note('f' + parseInt(i+1) + 'q').play()" coords="152,126,199,217" shape="0">

                <area target="" alt="" title="" @click="piano.note('f#' + parseInt(i+1) + 'q').play()" coords="187,2,213,124" shape="rect">

                <area target="" alt="" title="" @click="piano.note('g' + parseInt(i+1) + 'q').play()" coords="214,1,236,125" shape="rect">
                <area target="" alt="" title="" @click="piano.note('g' + parseInt(i+1) + 'q').play()" coords="200,125,249,217" shape="0">

                <area target="" alt="" title="" @click="piano.note('g#' + parseInt(i+1) + 'q').play()" coords="237,0,261,126" shape="rect">

                <area target="" alt="" title="" @click="piano.note('a' + parseInt(i+1) + 'q').play()" coords="263,2,289,126" shape="rect">
                <area target="" alt="" title="" @click="piano.note('a' + parseInt(i+1) + 'q').play()" coords="250,126,299,218" shape="0">

                <area target="" alt="" title="" @click="piano.note('a#' + parseInt(i+1) + 'q').play()" coords="288,0,312,126" shape="rect">

                <area target="" alt="" title="" @click="piano.note('b' + parseInt(i+1) + 'q').play()" coords="314,2,348,126" shape="rect">
                <area target="" alt="" title="" @click="piano.note('b' + parseInt(i+1) + 'q').play()" coords="300,125,349,217" shape="rect">
            </map>
        </div>
    </div>
</template>

<script>
    import keys1 from './../assets/keys1.jpg'
    import keys2 from './../assets/keys2.jpg'
    import keys3 from './../assets/keys3.jpg'
    import keys4 from './../assets/keys4.jpg'
    import keys5 from './../assets/keys5.jpg'
    import keys6 from './../assets/keys6.jpg'
    import keys7 from './../assets/keys7.jpg'
    import piano from './../Classes/Piano'
        export default {
            name: "Piano",
            data() {
                return {
                    keys: [keys1, keys2, keys3, keys4, keys5, keys6, keys7],
                    piano
                }
            },
            methods: {
                g(i) {
                    console.log(this.piano.note('c' + i + 'q') + " " + 'c' + i + 'q')
                    this.piano.note('c' + i + 'q').play()
                }
            }
        }
</script>
 <style>
 .in{
    display: inline-block;
 }
 </style>
 