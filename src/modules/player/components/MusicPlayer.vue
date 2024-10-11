<template>
    <div>
        <h1 class="text-3xl">Testing</h1>
        <p>{{ transformSecondsToTimeFormat(currentTime) }}</p>
        <input v-model="currentTime" id="playerTime" type="range" min="0" :max="max" step="1" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" @input="changedInput()">
        <p>{{ transformSecondsToTimeFormat(max) }}</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white p-2" @click="functionPlay">
            play music
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white p-2" @click="functionStop">
            stop music
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white p-2" @click="functionPause">
            pause music
        </button>
    </div>
</template>

<script setup lang="ts">
    import { computed, onMounted, ref, getCurrentInstance, watch } from 'vue';
    const music = new Audio(new URL('@/assets/songs/petal-skies-245374.mp3', import.meta.url).href);
    const range = ref(0);
    const max = ref(0);

    const currentTime = ref(0);

    const instance = getCurrentInstance();
    const transformSecondsToTimeFormat = (seconds: number) => {
        return instance?.appContext.config.globalProperties.$transformSecondsToTimeFormat(seconds);
    };

    onMounted(async() => {
        await music.load();
        
    })

    music.addEventListener('timeupdate', function() {
        currentTime.value = music.currentTime;
    })

    // Escuchar cuando los metadatos están disponibles
    music.addEventListener('loadedmetadata', function() {
        max.value = music.duration;
    });

    function functionPlay() {
        music.play();
        
    }
    function functionStop() {
        music.pause();
        music.currentTime = 0;
    }
    function functionPause() {
        music.pause();
    }

    function changedInput() {
        if(currentTime.value !== music.currentTime)
            music.currentTime = currentTime.value
    }
    
</script>

<style modules>

</style>