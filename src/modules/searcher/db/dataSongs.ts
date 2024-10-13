import {type Audio } from "@/modules/player/interfaces";
// import bird from "@/assets/thumbnails/bird.jpg";
// import adventure from "@/assets/songs/adventure-intro-210375.mp3";
// import cinematic from "@/assets/songs/cinematic-background-inspirational-150013.mp3";
// import pianos from "@/assets/songs/cold-sad-pianos-150019.mp3";
// import countdown from "@/assets/songs/countdown-149998.mp3";
// import dramatic from "@/assets/songs/dramatic-epic-cinema-150027.mp3";
// import noCopy from "@/assets/songs/no-copyright-music-181373.mp3";
// import romanticLove from "@/assets/songs/romantic-love-piano-150084.mp3";
// import summer from "@/assets/songs/summer-upbeat-motivational-150098.mp3";
// import petal from "@/assets/songs/petal-skies-245374.mp3";
// import petal from "@/assets/songs/petal-skies-245374.mp3";
// import petal from "@/assets/songs/petal-skies-245374.mp3";

export const songsDb: Audio[] = [
    {
        url: new URL(`@/assets/songs/petal-skies-245374.mp3`, import.meta.url).href,
        title: "Petal Skies",
        artist: "Anonymous",
        thumbnailUrl: new URL(`@/assets/thumbnails/bird.jpg`, import.meta.url).href,
        thumbnailAlt: "testing",
        type: "Relax",
    },
    {
        url: new URL(`@/assets/songs/adventure-intro-210375.mp3`, import.meta.url).href,
        title: "Adventure intro",
        artist: "Makesoundmusic",
        thumbnailUrl: new URL(`@/assets/thumbnails/bird.jpg`, import.meta.url).href,
        thumbnailAlt: "testing",
        type: "Adventure",
    },
    {
        url: new URL(`@/assets/songs/cinematic-background-inspirational-150013.mp3`, import.meta.url).href,
        title: "Cinematic inspirational",
        artist: "Makesoundmusic",
        thumbnailUrl: new URL(`@/assets/thumbnails/bird.jpg`, import.meta.url).href,
        thumbnailAlt: "testing",
        type: "Inspirational",
    },
    {
        url: new URL(`@/assets/songs/cold-sad-pianos-150019.mp3`, import.meta.url).href,
        title: "Cold Sad Piano",
        artist: "Makesoundmusic",
        thumbnailUrl: new URL(`@/assets/thumbnails/bird.jpg`, import.meta.url).href,
        thumbnailAlt: "testing",
        type: "Sad",
    },
    {
        url: new URL(`@/assets/songs/countdown-149998.mp3`, import.meta.url).href,
        title: "Countdown",
        artist: "Makesoundmusic",
        thumbnailUrl: new URL(`@/assets/thumbnails/bird.jpg`, import.meta.url).href,
        thumbnailAlt: "testing",
        type: "Epic",
    },
    {
        url: new URL(`@/assets/songs/dramatic-epic-cinema-150027.mp3`, import.meta.url).href,
        title: "Dramatic epic cinema",
        artist: "Makesoundmusic",
        thumbnailUrl: new URL(`@/assets/thumbnails/bird.jpg`, import.meta.url).href,
        thumbnailAlt: "testing",
        type: "Dramatic",
    },
    {
        url: new URL(`@/assets/songs/no-copyright-music-181373.mp3`, import.meta.url).href,
        title: "Music no copy",
        artist: "DesiFreeMusic",
        thumbnailUrl: new URL(`@/assets/thumbnails/bird.jpg`, import.meta.url).href,
        thumbnailAlt: "testing",
        type: "Relax",
    },
    {
        url: new URL(`@/assets/songs/romantic-love-piano-150084.mp3`, import.meta.url).href,
        title: "Romantic love piano",
        artist: "Makesoundmusic",
        thumbnailUrl: new URL(`@/assets/thumbnails/bird.jpg`, import.meta.url).href,
        thumbnailAlt: "testing",
        type: "Romantic",
    },
    {
        url: new URL(`@/assets/songs/summer-upbeat-motivational-150098.mp3`, import.meta.url).href,
        title: "Summer upbeat",
        artist: "Makesoundmusic",
        thumbnailUrl: new URL(`@/assets/thumbnails/bird.jpg`, import.meta.url).href,
        thumbnailAlt: "testing",
        type: "Inspirational",
    },
    {
        url: new URL(`@/assets/songs/uplifting-feel-good-152994.mp3`, import.meta.url).href,
        title: "Uplifting feel good",
        artist: "Anonymous",
        thumbnailUrl: new URL(`@/assets/thumbnails/bird.jpg`, import.meta.url).href,
        thumbnailAlt: "testing",
        type: "Inspirational",
    },
    {
        url: new URL(`@/assets/songs/wedding-hopeful-cinematic-piano-150109.mp3`, import.meta.url).href,
        title: "Wedding hopeful piano",
        artist: "Anonymous",
        thumbnailUrl: new URL(`@/assets/thumbnails/bird.jpg`, import.meta.url).href,
        thumbnailAlt: "testing",
        type: "Piano",
    },
]