<template>
    <div :class="$style.container">
        <h1>{{audio.title}}</h1>
        <h2>{{audio.artist}}</h2>
        <img :src="props.audio.thumbnailUrl" :alt="audio.thumbnailAlt">
        <div :class="$style['slider-container']">
            <p>{{ transformSecondsToTimeFormat(storeMusic.currentTime) }}</p>
            <input :class="$style['slider-timeline']" v-model="storeMusic.currentTime" type="range" @input="changedInput()">
            <p>{{ transformSecondsToTimeFormat(storeMusic.max)}}</p>
        </div>
        <div class="container-actions">
            <ComponentButton :class="$style.button" class="mr-1" @click="storeMusic.functionPlay" v-if="storeMusic.music?.paused">
                <template #default>
                    <font-awesome-icon :icon="['fas', 'play']"></font-awesome-icon>
                </template>
            </ComponentButton>
            <ComponentButton :class="$style.button" class="mr-1" @click="storeMusic.functionPause" v-else>
                <template #default>
                    <font-awesome-icon :icon="['fas', 'pause']" ></font-awesome-icon>
                </template>
            </ComponentButton>
            <ComponentButton :class="$style.button" @click="storeMusic.functionStop">
                <template #default>
                    <font-awesome-icon :icon="['fas', 'stop']"></font-awesome-icon>
                </template>
            </ComponentButton>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, getCurrentInstance, onBeforeUnmount } from 'vue';
    import { type Audio } from '../../common/interfaces';
    import ComponentButton from '@/modules/common/components/ComponentButton.vue';
    import { useSongStore } from '../stores/musicStore';


    interface Props {
        audio: Audio
    }

    const props = defineProps<Props>();

    const storeMusic = useSongStore();

    const instance = getCurrentInstance();
    const transformSecondsToTimeFormat = (seconds: number) => {
        return instance?.appContext.config.globalProperties.$transformSecondsToTimeFormat(seconds);
    };

    onMounted(async() => {
        storeMusic.loadSong(props.audio.url)
    })

    onBeforeUnmount(async() => {
        storeMusic.functionStop();
    })


    function changedInput() {
        storeMusic.changedCurrentTime()
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
            width: 200px;
            height: 200px;
            aspect-ratio: 1/1;
            margin-top: 15px;
            margin-bottom: 15px;
            border-radius: 20px;
        }

        h1, h2 {
            word-break: all;
        }

        h1 {
            font-size: 20px;
            margin-top: 5px;
            font-weight: 700;
            @media (width >= 768px) {
                font-size: 25px;
            }
        }

        h2 {
            font-size: 16px;
            font-weight: 400;
            @media (width >= 768px) {
                font-size: 20px;
            } 
        }
    }

    .slider-container {
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
        p:first-of-type {
            margin-right: 10px;
        }

        p:last-of-type {
            margin-left: 10px;
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

    .button {
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
</style>