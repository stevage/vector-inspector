<template lang="pug">

#app
  #top
    h1 Vector Inspector
    | Look inside the contents of vector tiles from third party sources!
    .credit By Steve Bennett (@stevage1) - <a href="http://hire.stevebennett.me">hire.stevebennett.me</a>
    | Paste the URL of one vector tile <small>(eg https://tiles.planninglabs.nyc/data/v3/14/4826/6157.pbf)</small>
    br
    input#url(v-model="url")
    br
    br
  #middle    
    #sidepanel
      h3 Layers
      #layers
        #layer(v-for="layer in layers", :style="{ color: layer._color }")
          | {{ layer.name }}
          table#attributes
            tr#attribute(v-for="key in layer._keys")
              td#key {{ key }}
              td#key {{ values[layer.name][key] }}
    #map
  #bottom
    | Source: <a href="https://github.com/stevage/vector-inspector">https://github.com/stevage/vector-inspector</a>
</template>

<script>
require('mapbox-gl-inspect/dist/mapbox-gl-inspect.css');

const Vue = require('vue');
const request = require('request');
const VectorTile = require('@mapbox/vector-tile').VectorTile;
const Pbf = require('pbf');
const zlib = require('zlib');
const mapboxgl = require('mapbox-gl');
const MapboxInspect = require('mapbox-gl-inspect');
const cssColors =  ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#bb5', '#b15928',
  ...Object.keys(require('css-color-names'))];

const test = window.location.hash.match(/test/);
const aus = window.location.hash.match(/aus/);

export default {
  name: 'app',
  components: {
    // HelloWorld
  }, data: () => ({
    url: test ? 'https://tiles.planninglabs.nyc/data/v3/14/4826/6157.pbf' : undefined,
    layers: undefined,
    values: {}
  }), mounted() {
        // window.app.Map = this;
        window.setTimeout(initMap.bind(this), 1000);
    }, 
  computed: {
    xyzUrl() {
      return this.url.replace(/\/\d+\/\d+\/\d+\./, '/{z}/{x}/{y}.');
    }
  },
  watch: {
    url() {
      if (this.url.match(/\.(pbf|mvt)/)) {
        void request({
            url: this.url,
            encoding: null
        }, (err, response, body) => {
            try {
                body = zlib.gunzipSync(body);
            } catch (e) {
              // probably not a zip file
              // console.error(e);
            }
            const tile = new VectorTile(new Pbf(body));
            // console.log('Vector source layers found: ');
            Object.keys(tile.layers).forEach((layer, i) => tile.layers[layer]._color = cssColors[i]);
            this.layers = tile.layers;

            showLayers.call(this, this.xyzUrl, this.layers);
              
        })
      }
    }
  }
}
let ourLayers = [];
let inspectControl;
function showLayers(xyzUrl, layers) {
    function layerToSource(layer) {
      return layer.replace(/(-line|-circle|-fill)$/, '')
    }

    function resetValues(app) {
      Object.keys(layers).forEach(l => app.$set(app.values, l, {}));
    }
    try {
      ourLayers.forEach(map.removeLayer.bind(map));
    } catch(e) { 
      console.error(e)
    }
    try {
      map.removeSource('source');
    } catch(e) {}
    map.addSource('source', {
        type: 'vector',
        tiles: [ xyzUrl]
    });
    ourLayers = [];
    this.values = {};
    resetValues(this);
    Object.keys(layers).forEach((l, i) => {
      map.addLayer({
        id: l + '-fill',
        source: 'source',
        'source-layer': l,
        type: 'fill',
        paint: { 
          'fill-color': layers[l]._color, 
          'fill-opacity': 0.5
        },
        filter: ['any', ['==', '$type', 'Polygon']]
      });
      ourLayers.push(l + '-fill');
    });
    Object.keys(layers).forEach((l, i) => {
      map.addLayer({
        id: l + '-line',
        source: 'source',
        'source-layer': l,
        type: 'line',
        paint: { 
          'line-color': layers[l]._color, 
          'line-width': {
            stops: [[11, 1], [14, 5]]
          }
        },
        filter: ['any', ['==', '$type', 'LineString']]//, ['==', '$type', 'Polygon']]
      });
      ourLayers.push(l + '-line');
    });
    Object.keys(layers).forEach((l, i) => {
      map.addLayer({
        id: l + '-circle',
        source: 'source',
        'source-layer': l,
        type: 'circle',
        paint: { 
          'circle-color': layers[l]._color,
          'circle-radius': { stops: [[11, 2], [14, 5]] }
        },
        filter: ['==', '$type', 'Point']
      });
      ourLayers.push(l + '-circle');
    });
    map.on('mousemove', e => {
      resetValues(this);
      ourLayers.forEach(l => {
        const f = map.queryRenderedFeatures(e.point, { layers: [l] });
        if (f[0]) {
          const layer = layerToSource(l);
          // this.values[layer] = f[0].properties;
          this.$set(this.values, layer, f[0].properties);
        };
      });
    });
    if (inspectControl) {
      map.removeControl(inspectControl);
    }
    inspectControl = new MapboxInspect({
      popup: new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
      }), showInspectMap: true,
      queryParameters: { layers: ourLayers }      
    });
    map.addControl(inspectControl);


    // ourLayers.forEach(l => map.on('click', l, e => {
    //   const f = map.queryRenderedFeatures(e.point, { layers: [l] });
    //   if (f[0]) {
    //     this
    //   }
    // }));

    // Object.keys(layers).forEach(l => {
    //   map.addLayer({
    //     id: l + '-fill',
    //     source: 'source',
    //     'source-layer': l,
    //     type: 'line',
    //     paint: { 'line-color': 'maroon' },
    //     filter: ['==', '$type', 'Polygon']

    //   });
    //   ourLayers.push(l + '-fill');
    // });



}

function initMap() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3RldmFnZSIsImEiOiJjam5kcGMzNjMydnNxM2ttc2toamo3Yzk2In0.JLncOwxdMGtouRcPNJtnbQ';
    let map = new mapboxgl.Map({
        container: 'map', 
        style: { version: 8, sources: {}, layers: [] },
        // style: 'mapbox://styles/stevage/cjntir8r53vuo2spihcvac3t8', // light
        // center: [-74.50, 40], 
        center: aus ? [145, -37.8] : [-73.97509801962406, 40.762338800719704],
        zoom: 9
    });


    window.map = map;
}

</script>

<style>
/* @import '../node_modules/mapbox-gl-inspect/dist/mapbox-gl-inspect.css'; */
body {
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display:flex;
  flex-direction:column;
  height:100vh;
  width:100vw;
  
}

#top {
  flex-grow: 0;
  padding: 1em;

}

#middle {
    flex-grow:1;
    display: flex;
}

#map {
  flex-grow: 1;
  background:lightgrey;
  
}
#sidepanel {
  width: 300px;
  flex-grow: 0;
  background:white;
  border:1px solid lightgrey;
  padding:0 1em;
  /* overflow-y:scroll; */
}

#layers {
  font-family:Consolas,Monaco,'Courier New', Courier, monospace;
  font-size:10pt;
  
  height:50px;
  /* display:none; */
}

#attribute {
  margin-left:0 2em;
  padding: 0; 
  font-size:8pt;
  line-height:4px;
}
#key {
    width: 20em;
}

#url {
  width: 100%;
}

.credit {
  font-size: 10pt;
  color: grey;
}

.mapboxgl-popup {
  background:white;
  /* max-width:20em; */
  display:inline-block;
}

.mapbox-gl-inspect_popup {
  font-size:10px;
  pointer-events: none;
}

.mapbox-gl-inspect_property-value {
}

.mapboxgl-ctrl-inspect {
  /* height:50px; */
  display:none;
}

.mapboxgl-popup {
  pointer-events: none;
}

.mapbboxgl-popup * {
  pointer-events: none;
}

</style>
