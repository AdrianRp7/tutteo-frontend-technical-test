<template>
    <div>
        <div class="mt-4 ml-4 mb-4">
            <RouterLink :to="{name: 'home'}">
                <font-awesome-icon :icon="['fas', 'chevron-circle-left']" />
                Home
            </RouterLink>
        </div>
        <MusicPlayer :audio></MusicPlayer>
    </div>
</template>

<script setup lang="ts">
    // import MusicPlayer from '../components/MusicPlayer.vue';
    import MusicPlayer from '../components/MusicPlayer.vue';
    import {type Audio} from "../../common/interfaces";
    

    const audio = defineProps<Audio>();
    
</script>