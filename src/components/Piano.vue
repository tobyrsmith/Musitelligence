<template>
    <div>
        <img :src="keys1" alt="" usemap="#image-map">
        <map name="image-map">
            <area target="" alt="" title="" @click="piano.note('a3q').play()" coords="3,267,106,465" shape="rect">
            <area target="" alt="" title="" @click="piano.note('a3q').play()" coords="3,0,81,269" shape="rect">
        </map>
    </div>
</template>

<script>
    import keys1 from './../assets/keys1.svg'
import piano from './../Classes/Piano'
        export default {
            name: "Piano",
            data() {
                return {
                    keys1,
                    piano
                }
            }
}
</script>
