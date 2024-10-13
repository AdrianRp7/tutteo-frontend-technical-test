import { defineStore } from "pinia";
import {ref, computed, watch} from "vue"

export const useSongStore = defineStore("Song", () => {
    const music= ref<HTMLAudioElement | null>(null);

    const max = ref(0);

    const currentTime = ref(0);

    const paused = ref(true);

    function assignMaxTime() {
        max.value = music.value?.duration ? music.value?.duration : 0;
    }

    function changeCurrentTime() {
        currentTime.value = music.value?.currentTime ? music.value?.currentTime : 0;
    }

    async function loadSong(urlResource:string) {
        try {
            music.value = new Audio(urlResource);
            
            await music.value.load();
            music.value.addEventListener('timeupdate', changeCurrentTime)
        
            // Escuchar cuando los metadatos están disponibles
            music.value.addEventListener('loadedmetadata', assignMaxTime)
            paused.value = music.value.paused;
        } catch(exception) {
            //Do nothing
        }
    }


    function functionPlay() {
        music.value?.play();
        
    }

    function functionStop() {
        music.value?.pause();
        if(music.value !== null)
            music.value.currentTime = 0;
    }

    function functionPause() {
        music.value?.pause();
        if(music.value !== null) {
            //This hacks safari browsers, when you click to pause in safari if you only click pause the sistem has a bug and you can't pause again.
            //With this the variable music paused is reset again to paused = false
            music.value.currentTime = parseFloat(music.value.currentTime.toString());
        }
    }

    function changedCurrentTime() {
        if(music.value !== null && currentTime.value !== music.value.currentTime)
            music.value.currentTime = currentTime.value
    }

    return {music, max,paused,currentTime, loadSong, functionPlay, functionStop, functionPause, changedCurrentTime}
})