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
Z([[6],[[7],[3,'bannerList']],[3,'length']])
Z([[2,'!='],[[6],[[7],[3,'adunit']],[3,'tplAdunitid']],[1,'0']])
Z([[6],[[7],[3,'adunit']],[3,'tplAdunitid']])
Z([[6],[[7],[3,'noticeList']],[3,'length']])
Z([[6],[[7],[3,'noticePopup']],[3,'content']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_0=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_0=true;
var x=['./components/bannerNotice/bannerNotice.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_0_1()
var oD=_v()
_(r,oD)
if(_oz(z,0,e,s,gg)){oD.wxVkey=1
var hG=_v()
_(oD,hG)
if(_oz(z,1,e,s,gg)){hG.wxVkey=1
var oH=_v()
_(hG,oH)
if(_oz(z,2,e,s,gg)){oH.wxVkey=1
}
oH.wxXCkey=1
}
hG.wxXCkey=1
}
var fE=_v()
_(r,fE)
if(_oz(z,3,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(r,cF)
if(_oz(z,4,e,s,gg)){cF.wxVkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_0();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/bannerNotice/bannerNotice.wxml'] = [$gwx_XC_0, './components/bannerNotice/bannerNotice.wxml'];else __wxAppCode__['components/bannerNotice/bannerNotice.wxml'] = $gwx_XC_0( './components/bannerNotice/bannerNotice.wxml' );
	;__wxRoute = "components/bannerNotice/bannerNotice";__wxRouteBegin = true;__wxAppCurrentFile__="components/bannerNotice/bannerNotice.js";define("components/bannerNotice/bannerNotice.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../@babel/runtime/helpers/asyncToGenerator"),a=getApp(),n=require("../../727D99A59105A88C141BF1A2A784FB65.js");Component({properties:{bannerClass:{value:"",type:null},noticeClass:{value:"",type:null},noticeTextColor:{value:a.globalData.corpXcx.primary,type:null},noticeBtnClass:{value:"",type:null},enablePopupNotice:{value:!0,type:null},noticePopupDialogClass:{value:"",type:null},screenWidth:{value:750,type:null},firstBannerHeight:{value:253},bannerImageClass:{value:"",type:null},pageTab:{value:"index",type:null},noticeIcon:{value:"",type:null},noticeText:{value:"text-df",type:null}},data:{primary:a.globalData.corpXcx.primary,staticHost:a.config.staticHost,bannerList:[],adunit:{},noticeList:[],noticePopup:{},modalName:null,tpl:"",tpl2:""},lifetimes:{attached:function(){this.getBannerStorage()},ready:function(){this.getBannerNotice()},error:function(e){console.log("mpNotice error",e),n.error("mpNotice error",e)}},methods:{getBannerStorage:function(){var n=this;return t(e().mark((function t(){var o,i,r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=n,i=wx.getStorageSync(a.globalData.corp.appid+"_bannerList_"+o.data.pageTab),r=wx.getStorageSync(a.globalData.corp.appid+"_firstBannerHeight_"+o.data.pageTab)||o.data.firstBannerHeight,a.util.isNull(i)&&(i=[]),o.setData({bannerList:i,firstBannerHeight:r});case 5:case"end":return e.stop()}}),t)})))()},getBannerNotice:function(){var n=this;return t(e().mark((function t(){var o,i,r,l,p,c,s;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n,i={action:"banner.indexInfo",subAppid:a.globalData.corp.appid,pageTab:o.data.pageTab},r=o.data.bannerList,l=[],p={},c={},s=null,wx.showNavigationBarLoading(),e.next=10,a.network.requestPOST(i).then((function(e){console.log("banner.indexInfo pro",e),e.success&&e.data?(e.data.bannerList&&e.data.bannerList.length&&(r=e.data.bannerList),e.data.notice&&(l=e.data.notice.noticeList,e.data.notice.noticePopup&&o.data.enablePopupNotice&&(a.util.isNotNull(e.data.notice.noticePopup.picUrl)?(p=e.data.notice.noticePopup,s="popupPicModel"):(e.data.notice.noticePopup.title||e.data.notice.noticePopup.content)&&(p=e.data.notice.noticePopup,s="popupModel")),o.triggerEvent("onNoticeComLoad",{noticeList:l,noticePopup:p,modalName:s})),e.data.adunit&&(c=e.data.adunit)):o.triggerEvent("onFirstBannerComLoad",{firstBannerHeight:0})})).catch((function(e){console.log(e),o.triggerEvent("onFirstBannerComLoad",{firstBannerHeight:0})}));case 10:wx.hideNavigationBarLoading(),o.setData({adunit:c,bannerList:r,noticeList:l,noticePopup:p,modalName:s}),wx.setStorageSync(a.globalData.corp.appid+"_bannerList_"+o.data.pageTab,r);case 13:case"end":return e.stop()}}),t)})))()},imageLoad:function(e){if(0===e.target.dataset.index){var t=e.detail.width/e.detail.height,n=Math.round(this.data.screenWidth/t);this.setData({firstBannerHeight:n}),console.log("firstBannerHeight",n),this.triggerEvent("onFirstBannerComLoad",{firstBannerHeight:n}),wx.setStorageSync(a.globalData.corp.appid+"_firstBannerHeight_"+this.data.pageTab,n)}},previewBanner:function(e){var t=this.data.bannerList,n=e.currentTarget.dataset.index,o=t[n].linkUrl,i=t[n].openType,r=t[n].pagePath,l=t[n].otherAppid;if(""==i){for(var p=t.length,c=[],s=0;s<p;s++)c.push(t[s].imageUrl);wx.previewImage({urls:c,current:c[n]})}else"link_url"==i?a.util.isNotNull(o)&&-1!=o.indexOf("http")?(o=encodeURIComponent(o),wx.navigateTo({url:"/pages/webview/webview?web_url="+o})):console.log("横幅配置参数有误，外部链接跳转地址不正确"):"navigate_to"==i?a.util.routerToPage(r):"to_mini_program"==i&&a.util.goOtherMiniApp(l,r)},openNotice:function(e,t){if(a.util.isNotNull(e)){var n={title:t||"",content:e};this.setData({modalName:"popupModel",noticePopup:n})}else wx.showModal({content:t,showCancel:!1,confirmText:"关闭"})},openPageType:function(e,t,n,o,i){if(""==e){var r=[i];wx.previewImage({urls:r,current:r[0]})}else"link_url"==e?(console.log(e,t,n,o,i),a.util.isNotNull(t)&&-1!=t.indexOf("http")?(t=encodeURIComponent(t),wx.navigateTo({url:"/pages/webview/webview?web_url="+t})):console.log("配置参数有误，外部链接跳转地址不正确")):"navigate_to"==e?a.util.routerToPage(n):"to_mini_program"==e&&a.util.goOtherMiniApp(o,n)},hideModal:function(){this.setData({modalName:null})},clickNotice:function(e){console.log("e.currentTarget",e.currentTarget);var t=e.currentTarget.dataset,n=t.openType,o=t.linkUrl,i=t.pagePath,r=t.otherAppid,l=t.content,p=t.title,c=t.picUrl;console.log("openType,linkUrl,pagePath,otherAppid,content,title,picUrl",n,o,i,r,l,p,c),a.util.isNotNull(c)?this.setData({noticePopup:e.currentTarget.dataset,modalName:"popupPicModel"}):(this.openPageType(n,o,i,r),""==n&&this.openNotice(l,p))},clickPopupPic:function(e){var t=this.data.noticePopup,a=t.openType,n=t.url,o=t.pagePath,i=t.otherAppid,r=t.picUrl;this.openPageType(a,n,o,i,r)},onAdLoad:function(e){console.log("横幅末位广告组件onAdLoad",e)},onAdError:function(e){console.log("横幅末位广告组件onAdError",e)}}});
},{isPage:false,isComponent:true,currentFile:'components/bannerNotice/bannerNotice.js'});require("components/bannerNotice/bannerNotice.js");