(function(e){function t(t){for(var n,i,c=t[0],s=t[1],l=t[2],p=0,d=[];p<c.length;p++)i=c[p],o[i]&&d.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var s=r[c];0!==o[s]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"top"}},[r("h1",[e._v("Vector Inspector")]),e._v("Look inside the contents of vector tiles from third party sources!"),e._m(0),e._v("URL of one vector tile (eg https://tiles.planninglabs.nyc/data/v3/14/4826/6157.pbf)"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],attrs:{id:"url"},domProps:{value:e.url},on:{input:function(t){t.target.composing||(e.url=t.target.value)}}}),r("br"),r("br")]),r("div",{attrs:{id:"middle"}},[r("div",{attrs:{id:"sidepanel"}},[r("h3",[e._v("Layers")]),r("div",{attrs:{id:"layers"}},e._l(e.layers,function(t){return r("div",{style:{color:t._color},attrs:{id:"layer"}},[e._v(e._s(t.name)),r("table",{attrs:{id:"attributes"}},e._l(t._keys,function(n){return r("tr",{attrs:{id:"attribute"}},[r("td",{attrs:{id:"key"}},[e._v(e._s(n))]),r("td",{attrs:{id:"key"}},[e._v(e._s(e.values[t.name][n]))])])}))])}))]),r("div",{attrs:{id:"map"}})]),e._m(1)])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"credit"},[e._v("By Steve Bennett (@stevage1) - "),r("a",{attrs:{href:"http://hire.stevebennett.me"}},[e._v("hire.stevebennett.me")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"bottom"}},[e._v("Source: "),r("a",{attrs:{href:"https://github.com/stevage/vector-inspector"}},[e._v("https://github.com/stevage/vector-inspector")])])}];r("c11e");r("2b0e");const i=r("30dc"),c=r("740e").VectorTile,s=r("7915"),l=r("470b"),u=r("e192"),p=r("dfe1"),d=["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#bb5","#b15928",...Object.keys(r("f2dd"))],f=window.location.hash.match(/test/),v=window.location.hash.match(/aus/);var y={name:"app",components:{},data:()=>({url:f?"https://tiles.planninglabs.nyc/data/v3/14/4826/6157.pbf":void 0,layers:void 0,values:{}}),mounted(){window.setTimeout(_.bind(this),1e3)},computed:{xyzUrl(){return this.url.replace(/\/\d+\/\d+\/\d+\./,"/{z}/{x}/{y}.")}},watch:{url(){this.url.match(/\.(pbf|mvt)/)&&i({url:this.url,encoding:null},(e,t,r)=>{try{r=l.gunzipSync(r)}catch(o){}const n=new c(new s(r));Object.keys(n.layers).forEach((e,t)=>n.layers[e]._color=d[t]),this.layers=n.layers,b.call(this,this.xyzUrl,this.layers)})}}};let h,m=[];function b(e,t){function r(e){return e.replace(/(-line|-circle|-fill)$/,"")}function n(e){Object.keys(t).forEach(t=>e.$set(e.values,t,{}))}try{m.forEach(map.removeLayer.bind(map))}catch(o){console.error(o)}try{map.removeSource("source")}catch(o){}map.addSource("source",{type:"vector",tiles:[e]}),m=[],this.values={},n(this),Object.keys(t).forEach((e,r)=>{map.addLayer({id:e+"-fill",source:"source","source-layer":e,type:"fill",paint:{"fill-color":t[e]._color,"fill-opacity":.5},filter:["any",["==","$type","Polygon"]]}),m.push(e+"-fill")}),Object.keys(t).forEach((e,r)=>{map.addLayer({id:e+"-line",source:"source","source-layer":e,type:"line",paint:{"line-color":t[e]._color,"line-width":{stops:[[11,1],[14,5]]}},filter:["any",["==","$type","LineString"]]}),m.push(e+"-line")}),Object.keys(t).forEach((e,r)=>{map.addLayer({id:e+"-circle",source:"source","source-layer":e,type:"circle",paint:{"circle-color":t[e]._color,"circle-radius":{stops:[[11,2],[14,5]]}},filter:["==","$type","Point"]}),m.push(e+"-circle")}),map.on("mousemove",e=>{n(this),m.forEach(t=>{const n=map.queryRenderedFeatures(e.point,{layers:[t]});if(n[0]){const e=r(t);this.$set(this.values,e,n[0].properties)}})}),h&&map.removeControl(h),h=new p({popup:new u.Popup({closeButton:!1,closeOnClick:!1}),showInspectMap:!0,queryParameters:{layers:m}}),map.addControl(h)}function _(){u.accessToken="pk.eyJ1Ijoic3RldmFnZSIsImEiOiJjam5kcGMzNjMydnNxM2ttc2toamo3Yzk2In0.JLncOwxdMGtouRcPNJtnbQ";let e=new u.Map({container:"map",style:{version:8,sources:{},layers:[]},center:v?[145,-37.8]:[-73.97509801962406,40.762338800719704],zoom:9});window.map=e}var w=y,g=(r("034f"),r("2877")),O=Object(g["a"])(w,o,a,!1,null,null,null);O.options.__file="App.vue";var j=O.exports;n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(j)}}).$mount("#app")},"64a9":function(e,t,r){}});
//# sourceMappingURL=app.c849c9be.js.map