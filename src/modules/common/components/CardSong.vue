<template>
    <div :class="$style['container-card-song']">
        <img :src="props.thumbnailUrl" :alt="props.thumbnailAlt">
        <h3>{{ props.title }}</h3>
        <p>{{ props.artist }}</p>
    </div>
</template>

<script setup lang="ts">
    interface Props {
        title: string,
        thumbnailUrl: string,
        thumbnailAlt: string,
        artist: string
    }

    const props = defineProps<Props>();
</script>

<style lang="scss" module>
    .container-card-song {
        img {
            width: 100%;
            height: auto;
            border-radius: 20px;
        }

        h3, p {
            word-break: all;
        }

        h3 {
            font-size: 16px;
            margin-top: 5px;
            margin-bottom: 5px;
            @media (width <= 768px) {
                font-size: 22px;
            }
        }

        p {
            font-size: 12px;
            @media (width <= 768px) {
                font-size: 16px;
            } 
        }
    }
</style>