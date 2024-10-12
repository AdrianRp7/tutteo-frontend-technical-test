<template>
    <div class="container mx-auto">
        <SongSearcher class="text-center mt-4" @search="songsFilter = $event"></SongSearcher>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4" v-if="songsFilter.length !==0">
            <CardSong v-for="song in songsFilter" 
            :title="song.title"
            :thumbnailUrl="song.thumbnailUrl"
            :thumbnailAlt="song.thumbnailAlt"
            :artist="song.artist"
            :key="song.title+song.artist+song.thumbnailUrl" @click="$router.push({name: 'player', query: {audio: JSON.stringify(song)}})"></CardSong>
        </div>
        <p class="text-lg text-center" v-else>
            We don't find any music with that filters
        </p>
    </div>
</template>

<script setup lang="ts">
    import type { Audio } from '@/modules/player/interfaces';
    import SongSearcher from '@/modules/searcher/components/SongSearcher.vue';
    import CardSong from '../components/CardSong.vue';
    import { songsDb } from '@/modules/searcher/db/dataSongs';
    import { ref } from 'vue';

    const songsFilter = ref<Audio[]>(songsDb);
</script>

<style module>
</style>