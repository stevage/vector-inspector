<template lang="pug">
#AttributeSummary(v-if="attributeName")
    table
        tr
            td(style="width: 20px")
            th Value of "{{attributeName}}"
            th Count
        tr(v-for="([value, count]) of sortedValueCounts" @mouseover="$emit('hoverValue', value, count)" @mouseout="$emit('hoverValue')")
            td(style="width: 20px")
                span(v-if="value===focusedValue") &rarr;
            td {{ value }}
            td {{ count }}
</template>

<script>
export default {
    name: 'AttributeSummary',
    props: {
        attributeName: String,
        sortedValueCounts: Array,
        focusedValue: [String, Number],
    },
    data: () => ({}),

    created() {
        window.AttributeSummary = this;
    },
};
</script>

<style scoped>
h3 {
    margin-bottom: 0;
}
.fixed {
    font-size: 80%;
}
table {
    margin: 1em 0;
    font-family: Consolas, Monaco, 'Courier New', Courier, monospace;
    font-size: 10pt;
    border: 1px solid #ccc;
}
th {
    padding: 0 1em 0 0;
}
</style>
