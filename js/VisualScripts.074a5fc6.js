(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["VisualScripts"],{"0418":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home"},[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{alt:"DrawJS logo",src:e("b0ae")}})])],1)},i=[],r={name:"Header",components:{},props:{},data:function(){return{}},mounted:function(){},methods:{}},n=r,c=(e("3b12"),e("2877")),u=Object(c["a"])(n,s,i,!1,null,"177777c6",null);a["a"]=u.exports},"2fbc":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("div",{staticClass:"div_breadcrumb"},[e("nav",{staticClass:"home",attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},t._l(t.items,(function(a){return e("li",{key:a.id,class:a.active?"breadcrumb-item active":"breadcrumb-item"},[a.active?t._e():e("a",{attrs:{href:a.url}},[t._v(t._s(a.name))]),a.active?e("span",[t._v(t._s(a.name))]):t._e()])})),0)])])])},i=[],r=(e("b0c0"),{name:"Breadcrumb",components:{},props:{pageId:String,sampleScript:Object},data:function(){return{pages:[{id:"home",name:"Home",url:"/",parentId:null},{id:"documentation",name:"Documentation",url:"/docs",parentId:"home"},{id:"javascript",name:"JavaScript",url:"/docs/javascript",parentId:"documentation"},{id:"all_scripts",name:"All scripts",url:"/docs/javascript/all-scripts",parentId:"javascript"},{id:"visual_scripts",name:"Visual scripts",url:"/docs/visual-scripts",parentId:"documentation"},{id:"video_tutorials",name:"Video tutorials",url:"/docs/video-tutorials",parentId:"documentation"}]}},mounted:function(){},computed:{items:function(){return this.buildItems()}},methods:{getPageById:function(t){if("script"==t)return{id:"script",name:this.sampleScript.name,url:"/docs/javascript/"+this.sampleScript.slug,parentId:"javascript"};for(var a=0;a<this.pages.length;a++){var e=this.pages[a];if(e.id==t)return e}return null},buildItems:function(){var t=[],a=this.getPageById(this.pageId);a.active=!0,t.push(a);var e=a.parentId,s=0;while(null!=e||s>=10){var i=this.getPageById(e);t.unshift(i),e=i.parentId,s++}return t}}}),n=r,c=(e("e69f"),e("2877")),u=Object(c["a"])(n,s,i,!1,null,"070d8d78",null);a["a"]=u.exports},"3b12":function(t,a,e){"use strict";e("bb22")},"7ca9":function(t,a,e){t.exports=e.p+"img/blocks.7445eed2.png"},"93d0":function(t,a,e){t.exports=e.p+"img/visual-script-01.2a175d2a.png"},9491:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Header"),e("Breadcrumb",{attrs:{pageId:"visual_scripts"}}),t._m(0)],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home"},[s("h1",[t._v("Visual scripts")]),s("br"),s("p",[s("b",[t._v("Visual scripts")]),t._v(" are a super easy and fast way of creating and editing images using visual programming.")]),s("p",[t._v("Basically, you add a sequence of blocks. Each block is a step that will be executed.")]),s("img",{attrs:{alt:"Visual script",src:e("93d0")}}),s("br"),s("br"),s("p",[t._v("The blocks can be added from a list of ready-to-use steps.")]),s("img",{attrs:{alt:"Visual script",src:e("7ca9")}}),s("br"),s("br"),s("p",[t._v("Most blocks allow you to customize it with parameters.")]),s("img",{attrs:{alt:"Visual script",src:e("f7bf")}}),s("br"),s("br"),s("p",[t._v("When you chain a sequence of steps, you can achieve nice results in few minutes or even seconds.")]),s("img",{staticStyle:{"max-width":"600px"},attrs:{alt:"Visual script",src:e("e269")}}),s("br"),s("br")])}],r=e("0418"),n=e("2fbc"),c={name:"VisualScripts",components:{Header:r["a"],Breadcrumb:n["a"]},data:function(){return{}}},u=c,o=(e("e880"),e("2877")),l=Object(o["a"])(u,s,i,!1,null,null,null);a["default"]=l.exports},a3e4:function(t,a,e){},ba51:function(t,a,e){},bb22:function(t,a,e){},e269:function(t,a,e){t.exports=e.p+"img/visual-script-02.7cee205b.png"},e69f:function(t,a,e){"use strict";e("a3e4")},e880:function(t,a,e){"use strict";e("ba51")},f7bf:function(t,a,e){t.exports=e.p+"img/block-params.6b4438a1.png"}}]);