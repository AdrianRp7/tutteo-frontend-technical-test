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

    import {songsDb} from "@/modules/searcher/db/dataSongs"

    const audio = defineProps<Audio>();
    
</script>

<style lang="scss" module>

</style>