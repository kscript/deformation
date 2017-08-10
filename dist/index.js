!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["vue-draggable-resizable"]=e():t["vue-draggable-resizable"]=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,i){i(7);var n=i(5)(i(1),i(6),"data-v-23e81ce3",null);n.options.__file="C:\\Users\\ps\\Documents\\GitHub\\deformation\\src\\components\\vue-draggable-resizable.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] vue-draggable-resizable.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={replace:!0,name:"vue-draggable-resizable",props:{draggable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},w:{type:Number,default:200,validator:function(t){return t>0}},h:{type:Number,default:200,validator:function(t){return t>0}},minw:{type:Number,default:50,validator:function(t){return t>0}},minh:{type:Number,default:50,validator:function(t){return t>0}},zIndex:{type:Number,default:1,validator:function(t){return t>=0}},x:{type:Number,default:0,validator:function(t){return t>=0}},y:{type:Number,default:0,validator:function(t){return t>=0}},handles:{type:Array,default:function(){return["tl","tm","tr","mr","br","bm","bl","ml"]}},axis:{type:String,default:"both",validator:function(t){return-1!==["x","y","both"].indexOf(t)}},grid:{type:Array,default:function(){return[1,1]}},parent:{type:Boolean,default:!1},maximize:{type:Boolean,default:!1}},created:function(){this.parentX=0,this.parentW=9999,this.parentY=0,this.parentH=9999,this.mouseX=0,this.mouseY=0,this.lastMouseX=0,this.lastMouseY=0,this.mouseOffX=0,this.mouseOffY=0,this.elmX=0,this.elmY=0,this.elmW=0,this.elmH=0},mounted:function(){if(document.documentElement.addEventListener("mousemove",this.handleMove,!0),document.documentElement.addEventListener("mousedown",this.deselect,!0),document.documentElement.addEventListener("mouseup",this.handleUp,!0),this.minw>this.w&&(this.width=this.minw),this.minh>this.h&&(this.height=this.minh),this.parent){var t=parseInt(this.$el.parentNode.clientWidth,10),e=parseInt(this.$el.parentNode.clientHeight,10);this.parentW=t,this.parentH=e,this.w>this.parentW&&(this.width=t),this.h>this.parentH&&(this.height=e),this.x+this.w>this.parentW&&(this.width=t-this.x),this.y+this.h>this.parentH&&(this.height=e-this.y)}this.$emit("resizing",this.left,this.top,this.width,this.height)},beforeDestroy:function(){document.documentElement.removeEventListener("mousemove",this.handleMove,!0),document.documentElement.removeEventListener("mousedown",this.deselect,!0),document.documentElement.removeEventListener("mouseup",this.handleUp,!0)},data:function(){return{top:this.y,left:this.x,width:this.w,height:this.h,resizing:!1,dragging:!1,active:!1,opacity:1,handle:null}},methods:{elmDown:function(t){var e=t.target.tagName.toLowerCase();"textarea"!==e&&"input"!==e&&(this.active||(this.active=!0,this.$emit("activated")),this.elmX=parseInt(this.$el.style.left),this.elmY=parseInt(this.$el.style.top),this.elmW=this.$el.offsetWidth||this.$el.clientWidth,this.elmH=this.$el.offsetHeight||this.$el.clientHeight,this.draggable&&(this.opacity=.6,this.dragging=!0))},deselect:function(t){var e=t.target||t.srcElement,i=new RegExp("handle-([trmbl]{2})","");e===this.$el||i.test(e.className)||this.active&&(this.active=!1,this.$emit("deactivated"))},handleDown:function(t,e){this.handle=t,e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),this.resizing=!0},fillParent:function(t){var e=this;if(this.parent&&this.resizable&&this.maximize){var i=!1,n=function t(){i||window.requestAnimationFrame(t),"x"===e.axis?e.width===e.parentW&&e.left===e.parentX&&(i=!0):"y"===e.axis?e.height===e.parentH&&e.top===e.parentY&&(i=!0):"both"===e.axis&&e.width===e.parentW&&e.height===e.parentH&&e.top===e.parentY&&e.left===e.parentX&&(i=!0),"x"!==e.axis&&"both"!==e.axis||(e.width<e.parentW&&(e.width++,e.elmW++),e.left>e.parentX&&(e.left--,e.elmX--)),"y"!==e.axis&&"both"!==e.axis||(e.height<e.parentH&&(e.height++,e.elmH++),e.top>e.parentY&&(e.top--,e.elmY--)),e.$emit("resizing",e.left,e.top,e.width,e.height)};window.requestAnimationFrame(n)}},handleMove:function(t){this.mouseX=t.pageX||t.clientX+document.documentElement.scrollLeft,this.mouseY=t.pageY||t.clientY+document.documentElement.scrollTop;var e=this.mouseX-this.lastMouseX+this.mouseOffX,i=this.mouseY-this.lastMouseY+this.mouseOffY;this.mouseOffX=this.mouseOffY=0,this.lastMouseX=this.mouseX,this.lastMouseY=this.mouseY;var n=e,s=i;this.resizing?(this.handle.indexOf("t")>=0&&(this.elmH-s<this.minh?this.mouseOffY=s-(i=this.elmH-this.minh):this.elmY+s<this.parentY&&(this.mouseOffY=s-(i=this.parentY-this.elmY)),this.elmY+=i,this.elmH-=i),this.handle.indexOf("b")>=0&&(this.elmH+s<this.minh?this.mouseOffY=s-(i=this.minh-this.elmH):this.elmY+this.elmH+s>this.parentH&&(this.mouseOffY=s-(i=this.parentH-this.elmY-this.elmH)),this.elmH+=i),this.handle.indexOf("l")>=0&&(this.elmW-n<this.minw?this.mouseOffX=n-(e=this.elmW-this.minw):this.elmX+n<this.parentX&&(this.mouseOffX=n-(e=this.parentX-this.elmX)),this.elmX+=e,this.elmW-=e),this.handle.indexOf("r")>=0&&(this.elmW+n<this.minw?this.mouseOffX=n-(e=this.minw-this.elmW):this.elmX+this.elmW+n>this.parentW&&(this.mouseOffX=n-(e=this.parentW-this.elmX-this.elmW)),this.elmW+=e),this.left=Math.round(this.elmX/this.grid[0])*this.grid[0],this.top=Math.round(this.elmY/this.grid[1])*this.grid[1],this.width=Math.round(this.elmW/this.grid[0])*this.grid[0],this.height=Math.round(this.elmH/this.grid[1])*this.grid[1],this.$emit("resizing",this.left,this.top,this.width,this.height)):this.dragging&&(this.elmX+n<this.parentX?this.mouseOffX=n-(e=this.parentX-this.elmX):this.elmX+this.elmW+n>this.parentW&&(this.mouseOffX=n-(e=this.parentW-this.elmX-this.elmW)),this.elmY+s<this.parentY?this.mouseOffY=s-(i=this.parentY-this.elmY):this.elmY+this.elmH+s>this.parentH&&(this.mouseOffY=s-(i=this.parentH-this.elmY-this.elmH)),this.elmX+=e,this.elmY+=i,"x"!==this.axis&&"both"!==this.axis||(this.left=Math.round(this.elmX/this.grid[0])*this.grid[0]),"y"!==this.axis&&"both"!==this.axis||(this.top=Math.round(this.elmY/this.grid[1])*this.grid[1]),this.$emit("dragging",this.left,this.top))},handleUp:function(t){this.handle=null,this.resizing&&(this.resizing=!1,this.$emit("resizestop",this.left,this.top,this.width,this.height)),this.dragging&&(this.dragging=!1,this.$emit("dragstop",this.left,this.top)),this.opacity=1,this.elmX=this.left,this.elmY=this.top}},watch:{x:function(t){console.log(t),this.left=t},y:function(t){console.log(t),this.top=t}},computed:{style:function(){return{top:this.top+"px",left:this.left+"px",width:this.width+"px",height:this.height+"px",zIndex:this.zIndex,opacity:this.opacity}}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=i.n(n);i.d(e,"default",function(){return s.a})},function(t,e,i){e=t.exports=i(4)(),e.push([t.i,"\n.vdr[data-v-23e81ce3] {\n  position: absolute;\n  box-sizing: border-box;\n}\n.draggable[data-v-23e81ce3]:hover {\n  cursor: move;\n}\n.handle[data-v-23e81ce3] {\n  box-sizing: border-box;\n  display: none;\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  font-size: 1px;\n  background: #EEE;\n  border: 1px solid #333;\n}\n.handle-tl[data-v-23e81ce3] {\n  top: -10px;\n  left: -10px;\n  cursor: nw-resize;\n}\n.handle-tm[data-v-23e81ce3] {\n  top: -10px;\n  left: 50%;\n  margin-left: -5px;\n  cursor: n-resize;\n}\n.handle-tr[data-v-23e81ce3] {\n  top: -10px;\n  right: -10px;\n  cursor: ne-resize;\n}\n.handle-ml[data-v-23e81ce3] {\n  top: 50%;\n  margin-top: -5px;\n  left: -10px;\n  cursor: w-resize;\n}\n.handle-mr[data-v-23e81ce3] {\n  top: 50%;\n  margin-top: -5px;\n  right: -10px;\n  cursor: e-resize;\n}\n.handle-bl[data-v-23e81ce3] {\n  bottom: -10px;\n  left: -10px;\n  cursor: sw-resize;\n}\n.handle-bm[data-v-23e81ce3] {\n  bottom: -10px;\n  left: 50%;\n  margin-left: -5px;\n  cursor: s-resize;\n}\n.handle-br[data-v-23e81ce3] {\n  bottom: -10px;\n  right: -10px;\n  cursor: se-resize;\n}\n",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(n[r]=!0)}for(s=0;s<e.length;s++){var o=e[s];"number"==typeof o[0]&&n[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),t.push(o))}},t}},function(t,e){t.exports=function(t,e,i,n){var s,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(s=t,r=t.default);var a="function"==typeof r?r.options:r;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),i&&(a._scopeId=i),n){var h=Object.create(a.computed||null);Object.keys(n).forEach(function(t){var e=n[t];h[t]=function(){return e}}),a.computed=h}return{esModule:s,exports:r,options:a}}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vdr",class:{draggable:t.draggable,resizable:t.resizable,active:t.active},style:t.style,on:{mousedown:function(e){e.stopPropagation(),t.elmDown(e)},dblclick:function(e){e.stopPropagation(),t.fillParent(e)}}},[t._l(t.handles,function(e){return t.resizable?i("div",{staticClass:"handle",class:"handle-"+e,style:{display:t.active?"block":"none"},on:{mousedown:function(i){i.stopPropagation(),i.preventDefault(),t.handleDown(e,i)}}}):t._e()}),t._v(" "),t._t("default")],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,i){var n=i(3);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(8)("b2d1a264",n,!1)},function(t,e,i){function n(t){for(var e=0;e<t.length;e++){var i=t[e],n=u[i.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](i.parts[s]);for(;s<i.parts.length;s++)n.parts.push(r(i.parts[s]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var o=[],s=0;s<i.parts.length;s++)o.push(r(i.parts[s]));u[i.id]={id:i.id,refs:1,parts:o}}}}function s(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function r(t){var e,i,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(m)return c;n.parentNode.removeChild(n)}if(g){var r=f++;n=p||(p=s()),e=o.bind(null,n,r,!1),i=o.bind(null,n,r,!0)}else n=s(),e=a.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function o(t,e,i,n){var s=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=v(e,s);else{var r=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function a(t,e){var i=e.css,n=e.media,s=e.sourceMap;if(n&&t.setAttribute("media",n),s&&(i+="\n/*# sourceURL="+s.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var h="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!h)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=i(9),u={},d=h&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,m=!1,c=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i){m=i;var s=l(t,e);return n(s),function(e){for(var i=[],r=0;r<s.length;r++){var o=s[r],a=u[o.id];a.refs--,i.push(a)}e?(s=l(t,e),n(s)):s=[];for(var r=0;r<i.length;r++){var a=i[r];if(0===a.refs){for(var h=0;h<a.parts.length;h++)a.parts[h]();delete u[a.id]}}}};var v=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var i=[],n={},s=0;s<e.length;s++){var r=e[s],o=r[0],a=r[1],h=r[2],l=r[3],u={id:t+":"+s,css:a,media:h,sourceMap:l};n[o]?n[o].parts.push(u):i.push(n[o]={id:o,parts:[u]})}return i}}])});