$gwx_XC_27=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_27 || [];
function gz$gwx_XC_27_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_27_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'btnAction']],[1,'onlineWeChatCustomer']])
Z([3,'handleTouchStart'])
Z([3,'handleBtnAction'])
Z([3,'handleTouchEnd'])
Z([3,'handleTouchMove'])
Z([3,'index-float-btn flex align-center'])
Z([3,'float-btn'])
Z([3,'contact'])
Z([a,[3,'background:linear-gradient(90deg, var(--holder'],[[7],[3,'btnColor']],[3,'Light) -100%, var(--holder'],[[7],[3,'btnColor']],[3,') 100%);'],[[7],[3,'btnStyle']]])
Z([[7],[3,'btnIconUrl']])
Z([[2,'=='],[[7],[3,'btnAction']],[1,'onlineSobotCustomer']])
Z(z[1])
Z(z[2])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[7])
Z([a,[3,'sobot|'],[[6],[[7],[3,'userInfo']],[3,'nickName']],[3,'|'],[[6],[[7],[3,'userInfo']],[3,'avatarUrl']]])
Z([a,z[8][1],z[8][2],z[8][3],z[8][2],z[8][5],z[8][6]])
Z(z[9])
Z([[7],[3,'btnAction']])
Z(z[1])
Z(z[2])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z([a,z[8][1],z[8][2],z[8][3],z[8][2],z[8][5],z[8][6]])
Z(z[9])
Z([[8],'isLoading',[[7],[3,'loadingCustomerwxQrcodeImage']]])
Z([3,'loading_mask'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_27_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_27=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_27=true;
var x=['./components/indexFloatBtn/indexFloatBtn.wxml','../../pages/template/interval.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_27_1()
var eRY=e_[x[0]].i
_ai(eRY,x[1],e_,x[0],1,1)
var bSY=_v()
_(r,bSY)
if(_oz(z,0,e,s,gg)){bSY.wxVkey=1
var oTY=_mz(z,'button',['bind:touchstart',1,'bindtap',1,'catch:touchend',2,'catch:touchmove',3,'class',4,'id',5,'openType',6,'style',7],[],e,s,gg)
var xUY=_v()
_(oTY,xUY)
if(_oz(z,9,e,s,gg)){xUY.wxVkey=1
}
xUY.wxXCkey=1
_(bSY,oTY)
}
else if(_oz(z,10,e,s,gg)){bSY.wxVkey=2
var oVY=_mz(z,'button',['bind:touchstart',11,'bindtap',1,'catch:touchend',2,'catch:touchmove',3,'class',4,'id',5,'openType',6,'sessionFrom',7,'style',8],[],e,s,gg)
var fWY=_v()
_(oVY,fWY)
if(_oz(z,20,e,s,gg)){fWY.wxVkey=1
}
fWY.wxXCkey=1
_(bSY,oVY)
}
else if(_oz(z,21,e,s,gg)){bSY.wxVkey=3
var cXY=_mz(z,'view',['bind:touchstart',22,'bindtap',1,'catch:touchend',2,'catch:touchmove',3,'class',4,'id',5,'style',6],[],e,s,gg)
var hYY=_v()
_(cXY,hYY)
if(_oz(z,29,e,s,gg)){hYY.wxVkey=1
}
hYY.wxXCkey=1
_(bSY,cXY)
}
var oZY=_v()
_(r,oZY)
var c1Y=_oz(z,31,e,s,gg)
var o2Y=_gd(x[0],c1Y,e_,d_)
if(o2Y){
var l3Y=_1z(z,30,e,s,gg) || {}
var cur_globalf=gg.f
oZY.wxXCkey=3
o2Y(l3Y,l3Y,oZY,gg)
gg.f=cur_globalf
}
else _w(c1Y,x[0],1,2082)
bSY.wxXCkey=1
eRY.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_27";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_27();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/indexFloatBtn/indexFloatBtn.wxml'] = [$gwx_XC_27, './components/indexFloatBtn/indexFloatBtn.wxml'];else __wxAppCode__['components/indexFloatBtn/indexFloatBtn.wxml'] = $gwx_XC_27( './components/indexFloatBtn/indexFloatBtn.wxml' );
	;__wxRoute = "components/indexFloatBtn/indexFloatBtn";__wxRouteBegin = true;__wxAppCurrentFile__="components/indexFloatBtn/indexFloatBtn.js";define("components/indexFloatBtn/indexFloatBtn.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/objectSpread2"),e=getApp(),o=e.globalData.systemInfo,n=o.CustomBar,i=o.windowWidth,a=o.windowHeight,r=(o.safeArea,!1),l=0,s=0,c=880,g=-25,h=new RegExp("^([a-zA-Z]+:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i"),m=t({},e.globalData.corpXcx.wxHomeBtnPage);Component({properties:{floatBtnName:{type:String,value:"客服"},floatBtnIconClass:{type:String,value:"icon-staff"},pageName:{type:String,value:""},isFullPage:{type:Boolean,value:!0}},data:{primary:e.globalData.corpXcx.primary,btnColor:"",modalName:null,loadingCustomerwxQrcodeImage:!0,customerwxQrcodeImageHeight:125,btnAction:"",btnStyle:"visibility: hidden;"},wxHomeBtnConfig:null,btnDOMInfo:null,startSite:null,methods:{handleBtnAction:function(){var t=this.data.btnAction;if("showModal"==t){if(!this.wxHomeBtnConfig.modalName)return;this.setData({modalName:this.wxHomeBtnConfig.modalName})}else if("navigateTo"==t){if(!this.wxHomeBtnConfig.pagePath)return;wx.navigateTo({url:this.wxHomeBtnConfig.pagePath,success:function(t){console.log("res",t)},fail:function(t){console.log("err",t)}})}else if("goOtherMiniApp"==t){if(!this.wxHomeBtnConfig.otherAppid||!this.wxHomeBtnConfig.pagePath)return;e.util.goOtherMiniApp(this.wxHomeBtnConfig.otherAppid,this.wxHomeBtnConfig.pagePath)}else if("makePhoneCall"==t){if(!this.wxHomeBtnConfig.tel)return;e.util.makePhoneCallArray(this.wxHomeBtnConfig.tel,this.wxHomeBtnConfig.btnName)}else if("weWorkOnLineCustomer"==t){if(!this.wxHomeBtnConfig.weworkServiceChatUrl||!this.wxHomeBtnConfig.weworkCorpid)return;this.onlineCustomer(this.wxHomeBtnConfig.weworkServiceChatUrl,this.wxHomeBtnConfig.weworkCorpid)}else"onlineWeChatCustomer"==t?console.log("打开微信小程序在线客服"):"onlineSobotCustomer"==t&&console.log("打开第三方客服智齿")},showCustomerWxQrcodeModal:function(){this.setData({modalName:"customerWxQrcodeModal"})},customerwxQrcodeImageLoad:function(t){console.log("customerwxQrcodeImageLoad");var e=t.detail.width/t.detail.height,o=Math.round(620/e);this.setData({customerwxQrcodeImageHeight:o,loadingCustomerwxQrcodeImage:!1})},viewIntervalImage:function(t){var e=[this.data.modalPicUrl];wx.previewImage({urls:e})},hideModal:function(){this.setData({modalName:null})},onlineCustomer:function(t,e){wx.openCustomerServiceChat({extInfo:{url:t},corpId:e,success:function(t){console.log("onlineCustomer res",t)},fail:function(t){console.log("onlineCustomer fail",t)}})},getBtnDOM:function(t){var e=this,o=e.createSelectorQuery();o.select("#float-btn").boundingClientRect((function(o){e.btnDOMInfo=o,t&&t()})),o.exec()},px2rpx:function(t){return Math.floor(750/i*Number(t))},rpx2px:function(t){return Math.floor(i/750*Number(t))},handleTouchStart:function(t){this.startSite=t.changedTouches[0],r=!0,l=this.rpx2px(c),s=this.rpx2px(g)},handleTouchEnd:function(){r=!1;var t=i/2,o=s+this.btnDOMInfo.width/2;g=t>=o?-25:this.px2rpx(i-this.btnDOMInfo.width+15),a-80<l+this.btnDOMInfo.height?l=a-80:l<n&&(l=n),c=this.px2rpx(l),wx.setStorageSync(e.globalData.corp.appid+"_float_btn_site",{topRPX:c,rightRPX:g,isFullPageLast:this.data.isFullPage}),this.setData({btnStyle:"top: ".concat(c,"rpx; right: ").concat(g,"rpx; transition: right 0.35s, top 0.35s;")})},handleTouchMove:function(t){if(r){var e=t.changedTouches[0],o=this.startSite.clientX-e.clientX,n=e.clientY-this.startSite.clientY;this.startSite=e,l+=n,s+=o,c=this.px2rpx(l),g=this.px2rpx(s),this.setData({btnStyle:"top: ".concat(c,"rpx; right: ").concat(g,"rpx;")})}},validateURL:function(t){return t&&"string"==typeof t?h.test(t)?t:e.config.staticHost+("/"==t[0]?"":"/")+t:""},getStorageSite:function(){var t=wx.getStorageSync(e.globalData.corp.appid+"_float_btn_site");if(t){var o=t.topRPX,a=t.rightRPX,r=t.isFullPageLast;if(c=o,this.data.isFullPage!=r){var l=this.px2rpx(n);r?c-=l:c+=l}g=-25==a?-25:this.px2rpx(i-this.btnDOMInfo.width+15),this.setData({btnStyle:"top: ".concat(c,"rpx; right: ").concat(g,"rpx;")})}else this.setData({btnStyle:"top: ".concat(c,"rpx; right: ").concat(g,"rpx;")})}},pageLifetimes:{show:function(){this.btnDOMInfo&&this.getStorageSite()}},lifetimes:{attached:function(){},ready:function(){var t=this;if(t.wxHomeBtnConfig=m[t.data.pageName]||{},Object.keys(t.wxHomeBtnConfig).length){"showModal"===t.wxHomeBtnConfig.btnAction&&(t.wxHomeBtnConfig.modalPicUrl=t.validateURL(t.wxHomeBtnConfig.modalPicUrl)),t.wxHomeBtnConfig.btnIconUrl=t.validateURL(t.wxHomeBtnConfig.btnIconUrl);var o=t.wxHomeBtnConfig.btnColor||e.globalData.corpXcx.primary;"SpringFestival"==e.globalData.skinClassName&&"home"==t.data.pageName&&(o="red"),t.setData({btnColor:o,btnAction:t.wxHomeBtnConfig.btnAction,btnName:t.wxHomeBtnConfig.btnName,modalPicUrl:t.wxHomeBtnConfig.modalPicUrl,btnIconUrl:t.wxHomeBtnConfig.btnIconUrl}),t.getBtnDOM((function(){t.getStorageSite()})),console.log("windowHeight",a)}}}});
},{isPage:false,isComponent:true,currentFile:'components/indexFloatBtn/indexFloatBtn.js'});require("components/indexFloatBtn/indexFloatBtn.js");