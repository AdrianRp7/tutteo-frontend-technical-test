<template>
    <div>
        <SongSearcher @search="songsFilter = $event"></SongSearcher>
    </div>
</template>

<script setup lang="ts">
    import type { Audio } from '@/modules/player/interfaces';
    import SongSearcher from '@/modules/searcher/components/SongSearcher.vue';
    import { ref } from 'vue';

    const songsFilter = ref<Audio[]>([]);
</script>

<style scoped>

</style>