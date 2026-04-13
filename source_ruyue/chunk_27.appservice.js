$gwx_XC_20=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_20 || [];
function gz$gwx_XC_20_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_20_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'true'])
Z([3,'button-box'])
Z([[2,'&&'],[[7],[3,'isDoGX']],[[6],[[7],[3,'userInfo']],[3,'serverHaveAvatar']]])
Z([[7],[3,'isShowIndexBtn']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_20_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_20=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_20=true;
var x=['./pages/partner/partner_from/partner_from.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_20_1()
var xYN=_mz(z,'cu-nav',['hideBackGround',0,'isBack',1],[],e,s,gg)
_(r,xYN)
var oZN=_n('view')
_rz(z,oZN,'class',2,e,s,gg)
var f1N=_v()
_(oZN,f1N)
if(_oz(z,3,e,s,gg)){f1N.wxVkey=1
}
else{f1N.wxVkey=2
var c2N=_v()
_(f1N,c2N)
if(_oz(z,4,e,s,gg)){c2N.wxVkey=1
}
c2N.wxXCkey=1
}
f1N.wxXCkey=1
_(r,oZN)
var h3N=_n('privacy-popup')
_(r,h3N)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_20";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_20();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/partner/partner_from/partner_from.wxml'] = [$gwx_XC_20, './pages/partner/partner_from/partner_from.wxml'];else __wxAppCode__['pages/partner/partner_from/partner_from.wxml'] = $gwx_XC_20( './pages/partner/partner_from/partner_from.wxml' );
	;__wxRoute = "pages/partner/partner_from/partner_from";__wxRouteBegin = true;__wxAppCurrentFile__="pages/partner/partner_from/partner_from.js";define("pages/partner/partner_from/partner_from.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/regeneratorRuntime"),a=require("../../../@babel/runtime/helpers/asyncToGenerator"),n=require("../../../@babel/runtime/helpers/objectSpread2"),t=getApp(),o=require("../../../3BE296B59105A88C5D84FEB2CFF3FB65.js"),r=o.getUserInfoStorage,s=o.getUserProfilePro,i=o.updateWxUserUserHeadimg,c=require("../../../C6AC61C49105A88CA0CA09C31864FB65.js").isSupportFun,u=require("../../../C6AC61C49105A88CA0CA09C31864FB65.js");Page({data:{pageTitle:"授权登录",primary:t.globalData.corpXcx.primary,userInfo:n({},t.config.defaultUserInfo),isOpenIdLoading:!0,isDoGX:!1,corp:{},canInputNicknameAvatar:!1,scene:"",isShowIndexBtn:!1},getUserProfileFun:function(){var n=this;return a(e().mark((function a(){var o,r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n,e.next=3,s();case 3:(r=e.sent).serverHaveAvatar||t.util.showMsg("需要授权才能继续噢"),o.setData({userInfo:r,isShowIndexBtn:!0}),o.handleGoIndex();case 7:case"end":return e.stop()}}),a)})))()},onChooseAvatar:function(n){var o=this;return a(e().mark((function a(){var r,s;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o,e.next=3,i(n.detail.avatarUrl);case 3:s=e.sent,r.setData({userInfo:s,isShowIndexBtn:!0}),r.data.userInfo.avatarUrl||t.util.showMsg("需要授权才能继续噢"),r.handleGoIndex(),u.info("接受分销员推广码 onChooseAvatar",s);case 8:case"end":return e.stop()}}),a)})))()},doGXFun:function(n,o){var r=this;return a(e().mark((function a(){var s,i,c,d,l,p;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=r,i=decodeURIComponent(s.data.scene),console.log("scene",i),c={action:"wx_user_gx.save",gx_id:i,openid:n},d={},l=0,e.next=8,t.network.requestPOST(c).then((function(e){e.success?l=1:e.success&&(l=2,u.error("接受分销员推广码 wx_user_gx.save success=fail",e.message,e)),e.resultCode=l,d=e})).catch((function(e){e.resultCode=3,t.util.showMsg(e.message),d=e,u.error("接受分销员推广码 wx_user_gx.save catch",e.message,e)}));case 8:return console.log("proResult",d),p=1==d.resultCode,s.setData({isDoGX:p,isOpenIdLoading:!1}),o&&s.handleGoIndex(),e.abrupt("return",d.resultCode);case 13:case"end":return e.stop()}}),a)})))()},handleGoIndex:function(){this.data.isDoGX&&this.data.userInfo.serverHaveAvatar?"zqbs"==t.globalData.corp.ID&&"wx4b1859c3dc4abf4a"==t.globalData.corp.appid?this.goWebView("https://mp.weixin.qq.com/s?__biz=Mzg2NzA3NDU1NQ==&mid=2247485783&idx=1&sn=d2f36350de7a67ae65c5be0b8b21288d&chksm=ce4061c3f937e8d5f04e3b82a4002fe37c6726f46044889d3cda0882c31e32aa95f3e25489d3#rd"):t.gotoIndex():console.log("未完成关联，或者未授权")},handleGoIndexAfterSave:function(){var e=this;if(e.data.isDoGX)"zqbs"==t.globalData.corp.ID&&"wx4b1859c3dc4abf4a"==t.globalData.corp.appid?e.goWebView("https://mp.weixin.qq.com/s?__biz=Mzg2NzA3NDU1NQ==&mid=2247485783&idx=1&sn=d2f36350de7a67ae65c5be0b8b21288d&chksm=ce4061c3f937e8d5f04e3b82a4002fe37c6726f46044889d3cda0882c31e32aa95f3e25489d3#rd"):t.gotoIndex();else{console.log("that.data.isDoGX 未保存",e.data.isDoGX);var a=wx.getStorageSync(t.globalData.corp.appid+"_openid");t.util.isNull(a)?t.doLogin((function(a){e.handleGXFun()})):e.handleGXFun()}},handleGXFun:function(){var n=this;return a(e().mark((function a(){var o,r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n,r=wx.getStorageSync(t.globalData.corp.appid+"_openid"),e.next=4,o.doGXFun(r);case 4:e.sent?t.gotoIndex():t.util.showMsg("保存失败，请重试");case 6:case"end":return e.stop()}}),a)})))()},goWebView:function(e){t.util.isNull(e)||(e=encodeURIComponent(e),wx.navigateTo({url:"/pages/webview/webview?web_url="+e}))},onLoad:function(e){wx.hideShareMenu();var a=this,n=e.scene;t.util.isNull(n)&&t.util.showMsg("参数有误，请联系管理员"),a.setData({scene:n}),t.getCorpXcxInfo((function(){var e=a.data.isShowIndexBtn;"lexing"==t.globalData.corp.ID&&(e=!0),a.setData({corp:t.globalData.corp,pageTitle:"授权登录_"+t.globalData.corp.corpName,isShowIndexBtn:e}),wx.setNavigationBarTitle({title:"授权登录_"+t.globalData.corp.corpName})}))},onReady:function(){var e=this,a=r(),n=c("2.21.2");e.setData({userInfo:a,canInputNicknameAvatar:n});var o=wx.getStorageSync(t.globalData.corp.appid+"_openid");t.util.isNull(o)?t.doLogin((function(a){o=wx.getStorageSync(t.globalData.corp.appid+"_openid"),e.doGXFun(o,!0)})):e.doGXFun(o,!0)},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){wx.stopPullDownRefresh()},onReachBottom:function(){},onShareAppMessage:function(){}});
},{isPage:true,isComponent:true,currentFile:'pages/partner/partner_from/partner_from.js'});require("pages/partner/partner_from/partner_from.js");