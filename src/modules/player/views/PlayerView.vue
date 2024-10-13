<template>
    <div>
        <MusicPlayer :audio></MusicPlayer>
    </div>
</template>

<script setup lang="ts">
    import MusicPlayer from '../components/MusicPlayer.vue';
    import {type Audio} from "../interfaces";
    

    const audio = defineProps<Audio>();
    
</script>

<style lang="scss" module>

</style>