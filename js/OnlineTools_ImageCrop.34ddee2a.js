(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["OnlineTools_ImageCrop"],{1523:function(t,e,n){},"1dde":function(t,e,n){var o=n("d039"),i=n("b622"),a=n("2d00"),s=i("species");t.exports=function(t){return a>=51||!o((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"21a6":function(t,e,n){(function(n){var o,i,a;(function(n,s){i=[],o=s,a="function"===typeof o?o.apply(e,i):o,void 0===a||(t.exports=a)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function o(t,e,n){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){c(o.response,e,n)},o.onerror=function(){console.error("could not download file")},o.send()}function i(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function a(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(o){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,r=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(t,e,n){var r=s.URL||s.webkitURL,c=document.createElement("a");e=e||t.name||"download",c.download=e,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?a(c):i(c.href)?o(t,e,n):a(c,c.target="_blank")):(c.href=r.createObjectURL(t),setTimeout((function(){r.revokeObjectURL(c.href)}),4e4),setTimeout((function(){a(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,n,s){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,s),n);else if(i(t))o(t,n,s);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout((function(){a(r)}))}}:function(t,e,n,i){if(i=i||open("","_blank"),i&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof t)return o(t,e,n);var a="application/octet-stream"===t.type,c=/constructor/i.test(s.HTMLElement)||s.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||a&&c||r)&&"undefined"!=typeof FileReader){var p=new FileReader;p.onloadend=function(){var t=p.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=t:location=t,i=null},p.readAsDataURL(t)}else{var u=s.URL||s.webkitURL,d=u.createObjectURL(t);i?i.location=d:location.href=d,i=null,setTimeout((function(){u.revokeObjectURL(d)}),4e4)}});s.saveAs=c.saveAs=c,t.exports=c}))}).call(this,n("c8ba"))},"407e":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("HeaderOnlineTools"),t._m(0),t._m(1),n("br"),t.uploadedImage.imageData?t._e():n("div",{staticClass:"home"},[n("h2",[t._v("Select image")]),n("input",{attrs:{type:"file",id:"inputImage"},on:{change:t.onImageUpload}})]),n("img",{staticStyle:{position:"absolute",visibility:"hidden"},attrs:{src:t.uploadedImage.imageData,id:"original_image"},on:{load:t.onImageLoad}}),t.uploadedImage.imageData?n("div",{staticClass:"imageGridLayout"},[n("div"),n("div",{staticClass:"div_image"},[n("canvas",{staticStyle:{border:"1px solid #000000"},attrs:{id:"resultCanvas",width:t.canvasWidth,height:t.canvasHeight}}),n("br"),n("br"),t._m(2),n("div",[t._v("width: "+t._s(t.uploadedImage.width))]),n("div",[t._v("height: "+t._s(t.uploadedImage.height))])]),n("div",{staticClass:"div_options"},[t._m(3),n("br"),n("div",{staticClass:"optionsLayout"},[n("div",{staticClass:"div_option"},[t._v("Position x (px)")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cropOptions.x,expression:"cropOptions.x"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.cropOptions.x},on:{change:function(e){return t.updateResultCanvas()},input:function(e){e.target.composing||t.$set(t.cropOptions,"x",e.target.value)}}})]),n("div",{staticClass:"div_option"},[t._v("Position y (px)")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cropOptions.y,expression:"cropOptions.y"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.cropOptions.y},on:{change:function(e){return t.updateResultCanvas()},input:function(e){e.target.composing||t.$set(t.cropOptions,"y",e.target.value)}}})]),n("div",{staticClass:"div_option"},[t._v("Width (px)")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cropOptions.width,expression:"cropOptions.width"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.cropOptions.width},on:{change:function(e){return t.updateResultCanvas()},input:function(e){e.target.composing||t.$set(t.cropOptions,"width",e.target.value)}}})]),n("div",{staticClass:"div_option"},[t._v("Height (px)")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cropOptions.height,expression:"cropOptions.height"}],staticClass:"input_option",attrs:{type:"text"},domProps:{value:t.cropOptions.height},on:{change:function(e){return t.updateResultCanvas()},input:function(e){e.target.composing||t.$set(t.cropOptions,"height",e.target.value)}}})])]),n("br"),n("div",[n("button",{staticClass:"btn btn-lg btn-primary",attrs:{type:"button"},on:{click:function(e){return t.downloadCroppedImage()}}},[t._v("Download cropped image")])])]),n("div")]):t._e()],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("Crop image online")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",[t._v("This online tool allows you to crop images.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b",[t._v("Original image details:")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("Crop options:")])])}],a=(n("4de4"),n("d3b7"),n("e114")),s=n("21a6"),r={name:"ImageCrop",components:{HeaderOnlineTools:a["a"]},data:function(){return{canvasWidth:100,canvasHeight:100,uploadedImage:{imageData:null,width:null,height:null},cropOptions:{x:0,y:0,width:1,height:1}}},methods:{onImageUpload:function(t){var e=t.target.files[0];window.file=e;var n=this,o=new FileReader;o.readAsDataURL(e),o.onload=function(){n.uploadedImage.imageData=o.result,n.$forceUpdate()},o.onerror=function(t){console.log("Error: ",t)}},onImageLoad:function(){var t=this,e=document.getElementById("original_image");this.uploadedImage.width=e.naturalWidth,this.uploadedImage.height=e.naturalHeight,this.cropOptions.width=e.naturalWidth,this.cropOptions.height=e.naturalHeight,this.canvasWidth=e.naturalWidth,this.canvasHeight=e.naturalHeight,this.$nextTick((function(){t.updateResultCanvas()}))},downloadCroppedImage:function(){var t=document.createElement("canvas");t.width=this.cropOptions.width,t.height=this.cropOptions.height;var e=t.getContext("2d");e.drawImage(document.getElementById("original_image"),-this.cropOptions.x,-this.cropOptions.y),t.toBlob((function(t){Object(s["saveAs"])(t,"Image.png")}))},updateResultCanvas:function(){this.cropOptions.width=parseInt(this.cropOptions.width),this.cropOptions.height=parseInt(this.cropOptions.height);var t=document.getElementById("original_image"),e=document.getElementById("resultCanvas"),n=e.getContext("2d");n.save(),n.clearRect(0,0,this.canvasWidth,this.canvasHeight),n.filter="brightness(50%)",n.drawImage(t,0,0),n.restore(),n.save(),n.drawImage(t,this.cropOptions.x,this.cropOptions.y,this.cropOptions.width,this.cropOptions.height,this.cropOptions.x,this.cropOptions.y,this.cropOptions.width,this.cropOptions.height),n.strokeStyle="#0000ff",n.beginPath(),n.rect(this.cropOptions.x-.5,this.cropOptions.y-.5,this.cropOptions.width+1,this.cropOptions.height+1),n.stroke(),n.restore()}}},c=r,l=(n("7a22"),n("2877")),p=Object(l["a"])(c,o,i,!1,null,null,null);e["default"]=p.exports},"4de4":function(t,e,n){"use strict";var o=n("23e7"),i=n("b727").filter,a=n("1dde"),s=a("filter");o({target:"Array",proto:!0,forced:!s},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,n){var o=n("861d"),i=n("e8b5"),a=n("b622"),s=a("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?o(n)&&(n=n[s],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"7a22":function(t,e,n){"use strict";n("1523")},"7b09":function(t,e,n){"use strict";n("d790")},b727:function(t,e,n){var o=n("0366"),i=n("44ad"),a=n("7b0b"),s=n("50c4"),r=n("65f0"),c=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,p=4==t,u=6==t,d=7==t,h=5==t||u;return function(v,f,m,g){for(var w,b,_=a(v),y=i(_),O=o(f,m,3),x=s(y.length),C=0,I=g||r,E=e?I(v,x):n||d?I(v,0):void 0;x>C;C++)if((h||C in y)&&(w=y[C],b=O(w,C,_),t))if(e)E[C]=b;else if(b)switch(t){case 3:return!0;case 5:return w;case 6:return C;case 2:c.call(E,w)}else switch(t){case 4:return!1;case 7:c.call(E,w)}return u?-1:l||p?p:E}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},d790:function(t,e,n){},e114:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header_online_tools"},[o("router-link",{attrs:{to:"/"}},[o("img",{staticClass:"small_logo",attrs:{alt:"DrawJS logo",src:n("b0ae")}})]),o("router-link",{staticClass:"menu_link",attrs:{to:"/online-tools"}},[t._v("All online tools")]),o("router-link",{staticClass:"menu_link",attrs:{to:"/online-tools/crop-image"}},[t._v("Crop image")]),o("router-link",{staticClass:"menu_link",attrs:{to:"/online-tools/trim-transparent-pixels"}},[t._v("Trim transparent pixels")])],1)},i=[],a={name:"HeaderOnlineTools",components:{},props:{},data:function(){return{}},mounted:function(){},methods:{}},s=a,r=(n("7b09"),n("2877")),c=Object(r["a"])(s,o,i,!1,null,"27cdd259",null);e["a"]=c.exports},e8b5:function(t,e,n){var o=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}}}]);