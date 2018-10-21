<template>
    <div>
        <!-- <div v-for="(k, i) in keys" :key="k.id">
            {{i+1}} -->
            <img :src="keys[0]" alt="" usemap="#piano-map">
            <img :src="keys[0]" alt="" usemap="#piano-map2">
            <map name="piano-map">
    <area target="" alt="k" title="k" @click="piano.note('c3q').play()" @keyup.67="piano.note('c1q').play()" coords="0,2,37,125" shape="rect">
                <area target="" alt="" title="" @click="piano.note('c3q').play()" coords="2,126,49,217" shape="rect">

                <area target="" alt="" title="" @click="piano.note('c#3q').play()" coords="38,3,64,125"  shape="rect">

                <area target="" alt="" title="" @click="piano.note('d3q').play()" coords="63,1,87,125" shape="rect">
                <area target="" alt="" title="" @click="piano.note('d3q').play()" coords="52,125,101,217" shape="0">

                <area target="" alt="" title="" @click="piano.note('d#3q').play()" coords="87,2,113,124" shape="rect">

                <area target="" alt="" title="" @click="piano.note('e3q').play()" coords="114,2,149,126" shape="rect">
                <area target="" alt="" title="" @click="piano.note('e3q').play()" coords="102,125,151,217" shape="0">

                <area target="" alt="" title="" @click="piano.note('f3q').play()" coords="151,4,188,127" shape="rect">
                <area target="" alt="" title="" @click="piano.note('f3q').play()" coords="152,126,199,217" shape="0">

                <area target="" alt="" title="" @click="piano.note('f#3q').play()" coords="187,2,213,124" shape="rect">

                <area target="" alt="" title="" @click="piano.note('g3q').play()" coords="214,1,236,125" shape="rect">
                <area target="" alt="" title="" @click="piano.note('g3q').play()" coords="200,125,249,217" shape="0">

                <area target="" alt="" title="" @click="piano.note('g#3q').play()" coords="237,0,261,126" shape="rect">

                <area target="" alt="" title="" @click="piano.note('a3q').play()" coords="263,2,289,126" shape="rect">
                <area target="" alt="" title="" @click="piano.note('a3q').play()" coords="250,126,299,218" shape="0">

                <area target="" alt="" title="" @click="piano.note('a#3q').play()" coords="288,0,312,126" shape="rect">

                <area target="" alt="" title="" @click="piano.note('b3q').play()" coords="314,2,348,126" shape="rect">
                <area target="" alt="" title="" @click="piano.note('b3q').play()" coords="300,125,349,217" shape="rect">
            </map>
            <map name="piano-map2">
    <area target="" alt="k" title="k" @click="piano.note('c4q').play()" @keyup.67="piano.note('c1q').play()" coords="0,2,37,125" shape="rect">
                <area target="" alt="" title="" @click="piano.note('c4q').play()" coords="2,126,49,217" shape="rect">

                <area target="" alt="" title="" @click="piano.note('c#4q').play()" coords="38,3,64,125"  shape="rect">

                <area target="" alt="" title="" @click="piano.note('d4q').play()" coords="63,1,87,125" shape="rect">
                <area target="" alt="" title="" @click="piano.note('d4q').play()" coords="52,125,101,217" shape="0">

                <area target="" alt="" title="" @click="piano.note('d#4q').play()" coords="87,2,113,124" shape="rect">

                <area target="" alt="" title="" @click="piano.note('e4q').play()" coords="114,2,149,126" shape="rect">
                <area target="" alt="" title="" @click="piano.note('e4q').play()" coords="102,125,151,217" shape="0">

                <area target="" alt="" title="" @click="piano.note('f4q').play()" coords="151,4,188,127" shape="rect">
                <area target="" alt="" title="" @click="piano.note('f4q').play()" coords="152,126,199,217" shape="0">

                <area target="" alt="" title="" @click="piano.note('f#4q').play()" coords="187,2,213,124" shape="rect">

                <area target="" alt="" title="" @click="piano.note('g4q').play()" coords="214,1,236,125" shape="rect">
                <area target="" alt="" title="" @click="piano.note('g4q').play()" coords="200,125,249,217" shape="0">

                <area target="" alt="" title="" @click="piano.note('g#4q').play()" coords="237,0,261,126" shape="rect">

                <area target="" alt="" title="" @click="piano.note('a4q').play()" coords="263,2,289,126" shape="rect">
                <area target="" alt="" title="" @click="piano.note('a4q').play()" coords="250,126,299,218" shape="0">

                <area target="" alt="" title="" @click="piano.note('a#4q').play()" coords="288,0,312,126" shape="rect">

                <area target="" alt="" title="" @click="piano.note('b4q').play()" coords="314,2,348,126" shape="rect">
                <area target="" alt="" title="" @click="piano.note('b4q').play()" coords="300,125,349,217" shape="rect">
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
                g(i){
                console.log(this.piano.note('c'+i+'q') + " " + 'c'+i+'q')
                this.piano.note('c'+i+'q').play()
            }
            }
}
</script>
 <style>
 .img{
     display: inline;
 }
 </style>
 