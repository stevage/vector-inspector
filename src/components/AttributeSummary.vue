<template lang="pug">
#AttributeSummary(v-if="attributeName")
    h3 Summary of
        span.fixed   {{ attributeName }}
    table
        tr(v-for="([value, count]) of sortedCounts")
            td {{ value }}
            td {{ count }}
</template>

<script>
export default {
    name: "AttributeSummary",
    props: {
        attributeName: String,
        valueCounts: Object,
    },
    data: () => ({}),

    created() {
        window.AttributeSummary = this;
    },
    computed: {
        sortedCounts() {
            return Object.keys(this.valueCounts)
                .map(v => [v, this.valueCounts[v]])
                .sort(([, a], [, b]) => b - a);
        },
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
    font-family: Consolas, Monaco, "Courier New", Courier, monospace;
    font-size: 10pt;
}
</style>
