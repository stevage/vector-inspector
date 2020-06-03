(function(e){function t(t){for(var a,n,i=t[0],l=t[1],c=t[2],d=0,p=[];d<i.length;d++)n=i[d],s[n]&&p.push(s[n][0]),s[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,i=1;i<r.length;i++){var l=r[i];0!==s[l]&&(a=!1)}a&&(o.splice(t--,1),e=n(n.s=r[0]))}return e}var a={},s={app:0},o=[];function n(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=a,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("64a9"),s=r.n(a);s.a},1:function(e,t){},"14ef":function(e,t,r){},2:function(e,t){},"29cb":function(e,t,r){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"547e":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"top"}},[r("h1",[e._v("Vector Inspector")]),e._v("Look inside the contents of vector tiles from third party sources!"),e._m(0),e._v("Paste the URL of one vector tile ("),r("code",[e._v(".../8/531/489.pbf")]),e._v(") OR a TileJSON endpoint ("),r("code",[e._v(".../index.json")]),e._v(")"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],attrs:{id:"url",placeholder:"https://tiles.planninglabs.nyc/data/v3/14/4826/6157.pbf"},domProps:{value:e.url},on:{input:function(t){t.target.composing||(e.url=t.target.value)}}}),r("br"),r("small",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.cors,expression:"cors"}],attrs:{id:"cors",type:"checkbox"},domProps:{checked:Array.isArray(e.cors)?e._i(e.cors,null)>-1:e.cors},on:{change:function(t){var r=e.cors,a=t.target,s=!!a.checked;if(Array.isArray(r)){var o=null,n=e._i(r,o);a.checked?n<0&&(e.cors=r.concat([o])):n>-1&&(e.cors=r.slice(0,n).concat(r.slice(n+1)))}else e.cors=s}}}),r("label",{attrs:{for:"cors"}},[e._v("Use CORS proxy")])])]),r("div",{attrs:{id:"middle"}},[r("div",{attrs:{id:"sidepanel"}},[r("h3",[e._v("Layers")]),r("div",{attrs:{id:"layers"}},[r("AttributesTable",{attrs:{layers:e.layers,values:e.values},on:{clickAttribute:e.summariseAttribute}}),r("AttributeSummary",{attrs:{valueCounts:e.valueCounts,attributeName:e.focusedAttribute}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.showBoundaries,expression:"showBoundaries"}],attrs:{id:"showbBoundaries",type:"checkbox"},domProps:{checked:Array.isArray(e.showBoundaries)?e._i(e.showBoundaries,null)>-1:e.showBoundaries},on:{change:function(t){var r=e.showBoundaries,a=t.target,s=!!a.checked;if(Array.isArray(r)){var o=null,n=e._i(r,o);a.checked?n<0&&(e.showBoundaries=r.concat([o])):n>-1&&(e.showBoundaries=r.slice(0,n).concat(r.slice(n+1)))}else e.showBoundaries=s}}}),r("label",{attrs:{for:"showBoundaries"}},[e._v("Show tile boundaries")])],1)]),r("Map",{attrs:{layers:e.layers,xyzUrl:e.xyzUrl},on:{"values-update":e.updateValues}})],1),e._m(1)])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"credit"},[e._v("By Steve Bennett (@stevage1) - "),r("a",{attrs:{href:"http://hire.stevebennett.me"}},[e._v("hire.stevebennett.me")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"bottom"}},[e._v("Source: "),r("a",{attrs:{href:"https://github.com/stevage/vector-inspector"}},[e._v("https://github.com/stevage/vector-inspector")])])}],n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"AttributesTable"}},e._l(e.layers,function(t){return r("div",{style:{color:t._color},attrs:{id:"layer"}},[e._v(e._s(t.name)),r("table",{attrs:{id:"attributes"}}),e._l(t._keys,function(a){return r("tr",{attrs:{id:"attribute"},on:{click:function(r){e.$emit("clickAttribute",a,t.name)}}},[r("td",{attrs:{id:"key"}},[e._v(e._s(a))]),r("td",{attrs:{id:"key"}},[e._v(e._s(e.values[t.name]&&e.values[t.name][a]))])])})],2)}))},i=[],l={name:"AttributesTable",props:{layers:Array,values:{type:Object,default:()=>({})}},data:()=>({}),created(){window.AttributesTable=this}},c=l,u=(r("7869"),r("2877")),d=Object(u["a"])(c,n,i,!1,null,"105478f7",null);d.options.__file="AttributesTable.vue";var p=d.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.attributeName?r("div",{attrs:{id:"AttributeSummary"}},[r("h3",[e._v("Summary of"),r("span",{staticClass:"fixed"},[e._v("  "+e._s(e.attributeName))])]),r("table",e._l(e.sortedCounts,function(t){var a=t[0],s=t[1];return r("tr",[r("td",[e._v(e._s(a))]),r("td",[e._v(e._s(s))])])}))]):e._e()},f=[],v={name:"AttributeSummary",props:{attributeName:String,valueCounts:Object},data:()=>({}),created(){window.AttributeSummary=this},computed:{sortedCounts(){return Object.keys(this.valueCounts).map(e=>[e,this.valueCounts[e]]).sort(([,e],[,t])=>t-e)}}},y=v,m=(r("71c5"),Object(u["a"])(y,h,f,!1,null,"62f2cd68",null));m.options.__file="AttributeSummary.vue";var b=m.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"map"}})},w=[];r("ac6d");const g=r("e192");var S={name:"Map",props:{xyzUrl:String,layers:{type:Array,default:()=>[]}},data:()=>({ourLayers:[]}),created(){window.Map=this},mounted(){this.initMap()},watch:{xyzUrl(){this.map.U.removeSource("source"),this.map.addSource("source",{type:"vector",tiles:[this.xyzUrl]}),this.updateLayers()},layers(){this.updateLayers()},layerStyles(e,t){t.forEach(({id:e})=>this.map.U.removeLayer(e)),e.forEach(e=>this.map.U.addLayer(e)),e.filter(({type:e})=>"fill"===e).forEach(({id:e})=>this.map.U.hoverFeatureState(e))}},computed:{layerStyles(){return[...this.layers.map(({name:e,_color:t})=>({id:`${e}-fill`,source:"source",type:"fill",sourceLayer:e,fillColor:t,fillOpacity:["case",["to-boolean",["feature-state","hover"]],.7,.5],fillOutlineColor:["case",["to-boolean",["feature-state","hover"]],"black","transparent"],filter:["any",["==","$type","Polygon"]]})),...this.layers.map(({name:e,_color:t})=>({id:`${e}-line`,type:"line",source:"source",sourceLayer:e,lineColor:["case",["to-boolean",["feature-state","hover"]],"black",t],lineWidth:{stops:[[11,1],[14,5]]},filter:["any",["==","$type","LineString"],["==","$type","Polygon"]]})),...this.layers.map(({name:e,_color:t})=>({id:`${e}-circle`,type:"circle",source:"source",sourceLayer:e,circleColor:t,circleRadius:{stops:[[11,2],[14,5]]},filter:["==","$type","Point"]}))]}},methods:{updateLayers(){function e(e){Object.keys(t).forEach(t=>e.$set(e.values,t,{}))}this.xyzUrl;let t=this.layers;window.map;this.values={},e(this)},initMap(){g.accessToken="pk.eyJ1Ijoic3RldmFnZSIsImEiOiJjam5kcGMzNjMydnNxM2ttc2toamo3Yzk2In0.JLncOwxdMGtouRcPNJtnbQ";window.location.hash.match(/aus/);let e=new g.Map({container:"map",style:"mapbox://styles/mapbox/light-v8",maxTileCacheSize:0,hash:"loc"});e.addControl(new g.NavigationControl),r("ef12").init(e),window.map=e,this.map=e;const t=e=>e.replace(/(-line|-circle|-fill)$/,"");e.on("mousemove",r=>{const a={};this.layerStyles.forEach(({id:s})=>{const[o]=e.queryRenderedFeatures(r.point,{layers:[s]});if(o){const e=t(s);a[e]=o.properties}}),this.$emit("values-update",a)})}}},k=S,x=(r("8cd2"),Object(u["a"])(k,_,w,!1,null,"9c713b54",null));x.options.__file="Map.vue";var j=x.exports;r("c11e");const A=r("30dc"),O=r("740e").VectorTile,C=r("7915"),U=r("470b"),$=(r("dfe1"),["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#bb5","#b15928",...Object.keys(r("f2dd"))]);var z={name:"app",components:{AttributesTable:p,AttributeSummary:b,Map:j},data:()=>({url:"",layers:[],values:{},cors:!1,tilejsonXyzUrl:"",showBoundaries:!1,focusedAttribute:void 0,valueCounts:{}}),mounted(){window.setTimeout(()=>{localStorage.getItem("url")&&(this.url=localStorage.getItem("url"))},1e3)},computed:{xyzUrl(){return this.tilejsonXyzUrl||this.url.replace(/\/\d+\/\d+\/\d+\./,"/{z}/{x}/{y}.")},tileJsonUrl(){return this.url.replace(/\/\d+\/\d+\/\d+\.[a-zA-Z]*/,"/index.json")}},watch:{url(){this.refresh(),localStorage.setItem("url",this.url)},cors(){this.refresh()},showBoundaries(){map.showTileBoundaries=this.showBoundaries}},methods:{summariseAttribute(e,t){this.focusedAttribute=e,this.focusedLayer=t;const r=map.querySourceFeatures("source",{sourceLayer:t});this.valueCounts={};for(const{properties:a}of r)this.valueCounts[a[e]]=(this.valueCounts[a[e]]||0)+1;console.log(this.valueCounts)},updateValues(e){this.values=e},refresh(){const e=(e,t,r)=>{return A({url:this.cors?"https://cors-anywhere.herokuapp.com/"+e:e,headers:this.cors?{Origin:window.location.host}:{},...t},r)};this.url.match(/\.(pbf|mvt)/)?(e(this.url,{encoding:null},(e,t,r)=>{try{r=U.gunzipSync(r)}catch(s){}const a=new O(new C(r));console.log(a),Object.keys(a.layers).forEach((e,t)=>a.layers[e]._color=$[t]),console.log(a.layers),this.layers=Object.keys(a.layers).map(e=>a.layers[e])}),e(this.tileJsonUrl,{json:!0},(e,t,r)=>{r.center&&window.map.panTo(r.center,{zoom:r.center[2]}),console.log(r)})):this.url.match(/\.json/)&&e(this.url,{json:!0},(e,t,r)=>{this.layers=r.vector_layers.map((e,t)=>({_color:$[t],name:e.id,_keys:Object.keys(e.fields)})),this.tilejsonXyzUrl=r.tiles[0]})}}},B=z,L=(r("034f"),Object(u["a"])(B,s,o,!1,null,null,null));L.options.__file="App.vue";var M=L.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(M)}}).$mount("#app")},"64a9":function(e,t,r){},"71c5":function(e,t,r){"use strict";var a=r("547e"),s=r.n(a);s.a},7869:function(e,t,r){"use strict";var a=r("29cb"),s=r.n(a);s.a},"8cd2":function(e,t,r){"use strict";var a=r("14ef"),s=r.n(a);s.a}});
//# sourceMappingURL=app.8998c81b.js.map