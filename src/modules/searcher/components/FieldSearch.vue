<template>
    <select :class="$style['select-style']" :value="valueSelected" @change="emitValue">
        <option v-for="[name, value] in props.options" :key="value + 'fieldSearch'" :value="value">{{name}}</option>
    </select>
</template>

<script setup lang="ts">
    interface Props {
        options: [name: string, value: string][],
    }

    const props = defineProps<Props>();

    const valueSelected = defineModel('valueSelected');
    
    const emitValue = (event:Event) => {
        const target = (event.target as HTMLInputElement)
        valueSelected.value = target.value;
    }
</script>

<style lang="scss" module>
    .select-style {
        background-color: white;
        width: 100%;
        height: 100%;
        margin: 8px 0;
        display: flex;display: inline-block;
        border: 1px solid #ccc;
        box-shadow: inset 0 1px 3px #ddd;
        border-radius: 4px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 12px;
        padding-bottom: 12px;
    }
</style>