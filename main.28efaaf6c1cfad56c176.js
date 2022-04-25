(()=>{"use strict";var e,t={6579:(e,t,r)=>{var n=r(7378),a=r(7634);const o=(0,n.createContext)({});function i(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||f(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){u=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw a}}return o}(e,t)||f(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const y=function(e){var t=e.onOptionsChanged,r=(0,n.useContext)(o),a=s((0,n.useState)(r),2),u=a[0],c=a[1],f=s((0,n.useState)(""),2),p=f[0],y=f[1];return(0,n.useEffect)((function(){t(u)}),[]),(0,n.useEffect)((function(){t(u)}),[u]),n.createElement("div",{className:"codes-input"},n.createElement("textarea",{name:"codes-textarea",id:"codes-textarea",onChange:function(e){y(e.target.value),c((function(t){return l(l({},t),{},{instructions:e.target.value.split("\n")})}))},value:p}),n.createElement("label",{className:"file-input-label"},"Выбрать файл",n.createElement("input",{className:"file-input",type:"file",name:"file-input",id:"file-input",onChange:function(e){var t=e.target.files[0],r=new FileReader;r.readAsText(t,"UTF-8"),r.onload=function(e){y(e.target.result),c((function(t){return l(l({},t),{},{instructions:e.target.result.split("\n")})}))}}})),n.createElement("label",null,n.createElement("p",null,"Положение головки:"),n.createElement("input",{type:"number",name:"head-start-index-input",id:"head-start-index-input",min:1,max:u.tapeLength,onChange:function(e){var t=+e.target.value;t<1?t=1:t>u.tapeLength&&(t=u.tapeLength),c((function(e){return l(l({},e),{},{headIndex:t-1})}))},value:u.headIndex+1})),n.createElement("label",null,n.createElement("p",null,"Длина ленты:"),n.createElement("input",{type:"number",name:"tape-length-input",id:"tape-length-input",min:1,onChange:function(e){var t=+e.target.value;t<1?t=1:t>1e3&&(t=1e3),c((function(e){return l(l({},e),{},{tapeLength:t})}))},value:u.tapeLength})),n.createElement("label",null,n.createElement("p",null,"Переменные:"),u.vars.map((function(e,t){return n.createElement("input",{className:"var-inout",type:"number",name:"var"+t,id:"var"+t,min:0,value:e,key:t,onChange:function(e){return r=t,(n=+e.target.value)<0?n=0:n>1e3&&(n=1e3),void c((function(e){var t=i(e.vars);return t[r]=n,l(l({},e),{},{vars:t})}));var r,n}})}))))};function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||g(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){u=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw a}}return o}(e,t)||g(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){if(e){if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(e,t):void 0}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const E=function(){var e=(0,n.useContext)(o),t=b((0,n.useState)({state:"q1",array:new Array(e.tapeLength).fill("0"),iterationsCount:0,isFinished:!1}),2),r=t[0],a=t[1],i=b((0,n.useState)(e.headIndex),2),u=i[0],l=i[1],c=b((0,n.useState)(0),2),s=c[0],f=c[1];function p(){var t,n,a,o=function(e,t){var r=e;if(t>r.length)for(var n=t-r.length,a=0;a<n;a++)r.push("0");else if(t<r.length){var o=r.length-t;r.splice(-1,o)}return r}(r.array,e.tapeLength),i=function(e,t){var r=t;r>e.length-1&&(r=e.length-1);return r}(r.array,e.headIndex),c=(t=e.instructions,n=t,a=new Map,n.forEach((function(e){var t=e.substr(e.indexOf("->"),e.length).slice(2).trim(),r=t[t.length-1],n=t.substr(0,t.length-1).trim()[t.substr(0,t.length-1).trim().length-1],o=t.split(" ").join("").substr(0,t.split(" ").join("").indexOf(n+r)),i=e.substr(0,e.indexOf("->")).trim(),u=i[i.length-1],l=i.substr(0,i.length-1).trim();a.set("".concat(l,"|").concat(u),{newState:o,newValue:n,direction:r})})),a);return o=function(e,t,r,n){var a=e;if(r>t)for(var o=0;o<r;o++)a[t+o]="0";else if(r<t)for(var i=0;i<r;i++)a[r+s+i]="0";for(var u=0;u<s;u++)a[r+u]="0";f((function(e){for(var t=n.length-1,r=0;r<n.length;r++)t+=n[r]+1;return t}));for(var l=0;l<n.length;l++)for(var c=0;c<=n[l];c++)a[r+c]="1",c===n[l]&&(r+=c+2);return a}(o,u,i,e.vars),l(i),{headIndex:i,state:"q1",array:o,iterationsCount:0,isFinished:!1,instructions:c}}return(0,n.useEffect)((function(){a(p())}),[]),(0,n.useEffect)((function(){a(p())}),[e]),n.createElement("div",{className:"tape"},n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",{className:"tape-state"},r.array.map((function(e,t){return t===r.headIndex?n.createElement("th",{key:t},r.state):n.createElement("th",{key:t})}))),n.createElement("tr",{className:"tape-values"},r.array.map((function(e,t){return n.createElement("td",{key:t,onClick:function(){return function(e,t){var r="0"===e?"1":"0";a((function(e){var n=v(e.array);return n[t]=r,d(d({},e),{},{array:n})}))}(e,t)}},e)}))))),n.createElement("button",{style:{zoom:3},onClick:function(){if(!r.isFinished){var e="".concat(r.state,"|").concat(r.array[r.headIndex]);if(r.instructions.has(e)){var t=r.instructions.get(e),n=t.newState,o=t.newValue,i=t.direction;a((function(e){var t=e.headIndex,r=v(e.array);r[t]=o,"R"===i?t++:"L"===i&&t--,void 0===r[t]&&(r[t]="0");var a=e.iterationsCount+1,u=!1;return"q0"===n&&(console.log("Finished!"),u=!0),d(d({},e),{},{state:n,headIndex:t,iterationsCount:a,isFinished:u,array:r})}))}}}},"Сделать шаг"),n.createElement("button",{style:{zoom:2},onClick:function(){return a(p())}},"Восстановить"))};function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){u=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const S=function(){var e=w((0,n.useState)({instructions:[],tapeLength:20,headIndex:2,vars:[1,2,3]}),2),t=e[0],r=e[1];return n.createElement(n.StrictMode,null,n.createElement(o.Provider,{value:t},n.createElement(y,{onOptionsChanged:function(e){r(e)}}),n.createElement(E,null)))};(0,a.s)(document.getElementById("wrapper")).render(n.createElement(S,null))}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,a,o)=>{if(!r){var i=1/0;for(s=0;s<e.length;s++){for(var[r,a,o]=e[s],u=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(u=!1,o<i&&(i=o));if(u){e.splice(s--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,a,o]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[i,u,l]=r,c=0;if(i.some((t=>0!==e[t]))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(l)var s=l(n)}for(t&&t(r);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(s)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.O(void 0,[846],(()=>n(1202)));var a=n.O(void 0,[846],(()=>n(6579)));a=n.O(a)})();