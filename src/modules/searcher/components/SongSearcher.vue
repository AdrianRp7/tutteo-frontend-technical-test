<template>
    <div :class="$style['container-search']">
        <input :class="$style['search-style']" v-model="value" type="text" :placeholder="'search name song'" @input="searchSongByName">
        <FieldSearch :options="listOfSearch" v-model:valueSelected="typeSearch"></FieldSearch>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { songsDb } from '@/modules/searcher/db/dataSongs';
    import type { Audio } from '@/modules/common/interfaces';
    import FieldSearch from '@/modules/searcher/components/FieldSearch.vue';

    const value = ref("");
    const typeSearch = ref<string>("title");

    const listOfSearch: [name:string, value:string][]= [
        ["title song","title"],
        ["Author of the song","artist"]
    ]

    const emit = defineEmits<{
        search: [songs: Audio[]]
    }>();

    function searchSongByName() {
        const type: string = typeSearch.value !== '' ? typeSearch.value : 'title';
        if(value.value.toLowerCase().trim().length >= 1) 
            emit("search", songsDb.filter(song => {
                const valueSearch:string = song[type as keyof Audio];
                return valueSearch.toLowerCase().trim().includes(value.value.toLowerCase().trim())
            }))
        else {
            emit("search",songsDb);
        }
            
    }

</script>

<style lang="scss" module>
    .container-search {
        width: 100%;
        //max-width: 600px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        & :nth-child(1) {
            width: 100%;
            @media (1240px <= width) {
                width: calc(70% - 15px)
            }
        }

        & :nth-child(2) {
            width: 100%;
            @media (1240px <= width) {
                width: calc(30% - 15px)
            }
        }

        @media (1240px <= width) {
            flex-direction: row;
        }
    }
    .search-style {
        width: 100%;
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