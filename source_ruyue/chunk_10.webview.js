$gwx_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_2 || [];
function gz$gwx_XC_2_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleCatchtouchMove'])
Z([a,[3,'cu-modal bg-'],[[7],[3,'primary']],[3,' light '],[[2,'?:'],[[7],[3,'showPrivacy']],[1,'show'],[1,'']]])
Z([3,'cu-dialog bg-white'])
Z([3,'flex justify-center margin text-lg'])
Z([3,'隐私政策'])
Z([3,'margin break-word text-left'])
Z([a,[3,'欢迎您使用'],[[7],[3,'corpName']],[3,'小程序。请您仔细阅读并充分理解']])
Z([3,'openPrivacyContract'])
Z([a,[3,'text-'],z[1][2]])
Z([a,[[7],[3,'privacyContractName']]])
Z([3,'，'])
Z([a,[3,'如果您同意'],z[9][1],[3,'的全部内容，请点击“同意”开始使用我们的服务。']])
Z([3,'flex margin-tb justify-center'])
Z([3,'handleAgree'])
Z([a,[3,'flex-sub margin-lr bg-'],z[1][2],[3,' round']])
Z([3,'agreePrivacyAuthorization'])
Z([3,'同意'])
Z(z[12])
Z([3,'handleDisagree'])
Z([3,'flex-sub margin-lr bg-white round'])
Z([3,'不同意'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_2=true;
var x=['./components/privacyPopup/privacyPopup.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_2_1()
var cBE=_mz(z,'view',['catchtouchmove',0,'class',1],[],e,s,gg)
var hCE=_n('view')
_rz(z,hCE,'class',2,e,s,gg)
var oDE=_n('view')
_rz(z,oDE,'class',3,e,s,gg)
var cEE=_oz(z,4,e,s,gg)
_(oDE,cEE)
_(hCE,oDE)
var oFE=_n('view')
_rz(z,oFE,'class',5,e,s,gg)
var lGE=_n('text')
var aHE=_oz(z,6,e,s,gg)
_(lGE,aHE)
_(oFE,lGE)
var tIE=_mz(z,'text',['bindtap',7,'class',1],[],e,s,gg)
var eJE=_oz(z,9,e,s,gg)
_(tIE,eJE)
_(oFE,tIE)
var bKE=_oz(z,10,e,s,gg)
_(oFE,bKE)
var oLE=_n('text')
var xME=_oz(z,11,e,s,gg)
_(oLE,xME)
_(oFE,oLE)
_(hCE,oFE)
var oNE=_n('view')
_rz(z,oNE,'class',12,e,s,gg)
var fOE=_mz(z,'button',['bindagreeprivacyauthorization',13,'class',1,'openType',2],[],e,s,gg)
var cPE=_oz(z,16,e,s,gg)
_(fOE,cPE)
_(oNE,fOE)
_(hCE,oNE)
var hQE=_n('view')
_rz(z,hQE,'class',17,e,s,gg)
var oRE=_mz(z,'button',['bindtap',18,'class',1],[],e,s,gg)
var cSE=_oz(z,20,e,s,gg)
_(oRE,cSE)
_(hQE,oRE)
_(hCE,hQE)
_(cBE,hCE)
_(r,cBE)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_2";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_2();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/privacyPopup/privacyPopup.wxml'] = [$gwx_XC_2, './components/privacyPopup/privacyPopup.wxml'];else __wxAppCode__['components/privacyPopup/privacyPopup.wxml'] = $gwx_XC_2( './components/privacyPopup/privacyPopup.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/privacyPopup/privacyPopup.wxss'] = setCssToHead([[2,"./app.wxss"],[2,"./colorui/main.wxss"],".",[1],"cu-modal{z-index:2110}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./components/privacyPopup/privacyPopup.wxss:1:67858)",{path:"./components/privacyPopup/privacyPopup.wxss"});
}