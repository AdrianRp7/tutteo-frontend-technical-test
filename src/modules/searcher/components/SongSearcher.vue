<template>
    <div>
        <input v-model="value" type="text" :placeholder="'search name song'" @input="searchSongByName">
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { songsDb } from '@/modules/searcher/db/dataSongs';
    import type { Audio } from '@/modules/player/interfaces';

    const value = ref("");

    const emit = defineEmits<{
        search: [songs: Audio[]]
    }>();

    function searchSongByName() {
        if(value.value.length < 2) 
            emit("search",[])
        else
            emit("search", songsDb.filter(song => song.title.includes(value.value)))
    }

</script>

<style scoped>

</style>