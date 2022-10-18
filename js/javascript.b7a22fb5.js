(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["javascript"],{"0418":function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"home"},[r("router-link",{attrs:{to:"/"}},[r("img",{attrs:{alt:"DrawJS logo",src:e("b0ae")}})])],1)},i=[],n={name:"Header",components:{},props:{},data:function(){return{}},mounted:function(){},methods:{}},s=n,c=(e("3b12"),e("2877")),o=Object(c["a"])(s,r,i,!1,null,"177777c6",null);a["a"]=o.exports},2730:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Header"),e("Breadcrumb",{attrs:{pageId:"javascript"}}),e("div",{staticClass:"home"},[e("h1",[t._v("JavaScript")]),e("p",[t._v("All DrawJS drawing and image editing is done with JavaScript.")]),e("p",[t._v("JavaScript is the world's most popular programming language.")]),e("p",[t._v("It can be used to draw and edit images and photos on HTML canvas.")]),e("p",[t._v("DrawJS uses JavaScript so you don't need to learn a new scripting language to automate your photo editing and image creation.")]),e("p",[t._v("JavaScript is easy to learn and DrawJS sample scripts will help you create basic and advanced graphics, filters and effects.")]),e("br"),e("br"),e("div",[e("router-link",{attrs:{to:"/docs/javascript/all-scripts"}},[t._v("All scripts")])],1),e("br"),e("br"),t._l(t.sampleScripts,(function(a){return e("div",{key:a.name},[e("div",[e("router-link",{attrs:{to:"/docs/javascript/"+a.slug}},[t._v(t._s(a.name))])],1)])}))],2)],1)},i=[],n=e("ffc9"),s=e("0418"),c=e("2fbc"),o={name:"JavaScript",components:{Header:s["a"],Breadcrumb:c["a"]},methods:{},data:function(){return{sampleScripts:[]}},mounted:function(){this.sampleScripts=Object(n["b"])()}},l=o,u=(e("2df4"),e("2877")),d=Object(u["a"])(l,r,i,!1,null,null,null);a["default"]=d.exports},"2df4":function(t,a,e){"use strict";e("d872")},"2fbc":function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("div",{staticClass:"div_breadcrumb"},[e("nav",{staticClass:"home",attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},t._l(t.items,(function(a){return e("li",{key:a.id,class:a.active?"breadcrumb-item active":"breadcrumb-item"},[a.active?t._e():e("a",{attrs:{href:a.url}},[t._v(t._s(a.name))]),a.active?e("span",[t._v(t._s(a.name))]):t._e()])})),0)])])])},i=[],n=(e("b0c0"),{name:"Breadcrumb",components:{},props:{pageId:String,sampleScript:Object},data:function(){return{pages:[{id:"home",name:"Home",url:"/",parentId:null},{id:"online_tools",name:"Online tools",url:"/online-tools",parentId:"home"},{id:"online_tools_image_crop",name:"Image crop",url:"/online-tools/image-crop",parentId:"online_tools"},{id:"documentation",name:"Documentation",url:"/docs",parentId:"home"},{id:"javascript",name:"JavaScript",url:"/docs/javascript",parentId:"documentation"},{id:"all_scripts",name:"All scripts",url:"/docs/javascript/all-scripts",parentId:"javascript"},{id:"visual_scripts",name:"Visual scripts",url:"/docs/visual-scripts",parentId:"documentation"},{id:"video_tutorials",name:"Video tutorials",url:"/docs/video-tutorials",parentId:"documentation"}]}},mounted:function(){},computed:{items:function(){return this.buildItems()}},methods:{getPageById:function(t){if("script"==t)return{id:"script",name:this.sampleScript.name,url:"/docs/javascript/"+this.sampleScript.slug,parentId:"javascript"};for(var a=0;a<this.pages.length;a++){var e=this.pages[a];if(e.id==t)return e}return null},buildItems:function(){var t=[],a=this.getPageById(this.pageId);a.active=!0,t.push(a);var e=a.parentId,r=0;while(null!=e||r>=10){var i=this.getPageById(e);t.unshift(i),e=i.parentId,r++}return t}}}),s=n,c=(e("d3e2"),e("2877")),o=Object(c["a"])(s,r,i,!1,null,"6db02a25",null);a["a"]=o.exports},"3b12":function(t,a,e){"use strict";e("bb22")},8102:function(t,a,e){},bb22:function(t,a,e){},d3e2:function(t,a,e){"use strict";e("8102")},d872:function(t,a,e){}}]);