(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-426a4d0e"],{"159b":function(t,e,r){var n=r("da84"),a=r("fdbc"),i=r("17c2"),c=r("9112");for(var o in a){var s=n[o],u=s&&s.prototype;if(u&&u.forEach!==i)try{c(u,"forEach",i)}catch(l){u.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,a=r("a640"),i=a("forEach");t.exports=i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},2479:function(t,e,r){"use strict";r("d8da")},"2a80":function(t,e,r){"use strict";r("33db")},"33db":function(t,e,r){},"4de4":function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").filter,i=r("1dde"),c=i("filter");n({target:"Array",proto:!0,forced:!c},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"7ae0":function(t,e,r){},"999f":function(t,e,r){},"99af":function(t,e,r){"use strict";var n=r("23e7"),a=r("d039"),i=r("e8b5"),c=r("861d"),o=r("7b0b"),s=r("50c4"),u=r("8418"),l=r("65f0"),f=r("1dde"),d=r("b622"),b=r("2d00"),g=d("isConcatSpreadable"),h=9007199254740991,p="Maximum allowed index exceeded",y=b>=51||!a((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),m=f("concat"),v=function(t){if(!c(t))return!1;var e=t[g];return void 0!==e?!!e:i(t)},C=!y||!m;n({target:"Array",proto:!0,forced:C},{concat:function(t){var e,r,n,a,i,c=o(this),f=l(c,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?c:arguments[e],v(i)){if(a=s(i.length),d+a>h)throw TypeError(p);for(r=0;r<a;r++,d++)r in i&&u(f,d,i[r])}else{if(d>=h)throw TypeError(p);u(f,d++,i)}return f.length=d,f}})},"9bd0":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,n){return r("div",{key:e,staticClass:"tab-control-item",class:{active:n===t.currentIndex},on:{click:function(e){return t.itemClick(n)}}},[r("span",[t._v(t._s(e))])])})),0)},a=[],i={name:"TabControl",data:function(){return{currentIndex:0}},props:{titles:{type:Array,default:function(){return[]}}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}},c=i,o=(r("ed15"),r("2877")),s=Object(o["a"])(c,n,a,!1,null,"370f026e",null);e["a"]=s.exports},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b525:function(t,e,r){},b64b:function(t,e,r){var n=r("23e7"),a=r("7b0b"),i=r("df75"),c=r("d039"),o=c((function(){i(1)}));n({target:"Object",stat:!0,forced:o},{keys:function(t){return i(a(t))}})},ba31:function(t,e,r){"use strict";r("b525")},bb51:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"category"}},[r("nav-bar",{staticClass:"nav-bar"},[r("div",{attrs:{slot:"center"},slot:"center"},[t._v("商品分类")])]),r("div",{staticClass:"content"},[r("tab-menu",{attrs:{categories:t.categories},on:{selectItem:t.selectItem}}),r("scroll",{ref:"scroll",staticClass:"tab-content",attrs:{data:[t.categoryData]}},[r("div",[r("tab-content-category",{attrs:{subcategories:t.showSubcategory}}),r("tab-control",{attrs:{titles:["综合","新品","销量"]},on:{itemClick:t.tabClick}}),r("goods-list",{attrs:{goods:t.showCategoryDetail}})],1)])],1)],1)},a=[],i=r("5530"),c=r("a7ac"),o=r("5d17"),s=r("9bd0"),u=r("6d71"),l=r("1bab");function f(){return Object(l["a"])({url:"/category"})}function d(t){return Object(l["a"])({url:"/subcategory",params:{maitKey:t}})}function b(t,e){return Object(l["a"])({url:"/subcategory/detail",params:{miniWallkey:t,type:e}})}var g=r("eecb"),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("scroll",{attrs:{id:"tab-menu"}},[r("div",{staticClass:"menu-list"},t._l(t.categories,(function(e,n){return r("div",{key:n,staticClass:"menu-list-item",class:{active:n===t.currentIndex},on:{click:function(e){return t.itemClick(n)}}},[t._v(" "+t._s(e.title)+" ")])})),0)])},p=[],y={name:"TabMenu",components:{Scroll:o["a"]},props:{categories:Array},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("selectItem",t)}}},m=y,v=(r("c01c"),r("2877")),C=Object(v["a"])(m,h,p,!1,null,"52a1f484",null),O=C.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.subcategories.list?r("grid-view",{attrs:{cols:3,lineSpace:15,"v-margin":20}},t._l(t.subcategories.list,(function(e,n){return r("div",{key:n,staticClass:"item"},[r("a",{attrs:{href:e.link}},[r("img",{staticClass:"item-img",attrs:{src:e.image,alt:""}}),r("div",{staticClass:"item-text"},[t._v(t._s(e.title))])])])})),0):t._e()],1)},x=[],j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"gridView",staticClass:"grid-view"},[t._t("default")],2)},D=[],_=(r("a9e3"),r("99af"),{name:"GridView",props:{cols:{type:Number,default:2},hMargin:{type:Number,default:8},vMargin:{type:Number,default:8},itemSpace:{type:Number,default:8},lineSpace:{type:Number,default:8}},mounted:function(){setTimeout(this._autoLayout,20)},updated:function(){this._autoLayout()},methods:{_autoLayout:function(){var t=this.$refs.gridView,e=t.children;t.style.padding="".concat(this.vMargin,"px ").concat(this.hMargin,"px");for(var r=(t.clientWidth-2*this.hMargin-(this.cols-1)*this.itemSpace)/this.cols,n=0;n<e.length;n++){var a=e[n];a.style.width=r+"px",(n+1)%this.cols!==0&&(a.style.marginRight=this.itemSpace+"px"),n>=this.cols&&(a.style.marginTop=this.lineSpace+"px")}}}}),k=_,I=(r("2a80"),Object(v["a"])(k,j,D,!1,null,"18173978",null)),E=I.exports,S={name:"TabContentCategory",components:{GridView:E},props:{subcategories:{type:Object,default:function(){return[]}}}},P=S,T=(r("ba31"),Object(v["a"])(P,w,x,!1,null,"08ca94d5",null)),M=T.exports,$={name:"Category",components:{NavBar:c["a"],TabMenu:O,Scroll:o["a"],TabContentCategory:M,TabControl:s["a"],GoodsList:u["a"]},mixins:[g["c"]],data:function(){return{categories:[],categoryData:{},currentIndex:-1}},created:function(){this.getCategory()},methods:{getCategory:function(){var t=this;f().then((function(e){for(var r in t.categories=e.data.category.list,t.categories)t.categoryData[r]={subcategories:{},categoryDetail:{pop:[],new:[],sell:[]}}}))},getSubcategories:function(t){var e=this;this.currentIndex=t;var r=this.categories[t].maitKey;d(r).then((function(r){e.categoryData[t].subcategories=r.data,e.categoryData=Object(i["a"])({},e.categoryData),e.getCategoryDetail("pop"),e.getCategoryDetail("sell"),e.getCategoryDetail("new")}))},getCategoryDetail:function(t){var e=this,r=this.categories[this.currentIndex].miniWallkey;b(r,t).then((function(r){e.categoryData[e.currentIndex].categoryDetail[t]=r,e.categoryData=Object(i["a"])({},e.categoryData)}))},selectItem:function(t){this.getSubcategories(t)}},computed:{showSubcategory:function(){return-1===this.currentIndex?{}:this.categoryData[this.currentIndex].subcategories},showCategoryDetail:function(){return-1===this.currentIndex?[]:this.categoryData[this.currentIndex].categoryDetail[this.currentType]}}},N=$,A=(r("2479"),Object(v["a"])(N,n,a,!1,null,"57ac392f",null));e["default"]=A.exports},c01c:function(t,e,r){"use strict";r("7ae0")},d8da:function(t,e,r){},dbb4:function(t,e,r){var n=r("23e7"),a=r("83ab"),i=r("56ef"),c=r("fc6a"),o=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,r,n=c(t),a=o.f,u=i(n),l={},f=0;while(u.length>f)r=a(n,e=u[f++]),void 0!==r&&s(l,e,r);return l}})},e439:function(t,e,r){var n=r("23e7"),a=r("d039"),i=r("fc6a"),c=r("06cf").f,o=r("83ab"),s=a((function(){c(1)})),u=!o||s;n({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},ed15:function(t,e,r){"use strict";r("999f")}}]);
//# sourceMappingURL=chunk-426a4d0e.40f4a049.js.map