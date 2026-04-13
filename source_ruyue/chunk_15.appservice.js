$gwx_XC_7=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_7 || [];
function gz$gwx_XC_7_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'true'])
Z([3,'showTargetModal'])
Z([3,'padding-sm'])
Z([3,'thanksFeeModal'])
Z([[2,'>'],[[7],[3,'thanksFeeYuan']],[1,0]])
Z([3,'bindRefresh'])
Z([3,'bindDownLoad'])
Z([3,'basicScrollHeight text-left'])
Z([[7],[3,'intervalTriggered']])
Z([[7],[3,'intervalList']])
Z([3,'IntervalID'])
Z([3,'handleSelectInterval'])
Z([a,[3,'flex justify-between align-center padding-tb-sm padding-lr margin-36 solid position-relative item-box '],[[2,'?:'],[[2,'!='],[[6],[[7],[3,'item']],[3,'Condition']],[1,1]],[1,'text-gray line-gray '],[1,'text']],[3,'-'],[[7],[3,'primary']],[3,' '],[[2,'?:'],[[2,'=='],[[7],[3,'selectedIntervalID']],[[6],[[7],[3,'item']],[3,'IntervalID']]],[1,'active text-white bg'],[1,'bg-white line']],[3,'-'],[[7],[3,'primary']]])
Z([[7],[3,'item']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'use_coupon']],[1,1]])
Z([3,'flex flex-column align-end'])
Z([[2,'<'],[[6],[[7],[3,'item']],[3,'ticket_price_fen']],[1,0]])
Z([[6],[[7],[3,'item']],[3,'residueName']])
Z([3,'hideBottomModal'])
Z([a,[3,'cu-modal bottom-modal '],[[2,'?:'],[[2,'=='],[[7],[3,'bottomModalName']],[1,'submitOrderModal']],[1,'show'],[1,'']]])
Z(z[18])
Z([3,'cu-dialog bg-white submit-order-dialog'])
Z(z[0])
Z([3,'padding-xl text-left text-lg'])
Z(z[4])
Z([[6],[[7],[3,'coupon_obj']],[3,'couponFen']])
Z([3,'hideOrderRuleModal'])
Z([a,z[19][1],[[2,'?:'],[[7],[3,'isShowOrderRuleModal']],[1,'show'],[1,'']]])
Z(z[26])
Z([3,'cu-dialog order-rule-dialog bg-white'])
Z(z[0])
Z([[6],[[7],[3,'wxOrderRuleRes']],[3,'orderNotice']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_7=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_7=true;
var x=['./package/intervalCar1/pages/interval/interval.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_7_1()
var cXD=_n('cu-nav')
_rz(z,cXD,'isBack',0,e,s,gg)
_(r,cXD)
var hYD=_mz(z,'view',['bindtap',1,'class',1,'data-target',2],[],e,s,gg)
var oZD=_v()
_(hYD,oZD)
if(_oz(z,4,e,s,gg)){oZD.wxVkey=1
}
oZD.wxXCkey=1
_(r,hYD)
var c1D=_mz(z,'scroll-view',['enableBackToTop',-1,'refresherEnabled',-1,'scrollWithAnimation',-1,'scrollY',-1,'bindrefresherrefresh',5,'bindscrolltolower',1,'class',2,'refresherTriggered',3],[],e,s,gg)
var o2D=_v()
_(c1D,o2D)
var l3D=function(t5D,a4D,e6D,gg){
var o8D=_mz(z,'view',['bindtap',11,'class',1,'data-item',2],[],t5D,a4D,gg)
var x9D=_v()
_(o8D,x9D)
if(_oz(z,14,t5D,a4D,gg)){x9D.wxVkey=1
}
var o0D=_n('view')
_rz(z,o0D,'class',15,t5D,a4D,gg)
var fAE=_v()
_(o0D,fAE)
if(_oz(z,16,t5D,a4D,gg)){fAE.wxVkey=1
}
var cBE=_v()
_(o0D,cBE)
if(_oz(z,17,t5D,a4D,gg)){cBE.wxVkey=1
}
fAE.wxXCkey=1
cBE.wxXCkey=1
_(o8D,o0D)
x9D.wxXCkey=1
_(e6D,o8D)
return e6D
}
o2D.wxXCkey=2
_2z(z,9,l3D,e,s,gg,o2D,'item','index','IntervalID')
_(r,c1D)
var hCE=_mz(z,'view',['bindtap',18,'class',1],[],e,s,gg)
var oDE=_mz(z,'view',['catchtap',20,'class',1,'data-dialog',2],[],e,s,gg)
var cEE=_n('view')
_rz(z,cEE,'class',23,e,s,gg)
var oFE=_v()
_(cEE,oFE)
if(_oz(z,24,e,s,gg)){oFE.wxVkey=1
}
var lGE=_v()
_(cEE,lGE)
if(_oz(z,25,e,s,gg)){lGE.wxVkey=1
}
oFE.wxXCkey=1
lGE.wxXCkey=1
_(oDE,cEE)
_(hCE,oDE)
_(r,hCE)
var aHE=_mz(z,'view',['bindtap',26,'class',1],[],e,s,gg)
var tIE=_mz(z,'view',['catchtap',28,'class',1,'data-dialog',2],[],e,s,gg)
var eJE=_v()
_(tIE,eJE)
if(_oz(z,31,e,s,gg)){eJE.wxVkey=1
}
eJE.wxXCkey=1
_(aHE,tIE)
_(r,aHE)
var bKE=_n('privacy-popup')
_(r,bKE)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_7";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_7();	if (__vd_version_info__.delayedGwx) __wxAppCode__['package/intervalCar1/pages/interval/interval.wxml'] = [$gwx_XC_7, './package/intervalCar1/pages/interval/interval.wxml'];else __wxAppCode__['package/intervalCar1/pages/interval/interval.wxml'] = $gwx_XC_7( './package/intervalCar1/pages/interval/interval.wxml' );
	;__wxRoute = "package/intervalCar1/pages/interval/interval";__wxRouteBegin = true;__wxAppCurrentFile__="package/intervalCar1/pages/interval/interval.js";define("package/intervalCar1/pages/interval/interval.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../../@babel/runtime/helpers/Arrayincludes");var t=require("../../../../@babel/runtime/helpers/regeneratorRuntime"),e=require("../../../../@babel/runtime/helpers/asyncToGenerator"),a=getApp(),i=require("../../../../3BE296B59105A88C5D84FEB2CFF3FB65.js"),r=i.handleGetPhoneNumber,o=i.getTelStorage,n=require("../../../../796B1D179105A88C1F0D7510C834FB65.js").getAndSubMsg,s=0;Page({data:{staticHost:a.config.staticHost,primary:a.globalData.corpXcx.primary,CustomBar:a.globalData.systemInfo.CustomBar,bottomModalName:null,scale:16,markers:[],polyline:["110.094376,21.473763","110.094476,21.474763","110.094576,21.475763"],polygons:[],isInPolygon:!0,isInPolygon2:!0,startAddress:"",startLongitude:"",startLatitude:"",endAddress:"",endLongitude:"",endLatitude:"",tripType:1,distanceKM:0,durationString:"",seatPrice:0,seatPriceYuan:0,carPrice:0,carPriceYuan:0,originalPriceFen:0,originalPriceYuan:0,tickeTotaltPriceFen:0,tickeTotaltPriceYuan:0,totalPriceFen:0,totalPriceYuan:0,submitSeatPriceFen:0,ticketnum:1,thanksFeeYuan:0,showOtherFee:!1,pt_tel:"",tel:"",userName:"",remarkList:[{selected:!1,value:"有宠物"},{selected:!1,value:"有大件行李，需用后备箱"},{selected:!1,value:"我会佩戴好口罩，请放心"},{selected:!1,value:"有孕妇/老人"}],remarks:"",remarkSelectedArr:[],tripDateKey:0,tripDate:"",intervalList:[],totalCount:0,isRefresh:!1,intervalTriggered:!1,loadIntervalTips:"",selectedIntervalObj:{},selectedIntervalID:"",selectedIntervalStation:"",coupon_obj:{couponId:"0",coupon:0,couponFen:0,couponName:"选择优惠券"},orderid:"",isShowOrderRuleModal:!1,firshShowOrderRule:!0,wxOrderRuleRes:{},byAdCode:"0"},isGoSelectCoupon:!1,carMaxNumber:4,isAlreadyNotice:!1,bindregionchange:function(t){console.log("bindregionchange",t)},calcIsOnlyCar:function(t,e){var i=e||this.data.selectedIntervalStation;if(a.util.isNull(i))return!1;if(!this.data.isInPolygon||!this.data.isInPolygon2){if(t){var r=this.data.isInPolygon?"下车点已超出拼座区域，已选择专车":"上车点已超出拼座区域，已选择专车";a.util.showMsg(r)}return!0}if("ddcx"==a.globalData.corp.ID){var o=this.data.intervalList;if(o.length&&("11426"==o[0].Line||"11428"==o[0].Line)){return a.util.showMsg("拼座暂未开通，请选用专车"),!0}}return!1},minsToObj:function(t){if(!(t=parseInt(t))||isNaN(t))return{days:0,hours:0,mins:0};var e=t<0;e&&(t=Math.abs(t));var a=0,i=0;return t>=1440&&(a=Math.floor(t/1440),t%=1440),t>=60&&(i=Math.floor(t/60),t%=60),e?{days:-a,hours:-i,mins:-t}:{days:a,hours:i,mins:t}},minsToString:function(t){var e=this.minsToObj(t),a="";return e.days>0&&(a+=e.days+"天"),e.hours>0&&(a+=e.hours+"小时"),e.mins>0&&(a+=e.mins+"分钟"),a},getMapPolyline:function(){var i=this;return e(t().mark((function e(){var r,o;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o={action:"orderCar.getPolyline",sLongitude:(r=i).data.startLongitude,sLatitude:r.data.startLatitude,eLongitude:r.data.endLongitude,eLatitude:r.data.endLatitude},[],t.next=5,a.network.requestPOST(o).then((function(t){if(console.log("res",t),t.success&&t.data){var e=t.data.polyline.split(";");console.log("polylines",e);var i=[],o=[],n=(t.data.distance/1e3).toFixed(1),s=r.minsToString(t.data.duration);if(console.log("durationString",s),e.length>0){for(var l=e.length,d=0;d<l-1;d++){var c=e[d].split(",");i.push({latitude:Number(c[1]),longitude:Number(c[0])})}console.log("pl",i);var u=i.length,h=+(i[0].latitude+i[u-1].latitude)/2,g=+(i[0].longitude+i[u-1].longitude)/2;o=[{id:0,latitude:i[0].latitude,longitude:i[0].longitude,width:"28",heigth:"8",callout:{content:r.data.startAddress+" 上车点",color:"#5397fd",fontSize:11,borderWidth:0,borderRadius:10,borderColor:"#5397fd",bgColor:"#fff",padding:6,display:"ALWAYS",textAlign:"center"}},{id:1,latitude:h,longitude:g,width:"0",height:"0",callout:{content:n+"公里，预计行驶"+s,color:"#000000",fontSize:11,borderWidth:0,borderRadius:10,borderColor:"#ffffff",bgColor:"#fff",padding:6,display:"ALWAYS",textAlign:"center",iconPath:null}},{id:2,latitude:i[u-1].latitude,longitude:i[u-1].longitude,width:"28",heigth:"8",callout:{content:r.data.endAddress+" 下车点",color:"#ff8d1a",fontSize:11,borderWidth:0,borderRadius:10,borderColor:"#ff8d1a",bgColor:"#fff",padding:6,display:"ALWAYS",textAlign:"center"}}],console.log("mapPoints",o),r.mapCtx.includePoints({points:o,padding:[100,50,50,50]})}var p=t.data.seatPrice.toFixed(0),f=t.data.carPrice.toFixed(0);console.log("seatPriceYuan",a.util.fixedPrice(p)),console.log("carPriceYuan",a.util.fixedPrice(f)),r.setData({distanceKM:n,durationString:s,seatPrice:p,seatPriceYuan:a.util.fixedPrice(p),carPrice:f,carPriceYuan:a.util.fixedPrice(f),markers:o,polyline:[{points:i,color:"#39b54a",width:5}]}),r.calcPrice()}else a.util.showMsg(t.message||"获取导航路行失败")})).catch((function(t){console.log("获取地图导航轨迹 err",t),a.util.showMsg(t.message||"获取导航路行失败")}));case 5:case"end":return t.stop()}}),e)})))()},switchTripType:function(t){var e=t.currentTarget.dataset.type,i=this.data.ticketnum;if(1==e)this.calcIsOnlyCar(!0)?e=2:i=1;else if(2==e){if(this.data.selectedIntervalObj.residue<this.carMaxNumber)return void a.util.showMsg("当前时间只能拼座，请选择其他时间");i=this.carMaxNumber,this.isAlreadyNotice||(a.util.showMsg("选择专车，自动为您保留".concat(this.carMaxNumber,"个座位")),this.isAlreadyNotice=!0)}this.setData({tripType:e,ticketnum:i}),this.resetCoupon(),this.calcPrice()},showTargetModal:function(t){this.setData({bottomModalName:t.currentTarget.dataset.target})},showOrderRuleModal:function(t){this.setData({isShowOrderRuleModal:!0})},tryGotoSelectCoupon:function(){if(1==this.data.selectedIntervalObj.use_coupon)if(1==this.data.tripType&&this.data.selectedIntervalObj.ticket_price_fen<0)a.util.showMsg("一口价不支持使用优惠券");else{this.isGoSelectCoupon=!0;var t="/package/user_center/pages/coupon_list/coupon_list?originalPriceFen="+this.data.originalPriceFen+"&couponId="+this.data.coupon_obj.couponId;this.checkTel(t,1,0)}else a.util.showMsg("当前时间不支持使用优惠券")},checkTel:function(t,e,a){var i=o();console.log("pt_tel",i);var r=t;e&&!i&&(r="/package/pt_login/pages/pt_login2/pt_login2?returnUrl="+(t=encodeURIComponent(t))+"&isNeedTel="+e+"&isNeedAvatar=0"),wx.navigateTo({url:r})},hideIntervalModal:function(){this.data.selectedIntervalID?this.setData({bottomModalName:null}):a.util.showMsg("请选择出发时间")},hideBottomModal:function(t){t.currentTarget.dataset.dialog||this.setData({bottomModalName:null})},hideOrderRuleModal:function(t){t.currentTarget.dataset.dialog||this.setData({isShowOrderRuleModal:!1})},queryTripInstInfo:function(t){var e=this,i={action:"order.beforeFillorder",intervalId:e.data.selectedIntervalObj.IntervalID,addressId:e.data.selectedIntervalObj.AddressID,getOffAddressId:e.data.selectedIntervalObj.getOffAddressID};a.network.request("/api/wg.do",i,(function(t){if(wx.hideNavigationBarLoading(),t.success){var i=!1,r=t.data.wxOrderRuleRes;r&&(delete t.data.wxOrderRuleRes,i=!!r.popup),e.setData({wxOrderRuleRes:r,isShowOrderRuleModal:i,firshShowOrderRule:!1})}else a.util.showMsg(t.message)}),(function(){}),(function(){}))},minus:function(){var t=this.data.ticketnum;if(!(t<=1)){t-=1;var e=this.data.tripType;t<this.carMaxNumber?e=this.calcIsOnlyCar(!1)?2:1:t==this.carMaxNumber?(e=2,this.isAlreadyNotice||(a.util.showMsg("选择4个座位,自动为您选择专车"),this.isAlreadyNotice=!0)):t>this.carMaxNumber&&(e=2),this.setData({ticketnum:t,tripType:e}),this.calcPrice()}},plus:function(){var t=this.data.ticketnum;if(!(t>=this.carMaxNumber)){t+=1;var e=this.data.tripType;t<this.carMaxNumber?e=this.calcIsOnlyCar(!1)?2:1:t==this.carMaxNumber?(e=2,this.isAlreadyNotice||(a.util.showMsg("选择4个座位,自动为您选择专车"),this.isAlreadyNotice=!0)):t>this.carMaxNumber&&(e=2),this.setData({ticketnum:t,tripType:e}),this.calcPrice()}},selecetThanksFee:function(t){this.setData({thanksFeeYuan:t.currentTarget.dataset.target,showOtherFee:!1,bottomModalName:null}),this.calcPrice()},showOtherFeeBtn:function(){this.setData({thanksFeeYuan:0,showOtherFee:!0}),this.calcPrice()},bindFeeInput:function(t){console.log("e",t),this.setData({thanksFeeYuan:+t.detail.value}),this.calcPrice()},hideThanksFeeModal:function(t){t.currentTarget.dataset.dialog||this.setData({bottomModalName:null,showOtherFee:!1})},bindInputTel:function(t){this.setData({tel:a.util.positiveInteger(t.detail.value)})},bindInputName:function(t){this.setData({userName:t.detail.value})},hidePassangerModal:function(t){if(!t.currentTarget.dataset.dialog){var e=this.data.tel;if(e){if(!a.util.isPhoneNum(e))return void a.util.showMsg("请输入正确的11位手机号码");wx.setStorage({key:"tel",data:e})}this.setData({bottomModalName:null})}},selectRemarkBtn:function(t){var e=t.currentTarget.dataset.value,a=t.currentTarget.dataset.index,i=this.data.remarkList,r=this.data.remarkSelectedArr;if(t.currentTarget.dataset.selected){i[a].selected=!1;for(var o=0;o<r.length;o++)if(r[o]==e){r.splice(o,1);break}}else i[a].selected=!0,r.push(e);var n="";r.length>0&&(n=r.join("，")),this.setData({remarkList:i,remarks:n,remarkSelectedArr:r})},inputRemark:function(t){this.setData({remarks:t.detail.value})},calcResidueStatus:function(t,e,a){if(1!=t){return{0:"已停售",2:"已发车",3:"即将发车",10:"已售罄"}[t]}return e<1?"已售罄":e<this.carMaxNumber?"仅可拼座":""},process_area:function(t,e){for(var a=t.length,i=[],r=0;r<a;r++){for(var o=t[r].length,n=[],s=0;s<o;s++){var l={};l.latitude=+t[r][s].lat,l.longitude=+t[r][s].lng,n.push(l)}var d={points:n,strokeWidth:2,width:2};0==e?(d.fillColor="#FF450010",d.strokeColor="#FF000060",d.zIndex=3):(d.fillColor="#B2EECE60",d.strokeColor="#228B2270",d.zIndex=2),i.push(d)}return i},queryIntervalListByLonLat:function(){var i=this;return e(t().mark((function e(){var r,o,n,l,d,c,u,h;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o={action:"interval.queryLonLatListV2",byAdCode:(r=i).data.byAdCode,tripDate:r.data.tripDate,startStopLongitude:r.data.startLongitude,startStopLatitude:r.data.startLatitude,offLongitude:r.data.endLongitude,offLatitude:r.data.endLatitude,start:200*s,limit:200},n=r.data.isRefresh?[]:r.data.intervalList,l=[],d=0,c=!0,u=!0,h="加载中",t.next=10,a.network.requestPOST(o).then((function(t){if(console.log("pro",t),t.success&&a.util.isNotNull(t.data)){n=n.concat(t.data.intervalList),d=+t.totalCount,200*s+200>=+t.totalCount&&(h="全部加载完成");for(var e=t.data.intervalList.length,i=0;i<e;i++){t.data.intervalList[i].residueName=r.calcResidueStatus(t.data.intervalList[i].Condition,t.data.intervalList[i].residue,t.data.intervalList[i].countRen);var o=t.data.intervalList[i].ticket_price_fen;o<0&&(t.data.intervalList[i].oncePriceYuan=a.util.fixedPrice(-o)),t.data.intervalList[i].residue<=0&&(t.data.intervalList[i].status=10)}a.util.isNotNull(t.data.areaInfo)&&(a.util.isNotNull(t.data.areaInfo.optionalAreaRange)&&(l=l.concat(r.process_area(t.data.areaInfo.optionalAreaRange,!0))),c=t.data.areaInfo.isInPolygon||!1),a.util.isNotNull(t.data.areaInfo2)&&(a.util.isNotNull(t.data.areaInfo2.optionalAreaRange)&&(l=l.concat(r.process_area(t.data.areaInfo2.optionalAreaRange,!0))),u=t.data.areaInfo2.isInPolygon||!1)}else t.success&&(h="没有出发时间数据",a.util.showMsg(h))})).catch((function(t){h=t.message||"获取时间失败",a.util.showMsg(h)}));case 10:r.setData({intervalList:n,totalCount:d,intervalTriggered:!1,loadIntervalTips:h,polygons:l,isInPolygon:c,isInPolygon2:u});case 11:case"end":return t.stop()}}),e)})))()},bindRefresh:function(){var a=this;return e(t().mark((function e(){var i;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=0,(i=a).setData({isRefresh:!0,loadIntervalTips:""}),i.queryIntervalListByLonLat();case 4:case"end":return t.stop()}}),e)})))()},bindDownLoad:function(){var t=this.data.loadIntervalTips;200*s+200>=this.data.totalCount?t="全部加载完成":(s++,t="上拉加载更多",this.queryIntervalListByLonLat()),this.setData({loadIntervalTips:t})},selectIntervalBtn:function(){var i=this;return e(t().mark((function e(){var r;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=0,(r=i).setData({tripDate:a.util.addDate(r.data.tripDateKey),isRefresh:!0,loadIntervalTips:"加载中"}),t.next=5,r.queryIntervalListByLonLat();case 5:r.setData({bottomModalName:"intervalListModal"});case 6:case"end":return t.stop()}}),e)})))()},selectTripDate:function(t){var e=t.currentTarget.dataset.value;s=0,this.setData({tripDate:a.util.addDate(e),tripDateKey:e,isRefresh:!0,loadIntervalTips:"加载中",selectedIntervalObj:{},selectedIntervalID:"",selectedIntervalStation:""}),this.queryIntervalListByLonLat(),this.calcPrice()},handleSelectInterval:function(t){console.log(t);var e=t.currentTarget.dataset.item;if(e.residue<1||1!=e.Condition)a.util.showMsg("".concat(e.residueName));else{var i=this.data.tripType,r=this.data.ticketnum;if(2==i&&e.residue<this.carMaxNumber)a.util.showMsg("当前时间只能选择拼座");else{if(this.calcIsOnlyCar(!1,e.Station)){if(e.residue<this.carMaxNumber)return void a.util.showMsg("当前时间已约满，请选择其他时间");i=2,r=this.carMaxNumber}this.setData({selectedIntervalID:e.IntervalID,selectedIntervalStation:e.Station,selectedIntervalObj:e,tripType:i,ticketnum:r,bottomModalName:null}),this.resetCoupon(),this.calcPrice(),this.data.firshShowOrderRule&&this.queryTripInstInfo()}}},tbd:function(){a.util.showMsg("开发中")},getPhoneNumberBtn:function(i){var o=this;return e(t().mark((function e(){var n,s,l;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o,t.next=3,r(i);case 3:s=t.sent,console.log("111 res",s),1==s.resultCode&&(l=n.data.tel,a.util.isPhoneNum(l)||(l=s.data.tel),n.setData({tel:l,pt_tel:s.data.tel}),n.fillOrderBtn());case 6:case"end":return t.stop()}}),e)})))()},handleAgreePrivacyAuthorization:function(t){console.log("handleAgreePrivacyAuthorization",t)},calcPrice:function(){var t,e=this.data.tripType,i=+this.data.ticketnum,r=0,o=this.data.selectedIntervalObj.ticket_price_fen,n=this.data.selectedIntervalObj.ticket_price_fen||0,s=0;if(1==e&&o>=0){var l=+this.data.seatPrice;l<n&&(l=n,console.log("拼座的里程价小于班次票价/最低票价，用班次票价/最低票价")),s=(r=l*i)-n*i}else if(1==e&&o<0){r=+this.data.seatPrice*i,s=-2*o*i,console.log("拼座，一口价，设置的班次票价分：",o,"submitSeatPriceFen:",s)}else if(2==e){var d=+this.data.carPrice;d<n&&(d=n,console.log("专车的里程价小于班次票价/最低票价，用班次票价/最低票价")),r=d,s=d-n*(this.calcIsOnlyCar(!1)?4:i)}t=r,console.log("originalPriceFen",t),console.log("tickeTotaltPriceFen",r),(r-=new Number(this.data.coupon_obj.couponFen))<=0&&(r=1),console.log("tickeTotaltPriceFen",r);var c=100*+this.data.thanksFeeYuan;s+=c;var u=+r+c;console.log("totalPriceFen",u);var h=this.data.selectedIntervalObj;h.oncePriceYuanShow=a.util.fixedPrice(h.oncePriceYuan*i*100),this.setData({originalPriceFen:t,originalPriceYuan:a.util.fixedPrice(t),couponYuan:a.util.fixedPrice(this.data.coupon_obj.couponFen),tickeTotaltPriceYuan:a.util.fixedPrice(r),totalPriceFen:u,totalPriceYuan:a.util.fixedPrice(u),submitSeatPriceFen:s,selectedIntervalObj:h})},resetCoupon:function(){this.setData({coupon_obj:{couponId:"",couponName:"选择优惠券",coupon:0,couponFen:0}})},fillOrderBtn:function(){var t="submitOrderModal";this.data.tel?a.util.isNull(this.data.selectedIntervalID)&&(t="intervalListModal"):t="changePassangerModal",this.setData({bottomModalName:t})},handleFillOrder:function(){var t=this;if(a.util.isNull(a.globalData.openid))return a.doLogin(),void wx.showModal({title:"提示",content:"正在登录中，请稍后再试",showCancel:!1});var e=t.data.selectedIntervalObj,i=t.data.ticketnum,r="拼座 ";1==t.data.tripType&&(r="拼座 ",e.ticket_price_fen<0&&(r="拼座 一口价 ")),2==t.data.tripType&&(i=t.carMaxNumber,r="专车 "),t.data.thanksFeeYuan>0&&(r="".concat(r,"，含感谢费：").concat(t.data.thanksFeeYuan," 元 "));var o={action:"ticket.fillorder",corpID:a.globalData.corp.ID,lineID:e.Line,ticketnum:i,child_num:0,takeDate:e.take_date,account:t.data.pt_tel,openid:a.globalData.openid,sub_appid:a.globalData.corp.appid,tel:t.data.tel||t.data.pt_tel,passenger_id_cards:"",operator:a.globalData.corp.account,activityid:t.data.coupon_obj.couponId,intervalID:e.IntervalID,addressId:e.AddressID,addressName:t.data.startAddress,getOffAddressId:e.getOffAddressID,getOffAddressName:t.data.endAddress,from:"xcxCar",seat:"",orderLocationId:"",seatPrice:t.data.submitSeatPriceFen,userName:t.data.userName,pay_mode:1,useBalance:0,isChange:"0",changeOldID:"",cheap_flag:0,location_name:"",remarks:t.data.remarks,remarks2:r,customerTime:"",busId:"",sourceid:a.globalData.sourceid||"",begin_lat_lng:t.data.startLatitude+","+t.data.startLongitude,end_lat_lng:t.data.endLatitude+","+t.data.endLongitude};a.network.requestLoading("/api/wg.do",o,"正在提交...",(function(e){if(console.log("fill order 成功回调",e.data),e.success){if(t.setData({orderid:e.data.orderid}),t.data.seatPrice<=0)return void t.subMsgAndGo("order",1,e.data.orderid);t.wxPay(),a.util.isNotNull(a.globalData.sourceid)&&(a.globalData.sourceid="")}else e.data.payingCount>0?wx.showModal({title:"存在".concat(e.data.payingCount,"笔待支付的订单"),content:e.message||"请先支付或取消",confirmText:"去查看",showCancel:!1,success:function(t){t.confirm&&wx.navigateTo({url:"/package/user_center/pages/orderList/orderList?key=paying"})}}):wx.showModal({title:"提交失败",content:e.message,showCancel:!1}),t.setData({modalName:null})}))},wxPay:function(){var t=this,e={action:"order.getPayPamer",orderid:t.data.orderid,corpID:a.globalData.corp.ID,subAppid:a.globalData.corp.appid,openid:a.globalData.openid};a.network.requestLoading("/api/wg.do",e,"正在提交...",(function(e){console.log(e.data),e.success?wx.requestPayment({timeStamp:e.data.timeStamp,nonceStr:e.data.nonceStr,package:e.data.packageValue,signType:e.data.signType,paySign:e.data.paySign,success:function(e){wx.showToast({title:"支付成功",icon:"success",duration:2e3}),t.subMsgAndGo("order",1,t.data.orderid)},fail:function(e){console.log("支付失败",e);var a=e.errMsg.indexOf("cancel")?"已取消支付":e.errMsg;wx.showModal({title:"支付失败",content:a,confirmText:"知道了",showCancel:!1,success:function(e){e.confirm&&t.goOrderResultPage(0)}})},complete:function(){console.log("pay complete")}}):wx.showModal({title:"支付失败",content:e.message,showCancel:!1})}))},subMsgAndGo:function(a,i){var r=this;return e(t().mark((function e(){var o,s;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r,t.next=3,n(o.data.orderid,a);case 3:s=t.sent,console.log("下单订阅消息是否发送成功：",s),o.goOrderResultPage(i);case 6:case"end":return t.stop()}}),e)})))()},goOrderResultPage:function(t,e){var i="".concat(a.config.pagesUrl.order_result_url,"?status=").concat(t,"&pay_mode=1&orderid=").concat(this.data.orderid);wx.navigateTo({url:i,success:function(){}})},onLoad:function(t){var e=this,i=e.data.byAdCode;["ddcx"].includes(a.globalData.corp.ID)?i="0":["dlcx"].includes(a.globalData.corp.ID)&&(i="1"),e.setData({startAddress:t.startAddress,startLongitude:t.startLongitude,startLatitude:t.startLatitude,endAddress:t.endAddress,endLongitude:t.endLongitude,endLatitude:t.endLatitude,tripDate:a.util.addDate(0),orderid:"",isInPolygon:!0,isInPolygon2:!0,byAdCode:i}),e.mapCtx=wx.createMapContext("map"),a.doLogin((function(){e.getMapPolyline(),e.selectIntervalBtn()}));var r=wx.getStorageSync("tel"),n=o(),s=e.data.tel,l=e.data.pt_tel;a.util.isNotNull(n)&&(l=n),a.util.isNotNull(r)&&(s=r),e.setData({tel:s,pt_tel:l})},onReady:function(){},onShow:function(){if(this.isGoSelectCoupon){this.isGoSelectCoupon=!1;var t=wx.getStorageSync(a.globalData.corp.appid+"_coupon_obj");console.log("coupon_obj",t),t&&(this.setData({coupon_obj:t}),this.calcPrice(),wx.removeStorageSync(a.globalData.corp.appid+"_coupon_obj"))}},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:a.globalData.shareData.title,path:a.globalData.corpXcx.tabBarHome}}});
},{isPage:false,isComponent:true,currentFile:'package/intervalCar1/pages/interval/interval.js'});require("package/intervalCar1/pages/interval/interval.js");