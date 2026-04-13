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
Z([a,[3,'index_swiper '],[[7],[3,'bannerClass']]])
Z([3,'500'])
Z([3,'3000'])
Z([a,[3,'height:'],[[7],[3,'firstBannerHeight']],[3,'rpx;']])
Z([[7],[3,'bannerList']])
Z([3,'index'])
Z([3,'slider'])
Z([3,'imageLoad'])
Z([3,'previewBanner'])
Z([[7],[3,'bannerImageClass']])
Z([[7],[3,'index']])
Z([3,'widthFix'])
Z([[6],[[7],[3,'item']],[3,'imageUrl']])
Z([a,z[4][1],z[4][2],z[4][3]])
Z([[2,'!='],[[6],[[7],[3,'adunit']],[3,'tplAdunitid']],[1,'0']])
Z(z[7])
Z([[6],[[7],[3,'adunit']],[3,'tplAdunitid']])
Z([3,'onAdError'])
Z([3,'onAdLoad'])
Z(z[17])
Z([[6],[[7],[3,'noticeList']],[3,'length']])
Z([a,[3,'notice-box '],[[7],[3,'noticeClass']]])
Z([3,'notice_main flex align-center'])
Z([a,[3,'icon-box '],[[7],[3,'noticeIcon']]])
Z([a,[3,'cuIcon-notification  text-'],[[7],[3,'noticeTextColor']]])
Z([3,'true'])
Z(z[26])
Z([3,'swiper_container'])
Z(z[3])
Z(z[26])
Z([[7],[3,'noticeList']])
Z([3,'id'])
Z([3,'clickNotice'])
Z([[6],[[7],[3,'item']],[3,'content']])
Z([[6],[[7],[3,'item']],[3,'url']])
Z([[6],[[7],[3,'item']],[3,'openType']])
Z([[6],[[7],[3,'item']],[3,'otherAppid']])
Z([[6],[[7],[3,'item']],[3,'pagePath']])
Z([[6],[[7],[3,'item']],[3,'picUrl']])
Z([[6],[[7],[3,'item']],[3,'title']])
Z([a,[3,'swiper_item '],[[7],[3,'noticeText']],[3,' text-'],z[25][2]])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([a,[3,'cu-modal '],[[2,'?:'],[[2,'=='],[[7],[3,'modalName']],[1,'popupModel']],[1,'show'],[1,'']]])
Z([a,[3,'cu-dialog bg-white '],[[7],[3,'noticePopupDialogClass']]])
Z([3,'flex justify-center margin text-lg'])
Z([a,[[6],[[7],[3,'noticePopup']],[3,'title']]])
Z([[6],[[7],[3,'noticePopup']],[3,'content']])
Z([3,'margin break-word'])
Z(z[47])
Z([3,'flex padding-tb justify-center bg-white'])
Z([3,'hideModal'])
Z([a,[3,'cu-btn flex-sub margin-lr round bg-'],[[7],[3,'primary']],[3,' '],[[7],[3,'noticeBtnClass']]])
Z([3,'button-hover'])
Z([3,'确定'])
Z([a,[3,'cu-modal popupPicModel '],[[2,'?:'],[[2,'=='],[[7],[3,'modalName']],[1,'popupPicModel']],[1,'show'],[1,'']]])
Z([a,[3,'cu-dialog  '],z[44][2]])
Z([3,'clickPopupPic'])
Z([3,' radius-40 popupPic'])
Z([3,'radius-40'])
Z(z[12])
Z(z[26])
Z([[6],[[7],[3,'noticePopup']],[3,'picUrl']])
Z([3,'flex justify-center closeBtn '])
Z(z[51])
Z([3,'cuIcon-close bg-white closeIcon'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_0=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_0=true;
var x=['./components/bannerNotice/bannerNotice.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_0_1()
var fE=_n('view')
var cF=_v()
_(fE,cF)
if(_oz(z,0,e,s,gg)){cF.wxVkey=1
var hG=_mz(z,'swiper',['autoplay',-1,'class',1,'duration',1,'interval',2,'style',3],[],e,s,gg)
var cI=_v()
_(hG,cI)
var oJ=function(aL,lK,tM,gg){
var bO=_n('swiper-item')
_rz(z,bO,'class',7,aL,lK,gg)
var oP=_mz(z,'image',['showMenuByLongpress',-1,'bindload',8,'bindtap',1,'class',2,'data-index',3,'mode',4,'src',5,'style',6],[],aL,lK,gg)
_(bO,oP)
_(tM,bO)
return tM
}
cI.wxXCkey=2
_2z(z,5,oJ,e,s,gg,cI,'item','index','index')
var oH=_v()
_(hG,oH)
if(_oz(z,15,e,s,gg)){oH.wxVkey=1
var xQ=_n('swiper-item')
_rz(z,xQ,'class',16,e,s,gg)
var oR=_v()
_(xQ,oR)
if(_oz(z,17,e,s,gg)){oR.wxVkey=1
var fS=_mz(z,'ad-custom',['binderror',18,'bindload',1,'unitId',2],[],e,s,gg)
_(oR,fS)
}
oR.wxXCkey=1
_(oH,xQ)
}
oH.wxXCkey=1
_(cF,hG)
}
cF.wxXCkey=1
_(r,fE)
var oD=_v()
_(r,oD)
if(_oz(z,21,e,s,gg)){oD.wxVkey=1
var cT=_n('view')
_rz(z,cT,'class',22,e,s,gg)
var hU=_n('view')
_rz(z,hU,'class',23,e,s,gg)
var oV=_n('view')
_rz(z,oV,'class',24,e,s,gg)
var cW=_n('text')
_rz(z,cW,'class',25,e,s,gg)
_(oV,cW)
_(hU,oV)
var oX=_mz(z,'swiper',['autoplay',26,'circular',1,'class',2,'interval',3,'vertical',4],[],e,s,gg)
var lY=_v()
_(oX,lY)
var aZ=function(e2,t1,b3,gg){
var x5=_mz(z,'swiper-item',['bindtap',33,'data-content',1,'data-link-Url',2,'data-open-Type',3,'data-other-Appid',4,'data-page-Path',5,'data-pic-Url',6,'data-title',7],[],e2,t1,gg)
var o6=_n('view')
_rz(z,o6,'class',41,e2,t1,gg)
var f7=_oz(z,42,e2,t1,gg)
_(o6,f7)
_(x5,o6)
_(b3,x5)
return b3
}
lY.wxXCkey=2
_2z(z,31,aZ,e,s,gg,lY,'item','index','id')
_(hU,oX)
_(cT,hU)
_(oD,cT)
}
var c8=_n('view')
_rz(z,c8,'class',43,e,s,gg)
var h9=_n('view')
_rz(z,h9,'class',44,e,s,gg)
var cAB=_n('view')
_rz(z,cAB,'class',45,e,s,gg)
var oBB=_oz(z,46,e,s,gg)
_(cAB,oBB)
_(h9,cAB)
var o0=_v()
_(h9,o0)
if(_oz(z,47,e,s,gg)){o0.wxVkey=1
var lCB=_n('view')
_rz(z,lCB,'class',48,e,s,gg)
var aDB=_mz(z,'rich-text',['userSelect',-1,'nodes',49],[],e,s,gg)
_(lCB,aDB)
_(o0,lCB)
}
var tEB=_n('view')
_rz(z,tEB,'class',50,e,s,gg)
var eFB=_mz(z,'view',['bindtap',51,'class',1,'hoverClass',2],[],e,s,gg)
var bGB=_oz(z,54,e,s,gg)
_(eFB,bGB)
_(tEB,eFB)
_(h9,tEB)
o0.wxXCkey=1
_(c8,h9)
_(r,c8)
var oHB=_n('view')
_rz(z,oHB,'class',55,e,s,gg)
var xIB=_n('view')
_rz(z,xIB,'class',56,e,s,gg)
var oJB=_mz(z,'view',['bindtap',57,'class',1],[],e,s,gg)
var fKB=_mz(z,'image',['class',59,'mode',1,'showMenuByLongpress',2,'src',3],[],e,s,gg)
_(oJB,fKB)
_(xIB,oJB)
var cLB=_n('view')
_rz(z,cLB,'class',63,e,s,gg)
var hMB=_mz(z,'view',['bindtap',64,'class',1],[],e,s,gg)
_(cLB,hMB)
_(xIB,cLB)
_(oHB,xIB)
_(r,oHB)
oD.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_0";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(outerGlobal.__webview_engine_version__)!='undefined'&&outerGlobal.__webview_engine_version__+1e-6>=0.02+1e-6&&outerGlobal.__mergeData__)
{
env=outerGlobal.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(outerGlobal.__webview_engine_version__)=='undefined'|| outerGlobal.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_0();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/bannerNotice/bannerNotice.wxml'] = [$gwx_XC_0, './components/bannerNotice/bannerNotice.wxml'];else __wxAppCode__['components/bannerNotice/bannerNotice.wxml'] = $gwx_XC_0( './components/bannerNotice/bannerNotice.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/bannerNotice/bannerNotice.wxss'] = setCssToHead([[2,"./components/bannerNotice/bannerNotice.wxss"]],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./components/bannerNotice/bannerNotice.wxss:1:542)",{path:"./components/bannerNotice/bannerNotice.wxss"});
}