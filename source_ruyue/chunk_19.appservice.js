$gwx_XC_11=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_11 || [];
function gz$gwx_XC_11_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'flex ^external-page-header '],[[7],[3,'containerClass']]])
Z([[2,'>'],[[6],[[7],[3,'ticket_data']],[3,'length']],[1,1]])
Z([[7],[3,'showMoreDateBtn']])
Z([[2,'=='],[[6],[[7],[3,'ticket_data']],[3,'length']],[1,1]])
Z([3,'hideModal'])
Z([a,[3,'calendar-modal bottom-modal '],[[2,'?:'],[[2,'=='],[[7],[3,'modalName']],[1,'calendarModal']],[1,'show'],[1,'hide']]])
Z([3,'modal'])
Z(z[4])
Z([3,'calendar-dialog width-100-pc'])
Z([3,'dialog'])
Z([3,'outerIdx'])
Z([[7],[3,'fullCalendar']])
Z([3,'index'])
Z([3,'innerIdx'])
Z([3,'innerItem'])
Z([[6],[[7],[3,'item']],[3,'month_data']])
Z(z[13])
Z([3,'calendarClick'])
Z([a,[3,'position-relative every-day '],[[2,'?:'],[[2,'=='],[[7],[3,'tripDate']],[[6],[[7],[3,'innerItem']],[3,'date_full']]],[1,'trip-day'],[1,'']],[3,' '],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'innerItem']],[3,'state']],[1,'1']],[1,'selectable-day'],[1,'']],[3,' '],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'innerItem']],[3,'state']],[1,'0']],[1,'future-day'],[1,'']],[3,' '],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'innerItem']],[3,'holiday']],[1,1]],[1,'holiday'],[1,'']],[3,' '],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'innerItem']],[3,'holiday']],[1,2]],[1,'workday'],[1,'']]])
Z([[6],[[7],[3,'innerItem']],[3,'date_full']])
Z([3,'calendar'])
Z([[6],[[7],[3,'innerItem']],[3,'state']])
Z([[6],[[7],[3,'innerItem']],[3,'week_day']])
Z([[2,'>'],[[6],[[7],[3,'innerItem']],[3,'min_price']],[1,0]])
Z([[2,'>='],[[6],[[7],[3,'innerItem']],[3,'state']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_11=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_11=true;
var x=['./pages/components/calendar_swiper/calendar_swiper.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_11_1()
var lEG=_n('view')
_rz(z,lEG,'class',0,e,s,gg)
var aFG=_v()
_(lEG,aFG)
if(_oz(z,1,e,s,gg)){aFG.wxVkey=1
var tGG=_v()
_(aFG,tGG)
if(_oz(z,2,e,s,gg)){tGG.wxVkey=1
}
tGG.wxXCkey=1
}
else if(_oz(z,3,e,s,gg)){aFG.wxVkey=2
}
aFG.wxXCkey=1
_(r,lEG)
var eHG=_mz(z,'view',['catchtap',4,'class',1,'data-target',2],[],e,s,gg)
var bIG=_mz(z,'view',['catchtap',7,'class',1,'data-target',2],[],e,s,gg)
var oJG=_v()
_(bIG,oJG)
var xKG=function(fMG,oLG,cNG,gg){
var oPG=_v()
_(cNG,oPG)
var cQG=function(lSG,oRG,aTG,gg){
var eVG=_mz(z,'view',['bindtap',17,'class',1,'data-date_full',2,'data-from',3,'data-state',4,'data-week_day',5],[],lSG,oRG,gg)
var bWG=_v()
_(eVG,bWG)
if(_oz(z,23,lSG,oRG,gg)){bWG.wxVkey=1
}
var oXG=_v()
_(eVG,oXG)
if(_oz(z,24,lSG,oRG,gg)){oXG.wxVkey=1
}
bWG.wxXCkey=1
oXG.wxXCkey=1
_(aTG,eVG)
return aTG
}
oPG.wxXCkey=2
_2z(z,15,cQG,fMG,oLG,gg,oPG,'innerItem','innerIdx','innerIdx')
return cNG
}
oJG.wxXCkey=2
_2z(z,11,xKG,e,s,gg,oJG,'item','outerIdx','index')
_(eHG,bIG)
_(r,eHG)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_11";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_11();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/components/calendar_swiper/calendar_swiper.wxml'] = [$gwx_XC_11, './pages/components/calendar_swiper/calendar_swiper.wxml'];else __wxAppCode__['pages/components/calendar_swiper/calendar_swiper.wxml'] = $gwx_XC_11( './pages/components/calendar_swiper/calendar_swiper.wxml' );
	;__wxRoute = "pages/components/calendar_swiper/calendar_swiper";__wxRouteBegin = true;__wxAppCurrentFile__="pages/components/calendar_swiper/calendar_swiper.js";define("pages/components/calendar_swiper/calendar_swiper.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp();Component({properties:{tripDate:{},startCityId:{},endCityId:{},isRefreshBoo:{type:Boolean,value:!1,observer:function(t,a,e){t!==a&&this.getCalendarV2()}},containerClass:{type:String,value:"swiper-page-header"}},data:{current_index:0,display_multiple:0,ticket_data:[],showMoreDateBtn:!1,calendarReady:!1},lifetimes:{attached:function(){},detached:function(){}},methods:{formatDateUseRailV2:function(t){return t.substring(5,10).replace(/[-]/g,"/")},getCalendarV2:function(){var a=this,e={action:"date.calendar",corpID:t.globalData.corp.ID,startCityId:a.data.startCityId,endCityId:a.data.endCityId};t.network.requestLoading("/api/wg.do",e,"加载中...",(function(e){if(console.log(e),e.success&&e.data){var r=e.data,n=[],l=0,d=a.data.tripDate;if(r.length)for(var i=r.length,s=0;s<i;s++)for(var o=r[s].month_data,c=o.length,u=0;u<c;u++)o[u].date,o[u].date=a.formatDateUseRailV2(o[u].date_full),"1"!=o[u].state&&"2"!=o[u].state||n.push(o[u]),o[u].date_full==d&&(l=n.length+1);var f=!0,g=n.length;n.length>6?g=6:n.length<=6&&(f=!1),l=a.calcIndexV2(a.data.tripDate,n),t.util.isNull(d)&&n.length&&(d=n[l].date_full),a.setData({ticket_data:n,current_index:l,display_multiple:g,fullCalendar:r,showMoreDateBtn:f,calendarReady:!0})}else t.util.showMsg(e.message)}))},calendarClick:function(a){if(0!=this.data.calendarReady){if(a.currentTarget.dataset.date_full){var e=a.currentTarget.dataset.state,r=a.currentTarget.dataset.from;if("swiper"==r&&("1"==e||"2"==e)||"calendar"==r&&"1"==e){var n=a.currentTarget.dataset.date_full;console.log(n);var l=this.calcIndexV2(n);this.setData({tripDate:n,current_index:l,modalName:null});var d={tripDate:n};this.triggerEvent("parentEvent",d,{})}else if("0"==e||"-1"==e)return void t.util.showMsg("不在预订范围！")}}else t.util.showMsg("加载中..")},showCalendarBtn:function(){this.setData({modalName:"calendarModal"})},hideModal:function(t){"modal"==t.currentTarget.dataset.target&&this.setData({modalName:null})},calcIndexV2:function(t,a){var e=a||this.data.ticket_data,r=e.length,n=0;if(!r||r<7)return 0;for(var l=0;l<r;l++)if(e[l].date_full==t){n=l;break}return n>2?n-=2:n<=2&&(n=0),n+5>=r&&(n=r-6),n}}});
},{isPage:false,isComponent:true,currentFile:'pages/components/calendar_swiper/calendar_swiper.js'});require("pages/components/calendar_swiper/calendar_swiper.js");