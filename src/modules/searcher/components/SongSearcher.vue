<template>
    <div>
        <input :class="$style['search-style']" v-model="value" type="text" :placeholder="'search name song'" @input="searchSongByName">
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { songsDb } from '@/modules/searcher/db/dataSongs';
    import type { Audio } from '@/modules/common/interfaces';

    const value = ref("");

    const emit = defineEmits<{
        search: [songs: Audio[]]
    }>();

    function searchSongByName() {
        if(value.value.length >= 1) 
            emit("search", songsDb.filter(song => song.title.includes(value.value)))
        else {
            emit("search",songsDb);
        }
            
    }

</script>

<style lang="scss" module>
    .search-style {
        width: 100%;
        max-width: 600px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-shadow: inset 0 1px 3px #ddd;
        border-radius: 4px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 12px;
        padding-bottom: 12px;
    }
</style>