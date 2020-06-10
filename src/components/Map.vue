<template lang="pug">
#map

</template>

<script>
const mapboxgl = require('mapbox-gl');
export default {
    name: 'Map',
    props: {
        xyzUrl: String,
        layers: {
            type: Array,
            default: () => [],
        },
        focusLayer: String,
        focusField: String,
        focusValue: [String, Number],
    },
    data: () => ({
        ourLayers: [],
    }),
    created() {
        window.MapComponent = this;
    },
    mounted() {
        this.initMap();
    },
    watch: {
        xyzUrl: {
            handler() {
                this.updateSource();
            },
        },
        layerStyles(newStyles, oldStyles) {
            this.map.U.onLoad(() => {
                this.updateSource();
                oldStyles.forEach(({ id }) => this.map.U.removeLayer(id));
                newStyles.forEach(layer => this.map.U.addLayer(layer));

                // this only works if features have id's
                newStyles
                    .filter(({ type }) => type === 'fill')
                    .forEach(({ id }) => this.map.U.hoverFeatureState(id));
                newStyles
                    .filter(({ type }) => type === 'line' || type === 'circle')
                    .forEach(({ id }) => this.map.U.hoverPointer(id));
            });
        },
        focus() {
            this.map.U.removeLayer(['focus-line', 'focus-circle']);
            if (this.focusValue !== undefined) {
                this.map.U.addLine('focus-line', 'source', {
                    sourceLayer: this.focusLayer,

                    lineColor: 'yellow',
                    lineWidth: 4,
                    lineOpacity: 0.7,
                    filter: ['==', this.focusField, this.focusValue],
                });
                this.map.U.addCircle('focus-circle', 'source', {
                    sourceLayer: this.focusLayer,

                    circleColor: 'yellow',
                    circleRadius: 12,
                    circleOpacity: 0.7,
                    filter: [
                        'all',
                        ['==', this.focusField, this.focusValue],
                        ['==', '$type', 'Point'],
                    ],
                });
            }
        },
    },
    computed: {
        focus() {
            return this.focusLayer + this.focusField + this.focusValue;
        },
        layerStyles() {
            return [
                ...this.layers.map(({ name, _color }) => ({
                    id: `${name}-fill`,
                    source: 'source',
                    type: 'fill',
                    sourceLayer: name,
                    fillColor: _color,
                    fillOpacity: [
                        'case',
                        ['to-boolean', ['feature-state', 'hover']],
                        0.7,
                        0.2,
                    ],
                    fillOutlineColor: [
                        'case',
                        ['to-boolean', ['feature-state', 'hover']],
                        'black',
                        'transparent',
                    ],
                    filter: ['any', ['==', '$type', 'Polygon']],
                })),
                ...this.layers.map(({ name, _color }) => ({
                    id: `${name}-line`,
                    type: 'line',
                    source: 'source',
                    sourceLayer: name,
                    lineColor: [
                        'case',
                        ['to-boolean', ['feature-state', 'hover']],
                        'black',
                        _color,
                    ], //layers[l]._color,
                    lineWidth: {
                        stops: [[11, 1], [14, 5]],
                    },
                    filter: [
                        'any',
                        ['==', '$type', 'LineString'],
                        ['==', '$type', 'Polygon'],
                    ],
                })),
                ...this.layers.map(({ name, _color }) => ({
                    id: `${name}-circle`,
                    type: 'circle',
                    source: 'source',
                    sourceLayer: name,
                    circleColor: _color,
                    circleRadius: { stops: [[11, 2], [14, 5]] },
                    filter: ['==', '$type', 'Point'],
                })),
            ];
        },
    },
    methods: {
        updateSource() {
            this.map.U.removeSource('source');
            this.map.addSource('source', {
                type: 'vector',
                tiles: [this.xyzUrl],
            });
        },
        resetValues() {
            for (const layer of this.layers) {
                this.$set(this.values, layer, {});
            }
        },
        initMap() {
            mapboxgl.accessToken =
                'pk.eyJ1Ijoic3RldmFnZSIsImEiOiJjam5kcGMzNjMydnNxM2ttc2toamo3Yzk2In0.JLncOwxdMGtouRcPNJtnbQ';
            const aus = window.location.hash.match(/aus/);
            // const sf = window.location.hash.match(/sf/);
            // const center = {
            //     aus: [145, -37.8],
            //     sf: [-121.96, 37.77]
            // }[
            let map = new mapboxgl.Map({
                container: 'map',
                // style: { version: 8, sources: {}, layers: [] },
                style: 'mapbox://styles/mapbox/light-v8', // light
                // center: [-74.50, 40],
                // center: aus
                //     ? [145, -37.8]
                //     : [-73.97509801962406, 40.762338800719704],
                // zoom: 13,
                maxTileCacheSize: 0,
                hash: 'loc',
            });
            map.addControl(new mapboxgl.NavigationControl());
            require('mapbox-gl-utils').init(map);

            window.map = map;
            this.map = map;
            const layerToSource = layer =>
                layer.replace(/(-line|-circle|-fill)$/, '');

            map.on('mousemove', e => {
                const values = {};

                this.layerStyles.forEach(({ id }) => {
                    const [feature] = map.queryRenderedFeatures(e.point, {
                        layers: [id],
                    });
                    if (feature) {
                        const layer = layerToSource(id);
                        values[layer] = feature.properties;
                    }
                });
                this.$emit('values-update', values);
            });
            map.on('moveend', () => this.$emit('move'));
        },
    },
};
import 'mapbox-gl/dist/mapbox-gl.css';
</script>

<style scoped>
#map {
    flex-grow: 1;
    background: lightgrey;
}
</style>
