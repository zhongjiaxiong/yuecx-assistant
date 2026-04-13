$gwx_XC_3=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_3 || [];
function gz$gwx_XC_3_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'realName']])
Z([[7],[3,'wxUserPassengerList']])
Z([3,'id_card'])
Z([[6],[[7],[3,'item']],[3,'selected']])
Z([[2,'!'],[[7],[3,'isHideChildChange']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_3=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_3=true;
var x=['./components/realNamePassenger/realNamePassenger.wxml','/pages/template/interval.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_3_1()
var eFB=e_[x[0]].i
_ai(eFB,x[1],e_,x[0],1,1)
var bGB=_v()
_(r,bGB)
if(_oz(z,0,e,s,gg)){bGB.wxVkey=1
var oHB=_v()
_(bGB,oHB)
var xIB=function(fKB,oJB,cLB,gg){
var oNB=_v()
_(cLB,oNB)
if(_oz(z,3,fKB,oJB,gg)){oNB.wxVkey=1
var cOB=_v()
_(oNB,cOB)
if(_oz(z,4,fKB,oJB,gg)){cOB.wxVkey=1
}
cOB.wxXCkey=1
}
oNB.wxXCkey=1
return cLB
}
oHB.wxXCkey=2
_2z(z,1,xIB,e,s,gg,oHB,'item','index','id_card')
}
bGB.wxXCkey=1
eFB.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_3";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_3();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/realNamePassenger/realNamePassenger.wxml'] = [$gwx_XC_3, './components/realNamePassenger/realNamePassenger.wxml'];else __wxAppCode__['components/realNamePassenger/realNamePassenger.wxml'] = $gwx_XC_3( './components/realNamePassenger/realNamePassenger.wxml' );
	;__wxRoute = "components/realNamePassenger/realNamePassenger";__wxRouteBegin = true;__wxAppCurrentFile__="components/realNamePassenger/realNamePassenger.js";define("components/realNamePassenger/realNamePassenger.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/objectSpread2");require("../../@babel/runtime/helpers/Arrayincludes");var s=require("../../@babel/runtime/helpers/regeneratorRuntime"),a=require("../../@babel/runtime/helpers/asyncToGenerator"),t=getApp();Component({options:{pureDataPattern:/^_is/},properties:{realName:{type:Boolean,value:!1},wxTicketNum:{type:Number,value:1},limitChild:{type:Number,value:0},childAge:{type:[Number,String],value:0}},data:{globalStyle:t.globalData.corpXcx.globalStyle,primary:t.globalData.corpXcx.primary,wxUserPassengerList:[],selectedNum:0,selectedChildNum:0,modalName:null,isLoading:!1,isFirstLoad:!0,_isGoAdd:!1,_isModify:!1,showChildAgeTips:1,passengerSelection:[],display_multiple:0,typeMap:{1:"身份证",2:"护照",3:"回乡证",4:"台胞证",5:"外国人永久居留身份证"},selectedIds:[],triggered:!1,isHideChildChange:!1},lifetimes:{attached:function(){var e=this;if(console.log("realName attached",e.data.realName),e.data.realName){var s=e.data.showChildAgeTips,a=e.data.isHideChildChange;["gybs","zqlb","ycx","lcqckyz","xjbs","xinyue","xlcx"].includes(t.globalData.corp.ID)?s=2:["hzzhcx","hzcx","qycx","xebs","hqky","zyzy","wwcx","xgbs","xgcx","lyxcx"].includes(t.globalData.corp.ID)?(s=0,a=!0):["yybus","yybustest","sxcxbs","xcbus","xhbs","adbus"].includes(t.globalData.corp.ID)&&(s=0),e.setData({showChildAgeTips:s,isHideChildChange:a}),t.doLogin((function(s){e.handleGetPassanger()}))}},ready:function(){if(this.refreshUserList(),this.data.childAge)wx.setStorage({key:t.globalData.corp.appid+"_wxUserPassengerChildAge",data:this.data.childAge,fail:function(e){console.log("save wxUserPassengerChildAge fail",e)}});else{var e=wx.getStorageSync(t.globalData.corp.appid+"_wxUserPassengerChildAge");e&&this.setData({childAge:e})}}},pageLifetimes:{show:function(){var e=this;return a(s().mark((function a(){var r,i,d,n,l,c,o,g,u,h,p,m;return s().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if((r=e).data.realName){s.next=3;break}return s.abrupt("return");case 3:if(r.data.isFirstLoad||r.handleGetPassanger(),console.log("realName _isGoAdd",r.data._isGoAdd),console.log("realName _isModify",r.data._isModify),i=r.data.wxUserPassengerList,!r.data._isModify){s.next=18;break}return s.next=10,r.getPassengerRemote();case 10:d=s.sent,n=d.data.wxUserPassengerList,wx.setStorageSync("wxUserPassengerList",n),console.log("storageList show ",n),l=e.data.selectedIds,c=0,t.util.isNotNull(n)&&n.length&&n.forEach((function(e){1==e.id_type?e.showId=e.id_card.replace(/^(.{3})(?:\d+)(.{3})$/,"$1************$2"):e.showId=e.id_card,l.includes(e.id)&&(e.selected=!0),1==e.isChild&&e.selected&&(0==r.data.limitChild||r.data.limitChild>0&&(c+=1)>r.data.limitChild)&&(e.selected=!1)})),i=n;case 18:if(console.log("wxUserPassengerList 更新后：",i),!r.data._isGoAdd){s.next=31;break}return o=wx.getStorageSync("wxUserPassengerByAdd"),console.log("wxUserPassengerByAdd 获取",o),s.next=24,r.getPassengerRemote();case 24:if(g=s.sent,i=g.data.wxUserPassengerList,wx.setStorageSync("wxUserPassengerList",i),u=r.data.wxTicketNum,h=0,i)for(p=0;p<i.length;p++)1==(m=i[p]).id_type?m.showId=m.id_card.replace(/^(.{3})(?:\d+)(.{3})$/,"$1************$2"):m.showId=m.id_card,r.data.selectedIds.includes(m.id)&&(m.selected=!0,h+=1),h<u&&o&&m.id_card==o.id_card&&(m.selected=!0);wx.removeStorageSync("wxUserPassengerByAdd");case 31:r.setData({wxUserPassengerList:i,modalName:null,_isGoAdd:!1,_isModify:!1}),r.confirmSelectBtn();case 33:case"end":return s.stop()}}),a)})))()}},methods:{calcTypeName:function(e){return{1:"身份证",2:"护照",3:"回乡证",4:"台胞证",5:"外国人永久居留身份证"}[e]||"其他"},getPassengerRemote:function(){var e=this;return a(s().mark((function a(){var r,i;return s().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return e,r={},i=0,wx.showNavigationBarLoading(),s.next=6,t.network.requestPOST({action:"wxUserPassenger.list",subappid:t.globalData.corp.appid}).then((function(e){if(console.log(e),e.success&&t.util.isNotNull(e.data)){i=1;var s=e.data.wxUserPassengerList;wx.setStorage({key:"wxUserPassengerList",data:s,fail:function(e){t.util.showMsg(e)}})}else e.success&&t.util.isNull(e.data)&&(i=2,e.data.wxUserPassengerList=e.data.wxUserPassengerList||[]);e.resultCode=i,r=e})).catch((function(e){e.resultCode=3,e.data=e.data||{},e.data.wxUserPassengerList=[],console.log(e.message||"获取联系人失败"),r=e}));case 6:return wx.hideNavigationBarLoading(),s.abrupt("return",r);case 8:case"end":return s.stop()}}),a)})))()},handleGetPassanger:function(){var e=this;return a(s().mark((function a(){var t,r,i,d,n,l,c;return s().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(t=e,r=wx.getStorageSync("wxUserPassengerList"),console.log("wxUserPassengerList in storage",r),r&&0!=r.length){s.next=11;break}return console.log("填写订单/改签，内存中实名制联系人为空"),t.setData({isLoading:!0,isFirstLoad:!1}),s.next=8,t.getPassengerRemote();case 8:i=s.sent,console.log("resRemote",i),r=i.data.wxUserPassengerList;case 11:if(d=0,r.length)for(d=4,n=r.length,l=0;l<n;l++)c=r[l].id_type,r[l].showType=t.calcTypeName(c),r[l].showId=1==c?r[l].id_card.replace(/^(.{3})(?:\d+)(.{3})$/,"$1************$2"):r[l].id_card,e.data.selectedIds.length&&e.data.selectedIds.includes(r[l].id)&&(r[l].selected=!0);else r=[];t.setData({wxUserPassengerList:r,isLoading:!1,display_multiple:d}),t.confirmSelectBtn();case 15:case"end":return s.stop()}}),a)})))()},addPassengerBtn:function(e){this.data.isLoading?t.util.showMsg("加载中，请稍后"):t.util.isNull(this.data.wxUserPassengerList)?(this.setData({_isGoAdd:!0}),this.gotoPassengerPage()):this.setData({modalName:"addPassengerModal"})},hideModal:function(){this.setData({modalName:null})},gotoPassengerPage:function(){this.setData({_isGoAdd:!0}),wx.navigateTo({url:"/package/userPassenger/pages/addPassenger/addPassenger?wx_ticket_num="+this.data.wxTicketNum+"&selectedNum="+this.data.selectedNum+"&limitChild="+this.data.limitChild+"&selectedChildNum="+this.data.selectedChildNum+"&from=fillorder"})},gotoPassengerManager:function(){this.setData({_isModify:!0}),wx.navigateTo({url:"/package/userPassenger/pages/passengerList/passengerList"})},selectPassenger:function(e){for(var s=e.currentTarget.dataset.id_card,a=e.currentTarget.dataset.selected,r=this.data.wxUserPassengerList,i=r.length,d=0,n=0,l=0;l<i;l++)r[l].selected&&(d+=1,r[l].isChild&&(n+=1));if(console.log("selectedChildNum",n),a)d-=1;else{if(d>=this.data.wxTicketNum)return void t.util.showMsg("一个订单最多只能订购"+this.data.wxTicketNum+"张票");if(1==e.currentTarget.dataset.ischild&&n>=this.data.limitChild)return void t.util.showMsg("只能选择"+this.data.limitChild+"张儿童票");d+=1}for(var c=[],o=0;o<i;o++)s==r[o].id_card&&(r[o].selected=!r[o].selected),r[o].selected&&c.push(r[o].id);this.setData({wxUserPassengerList:r,selectedNum:d,selectedChildNum:n,selectedIds:c});var g=e.currentTarget.dataset.selectType;t.util.isNotNull(g)&&"swiperSelect"==g&&this.confirmSelectBtn()},confirmSelectBtn:function(e){var s=this.data.wxUserPassengerList,a=[],r=[],i="",d=0,n=0,l=[];if(t.util.isNotNull(s)){for(var c=s.length,o=0;o<c;o++)s[o].selected&&(l.push(s[o].id),a.push(s[o].id_card),r.push({passenger_name:s[o].passenger_name,id_card:s[o].id_card,id_type:s[o].id_type}),s[o].isChild?n+=1:d+=1);i=a.join(",")}console.log("realNamePassenger 已选乘客，成人票：",d,"儿童票：",n,"总数：",a.length,a,i),console.log("realNamePassenger 已选乘客列表selectedPassengerArr",r),this.triggerEvent("selectPassenger",{passengerIdCards:i,ticketNum:d,childNum:n,selectedPassengerArr:r}),this.setData({modalName:null,selectedNum:a.length,selectedChildNum:n,selectedIds:l})},handleNothing:function(){},editPassenger:function(e){var s=e.currentTarget.dataset.passenger,a={id:s.id,id_card:s.id_card,passenger_name:s.passenger_name,id_type:s.id_type,is_me:s.is_me,isChild:s.isChild};a=JSON.stringify(a),this.setData({_isModify:!0}),wx.navigateTo({url:"/package/userPassenger/pages/addPassenger/addPassenger?edit_obj="+a})},refreshUserList:function(){var e=this;return a(s().mark((function a(){var t,r,i,d;return s().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return e.setData({triggered:!0}),s.next=3,e.getPassengerRemote();case 3:if(t=s.sent,r=t.data.wxUserPassengerList,wx.setStorageSync("wxUserPassengerList",r),r)for(i=0;i<r.length;i++)(d=r[i]).showId=1==d.id_type?d.id_card.replace(/^(.{3})(?:\d+)(.{3})$/,"$1************$2"):d.id_card,e.data.selectedIds.length&&e.data.selectedIds.includes(d.id)&&(d.selected=!0);e.setData({wxUserPassengerList:r,triggered:!1});case 8:case"end":return s.stop()}}),a)})))()},clearSelections:function(){this.setData({selectedIds:[],wxUserPassengerList:this.data.wxUserPassengerList.map((function(s){return e(e({},s),{},{selected:!1})})),selectedNum:0})}}});
},{isPage:false,isComponent:true,currentFile:'components/realNamePassenger/realNamePassenger.js'});require("components/realNamePassenger/realNamePassenger.js");