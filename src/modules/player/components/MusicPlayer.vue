<template>
    <div :class="$style.container">
        <h1 class="text-3xl">{{audio.title}}</h1>
        <h2 class="text-3xl">{{audio.artist}}</h2>
        <img :src="props.audio.thumbnailUrl" :alt="audio.thumbnailAlt">
        <div class="slider-container">
            <p>{{ transformSecondsToTimeFormat(currentTime) }}</p>
            <input :class="$style['slider-timeline']" v-model="currentTime" type="range" @input="changedInput()">
            <p>{{ transformSecondsToTimeFormat(max)}}</p>
        </div>
        <div class="container-actions">
            {{ music.paused }}
            <ComponentButton class="mr-1" @click="functionPlay" v-if="music.paused">
                <template #default>
                    <font-awesome-icon :icon="['fas', 'play']"></font-awesome-icon>
                </template>
            </ComponentButton>
            <ComponentButton class="mr-1" @click="functionPause" v-else>
                <template #default>
                    <font-awesome-icon :icon="['fas', 'pause']" ></font-awesome-icon>
                </template>
            </ComponentButton>
            <ComponentButton class="" @click="functionStop">
                <template #default>
                    <font-awesome-icon :icon="['fas', 'stop']"></font-awesome-icon>
                </template>
            </ComponentButton>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, onMounted, ref, getCurrentInstance, watch } from 'vue';
    import { type Audio } from '../interfaces';
    import ComponentButton from '@/modules/common/components/ComponentButton.vue';


    interface Props {
        audio: Audio
    }

    const props = defineProps<Props>();

    const music = new Audio(props.audio.url);

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

    const paused = computed(() => music?.paused);

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
        //This hacks safari browsers, when you click to pause in safari if you only click pause the sistem has a bug and you can't pause again.
        //With this the variable music paused is reset again to paused = false
        music.currentTime = parseFloat(music.currentTime.toString());
    }

    function changedInput() {
        if(currentTime.value !== music.currentTime)
            music.currentTime = currentTime.value
    }

</script>

<style lang="scss" module>

    .container {
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
        text-align: center;

        img {
            margin: 0 auto;
            width: 400px;
            height: 400px;
            aspect-ratio: 1/1;
            margin-top: 15px;
            margin-bottom: 15px;
        }
    }
    
    .title {
        font-family: 'Times New Roman', Times, serif;
        font-size: 22px;
    }

    .subtitle {
        font-family: 'Times New Roman', Times, serif;
        font-size: 18px;
    }

    :deep(.slider-timeline) {
        max-width: 600px;
        width: 600px;
    }

    .container-actions {
        display: flex;
        flex-direction: row;
        
        & > button:first-child {
            margin-right: 20px;
        }
    }
</style>