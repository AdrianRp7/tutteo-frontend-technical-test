<template>
    <button :class="$style.button">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">

</script>

<style module>
    .button {
        background-color: white;
        padding: 0.3rem 0.5rem;
        color: black;
    }

    .button:hover,
    .button:active {
        background-color: #0094C6;
    }
</style>