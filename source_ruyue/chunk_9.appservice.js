$gwx_XC_30=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_30 || [];
function gz$gwx_XC_30_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'wrapper flex flex-column'])
Z([3,'padding-lr-lg padding-bottom order-rule-scroll'])
Z([[6],[[7],[3,'wxOrderRuleRes']],[3,'orderNotice']])
Z([[2,'&&'],[[6],[[7],[3,'wxOrderRuleRes']],[3,'refundRuleList']],[[2,'>'],[[6],[[6],[[7],[3,'wxOrderRuleRes']],[3,'refundRuleList']],[3,'length']],[1,0]]])
Z([[2,'&&'],[[6],[[7],[3,'wxOrderRuleRes']],[3,'changeRuleList']],[[2,'>'],[[6],[[6],[[7],[3,'wxOrderRuleRes']],[3,'changeRuleList']],[3,'length']],[1,0]]])
Z([[6],[[7],[3,'wxOrderRuleRes']],[3,'changeRefundRuleList']])
Z([3,'bottom-confirm margin-lr-36'])
Z([[2,'||'],[[2,'=='],[[7],[3,'checkOption']],[1,1]],[[2,'=='],[[7],[3,'checkOption']],[1,2]]])
Z([3,'tapCheckOption'])
Z([3,'text-lg margin-bottom-xs'])
Z([[6],[[7],[3,'wxOrderRuleRes']],[3,'agreementTitle']])
Z([3,'hideRuleResModal'])
Z([a,[3,'yu-btn '],[[2,'?:'],[[2,'>'],[[7],[3,'ruleResCountdown']],[1,0]],[1,'bg-gray '],[1,'bg-']],[[7],[3,'primary']]])
Z([3,'item-hover'])
Z([[2,'>'],[[7],[3,'ruleResCountdown']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_30=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_30=true;
var x=['./components/orderRuleModal/orderRuleModal.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_30_1()
var x9Y=_n('view')
_rz(z,x9Y,'class',0,e,s,gg)
var o0Y=_mz(z,'scroll-view',['enableFlex',-1,'scrollWithAnimation',-1,'scrollY',-1,'class',1],[],e,s,gg)
var fAZ=_v()
_(o0Y,fAZ)
if(_oz(z,2,e,s,gg)){fAZ.wxVkey=1
}
var cBZ=_v()
_(o0Y,cBZ)
if(_oz(z,3,e,s,gg)){cBZ.wxVkey=1
}
var hCZ=_v()
_(o0Y,hCZ)
if(_oz(z,4,e,s,gg)){hCZ.wxVkey=1
}
var oDZ=_v()
_(o0Y,oDZ)
if(_oz(z,5,e,s,gg)){oDZ.wxVkey=1
}
fAZ.wxXCkey=1
cBZ.wxXCkey=1
hCZ.wxXCkey=1
oDZ.wxXCkey=1
_(x9Y,o0Y)
var cEZ=_n('view')
_rz(z,cEZ,'class',6,e,s,gg)
var oFZ=_v()
_(cEZ,oFZ)
if(_oz(z,7,e,s,gg)){oFZ.wxVkey=1
var lGZ=_mz(z,'view',['bind:tap',8,'class',1],[],e,s,gg)
var aHZ=_v()
_(lGZ,aHZ)
if(_oz(z,10,e,s,gg)){aHZ.wxVkey=1
}
aHZ.wxXCkey=1
_(oFZ,lGZ)
}
else{oFZ.wxVkey=2
}
var tIZ=_mz(z,'button',['bindtap',11,'class',1,'hoverClass',2],[],e,s,gg)
var eJZ=_v()
_(tIZ,eJZ)
if(_oz(z,14,e,s,gg)){eJZ.wxVkey=1
}
eJZ.wxXCkey=1
_(cEZ,tIZ)
oFZ.wxXCkey=1
_(x9Y,cEZ)
_(r,x9Y)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_30";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_30();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/orderRuleModal/orderRuleModal.wxml'] = [$gwx_XC_30, './components/orderRuleModal/orderRuleModal.wxml'];else __wxAppCode__['components/orderRuleModal/orderRuleModal.wxml'] = $gwx_XC_30( './components/orderRuleModal/orderRuleModal.wxml' );
	;__wxRoute = "components/orderRuleModal/orderRuleModal";__wxRouteBegin = true;__wxAppCurrentFile__="components/orderRuleModal/orderRuleModal.js";define("components/orderRuleModal/orderRuleModal.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../@babel/runtime/helpers/Arrayincludes");var e=getApp();Component({properties:{wxOrderRuleRes:{type:Object,default:{},observer:function(t){var o=null,a=t,l=this.data.checkOption,r=this.data.showRuleDescribe;a&&(l=0,e.util.isNull(a.buttonName)&&(a.buttonName="好的，我知道了"),a.popup&&(o="orderRuleModal",l=a.checkOption),this.data.isHKMO&&(r=!1),a.orderNotice&&(a.orderNotice=a.orderNotice.replace(/替换小程序名称/g,e.globalData.corp.corpName)),a.checkContent&&(a.checkContent=a.checkContent.replace(/替换小程序名称/g,e.globalData.corp.corpName)),a.agreementTitle&&(a.agreementTitle=a.agreementTitle.replace(/替换小程序名称/g,e.globalData.corp.corpName))),this.setData({wxOrderRuleRes:a,bottomModalName:o,checkOption:l,showRuleDescribe:r}),a&&a.popup&&this.data.firstRuleResCountdown&&(this.setData({firstRuleResCountdown:!1,ruleResCountdown:a.countdown||0}),this.orderRuleResCountDown())}},isHKMO:{type:Boolean,default:!1}},data:{primary:e.globalData.corpXcx.primary,bottomModalName:null,checkOption:0,ruleResCountdown:0,firstRuleResCountdown:!0,showRuleDescribe:!0,orderRuleTitle:"购票退改规则",orderNoticeTitle:"购票须知",refundRuleTitle:"退票规则",changeRuleTitle:"改签规则",changeRefundRuleTitle:"改签后退票规则"},methods:{tapCheckOption:function(){var e=this.data.checkOption;e=1==e?2:2==e?1:0,this.setData({checkOption:e})},toAgreementPage:function(e){wx.navigateTo({url:"/package/fillorderAgreement/pages/fillorderAgreement/fillorderAgreement?ruleId=".concat(e.currentTarget.dataset.wxorderruleid)})},hideRuleResModal:function(t){this.data.ruleResCountdown>0||(2!=this.data.checkOption?this.setData({bottomModalName:null}):e.util.showMsg("请勾选"+this.data.wxOrderRuleRes.checkContent))},orderRuleResCountDown:function(){var e=this,t=this.data.ruleResCountdown;t>0&&setTimeout((function(){e.setData({ruleResCountdown:t-1}),e.orderRuleResCountDown()}),1e3)},onShowFieldChange:function(){this.data.isHKMO||this.setData({showRuleDescribe:!this.data.showRuleDescribe})},show:function(){this.setData({bottomModalName:"orderRuleModal"})},hide:function(){this.setData({bottomModalName:null})}},lifetimes:{attached:function(){var t=this.data,o=t.orderRuleTitle,a=t.orderNoticeTitle,l=t.refundRuleTitle,r=t.changeRuleTitle,i=t.changeRefundRuleTitle;"qtwx"==e.globalData.corp.ID?(o="拼团包车规则",a="拼团须知",l="拼团退款规则",r="拼团改签规则",i="拼团改签后退票规则"):["xyjxztc","czxyjx","xyxybs","hdxyjx"].includes(e.globalData.corp.ID)?(o="拼团退改规则",a="拼团须知",l="退团规则",i="改签后退团规则"):["jxztc"].includes(e.globalData.corp.ID)&&["wxf117f28ee16c3208"].includes(e.globalData.corp.appid)&&(o="拼团出行退改规则",a="拼团出行须知",l="拼团出行退订规则",r="拼团出行改签规则",i="拼团出行改签后退订规则"),this.setData({orderRuleTitle:o,orderNoticeTitle:a,refundRuleTitle:l,changeRuleTitle:r,changeRefundRuleTitle:i})},ready:function(){}}});
},{isPage:false,isComponent:true,currentFile:'components/orderRuleModal/orderRuleModal.js'});require("components/orderRuleModal/orderRuleModal.js");