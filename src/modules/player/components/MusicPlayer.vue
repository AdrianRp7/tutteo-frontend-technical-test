<template>
    <div :class="$style.container">
        <h1>{{audio.title}}</h1>
        <h2>{{audio.artist}}</h2>
        <img :src="props.audio.thumbnailUrl" :alt="audio.thumbnailAlt">
        <div :class="$style['slider-container']">
            <p>{{ transformSecondsToTimeFormat(storeMusic.currentTime) }}</p>
            <input ref="slider" :max="storeMusic.max" :class="$style['slider-timeline']" v-model="storeMusic.currentTime" type="range" @input="changedInput()">
            <p>{{ transformSecondsToTimeFormat(storeMusic.max)}}</p>
        </div>
        <div :class="$style['container-actions']">
            <ComponentButton :class="[$style.button, storeMusic.music && storeMusic.music.playbackRate <= 1 ? $style['button-opacity'] : '']" @click="storeMusic.decreasePlayRate">
                <template #default>
                    <font-awesome-icon :icon="['fas', 'backward']" />
                </template>
            </ComponentButton>
            <ComponentButton :class="$style.button" @click="storeMusic.functionPlay" v-if="storeMusic.music?.paused">
                <template #default>
                    <font-awesome-icon :icon="['fas', 'play']"></font-awesome-icon>
                </template>
            </ComponentButton>
            <ComponentButton :class="$style.button" @click="storeMusic.functionPause" v-else>
                <template #default>
                    <font-awesome-icon :icon="['fas', 'pause']" ></font-awesome-icon>
                </template>
            </ComponentButton>
            <ComponentButton :class="$style.button" @click="storeMusic.functionStop">
                <template #default>
                    <font-awesome-icon :icon="['fas', 'stop']"></font-awesome-icon>
                </template>
            </ComponentButton>
            <ComponentButton :class="[$style.button, storeMusic.music && storeMusic.music.playbackRate > 3 ? $style['button-opacity'] : '']"  @click="storeMusic.incrementPlayRate">
                <template #default>
                    <font-awesome-icon :icon="['fas', 'forward']" />
                </template>
            </ComponentButton>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted, getCurrentInstance, onBeforeUnmount, watch } from 'vue';
    import { type Audio } from '../../common/interfaces';
    import ComponentButton from '@/modules/common/components/ComponentButton.vue';
    import { useSongStore } from '../stores/musicStore';


    interface Props {
        audio: Audio
    }

    const props = defineProps<Props>();

    const slider = ref<HTMLInputElement | null>(null)

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

    //Fix: This resolves the issue with Firefox and Chrome where the slider's background wasn't updating. Previously, only the thumb moved along the timeline, but the background remained unchanged.
    function updateSliderBackground() {
        if(slider.value !== null) {
            const percentage = (storeMusic.currentTime * 100) / storeMusic.max;
            //We add +1 percent to avoid sometimes to show the part of the slider before the button without color
            slider.value.style.background = `linear-gradient(to right, #0094C6 0%, #0094C6 ${percentage + 0.4 > 100 ? percentage + 0.4 : percentage}%, white ${percentage}%, white 100%)`;
        }
    };


    function changedInput() {
        storeMusic.changedCurrentTime();
    }

    watch(() => storeMusic.currentTime, () => {
        updateSliderBackground();
    })

</script>

<style lang="scss" module>

    .container {
        padding-left: 10px;
        padding-right: 10px;
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
        align-items: center;
        margin-bottom: 10px;

        p {
            width: 40px;
        }
        
        p:first-of-type {
            margin-right: 10px;
        }

        p:last-of-type {
            margin-left: 10px;
        }

        input[type="range"] {
            -webkit-appearance: none; 
            width: 250px;
            height: 8px; 
            background: white; 
            border-radius: 5px;
            outline: none;
        }

        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none; 
            appearance: none;
            width: 20px; 
            height: 20px; 
            background: #0094C6; 
            border-radius: 50%;
            cursor: pointer;
        }

        input[type="range"]::-moz-range-thumb {
            width: 20px; 
            height: 20px; 
            background: #0094C6; 
            border: none; 
            border-radius: 50%; 
            cursor: pointer; 
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


    .container-actions {
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
        gap: 10px;
    }

    .button {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .button-opacity {
        opacity: 0.8;
        background-color: white!important;
        cursor:not-allowed;
    }
</style>