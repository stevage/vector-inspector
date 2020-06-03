<template lang="pug">

#app
  #top
    h1 Vector Inspector
    | Look inside the contents of vector tiles from third party sources!
    .credit By Steve Bennett (@stevage1) - <a href="http://hire.stevebennett.me">hire.stevebennett.me</a>
    | Paste the URL of one vector tile (
    code .../8/531/489.pbf
    | ) OR a TileJSON endpoint (
    code .../index.json
    | )
    br
    input#url(v-model="url" placeholder="https://tiles.planninglabs.nyc/data/v3/14/4826/6157.pbf")
    br
    small
      input#cors(v-model="cors" type="checkbox")
      label(for="cors") Use CORS proxy
  #middle
    #sidepanel
      h3 Layers
      #layers
        AttributesTable(:layers="layers" :values="values")
        input(id="showbBoundaries" type="checkbox" v-model="showBoundaries")
        label(for="showBoundaries") Show tile boundaries
    Map(:layers="layers" :xyzUrl="xyzUrl" @values-update="updateValues")
  #bottom
    | Source: <a href="https://github.com/stevage/vector-inspector">https://github.com/stevage/vector-inspector</a>
</template>

<script>
require("mapbox-gl-inspect/dist/mapbox-gl-inspect.css");
import AttributesTable from "./components/AttributesTable";
import Map from "@/components/Map.vue";

const request = require("request");
const VectorTile = require("@mapbox/vector-tile").VectorTile;
const Pbf = require("pbf");
const zlib = require("zlib");
const MapboxInspect = require("mapbox-gl-inspect");
const cssColors = [
    "#a6cee3",
    "#1f78b4",
    "#b2df8a",
    "#33a02c",
    "#fb9a99",
    "#e31a1c",
    "#fdbf6f",
    "#ff7f00",
    "#cab2d6",
    "#6a3d9a",
    "#bb5",
    "#b15928",
    ...Object.keys(require("css-color-names")),
];

//http://localhost:4040/buildings/13/2411/3079.pbf
//https://tile.nextzen.org/tilezen/vector/v1/512/all/14/4826/6157.mvt?api_key=
export default {
    name: "app",
    components: {
        AttributesTable,
        Map,
    },
    data: () => ({
        url: "",
        layers: [],
        values: {},
        cors: false,
        tilejsonXyzUrl: "",
        showBoundaries: false,
    }),
    mounted() {
        window.setTimeout(() => {
            if (localStorage.getItem("url")) {
                this.url = localStorage.getItem("url");
            }
        }, 1000);

        // window.app.Map = this;
    },
    computed: {
        xyzUrl() {
            return (
                this.tilejsonXyzUrl ||
                this.url.replace(/\/\d+\/\d+\/\d+\./, "/{z}/{x}/{y}.")
            );
        },
        tileJsonUrl() {
            return this.url.replace(
                /\/\d+\/\d+\/\d+\.[a-zA-Z]*/,
                "/index.json",
            );
        },
    },
    watch: {
        url() {
            this.refresh();
            localStorage.setItem("url", this.url);
        },
        cors() {
            this.refresh();
        },
        showBoundaries() {
            map.showTileBoundaries = this.showBoundaries;
        },
    },
    methods: {
        updateValues(newValues) {
            this.values = newValues;
        },
        refresh() {
            const req = (url, params, cb) => {
                return request(
                    {
                        url: this.cors
                            ? "https://cors-anywhere.herokuapp.com/" + url
                            : url,
                        headers: this.cors
                            ? { Origin: window.location.host }
                            : {},
                        ...params,
                    },
                    cb,
                );
            };
            if (this.url.match(/\.(pbf|mvt)/)) {
                req(this.url, { encoding: null }, (err, response, body) => {
                    try {
                        body = zlib.gunzipSync(body);
                    } catch (e) {
                        // probably not a zip file
                        // console.error(e);
                    }
                    const tile = new VectorTile(new Pbf(body));
                    console.log(tile);
                    // console.log('Vector source layers found: ');
                    Object.keys(tile.layers).forEach(
                        (layer, i) =>
                            (tile.layers[layer]._color = cssColors[i]),
                    );
                    console.log(tile.layers);
                    this.layers = Object.keys(tile.layers).map(
                        id => tile.layers[id],
                    );
                });

                req(this.tileJsonUrl, { json: true }, (err, response, body) => {
                    if (body.center) {
                        window.map.panTo(body.center, { zoom: body.center[2] });
                    }
                    console.log(body);
                });
            } else if (this.url.match(/\.json/)) {
                req(this.url, { json: true }, (err, response, body) => {
                    this.layers = body.vector_layers.map((layer, i) => ({
                        _color: cssColors[i],
                        name: layer.id,
                        _keys: Object.keys(layer.fields),
                    }));
                    this.tilejsonXyzUrl = body.tiles[0];
                });
            }
        },
    },
};
</script>

<style>
/* @import '../node_modules/mapbox-gl-inspect/dist/mapbox-gl-inspect.css'; */
body {
    margin: 0;
    padding: 0;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}

#top {
    flex-grow: 0;
    padding: 1em;
}

#middle {
    flex-grow: 1;
    display: flex;
    min-height: 0;
}

#sidepanel {
    width: 300px;
    flex-grow: 0;
    background: white;
    border: 1px solid lightgrey;
    padding: 0 1em;
    overflow-y: scroll;
}

#layers {
    font-family: Consolas, Monaco, "Courier New", Courier, monospace;
    font-size: 10pt;

    height: 50px;
    /* display:none; */
}

#url {
    width: 100%;
}

.credit {
    font-size: 10pt;
    color: grey;
}

.mapboxgl-popup {
    background: white;
    /* max-width:20em; */
    display: inline-block;
}

.mapbox-gl-inspect_popup {
    font-size: 10px;
    pointer-events: none;
}

.mapbox-gl-inspect_property-value {
}

.mapboxgl-ctrl-inspect {
    /* height:50px; */
    display: none;
}

.mapboxgl-popup,
.mapboxgl-popup * {
    pointer-events: none;
}

.mapboxgl-popup {
    max-height: 500px;
    overflow-y: hidden;
}
</style>
