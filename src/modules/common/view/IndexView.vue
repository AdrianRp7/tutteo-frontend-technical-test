<template>
    <div class="container mx-auto">
        <SongSearcher class="text-center mt-4" @search="songsFilter = $event"></SongSearcher>
        <div class="gap-5 mt-4 flex flex-wrap" v-if="songsFilter.length !==0">
            <TransitionGroup name="disapear-card"> 
                <div class="card" v-for="song in songsFilter" :key="song.title+song.artist+song.thumbnailUrl">
                    <CardSong class="cursor-pointer transition-all hover:bg-slate-700 p-2 md:p-3"
                    :title="song.title"
                    :thumbnailUrl="song.thumbnailUrl"
                    :thumbnailAlt="song.thumbnailAlt"
                    :artist="song.artist"
                    @click="$router.push({name: 'player', query: {audio: JSON.stringify(song)}})"></CardSong>
                </div>
            </TransitionGroup>
        </div>
        <p class="text-lg text-center" v-else>
            We don't find any music with that filters
        </p>
    </div>
</template>

<script setup lang="ts">
    import type { Audio } from '@/modules/common/interfaces';
    import SongSearcher from '@/modules/searcher/components/SongSearcher.vue';
    import CardSong from '../components/CardSong.vue';
    import { songsDb } from '@/modules/searcher/db/dataSongs';
    import { ref } from 'vue';

    const songsFilter = ref<Audio[]>(songsDb);
</script>

<style lang="scss" scoped>
    .container {
        max-width: 1024px;
    }

    .card {
        width: 100%;
        transition: transform 0.5s ease, opacity 0.5s ease;
        @media (width >= 768px) {
            width: calc(25% - 1.25rem);
        }
    }

    .disapear-card-enter-active,
    .disapear-card-leave-active {
        transition: all 0.25s ease-in;
    }

    .disapear-card-enter-from,
    .disapear-card-leave-to {
        opacity: 0;
        transform: scale(0.8);
    }

    .disapear-card-move {
        transform: transform 0.25s ease-in;
    }
</style>