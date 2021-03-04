<template lang="pug">
#AttributesTable
    #layer(v-for="layer in layers", :style="{ color: layer._color }")
        h3(@click="e => clickCollapse(layer.name)") {{ layer.name }}
        table#attributes(v-show="!collapse[layer.name]")
            tr#attribute(v-for="key in layer._keys" @click="$emit('clickAttribute', key, layer.name)")
                td(style="width: 20px")
                    span(v-if="key === focusedAttribute && focusedLayer===layer.name") →

                td.key {{ key }}
                td.key {{ values[layer.name]&& values[layer.name][key] }}
</template>

<script>
import Vue from 'vue';
export default {
    name: 'AttributesTable',
    props: {
        layers: Array,
        values: {
            type: Object,
            default: () => ({}),
        },
        focusedAttribute: String,
        focusedLayer: String,
    },
    data: () => ({
        collapse: {},
    }),
    created() {
        window.AttributesTable = this;
    },
    methods: {
        clickCollapse(layerName) {
            Vue.set(this.collapse, [layerName], !this.collapse[layerName]);
        },
    },
};
</script>

<style scoped>
#AttributesTable {
    font-family: Consolas, Monaco, 'Courier New', Courier, monospace;
    font-size: 10pt;

    /* height: 50px; */
}

#attribute {
    margin-left: 0 2em;
    padding: 0;
    font-size: 8pt;
    line-height: 6px;
    cursor: pointer;
}

#attribute:hover {
    text-decoration: underline;
}
.key {
    width: 20em;
}
h3 {
    margin-bottom: 0;
}
h3:hover {
    /* background: #ddd; */
    /* box-shadow: 5px 5px 5px grey; */
    -webkit-text-stroke: 3px hsla(0, 0%, 50%, 0.3);
}
</style>
