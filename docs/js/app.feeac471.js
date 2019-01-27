(function(e){function t(t){for(var o,c,i=t[0],a=t[1],l=t[2],d=0,p=[];d<i.length;d++)c=i[d],n[c]&&p.push(n[c][0]),n[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],o=!0,i=1;i<r.length;i++){var a=r[i];0!==n[a]&&(o=!1)}o&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var o={},n={app:0},s=[];function c(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=o,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(r,o,function(t){return e[t]}.bind(null,o));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=a;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var o=r("64a9"),n=r.n(o);n.a},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);var o=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"top"}},[r("h1",[e._v("Vector Inspector")]),e._v("Look inside the contents of vector tiles from third party sources!"),e._m(0),e._v("Paste the URL of one vector tile"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],attrs:{id:"url",placeholder:"https://tiles.planninglabs.nyc/data/v3/14/4826/6157.pbf"},domProps:{value:e.url},on:{input:function(t){t.target.composing||(e.url=t.target.value)}}}),r("br"),r("small",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.cors,expression:"cors"}],attrs:{id:"cors",type:"checkbox"},domProps:{checked:Array.isArray(e.cors)?e._i(e.cors,null)>-1:e.cors},on:{change:function(t){var r=e.cors,o=t.target,n=!!o.checked;if(Array.isArray(r)){var s=null,c=e._i(r,s);o.checked?c<0&&(e.cors=r.concat([s])):c>-1&&(e.cors=r.slice(0,c).concat(r.slice(c+1)))}else e.cors=n}}}),r("label",{attrs:{for:"cors"}},[e._v("Use CORS proxy")])])]),r("div",{attrs:{id:"middle"}},[r("div",{attrs:{id:"sidepanel"}},[r("h3",[e._v("Layers")]),r("div",{attrs:{id:"layers"}},e._l(e.layers,function(t){return r("div",{style:{color:t._color},attrs:{id:"layer"}},[e._v(e._s(t.name)),r("table",{attrs:{id:"attributes"}},e._l(t._keys,function(o){return r("tr",{attrs:{id:"attribute"}},[r("td",{attrs:{id:"key"}},[e._v(e._s(o))]),r("td",{attrs:{id:"key"}},[e._v(e._s(e.values[t.name][o]))])])}))])}))]),r("div",{attrs:{id:"map"}})]),e._m(1)])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"credit"},[e._v("By Steve Bennett (@stevage1) - "),r("a",{attrs:{href:"http://hire.stevebennett.me"}},[e._v("hire.stevebennett.me")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"bottom"}},[e._v("Source: "),r("a",{attrs:{href:"https://github.com/stevage/vector-inspector"}},[e._v("https://github.com/stevage/vector-inspector")])])}];r("c11e");r("2b0e");const c=r("30dc"),i=r("740e").VectorTile,a=r("7915"),l=r("470b"),u=r("e192"),d=r("dfe1"),p=["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#bb5","#b15928",...Object.keys(r("f2dd"))],f=window.location.hash.match(/test/),h=window.location.hash.match(/aus/);var v={name:"app",components:{},data:()=>({url:f?"https://tiles.planninglabs.nyc/data/v3/14/4826/6157.pbf":void 0,layers:void 0,values:{},cors:!1}),mounted(){window.setTimeout(_.bind(this),1e3)},computed:{xyzUrl(){return this.url.replace(/\/\d+\/\d+\/\d+\./,"/{z}/{x}/{y}.")},tileJsonUrl(){return this.url.replace(/\/\d+\/\d+\/\d+\.[a-zA-Z]*/,"/index.json")}},watch:{url(){this.refresh()},cors(){this.refresh()}},methods:{refresh(){const e=(e,t,r)=>{return c({url:this.cors?"https://cors-anywhere.herokuapp.com/"+e:e,headers:this.cors?{Origin:window.location.host}:{},...t},r)};this.url.match(/\.(pbf|mvt)/)&&(e(this.url,{encoding:null},(e,t,r)=>{try{r=l.gunzipSync(r)}catch(n){}const o=new i(new a(r));Object.keys(o.layers).forEach((e,t)=>o.layers[e]._color=p[t]),this.layers=o.layers,b.call(this,this.xyzUrl,this.layers)}),e(this.tileJsonUrl,{json:!0},(e,t,r)=>{r.center&&window.map.panTo(r.center,{zoom:r.center[2]}),console.log(r)}))}}};let y,m=[];function b(e,t){function r(e){return e.replace(/(-line|-circle|-fill)$/,"")}function o(e){Object.keys(t).forEach(t=>e.$set(e.values,t,{}))}let n=window.map;try{m.forEach(n.removeLayer.bind(n))}catch(s){console.error(s)}try{n.removeSource("source")}catch(s){}n.addSource("source",{type:"vector",tiles:[e]}),m=[],this.values={},o(this),Object.keys(t).forEach((e,r)=>{n.U.addFill(e+"-fill","source",{sourceLayer:e,fillColor:t[e]._color,fillOpacity:.5,filter:["any",["==","$type","Polygon"]]}),m.push(e+"-fill")}),Object.keys(t).forEach((e,r)=>{n.U.addLine(e+"-line","source",{sourceLayer:e,lineColor:t[e]._color,lineWidth:{stops:[[11,1],[14,5]]},filter:["any",["==","$type","LineString"]]}),m.push(e+"-line")}),Object.keys(t).forEach((e,r)=>{n.U.addCircle(e+"-circle","source",{sourceLayer:e,circleColor:t[e]._color,circleRadius:{stops:[[11,2],[14,5]]},filter:["==","$type","Point"]}),m.push(e+"-circle")}),n.on("mousemove",e=>{o(this),m.forEach(t=>{const o=n.queryRenderedFeatures(e.point,{layers:[t]});if(o[0]){const e=r(t);this.$set(this.values,e,o[0].properties)}})}),y&&n.removeControl(y),y=new d({popup:new u.Popup({closeButton:!1,closeOnClick:!1}),showInspectMap:!0,queryParameters:{layers:m}}),n.addControl(y)}function _(){u.accessToken="pk.eyJ1Ijoic3RldmFnZSIsImEiOiJjam5kcGMzNjMydnNxM2ttc2toamo3Yzk2In0.JLncOwxdMGtouRcPNJtnbQ";let e=new u.Map({container:"map",style:{version:8,sources:{},layers:[]},center:h?[145,-37.8]:[-73.97509801962406,40.762338800719704],zoom:9});r("8936e").init(e),window.map=e}var w=v,g=(r("034f"),r("2877")),k=Object(g["a"])(w,n,s,!1,null,null,null);k.options.__file="App.vue";var O=k.exports;o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(O)}}).$mount("#app")},"64a9":function(e,t,r){}});
//# sourceMappingURL=app.feeac471.js.map