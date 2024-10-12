<template>
    <button :class="$style.button">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">

</script>

<style module>
    .button {
        background-color: #5386E4;
        padding: 0.3rem 0.5rem;
    }

    .button:hover,
    .button:active {
        background-color: #5069A4;
    }
</style>