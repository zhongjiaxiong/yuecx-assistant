$gwx_XC_0=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_0 || [];
function gz$gwx_XC_0_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_0=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_0=true;
var x=['./components/common/tabBar.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_0_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_0";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_0();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/common/tabBar.wxml'] = [$gwx_XC_0, './components/common/tabBar.wxml'];else __wxAppCode__['components/common/tabBar.wxml'] = $gwx_XC_0( './components/common/tabBar.wxml' );
	;__wxRoute = "components/common/tabBar";__wxRouteBegin = true;__wxAppCurrentFile__="components/common/tabBar.js";define("components/common/tabBar.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global.webpackJsonp=global.webpackJsonp||[]).push([["components/common/tabBar"],{1028:function(n,t,e){"use strict";e.r(t);var r=e(1029),o=e(1031);for(var c in o)["default"].indexOf(c)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(c);e(1033);var u=e(38),a=Object(u.default)(o.default,r.render,r.staticRenderFns,!1,null,null,null,!1,r.components,void 0);a.options.__file="components/common/tabBar.vue",t.default=a.exports},1029:function(n,t,e){"use strict";e.r(t);var r=e(1030);e.d(t,"render",(function(){return r.render})),e.d(t,"staticRenderFns",(function(){return r.staticRenderFns})),e.d(t,"recyclableRender",(function(){return r.recyclableRender})),e.d(t,"components",(function(){return r.components}))},1030:function(n,t,e){"use strict";e.r(t),e.d(t,"render",(function(){return r})),e.d(t,"staticRenderFns",(function(){return c})),e.d(t,"recyclableRender",(function(){return o})),e.d(t,"components",(function(){}));var r=function(){this.$createElement;this._self._c},o=!1,c=[];r._withStripped=!0},1031:function(n,t,e){"use strict";e.r(t);var r=e(1032),o=e.n(r);for(var c in r)["default"].indexOf(c)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(c);t.default=o.a},1032:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={props:{tabList:{type:Array,required:!0,default:[]},selected:{type:Number,default:1},userIdentity:{type:Number,default:1},textColor:{type:String,default:"#165DFF"}},data:function(){return{color:"rgba(0, 0, 0, 0.90)",selectedColor:this.textColor}},computed:{list:function(){return this.tabList}},methods:{switchTab:function(n){this.$emit("changeTab",n)}}};t.default=r},1033:function(n,t,e){"use strict";e.r(t);var r=e(1034),o=e.n(r);for(var c in r)["default"].indexOf(c)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(c);t.default=o.a},1034:function(n,t,e){}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/common/tabBar-create-component",{"components/common/tabBar-create-component":function(n,t,e){e("2").createComponent(e(1028))}},[["components/common/tabBar-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'components/common/tabBar.js'});require("components/common/tabBar.js");