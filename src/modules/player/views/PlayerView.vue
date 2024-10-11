<template>
    <div>
        <MusicPlayer :audio></MusicPlayer>
    </div>
</template>

<script setup lang="ts">
    import MusicPlayer from '../components/MusicPlayer.vue';
    import {type Audio} from "../interfaces";
    import imgThumbnail from "@/assets/thumbnails/bird.jpg";
    import song from "@/assets/songs/petal-skies-245374.mp3";

    const audio: Audio = {
        url: song,
        title: "Petal Skies",
        artist: "Anonymous",
        thumbnailUrl: imgThumbnail,
        thumbnailAlt: "testing",
        type: "Relax",
    }
</script>

<style lang="scss" scoped>

</style>