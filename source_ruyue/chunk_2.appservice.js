$gwx_XC_12=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_12 || [];
function gz$gwx_XC_12_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'cu-bar fixed text-white '],[[7],[3,'bgColor']]])
Z([3,'cuNav'])
Z([a,[3,'height:'],[[7],[3,'CustomBar']],[3,'px;padding-top:'],[[7],[3,'StatusBar']],[3,'px;'],[[2,'?:'],[[7],[3,'bgImage']],[[2,'+'],[[2,'+'],[1,'background-image:url('],[[7],[3,'bgImage']]],[1,')']],[1,'']]])
Z([[2,'!'],[[7],[3,'isCustomBack']]])
Z([[7],[3,'isBack']])
Z([3,'BackPage'])
Z([3,'action'])
Z([3,'backText'])
Z([[7],[3,'isHome']])
Z([[7],[3,'isHomeAndBack']])
Z([3,'content'])
Z([3,'right'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_12=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_12=true;
var x=['./components/cuNav/cuNav.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_12_1()
var oZG=_mz(z,'view',['class',0,'id',1,'style',1],[],e,s,gg)
var f1G=_v()
_(oZG,f1G)
if(_oz(z,3,e,s,gg)){f1G.wxVkey=1
var c2G=_v()
_(f1G,c2G)
if(_oz(z,4,e,s,gg)){c2G.wxVkey=1
var h3G=_mz(z,'view',['bindtap',5,'class',1],[],e,s,gg)
var o4G=_n('slot')
_rz(z,o4G,'name',7,e,s,gg)
_(h3G,o4G)
_(c2G,h3G)
}
else if(_oz(z,8,e,s,gg)){c2G.wxVkey=2
}
else if(_oz(z,9,e,s,gg)){c2G.wxVkey=3
}
c2G.wxXCkey=1
}
else{f1G.wxVkey=2
}
var c5G=_n('slot')
_rz(z,c5G,'name',10,e,s,gg)
_(oZG,c5G)
var o6G=_n('slot')
_rz(z,o6G,'name',11,e,s,gg)
_(oZG,o6G)
f1G.wxXCkey=1
_(r,oZG)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_12";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_12();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/cuNav/cuNav.wxml'] = [$gwx_XC_12, './components/cuNav/cuNav.wxml'];else __wxAppCode__['components/cuNav/cuNav.wxml'] = $gwx_XC_12( './components/cuNav/cuNav.wxml' );
	;__wxRoute = "components/cuNav/cuNav";__wxRouteBegin = true;__wxAppCurrentFile__="components/cuNav/cuNav.js";define("components/cuNav/cuNav.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp();Component({options:{addGlobalClass:!0,multipleSlots:!0},properties:{iconStyle:{type:String,default:""},bgColor:{type:String,default:"bg-white"},isBack:{type:[Boolean,String],default:!1},isHome:{type:[Boolean,String],default:!1},isHomeAndBack:{type:[Boolean,String],default:!1},hideBackGround:{value:!1},isCustomBack:{value:!1}},data:{CustomBar:t.globalData.systemInfo.CustomBar,Custom:t.globalData.systemInfo.Custom,StatusBar:t.globalData.systemInfo.statusBarHeight},methods:{BackPage:function(){wx.navigateBack({delta:1})},toHome:function(){t.gotoIndex()},customBack:function(){this.triggerEvent("onCustomBack",{})}},lifetimes:{ready:function(){try{1==getCurrentPages().length&&this.data.isBack&&this.setData({isBack:!1,isHome:!0})}catch(t){console.log("cuNav getCurrentPages err",t)}}}});
},{isPage:false,isComponent:true,currentFile:'components/cuNav/cuNav.js'});require("components/cuNav/cuNav.js");