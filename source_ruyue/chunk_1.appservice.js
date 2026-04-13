$gwx_XC_1=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_1 || [];
function gz$gwx_XC_1_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'globalStyle']])
Z([a,[3,'flex calendar-container position-'],[[7],[3,'positionClass']],[3,' bg-'],[[7],[3,'containerBg']],[3,' '],[[2,'?:'],[[2,'=='],[[7],[3,'containerBg']],[1,'white']],[1,'text-black'],[1,'color_000']]])
Z([[2,'=='],[[7],[3,'calendarType']],[1,1]])
Z([[2,'>'],[[6],[[7],[3,'ticket_data']],[3,'length']],[1,1]])
Z([[7],[3,'showMoreDateBtn']])
Z([[2,'=='],[[6],[[7],[3,'ticket_data']],[3,'length']],[1,1]])
Z([[2,'=='],[[7],[3,'calendarType']],[1,2]])
Z([3,'hideModal'])
Z([a,[3,'calendar-modal bottom-modal '],[[2,'?:'],[[2,'=='],[[7],[3,'modalName']],[1,'calendarModal']],[1,'show'],[1,'']]])
Z([3,'modal'])
Z([[7],[3,'customBar']])
Z(z[7])
Z([3,'calendar-dialog width-100-pc'])
Z([3,'dialog'])
Z([3,'outerIdx'])
Z([[7],[3,'fullCalendar']])
Z([3,'index'])
Z([3,'weekIdx'])
Z([3,'weekItem'])
Z([[6],[[7],[3,'item']],[3,'month_data']])
Z(z[17])
Z([3,'innerIdx'])
Z([3,'innerItem'])
Z([[6],[[7],[3,'weekItem']],[3,'week']])
Z(z[21])
Z([3,'calendarClick'])
Z([a,[3,'position-relative every-day '],[[2,'?:'],[[2,'!=='],[[7],[3,'tripDate']],[[6],[[7],[3,'innerItem']],[3,'formatName']]],[1,''],[1,'trip-day bg']],[3,'-'],[[7],[3,'primary']],z[1][5],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'innerItem']],[3,'state']],[1,'1']],[1,'selectable-day'],[1,'']],z[1][5],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'innerItem']],[3,'state']],[1,'0']],[1,'future-day'],[1,'']],z[1][5],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'innerItem']],[3,'holiday']],[1,1]],[1,'holiday'],[1,'']],z[1][5],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'innerItem']],[3,'holiday']],[1,2]],[1,'workday'],[1,'']]])
Z([[6],[[7],[3,'innerItem']],[3,'formatName']])
Z([3,'calendar'])
Z([[6],[[7],[3,'innerItem']],[3,'state']])
Z([[6],[[7],[3,'innerItem']],[3,'weekDay']])
Z([[2,'&&'],[[2,'>'],[[6],[[7],[3,'innerItem']],[3,'minPriceFen']],[1,0]],[[7],[3,'isShowPrice']]])
Z([[2,'>='],[[6],[[7],[3,'innerItem']],[3,'state']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_1=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_1=true;
var x=['./components/calendarSwiper/calendarSwiper.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_1_1()
var oJ=_n('view')
_rz(z,oJ,'class',0,e,s,gg)
var lK=_n('view')
_rz(z,lK,'class',1,e,s,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,2,e,s,gg)){aL.wxVkey=1
var eN=_v()
_(aL,eN)
if(_oz(z,3,e,s,gg)){eN.wxVkey=1
var bO=_v()
_(eN,bO)
if(_oz(z,4,e,s,gg)){bO.wxVkey=1
}
bO.wxXCkey=1
}
else if(_oz(z,5,e,s,gg)){eN.wxVkey=2
}
else{eN.wxVkey=3
}
eN.wxXCkey=1
}
var tM=_v()
_(lK,tM)
if(_oz(z,6,e,s,gg)){tM.wxVkey=1
}
aL.wxXCkey=1
tM.wxXCkey=1
_(oJ,lK)
var oP=_mz(z,'view',['catchtap',7,'class',1,'data-target',2],[],e,s,gg)
var xQ=_v()
_(oP,xQ)
if(_oz(z,10,e,s,gg)){xQ.wxVkey=1
}
var oR=_mz(z,'view',['catchtap',11,'class',1,'data-target',2],[],e,s,gg)
var fS=_v()
_(oR,fS)
var cT=function(oV,hU,cW,gg){
var lY=_v()
_(cW,lY)
var aZ=function(e2,t1,b3,gg){
var x5=_v()
_(b3,x5)
var o6=function(c8,f7,h9,gg){
var cAB=_mz(z,'view',['bindtap',25,'class',1,'data-format-Name',2,'data-from',3,'data-state',4,'data-week-Day',5],[],c8,f7,gg)
var oBB=_v()
_(cAB,oBB)
if(_oz(z,31,c8,f7,gg)){oBB.wxVkey=1
}
var lCB=_v()
_(cAB,lCB)
if(_oz(z,32,c8,f7,gg)){lCB.wxVkey=1
}
oBB.wxXCkey=1
lCB.wxXCkey=1
_(h9,cAB)
return h9
}
x5.wxXCkey=2
_2z(z,23,o6,e2,t1,gg,x5,'innerItem','innerIdx','innerIdx')
return b3
}
lY.wxXCkey=2
_2z(z,19,aZ,oV,hU,gg,lY,'weekItem','weekIdx','weekIdx')
return cW
}
fS.wxXCkey=2
_2z(z,15,cT,e,s,gg,fS,'item','outerIdx','index')
_(oP,oR)
xQ.wxXCkey=1
_(oJ,oP)
_(r,oJ)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_1";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_1();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/calendarSwiper/calendarSwiper.wxml'] = [$gwx_XC_1, './components/calendarSwiper/calendarSwiper.wxml'];else __wxAppCode__['components/calendarSwiper/calendarSwiper.wxml'] = $gwx_XC_1( './components/calendarSwiper/calendarSwiper.wxml' );
	;__wxRoute = "components/calendarSwiper/calendarSwiper";__wxRouteBegin = true;__wxAppCurrentFile__="components/calendarSwiper/calendarSwiper.js";define("components/calendarSwiper/calendarSwiper.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t,a=require("../../@babel/runtime/helpers/regeneratorRuntime"),e=require("../../@babel/runtime/helpers/objectSpread2"),r=require("../../@babel/runtime/helpers/asyncToGenerator"),n=(t=require("../../BDCE09629105A88CDBA86165CEA3FB65.js"))&&t.__esModule?t:{default:t};var i=getApp();Component({properties:{tripDate:{},startCityId:{},endCityId:{},startAdCode:{value:""},endAdCode:{value:""},isShowPrice:{value:!0},isRefreshBoo:{type:Boolean,value:!1,observer:function(t,a,e){t!==a&&this.getCalendarV2()}},positionClass:{type:String,value:"relative"},containerBg:{type:String,value:"white"},calendarType:{type:String,value:"1"}},data:{primary:i.globalData.corpXcx.primary,customBar:i.globalData.systemInfo.CustomBar,globalStyle:i.globalData.corpXcx.globalStyle,current_index:0,display_multiple:0,ticket_data:[],showMoreDateBtn:!1,calendarReady:!1,showDate:"",fullCalendar:[],modalName:""},lifetimes:{ready:function(){try{var t=wx.getSystemInfoSync(),a=i.globalData.systemInfo.CustomBar;t.screenHeight==t.windowHeight||t.screenHeight>t.windowHeight&&(a=0),console.log("customBar",a),this.setData({customBar:a,showDate:i.util.formatDate(this.data.tripDate)})}catch(t){console.log(t)}}},methods:{formatDateUseRailV2:function(t){return t.substring(5,10).replace(/[-]/g,"/")},getCalendarV2:function(t){var l=this;return r(a().mark((function r(){var o,s,d,c,u;return a().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(o=l,s=wx.getStorageSync(i.globalData.corp.appid+"_fullCalendar"),d=i.util.formatShortTime(new Date).split("-"),"",!i.util.isNotNull(s)){a.next=10;break}if(c=d[0]+"年"+d[1]+"月",s[0].month_title!=c){a.next=10;break}return o.setData({fullCalendar:s}),o.getCalendarDynamic(t),a.abrupt("return");case 10:return u={corpID:i.globalData.corp.ID,month:d[0]+"-"+d[1]},a.next=13,n.default.calendarStandard(e(e({},u),{},{loadingMsg:"加载中..."}));case 13:s=a.sent,o.setData({fullCalendar:s}),o.getCalendarDynamic(t);case 16:case"end":return a.stop()}}),r)})))()},getCalendarDynamic:function(t){var e=this;return r(a().mark((function r(){var l,o,s;return a().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o="calendarDynamic",s={startCityId:(l=e).data.startCityId,endCityId:l.data.endCityId,corpid:i.globalData.corp.ID},i.util.isNotNull(l.data.startAdCode)&&i.util.isNotNull(l.data.endAdCode)&&(o="calendarDynamicDivision",s={startAdCode:l.data.startAdCode,endAdCode:l.data.endAdCode,corpid:i.globalData.corp.ID,appid:i.globalData.corp.appid,lineType:""}),a.next=6,n.default[o](s).then((function(a){if(a.success&&a.data){var e,r,n=!0,o=l.data.tripDate,s=l.data.fullCalendar,d=a.data.dayList;s.forEach((function(t){t.month_data.forEach((function(t){t.week.forEach((function(t){if(t){var a=d.find((function(a){return a.formatName===t.formatName}));a&&("今天"!=a.weekDay&&"明天"!=a.weekDay||(t.name=a.weekDay),t.minPriceFen=a.minPriceFen,t.minPrice=i.util.fixedPrice(a.minPriceFen),t.state=a.state,t.weekDay=a.weekDay)}}))}))})),e=d.filter((function(t){return t.date=l.formatDateUseRailV2(t.formatName),"1"==t.state||"2"==t.state})),t&&t(e);var c=e.length;e.length>6?c=6:e.length<=6&&(n=!1),r=l.calcIndexV2(l.data.tripDate,e),1==e.length&&(o=e[0].formatName),i.util.isNull(o)&&e.length&&(o=e[r].formatName),l.setData({ticket_data:e,current_index:r,display_multiple:c,fullCalendar:s,showMoreDateBtn:n,calendarReady:!0})}else i.util.showMsg(a.message||"获取日历数据失败")})).catch((function(t){console.log("error",t),i.util.showMsg(t.message||"请求异常")}));case 6:case"end":return a.stop()}}),r)})))()},prevDate:function(){var t=i.util.addDaysByDate(-1,this.data.tripDate);this.setData({tripDate:t,showDate:i.util.formatDate(t)});var a=this.findHasIntervalDate(),r=e({tripDate:t},a);this.triggerEvent("parentEvent",r,{})},nextDate:function(){var t=i.util.addDaysByDate(1,this.data.tripDate);this.setData({tripDate:t,showDate:i.util.formatDate(t)});var a=this.findHasIntervalDate(),r=e({tripDate:t},a);this.triggerEvent("parentEvent",r,{})},calendarClick:function(t){console.log("calendarClick",t);if(0!=this.data.calendarReady){if(t.currentTarget.dataset.formatName){var a=t.currentTarget.dataset.state,r=t.currentTarget.dataset.from;if("swiper"==r&&("1"==a||"2"==a)||"calendar"==r&&"1"==a){var n=t.currentTarget.dataset.formatName;console.log(n);var l=this.calcIndexV2(n);this.setData({tripDate:n,showDate:i.util.formatDate(n),current_index:l,modalName:null});var o=this.findHasIntervalDate(),s=e({tripDate:n},o);this.triggerEvent("parentEvent",s,{})}else if("0"==a||"-1"==a)return void i.util.showMsg("不在预订范围！")}}else i.util.showMsg("加载中，稍后再试")},showCalendarBtn:function(){this.setData({modalName:"calendarModal"})},hideModal:function(t){"modal"==t.currentTarget.dataset.target&&this.setData({modalName:null})},calcIndexV2:function(t,a){var e=a||this.data.ticket_data,r=e.length,n=0;if(!r||r<7)return 0;for(var i=0;i<r;i++)if(e[i].formatName==t){n=i;break}return n>2?n-=2:n<=2&&(n=0),n+5>=r&&(n=r-6),n},findHasIntervalDate:function(t,a){var e={nextIntervalDate:"",nextIntervalFormatDate:"",nextIntervalFormatDay:""};if(t=t||this.data.ticket_data,a=a||this.data.tripDate,!t||!Array.isArray(t)||!t.length)return e;var r=t.find((function(t){return t.formatName>a}));return r=r||t[0],e.nextIntervalDate=r.formatName,e.nextIntervalFormatDate=i.util.formatDate(r.formatName),e.nextIntervalFormatDay=i.util.getWeek(r.formatName),e}}});
},{isPage:false,isComponent:true,currentFile:'components/calendarSwiper/calendarSwiper.js'});require("components/calendarSwiper/calendarSwiper.js");