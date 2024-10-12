<template>
    <div>
        <MusicPlayer :audio></MusicPlayer>
        <img :src="songsDb[0].thumbnailUrl">
    </div>
</template>

<script setup lang="ts">
    import MusicPlayer from '../components/MusicPlayer.vue';
    import {type Audio} from "../interfaces";
    import imgThumbnail from "@/assets/thumbnails/bird.jpg";
    import song from "@/assets/songs/petal-skies-245374.mp3";

    import {songsDb} from "@/modules/searcher/db/dataSongs"
    
    console.log(songsDb)
    console.log(song)

    const audio: Audio = {
        url: songsDb[0].url,
        title: "Petal Skies",
        artist: "Anonymous",
        thumbnailUrl: songsDb[0].thumbnailUrl,
        thumbnailAlt: "testing",
        type: "Relax",
    }
</script>

<style lang="scss" scoped>

</style>