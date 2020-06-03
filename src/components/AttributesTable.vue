<template lang="pug">
#AttributesTable
    #layer(v-for="layer in layers", :style="{ color: layer._color }")
        | {{ layer.name }}
        table#attributes
        tr#attribute(v-for="key in layer._keys" @click="$emit('clickAttribute', key, layer.name)")
            td#key {{ key }}
            td#key {{ values[layer.name]&& values[layer.name][key] }}
</template>

<script>
export default {
    name: "AttributesTable",
    props: {
        layers: Array,
        values: {
            type: Object,
            default: () => ({}),
        },
    },
    data: () => ({}),
    created() {
        window.AttributesTable = this;
    },
};
</script>

<style scoped>
#AttributesTable {
    font-family: Consolas, Monaco, "Courier New", Courier, monospace;
    font-size: 10pt;

    /* height: 50px; */
}

#attribute {
    margin-left: 0 2em;
    padding: 0;
    font-size: 8pt;
    line-height: 5px;
    cursor: pointer;
}
#key {
    width: 20em;
}
</style>
