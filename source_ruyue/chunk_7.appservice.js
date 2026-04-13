$gwx_XC_28=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_28 || [];
function gz$gwx_XC_28_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_28_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_28_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_28_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'indexHistoryList']],[3,'length']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_28_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_28_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_28=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_28=true;
var x=['./components/indexSearchHistory/indexSearchHistory.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_28_1()
var t5Y=_v()
_(r,t5Y)
if(_oz(z,0,e,s,gg)){t5Y.wxVkey=1
}
t5Y.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_28";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_28();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/indexSearchHistory/indexSearchHistory.wxml'] = [$gwx_XC_28, './components/indexSearchHistory/indexSearchHistory.wxml'];else __wxAppCode__['components/indexSearchHistory/indexSearchHistory.wxml'] = $gwx_XC_28( './components/indexSearchHistory/indexSearchHistory.wxml' );
	;__wxRoute = "components/indexSearchHistory/indexSearchHistory";__wxRouteBegin = true;__wxAppCurrentFile__="components/indexSearchHistory/indexSearchHistory.js";define("components/indexSearchHistory/indexSearchHistory.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp();Component({properties:{isNeedUpdateIndexHistory:{type:Boolean,value:!0},indexHistorySaveMaxLen:{type:[Number,String],value:6},indexHistoryShowMaxLen:{type:[Number,String],value:5},histroyContainerClass:{type:null,value:""},historyKey:{type:null,value:""}},data:{ifFirst:!0,indexHistoryList:[],historyType:"_index_history_list",queryIntervalType:t.globalData.corpXcx.queryIntervalType||0},methods:{saveQueryCityHistory:function(i){if(i){var e=wx.getStorageSync(t.globalData.corp.appid+this.data.historyType+this.data.historyKey)||[];if(1==this.data.queryIntervalType){var a=i.beginAdDivisionCode||i.beginDivisionCityCode,s=i.endAdDivisionCode||i.endDivisionCityCode;if(t.util.isNull(a)||t.util.isNull(s))return;if(e.length)for(var o=0;o<e.length;o++)if((e[o].beginAdDivisionCode==a||e[o].beginDivisionCityCode==a)&&e[o].endAdDivisionCode==s||e[o].endDivisionCityCode==s){e.splice(o,1),console.log("i",o);break}}else if(2==this.data.queryIntervalType){var r=i.startAreaId||i.beginDivisionCityCode,n=i.endAreaId||i.endDivisionCityCode;if(t.util.isNull(r)||t.util.isNull(n))return;if(e.length)for(var d=0;d<e.length;d++)if((e[d].startAreaId==r||e[d].beginDivisionCityCode==r)&&e[d].endAreaId==n||e[d].endDivisionCityCode==n){e.splice(d,1),console.log("i",d);break}}else{if(t.util.isNull(i.beginCityCode)||t.util.isNull(i.endCityCode))return;if(e.length)for(var l=0;l<e.length;l++)if(e[l].beginCityCode==i.beginCityCode&&e[l].endCityCode==i.endCityCode){e.splice(l,1),console.log("i",l);break}}this.setData({isNeedUpdateIndexHistory:!0}),e.unshift(i),e.length>this.data.indexHistorySaveMaxLen&&(e=e.slice(0,this.data.indexHistorySaveMaxLen)),wx.setStorageSync(t.globalData.corp.appid+this.data.historyType+this.data.historyKey,e)}},selectHistoryItem:function(i){t.globalData.corpXcx.toOtherAppid?t.util.goOtherMiniApp(t.globalData.corpXcx.toOtherAppid):(i.currentTarget.dataset.item.corpid=t.globalData.corp.ID,i.currentTarget.dataset.item.tripDate=wx.getStorageSync("tripDate")||t.util.formatShortTime(new Date),this.triggerEvent("clickHistoryBtn",i.currentTarget.dataset.item))},removeIndexHistory:function(){this.setData({indexHistoryList:[]}),wx.removeStorageSync(t.globalData.corp.appid+this.data.historyType+this.data.historyKey)}},pageLifetimes:{show:function(){if(!this.data.ifFirst&&this.data.isNeedUpdateIndexHistory){var i=wx.getStorageSync(t.globalData.corp.appid+this.data.historyType+this.data.historyKey)||[];t.util.isNotNull(i)&&i.length>this.data.indexHistoryShowMaxLen&&(i=i.slice(0,this.data.indexHistoryShowMaxLen)),this.setData({indexHistoryList:i,isNeedUpdateIndexHistory:!1})}}},lifetimes:{attached:function(){var i="_index_history_list";if(1==this.data.queryIntervalType?i="_index_ad_history_list":2==this.data.queryIntervalType&&(i="_index_area_history_list"),this.setData({historyType:i}),this.data.isNeedUpdateIndexHistory){var e=wx.getStorageSync(t.globalData.corp.appid+i+this.data.historyKey)||[];t.util.isNotNull(e)&&e.length>this.data.indexHistoryShowMaxLen&&(e=e.slice(0,this.data.indexHistoryShowMaxLen)),this.setData({indexHistoryList:e,isNeedUpdateIndexHistory:!1,ifFirst:!1})}}}});
},{isPage:false,isComponent:true,currentFile:'components/indexSearchHistory/indexSearchHistory.js'});require("components/indexSearchHistory/indexSearchHistory.js");