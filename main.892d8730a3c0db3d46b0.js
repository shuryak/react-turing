(()=>{"use strict";var e,t={6579:(e,t,r)=>{var n=r(7378),a=r(7634);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){u=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const s=function(e){var t=e.onOptionsChanged,r=l((0,n.useState)((function(){return{instructions:[],tapeLength:10,headStartIndex:2}})),2),a=r[0],o=r[1],u=l((0,n.useState)(""),2),c=u[0],s=u[1];return(0,n.useEffect)((function(){t(a)}),[]),(0,n.useEffect)((function(){t(a)}),[a]),n.createElement("div",{className:"codes-input"},n.createElement("textarea",{name:"codes-textarea",id:"codes-textarea",onChange:function(e){s(e.target.value),o((function(t){return i(i({},t),{},{instructions:e.target.value.split("\n")})}))},value:c}),n.createElement("label",{className:"file-input-label"},"Выбрать файл",n.createElement("input",{className:"file-input",type:"file",name:"file-input",id:"file-input",onChange:function(e){var t=e.target.files[0],r=new FileReader;r.readAsText(t,"UTF-8"),r.onload=function(e){s(e.target.result),o((function(t){return i(i({},t),{},{instructions:e.target.result.split("\n")})}))}}})),n.createElement("label",null,n.createElement("p",null,"Положение головки:"),n.createElement("input",{type:"number",name:"head-start-index-input",id:"head-start-index-input",min:1,max:a.tapeLength,onChange:function(e){o((function(t){return i(i({},t),{},{headStartIndex:+e.target.value-1})}))},defaultValue:a.headStartIndex})),n.createElement("label",null,n.createElement("p",null,"Длина ленты:"),n.createElement("input",{type:"number",name:"tape-length-input",id:"tape-length-input",min:1,onChange:function(e){o((function(t){return i(i({},t),{},{tapeLength:+e.target.value})}))},defaultValue:a.tapeLength})))};const f=(0,n.createContext)({});function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||b(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){u=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw a}}return o}(e,t)||b(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){if(e){if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const v=function(){var e=(0,n.useContext)(f),t=m((0,n.useState)(o()),2),r=t[0],a=t[1];function o(){return{headIndex:e.headStartIndex,state:"q1",array:new Array(e.tapeLength).fill("0"),iterationsCount:0,isFinished:!1,instructions:i(e.instructions)}}function i(e){var t=new Map;return e.forEach((function(e){var r=e.substr(e.indexOf("->"),e.length).slice(2).trim(),n=r[r.length-1],a=r.substr(0,r.length-1).trim()[r.substr(0,r.length-1).trim().length-1],o=r.split(" ").join("").substr(0,r.split(" ").join("").indexOf(a+n)),i=e.substr(0,e.indexOf("->")).trim(),u=i[i.length-1],l=i.substr(0,i.length-1).trim();t.set("".concat(l,"|").concat(u),{newState:o,newValue:a,direction:n})})),t}return(0,n.useEffect)((function(){a((function(t){var n=h(t.array),a=e.headStartIndex;if(e.tapeLength>t.array.length)for(var o=e.tapeLength-t.array.length,u=0;u<o;u++)n.push("0");else if(e.tapeLength<t.array.length){var l=t.array.length-e.tapeLength;n.splice(-1,l)}return a>n.length-1&&(a=n.length-1),y(y({},r),{},{array:n,headIndex:a,instructions:i(e.instructions)})}))}),[e]),n.createElement("div",{className:"tape"},n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",{className:"tape-state"},r.array.map((function(e,t){return t===r.headIndex?n.createElement("th",{key:t},r.state):n.createElement("th",{key:t})}))),n.createElement("tr",{className:"tape-values"},r.array.map((function(e,t){return n.createElement("td",{key:t},e)}))))),n.createElement("button",{style:{zoom:3},onClick:function(){if(!r.isFinished){var e="".concat(r.state,"|").concat(r.array[r.headIndex]);if(r.instructions.has(e)){var t=r.instructions.get(e),n=t.newState,o=t.newValue,i=t.direction;a((function(e){var t=e.headIndex;"R"===i?t++:"L"===i&&t--,void 0===r.array[t]&&(r.array[t]="0");var a=e.array;a[e.headIndex]=o;var u=e.iterationsCount+1,l=!1;return"q0"===n&&(console.log("Finished!"),l=!0),y(y({},e),{},{state:n,headIndex:t,iterationsCount:u,isFinished:l,updatedArray:a})}))}}}},"STEP"),n.createElement("button",{style:{zoom:2},onClick:function(){return a(o())}},"To default"))};function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){u=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const j=function(){var e=O((0,n.useState)({instructions:[],tapeLength:4,headStartIndex:2}),2),t=e[0],r=e[1];return n.createElement(n.StrictMode,null,n.createElement(s,{onOptionsChanged:function(e){r(e)}}),n.createElement(f.Provider,{value:t},n.createElement(v,null)))};(0,a.s)(document.getElementById("wrapper")).render(n.createElement(j,null))}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,a,o)=>{if(!r){var i=1/0;for(s=0;s<e.length;s++){for(var[r,a,o]=e[s],u=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(u=!1,o<i&&(i=o));if(u){e.splice(s--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,a,o]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[i,u,l]=r,c=0;if(i.some((t=>0!==e[t]))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(l)var s=l(n)}for(t&&t(r);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(s)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.O(void 0,[846],(()=>n(1202)));var a=n.O(void 0,[846],(()=>n(6579)));a=n.O(a)})();