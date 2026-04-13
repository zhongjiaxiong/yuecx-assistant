$gwx_XC_14=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_14 || [];
function gz$gwx_XC_14_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_14_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bindRefresh'])
Z([3,'bindDownLoad'])
Z([[7],[3,'triggered']])
Z([a,[3,'height:calc(100vh - '],[[7],[3,'CustomBar']],[3,'px);']])
Z([[7],[3,'has_order']])
Z([[2,'=='],[[7],[3,'travelType']],[1,'order']])
Z([[7],[3,'orderList']])
Z([3,'orderId'])
Z([3,'orderDetail'])
Z([a,[3,'margin-lr-36 margin-bottom-sm radius-36 bg-white order-box position-relative '],[[7],[3,'globalStyle']]])
Z([[6],[[7],[3,'item']],[3,'orderTable']])
Z([[6],[[7],[3,'item']],[3,'orderId']])
Z([[6],[[7],[3,'item']],[3,'supplier']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'orderTable']],[1,'gang_ao']])
Z([[6],[[7],[3,'item']],[3,'totalNumber']])
Z([[6],[[7],[3,'item']],[3,'backDate']])
Z([[6],[[7],[3,'item']],[3,'backAddressName']])
Z([[6],[[7],[3,'item']],[3,'backGetOffAddressName']])
Z([[2,'=='],[[7],[3,'travelType']],[1,'ticket']])
Z([[2,'!'],[[7],[3,'has_order']]])
Z([3,'cx'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_14_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_14=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_14=true;
var x=['./pages/cx/cx.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_14_1()
var oJH=_n('cu-nav')
_(r,oJH)
var lKH=_mz(z,'scroll-view',['enableBackToTop',-1,'refresherEnabled',-1,'scrollY',-1,'bindrefresherrefresh',0,'bindscrolltolower',1,'refresherTriggered',1,'style',2],[],e,s,gg)
var aLH=_v()
_(lKH,aLH)
if(_oz(z,4,e,s,gg)){aLH.wxVkey=1
var tMH=_v()
_(aLH,tMH)
if(_oz(z,5,e,s,gg)){tMH.wxVkey=1
var eNH=_v()
_(tMH,eNH)
var bOH=function(xQH,oPH,oRH,gg){
var cTH=_mz(z,'view',['bindtap',8,'class',1,'data-order-Table',2,'data-orderid',3,'data-supplier',4],[],xQH,oPH,gg)
var hUH=_v()
_(cTH,hUH)
if(_oz(z,13,xQH,oPH,gg)){hUH.wxVkey=1
}
var oVH=_v()
_(cTH,oVH)
if(_oz(z,14,xQH,oPH,gg)){oVH.wxVkey=1
}
var cWH=_v()
_(cTH,cWH)
if(_oz(z,15,xQH,oPH,gg)){cWH.wxVkey=1
}
var oXH=_v()
_(cTH,oXH)
if(_oz(z,16,xQH,oPH,gg)){oXH.wxVkey=1
}
var lYH=_v()
_(cTH,lYH)
if(_oz(z,17,xQH,oPH,gg)){lYH.wxVkey=1
}
hUH.wxXCkey=1
oVH.wxXCkey=1
cWH.wxXCkey=1
oXH.wxXCkey=1
lYH.wxXCkey=1
_(oRH,cTH)
return oRH
}
eNH.wxXCkey=2
_2z(z,6,bOH,e,s,gg,eNH,'item','index','orderId')
}
else if(_oz(z,18,e,s,gg)){tMH.wxVkey=2
}
tMH.wxXCkey=1
}
else if(_oz(z,19,e,s,gg)){aLH.wxVkey=2
}
aLH.wxXCkey=1
_(r,lKH)
var aZH=_n('index-float-btn')
_rz(z,aZH,'pageName',20,e,s,gg)
_(r,aZH)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_14";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_14();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/cx/cx.wxml'] = [$gwx_XC_14, './pages/cx/cx.wxml'];else __wxAppCode__['pages/cx/cx.wxml'] = $gwx_XC_14( './pages/cx/cx.wxml' );
	;__wxRoute = "pages/cx/cx";__wxRouteBegin = true;__wxAppCurrentFile__="pages/cx/cx.js";define("pages/cx/cx.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../@babel/runtime/helpers/Arrayincludes");var t=require("../../@babel/runtime/helpers/regeneratorRuntime"),e=require("../../@babel/runtime/helpers/asyncToGenerator"),a=getApp(),r=0,i=require("../../8A94E9619105A88CECF281668574FB65.js").HKMOOrderDetailUrlMap;Page({data:{CustomBar:a.globalData.systemInfo.CustomBar,primary:a.globalData.corpXcx.primary,secondaryColor:a.globalData.corpXcx.secondaryColor,travelType:a.globalData.corpXcx.travelType,interval_leave_name:a.globalData.dictionary.interval_leave_name,globalStyle:a.globalData.corpXcx.globalStyle,modalName:null,triggered:!1,openid:void 0,orderList:[],ticketList:[],totalCount:0,isRefresh:!0,has_order:!0,curTicketId:"",isHoveImage:!1,verifyDialogWidth:340,progressStatus:0,topTitle:"很抱歉，您还没有购票呢！",stepOneTitle:"选择班次",stepOneSubTitle:"选择合适的时间、位置",stepTwoTitle:"支付票款",stepTwoSubTitle:"填写乘客信息并支付票款",buyTicketName:"购票"},timeLock:!1,bindRefresh:function(){r=0,this.setData({isRefresh:!0}),this.separateQuery()},bindDownLoad:function(){10*r+10>=this.data.totalCount||(r++,this.separateQuery())},separateQuery:function(){var a=this;return e(t().mark((function e(){var r;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=a,console.log("separateQuery run,that.data.travelType：",r.data.travelType),r.data.openid){t.next=4;break}return t.abrupt("return");case 4:if("order"!=r.data.travelType){t.next=9;break}return t.next=7,r.handleOrderList();case 7:t.next=12;break;case 9:if("ticket"!=r.data.travelType){t.next=12;break}return t.next=12,r.handleTravelList();case 12:wx.stopPullDownRefresh();case 13:case"end":return t.stop()}}),e)})))()},handleOrderList:function(){var a=this;return e(t().mark((function e(){var r,i,n;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a,t.next=3,r.getOrderList();case 3:i=t.sent,n=(n=r.data.isRefresh?[]:r.data.orderList).concat(i.data),r.setData({has_order:1==i.resultCode,orderList:n,totalCount:i.totalCount,isRefresh:!1,triggered:!1});case 7:case"end":return t.stop()}}),e)})))()},getOrderList:function(){return e(t().mark((function e(){var r,i;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={},i={action:"order.myOrderListWithGangAo",openid:a.globalData.openid},wx.showNavigationBarLoading(),t.next=5,a.network.requestPOST(i).then((function(t){if(t.success&&a.util.isNotNull(t.data)){t.resultCode=1;for(var e=t.data.length,i=0;i<e;i++)t.data[i].priceFix=a.util.fixedPrice(t.data[i].totalFee),t.data[i].showDate=a.util.formatDate(t.data[i].takeDate),t.data[i].week=a.util.getWeek(t.data[i].takeDate),t.data[i].backDate&&(t.data[i].showBackDate=a.util.formatDate(t.data[i].backDate),t.data[i].backWeek=a.util.getWeek(t.data[i].backDate))}else t.resultCode=2,t.data=t.data||[];r=t})).catch((function(t){(t=t||{}).resultCode=3,t.data=t.data||[],r=t}));case 5:return wx.hideNavigationBarLoading(),t.abrupt("return",r);case 7:case"end":return t.stop()}}),e)})))()},handleTravelList:function(){var a=this;return e(t().mark((function e(){var i,n,o;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=a,t.next=3,i.getTravalList(10*r,10);case 3:n=t.sent,o=(o=i.data.isRefresh?[]:i.data.ticketList).concat(n.data),i.setData({has_order:1==n.resultCode,ticketList:o,totalCount:n.totalCount,isRefresh:!1,triggered:!1});case 7:case"end":return t.stop()}}),e)})))()},getTravalList:function(r,i){return e(t().mark((function e(){var n;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={},wx.showNavigationBarLoading(),t.next=4,a.network.requestPOST({action:"orderTicket.myTravelList",start:r,limit:i,openid:a.globalData.openid}).then((function(t){if(t.data){t.resultCode=1;for(var e=a.util.addDate(0),r=t.data.length,i=0;i<r;i++)2==t.data[i].ticketStatus&&(0==t.data[i].ifChecked?t.data[i].ticketStatusName="待坐车":1==t.data[i].ifChecked&&(t.data[i].ticketStatusName="已检票")),t.data[i].showDate=a.util.formatDate(t.data[i].takeDate),t.data[i].week=a.util.getWeek(t.data[i].takeDate),t.data[i].takeDate==e&&2==t.data[i].ticketStatus&&(t.data[i].isActiveBtn=!0)}else t.resultCode=2,t.data=t.data||[];n=t})).catch((function(t){(t=t||{}).resultCode=3,t.data=t.data||[],n=t}));case 4:return wx.hideNavigationBarLoading(),t.abrupt("return",n);case 6:case"end":return t.stop()}}),e)})))()},orderTicketIfCheckTime:function(r){return e(t().mark((function e(){var i;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i={},wx.showNavigationBarLoading(),t.next=4,a.network.requestPOST({action:"orderTicket.ifCheckTime",ticketid:r,openid:a.globalData.openid}).then((function(t){i=t})).catch((function(t){i=t}));case 4:return wx.hideNavigationBarLoading(),t.abrupt("return",i);case 6:case"end":return t.stop()}}),e)})))()},orderDetail:function(t){var e=t.currentTarget.dataset.orderid,r="/package/bus/pages/order_detail/order_detail?orderid="+e;if("gang_ao"==t.currentTarget.dataset.orderTable){var n=t.currentTarget.dataset.supplier;r=i[n]+"?"+a.util.enQueryString({orderId:e})}wx.navigateTo({url:r})},goTicketOrderDetail:function(t){var e="";if("order"==t.currentTarget.dataset.type)e="/package/bus/pages/order_detail/order_detail?orderid="+t.currentTarget.dataset.orderid;else{if("commute"!=t.currentTarget.dataset.type)return void a.util.showMsg("订单类型有误，请联系管理员");e="/package/orderCommute/pages/orderDetail/orderDetail?orderid="+t.currentTarget.dataset.orderid}wx.navigateTo({url:e})},showPreVerifyModal:function(r){var i=this;return e(t().mark((function e(){var n,o;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=i,2!=r.currentTarget.dataset.status){t.next=15;break}if(r.currentTarget.dataset.date===a.util.addDate(0)){t.next=5;break}return a.util.showMsg("暂不支持解锁未来的车票"),t.abrupt("return");case 5:if(0!=r.currentTarget.dataset.check){t.next=12;break}return t.next=8,n.orderTicketIfCheckTime(r.currentTarget.dataset.ticketid);case 8:(o=t.sent).success?(n.setData({modalName:"preVerifyModal",curTicketId:r.currentTarget.dataset.ticketid}),n.timeLock=!1):a.util.showMsg(o.message),t.next=13;break;case 12:1==r.currentTarget.dataset.check&&wx.navigateTo({url:"/package/bus/pages/ticketValidate/ticketValidate?curTicketId="+r.currentTarget.dataset.ticketid});case 13:t.next=17;break;case 15:n.setData({curTicketId:null}),a.util.showMsg("此行程".concat(r.currentTarget.dataset.name));case 17:case"end":return t.stop()}}),e)})))()},hideModal:function(){this.setData({modalName:null})},handleTouchstart:function(t){this.setData({start:t.timeStamp,isHoveImage:!0}),0!==this.data.progressStatus||this.timeLock||this.handleProgress()},handleProgress:function(){var t=this;wx.createSelectorQuery().select(".preVerifyDialog").boundingClientRect((function(e){var a=e?e.width:340;t.setData({verifyDialogWidth:a,progressStatus:1}),t.animate(".animationProgress",[{width:"0px"},{width:a+"px"}],1e3,(function(){console.log("进度条 动画完成"),t.clearAnimation(".animationProgress",{width:!0})}))})).exec()},handleTouchEnd:function(t){var e=this;(e.setData({isHoveImage:!1}),e.timeLock)||(2!=e.data.progressStatus?t.timeStamp-e.data.start<1e3?(console.log("长按时间不足 1"),wx.createSelectorQuery().select(".animationProgress").boundingClientRect((function(t){e.setData({progressStatus:2});var a=t?Math.ceil(t.width):0,r=Math.ceil(a/e.data.verifyDialogWidth*1e3);console.log("currentStopWidth:",a,"backTime:",r),e.animate(".animationProgressBack",[{width:a+"px"},{width:"0px"}],r,(function(){console.log("进度条 归零 动画完成"),e.setData({progressStatus:0}),e.clearAnimation(".animationProgressBack")})),0!=a&&0!=r||e.setData({progressStatus:0})})).exec()):(e.timeLock=!0,e.setData({progressStatus:3,modalName:null}),wx.navigateTo({url:"/package/bus/pages/ticketValidate/ticketValidate?curTicketId="+e.data.curTicketId})):console.log("progressStatus == 2"))},handleClick:function(){},handleLongtap:function(t){console.log("handleLongtap",t)},gotoIndex:function(){a.gotoIndex()},redirectHKMOListPage:function(){wx.navigateTo({url:"/package/kwoonchungOrderList/pages/kwoonchungOrderList/kwoonchungOrderList"})},onLoad:function(t){var e=this;a.doLogin((function(r){var i=e.data.topTitle,n=e.data.stepOneTitle,o=e.data.stepOneSubTitle,s=e.data.stepTwoTitle,c=e.data.stepTwoSubTitle,d=e.data.buyTicketName;"dskbcx"==a.globalData.corp.ID?n="选择车辆":["jkt","lyygl"].includes(a.globalData.corp.ID)?(i="很抱歉，您还没有预约呢！",d="预约"):["yybus"].includes(a.globalData.corp.ID)?(i="很抱歉，还没有匹配到您的出行需求!",n="提交出行需求",o="匹配合适的出行线路",d="立即预约"):"qtwx"==a.globalData.corp.ID&&(i="很抱歉，您还没有拼团呢！",s="支付",c="填写乘客信息并支付",d="去拼团");var u=a.globalData.corpXcx.travelType;console.log("options",t),a.util.isNotNull(t.scene)&&-1!==t.scene.indexOf("travelType_")&&2==t.scene.split("_").length&&(u=t.scene.split("_")[1]),console.log("travelType",u),e.setData({openid:a.globalData.openid,travelType:u||a.globalData.corpXcx.travelType,topTitle:i,stepOneTitle:n,stepOneSubTitle:o,stepTwoTitle:s,stepTwoSubTitle:c,buyTicketName:d}),e.separateQuery()}))},onPullDownRefresh:function(){this.bindRefresh()},onReachBottom:function(){this.bindDownLoad()},onShow:function(){r=0,this.setData({isRefresh:!0}),this.separateQuery()}});
},{isPage:true,isComponent:true,currentFile:'pages/cx/cx.js'});require("pages/cx/cx.js");