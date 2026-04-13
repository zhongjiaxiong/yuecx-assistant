$gwx_XC_6=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_6 || [];
function gz$gwx_XC_6_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'height:100vh;overflow:hidden;'])
Z([[7],[3,'isMapReady']])
Z([3,'new-control-panel bg-white'])
Z([3,'new-address-container'])
Z([3,'handleClickHistoryBtn'])
Z([3,'index-search-history'])
Z([[7],[3,'canInvoice']])
Z([[7],[3,'indexSupportName']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_6=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_6=true;
var x=['./package/indexCar2/indexCar2.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_6_1()
var aPD=_n('view')
_rz(z,aPD,'style',0,e,s,gg)
var tQD=_v()
_(aPD,tQD)
if(_oz(z,1,e,s,gg)){tQD.wxVkey=1
}
var eRD=_n('view')
_rz(z,eRD,'class',2,e,s,gg)
var oTD=_n('view')
_rz(z,oTD,'class',3,e,s,gg)
var oVD=_mz(z,'index-search-history',['bind:clickHistoryBtn',4,'class',1],[],e,s,gg)
_(oTD,oVD)
var xUD=_v()
_(oTD,xUD)
if(_oz(z,6,e,s,gg)){xUD.wxVkey=1
}
xUD.wxXCkey=1
_(eRD,oTD)
var bSD=_v()
_(eRD,bSD)
if(_oz(z,7,e,s,gg)){bSD.wxVkey=1
}
bSD.wxXCkey=1
_(aPD,eRD)
tQD.wxXCkey=1
_(r,aPD)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_6";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_6();	if (__vd_version_info__.delayedGwx) __wxAppCode__['package/indexCar2/indexCar2.wxml'] = [$gwx_XC_6, './package/indexCar2/indexCar2.wxml'];else __wxAppCode__['package/indexCar2/indexCar2.wxml'] = $gwx_XC_6( './package/indexCar2/indexCar2.wxml' );
	;__wxRoute = "package/indexCar2/indexCar2";__wxRouteBegin = true;__wxAppCurrentFile__="package/indexCar2/indexCar2.js";define("package/indexCar2/indexCar2.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/defineProperty"),e=require("../../@babel/runtime/helpers/regeneratorRuntime"),a=require("../../@babel/runtime/helpers/asyncToGenerator"),o=getApp(),n=require("../../C6AC61C49105A88CA0CA09C31864FB65.js").isSupportFun;Component({properties:{},data:{CustomBar:o.globalData.systemInfo.CustomBar||60,Custom:o.globalData.systemInfo.Custom,StatusBar:o.globalData.systemInfo.statusBarHeight,primary:o.globalData.corpXcx.primary,staticHost:o.config.staticHost,corpName:o.globalData.corp.corpName,version:o.globalData.corp.version,canInvoice:o.globalData.corpXcx.canInvoice,modalName:null,bottomBannerUrl:"/web/xcx/images/car/home2/index_bottom_banner_20240705.png",longitude:"116.39757695892334",latitude:"39.90756917034928",startAddress:"",startLongitude:"116.39757695892334",startLatitude:"39.90756917034928",endAddress:"",endLongitude:"",endLatitude:"",scale:16,isMapReady:!1,showBubble:!0,mapPinNotice:"请拖动地图",getLoactionLock:!1,isGoSelectEndAddress:!1,tripType:1,corpid:"",privacyContractName:"《隐私政策》",startSelect:!1,endSelect:!1},methods:{goCharterCar:function(){wx.navigateTo({url:"/package/charterCar/pages/charterCarIndex/charterCarIndex"})},goMyOrderList:function(){wx.navigateTo({url:"/package/user_center/pages/orderList/orderList?key=future"})},getoInvoice:function(){wx.navigateTo({url:"/package/user_center_preload/pages/invoiceIndex/invoiceIndex"})},selectTripType:function(t){var e=t.currentTarget.dataset.type;2!=e?this.setData({tripType:e}):o.util.showMsg("敬请期待")},handleGetLocationBg:function(){},queryLocation:function(t,n,r){var i=this;return a(e().mark((function a(){var r,s;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i,s={action:"map.geocode_regeo",lng:t,lat:n},e.next=4,o.network.requestPOST(s).then((function(t){if(console.log("res",t),t.success&&t.data){if(t.data.regeocode.pois.length){var e=t.data.regeocode.pois[0].location.split(",");r.setData({startAddress:t.data.regeocode.pois[0].name,mapPinNotice:t.data.regeocode.pois[0].name,startLongitude:e[0],startLatitude:e[1]})}}else r.setData({startAddress:"获取失败，请点击选择",startLongitude:null,startLatitude:null})})).catch((function(t){console.log("geocode_regeo",t),r.setData({startAddress:"获取失败，请点击选择",startLongitude:null,startLatitude:null})}));case 4:case"end":return e.stop()}}),a)})))()},bindregionchange:function(t){var e=t.causedBy;console.log("bindregionchange",t),"end"==t.type&&("update"==e||"drag"==e&&(this.get_center_location(),console.log("drag - end")))},move_to_my_location:function(){var t=this;t.mapCtx.moveToLocation({success:function(e){console.log("moveToLocation res",e),t.setData({getLoactionLock:!0}),clearTimeout(o.globalData.timerTem);var a=setTimeout((function(){t.get_center_location(!0),clearTimeout(o.globalData.timerTem)}),1e3);o.globalData.timerTem=a},fail:function(t){o.util.showMsg("定位失败"),console.log("定位失败 res",t)}})},get_center_location:function(t){var e=this;e.mapCtx.getCenterLocation({success:function(a){console.log("获取中心位置getCenterLocation",a),e.setData({startLongitude:a.longitude,startLatitude:a.latitude,longitude:a.longitude,latitude:a.latitude}),t&&e.setData({scale:18,getLoactionLock:!1}),e.queryLocation(a.longitude,a.latitude)},fail:function(t){console.log("err",t),o.util.showMsg("获取经纬度失败"),e.setData({getLoactionLock:!1})}})},chooseLocation:function(t){"start"==t.currentTarget.dataset.type?this.setData({startSelect:!0}):this.setData({endSelect:!0,isGoSelectEndAddress:!0}),wx.navigateTo({url:"/package/searchLocation/pages/searchLocation?locationType="+t.currentTarget.dataset.type,fail:function(t){console.log("err",t)}})},closeBubble:function(){this.setData({showBubble:!1})},hideModal:function(){this.setData({modalName:null})},handleClickHistoryBtn:function(t){this.gotoIntervalPage(t.detail)},gotoIntervalPage:function(t){var e=this;e.setData({isGoSelectEndAddress:!1});var a=e.data,n=a.startLongitude,r=a.startLatitude,i=a.endLongitude,s=a.endLatitude,c=a.startAddress,l=a.endAddress;return t&&t.corpid==e.data.corpid&&(l=t.endAddress,s=t.endLatitude,i=t.endLongitude,c=t.startAddress,r=t.startLatitude,n=t.startLongitude),o.util.isNull(n)||o.util.isNull(r)?(console.log("未选择出发地"),void o.util.showMsg("请选择出发地")):o.util.isNull(i)||o.util.isNull(s)?(console.log("未选择目的地"),void o.util.showMsg("请选择目的地")):(console.log("已获取出发、到达经纬度"),console.log("参数","startAddress="+c+"&startLongitude="+n+"&startLatitude="+r+"&endAddress="+l+"&endLongitude="+i+"&endLatitude="+s),void wx.navigateTo({url:"/package/intervalCar2/pages/interval/interval?startAddress="+c+"&startLongitude="+n+"&startLatitude="+r+"&endAddress="+l+"&endLongitude="+i+"&endLatitude="+s,fail:function(t){console.log("err",t)},success:function(){e.selectComponent(".index-search-history")&&e.selectComponent(".index-search-history").saveQueryCityHistory({startLongitude:n,startLatitude:r,endLongitude:i,endLatitude:s,startAddress:c,endAddress:l})}}))},onQueryBtnClick:function(){this.gotoIntervalPage()},previewBanner:function(t){var e=["".concat(this.data.staticHost).concat(this.data.bottomBannerUrl)];console.log("urlList",e),wx.previewImage({urls:e,current:e[0]})},openPrivacyContract:function(){wx.openPrivacyContract?wx.openPrivacyContract({success:function(t){console.log("openPrivacyContract success")},fail:function(t){console.error("openPrivacyContract fail",t)}}):o.utils.showMsg("当前版本不支持此功能")}},lifetimes:{attached:function(){var t=this;t.mapCtx=wx.createMapContext("map",t),t.setData({isMapReady:!0});var e=o.globalData.corp.ID;o.getCorpXcxInfo((function(){var a=t.data.bottomBannerUrl;"ldwsjc"==e&&(a="/web/xcx/images/car/home2/index_bottom_banner_ldwsjc_20240531.png"),t.setData({version:o.globalData.corp.version,corpid:e,bottomBannerUrl:a})})),n("2.32.3")&&wx.getPrivacySetting({success:function(e){console.log("res",e),"getPrivacySetting:ok"==e.errMsg&&t.setData({privacyContractName:e.privacyContractName,showPrivacy:e.needAuthorization})}})},ready:function(){o.util.isNull(o.globalData.openid)&&o.doLogin(),clearTimeout(o.globalData.timerTem),"lywsjc"==o.globalData.corp.ID&&this.move_to_my_location()},detached:function(){clearTimeout(o.globalData.timerTem)}},pageLifetimes:{show:function(){if(this.data.startSelect||this.data.endSelect){var e=this.data.startSelect?"start":"end",a=o.globalData.corp.appid+"_"+e+"_location",n=wx.getStorageSync(a);if(n){var r,i=n.location.split(","),s=n.location?i[0]:"",c=n.location?i[1]:"";this.setData((t(r={},e+"Address",n.name||""),t(r,e+"Longitude",s),t(r,e+"Latitude",c),t(r,e+"Select",!1),r)),wx.removeStorageSync(a)}}this.data.isGoSelectEndAddress&&this.gotoIntervalPage()}}});
},{isPage:false,isComponent:true,currentFile:'package/indexCar2/indexCar2.js'});require("package/indexCar2/indexCar2.js");