var __wxAppData=__wxAppData||{};var __wxAppCode__=__wxAppCode__||{};var global=global||{};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var Component=Component||function(){};var definePlugin=definePlugin||function(){};var requirePlugin=requirePlugin||function(){};var Behavior=Behavior||function(){};var __vd_version_info__=__vd_version_info__||{};var __GWX_GLOBAL__=__GWX_GLOBAL__||{};if(this&&this.__g===undefined)Object.defineProperty(this,"__g",{configurable:false,enumerable:false,writable:false,value:function(){function D(e,t){if(typeof t!="undefined")e.children.push(t)}function S(e){if(typeof e!="undefined")return{tag:"virtual",wxKey:e,children:[]};return{tag:"virtual",children:[]}}function v(e){return{tag:"wx-"+e,attr:{},children:[],n:[],raw:{},generics:{}}}function e(e,t){t&&e.properities.push(t)}function t(e,t,r){return typeof e[r]!="undefined"?e[r]:t[r]}function u(e){console.warn("WXMLRT_"+g+":"+e)}function r(e,t){u(t+":-1:-1:-1: Template `"+e+"` is being called recursively, will be stop.")}var s=console.warn;var n=console.log;function o(){function e(){}e.prototype={hn:function(e,t){if(typeof e=="object"){var r=0;var n=false,o=false;for(var a in e){n=n|a==="__value__";o=o|a==="__wxspec__";r++;if(r>2)break}return r==2&&n&&o&&(t||e.__wxspec__!=="m"||this.hn(e.__value__)==="h")?"h":"n"}return"n"},nh:function(e,t){return{__value__:e,__wxspec__:t?t:true}},rv:function(e){return this.hn(e,true)==="n"?e:this.rv(e.__value__)},hm:function(e){if(typeof e=="object"){var t=0;var r=false,n=false;for(var o in e){r=r|o==="__value__";n=n|o==="__wxspec__";t++;if(t>2)break}return t==2&&r&&n&&(e.__wxspec__==="m"||this.hm(e.__value__))}return false}};return new e}var A=o();function T(e){var t=e.split("\n "+" "+" "+" ");for(var r=0;r<t.length;++r){if(0==r)continue;if(")"===t[r][t[r].length-1])t[r]=t[r].replace(/\s\(.*\)$/,"");else t[r]="at anonymous function"}return t.join("\n "+" "+" "+" ")}function a(M){function m(e,t,r,n,o){var a=false;var i=e[0][1];var p,u,l,f,v,c;switch(i){case"?:":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):x(e[3],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"&&":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):A.rv(p);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"||":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?A.rv(p):x(e[2],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"+":case"*":case"/":case"%":case"|":case"^":case"&":case"===":case"==":case"!=":case"!==":case">=":case"<=":case">":case"<":case"<<":case">>":p=x(e[1],t,r,n,o,a);u=x(e[2],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");switch(i){case"+":f=A.rv(p)+A.rv(u);break;case"*":f=A.rv(p)*A.rv(u);break;case"/":f=A.rv(p)/A.rv(u);break;case"%":f=A.rv(p)%A.rv(u);break;case"|":f=A.rv(p)|A.rv(u);break;case"^":f=A.rv(p)^A.rv(u);break;case"&":f=A.rv(p)&A.rv(u);break;case"===":f=A.rv(p)===A.rv(u);break;case"==":f=A.rv(p)==A.rv(u);break;case"!=":f=A.rv(p)!=A.rv(u);break;case"!==":f=A.rv(p)!==A.rv(u);break;case">=":f=A.rv(p)>=A.rv(u);break;case"<=":f=A.rv(p)<=A.rv(u);break;case">":f=A.rv(p)>A.rv(u);break;case"<":f=A.rv(p)<A.rv(u);break;case"<<":f=A.rv(p)<<A.rv(u);break;case">>":f=A.rv(p)>>A.rv(u);break;default:break}return l?A.nh(f,"c"):f;break;case"-":p=e.length===3?x(e[1],t,r,n,o,a):0;u=e.length===3?x(e[2],t,r,n,o,a):x(e[1],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");f=l?A.rv(p)-A.rv(u):p-u;return l?A.nh(f,"c"):f;break;case"!":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=!A.rv(p);return l?A.nh(f,"c"):f;case"~":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=~A.rv(p);return l?A.nh(f,"c"):f;default:s("unrecognized op"+i)}}function x(e,t,r,n,o,a){var i=e[0];var p=false;if(typeof a!=="undefined")o.ap=a;if(typeof i==="object"){var u=i[0];var l,f,v,c,s,y,b,d,h,_,g;switch(u){case 2:return m(e,t,r,n,o);break;case 4:return x(e[1],t,r,n,o,p);break;case 5:switch(e.length){case 2:l=x(e[1],t,r,n,o,p);return M?[l]:[A.rv(l)];return[l];break;case 1:return[];break;default:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);l.push(M?v:A.rv(v));return l;break}break;case 6:l=x(e[1],t,r,n,o);var w=o.ap;h=A.hn(l)==="h";f=h?A.rv(l):l;o.is_affected|=h;if(M){if(f===null||typeof f==="undefined"){return h?A.nh(undefined,"e"):undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return h||_?A.nh(undefined,"e"):undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return h||_?g?y:A.nh(y,"e"):y}else{if(f===null||typeof f==="undefined"){return undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return g?A.rv(y):y}case 7:switch(e[1][0]){case 11:o.is_affected|=A.hn(n)==="h";return n;case 3:b=A.rv(r);d=A.rv(t);v=e[1][1];if(n&&n.f&&n.f.hasOwnProperty(v)){l=n.f;o.ap=true}else{l=b&&b.hasOwnProperty(v)?r:d&&d.hasOwnProperty(v)?t:undefined}if(M){if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;y=h&&!g?A.nh(y,"e"):y;return y}}else{if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;return A.rv(y)}}return undefined}break;case 8:l={};l[e[1]]=x(e[2],t,r,n,o,p);return l;break;case 9:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);function O(e,t,r){var n,o;h=A.hn(e)==="h";_=A.hn(t)==="h";f=A.rv(e);c=A.rv(t);for(var a in c){if(r||!f.hasOwnProperty(a)){f[a]=M?_?A.nh(c[a],"e"):c[a]:A.rv(c[a])}}return e}var s=l;var j=true;if(typeof e[1][0]==="object"&&e[1][0][0]===10){l=v;v=s;j=false}if(typeof e[1][0]==="object"&&e[1][0][0]===10){var P={};return O(O(P,l,j),v,j)}else return O(l,v,j);break;case 10:l=x(e[1],t,r,n,o,p);l=M?l:A.rv(l);return l;break;case 12:var P;l=x(e[1],t,r,n,o);if(!o.ap){return M&&A.hn(l)==="h"?A.nh(P,"f"):P}var w=o.ap;v=x(e[2],t,r,n,o,p);o.ap=w;h=A.hn(l)==="h";_=N(v);f=A.rv(l);c=A.rv(v);snap_bb=K(c,"nv_");try{P=typeof f==="function"?K(f.apply(null,snap_bb)):undefined}catch(t){t.message=t.message.replace(/nv_/g,"");t.stack=t.stack.substring(0,t.stack.indexOf("\n",t.stack.lastIndexOf("at nv_")));t.stack=t.stack.replace(/\snv_/g," ");t.stack=T(t.stack);if(n.debugInfo){t.stack+="\n "+" "+" "+" at "+n.debugInfo[0]+":"+n.debugInfo[1]+":"+n.debugInfo[2];console.error(t)}P=undefined}return M&&(_||h)?A.nh(P,"f"):P}}else{if(i===3||i===1)return e[1];else if(i===11){var l="";for(var D=1;D<e.length;D++){var S=A.rv(x(e[D],t,r,n,o,p));l+=typeof S==="undefined"?"":S}return l}}}function e(e,t,r,n,o,a){if(e[0]=="11182016"){n.debugInfo=e[2];return x(e[1],t,r,n,o,a)}else{n.debugInfo=null;return x(e,t,r,n,o,a)}}return e}var f=a(true);var c=a(false);function i(e,t,r,n,o,a,i,p){{var u={is_affected:false};var l=f(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(a)||u.is_affected!=p){console.warn("A. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(a)+", "+p+" is expected")}}{var u={is_affected:false};var l=c(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(i)||u.is_affected!=p){console.warn("B. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(i)+", "+p+" is expected")}}}function y(e,t,r,n,o,a,i,p,u){var l=A.hn(e)==="n";var f=A.rv(n);var v=f.hasOwnProperty(i);var c=f.hasOwnProperty(p);var s=f[i];var y=f[p];var b=Object.prototype.toString.call(A.rv(e));var d=b[8];if(d==="N"&&b[10]==="l")d="X";var h;if(l){if(d==="A"){var _;for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");_=A.rv(e[g]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;var _;for(var O in e){f[i]=e[O];f[p]=l?O:A.nh(O,"h");_=A.rv(e[O]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<e;g++){f[i]=g;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}else{var j=A.rv(e);var _,P;if(d==="A"){for(var g=0;g<j.length;g++){P=j[g];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?g:A.nh(g,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;for(var O in j){P=j[O];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?O:A.nh(O,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<j.length;g++){P=A.nh(j[g],"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<j;g++){P=A.nh(g,"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}if(v){f[i]=s}else{delete f[i]}if(c){f[p]=y}else{delete f[p]}}function N(e){if(A.hn(e)=="h")return true;if(typeof e!=="object")return false;for(var t in e){if(e.hasOwnProperty(t)){if(N(e[t]))return true}}return false}function b(e,t,r,n,o){var a=false;var i=K(n,"",2);if(o.ap&&i&&i.constructor===Function){t="$wxs:"+t;e.attr["$gdc"]=K}if(o.is_affected||N(n)){e.n.push(t);e.raw[t]=n}e.attr[t]=i}function d(e,t,r,n,o,a){a.opindex=r;var i={},p;var u=c(z[r],n,o,a,i);b(e,t,r,u,i)}function h(e,t,r,n,o,a,i){i.opindex=n;var p={},u;var l=c(e[n],o,a,i,p);b(t,r,n,l,p)}function p(e,t,r,n){n.opindex=e;var o={};var a=c(z[e],t,r,n,o);return a&&a.constructor===Function?undefined:a}function l(e,t,r,n,o){o.opindex=t;var a={};var i=c(e[t],r,n,o,a);return i&&i.constructor===Function?undefined:i}function _(e,t,r,n,o){var o=o||{};n.opindex=e;return f(z[e],t,r,n,o)}function w(e,t,r,n,o,a){var a=a||{};o.opindex=t;return f(e[t],r,n,o,a)}function O(e,t,r,n,o,a,i,p,u){var l={};var f=_(e,r,n,o);y(f,t,r,n,o,a,i,p,u)}function j(e,t,r,n,o,a,i,p,u,l){var f={};var v=w(e,t,n,o,a);y(v,r,n,o,a,i,p,u,l)}function P(e,t,r,n,o,a){var i=v(e);var p=0;for(var u=0;u<t.length;u+=2){if(p+t[u+1]<0){i.attr[t[u]]=true}else{d(i,t[u],p+t[u+1],n,o,a);if(p===0)p=t[u+1]}}for(var u=0;u<r.length;u+=2){if(p+r[u+1]<0){i.generics[r[u]]=""}else{var l=c(z[p+r[u+1]],n,o,a);if(l!="")l="wx-"+l;i.generics[r[u]]=l;if(p===0)p=r[u+1]}}return i}function M(e,t,r,n,o,a,i){var p=v(t);var u=0;for(var l=0;l<r.length;l+=2){if(u+r[l+1]<0){p.attr[r[l]]=true}else{h(e,p,r[l],u+r[l+1],o,a,i);if(u===0)u=r[l+1]}}for(var l=0;l<n.length;l+=2){if(u+n[l+1]<0){p.generics[n[l]]=""}else{var f=c(e[u+n[l+1]],o,a,i);if(f!="")f="wx-"+f;p.generics[n[l]]=f;if(u===0)u=n[l+1]}}return p}var m=function(){if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){x();C();k();U();I();L();E();R();F()}if(typeof __WXML_GLOBAL__!=="undefined")__WXML_GLOBAL__.wxs_nf_init=true};var x=function(){Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"});Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return"[object Object]"}})};var C=function(){Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"});Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length},set:function(){}});Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return"[function Function]"}})};var k=function(){Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join()}});Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(e){e=undefined==e?",":e;var t="";for(var r=0;r<this.length;++r){if(0!=r)t+=e;if(null==this[r]||undefined==this[r])t+="";else if(typeof this[r]=="function")t+=this[r].nv_toString();else if(typeof this[r]=="object"&&this[r].nv_constructor==="Array")t+=this[r].nv_join();else t+=this[r].toString()}return t}});Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"});Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat});Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop});Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push});Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse});Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift});Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice});Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort});Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice});Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift});Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf});Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf});Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every});Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some});Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach});Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map});Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter});Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce});Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight});Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var U=function(){Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"});Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString});Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf});Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt});Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt});Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat});Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf});Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf});Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare});Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match});Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace});Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search});Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice});Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split});Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring});Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase});Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase});Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase});Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase});Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim});Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var I=function(){Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"});Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString});Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})};var L=function(){Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE});Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE});Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY});Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY});Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"});Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString});Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString});Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf});Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed});Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential});Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})};var E=function(){Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E});Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10});Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2});Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E});Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E});Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI});Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2});Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2});Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs});Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos});Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin});Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan});Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2});Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil});Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos});Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp});Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor});Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log});Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max});Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min});Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow});Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random});Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round});Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin});Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt});Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})};var R=function(){Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"});Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse});Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC});Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now});Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString});Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString});Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString});Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString});Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString});Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString});Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf});Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime});Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear});Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear});Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth});Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth});Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate});Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate});Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay});Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay});Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours});Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours});Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes});Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes});Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds});Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds});Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds});Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset});Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime});Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds});Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds});Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds});Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes});Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes});Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours});Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours});Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate});Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate});Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth});Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth});Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear});Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear});Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString});Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString});Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})};var F=function(){Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"});Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec});Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test});Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString});Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex},set:function(e){this.lastIndex=e}})};m();var J=function(){var e=Array.prototype.slice.call(arguments);e.unshift(Date);return new(Function.prototype.bind.apply(Date,e))};var B=function(){var e=Array.prototype.slice.call(arguments);e.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp,e))};var Y={};Y.nv_log=function(){var e="WXSRT:";for(var t=0;t<arguments.length;++t)e+=arguments[t]+" ";console.log(e)};var G=parseInt,X=parseFloat,H=isNaN,V=isFinite,$=decodeURI,W=decodeURIComponent,Q=encodeURI,q=encodeURIComponent;function K(e,t,r){e=A.rv(e);if(e===null||e===undefined)return e;if(typeof e==="string"||typeof e==="boolean"||typeof e==="number")return e;if(e.constructor===Object){var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o))if(undefined===t)n[o.substring(3)]=K(e[o],t,r);else n[t+o]=K(e[o],t,r);return n}if(e.constructor===Array){var n=[];for(var a=0;a<e.length;a++)n.push(K(e[a],t,r));return n}if(e.constructor===Date){var n=new Date;n.setTime(e.getTime());return n}if(e.constructor===RegExp){var i="";if(e.global)i+="g";if(e.ignoreCase)i+="i";if(e.multiline)i+="m";return new RegExp(e.source,i)}if(r&&typeof e==="function"){if(r==1)return K(e(),undefined,2);if(r==2)return e}return null}var Z={};Z.nv_stringify=function(e){JSON.stringify(e);return JSON.stringify(K(e))};Z.nv_parse=function(e){if(e===undefined)return undefined;var t=JSON.parse(e);return K(t,"nv_")};function ee(e,t,r,n){e.extraAttr={t_action:t,t_rawid:r};if(typeof n!="undefined")e.extraAttr.t_cid=n}function te(){if(typeof __globalThis.__webview_engine_version__=="undefined")return 0;return __globalThis.__webview_engine_version__}function re(e,t,r,n,o,a){var i=ne(t,r,n);if(i)e.push(i);else{e.push("");u(n+":import:"+o+":"+a+": Path `"+t+"` not found from `"+n+"`.")}}function ne(e,t,r){if(e[0]!="/"){var n=r.split("/");n.pop();var o=e.split("/");for(var a=0;a<o.length;a++){if(o[a]=="..")n.pop();else if(!o[a]||o[a]==".")continue;else n.push(o[a])}e=n.join("/")}if(r[0]=="."&&e[0]=="/")e="."+e;if(t[e])return e;if(t[e+".wxml"])return e+".wxml"}function oe(e,t,r,n){if(!t)return;if(n[e][t])return n[e][t];for(var o=r[e].i.length-1;o>=0;o--){if(r[e].i[o]&&n[r[e].i[o]][t])return n[r[e].i[o]][t]}for(var o=r[e].ti.length-1;o>=0;o--){var a=ne(r[e].ti[o],r,e);if(a&&n[a][t])return n[a][t]}var i=ae(r,e);for(var o=0;o<i.length;o++){if(i[o]&&n[i[o]][t])return n[i[o]][t]}for(var p=r[e].j.length-1;p>=0;p--)if(r[e].j[p]){for(var a=r[r[e].j[p]].ti.length-1;a>=0;a--){var u=ne(r[r[e].j[p]].ti[a],r,e);if(u&&n[u][t]){return n[u][t]}}}}function ae(e,t){if(!t)return[];if($gaic[t]){return $gaic[t]}var r=[],n=[],o=0,a=0,i={},p={};n.push(t);p[t]=true;a++;while(o<a){var u=n[o++];for(var l=0;l<e[u].ic.length;l++){var f=e[u].ic[l];var v=ne(f,e,u);if(v&&!p[v]){p[v]=true;n.push(v);a++}}for(var l=0;u!=t&&l<e[u].ti.length;l++){var c=e[u].ti[l];var s=ne(c,e,u);if(s&&!i[s]){i[s]=true;r.push(s)}}}$gaic[t]=r;return r}var ie={};function pe(e,t,r,n,o,a,i){var p=ne(e,t,r);t[r].j.push(p);if(p){if(ie[p]){u("-1:include:-1:-1: `"+e+"` is being included in a loop, will be stop.");return}ie[p]=true;try{t[p].f(n,o,a,i)}catch(n){}ie[p]=false}else{u(r+":include:-1:-1: Included path `"+e+"` not found from `"+r+"`.")}}function ue(e,t,r,n){u(t+":template:"+r+":"+n+": Template `"+e+"` not found.")}function le(e){var t=false;delete e.properities;delete e.n;if(e.children){do{t=false;var r=[];for(var n=0;n<e.children.length;n++){var o=e.children[n];if(o.tag=="virtual"){t=true;for(var a=0;o.children&&a<o.children.length;a++){r.push(o.children[a])}}else{r.push(o)}}e.children=r}while(t);for(var n=0;n<e.children.length;n++){le(e.children[n])}}return e}function fe(e){if(e.tag=="wx-wx-scope"){e.tag="virtual";e.wxCkey="11";e["wxScopeData"]=e.attr["wx:scope-data"];delete e.n;delete e.raw;delete e.generics;delete e.attr}for(var t=0;e.children&&t<e.children.length;t++){fe(e.children[t])}return e}return{a:D,b:S,c:v,d:e,e:t,f:u,g:r,h:s,i:n,j:o,k:A,l:T,m:a,n:f,o:c,p:i,q:y,r:N,s:b,t:d,u:h,v:p,w:l,x:_,y:w,z:O,A:j,B:P,C:M,D:J,E:B,F:Y,G:G,H:X,I:H,J:V,K:$,L:W,M:Q,N:q,O:K,P:Z,Q:ee,R:te,S:re,T:ne,U:oe,V:ae,W:ie,X:pe,Y:ue,Z:le,aa:fe}}()});Object.freeze(__g);g="";	__wxAppCode__['components/bannerNotice/bannerNotice.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/calendarSwiper/calendarSwiper.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/cuNav/cuNav.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/hotLine/hotLine.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/hotLine2/hotLine2.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/hotLineCollege/hotLineCollege.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/hotLineCollegeByType/hotLineCollegeByType.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/hotLineMultiLevel/hotLineMultiLevel.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/indexFloatBtn/indexFloatBtn.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/indexSearchHistory/indexSearchHistory.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/indexTel/indexTel.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/orderRuleModal/orderRuleModal.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/privacyPopup/privacyPopup.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/realNamePassenger/realNamePassenger.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/travelLineList/travelLineList.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['package/index21/index21.json'] = {"component":true,"usingComponents":{"hot-line":"/pages/components/hot_line/hot_line","banner-notice":"/components/bannerNotice/bannerNotice"}};
		__wxAppCode__['package/indexCar1/indexCar1.json'] = {"component":true,"usingComponents":{"privacy-popup":"/components/privacyPopup/privacyPopup","index-search-history":"/components/indexSearchHistory/indexSearchHistory"}};
		__wxAppCode__['package/indexCar2/indexCar2.json'] = {"component":true,"usingComponents":{"privacy-popup":"/components/privacyPopup/privacyPopup","index-search-history":"/components/indexSearchHistory/indexSearchHistory"}};
		__wxAppCode__['package/intervalCar1/pages/interval/interval.json'] = {"enablePullDownRefresh":false,"navigationBarTitleText":"填写订单","navigationStyle":"custom","usingComponents":{"cu-nav":"/components/cuNav/cuNav","privacy-popup":"/components/privacyPopup/privacyPopup"}};
		__wxAppCode__['package/intervalCar2/pages/interval/interval.json'] = {"enablePullDownRefresh":false,"navigationBarTitleText":"填写订单","navigationStyle":"custom","usingComponents":{"cu-nav":"/components/cuNav/cuNav","privacy-popup":"/components/privacyPopup/privacyPopup"}};
		__wxAppCode__['package/partnerOrderDetails/pages/partnerOrderDetails/partnerOrderDetails.json'] = {"usingComponents":{}};
		__wxAppCode__['package/waybusIndex/pages/waybusIndex/waybusIndex.json'] = {"navigationBarTitleText":"首页","navigationStyle":"custom","enablePullDownRefresh":false,"usingComponents":{"hot-line":"/pages/components/hot_line/hot_line","banner-notice":"/components/bannerNotice/bannerNotice","index-tel":"/components/indexTel/indexTel","cu-nav":"/components/cuNav/cuNav"}};
		__wxAppCode__['pages/components/calendar_swiper/calendar_swiper.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['pages/components/hot_line/hot_line.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['pages/cx/cx.json'] = {"navigationBarTitleText":"出行","enablePullDownRefresh":false,"navigationStyle":"custom","usingComponents":{"cu-nav":"/components/cuNav/cuNav","index-float-btn":"/components/indexFloatBtn/indexFloatBtn"}};
		__wxAppCode__['pages/home/home.json'] = {"navigationBarTitleText":"首页","enablePullDownRefresh":false,"usingComponents":{"indexStop-component":"/pages/index/indexStop/indexStop","banner-notice":"/components/bannerNotice/bannerNotice","index1-component":"/pages/home/index1/index1","index4-component":"/pages/home/index4/index4","index5-component":"/pages/home/index5/index5","index-hot-line-component":"/pages/home2/indexHotLine/indexHotLine","index-float-btn":"/components/indexFloatBtn/indexFloatBtn","privacy-popup":"/components/privacyPopup/privacyPopup","travel-line-list":"/components/travelLineList/travelLineList"}};
		__wxAppCode__['pages/home/index1/index1.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['pages/home/index4/index4.json'] = {"component":true,"usingComponents":{"hot-line":"/components/hotLine/hotLine","index-tel":"/components/indexTel/indexTel","hotLineCollegeByType":"/components/hotLineCollegeByType/hotLineCollegeByType","hot-line-college":"/components/hotLineCollege/hotLineCollege","hotLineMultiLevel":"/components/hotLineMultiLevel/hotLineMultiLevel"}};
		__wxAppCode__['pages/home/index5/index5.json'] = {"component":true,"usingComponents":{"hot-line":"/components/hotLine/hotLine","hotLineCollegeByType":"/components/hotLineCollegeByType/hotLineCollegeByType","hot-line-college":"/components/hotLineCollege/hotLineCollege","hotLineMultiLevel":"/components/hotLineMultiLevel/hotLineMultiLevel"}};
		__wxAppCode__['pages/home2/home2.json'] = {"navigationBarTitleText":"首页","enablePullDownRefresh":false,"navigationStyle":"custom","usingComponents":{"cu-nav":"/components/cuNav/cuNav","index-float-btn":"/components/indexFloatBtn/indexFloatBtn","hot-line-college":"/components/hotLineCollege/hotLineCollege","hotLineCollegeByType":"/components/hotLineCollegeByType/hotLineCollegeByType","hotLineMultiLevel-college":"/components/hotLineMultiLevel/hotLineMultiLevel","index1-component":"/pages/home2/index1/index1","index4-component":"/pages/home2/index4/index4","index5-component":"/pages/home2/index5/index5","index-hot-line-component":"/pages/home2/indexHotLine/indexHotLine","banner-notice":"/components/bannerNotice/bannerNotice","travel-line-list":"/components/travelLineList/travelLineList"}};
		__wxAppCode__['pages/home2/index1/index1.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['pages/home2/index4/index4.json'] = {"component":true,"usingComponents":{"hot-line":"/components/hotLine/hotLine","index-search-history":"/components/indexSearchHistory/indexSearchHistory","index-tel":"/components/indexTel/indexTel"}};
		__wxAppCode__['pages/home2/index5/index5.json'] = {"component":true,"usingComponents":{"banner-notice":"/components/bannerNotice/bannerNotice","hot-line":"/components/hotLine/hotLine","index-search-history":"/components/indexSearchHistory/indexSearchHistory"}};
		__wxAppCode__['pages/home2/indexHotLine/indexHotLine.json'] = {"component":true,"usingComponents":{"hot-line":"/components/hotLine/hotLine","hotLineCollegeByType":"/components/hotLineCollegeByType/hotLineCollegeByType","hot-line-college":"/components/hotLineCollege/hotLineCollege","hotLineMultiLevel":"/components/hotLineMultiLevel/hotLineMultiLevel"}};
		__wxAppCode__['pages/index/index.json'] = {"navigationBarTitleText":"首页","enablePullDownRefresh":false,"usingComponents":{"index1-component":"/pages/index/index1/index1","index11-component":"/pages/index/index11/index11","index2-component":"/pages/index/index2/index2","index21-component":"/package/index21/index21","index3-component":"/pages/index/index3/index3","index4-component":"/pages/index/index4/index4","index41-component":"/package/index41/pages/index41/index41","index42-component":"/pages/index/index42/index42","index43-component":"/pages/index/index43/index43","index5-component":"/pages/index/index5/index5","index51-component":"/pages/index/index51/index51","index512-component":"/pages/index/index512/index512","index52-component":"/pages/index/index52/index52","index53-component":"/pages/index/index53/index53","indexNav-component":"/pages/index/indexNav/indexNav","indexStop-component":"/pages/index/indexStop/indexStop","index6-component":"/package/index6/pages/index6/index6","indexHbcx-component":"/package/indexHbcx/pages/indexHbcx/indexHbcx","indexSkcx-component":"/package/indexSkcx/pages/indexSkcx/indexSkcx","indexHhzwss-component":"/package/indexHhzwss/pages/indexHhzwss/indexHhzwss","indexWs-component":"/package/indexWs/pages/indexWs/indexWs","indexBzly-component":"/package/indexBzly/pages/indexBzly/indexBzly","indexOyky-component":"/package/indexOyky/pages/indexOyky/indexOyky","index-float-btn":"/components/indexFloatBtn/indexFloatBtn","indexCar1-component":"/package/indexCar1/indexCar1","indexCar2-component":"/package/indexCar2/indexCar2","indexCar3-component":"/package/indexCar3/indexCar3","indexDh2-component":"/package/indexDh2/components/indexDh2/indexDh2","hot-line":"/pages/components/hot_line/hot_line","hot-line2":"/components/hotLine2/hotLine2","hot-line-college":"/components/hotLineCollege/hotLineCollege","hotLineCollegeByType":"/components/hotLineCollegeByType/hotLineCollegeByType","hotLineMultiLevel":"/components/hotLineMultiLevel/hotLineMultiLevel","index-tel":"/components/indexTel/indexTel","banner-notice":"/components/bannerNotice/bannerNotice"},"componentPlaceholder":{"index21-component":"view","index41-component":"view","index6-component":"view","indexHbcx-component":"view","indexSkcx-component":"view","indexHhzwss-component":"view","indexWs-component":"view","indexBzly-component":"view","indexOyky-component":"view","indexCar2-component":"view","indexCar3-component":"view","indexDh2-component":"view"}};
		__wxAppCode__['pages/index/index1/index1.json'] = {"component":true,"usingComponents":{"banner-notice":"/components/bannerNotice/bannerNotice"}};
		__wxAppCode__['pages/index/index11/index11.json'] = {"component":true,"usingComponents":{"banner-notice":"/components/bannerNotice/bannerNotice"}};
		__wxAppCode__['pages/index/index2/index2.json'] = {"component":true,"usingComponents":{"hot-line":"/pages/components/hot_line/hot_line","hotLineCollegeByType":"/components/hotLineCollegeByType/hotLineCollegeByType","hotLineMultiLevel":"/components/hotLineMultiLevel/hotLineMultiLevel","banner-notice":"/components/bannerNotice/bannerNotice"}};
		__wxAppCode__['pages/index/index3/index3.json'] = {"component":true,"usingComponents":{"banner-notice":"/components/bannerNotice/bannerNotice"}};
		__wxAppCode__['pages/index/index4/index4.json'] = {"component":true,"usingComponents":{"banner-notice":"/components/bannerNotice/bannerNotice","index-search-history":"/components/indexSearchHistory/indexSearchHistory"}};
		__wxAppCode__['pages/index/index42/index42.json'] = {"component":true,"usingComponents":{"banner-notice":"/components/bannerNotice/bannerNotice","index-search-history":"/components/indexSearchHistory/indexSearchHistory","cu-nav":"/components/cuNav/cuNav"}};
		__wxAppCode__['pages/index/index43/index43.json'] = {"component":true,"usingComponents":{"banner-notice":"/components/bannerNotice/bannerNotice","index-search-history":"/components/indexSearchHistory/indexSearchHistory","cu-nav":"/components/cuNav/cuNav"}};
		__wxAppCode__['pages/index/index5/index5.json'] = {"component":true,"usingComponents":{"banner-notice":"/components/bannerNotice/bannerNotice","index-search-history":"/components/indexSearchHistory/indexSearchHistory"}};
		__wxAppCode__['pages/index/index51/index51.json'] = {"component":true,"usingComponents":{"banner-notice":"/components/bannerNotice/bannerNotice","index-search-history":"/components/indexSearchHistory/indexSearchHistory"}};
		__wxAppCode__['pages/index/index512/index512.json'] = {"component":true,"usingComponents":{"banner-notice":"/components/bannerNotice/bannerNotice","index-search-history":"/components/indexSearchHistory/indexSearchHistory"}};
		__wxAppCode__['pages/index/index52/index52.json'] = {"component":true,"usingComponents":{"banner-notice":"/components/bannerNotice/bannerNotice","index-search-history":"/components/indexSearchHistory/indexSearchHistory"}};
		__wxAppCode__['pages/index/index53/index53.json'] = {"component":true,"usingComponents":{"banner-notice":"/components/bannerNotice/bannerNotice","index-search-history":"/components/indexSearchHistory/indexSearchHistory"}};
		__wxAppCode__['pages/index/indexNav/indexNav.json'] = {"component":true,"usingComponents":{"banner-notice":"/components/bannerNotice/bannerNotice"}};
		__wxAppCode__['pages/index/indexStop/indexStop.json'] = {"component":true,"usingComponents":{"banner-notice":"/components/bannerNotice/bannerNotice"}};
		__wxAppCode__['pages/index2/index2.json'] = {"navigationBarTitleText":"首页","enablePullDownRefresh":false,"navigationStyle":"custom","usingComponents":{"cu-nav":"/components/cuNav/cuNav","index1-component":"/pages/index/index1/index1","index11-component":"/pages/index/index11/index11","index2-component":"/pages/index/index2/index2","index21-component":"/package/index21/index21","index3-component":"/pages/index/index3/index3","index4-component":"/pages/index/index4/index4","index41-component":"/package/index41/pages/index41/index41","index42-component":"/pages/index/index42/index42","index43-component":"/pages/index/index43/index43","index5-component":"/pages/index/index5/index5","index51-component":"/pages/index/index51/index51","index512-component":"/pages/index/index512/index512","index52-component":"/pages/index/index52/index52","index53-component":"/pages/index/index53/index53","indexNav-component":"/pages/index/indexNav/indexNav","indexStop-component":"/pages/index/indexStop/indexStop","index6-component":"/package/index6/pages/index6/index6","indexHbcx-component":"/package/indexHbcx/pages/indexHbcx/indexHbcx","indexSkcx-component":"/package/indexSkcx/pages/indexSkcx/indexSkcx","indexHhzwss-component":"/package/indexHhzwss/pages/indexHhzwss/indexHhzwss","indexWs-component":"/package/indexWs/pages/indexWs/indexWs","indexBzly-component":"/package/indexBzly/pages/indexBzly/indexBzly","indexOyky-component":"/package/indexOyky/pages/indexOyky/indexOyky","index-float-btn":"/components/indexFloatBtn/indexFloatBtn","indexCar1-component":"/package/indexCar1/indexCar1","indexCar2-component":"/package/indexCar2/indexCar2","indexCar3-component":"/package/indexCar3/indexCar3","indexDh2-component":"/package/indexDh2/components/indexDh2/indexDh2","hot-line":"/pages/components/hot_line/hot_line","hot-line2":"/components/hotLine2/hotLine2","hot-line-college":"/components/hotLineCollege/hotLineCollege","hotLineCollegeByType":"/components/hotLineCollegeByType/hotLineCollegeByType","hotLineMultiLevel":"/components/hotLineMultiLevel/hotLineMultiLevel","index-tel":"/components/indexTel/indexTel","banner-notice":"/components/bannerNotice/bannerNotice"},"componentPlaceholder":{"index21-component":"view","index41-component":"view","index6-component":"view","indexHbcx-component":"view","indexSkcx-component":"view","indexHhzwss-component":"view","indexWs-component":"view","indexBzly-component":"view","indexOyky-component":"view","indexCar1-component":"view","indexCar2-component":"view","indexCar3-component":"view","indexDh2-component":"view"}};
		__wxAppCode__['pages/index_dh/index_dh.json'] = {"navigationBarTitleText":"首页","enablePullDownRefresh":false,"usingComponents":{"banner-notice":"/components/bannerNotice/bannerNotice","indexDh2":"/package/indexDh2/components/indexDh2/indexDh2","index-float-btn":"/components/indexFloatBtn/indexFloatBtn"},"componentPlaceholder":{"indexDh2":"view"}};
		__wxAppCode__['pages/partner/partner_from/partner_from.json'] = {"navigationBarTitleText":"加载中..","enablePullDownRefresh":false,"navigationStyle":"custom","usingComponents":{"cu-nav":"/components/cuNav/cuNav","privacy-popup":"/components/privacyPopup/privacyPopup"}};
		__wxAppCode__['pages/takeCarInfo/takeCarInfo.json'] = {"navigationBarTitleText":"乘车信息","enablePullDownRefresh":false,"usingComponents":{"cu-nav":"/components/cuNav/cuNav","banner-notice":"/components/bannerNotice/bannerNotice","index-float-btn":"/components/indexFloatBtn/indexFloatBtn"}};
		__wxAppCode__['pages/user_center/userCenter1/userCenter1.json'] = {"component":true,"usingComponents":{"cu-nav":"/components/cuNav/cuNav"}};
		__wxAppCode__['pages/user_center/userCenter2/userCenter2.json'] = {"component":true,"usingComponents":{"cu-nav":"/components/cuNav/cuNav"}};
		__wxAppCode__['pages/user_center/userCenter3/userCenter3.json'] = {"component":true,"usingComponents":{"cu-nav":"/components/cuNav/cuNav"}};
		__wxAppCode__['pages/user_center/user_center.json'] = {"navigationBarTitleText":"个人中心","enablePullDownRefresh":false,"navigationStyle":"custom","usingComponents":{"cu-nav":"/components/cuNav/cuNav","userCenter1-component":"/pages/user_center/userCenter1/userCenter1","userCenter2-component":"/pages/user_center/userCenter2/userCenter2","userCenter3-component":"/pages/user_center/userCenter3/userCenter3","index-float-btn":"/components/indexFloatBtn/indexFloatBtn"}};
		__wxAppCode__['pages/webview/webview.json'] = {"usingComponents":{}};
	;var __WXML_DEP__=__WXML_DEP__||{};__WXML_DEP__["./components/hotLineMultiLevel/hotLineMultiLevel.wxml"]=["./pages/template/interval.wxml",];__WXML_DEP__["./components/indexFloatBtn/indexFloatBtn.wxml"]=["./pages/template/interval.wxml",];__WXML_DEP__["./components/realNamePassenger/realNamePassenger.wxml"]=["./pages/template/interval.wxml",];__WXML_DEP__["./pages/home/index4/index4.wxml"]=["./pages/common/icon.wxml",];__WXML_DEP__["./pages/home2/home2.wxml"]=["./pages/template/interval.wxml",];__WXML_DEP__["./pages/home2/index4/index4.wxml"]=["./pages/common/icon.wxml",];__WXML_DEP__["./pages/index/index1/index1.wxml"]=["./pages/template/interval.wxml",];__WXML_DEP__["./pages/index/index11/index11.wxml"]=["./pages/template/interval.wxml",];__WXML_DEP__["./pages/index/index4/index4.wxml"]=["./pages/common/icon.wxml",];__WXML_DEP__["./pages/index/index42/index42.wxml"]=["./pages/common/icon.wxml",];__WXML_DEP__["./pages/index/index43/index43.wxml"]=["./pages/common/icon.wxml",];__WXML_DEP__["./pages/user_center/userCenter1/userCenter1.wxml"]=["./pages/template/interval.wxml",];__WXML_DEP__["./pages/user_center/userCenter2/userCenter2.wxml"]=["./pages/template/interval.wxml",];__WXML_DEP__["./pages/user_center/userCenter3/userCenter3.wxml"]=["./pages/template/interval.wxml",];__WXML_DEP__["./pages/user_center/user_center.wxml"]=["./pages/template/interval.wxml",];;var __LAZY_CODE_LOADING_CHUNK_MAP__=__LAZY_CODE_LOADING_CHUNK_MAP__||{};[['__COMMON__',['package/index21/index2','pages/common/icon','pages/template/interval',]],['chunk_0',['components/bannerNotice/bannerNotice',]],['chunk_1',['components/calendarSwiper/calendarSwiper',]],['chunk_10',['components/privacyPopup/privacyPopup',]],['chunk_11',['components/realNamePassenger/realNamePassenger',]],['chunk_12',['package/index21/index21',]],['chunk_13',['package/indexCar1/indexCar1','pages/index/index',]],['chunk_14',['package/indexCar2/indexCar2',]],['chunk_15',['package/intervalCar1/pages/interval/interval',]],['chunk_16',['package/intervalCar2/pages/interval/interval',]],['chunk_17',['package/partnerOrderDetails/pages/partnerOrderDetails/partnerOrderDetails',]],['chunk_18',['package/waybusIndex/pages/waybusIndex/waybusIndex',]],['chunk_19',['pages/components/calendar_swiper/calendar_swiper',]],['chunk_2',['components/cuNav/cuNav',]],['chunk_20',['pages/components/hot_line/hot_line',]],['chunk_21',['pages/cx/cx',]],['chunk_22',['pages/home/home','pages/home/index1/index1','pages/home/index4/index4','pages/home/index5/index5',]],['chunk_23',['pages/home2/home2','pages/home2/index1/index1','pages/home2/index4/index4','pages/home2/index5/index5',]],['chunk_24',['pages/index/indexStop/indexStop',]],['chunk_25',['pages/index2/index2',]],['chunk_26',['pages/index_dh/index_dh',]],['chunk_27',['pages/partner/partner_from/partner_from',]],['chunk_28',['pages/takeCarInfo/takeCarInfo',]],['chunk_29',['pages/user_center/userCenter1/userCenter1','pages/user_center/userCenter2/userCenter2','pages/user_center/userCenter3/userCenter3','pages/user_center/user_center',]],['chunk_3',['components/hotLine/hotLine','components/travelLineList/travelLineList','pages/home2/indexHotLine/indexHotLine',]],['chunk_30',['pages/webview/webview',]],['chunk_4',['components/hotLine2/hotLine2','pages/index/index1/index1','pages/index/index11/index11','pages/index/index2/index2','pages/index/index3/index3','pages/index/index4/index4','pages/index/index42/index42','pages/index/index43/index43','pages/index/index5/index5','pages/index/index51/index51','pages/index/index512/index512','pages/index/index52/index52','pages/index/index53/index53','pages/index/indexNav/indexNav',]],['chunk_5',['components/hotLineCollege/hotLineCollege','components/hotLineCollegeByType/hotLineCollegeByType','components/hotLineMultiLevel/hotLineMultiLevel',]],['chunk_6',['components/indexFloatBtn/indexFloatBtn',]],['chunk_7',['components/indexSearchHistory/indexSearchHistory',]],['chunk_8',['components/indexTel/indexTel',]],['chunk_9',['components/orderRuleModal/orderRuleModal',]],].forEach(function(a){(a[1]||[]).forEach(function(b){__LAZY_CODE_LOADING_CHUNK_MAP__[b]=__LAZY_CODE_LOADING_CHUNK_MAP__[b]||a[0]||''});});var __wxAppData=__wxAppData||{};var __wxRoute=__wxRoute||"";var __wxRouteBegin=__wxRouteBegin||"";var __wxAppCode__=__wxAppCode__||{};var global=global||{};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var __wxAppCurrentFile__=__wxAppCurrentFile__||"";var Component=Component||function(){};var definePlugin=definePlugin||function(){};var requirePlugin=requirePlugin||function(){};var Behavior=Behavior||function(){};var __vd_version_info__=__vd_version_info__||{};var __GWX_GLOBAL__=__GWX_GLOBAL__||{};
/*v0.5vv_20211229_syb_scopedata*/global.__wcc_version__='v0.5vv_20211229_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'icon_small_select'])
Z([3,'icon_small_circle'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'geton_address_icon_word'])
Z([3,'getoff_address_icon_word'])
Z([3,'geton_address_icon_round'])
Z([3,'getoff_address_icon_round'])
Z([3,'geton_geoff_infor'])
Z([3,'header_swiper_pager'])
Z([3,'loading_mask'])
Z([[7],[3,'loadTips']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"m_./components/hotLineCollege/hotLineCollege.wxml:m1":np_0,"p_./package/index21/index21.wxs":np_1,};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./components/hotLineCollege/hotLineCollege.wxml']={};
f_['./components/hotLineCollege/hotLineCollege.wxml']['m1'] =nv_require("m_./components/hotLineCollege/hotLineCollege.wxml:m1");
function np_0(){var nv_module={nv_exports:{}};var nv_fixedPrice = (function (nv_price){if (nv_price == 0)return(0);;var nv_max = undefined;nv_price = (nv_price / 100).nv_toFixed(2);return(+(nv_price.nv_split('.')[(1)] == 0 ? nv_price.nv_split('.')[(0)]:nv_price))});nv_module.nv_exports.nv_fixedPrice = nv_fixedPrice;return nv_module.nv_exports;}

f_['./package/index21/index21.wxs'] = nv_require("p_./package/index21/index21.wxs");
function np_1(){var nv_module={nv_exports:{}};function nv_clickChange(nv_e){nv_console.nv_log("clickChange",nv_e)};nv_module.nv_exports = ({nv_clickChange:nv_clickChange,});return nv_module.nv_exports;}

var x=['./pages/common/icon.wxml','./pages/template/interval.wxml'];d_[x[0]]={}
d_[x[0]]["icon_small_select"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':icon_small_select'
r.wxVkey=b
gg.f=$gdc(f_["./pages/common/icon.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["icon_small_circle"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':icon_small_circle'
r.wxVkey=b
gg.f=$gdc(f_["./pages/common/icon.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
d_[x[1]]["geton_address_icon_word"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':geton_address_icon_word'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/interval.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["getoff_address_icon_word"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':getoff_address_icon_word'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/interval.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["geton_address_icon_round"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':geton_address_icon_round'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/interval.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["getoff_address_icon_round"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':getoff_address_icon_round'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/interval.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["geton_geoff_infor"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':geton_geoff_infor'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/interval.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["header_swiper_pager"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':header_swiper_pager'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/interval.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["loading_mask"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':loading_mask'
r.wxVkey=b
gg.f=$gdc(f_["./pages/template/interval.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,7,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||true)$gwx();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/common/icon.wxml'] = [$gwx, './pages/common/icon.wxml'];else __wxAppCode__['pages/common/icon.wxml'] = $gwx( './pages/common/icon.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/template/interval.wxml'] = [$gwx, './pages/template/interval.wxml'];else __wxAppCode__['pages/template/interval.wxml'] = $gwx( './pages/template/interval.wxml' );
	;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("148844069105A88C72EE2C014693FB65.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e={corpID:"test",interval:"interval",appid:"wx00f14162b7dcb69c",webHost:"https://www.ylxweb.com",staticHost:"https://static.ylxweb.com",host:"https://256841v3-api.ylxweb.com",pagesUrl:{interval_url:"/package/bus/pages/interval/interval",interval2_url:"/package/interval2/pages/interval2/interval2",interval21_url:"/package/interval21/pages/interval21/interval21",interval22_url:"/package/interval22/pages/interval22/interval22",interval221_url:"/package/interval221/pages/interval221/interval221",interval23_url:"/package/interval23/pages/interval23/interval23",interval24_url:"/package/interval24/pages/interval24/interval24",interval3_url:"/package/interval3/pages/interval3/interval3",interval31_url:"/package/interval31/pages/interval31/interval31",intervalSwc_url:"/package/swc/pages/interval/interval",fillorder_url:"/package/fillorder/pages/fillorder/fillorder",order_result_url:"/package/bus/pages/order_result/order_result",order_detail_url:"/package/bus/pages/order_detail/order_detail",selectDate_url:"/package/index4/pages/select_date/select_date"},pagesUrlV2:{interval:"/package/bus/pages/interval/interval",interval2:"/package/interval2/pages/interval2/interval2",interval21:"/package/interval21/pages/interval21/interval21",interval22:"/package/interval22/pages/interval22/interval22",interval221:"/package/interval221/pages/interval221/interval221",interval23:"/package/interval23/pages/interval23/interval23",interval3:"/package/interval3/pages/interval3/interval3",interval31:"/package/interval31/pages/interval31/interval31",intervalSwc:"/package/swc/pages/interval/interval",fillorder:"/package/fillorder/pages/fillorder/fillorder",order_result:"/package/bus/pages/order_result/order_result",order_detail:"/package/bus/pages/order_detail/order_detail",selectDate:"/package/index4/pages/select_date/select_date"},defaultRequestUrl:"/api/wg.do",defaultUserInfo:{avatarUrl:"/images/mine_avatar_230526.png",nickName:"微信用户",serverHaveNickName:!1,serverHaveAvatar:!1},changMultiCorpList:["cfd","jincky","lvcky","zqbs","ttxy","zxxy","sfcx","xydd","msdxs","kyztc","csxybs","ytxy","jkt","wxt","xltxc","xbd","hxxybs","xyjxztc","czxyjx","yybus","jyxybs","xqihang","qihang","jcx","jtcx","dzcx","dlcx","jtjxztc","sxinbs","xyjx","ywxy","ylxxycx"],selectOrderLocationInFillorderList:["hbcj","skcx","jzfzx","wnyc","ytcxgj","jtnx","lhqnkc","dgcx","njcx","lywsjc","antong","ttp","nxzdcx","xylx","ltly"],indexSupportName:"技术支持：亿路行",primaryColor:"blue",hasHKMOCorpList:["ycx","zhuoyue","xiaoan","wbs","gskc","gsbs","xhbs","bbzgx","adbus","btdbs","xxbs","test","aycx","lzbs","xebs","ddbus","asdbs","xyx","ygztbs"],hasBCCorpList:["xjbs","test","xxbs","lfjz"],isHideAllGetPhone:[""],indexBtnJudgeHotLineCorpList:["ddbus","bbzgx","xxbs","zyuebs","szhcx","dlcx","pascx","lfjz","sdcd","xyx","xfacx","yaoxcx"],showCharterCarCorpList:["hzzhcx","wwcaky","mqcx","bycx","hhzwss","hdhd","kkys","xqkcx","hzcx","ltly","xxbs","cjyx","njcx","nxzdcx","wabc","npt","lbscx","xgcx"],nonProprietaryCorpList:["hdsw","sjztc","lbcd","bncd","dbbzkc","tyxy","zqbs","zxly","xycxzj","zxxybs","lexing","axky","wpxy","xltxc","chixxy","ztxybs","sxxy","yxxy","yfqcxybs","txxy","ttxy","dyjxztc","dxxy","ttbus","jyxycx","xcxyztc","lxh","wzztc","zlztc","lxxy","sdmc","ycxydb","sydxyztc","lwztc","tlgx","kyztc","skxy","ytxy","ltxycx","zdxyztc","lexing","atky","xinchen","ylxxycx","ydztc","cxxybs","jinxztc","lxxxy","lhxycx","msdxs","txbus","ycbus","xjhyxybs","yxxybs","atztc","xybb","xlhxyztc","xlhxyztc","xyxybus","tcky","htxy","ldcx","ctbs","jhyxyztc","jnsf","bbzgx","qsxycx","jobs"]};module.exports=e;
},{isPage:false,isComponent:false,currentFile:'148844069105A88C72EE2C014693FB65.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("3BE296B59105A88C5D84FEB2CFF3FB65.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getNewPhoneNumberPro=c,exports.getPhoneNumberPro=s,exports.getServerUserInfo=d,exports.getTelStorage=function(){var e=wx.getStorageSync("pt_tel");return console.log("pt_tel in storage:",e),!(!a.util.isNotNull(e)||11!=e.toString().length)&&e},exports.getUserInfoStorage=function(){var e=t({},a.config.defaultUserInfo),r=wx.getStorageSync(a.globalData.corp.appid+"_userInfo",e);(r.serverHaveNickName||r.serverHaveAvatar)&&(e=t({},r));return e},exports.getUserProfilePro=function(){return x.apply(this,arguments)},exports.handleGetPhoneNumber=function(e){return l.apply(this,arguments)},exports.updateWxUserNickname=function(e,t){return p.apply(this,arguments)},exports.updateWxUserUserHeadimg=function(e,t){return g.apply(this,arguments)},exports.updateXcxUserInfo=w;var e=require("@babel/runtime/helpers/regeneratorRuntime.js"),t=require("@babel/runtime/helpers/objectSpread2.js"),r=require("@babel/runtime/helpers/asyncToGenerator.js"),a=getApp(),n=require("C6AC61C49105A88CA0CA09C31864FB65.js").isSupportFun,o=require("727D99A59105A88C141BF1A2A784FB65.js");function s(e,t){return u.apply(this,arguments)}function u(){return(u=r(e().mark((function t(r,n){var o,s,u,c;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.util.isNull(r.detail.encryptedData)&&!a.util.isNull(r.detail.iv)){e.next=2;break}return e.abrupt("return",{success:!1,tel:NaN,data:{tel:NaN}});case 2:return o=wx.getStorageSync(a.globalData.corp.appid+"_openid"),s={action:"weixin.getPhoneNumber",wxkfpt:1,encryptedData:r.detail.encryptedData,iv:r.detail.iv,openid:o},u={},c=0,wx.showNavigationBarLoading(),e.next=9,a.network.requestPOST(s).then((function(e){e.success&&a.util.isNotNull(e.data.tel)?(c=1,e.tel=e.data.tel,a.globalData.tel=e.data.tel,wx.setStorageSync("pt_tel",e.data.tel),a.util.showMsg(n),console.log("登陆成功",e)):(console.log("登陆失败",e),c=2,e.message=e.message||"登录失败",e.data={success:!1,tel:NaN,data:{tel:NaN}}),e.resultCode=c,u=e})).catch((function(e){e.data={success:!1,tel:NaN,data:{tel:NaN}},e.resultCode=3,e.message=e.message||"登录失败",a.util.showMsg(e.message),u=e}));case 9:return wx.hideNavigationBarLoading(),e.abrupt("return",u);case 11:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function c(e,t){return i.apply(this,arguments)}function i(){return(i=r(e().mark((function t(r,n){var o,s,u,c;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.util.isNull(r.detail.code)){e.next=2;break}return e.abrupt("return",{success:!1,tel:NaN,data:{tel:NaN}});case 2:return o=wx.getStorageSync(a.globalData.corp.appid+"_openid"),s={action:"weixin.getNewPhoneNoInfo",openid:o,code:r.detail.code},u={},c=0,wx.showNavigationBarLoading(),e.next=9,a.network.requestPOST(s).then((function(e){console.log(e),e.success&&a.util.isNotNull(e.data.tel)?(c=1,a.globalData.tel=e.data.tel,wx.setStorageSync("pt_tel",e.data.tel),a.util.showMsg(n),console.log("登陆成功",e)):(console.log("登陆失败",e),c=2,e.message=e.message||"登录失败",e.data={success:!1,tel:NaN,data:{tel:NaN}}),e.resultCode=c,u=e})).catch((function(e){e.data={success:!1,tel:NaN,data:{tel:NaN}},e.resultCode=3,e.message=e.message||"登录失败",a.util.showMsg(e.message),u=e}));case 9:return wx.hideNavigationBarLoading(),e.abrupt("return",u);case 11:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function l(){return(l=r(e().mark((function t(r){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n("2.21.2")){e.next=7;break}return e.next=4,c(r);case 4:return e.abrupt("return",e.sent);case 7:return e.next=9,s(r);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function p(){return(p=r(e().mark((function r(n,s){var u,c;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}throw"updateWxUserNickname 参数有误 缺少用户昵称";case 2:return console.log("updateWxUserNickname nickName",n),u=t({},a.config.defaultUserInfo),console.log("131 userInfo",u),c={action:"weixin.updateMaWxUserNickname",nickname:n},e.next=8,a.network.requestPOST(c).then((function(e){a.util.showMsg(e.message||s);var r=wx.getStorageSync(a.globalData.corp.appid+"_userInfo",u);console.log("userInfoStorage",r),u=t(t(t({},a.config.defaultUserInfo),r),{},{nickName:n,serverHaveNickName:!0}),"微信用户"==n&&(u.serverHaveNickName=!1),a.globalData.userInfo=u,wx.setStorageSync(a.globalData.corp.appid+"_userInfo",u)})).catch((function(e){a.util.showMsg(e.message||"保存失败"),o.warn("填写用户昵称失败updateWxUserNickname err",e)}));case 8:return console.log("保存用户昵称：",u),e.abrupt("return",u);case 10:case"end":return e.stop()}}),r)})))).apply(this,arguments)}function g(){return(g=r(e().mark((function t(r,n){var s;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}throw"updateWxUse rUserHeadimg 缺少必要参数：用户头像url";case 2:return s=a.globalData.openid||wx.getStorageSync(a.globalData.corp.appid+"_openid"),e.next=5,new Promise((function(e,t){wx.uploadFile({url:"https://www.ylxweb.com/imageUpload/uploadMaWxUserHeadimg/".concat(a.globalData.corp.ID,"/").concat(a.globalData.corp.appid,"/").concat(s),filePath:r,name:"avatarFile",timeout:6e3,success:function(t){e(t)},fail:function(e){t(e.data),a.util.showMsg(e.message||"上传头像失败"),console.log("上传用户头像失败updateWxUserUserHeadimg err",e),o.warn("上传用户头像失败updateWxUserUserHeadimg err",e)},complete:function(e){console.log("上传用户头像完成updateWxUserUserHeadimg complete res",e)}})}));case 5:return e.next=7,d();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function d(){return f.apply(this,arguments)}function f(){return(f=r(e().mark((function r(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t({},a.config.defaultUserInfo),e.next=3,a.network.requestPOST({action:"weixin.get_xcx_user"}).then((function(e){e.success&&a.util.isNotNull(e.data)&&(n={avatarUrl:e.data.headimgurl?e.data.headimgurl:a.config.defaultUserInfo.avatarUrl,nickName:e.data.nickname,serverHaveNickName:!(!e.data.nickname||"微信用户"===e.data.nickname),serverHaveAvatar:!!e.data.headimgurl},a.globalData.userInfo=n,wx.setStorageSync(a.globalData.corp.appid+"_userInfo",n))})).catch((function(e){console.log("获取服务器用户信息失败getServerUserInfo err",e),o.warn("获取服务器用户信息失败getServerUserInfo err",e)}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),r)})))).apply(this,arguments)}function x(){return(x=r(e().mark((function r(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t({},a.config.defaultUserInfo),e.next=3,wx.getUserProfile({desc:"用于完善会员资料",lang:"zh_CN"}).then((function(e){return console.log(e),n.nickName=e.userInfo.nickName,n.avatarUrl=e.userInfo.avatarUrl,n.serverHaveNickName=!0,n.serverHaveAvatar=!0,w(e),a.globalData.userInfo=n,wx.setStorageSync(a.globalData.corp.appid+"_userInfo",n),n})).catch((function(e){return console.log(e),n}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),r)})))).apply(this,arguments)}function w(e){return N.apply(this,arguments)}function N(){return(N=r(e().mark((function t(r){var n,o;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return n={action:"weixin.update_xcx_user",rawData:r.rawData,encryptedData:r.encryptedData,signature:r.signature,iv:r.iv},e.next=5,a.network.requestPOST(n).then((function(e){return e})).catch((function(e){return e}));case 5:return o=e.sent,e.abrupt("return",o.success);case 7:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
},{isPage:false,isComponent:false,currentFile:'3BE296B59105A88C5D84FEB2CFF3FB65.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("3D62BF329105A88C5B04D735CAB4FB65.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";function e(e){return(e=e.toString())[1]?e:"0"+e}function t(e){return null!=e&&""!=e&&"undefined"!=e&&null!=e&&"null"!=e&&"(null)"!=e&&"NULL"!=e&&void 0!==e&&""!=(e=(e+="").replace(/\s/g,""))}function n(e){return!t(e)}function r(e){return e=(e=(e=(e=(e=(e=(e=(e=e.replace(/^(\-)*(\d+)\.(\d{6}).*$/,"$1$2.$3")).replace(/[\u4e00-\u9fa5]+/g,"")).replace(/[a-zA-Z]/g,"")).replace(/[`!@#$%^&*()_+]/g,"")).replace(/[\{\}\|\/\<\>\?\;\:\'\"\,\[\]\=\\]/g,"")).replace(/[~！￥…（）—【】、；‘’：“”，。、《》？]/g,"")).replace(/^\./g,"")).replace(".","$#$").replace(/\./g,"").replace("$#$",".")}require("@babel/runtime/helpers/Arrayincludes.js");function a(e){t(e)&&wx.showToast({title:e,icon:"none",mask:!1,duration:3e3})}function o(e){t(e)?wx.makePhoneCall({phoneNumber:e,success:function(){console.log("成功拨打电话")},fail:function(){console.log("用户点击取消")}}):console.log("手机号为空")}module.exports={formatTime:function(t){var n=t.getFullYear(),r=t.getMonth()+1,a=t.getDate(),o=t.getHours(),i=t.getMinutes(),c=t.getSeconds();return[n,r,a].map(e).join("/")+" "+[o,i,c].map(e).join(":")},formatShortTime:function(t){return[t.getFullYear(),t.getMonth()+1,t.getDate()].map(e).join("-")},formatDate:function(e){var t=e.split("-");return t[1]+"月"+t[2]+"日"},formatSF:function(t){return[t.getHours(),t.getMinutes()].map(e).join(":")},formatSFM:function(t){return[t.getHours(),t.getMinutes(),t.getSeconds()].map(e).join(":")},getCurrentDay:function(e){return e.getDate()-1},addDate:function(e){var t=new Date;t.setDate(t.getDate()+ +e);var n=t.getMonth()+1;n<10&&(n="0"+n);var r=t.getDate();return r<10&&(r="0"+r),t.getFullYear()+"-"+n+"-"+r},addDaysByDate:function(e,t){var n=t?new Date(t):new Date;n.setDate(n.getDate()+ +e);var r=n.getMonth()+1;r<10&&(r="0"+r);var a=n.getDate();return a<10&&(a="0"+a),n.getFullYear()+"-"+r+"-"+a},formatDateWithYear:function(e){var t=e.split("-");return t[0]+"年"+t[1]+"月"+t[2]+"日"},getWeekName:function(e){var t=new Date(e),n="";switch(t.getDay()){case 1:n="星期一";break;case 2:n="星期二";break;case 3:n="星期三";break;case 4:n="星期四";break;case 5:n="星期五";break;case 6:n="星期六";break;case 0:n="星期日"}return t.toDateString()===(new Date).toDateString()&&(n="(今天)"),n},getWeek:function(e){var t=new Date(e),n="";switch(t.getDay()){case 1:n="周一";break;case 2:n="周二";break;case 3:n="周三";break;case 4:n="周四";break;case 5:n="周五";break;case 6:n="周六";break;case 0:n="周日"}return t.toDateString()===(new Date).toDateString()&&(n="今天"),n},getDateVersion:function(){var e=new Date,t=e.getMonth()+1,n=""+e.getFullYear()+t+e.getDay();return console.log(n),n},isNotNull:t,isNull:n,integerNum:function(e){return e=(e=r(e)).replace(/[\.]/g,"")},positiveInteger:function(e){return e=(e=r(e)).replace(/[\-\.]/g,"")},positiveNum:function(e){return e=(e=r(e)).replace(/[\-]/g,"")},formatNum:r,onlyText:function(e){return e=(e=(e=(e=e.replace(/[\d]/g,"")).replace(/[`!@#$%^&*()_+]/g,"")).replace(/[\{\}\|\/\<\>\?\;\:\'\"\,\[\]\=\\]/g,"")).replace(/[~！￥…（）—【】、；‘’：“”，。、《》？]/g,"")},onlyName:function(e){return e=(e=e.replace(/[\d]/g,"")).replace(/[`!@#$%^&*()_+{}\[\]|\\;:"<>,.?~！￥…（）—【】、；‘’：“”，。《》？]/g,"")},regYuanToFen:function(e,t){if(n(e))return 0;t=t||100;var r=0,a=e.toString(),o=t.toString();try{r+=a.split(".")[1].length}catch(e){}try{r+=o.split(".")[1].length}catch(e){}return Number(a.replace(".",""))*Number(o.replace(".",""))/Math.pow(10,r)},showMsg:a,makePhoneCall:o,makePhoneCallArray:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"拨打电话";if(!n(e))if((e=e.replace(/[，；;]/g,",")).includes(",")){var r=e.split(",");r.length>6&&r.splice(6),wx.showActionSheet({alertText:"tel"==t?"拨打电话":t,itemList:r,success:function(e){o(r[e.tapIndex])},fail:function(e){console.log(e.errMsg),"showActionSheet:fail parameter error: itemList should not be large than 6"==e.errMsg&&(o(r[0]),a("最多支持6个号码"))}})}else o(e)},goOtherMiniApp:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/pages/index/index",r=arguments.length>2?arguments[2]:void 0;(n(e)||n(t))&&n(r)?a("跳转到其他小程序失败 缺少appId/path，或短链"):wx.navigateToMiniProgram({appId:e,path:t,shortLink:r,envVersion:"release",success:function(e){console.log(e)},fail:function(e){console.log(e)}})},routerToPage:function(e){n(e)?console.log("横幅配置参数有误，小程序跳转地址不正确"):-1==e.indexOf("http")&&(0===e.indexOf("/package/")||0===e.indexOf("/pages/")?["/pages/index/index","/pages/index2/index2","/pages/home/home","/pages/home2/home2","/pages/cx/cx","/pages/user_center/user_center"].includes(e)?wx.switchTab({url:e,fail:function(e){console.log("err",e),a(e)}}):wx.navigateTo({url:e,fail:function(e){console.log("err",e),a(e)}}):a("小程序页面路径设置有误"))},fixedPrice:function(e){return 0==e?0:+(0==(e=(e/100).toFixed(2)).split(".")[1]?e.split(".")[0]:e)},isPhoneNum:function(e){return t(e)&&-1==e.toString().indexOf(".")&&11===e.toString().length&&"number"==typeof Number(e)},enQueryString:function(e){return Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&")},deQueryString:function(e){if(!e||e=={})return{};for(var t in e)e[t]=decodeURIComponent(e[t]);return e}};
},{isPage:false,isComponent:false,currentFile:'3D62BF329105A88C5B04D735CAB4FB65.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("463655C49105A88C20503DC35E04FB65.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=getApp(),t="/api/v1/".concat(e.globalData.corp.ID,"/").concat(e.globalData.corp.appid,"/monthcard/"),r={beforeFillorder:function(r,o,a){return e.network.requestFetch({url:t+"beforeFillorder",method:"POST",params:{tel:r,takeDate:o,lineid:a}})}};exports.default=r;
},{isPage:false,isComponent:false,currentFile:'463655C49105A88C20503DC35E04FB65.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("490F57439105A88C2F693F444F24FB65.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e,r=require("@babel/runtime/helpers/regeneratorRuntime.js"),t=require("@babel/runtime/helpers/asyncToGenerator.js"),n=getApp(),a="/api/v1/".concat(n.globalData.corp.ID,"/").concat(n.globalData.corp.appid,"/weixin/"),u=function(){var e=t(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.network.requestFetch({url:a+"getCusetomer",method:"POST",params:{tel:t}}));case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),s={getCusetomer:u,isMember:(e=t(r().mark((function e(t){var n,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t);case 2:return n=e.sent,a=!1,n.success&&n.data&&(a=n.data.isMember),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)}))),function(r){return e.apply(this,arguments)})};exports.default=s;
},{isPage:false,isComponent:false,currentFile:'490F57439105A88C2F693F444F24FB65.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("4B6480569105A88C2D02E851C2A3FB65.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e,r=require("@babel/runtime/helpers/regeneratorRuntime.js"),t=require("@babel/runtime/helpers/asyncToGenerator.js"),a=getApp(),n="/api/v1/".concat(a.globalData.corp.ID,"/").concat(a.globalData.corp.appid,"/customer/"),c={getBalance:(e=t(r().mark((function e(t){var c,u;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=0,e.next=3,a.network.requestFetch({url:n+"get_balance",method:"POST",params:{tel:t}});case 3:return(u=e.sent).success&&u.data&&(c=a.util.fixedPrice(u.data.balance)),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)}))),function(r){return e.apply(this,arguments)})};exports.default=c;
},{isPage:false,isComponent:false,currentFile:'4B6480569105A88C2D02E851C2A3FB65.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("711CA4129105A88C177ACC153CD3FB65.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("@babel/runtime/helpers/typeof.js"),e=getApp(),r="/api/v1/".concat(e.globalData.corp.ID,"/").concat(e.globalData.corp.appid,"/interval/"),a={getIntervalRemindInfo:function(t,a){return e.network.requestFetch({url:r+"getIntervalRemindInfo",method:"GET",params:{startCityId:t,endCityId:a}})},intervalListV2:function(t){var a=t.startCityId,n=t.endCityId,o=t.tripDate,d=t.start,i=t.limit,s=t.startAreaId,u=t.endAreaId;return e.network.requestFetch({url:r+"intervalListV2",method:"GET",params:{tripDate:o,startCityId:a,endCityId:n,startAreaId:s,endAreaId:u,start:d,limit:i}})},getIntervalByDivision:function(a){return"object"!=t(a)?Promise.reject("请求参数有误"):e.network.requestFetch({url:r+"getIntervalByDivision",method:"GET",params:{takeDate:a.takeDate,startAdCode:a.startAdCode,endAdCode:a.endAdCode,startTownStreetCode:a.startTownStreetCode,endTownStreetCode:a.endTownStreetCode,startAreaId:a.startAreaId,endAreaId:a.endAreaId,start:a.start,limit:a.limit}})},infoV2:function(t){return e.network.requestFetch({url:r+"infoV2",method:"GET",params:{id:t}})},infoV3:function(t){return e.network.requestFetch({url:r+"infoV3",method:"get",params:t})},getSegmentPriceLocationList:function(t){return e.network.requestFetch({url:r+"getSegmentPriceLocationList",method:"get",params:{intervalId:t.intervalId,code:t.code,type:t.type}})}};exports.default=a;
},{isPage:false,isComponent:false,currentFile:'711CA4129105A88C177ACC153CD3FB65.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("727D99A59105A88C141BF1A2A784FB65.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=wx.getRealtimeLogManager?wx.getRealtimeLogManager():null;module.exports={debug:function(){e&&e.debug.apply(e,arguments)},info:function(){e&&e.info.apply(e,arguments)},warn:function(){e&&e.warn.apply(e,arguments)},error:function(){e&&e.error.apply(e,arguments)},setFilterMsg:function(t){e&&e.setFilterMsg&&"string"==typeof t&&e.setFilterMsg(t)}};
},{isPage:false,isComponent:false,currentFile:'727D99A59105A88C141BF1A2A784FB65.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("76AB9B769105A88C10CDF3717594FB65.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("@babel/runtime/helpers/Arrayincludes.js");var e=require("@babel/runtime/helpers/objectSpread2.js"),t=require("@babel/runtime/helpers/regeneratorRuntime.js"),a=require("@babel/runtime/helpers/asyncToGenerator.js"),n=require("148844069105A88C72EE2C014693FB65.js"),r=require("3D62BF329105A88C5B04D735CAB4FB65.js"),o=r.showMsg,i=r.isNotNull,s=n.defaultRequestUrl,c=wx.getExtConfigSync?wx.getExtConfigSync():{},u=c.host?c.host:n.host,d=require("FAE9A9349105A88C9C8FC133EEA4FB65.js"),p=d.encryptRequestBody,l=d.arrayBufferToBase64,g=d.returnEncryptRequestParams,f=require("FB6AEB519105A88C9D0C83563554FB65.js").PowManager,h=require("727D99A59105A88C141BF1A2A784FB65.js"),w=new f({host:u,corpid:c.corpID,version:c.version,openid:v()});function m(){return(m=a(t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.init();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x="";function v(){if(!x){console.log("openId为空",x);try{var e=wx.getStorageSync(c.appid+"_openid");e&&(x=e)}catch(e){console.log("获取内存userInfo失败",e)}}return console.log("openId：",x),x}function y(){wx.hideLoading(),wx.hideNavigationBarLoading()}function b(){return(b=a(t().mark((function e(a,n,r,o,i,s){var d;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return wx.showNavigationBarLoading(),""!=r&&wx.showLoading({title:r}),e.next=4,w.getChallengeHeaderParams();case 4:if(d=e.sent){e.next=8;break}return y(),e.abrupt("return",Promise.reject({message:"网络请求数据构造异常"}));case 8:(n=n||{}).subAppid=c.appid,n.corpid=c.corpID,n.openid=v(),wx.request({url:u+a,data:n,method:"POST",header:{"content-type":"application/x-www-form-urlencoded","X-Ca-Nonce":d.challenge+d.nonce,challenge:d.originalKey,bucket:d.nonce},success:function(e){wx.hideNavigationBarLoading(),""!=r&&wx.hideLoading(),200===e.statusCode?"function"==typeof o&&o(e.data):("function"==typeof i&&i(e.data),wx.showToast({title:"网络错误，请重试！"+e.errMsg,icon:"none",mask:!1,duration:2e3}),h.error("requestFail res.statusCode!=200",e.statusCode,e))},fail:function(e){wx.hideNavigationBarLoading(),""!=r&&wx.hideLoading(),"function"==typeof i&&i(),wx.showToast({title:"网络错误，请重试！！"+e.errMsg,icon:"none",mask:!0,duration:2e3}),h.error("requestFail fail",e.statusCode,e),console.log("requestFail fail",e.statusCode,e)},complete:function(){"function"==typeof s&&s()}});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=function(){var e=a(t().mark((function e(a){var n,r,i,d=arguments;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.length>1&&void 0!==d[1]?d[1]:s,r=d.length>2?d[2]:void 0,wx.showNavigationBarLoading(),e.next=5,w.getChallengeHeaderParams();case 5:if(i=e.sent){e.next=9;break}return y(),e.abrupt("return",Promise.reject({message:"网络请求数据构造异常"}));case 9:return(a=a||{}).corpid=c.corpID,a.subAppid=c.appid,a.appid=c.appid,a.openid=v(),e.abrupt("return",new Promise((function(e,t){wx.request({url:u+n,data:a,method:"POST",header:{"content-type":"application/x-www-form-urlencoded","X-Ca-Nonce":i.challenge+i.nonce,challenge:i.originalKey,bucket:i.nonce},success:function(a){200==a.statusCode&&a.data.success?e(a.data):t(a.data)},fail:function(e){var a="获取失败";e&&e.data&&e.data.message&&(a=e.data.message),o(a),console.log("wx.request() is fail : "+a),t(e.data)},complete:function(e){wx.hideNavigationBarLoading(),"function"==typeof r&&r(e)}})})));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=a(t().mark((function e(a){var n,r,i,d=arguments;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.length>1&&void 0!==d[1]?d[1]:s,r=d.length>2?d[2]:void 0,wx.showNavigationBarLoading(),e.next=5,w.getChallengeHeaderParams();case 5:if(i=e.sent){e.next=9;break}return y(),e.abrupt("return",Promise.reject({message:"网络请求数据构造异常"}));case 9:return(a=a||{}).corpid=c.corpID,a.subAppid=c.appid,a.appid=c.appid,a.openid=v(),e.abrupt("return",new Promise((function(e,t){wx.request({url:u+n,data:a,method:"POST",header:{"content-type":"application/x-www-form-urlencoded","X-Ca-Nonce":i.challenge+i.nonce,challenge:i.originalKey,bucket:i.nonce},success:function(a){200==a.statusCode?e(a.data):t(a.data)},fail:function(e){var a="获取失败";e&&e.data&&e.data.message&&(a=e.data.message),o(a),console.log("wx.request() is fail : "+a),t(e.data)},complete:function(e){wx.hideNavigationBarLoading(),"function"==typeof r&&r(e)}})})));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=a(t().mark((function e(a){var n,r,i,d=arguments;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.length>1&&void 0!==d[1]?d[1]:s,r=d.length>2?d[2]:void 0,wx.showNavigationBarLoading(),e.next=5,w.getChallengeHeaderParams();case 5:if(i=e.sent){e.next=9;break}return y(),e.abrupt("return",Promise.reject({message:"网络请求数据构造异常"}));case 9:return(a=a||{}).corpid=c.corpID,a.subAppid=c.appid,a.appid=c.appid,a.openid=v(),e.abrupt("return",new Promise((function(e,t){wx.request({url:u+n,dataType:"JSON",data:JSON.stringify(a),method:"POST",header:{"content-type":"application/json","X-Ca-Nonce":i.challenge+i.nonce,challenge:i.originalKey,bucket:i.nonce},success:function(a){a.data&&(a.data=JSON.parse(a.data)),200==a.statusCode?e(a.data):t(a.data)},fail:function(e){var a="获取失败";e.data&&(e.data=JSON.parse(e.data)),e&&e.data&&e.data.message&&(a=e.data.message),o(a),console.log("wx.request() is fail : "+a),t(e.data)},complete:function(e){wx.hideNavigationBarLoading(),"function"==typeof r&&r(e)}})})));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var n=a(t().mark((function a(n,r){var i,d,p,l,g,f,h;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return wx.showNavigationBarLoading(),r="[object Object]"==Object.prototype.toString.call(r)?r:{},d=(i=r).doComplete,p=i.loadingMsg,l=i.maskModal,p&&(g=!(!1===l),wx.showLoading({title:p,mask:g})),t.next=6,w.getChallengeHeaderParams();case 6:if(f=t.sent){t.next=10;break}return y(),t.abrupt("return",Promise.reject({message:"网络请求数据构造异常"}));case 10:return delete(h={corpid:c.corpID,appid:c.appid,action:n.action||"",object:e(e({},n),{},{openid:n.openid||v(),subAppid:c.appid})}).object.action,t.abrupt("return",new Promise((function(e,t){wx.request({url:"".concat(u+s,"?v3=1&corpid=").concat(c.corpID),data:JSON.stringify(h),method:"POST",header:{"content-type":"application/json","X-Ca-Nonce":f.challenge+f.nonce,challenge:f.originalKey,bucket:f.nonce},success:function(a){p&&wx.hideLoading(),200==a.statusCode?e(a.data):t(a.data)},fail:function(e){var a="获取失败";e&&e.data&&e.data.message&&(a=e.data.message),o(a),console.log("wx.request() is fail : "+a),t(e.data)},complete:function(e){wx.hideNavigationBarLoading(),"function"==typeof d&&d(e)}})})));case 13:case"end":return t.stop()}}),a)})));return function(e,t){return n.apply(this,arguments)}}();function N(e){return Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&")}var P=function(){var e=a(t().mark((function e(a){var n,r,i,d,p=arguments;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:s,r=p.length>2?p[2]:void 0,wx.showNavigationBarLoading(),e.next=5,w.getChallengeHeaderParams();case 5:if(i=e.sent){e.next=9;break}return y(),e.abrupt("return",Promise.reject({message:"网络请求数据构造异常"}));case 9:return d="?"+N(a),(a=a||{}).corpid=c.corpID,a.subAppid=c.appid,a.appid=c.appid,a.openid=v(),e.abrupt("return",new Promise((function(e,t){wx.request({url:u+n+"/"+c.corpID+d,dataType:"JSON",data:JSON.stringify(a),method:"GET",header:{"content-type":"application/json","X-Ca-Nonce":i.challenge+i.nonce,challenge:i.originalKey,bucket:i.nonce},success:function(a){a.data&&(a.data=JSON.parse(a.data)),console.log("res",a),200==a.statusCode?e(a.data):t(a.data)},fail:function(e){console.log("res",e);var a="获取失败";e.data&&(e.data=JSON.parse(e.data)),e&&e.data&&e.data.message&&(a=e.data.message),o(a),console.log("wx.request() is fail : "+a),t(e.data)},complete:function(e){wx.hideNavigationBarLoading(),"function"==typeof r&&r(e)}})})));case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function j(){return(j=a(t().mark((function a(){var n,r,d,f,h,m,x,b,C,k,q,L,N,P,j,S,O,T,B,I=arguments;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=g(I,s),r=n.postData,d=n.url,f=n.loadingMsg,h=n.maskModal,m=n.isShowErrorMsg,x=n.doComplete,b=n.requestConfig,C=n.useURL,k=n.noEncryption,i(f)&&wx.showLoading({title:f,mask:h}),wx.showNavigationBarLoading(),t.next=5,w.getChallengeHeaderParams();case 5:if(q=t.sent){t.next=9;break}return y(),t.abrupt("return",Promise.reject({message:"网络请求数据构造异常"}));case 9:if(L=Date.now(),N=parseInt(L/1e3),P={},j={"content-type":"application/json","X-Ca-Nonce":q.challenge+q.nonce,corpid:c.corpID,bucket:q.nonce,challenge:q.originalKey,"request-time":N,appid:c.appid},!["/api/v3/travelLine/getTravelLineList","/api/v3/travelLine/getTravelLineDetail","/api/v3/zhongLv/lockSeat"].includes(d)&&!k){t.next=17;break}P=r,t.next=25;break;case 17:return t.next=19,p(r,m);case 19:S=t.sent,O=S.version,T=S.signData,B=S.encryptJson,P={encryptJson:B},j=e(e({},j),{},{openid:v(),version:O,"sign-data":T});case 25:return t.abrupt("return",new Promise((function(e,t){var a={url:C?d:u+d,data:P,method:"POST",header:j,success:function(a){if(f&&wx.hideLoading(),200==a.statusCode){var n=a.header["Content-Type"];if(n&&n.includes("image")&&(a.data=l(a.data)),"20000001"==a.data.status){var r=getApp();r&&"function"==typeof r.doLogin&&r.doLogin(null,!0),m&&(wx.showModal({title:"操作失败",content:r?"正在重新登录中，请稍后刷新再试":"登录失败，请联系管理员",showCancel:!1}),t())}e(a.data)}else t(a.data)},fail:function(e){var a=e.errMsg||"获取失败";e&&e.data&&e.data.message&&(a=e.data.message),m&&o(a),console.log("wx.request() is fail : "+a),t(e.data)},complete:function(e){wx.hideNavigationBarLoading(),"function"==typeof x&&x(e)}};"[object Object]"==Object.prototype.toString.call(b)&&(a=Object.assign(a,b)),wx.request(a)})));case 26:case"end":return t.stop()}}),a)})))).apply(this,arguments)}function S(){return(S=a(t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.handleInitChallengeAtExpiredTime();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=a(t().mark((function e(a){var n,r,i;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("[object Object]"==Object.prototype.toString.call(a)){e.next=2;break}throw new Error("请检查请求配置项是否正确");case 2:if("string"==typeof a.method&&a.method){e.next=4;break}throw new Error("请检查请求方法是否正确");case 4:return n={corpid:c.corpID,subAppid:c.appid,appid:c.appid,openid:v()},"[object Object]"==Object.prototype.toString.call(a.params)&&(n=Object.assign(n,a.params)),a.method=a.method.toUpperCase(),wx.showNavigationBarLoading(),a.loadingMsg&&wx.showLoading({title:a.loadingMsg,mask:!(!1===a.maskModal)}),e.next=11,w.getChallengeHeaderParams();case 11:if(r=e.sent){e.next=15;break}return y(),e.abrupt("return",Promise.reject({message:"网络请求数据构造异常"}));case 15:return i={"content-type":"application/json","X-Ca-Nonce":r.challenge+r.nonce,corpid:c.corpID,bucket:r.nonce,challenge:r.originalKey},e.abrupt("return",new Promise((function(e,t){wx.request({url:a.useURL?a.url:u+a.url,data:n,header:i,method:a.method,success:function(a){200==a.statusCode?e(a.data):t(a.data)},fail:function(e){var n=e.errMsg||"获取失败";e.data&&e.data.message?n=e.data.message:e.data={message:n,success:!1},!1!==a.isShowErrorMsg&&o(n),t(e.data)},complete:function(e){wx.hideNavigationBarLoading(),a.loadingMsg&&wx.hideLoading(),"function"==typeof a.doComplete&&a.doComplete(e)}})})));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}module.exports={request:function(e,t,a,n,r){this.requestLoading(e,t,"",a,n,r)},requestLoading:function(e,t,a,n,r,o){return b.apply(this,arguments)},requestPOST:C,requestPOSTV1:k,requestPOSTV2:q,requestGET:P,requestPOSTV3:L,requestPOSTEncrypt:function(){return j.apply(this,arguments)},initChallenge:function(){return m.apply(this,arguments)},checkChallengeExpiredTime:function(){return S.apply(this,arguments)},requestFetch:function(e){return O.apply(this,arguments)}};
},{isPage:false,isComponent:false,currentFile:'76AB9B769105A88C10CDF3717594FB65.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("796B1D179105A88C1F0D7510C834FB65.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAndSubMsg=function(e,t,r){return l.apply(this,arguments)},exports.getTemplateidPro=s,exports.putSubscribeMessagePro=o,exports.requestSubscribeMessage=a;var e=require("@babel/runtime/helpers/regeneratorRuntime.js"),t=require("@babel/runtime/helpers/asyncToGenerator.js"),r=getApp(),n=require("727D99A59105A88C141BF1A2A784FB65.js");function s(e){return u.apply(this,arguments)}function u(){return(u=t(e().mark((function t(n){var s,u,a;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.util.isNull(n)){e.next=3;break}return console.log("getTemplateidPro 参数有误"),e.abrupt("return",!1);case 3:return s={action:"weixin.xcx_get_templateid",scenes:n,sub_appid:r.globalData.corp.appid},u={},a=0,wx.showNavigationBarLoading(),e.next=9,r.network.requestPOST(s).then((function(e){e.success&&r.util.isNotNull(e.data)?a=1:e.success&&r.util.isNull(e.data)&&(a=2),e.resultCode=a,u=e})).catch((function(e){e.resultCode=3,r.util.showMsg(e.message||"获取订阅消息模板失败"),u=e}));case 9:return wx.hideNavigationBarLoading(),e.abrupt("return",u);case 11:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function a(e){return i.apply(this,arguments)}function i(){return(i=t(e().mark((function t(n){var s;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s={},!r.util.isNull(n)){e.next=4;break}return console.log("requestSubscribeMessage 参数有误"),e.abrupt("return",!1);case 4:return e.next=6,wx.requestSubscribeMessage({tmplIds:n}).then((function(e){s=e})).catch((function(e){console.log(e),r.util.showMsg(e.errMsg||"订阅消息推送失败"),s=e}));case 6:return e.abrupt("return",s);case 7:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function o(e,t,r,n){return c.apply(this,arguments)}function c(){return(c=t(e().mark((function t(n,s,u,a){var i,o;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.util.isNull(s)&&!r.util.isNull(n)){e.next=3;break}return console.log("putSubscribeMessagePro 参数有误"),e.abrupt("return",!1);case 3:return r.util.isNotNull(a)&&(a=JSON.stringify(a)),i={action:u||"order.maPutSubscribeMessage",orderid:n,scenes:s,subMsgRes:a,openid:r.globalData.openid},o={},wx.showNavigationBarLoading(),e.next=9,r.network.requestPOST(i).then((function(e){o=e})).catch((function(e){o=e}));case 9:return wx.hideNavigationBarLoading(),e.abrupt("return",o);case 11:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function l(){return(l=t(e().mark((function t(r,u,i){var c,l,p,g;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=!0,e.next=3,s(u);case 3:return l=e.sent,console.log("订阅消息步骤-1 getTemplateidPro",l),l.success||(console.log("订阅消息步骤-1 getTemplateidPro fail"),n.warn("订阅消息步骤-1 getTemplateidPro fail",l.message),c=!1),e.next=8,a(l.data);case 8:return p=e.sent,console.log("订阅消息步骤-2 requestSubscribeMessage",p),g=o(r,u,i,p),console.log("订阅消息步骤-3 putSubscribeMessagePro",g),console.log("订阅消息步骤-4 getAndSubMsg 是否全部成功",c),n.info("订阅消息步骤-4 getAndSubMsg 是否全部成功",c),e.abrupt("return",c);case 15:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
},{isPage:false,isComponent:false,currentFile:'796B1D179105A88C1F0D7510C834FB65.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("828ADEF79105A88CE4ECB6F0DEE3FB65.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e,t=require("@babel/runtime/helpers/regeneratorRuntime.js"),r=require("@babel/runtime/helpers/asyncToGenerator.js"),n=getApp(),a="/api/v1/".concat(n.globalData.corp.ID,"/").concat(n.globalData.corp.appid,"/line/"),o={queryStartCity:function(e){return n.network.requestFetch({url:a+"queryStartCity",method:"GET",params:{line_type:e,account:n.globalData.corp.account}})},getEndCityList:function(e,t){return n.network.requestFetch({url:a+"getEndCityList",method:"GET",params:{startCityId:e,lineType:t||"all"},loadingMsg:"加载中..."})},getCollegeLineGxInfoList:(e=r(t().mark((function e(r){var o;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.network.requestFetch({url:a+"getCollegeLineGxInfoList",method:"GET",params:{lineType:r}});case 2:return o=e.sent,e.abrupt("return",o&&o.data||[]);case 4:case"end":return e.stop()}}),e)}))),function(t){return e.apply(this,arguments)})};exports.default=o;
},{isPage:false,isComponent:false,currentFile:'828ADEF79105A88CE4ECB6F0DEE3FB65.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("8A94E9619105A88CECF281668574FB65.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("@babel/runtime/helpers/classCallCheck.js"),t=require("@babel/runtime/helpers/createClass.js"),a=require("@babel/runtime/helpers/objectSpread2.js"),r=require("@babel/runtime/helpers/regeneratorRuntime.js"),n=require("@babel/runtime/helpers/slicedToArray.js"),i=require("@babel/runtime/helpers/asyncToGenerator.js"),l=require("@babel/runtime/helpers/readOnlyError.js"),s=require("3D62BF329105A88C5B04D735CAB4FB65.js").isNull,o=require("727D99A59105A88C141BF1A2A784FB65.js"),c=getApp(),p=function(){var e=i(r().mark((function e(){var t,a,i,p,d;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s(c)&&(getApp(),l("app")),c){e.next=3;break}return e.abrupt("return");case 3:if(console.log("getSupplierType run"),t=c.globalData.corp.ID,a=c.config.corpSupplierMap[t],console.log("configSupplier",a),i=c.config.hasBCCorpList.includes(t),console.log("hasBC",i),a||i){e.next=11;break}return e.abrupt("return");case 11:return p={suppliers:a,corpid:t,reportType:i?"bc":"",openid:c.globalData.openid},console.log("查询线路供应商列表参数getLineBySupplier params",p),d={},e.next=16,c.network.requestPOSTEncrypt(p,"/api/v3/apiLine/getLineBySupplier",null,!1,!1).then((function(e){if(console.log("查询线路供应商列表getLineBySupplier res",e),e.success&&e.data){for(var t=0;t<e.data.length;t++){var a=e.data[t],r=a.startToEnd.split("-"),i=n(r,2),l=i[0],s=i[1];d[a.startToEnd]={lineId:a.lineId,supplier:a.supplier,startCode:l,endCode:s}}wx.setStorageSync(c.globalData.corp.appid+"_supplier_map",d)}else d=u()})).catch((function(e){d=u(),console.log("查询线路供应商列表失败getLineBySupplier err",e),o.error("查询线路供应商列表失败getLineBySupplier err",e)}));case 16:return e.abrupt("return",d);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){return console.log("getSupplierTypeByStorage run"),wx.getStorageSync(c.globalData.corp.appid+"_supplier_map")||{}},d={guanzhong:"/package/HKMOLocation/pages/newLocationGo/newLocationGo",waybus:"/package/HKMOWaybus/pages/oneWayStationsSelect/stationsSelect",bc:"/package/intervalByLngAndLat/pages/intervalByLngAndLat/intervalByLngAndLat",zhonglv:"/package/HKMOLocation/pages/newLocationGo/newLocationGo",gangAoJuHe:"/package/HKMOLocation/pages/newLocationGo/newLocationGo"},g=function(e,t,a){for(var r={beginCode:"",endCode:"",HKMOLineInfo:null},i=0,l=Object.keys(a);i<l.length;i++){var s=l[i],o=s.split("-"),c=n(o,2),p=c[0],u=c[1],d=p.slice(0,4),g=u.slice(0,4);if(d==e&&g==t){r.beginCode=p,r.endCode=u,r.HKMOLineInfo=a[s];break}if("4401"==e&&"020"==d&&g==t){r.beginCode="020",r.endCode=u,r.HKMOLineInfo=a[s];break}if("4401"==t&&"020"==g&&d==e){r.beginCode=p,r.endCode="020",r.HKMOLineInfo=a[s];break}}return r};function b(){return(b=i(r().mark((function e(t,a,n,i,s){var o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c||(getApp(),l("app")),o={corpid:c.globalData.corp.ID,orderId:t,openid:c.globalData.openid,lineId:a,subAppid:c.globalData.corp.appid},e.next=4,c.network.requestPOSTEncrypt(o,"/api/v3/gangAo/getTlPayPamer",{loadingMsg:"准备支付...",maskModal:!0}).then((function(e){e.success&&e.data?f(e.data,i,s):n?n(e):wx.showModal({title:"支付失败",content:e.message||"获取支付参数失败",showCancel:!1})})).catch((function(e){n?n(e):wx.showModal({title:"提示",content:e.errMsg||e.message||"获取支付参数异常",showCancel:!1})}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,t,a){wx.navigateToMiniProgram({appId:"wxef277996acc166c3",extraData:e,success:"function"==typeof t?t:null,fail:"function"==typeof a?a:y})}var y=function(e){var t=e.errMsg.indexOf("cancel")?"已取消支付":e.errMsg||e.message||"调起支付失败，请重试";wx.showModal({title:"提示",content:t,showCancel:!1})};var h=["","mainlandId","chinesePassport","homeReturnPermit","taiwanPermit","foreignerPermanentId"],v=function(){function a(){var t=this;e(this,a),this.rules={chinesePassport:{pattern:/^[EG]\d{8}$/,parse:function(e){var a=e.substring(1,7);return t.parseYYMMDD(a,"chinesePassport")},description:"中国护照（E/G开头+8位数字，第2-7位为出生日期YYMMDD）"},homeReturnPermit:{pattern:/^[HM]\d{8}$/,parse:function(e){var a=e.substring(1,7);return t.parseYYMMDD(a,"homeReturnPermit")},description:"回乡证（H/M开头+8位数字，第2-7位为出生日期YYMMDD）"},taiwanPermit:{pattern:/^\d{8,10}$/,parse:function(e){var a=e.substring(0,6);return t.parseYYMMDD(a,"taiwanPermit",1911)},description:"台胞证（8-10位数字，前6位为出生日期YYMMDD，民国纪年）"},foreignerPermanentId:{pattern:/^\d{15,18}$/,parse:function(e){if(18===e.length){var a=parseInt(e.substring(6,10),10),r=parseInt(e.substring(10,12),10),n=parseInt(e.substring(12,14),10);return t.validateDate(a,r,n)?{year:a,month:r,day:n}:null}var i=e.substring(6,12);return t.parseYYMMDD(i,"foreignerPermanentId")},description:"外国人永久居留身份证（15或18位，第7-12/14位为出生日期）"},mainlandId:{pattern:/^\d{15,18}$/,parse:function(e){if(18===e.length&&!t.validateMainlandIdChecksum(e))throw new Error("身份证校验码不正确");if(18===e.length){var a=parseInt(e.substring(6,10),10),r=parseInt(e.substring(10,12),10),n=parseInt(e.substring(12,14),10);return t.validateDate(a,r,n)?{year:a,month:r,day:n}:null}var i=e.substring(6,12);return t.parseYYMMDD(i,"mainlandId")},description:"中国大陆身份证（15或18位，第7-12/14位为出生日期，包含校验码验证）"}}}return t(a,[{key:"validateMainlandIdChecksum",value:function(e){if(18!==e.length)return!0;for(var t=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],a=0,r=0;r<17;r++)a+=parseInt(e.charAt(r),10)*t[r];var n=["1","0","X","9","8","7","6","5","4","3","2"][a%11];return e.charAt(17).toUpperCase()===n}},{key:"parseYYMMDD",value:function(e,t){if(!/^\d{6}$/.test(e))return null;var a,r=parseInt(e.substring(0,2),10),n=parseInt(e.substring(2,4),10),i=parseInt(e.substring(4,6),10);if("taiwanPermit"===t)a=r+1911;else if("mainlandId"===t){if((a=1900+r)>1999)return null}else{var l=(new Date).getFullYear(),s=100*Math.floor(l/100),o=l%100;a=r>o?s-100+r:s+r}return this.validateDate(a,n,i)?{year:a,month:n,day:i}:null}},{key:"validateDate",value:function(e,t,a){var r=new Date(e,t-1,a);return r.getFullYear()===e&&r.getMonth()===t-1&&r.getDate()===a}},{key:"parseExplicitDate",value:function(e){if(!e)return null;var t,a,r,n=e.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/);return n||(n=e.match(/^(\d{4})(\d{2})(\d{2})$/))?(t=parseInt(n[1],10),a=parseInt(n[2],10),r=parseInt(n[3],10),this.validateDate(t,a,r)?{year:t,month:a,day:r}:null):(n=e.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/))?(r=parseInt(n[1],10),a=parseInt(n[2],10),t=parseInt(n[3],10),this.validateDate(t,a,r)?{year:t,month:a,day:r}:null):null}},{key:"parse",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!t)return console.log("证件号码不能为空"),"成人";t=t.trim().toUpperCase();var r,n=h[e],i=this.rules[n];if(!i)return console.log("不支持的证件类型: ".concat(n)),"成人";if(!i.pattern.test(t))return console.log("证件号码格式不正确: ".concat(n," 应为 ").concat(i.description)),"成人";try{r=i.parse(t,a)}catch(e){return console.log("解析出生日期失败: ".concat(e.message)),"成人"}return r?this.getAgeCategory(this.calculateAge(r)):(console.log("无法从".concat(n,"号码中解析出有效的出生日期")),"成人")}},{key:"calculateAge",value:function(e){var t=new Date,a=t.getFullYear()-e.year,r=t.getMonth()-(e.month-1),n=t.getDate()-e.day;return(r<0||0===r&&n<0)&&a--,a}},{key:"getAgeCategory",value:function(e){return e<3?"婴儿":e<12?"小童":e<=65?"成人":"长者"}}]),a}();module.exports={getSupplierType:p,handleToHKMOPage:function(e){var t=e.url,r=e.ticketObj,n={redirectUrl:t,supplier:""};if(c.config.corpSupplierMap[c.globalData.corp.ID]){var i=t.split("?")[1],l=a({},r),s=u(),o=s[l.beginCityCode+"-"+l.endCityCode];if(!o&&(l.beginDivisionCityCode||l.endDivisionCityCode)){var p=g(l.beginDivisionCityCode,l.endDivisionCityCode,s);p.HKMOLineInfo&&(l.beginCityCode=p.beginCode,l.endCityCode=p.endCode,o=p.HKMOLineInfo)}if(o){(l.hasOwnProperty("beginDivisionCityCode")||l.hasOwnProperty("endDivisionCityCode"))&&(delete l.beginAdDivisionCode,delete l.beginAdDivisionName,delete l.beginDivisionCityCode,delete l.beginDivisionCityName,delete l.beginProvinceCode,delete l.endAdDivisionCode,delete l.endAdDivisionName,delete l.endDivisionCityCode,delete l.endDivisionCityName,delete l.endProvinceCode,i=c.util.enQueryString(l));var b=o.supplier;n.redirectUrl="".concat(d[b],"?").concat(i),n.supplier=b}}return n},redirectUrlMap:d,ticketIdMap:{1:"成人单程",2:"成人双程",3:"婴儿0-2岁",5:"小童3-11岁",7:"儿童单程 3-5 岁",8:"婴儿0-2岁",9:"网上成人单程",10:"网上成人双程",13:"小童3-11岁",14:"小童3-11岁",15:"长者 65 岁单程",16:"长者 65 岁双程",17:"长者65岁及以上",19:"长者65岁及以上",22:"3-16 岁单程",23:"小童 3-5 岁单程",24:"小童 3-5 岁双程",25:"3-16 岁双程"},getSupplierTypeByStorage:u,HKMOOrderDetailUrlMap:{guanzhong:"/package/HKMOOrder/pages/newOrderDetail/newOrderDetail",waybus:"/package/waybusOrder/pages/orderDetail/orderDetail",zhonglv:"/package/HKMOOrder/pages/newOrderDetail/newOrderDetail",gangAoJuHe:"/package/HKMOOrder/pages/newOrderDetail/newOrderDetail"},gangAoJuHeTicketTypeMap:{adult:{label:"成人",desc:"12-65岁"},child:{label:"儿童",desc:"3-12岁以下"},elder:{label:"长者",desc:"65岁以上"},baby:{label:"婴儿",desc:"0-3岁以下"}},zhonglvTicketTypeMap:{1:{label:"小童",desc:"3-12岁以下"},2:{label:"长者",desc:"65岁以上"},3:{label:"成人",desc:"12-65岁"},4:{label:"成人",desc:"12-65岁"},5:{label:"婴儿",desc:"0-3岁以下"},W1:{label:"小童",desc:"3-12岁以下"},W2:{label:"长者",desc:"65岁以上"}},ticketStatusMap:{1:{label:"待支付",class:"text-blue"},2:{label:"已出票"},3:{label:"已取消",class:"text-grey"},4:{label:"无效",class:"text-grey"},5:{label:"已使用",class:"text-grey"},6:{label:"改签中",class:"text-grey"},7:{label:"改签成功",class:"text-green"},8:{label:"改签失败",class:"text-red"},9:{label:"退票中",class:"text-grey"},10:{label:"退票成功",class:"text-green"},11:{label:"退票失败",class:"text-red"},12:{label:"支付失败",class:"text-red"},13:{label:"退款失败",class:"text-red"}},guanzhongTicketTypeMap:{1:{label:"成人",desc:"单程"},2:{label:"成人",desc:"双程"},3:{label:"婴儿",desc:"0-2岁"},5:{label:"小童",desc:"3-11岁"},7:{label:"儿童",desc:"3-5岁"},8:{label:"婴儿",desc:"0-2岁"},9:{label:"成人",desc:"网上单程"},10:{label:"成人",desc:"网上双程"},13:{label:"小童",desc:"3-11岁"},14:{label:"小童",desc:"3-11岁"},15:{label:"长者",desc:"65岁以上"},16:{label:"长者",desc:"65岁以上"},17:{label:"长者",desc:"65岁以上"},19:{label:"长者",desc:"65岁以上"},22:{label:"学生",desc:"3-16岁"},23:{label:"小童",desc:"3-5岁"},24:{label:"小童",desc:"3-5岁"},25:{label:"学生",desc:"3-16岁"}},payStatusMap:{"01":"未支付","02":"支付处理中","03":"已支付","04":"支付失败","05":"支付取消","06":"支付超时","07":"部分支付成功","08":"退款中","09":"退款成功",10:"退款失败","00":"未知"},orderStatusMap:{"00":"待支付","01":"已支付","02":"已退款","03":"已取消","04":"已失效","05":"改签中","06":"已改签",11:"支付失败",12:"第三方退款失败",22:"退款中",32:"退款失败",33:"退票中"},rebookTicketTypeMapping:{1:[2,10],9:[2,10],15:[16,19],17:[16,19],3:[8],5:[13,24],14:[13,24],23:[13,24],22:[25]},getCashierParam:function(e,t,a,r,n){return b.apply(this,arguments)},supplierTextMap:{guanzhong:"环岛中港通",zhonglv:"中旅",gangAoJuHe:"港澳聚合",34:"永东",5:"环岛中港通",3:"港澳快线",38:"粤港汽车"},getAgeCategoryFromIdCard:function(e){if(!e||"string"!=typeof e)return console.log("身份证号码不能为空且必须为字符串"),!1;var t,a,r;if(18===(e=e.trim()).length){if(!/^\d{17}[\dXx]$/.test(e))return console.log("18位身份证格式不正确，应为17位数字加1位数字或X"),!1;t=parseInt(e.substring(6,10),10),a=parseInt(e.substring(10,12),10),r=parseInt(e.substring(12,14),10)}else{if(15!==e.length)return console.log("身份证号码长度必须为15位或18位"),!1;if(!/^\d{15}$/.test(e))return console.log("15位身份证必须为15位数字"),!1;var n=parseInt(e.substring(6,8),10);a=parseInt(e.substring(8,10),10),r=parseInt(e.substring(10,12),10),t=1900+n}var i=new Date(t,a-1,r);if(i.getFullYear()!==t||i.getMonth()!==a-1||i.getDate()!==r)return console.log("身份证中的出生日期无效（例如2月30日）"),!1;var l=new Date,s=l.getFullYear()-i.getFullYear(),o=l.getMonth()-i.getMonth(),c=l.getDate()-i.getDate();return(o<0||0===o&&c<0)&&s--,s<0||s<3?"婴儿":s<12?"小童":s<=65?"成人":"长者"},DocumentBirthDateParser:v};
},{isPage:false,isComponent:false,currentFile:'8A94E9619105A88CECF281668574FB65.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("944736B19105A88CF2215EB685A4FB65.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=getApp(),o=require("727D99A59105A88C141BF1A2A784FB65.js");module.exports={wxH5Pay:function(a,t,n){if(!a)return e.util.showMsg("缺少订单号");var r=e.globalData.systemInfo.system||"",i={action:"order.getH5PayUrl",orderid:a,subAppid:e.globalData.corp.appid,openid:e.globalData.openid,model:r.split(" ")[0]};e.network.requestLoading("/api/wg.do",i,"准备支付...",(function(e){e.success&&e.data?wx.navigateTo({url:"/pages/webview/webview?web_url="+encodeURIComponent("".concat(e.data.h5Url)),success:"function"==typeof t?t:null}):(wx.showModal({title:"提示",content:e.message||"获取微信支付链接失败",showCancel:!1,complete:function(){n&&n()}}),o.error("order.getH5PayUrl fail",e))}),(function(e){wx.showModal({title:"提示",content:e.message||"获取微信支付链接异常",showCancel:!1,complete:function(){n&&n()}})}))},tlwxH5Pay:function(a,t,n){if(!a)return e.util.showMsg("缺少订单号");var r={action:"order.getH5PayUrl",orderid:a,openid:e.globalData.openid,subAppid:e.globalData.corp.appid};e.network.requestLoading("/api/wg.do",r,"准备支付...",(function(e){e.success&&e.data?wx.navigateTo({url:"/pages/webview/webview?web_url="+encodeURIComponent("".concat(e.data.h5Url)),success:"function"==typeof t?t:null}):(wx.showModal({title:"提示",content:e.message||"获取支付链接失败",showCancel:!1,complete:function(){n&&n()}}),o.error("order.getH5PayUrl fail",e))}),(function(e){wx.showModal({title:"提示",content:e.message||"获取支付链接异常",showCancel:!1,complete:function(){n&&n()}})}))},getCashierParam:function(o){var a=o.orderId,t=o.doFail;return new Promise((function(o,n){var r={action:"order.getCashierParam",orderid:a,subAppid:e.globalData.corp.appid,openid:e.globalData.openid};e.network.requestLoading("/api/wg.do",r,"准备支付...",(function(e){console.log("order.getCashierParam",e),e.success&&e.data?o(e.data):wx.showModal({title:"支付失败",content:e.message||"获取支付参数失败",showCancel:!1,complete:function(){t()}})}))}))},payByOpenCashier:function(e){var o=e.params,a=e.doSuccess,t=e.doFail;console.log("payByOpenCashier",o),wx.navigateToMiniProgram({appId:"wxef277996acc166c3",extraData:o,success:"function"==typeof a?a:null,fail:function(e){console.log("navigateToMiniProgram fail",e),e.errMsg&&(e.errMsg=e.errMsg.includes("cancel")?"取消支付":e.errMsg),t&&t(e)}})}};
},{isPage:false,isComponent:false,currentFile:'944736B19105A88CF2215EB685A4FB65.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/Arrayincludes.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(r,e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if(0==n)return!1;for(var i,o,a=0|e,u=Math.max(0<=a?a:n-Math.abs(a),0);u<n;){if((i=t[u])===(o=r)||"number"==typeof i&&"number"==typeof o&&isNaN(i)&&isNaN(o))return!0;u++}return!1}});
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/Arrayincludes.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/arrayLikeToArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=new Array(a);e<a;e++)n[e]=r[e];return n}module.exports=_arrayLikeToArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/arrayLikeToArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/arrayWithHoles.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _arrayWithHoles(r){if(Array.isArray(r))return r}module.exports=_arrayWithHoles;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/arrayWithHoles.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/arrayWithoutHoles.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var arrayLikeToArray=require("./arrayLikeToArray");function _arrayWithoutHoles(r){if(Array.isArray(r))return arrayLikeToArray(r)}module.exports=_arrayWithoutHoles;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/arrayWithoutHoles.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/asyncToGenerator.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function asyncGeneratorStep(n,e,r,t,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void r(n)}i.done?e(u):Promise.resolve(u).then(t,o)}function _asyncToGenerator(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var a=n.apply(e,r);function c(n){asyncGeneratorStep(a,t,o,c,i,"next",n)}function i(n){asyncGeneratorStep(a,t,o,c,i,"throw",n)}c(void 0)}))}}module.exports=_asyncToGenerator;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/asyncToGenerator.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/classCallCheck.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _classCallCheck(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}module.exports=_classCallCheck;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/classCallCheck.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/createClass.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var toPropertyKey=require("./toPropertyKey");function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,toPropertyKey(o.key),o)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}module.exports=_createClass;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/createClass.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/createForOfIteratorHelper.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var unsupportedIterableToArray=require("./unsupportedIterableToArray");function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,i=!1;return{s:function(){t=t.call(r)},n:function(){var r=t.next();return u=r.done,r},e:function(r){i=!0,a=r},f:function(){try{u||null==t.return||t.return()}finally{if(i)throw a}}}}module.exports=_createForOfIteratorHelper;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/createForOfIteratorHelper.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/defineProperty.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var toPropertyKey=require("./toPropertyKey");function _defineProperty(e,r,t){return(r=toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}module.exports=_defineProperty;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/defineProperty.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/iterableToArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}module.exports=_iterableToArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/iterableToArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/iterableToArrayLimit.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _iterableToArrayLimit(r,e){var l=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=l){var t,n,i,a,u=[],o=!0,f=!1;try{if(i=(l=l.call(r)).next,0===e){if(Object(l)!==l)return;o=!1}else for(;!(o=(t=i.call(l)).done)&&(u.push(t.value),u.length!==e);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=l.return&&(a=l.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}}module.exports=_iterableToArrayLimit;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/iterableToArrayLimit.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/nonIterableRest.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=_nonIterableRest;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/nonIterableRest.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/nonIterableSpread.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=_nonIterableSpread;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/nonIterableSpread.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/objectSpread2.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var defineProperty=require("./defineProperty");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}module.exports=_objectSpread2;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/objectSpread2.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/readOnlyError.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _readOnlyError(r){throw new TypeError('"'+r+'" is read-only')}module.exports=_readOnlyError;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/readOnlyError.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/regeneratorRuntime.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var t=require("./typeof");function r(){module.exports=r=function(){return e},module.exports.__esModule=!0,module.exports.default=module.exports;var e={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function h(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(t){h=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,a=Object.create(o.prototype),c=new k(n||[]);return i(a,"_invoke",{value:E(t,e,c)}),a}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p={};function d(){}function v(){}function y(){}var g={};h(g,c,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(G([])));w&&w!==n&&o.call(w,c)&&(g=w);var x=y.prototype=d.prototype=Object.create(g);function L(t){["next","throw","return"].forEach((function(r){h(t,r,(function(t){return this._invoke(r,t)}))}))}function b(r,e){function n(i,a,c,u){var l=s(r[i],r,a);if("throw"!==l.type){var h=l.arg,f=h.value;return f&&"object"==t(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(f).then((function(t){h.value=t,c(h)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var a;i(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return a=a?a.then(o,o):o()}})}function E(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return N()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===p)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=s(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function _(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,_(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function G(t){if(t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(o.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:N}}function N(){return{value:void 0,done:!0}}return v.prototype=y,i(x,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=h(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,h(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},L(b.prototype),h(b.prototype,u,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new b(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(x),h(x,l,"Generator"),h(x,c,(function(){return this})),h(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:G(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},e}module.exports=r,module.exports.__esModule=!0,module.exports.default=module.exports;

},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/regeneratorRuntime.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/slicedToArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var arrayWithHoles=require("./arrayWithHoles"),iterableToArrayLimit=require("./iterableToArrayLimit"),unsupportedIterableToArray=require("./unsupportedIterableToArray"),nonIterableRest=require("./nonIterableRest");function _slicedToArray(r,e){return arrayWithHoles(r)||iterableToArrayLimit(r,e)||unsupportedIterableToArray(r,e)||nonIterableRest()}module.exports=_slicedToArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/slicedToArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/toConsumableArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var arrayWithoutHoles=require("./arrayWithoutHoles"),iterableToArray=require("./iterableToArray"),unsupportedIterableToArray=require("./unsupportedIterableToArray"),nonIterableSpread=require("./nonIterableSpread");function _toConsumableArray(r){return arrayWithoutHoles(r)||iterableToArray(r)||unsupportedIterableToArray(r)||nonIterableSpread()}module.exports=_toConsumableArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/toConsumableArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/toPrimitive.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var _typeof=require("./typeof");function _toPrimitive(r,t){if("object"!==_typeof(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var i=e.call(r,t||"default");if("object"!==_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}module.exports=_toPrimitive;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/toPrimitive.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/toPropertyKey.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var _typeof=require("./typeof"),toPrimitive=require("./toPrimitive");function _toPropertyKey(r){var t=toPrimitive(r,"string");return"symbol"===_typeof(t)?t:String(t)}module.exports=_toPropertyKey;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/toPropertyKey.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/typeof.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _typeof(o){return module.exports=_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}module.exports=_typeof;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/typeof.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/unsupportedIterableToArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var arrayLikeToArray=require("./arrayLikeToArray");function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?arrayLikeToArray(r,e):void 0}}module.exports=_unsupportedIterableToArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/unsupportedIterableToArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("A1E51E359105A88CC7837632BEC3FB65.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getIntervalSeatList=function(t,e,a){return s.apply(this,arguments)},exports.queryIntervalList=function(t){return n.apply(this,arguments)},exports.setSeatColumn=function(t){var e="",a="",r=7,n="standardSeat";"wp45_v30"==t||"wp45_v31"==t||"wp40_v31"==t?(e="下铺",a="上铺",r=7,"wp45_v31"==t&&(n="standardSeatV2")):"zp49_v1"==t?(e="一层",a="二层",r=7):["18","47","54","zp30_v1","zp31_v1","zp45_v1","zp45_v2","zp47_v1","zp47_v2","zp49_v2","zp49_v3","zp49_v4","zp49_v5","zp52_v1","zp53_v1","zp53_v2","zp53_v3","zp53_v5"].includes(t)?(r=5,["zp30_v1","zp33_v1","zp45_v1","zp45_v2","zp49_v5","zp53_v3","zp53_v5"].includes(t)&&(n="standardSeatV3")):"9zsw"==t?(r=3,n="standardSeatV2"):"coaster22_v1"==t?(r=4,n="standardSeatV2"):"zp53_v4"==t||"zp33_v1"==t||"zp31_v2"==t||"zp38_v1"==t?(r=4,n="standardSeatV3"):["zp49_v6","zp53_v6"].includes(t)&&(r=5,n="standardSeatV2");return{layerOneName:e,layerTwoName:a,seat_column:r,seatVersion:n}};var t=require("@babel/runtime/helpers/regeneratorRuntime.js");require("@babel/runtime/helpers/Arrayincludes.js");var e=require("@babel/runtime/helpers/asyncToGenerator.js"),a=getApp();function r(t,e,r){var n=a.globalData.corpExt.wx_show_residue;if(1!=t){return{0:"已停售",2:"已发车",3:"即将发车",10:"已售罄"}[t]}if(e<1)return"已售罄";if(1==n)return"余票".concat(e);if(0==n)return e>=15?"有余票":"少量票";if(2==n){if(e<10)return"余票".concat(e)}else if(30==n){if(e>=3)return"少量票";if(e<3)return"余票".concat(e)}else{if(60==n)return"少量票";if(3==n){if(r)return"已购".concat(r)}else if(100==n)return""}return""}function n(){return(n=e(t().mark((function e(n){var s,i,o,u;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.util.isNull(n)){t.next=2;break}throw"queryIntervalList 参数有误，";case 2:return s={action:"interval.query_list",tripDate:n.tripDate,param:n.beginCityCode+"-"+n.endCityCode,startAddressId:n.startAddressId,getOffAddressId:n.getOffAddressId},i={},o=0,u="这是结尾",wx.showNavigationBarLoading(),t.next=9,a.network.requestPOST(s).then((function(t){if(t.success&&a.util.isNotNull(t.data)){o=1;for(var e=t.data.length,n=0;n<e;n++)t.data[n].showName=r(t.data[n].Condition,t.data[n].residue,t.data[n].countRen),t.data[n].showClass=t.data[n].residue>0&&"1"==t.data[n].Condition?"color-orange":"stopBooking";console.log(t.data)}else t.success&&a.util.isNull(t.data)&&(o=2,u="没有数据",t.data=[]);t.resultCode=o,t.load_tips=u,i=t})).catch((function(t){t.data=[],t.resultCode=3,t.load_tips=t.message||"加载失败",a.util.showMsg(t.load_tips),i=t}));case 9:return wx.hideNavigationBarLoading(),t.abrupt("return",i);case 11:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function s(){return(s=e(t().mark((function e(r,n,s){var i,o,u;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.util.isNull(r)&&a.util.showMsg("获取班次座位表失败，缺少班次ID"),i={action:"interval_seat.seatList",intervalid:r,fromLocationCode:n||"",toLocationCode:s||""},o={},u=0,wx.showNavigationBarLoading(),t.next=7,a.network.requestPOST(i).then((function(t){t.success&&a.util.isNotNull(t.data.seatList)?(u=1,t.data.ticketPriceShow=a.util.fixedPrice(t.data.ticketPriceFen)):t.success&&a.util.isNull(t.data.seatList)&&(u=2),t.resultCode=u,o=t})).catch((function(t){t.resultCode=3,t.data=t.data||{},t.data.ticketPriceShow=0,t.data.showSeatList=[],a.util.showMsg(t.message||"加载座位表失败"),o=t}));case 7:return wx.hideNavigationBarLoading(),t.abrupt("return",o);case 9:case"end":return t.stop()}}),e)})))).apply(this,arguments)}
},{isPage:false,isComponent:false,currentFile:'A1E51E359105A88CC7837632BEC3FB65.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("BDCE09629105A88CDBA86165CEA3FB65.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t,e=require("@babel/runtime/helpers/regeneratorRuntime.js"),a=require("@babel/runtime/helpers/asyncToGenerator.js"),n=getApp(),r="/api/v1/".concat(n.globalData.corp.ID,"/").concat(n.globalData.corp.appid,"/date/"),o={calendarDynamic:function(t){var e=t.startCityId,a=t.endCityId;return n.network.requestFetch({url:r+"calendarDynamic",method:"get",params:{startCityId:e,endCityId:a}})},calendarDynamicDivision:function(t){var e=t.startAdCode,a=t.endAdCode,o=t.lineType;return n.network.requestFetch({url:r+"calendarDynamicDivision",method:"get",params:{startAdCode:e,endAdCode:a,lineType:o}})},calendarStandard:(t=a(e().mark((function t(a){var o,d,i,c,u,s,h,l,p,m,f,g,y,M,_,v;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=a.month,d=a.corpID,i=a.loadingMsg,c=[],t.prev=2,t.next=5,n.network.requestFetch({url:r+"calendarStandard",method:"get",loadingMsg:i,params:{month:o,corpID:d}});case 5:return(u=t.sent).success&&u.data?(s=u.data,h=s.currentMonth,l=s.currentMonthName,p=s.nextMonth,m=s.nextMonthName,f=s.nextNextMonth,g=s.nextNextMonthName,y=s.fourthMonth,M=s.fourthMonthName,_=s.fifthMonth,v=s.fifthMonthName,c=[{month_title:l,month_data:h},{month_title:m,month_data:p},{month_title:g,month_data:f}],y&&c.push({month_title:M,month_data:y},{month_title:v,month_data:_}),wx.setStorageSync(n.globalData.corp.appid+"_fullCalendar",c)):n.util.showMsg(u.message),t.abrupt("return",c);case 10:return t.prev=10,t.t0=t.catch(2),t.abrupt("return",c);case 13:case"end":return t.stop()}}),t,null,[[2,10]])}))),function(e){return t.apply(this,arguments)})};exports.default=o;
},{isPage:false,isComponent:false,currentFile:'BDCE09629105A88CDBA86165CEA3FB65.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("C67C46529105A88CA01A2E550424FB65.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=getApp(),t="/api/v1/".concat(e.globalData.corp.ID,"/").concat(e.globalData.corp.appid,"/ticket/"),o={fillorder:function(o){return e.network.requestFetch({url:t+"fillorder",method:"post",params:o,loadingMsg:"正在提交..."})}};exports.default=o;
},{isPage:false,isComponent:false,currentFile:'C67C46529105A88CA01A2E550424FB65.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("C6AC61C49105A88CA0CA09C31864FB65.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("@babel/runtime/helpers/regeneratorRuntime.js"),a=require("@babel/runtime/helpers/asyncToGenerator.js"),r=getApp();function o(e,a){e=e.split("."),a=a.split(".");for(var r=Math.max(e.length,a.length);e.length<r;)e.push("0");for(;a.length<r;)a.push("0");for(var o=0;o<r;o++){var t=parseInt(e[o]),n=parseInt(a[o]);if(t>n)return!0;if(t<n)return!1}return!0}function t(e){return o(r.globalData.systemInfo.SDKVersion,e)}function n(){return(n=a(e().mark((function a(r,o){var t,n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,wx.getSetting().then((function(e){return console.log("authorizeFun getSetting res",e),e})).catch((function(e){return console.log("authorizeFun getSetting err",e),e}));case 2:if((t=e.sent)&&-80001!=t.err_code&&42001!=t.err_code){e.next=6;break}return u(r,o),e.abrupt("return",!1);case 6:if(!1!==t.authSetting["scope.userLocation"]){e.next=9;break}return u(r,o),e.abrupt("return",!1);case 9:return n=!1,e.next=12,wx.authorize({scope:"scope.userLocation"}).then((function(e){"function"==typeof r&&r(),n=!0})).catch((function(e){console.log("err",e),u(r,o),n=!1}));case 12:return console.log("authorizeFun authResult",n),e.abrupt("return",n);case 14:case"end":return e.stop()}}),a)})))).apply(this,arguments)}function u(e,a){wx.showModal({title:"需要授权使用您的位置才能继续",content:"请点击右上角“...” - 设置 - 位置信息，选择“仅在使用小程序期间”",confirmText:"去打开",success:function(r){console.log("showModal res",r),r.confirm?wx.openSetting({success:function(a){console.log("openSetting res",a),a.authSetting["scope.userLocation"]?"function"==typeof e&&e():u()}}):r.cancel&&"function"==typeof a&&a()}})}module.exports={enQueryString:function(e){return"?"+Object.keys(e).map((function(a){return encodeURIComponent(a)+"="+encodeURIComponent(e[a])})).join("&")},deQueryString:function(e){if(!e||e=={})return{};for(var a in e)e[a]=decodeURIComponent(e[a]);return e},fullHourList:[{showName:"0点",hour:"00"},{showName:"1点",hour:"01"},{showName:"2点",hour:"02"},{showName:"3点",hour:"03"},{showName:"4点",hour:"04"},{showName:"5点",hour:"05"},{showName:"6点",hour:"06"},{showName:"7点",hour:"07"},{showName:"8点",hour:"08"},{showName:"9点",hour:"09"},{showName:"10点",hour:"10"},{showName:"11点",hour:"11"},{showName:"12点",hour:"12"},{showName:"13点",hour:"13"},{showName:"14点",hour:"14"},{showName:"15点",hour:"15"},{showName:"16点",hour:"16"},{showName:"17点",hour:"17"},{showName:"18点",hour:"18"},{showName:"19点",hour:"19"},{showName:"20点",hour:"20"},{showName:"21点",hour:"21"},{showName:"22点",hour:"22"},{showName:"23点",hour:"23"}],fullTenMinList:[{showName:"00"},{showName:"10"},{showName:"20"},{showName:"30"},{showName:"40"},{showName:"50"}],compareVersion:o,isSupportFun:t,getNextPage:function(e){var a="";return"interval"===e?a=r.config.pagesUrl.interval_url:"interval2"===e?a=r.config.pagesUrl.interval2_url:"interval3"===e?a=r.config.pagesUrl.interval3_url:"interval31"===e?a=r.config.pagesUrl.interval31_url:"intervalSwc"===e?a=r.config.pagesUrl.intervalSwc_url:"intervalCommute"===e?a="/package/intervalCommute/intervalCommute":"interval4"===e?a="/package/interval4/pages/interval4/interval4":"fillorder"===e?a=r.config.pagesUrl.fillorder_url:"order_result"===e?a=r.config.pagesUrl.order_result_url:"order_detail"===e?a=r.config.pagesUrl.order_detail_url:console.log("请检查拓展参数配置"),a},getAdunit:function(){if(!t("2.10.4"))return"";var e="";return"wxb9ac4275800d66f0"==r.globalData.corp.appid?e="adunit-38419f89ec31b380":"wx00f14162b7dcb69c"==r.globalData.corp.appid?e="adunit-5fce4c5770601faf":"wx6c1195f8cad2aeff"==r.globalData.corp.appid?e="adunit-ad20f9f604188dc2":"wx5f6870e8790f06b1"==r.globalData.corp.appid?e="adunit-cf4193ed38b26a7b":"wxe8dcd424f26006a0"==r.globalData.corp.appid?e="adunit-91b41a61f279ed9c":"wx3af8fc46fd881d8c"==r.globalData.corp.appid?e="adunit-dbf1f4d2ced87bd2":"wx709157aab2d23402"==r.globalData.corp.appid?e="adunit-41166360682c24a1":"wxed74cada47e9d8de"==r.globalData.corp.appid?e="adunit-a2b614ccda51eead":"wx5fd2a437f46141b1"==r.globalData.corp.appid?e="adunit-93c53de1d7ad0d04":"wx33aee5462c33ed92"==r.globalData.corp.appid?e="adunit-cddf61ca7b54fd67":"wx11b1746bad44a4d0"==r.globalData.corp.appid?e="adunit-0e5a0ec7b5f17fec":"wx204a9b7e3ab9083a"==r.globalData.corp.appid?e="adunit-8c25067da61eb1e6":"wx3a8479627f9de721"==r.globalData.corp.appid&&(e="adunit-b365e936cc0c78bb"),e},authorizeFun:function(e,a){return n.apply(this,arguments)}};
},{isPage:false,isComponent:false,currentFile:'C6AC61C49105A88CA0CA09C31864FB65.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("DFDD66B19105A88CB9BB0EB66DB3FB65.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=l(require("828ADEF79105A88CE4ECB6F0DEE3FB65.js")),r=l(require("711CA4129105A88C177ACC153CD3FB65.js")),i=l(require("F8C20F779105A88C9EA46770D714FB65.js")),t=l(require("4B6480569105A88C2D02E851C2A3FB65.js")),u=l(require("490F57439105A88C2F693F444F24FB65.js"));function l(e){return e&&e.__esModule?e:{default:e}}var d={line:e.default,interval:r.default,order:i.default,customer:t.default,weixin:u.default};exports.default=d;
},{isPage:false,isComponent:false,currentFile:'DFDD66B19105A88CB9BB0EB66DB3FB65.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("F8C20F779105A88C9EA46770D714FB65.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("@babel/runtime/helpers/regeneratorRuntime.js"),r=require("@babel/runtime/helpers/asyncToGenerator.js"),t=getApp(),a="/api/v1/".concat(t.globalData.corp.ID,"/").concat(t.globalData.corp.appid,"/order/"),n={beforeFillorderV2:function(e){return t.network.requestFetch({url:a+"beforeFillorderV2",method:"GET",params:{intervalId:e.intervalID,addressId:e.addressID,getOffAddressId:e.getOffAddressID}})},getPayPamer:function(e){return t.network.requestFetch({url:a+"getPayPamer",method:"POST",params:{orderid:e},loadingMsg:"准备支付..."})},getCashierParam:function(e){return t.network.requestFetch({url:a+"getCashierParam",method:"POST",params:{orderid:e},loadingMsg:"准备支付..."})},tempOrderDetail:function(n,o){return r(e().mark((function r(){var s;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=null,t.network.requestFetch({url:a+"tempOrderDetail",method:"",params:{orderid:n,version:1},loadingMsg:o}).then((function(e){e.success&&e.data&&(s=e)})),e.abrupt("return",s);case 3:case"end":return e.stop()}}),r)})))()}};exports.default=n;
},{isPage:false,isComponent:false,currentFile:'F8C20F779105A88C9EA46770D714FB65.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("FAE9A9349105A88C9C8FC133EEA4FB65.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var r=require("@babel/runtime/helpers/objectSpread2.js"),n=require("@babel/runtime/helpers/typeof.js"),e=require("@babel/runtime/helpers/toConsumableArray.js"),t=require("@babel/runtime/helpers/regeneratorRuntime.js"),o=require("@babel/runtime/helpers/asyncToGenerator.js"),i=require("3D62BF329105A88C5B04D735CAB4FB65.js"),a=i.showMsg,u=i.isNotNull,s=wx.getExtConfigSync?wx.getExtConfigSync():{},c=require("727D99A59105A88C141BF1A2A784FB65.js"),f=function(){var r=o(t().mark((function r(n){var e,o,i=arguments;return t().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=!(i.length>1&&void 0!==i[1])||i[1],o={encryptJson:"",signData:"",version:null},r.next=4,m().then((function(r){var t=r.encryptKey,i=r.version;o.version=i;try{var u=new Int8Array(d(t)),s=Array.from(new Uint8Array(u)).map((function(r){var n=r.toString(16);return n.length<2&&(n="0"+n),n})).join(""),f=encodeURIComponent(JSON.stringify(n)),h=p(g(L.sm4.encrypt(f,s)));o.encryptJson=h,o.signData=l(n)}catch(r){c.error("encryptRequestBodyError",r),console.log("encryptRequestBodyError-",r),e&&a("数据构造异常")}})).catch((function(r){e&&a(r),c.error("getWXUserSecretKeyError",r)}));case 4:return r.abrupt("return",o);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}();function l(r){var n=encodeURIComponent(JSON.stringify(r)),e=v(n),t=new Int8Array(d(e));return p(L.sm3(t,null,!1))}function p(r){for(var n=new Uint8Array(r),e="",t=0;t<n.byteLength;t++)e+=String.fromCharCode(n[t]);return v(e)}function g(r){var n=r.match(/[\da-f]{2}/gi);if(!n)throw new Error("Invalid hex string");return new Uint8Array(n.map((function(r){return parseInt(r,16)}))).buffer}var h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",y=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,v=function(r){for(var n,e,t,o,i="",a=0,u=(r=String(r)).length%3;a<r.length;){if((e=r.charCodeAt(a++))>255||(t=r.charCodeAt(a++))>255||(o=r.charCodeAt(a++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");i+=h.charAt((n=e<<16|t<<8|o)>>18&63)+h.charAt(n>>12&63)+h.charAt(n>>6&63)+h.charAt(63&n)}return u?i.slice(0,u-3)+"===".substring(u):i};function d(r){for(var n=function(r){if(r=String(r).replace(/[\t\n\f\r ]+/g,""),!y.test(r))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");r+="==".slice(2-(3&r.length));for(var n,e,t,o="",i=0;i<r.length;)n=h.indexOf(r.charAt(i++))<<18|h.indexOf(r.charAt(i++))<<12|(e=h.indexOf(r.charAt(i++)))<<6|(t=h.indexOf(r.charAt(i++))),o+=64===e?String.fromCharCode(n>>16&255):64===t?String.fromCharCode(n>>16&255,n>>8&255):String.fromCharCode(n>>16&255,n>>8&255,255&n);return o}(r),e=n.length,t=new Uint8Array(e),o=0;o<e;o++)t[o]=n.charCodeAt(o);return t.buffer}var m=function(){return new Promise((function(r,n){var e=wx.getStorageSync(s.appid+"_user_secret_obj");if(u(e)&&(new Date).getTime()<e.expireTime)return console.log("--------getFromStorage-----------"),void r(e);wx.getUserCryptoManager().getLatestUserKey({success:function(n){console.log("--------getFromWX-----------"),wx.setStorageSync(s.appid+"_user_secret_obj",n),r(n)},fail:function(r){console.log("getWXUserSecretKeyError",r),n(r)}})}))},w=new Uint32Array(68),A=new Uint32Array(64),b=function(r,n){var e=31&n;return r<<e|r>>>32-e},E=function(r){return r^b(r,9)^b(r,17)},S=[214,144,233,254,204,225,61,183,22,182,20,194,40,251,44,5,43,103,154,118,42,190,4,195,170,68,19,38,73,134,6,153,156,66,80,244,145,239,152,122,51,84,11,67,237,207,172,98,228,179,28,169,201,8,232,149,128,223,148,250,117,143,63,166,71,7,167,252,243,115,23,186,131,89,60,25,230,133,79,168,104,107,129,178,113,100,218,139,248,235,15,75,112,86,157,53,30,36,14,94,99,88,209,162,37,34,124,59,1,33,120,135,212,0,70,87,159,211,39,82,76,54,2,231,160,196,200,158,234,191,138,210,64,199,56,181,163,247,242,206,249,97,21,161,224,174,93,164,155,52,26,85,173,147,50,48,245,140,177,227,29,246,226,46,130,102,202,96,192,41,35,171,13,83,78,111,213,219,55,69,222,253,142,47,3,255,106,114,109,108,91,81,141,27,175,146,187,221,188,127,17,217,92,65,31,16,90,216,10,193,49,136,165,205,123,189,45,116,208,18,184,229,180,176,137,105,151,74,12,150,119,126,101,185,241,9,197,110,198,132,24,240,125,236,58,220,77,32,121,238,95,62,215,203,57,72],C=[462357,472066609,943670861,1415275113,1886879365,2358483617,2830087869,3301692121,3773296373,4228057617,404694573,876298825,1347903077,1819507329,2291111581,2762715833,3234320085,3705924337,4177462797,337322537,808926789,1280531041,1752135293,2223739545,2695343797,3166948049,3638552301,4110090761,269950501,741554753,1213159005,1684763257];function U(r){for(var n=[],e=0,t=r.length;e<t;e+=2)n.push(parseInt(r.substring(e,e+2),16));return n}function x(r){return r.map((function(r){return 1===(r=r.toString(16)).length?"0"+r:r})).join("")}function q(r){for(var n=[],e=0,t=r.length;e<t;e++){var o=r.codePointAt(e);if(o<=127)n.push(o);else if(o<=2047)n.push(192|o>>>6),n.push(128|63&o);else if(o<=55295||o>=57344&&o<=65535)n.push(224|o>>>12),n.push(128|o>>>6&63),n.push(128|63&o);else{if(!(o>=65536&&o<=1114111))throw n.push(o),new Error("input is not supported");e++,n.push(240|o>>>18&28),n.push(128|o>>>12&63),n.push(128|o>>>6&63),n.push(128|63&o)}}return n}function k(r){for(var n=[],e=0,t=r.length;e<t;e++)r[e]>=240&&r[e]<=247?(n.push(String.fromCodePoint(((7&r[e])<<18)+((63&r[e+1])<<12)+((63&r[e+2])<<6)+(63&r[e+3]))),e+=3):r[e]>=224&&r[e]<=239?(n.push(String.fromCodePoint(((15&r[e])<<12)+((63&r[e+1])<<6)+(63&r[e+2]))),e+=2):r[e]>=192&&r[e]<=223?(n.push(String.fromCodePoint(((31&r[e])<<6)+(63&r[e+1]))),e++):n.push(String.fromCodePoint(r[e]));return n.join("")}function j(r){return(255&S[r>>>24&255])<<24|(255&S[r>>>16&255])<<16|(255&S[r>>>8&255])<<8|255&S[255&r]}function I(r){return r^b(r,2)^b(r,10)^b(r,18)^b(r,24)}function R(r){return r^b(r,13)^b(r,23)}function M(r,n,e){for(var t=new Array(4),o=new Array(4),i=0;i<4;i++)o[0]=255&r[4*i],o[1]=255&r[4*i+1],o[2]=255&r[4*i+2],o[3]=255&r[4*i+3],t[i]=o[0]<<24|o[1]<<16|o[2]<<8|o[3];for(var a,u=0;u<32;u+=4)a=t[1]^t[2]^t[3]^e[u+0],t[0]^=I(j(a)),a=t[2]^t[3]^t[0]^e[u+1],t[1]^=I(j(a)),a=t[3]^t[0]^t[1]^e[u+2],t[2]^=I(j(a)),a=t[0]^t[1]^t[2]^e[u+3],t[3]^=I(j(a));for(var s=0;s<16;s+=4)n[s]=t[3-s/4]>>>24&255,n[s+1]=t[3-s/4]>>>16&255,n[s+2]=t[3-s/4]>>>8&255,n[s+3]=255&t[3-s/4]}function T(r,n,e){for(var t=new Array(4),o=new Array(4),i=0;i<4;i++)o[0]=255&r[0+4*i],o[1]=255&r[1+4*i],o[2]=255&r[2+4*i],o[3]=255&r[3+4*i],t[i]=o[0]<<24|o[1]<<16|o[2]<<8|o[3];t[0]^=2746333894,t[1]^=1453994832,t[2]^=1736282519,t[3]^=2993693404;for(var a,u=0;u<32;u+=4)a=t[1]^t[2]^t[3]^C[u+0],n[u+0]=t[0]^=R(j(a)),a=t[2]^t[3]^t[0]^C[u+1],n[u+1]=t[1]^=R(j(a)),a=t[3]^t[0]^t[1]^C[u+2],n[u+2]=t[2]^=R(j(a)),a=t[0]^t[1]^t[2]^C[u+3],n[u+3]=t[3]^=R(j(a));if(0===e)for(var s,c=0;c<16;c++)s=n[c],n[c]=n[31-c],n[31-c]=s}var P=new Uint8Array(64),O=new Uint8Array(64),B=!0;function D(r,n){for(var e=[],t=r.length-1;t>=0;t--)e[t]=255&(r[t]^n[t]);return e}var L={sm3Encryption:function(r){var n=8*r.length,t=n%512;t=t>=448?512-t%448-1:448-t-1;for(var o=new Array((t-7)/8),i=new Array(8),a=0,u=o.length;a<u;a++)o[a]=0;for(var s=0,c=i.length;s<c;s++)i[s]=0;n=n.toString(2);for(var f=7;f>=0;f--)if(n.length>8){var l=n.length-8;i[f]=parseInt(n.substring(l),2),n=n.substring(0,l)}else n.length>0&&(i[f]=parseInt(n,2),n="");for(var p,g=new Uint8Array([].concat(e(r),[128],o,i)),h=new DataView(g.buffer,0),y=g.length/64,v=new Uint32Array([1937774191,1226093241,388252375,3666478592,2842636476,372324522,3817729613,2969243214]),d=0;d<y;d++){w.fill(0),A.fill(0);for(var m=16*d,S=0;S<16;S++)w[S]=h.getUint32(4*(m+S),!1);for(var C=16;C<68;C++)w[C]=(p=w[C-16]^w[C-9]^b(w[C-3],15))^b(p,15)^b(p,23)^b(w[C-13],7)^w[C-6];for(var U=0;U<64;U++)A[U]=w[U]^w[U+4];for(var x=v[0],q=v[1],k=v[2],j=v[3],I=v[4],R=v[5],M=v[6],T=v[7],P=void 0,O=void 0,B=void 0,D=void 0,L=0;L<64;L++)D=L>=0&&L<=15?2043430169:2055708042,O=(L>=0&&L<=15?x^q^k:x&q|x&k|q&k)+j+((P=b(b(x,12)+I+b(D,L),7))^b(x,12))+A[L],B=(L>=0&&L<=15?I^R^M:I&R|~I&M)+T+P+w[L],j=k,k=b(q,9),q=x,x=O,T=M,M=b(R,19),R=I,I=E(B);v[0]^=x,v[1]^=q,v[2]^=k,v[3]^=j,v[4]^=I,v[5]^=R,v[6]^=M,v[7]^=T}for(var W=[],_=0,F=v.length;_<F;_++){var J=v[_];W.push((4278190080&J)>>>24,(16711680&J)>>>16,(65280&J)>>>8,255&J)}return W},hmac:function(r,n){if(B){for(var t=0;t<64;t++)P[t]=54,O[t]=92;B=!1}for(n.length>64&&(n=L.sm3Encryption(n));n.length<64;)n.push(0);var o=D(n,P),i=D(n,O),a=L.sm3Encryption([].concat(e(o),e(r)));return L.sm3Encryption([].concat(e(i),e(a)))},sm3:function(r,n,e){if(r="string"==typeof r?q(r):Array.prototype.slice.call(r),n){if("hmac"!==(n.mode||"hmac"))throw new Error("invalid mode");var t=n.key;if(!t)throw new Error("invalid key");return t="string"==typeof t?U(t):Array.prototype.slice.call(t),x(L.hmac(r,t))}return e?x(L.sm3Encryption(r)):L.sm3Encryption(r)},sm4Encryption:function(r,n,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=o.padding,a=void 0===i?"pkcs#7":i,u=o.mode,s=o.iv,c=void 0===s?[]:s,f=o.output,l=void 0===f?"string":f;if("cbc"===u&&("string"==typeof c&&(c=U(c)),16!==c.length))throw new Error("iv is invalid");if("string"==typeof n&&(n=U(n)),16!==n.length)throw new Error("key is invalid");if(r="string"==typeof r?0!==t?q(r):U(r):e(r),("pkcs#5"===a||"pkcs#7"===a)&&0!==t)for(var p=16-r.length%16,g=0;g<p;g++)r.push(p);var h=new Array(32);T(n,h,t);for(var y=[],v=c,d=r.length,m=0;d>=16;){var w=r.slice(m,m+16),A=new Array(16);if("cbc"===u)for(var b=0;b<16;b++)0!==t&&(w[b]^=v[b]);M(w,A,h);for(var E=0;E<16;E++)"cbc"===u&&0===t&&(A[E]^=v[E]),y[m+E]=A[E];"cbc"===u&&(v=0!==t?A:w),d-=16,m+=16}if(("pkcs#5"===a||"pkcs#7"===a)&&0===t){for(var S=y.length,C=y[S-1],j=1;j<=C;j++)if(y[S-j]!==C)throw new Error("padding is invalid");y.splice(S-C,C)}return"array"!==l?0!==t?x(y):k(y):y},sm4:{encrypt:function(r,n,e){return L.sm4Encryption(r,n,1,e)},decrypt:function(r,n,e){return L.sm4Encryption(r,n,0,e)}}};module.exports={encryptRequestBody:f,arrayBufferToBase64:p,returnEncryptRequestParams:function(e,t){var o,i=e.length,a=t,u={};return i>0&&(o=e[0],a=e[1]),i>2&&(u="object"===n(e[2])&&null!==e[2]?e[2]:function(r){var e={};"string"==typeof r[2]&&(e.loadingMsg=r[2]);"boolean"==typeof r[3]&&(e.maskModal=r[3]);"boolean"==typeof r[4]&&(e.isShowErrorMsg=r[4]);"function"==typeof r[5]&&(e.doComplete=r[5]);"object"===n(r[6])&&null!==r[6]&&(e.requestConfig=r[6]);"boolean"==typeof r[7]&&(e.useURL=r[7]);"boolean"==typeof r[8]&&(e.noEncryption=r[8]);return e}(e)),r({postData:o,url:a,loadingMsg:"",maskModal:!1,isShowErrorMsg:!0,doComplete:void 0,requestConfig:null,useURL:!1,noEncryption:!1},u)}};
},{isPage:false,isComponent:false,currentFile:'FAE9A9349105A88C9C8FC133EEA4FB65.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("FB6AEB519105A88C9D0C83563554FB65.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("@babel/runtime/helpers/createForOfIteratorHelper.js"),t=require("@babel/runtime/helpers/regeneratorRuntime.js"),n=require("@babel/runtime/helpers/slicedToArray.js"),r=require("@babel/runtime/helpers/asyncToGenerator.js"),i=require("@babel/runtime/helpers/classCallCheck.js"),a=require("@babel/runtime/helpers/createClass.js"),s=require("miniprogram_npm/crypto-js/index.js");function u(e,t){return s.SHA256(e+t).toString(s.enc.Hex)}function o(e){return new Promise((function(t,n){var r=Object.assign({},e);r.success=function(e){return t(e)},r.fail=function(e){return n(e)};try{wx.request(r)}catch(e){n(e)}}))}var c=function(){function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,s),this.host=e.host||"",this.corpid=e.corpid||"",this.version=e.version||"",this.openid=e.openid||"",this.poolSize=e.poolSize||10,this.lifespan=e.lifespan||36e5,this.maxRetries="number"==typeof e.maxRetries?e.maxRetries:3,this._initExpiredTime=0,this._initialized=!1,this._pool=new Map,this._poolKeys=[],this._index=0,this._lastIndex=-1}var c,l,h,p,f,d;return a(s,[{key:"returnXCANonce",value:function(){var e=this.openid||"",t=Math.floor(1e4+9e4*Math.random());try{var n=Math.random().toString(36).substring(2);return Date.now()+t+n+e.substring(0,10)+this.corpid}catch(n){return Date.now()+t+e.substring(0,10)+this.corpid}}},{key:"_returnExpiredTime",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Date.now()+this.lifespan-e}},{key:"_isExpired",value:function(e){return!e||Date.now()>=e}},{key:"_fetchNewChallenge",value:(d=r(t().mark((function e(){var r,i,a,s,u,c,l,h,p,f,d,x,_,g=arguments;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=g.length>0&&void 0!==g[0]?g[0]:1,i=this.maxRetries;case 2:if(!(i>0)){e.next=21;break}return i--,e.prev=4,e.next=7,o({url:this.host+"/api/newChallengeV3",data:{countString:r},method:"POST",header:{"content-type":"application/x-www-form-urlencoded","X-Ca-Nonce":this.returnXCANonce(),corpid:this.corpid,v:this.version}});case 7:if(!((a=e.sent)&&200===a.statusCode&&a.data&&a.data.success&&a.data.data)){e.next=15;break}for(s="string"==typeof a.data.data?a.data.data:"",u=s.split(",").filter(Boolean),c=[],l=0;l<u.length;l++)h=u[l],p=h.split("_"),f=n(p,2),d=f[0],x=f[1],d&&x&&(_={challenge:d,status:0,nonce:0,difficulty:x,difficultyLength:x.length,expiredTime:this._returnExpiredTime(),originalKey:h,index:l},c.push(_));if(!(c.length>0)){e.next=15;break}return e.abrupt("return",c);case 15:e.next=19;break;case 17:e.prev=17,e.t0=e.catch(4);case 19:e.next=2;break;case 21:return e.abrupt("return",[]);case 22:case"end":return e.stop()}}),e,this,[[4,17]])}))),function(){return d.apply(this,arguments)})},{key:"init",value:(f=r(t().mark((function n(){var r,i,a,s,u;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._initialized){t.next=2;break}return t.abrupt("return");case 2:return this._initialized=!0,t.next=5,this._fetchNewChallenge(this.poolSize);case 5:r=t.sent,i=e(r);try{for(i.s();!(a=i.n()).done;)s=a.value,u=s.challenge,this._pool.has(u)||(this._pool.set(u,s),this._poolKeys.push(u),this._computeNonce(s.challenge).catch((function(){})))}catch(e){i.e(e)}finally{i.f()}this._initExpiredTime=this._returnExpiredTime();case 9:case"end":return t.stop()}}),n,this)}))),function(){return f.apply(this,arguments)})},{key:"_computeNonce",value:(p=r(t().mark((function e(n){var i,a,s,o=this;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=this._pool.get(n)){e.next=3;break}return e.abrupt("return",null);case 3:return i.hasOwnProperty("index")&&this._isExpired(i.expiredTime)&&(this._pool.delete(n),this._poolKeys.splice(i.index,1)),e.prev=4,a=function(){var e=r(t().mark((function e(){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=o._pool.get(n)){e.next=3;break}return e.abrupt("return",null);case 3:if(u(r.challenge,r.nonce).substring(0,r.difficultyLength)!==r.difficulty){e.next=7;break}return r.status=1,e.abrupt("return",r);case 7:return r.nonce++,e.abrupt("return",new Promise((function(e){return setTimeout((function(){return e(a())}),0)})));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=8,a();case 8:return s=e.sent,e.abrupt("return",s);case 12:return e.prev=12,e.t0=e.catch(4),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,this,[[4,12]])}))),function(e){return p.apply(this,arguments)})},{key:"_initPresetChallenge",value:(h=r(t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._pool.clear(),this._poolKeys=[],this._index=0,this._lastIndex=-1,this._initialized=!1,e.next=7,this.init();case 7:case"end":return e.stop()}}),e,this)}))),function(){return h.apply(this,arguments)})},{key:"handleInitChallengeAtExpiredTime",value:(l=r(t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._initExpiredTime){e.next=2;break}return e.abrupt("return");case 2:if(!(Date.now()>=this._initExpiredTime)){e.next=5;break}return e.next=5,this._initPresetChallenge();case 5:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})},{key:"getNextAvailableChallenge",value:function(){if(!this._poolKeys.length)return null;this._index===this._lastIndex&&(this._index=(this._index+1)%this._poolKeys.length);var e=this._poolKeys[this._index],t=this._pool.get(e);return this._index=(this._index+1)%this._poolKeys.length,t&&1===t.status&&!this._isExpired(t.expiredTime)?(this._lastIndex=0===this._index?this._poolKeys.length-1:this._index-1,e):null}},{key:"getChallengeHeaderParams",value:(c=r(t().mark((function e(){var n=this;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=r(t().mark((function e(r,i){var a,s,o,c,l;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.handleInitChallengeAtExpiredTime();case 2:if(n._initialized){e.next=5;break}return e.next=5,n.init();case 5:if(!(a=n.getNextAvailableChallenge())||!n._pool.get(a)){e.next=15;break}(s=n._pool.get(a)).status=0,o=Object.assign({},s),r(o),s.nonce++,n._computeNonce(a).catch((function(){})),e.next=25;break;case 15:return e.prev=15,e.next=18,n._fetchNewChallenge(1);case 18:(c=e.sent)&&c.length&&(l=c[0],function e(){u(l.challenge,l.nonce).substring(0,l.difficultyLength)===l.difficulty?r(l):(l.nonce++,setTimeout(e,0))}()),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(15),r(null);case 25:case"end":return e.stop()}}),e,null,[[15,22]])})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),function(){return c.apply(this,arguments)})}]),s}();module.exports={PowManager:c};
},{isPage:false,isComponent:false,currentFile:'FB6AEB519105A88C9D0C83563554FB65.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("miniprogram_npm/crypto-js/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,r,t,i=require("../../@babel/runtime/helpers/typeof");module.exports=(e={},t=function(r,t){if(!e[r])return require(t);if(!e[r].status){var n=e[r].m;n._exports=n._tempexports;var o=Object.getOwnPropertyDescriptor(n,"exports");o&&o.configurable&&Object.defineProperty(n,"exports",{set:function(e){"object"===i(e)&&e!==n._exports&&(n._exports.__proto__=e.__proto__,Object.keys(e).forEach((function(r){n._exports[r]=e[r]}))),n._tempexports=e},get:function(){return n._tempexports}}),e[r].status=1,e[r].func(e[r].req,n,n.exports)}return e[r].m.exports},(r=function(r,t,i){e[r]={status:0,func:t,req:i,m:{exports:{},_tempexports:{}}}})(1758590377088,(function(e,r,t){var n,o;n=this,o=function(e){return e},"object"===i(t)?r.exports=t=o(e("./core"),e("./x64-core"),e("./lib-typedarrays"),e("./enc-utf16"),e("./enc-base64"),e("./enc-base64url"),e("./md5"),e("./sha1"),e("./sha256"),e("./sha224"),e("./sha512"),e("./sha384"),e("./sha3"),e("./ripemd160"),e("./hmac"),e("./pbkdf2"),e("./evpkdf"),e("./cipher-core"),e("./mode-cfb"),e("./mode-ctr"),e("./mode-ctr-gladman"),e("./mode-ofb"),e("./mode-ecb"),e("./pad-ansix923"),e("./pad-iso10126"),e("./pad-iso97971"),e("./pad-zeropadding"),e("./pad-nopadding"),e("./format-hex"),e("./aes"),e("./tripledes"),e("./rc4"),e("./rabbit"),e("./rabbit-legacy"),e("./blowfish")):"function"==typeof define&&define.amd?define(["./core","./x64-core","./lib-typedarrays","./enc-utf16","./enc-base64","./enc-base64url","./md5","./sha1","./sha256","./sha224","./sha512","./sha384","./sha3","./ripemd160","./hmac","./pbkdf2","./evpkdf","./cipher-core","./mode-cfb","./mode-ctr","./mode-ctr-gladman","./mode-ofb","./mode-ecb","./pad-ansix923","./pad-iso10126","./pad-iso97971","./pad-zeropadding","./pad-nopadding","./format-hex","./aes","./tripledes","./rc4","./rabbit","./rabbit-legacy","./blowfish"],o):n.CryptoJS=n.CryptoJS}),(function(e){return t({"./core":1758590377089,"./x64-core":1758590377090,"./lib-typedarrays":1758590377091,"./enc-utf16":1758590377092,"./enc-base64":1758590377093,"./enc-base64url":1758590377094,"./md5":1758590377095,"./sha1":1758590377096,"./sha256":1758590377097,"./sha224":1758590377098,"./sha512":1758590377099,"./sha384":1758590377100,"./sha3":1758590377101,"./ripemd160":1758590377102,"./hmac":1758590377103,"./pbkdf2":1758590377104,"./evpkdf":1758590377105,"./cipher-core":1758590377106,"./mode-cfb":1758590377107,"./mode-ctr":1758590377108,"./mode-ctr-gladman":1758590377109,"./mode-ofb":1758590377110,"./mode-ecb":1758590377111,"./pad-ansix923":1758590377112,"./pad-iso10126":1758590377113,"./pad-iso97971":1758590377114,"./pad-zeropadding":1758590377115,"./pad-nopadding":1758590377116,"./format-hex":1758590377117,"./aes":1758590377118,"./tripledes":1758590377119,"./rc4":1758590377120,"./rabbit":1758590377121,"./rabbit-legacy":1758590377122,"./blowfish":1758590377123}[e],e)})),r(1758590377089,(function(e,r,t){var n,o;n=this,o=function(){var r=r||function(r,t){var i;if("undefined"!=typeof window&&window.crypto&&(i=window.crypto),"undefined"!=typeof self&&self.crypto&&(i=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(i=globalThis.crypto),!i&&"undefined"!=typeof window&&window.msCrypto&&(i=window.msCrypto),!i&&"undefined"!=typeof global&&global.crypto&&(i=global.crypto),!i&&"function"==typeof e)try{i=e("crypto")}catch(e){}var n=function(){if(i){if("function"==typeof i.getRandomValues)try{return i.getRandomValues(new Uint32Array(1))[0]}catch(e){}if("function"==typeof i.randomBytes)try{return i.randomBytes(4).readInt32LE()}catch(e){}}throw new Error("Native crypto module could not be used to get secure random number.")},o=Object.create||function(){function e(){}return function(r){var t;return e.prototype=r,t=new e,e.prototype=null,t}}(),c={},s=c.lib={},a=s.Base={extend:function(e){var r=o(this);return e&&r.mixIn(e),r.hasOwnProperty("init")&&this.init!==r.init||(r.init=function(){r.$super.init.apply(this,arguments)}),r.init.prototype=r,r.$super=this,r},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var r in e)e.hasOwnProperty(r)&&(this[r]=e[r]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},f=s.WordArray=a.extend({init:function(e,r){e=this.words=e||[],this.sigBytes=null!=r?r:4*e.length},toString:function(e){return(e||d).stringify(this)},concat:function(e){var r=this.words,t=e.words,i=this.sigBytes,n=e.sigBytes;if(this.clamp(),i%4)for(var o=0;o<n;o++){var c=t[o>>>2]>>>24-o%4*8&255;r[i+o>>>2]|=c<<24-(i+o)%4*8}else for(var s=0;s<n;s+=4)r[i+s>>>2]=t[s>>>2];return this.sigBytes+=n,this},clamp:function(){var e=this.words,t=this.sigBytes;e[t>>>2]&=4294967295<<32-t%4*8,e.length=r.ceil(t/4)},clone:function(){var e=a.clone.call(this);return e.words=this.words.slice(0),e},random:function(e){for(var r=[],t=0;t<e;t+=4)r.push(n());return new f.init(r,e)}}),h=c.enc={},d=h.Hex={stringify:function(e){for(var r=e.words,t=e.sigBytes,i=[],n=0;n<t;n++){var o=r[n>>>2]>>>24-n%4*8&255;i.push((o>>>4).toString(16)),i.push((15&o).toString(16))}return i.join("")},parse:function(e){for(var r=e.length,t=[],i=0;i<r;i+=2)t[i>>>3]|=parseInt(e.substr(i,2),16)<<24-i%8*4;return new f.init(t,r/2)}},u=h.Latin1={stringify:function(e){for(var r=e.words,t=e.sigBytes,i=[],n=0;n<t;n++){var o=r[n>>>2]>>>24-n%4*8&255;i.push(String.fromCharCode(o))}return i.join("")},parse:function(e){for(var r=e.length,t=[],i=0;i<r;i++)t[i>>>2]|=(255&e.charCodeAt(i))<<24-i%4*8;return new f.init(t,r)}},p=h.Utf8={stringify:function(e){try{return decodeURIComponent(escape(u.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return u.parse(unescape(encodeURIComponent(e)))}},l=s.BufferedBlockAlgorithm=a.extend({reset:function(){this._data=new f.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=p.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(e){var t,i=this._data,n=i.words,o=i.sigBytes,c=this.blockSize,s=o/(4*c),a=(s=e?r.ceil(s):r.max((0|s)-this._minBufferSize,0))*c,h=r.min(4*a,o);if(a){for(var d=0;d<a;d+=c)this._doProcessBlock(n,d);t=n.splice(0,a),i.sigBytes-=h}return new f.init(t,h)},clone:function(){var e=a.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),v=(s.Hasher=l.extend({cfg:a.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(r,t){return new e.init(t).finalize(r)}},_createHmacHelper:function(e){return function(r,t){return new v.HMAC.init(e,t).finalize(r)}}}),c.algo={});return c}(Math);return r},"object"===i(t)?r.exports=t=o():"function"==typeof define&&define.amd?define([],o):n.CryptoJS=o()}),(function(e){return t({}[e],e)})),r(1758590377090,(function(e,r,t){var n,o;n=this,o=function(e){var r,t,i,n,o;return t=(r=e).lib,i=t.Base,n=t.WordArray,(o=r.x64={}).Word=i.extend({init:function(e,r){this.high=e,this.low=r}}),o.WordArray=i.extend({init:function(e,r){e=this.words=e||[],this.sigBytes=null!=r?r:8*e.length},toX32:function(){for(var e=this.words,r=e.length,t=[],i=0;i<r;i++){var o=e[i];t.push(o.high),t.push(o.low)}return n.create(t,this.sigBytes)},clone:function(){for(var e=i.clone.call(this),r=e.words=this.words.slice(0),t=r.length,n=0;n<t;n++)r[n]=r[n].clone();return e}}),e},"object"===i(t)?r.exports=t=o(e("./core")):"function"==typeof define&&define.amd?define(["./core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089}[e],e)})),r(1758590377091,(function(e,r,t){var n,o;n=this,o=function(e){return function(){if("function"==typeof ArrayBuffer){var r=e.lib.WordArray,t=r.init;(r.init=function(e){if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),(e instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array)&&(e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),e instanceof Uint8Array){for(var r=e.byteLength,i=[],n=0;n<r;n++)i[n>>>2]|=e[n]<<24-n%4*8;t.call(this,i,r)}else t.apply(this,arguments)}).prototype=r}}(),e.lib.WordArray},"object"===i(t)?r.exports=t=o(e("./core")):"function"==typeof define&&define.amd?define(["./core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089}[e],e)})),r(1758590377092,(function(e,r,t){var n,o;n=this,o=function(e){return function(){var r=e,t=r.lib.WordArray,i=r.enc;function n(e){return e<<8&4278255360|e>>>8&16711935}i.Utf16=i.Utf16BE={stringify:function(e){for(var r=e.words,t=e.sigBytes,i=[],n=0;n<t;n+=2){var o=r[n>>>2]>>>16-n%4*8&65535;i.push(String.fromCharCode(o))}return i.join("")},parse:function(e){for(var r=e.length,i=[],n=0;n<r;n++)i[n>>>1]|=e.charCodeAt(n)<<16-n%2*16;return t.create(i,2*r)}},i.Utf16LE={stringify:function(e){for(var r=e.words,t=e.sigBytes,i=[],o=0;o<t;o+=2){var c=n(r[o>>>2]>>>16-o%4*8&65535);i.push(String.fromCharCode(c))}return i.join("")},parse:function(e){for(var r=e.length,i=[],o=0;o<r;o++)i[o>>>1]|=n(e.charCodeAt(o)<<16-o%2*16);return t.create(i,2*r)}}}(),e.enc.Utf16},"object"===i(t)?r.exports=t=o(e("./core")):"function"==typeof define&&define.amd?define(["./core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089}[e],e)})),r(1758590377093,(function(e,r,t){var n,o;n=this,o=function(e){var r,t;return t=(r=e).lib.WordArray,r.enc.Base64={stringify:function(e){var r=e.words,t=e.sigBytes,i=this._map;e.clamp();for(var n=[],o=0;o<t;o+=3)for(var c=(r[o>>>2]>>>24-o%4*8&255)<<16|(r[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|r[o+2>>>2]>>>24-(o+2)%4*8&255,s=0;s<4&&o+.75*s<t;s++)n.push(i.charAt(c>>>6*(3-s)&63));var a=i.charAt(64);if(a)for(;n.length%4;)n.push(a);return n.join("")},parse:function(e){var r=e.length,i=this._map,n=this._reverseMap;if(!n){n=this._reverseMap=[];for(var o=0;o<i.length;o++)n[i.charCodeAt(o)]=o}var c=i.charAt(64);if(c){var s=e.indexOf(c);-1!==s&&(r=s)}return function(e,r,i){for(var n=[],o=0,c=0;c<r;c++)if(c%4){var s=i[e.charCodeAt(c-1)]<<c%4*2,a=i[e.charCodeAt(c)]>>>6-c%4*2,f=s|a;n[o>>>2]|=f<<24-o%4*8,o++}return t.create(n,o)}(e,r,n)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},e.enc.Base64},"object"===i(t)?r.exports=t=o(e("./core")):"function"==typeof define&&define.amd?define(["./core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089}[e],e)})),r(1758590377094,(function(e,r,t){var n,o;n=this,o=function(e){var r,t;return t=(r=e).lib.WordArray,r.enc.Base64url={stringify:function(e,r){void 0===r&&(r=!0);var t=e.words,i=e.sigBytes,n=r?this._safe_map:this._map;e.clamp();for(var o=[],c=0;c<i;c+=3)for(var s=(t[c>>>2]>>>24-c%4*8&255)<<16|(t[c+1>>>2]>>>24-(c+1)%4*8&255)<<8|t[c+2>>>2]>>>24-(c+2)%4*8&255,a=0;a<4&&c+.75*a<i;a++)o.push(n.charAt(s>>>6*(3-a)&63));var f=n.charAt(64);if(f)for(;o.length%4;)o.push(f);return o.join("")},parse:function(e,r){void 0===r&&(r=!0);var i=e.length,n=r?this._safe_map:this._map,o=this._reverseMap;if(!o){o=this._reverseMap=[];for(var c=0;c<n.length;c++)o[n.charCodeAt(c)]=c}var s=n.charAt(64);if(s){var a=e.indexOf(s);-1!==a&&(i=a)}return function(e,r,i){for(var n=[],o=0,c=0;c<r;c++)if(c%4){var s=i[e.charCodeAt(c-1)]<<c%4*2,a=i[e.charCodeAt(c)]>>>6-c%4*2,f=s|a;n[o>>>2]|=f<<24-o%4*8,o++}return t.create(n,o)}(e,i,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_safe_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"},e.enc.Base64url},"object"===i(t)?r.exports=t=o(e("./core")):"function"==typeof define&&define.amd?define(["./core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089}[e],e)})),r(1758590377095,(function(e,r,t){var n,o;n=this,o=function(e){return function(r){var t=e,i=t.lib,n=i.WordArray,o=i.Hasher,c=t.algo,s=[];!function(){for(var e=0;e<64;e++)s[e]=4294967296*r.abs(r.sin(e+1))|0}();var a=c.MD5=o.extend({_doReset:function(){this._hash=new n.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,r){for(var t=0;t<16;t++){var i=r+t,n=e[i];e[i]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8)}var o=this._hash.words,c=e[r+0],a=e[r+1],p=e[r+2],l=e[r+3],v=e[r+4],y=e[r+5],_=e[r+6],g=e[r+7],b=e[r+8],m=e[r+9],B=e[r+10],k=e[r+11],x=e[r+12],w=e[r+13],S=e[r+14],C=e[r+15],A=o[0],H=o[1],z=o[2],R=o[3];A=f(A,H,z,R,c,7,s[0]),R=f(R,A,H,z,a,12,s[1]),z=f(z,R,A,H,p,17,s[2]),H=f(H,z,R,A,l,22,s[3]),A=f(A,H,z,R,v,7,s[4]),R=f(R,A,H,z,y,12,s[5]),z=f(z,R,A,H,_,17,s[6]),H=f(H,z,R,A,g,22,s[7]),A=f(A,H,z,R,b,7,s[8]),R=f(R,A,H,z,m,12,s[9]),z=f(z,R,A,H,B,17,s[10]),H=f(H,z,R,A,k,22,s[11]),A=f(A,H,z,R,x,7,s[12]),R=f(R,A,H,z,w,12,s[13]),z=f(z,R,A,H,S,17,s[14]),A=h(A,H=f(H,z,R,A,C,22,s[15]),z,R,a,5,s[16]),R=h(R,A,H,z,_,9,s[17]),z=h(z,R,A,H,k,14,s[18]),H=h(H,z,R,A,c,20,s[19]),A=h(A,H,z,R,y,5,s[20]),R=h(R,A,H,z,B,9,s[21]),z=h(z,R,A,H,C,14,s[22]),H=h(H,z,R,A,v,20,s[23]),A=h(A,H,z,R,m,5,s[24]),R=h(R,A,H,z,S,9,s[25]),z=h(z,R,A,H,l,14,s[26]),H=h(H,z,R,A,b,20,s[27]),A=h(A,H,z,R,w,5,s[28]),R=h(R,A,H,z,p,9,s[29]),z=h(z,R,A,H,g,14,s[30]),A=d(A,H=h(H,z,R,A,x,20,s[31]),z,R,y,4,s[32]),R=d(R,A,H,z,b,11,s[33]),z=d(z,R,A,H,k,16,s[34]),H=d(H,z,R,A,S,23,s[35]),A=d(A,H,z,R,a,4,s[36]),R=d(R,A,H,z,v,11,s[37]),z=d(z,R,A,H,g,16,s[38]),H=d(H,z,R,A,B,23,s[39]),A=d(A,H,z,R,w,4,s[40]),R=d(R,A,H,z,c,11,s[41]),z=d(z,R,A,H,l,16,s[42]),H=d(H,z,R,A,_,23,s[43]),A=d(A,H,z,R,m,4,s[44]),R=d(R,A,H,z,x,11,s[45]),z=d(z,R,A,H,C,16,s[46]),A=u(A,H=d(H,z,R,A,p,23,s[47]),z,R,c,6,s[48]),R=u(R,A,H,z,g,10,s[49]),z=u(z,R,A,H,S,15,s[50]),H=u(H,z,R,A,y,21,s[51]),A=u(A,H,z,R,x,6,s[52]),R=u(R,A,H,z,l,10,s[53]),z=u(z,R,A,H,B,15,s[54]),H=u(H,z,R,A,a,21,s[55]),A=u(A,H,z,R,b,6,s[56]),R=u(R,A,H,z,C,10,s[57]),z=u(z,R,A,H,_,15,s[58]),H=u(H,z,R,A,w,21,s[59]),A=u(A,H,z,R,v,6,s[60]),R=u(R,A,H,z,k,10,s[61]),z=u(z,R,A,H,p,15,s[62]),H=u(H,z,R,A,m,21,s[63]),o[0]=o[0]+A|0,o[1]=o[1]+H|0,o[2]=o[2]+z|0,o[3]=o[3]+R|0},_doFinalize:function(){var e=this._data,t=e.words,i=8*this._nDataBytes,n=8*e.sigBytes;t[n>>>5]|=128<<24-n%32;var o=r.floor(i/4294967296),c=i;t[15+(n+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),t[14+(n+64>>>9<<4)]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8),e.sigBytes=4*(t.length+1),this._process();for(var s=this._hash,a=s.words,f=0;f<4;f++){var h=a[f];a[f]=16711935&(h<<8|h>>>24)|4278255360&(h<<24|h>>>8)}return s},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e}});function f(e,r,t,i,n,o,c){var s=e+(r&t|~r&i)+n+c;return(s<<o|s>>>32-o)+r}function h(e,r,t,i,n,o,c){var s=e+(r&i|t&~i)+n+c;return(s<<o|s>>>32-o)+r}function d(e,r,t,i,n,o,c){var s=e+(r^t^i)+n+c;return(s<<o|s>>>32-o)+r}function u(e,r,t,i,n,o,c){var s=e+(t^(r|~i))+n+c;return(s<<o|s>>>32-o)+r}t.MD5=o._createHelper(a),t.HmacMD5=o._createHmacHelper(a)}(Math),e.MD5},"object"===i(t)?r.exports=t=o(e("./core")):"function"==typeof define&&define.amd?define(["./core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089}[e],e)})),r(1758590377096,(function(e,r,t){var n,o;n=this,o=function(e){var r,t,i,n,o,c,s;return t=(r=e).lib,i=t.WordArray,n=t.Hasher,o=r.algo,c=[],s=o.SHA1=n.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,r){for(var t=this._hash.words,i=t[0],n=t[1],o=t[2],s=t[3],a=t[4],f=0;f<80;f++){if(f<16)c[f]=0|e[r+f];else{var h=c[f-3]^c[f-8]^c[f-14]^c[f-16];c[f]=h<<1|h>>>31}var d=(i<<5|i>>>27)+a+c[f];d+=f<20?1518500249+(n&o|~n&s):f<40?1859775393+(n^o^s):f<60?(n&o|n&s|o&s)-1894007588:(n^o^s)-899497514,a=s,s=o,o=n<<30|n>>>2,n=i,i=d}t[0]=t[0]+i|0,t[1]=t[1]+n|0,t[2]=t[2]+o|0,t[3]=t[3]+s|0,t[4]=t[4]+a|0},_doFinalize:function(){var e=this._data,r=e.words,t=8*this._nDataBytes,i=8*e.sigBytes;return r[i>>>5]|=128<<24-i%32,r[14+(i+64>>>9<<4)]=Math.floor(t/4294967296),r[15+(i+64>>>9<<4)]=t,e.sigBytes=4*r.length,this._process(),this._hash},clone:function(){var e=n.clone.call(this);return e._hash=this._hash.clone(),e}}),r.SHA1=n._createHelper(s),r.HmacSHA1=n._createHmacHelper(s),e.SHA1},"object"===i(t)?r.exports=t=o(e("./core")):"function"==typeof define&&define.amd?define(["./core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089}[e],e)})),r(1758590377097,(function(e,r,t){var n,o;n=this,o=function(e){return function(r){var t=e,i=t.lib,n=i.WordArray,o=i.Hasher,c=t.algo,s=[],a=[];!function(){function e(e){for(var t=r.sqrt(e),i=2;i<=t;i++)if(!(e%i))return!1;return!0}function t(e){return 4294967296*(e-(0|e))|0}for(var i=2,n=0;n<64;)e(i)&&(n<8&&(s[n]=t(r.pow(i,.5))),a[n]=t(r.pow(i,1/3)),n++),i++}();var f=[],h=c.SHA256=o.extend({_doReset:function(){this._hash=new n.init(s.slice(0))},_doProcessBlock:function(e,r){for(var t=this._hash.words,i=t[0],n=t[1],o=t[2],c=t[3],s=t[4],h=t[5],d=t[6],u=t[7],p=0;p<64;p++){if(p<16)f[p]=0|e[r+p];else{var l=f[p-15],v=(l<<25|l>>>7)^(l<<14|l>>>18)^l>>>3,y=f[p-2],_=(y<<15|y>>>17)^(y<<13|y>>>19)^y>>>10;f[p]=v+f[p-7]+_+f[p-16]}var g=i&n^i&o^n&o,b=(i<<30|i>>>2)^(i<<19|i>>>13)^(i<<10|i>>>22),m=u+((s<<26|s>>>6)^(s<<21|s>>>11)^(s<<7|s>>>25))+(s&h^~s&d)+a[p]+f[p];u=d,d=h,h=s,s=c+m|0,c=o,o=n,n=i,i=m+(b+g)|0}t[0]=t[0]+i|0,t[1]=t[1]+n|0,t[2]=t[2]+o|0,t[3]=t[3]+c|0,t[4]=t[4]+s|0,t[5]=t[5]+h|0,t[6]=t[6]+d|0,t[7]=t[7]+u|0},_doFinalize:function(){var e=this._data,t=e.words,i=8*this._nDataBytes,n=8*e.sigBytes;return t[n>>>5]|=128<<24-n%32,t[14+(n+64>>>9<<4)]=r.floor(i/4294967296),t[15+(n+64>>>9<<4)]=i,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e}});t.SHA256=o._createHelper(h),t.HmacSHA256=o._createHmacHelper(h)}(Math),e.SHA256},"object"===i(t)?r.exports=t=o(e("./core")):"function"==typeof define&&define.amd?define(["./core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089}[e],e)})),r(1758590377098,(function(e,r,t){var n,o;n=this,o=function(e){var r,t,i,n,o;return t=(r=e).lib.WordArray,i=r.algo,n=i.SHA256,o=i.SHA224=n.extend({_doReset:function(){this._hash=new t.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var e=n._doFinalize.call(this);return e.sigBytes-=4,e}}),r.SHA224=n._createHelper(o),r.HmacSHA224=n._createHmacHelper(o),e.SHA224},"object"===i(t)?r.exports=t=o(e("./core"),e("./sha256")):"function"==typeof define&&define.amd?define(["./core","./sha256"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089,"./sha256":1758590377097}[e],e)})),r(1758590377099,(function(e,r,t){var n,o;n=this,o=function(e){return function(){var r=e,t=r.lib.Hasher,i=r.x64,n=i.Word,o=i.WordArray,c=r.algo;function s(){return n.create.apply(n,arguments)}var a=[s(1116352408,3609767458),s(1899447441,602891725),s(3049323471,3964484399),s(3921009573,2173295548),s(961987163,4081628472),s(1508970993,3053834265),s(2453635748,2937671579),s(2870763221,3664609560),s(3624381080,2734883394),s(310598401,1164996542),s(607225278,1323610764),s(1426881987,3590304994),s(1925078388,4068182383),s(2162078206,991336113),s(2614888103,633803317),s(3248222580,3479774868),s(3835390401,2666613458),s(4022224774,944711139),s(264347078,2341262773),s(604807628,2007800933),s(770255983,1495990901),s(1249150122,1856431235),s(1555081692,3175218132),s(1996064986,2198950837),s(2554220882,3999719339),s(2821834349,766784016),s(2952996808,2566594879),s(3210313671,3203337956),s(3336571891,1034457026),s(3584528711,2466948901),s(113926993,3758326383),s(338241895,168717936),s(666307205,1188179964),s(773529912,1546045734),s(1294757372,1522805485),s(1396182291,2643833823),s(1695183700,2343527390),s(1986661051,1014477480),s(2177026350,1206759142),s(2456956037,344077627),s(2730485921,1290863460),s(2820302411,3158454273),s(3259730800,3505952657),s(3345764771,106217008),s(3516065817,3606008344),s(3600352804,1432725776),s(4094571909,1467031594),s(275423344,851169720),s(430227734,3100823752),s(506948616,1363258195),s(659060556,3750685593),s(883997877,3785050280),s(958139571,3318307427),s(1322822218,3812723403),s(1537002063,2003034995),s(1747873779,3602036899),s(1955562222,1575990012),s(2024104815,1125592928),s(2227730452,2716904306),s(2361852424,442776044),s(2428436474,593698344),s(2756734187,3733110249),s(3204031479,2999351573),s(3329325298,3815920427),s(3391569614,3928383900),s(3515267271,566280711),s(3940187606,3454069534),s(4118630271,4000239992),s(116418474,1914138554),s(174292421,2731055270),s(289380356,3203993006),s(460393269,320620315),s(685471733,587496836),s(852142971,1086792851),s(1017036298,365543100),s(1126000580,2618297676),s(1288033470,3409855158),s(1501505948,4234509866),s(1607167915,987167468),s(1816402316,1246189591)],f=[];!function(){for(var e=0;e<80;e++)f[e]=s()}();var h=c.SHA512=t.extend({_doReset:function(){this._hash=new o.init([new n.init(1779033703,4089235720),new n.init(3144134277,2227873595),new n.init(1013904242,4271175723),new n.init(2773480762,1595750129),new n.init(1359893119,2917565137),new n.init(2600822924,725511199),new n.init(528734635,4215389547),new n.init(1541459225,327033209)])},_doProcessBlock:function(e,r){for(var t=this._hash.words,i=t[0],n=t[1],o=t[2],c=t[3],s=t[4],h=t[5],d=t[6],u=t[7],p=i.high,l=i.low,v=n.high,y=n.low,_=o.high,g=o.low,b=c.high,m=c.low,B=s.high,k=s.low,x=h.high,w=h.low,S=d.high,C=d.low,A=u.high,H=u.low,z=p,R=l,D=v,E=y,j=_,M=g,J=b,P=m,F=B,O=k,W=x,I=w,U=S,K=C,X=A,L=H,T=0;T<80;T++){var N,q,Z=f[T];if(T<16)q=Z.high=0|e[r+2*T],N=Z.low=0|e[r+2*T+1];else{var G=f[T-15],V=G.high,Q=G.low,Y=(V>>>1|Q<<31)^(V>>>8|Q<<24)^V>>>7,$=(Q>>>1|V<<31)^(Q>>>8|V<<24)^(Q>>>7|V<<25),ee=f[T-2],re=ee.high,te=ee.low,ie=(re>>>19|te<<13)^(re<<3|te>>>29)^re>>>6,ne=(te>>>19|re<<13)^(te<<3|re>>>29)^(te>>>6|re<<26),oe=f[T-7],ce=oe.high,se=oe.low,ae=f[T-16],fe=ae.high,he=ae.low;q=(q=(q=Y+ce+((N=$+se)>>>0<$>>>0?1:0))+ie+((N+=ne)>>>0<ne>>>0?1:0))+fe+((N+=he)>>>0<he>>>0?1:0),Z.high=q,Z.low=N}var de,ue=F&W^~F&U,pe=O&I^~O&K,le=z&D^z&j^D&j,ve=R&E^R&M^E&M,ye=(z>>>28|R<<4)^(z<<30|R>>>2)^(z<<25|R>>>7),_e=(R>>>28|z<<4)^(R<<30|z>>>2)^(R<<25|z>>>7),ge=(F>>>14|O<<18)^(F>>>18|O<<14)^(F<<23|O>>>9),be=(O>>>14|F<<18)^(O>>>18|F<<14)^(O<<23|F>>>9),me=a[T],Be=me.high,ke=me.low,xe=X+ge+((de=L+be)>>>0<L>>>0?1:0),we=_e+ve;X=U,L=K,U=W,K=I,W=F,I=O,F=J+(xe=(xe=(xe=xe+ue+((de+=pe)>>>0<pe>>>0?1:0))+Be+((de+=ke)>>>0<ke>>>0?1:0))+q+((de+=N)>>>0<N>>>0?1:0))+((O=P+de|0)>>>0<P>>>0?1:0)|0,J=j,P=M,j=D,M=E,D=z,E=R,z=xe+(ye+le+(we>>>0<_e>>>0?1:0))+((R=de+we|0)>>>0<de>>>0?1:0)|0}l=i.low=l+R,i.high=p+z+(l>>>0<R>>>0?1:0),y=n.low=y+E,n.high=v+D+(y>>>0<E>>>0?1:0),g=o.low=g+M,o.high=_+j+(g>>>0<M>>>0?1:0),m=c.low=m+P,c.high=b+J+(m>>>0<P>>>0?1:0),k=s.low=k+O,s.high=B+F+(k>>>0<O>>>0?1:0),w=h.low=w+I,h.high=x+W+(w>>>0<I>>>0?1:0),C=d.low=C+K,d.high=S+U+(C>>>0<K>>>0?1:0),H=u.low=H+L,u.high=A+X+(H>>>0<L>>>0?1:0)},_doFinalize:function(){var e=this._data,r=e.words,t=8*this._nDataBytes,i=8*e.sigBytes;return r[i>>>5]|=128<<24-i%32,r[30+(i+128>>>10<<5)]=Math.floor(t/4294967296),r[31+(i+128>>>10<<5)]=t,e.sigBytes=4*r.length,this._process(),this._hash.toX32()},clone:function(){var e=t.clone.call(this);return e._hash=this._hash.clone(),e},blockSize:32});r.SHA512=t._createHelper(h),r.HmacSHA512=t._createHmacHelper(h)}(),e.SHA512},"object"===i(t)?r.exports=t=o(e("./core"),e("./x64-core")):"function"==typeof define&&define.amd?define(["./core","./x64-core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089,"./x64-core":1758590377090}[e],e)})),r(1758590377100,(function(e,r,t){var n,o;n=this,o=function(e){var r,t,i,n,o,c,s;return t=(r=e).x64,i=t.Word,n=t.WordArray,o=r.algo,c=o.SHA512,s=o.SHA384=c.extend({_doReset:function(){this._hash=new n.init([new i.init(3418070365,3238371032),new i.init(1654270250,914150663),new i.init(2438529370,812702999),new i.init(355462360,4144912697),new i.init(1731405415,4290775857),new i.init(2394180231,1750603025),new i.init(3675008525,1694076839),new i.init(1203062813,3204075428)])},_doFinalize:function(){var e=c._doFinalize.call(this);return e.sigBytes-=16,e}}),r.SHA384=c._createHelper(s),r.HmacSHA384=c._createHmacHelper(s),e.SHA384},"object"===i(t)?r.exports=t=o(e("./core"),e("./x64-core"),e("./sha512")):"function"==typeof define&&define.amd?define(["./core","./x64-core","./sha512"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089,"./x64-core":1758590377090,"./sha512":1758590377099}[e],e)})),r(1758590377101,(function(e,r,t){var n,o;n=this,o=function(e){return function(r){var t=e,i=t.lib,n=i.WordArray,o=i.Hasher,c=t.x64.Word,s=t.algo,a=[],f=[],h=[];!function(){for(var e=1,r=0,t=0;t<24;t++){a[e+5*r]=(t+1)*(t+2)/2%64;var i=(2*e+3*r)%5;e=r%5,r=i}for(e=0;e<5;e++)for(r=0;r<5;r++)f[e+5*r]=r+(2*e+3*r)%5*5;for(var n=1,o=0;o<24;o++){for(var s=0,d=0,u=0;u<7;u++){if(1&n){var p=(1<<u)-1;p<32?d^=1<<p:s^=1<<p-32}128&n?n=n<<1^113:n<<=1}h[o]=c.create(s,d)}}();var d=[];!function(){for(var e=0;e<25;e++)d[e]=c.create()}();var u=s.SHA3=o.extend({cfg:o.cfg.extend({outputLength:512}),_doReset:function(){for(var e=this._state=[],r=0;r<25;r++)e[r]=new c.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(e,r){for(var t=this._state,i=this.blockSize/2,n=0;n<i;n++){var o=e[r+2*n],c=e[r+2*n+1];o=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),c=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8),(H=t[n]).high^=c,H.low^=o}for(var s=0;s<24;s++){for(var u=0;u<5;u++){for(var p=0,l=0,v=0;v<5;v++)p^=(H=t[u+5*v]).high,l^=H.low;var y=d[u];y.high=p,y.low=l}for(u=0;u<5;u++){var _=d[(u+4)%5],g=d[(u+1)%5],b=g.high,m=g.low;for(p=_.high^(b<<1|m>>>31),l=_.low^(m<<1|b>>>31),v=0;v<5;v++)(H=t[u+5*v]).high^=p,H.low^=l}for(var B=1;B<25;B++){var k=(H=t[B]).high,x=H.low,w=a[B];w<32?(p=k<<w|x>>>32-w,l=x<<w|k>>>32-w):(p=x<<w-32|k>>>64-w,l=k<<w-32|x>>>64-w);var S=d[f[B]];S.high=p,S.low=l}var C=d[0],A=t[0];for(C.high=A.high,C.low=A.low,u=0;u<5;u++)for(v=0;v<5;v++){var H=t[B=u+5*v],z=d[B],R=d[(u+1)%5+5*v],D=d[(u+2)%5+5*v];H.high=z.high^~R.high&D.high,H.low=z.low^~R.low&D.low}H=t[0];var E=h[s];H.high^=E.high,H.low^=E.low}},_doFinalize:function(){var e=this._data,t=e.words,i=(this._nDataBytes,8*e.sigBytes),o=32*this.blockSize;t[i>>>5]|=1<<24-i%32,t[(r.ceil((i+1)/o)*o>>>5)-1]|=128,e.sigBytes=4*t.length,this._process();for(var c=this._state,s=this.cfg.outputLength/8,a=s/8,f=[],h=0;h<a;h++){var d=c[h],u=d.high,p=d.low;u=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8),p=16711935&(p<<8|p>>>24)|4278255360&(p<<24|p>>>8),f.push(p),f.push(u)}return new n.init(f,s)},clone:function(){for(var e=o.clone.call(this),r=e._state=this._state.slice(0),t=0;t<25;t++)r[t]=r[t].clone();return e}});t.SHA3=o._createHelper(u),t.HmacSHA3=o._createHmacHelper(u)}(Math),e.SHA3},"object"===i(t)?r.exports=t=o(e("./core"),e("./x64-core")):"function"==typeof define&&define.amd?define(["./core","./x64-core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089,"./x64-core":1758590377090}[e],e)})),r(1758590377102,(function(e,r,t){var n,o;n=this,o=function(e){
/** @preserve
      (c) 2012 by Cédric Mesnil. All rights reserved.
      	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
          - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      */
return function(r){var t=e,i=t.lib,n=i.WordArray,o=i.Hasher,c=t.algo,s=n.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),a=n.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),f=n.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),h=n.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),d=n.create([0,1518500249,1859775393,2400959708,2840853838]),u=n.create([1352829926,1548603684,1836072691,2053994217,0]),p=c.RIPEMD160=o.extend({_doReset:function(){this._hash=n.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,r){for(var t=0;t<16;t++){var i=r+t,n=e[i];e[i]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8)}var o,c,p,m,B,k,x,w,S,C,A,H=this._hash.words,z=d.words,R=u.words,D=s.words,E=a.words,j=f.words,M=h.words;for(k=o=H[0],x=c=H[1],w=p=H[2],S=m=H[3],C=B=H[4],t=0;t<80;t+=1)A=o+e[r+D[t]]|0,A+=t<16?l(c,p,m)+z[0]:t<32?v(c,p,m)+z[1]:t<48?y(c,p,m)+z[2]:t<64?_(c,p,m)+z[3]:g(c,p,m)+z[4],A=(A=b(A|=0,j[t]))+B|0,o=B,B=m,m=b(p,10),p=c,c=A,A=k+e[r+E[t]]|0,A+=t<16?g(x,w,S)+R[0]:t<32?_(x,w,S)+R[1]:t<48?y(x,w,S)+R[2]:t<64?v(x,w,S)+R[3]:l(x,w,S)+R[4],A=(A=b(A|=0,M[t]))+C|0,k=C,C=S,S=b(w,10),w=x,x=A;A=H[1]+p+S|0,H[1]=H[2]+m+C|0,H[2]=H[3]+B+k|0,H[3]=H[4]+o+x|0,H[4]=H[0]+c+w|0,H[0]=A},_doFinalize:function(){var e=this._data,r=e.words,t=8*this._nDataBytes,i=8*e.sigBytes;r[i>>>5]|=128<<24-i%32,r[14+(i+64>>>9<<4)]=16711935&(t<<8|t>>>24)|4278255360&(t<<24|t>>>8),e.sigBytes=4*(r.length+1),this._process();for(var n=this._hash,o=n.words,c=0;c<5;c++){var s=o[c];o[c]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8)}return n},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e}});function l(e,r,t){return e^r^t}function v(e,r,t){return e&r|~e&t}function y(e,r,t){return(e|~r)^t}function _(e,r,t){return e&t|r&~t}function g(e,r,t){return e^(r|~t)}function b(e,r){return e<<r|e>>>32-r}t.RIPEMD160=o._createHelper(p),t.HmacRIPEMD160=o._createHmacHelper(p)}(Math),e.RIPEMD160},"object"===i(t)?r.exports=t=o(e("./core")):"function"==typeof define&&define.amd?define(["./core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089}[e],e)})),r(1758590377103,(function(e,r,t){var n,o;n=this,o=function(e){var r,t,i;t=(r=e).lib.Base,i=r.enc.Utf8,r.algo.HMAC=t.extend({init:function(e,r){e=this._hasher=new e.init,"string"==typeof r&&(r=i.parse(r));var t=e.blockSize,n=4*t;r.sigBytes>n&&(r=e.finalize(r)),r.clamp();for(var o=this._oKey=r.clone(),c=this._iKey=r.clone(),s=o.words,a=c.words,f=0;f<t;f++)s[f]^=1549556828,a[f]^=909522486;o.sigBytes=c.sigBytes=n,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var r=this._hasher,t=r.finalize(e);return r.reset(),r.finalize(this._oKey.clone().concat(t))}})},"object"===i(t)?r.exports=t=o(e("./core")):"function"==typeof define&&define.amd?define(["./core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089}[e],e)})),r(1758590377104,(function(e,r,t){var n,o;n=this,o=function(e){var r,t,i,n,o,c,s,a;return t=(r=e).lib,i=t.Base,n=t.WordArray,o=r.algo,c=o.SHA256,s=o.HMAC,a=o.PBKDF2=i.extend({cfg:i.extend({keySize:4,hasher:c,iterations:25e4}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,r){for(var t=this.cfg,i=s.create(t.hasher,e),o=n.create(),c=n.create([1]),a=o.words,f=c.words,h=t.keySize,d=t.iterations;a.length<h;){var u=i.update(r).finalize(c);i.reset();for(var p=u.words,l=p.length,v=u,y=1;y<d;y++){v=i.finalize(v),i.reset();for(var _=v.words,g=0;g<l;g++)p[g]^=_[g]}o.concat(u),f[0]++}return o.sigBytes=4*h,o}}),r.PBKDF2=function(e,r,t){return a.create(t).compute(e,r)},e.PBKDF2},"object"===i(t)?r.exports=t=o(e("./core"),e("./sha256"),e("./hmac")):"function"==typeof define&&define.amd?define(["./core","./sha256","./hmac"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089,"./sha256":1758590377097,"./hmac":1758590377103}[e],e)})),r(1758590377105,(function(e,r,t){var n,o;n=this,o=function(e){var r,t,i,n,o,c,s;return t=(r=e).lib,i=t.Base,n=t.WordArray,o=r.algo,c=o.MD5,s=o.EvpKDF=i.extend({cfg:i.extend({keySize:4,hasher:c,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,r){for(var t,i=this.cfg,o=i.hasher.create(),c=n.create(),s=c.words,a=i.keySize,f=i.iterations;s.length<a;){t&&o.update(t),t=o.update(e).finalize(r),o.reset();for(var h=1;h<f;h++)t=o.finalize(t),o.reset();c.concat(t)}return c.sigBytes=4*a,c}}),r.EvpKDF=function(e,r,t){return s.create(t).compute(e,r)},e.EvpKDF},"object"===i(t)?r.exports=t=o(e("./core"),e("./sha1"),e("./hmac")):"function"==typeof define&&define.amd?define(["./core","./sha1","./hmac"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089,"./sha1":1758590377096,"./hmac":1758590377103}[e],e)})),r(1758590377106,(function(e,r,t){var n,o;n=this,o=function(e){var r,t,i,n,o,c,s,a,f,h,d,u,p,l,v,y,_,g;e.lib.Cipher||(t=(r=e).lib,i=t.Base,n=t.WordArray,o=t.BufferedBlockAlgorithm,(c=r.enc).Utf8,s=c.Base64,a=r.algo.EvpKDF,f=t.Cipher=o.extend({cfg:i.extend(),createEncryptor:function(e,r){return this.create(this._ENC_XFORM_MODE,e,r)},createDecryptor:function(e,r){return this.create(this._DEC_XFORM_MODE,e,r)},init:function(e,r,t){this.cfg=this.cfg.extend(t),this._xformMode=e,this._key=r,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function e(e){return"string"==typeof e?g:y}return function(r){return{encrypt:function(t,i,n){return e(i).encrypt(r,t,i,n)},decrypt:function(t,i,n){return e(i).decrypt(r,t,i,n)}}}}()}),t.StreamCipher=f.extend({_doFinalize:function(){return this._process(!0)},blockSize:1}),h=r.mode={},d=t.BlockCipherMode=i.extend({createEncryptor:function(e,r){return this.Encryptor.create(e,r)},createDecryptor:function(e,r){return this.Decryptor.create(e,r)},init:function(e,r){this._cipher=e,this._iv=r}}),u=h.CBC=function(){var e=d.extend();function r(e,r,t){var i,n=this._iv;n?(i=n,this._iv=void 0):i=this._prevBlock;for(var o=0;o<t;o++)e[r+o]^=i[o]}return e.Encryptor=e.extend({processBlock:function(e,t){var i=this._cipher,n=i.blockSize;r.call(this,e,t,n),i.encryptBlock(e,t),this._prevBlock=e.slice(t,t+n)}}),e.Decryptor=e.extend({processBlock:function(e,t){var i=this._cipher,n=i.blockSize,o=e.slice(t,t+n);i.decryptBlock(e,t),r.call(this,e,t,n),this._prevBlock=o}}),e}(),p=(r.pad={}).Pkcs7={pad:function(e,r){for(var t=4*r,i=t-e.sigBytes%t,o=i<<24|i<<16|i<<8|i,c=[],s=0;s<i;s+=4)c.push(o);var a=n.create(c,i);e.concat(a)},unpad:function(e){var r=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=r}},t.BlockCipher=f.extend({cfg:f.cfg.extend({mode:u,padding:p}),reset:function(){var e;f.reset.call(this);var r=this.cfg,t=r.iv,i=r.mode;this._xformMode==this._ENC_XFORM_MODE?e=i.createEncryptor:(e=i.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==e?this._mode.init(this,t&&t.words):(this._mode=e.call(i,this,t&&t.words),this._mode.__creator=e)},_doProcessBlock:function(e,r){this._mode.processBlock(e,r)},_doFinalize:function(){var e,r=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(r.pad(this._data,this.blockSize),e=this._process(!0)):(e=this._process(!0),r.unpad(e)),e},blockSize:4}),l=t.CipherParams=i.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}}),v=(r.format={}).OpenSSL={stringify:function(e){var r=e.ciphertext,t=e.salt;return(t?n.create([1398893684,1701076831]).concat(t).concat(r):r).toString(s)},parse:function(e){var r,t=s.parse(e),i=t.words;return 1398893684==i[0]&&1701076831==i[1]&&(r=n.create(i.slice(2,4)),i.splice(0,4),t.sigBytes-=16),l.create({ciphertext:t,salt:r})}},y=t.SerializableCipher=i.extend({cfg:i.extend({format:v}),encrypt:function(e,r,t,i){i=this.cfg.extend(i);var n=e.createEncryptor(t,i),o=n.finalize(r),c=n.cfg;return l.create({ciphertext:o,key:t,iv:c.iv,algorithm:e,mode:c.mode,padding:c.padding,blockSize:e.blockSize,formatter:i.format})},decrypt:function(e,r,t,i){return i=this.cfg.extend(i),r=this._parse(r,i.format),e.createDecryptor(t,i).finalize(r.ciphertext)},_parse:function(e,r){return"string"==typeof e?r.parse(e,this):e}}),_=(r.kdf={}).OpenSSL={execute:function(e,r,t,i,o){if(i||(i=n.random(8)),o)c=a.create({keySize:r+t,hasher:o}).compute(e,i);else var c=a.create({keySize:r+t}).compute(e,i);var s=n.create(c.words.slice(r),4*t);return c.sigBytes=4*r,l.create({key:c,iv:s,salt:i})}},g=t.PasswordBasedCipher=y.extend({cfg:y.cfg.extend({kdf:_}),encrypt:function(e,r,t,i){var n=(i=this.cfg.extend(i)).kdf.execute(t,e.keySize,e.ivSize,i.salt,i.hasher);i.iv=n.iv;var o=y.encrypt.call(this,e,r,n.key,i);return o.mixIn(n),o},decrypt:function(e,r,t,i){i=this.cfg.extend(i),r=this._parse(r,i.format);var n=i.kdf.execute(t,e.keySize,e.ivSize,r.salt,i.hasher);return i.iv=n.iv,y.decrypt.call(this,e,r,n.key,i)}}))},"object"===i(t)?r.exports=t=o(e("./core"),e("./evpkdf")):"function"==typeof define&&define.amd?define(["./core","./evpkdf"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089,"./evpkdf":1758590377105}[e],e)})),r(1758590377107,(function(e,r,t){var n,o;n=this,o=function(e){return e.mode.CFB=function(){var r=e.lib.BlockCipherMode.extend();function t(e,r,t,i){var n,o=this._iv;o?(n=o.slice(0),this._iv=void 0):n=this._prevBlock,i.encryptBlock(n,0);for(var c=0;c<t;c++)e[r+c]^=n[c]}return r.Encryptor=r.extend({processBlock:function(e,r){var i=this._cipher,n=i.blockSize;t.call(this,e,r,n,i),this._prevBlock=e.slice(r,r+n)}}),r.Decryptor=r.extend({processBlock:function(e,r){var i=this._cipher,n=i.blockSize,o=e.slice(r,r+n);t.call(this,e,r,n,i),this._prevBlock=o}}),r}(),e.mode.CFB},"object"===i(t)?r.exports=t=o(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089,"./cipher-core":1758590377106}[e],e)})),r(1758590377108,(function(e,r,t){var n,o;n=this,o=function(e){var r,t;return e.mode.CTR=(r=e.lib.BlockCipherMode.extend(),t=r.Encryptor=r.extend({processBlock:function(e,r){var t=this._cipher,i=t.blockSize,n=this._iv,o=this._counter;n&&(o=this._counter=n.slice(0),this._iv=void 0);var c=o.slice(0);t.encryptBlock(c,0),o[i-1]=o[i-1]+1|0;for(var s=0;s<i;s++)e[r+s]^=c[s]}}),r.Decryptor=t,r),e.mode.CTR},"object"===i(t)?r.exports=t=o(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089,"./cipher-core":1758590377106}[e],e)})),r(1758590377109,(function(e,r,t){var n,o;n=this,o=function(e){
/** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
return e.mode.CTRGladman=function(){var r=e.lib.BlockCipherMode.extend();function t(e){if(255==(e>>24&255)){var r=e>>16&255,t=e>>8&255,i=255&e;255===r?(r=0,255===t?(t=0,255===i?i=0:++i):++t):++r,e=0,e+=r<<16,e+=t<<8,e+=i}else e+=1<<24;return e}var i=r.Encryptor=r.extend({processBlock:function(e,r){var i=this._cipher,n=i.blockSize,o=this._iv,c=this._counter;o&&(c=this._counter=o.slice(0),this._iv=void 0),function(e){0===(e[0]=t(e[0]))&&(e[1]=t(e[1]))}(c);var s=c.slice(0);i.encryptBlock(s,0);for(var a=0;a<n;a++)e[r+a]^=s[a]}});return r.Decryptor=i,r}(),e.mode.CTRGladman},"object"===i(t)?r.exports=t=o(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089,"./cipher-core":1758590377106}[e],e)})),r(1758590377110,(function(e,r,t){var n,o;n=this,o=function(e){var r,t;return e.mode.OFB=(r=e.lib.BlockCipherMode.extend(),t=r.Encryptor=r.extend({processBlock:function(e,r){var t=this._cipher,i=t.blockSize,n=this._iv,o=this._keystream;n&&(o=this._keystream=n.slice(0),this._iv=void 0),t.encryptBlock(o,0);for(var c=0;c<i;c++)e[r+c]^=o[c]}}),r.Decryptor=t,r),e.mode.OFB},"object"===i(t)?r.exports=t=o(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089,"./cipher-core":1758590377106}[e],e)})),r(1758590377111,(function(e,r,t){var n,o;n=this,o=function(e){var r;return e.mode.ECB=((r=e.lib.BlockCipherMode.extend()).Encryptor=r.extend({processBlock:function(e,r){this._cipher.encryptBlock(e,r)}}),r.Decryptor=r.extend({processBlock:function(e,r){this._cipher.decryptBlock(e,r)}}),r),e.mode.ECB},"object"===i(t)?r.exports=t=o(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089,"./cipher-core":1758590377106}[e],e)})),r(1758590377112,(function(e,r,t){var n,o;n=this,o=function(e){return e.pad.AnsiX923={pad:function(e,r){var t=e.sigBytes,i=4*r,n=i-t%i,o=t+n-1;e.clamp(),e.words[o>>>2]|=n<<24-o%4*8,e.sigBytes+=n},unpad:function(e){var r=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=r}},e.pad.Ansix923},"object"===i(t)?r.exports=t=o(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089,"./cipher-core":1758590377106}[e],e)})),r(1758590377113,(function(e,r,t){var n,o;n=this,o=function(e){return e.pad.Iso10126={pad:function(r,t){var i=4*t,n=i-r.sigBytes%i;r.concat(e.lib.WordArray.random(n-1)).concat(e.lib.WordArray.create([n<<24],1))},unpad:function(e){var r=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=r}},e.pad.Iso10126},"object"===i(t)?r.exports=t=o(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089,"./cipher-core":1758590377106}[e],e)})),r(1758590377114,(function(e,r,t){var n,o;n=this,o=function(e){return e.pad.Iso97971={pad:function(r,t){r.concat(e.lib.WordArray.create([2147483648],1)),e.pad.ZeroPadding.pad(r,t)},unpad:function(r){e.pad.ZeroPadding.unpad(r),r.sigBytes--}},e.pad.Iso97971},"object"===i(t)?r.exports=t=o(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089,"./cipher-core":1758590377106}[e],e)})),r(1758590377115,(function(e,r,t){var n,o;n=this,o=function(e){return e.pad.ZeroPadding={pad:function(e,r){var t=4*r;e.clamp(),e.sigBytes+=t-(e.sigBytes%t||t)},unpad:function(e){var r=e.words,t=e.sigBytes-1;for(t=e.sigBytes-1;t>=0;t--)if(r[t>>>2]>>>24-t%4*8&255){e.sigBytes=t+1;break}}},e.pad.ZeroPadding},"object"===i(t)?r.exports=t=o(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089,"./cipher-core":1758590377106}[e],e)})),r(1758590377116,(function(e,r,t){var n,o;n=this,o=function(e){return e.pad.NoPadding={pad:function(){},unpad:function(){}},e.pad.NoPadding},"object"===i(t)?r.exports=t=o(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089,"./cipher-core":1758590377106}[e],e)})),r(1758590377117,(function(e,r,t){var n,o;n=this,o=function(e){var r,t,i;return t=(r=e).lib.CipherParams,i=r.enc.Hex,r.format.Hex={stringify:function(e){return e.ciphertext.toString(i)},parse:function(e){var r=i.parse(e);return t.create({ciphertext:r})}},e.format.Hex},"object"===i(t)?r.exports=t=o(e("./core"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089,"./cipher-core":1758590377106}[e],e)})),r(1758590377118,(function(e,r,t){var n,o;n=this,o=function(e){return function(){var r=e,t=r.lib.BlockCipher,i=r.algo,n=[],o=[],c=[],s=[],a=[],f=[],h=[],d=[],u=[],p=[];!function(){for(var e=[],r=0;r<256;r++)e[r]=r<128?r<<1:r<<1^283;var t=0,i=0;for(r=0;r<256;r++){var l=i^i<<1^i<<2^i<<3^i<<4;l=l>>>8^255&l^99,n[t]=l,o[l]=t;var v=e[t],y=e[v],_=e[y],g=257*e[l]^16843008*l;c[t]=g<<24|g>>>8,s[t]=g<<16|g>>>16,a[t]=g<<8|g>>>24,f[t]=g,g=16843009*_^65537*y^257*v^16843008*t,h[l]=g<<24|g>>>8,d[l]=g<<16|g>>>16,u[l]=g<<8|g>>>24,p[l]=g,t?(t=v^e[e[e[_^v]]],i^=e[e[i]]):t=i=1}}();var l=[0,1,2,4,8,16,32,64,128,27,54],v=i.AES=t.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var e=this._keyPriorReset=this._key,r=e.words,t=e.sigBytes/4,i=4*((this._nRounds=t+6)+1),o=this._keySchedule=[],c=0;c<i;c++)c<t?o[c]=r[c]:(f=o[c-1],c%t?t>6&&c%t==4&&(f=n[f>>>24]<<24|n[f>>>16&255]<<16|n[f>>>8&255]<<8|n[255&f]):(f=n[(f=f<<8|f>>>24)>>>24]<<24|n[f>>>16&255]<<16|n[f>>>8&255]<<8|n[255&f],f^=l[c/t|0]<<24),o[c]=o[c-t]^f);for(var s=this._invKeySchedule=[],a=0;a<i;a++){if(c=i-a,a%4)var f=o[c];else f=o[c-4];s[a]=a<4||c<=4?f:h[n[f>>>24]]^d[n[f>>>16&255]]^u[n[f>>>8&255]]^p[n[255&f]]}}},encryptBlock:function(e,r){this._doCryptBlock(e,r,this._keySchedule,c,s,a,f,n)},decryptBlock:function(e,r){var t=e[r+1];e[r+1]=e[r+3],e[r+3]=t,this._doCryptBlock(e,r,this._invKeySchedule,h,d,u,p,o),t=e[r+1],e[r+1]=e[r+3],e[r+3]=t},_doCryptBlock:function(e,r,t,i,n,o,c,s){for(var a=this._nRounds,f=e[r]^t[0],h=e[r+1]^t[1],d=e[r+2]^t[2],u=e[r+3]^t[3],p=4,l=1;l<a;l++){var v=i[f>>>24]^n[h>>>16&255]^o[d>>>8&255]^c[255&u]^t[p++],y=i[h>>>24]^n[d>>>16&255]^o[u>>>8&255]^c[255&f]^t[p++],_=i[d>>>24]^n[u>>>16&255]^o[f>>>8&255]^c[255&h]^t[p++],g=i[u>>>24]^n[f>>>16&255]^o[h>>>8&255]^c[255&d]^t[p++];f=v,h=y,d=_,u=g}v=(s[f>>>24]<<24|s[h>>>16&255]<<16|s[d>>>8&255]<<8|s[255&u])^t[p++],y=(s[h>>>24]<<24|s[d>>>16&255]<<16|s[u>>>8&255]<<8|s[255&f])^t[p++],_=(s[d>>>24]<<24|s[u>>>16&255]<<16|s[f>>>8&255]<<8|s[255&h])^t[p++],g=(s[u>>>24]<<24|s[f>>>16&255]<<16|s[h>>>8&255]<<8|s[255&d])^t[p++],e[r]=v,e[r+1]=y,e[r+2]=_,e[r+3]=g},keySize:8});r.AES=t._createHelper(v)}(),e.AES},"object"===i(t)?r.exports=t=o(e("./core"),e("./enc-base64"),e("./md5"),e("./evpkdf"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089,"./enc-base64":1758590377093,"./md5":1758590377095,"./evpkdf":1758590377105,"./cipher-core":1758590377106}[e],e)})),r(1758590377119,(function(e,r,t){var n,o;n=this,o=function(e){return function(){var r=e,t=r.lib,i=t.WordArray,n=t.BlockCipher,o=r.algo,c=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],s=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],a=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],f=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],h=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],d=o.DES=n.extend({_doReset:function(){for(var e=this._key.words,r=[],t=0;t<56;t++){var i=c[t]-1;r[t]=e[i>>>5]>>>31-i%32&1}for(var n=this._subKeys=[],o=0;o<16;o++){var f=n[o]=[],h=a[o];for(t=0;t<24;t++)f[t/6|0]|=r[(s[t]-1+h)%28]<<31-t%6,f[4+(t/6|0)]|=r[28+(s[t+24]-1+h)%28]<<31-t%6;for(f[0]=f[0]<<1|f[0]>>>31,t=1;t<7;t++)f[t]=f[t]>>>4*(t-1)+3;f[7]=f[7]<<5|f[7]>>>27}var d=this._invSubKeys=[];for(t=0;t<16;t++)d[t]=n[15-t]},encryptBlock:function(e,r){this._doCryptBlock(e,r,this._subKeys)},decryptBlock:function(e,r){this._doCryptBlock(e,r,this._invSubKeys)},_doCryptBlock:function(e,r,t){this._lBlock=e[r],this._rBlock=e[r+1],u.call(this,4,252645135),u.call(this,16,65535),p.call(this,2,858993459),p.call(this,8,16711935),u.call(this,1,1431655765);for(var i=0;i<16;i++){for(var n=t[i],o=this._lBlock,c=this._rBlock,s=0,a=0;a<8;a++)s|=f[a][((c^n[a])&h[a])>>>0];this._lBlock=c,this._rBlock=o^s}var d=this._lBlock;this._lBlock=this._rBlock,this._rBlock=d,u.call(this,1,1431655765),p.call(this,8,16711935),p.call(this,2,858993459),u.call(this,16,65535),u.call(this,4,252645135),e[r]=this._lBlock,e[r+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});function u(e,r){var t=(this._lBlock>>>e^this._rBlock)&r;this._rBlock^=t,this._lBlock^=t<<e}function p(e,r){var t=(this._rBlock>>>e^this._lBlock)&r;this._lBlock^=t,this._rBlock^=t<<e}r.DES=n._createHelper(d);var l=o.TripleDES=n.extend({_doReset:function(){var e=this._key.words;if(2!==e.length&&4!==e.length&&e.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");var r=e.slice(0,2),t=e.length<4?e.slice(0,2):e.slice(2,4),n=e.length<6?e.slice(0,2):e.slice(4,6);this._des1=d.createEncryptor(i.create(r)),this._des2=d.createEncryptor(i.create(t)),this._des3=d.createEncryptor(i.create(n))},encryptBlock:function(e,r){this._des1.encryptBlock(e,r),this._des2.decryptBlock(e,r),this._des3.encryptBlock(e,r)},decryptBlock:function(e,r){this._des3.decryptBlock(e,r),this._des2.encryptBlock(e,r),this._des1.decryptBlock(e,r)},keySize:6,ivSize:2,blockSize:2});r.TripleDES=n._createHelper(l)}(),e.TripleDES},"object"===i(t)?r.exports=t=o(e("./core"),e("./enc-base64"),e("./md5"),e("./evpkdf"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089,"./enc-base64":1758590377093,"./md5":1758590377095,"./evpkdf":1758590377105,"./cipher-core":1758590377106}[e],e)})),r(1758590377120,(function(e,r,t){var n,o;n=this,o=function(e){return function(){var r=e,t=r.lib.StreamCipher,i=r.algo,n=i.RC4=t.extend({_doReset:function(){for(var e=this._key,r=e.words,t=e.sigBytes,i=this._S=[],n=0;n<256;n++)i[n]=n;n=0;for(var o=0;n<256;n++){var c=n%t,s=r[c>>>2]>>>24-c%4*8&255;o=(o+i[n]+s)%256;var a=i[n];i[n]=i[o],i[o]=a}this._i=this._j=0},_doProcessBlock:function(e,r){e[r]^=o.call(this)},keySize:8,ivSize:0});function o(){for(var e=this._S,r=this._i,t=this._j,i=0,n=0;n<4;n++){t=(t+e[r=(r+1)%256])%256;var o=e[r];e[r]=e[t],e[t]=o,i|=e[(e[r]+e[t])%256]<<24-8*n}return this._i=r,this._j=t,i}r.RC4=t._createHelper(n);var c=i.RC4Drop=n.extend({cfg:n.cfg.extend({drop:192}),_doReset:function(){n._doReset.call(this);for(var e=this.cfg.drop;e>0;e--)o.call(this)}});r.RC4Drop=t._createHelper(c)}(),e.RC4},"object"===i(t)?r.exports=t=o(e("./core"),e("./enc-base64"),e("./md5"),e("./evpkdf"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089,"./enc-base64":1758590377093,"./md5":1758590377095,"./evpkdf":1758590377105,"./cipher-core":1758590377106}[e],e)})),r(1758590377121,(function(e,r,t){var n,o;n=this,o=function(e){return function(){var r=e,t=r.lib.StreamCipher,i=r.algo,n=[],o=[],c=[],s=i.Rabbit=t.extend({_doReset:function(){for(var e=this._key.words,r=this.cfg.iv,t=0;t<4;t++)e[t]=16711935&(e[t]<<8|e[t]>>>24)|4278255360&(e[t]<<24|e[t]>>>8);var i=this._X=[e[0],e[3]<<16|e[2]>>>16,e[1],e[0]<<16|e[3]>>>16,e[2],e[1]<<16|e[0]>>>16,e[3],e[2]<<16|e[1]>>>16],n=this._C=[e[2]<<16|e[2]>>>16,4294901760&e[0]|65535&e[1],e[3]<<16|e[3]>>>16,4294901760&e[1]|65535&e[2],e[0]<<16|e[0]>>>16,4294901760&e[2]|65535&e[3],e[1]<<16|e[1]>>>16,4294901760&e[3]|65535&e[0]];for(this._b=0,t=0;t<4;t++)a.call(this);for(t=0;t<8;t++)n[t]^=i[t+4&7];if(r){var o=r.words,c=o[0],s=o[1],f=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8),h=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),d=f>>>16|4294901760&h,u=h<<16|65535&f;for(n[0]^=f,n[1]^=d,n[2]^=h,n[3]^=u,n[4]^=f,n[5]^=d,n[6]^=h,n[7]^=u,t=0;t<4;t++)a.call(this)}},_doProcessBlock:function(e,r){var t=this._X;a.call(this),n[0]=t[0]^t[5]>>>16^t[3]<<16,n[1]=t[2]^t[7]>>>16^t[5]<<16,n[2]=t[4]^t[1]>>>16^t[7]<<16,n[3]=t[6]^t[3]>>>16^t[1]<<16;for(var i=0;i<4;i++)n[i]=16711935&(n[i]<<8|n[i]>>>24)|4278255360&(n[i]<<24|n[i]>>>8),e[r+i]^=n[i]},blockSize:4,ivSize:2});function a(){for(var e=this._X,r=this._C,t=0;t<8;t++)o[t]=r[t];for(r[0]=r[0]+1295307597+this._b|0,r[1]=r[1]+3545052371+(r[0]>>>0<o[0]>>>0?1:0)|0,r[2]=r[2]+886263092+(r[1]>>>0<o[1]>>>0?1:0)|0,r[3]=r[3]+1295307597+(r[2]>>>0<o[2]>>>0?1:0)|0,r[4]=r[4]+3545052371+(r[3]>>>0<o[3]>>>0?1:0)|0,r[5]=r[5]+886263092+(r[4]>>>0<o[4]>>>0?1:0)|0,r[6]=r[6]+1295307597+(r[5]>>>0<o[5]>>>0?1:0)|0,r[7]=r[7]+3545052371+(r[6]>>>0<o[6]>>>0?1:0)|0,this._b=r[7]>>>0<o[7]>>>0?1:0,t=0;t<8;t++){var i=e[t]+r[t],n=65535&i,s=i>>>16,a=((n*n>>>17)+n*s>>>15)+s*s,f=((4294901760&i)*i|0)+((65535&i)*i|0);c[t]=a^f}e[0]=c[0]+(c[7]<<16|c[7]>>>16)+(c[6]<<16|c[6]>>>16)|0,e[1]=c[1]+(c[0]<<8|c[0]>>>24)+c[7]|0,e[2]=c[2]+(c[1]<<16|c[1]>>>16)+(c[0]<<16|c[0]>>>16)|0,e[3]=c[3]+(c[2]<<8|c[2]>>>24)+c[1]|0,e[4]=c[4]+(c[3]<<16|c[3]>>>16)+(c[2]<<16|c[2]>>>16)|0,e[5]=c[5]+(c[4]<<8|c[4]>>>24)+c[3]|0,e[6]=c[6]+(c[5]<<16|c[5]>>>16)+(c[4]<<16|c[4]>>>16)|0,e[7]=c[7]+(c[6]<<8|c[6]>>>24)+c[5]|0}r.Rabbit=t._createHelper(s)}(),e.Rabbit},"object"===i(t)?r.exports=t=o(e("./core"),e("./enc-base64"),e("./md5"),e("./evpkdf"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089,"./enc-base64":1758590377093,"./md5":1758590377095,"./evpkdf":1758590377105,"./cipher-core":1758590377106}[e],e)})),r(1758590377122,(function(e,r,t){var n,o;n=this,o=function(e){return function(){var r=e,t=r.lib.StreamCipher,i=r.algo,n=[],o=[],c=[],s=i.RabbitLegacy=t.extend({_doReset:function(){var e=this._key.words,r=this.cfg.iv,t=this._X=[e[0],e[3]<<16|e[2]>>>16,e[1],e[0]<<16|e[3]>>>16,e[2],e[1]<<16|e[0]>>>16,e[3],e[2]<<16|e[1]>>>16],i=this._C=[e[2]<<16|e[2]>>>16,4294901760&e[0]|65535&e[1],e[3]<<16|e[3]>>>16,4294901760&e[1]|65535&e[2],e[0]<<16|e[0]>>>16,4294901760&e[2]|65535&e[3],e[1]<<16|e[1]>>>16,4294901760&e[3]|65535&e[0]];this._b=0;for(var n=0;n<4;n++)a.call(this);for(n=0;n<8;n++)i[n]^=t[n+4&7];if(r){var o=r.words,c=o[0],s=o[1],f=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8),h=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),d=f>>>16|4294901760&h,u=h<<16|65535&f;for(i[0]^=f,i[1]^=d,i[2]^=h,i[3]^=u,i[4]^=f,i[5]^=d,i[6]^=h,i[7]^=u,n=0;n<4;n++)a.call(this)}},_doProcessBlock:function(e,r){var t=this._X;a.call(this),n[0]=t[0]^t[5]>>>16^t[3]<<16,n[1]=t[2]^t[7]>>>16^t[5]<<16,n[2]=t[4]^t[1]>>>16^t[7]<<16,n[3]=t[6]^t[3]>>>16^t[1]<<16;for(var i=0;i<4;i++)n[i]=16711935&(n[i]<<8|n[i]>>>24)|4278255360&(n[i]<<24|n[i]>>>8),e[r+i]^=n[i]},blockSize:4,ivSize:2});function a(){for(var e=this._X,r=this._C,t=0;t<8;t++)o[t]=r[t];for(r[0]=r[0]+1295307597+this._b|0,r[1]=r[1]+3545052371+(r[0]>>>0<o[0]>>>0?1:0)|0,r[2]=r[2]+886263092+(r[1]>>>0<o[1]>>>0?1:0)|0,r[3]=r[3]+1295307597+(r[2]>>>0<o[2]>>>0?1:0)|0,r[4]=r[4]+3545052371+(r[3]>>>0<o[3]>>>0?1:0)|0,r[5]=r[5]+886263092+(r[4]>>>0<o[4]>>>0?1:0)|0,r[6]=r[6]+1295307597+(r[5]>>>0<o[5]>>>0?1:0)|0,r[7]=r[7]+3545052371+(r[6]>>>0<o[6]>>>0?1:0)|0,this._b=r[7]>>>0<o[7]>>>0?1:0,t=0;t<8;t++){var i=e[t]+r[t],n=65535&i,s=i>>>16,a=((n*n>>>17)+n*s>>>15)+s*s,f=((4294901760&i)*i|0)+((65535&i)*i|0);c[t]=a^f}e[0]=c[0]+(c[7]<<16|c[7]>>>16)+(c[6]<<16|c[6]>>>16)|0,e[1]=c[1]+(c[0]<<8|c[0]>>>24)+c[7]|0,e[2]=c[2]+(c[1]<<16|c[1]>>>16)+(c[0]<<16|c[0]>>>16)|0,e[3]=c[3]+(c[2]<<8|c[2]>>>24)+c[1]|0,e[4]=c[4]+(c[3]<<16|c[3]>>>16)+(c[2]<<16|c[2]>>>16)|0,e[5]=c[5]+(c[4]<<8|c[4]>>>24)+c[3]|0,e[6]=c[6]+(c[5]<<16|c[5]>>>16)+(c[4]<<16|c[4]>>>16)|0,e[7]=c[7]+(c[6]<<8|c[6]>>>24)+c[5]|0}r.RabbitLegacy=t._createHelper(s)}(),e.RabbitLegacy},"object"===i(t)?r.exports=t=o(e("./core"),e("./enc-base64"),e("./md5"),e("./evpkdf"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089,"./enc-base64":1758590377093,"./md5":1758590377095,"./evpkdf":1758590377105,"./cipher-core":1758590377106}[e],e)})),r(1758590377123,(function(e,r,t){var n,o;n=this,o=function(e){return function(){var r=e,t=r.lib.BlockCipher,i=r.algo,n=16,o=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],c=[[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946],[1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055],[3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504],[976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462]],s={pbox:[],sbox:[]};function a(e,r){var t=r>>24&255,i=r>>16&255,n=r>>8&255,o=255&r,c=e.sbox[0][t]+e.sbox[1][i];return c^=e.sbox[2][n],c+=e.sbox[3][o]}function f(e,r,t){for(var i,o=r,c=t,s=0;s<n;++s)i=o^=e.pbox[s],o=c=a(e,o)^c,c=i;return i=o,o=c,c=i,c^=e.pbox[n],{left:o^=e.pbox[17],right:c}}var h=i.Blowfish=t.extend({_doReset:function(){if(this._keyPriorReset!==this._key){var e=this._keyPriorReset=this._key,r=e.words,t=e.sigBytes/4;!function(e,r,t){for(var i=0;i<4;i++){e.sbox[i]=[];for(var n=0;n<256;n++)e.sbox[i][n]=c[i][n]}for(var s=0,a=0;a<18;a++)e.pbox[a]=o[a]^r[s],++s>=t&&(s=0);for(var h=0,d=0,u=0,p=0;p<18;p+=2)h=(u=f(e,h,d)).left,d=u.right,e.pbox[p]=h,e.pbox[p+1]=d;for(var l=0;l<4;l++)for(var v=0;v<256;v+=2)h=(u=f(e,h,d)).left,d=u.right,e.sbox[l][v]=h,e.sbox[l][v+1]=d}(s,r,t)}},encryptBlock:function(e,r){var t=f(s,e[r],e[r+1]);e[r]=t.left,e[r+1]=t.right},decryptBlock:function(e,r){var t=function(e,r,t){for(var i,n=r,o=t,c=17;c>1;--c)i=n^=e.pbox[c],n=o=a(e,n)^o,o=i;return i=n,n=o,o=i,o^=e.pbox[1],{left:n^=e.pbox[0],right:o}}(s,e[r],e[r+1]);e[r]=t.left,e[r+1]=t.right},blockSize:2,keySize:4,ivSize:2});r.Blowfish=t._createHelper(h)}(),e.Blowfish},"object"===i(t)?r.exports=t=o(e("./core"),e("./enc-base64"),e("./md5"),e("./evpkdf"),e("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],o):o(n.CryptoJS)}),(function(e){return t({"./core":1758590377089,"./enc-base64":1758590377093,"./md5":1758590377095,"./evpkdf":1758590377105,"./cipher-core":1758590377106}[e],e)})),t(1758590377088));
},{isPage:false,isComponent:false,currentFile:'miniprogram_npm/crypto-js/index.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("miniprogram_npm/umtrack-wx/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,t,n=require("../../@babel/runtime/helpers/typeof"),i="[UMENG] -- ",r=(t=!1,function(){return null===e&&(e=new o),e});function o(){this.setDebug=function(e){t=e},this.d=function(){if(t)try{"string"==typeof arguments[0]&&(arguments[0]=i+arguments[0]),console.debug.apply(console,arguments)}catch(e){}},this.i=function(){try{if(t)try{"string"==typeof arguments[0]&&(arguments[0]=i+arguments[0]),console.info.apply(console,arguments)}catch(e){}}catch(e){}},this.e=function(){if(t)try{"string"==typeof arguments[0]&&(arguments[0]=i+arguments[0]),console.error.apply(console,arguments)}catch(e){}},this.w=function(){if(t)try{"string"==typeof arguments[0]&&(arguments[0]=i+arguments[0]),console.warn.apply(console,arguments)}catch(e){}},this.v=function(){if(t)try{"string"==typeof arguments[0]&&(arguments[0]=i+arguments[0]),console.log.apply(console,arguments)}catch(e){}},this.t=function(){if(t)try{console.table.apply(console,arguments)}catch(e){}},this.tip=function(){try{"string"==typeof arguments[0]&&(arguments[0]=i+arguments[0]),console.log.apply(console,arguments)}catch(e){}},this.tip_w=function(e){try{console.log("%c "+i+e,"background:red; padding: 4px; padding-right: 8px; border-radius: 4px; color: #fff;")}catch(e){}},this.err=function(){try{"string"==typeof arguments[0]&&(arguments[0]=i+arguments[0]),console.error.apply(console,arguments)}catch(e){}}}var s,a=(s=e=null,function(){return s=s||new u});function u(){var e={};this.useOpenid=function(){return!!e.useOpenid},this.useSwanid=function(){return!!e.useSwanid},this.autoGetOpenid=function(){return!!e.autoGetOpenid},this.appKey=function(){return e.appKey},this.uploadUserInfo=function(){return e.uploadUserInfo},this.enableVerify=function(){return e.enableVerify},this.set=function(t){e=t},this.get=function(){return e},this.setItem=function(t,n){e[t]=n},this.getItem=function(t){return e[t]}}function c(){this.listeners={},this.maxListener=50}c.prototype.addListener=c.prototype.on=function(e,t){var n=this.listeners;n[e]&&n[e].length>=this.maxListener?console.error("监听器的最大数量是%d,您已超出限制",this.maxListener):n[e]instanceof Array?-1===n[e].indexOf(t)&&n[e].push(t):n[e]=[].concat(t)},c.prototype.emit=function(e){var t=Array.prototype.slice.call(arguments);t.shift();var n=this.listeners;n[e]instanceof Array&&n[e].forEach((function(e){e.apply(null,t)}))},c.prototype.listeners=function(e){return this.listeners[e]},c.prototype.setMaxListeners=function(e){this.maxListener=e},c.prototype.removeListener=function(e,t){var n=this.listeners;0<=(t=(n[e]||[]).indexOf(t))&&n[e].splice(t,1)},c.prototype.removeAllListener=function(e){this.listeners[e]=[]},c.prototype.once=function(e,t){var n=this;this.on(e,(function i(){var r=Array.prototype.slice.call(arguments);t.apply(null,r),n.removeListener(e,i)}))};var f=new c;f.messageType={CONFIG_LOADED:0,UMA_LIB_INITED:1};var p=new(function(){function e(){}return e.prototype.setStorage=function(e,t,n){wx.setStorage({key:e,data:t,success:function(){"function"==typeof n&&n(!0)},fail:function(){"function"==typeof n&&n(!1)}})},e.prototype.getStorage=function(e,t){wx.getStorage({key:e,success:function(e){"function"==typeof t&&t(e.data)},fail:function(n){r().w(e+": "+n.errMsg),"function"==typeof t&&t()}})},e.prototype.removeStorage=function(e,t){wx.removeStorage({key:e,success:function(){"function"==typeof t&&t(!0)},fail:function(){"function"==typeof t&&t(!1)}})},e.prototype.getSystemInfo=function(e){wx.getSystemInfo({success:function(t){var n={model:t.model,brand:t.brand,pixelRatio:t.pixelRatio,screenWidth:t.screenWidth,screenHeight:t.screenHeight,fontSizeSetting:t.fontSizeSetting,platform:t.platform,platformVersion:t.version,platformSDKVersion:t.SDKVersion,language:t.language,deviceName:t.model,OSVersion:t.system,resolution:""},i=t.system.split(" ");Array.isArray(i)&&(n.OS=i[0]),i=Math.round(t.screenWidth*t.pixelRatio),t=Math.round(t.screenHeight*t.pixelRatio),n.resolution=t<i?i+"*"+t:t+"*"+i,"function"==typeof e&&e(n)},fail:function(){"function"==typeof e&&e()}})},e.prototype.getDeviceInfo=function(e){"function"==typeof e&&e("")},e.prototype.checkNetworkAvailable=function(e){wx.getNetworkType({success:function(t){"function"==typeof e&&e(t&&"none"!==t.networkType)},fail:function(){"function"==typeof e&&e(!1)}})},e.prototype.getNetworkInfo=function(e){wx.getNetworkType({success:function(t){"function"==typeof e&&e({networkAvailable:"none"!==t.networkType,networkType:t.networkType})},fail:function(){"function"==typeof e&&e()}})},e.prototype.getDeviceId=function(e){e("")},e.prototype.getAdvertisingId=function(e){"function"==typeof e&&e("")},e.prototype.onNetworkStatusChange=function(e){wx.onNetworkStatusChange((function(t){"function"==typeof e&&e(t.isConnected)}))},e.prototype.request=function(e){var t=e.success,n=e.fail,i=!1,r=null;e.success=function(e){i||(r&&clearTimeout(r),"function"==typeof t&&t(e))},e.fail=function(){i||(r&&clearTimeout(r),"function"==typeof n&&n(!1))},wx.request(e),r=setTimeout((function(){r&&clearTimeout(r),i=!0,"function"==typeof n&&n(i)}),e.timeout||5e3)},e.prototype.getSdkType=function(){return"wxmp"},e.prototype.getPlatform=function(){return"wx"},e.prototype.getUserInfo=function(e){var t={fail:function(){e&&e()},success:function(t){t&&t.userInfo&&(t=t.userInfo,e&&e({avatar:t.avatarUrl,nickName:t.nickName,gender:t.gender,country:t.country,province:t.province,city:t.city,language:t.language}))}};try{wx.getSetting({success:function(e){e.authSetting["scope.userInfo"]&&wx.getUserInfo(t)},fail:function(){e()}})}catch(e){r.e("getUserInfo error",e)}},e.prototype.getAppInfoSync=function(){var e;return wx.getAccountInfoSync?{appId:(e=(e=wx.getAccountInfoSync())&&e.miniProgram?e.miniProgram:{}).appId,appEnv:e.envVersion,appVersion:e.version}:{}},e.prototype.onShareAppMessage=function(e){wx.onShareAppMessage(e)},e.prototype.shareAppMessage=function(e){wx.shareAppMessage(e)},e}()),d=function(e,t){return(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function l(e,t){function n(){this.constructor=e}d(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var h,g,v={SESSION_INTERVAL:3e4,LOG_URL:"https://umini.shujupie.com/wxm_logs",GET_OPENID_URL:"https://umini.shujupie.com/uminiprogram_logs/wx/getuut",USERINFO_URL:"https://umini.shujupie.com/uminiprogram_logs/comm/uif",DEVICE_INFO_KEY:"device_info",ADVERTISING_ID:"mobile_ad_id",ANDROID_ID:"android_id",CURRENT_SESSION:"current_session",SESSION_PAUSE_TIME:"session_pause_time",EVENT_SEND_DEFAULT_INTERVAL:15e3,EVENT_LAST_SEND_TIME:"last_send_time",MAX_EVENTID_LENGTH:128,MAX_PROPERTY_KEY_LENGTH:256,MAX_PROPERTY_KEYS_COUNT:100,REPORT_POLICY:"report_policy",REPORT_INTERVAL_TIME:"report_interval_time",REPORT_POLICY_START_SEND:"1",REPORT_POLICY_INTERVAL:"6",IMPRINT:"imprint",SEED_VERSION:"1.0.0",IMPL_VERSION:"2.5.2",ALIPAY_AVAILABLE_VERSION:"10.1.52",SHARE_PATH:"um_share_path",SHARES:"shares",REQUESTS:"requests",UUID:"um_uuid",UUID_SUFFIX:"ud",OPENID:"um_od",UNIONID:"um_unid",ALIPAYID:"um_alipayid",USERID:"um_userid",PROVIDER:"um_provider",SWANID:"um_swanid",ANONYMOUSID:"um_anonymousid",LAUNCH_OPTIONS:"LAUNCH_OPTIONS",UM_SSRC:"_um_ssrc",USER_INFO:"user_info",IS_ALIYUN:!1,ALIYUN_URL:"serverless.huoban.youmeng.network.forward"},y=function(e){for(var t="",n=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],i=0;i<Number(e);i++)t+=n[Math.round(Math.random()*(n.length-1))];return t},_=function(e){return JSON.parse(JSON.stringify(e))},m=function(e,t){return!(!e||!t||0===t.length||t.length>e.length)&&e.substr(0,t.length)===t},S=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1;n<arguments.length;n++){var i=arguments[n];if(i)for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},I=function e(t,i){if(t===i)return!0;if(t&&"object"==n(t)&&i&&"object"==n(i)){if(Object.keys(t).length!==Object.keys(i).length)return!1;for(var r in t){if(Object.prototype.hasOwnProperty.call(i,r))return!1;if(!e(t[r],i[r]))return!1}return!0}return!1},O=function(e,t){return e?("string"==typeof t&&t.length?(t=new RegExp("^"+t+"*"),e=e.replace(t,"")):e=e.replace(/^s*/,""),e):""},E=function(e){return"function"==typeof e},A=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.getOpenIdAsync=function(e,t){var n=this;wx.login({success:function(i){i.code?p.request({url:v.GET_OPENID_URL,method:"GET",data:{key:e,code:i.code},success:function(e){if(e&&200===e.statusCode&&e.data&&e.data.data)return e=e.data.data,n.setOpenid(e.oid),n.setUnionid(e.uid),t&&t(!0);t&&t()},fail:function(e){r().v("wx request failed...",e),t&&t()}}):t&&t()},fail:function(){t&&t()}})},t}(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._openid="",t._unionid="",t._useOpenid=!1,t}return l(t,e),t.prototype.initID=function(e){var t=this;t._idType=t._useOpenid?"openid":"uuid",r().v("id type: ",t._idType),p.getStorage(v.UNIONID,(function(e){t._unionid=e})),this._useOpenid?p.getStorage(v.OPENID,(function(n){t._openid=n,e&&e()})):e&&e()},t.prototype.setUseOpenid=function(e){this._useOpenid=e},t.prototype.setOpenid=function(e){!this._openid&&e&&(this._openid=e,p.setStorage(v.OPENID,e))},t.prototype.setUnionid=function(e){!this._unionid&&e&&(this._unionid=e,p.setStorage(v.UNIONID,e))},t.prototype.getIdTracking=function(){var t=e.prototype.getIdTracking.call(this);return this._openid&&(t.openid=this._openid),this._unionid&&(t.unionid=this._unionid),this._userid&&(t.userid=this._userid),t},t.prototype.getId=function(){return this._useOpenid?this._openid:this._uuid},t}(function(){function e(){this._uuid="",this._userid="",this._provider="",this._idType=""}return e.prototype.createUUID=function(){return y(10)+Date.now()+y(7)+v.UUID_SUFFIX},e.prototype.initUUID=function(e){var t=this;p.getStorage(v.UUID,(function(n){n?t._uuid=n:(t._uuid=t.createUUID(),p.setStorage(v.UUID,t._uuid)),e&&e(n)}))},e.prototype.initUserid=function(){var e=this;p.getStorage(v.USERID,(function(t){!e._userid&&t&&(e._userid=t,r().v("userId is ",t))})),p.getStorage(v.PROVIDER,(function(t){!e._provider&&t&&(e._provider=t,r().v("provider is ",t))}))},e.prototype.init=function(e){var t=this;t.initUUID((function(){t.initUserid(),t.initID(e)}))},e.prototype.setUserid=function(e,t){!this._userid&&e&&(this._userid=e,this._provider=t,p.setStorage(v.USERID,e),p.setStorage(v.PROVIDER,t))},e.prototype.getUserId=function(){return this._userid},e.prototype.getProvider=function(){return this._provider},e.prototype.getIdType=function(){return this._idType},e.prototype.getIdTracking=function(){var e={};return this._uuid&&(e.uuid=this._uuid),this._userid&&(e.userid=this._userid),e},e}())),T=function(){return h=h||new A},w=function(){return g=g||new N};function N(){var e=!1,t=null,n=[];this.addPageStart=function(n){n&&!e&&(t={ts:Date.now(),path:n,page_name:n},e=!0)},this.addPageEnd=function(i){e&&i&&t&&i===t.page_name&&(i=Date.now()-t.ts,t.duration=Math.abs(i),n.push(t),t=null,e=!1)},this.get=function(){return n},this.getCurrentPage=function(){return t},this.clear=function(){n.length=0}}var k={};var U,R,b,D=function(){return U=U||new P};function P(){return{add:function(e,t){r().v("share origin: %o",e);var n={title:e&&e.title,path:e&&e.path&&e.path.split("?")[0],_um_sts:Date.now()};n.path&&1<n.path.length&&m(n.path,"/")&&(n.path=O(n.path,"/"));var i=e.path||"",o=T().getId();if(o){var s=b.split(","),a=(s=s.filter((function(e){return 0<e.length}))).indexOf(o);0<=a&&(s=s.slice(0,a)),s.length<3&&s.push(o),o=s.join(","),-1!==i.indexOf("?")?i+="&_um_ssrc="+o:i+="?_um_ssrc="+o,i+="&_um_sts="+(s=Date.now()),t?(t=(t=function(e){var t,n=[];for(t in e)"_um_ssrc"!==t&&"_um_sts"!==t&&n.push(t+"="+e[t]);return n.join("&")}(k))?t+"&_um_ssrc="+o+"&_um_sts="+s:"_um_ssrc="+o+"&_um_sts="+s,e.query=e.query?e.query+"&_um_ssrc="+o+"&_um_sts="+s:t):e.path=i,n._um_ssrc=o,n._um_sts=s}return R.push(n),r().v("share: %o",e),e},setShareSource:function(e){b=e},clear:function(){R.length=0},get:function(){return R}}}var L,C,x,M,V=function(e){if(e)try{return JSON.stringify(e)}catch(e){}return""},j=function(e){if(e)try{return JSON.parse(e)}catch(e){}return null},G=(M=!(R=[]),function(){return L=L||new F});function F(){this.load=function(e){x?(p.removeStorage(C),e()):(C="um_cache_"+a().appKey(),p.getStorage(C,(function(t){x=j(t)||{},M=!0,p.removeStorage(C),e()})))},this.save=function(){x&&p.setStorage(C,V(x))},this.set=function(e,t){x&&(x[e]=t)},this.get=function(e){return(x||{})[e]},this.remove=function(e){x&&x[e]&&delete x[e]},this.getAll=function(){return x},this.clear=function(){x=null},this.has=function(e){return!!this.get(e)},this.isLoaded=function(){return M}}var q,K,H,Y,J="ekvs",X=(H=[],Y=[],function(){return q=q||{addEvent:function(e){K?(H.unshift(e),1<H.length&&(!function(){if(H.length){var e=G().get(J);(function(e){var t,n=0;for(t in e)Array.isArray(e[t])&&(n+=e[t].length);return n})(e)+H.length<=1e4&&(e=z(e,H),G().set(J,e))}}(),H.length=0)):(r().w("session id is null: ",K),Y.unshift(e))},setSessionId:function(e){if(K=e,r().v("setSessionId: ",K),Array.isArray(Y)&&Y.length&&K){for(var t=0;t<Y.length;t++)this.addEvent(Y[t]);Y.length=0}},getEkvs:function(){var e=G().get(J);return H&&H.length&&(e=z(e,H)),e},clear:function(){G().remove(J),H.length=0}}});function z(e,t){var n=(e=e||{})[K];return Array.isArray(n)&&n.length?e[K]=n.concat(t):e[K]=[].concat(t),e}var Q,B="half_session",W="close_session",Z="ekv",$=["access","access_subtype"],ee=function(){return Q=Q||function(){var e=!1,t={};return{init:function(){!function(e){var n=G().get(v.IMPRINT);n&&(t.imprint=n),t.device_type="Phone",t.sdk_version=v.IMPL_VERSION,t.appkey=a().appKey(),p.getDeviceInfo((function(e){t.device_info=e||""})),n=p.getAppInfoSync(),t.appid=n.appId,t.app_env=n.appEnv,t.app_version=n.appVersion,p.getSystemInfo((function(n){p.getNetworkInfo((function(i){i=function(e,t){var n={},i=(t=t||{}).networkType;"none"===i&&(i="unknown");var r=(e=e||{}).model||"",o=e.platform||"",s=e.brand||"";t=s.toLowerCase();switch(n.sdk_type=p.getSdkType(),n.platform=p.getPlatform(),n.platform_sdk_version=e.platformSDKVersion,n.platform_version=e.platformVersion,n.resolution=e.resolution,n.pixel_ratio=e.pixelRatio,n.os=o,n.font_size_setting=e.fontSizeSetting,n.device_model=r,n.device_brand=s,n.device_manufacturer=t,n.device_manuid=r,n.device_name=r,n.os_version=e.OSVersion,n.language=e.language,i=i?i.toLowerCase():""){case"4g":n.access_subtype="LTE",n.access="4G";break;case"3g":n.access_subtype="CDMA",n.access="3G";break;case"2g":n.access_subtype="GRPS",n.access="2G";break;default:n.access=i,delete n.access_subtype}return n}(n,i),S(t,i),function(){var e=[];e.push({name:"设备型号",value:t.device_model}),e.push({name:"设备生产商",value:t.device_brand}),e.push({name:"os版本号",value:t.os_version}),e.push({name:"网络类型",value:t.access}),e.push({name:"运营商",value:t.access_subtype}),e.push({name:"分辨率",value:t.resolution}),e.push({name:"pixelRatio",value:t.pixel_ratio});for(var n="",i=0;i<e.length;i++){var o=e[i];n+=o.name+": "+o.value+"; "}r().v("调试辅助信息: ",n)}(),e&&e()}))}))}((function(){e=!0}))},isLoaded:function(){return e},get:function(){return t},getRealtimeFields:function(){var e={};return $.forEach((function(n){e[n]=t[n]})),e},setIdTracking:function(e){this.setItem("id_tracking",e)},setIdType:function(e){this.setItem("id_type",e)},setAppVersion:function(e){this.setItem("app_version",e)},setSuperProperty:function(e){t.sp||(t.sp={}),t.sp.isv=e},getSuperProperty:function(){return t&&t.sp?t.sp.isv:""},setItem:function(e,n){t[e]=n},getItem:function(e){return t[e]}}}()};var te,ne,ie,re=(ie=ne=te=Q=x=L=U=g=h=null,function(){return te=te||{resume:function(e){var t=!1;ie=ie||G().get(v.CURRENT_SESSION);var n=new Date;return ne=n.getTime(),!ie||!ie.end_time||ne-ie.end_time>v.SESSION_INTERVAL?(t=!0,function(e){try{var t=(ie||{}).options||{},n=S({},function(e){var t,n={};for(t in e)0===t.indexOf("_um_")&&(n[t]=e[t]);return r().v("query: ",e),r().v("_um_params: ",n),n}(e.query));n.path=e.path||t.path,n.scene=e.scene?p.getPlatform()+"_"+e.scene:t.scene,(t=e.referrerInfo)&&(n.referrerAppId=t.appId),r().v("session options: ",n),(t=n[v.UM_SSRC])&&D().setShareSource(t),t=Date.now(),ie={id:y(10)+t,start_time:t,options:n}}catch(e){r().e("生成新session失败: ",e)}}(e),r().v("开始新的session(%s): ",ie.id,ie)):r().v("延续上一次session(%s): %s ",ie.id,n.toLocaleTimeString(),ie),t},pause:function(){!function(){if(ie){var e=new Date;ie.end_time=e.getTime(),"number"!=typeof ie.duration&&(ie.duration=0),ie.duration=ie.end_time-ne,G().set(v.CURRENT_SESSION,ie),r().v("退出会话(%s): %s ",ie.id,e.toLocaleTimeString(),ie)}}()},getCurrentSessionId:function(){return(ie||{}).id},getCurrentSession:function(){return ie},cloneCurrentSession:function(){return _(ie)}}});var oe={sessions:"sn",ekvs:"e",active_user:"active_user"},se={sdk_type:"sdt",access:"ac",access_subtype:"acs",device_model:"dm",language:"lang",device_type:"dt",device_manufacturer:"dmf",device_name:"dn",platform_version:"pv",id_type:"it",font_size_setting:"fss",os_version:"ov",device_manuid:"did",platform_sdk_version:"psv",device_brand:"db",appkey:"ak",_id:"id",id_tracking:"itr",imprint:"imp",sdk_version:"sv",resolution:"rl",testToken:"ttn"},ae={uuid:"ud",unionid:"und",openid:"od",anonymousid:"nd",alipay_id:"ad",device_id:"dd",userid:"puid"};function ue(e,t){var n,i={};for(n in e)t[n]?i[t[n]]=e[n]:i[n]=e[n];return i}var ce=C=b="";function fe(e){if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?ye(192|t>>>6)+ye(128|63&t):ye(224|t>>>12&15)+ye(128|t>>>6&63)+ye(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return ye(240|t>>>18&7)+ye(128|t>>>12&63)+ye(128|t>>>6&63)+ye(128|63&t)}function pe(e){var t=[0,2,1][e.length%3];e=e.charCodeAt(0)<<16|(1<e.length?e.charCodeAt(1):0)<<8|(2<e.length?e.charCodeAt(2):0);return[ge.charAt(e>>>18),ge.charAt(e>>>12&63),2<=t?"=":ge.charAt(e>>>6&63),1<=t?"=":ge.charAt(63&e)].join("")}function de(e){return e.replace(_e,fe).replace(/[\s\S]{1,3}/g,pe)}function le(e){switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return ye(55296+(t>>>10))+ye(56320+(1023&t));case 3:return ye((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return ye((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}}function he(e){var t=e.length,n=t%4;e=(0<t?ve[e.charAt(0)]<<18:0)|(1<t?ve[e.charAt(1)]<<12:0)|(2<t?ve[e.charAt(2)]<<6:0)|(3<t?ve[e.charAt(3)]:0);return(e=[ye(e>>>16),ye(e>>>8&255),ye(255&e)]).length-=[0,0,2,1][n],e.join("")}var ge="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ve=function(e){for(var t={},n=0,i=e.length;n<i;n++)t[e.charAt(n)]=n;return t}(ge),ye=String.fromCharCode,_e=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,me=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),Se=function(e,t){return t?de(String(e)).replace(/[+\/]/g,(function(e){return"+"==e?"-":"_"})).replace(/=/g,""):de(String(e))},Ie=function(e){return function(e){return e.replace(/[\s\S]{1,4}/g,he).replace(me,le)}(String(e).replace(/[-_]/g,(function(e){return"-"==e?"+":"/"})).replace(/[^A-Za-z0-9\+\/]/g,""))},Oe=new function(){var e="",t=this;this.set=function(t){e=t},this.get=function(){return e},this.getImpObj=function(){return j(Ie(e))},this.getItem=function(e){var n=t.getImpObj();return n&&n[e]||""},this.load=function(){e=G().get(v.IMPRINT)},this.save=function(){e&&G().set(v.IMPRINT,e)}};function Ee(e,t,n,i){ee().setIdType(T().getIdType()),ee().setIdTracking(T().getIdTracking()),(o=T().getUserId())&&e.analytics&&(e.analytics.active_user={puid:o,provider:T().getProvider()}),o=_(ee().get()),e.header=S(o,e.header,{ts:Date.now(),testToken:ce,traceId:y(10)+Date.now()+y(9)});var o=function(e){return{h:function(e,t){var n=ue(e,t);return e&&e.id_tracking&&(n[t.id_tracking||"id_tracking"]=ue(e.id_tracking,ae)),n}(e.header,se),a:function(e,t){var n={};if(e)for(var i in e)e[i]&&(n[t[i]]=e[i]);return n}(e.analytics,oe)}}(e),s=V(o);o={url:v.LOG_URL,method:"POST",data:Se(s),success:function(i){var o=i.code||i.status||i.statusCode;200===o||413===o?(r().i("数据发送成功: ",e,s),function(e){e&&(ee().setItem(v.IMPRINT,e),Oe.set(e),Oe.save(),r().v("imprint: ",Oe.getImpObj()),Oe.getItem("ttn_invalid")&&(ce=""))}((i.data||{}).imprint),"function"==typeof t&&t(i)):(r().w("数据发送失败: ",s),"function"==typeof n&&n())},fail:function(e){r().w("超时: ",s),"function"==typeof n&&n()},complete:function(){"function"==typeof i&&i()}};p.request(S(o,{header:{"Content-Type":o=p.getSdkType()+"/json","Msg-Type":o}}))}var Ae,Te,we,Ne,ke=(Ae=null,Te=!1,we=[],Ne=new function(e){var t=e,n=[];this.enqueue=function(e){"number"==typeof t&&this.size()>=t&&this.dequeue(),n.push(e)},this.dequeue=function(){return n.shift()},this.front=function(){return n[0]},this.isEmpty=function(){return 0===n.length},this.clear=function(){n.length=0},this.size=function(){return n.length},this.items=function(){return n},this.print=function(){console.log(n.toString())}}(50),function(){return Ae=Ae||new Re});function Ue(e){T().getId()?Te?r().i("队列正在发送中"):(Te=!0,function e(t){var n=Ne.front();n?Ee(n,(function(){Ne.dequeue(),e(t)}),(function(){var n=Ne.dequeue();n&&!n.noCache&&we.push(n),e(t)})):(we.forEach((function(e){Ne.enqueue(e)})),we.length=0,t())}((function(){Te=!1,"function"==typeof e&&e()}))):(r().i("获取id标识失败，暂缓发送"),"function"==typeof e&&e())}function Re(){this.send=function(e,t,n){e?this.add(e,t,(function(){Ue(n)})):Ue(n)},this.add=function(e,t,n){!function e(t,n,i){if(ee().isLoaded()){n=n||{};var r=function(e){var t=null;switch(e){case B:t=function(){var e=null,t=re().cloneCurrentSession();return t&&(e={header:{st:"1"},analytics:{sessions:[t]}}),e}();break;case W:t=function(){var e=null,t={},n=re().cloneCurrentSession();if(n){var i=w().get(),r=D().get();Array.isArray(i)&&i.length&&(n.pages=_(i)),Array.isArray(r)&&r.length&&(n.shares=_(r)),w().clear(),D().clear(),t.sessions=[n]}return(n=X().getEkvs())&&(t.ekvs=_(n),X().clear()),(t.sessions||t.ekvs)&&(e={analytics:t}),e}();break;case Z:t=function(){var e=null,t=X().getEkvs();return t&&(e={analytics:{ekvs:_(t)}},X().clear()),e}()}return t}(t);if(r){var o=ee().getRealtimeFields();r.header=S({},r.header,o),r.noCache=n.noCache,Ne.enqueue(r)}"function"==typeof i&&i()}else setTimeout((function(){e(t,n,i)}),100)}(e,t,n)},this.load=function(){var e=G().get(v.REQUESTS);e&&e.length&&e.forEach((function(e){Ne.enqueue(e)})),G().remove(v.REQUESTS)},this.save=function(){G().set(v.REQUESTS,_(Ne.items())),Ne.clear()}}var be,De=(be=null,function(){return be=be||new Pe});function Pe(){this.update=function(){p.getUserInfo((function(e){if(e){var t=G().get(v.USER_INFO);t&&I(e,t)||function(e,t){var n=a().appKey(),i=p.getSdkType(),o=T().getId(),s=T().getIdType();n&&i&&o&&s&&(s={ak:a().appKey(),sdt:p.getSdkType(),uin:e.nickName,uia:e.avatar,uig:e.gender,uit:e.country,uip:e.province,uic:e.city,uil:e.language,id:T().getId(),it:T().getIdType()},s=JSON.stringify(s),s=Se(s),p.request({url:v.USERINFO_URL,method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:"ui="+s,success:function(n){r().v("用户信息上传成功: ",e),t&&t(n&&n.data&&200===n.data.code)},fail:function(){r().e("用户信息上传失败: ",e),t&&t(!1)}}))}(e,(function(t){t&&G().set(v.USER_INFO,e)}))}}))}}function Le(e,t){this.id=e,this.ts=Date.now();var i=n(t);if("string"==i&&t)this[e]=t;else if("object"==i)for(var r in t)!{}.hasOwnProperty.call(t,r)||(this[r]=t[r])}function Ce(){var e=!1,t=!1,i=0;this.init=function(t){r().v("sdk version: "+v.IMPL_VERSION),e?r().v("Lib重复实例化"):G().load((function(){r().v("cache初始化成功: ",G().getAll()),T().setUseOpenid&&T().setUseOpenid(a().useOpenid()),T().init((function(){ee().init(),r().v("Header初始化成功")})),e=!0,"function"==typeof t&&t(),r().tip("SDK集成成功")}))},this.resume=function(n){var i;e&&!t&&(r().v("showOptions: ",n),t=!0,a().enableVerify()&&n&&n.query&&(i=n.query._ttn,ce=i||ce),this._resume(n))},this._resume=function(e){ke().load();var t=re().resume(e);e=re().getCurrentSessionId();X().setSessionId(e),t&&ke().add(B,{},(function(){T().setUseOpenid&&T().setUseOpenid(a().useOpenid()),a().useOpenid()&&a().autoGetOpenid()&&!T().getId()?(r().v("get id async"),function e(t,n){T().getId()||t<=0||T().getOpenIdAsync(a().appKey(),(function(i){i?(r().v("获取id成功"),ke().send()):(r().v("获取openid失败,启动重试,剩余可用次数",t-1),setTimeout((function(){e(t-1,n)}),n))}))}(10,3e3)):(r().v("session auto send"),ke().send())}))},this.pause=function(n){e&&(t=!1,i=0,re().pause(),a().uploadUserInfo()&&De().update(),ke().send(W,{},(function(){ke().save(),G().save(),r().v("cache save success"),"function"==typeof n&&n()})))},this.setOpenid=function(e){r().v("setOpenId: %s",e),T().setOpenid(e),ke().send()},this.setUnionid=function(e){r().v("setUnionid: %s",e),T().setUnionid(e)},this.setUserid=function(e,t){r().v("setUserid: %s",e,t),T().setUserid(e,t)},this.setAnonymousid=function(e){r().v("setAnonymousId: %s",e),T().setAnonymousid(e),ke().send()},this.setAppVersion=function(e){e&&"string"!=typeof e?r().w("setAppVersion方法只接受字符串类型参数"):ee().setAppVersion(e)},this.setAlipayUserid=function(e){e&&"string"!=typeof e?r().w("setAlipayUserid方法只接受字符串类型参数"):(r().v("setAlipayUserid: %s",e),T().setAlipayUserid(e))},this.setSuperProperty=function(e){if(e&&"string"!=typeof e)r().w("超级属性只支持字符串类型");else{var t=this;ee().getSuperProperty()!==e&&(ee().setSuperProperty(e),t.pause((function(){t.resume()})))}},this.trackEvent=function(t,o){if(e&&(r().v("event: ",t,o),function(e,t){if(e&&"string"==typeof e){var i=["id","ts","du"],o={};if(i.forEach((function(e){o[e]=1})),o[e])r().e("eventId不能与以下保留字冲突: "+i.join(","));else if(e.length>v.MAX_EVENTID_LENGTH)r().e("The maximum length of event id shall not exceed "+v.MAX_EVENTID_LENGTH);else{if(!t||"object"==n(t)&&!Array.isArray(t)||"string"==typeof t){if("object"==n(t)){var s,a=0;for(s in t)if({}.hasOwnProperty.call(t,s)){if(s.length>v.MAX_PROPERTY_KEY_LENGTH)return void r().e("The maximum length of property key shall not exceed "+v.MAX_PROPERTY_KEY_LENGTH);if(a>=v.MAX_PROPERTY_KEYS_COUNT)return void r().e("The maximum count of properties shall not exceed "+v.MAX_PROPERTY_KEYS_COUNT);if(o[s])return void r().e("属性中的key不能与以下保留字冲突: "+i.join(","));a+=1}}return 1}r().e("please check trackEvent properties. properties should be string or object(not include Array)")}}else r().e('please check trackEvent id. id should be "string" and not null')}(t,o))){var s=new Le(t,o);X().addEvent(s);var a=!!ce;t=a?0:v.EVENT_SEND_DEFAULT_INTERVAL;s=o=Date.now(),t=t,("number"!=typeof i||"number"!=typeof t||i<=0||t<s-i)&&(i=o,ke().send(Z,{noCache:a},(function(){})))}},this.trackShare=function(t){if(e){try{-1<p.getSdkType().indexOf("game")?(t=D().add(t,!0),r().v("shareQuery: ",t)):(t=D().add(t,!1),r().v("sharePath: ",t.path))}catch(t){r().v("shareAppMessage: ",t)}return t}},this.trackPageStart=function(t){e&&w().addPageStart(t)},this.trackPageEnd=function(t){e&&w().addPageEnd(t)},this.onShareAppMessage=function(e){var t=this;p.onShareAppMessage((function(){return t.trackShare(e())}))},this.shareAppMessage=function(e){this.trackShare(e),p.shareAppMessage(e)}}var xe=[];function Me(){}Me.prototype={createMethod:function(e,t,n){try{e[t]=n&&n[t]?function(){return n[t].apply(n,arguments)}:function(){xe.push([t,[].slice.call(arguments)])}}catch(e){r().v("create method errror: ",e)}},installApi:function(e,t){try{for(var n="resume,pause,trackEvent,trackPageStart,trackPageEnd,trackShare,setUserid,setOpenid,setUnionid,setSuperProperty".split(","),i=0,o=n.length;i<o;i++)this.createMethod(e,n[i],t);if(t)for(i=0,o=xe.length;i<o;i++){var s=xe[i];try{t[s[0]].apply(t,s[1])}catch(e){r().v("impl[v[0]].apply error: ",s[0],e)}}}catch(e){r().v("install api errror: ",e)}}};var Ve=["https://umini.shujupie.com","https://ulogs.umeng.com"],je=0;!function(e){setTimeout((function(){!function e(t,n){t>=Ve.length||n?(n&&function(){var e="https://umini.shujupie.com";v.LOG_URL=v.LOG_URL.replace(e,Ve[je]),v.GET_OPENID_URL=v.GET_OPENID_URL.replace(e,Ve[je]),v.USERINFO_URL=v.USERINFO_URL.replace(e,Ve[je])}(),n&&r().v("命中可用服务",Ve[je]),n||r().tip_w("未命中可用服务")):p.request({url:Ve[t]+"/uminiprogram_logs/ckdh",success:function(n){200===(n.code||n.status||n.statusCode)&&n.data&&200===n.data.code?e((je=t)+1,!0):e(t+1,!1)},fail:function(){e(t+1,!1)}})}(0,!1)}),e)}(3e3);var Ge=new Me,Fe={_inited:!1,_log:r(),use:function(e,t){return e&&E(e.install)?e.install(Fe,t):E(e)&&e(Fe,t),Fe},messager:f,init:function(e){if(this._inited)r().v("已经实例过，请避免重复初始化");else if(e)if(e.appKey){"boolean"!=typeof e.useOpenid&&(e.useOpenid=!0),a().set(e),r().setDebug(e.debug),this._inited=!0;var t=this;f.emit(f.messageType.CONFIG_LOADED,e);try{var n=new Ce;r().v("成功创建Lib对象"),n.init((function(){r().v("Lib对象初始化成功"),Ge.installApi(t,n),r().v("安装Lib接口成功"),f.emit(f.messageType.UMA_LIB_INITED,e)}))}catch(e){r().w("创建Lib对象异常: "+e)}}else r().err("请确保传入正确的appkey");else r().err("请正确设置相关信息！")}};try{Ge.installApi(Fe,null)}catch(e){r().w("uma赋值异常: ",e)}var qe="https://ucc.umeng.com/v1/mini/fetch",Ke="https://pslog.umeng.com/mini_ablog",He="2.5.2",Ye="none",Je={},Xe=Array.isArray;Je.isArray=Xe||function(e){return"[object Array]"===toString.call(e)},Je.isObject=function(e){return e===Object(e)&&!Je.isArray(e)},Je.isEmptyObject=function(e){if(Je.isObject(e)){for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0}return!1},Je.isUndefined=function(e){return void 0===e},Je.isString=function(e){return"[object String]"===toString.call(e)},Je.isDate=function(e){return"[object Date]"===toString.call(e)},Je.isNumber=function(e){return"[object Number]"===toString.call(e)},Je.each=function(e,t,n){if(null!=e){var i={},r=Array.prototype.forEach;if(r&&e.forEach===r)e.forEach(t,n);else if(e.length===+e.length){for(var o=0,s=e.length;o<s;o++)if(o in e&&t.call(n,e[o],o,e)===i)return}else for(var a in e)if(hasOwnProperty.call(e,a)&&t.call(n,e[a],a,e)===i)return}},Je.buildQuery=function(e,t){var n,i,r=[];return void 0===t&&(t="&"),Je.each(e,(function(e,t){n=encodeURIComponent(e.toString()),i=encodeURIComponent(t),r[r.length]=i+"="+n})),r.join(t)},Je.JSONDecode=function(e){if(e){try{return JSON.parse(e)}catch(e){console.error("JSONDecode error",e)}return null}},Je.JSONEncode=function(e){try{return JSON.stringify(e)}catch(e){console.error("JSONEncode error",e)}};var ze=Object.create(null);var Qe=Object.create(null),Be=null,We=!1,Ze={minFetchIntervalSeconds:43200};function $e(e){e&&Je.each(e,(function(e){Qe[e.k]=e}))}function et(){var e=this;this.STORAGE_NAME=null,f.on(f.messageType.CONFIG_LOADED,(function(t){r().v("云配初始化开始..."),e.init(t)}))}et.prototype={setDefaultValues:function(e){We&&Je.isObject(e)&&Je.each(e,(function(e,t){Qe[t]&&Qe[t].v||(Qe[t]={v:e})}))},getValue:function(e){r().v("从配置项中读取 value, 当前配置为: ",Qe),r().v("待读取的 key : ",e);try{if(!We)return;var t=Qe[e]||{};return r().v("读取相应配置ing..., 结果为: ",t),Je.isNumber(t.e)&&Je.isNumber(t.g)&&(r().v("读取到相应配置, 开始数据上报..."),function(e){var t={appkey:a().appKey(),sdkType:p.getSdkType(),expId:e&&e.e,groupId:e&&e.g,clientTs:Date.now(),key:e&&e.k,value:e&&e.v,umid:T().getId()};try{p.request({url:Ke,method:"POST",data:[t],success:function(e){e&&200===e.statusCode?r().v("上传数据成功",t):r().w("ablog 请求成功, 返回结果异常 ",e)},fail:function(e){r().w("ablog 请求数据错误 ",t,e)}})}catch(e){r().w("urequest 调用错误",e)}}(t)),t.v}catch(t){r().w("getValue error, key: ",e)}},active:function(e){try{if(!We)return;var t,n;e&&e.params&&(t=e.params),e&&e.callback&&(n=e.callback),r().v("激活配置项: ",t),t?(r().v("本地已缓存的配置项: ",Qe),$e(t),r().v("合并后的配置项: ",Qe),n&&n(Qe),r().v("active 结束")):(r().v("配置项为空!! 读取本地配置..."),p.getStorage(this.STORAGE_NAME,(function(e){e?($e((e=Je.JSONDecode(e)||{}).params),r().v("当前本地配置项为: ",Qe),n&&n(Qe),r().v("active 结束")):r().v("当前本地配置项为空, 退出激活")})))}catch(e){r().w("SDK active 错误",e)}},init:function(e){e.appKey&&(Be=e.appKey,this.STORAGE_NAME="um_remote_config_{{"+Be+"}}"),Be?We?r().w("SDK 已经初始化, 请避免重复初始化"):(We=!0,this.setOptions(e),this.active()):r().err("请检查您的小程序 appKey, appKey 不能为空")},setOptions:function(e){Je.isObject(e)&&(e=e.minFetchIntervalSeconds,Je.isNumber(e)&&(Ze.minFetchIntervalSeconds=Math.max(e,5)))},fetch:function(e){if(We&&this.STORAGE_NAME){var t,n;e&&e.active&&(t=e.active),e&&e.callback&&(n=e.callback);var i=this;p.getStorage(this.STORAGE_NAME,(function(e){r().v("开始读缓存 data is ",e),(e=Je.JSONDecode(e)||{}).params&&e.ts&&Date.now()-e.ts<1e3*Ze.minFetchIntervalSeconds?(r().v("缓存数据存在, 并且本次触发时间距离上次fetch触发时间未超过 fetch 时间间隔, 无需 fetch"),n&&n(e.params)):function(e){r().v("开始构建 fetch body"),p.getSystemInfo((function(t){p.getNetworkInfo((function(n){n=(n=(n=n||{}).networkType)===Ye?"unknown":n.toUpperCase(),ze.access=n,function(e,t){var n=e.brand||"";ze.deviceType="Phone",ze.sdkVersion=He,ze.appkey=a().appKey(),ze.sdkType=p.getSdkType(),ze.umid=T().getId(),e&&(ze.language=e.language||"",ze.os=e.OS,ze.osVersion=e.OSVersion,ze.deviceName=e.deviceName,ze.platformVersion=e.platformVersion,ze.platformSdkVersion=e.platformSDKVersion,ze.deviceBrand=n,e=e.resolution.split("*"),Je.isArray(e)&&(ze.resolutionHeight=Number(e[0]),ze.resolutionWidth=Number(e[1]))),function(e){e&&(ze.installTime=e.install_datetime&&Date.parse(e.install_datetime),ze.scene=e.install_scene,ze.channel=e.install_channel,ze.campaign=e.install_campaign)}(Oe.getImpObj()),t&&t(ze)}(t,e)}))}))}((function(e){r().v("缓存数据不存在, 构建 fetch body :",e);try{p.request({url:qe,method:"POST",data:e,success:function(e){if(e&&200===e.statusCode&&e.data&&e.data.cc){r().v("fetch 请求成功, 响应数据: ",e.data);var o=Object.create(null);Je.each(e.data.cc,(function(e){o[e.k]=e}));var s={ts:Date.now(),params:o};r().v("开始缓存 fetch 请求的云配置结果..."),p.setStorage(i.STORAGE_NAME,Je.JSONEncode(s),(function(e){r().v("缓存云配置成功, 缓存数据为: ",s),r().v("缓存云配置成功, 成功消息为: ",e),r().v("云配拉取数据是否自动激活: ",t),e&&t&&(r().v("激活云配置..."),i.active({params:o,callback:n}))}))}else r().w("fetch 请求成功,返回结果异常 ",e.data),n&&n()},fail:function(t){r().w("fetch请求数据错误 ",e,t),n&&n()}})}catch(e){r().w("urequest调用错误",e)}}))}))}}};Xe={install:function(e,t){return e.rc||(e.rc=new et),e.messager.on(e.messager.messageType.CONFIG_LOADED,(function(){e._log.v("plugin rc installed")})),e.rc}};var tt="",nt={};function it(e){e&&(tt=e)}function rt(e,t){if(e.onShareAppMessage){var n=e.onShareAppMessage;e.onShareAppMessage=function(e){var i=n.call(this,e)||{};e=function(e,t){if(!e)return"";var n,i=[];for(n in t)"_um_ssrc"!==n&&"_um_sts"!==n&&i.push(n+"="+t[n]);var r=i.join("&");return r?e+"?"+r:e}(tt,nt[tt]);return!i.path&&e&&(i.path=e),t.trackShare.call(this,i)}}}function ot(e,t,n){var i=e[t];e[t]=function(e){n.call(this,e),i&&i.call(this,e)}}function st(e){try{Fe.resume(e,!0)}catch(e){r().v("onAppShow: ",e)}}function at(){try{Fe.pause()}catch(e){r().v("onAppHide: ",e)}}function ut(){try{it(this.route),Fe.trackPageStart(this.route)}catch(e){r().v("onPageShow: ",e)}}function ct(e){try{it(this.route),e&&(t=this.route,n=e,t&&(nt[t]=n)),r().v("Page onLoad: ",this.route,e)}catch(e){r().v("onPageLoad: ",e)}var t,n}function ft(){try{Fe.trackPageEnd(this.route)}catch(e){r().v("onPageHide: ",e)}}try{var pt=App;App=function(e){ot(e,"onLaunch",(function(){!function(e){try{Fe.init(e)}catch(e){r().v("onAppLaunch: ",e)}}(e.umengConfig)})),ot(e,"onShow",st),ot(e,"onHide",at),pt(e)}}catch(e){r().w("App重写异常")}try{var dt=Page;Page=function(e){ot(e,"onShow",ut),ot(e,"onHide",ft),ot(e,"onUnload",ft),ot(e,"onLoad",ct),rt(e,Fe),dt(e)}}catch(e){r().w("Page重写异常")}try{var lt=Component;Component=function(e){try{e.methods=e.methods||{};var t=e.methods;ot(t,"onShow",ut),ot(t,"onHide",ft),ot(t,"onUnload",ft),ot(t,"onLoad",ct),rt(t,Fe),lt(e)}catch(t){lt(e)}}}catch(e){r().w("Component重写异常")}var ht=Fe.init;Fe.init=function(e){e&&e.useOpenid&&(r().tip_w("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"),r().tip_w("您选择了使用openid进行统计，请确保使用setOpenid回传openid或通过设置autoGetOpenid为true，并在友盟后台设置secret由友盟帮您获取"),r().tip_w("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")),ht.call(Fe,e)},Fe.use(Xe),wx.uma=Fe,module.exports=Fe;
},{isPage:false,isComponent:false,currentFile:'miniprogram_npm/umtrack-wx/index.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("app.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("@babel/runtime/helpers/typeof");require("@babel/runtime/helpers/Arrayincludes");var o=require("@babel/runtime/helpers/objectSpread2"),a=require("@babel/runtime/helpers/regeneratorRuntime"),t=require("@babel/runtime/helpers/asyncToGenerator");require("umtrack-wx");var r=require("76AB9B769105A88C10CDF3717594FB65.js"),c=require("3D62BF329105A88C5B04D735CAB4FB65.js"),l=require("148844069105A88C72EE2C014693FB65.js"),i=wx.getExtConfigSync?wx.getExtConfigSync():{},n=require("727D99A59105A88C141BF1A2A784FB65.js");App({onLaunch:function(e){r.initChallenge&&r.initChallenge(),wx.canIUse("onBeforeAppRoute")&&wx.onBeforeAppRoute((function(e){r.checkChallengeExpiredTime&&r.checkChallengeExpiredTime()})),console.log("onLaunch options",e);var o=this;o.getCorpXcxInfo((function(){o.isNeedRemoveStorage(),o.isNeedGoWhiteListLogin(e.path)})),wx.getNetworkType({success:function(e){o.globalData.networkType=e.networkType,"none"==o.globalData.networkType&&wx.showToast({title:"无网络连接",icon:"none",mask:!0,duration:3e3})}}),o.getSystemInfoFun(),console.log("APP onLaunch options：",o.globalData.corp.ID,e),n.info("APP onLaunch options：",o.globalData.corp.ID,e)},isNeedRemoveStorage:function(){var e=this,o=wx.getStorageSync(e.globalData.corp.appid+"_storageCheckUpdate"),a=e.globalData.corpXcx.checkUpdate||0;if(n.info("isNeedRemoveStorage,checkUpdate",e.globalData.corp.ID,e.globalData.corpXcx.checkUpdate,"storageCheckUpdate:",o),console.log("isNeedRemoveStorage,checkUpdate",e.globalData.corp.ID,e.globalData.corpXcx.checkUpdate,"storageCheckUpdate:",o),console.log("checkUpdate",a),18!=a)if(19!=a){if(20==a){var t=wx.getUpdateManager();return console.log("updateManager",t),t.onCheckForUpdate((function(o){console.log("onCheckForUpdate res",o),n.info("onCheckForUpdate res",e.globalData.corp.ID,"onCheckForUpdate res:",o),o.hasUpdate})),t.onUpdateReady((function(e){console.log("onUpdateReady res",e),wx.showModal({title:"更新提示",content:"新版本已经准备好，点击确定重启小程序",showCancel:!1,success:function(e){e.confirm&&t.applyUpdate()}})})),void t.onUpdateFailed((function(o){console.error("onUpdateFailed res",e.globalData.corp.ID,"onUpdateFailed res:",o),n.error("onUpdateFailed res",e.globalData.corp.ID,"onUpdateFailed res:",o)}))}if(c.isNotNull(a)&&a!==o){try{wx.removeStorageSync(e.globalData.corp.appid+"_app"),wx.removeStorageSync(e.globalData.corp.appid+"_beginCity_list"),wx.removeStorageSync(e.globalData.corp.appid+"_coupon_obj"),wx.removeStorageSync(e.globalData.corp.appid+"_select_obj"),wx.removeStorageSync(e.globalData.corp.appid+"_ticket_obj"),wx.removeStorageSync(e.globalData.corp.appid+"_index_history_list"),wx.removeStorageSync(e.globalData.corp.appid+"_float_btn_site"),e.globalData.home_tab_list.forEach((function(o){wx.removeStorageSync(e.globalData.corp.appid+"_select_obj_"+o.component_index+o.sid)}));var r=wx.getStorageInfoSync();if(!r||!r.keys||!r.keys.length)return;for(var l=0,i=r.keys.length,s=0;s<i;s++)-1===r.keys[s].indexOf("_beginAddress")&&-1===r.keys[s].indexOf("_endAddress")||(wx.removeStorageSync(r.keys[s]),l+=1);n.info("isNeedRemoveStorage&&index2,targetCount:",l,"storageList:",r),console.log("isNeedRemoveStorage&&index2,targetCount:",l,"storageList:",r),e.getCorpXcxInfo()}catch(e){n.error("isNeedRemoveStorage clearStorageSync error",e)}n.info("isNeedRemoveStorage clearStorageSync 处理完成",e.globalData.corp.ID,e.globalData.corp.account)}wx.setStorageSync(e.globalData.corp.appid+"_storageCheckUpdate",a)}else wx.removeStorageSync(e.globalData.corp.appid+"_fullCalendar");else try{var p=wx.getStorageInfoSync();if(!p||!p.keys||!p.keys.length)return;for(var g=0,d=p.keys.length,u=0;u<d;u++)-1!==p.keys[u].indexOf("_index_history_list")&&(wx.removeStorageSync(p.keys[u]),g+=1);console.log("remove targetCount",g)}catch(e){console.log("err",e)}},isNeedGoWhiteListLogin:function(e){this.globalData.corpXcx.isWhiteList&&this.goWhiteListLogin()},goWhiteListLogin:function(){var e=this;return t(a().mark((function o(){var t,l,i,n;return a().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(t=e,l=wx.getStorageSync(t.globalData.corp.appid+"_whitelistObj"),console.log("whitelistObjStorage",l),!c.isNotNull(l)||!c.isNotNull(l.jobNum)){o.next=10;break}return i=wx.getStorageSync(t.globalData.corp.appid+"_openid"),n={action:"whiteList.login",open_id:i,jobNum:l.jobNum},o.next=8,r.requestPOST(n).then((function(e){console.log("whiteList pro",e);var o={isInWhiteList:e.success,jobNum:n.jobNum};wx.setStorageSync(t.globalData.corp.appid+"_whitelistObj",o),e.success||wx.redirectTo({url:"/package/whiteList/pages/whiteListLogin/whiteListLogin",fail:function(e){console.log("err",e)}})})).catch((function(e){console.log("whiteList.login err",e),wx.redirectTo({url:"/package/whiteList/pages/whiteListLogin/whiteListLogin",success:function(){c.showMsg(e.message)},fail:function(e){console.log("err",e)}})}));case 8:o.next=12;break;case 10:return wx.redirectTo({url:"/package/whiteList/pages/whiteListLogin/whiteListLogin",fail:function(e){console.log("err",e)}}),o.abrupt("return");case 12:case"end":return o.stop()}}),o)})))()},gotoIndex:function(e){wx.switchTab({url:this.globalData.corpXcx.tabBarHome,success:function(){e&&c.showMsg(e)},fail:function(e){console.log("gotoIndex fail",e)}})},gotoCx:function(e){wx.switchTab({url:"/pages/cx/cx",success:function(){e&&c.showMsg(e)}})},globalData:{networkType:"none",corp:{ID:"test",account:"",corpName:"亿路行",appid:l.appid,version:"1.0",index:"index4",interval:"interval",logoUrl:"https://static.ylxweb.com/upload/ylx/logo_l100.png",share_title:"专业城际巴士互联网订票平台，用户的首选！"},corpExt:{wx_show_residue:0},corpXcx:{checkUpdate:0,partner_enable:0,canRecharge:0,adEnable:0,orderRemark:0,adTel:"13726806988",tabBarHome:"/pages/index/index",shareCouponImgUrl:"https://static.ylxweb.com/web/touch/images/share20230523.png",indexSupportName:"技术支持：亿路行",primary:"blue"},dictionary:{interval_tel_name:"随车电话",interval_leave_name:"出发",address_tel_name:"站点电话",order_remarks_name:"备注",order_confirm_name:"确认坐车"},shareData:{title:"专业城际巴士互联网订票平台，用户的首选！",path:"/pages/index/index",imageUrl:"https://static.ylxweb.com/web/touch/images/share20230523.png"},userInfo:o({},l.defaultUserInfo),systemInfo:{theme:"light"},openid:void 0,sourceid:"",timerTem:void 0,getPhoneNumberOpenType:"getPhoneNumber",skinClassName:["jtcx","xxbs"].includes(i.corpID)&&Date.now()<1772553599e3?"SpringFestival":""},onShow:function(e){},onHide:function(){clearTimeout(this.globalData.timerTem)},onError:function(e){console.log("onError:",e),this.gotoIndex("小程序出现错误 onError",e),n.error("appjs，onError",e)},onPageNotFound:function(e){console.log("onPageNotFound:",e),this.gotoIndex("找不到页面，请检查配置，或升级小程序"),n.error("appjs，onPageNotFound",e)},config:l,network:r,util:c,doLogin:function(e,o){var a=this;o="boolean"==typeof o&&o,wx.checkSession({success:function(t){var r=wx.getStorageSync(a.globalData.corp.appid+"_openid");console.log(r),c.isNotNull(r)&&!o?(a.globalData.openid=r,"function"==typeof e&&e(r),a.umengFun(r)):(n.error("appjs-doLogin: isForceLogin-".concat(o)),wx.login({success:function(o){if(o.code){console.log(o);var t={action:"weixin.jscode2session",wxkfpt:"1",corpID:a.globalData.corp.ID,appid:a.globalData.corp.appid,js_code:o.code};a.network.request("/api/wg.do",t,(function(o){o.success&&(c.isNotNull(o.data.openid)&&(wx.setStorageSync(a.globalData.corp.appid+"_openid",o.data.openid),a.globalData.openid=o.data.openid,a.umengFun(o.data.openid)),"function"==typeof e&&e(o.data.openid))}))}else a.util.showMsg("登录失败！",o.errMsg),console.log("登录失败！",o.errMsg)},fail:function(e){console.log("wxlogin fail",e),wx.removeStorageSync(a.globalData.corp.appid+"_openid")}}))},fail:function(){wx.login({success:function(o){if(o.code){console.log(o);var t={action:"weixin.jscode2session",wxkfpt:"1",corpID:a.globalData.corp.ID,appid:a.globalData.corp.appid,js_code:o.code};a.network.request("/api/wg.do",t,(function(o){o.success&&(console.log(o.data),c.isNotNull(o.data.openid)&&(wx.setStorageSync(a.globalData.corp.appid+"_openid",o.data.openid),a.globalData.openid=o.data.openid,a.umengFun(o.data.openid)),"function"==typeof e&&e(o.data.openid))}))}else a.util.showMsg("登录失败！",o.errMsg),console.log("登录失败！",o.errMsg)},fail:function(e){console.log("wxlogin fail",e),wx.removeStorageSync(a.globalData.corp.appid+"_openid")}})}})},getCorpXcxInfo:function(a){console.log("getCorpXcxInfo 使用扩展参数，开放平台 start，extConfig",i),this.util.isNotNull(i.corpID)?(l.staticHost=i.staticUrl,this.globalData.corp.ID=i.corpID,this.globalData.corp.appid=i.appid,this.globalData.corp.account=i.account,this.globalData.corp.corpName=i.corpName,this.globalData.corp.share_title=i.share_title,this.globalData.corp.logoUrl=i.logoUrl,this.globalData.corp.version=i.version,this.globalData.corp.index=i.index,this.globalData.corp.interval=i.interval,this.globalData.corp.userCenter=i.corpXcx.userCenter,this.globalData.corpExt.wx_show_residue=i.corpExt.wx_show_residue,this.globalData.corpXcx=o({},i.corpXcx),this.globalData.corpXcx.checkUpdate=i.corpXcx.checkUpdate,this.globalData.corpXcx.partner_enable=i.corpXcx.partner_enable,this.globalData.corpXcx.canRecharge=i.corpXcx.canRecharge,this.globalData.corpXcx.canInvoice=i.corpXcx.canInvoice,this.globalData.corpXcx.canMember=i.corpXcx.canMember,this.globalData.corpXcx.adEnable=i.corpXcx.adEnable,this.globalData.corpXcx.orderRemark=i.corpXcx.orderRemark,this.globalData.corpXcx.orderRemarkName=i.corpXcx.orderRemarkName,this.globalData.corpXcx.adTel=i.corpXcx.adTel,this.globalData.corpXcx.tabBarHome=i.corpXcx.tabBarHome,this.globalData.corpXcx.hotLineType=i.corpXcx.hotLineType,this.globalData.corpXcxExt=o({},i.corpXcxExt),this.globalData.corpXcx.queryIntervalType=this.globalData.corpXcxExt.queryIntervalType||0,this.globalData.corpXcx.globalStyle=this.globalData.corpXcxExt.globalStyle,["xxbs"].includes(i.corpID)||(["ycx"].includes(i.corpID)?["wxbbc7a53b43baedc0","wx44d254291f27af7c"].includes(i.appid)&&(this.globalData.corpXcx.queryIntervalType=1):["sdcd"].includes(i.corpID)?["wx6555bdab01520adc"].includes(i.appid)&&(this.globalData.corpXcx.queryIntervalType=1):["hhcd"].includes(i.corpID)?["wxee39be893ccbb1c4"].includes(i.appid)&&(this.globalData.corpXcx.queryIntervalType=2):["yzcx"].includes(i.corpID)?["wx5ad64406918fe61d"].includes(i.appid)&&(this.globalData.corpXcx.queryIntervalType=1):["jixbs"].includes(i.corpID)?["wx0a4ddcb274c97936"].includes(i.appid)&&(this.globalData.corpXcx.queryIntervalType=1):["hzswcd"].includes(i.corpID)?["wxf9ad7df1046143f8"].includes(i.appid)&&(this.globalData.corpXcx.queryIntervalType=1):["xyx"].includes(i.corpID)?["wx3753e6d74897a623"].includes(i.appid)&&(this.globalData.corpXcx.queryIntervalType=1):["wxbs"].includes(i.corpID)?["wx97020b2eef8e9f60"].includes(i.appid)&&(this.globalData.corpXcx.queryIntervalType=1):["rczbus"].includes(i.corpID)?["wxb492364bfcb858c5"].includes(i.appid)&&(this.globalData.corpXcx.queryIntervalType=1):["yunlcx"].includes(i.corpID)?["wx94513a34a776a97f"].includes(i.appid)&&(this.globalData.corpXcx.queryIntervalType=1):["leyou"].includes(i.corpID)?["wx64c8dcea14cc141d"].includes(i.appid)&&(this.globalData.corpXcx.queryIntervalType=1):["ddbus","xyx","bbzgx"].includes(i.corpID)?this.globalData.corpXcx.queryIntervalType=1:["xhzb"].includes(i.corpID)?this.globalData.corpXcx.globalStyle="Malaysia":["cybus"].includes(i.corpID)&&(this.globalData.corpXcx.queryIntervalType=1)),["index53"].includes(i.index)&&(this.globalData.corpXcx.queryIntervalType=1),this.globalData.corpXcxExt.selectCityUrl="/package/index2/pages/select_city/select_city",0==this.globalData.corpXcx.queryIntervalType?"02"==this.globalData.corpXcxExt.selectCityStyleType&&(this.globalData.corpXcxExt.selectCityUrl="/package/index2/pages/selectCity2/selectCity2"):1==this.globalData.corpXcx.queryIntervalType?this.globalData.corpXcxExt.selectCityUrl="/package/index2/pages/selectAdDivision/selectAdDivision":2==this.globalData.corpXcx.queryIntervalType&&(this.globalData.corpXcxExt.selectCityUrl="/package/index2/pages/selectArea/selectArea"),this.globalData.corpXcx.shareCouponImgUrl=i.corpXcx.shareCouponImgUrl,["jobs","clcwxyztc","yrxybs","jtcx","lbscx"].includes(i.corpID)?this.globalData.corpXcx.shareCouponImgUrl="".concat(l.staticHost,"/web/xcx/images/shareTimeLineImage/").concat(i.corpID,".jpg?v=3"):["xcbus"].includes(i.corpID)&&(this.globalData.corpXcx.shareCouponImgUrl="".concat(l.staticHost,"/web/xcx/images/shareTimeLineImage/").concat(i.corpID,"_").concat(i.appid,".jpg?v=3")),this.globalData.corpXcx.indexTel=i.corpXcx.indexTel,this.globalData.corpXcx.name=i.corpXcx.name,this.globalData.corpXcx.principalName=i.corpXcx.principalName,this.globalData.corpXcx.primary=i.corpXcx.primaryColor||l.primaryColor||"blue",this.globalData.corpXcx.secondaryColor="orange"==this.globalData.corpXcx.primary?"ceruleanblue":i.corpXcx.secondaryColor||l.secondaryColor||"orange",this.globalData.corpXcx.customerWx=i.corpXcx.customerWx,this.globalData.corpXcx.supportTel=i.corpXcx.supportTel,this.globalData.corpXcx.supportTelName=i.corpXcx.supportTelName,this.globalData.corpXcx.partnerTitleName=i.corpXcx.partnerTitleName,this.globalData.corpXcx.canShowGetPhoneOrder=i.corpXcx.canShowGetPhoneOrder,this.globalData.corpXcx.isWhiteList=i.corpXcx.isWhiteList,this.globalData.corpXcx.isInsureOrder=i.corpXcx.isInsureOrder,this.globalData.corpXcx.canPassengerUrgent=i.corpXcx.canPassengerUrgent,this.globalData.dictionary.interval_tel_name=i.dictionary.interval_tel_name,this.globalData.dictionary.interval_leave_name=i.dictionary.interval_leave_name,this.globalData.dictionary.address_tel_name=i.dictionary.address_tel_name,this.globalData.dictionary.order_confirm_name=i.dictionary.order_confirm_name,this.globalData.shareData.path=i.corpXcx.tabBarHome,this.globalData.shareData.title=i.share_title,this.globalData.home_tab_list=i.home_tab_list,this.globalData.corpXcx.wxHomeBtnPage="object"==e(i.corpXcx.wxHomeBtnPage)?i.corpXcx.wxHomeBtnPage:{},this.config.corpSupplierMap={},Array.isArray(i.corp_supplier_map)&&i.corp_supplier_map.length&&(this.config.corpSupplierMap[i.corpID]=i.corp_supplier_map),"function"==typeof a&&a()):(console.log("appjs，getCorpXcxInfo 获取扩展参数失败，extConfig.corpID 为空，",i.corpID),n.error("appjs，getCorpXcxInfo 获取扩展参数失败，extConfig.corpID 为空，",i.corpID)),console.log("getCorpXcxInfo 使用扩展参数，开放平台 end",this.globalData)},getSystemInfoFun:function(){var e=wx.getSystemInfoSync();console.log("getSystemInfoFun systemInfo",e),this.globalData.systemInfo=e||{};var o=wx.getMenuButtonBoundingClientRect();o?(this.globalData.systemInfo.Custom=o,this.globalData.systemInfo.CustomBar=o.bottom+o.top-this.globalData.systemInfo.statusBarHeight):this.globalData.systemInfo.CustomBar=this.globalData.systemInfo.statusBarHeight+50,this.globalData.getPhoneNumberOpenType=this.isSupportFun("2.32.3")?"getPhoneNumber|agreePrivacyAuthorization":"getPhoneNumber"},compareVersion:function(e,o){e=e.split("."),o=o.split(".");for(var a=Math.max(e.length,o.length);e.length<a;)e.push("0");for(;o.length<a;)o.push("0");for(var t=0;t<a;t++){var r=parseInt(e[t]),c=parseInt(o[t]);if(r>c)return!0;if(r<c)return!1}return!0},isSupportFun:function(e){return this.compareVersion(this.globalData.systemInfo.SDKVersion,e)},umengFun:function(e){try{wx.uma.setOpenid(e)}catch(e){console.log(e)}},_vibration:function(){wx.vibrateShort({complete:function(e){console.log("按钮振动")}})},umengConfig:{appKey:"60055991f1eb4f3f9b641e08",useOpenid:!1,autoGetOpenid:!1,debug:!1,uploadUserInfo:!1}});
},{isPage:false,isComponent:false,currentFile:'app.js'});require("app.js");$gwx_XC_0=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
},{isPage:false,isComponent:true,currentFile:'components/bannerNotice/bannerNotice.js'});require("components/bannerNotice/bannerNotice.js");$gwx_XC_1=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
},{isPage:false,isComponent:true,currentFile:'components/calendarSwiper/calendarSwiper.js'});require("components/calendarSwiper/calendarSwiper.js");$gwx_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_2=true;
var x=['./components/privacyPopup/privacyPopup.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_2_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_2";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_2();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/privacyPopup/privacyPopup.wxml'] = [$gwx_XC_2, './components/privacyPopup/privacyPopup.wxml'];else __wxAppCode__['components/privacyPopup/privacyPopup.wxml'] = $gwx_XC_2( './components/privacyPopup/privacyPopup.wxml' );
	;__wxRoute = "components/privacyPopup/privacyPopup";__wxRouteBegin = true;__wxAppCurrentFile__="components/privacyPopup/privacyPopup.js";define("components/privacyPopup/privacyPopup.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp(),o=require("../../C6AC61C49105A88CA0CA09C31864FB65.js").isSupportFun;Component({data:{primary:t.globalData.corpXcx.primary,corpName:t.globalData.corp.corpName,showPrivacy:!1,privacyContractName:"《隐私政策》"},pageLifetimes:{show:function(){var t=this;o("2.32.3")&&wx.getPrivacySetting({success:function(o){console.log("res",o),"getPrivacySetting:ok"==o.errMsg&&t.setData({privacyContractName:o.privacyContractName,showPrivacy:o.needAuthorization})}})}},lifetimes:{},methods:{handleDisagree:function(e){this.triggerEvent("disagree"),wx.showModal({title:"若不同意，将无法继续为你提供服务",content:"",confirmText:"同意授权",cancelText:"仍不同意",complete:function(e){e.cancel?o("2.17.3")?wx.exitMiniProgram({success:function(t){console.log("res",t)},fail:function(t){console.log("err",t)}}):t.util.showMsg("请手动退出小程序"):e.confirm}})},handleAgree:function(t){this.triggerEvent("agree"),this.setData({showPrivacy:!1})},openPrivacyContract:function(){wx.openPrivacyContract?wx.openPrivacyContract({success:function(t){console.log("openPrivacyContract success")},fail:function(t){console.error("openPrivacyContract fail",t)}}):t.util.showMsg("当前版本不支持此功能")},handleCatchtouchMove:function(){}}});
},{isPage:false,isComponent:true,currentFile:'components/privacyPopup/privacyPopup.js'});require("components/privacyPopup/privacyPopup.js");$gwx_XC_3=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
},{isPage:false,isComponent:true,currentFile:'components/realNamePassenger/realNamePassenger.js'});require("components/realNamePassenger/realNamePassenger.js");$gwx_XC_4=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_4 || [];
function gz$gwx_XC_4_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'notice-style2 bg-'],[[7],[3,'primary']]])
Z([3,'white'])
Z([[7],[3,'showAddress']])
Z([a,[3,'nav-container flex grid col-'],[[7],[3,'navCol']],[3,' bg-white shadow-radius-box']])
Z([[7],[3,'canInvoice']])
Z([[7],[3,'showServe']])
Z([[7],[3,'showSchoolBus']])
Z(z[6])
Z(z[6])
Z([3,'handleClickHotLineBtn'])
Z([3,'handleOnHotLineLoad'])
Z([3,'margin-lr-26'])
Z([[7],[3,'hotLineCol']])
Z([3,'radius-10'])
Z([3,'hideModal'])
Z([a,[3,'cu-modal bottom-modal '],[[2,'?:'],[[2,'=='],[[7],[3,'modalName']],[1,'select_addr_modal']],[1,'show'],[1,'']]])
Z([3,'cu-dialog'])
Z([3,'scroll-box'])
Z([3,'true'])
Z([[7],[3,'showMoreTips']])
Z([[6],[[7],[3,'adressResult']],[3,'length']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_4=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_4=true;
var x=['./package/index21/index21.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_4_1()
var aRB=_mz(z,'banner-notice',['noticeClass',0,'noticeTextColor',1],[],e,s,gg)
_(r,aRB)
var lQB=_v()
_(r,lQB)
if(_oz(z,2,e,s,gg)){lQB.wxVkey=1
}
var tSB=_n('view')
_rz(z,tSB,'class',3,e,s,gg)
var eTB=_v()
_(tSB,eTB)
if(_oz(z,4,e,s,gg)){eTB.wxVkey=1
}
var bUB=_v()
_(tSB,bUB)
if(_oz(z,5,e,s,gg)){bUB.wxVkey=1
}
var oVB=_v()
_(tSB,oVB)
if(_oz(z,6,e,s,gg)){oVB.wxVkey=1
}
var xWB=_v()
_(tSB,xWB)
if(_oz(z,7,e,s,gg)){xWB.wxVkey=1
}
var oXB=_v()
_(tSB,oXB)
if(_oz(z,8,e,s,gg)){oXB.wxVkey=1
}
eTB.wxXCkey=1
bUB.wxXCkey=1
oVB.wxXCkey=1
xWB.wxXCkey=1
oXB.wxXCkey=1
_(r,tSB)
var fYB=_mz(z,'hot-line',['bind:clickHotLineBtn',9,'bind:onHotLineLoad',1,'hotLineBoxClass',2,'hotLineCol',3,'hotLineItemClass',4],[],e,s,gg)
_(r,fYB)
var cZB=_mz(z,'view',['bindtap',14,'class',1],[],e,s,gg)
var h1B=_mz(z,'view',['catchtap',-1,'class',16],[],e,s,gg)
var o2B=_mz(z,'scroll-view',['class',17,'scrollY',1],[],e,s,gg)
var c3B=_v()
_(o2B,c3B)
if(_oz(z,19,e,s,gg)){c3B.wxVkey=1
}
var o4B=_v()
_(o2B,o4B)
if(_oz(z,20,e,s,gg)){o4B.wxVkey=1
}
c3B.wxXCkey=1
o4B.wxXCkey=1
_(h1B,o2B)
_(cZB,h1B)
_(r,cZB)
lQB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_4";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_4();	if (__vd_version_info__.delayedGwx) __wxAppCode__['package/index21/index21.wxml'] = [$gwx_XC_4, './package/index21/index21.wxml'];else __wxAppCode__['package/index21/index21.wxml'] = $gwx_XC_4( './package/index21/index21.wxml' );
	;__wxRoute = "package/index21/index21";__wxRouteBegin = true;__wxAppCurrentFile__="package/index21/index21.js";define("package/index21/index21.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=getApp(),t=require("../../3BE296B59105A88C5D84FEB2CFF3FB65.js"),a=t.getUserInfoStorage,i=t.getTelStorage;Component({properties:{select_obj:{type:Object,observer:function(e,t,a){this._select_objChange(e,t,a)}}},data:{primary:e.globalData.corpXcx.primary,staticHost:e.config.staticHost,canInvoice:e.globalData.corpXcx.canInvoice,select_obj:{beginCity:"请选择出发地",beginCityCode:"",beginCityName:"请选择",beginDisCode:"",beginDisName:"",endCity:"请选择到达地",endCityName:"请选择",endCityCode:"",endDisName:"",endDisCode:""},beginAddress:{ID:0,name:"请选择上车站点"},endAddress:{ID:0,name:"请选择下车站点"},tripDate:void 0,showDate:void 0,showAddress:!1,rotate:0,isChanging:!1,rotateKey:180,show_type:"modal",select_type:"begin",activeCode:"",btnQueryName:"查询",hotLineCol:2,navCol:3},methods:{_select_objChange:function(t,a,i){var s=t,o=!1;console.log("index2");try{if(s){e.util.isNull(s.beginCityName)&&(s.beginCityName="请选择"),e.util.isNull(s.endCityName)&&(s.endCityName="请选择"),o=!e.util.isNull(s.beginCityCode)&&"0000"!==s.beginCityCode&&!e.util.isNull(s.endCityCode),this.setData({showAddress:o,select_obj:s});var d=wx.getStorageSync("tripDate");console.log(d),e.util.isNotNull(d)&&this.setData({tripDate:d,showDate:e.util.formatDate(d)+" "+e.util.getWeekName(d)}),this._initAddressData(s)}}catch(e){console.log(e)}},_initAddressData:function(t){if(e.util.isNotNull(t.beginCityCode)&&e.util.isNotNull(t.endCityCode)){var a=e.globalData.corp.appid+"_"+t.beginCityCode+"_"+t.endCityCode;console.log(a);var i=wx.getStorageSync(a+"_beginAddress");console.log(i),e.util.isNotNull(i)&&e.util.isNull(t.beginAddressCode)&&(t.beginAddressCode=i.ID,t.beginAddressName=i.name);var s=wx.getStorageSync(a+"_endAddress");e.util.isNotNull(s)&&e.util.isNull(t.endAddressCode)&&(t.endAddressCode=s.ID,t.endAddressName=s.name),this.setData({select_obj:t})}},_selectBeginCity:function(t){wx.navigateTo({url:e.globalData.corpXcxExt.selectCityUrl+"?select=begin"})},_selectEndCity:function(t){if(e.util.isNull(this.data.select_obj.beginCityCode))e.util.showMsg("请先选择出发城市！");else{var a=this.data.select_obj;console.log(a),wx.setStorageSync(e.globalData.corp.appid+"_select_obj",a),wx.navigateTo({url:e.globalData.corpXcxExt.selectCityUrl+"?select=end"})}},_btn_query:function(t){if(e.globalData.corpXcx.toOtherAppid)e.util.goOtherMiniApp(e.globalData.corpXcx.toOtherAppid);else if(e.util.isNull(this.data.select_obj.beginCityCode))e.util.showMsg("请选择出发城市！");else if(e.util.isNull(this.data.select_obj.endCityCode))e.util.showMsg("请选择到达城市！");else if(e.util.isNull(this.data.select_obj.beginAddressCode))e.util.showMsg("请选择上车站点！");else if(e.util.isNull(this.data.select_obj.endAddressCode))e.util.showMsg("请选择下车站点！");else{var a={tripDate:this.data.tripDate,beginCityName:this.data.select_obj.beginCityName,beginCityCode:this.data.select_obj.beginCityCode,beginDisCode:this.data.select_obj.beginDisCode,beginDisName:this.data.select_obj.beginDisName,beginAddressCode:this.data.select_obj.beginAddressCode,beginAddressName:this.data.select_obj.beginAddressName,endCityCode:this.data.select_obj.endCityCode,endDisCode:this.data.select_obj.endDisCode,endDisName:this.data.select_obj.endDisName,endCityName:this.data.select_obj.endCityName,endAddressCode:this.data.select_obj.endAddressCode,endAddressName:this.data.select_obj.endAddressName};wx.setStorageSync(e.globalData.corp.appid+"_ticket_obj",a);var i=e.util.enQueryString(a);console.log("params",i);var s="/package/bus/pages/interval/interval?"+i;wx.navigateTo({url:s})}},_change:function(){var t=this;if(!t.data.isChanging){t.animation1(),clearTimeout(e.globalData.timerTem);var a=setTimeout((function(){t._do_change()}),200);e.globalData.timerTem=a}},_do_change:function(t){var a=this.data.select_obj.beginDisCode,i=this.data.select_obj.beginCityName,s=this.data.select_obj.beginCity,o=this.data.select_obj.beginCityCode,d=this.data.select_obj.beginDisName,n={beginCityName:this.data.select_obj.endCityName,beginCity:this.data.select_obj.endCity,beginDisCode:this.data.select_obj.endDisCode,beginDisName:this.data.select_obj.endDisName,beginCityCode:this.data.select_obj.endCityCode,beginAddressCode:"",beginAddressName:"请选择上车站点",endCity:s,endCityName:i,endCityCode:o,endDisCode:a,endDisName:d,endAddressCode:"",endAddressName:"请选择下车站点"};this.setData({select_obj:n}),this._initAddressData(n),wx.setStorageSync(e.globalData.corp.appid+"_select_obj",n),clearTimeout(e.globalData.timerTem)},animation1:function(){var e=this,t=180==e.data.rotateKey?-180:180;e.setData({rotateKey:t,isChanging:!0}),e.animate(".icon_change",[{rotate:0},{rotate:t}],400,(function(){e.clearAnimation(".icon_change",{rotate:!0})})),e.animate(".animationStartCity",[{opacity:1,translateX:0},{opacity:.2,translateX:150},{opacity:1,translateX:0}],400,(function(){e.clearAnimation(".animationStartCity",{opacity:!0,translateX:!0}),e.setData({isChanging:!1})})),e.animate(".animationEndCity",[{opacity:1,translateX:0},{opacity:.2,translateX:-150},{opacity:1,translateX:0}],400,(function(){console.log("动画完成 endCityName"),e.clearAnimation(".animationEndCity",{opacity:!0,translateX:!0})}))},_selectAddress:function(t){if(e.util.isNull(this.data.select_obj.beginCityCode))e.util.showMsg("请先选择出发城市！");else if(e.util.isNull(this.data.select_obj.endCityCode))e.util.showMsg("请先选择到达城市！");else{var a=t.currentTarget.dataset.cur_type;if("modal"==this.data.show_type){var i="选择上车站点",s="0",o=this.data.select_obj.beginAddressCode;"end"==a&&(i="选择下车站点",s="2",o=this.data.select_obj.endAddressCode),this.setData({select_type:a,modalName:"select_addr_modal",modalTitle:i,activeCode:o,areaResult:[],adressResult:[]}),this._loadLocationDate(s)}else"page"==this.data.show_type&&wx.navigateTo({url:"/package/index2/pages/select_address/select_address?select="+a})}},hideModal:function(e){this.setData({modalName:null})},_loadLocationDate:function(t){var a=this,i={action:"area.query_by_start_end",start_id:a.data.select_obj.beginCityCode,end_id:a.data.select_obj.endCityCode};e.network.request("/api/wg.do",i,(function(i){if(i.success){var s=i.data.location,o=i.data.area,d=[],n=[],l=[],r=[],c=s.length,g=0,b=o.length;if(b>0)for(var u=0;u<b;u++)0==o[u].areaId||(0==o[u].areaType&&(o[u].adresList=[],n.push(o[u])),2==o[u].areaType&&(o[u].adresList=[],r.push(o[u])));for(var C=0;C<c;C++){var _=s[C].areaId;if("0"==t&&0==s[C].locationType)if("0"==_)g+=1,d.push(s[C]);else for(var h=0;h<n.length;h++)if(_==n[h].ID){g+=1,n[h].adresList.push(s[C]);break}if("2"==t&&2==s[C].locationType)if("0"==_)g+=1,l.push(s[C]);else for(var p=0;p<r.length;p++)if(_==r[p].ID){g+=1,r[p].adresList.push(s[C]);break}}var y="col-2";g>30&&(y="col-3"),"hycx"==e.globalData.corp.ID&&(y="col-2");var m=!1;("col-2"==y&&g>16||"col-3"==y&&g>24)&&(m=!0);var D=a.data.select_type,N=[],f=[];"begin"==D?(N=n,f=d):"end"==D&&(N=r,f=l),a.setData({col:y,areaResult:N,adressResult:f,showMoreTips:m})}else e.util.showMsg(i.message)}))},selectAdressListOff:function(t){var a=wx.getStorageSync(e.globalData.corp.appid+"_select_obj");a||(a={});var i=this.data.select_type,s=e.globalData.corp.appid+"_"+a.beginCityCode+"_"+a.endCityCode;if("begin"==i){a.beginAddressCode=t.currentTarget.dataset.address_code,a.beginAddressName=t.currentTarget.dataset.address_name;var o={ID:t.currentTarget.dataset.address_code,name:t.currentTarget.dataset.address_name};wx.setStorageSync(s+"_beginAddress",o)}else if("end"==i){a.endAddressCode=t.currentTarget.dataset.address_code,a.endAddressName=t.currentTarget.dataset.address_name;var d={ID:t.currentTarget.dataset.address_code,name:t.currentTarget.dataset.address_name};wx.setStorageSync(s+"_endAddress",d)}this.setData({select_obj:a,modalName:null}),wx.setStorageSync(e.globalData.corp.appid+"_select_obj",a)},_selectDate:function(){if(e.globalData.corpXcx.toOtherAppid)e.util.goOtherMiniApp(e.globalData.corpXcx.toOtherAppid);else{var t=this.data.select_obj;if(e.util.isNull(t.beginCityCode))e.util.showMsg("请选择出发城市！");else if(e.util.isNull(t.endCityCode))e.util.showMsg("请选择到达城市！");else{var a={tripDate:this.data.tripDate,beginCityName:this.data.select_obj.beginCityName,beginCityCode:this.data.select_obj.beginCityCode,endCityCode:this.data.select_obj.endCityCode,endCityName:this.data.select_obj.endCityName},i=e.util.enQueryString(a);wx.navigateTo({url:"/package/index4/pages/select_date/select_date?go_index_flag=1&"+i})}}},handleClickHotLineBtn:function(t){console.log("toOtherAppid",e.globalData.corpXcx.toOtherAppid);e.globalData.corpXcx.toOtherAppid?e.util.goOtherMiniApp(e.globalData.corpXcx.toOtherAppid):this._initAddressData(t.detail.ticket_obj)},handleOnHotLineLoad:function(e){console.log(e),e.detail.success&&this._initLine()},_initLine:function(){if(e.util.isNull(this.data.select_obj.beginCityCode)&&e.util.isNull(this.data.select_obj.endCityCode)){var t=wx.getStorageSync(e.globalData.corp.appid+"_line_dh_list");if(t&&t.length>1){var a=wx.getStorageSync(e.globalData.corp.appid+"_select_obj");a||(a={}),a.beginCityCode=t[0].begin_city_code,a.beginCityName=t[0].begin_city_name,a.endCityName=t[0].end_city_name,a.endCityCode=t[0].end_city_code,a.beginAddressCode="",a.beginAddressName="请选择上车站点",a.endAddressCode="",a.endAddressName="请选择下车站点",wx.setStorageSync(e.globalData.corp.appid+"_select_obj",a),this.setData({showAddress:!0,select_obj:a}),this._initAddressData(a)}}},geto_feedback:function(){wx.navigateTo({url:"/package/user_center/pages/feedback/feedback"})},getoInvoice:function(){wx.navigateTo({url:"/package/user_center_preload/pages/invoiceIndex/invoiceIndex"})},makePhoneCallBtn:function(){e.util.isNull(e.globalData.corpXcx.indexTel)?e.util.showMsg("未设置号码"):e.util.makePhoneCallArray(e.globalData.corpXcx.indexTel,"一键拨号")},codingBtn:function(){e.util.showMsg("开发中")},goto_coupon_list:function(){this.checkTel("/package/user_center/pages/coupon_list/coupon_list?hideSelect=true",1,0)},checkTel:function(e,t,s){var o=i(),d=a();console.log(o);var n=e;(t&&!o||s&&!d.serverHaveAvatar)&&(n="/package/pt_login/pages/pt_login2/pt_login2?returnUrl="+(e=encodeURIComponent(e))+"&isNeedTel="+t+"&isNeedAvatar="+s),wx.navigateTo({url:n})}},lifetimes:{attached:function(){var t=e.globalData.corp.ID,a=this.data.btnQueryName,i=this.data.hotLineCol;"bbzszh"==t?a="订票":"ttxy"==t?a="查询车票":"zzcd"==t&&(i=1),this.setData({btnQueryName:a,hotLineCol:i,showServe:!1,showSchoolBus:!1,navCol:3})},ready:function(){try{var t=wx.getStorageSync(e.globalData.corp.appid+"_select_obj");t&&(e.util.isNull(t.beginCityName)&&(t.beginCityName="请选择"),e.util.isNull(t.endCityName)&&(t.endCityName="请选择"),this.setData({showAddress:!0,select_obj:t,rotate:"180-load"})),clearTimeout(e.globalData.timerTem)}catch(e){console.log(e)}var a=e.util.formatShortTime(new Date);this.setData({corpid:e.globalData.corp.ID,tripDate:a,showDate:e.util.formatDate(a)+" "+e.util.getWeekName(a)}),wx.setStorageSync("tripDate",a)},detached:function(){clearTimeout(e.globalData.timerTem)}}});
},{isPage:false,isComponent:true,currentFile:'package/index21/index21.js'});require("package/index21/index21.js");$gwx_XC_5=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_5 || [];
function gz$gwx_XC_5_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'clickLocation'])
Z(z[0])
Z([3,'bindregionchange'])
Z([3,'map'])
Z([[7],[3,'latitude']])
Z([[7],[3,'longitude']])
Z([[7],[3,'markers']])
Z([[7],[3,'polygons']])
Z([[7],[3,'scale']])
Z([3,'width:100%;height:calc(100vh - 920rpx);'])
Z([[2,'||'],[[2,'=='],[[7],[3,'markerId']],[[2,'-'],[1,1]]],[[2,'!'],[[7],[3,'hasOptionalResult']]]])
Z([[7],[3,'isMapReady']])
Z([3,'control-panel'])
Z([[7],[3,'showTopNotice']])
Z([3,'select-box bg-white'])
Z(z[13])
Z([3,'handleClickHistoryBtn'])
Z([3,'index-search-history'])
Z([3,'latlng'])
Z([[2,'=='],[[7],[3,'corpid']],[1,'ddcx']])
Z([[7],[3,'indexSupportName']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
}
function gz$gwx_XC_5_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_5_2)return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_2
__WXML_GLOBAL__.ops_cached.$gwx_XC_5_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'index']],[1,'index1']])
Z([[7],[3,'select_obj']])
Z([[2,'=='],[[7],[3,'index']],[1,'index11']])
Z([[7],[3,'currentIndex']])
Z(z[1])
Z([[2,'=='],[[7],[3,'index']],[1,'index2']])
Z([3,'padding-lr-lg'])
Z(z[1])
Z([[2,'=='],[[7],[3,'index']],[1,'index21']])
Z(z[1])
Z([[2,'=='],[[7],[3,'index']],[1,'index3']])
Z(z[1])
Z([[2,'=='],[[7],[3,'index']],[1,'index4']])
Z([[7],[3,'bannerPosition']])
Z([3,'index-search-component'])
Z([3,'margin-bottom-sm padding-lr-lg'])
Z(z[1])
Z([[2,'=='],[[7],[3,'index']],[1,'index41']])
Z(z[13])
Z(z[14])
Z([[2,'=='],[[7],[3,'index']],[1,'index42']])
Z(z[13])
Z(z[14])
Z([3,'padding-lr-sm'])
Z([3,'bg-white margin-lr-24 radius-36'])
Z([3,'radius-16 bg-default-blue'])
Z(z[1])
Z([3,'2'])
Z([1,true])
Z([[2,'=='],[[7],[3,'index']],[1,'index43']])
Z(z[13])
Z(z[14])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[1])
Z(z[27])
Z(z[28])
Z([[2,'=='],[[7],[3,'index']],[1,'index5']])
Z(z[13])
Z([3,'index5-component index-search-component'])
Z(z[1])
Z([[2,'=='],[[7],[3,'index']],[1,'index51']])
Z(z[13])
Z(z[14])
Z(z[1])
Z([[2,'=='],[[7],[3,'index']],[1,'index512']])
Z([3,'margin-bottom margin-lr-24'])
Z([3,'radius-14'])
Z(z[48])
Z(z[13])
Z([3,'radius-10'])
Z(z[14])
Z(z[23])
Z([3,'bg-white margin-lr-24 radius-14'])
Z([3,'radius-14 bg-default-blue'])
Z([3,'margin-bottom margin-lr-sm padding-lr-28 padding-top-28 radius-14 shadow bordrer-12-ghostWhite'])
Z([3,'hide'])
Z([3,'full-screen-popupModel-notes-dialog'])
Z([3,'702'])
Z(z[1])
Z([1,false])
Z(z[27])
Z(z[28])
Z([[2,'=='],[[7],[3,'index']],[1,'index52']])
Z(z[13])
Z(z[14])
Z(z[1])
Z([[2,'=='],[[7],[3,'index']],[1,'index53']])
Z(z[13])
Z(z[40])
Z(z[1])
Z([[2,'=='],[[7],[3,'index']],[1,'indexNav']])
Z(z[1])
Z([[2,'=='],[[7],[3,'index']],[1,'indexHotLine']])
Z([3,'banner-notice'])
Z([3,'bg-white'])
Z([[2,'=='],[[7],[3,'index']],[1,'indexHotLineCollege']])
Z(z[75])
Z(z[76])
Z([[2,'=='],[[7],[3,'index']],[1,'indexStop']])
Z([3,'294'])
Z([a,[3,'bg-'],[[7],[3,'primary']],[3,' light round margin-top-sm padding-tb-xs padding-lr-sm']])
Z(z[59])
Z([[2,'=='],[[7],[3,'index']],[1,'index6']])
Z(z[13])
Z(z[14])
Z(z[1])
Z([[2,'=='],[[7],[3,'index']],[1,'indexHbcx']])
Z(z[1])
Z([[2,'=='],[[7],[3,'index']],[1,'indexSkcx']])
Z(z[13])
Z(z[14])
Z(z[1])
Z([[2,'=='],[[7],[3,'index']],[1,'indexHhzwss']])
Z(z[1])
Z([[2,'=='],[[7],[3,'index']],[1,'indexWs']])
Z(z[1])
Z([[2,'=='],[[7],[3,'index']],[1,'indexOyky']])
Z(z[1])
Z([[2,'=='],[[7],[3,'index']],[1,'indexBzly']])
Z(z[1])
Z([[2,'=='],[[7],[3,'index']],[1,'indexCar1']])
Z(z[61])
Z([[2,'=='],[[7],[3,'index']],[1,'indexCar2']])
Z(z[61])
Z([[2,'=='],[[7],[3,'index']],[1,'indexCar3']])
Z(z[61])
Z([[2,'=='],[[7],[3,'index']],[1,'indexDh2']])
Z([[2,'=='],[[7],[3,'index']],[1,'0']])
Z([[2,'!='],[[7],[3,'index']],[1,'0']])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,1]])
Z([3,'handleClickHotLineBtn'])
Z([[7],[3,'hotLineBoxClass']])
Z([[7],[3,'hotLineCol']])
Z([[7],[3,'hotLineContainerClass']])
Z([[7],[3,'hotLineItemClass']])
Z([[7],[3,'showHotLineTitleStyle']])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,12]])
Z(z[112])
Z(z[113])
Z(z[114])
Z(z[115])
Z(z[116])
Z(z[117])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,2]])
Z(z[112])
Z(z[113])
Z(z[114])
Z([a,z[115],[3,' padding-top-sm']])
Z(z[116])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,22]])
Z([3,'1'])
Z(z[27])
Z(z[112])
Z(z[113])
Z(z[114])
Z(z[115])
Z(z[116])
Z(z[117])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,3]])
Z(z[112])
Z(z[113])
Z(z[114])
Z(z[115])
Z(z[116])
Z([[7],[3,'isShowIndexTel']])
Z([3,'round'])
Z([[7],[3,'indexTel2']])
Z(z[147])
Z(z[148])
Z([3,'index-float-btn'])
Z(z[61])
Z([3,'home'])
Z([[7],[3,'showContactStaffBtn']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_2);return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_2
}
__WXML_GLOBAL__.ops_set.$gwx_XC_5=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_5=true;
var x=['./package/indexCar1/indexCar1.wxml','./pages/index/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_5_1()
var t7B=_mz(z,'map',['showLocation',-1,'bindcallouttap',0,'bindmarkertap',1,'bindregionchange',1,'id',2,'latitude',3,'longitude',4,'markers',5,'polygons',6,'scale',7,'style',8],[],e,s,gg)
var e8B=_v()
_(t7B,e8B)
if(_oz(z,10,e,s,gg)){e8B.wxVkey=1
}
e8B.wxXCkey=1
_(r,t7B)
var a6B=_v()
_(r,a6B)
if(_oz(z,11,e,s,gg)){a6B.wxVkey=1
}
var b9B=_n('view')
_rz(z,b9B,'class',12,e,s,gg)
var o0B=_v()
_(b9B,o0B)
if(_oz(z,13,e,s,gg)){o0B.wxVkey=1
}
var xAC=_n('view')
_rz(z,xAC,'class',14,e,s,gg)
var oBC=_v()
_(xAC,oBC)
if(_oz(z,15,e,s,gg)){oBC.wxVkey=1
}
var hEC=_mz(z,'index-search-history',['bind:clickHistoryBtn',16,'class',1,'historyKey',2],[],e,s,gg)
_(xAC,hEC)
var fCC=_v()
_(xAC,fCC)
if(_oz(z,19,e,s,gg)){fCC.wxVkey=1
}
var cDC=_v()
_(xAC,cDC)
if(_oz(z,20,e,s,gg)){cDC.wxVkey=1
}
oBC.wxXCkey=1
fCC.wxXCkey=1
cDC.wxXCkey=1
_(b9B,xAC)
o0B.wxXCkey=1
_(r,b9B)
var oFC=_n('privacy-popup')
_(r,oFC)
a6B.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_XC_5_2()
var oHC=_v()
_(r,oHC)
if(_oz(z,0,e,s,gg)){oHC.wxVkey=1
var tKC=_n('index1-component')
_rz(z,tKC,'select_obj',1,e,s,gg)
_(oHC,tKC)
}
else if(_oz(z,2,e,s,gg)){oHC.wxVkey=2
var eLC=_mz(z,'index11-component',['currentIndex',3,'select_obj',1],[],e,s,gg)
_(oHC,eLC)
}
else if(_oz(z,5,e,s,gg)){oHC.wxVkey=3
var bMC=_mz(z,'index2-component',['mainClass',6,'select_obj',1],[],e,s,gg)
_(oHC,bMC)
}
else if(_oz(z,8,e,s,gg)){oHC.wxVkey=4
var oNC=_n('index21-component')
_rz(z,oNC,'select_obj',9,e,s,gg)
_(oHC,oNC)
}
else if(_oz(z,10,e,s,gg)){oHC.wxVkey=5
var xOC=_n('index3-component')
_rz(z,xOC,'select_obj',11,e,s,gg)
_(oHC,xOC)
}
else if(_oz(z,12,e,s,gg)){oHC.wxVkey=6
var oPC=_mz(z,'index4-component',['bannerPosition',13,'class',1,'mainClass',2,'select_obj',3],[],e,s,gg)
_(oHC,oPC)
}
else if(_oz(z,17,e,s,gg)){oHC.wxVkey=7
var fQC=_mz(z,'index41-component',['bannerPosition',18,'class',1],[],e,s,gg)
_(oHC,fQC)
}
else if(_oz(z,20,e,s,gg)){oHC.wxVkey=8
var cRC=_mz(z,'index42-component',['bannerPosition',21,'class',1,'hotLineBoxClass',2,'hotLineContainerClass',3,'hotLineItemClass',4,'select_obj',5,'showHotLineTitleStyle',6,'showMyNotice',7],[],e,s,gg)
_(oHC,cRC)
}
else if(_oz(z,29,e,s,gg)){oHC.wxVkey=9
var hSC=_mz(z,'index43-component',['bannerPosition',30,'class',1,'hotLineBoxClass',2,'hotLineContainerClass',3,'hotLineItemClass',4,'select_obj',5,'showHotLineTitleStyle',6,'showMyNotice',7],[],e,s,gg)
_(oHC,hSC)
}
else if(_oz(z,38,e,s,gg)){oHC.wxVkey=10
var oTC=_mz(z,'index5-component',['bannerPosition',39,'class',1,'select_obj',2],[],e,s,gg)
_(oHC,oTC)
}
else if(_oz(z,42,e,s,gg)){oHC.wxVkey=11
var cUC=_mz(z,'index51-component',['bannerPosition',43,'class',1,'select_obj',2],[],e,s,gg)
_(oHC,cUC)
}
else if(_oz(z,46,e,s,gg)){oHC.wxVkey=12
var oVC=_mz(z,'index512-component',['bannerBoxClass',47,'bannerClass',1,'bannerImageClass',2,'bannerPosition',3,'btnClass',4,'class',5,'hotLineBoxClass',6,'hotLineContainerClass',7,'hotLineItemClass',8,'mainClass',9,'noticeClass',10,'noticePopupDialogClass',11,'screenWidth',12,'select_obj',13,'showCityTitle',14,'showHotLineTitleStyle',15,'showMyNotice',16],[],e,s,gg)
_(oHC,oVC)
}
else if(_oz(z,64,e,s,gg)){oHC.wxVkey=13
var lWC=_mz(z,'index52-component',['bannerPosition',65,'class',1,'select_obj',2],[],e,s,gg)
_(oHC,lWC)
}
else if(_oz(z,68,e,s,gg)){oHC.wxVkey=14
var aXC=_mz(z,'index53-component',['bannerPosition',69,'class',1,'select_obj',2],[],e,s,gg)
_(oHC,aXC)
}
else if(_oz(z,72,e,s,gg)){oHC.wxVkey=15
var tYC=_n('indexNav-component')
_rz(z,tYC,'select_obj',73,e,s,gg)
_(oHC,tYC)
}
else if(_oz(z,74,e,s,gg)){oHC.wxVkey=16
var eZC=_mz(z,'banner-notice',['class',75,'noticeClass',1],[],e,s,gg)
_(oHC,eZC)
}
else if(_oz(z,77,e,s,gg)){oHC.wxVkey=17
var b1C=_mz(z,'banner-notice',['class',78,'noticeClass',1],[],e,s,gg)
_(oHC,b1C)
}
else if(_oz(z,80,e,s,gg)){oHC.wxVkey=18
var o2C=_mz(z,'indexStop-component',['firstBannerHeight',81,'noticeClass',1,'screenWidth',2],[],e,s,gg)
_(oHC,o2C)
}
else if(_oz(z,84,e,s,gg)){oHC.wxVkey=19
var x3C=_mz(z,'index6-component',['bannerPosition',85,'class',1,'select_obj',2],[],e,s,gg)
_(oHC,x3C)
}
else if(_oz(z,88,e,s,gg)){oHC.wxVkey=20
var o4C=_n('indexHbcx-component')
_rz(z,o4C,'select_obj',89,e,s,gg)
_(oHC,o4C)
}
else if(_oz(z,90,e,s,gg)){oHC.wxVkey=21
var f5C=_mz(z,'indexSkcx-component',['bannerPosition',91,'class',1,'select_obj',2],[],e,s,gg)
_(oHC,f5C)
}
else if(_oz(z,94,e,s,gg)){oHC.wxVkey=22
var c6C=_n('indexHhzwss-component')
_rz(z,c6C,'select_obj',95,e,s,gg)
_(oHC,c6C)
}
else if(_oz(z,96,e,s,gg)){oHC.wxVkey=23
var h7C=_n('indexWs-component')
_rz(z,h7C,'select_obj',97,e,s,gg)
_(oHC,h7C)
}
else if(_oz(z,98,e,s,gg)){oHC.wxVkey=24
var o8C=_n('indexOyky-component')
_rz(z,o8C,'select_obj',99,e,s,gg)
_(oHC,o8C)
}
else if(_oz(z,100,e,s,gg)){oHC.wxVkey=25
var c9C=_n('indexBzly-component')
_rz(z,c9C,'select_obj',101,e,s,gg)
_(oHC,c9C)
}
else if(_oz(z,102,e,s,gg)){oHC.wxVkey=26
var o0C=_n('indexCar1-component')
_rz(z,o0C,'isShowCustomBar',103,e,s,gg)
_(oHC,o0C)
}
else if(_oz(z,104,e,s,gg)){oHC.wxVkey=27
var lAD=_n('indexCar2-component')
_rz(z,lAD,'isShowCustomBar',105,e,s,gg)
_(oHC,lAD)
}
else if(_oz(z,106,e,s,gg)){oHC.wxVkey=28
var aBD=_n('indexCar3-component')
_rz(z,aBD,'isShowCustomBar',107,e,s,gg)
_(oHC,aBD)
}
else if(_oz(z,108,e,s,gg)){oHC.wxVkey=29
var tCD=_n('indexDh2-component')
_(oHC,tCD)
}
else if(_oz(z,109,e,s,gg)){oHC.wxVkey=30
}
var lIC=_v()
_(r,lIC)
if(_oz(z,110,e,s,gg)){lIC.wxVkey=1
var eDD=_v()
_(lIC,eDD)
if(_oz(z,111,e,s,gg)){eDD.wxVkey=1
var xGD=_mz(z,'hot-line',['bind:clickHotLineBtn',112,'hotLineBoxClass',1,'hotLineCol',2,'hotLineContainerClass',3,'hotLineItemClass',4,'showHotLineTitleStyle',5],[],e,s,gg)
_(eDD,xGD)
}
else if(_oz(z,118,e,s,gg)){eDD.wxVkey=2
var oHD=_mz(z,'hot-line2',['bind:clickHotLineBtn',119,'hotLineBoxClass',1,'hotLineCol',2,'hotLineContainerClass',3,'hotLineItemClass',4,'showHotLineTitleStyle',5],[],e,s,gg)
_(eDD,oHD)
}
else if(_oz(z,125,e,s,gg)){eDD.wxVkey=3
var fID=_mz(z,'hotLineCollegeByType',['bind:clickHotLineBtn',126,'hotLineBoxClass',1,'hotLineCol',2,'hotLineContainerClass',3,'hotLineItemClass',4],[],e,s,gg)
_(eDD,fID)
}
else if(_oz(z,131,e,s,gg)){eDD.wxVkey=4
var cJD=_mz(z,'hot-line-college',['HotLineCollegeListType',132,'HotLineCollegeTieleType',1,'bind:clickHotLineBtn',2,'hotLineBoxClass',3,'hotLineCol',4,'hotLineContainerClass',5,'hotLineItemClass',6,'showHotLineTitleStyle',7],[],e,s,gg)
_(eDD,cJD)
}
else if(_oz(z,140,e,s,gg)){eDD.wxVkey=5
var hKD=_mz(z,'hotLineMultiLevel',['bind:clickHotLineBtn',141,'hotLineBoxClass',1,'hotLineCol',2,'hotLineContainerClass',3,'hotLineItemClass',4],[],e,s,gg)
_(eDD,hKD)
}
var bED=_v()
_(lIC,bED)
if(_oz(z,146,e,s,gg)){bED.wxVkey=1
var oLD=_n('index-tel')
_rz(z,oLD,'btnClass',147,e,s,gg)
_(bED,oLD)
}
var oFD=_v()
_(lIC,oFD)
if(_oz(z,148,e,s,gg)){oFD.wxVkey=1
var cMD=_mz(z,'index-tel',['btnClass',149,'indexTel',1],[],e,s,gg)
_(oFD,cMD)
}
eDD.wxXCkey=1
eDD.wxXCkey=3
eDD.wxXCkey=3
eDD.wxXCkey=3
eDD.wxXCkey=3
eDD.wxXCkey=3
bED.wxXCkey=1
bED.wxXCkey=3
oFD.wxXCkey=1
oFD.wxXCkey=3
}
var oND=_mz(z,'index-float-btn',['class',151,'isFullPage',1,'pageName',2],[],e,s,gg)
_(r,oND)
var aJC=_v()
_(r,aJC)
if(_oz(z,154,e,s,gg)){aJC.wxVkey=1
}
oHC.wxXCkey=1
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
oHC.wxXCkey=3
lIC.wxXCkey=1
lIC.wxXCkey=3
aJC.wxXCkey=1
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_5";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_5();	if (__vd_version_info__.delayedGwx) __wxAppCode__['package/indexCar1/indexCar1.wxml'] = [$gwx_XC_5, './package/indexCar1/indexCar1.wxml'];else __wxAppCode__['package/indexCar1/indexCar1.wxml'] = $gwx_XC_5( './package/indexCar1/indexCar1.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx_XC_5, './pages/index/index.wxml'];else __wxAppCode__['pages/index/index.wxml'] = $gwx_XC_5( './pages/index/index.wxml' );
	;__wxRoute = "package/indexCar1/indexCar1";__wxRouteBegin = true;__wxAppCurrentFile__="package/indexCar1/indexCar1.js";define("package/indexCar1/indexCar1.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../@babel/runtime/helpers/asyncToGenerator"),a=getApp(),o=require("../../727D99A59105A88C141BF1A2A784FB65.js"),n=(require("../../C6AC61C49105A88CA0CA09C31864FB65.js").isSupportFun,require("../../C6AC61C49105A88CA0CA09C31864FB65.js")),i=n.enQueryString,s=n.authorizeFun;Component({properties:{select_obj:{type:Object}},data:{CustomBar:a.globalData.systemInfo.CustomBar||60,Custom:a.globalData.systemInfo.Custom,StatusBar:a.globalData.systemInfo.statusBarHeight,secondaryColor:a.globalData.corpXcx.secondaryColor,primary:a.globalData.corpXcx.primary,staticHost:a.config.staticHost,corpName:a.globalData.corp.corpName,version:a.globalData.corp.version,bottomBannerUrl:"/web/xcx/images/car/index/banner_bottom_common.png",showTopNotice:!1,longitude:"116.39757695892334",latitude:"39.90756917034928",startAddress:"",startLongitude:"116.39757695892334",startLatitude:"39.90756917034928",endAddress:"",endLongitude:"",endLatitude:"",scale:16,isMapReady:!1,showBubble:!0,mapPinNotice:"请拖动地图",getLoactionLock:!1,isGoSelectEndAddress:!1,tripType:1,corpid:"",select_obj:{},locationType:0,fixedLocationIds:"",markerId:-1,markers:[],polygons:[],hasOptionalResult:!1,map_notice:"请拖动地图"},methods:{goMyOrderList:function(){wx.navigateTo({url:"/package/user_center/pages/orderList/orderList?key=future"})},selectTripType:function(e){var t=e.currentTarget.dataset.type;2!=t?this.setData({tripType:t}):a.util.showMsg("敬请期待")},handleGetLocationBg:function(){},queryLocation:function(o){var n=this;return t(e().mark((function t(){var i,s,r,l,d,c;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={action:"location.judgeInFenceOrOther",lng:(i=n).data.longitude,lat:i.data.latitude,locationIds:i.data.fixedLocationIds,locationType:0,startCityId:i.data.select_obj.beginCityCode,endCityId:i.data.select_obj.endCityCode,reGeo:o?0:1},r="上车",l=i.data.select_obj,d=!0,c="",e.next=8,a.network.requestPOST(s).then((function(e){if(console.log("res",e),e.success&&e.data){var t=e.data.pois;c=e.data.locationIds,o||(a.util.isNotNull(t)?(l.beginAddressName=t[0].name,a.util.isNotNull(t[0].address)?l.addressDetail=t[0].address:a.util.isNotNull(data.data.aois)?l.addressDetail=data.data.aois[0].name:choosedAddress=t[0].name):(d=!1,r="请拖动地图，重新选择",l.beginAddressName="获取失败，请点击选择",l.addressDetail=""))}})).catch((function(e){d=!1,r=(e=e||{}).message||"请拖动地图，重新选择"}));case 8:l.beginAddressCode=c,l.begin_lat_lng=i.data.latitude+","+i.data.longitude,i.setData({select_obj:l,hasOptionalResult:d,map_notice:r});case 11:case"end":return e.stop()}}),t)})))()},bindregionchange:function(e){var t=e.causedBy;console.log("bindregionchange",e),"end"==e.type&&("update"==t||"drag"==t&&(this.get_center_location(),console.log("drag - end")))},move_to_my_location:function(){var e=this;e.mapCtx.moveToLocation({success:function(t){console.log("moveToLocation res",t),e.setData({getLoactionLock:!0}),clearTimeout(a.globalData.timerTem);var o=setTimeout((function(){e.get_center_location(!0),clearTimeout(a.globalData.timerTem)}),1e3);a.globalData.timerTem=o},fail:function(e){a.util.showMsg("定位失败");var t=wx.getDeviceInfo();console.log("indexCar1界面移动到我的位置失败，brand：".concat(t.brand,",机型：").concat(t.model,"，platform：").concat(t.platform,"，system：").concat(t.system,"，报错原因：").concat(e)),o.info("indexCar1界面移动到我的位置失败，brand：".concat(t.brand,",机型：").concat(t.model,"，platform：").concat(t.platform,"，system：").concat(t.system,"，报错原因：").concat(e))}})},get_center_location:function(e){var t=this;t.mapCtx.getCenterLocation({success:function(a){console.log("获取中心位置getCenterLocation",a),t.setData({longitude:a.longitude,latitude:a.latitude,markerId:-1,fixedLocationIds:""}),e&&t.setData({scale:18,getLoactionLock:!1}),t.queryLocation()},fail:function(e){console.log("err",e),a.util.showMsg("获取经纬度失败"),t.setData({getLoactionLock:!1})}})},gotoMapSelectionPoints:function(o){var n=this;return t(e().mark((function t(){var i,r,l,d;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n,console.log(o),e.next=4,s();case 4:if(r=e.sent,console.log("authorizeFun res",r),l=o.currentTarget.dataset.type,r){e.next=13;break}return d=i.data.select_obj,"get_on"==l?(d.beginAddressCode="",d.beginAddressName=""):(d.endAddressCode="",d.endAddressName=""),i.setData({select_obj:d}),wx.setStorageSync(a.globalData.corp.appid+"_select_obj",d),e.abrupt("return");case 13:console.log("已经获取定位权限",l),i.setData({tryGetLocation:!0}),wx.setStorageSync(a.globalData.corp.appid+"_select_obj",i.data.select_obj),wx.navigateTo({url:"/package/interval11/pages/selectLocation/selectLocation?type="+l});case 17:case"end":return e.stop()}}),t)})))()},closeBubble:function(){this.setData({showBubble:!1})},hideModal:function(){this.setData({modalName:null})},handleClickHistoryBtn:function(e){console.log("e",e),this._goto_next_page(e.detail)},_goto_next_page:function(e){if(a.util.isNull(e.beginAddressCode))console.log("未选择出发地");else if(a.util.isNull(e.endAddressCode))console.log("未选择目的地");else{wx.setStorageSync(a.globalData.corp.appid+"_ticket_obj",e);var t=i(e);wx.navigateTo({url:"/package/intervalCar11/pages/intervalCar12/intervalCar12"+t,fail:function(e){console.log("err",e)}}),this.selectComponent(".index-search-history")&&this.selectComponent(".index-search-history").saveQueryCityHistory(e)}},getLocationList:function(){var e=this,t=e.data.select_obj,o={action:"location.getLocationWithFence",startCityId:t.beginCityCode,endCityId:t.endCityCode,locationType:0},n=[],i=[];a.network.request("/api/wg.do",o,(function(t){t.success&&a.util.isNotNull(t.data)?(console.log(t),t.data.forEach((function(t,o){if(a.util.isNotNull(t.optionalAreaRange)&&(i=i.concat(e.process_area(t.optionalAreaRange,!0))),a.util.isNotNull(t.unOptionalAreaRange)&&(i=i.concat(e.process_area(t.unOptionalAreaRange,!1))),a.util.isNull(t.area)&&a.util.isNotNull(t.locationLngLat)){var s=t.locationLngLat.split(","),r={id:+o+1,latitude:+s[1],longitude:+s[0],fixedLocationIds:t.locationId,districtName:t.districtName,title:t.locationName,width:"20px",height:"30px",customCallout:{display:"ALWAYS",anchorY:0}};n.push(r)}}))):a.util.showMsg(t.message||"")}),(function(){}),(function(){e.setData({polygons:i,markers:n,triggered:!1}),wx.stopPullDownRefresh()}))},process_area:function(e,t){for(var a=e.length,o=[],n=0;n<a;n++){for(var i=e[n].length,s=[],r=0;r<i;r++){var l={};l.latitude=e[n][r].lat,l.longitude=e[n][r].lng,s.push(l)}var d={points:s,strokeWidth:2};0==t?(d.fillColor="#FF450010",d.strokeColor="#FF000060",d.zIndex=3):(d.fillColor="#B2EECE60",d.strokeColor="#228B2270",d.zIndex=2),o.push(d)}return o},clickLocation:function(e){var t=this;console.log(e);for(var a=this,o=a.data.markers,n=+a.data.latitude,i=+a.data.longitude,s="",r=a.data.select_obj,l=0;l<o.length;l++)if(o[l].id==e.markerId){n=+o[l].latitude,i=+o[l].longitude,s=o[l].fixedLocationIds,r.beginAddressName=o[l].title,r.addressDetail=o[l].districtName,r.begin_lat_lng=n+","+i;break}a.mapCtx.moveToLocation({longitude:i,latitude:n,complete:function(){setTimeout((function(){t.setData({latitude:n,longitude:i,fixedLocationIds:s,markerId:e.markerId,select_obj:r}),a.queryLocation(!0)}),200)}})}},lifetimes:{attached:function(){var e=this;e.mapCtx=wx.createMapContext("map",e),e.setData({isMapReady:!0}),e.getLocationList(),setTimeout((function(){e.move_to_my_location()}),800),a.getCorpXcxInfo((function(){var t=e.data.bottomBannerUrl,o=e.data.showTopNotice;"ddcx"==a.globalData.corp.ID&&(t="/web/xcx/images/car/home2/index_ddcx_bottom_banner_20231123001.png",o=!0);var n=e.data.startLongitude,i=e.data.startLatitude;"dlcx"==a.globalData.corp.ID&&(n="103.63",i="28.24"),e.setData({version:a.globalData.corp.version,corpid:a.globalData.corp.ID,bottomBannerUrl:t,showTopNotice:o,startLongitude:n,startLatitude:i})}))},ready:function(){a.util.isNull(a.globalData.openid)&&a.doLogin(),clearTimeout(a.globalData.timerTem)},detached:function(){clearTimeout(a.globalData.timerTem)}},pageLifetimes:{show:function(){var e=this,t=e.data.select_obj,o={};e.data.tryGetLocation&&(wx.getStorage({key:a.globalData.corp.appid+"_select_location",success:function(n){console.log(n);var i=n.data;"get_on"==i.type?(t.beginAddressCode=i.locationIds,t.beginAddressName=i.name,t.addressDetail=i.address,t.begin_lat_lng=i.lat+","+i.lng,e.setData({hasOptionalResult:!0,map_notice:"上车",select_obj:t,latitude:i.lat,longitude:i.lng})):"get_off"==i.type&&(t.endAddressCode=i.locationIds,t.endAddressName=i.name,t.endAddressDetail=i.address,t.end_lat_lng=i.lat+","+i.lng,e.setData({select_obj:t}),o={tripDate:a.util.addDate(0),beginCityName:t.beginCityName,beginCityCode:t.beginCityCode,beginAddressCode:t.beginAddressCode,beginAddressName:t.beginAddressName,begin_lat_lng:t.begin_lat_lng||"",endCityCode:t.endCityCode,endCityName:t.endCityName,endAddressCode:t.endAddressCode,endAddressName:t.endAddressName,end_lat_lng:e.data.select_obj.end_lat_lng||""}),e._goto_next_page(o),wx.removeStorageSync(a.globalData.corp.appid+"_select_location")},fail:function(e){console.log(e)}}),e.setData({tryGetLocation:!1}))}}});
},{isPage:false,isComponent:true,currentFile:'package/indexCar1/indexCar1.js'});require("package/indexCar1/indexCar1.js");;__wxRoute = "pages/index/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/index.js";define("pages/index/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),n=require("../../@babel/runtime/helpers/asyncToGenerator");require("../../@babel/runtime/helpers/Arrayincludes");var t=getApp(),i=require("../../8A94E9619105A88CECF281668574FB65.js"),a=i.getSupplierType,o=i.handleToHKMOPage;Page({data:{primary:t.globalData.corpXcx.primary,CustomBar:t.globalData.systemInfo.CustomBar,index:"0",select_obj:{beginCity:"请选择出发地",beginCityCode:"",beginCityName:"请选择",beginDisCode:"",beginDisName:"",endCity:"请选择到达地",endCityCode:"",endCityName:"请选择",endDisName:"",endDisCode:""},indexSupportName:"",currentIndex:-1,home_tab_list:t.globalData.home_tab_list,hotLineType:0,hotLineCol:2,hotLineContainerClass:"",hotLineItemClass:"border-radius-4 bg-default-white",hotLineBoxClass:"margin-lr-xs",showHotLineTitleStyle:1,isShowIndexTel:!1,pageBgType:1,indexBgHeight:246,bannerPosition:"top",indexTel2:"",showContactStaffBtn:!1,showBubbleBanner:!0},handleClickHotLineBtn:function(e){t.globalData.corpXcx.toOtherAppid?t.util.goOtherMiniApp(t.globalData.corpXcx.toOtherAppid):["indexHotLine","indexHotLineCollege"].includes(this.data.index)?this._goto_next_page(e.detail.ticket_obj):this.selectComponent(".index-search-component")&&this.selectComponent(".index-search-component")._goto_next_page(e.detail.ticket_obj)},_goto_next_page:function(e){wx.setStorageSync(t.globalData.corp.appid+"_ticket_obj",e),wx.setStorageSync(t.globalData.corp.appid+"_select_obj",e);var n=t.util.enQueryString(e),i="/package/index4/pages/select_date/select_date?"+n+"&go_index_flag=0";"intervalSwc"==t.globalData.corp.interval?i="/package/index4/pages/select_address/select_address?"+n:["interval22","interval221"].includes(t.globalData.corp.interval)&&(i=t.config.pagesUrlV2[t.globalData.corp.interval]+"?"+n);var a=o({url:i+"?"+n,ticketObj:e}).redirectUrl;console.log("url",i),wx.navigateTo({url:a})},closeBottomBubbleBanner:function(){this.setData({showBubbleBanner:!1})},handleFloatBtnAction:function(){this.selectComponent(".index-float-btn").handleBtnAction()},onLoad:function(i){var o=this;if(wx.setNavigationBarTitle({title:t.globalData.corp.corpName}),t.getCorpXcxInfo((function(){wx.setNavigationBarTitle({title:t.globalData.corp.corpName});var e=t.globalData.corpXcx.indexSupportName;null==e&&(e=t.config.indexSupportName);var n=o.data.currentIndex;t.util.isNotNull(i.currentIndex)&&(n=+t.util.positiveInteger(i.currentIndex));var a=t.globalData.corp.ID,l=t.globalData.corpXcx.hotLineType||1,d=t.globalData.corp.index,r=o.data.hotLineCol,c=o.data.hotLineContainerClass,s=o.data.hotLineItemClass,x=o.data.hotLineBoxClass,g=o.data.showHotLineTitleStyle,p=o.data.showContactStaffBtn;["index1","index11","index2","index21","index3","indexNav","indexStop","indexHbcx","indexHhzwss","indexWs","indexOyky","indexBzly","indexCar1","indexCar2","indexCar3","indexDh2"].includes(d)&&(l=0),"index42"==d||"index43"==d?(c="bg-white margin-lr-24 radius-36",s="radius-16 bg-default-blue",x="padding-lr-sm"):"index512"==d?(c="bg-white margin-lr-24 radius-14",s="radius-14 bg-default-blue",x="padding-lr-sm"):"indexHotLine"==d?x="padding-lr-sm padding-top":"indexHotLineCollege"==d?x="padding-lr-14 padding-top-sm":"indexOyky"==d?(c="",s="border-radius-4 bg-default-white",x="margin-lr-xs"):"indexSkcx"==d&&(c="margin-lr-24 shadow-radius-box",s="radius-10 bg-default-blue",x="margin-lr-xs");var u=!1;["index1","index11","index2","index21","index3","index4","index41","index42","index43","index5","index512","index52","indexHotLine","index53","indexHotLineCollege","index6","indexHhzwss","indexOyky","indexSkcx"].includes(d)&&(u=!0),["index42","index43","index512"].includes(d)?g=2:["indexHotLine","indexHotLineCollege"].includes(d)&&(g=0);var b=o.data.pageBgType,h="",m="top",C=o.data.indexBgHeight,y=o.data.indexTel2;["index52"].includes(d)?b=2:["index42","index43","index51","index512","index525"].includes(d)&&(b=3,m="bottom",["index51","index512"].includes(d)&&(b=4),h="".concat(t.config.staticHost,"/web/xcx/images/index/indexBanner/default.png"),["jcx","jinxztc","xylx","dzcx","hccx","jbgk"].includes(a)?h="".concat(t.config.staticHost,"/web/xcx/images/index/indexBanner/").concat(a,".png"):["ycx"].includes(a)?h="".concat(t.config.staticHost,"/web/xcx/images/index/indexBanner/").concat(a,"_").concat(t.globalData.corp.appid,".png"):["jtcx"].includes(a)&&(h="".concat(t.config.staticHost,"/web/xcx/images/index/indexBanner/").concat(a,".png"),y="19504350066"),C=wx.getStorageSync(t.globalData.corp.appid+"_indexBgHeight")),["kjbs","zzcd","ytkc","xc"].includes(a)?r=1:["jbgk"].includes(a)&&(b=5),["lqkyzx","xxbs"].includes(a)&&(p=!0),o.setData({indexSupportName:e,index:t.globalData.corp.index,currentIndex:n,hotLineType:l,hotLineCol:r,hotLineContainerClass:c,hotLineItemClass:s,hotLineBoxClass:x,showHotLineTitleStyle:g,isShowIndexTel:u,indexBgSrc:h,pageBgType:b,indexBgHeight:C||246,bannerPosition:m,indexTel2:y,showContactStaffBtn:p})})),t.doLogin(n(e().mark((function n(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a();case 1:case"end":return e.stop()}}),n)})))),t.util.isNotNull(i.sourceid)&&(t.globalData.sourceid=i.sourceid),t.util.isNotNull(i.scene)&&-1!==i.scene.indexOf("sourceid")){var l=i.scene.replace(/[^\d.]/g,"");t.globalData.sourceid=l}},onReady:function(){},onPullDownRefresh:function(){wx.stopPullDownRefresh()},onShow:function(){try{var e=wx.getStorageSync(t.globalData.corp.appid+"_select_obj");console.log("index onShow select_obj",e),e&&this.setData({select_obj:e}),wx.removeStorageSync(t.globalData.corp.appid+"_share_obj")}catch(e){console.log(e)}},onShareAppMessage:function(e){return{title:t.globalData.shareData.title,path:t.globalData.corpXcx.tabBarHome}},onShareTimeline:function(){return{title:t.globalData.shareData.title,imageUrl:t.globalData.corpXcx.shareCouponImgUrl,query:""}}});
},{isPage:true,isComponent:true,currentFile:'pages/index/index.js'});require("pages/index/index.js");$gwx_XC_6=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
},{isPage:false,isComponent:true,currentFile:'package/indexCar2/indexCar2.js'});require("package/indexCar2/indexCar2.js");$gwx_XC_7=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
},{isPage:false,isComponent:true,currentFile:'package/intervalCar1/pages/interval/interval.js'});require("package/intervalCar1/pages/interval/interval.js");$gwx_XC_8=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_8 || [];
function gz$gwx_XC_8_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'true'])
Z([3,'padding-xs bg-white round'])
Z(z[0])
Z([3,'fillorder-container bg-white'])
Z([[7],[3,'selectedIntervalStation']])
Z([3,'fillOrderBtn'])
Z([a,[3,'yu-btn bg-'],[[7],[3,'primary']]])
Z([3,'item-hover'])
Z([[7],[3,'totalPriceYuan']])
Z([3,'bindRefresh'])
Z([3,'bindDownLoad'])
Z([3,'basicScrollHeight text-left'])
Z([[7],[3,'intervalTriggered']])
Z([[7],[3,'intervalList']])
Z([3,'intervalId'])
Z([3,'handleSelectInterval'])
Z([a,[3,'flex justify-between align-center padding-tb-sm padding-lr-lg margin-36 round solid '],[[2,'?:'],[[2,'!='],[[6],[[7],[3,'item']],[3,'status']],[1,1]],[1,'text-gray line-gray '],[1,'text']],[3,'-'],z[6][2],[3,' '],[[2,'?:'],[[2,'=='],[[7],[3,'selectedIntervalID']],[[6],[[7],[3,'item']],[3,'intervalId']]],[1,'active text-white bg'],[1,'bg-white line']],[3,'-'],z[6][2]])
Z([[7],[3,'item']])
Z([[6],[[7],[3,'item']],[3,'residueName']])
Z([3,'hideBottomModal'])
Z([a,[3,'cu-modal bottom-modal '],[[2,'?:'],[[2,'=='],[[7],[3,'bottomModalName']],[1,'submitOrderModal']],[1,'show'],[1,'']]])
Z(z[19])
Z([3,'cu-dialog bg-white'])
Z(z[0])
Z([[2,'>'],[[7],[3,'thanksFeeYuan']],[1,0]])
Z([3,'handleFillOrder'])
Z([a,z[6][1],z[6][2]])
Z(z[7])
Z(z[8])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_8=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_8=true;
var x=['./package/intervalCar2/pages/interval/interval.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_8_1()
var xME=_mz(z,'cu-nav',['hideBackGround',0,'iconStyle',1,'isBack',1],[],e,s,gg)
_(r,xME)
var oNE=_n('view')
_rz(z,oNE,'class',3,e,s,gg)
var fOE=_v()
_(oNE,fOE)
if(_oz(z,4,e,s,gg)){fOE.wxVkey=1
}
var cPE=_mz(z,'button',['bindtap',5,'class',1,'hoverClass',2],[],e,s,gg)
var hQE=_v()
_(cPE,hQE)
if(_oz(z,8,e,s,gg)){hQE.wxVkey=1
}
hQE.wxXCkey=1
_(oNE,cPE)
fOE.wxXCkey=1
_(r,oNE)
var oRE=_mz(z,'scroll-view',['enableBackToTop',-1,'refresherEnabled',-1,'scrollWithAnimation',-1,'scrollY',-1,'bindrefresherrefresh',9,'bindscrolltolower',1,'class',2,'refresherTriggered',3],[],e,s,gg)
var cSE=_v()
_(oRE,cSE)
var oTE=function(aVE,lUE,tWE,gg){
var bYE=_mz(z,'view',['bindtap',15,'class',1,'data-item',2],[],aVE,lUE,gg)
var oZE=_v()
_(bYE,oZE)
if(_oz(z,18,aVE,lUE,gg)){oZE.wxVkey=1
}
oZE.wxXCkey=1
_(tWE,bYE)
return tWE
}
cSE.wxXCkey=2
_2z(z,13,oTE,e,s,gg,cSE,'item','index','intervalId')
_(r,oRE)
var x1E=_mz(z,'view',['bindtap',19,'class',1],[],e,s,gg)
var o2E=_mz(z,'view',['catchtap',21,'class',1,'data-dialog',2],[],e,s,gg)
var f3E=_v()
_(o2E,f3E)
if(_oz(z,24,e,s,gg)){f3E.wxVkey=1
}
var c4E=_mz(z,'button',['bindtap',25,'class',1,'hoverClass',2],[],e,s,gg)
var h5E=_v()
_(c4E,h5E)
if(_oz(z,28,e,s,gg)){h5E.wxVkey=1
}
h5E.wxXCkey=1
_(o2E,c4E)
f3E.wxXCkey=1
_(x1E,o2E)
_(r,x1E)
var o6E=_n('privacy-popup')
_(r,o6E)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_8";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_8();	if (__vd_version_info__.delayedGwx) __wxAppCode__['package/intervalCar2/pages/interval/interval.wxml'] = [$gwx_XC_8, './package/intervalCar2/pages/interval/interval.wxml'];else __wxAppCode__['package/intervalCar2/pages/interval/interval.wxml'] = $gwx_XC_8( './package/intervalCar2/pages/interval/interval.wxml' );
	;__wxRoute = "package/intervalCar2/pages/interval/interval";__wxRouteBegin = true;__wxAppCurrentFile__="package/intervalCar2/pages/interval/interval.js";define("package/intervalCar2/pages/interval/interval.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),e=require("../../../../@babel/runtime/helpers/regeneratorRuntime"),a=require("../../../../@babel/runtime/helpers/asyncToGenerator"),i=getApp(),n=(require("../../../../3BE296B59105A88C5D84FEB2CFF3FB65.js").handleGetPhoneNumber,require("../../../../796B1D179105A88C1F0D7510C834FB65.js").getAndSubMsg),r=require("../../../../C6AC61C49105A88CA0CA09C31864FB65.js").isSupportFun,o=0;Page({data:{staticHost:i.config.staticHost,primary:i.globalData.corpXcx.primary,CustomBar:i.globalData.systemInfo.CustomBar,corpName:i.globalData.corp.corpName,bottomModalName:null,scale:16,markers:[],polyline:["110.094376,21.473763","110.094476,21.474763","110.094576,21.475763"],polygons:[],isInPolygon:!0,isInPolygon2:!0,startAddress:"",startLongitude:"",startLatitude:"",endAddress:"",endLongitude:"",endLatitude:"",distanceKM:0,durationString:"",seatPrice:0,seatPriceYuan:0,carPrice:0,carPriceYuan:0,tickeTotaltPriceFen:0,tickeTotaltPriceYuan:0,totalPriceFen:0,totalPriceYuan:0,submitSeatPriceFen:0,isCheck:!1,ticketnum:1,thanksFeeYuan:0,showOtherFee:!1,pt_tel:"",tel:"",userName:"",remarkList:[{selected:!1,value:"有宠物"},{selected:!1,value:"有大件行李，需用后备箱"},{selected:!1,value:"我会佩戴好口罩，请放心"},{selected:!1,value:"有孕妇/老人"}],listTwo:[{selected:!1,value:"我愿承担高速费"},{selected:!1,value:"我不担高速费、过路费"}],remarks:"",remarkSelectedArr:[],tripDateKey:0,tripDate:"",tripDateShow:"",intervalList:[],totalCount:0,isRefresh:!1,intervalTriggered:!1,loadIntervalTips:"",selectedIntervalObj:{},selectedIntervalID:"",selectedIntervalStation:"",orderid:""},carMaxNumber:4,isAlreadyNotice:!1,bindregionchange:function(t){console.log("bindregionchange",t)},minsToObj:function(t){if(!(t=parseInt(t))||isNaN(t))return{days:0,hours:0,mins:0};var e=t<0;e&&(t=Math.abs(t));var a=0,i=0;return t>=1440&&(a=Math.floor(t/1440),t%=1440),t>=60&&(i=Math.floor(t/60),t%=60),e?{days:-a,hours:-i,mins:-t}:{days:a,hours:i,mins:t}},minsToString:function(t){var e=this.minsToObj(t),a="";return e.days>0&&(a+=e.days+"天"),e.hours>0&&(a+=e.hours+"小时"),e.mins>0&&(a+=e.mins+"分钟"),a},getMapPolyline:function(){var t=this;return a(e().mark((function a(){var n,r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={action:"orderCar.getPolyline",sLongitude:(n=t).data.startLongitude,sLatitude:n.data.startLatitude,eLongitude:n.data.endLongitude,eLatitude:n.data.endLatitude},[],e.next=5,i.network.requestPOST(r).then((function(t){if(console.log("res",t),t.success&&t.data){var e=t.data.polyline.split(";");console.log("polylines",e);var a=[],r=[],o=(t.data.distance/1e3).toFixed(1),s=n.minsToString(t.data.duration);if(console.log("durationString",s),e.length>0){for(var l=e.length,d=0;d<l-1;d++){var c=e[d].split(",");a.push({latitude:Number(c[1]),longitude:Number(c[0])})}console.log("pl",a);var u=a.length,g=+(a[0].latitude+a[u-1].latitude)/2,f=+(a[0].longitude+a[u-1].longitude)/2;r=[{id:0,latitude:a[0].latitude,longitude:a[0].longitude,width:"28",heigth:"8",callout:{content:n.data.startAddress+" 上车点",color:"#5397fd",fontSize:11,borderWidth:0,borderRadius:10,borderColor:"#5397fd",bgColor:"#fff",padding:6,display:"ALWAYS",textAlign:"center"}},{id:1,latitude:g,longitude:f,width:"0",height:"0",callout:{content:o+"公里，预计行驶"+s,color:"#000000",fontSize:11,borderWidth:0,borderRadius:10,borderColor:"#ffffff",bgColor:"#fff",padding:6,display:"ALWAYS",textAlign:"center",iconPath:null}},{id:2,latitude:a[u-1].latitude,longitude:a[u-1].longitude,width:"28",heigth:"8",callout:{content:n.data.endAddress+" 下车点",color:"#ff8d1a",fontSize:11,borderWidth:0,borderRadius:10,borderColor:"#ff8d1a",bgColor:"#fff",padding:6,display:"ALWAYS",textAlign:"center"}}],console.log("mapPoints",r),n.mapCtx.includePoints({points:r,padding:[100,50,50,50]})}var h=t.data.seatPrice.toFixed(0),p=t.data.carPrice.toFixed(0);console.log("seatPriceYuan",i.util.fixedPrice(h)),console.log("carPriceYuan",i.util.fixedPrice(p)),n.setData({distanceKM:o,durationString:s,seatPrice:h,seatPriceYuan:i.util.fixedPrice(h),carPrice:p,carPriceYuan:i.util.fixedPrice(p),markers:r,polyline:[{points:a,color:"#39b54a",width:5}]}),n.calcPrice()}else i.util.showMsg(t.message||"获取导航路行失败")})).catch((function(t){console.log("获取地图导航轨迹 err",t),i.util.showMsg(t.message||"获取导航路行失败")}));case 5:case"end":return e.stop()}}),a)})))()},showTargetModal:function(t){this.setData({bottomModalName:t.currentTarget.dataset.target})},hideIntervalModal:function(){this.data.selectedIntervalID?this.setData({bottomModalName:null}):i.util.showMsg("请选择出发时间")},hideBottomModal:function(t){t.currentTarget.dataset.dialog||this.setData({bottomModalName:null})},minus:function(){var t=this.data.ticketnum;t<=1||(t-=1,this.setData({ticketnum:t}),this.calcPrice())},plus:function(){var t=this.data.ticketnum;t>=this.data.selectedIntervalObj.residue||(t+=1,this.setData({ticketnum:t}),this.calcPrice())},selecetThanksFee:function(t){this.setData({thanksFeeYuan:t.currentTarget.dataset.target,showOtherFee:!1,bottomModalName:null}),this.calcPrice()},showOtherFeeBtn:function(){this.setData({thanksFeeYuan:0,showOtherFee:!0}),this.calcPrice()},bindFeeInput:function(t){console.log("e",t),this.setData({thanksFeeYuan:+t.detail.value}),this.calcPrice()},hideThanksFeeModal:function(t){t.currentTarget.dataset.dialog||this.setData({bottomModalName:null,showOtherFee:!1})},bindInputTel:function(t){this.setData({tel:i.util.positiveInteger(t.detail.value)})},bindInputName:function(t){this.setData({userName:t.detail.value})},hidePassangerModal:function(t){if(!t.currentTarget.dataset.dialog){var e=this.data.tel;if(e){if(!i.util.isPhoneNum(e))return void i.util.showMsg("请输入正确的11位手机号码");wx.setStorage({key:"tel",data:e})}this.setData({bottomModalName:null})}},selectRemarkBtn:function(t){var e=t.currentTarget.dataset.value,a=t.currentTarget.dataset.index,i=this.data.remarkList,n=this.data.remarkSelectedArr;if(t.currentTarget.dataset.selected){i[a].selected=!1;for(var r=0;r<n.length;r++)if(n[r]==e){n.splice(r,1);break}}else i[a].selected=!0,n.push(e);var o="";n.length>0&&(o=n.join("，")),this.setData({remarkList:i,remarks:o,remarkSelectedArr:n})},inputRemark:function(t){this.setData({remarks:t.detail.value})},calcResidueStatus:function(t,e,a){if(1!=t){return{0:"已停售",2:"已发车",3:"即将发车",10:"已售罄"}[t]}if(e<1)return"已售罄";var n=i.globalData.corpExt.wx_show_residue;if(1==n)return"余票".concat(e);if(0==n)return e>=15?"有余票":"少量票";if(2==n){if(e<10)return"余票".concat(e)}else if(30==n){if(e>=3)return"少量票";if(e<3)return"余票".concat(e)}else{if(60==n)return"少量票";if(3==n){if(a)return"已购".concat(a)}else if(100==n)return""}return""},process_area:function(t,e){for(var a=t.length,i=[],n=0;n<a;n++){for(var r=t[n].length,o=[],s=0;s<r;s++){var l={};l.latitude=+t[n][s].lat,l.longitude=+t[n][s].lng,o.push(l)}var d={points:o,strokeWidth:2,width:2};0==e?(d.fillColor="#FF450010",d.strokeColor="#FF000060",d.zIndex=3):(d.fillColor="#B2EECE60",d.strokeColor="#228B2270",d.zIndex=2),i.push(d)}return i},queryIntervalListByLonLat:function(){var t=this;return a(e().mark((function a(){var n,r,s,l,d,c,u,g;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={action:"interval.queryLonLatListV2",byAdCode:"1",tripDate:(n=t).data.tripDate,startStopLongitude:n.data.startLongitude,startStopLatitude:n.data.startLatitude,offLongitude:n.data.endLongitude,offLatitude:n.data.endLatitude,start:100*o,limit:100},s=n.data.isRefresh?[]:n.data.intervalList,l=[],d=0,c=!0,u=!0,g="加载中",e.next=10,i.network.requestPOST(r).then((function(t){if(console.log("pro",t),t.success&&i.util.isNotNull(t.data)){s=s.concat(t.data.intervalList),d=+t.totalCount,100*o+100>=+t.totalCount&&(g="全部加载完成");for(var e=t.data.intervalList.length,a=0;a<e;a++)t.data.intervalList[a].residueName=n.calcResidueStatus(t.data.intervalList[a].Condition,t.data.intervalList[a].residue,t.data.intervalList[a].countRen),t.data.intervalList[a].ticketPriceYuan=i.util.fixedPrice(t.data.intervalList[a].ticket_price_fen),t.data.intervalList[a].residue<=0&&(t.data.intervalList[a].status=10);i.util.isNotNull(t.data.areaInfo)&&(i.util.isNotNull(t.data.areaInfo.optionalAreaRange)&&(l=l.concat(n.process_area(t.data.areaInfo.optionalAreaRange,!0))),c=t.data.areaInfo.isInPolygon||!1),i.util.isNotNull(t.data.areaInfo2)&&(i.util.isNotNull(t.data.areaInfo2.optionalAreaRange)&&(l=l.concat(n.process_area(t.data.areaInfo2.optionalAreaRange,!0))),u=t.data.areaInfo2.isInPolygon||!1)}else t.success&&(g="没有出发时间数据",i.util.showMsg(g))})).catch((function(t){g=t.message||"获取时间失败",i.util.showMsg(g)}));case 10:n.setData({intervalList:s,totalCount:d,intervalTriggered:!1,loadIntervalTips:g,polygons:l,isInPolygon:c,isInPolygon2:u});case 11:case"end":return e.stop()}}),a)})))()},bindRefresh:function(){var t=this;return a(e().mark((function a(){var i;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=0,(i=t).setData({isRefresh:!0,loadIntervalTips:""}),i.getListByCityIdAndLocationId();case 4:case"end":return e.stop()}}),a)})))()},bindDownLoad:function(){var t=this.data.loadIntervalTips;100*o+100>=this.data.totalCount?t="全部加载完成":(o++,t="上拉加载更多",this.getListByCityIdAndLocationId()),this.setData({loadIntervalTips:t})},selectIntervalBtn:function(){var t=this;return a(e().mark((function a(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=0,(n=t).setData({tripDate:i.util.formatShortTime(new Date((new Date).getTime()+864e5*n.data.tripDateKey)),isRefresh:!0,loadIntervalTips:"加载中"}),e.next=5,n.getListByCityIdAndLocationId();case 5:n.setData({bottomModalName:"intervalListModal"});case 6:case"end":return e.stop()}}),a)})))()},selectTripDate:function(t){var e=t.currentTarget.dataset.value,a=i.util.formatShortTime(new Date((new Date).getTime()+864e5*e)),n=i.util.formatDate(a);o=0,this.setData({tripDate:a,tripDateKey:e,tripDateShow:n,isRefresh:!0,loadIntervalTips:"加载中",selectedIntervalObj:{},selectedIntervalID:"",selectedIntervalStation:""}),this.getListByCityIdAndLocationId(),this.calcPrice()},handleSelectInterval:function(t){console.log(t);var e=t.currentTarget.dataset.item;if(e.residue<1||1!=e.status)i.util.showMsg("".concat(e.residueName));else{var a=this.data.ticketnum;this.setData({selectedIntervalID:e.intervalId,selectedIntervalStation:e.station,selectedIntervalObj:e,ticketnum:a,bottomModalName:null}),this.calcPrice()}},calcPrice:function(){var t,e=+this.data.ticketnum;t=(this.data.selectedIntervalObj.ticketPriceFen||0)*e,console.log("tickeTotaltPriceFen",t);var a=+t+100*+this.data.thanksFeeYuan;console.log("totalPriceFen",a),this.setData({tickeTotaltPriceYuan:i.util.fixedPrice(t),totalPriceYuan:i.util.fixedPrice(a)})},handleAgreePrivacyAuthorization:function(t){console.log("handleAgreePrivacyAuthorization",t)},fillOrderAfterFillTelBtn:function(){this.setData({bottomModalName:"changePassangerModal"})},fillOrderBtn:function(){var t="submitOrderModal";i.util.isPhoneNum(this.data.tel)?i.util.isNull(this.data.selectedIntervalID)&&(t="intervalListModal"):t="changePassangerModal",this.setData({bottomModalName:t})},handleFillOrder:function(){var t=this;if(!t.showTipIfNoneSourceid()){if(i.util.isNull(i.globalData.openid))return i.doLogin(),void wx.showModal({title:"提示",content:"正在登录中，请稍后再试",showCancel:!1});var e=t.data.selectedIntervalObj,a=t.data.ticketnum,n={action:"ticket.fillorder",corpID:i.globalData.corp.ID,lineID:e.line,ticketnum:a,child_num:0,takeDate:e.takeDate,account:t.data.pt_tel,openid:i.globalData.openid,sub_appid:i.globalData.corp.appid,tel:t.data.tel||t.data.pt_tel,passenger_id_cards:"",operator:i.globalData.corp.account,activityid:"",intervalID:e.intervalId,addressId:e.addressId,addressName:t.data.startAddress,getOffAddressId:e.getOffAddressId,getOffAddressName:t.data.endAddress,from:"xcxCar",seat:"",orderLocationId:"",seatPrice:t.data.submitSeatPriceFen,userName:t.data.userName,pay_mode:1,useBalance:0,isChange:"0",changeOldID:"",cheap_flag:0,location_name:"",remarks:t.data.remarks,remarks2:"",customerTime:"",busId:"",sourceid:i.globalData.sourceid||"",begin_lat_lng:t.data.startLatitude+","+t.data.startLongitude,end_lat_lng:t.data.endLatitude+","+t.data.endLongitude};i.network.requestLoading("/api/wg.do",n,"正在提交...",(function(e){if(console.log("fill order 成功回调",e.data),e.success){if(t.setData({orderid:e.data.orderid}),t.data.selectedIntervalObj.ticketPriceFen<=0)return void t.subMsgAndGo("order",1,e.data.orderid);t.wxPay(),i.util.isNotNull(i.globalData.sourceid)&&(i.globalData.sourceid="")}else e.data.payingCount>0?wx.showModal({title:"存在".concat(e.data.payingCount,"笔待支付的订单"),content:e.message||"请先支付或取消",confirmText:"去查看",showCancel:!1,success:function(t){t.confirm&&wx.navigateTo({url:"/package/user_center/pages/orderList/orderList?key=paying"})}}):wx.showModal({title:"提交失败",content:e.message,showCancel:!1}),t.setData({modalName:null})}))}},wxPay:function(){var t=this,e={action:"order.getPayPamer",orderid:t.data.orderid,corpID:i.globalData.corp.ID,subAppid:i.globalData.corp.appid,openid:i.globalData.openid};i.network.requestLoading("/api/wg.do",e,"正在提交...",(function(e){console.log(e.data),e.success?wx.requestPayment({timeStamp:e.data.timeStamp,nonceStr:e.data.nonceStr,package:e.data.packageValue,signType:e.data.signType,paySign:e.data.paySign,success:function(e){wx.showToast({title:"支付成功",icon:"success",duration:2e3}),t.subMsgAndGo("order",1,t.data.orderid)},fail:function(e){console.log("支付失败",e);var a=e.errMsg.indexOf("cancel")?"已取消支付":e.errMsg;wx.showModal({title:"支付失败",content:a,confirmText:"知道了",showCancel:!1,success:function(e){e.confirm&&t.goOrderResultPage(0)}})},complete:function(){console.log("pay complete")}}):wx.showModal({title:"支付失败",content:e.message,showCancel:!1})}))},subMsgAndGo:function(t,i){var r=this;return a(e().mark((function a(){var o,s;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r,e.next=3,n(o.data.orderid,t);case 3:s=e.sent,console.log("下单订阅消息是否发送成功：",s),o.goOrderResultPage(i);case 6:case"end":return e.stop()}}),a)})))()},goOrderResultPage:function(t,e){var a="".concat(i.config.pagesUrl.order_result_url,"?status=").concat(t,"&pay_mode=1&orderid=").concat(this.data.orderid);wx.navigateTo({url:a,success:function(){}})},showTipIfNoneSourceid:function(){if("ldwsjc"==i.globalData.corp.ID&&i.util.isNull(i.globalData.sourceid))return console.log("000000"),wx.showModal({title:"请通过司机专属二维码下单",content:"在微信首页，打开扫一扫进行下单",cancelText:"退出",confirmText:"返回首页",complete:function(t){t.cancel?r("2.17.3")?wx.exitMiniProgram():i.utils.showMsg("请手动退出小程序"):t.confirm&&wx.navigateBack({delta:1})},fail:function(t){console.log("err",t)}}),!0},getListByCityIdAndLocationId:function(){var n=this;return a(e().mark((function a(){var r,s,l,d;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={action:"interval.queryLngLatListV3",takeDate:n.data.tripDate,start:100*o,limit:100,startLng:n.data.startLongitude,startLat:n.data.startLatitude,endLng:n.data.endLongitude,endLat:n.data.endLatitude},s=n.data.isRefresh?[]:n.data.intervalList,l="加载中",d=0,e.next=6,i.network.requestPOST(r).then((function(e){if(e.success&&e.data){d=Number(e.data.intervalList.length),100*o+100>=d&&(l="全部加载完成");var a,n=e.data.intervalList,r=t(n);try{for(r.s();!(a=r.n()).done;){var c=a.value;c.ticketPriceYuan=i.util.fixedPrice(c.ticketPriceFen)}}catch(t){r.e(t)}finally{r.f()}s=s.concat(n)}else e.success&&(l="没有出发时间数据",i.util.showMsg(l))})).catch((function(t){l=t.message||"获取时间失败",i.util.showMsg(l)}));case 6:n.setData({intervalList:s,totalCount:d,loadIntervalTips:l,intervalTriggered:!1});case 7:case"end":return e.stop()}}),a)})))()},onLoad:function(t){var e=this;t=i.util.deQueryString(t),e.setData({startAddress:t.startAddress,startLongitude:t.startLongitude,startLatitude:t.startLatitude,endAddress:t.endAddress,endLongitude:t.endLongitude,endLatitude:t.endLatitude,tripDate:i.util.formatShortTime(new Date),orderid:"",isInPolygon:!0,isInPolygon2:!0}),e.mapCtx=wx.createMapContext("map"),i.doLogin((function(){e.getMapPolyline(),e.selectIntervalBtn()}));var a=wx.getStorageSync("tel"),n=wx.getStorageSync("pt_tel"),r=e.data.tel,o=e.data.pt_tel;i.util.isNotNull(n)&&(o=n),i.util.isNotNull(a)&&(r=a),e.setData({tel:r,pt_tel:o})},onReady:function(){this.showTipIfNoneSourceid()},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:i.globalData.shareData.title,path:i.globalData.corpXcx.tabBarHome}}});
},{isPage:false,isComponent:true,currentFile:'package/intervalCar2/pages/interval/interval.js'});require("package/intervalCar2/pages/interval/interval.js");$gwx_XC_9=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_9 || [];
function gz$gwx_XC_9_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_9=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_9=true;
var x=['./package/partnerOrderDetails/pages/partnerOrderDetails/partnerOrderDetails.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_9_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_9";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_9();	if (__vd_version_info__.delayedGwx) __wxAppCode__['package/partnerOrderDetails/pages/partnerOrderDetails/partnerOrderDetails.wxml'] = [$gwx_XC_9, './package/partnerOrderDetails/pages/partnerOrderDetails/partnerOrderDetails.wxml'];else __wxAppCode__['package/partnerOrderDetails/pages/partnerOrderDetails/partnerOrderDetails.wxml'] = $gwx_XC_9( './package/partnerOrderDetails/pages/partnerOrderDetails/partnerOrderDetails.wxml' );
	;__wxRoute = "package/partnerOrderDetails/pages/partnerOrderDetails/partnerOrderDetails";__wxRouteBegin = true;__wxAppCurrentFile__="package/partnerOrderDetails/pages/partnerOrderDetails/partnerOrderDetails.js";define("package/partnerOrderDetails/pages/partnerOrderDetails/partnerOrderDetails.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";getApp();Page({data:{},onLoad:function(n){wx.hideShareMenu()},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}});
},{isPage:false,isComponent:true,currentFile:'package/partnerOrderDetails/pages/partnerOrderDetails/partnerOrderDetails.js'});require("package/partnerOrderDetails/pages/partnerOrderDetails/partnerOrderDetails.js");$gwx_XC_10=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_10 || [];
function gz$gwx_XC_10_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'bg-'],[[7],[3,'primary']],[3,' light']])
Z([3,'radius-20'])
Z(z[1])
Z([1,false])
Z([3,'hide'])
Z([3,'678'])
Z([3,'red'])
Z([a,[3,'form_card '],[[2,'?:'],[[2,'=='],[[7],[3,'currentTab']],[1,'SC']],[1,'left_radius'],[1,'right_radius']]])
Z([[2,'=='],[[7],[3,'currentTab']],[1,'SC']])
Z(z[8])
Z(z[8])
Z(z[8])
Z([[7],[3,'beginCityOptions']])
Z([3,'index'])
Z([3,'onBeginCitySelect'])
Z([a,[3,'option_item '],[[2,'?:'],[[2,'=='],[[7],[3,'modalCurrentCode']],[[6],[[7],[3,'item']],[3,'code']]],[1,'selected_tab'],[1,'']]])
Z([[6],[[7],[3,'item']],[3,'code']])
Z([[6],[[7],[3,'item']],[3,'name']])
Z([3,'button-hover'])
Z([[2,'=='],[[7],[3,'modalCurrentCode']],[[6],[[7],[3,'item']],[3,'code']]])
Z([[7],[3,'endCityOptions']])
Z(z[13])
Z([3,'onEndCitySelect'])
Z([a,z[15][1],z[15][2]])
Z(z[16])
Z(z[17])
Z(z[18])
Z(z[19])
Z([[7],[3,'goScheduleOptions']])
Z([3,'scheduleKey'])
Z([3,'schedule_box margin-sm'])
Z([[6],[[7],[3,'item']],[3,'price']])
Z([[6],[[7],[3,'item']],[3,'viaPort']])
Z([[7],[3,'backScheduleOptions']])
Z(z[29])
Z(z[30])
Z(z[31])
Z(z[32])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_10=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_10=true;
var x=['./package/waybusIndex/pages/waybusIndex/waybusIndex.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_10_1()
var l9E=_n('cu-nav')
_rz(z,l9E,'bgColor',0,e,s,gg)
_(r,l9E)
var a0E=_mz(z,'banner-notice',['bannerClass',1,'bannerImageClass',1,'enablePopupNotice',2,'noticeClass',3,'screenWidth',4,'textColor',5],[],e,s,gg)
_(r,a0E)
var tAF=_n('view')
_rz(z,tAF,'class',7,e,s,gg)
var eBF=_v()
_(tAF,eBF)
if(_oz(z,8,e,s,gg)){eBF.wxVkey=1
}
var bCF=_v()
_(tAF,bCF)
if(_oz(z,9,e,s,gg)){bCF.wxVkey=1
}
var oDF=_v()
_(tAF,oDF)
if(_oz(z,10,e,s,gg)){oDF.wxVkey=1
}
var xEF=_v()
_(tAF,xEF)
if(_oz(z,11,e,s,gg)){xEF.wxVkey=1
}
eBF.wxXCkey=1
bCF.wxXCkey=1
oDF.wxXCkey=1
xEF.wxXCkey=1
_(r,tAF)
var oFF=_v()
_(r,oFF)
var fGF=function(hIF,cHF,oJF,gg){
var oLF=_mz(z,'view',['bind:tap',14,'class',1,'data-code',2,'data-name',3,'hoverClass',4],[],hIF,cHF,gg)
var lMF=_v()
_(oLF,lMF)
if(_oz(z,19,hIF,cHF,gg)){lMF.wxVkey=1
}
lMF.wxXCkey=1
_(oJF,oLF)
return oJF
}
oFF.wxXCkey=2
_2z(z,12,fGF,e,s,gg,oFF,'item','index','index')
var aNF=_v()
_(r,aNF)
var tOF=function(bQF,ePF,oRF,gg){
var oTF=_mz(z,'view',['bind:tap',22,'class',1,'data-code',2,'data-name',3,'hoverClass',4],[],bQF,ePF,gg)
var fUF=_v()
_(oTF,fUF)
if(_oz(z,27,bQF,ePF,gg)){fUF.wxVkey=1
}
fUF.wxXCkey=1
_(oRF,oTF)
return oRF
}
aNF.wxXCkey=2
_2z(z,20,tOF,e,s,gg,aNF,'item','index','index')
var cVF=_v()
_(r,cVF)
var hWF=function(cYF,oXF,oZF,gg){
var a2F=_n('view')
_rz(z,a2F,'class',30,cYF,oXF,gg)
var t3F=_v()
_(a2F,t3F)
if(_oz(z,31,cYF,oXF,gg)){t3F.wxVkey=1
}
var e4F=_v()
_(a2F,e4F)
if(_oz(z,32,cYF,oXF,gg)){e4F.wxVkey=1
}
t3F.wxXCkey=1
e4F.wxXCkey=1
_(oZF,a2F)
return oZF
}
cVF.wxXCkey=2
_2z(z,28,hWF,e,s,gg,cVF,'item','index','scheduleKey')
var b5F=_v()
_(r,b5F)
var o6F=function(o8F,x7F,f9F,gg){
var hAG=_n('view')
_rz(z,hAG,'class',35,o8F,x7F,gg)
var oBG=_v()
_(hAG,oBG)
if(_oz(z,36,o8F,x7F,gg)){oBG.wxVkey=1
}
var cCG=_v()
_(hAG,cCG)
if(_oz(z,37,o8F,x7F,gg)){cCG.wxVkey=1
}
oBG.wxXCkey=1
cCG.wxXCkey=1
_(f9F,hAG)
return f9F
}
b5F.wxXCkey=2
_2z(z,33,o6F,e,s,gg,b5F,'item','index','scheduleKey')
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_10";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_10();	if (__vd_version_info__.delayedGwx) __wxAppCode__['package/waybusIndex/pages/waybusIndex/waybusIndex.wxml'] = [$gwx_XC_10, './package/waybusIndex/pages/waybusIndex/waybusIndex.wxml'];else __wxAppCode__['package/waybusIndex/pages/waybusIndex/waybusIndex.wxml'] = $gwx_XC_10( './package/waybusIndex/pages/waybusIndex/waybusIndex.wxml' );
	;__wxRoute = "package/waybusIndex/pages/waybusIndex/waybusIndex";__wxRouteBegin = true;__wxAppCurrentFile__="package/waybusIndex/pages/waybusIndex/waybusIndex.js";define("package/waybusIndex/pages/waybusIndex/waybusIndex.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../../@babel/runtime/helpers/Arrayincludes");var t,e=require("../../../../@babel/runtime/helpers/defineProperty"),a=require("../../../../@babel/runtime/helpers/objectSpread2"),o=require("../../../../@babel/runtime/helpers/regeneratorRuntime"),n=require("../../../../@babel/runtime/helpers/asyncToGenerator"),i=require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),c=getApp();Page((e(t={data:{primary:c.globalData.corpXcx.primary,select_obj:{beginCityCode:"",beginCityName:"出发城市",endCityName:"到达城市",endCityCode:"",goDate:"选择出发日期",goUpStationName:"选择上车点",goUpStationCode:"",goUpLtude:"",goOffStationName:"选择下车点",goOffStationCode:"",backDate:"选择返程日期",backUpStationName:"选择上车点",backUpStationCode:"",backUpLtude:"",backOffStationName:"选择下车点",backOffStationCode:"",goScheduleKey:"",goSchedule:"",backScheduleKey:"",backSchedule:""},rotate:0,isChanging:!1,rotateKey:180,tab_list:[{label:"往返",tabIndex:"SC"},{label:"单程",tabIndex:"DC"}],tab_width:"0rpx",tab_left:"0rpx",currentTab:"SC",commonModalName:null,stationOptionsState:{cityList:[],stations:[]},modalCurrentCode:"",stationFilterVal:"all",modalScrollTop:0,scrollIntoViewId:"",currentClickType:"",calendarData:[],beginCityOptions:[],endCityOptions:[],goUpStationOptions:{cityList:[],stations:[]},goOffStationOptions:{cityList:[],stations:[]},backUpStationOptions:{cityList:[],stations:[]},backOffStationOptions:{cityList:[],stations:[]},goScheduleOptions:[],backScheduleOptions:[],goCalendarData:[],backCalendarData:[],staticHost:c.config.staticHost,navigationBarTitle:c.globalData.corp.corpName||"首页"},onLoad:function(t){wx.setNavigationBarTitle({title:c.globalData.corp.corpName});var e=this;c.getCorpXcxInfo((function(){e.setData({navigationBarTitle:c.globalData.corp.corpName||"首页"}),wx.setNavigationBarTitle({title:c.globalData.corp.corpName})})),c.doLogin()},onReady:function(){try{var t=wx.getStorageSync(c.globalData.corp.appid+"_select_obj");t&&(t.goDate=this.getTomorrowDate(),t.backDate="",t=this.initFormPlaceholder(t),this.setData({select_obj:t,rotate:"180-load"})),clearTimeout(c.globalData.timerTem)}catch(t){console.log(t)}this.setData({corpid:c.globalData.corp.ID})},onShow:function(){},onHide:function(){},onUnload:function(){clearTimeout(c.globalData.timerTem)},onPullDownRefresh:function(){wx.stopPullDownRefresh()},onReachBottom:function(){},onShareAppMessage:function(){},onTabChange:function(t){this.setData({currentTab:t.currentTarget.dataset.tabIndex})},initFormPlaceholder:function(t,e){var a={goDate:"选择出发日期",goSchedule:"选择去程班次",goUpStationName:"选择上车点",goOffStationName:"选择下车点",backDate:"选择返程日期",backSchedule:"选择返程班次",backUpStationName:"选择上车点",backOffStationName:"选择下车点",beginCityName:"出发城市",endCityName:"到达城市"};for(var o in a)c.util.isNull(t[o])&&(t[o]=a[o]);if(e&&e instanceof Array)for(var n=0;n<e.length;n++){var i=e[n];t[i]=a[i]||""}return t},_change:function(){var t=this;if(!t.data.isChanging){t.animation1(),clearTimeout(c.globalData.timerTem);var e=setTimeout((function(){t._do_change()}),200);c.globalData.timerTem=e}},_do_change:function(t){var e=this.data.select_obj.beginCityName,a=this.data.select_obj.beginCity,o=this.data.select_obj.beginCityCode,n={beginCityName:this.data.select_obj.endCityName,beginCity:this.data.select_obj.endCity,beginCityCode:this.data.select_obj.endCityCode,endCity:a,endCityName:e,endCityCode:o,goDate:this.data.select_obj.goDate,backDate:this.data.select_obj.backDate};n=this.initFormPlaceholder(n),this.setData({select_obj:n}),wx.setStorageSync(c.globalData.corp.appid+"_select_obj",n),clearTimeout(c.globalData.timerTem)},animation1:function(){var t=this,e=180==t.data.rotateKey?-180:180;t.setData({rotateKey:e,isChanging:!0}),t.animate(".icon_change",[{rotate:0},{rotate:e}],400,(function(){t.clearAnimation(".icon_change",{rotate:!0})})),t.animate(".animationStartCity",[{opacity:1,translateX:0},{opacity:.2,translateX:150},{opacity:1,translateX:0}],400,(function(){t.clearAnimation(".animationStartCity",{opacity:!0,translateX:!0}),t.setData({isChanging:!1})})),t.animate(".animationEndCity",[{opacity:1,translateX:0},{opacity:.2,translateX:-150},{opacity:1,translateX:0}],400,(function(){t.clearAnimation(".animationEndCity",{opacity:!0,translateX:!0})}))},hideModal:function(t){this.setData({modalName:null,modalCurrentCode:""})},beforeModalShowValid:function(t){var e=this;return new Promise((function(a,o){(!t||!t instanceof Array)&&o("数据异常，请重试");var n,r=!0,l="",s=/Date|Schedule/,d="",u=i(t);try{for(u.s();!(n=u.n()).done;){var h=n.value;if(d=h+"Code",s.test(h)&&(d=h.includes("Date")?h:h+"Key"),c.util.isNull(e.data.select_obj[d])||String(e.data.select_obj[d]).includes("选择")){r=!1,l=h;break}}}catch(t){u.e(t)}finally{u.f()}if(!r){var f=l.charAt(0).toUpperCase()+l.slice(1);e["handle"+f+"ModalVisible"](!0),o({beginCity:"出发城市",endCity:"到达城市",goDate:"出发日期",goUpStation:"去程上车点",goOffStation:"去程下车点",backDate:"返程日期",backUpStation:"返程上车点",backOffStation:"返程下车点",goSchedule:"去程班次",backSchedule:"返程班次"}[l]+"为空")}a()}))},handleBeginCityModalVisible:function(t){var e=this;return n(o().mark((function t(){var a,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.data.select_obj.beginCityCode,n=c.util.isNotNull(a)?a:"",t.next=4,e.getOptions("wayBus.getGoCity",{},"beginCity").then((function(t){t&&(t.length?e.setData({beginCityOptions:t,modalCurrentCode:n,commonModalName:"beginCity"}):c.util.showMsg("暂无出发城市可供选择"))}));case 4:case"end":return t.stop()}}),t)})))()},handleEndCityModalVisible:function(t){var e=this;return n(o().mark((function a(){return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.beforeModalShowValid(["beginCity"]).then(n(o().mark((function a(){var n,i,r,l,s,d;return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.data.select_obj,i=n.endCityCode,r=n.beginCityCode,l=c.util.isNotNull(i)?i:"",s={goCityCode:r},d=t?"endCity":null,a.next=6,e.getOptions("wayBus.getToCity",s,d).then((function(a){a&&(a.length?(e.setData({endCityOptions:a,modalCurrentCode:l,commonModalName:d}),1!=a.length||t||e.onEndCitySelect(null,a[0])):c.util.showMsg("暂无到达城市可供选择"))}));case 6:case"end":return a.stop()}}),a)})))).catch((function(t){c.util.showMsg(t)}));case 1:case"end":return a.stop()}}),a)})))()},handleGoDateModalVisible:function(t){var e=this;return n(o().mark((function t(){var a,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.data.select_obj.goDate,n=c.util.isNotNull(a)?a:"",e.getCalendar("goDate"),e.setData({modalCurrentCode:n});case 4:case"end":return t.stop()}}),t)})))()},handleBackDateModalVisible:function(t){var e=this;return n(o().mark((function t(){var a,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.data.select_obj.backDate,n=c.util.isNotNull(a)?a:"",e.getCalendar("backDate"),e.setData({modalCurrentCode:n});case 4:case"end":return t.stop()}}),t)})))()},handleGoUpStationModalVisible:function(t){var e=this;return n(o().mark((function a(){var i;return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i=["beginCity","endCity","goDate"],"SC"==e.data.currentTab&&i.push("backDate"),e.beforeModalShowValid(i).then(n(o().mark((function a(){var n,i,r,l,s,d,u,h;return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.data.select_obj,i=n.goUpStationCode,r=n.goDate,l=n.endCityCode,s=n.beginCityCode,d=c.util.isNotNull(i)?i:"",u={roundTrip:e.data.currentTab,date:r,toCityCode:l,goCityCode:s},h=t?"goUpStation":null,a.next=6,e.getOptions("wayBus.getGoUpStation",u,"goUpStation").then((function(a){a&&(a.stations.length?(e.setData({goUpStationOptions:a,modalCurrentCode:d,commonModalName:h}),t||e.handleOnlyOneStation("GoUpStation",a.stations)):c.util.showMsg("暂无去程上车点可供选择"))}));case 6:case"end":return a.stop()}}),a)})))).catch((function(t){c.util.showMsg(t)}));case 3:case"end":return a.stop()}}),a)})))()},handleGoOffStationModalVisible:function(t){var e=this;return n(o().mark((function a(){var i;return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i=["beginCity","endCity","goDate","goUpStation"],"SC"==e.data.currentTab&&i.splice(3,0,"backDate"),e.beforeModalShowValid(i).then(function(){var a=n(o().mark((function a(n){var i,r,l,s,d,u,h,f,g;return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i=e.data.select_obj,r=i.goUpStationCode,l=i.goDate,s=i.endCityCode,d=i.beginCityCode,u=i.goOffStationCode,h=c.util.isNotNull(u)?u:"",f=t?"goOffStation":null,g={roundTrip:e.data.currentTab,goUpStationId:String(r),date:l,toCityCode:s,goCityCode:d},a.next=6,e.getOptions("wayBus.getGoOffStation",g,"goOffStation").then((function(a){a&&(a.stations.length?(e.setData({goOffStationOptions:a,modalCurrentCode:h,commonModalName:f}),t||e.handleOnlyOneStation("GoOffStation",a.stations)):c.util.showMsg("暂无去程下车点可供选择"))}));case 6:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()).catch((function(t){c.util.showMsg(t)}));case 3:case"end":return a.stop()}}),a)})))()},handleBackUpStationModalVisible:function(t){var e=this;return n(o().mark((function a(){return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.beforeModalShowValid(["beginCity","endCity","goDate","backDate","goUpStation","goOffStation","goSchedule"]).then(n(o().mark((function a(){var n,i,r,l,s,d,u,h,f;return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.data.select_obj,i=n.goScheduleKey,r=n.backDate,l=n.endCityCode,s=n.beginCityCode,n.goOffStationCode,d=n.backUpStationCode,u=c.util.isNotNull(d)?d:"",h={roundTrip:e.data.currentTab,date:r,toCityCode:s,scheduleKey:i,goCityCode:l},f=t?"backUpStation":null,a.next=6,e.getOptions("wayBus.getBackUpStation",h,"backUpStation").then((function(a){a&&(a.stations.length?(e.setData({backUpStationOptions:a,modalCurrentCode:u,commonModalName:f}),t||e.handleOnlyOneStation("BackUpStation",a.stations)):c.util.showMsg("暂无返程下车点可供选择"))}));case 6:case"end":return a.stop()}}),a)})))).catch((function(t){c.util.showMsg(t)}));case 1:case"end":return a.stop()}}),a)})))()},handleBackOffStationModalVisible:function(t){var e=this;return n(o().mark((function a(){return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.beforeModalShowValid(["beginCity","endCity","goDate","backDate","goUpStation","goOffStation","goSchedule","backUpStation"]).then(n(o().mark((function a(){var n,i,r,l,s,d,u,h,f,g;return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.data.select_obj,i=n.goScheduleKey,r=n.backDate,l=n.endCityCode,s=n.beginCityCode,d=n.backOffStationCode,u=n.backUpStationCode,h=c.util.isNotNull(d)?d:"",f=t?"backOffStation":null,g={roundTrip:e.data.currentTab,date:r,toCityCode:s,goCityCode:l,scheduleKey:i,backUpStationId:String(u)},a.next=6,e.getOptions("wayBus.getBackOffStation",g,"backOffStation").then((function(a){a&&(a.stations.length?(e.setData({backOffStationOptions:a,modalCurrentCode:h,commonModalName:f}),t||e.handleOnlyOneStation("BackOffStation",a.stations)):c.util.showMsg("暂无返程下车点可供选择"))}));case 6:case"end":return a.stop()}}),a)})))).catch((function(t){c.util.showMsg(t)}));case 1:case"end":return a.stop()}}),a)})))()},handleGoScheduleModalVisible:function(t){var e=this;return n(o().mark((function a(){var i;return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i=["beginCity","endCity","goDate","goUpStation","goOffStation"],"SC"==e.data.currentTab&&i.splice(3,0,"backDate"),e.beforeModalShowValid(i).then(n(o().mark((function a(){var n,i,r,l,s,d,u,h;return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.data.select_obj,i=n.goUpStationCode,r=n.goDate,l=n.goScheduleKey,s=n.goOffStationCode,d=c.util.isNotNull(l)?l:"",u={goUpStationId:String(i),roundTrip:e.data.currentTab,date:r,goOffStationId:String(s)},h=t?"goSchedule":null,a.next=6,e.getOptions("wayBus.getGoSchedule",u,h).then((function(a){a&&(a.length?(e.setData({goScheduleOptions:a,modalCurrentCode:d,commonModalName:h}),1!=a.length||t||(a[0].emptySeats?e.onGoScheduleSelect(null,a[0]):c.util.showMsg("去程车票售罄"))):c.util.showMsg("暂无去程班次可供选择"))}));case 6:case"end":return a.stop()}}),a)})))).catch((function(t){c.util.showMsg(t)}));case 3:case"end":return a.stop()}}),a)})))()},handleBackScheduleModalVisible:function(t){var e=this;return n(o().mark((function a(){return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.beforeModalShowValid(["beginCity","endCity","goDate","backDate","goUpStation","goOffStation","goSchedule","backUpStation","backOffStation"]).then(n(o().mark((function a(){var n,i,r,l,s,d,u,h,f;return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.data.select_obj,i=n.backUpStationCode,r=n.backDate,l=n.backOffStationCode,s=n.goScheduleKey,d=n.backScheduleKey,u=c.util.isNotNull(d)?d:"",h={backUpStationId:String(i),roundTrip:e.data.currentTab,date:r,backOffStationId:String(l),scheduleKey:s},f=t?"backSchedule":null,a.next=6,e.getOptions("wayBus.getBackSchedule",h,f).then((function(a){a&&(a.length?(e.setData({backScheduleOptions:a,modalCurrentCode:u,commonModalName:f}),1!=a.length||t||(a[0].emptySeats?e.onBackScheduleSelect(null,a[0]):c.util.showMsg("返程车票售罄"))):c.util.showMsg("暂无返程班次可供选择"))}));case 6:case"end":return a.stop()}}),a)})))).catch((function(t){c.util.showMsg(t)}));case 1:case"end":return a.stop()}}),a)})))()},getOptions:function(t,e,a){var i=this;return n(o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i,r.abrupt("return",new Promise(function(){var i=n(o().mark((function n(i,r){var l;return o().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return l={request:{corpid:c.globalData.corp.ID,action:t,requesttime:"202411050941",signdata:"ABCDEFG1234561234"},param:e},o.next=3,c.network.requestPOSTV3(l,"/api/v2/waybusService",null,"加载中",!0).then((function(t){if(1==t.success&&t.data){var e=t.data.districts?t.data.districts:t.data;if(["goUpStation","backUpStation","goOffStation","backOffStation"].includes(a)){for(var o={stations:[],cityList:[]},n=0;n<e.length;n++){var c=e[n];o.cityList.push(c);for(var r=c.types,l={typeCode:r.code,typeName:r.name,cityName:c.name,cityCode:c.code,stations:[]},s=0;s<r.length;s++){var d=r[s].stations;l.stations=d.concat(l.stations)}o.stations.push(l)}o.cityList.unshift({name:"全部",code:"all"}),i(o)}else i(e)}})).catch((function(t){t=t||{},c.util.showMsg(t.message)}));case 3:case"end":return o.stop()}}),n)})));return function(t,e){return i.apply(this,arguments)}}()));case 2:case"end":return r.stop()}}),r)})))()},getCalendar:function(t){var e=this,a={action:"date.get_calendar",corpID:c.globalData.corp.ID};c.network.requestLoading("/api/wg.do",a,"加载中...",(function(a){if(a.success&&a.data){if("backDate"==t){var o,n=i(a.data);try{for(n.s();!(o=n.n()).done;){var c,r=o.value.month_data,l=i(r);try{for(l.s();!(c=l.n()).done;){var s,d=c.value.week_day,u=i(d);try{for(u.s();!(s=u.n()).done;){var h=s.value,f=h.date_full;if(f)new Date(e.data.select_obj.goDate).getTime()>new Date(f).getTime()&&(h.enable=0)}}catch(t){u.e(t)}finally{u.f()}}}catch(t){l.e(t)}finally{l.f()}}}catch(t){n.e(t)}finally{n.f()}}e.setData({goCalendarData:a.data,backCalendarData:a.data,commonModalName:t})}}))},onBeginCitySelect:function(t){var e=this.data.select_obj,a=t.currentTarget.dataset,o=a.name,n=a.code;e.beginCityCode!==n&&(e=this.initFormPlaceholder(e,["endCityName","endCityCode","goUpStationName","goUpStationCode","goOffStationName","goOffStationCode","backUpStationName","backUpStationCode","backOffStationName","backOffStationCode","goScheduleKey","goSchedule","backScheduleKey","backSchedule"])),e.beginCityName=o,e.beginCityCode=n,e.endCityName="到达城市",e.endCityCode="",this.setData({select_obj:e}),this.hideModal(),this.handleEndCityModalVisible(!1)},onEndCitySelect:function(t,e){var a=this.data.select_obj,o=t?t.currentTarget.dataset:e,n=o.name,i=o.code;a.endCityCode!==i&&(a=this.initFormPlaceholder(a,["goUpStationName","goUpStationCode","goOffStationName","goOffStationCode","backUpStationName","backUpStationCode","backOffStationName","backOffStationCode","goScheduleKey","goSchedule","backScheduleKey","backSchedule"])),a.endCityName=n,a.endCityCode=i,this.setData({select_obj:a}),this.hideModal()}},"hideModal",(function(){var t=this.data.stationOptionsState;this.setData({commonModalName:null,stationFilterVal:"all",stationOptionsState:t})})),e(t,"onGoUpStationSelect",(function(t,e){var a=this.data.select_obj,o=t?t.currentTarget.dataset.selectItem:e,n=o.name,i=o.stationId,c=o.ltude;a.goUpStationCode!==i&&(a=this.initFormPlaceholder(a,["goOffStationName","goOffStationCode","backUpStationName","backUpStationCode","backOffStationName","backOffStationCode","goScheduleKey","goSchedule","backScheduleKey","backSchedule"])),a.goUpStationName=n,a.goUpStationCode=i,a.goUpLtude=c,this.setData({select_obj:a}),this.hideModal(),a.goUpStationCode&&a.goDate&&a.endCityCode&&a.beginCityCode&&this.handleGoOffStationModalVisible(!1)})),e(t,"onGoOffStationSelect",(function(t,e){var a=this.data.select_obj,o=t?t.currentTarget.dataset.selectItem:e,n=o.name,i=o.stationId;a.goOffStationCode!==i&&(a=this.initFormPlaceholder(a,["backUpStationName","backUpStationCode","backOffStationName","backOffStationCode","goScheduleKey","goSchedule","backScheduleKey","backSchedule"])),a.goOffStationName=n,a.goOffStationCode=i,this.setData({select_obj:a}),this.hideModal(),a.goUpStationCode&&a.goDate&&a.goOffStationCode&&this.handleGoScheduleModalVisible(!1)})),e(t,"onBackUpStationSelect",(function(t,e){var a=this.data.select_obj,o=t?t.currentTarget.dataset.selectItem:e,n=o.name,i=o.stationId,c=o.ltude;a.backUpStationCode!==i&&(a=this.initFormPlaceholder(a,["backOffStationName","backOffStationCode","backScheduleKey","backSchedule"])),a.backUpStationName=n,a.backUpStationCode=i,a.backUpLtude=c,this.setData({select_obj:a}),this.hideModal(),a.backDate&&a.beginCityCode&&a.endCityCode&&a.goScheduleKey&&a.backUpStationCode&&this.handleBackOffStationModalVisible(!1)})),e(t,"onBackOffStationSelect",(function(t,e){var a=this.data.select_obj,o=t?t.currentTarget.dataset.selectItem:e,n=o.name,i=o.stationId;a.backOffStationCode!==i&&(a=this.initFormPlaceholder(a,["backScheduleKey","backSchedule"])),a.backOffStationName=n,a.backOffStationCode=i,this.setData({select_obj:a}),this.hideModal(),a.backUpStationCode&&a.backDate&&a.backOffStationCode&&a.goScheduleKey&&this.handleBackScheduleModalVisible(!1)})),e(t,"onGoDateSelect",(function(t){var e=t.currentTarget.dataset.dayInfo;if(e.date_full&&0!=e.enable){var a=this.data.select_obj;a.goDate!==e.date_full&&(a=this.initFormPlaceholder(a,["goUpStationName","goUpStationCode","goOffStationName","goOffStationCode","backUpStationName","backUpStationCode","backOffStationName","backOffStationCode","goScheduleKey","goSchedule","backScheduleKey","backSchedule","backDate"])),a.goDate=e.date_full,this.setData({select_obj:a}),this.hideModal(),"DC"!=this.data.currentTab&&("SC"!=this.data.currentTab||String(a.goDate).includes("选择")||String(a.backDate).includes("选择"))||this.handleGoUpStationModalVisible(!1)}})),e(t,"onBackDateSelect",(function(t){var e=t.currentTarget.dataset.dayInfo;if(e.date_full&&0!=e.enable){var a=this.data.select_obj;a.backDate!==e.date_full&&(a=this.initFormPlaceholder(a,["backUpStationName","backUpStationCode","backOffStationName","backOffStationCode","backScheduleKey","backSchedule"])),a.backDate=e.date_full,this.setData({select_obj:a}),this.hideModal(),a.goScheduleKey&&a.beginCityCode&&a.endCityCode&&this.handleBackUpStationModalVisible(!1),a.beginCityCode&&a.endCityCode&&!String(a.goDate).includes("选择")&&this.handleGoUpStationModalVisible(!1)}})),e(t,"onModalConfirm",(function(){this.hideModal()})),e(t,"onStationFilter",(function(t){var e=t.currentTarget.dataset.code,o={stationFilterVal:e};"all"==e?o.modalScrollTop=0:o.scrollIntoViewId=e,this.setData(a({},o))})),e(t,"onGoScheduleSelect",(function(t,e){var a=this.data.select_obj,o=t?t.currentTarget.dataset.selectItem:e,n=o.scheduleKey,i=o.time,c=o.emptySeats,r=o.viaPort;a.goScheduleKey!==n&&(a=this.initFormPlaceholder(a,["backUpStationName","backUpStationCode","backOffStationName","backOffStationCode","backScheduleKey","backSchedule"])),a.goScheduleKey=n,a.goSchedule=i,a.goScheduleEmptySeats=c,a.goScheduleViaPort=r||"",this.setData({select_obj:a}),this.hideModal(),!String(a.backDate).includes("选择")&&a.goScheduleKey&&a.beginCityCode&&a.endCityCode&&"SC"==this.data.currentTab&&this.handleBackUpStationModalVisible(!1)})),e(t,"onBackScheduleSelect",(function(t,e){var a=this.data.select_obj,o=t?t.currentTarget.dataset.selectItem:e,n=o.scheduleKey,i=o.time,c=o.emptySeats,r=o.viaPort;a.backScheduleKey=n,a.backSchedule=i,a.backScheduleEmptySeats=c,a.backScheduleViaPort=r||"",this.setData({select_obj:a}),this.hideModal()})),e(t,"handleOnlyOneStation",(function(t,e){if(1==e.length){var a=e[0].stations;1==a.length&&this["on"+t+"Select"](null,a[0])}})),e(t,"queryTicket",(function(){var t=this,e=["beginCity","endCity","goDate","goUpStation","goOffStation","goSchedule"];"SC"==this.data.currentTab&&(e.splice(3,0,"backDate"),e.push("backUpStation","backOffStation","backSchedule")),this.beforeModalShowValid(e).then((function(){var e=a(a({},t.data.select_obj),{},{roundTrip:t.data.currentTab}),o=c.util.enQueryString(e);wx.navigateTo({url:"/package/waybusFillorder/pages/waybusFillorder/waybusFillorder?"+o})})).catch((function(t){c.util.showMsg(t)}))})),e(t,"getTomorrowDate",(function(){var t=new Date;return t.getFullYear()+"-"+(t.getMonth()+1).toString().padStart(2,"0")+"-"+(t.getDate()+1).toString().padStart(2,"0")})),e(t,"goToOrderList",(function(){wx.navigateTo({url:"/package/waybusOrder/pages/orderList/orderList?tab=all"})})),t));
},{isPage:false,isComponent:true,currentFile:'package/waybusIndex/pages/waybusIndex/waybusIndex.js'});require("package/waybusIndex/pages/waybusIndex/waybusIndex.js");$gwx_XC_11=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
},{isPage:false,isComponent:true,currentFile:'pages/components/calendar_swiper/calendar_swiper.js'});require("pages/components/calendar_swiper/calendar_swiper.js");$gwx_XC_12=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_12 || [];
function gz$gwx_XC_12_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'cu-bar fixed text-white '],[[7],[3,'bgColor']]])
Z([3,'cuNav'])
Z([a,[3,'height:'],[[7],[3,'CustomBar']],[3,'px;padding-top:'],[[7],[3,'StatusBar']],[3,'px;'],[[2,'?:'],[[7],[3,'bgImage']],[[2,'+'],[[2,'+'],[1,'background-image:url('],[[7],[3,'bgImage']]],[1,')']],[1,'']]])
Z([[2,'!'],[[7],[3,'isCustomBack']]])
Z([[7],[3,'isBack']])
Z([3,'BackPage'])
Z([3,'action'])
Z([3,'backText'])
Z([[7],[3,'isHome']])
Z([[7],[3,'isHomeAndBack']])
Z([3,'content'])
Z([3,'right'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_12=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_12=true;
var x=['./components/cuNav/cuNav.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_12_1()
var oZG=_mz(z,'view',['class',0,'id',1,'style',1],[],e,s,gg)
var f1G=_v()
_(oZG,f1G)
if(_oz(z,3,e,s,gg)){f1G.wxVkey=1
var c2G=_v()
_(f1G,c2G)
if(_oz(z,4,e,s,gg)){c2G.wxVkey=1
var h3G=_mz(z,'view',['bindtap',5,'class',1],[],e,s,gg)
var o4G=_n('slot')
_rz(z,o4G,'name',7,e,s,gg)
_(h3G,o4G)
_(c2G,h3G)
}
else if(_oz(z,8,e,s,gg)){c2G.wxVkey=2
}
else if(_oz(z,9,e,s,gg)){c2G.wxVkey=3
}
c2G.wxXCkey=1
}
else{f1G.wxVkey=2
}
var c5G=_n('slot')
_rz(z,c5G,'name',10,e,s,gg)
_(oZG,c5G)
var o6G=_n('slot')
_rz(z,o6G,'name',11,e,s,gg)
_(oZG,o6G)
f1G.wxXCkey=1
_(r,oZG)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_12";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_12();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/cuNav/cuNav.wxml'] = [$gwx_XC_12, './components/cuNav/cuNav.wxml'];else __wxAppCode__['components/cuNav/cuNav.wxml'] = $gwx_XC_12( './components/cuNav/cuNav.wxml' );
	;__wxRoute = "components/cuNav/cuNav";__wxRouteBegin = true;__wxAppCurrentFile__="components/cuNav/cuNav.js";define("components/cuNav/cuNav.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp();Component({options:{addGlobalClass:!0,multipleSlots:!0},properties:{iconStyle:{type:String,default:""},bgColor:{type:String,default:"bg-white"},isBack:{type:[Boolean,String],default:!1},isHome:{type:[Boolean,String],default:!1},isHomeAndBack:{type:[Boolean,String],default:!1},hideBackGround:{value:!1},isCustomBack:{value:!1}},data:{CustomBar:t.globalData.systemInfo.CustomBar,Custom:t.globalData.systemInfo.Custom,StatusBar:t.globalData.systemInfo.statusBarHeight},methods:{BackPage:function(){wx.navigateBack({delta:1})},toHome:function(){t.gotoIndex()},customBack:function(){this.triggerEvent("onCustomBack",{})}},lifetimes:{ready:function(){try{1==getCurrentPages().length&&this.data.isBack&&this.setData({isBack:!1,isHome:!0})}catch(t){console.log("cuNav getCurrentPages err",t)}}}});
},{isPage:false,isComponent:true,currentFile:'components/cuNav/cuNav.js'});require("components/cuNav/cuNav.js");$gwx_XC_13=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_13 || [];
function gz$gwx_XC_13_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_13_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showHotLine']])
Z([a,[3,'page-container margin-bottom '],[[7],[3,'hotLineContainerClass']],[3,' '],[[7],[3,'skinClassName']]])
Z([[7],[3,'showHotLineSubTitleCfd']])
Z([[7],[3,'lineList']])
Z([3,'index'])
Z([3,'_btn_query_hot'])
Z([3,'position-relative'])
Z([[6],[[7],[3,'item']],[3,'endAreaId']])
Z([[6],[[7],[3,'item']],[3,'endCityId']])
Z([[6],[[7],[3,'item']],[3,'endCityName']])
Z([[6],[[7],[3,'item']],[3,'otherAppid']])
Z([[6],[[7],[3,'item']],[3,'pagePath']])
Z([[6],[[7],[3,'item']],[3,'startAreaId']])
Z([[6],[[7],[3,'item']],[3,'startCityId']])
Z([[6],[[7],[3,'item']],[3,'startCityName']])
Z([[6],[[7],[3,'item']],[3,'subscript']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_13_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_13=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_13=true;
var x=['./pages/components/hot_line/hot_line.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_13_1()
var a8G=_v()
_(r,a8G)
if(_oz(z,0,e,s,gg)){a8G.wxVkey=1
var t9G=_n('view')
_rz(z,t9G,'class',1,e,s,gg)
var e0G=_v()
_(t9G,e0G)
if(_oz(z,2,e,s,gg)){e0G.wxVkey=1
}
var bAH=_v()
_(t9G,bAH)
var oBH=function(oDH,xCH,fEH,gg){
var hGH=_mz(z,'view',['bindtap',5,'class',1,'data-end-area-id',2,'data-end_city_id',3,'data-end_city_name',4,'data-other_appid',5,'data-page_path',6,'data-start-area-id',7,'data-start_city_id',8,'data-start_city_name',9],[],oDH,xCH,gg)
var oHH=_v()
_(hGH,oHH)
if(_oz(z,15,oDH,xCH,gg)){oHH.wxVkey=1
}
oHH.wxXCkey=1
_(fEH,hGH)
return fEH
}
bAH.wxXCkey=2
_2z(z,3,oBH,e,s,gg,bAH,'item','index','index')
e0G.wxXCkey=1
_(a8G,t9G)
}
a8G.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_13";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_13();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/components/hot_line/hot_line.wxml'] = [$gwx_XC_13, './pages/components/hot_line/hot_line.wxml'];else __wxAppCode__['pages/components/hot_line/hot_line.wxml'] = $gwx_XC_13( './pages/components/hot_line/hot_line.wxml' );
	;__wxRoute = "pages/components/hot_line/hot_line";__wxRouteBegin = true;__wxAppCurrentFile__="pages/components/hot_line/hot_line.js";define("pages/components/hot_line/hot_line.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../@babel/runtime/helpers/regeneratorRuntime"),e=require("../../../@babel/runtime/helpers/asyncToGenerator");require("../../../@babel/runtime/helpers/Arrayincludes");var a=getApp();Component({properties:{showHotLineTitleStyle:{type:null,value:"1"},hotLineCol:{type:Number,value:2},hotLineContainerClass:{type:null,value:""},hotLineBoxClass:{value:"margin-lr-xs",type:null},hotLineItemClass:{value:"border-radius-4 bg-default-white",type:null},saveStorageKey:{type:String,value:"_select_obj"}},data:{primary:a.globalData.corpXcx.primary,staticHost:a.config.staticHost,showHotLine:!1,lineList:[],showHotLineSubTitleCfd:!1,queryIntervalType:a.globalData.corpXcx.queryIntervalType||0,skinClassName:a.globalData.skinClassName},lifetimes:{attached:function(){this.getHotLineStorage(),this.handleGetHotLine();var t=this.data.showHotLineSubTitleCfd;["cfd","jincky","lvcky","yxxyztc","txky","ddxy","dyjxztc","wpxy","lxxyztc","hldl","zdxyztc","jhxyztc","jyd","ywxy","htky","xjky","cxky","cxztc","dyzx","xdhxky","xdjxyztc","xdatbs","xdqxky","fxxyztc","xlcky","ltxycx","xydd","htxy","yfqcxybs","mzyxybs","ylcndb","hyjxztc","jckxc","wzztc","ztxybs","yntxztc","ctbs","lcxycx","zxztc","hcytxy","ydztc"].includes(a.globalData.corp.ID)&&(t=!0),this.setData({showHotLineSubTitleCfd:t})}},methods:{getHotLineStorage:function(){var t=wx.getStorageSync(a.globalData.corp.appid+"_line_dh_list");t&&t.length>0&&this.setData({showHotLine:!0,lineList:t})},handleGetHotLine:function(r){var i=this;return e(t().mark((function e(){var r,n;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i,n={action:"line.lineDhList",account:a.globalData.corp.account,lineType:""},t.next=4,a.network.requestPOST(n).then((function(t){var e=[];if(t.success){var i=!1;(e=t.data)&&e.length>0&&(i=!0),r.setData({showHotLine:i,lineList:e})}r.triggerEvent("onHotLineLoad",{success:t.success}),wx.setStorageSync(a.globalData.corp.appid+"_line_dh_list",e)})).catch((function(t){console.log("handleGetHotLine err",t)}));case 4:case"end":return t.stop()}}),e)})))()},_btn_query_hot:function(t){var e=t.currentTarget.dataset.other_appid,r=t.currentTarget.dataset.page_path;if(a.util.isNotNull(e)||a.util.isNotNull(r))a.util.isNotNull(e)&&a.util.isNotNull(r)?a.util.goOtherMiniApp(e,r):a.util.isNotNull(r)?a.util.routerToPage(r):a.util.showMsg("常用线路参数有误，缺少页面路径");else if(a.globalData.corpXcx.toOtherAppid)a.util.goOtherMiniApp(a.globalData.corpXcx.toOtherAppid);else{var i=wx.getStorageSync("tripDate")||a.util.formatShortTime(new Date),n={corpid:a.globalData.corp.ID,tripDate:i,beginCityName:t.currentTarget.dataset.start_city_name,beginCityCode:t.currentTarget.dataset.start_city_id,beginAddressCode:"",beginAddressName:"请选择上车站点",endCityName:t.currentTarget.dataset.end_city_name,endCityCode:t.currentTarget.dataset.end_city_id,endAddressCode:"",endAddressName:"请选择下车站点",startAreaId:t.currentTarget.dataset.startAreaId,endAreaId:t.currentTarget.dataset.endAreaId};0!=this.data.queryIntervalType&&"index2"!=a.globalData.corp.index||wx.setStorageSync(a.globalData.corp.appid+this.data.saveStorageKey,n);var l={params:a.util.enQueryString(n),ticket_obj:n};this.triggerEvent("clickHotLineBtn",l)}}}});
},{isPage:false,isComponent:true,currentFile:'pages/components/hot_line/hot_line.js'});require("pages/components/hot_line/hot_line.js");$gwx_XC_14=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
},{isPage:true,isComponent:true,currentFile:'pages/cx/cx.js'});require("pages/cx/cx.js");$gwx_XC_15=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_15 || [];
function gz$gwx_XC_15_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!='],[[7],[3,'index']],[1,'indexStop']])
Z([3,'round'])
Z([3,'hide'])
Z([[2,'=='],[[7],[3,'index']],[1,'indexStop']])
Z([[2,'=='],[[7],[3,'homePage']],[1,'home1']])
Z([3,'item'])
Z([[7],[3,'home_tab_list']])
Z([3,'sid'])
Z([3,'_tabSelect'])
Z([a,[3,'flex-sub tab-box '],[[2,'?:'],[[2,'!=='],[[7],[3,'currentIndex']],[[6],[[7],[3,'item']],[3,'sid']]],[1,''],[1,'selected bg-white text-bold text']],[3,'-'],[[7],[3,'primary']],[3,' '],[[6],[[7],[3,'item']],[3,'tab_class']]])
Z([[7],[3,'index']])
Z([[2,'=='],[[7],[3,'currentIndex']],[[6],[[7],[3,'item']],[3,'sid']]])
Z(z[11])
Z([3,'handleSwiperChange'])
Z([3,'onAnimationFinish'])
Z([3,'margin-lr-36 body-container'])
Z([[7],[3,'currentIndex']])
Z([a,[3,'height:'],[[7],[3,'swiperMaxHeight']],[3,'px']])
Z(z[5])
Z(z[6])
Z(z[7])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'component_index']],[1,'index5']])
Z([3,'handleLoadIndexCom'])
Z([3,'cRadius'])
Z([[7],[3,'lineDhList']])
Z([[6],[[7],[3,'item']],[3,'line_type']])
Z([[6],[[7],[3,'item']],[3,'next_page']])
Z([[7],[3,'select_obj']])
Z([[6],[[7],[3,'item']],[3,'sid']])
Z([[7],[3,'tabLen']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'component_index']],[1,'index1']])
Z(z[22])
Z(z[23])
Z(z[25])
Z(z[26])
Z(z[27])
Z(z[28])
Z(z[29])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'component_index']],[1,'index4']])
Z(z[22])
Z([3,'index4-component'])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[28])
Z(z[29])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'component_index']],[1,'indexTravelLine']])
Z(z[22])
Z([3,'travelLineListComponent'])
Z(z[23])
Z([[7],[3,'travelLineListStyle']])
Z(z[26])
Z(z[28])
Z(z[29])
Z([[7],[3,'travelLineBoxClass']])
Z([[7],[3,'travelLineContainerClass']])
Z([[7],[3,'travelLineItemClass']])
Z([[2,'=='],[[7],[3,'homePage']],[1,'home2']])
Z([3,'home2'])
Z([[2,'=='],[[7],[3,'tabStyle']],[1,1]])
Z([[2,'=='],[[7],[3,'tabStyle']],[1,2]])
Z(z[6])
Z(z[7])
Z(z[8])
Z([a,[3,'tab-item flex-sub text-center padding-top-sm padding-bottom-xs position-relative '],[[2,'?:'],[[2,'=='],[[7],[3,'currentIndex']],[[7],[3,'index']]],[1,'bg-white'],[1,'']]])
Z(z[10])
Z([[2,'=='],[[7],[3,'currentIndex']],[[7],[3,'index']]])
Z(z[13])
Z(z[14])
Z([3,'bg-white'])
Z(z[16])
Z([a,z[17][1],z[17][2],z[17][3]])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[21])
Z([a,[[2,'+'],[[2,'+'],[[6],[[7],[3,'item']],[3,'component_index']],[1,'_']],[[6],[[7],[3,'item']],[3,'sid']]],[3,' padding-lr-28']])
Z(z[60])
Z(z[22])
Z([3,'shadow-box-4-22'])
Z([3,'light'])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z(z[28])
Z(z[29])
Z(z[9][6])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'component_index']],[1,'indexHotLine']])
Z([a,z[77][1],z[77][2]])
Z(z[60])
Z(z[22])
Z(z[81])
Z(z[25])
Z(z[26])
Z(z[28])
Z(z[29])
Z(z[30])
Z([a,z[77][1],z[77][2]])
Z(z[60])
Z(z[22])
Z(z[80])
Z(z[25])
Z(z[26])
Z(z[27])
Z(z[28])
Z(z[29])
Z(z[38])
Z([a,z[77][1],z[77][2]])
Z(z[60])
Z(z[22])
Z(z[40])
Z(z[80])
Z(z[81])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[28])
Z(z[29])
Z(z[9][6])
Z(z[47])
Z([a,z[77][1],z[77][2]])
Z(z[60])
Z(z[22])
Z(z[49])
Z(z[80])
Z(z[51])
Z(z[26])
Z(z[28])
Z(z[29])
Z(z[55])
Z(z[56])
Z(z[57])
Z([3,'handleClickBtn'])
Z([a,[3,'my-bg-white round bg-'],z[9][4]])
Z([[6],[[7],[3,'item']],[3,'component_index']])
Z(z[26])
Z([[6],[[7],[3,'item']],[3,'to_other_appid']])
Z([3,'button-hover'])
Z(z[60])
Z([[2,'=='],[[6],[[7],[3,'home_tab_list']],[3,'length']],[1,0]])
Z([[7],[3,'indexSupportName']])
Z([1,false])
Z([3,'home'])
Z([[7],[3,'showPrivacyPopup']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1
}
function gz$gwx_XC_15_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_15_2)return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_2
__WXML_GLOBAL__.ops_cached.$gwx_XC_15_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'lineList']])
Z([3,'id'])
Z([3,'_btn_query'])
Z([a,[3,'my-bg-white round bg-'],[[6],[[7],[3,'item']],[3,'color']]])
Z([[6],[[7],[3,'item']],[3,'endCityId']])
Z([[6],[[7],[3,'item']],[3,'endCityName']])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([[6],[[7],[3,'item']],[3,'startCityId']])
Z([[6],[[7],[3,'item']],[3,'startCityName']])
Z([3,'button-hover'])
Z([[6],[[7],[3,'item']],[3,'remark']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_15_2);return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_2
}
function gz$gwx_XC_15_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_15_3)return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_3
__WXML_GLOBAL__.ops_cached.$gwx_XC_15_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'hotLineType']],[1,1]])
Z([3,'handleClickHotLineBtn'])
Z([3,'handleOnHotLineComLoad'])
Z([[7],[3,'hotLineItemClass']])
Z([[7],[3,'line_type']])
Z([3,'_select_obj_index4'])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,2]])
Z(z[1])
Z([3,'padding-lr-sm'])
Z([1,2])
Z([3,'bg-white radius-36 margin-top-sm padding-24'])
Z([3,'radius-16 bg-default-blue'])
Z(z[4])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,22]])
Z([3,'1'])
Z(z[1])
Z(z[8])
Z(z[9])
Z([3,'bg-white radius-36 margin-top-sm '])
Z(z[11])
Z(z[4])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,3]])
Z(z[1])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[4])
Z([3,'round'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_15_3);return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_3
}
function gz$gwx_XC_15_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_15_4)return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_4
__WXML_GLOBAL__.ops_cached.$gwx_XC_15_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showCharterCar']])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,1]])
Z([3,'handleClickHotLineBtn'])
Z([3,'handleOnHotLineComLoad'])
Z([[7],[3,'hotLineItemClass']])
Z([[7],[3,'line_type']])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,2]])
Z(z[2])
Z([3,'padding-lr-sm'])
Z([1,2])
Z([3,'bg-white radius-36 margin-top-sm padding-24'])
Z([3,'radius-16 bg-default-blue'])
Z(z[5])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,22]])
Z([3,'1'])
Z(z[2])
Z(z[8])
Z(z[9])
Z([3,'bg-white radius-36 margin-top-sm '])
Z(z[11])
Z(z[5])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,3]])
Z(z[2])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[5])
Z([[2,'!='],[[7],[3,'supportTel']],[1,'0']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_15_4);return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_4
}
__WXML_GLOBAL__.ops_set.$gwx_XC_15=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_15=true;
var x=['./pages/home/home.wxml','./pages/home/index1/index1.wxml','./pages/home/index4/index4.wxml','/pages/common/icon.wxml','./pages/home/index5/index5.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_15_1()
var e2H=_v()
_(r,e2H)
if(_oz(z,0,e,s,gg)){e2H.wxVkey=1
var f7H=_mz(z,'banner-notice',['noticeBtnClass',1,'noticeClass',1],[],e,s,gg)
_(e2H,f7H)
}
var b3H=_v()
_(r,b3H)
if(_oz(z,3,e,s,gg)){b3H.wxVkey=1
var c8H=_n('indexStop-component')
_(b3H,c8H)
}
else if(_oz(z,4,e,s,gg)){b3H.wxVkey=2
var h9H=_v()
_(b3H,h9H)
var o0H=function(oBI,cAI,lCI,gg){
var tEI=_mz(z,'view',['bindtap',8,'class',1,'data-currindex',2],[],oBI,cAI,gg)
var eFI=_v()
_(tEI,eFI)
if(_oz(z,11,oBI,cAI,gg)){eFI.wxVkey=1
}
var bGI=_v()
_(tEI,bGI)
if(_oz(z,12,oBI,cAI,gg)){bGI.wxVkey=1
}
eFI.wxXCkey=1
bGI.wxXCkey=1
_(lCI,tEI)
return lCI
}
h9H.wxXCkey=2
_2z(z,6,o0H,e,s,gg,h9H,'item','index','sid')
var oHI=_mz(z,'swiper',['bindchange',13,'catchanimationfinish',1,'class',2,'current',3,'style',4],[],e,s,gg)
var xII=_v()
_(oHI,xII)
var oJI=function(cLI,fKI,hMI,gg){
var cOI=_n('swiper-item')
var oPI=_v()
_(cOI,oPI)
if(_oz(z,21,cLI,fKI,gg)){oPI.wxVkey=1
var lQI=_mz(z,'index5-component',['bind:loadIndexCom',22,'componentClass',1,'lineDhList',2,'line_type',3,'next_page',4,'select_obj',5,'sid',6,'tabLen',7],[],cLI,fKI,gg)
_(oPI,lQI)
}
else if(_oz(z,30,cLI,fKI,gg)){oPI.wxVkey=2
var aRI=_mz(z,'index1-component',['bind:loadIndexCom',31,'componentClass',1,'line_type',2,'next_page',3,'select_obj',4,'sid',5,'tabLen',6],[],cLI,fKI,gg)
_(oPI,aRI)
}
else if(_oz(z,38,cLI,fKI,gg)){oPI.wxVkey=3
var tSI=_mz(z,'index4-component',['bind:loadIndexCom',39,'class',1,'componentClass',2,'lineDhList',3,'line_type',4,'next_page',5,'sid',6,'tabLen',7],[],cLI,fKI,gg)
_(oPI,tSI)
}
else if(_oz(z,47,cLI,fKI,gg)){oPI.wxVkey=4
var eTI=_mz(z,'travel-line-list',['bind:onTravelLineLoad',48,'class',1,'componentClass',2,'listStyle',3,'nextPage',4,'sid',5,'tabLen',6,'travelLineBoxClass',7,'travelLineContainerClass',8,'travelLineItemClass',9],[],cLI,fKI,gg)
_(oPI,eTI)
}
else{oPI.wxVkey=5
}
oPI.wxXCkey=1
oPI.wxXCkey=3
oPI.wxXCkey=3
oPI.wxXCkey=3
oPI.wxXCkey=3
_(hMI,cOI)
return hMI
}
xII.wxXCkey=4
_2z(z,19,oJI,e,s,gg,xII,'item','index','sid')
_(b3H,oHI)
}
else if(_oz(z,58,e,s,gg)){b3H.wxVkey=3
var bUI=_n('view')
_rz(z,bUI,'class',59,e,s,gg)
var oVI=_v()
_(bUI,oVI)
if(_oz(z,60,e,s,gg)){oVI.wxVkey=1
}
else if(_oz(z,61,e,s,gg)){oVI.wxVkey=2
var xWI=_v()
_(oVI,xWI)
var oXI=function(cZI,fYI,h1I,gg){
var c3I=_mz(z,'view',['bindtap',64,'class',1,'data-currindex',2],[],cZI,fYI,gg)
var o4I=_v()
_(c3I,o4I)
if(_oz(z,67,cZI,fYI,gg)){o4I.wxVkey=1
}
o4I.wxXCkey=1
_(h1I,c3I)
return h1I
}
xWI.wxXCkey=2
_2z(z,62,oXI,e,s,gg,xWI,'item','index','sid')
}
var l5I=_mz(z,'swiper',['bindchange',68,'catchanimationfinish',1,'class',2,'current',3,'style',4],[],e,s,gg)
var a6I=_v()
_(l5I,a6I)
var t7I=function(b9I,e8I,o0I,gg){
var oBJ=_n('swiper-item')
var fCJ=_v()
_(oBJ,fCJ)
if(_oz(z,76,b9I,e8I,gg)){fCJ.wxVkey=1
var cDJ=_n('view')
_rz(z,cDJ,'class',77,b9I,e8I,gg)
var hEJ=_v()
_(cDJ,hEJ)
if(_oz(z,78,b9I,e8I,gg)){hEJ.wxVkey=1
}
var oFJ=_mz(z,'index5-component',['bind:loadIndexCom',79,'componentClass',1,'hotLineItemClass',2,'lineDhList',3,'line_type',4,'next_page',5,'select_obj',6,'sid',7,'tabLen',8,'titleClass',9],[],b9I,e8I,gg)
_(cDJ,oFJ)
hEJ.wxXCkey=1
_(fCJ,cDJ)
}
else if(_oz(z,89,b9I,e8I,gg)){fCJ.wxVkey=2
var cGJ=_n('view')
_rz(z,cGJ,'class',90,b9I,e8I,gg)
var oHJ=_v()
_(cGJ,oHJ)
if(_oz(z,91,b9I,e8I,gg)){oHJ.wxVkey=1
}
var lIJ=_mz(z,'index-hot-line-component',['bind:onGrandChildHotLineLoad',92,'hotLineItemClass',1,'line_type',2,'next_page',3,'sid',4,'tabLen',5],[],b9I,e8I,gg)
_(cGJ,lIJ)
oHJ.wxXCkey=1
_(fCJ,cGJ)
}
else if(_oz(z,98,b9I,e8I,gg)){fCJ.wxVkey=3
var aJJ=_n('view')
_rz(z,aJJ,'class',99,b9I,e8I,gg)
var tKJ=_v()
_(aJJ,tKJ)
if(_oz(z,100,b9I,e8I,gg)){tKJ.wxVkey=1
}
var eLJ=_mz(z,'index1-component',['bind:loadIndexCom',101,'componentClass',1,'line_type',2,'next_page',3,'select_obj',4,'sid',5,'tabLen',6],[],b9I,e8I,gg)
_(aJJ,eLJ)
tKJ.wxXCkey=1
_(fCJ,aJJ)
}
else if(_oz(z,108,b9I,e8I,gg)){fCJ.wxVkey=4
var bMJ=_n('view')
_rz(z,bMJ,'class',109,b9I,e8I,gg)
var oNJ=_v()
_(bMJ,oNJ)
if(_oz(z,110,b9I,e8I,gg)){oNJ.wxVkey=1
}
var xOJ=_mz(z,'index4-component',['bind:loadIndexCom',111,'class',1,'componentClass',2,'hotLineItemClass',3,'lineDhList',4,'line_type',5,'next_page',6,'sid',7,'tabLen',8,'titleClass',9],[],b9I,e8I,gg)
_(bMJ,xOJ)
oNJ.wxXCkey=1
_(fCJ,bMJ)
}
else if(_oz(z,121,b9I,e8I,gg)){fCJ.wxVkey=5
var oPJ=_n('view')
_rz(z,oPJ,'class',122,b9I,e8I,gg)
var fQJ=_v()
_(oPJ,fQJ)
if(_oz(z,123,b9I,e8I,gg)){fQJ.wxVkey=1
}
var cRJ=_mz(z,'travel-line-list',['bind:onTravelLineLoad',124,'class',1,'componentClass',2,'listStyle',3,'nextPage',4,'sid',5,'tabLen',6,'travelLineBoxClass',7,'travelLineContainerClass',8,'travelLineItemClass',9],[],b9I,e8I,gg)
_(oPJ,cRJ)
fQJ.wxXCkey=1
_(fCJ,oPJ)
}
else{fCJ.wxVkey=6
var hSJ=_mz(z,'view',['bindtap',134,'class',1,'data-component_index',2,'data-next_page',3,'data-other_appid',4,'hoverClass',5],[],b9I,e8I,gg)
var oTJ=_v()
_(hSJ,oTJ)
if(_oz(z,140,b9I,e8I,gg)){oTJ.wxVkey=1
}
oTJ.wxXCkey=1
_(fCJ,hSJ)
}
fCJ.wxXCkey=1
fCJ.wxXCkey=3
fCJ.wxXCkey=3
fCJ.wxXCkey=3
fCJ.wxXCkey=3
fCJ.wxXCkey=3
_(o0I,oBJ)
return o0I
}
a6I.wxXCkey=4
_2z(z,74,t7I,e,s,gg,a6I,'item','index','sid')
_(bUI,l5I)
oVI.wxXCkey=1
_(b3H,bUI)
}
var o4H=_v()
_(r,o4H)
if(_oz(z,141,e,s,gg)){o4H.wxVkey=1
}
var x5H=_v()
_(r,x5H)
if(_oz(z,142,e,s,gg)){x5H.wxVkey=1
}
var cUJ=_mz(z,'index-float-btn',['isFullPage',143,'pageName',1],[],e,s,gg)
_(r,cUJ)
var o6H=_v()
_(r,o6H)
if(_oz(z,145,e,s,gg)){o6H.wxVkey=1
var oVJ=_n('privacy-popup')
_(o6H,oVJ)
}
e2H.wxXCkey=1
e2H.wxXCkey=3
b3H.wxXCkey=1
b3H.wxXCkey=3
b3H.wxXCkey=3
b3H.wxXCkey=3
o4H.wxXCkey=1
x5H.wxXCkey=1
o6H.wxXCkey=1
o6H.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_XC_15_2()
var aXJ=_v()
_(r,aXJ)
var tYJ=function(b1J,eZJ,o2J,gg){
var o4J=_mz(z,'view',['bindtap',2,'class',1,'data-end_city_id',2,'data-end_city_name',3,'data-id',4,'data-start_city_id',5,'data-start_city_name',6,'hoverClass',7],[],b1J,eZJ,gg)
var f5J=_v()
_(o4J,f5J)
if(_oz(z,10,b1J,eZJ,gg)){f5J.wxVkey=1
}
f5J.wxXCkey=1
_(o2J,o4J)
return o2J
}
aXJ.wxXCkey=2
_2z(z,0,tYJ,e,s,gg,aXJ,'item','index','id')
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_XC_15_3()
var h7J=e_[x[2]].i
_ai(h7J,x[3],e_,x[2],1,1)
var o8J=_v()
_(r,o8J)
if(_oz(z,0,e,s,gg)){o8J.wxVkey=1
var c9J=_mz(z,'hot-line',['bind:clickHotLineBtn',1,'bind:onHotLineComLoad',1,'hotLineItemClass',2,'lineType',3,'saveStorageKey',4],[],e,s,gg)
_(o8J,c9J)
}
else if(_oz(z,6,e,s,gg)){o8J.wxVkey=2
var o0J=_mz(z,'hotLineCollegeByType',['bind:clickHotLineBtn',7,'hotLineBoxClass',1,'hotLineCol',2,'hotLineContainerClass',3,'hotLineItemClass',4,'lineType',5],[],e,s,gg)
_(o8J,o0J)
}
else if(_oz(z,13,e,s,gg)){o8J.wxVkey=3
var lAK=_mz(z,'hot-line-college',['HotLineCollegeListType',14,'bind:clickHotLineBtn',1,'hotLineBoxClass',2,'hotLineCol',3,'hotLineContainerClass',4,'hotLineItemClass',5,'lineType',6],[],e,s,gg)
_(o8J,lAK)
}
else if(_oz(z,21,e,s,gg)){o8J.wxVkey=4
var aBK=_mz(z,'hotLineMultiLevel',['bind:clickHotLineBtn',22,'hotLineBoxClass',1,'hotLineCol',2,'hotLineContainerClass',3,'hotLineItemClass',4,'lineType',5],[],e,s,gg)
_(o8J,aBK)
}
var tCK=_n('index-tel')
_rz(z,tCK,'btnClass',28,e,s,gg)
_(r,tCK)
o8J.wxXCkey=1
o8J.wxXCkey=3
o8J.wxXCkey=3
o8J.wxXCkey=3
o8J.wxXCkey=3
h7J.pop()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[4]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_XC_15_4()
var bEK=_v()
_(r,bEK)
if(_oz(z,0,e,s,gg)){bEK.wxVkey=1
}
var oFK=_v()
_(r,oFK)
if(_oz(z,1,e,s,gg)){oFK.wxVkey=1
var oHK=_mz(z,'hot-line',['bind:clickHotLineBtn',2,'bind:onHotLineComLoad',1,'hotLineItemClass',2,'lineType',3],[],e,s,gg)
_(oFK,oHK)
}
else if(_oz(z,6,e,s,gg)){oFK.wxVkey=2
var fIK=_mz(z,'hotLineCollegeByType',['bind:clickHotLineBtn',7,'hotLineBoxClass',1,'hotLineCol',2,'hotLineContainerClass',3,'hotLineItemClass',4,'lineType',5],[],e,s,gg)
_(oFK,fIK)
}
else if(_oz(z,13,e,s,gg)){oFK.wxVkey=3
var cJK=_mz(z,'hot-line-college',['HotLineCollegeListType',14,'bind:clickHotLineBtn',1,'hotLineBoxClass',2,'hotLineCol',3,'hotLineContainerClass',4,'hotLineItemClass',5,'lineType',6],[],e,s,gg)
_(oFK,cJK)
}
else if(_oz(z,21,e,s,gg)){oFK.wxVkey=4
var hKK=_mz(z,'hotLineMultiLevel',['bind:clickHotLineBtn',22,'hotLineBoxClass',1,'hotLineCol',2,'hotLineContainerClass',3,'hotLineItemClass',4,'lineType',5],[],e,s,gg)
_(oFK,hKK)
}
var xGK=_v()
_(r,xGK)
if(_oz(z,28,e,s,gg)){xGK.wxVkey=1
}
bEK.wxXCkey=1
oFK.wxXCkey=1
oFK.wxXCkey=3
oFK.wxXCkey=3
oFK.wxXCkey=3
oFK.wxXCkey=3
xGK.wxXCkey=1
return r
}
e_[x[4]]={f:m3,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_15";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_15();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/home/home.wxml'] = [$gwx_XC_15, './pages/home/home.wxml'];else __wxAppCode__['pages/home/home.wxml'] = $gwx_XC_15( './pages/home/home.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/home/index1/index1.wxml'] = [$gwx_XC_15, './pages/home/index1/index1.wxml'];else __wxAppCode__['pages/home/index1/index1.wxml'] = $gwx_XC_15( './pages/home/index1/index1.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/home/index4/index4.wxml'] = [$gwx_XC_15, './pages/home/index4/index4.wxml'];else __wxAppCode__['pages/home/index4/index4.wxml'] = $gwx_XC_15( './pages/home/index4/index4.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/home/index5/index5.wxml'] = [$gwx_XC_15, './pages/home/index5/index5.wxml'];else __wxAppCode__['pages/home/index5/index5.wxml'] = $gwx_XC_15( './pages/home/index5/index5.wxml' );
	;__wxRoute = "pages/home/home";__wxRouteBegin = true;__wxAppCurrentFile__="pages/home/home.js";define("pages/home/home.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/toConsumableArray");require("../../@babel/runtime/helpers/Arrayincludes");var t=require("../../@babel/runtime/helpers/regeneratorRuntime"),a=require("../../@babel/runtime/helpers/asyncToGenerator"),n=getApp(),i=require("../../8A94E9619105A88CECF281668574FB65.js").getSupplierType;Page({data:{staticHost:n.config.staticHost,primary:n.globalData.corpXcx.primary,select_obj:{beginCity:"请选择出发地",beginCityCode:"",beginCityName:"请选择",beginDisCode:"",beginDisName:"",endCity:"请选择到达地",endCityCode:"",endCityName:"请选择",endDisName:"",endDisCode:"",lineDhList:[]},index:n.globalData.corp.index,currentIndex:1,home_tab_list:n.globalData.home_tab_list,swiperMaxHeight:500,swiperHeightList:[],indexSupportName:"",homePage:"home2",showPrivacyPopup:!1,travelLineContainerClass:"bg-white",travelLineBoxClass:"padding-lr-sm",travelLineItemClass:"radius-16",travelLineListStyle:1,tabStyle:1},onLoad:function(e){var o=this,r=this;if(wx.setNavigationBarTitle({title:n.globalData.corp.corpName}),n.getCorpXcxInfo((function(){wx.setNavigationBarTitle({title:n.globalData.corp.corpName});var t=n.globalData.home_tab_list,a=t.length,i=1,o=[];if(n.util.isNotNull(t))for(var l=0;l<a;l++)1==t[l].default_actvie&&(i=l),o.push(n.globalData.systemInfo.windowHeight);n.util.isNotNull(e.currentIndex)&&e.currentIndex<=a+1&&(i=+n.util.positiveInteger(e.currentIndex));var c=n.globalData.corpXcx.indexSupportName;null==n.globalData.corpXcx.indexSupportName&&(c=n.config.indexSupportName);var s=n.globalData.corp.ID,u=r.data.homePage,d=r.data.showPrivacyPopup,g=1;["zjjncx","nzpw"].includes(s)?u="home1":["hzzhcx","wwcaky","mqcx","bycx","jqcx","ytcxing","hzcx"].includes(s)?d=!0:["ycx"].includes(s)&&(g=2,u="home2"),n.config.indexBtnJudgeHotLineCorpList.includes(n.globalData.corp.ID)&&r.handleGetHotLine(),r.setData({index:n.globalData.corp.index,indexSupportName:c,currentIndex:i,home_tab_list:t,tabLen:a,swiperHeightList:o,homePage:u,showPrivacyPopup:d,tabStyle:g})})),n.doLogin(a(t().mark((function e(){var a;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i(),(a=o.selectComponent(".travelLineListComponent"))&&a.getTravelLineList();case 3:case"end":return e.stop()}}),e)})))),n.util.isNotNull(e.sourceid)&&(n.globalData.sourceid=e.sourceid),n.util.isNotNull(e.scene)&&-1!==e.scene.indexOf("sourceid")){var l=e.scene.replace(/[^\d.]/g,"");n.globalData.sourceid=l}},onReady:function(){},onShow:function(){try{var e=wx.getStorageSync(n.globalData.corp.appid+"_select_obj");console.log(e),e&&this.setData({select_obj:e}),wx.removeStorageSync(n.globalData.corp.appid+"_share_obj")}catch(e){console.log(e)}},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){wx.stopPullDownRefresh()},onReachBottom:function(){},onShareAppMessage:function(){return{title:n.globalData.shareData.title,path:n.globalData.corpXcx.tabBarHome}},onShareTimeline:function(){return{title:n.globalData.shareData.title,imageUrl:n.globalData.corpXcx.shareCouponImgUrl,query:""}},_tabSelect:function(e){console.log("_tabSelect",e);var t=e.currentTarget.dataset.currindex,a=this.data.home_tab_list,n=a[t].component_index;["linkUrl","navigateTo","toOtherMiniProgram"].includes(n)?this.handleClickNavigate(n,a[t].next_page,a[t].to_other_appid):this.setData({currentIndex:t})},handleClickBtn:function(e){this.handleClickNavigate(e.currentTarget.dataset.component_index,e.currentTarget.dataset.next_page,e.currentTarget.dataset.other_appid)},handleClickNavigate:function(e,t,a){if(console.log("handleClickNavigate 参数",e,t,a),"linkUrl"==e)n.util.isNotNull(t)&&-1!=t.indexOf("http")?(t=encodeURIComponent(t),wx.navigateTo({url:"/pages/webview/webview?web_url="+t})):console.log("跳转配置参数有误，外部链接跳转地址不正确");else if("navigateTo"==e){if(n.util.isNull(t))return void console.log("跳转配置参数有误，小程序跳转地址不正确");if(-1!=t.indexOf("http"))return;if(0!==t.indexOf("/package/")&&0!==t.indexOf("/pages/"))return void n.util.showMsg("小程序页面路径设置有误");"/pages/index/index"==t||"/pages/cx/cx"==t||"/pages/user_center/user_center"==t?wx.switchTab({url:t}):wx.navigateTo({url:t})}else"toOtherMiniProgram"==e&&n.util.goOtherMiniApp(a,t)},handleSwiperChange:function(e){console.log("handleSwiperChange",e);"touch"===e.detail.source&&this.setData({currentIndex:e.detail.current})},handleLoadIndexCom:function(t){var a=this;console.log("handleLoadIndexCom sid",t);var i=a.data.swiperMaxHeight,o=a.data.swiperHeightList,r=t.detail.sid,l=a.data.home_tab_list,c=".".concat(l[r].component_index,"_").concat(l[r].sid);wx.createSelectorQuery().select(c).boundingClientRect((function(t){o[r]=t?t.height:n.globalData.systemInfo.windowHeight,i=o.length>1?Math.max.apply(Math,e(o)):o[0],a.setData({swiperHeightList:o,swiperMaxHeight:i})})).exec()},onAnimationFinish:function(e){console.log("onAnimationFinish",e)},handleGetHotLine:function(e){var i=this;return a(t().mark((function e(){var a,o;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i,o={action:"line.lineDhList",account:n.globalData.corp.account,lineType:""},e.next=4,n.network.requestPOST(o).then((function(e){var t=[];e.success&&(t=e.data||[],a.setData({lineDhList:t}))})).catch((function(e){console.log("handleGetHotLine err",e)}));case 4:case"end":return e.stop()}}),e)})))()}});
},{isPage:false,isComponent:true,currentFile:'pages/home/home.js'});require("pages/home/home.js");;__wxRoute = "pages/home/index1/index1";__wxRouteBegin = true;__wxAppCurrentFile__="pages/home/index1/index1.js";define("pages/home/index1/index1.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=getApp();Component({properties:{select_obj:{type:Object,observer:function(e,t,a){}},line_type:{type:String,value:""},next_page:{type:String,value:""},sid:{},tabLen:{},componentClass:{value:"",type:null}},data:{primary:e.globalData.corpXcx.primary,lineColNum:2},methods:{_btn_query:function(t){var a={corpid:e.globalData.corp.ID,tripDate:this.data.tripDate,beginCityName:t.currentTarget.dataset.start_city_name,beginCityCode:t.currentTarget.dataset.start_city_id,endCityName:t.currentTarget.dataset.end_city_name,endCityCode:t.currentTarget.dataset.end_city_id},i="?"+e.util.enQueryString(a),l=this.data.next_page,n="";if("interval2"===l)n=e.config.pagesUrl.interval2_url;else if("interval21"===l)n=e.config.pagesUrl.interval21_url;else if("interval22"===l)n=e.config.pagesUrl.interval22_url;else if("interval221"===l)n=e.config.pagesUrl.interval221_url;else if("interval23"===l)n=e.config.pagesUrl.interval23_url;else if("interval24"===l)n=e.config.pagesUrl.interval24_url;else if("interval3"===l)n=e.config.pagesUrl.interval3_url;else if("interval31"===l)n=e.config.pagesUrl.interval31_url;else if("interval"===l)wx.setStorageSync(e.globalData.corp.appid+"_select_obj",a),n="/package/index4/pages/select_address/select_address";else if("interval11"===l)n="/package/interval11/pages/selectAddress/selectAddress";else if("selectDate"==l)n="/package/index4/pages/select_date/select_date";else{if("intervalCommute"!==l)return void e.util.showMsg("请检查拓展参数配置");i="?lineId="+t.currentTarget.dataset.id,n="/package/intervalCommute/intervalCommute"}console.log("url + param",n+i),wx.navigateTo({url:n+i})},_getLine:function(t){var a=this,i=a.data.lineColNum,l=wx.getStorageSync(e.globalData.corp.appid+"_lineList");l&&(l.length<5&&(i=1),a.setData({lineColNum:i,lineList:l}));var n={action:"line.getLineList",account:e.globalData.corp.account,lineType:a.data.line_type};console.log("_data",n),e.network.request("/api/wg.do",n,(function(t){wx.setStorageSync(e.globalData.corp.appid+"_lineList",t.data),t.success?(i=t.data.length<5?1:2,a.setData({lineColNum:i,lineList:t.data})):e.util.showMsg(t.message)}),(function(){}),(function(){a.triggerEvent("loadIndexCom",{sid:a.data.sid})}))}},attached:function(){},ready:function(){console.log("index1 ready");this._getLine();var t=e.util.formatShortTime(new Date);this.setData({tripDate:t,showDate:e.util.formatDate(t)+" "+e.util.getWeekName(t)}),wx.setStorageSync("tripDate",t)}});
},{isPage:false,isComponent:true,currentFile:'pages/home/index1/index1.js'});require("pages/home/index1/index1.js");;__wxRoute = "pages/home/index4/index4";__wxRouteBegin = true;__wxAppCurrentFile__="pages/home/index4/index4.js";define("pages/home/index4/index4.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../8A94E9619105A88CECF281668574FB65.js").handleToHKMOPage,t=getApp();Component({properties:{line_type:{type:String,value:""},next_page:{type:String,value:""},hotLineType:{type:String,value:"1"},sid:{},tabLen:{},componentClass:{value:"",type:null},titleClass:{value:"",type:null},hotLineItemClass:{type:String,value:""},selectCityNavBack:{value:!1,type:null},lineDhList:{type:Array,value:[]}},data:{primary:t.globalData.corpXcx.primary,staticHost:t.config.staticHost,select_obj:{beginCity:"请选择出发地",beginCityCode:"",beginCityName:"请选择",beginDisCode:"",beginDisName:"",endCity:"请选择到达地",endCityName:"请选择",endCityCode:"",endDisName:"",endDisCode:""},tripDate:void 0,rotate:0,isChanging:!1,rotateKey:180},methods:{_select_objChange:function(e,i,a){var l=e;console.log("index4");try{if(l){t.util.isNull(l.beginCityName)&&(l.beginCityName="请选择"),t.util.isNull(l.endCityName)&&(l.endCityName="请选择"),this.setData({select_obj:l});var n=wx.getStorageSync("tripDate");t.util.isNotNull(n)&&this.setData({tripDate:n})}}catch(e){console.log(e)}},_selectBeginCity:function(e){wx.navigateTo({url:t.globalData.corpXcxExt.selectCityUrl+"?select=begin&line_type="+this.data.line_type+"&saveStorageKey=_select_obj_index4"+this.data.sid+"&selectCityNavBack="+this.data.selectCityNavBack})},_selectEndCity:function(e){if(t.util.isNull(this.data.select_obj.beginCityCode))t.util.showMsg("请选择出发城市！");else{var i=this.data.select_obj;console.log(i),wx.setStorageSync(t.globalData.corp.appid+"_select_obj_index4"+this.data.sid,i),wx.navigateTo({url:t.globalData.corpXcxExt.selectCityUrl+"?select=end&line_type="+this.data.line_type+"&saveStorageKey=_select_obj_index4"+this.data.sid+"&selectCityNavBack="+this.data.selectCityNavBack})}},_change:function(){var e=this;if(!e.data.isChanging){e.animation1(),clearTimeout(t.globalData.timerTem);var i=setTimeout((function(){e._do_change()}),200);t.globalData.timerTem=i}},_do_change:function(e){var i=this.data.select_obj.beginCityName,a=this.data.select_obj.beginCity,l=this.data.select_obj.beginCityCode,n={beginCityName:this.data.select_obj.endCityName,beginCity:this.data.select_obj.endCity,beginCityCode:this.data.select_obj.endCityCode,beginAddressCode:"",beginAddressName:"请选择上车站点",endCity:a,endCityName:i,endCityCode:l,endAddressCode:"",endAddressName:"请选择下车站点"};this.setData({select_obj:n}),wx.setStorageSync(t.globalData.corp.appid+"_select_obj_index4"+this.data.sid,n),clearTimeout(t.globalData.timerTem)},animation1:function(){var e=this,t=180==e.data.rotateKey?-180:180;e.setData({rotateKey:t,isChanging:!0}),e.animate(".icon_change",[{rotate:0},{rotate:t}],400,(function(){e.clearAnimation(".icon_change",{rotate:!0})})),e.animate(".animationStartCity",[{opacity:1,translateY:0},{opacity:0,translateY:27},{opacity:1,translateY:0}],400,(function(){e.clearAnimation(".animationStartCity",{opacity:!0,translateY:!0}),e.setData({isChanging:!1})})),e.animate(".animationEndCity",[{opacity:1,translateY:0},{opacity:0,translateY:-27},{opacity:1,translateY:0}],400,(function(){console.log("动画完成 endCityName"),e.clearAnimation(".animationEndCity",{opacity:!0,translateY:!0})}))},_btn_query:function(e){var i=this.data.select_obj.beginCityCode,a=this.data.select_obj.endCityCode;if(t.util.isNull(i))t.util.showMsg("请选择出发城市！");else if(t.util.isNull(a))t.util.showMsg("请选择到达城市！");else{var l="",n="",o=this.redirectPageBylineDh(i,a);if(o){l=o.startAreaId||"",n=o.endAreaId||"";var s={corpid:t.globalData.corp.ID,tripDate:this.data.tripDate,beginCityName:this.data.select_obj.beginCityName,beginCityCode:this.data.select_obj.beginCityCode,startAreaId:l||"",endCityCode:this.data.select_obj.endCityCode,endCityName:this.data.select_obj.endCityName,endAreaId:n||""};this._goto_next_page(s)}}},handleClickHotLineBtn:function(e){e.detail.ticket_obj.corpid=t.globalData.corp.ID,console.log("e.detail.ticket_obj",e.detail.ticket_obj),this._goto_next_page(e.detail.ticket_obj)},handleOnHotLineComLoad:function(e){this.triggerEvent("loadIndexCom",{sid:this.data.sid})},_goto_next_page:function(i){t.util.isNull(i)&&(i={corpid:t.globalData.corp.ID,tripDate:this.data.tripDate,beginCityName:this.data.select_obj.beginCityName,beginCityCode:this.data.select_obj.beginCityCode,endCityCode:this.data.select_obj.endCityCode,endCityName:this.data.select_obj.endCityName}),wx.setStorageSync(t.globalData.corp.appid+"_select_obj_index4"+this.data.sid,i);var a="?"+t.util.enQueryString(i),l=this.data.next_page,n=t.config.pagesUrl.interval2_url;if(console.log("next_page",l),"selectDate"===l)n="/package/index4/pages/select_date/select_date";else if("interval2"===l)n=t.config.pagesUrl.interval2_url;else if("interval21"===l)n=t.config.pagesUrl.interval21_url;else if("interval22"===l)n=t.config.pagesUrl.interval22_url;else if("interval221"===l)n=t.config.pagesUrl.interval221_url;else if("interval23"===l)n=t.config.pagesUrl.interval23_url;else if("interval24"===l)n=t.config.pagesUrl.interval24_url;else if("interval3"===l)n=t.config.pagesUrl.interval3_url;else if("interval31"===l)n=t.config.pagesUrl.interval31_url;else if("interval"===l||"intervalSwc"===l)n="/package/index4/pages/select_address/select_address";else if("interval11"===l)n="/package/interval11/pages/selectAddress/selectAddress";else{if("intervalCommute"!==l)return void t.util.showMsg("请检查拓展参数配置");n="/package/intervalCommute/intervalCommute"}var o=e({url:n+a,ticketObj:i}).redirectUrl;wx.navigateTo({url:o})},redirectPageBylineDh:function(e,i){if(t.config.indexBtnJudgeHotLineCorpList.includes(t.globalData.corp.ID)){var a=this.data.lineDhList.find((function(t){return e==t.startCityId&&i==t.endCityId}));if(a){var l=a.otherAppid,n=a.pagePath,o=a.startAreaId,s=a.endAreaId;if(t.util.isNotNull(l)||t.util.isNotNull(n))return t.util.isNotNull(l)&&t.util.isNotNull(n)?t.util.goOtherMiniApp(l,n):t.util.isNotNull(n)?t.util.routerToPage(n):t.util.showMsg("常用线路参数有误，缺少页面路径"),!1;if(t.util.isNotNull(o)||t.util.isNotNull(s))return{startAreaId:o,endAreaId:s}}return{}}return{}}},lifetimes:{ready:function(){var e=t.util.formatShortTime(new Date);this.setData({tripDate:e,rotate:"180-load"}),wx.setStorageSync("tripDate",e)},detached:function(){clearTimeout(t.globalData.timerTem)}},pageLifetimes:{show:function(){console.log("show12334");try{var e=wx.getStorageSync(t.globalData.corp.appid+"_select_obj_index4"+this.data.sid);console.log("select_obj444",e),e&&(t.util.isNull(e.beginCityName)&&(e.beginCityName="请选择"),t.util.isNull(e.endCityName)&&(e.endCityName="请选择"),this.setData({select_obj:e})),clearTimeout(t.globalData.timerTem)}catch(e){console.log(e)}}}});
},{isPage:false,isComponent:true,currentFile:'pages/home/index4/index4.js'});require("pages/home/index4/index4.js");;__wxRoute = "pages/home/index5/index5";__wxRouteBegin = true;__wxAppCurrentFile__="pages/home/index5/index5.js";define("pages/home/index5/index5.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../@babel/runtime/helpers/Arrayincludes");var e=getApp();Component({properties:{line_type:{type:String,value:""},next_page:{type:String,value:""},hotLineType:{type:String,value:"1"},sid:{},tabLen:{},componentClass:{value:"",type:null},titleClass:{value:"",type:null},hotLineItemClass:{type:String,value:""},selectCityNavBack:{value:!1,type:null},lineDhList:{type:Array,value:[]}},data:{primary:e.globalData.corpXcx.primary,staticHost:e.config.staticHost,select_obj:{beginCity:"请选择出发地",beginCityCode:"",beginCityName:"请选择",beginDisCode:"",beginDisName:"",endCity:"请选择到达地",endCityName:"请选择",endCityCode:"",endDisName:"",endDisCode:""},beginAddress:{ID:0,name:"请选择上车站点"},endAddress:{ID:0,name:"请选择下车站点"},endAdressId:0,tripDate:void 0,showDate:void 0,supportTel:"0",isChanging:!1,rotateKey:!0,showCharterCar:!1},methods:{_select_objChange:function(t,a,i){var n=t;console.log("index5 _select_objChange");try{if(n){e.util.isNull(n.beginCityName)&&(n.beginCityName="请选择"),e.util.isNull(n.endCityName)&&(n.endCityName="请选择"),this.setData({select_obj:n});var s=wx.getStorageSync("tripDate");e.util.isNotNull(s)&&this.setData({tripDate:s,showDate:e.util.formatDate(s)+" "+e.util.getWeekName(s)})}}catch(e){console.log(e)}},_selectBeginCity:function(t){wx.navigateTo({url:e.globalData.corpXcxExt.selectCityUrl+"?select=begin&line_type="+this.data.line_type+"&saveStorageKey=_select_obj_index5"+this.data.sid+"&selectCityNavBack="+this.data.selectCityNavBack})},_selectEndCity:function(t){e.util.isNull(this.data.select_obj.beginCityCode)?e.util.showMsg("请先选择出发城市！"):(wx.setStorageSync(e.globalData.corp.appid+"_select_obj_index5"+this.data.sid,this.data.select_obj),console.log(this.data.select_obj),wx.navigateTo({url:e.globalData.corpXcxExt.selectCityUrl+"?select=end&line_type="+this.data.line_type+"&saveStorageKey=_select_obj_index5"+this.data.sid+"&selectCityNavBack="+this.data.selectCityNavBack}))},_change:function(e){this.data.isChanging||this.animation1()},_do_change:function(){var t=this.data.select_obj.beginDisCode,a=this.data.select_obj.beginCityName,i=this.data.select_obj.beginCity,n=this.data.select_obj.beginCityCode,s=this.data.select_obj.beginDisName,l={beginCityName:this.data.select_obj.endCityName,beginCity:this.data.select_obj.endCity,beginDisCode:this.data.select_obj.endDisCode,beginDisName:this.data.select_obj.endDisName,beginCityCode:this.data.select_obj.endCityCode,beginAddressCode:"",beginAddressName:"请选择上车站点",endCity:i,endCityName:a,endCityCode:n,endDisCode:t,endDisName:s,endAddressCode:"",endAddressName:"请选择下车站点"};this.setData({select_obj:l}),wx.setStorageSync(e.globalData.corp.appid+"_select_obj_index5"+this.data.sid,l)},animation1:function(){var e=this;e.animationRotate(),e.animate(".animationStartCity",[{opacity:1,translateX:0},{opacity:.2,translateX:150}],200,(function(){console.log("切换城市 动画前半部分完成"),e.animation2(),e._do_change()})),e.animate(".animationEndCity",[{opacity:1,translateX:0},{opacity:.2,translateX:-150}],200)},animation2:function(){var e=this;e.animate(".animationStartCity",[{opacity:.2,translateX:150},{opacity:1,translateX:0}],200,(function(){e.clearAnimation(".animationStartCity",{opacity:!0,translateX:!0},(function(){}))})),e.animate(".animationEndCity",[{opacity:.2,translateX:-150},{opacity:1,translateX:0}],200,(function(){console.log("finish后半部分 endCityName"),e.clearAnimation(".animationEndCity",{opacity:!0,translateX:!0})}))},animationRotate:function(){var e=this,t=!e.data.rotateKey,a=t?180:-180;e.setData({rotateKey:t,isChanging:!0}),e.animate(".icon_change",[{rotate:0},{rotate:a}],400,(function(){e.clearAnimation(".icon_change",{rotate:!0}),e.setData({isChanging:!1})}))},_selectBeginAddress:function(e){wx.navigateTo({url:"/package/index2/pages/select_address/select_address?select=begin"})},_selectEndAddress:function(){wx.navigateTo({url:"/package/index2/pages/select_address/select_address?select=end"})},_selectDate:function(){var t=this.data.select_obj.beginCityCode,a=this.data.select_obj.endCityCode;if(e.util.isNull(t))e.util.showMsg("请选择出发城市！");else if(e.util.isNull(a))e.util.showMsg("请选择到达城市！");else{var i="",n="",s=this.redirectPageBylineDh(t,a);if(!s)return;i=s.startAreaId||"",n=s.endAreaId||"";var l=wx.getStorageSync(e.globalData.corp.appid+"_select_obj_index5"+this.data.sid);console.log(l),l.startAreaId=i,l.endAreaId=n;var o=Object.keys(l).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(l[e])})).join("&");wx.navigateTo({url:"/package/index4/pages/select_date/select_date?tripDate="+this.data.tripDate+"&"+o+"&intervalPage="+this.data.next_page})}},_btn_query:function(t){var a=this.data.select_obj.beginCityCode,i=this.data.select_obj.endCityCode;if(e.util.isNull(a))e.util.showMsg("请选择出发城市！");else if(e.util.isNull(i))e.util.showMsg("请选择到达城市！");else{var n="",s="",l=this.redirectPageBylineDh(a,i);if(l){n=l.startAreaId||"",s=l.endAreaId||"";var o={corpid:e.globalData.corp.ID,tripDate:this.data.tripDate,beginCityName:this.data.select_obj.beginCityName,beginCityCode:this.data.select_obj.beginCityCode,startAreaId:n||"",endCityCode:this.data.select_obj.endCityCode,endCityName:this.data.select_obj.endCityName,endAreaId:s||""};this._goto_next_page(o)}}},handleClickHotLineBtn:function(t){t.detail.ticket_obj.corpid=e.globalData.corp.ID,console.log("e.detail.ticket_obj",t.detail.ticket_obj),this._goto_next_page(t.detail.ticket_obj)},handleOnHotLineComLoad:function(e){this.triggerEvent("loadIndexCom",{sid:this.data.sid})},_goto_next_page:function(t){e.util.isNull(t)&&(t={corpid:e.globalData.corp.ID,tripDate:this.data.tripDate,beginCityName:this.data.select_obj.beginCityName,beginCityCode:this.data.select_obj.beginCityCode,endCityCode:this.data.select_obj.endCityCode,endCityName:this.data.select_obj.endCityName});var a="?"+e.util.enQueryString(t),i=this.data.next_page,n=e.config.pagesUrl.interval2_url;if(console.log("next_page",i),"interval2"===i)n=e.config.pagesUrl.interval2_url;else if("interval21"===i)n=e.config.pagesUrl.interval21_url;else if("interval22"===i)n=e.config.pagesUrl.interval22_url;else if("interval221"===i)n=e.config.pagesUrl.interval221_url;else if("interval23"===i)n=e.config.pagesUrl.interval23_url;else if("interval24"===i)n=e.config.pagesUrl.interval24_url;else if("interval3"===i)n=e.config.pagesUrl.interval3_url;else if("interval31"===i)n=e.config.pagesUrl.interval31_url;else if("interval"===i||"intervalSwc"===i)n="/package/index4/pages/select_address/select_address";else if("interval11"===i)n="/package/interval11/pages/selectAddress/selectAddress";else{if("intervalCommute"!==i)return void e.util.showMsg("请检查拓展参数配置");n="/package/intervalCommute/intervalCommute"}console.log(n+a),wx.navigateTo({url:n+a}),wx.setStorageSync(e.globalData.corp.appid+"_ticket_obj",t),wx.setStorageSync(e.globalData.corp.appid+"_select_obj_index5"+this.data.sid,t)},handleMakePhoneCall:function(t){e.util.makePhoneCallArray(t.currentTarget.dataset.tel,t.currentTarget.dataset.telName)},goCharterCar:function(){wx.navigateTo({url:"/package/charterCar/pages/charterCarIndex/charterCarIndex"})},redirectPageBylineDh:function(t,a){if(e.config.indexBtnJudgeHotLineCorpList.includes(e.globalData.corp.ID)){var i=this.data.lineDhList.find((function(e){return t==e.startCityId&&a==e.endCityId}));if(i){var n=i.otherAppid,s=i.pagePath,l=i.startAreaId,o=i.endAreaId;if(e.util.isNotNull(n)||e.util.isNotNull(s))return e.util.isNotNull(n)&&e.util.isNotNull(s)?e.util.goOtherMiniApp(n,s):e.util.isNotNull(s)?e.util.routerToPage(s):e.util.showMsg("常用线路参数有误，缺少页面路径"),!1;if(e.util.isNotNull(l)||e.util.isNotNull(o))return{startAreaId:l,endAreaId:o}}return{}}return{}}},lifetimes:{attached:function(){var t=!1;["hzzhcx","wwcaky","mqcx","bycx","hhzwss","hdhd","kkys","xqkcx","hzcx","ltly","xxbs"].includes(e.globalData.corp.ID)&&(t=!0),this.setData({showCharterCar:t})},ready:function(){console.log("index5 ready");var t=e.util.formatShortTime(new Date);this.setData({tripDate:t,showDate:e.util.formatDate(t)+" "+e.util.getWeekName(t)}),wx.setStorageSync("tripDate",t)}},pageLifetimes:{show:function(){try{var t=wx.getStorageSync(e.globalData.corp.appid+"_select_obj_index5"+this.data.sid);console.log("select_obj555",t),t&&(e.util.isNull(t.beginCityName)&&(t.beginCityName="始发地"),e.util.isNull(t.endCityName)&&(t.endCityName="到达地"),this.setData({select_obj:t}))}catch(e){console.log(e)}}}});
},{isPage:false,isComponent:true,currentFile:'pages/home/index5/index5.js'});require("pages/home/index5/index5.js");$gwx_XC_16=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_16 || [];
function gz$gwx_XC_16_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([a,[3,'radius-26 '],[[2,'?:'],[[2,'=='],[[7],[3,'bannerType']],[1,0]],[1,''],[1,'hide']]])
Z(z[1][1])
Z([3,'handleOnNoticeLoad'])
Z([3,'banner-notice '])
Z(z[0])
Z([3,'round'])
Z([3,'hide'])
Z([3,'678'])
Z([[6],[[7],[3,'noticeList']],[3,'length']])
Z([[2,'&&'],[[7],[3,'home_tab_list']],[[6],[[7],[3,'home_tab_list']],[3,'length']]])
Z([[2,'=='],[[7],[3,'tabStyle']],[1,1]])
Z([3,'item'])
Z([[7],[3,'home_tab_list']])
Z([3,'sid'])
Z([3,'_tabSelect'])
Z([a,[3,'flex-sub tab-box '],[[2,'?:'],[[2,'!=='],[[7],[3,'currentIndex']],[[6],[[7],[3,'item']],[3,'sid']]],[1,''],[1,'selected bg-white text-bold text']],[3,'-'],[[7],[3,'primary']],[3,' '],[[6],[[7],[3,'item']],[3,'tab_class']]])
Z([[7],[3,'index']])
Z([[2,'=='],[[7],[3,'currentIndex']],[[6],[[7],[3,'item']],[3,'sid']]])
Z(z[18])
Z([[2,'=='],[[7],[3,'tabStyle']],[1,2]])
Z(z[13])
Z(z[14])
Z(z[15])
Z([a,[3,'tab-item flex-sub text-center padding-top-sm padding-bottom-xs position-relative '],[[2,'?:'],[[2,'=='],[[7],[3,'currentIndex']],[[7],[3,'index']]],[1,'bg-white'],[1,'']]])
Z(z[17])
Z([[2,'=='],[[7],[3,'currentIndex']],[[7],[3,'index']]])
Z([3,'handleSwiperChange'])
Z([3,'onAnimationFinish'])
Z([3,'margin-lr-36 body-container'])
Z([[7],[3,'currentIndex']])
Z([a,[3,'height:'],[[7],[3,'swiperMaxHeight']],[3,'px']])
Z(z[12])
Z(z[13])
Z(z[14])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'component_index']],[1,'index5']])
Z([3,'handleOnGrandChildHotLineLoad'])
Z([3,'index5-component'])
Z([3,'cRadius'])
Z([3,'light'])
Z([[7],[3,'lineDhList']])
Z([[6],[[7],[3,'item']],[3,'line_type']])
Z([[6],[[7],[3,'item']],[3,'next_page']])
Z([[7],[3,'select_obj']])
Z([[6],[[7],[3,'item']],[3,'sid']])
Z([[7],[3,'tabLen']])
Z([3,'banner'])
Z([[2,'!='],[[7],[3,'bannerType']],[1,0]])
Z([3,'radius-26'])
Z(z[1][1])
Z([3,'handleOnFirstBannerLoad'])
Z([3,'banner-notice'])
Z([1,false])
Z(z[44])
Z(z[6])
Z(z[7])
Z(z[8])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'component_index']],[1,'index1']])
Z([3,'handleLoadIndexCom'])
Z(z[38])
Z(z[41])
Z(z[42])
Z(z[43])
Z(z[44])
Z(z[45])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'component_index']],[1,'index4']])
Z(z[36])
Z(z[38])
Z(z[39])
Z(z[40])
Z(z[41])
Z(z[42])
Z(z[44])
Z(z[45])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'component_index']],[1,'indexHotLine']])
Z(z[36])
Z(z[39])
Z([[7],[3,'componentHotLineType']])
Z(z[41])
Z(z[42])
Z(z[44])
Z(z[45])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'component_index']],[1,'indexTravelLine']])
Z(z[58])
Z([3,'travelLineListComponent'])
Z(z[38])
Z([[7],[3,'travelLineListStyle']])
Z(z[42])
Z(z[44])
Z(z[45])
Z([[7],[3,'travelLineBoxClass']])
Z([[7],[3,'travelLineContainerClass']])
Z([[7],[3,'travelLineItemClass']])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,2]])
Z([3,'handleClickHotLineBtn'])
Z([[7],[3,'hotLineBoxClass']])
Z([[7],[3,'hotLineCol']])
Z([[7],[3,'hotLineContainerClass']])
Z([[7],[3,'hotLineItemClass']])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,22]])
Z(z[94])
Z(z[97])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,3]])
Z(z[94])
Z(z[95])
Z(z[96])
Z(z[97])
Z(z[98])
Z([[2,'=='],[[6],[[7],[3,'home_tab_list']],[3,'length']],[1,0]])
Z([[7],[3,'indexSupportName']])
Z([3,'index-float-btn'])
Z([3,'home'])
Z([[7],[3,'showContactStaffBtn']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
}
function gz$gwx_XC_16_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_16_2)return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_2
__WXML_GLOBAL__.ops_cached.$gwx_XC_16_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'lineList']])
Z([3,'id'])
Z([3,'_btn_query'])
Z([a,[3,'my-bg-white round bg-'],[[6],[[7],[3,'item']],[3,'color']]])
Z([[6],[[7],[3,'item']],[3,'endCityId']])
Z([[6],[[7],[3,'item']],[3,'endCityName']])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([[6],[[7],[3,'item']],[3,'startCityId']])
Z([[6],[[7],[3,'item']],[3,'startCityName']])
Z([3,'button-hover'])
Z([[6],[[7],[3,'item']],[3,'remark']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_16_2);return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_2
}
function gz$gwx_XC_16_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_16_3)return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_3
__WXML_GLOBAL__.ops_cached.$gwx_XC_16_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleClickHistoryBtn'])
Z([3,'index-search-history'])
Z([3,'handleClickHotLineBtn'])
Z([3,'handleOnHotLineComLoad'])
Z([[7],[3,'hotLineItemClass']])
Z([[7],[3,'line_type']])
Z([3,'_select_obj_index4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_16_3);return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_3
}
function gz$gwx_XC_16_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_16_4)return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_4
__WXML_GLOBAL__.ops_cached.$gwx_XC_16_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'main '],[[2,'?:'],[[2,'!='],[[7],[3,'sid']],[1,0]],[1,'top-left-radius'],[1,'']],[3,' '],[[2,'?:'],[[2,'!='],[[7],[3,'sid']],[[2,'-'],[[7],[3,'tabLen']],[1,1]]],[1,'top-right-radius'],[1,'']],[3,' '],[[7],[3,'componentClass']]])
Z([[7],[3,'showCharterCar']])
Z([3,'handleClickHistoryBtn'])
Z([3,'index-search-history'])
Z([3,'banner'])
Z([3,'handleClickHotLineBtn'])
Z([3,'handleOnHotLineComLoad'])
Z([3,'text-lg'])
Z([[7],[3,'hotLineItemClass']])
Z([[7],[3,'line_type']])
Z([[2,'!='],[[7],[3,'supportTel']],[1,'0']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_16_4);return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_4
}
__WXML_GLOBAL__.ops_set.$gwx_XC_16=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_16=true;
var x=['./pages/home2/home2.wxml','../../pages/template/interval.wxml','./pages/home2/index1/index1.wxml','./pages/home2/index4/index4.wxml','/pages/common/icon.wxml','./pages/home2/index5/index5.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_16_1()
var cMK=e_[x[0]].i
_ai(cMK,x[1],e_,x[0],1,1)
var oTK=_n('cu-nav')
_rz(z,oTK,'hideBackGround',0,e,s,gg)
_(r,oTK)
var xUK=_mz(z,'banner-notice',['bannerClass',1,'bannerImageClass',1,'bind:onNoticeComLoad',2,'class',3,'enablePopupNotice',4,'noticeBtnClass',5,'noticeClass',6,'screenWidth',7],[],e,s,gg)
_(r,xUK)
var oNK=_v()
_(r,oNK)
if(_oz(z,9,e,s,gg)){oNK.wxVkey=1
}
var lOK=_v()
_(r,lOK)
if(_oz(z,10,e,s,gg)){lOK.wxVkey=1
var oVK=_v()
_(lOK,oVK)
if(_oz(z,11,e,s,gg)){oVK.wxVkey=1
var fWK=_v()
_(oVK,fWK)
var cXK=function(oZK,hYK,c1K,gg){
var l3K=_mz(z,'view',['bindtap',15,'class',1,'data-currindex',2],[],oZK,hYK,gg)
var a4K=_v()
_(l3K,a4K)
if(_oz(z,18,oZK,hYK,gg)){a4K.wxVkey=1
}
var t5K=_v()
_(l3K,t5K)
if(_oz(z,19,oZK,hYK,gg)){t5K.wxVkey=1
}
a4K.wxXCkey=1
t5K.wxXCkey=1
_(c1K,l3K)
return c1K
}
fWK.wxXCkey=2
_2z(z,13,cXK,e,s,gg,fWK,'item','index','sid')
}
else if(_oz(z,20,e,s,gg)){oVK.wxVkey=2
var e6K=_v()
_(oVK,e6K)
var b7K=function(x9K,o8K,o0K,gg){
var cBL=_mz(z,'view',['bindtap',23,'class',1,'data-currindex',2],[],x9K,o8K,gg)
var hCL=_v()
_(cBL,hCL)
if(_oz(z,26,x9K,o8K,gg)){hCL.wxVkey=1
}
hCL.wxXCkey=1
_(o0K,cBL)
return o0K
}
e6K.wxXCkey=2
_2z(z,21,b7K,e,s,gg,e6K,'item','index','sid')
}
var oDL=_mz(z,'swiper',['bindchange',27,'catchanimationfinish',1,'class',2,'current',3,'style',4],[],e,s,gg)
var cEL=_v()
_(oDL,cEL)
var oFL=function(aHL,lGL,tIL,gg){
var bKL=_n('swiper-item')
var oLL=_v()
_(bKL,oLL)
if(_oz(z,35,aHL,lGL,gg)){oLL.wxVkey=1
var xML=_mz(z,'index5-component',['bind:onGrandChildHotLineLoad',36,'class',1,'componentClass',2,'hotLineItemClass',3,'lineDhList',4,'line_type',5,'next_page',6,'select_obj',7,'sid',8,'tabLen',9],[],aHL,lGL,gg)
var oNL=_n('view')
_rz(z,oNL,'slot',46,aHL,lGL,gg)
var fOL=_v()
_(oNL,fOL)
if(_oz(z,47,aHL,lGL,gg)){fOL.wxVkey=1
var cPL=_mz(z,'banner-notice',['bannerClass',48,'bannerImageClass',1,'bind:onFirstBannerComLoad',2,'class',3,'enablePopupNotice',4,'indexSid',5,'noticeBtnClass',6,'noticeClass',7,'screenWidth',8],[],aHL,lGL,gg)
_(fOL,cPL)
}
fOL.wxXCkey=1
fOL.wxXCkey=3
_(xML,oNL)
_(oLL,xML)
}
else if(_oz(z,57,aHL,lGL,gg)){oLL.wxVkey=2
var hQL=_mz(z,'index1-component',['bind:loadIndexCom',58,'componentClass',1,'line_type',2,'next_page',3,'select_obj',4,'sid',5,'tabLen',6],[],aHL,lGL,gg)
_(oLL,hQL)
}
else if(_oz(z,65,aHL,lGL,gg)){oLL.wxVkey=3
var oRL=_mz(z,'index4-component',['bind:onGrandChildHotLineLoad',66,'componentClass',1,'hotLineItemClass',2,'lineDhList',3,'line_type',4,'next_page',5,'sid',6,'tabLen',7],[],aHL,lGL,gg)
_(oLL,oRL)
}
else if(_oz(z,74,aHL,lGL,gg)){oLL.wxVkey=4
var cSL=_mz(z,'index-hot-line-component',['bind:onGrandChildHotLineLoad',75,'hotLineItemClass',1,'hotLineType',2,'line_type',3,'next_page',4,'sid',5,'tabLen',6],[],aHL,lGL,gg)
_(oLL,cSL)
}
else if(_oz(z,82,aHL,lGL,gg)){oLL.wxVkey=5
var oTL=_mz(z,'travel-line-list',['bind:onTravelLineLoad',83,'class',1,'componentClass',2,'listStyle',3,'nextPage',4,'sid',5,'tabLen',6,'travelLineBoxClass',7,'travelLineContainerClass',8,'travelLineItemClass',9],[],aHL,lGL,gg)
_(oLL,oTL)
}
else{oLL.wxVkey=6
}
oLL.wxXCkey=1
oLL.wxXCkey=3
oLL.wxXCkey=3
oLL.wxXCkey=3
oLL.wxXCkey=3
oLL.wxXCkey=3
_(tIL,bKL)
return tIL
}
cEL.wxXCkey=4
_2z(z,33,oFL,e,s,gg,cEL,'item','index','sid')
_(lOK,oDL)
oVK.wxXCkey=1
}
else{lOK.wxVkey=2
}
var aPK=_v()
_(r,aPK)
if(_oz(z,93,e,s,gg)){aPK.wxVkey=1
var lUL=_mz(z,'hotLineCollegeByType',['bind:clickHotLineBtn',94,'hotLineBoxClass',1,'hotLineCol',2,'hotLineContainerClass',3,'hotLineItemClass',4],[],e,s,gg)
_(aPK,lUL)
}
else if(_oz(z,99,e,s,gg)){aPK.wxVkey=2
var aVL=_mz(z,'hot-line-college',['bind:clickHotLineBtn',100,'hotLineContainerClass',1],[],e,s,gg)
_(aPK,aVL)
}
else if(_oz(z,102,e,s,gg)){aPK.wxVkey=3
var tWL=_mz(z,'hotLineMultiLevel-college',['bind:clickHotLineBtn',103,'hotLineBoxClass',1,'hotLineCol',2,'hotLineContainerClass',3,'hotLineItemClass',4],[],e,s,gg)
_(aPK,tWL)
}
var tQK=_v()
_(r,tQK)
if(_oz(z,108,e,s,gg)){tQK.wxVkey=1
}
var eRK=_v()
_(r,eRK)
if(_oz(z,109,e,s,gg)){eRK.wxVkey=1
}
var eXL=_mz(z,'index-float-btn',['class',110,'pageName',1],[],e,s,gg)
_(r,eXL)
var bSK=_v()
_(r,bSK)
if(_oz(z,112,e,s,gg)){bSK.wxVkey=1
}
oNK.wxXCkey=1
lOK.wxXCkey=1
lOK.wxXCkey=3
aPK.wxXCkey=1
aPK.wxXCkey=3
aPK.wxXCkey=3
aPK.wxXCkey=3
tQK.wxXCkey=1
eRK.wxXCkey=1
bSK.wxXCkey=1
cMK.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[2]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_XC_16_2()
var oZL=_v()
_(r,oZL)
var x1L=function(f3L,o2L,c4L,gg){
var o6L=_mz(z,'view',['bindtap',2,'class',1,'data-end_city_id',2,'data-end_city_name',3,'data-id',4,'data-start_city_id',5,'data-start_city_name',6,'hoverClass',7],[],f3L,o2L,gg)
var c7L=_v()
_(o6L,c7L)
if(_oz(z,10,f3L,o2L,gg)){c7L.wxVkey=1
}
c7L.wxXCkey=1
_(c4L,o6L)
return c4L
}
oZL.wxXCkey=2
_2z(z,0,x1L,e,s,gg,oZL,'item','index','id')
return r
}
e_[x[2]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_XC_16_3()
var l9L=e_[x[3]].i
_ai(l9L,x[4],e_,x[3],1,1)
var a0L=_mz(z,'index-search-history',['bind:clickHistoryBtn',0,'class',1],[],e,s,gg)
_(r,a0L)
var tAM=_mz(z,'hot-line',['bind:clickHotLineBtn',2,'bind:onHotLineComLoad',1,'hotLineItemClass',2,'lineType',3,'saveStorageKey',4],[],e,s,gg)
_(r,tAM)
l9L.pop()
return r
}
e_[x[3]]={f:m2,j:[],i:[],ti:[x[4]],ic:[]}
d_[x[5]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_XC_16_4()
var oDM=_n('view')
_rz(z,oDM,'class',0,e,s,gg)
var xEM=_v()
_(oDM,xEM)
if(_oz(z,1,e,s,gg)){xEM.wxVkey=1
}
var oFM=_mz(z,'index-search-history',['bind:clickHistoryBtn',2,'class',1],[],e,s,gg)
_(oDM,oFM)
xEM.wxXCkey=1
_(r,oDM)
var fGM=_n('slot')
_rz(z,fGM,'name',4,e,s,gg)
_(r,fGM)
var cHM=_mz(z,'hot-line',['bind:clickHotLineBtn',5,'bind:onHotLineComLoad',1,'hotLineBoxClass',2,'hotLineItemClass',3,'lineType',4],[],e,s,gg)
_(r,cHM)
var bCM=_v()
_(r,bCM)
if(_oz(z,10,e,s,gg)){bCM.wxVkey=1
}
bCM.wxXCkey=1
return r
}
e_[x[5]]={f:m3,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_16";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_16();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/home2/home2.wxml'] = [$gwx_XC_16, './pages/home2/home2.wxml'];else __wxAppCode__['pages/home2/home2.wxml'] = $gwx_XC_16( './pages/home2/home2.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/home2/index1/index1.wxml'] = [$gwx_XC_16, './pages/home2/index1/index1.wxml'];else __wxAppCode__['pages/home2/index1/index1.wxml'] = $gwx_XC_16( './pages/home2/index1/index1.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/home2/index4/index4.wxml'] = [$gwx_XC_16, './pages/home2/index4/index4.wxml'];else __wxAppCode__['pages/home2/index4/index4.wxml'] = $gwx_XC_16( './pages/home2/index4/index4.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/home2/index5/index5.wxml'] = [$gwx_XC_16, './pages/home2/index5/index5.wxml'];else __wxAppCode__['pages/home2/index5/index5.wxml'] = $gwx_XC_16( './pages/home2/index5/index5.wxml' );
	;__wxRoute = "pages/home2/home2";__wxRouteBegin = true;__wxAppCurrentFile__="pages/home2/home2.js";define("pages/home2/home2.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../@babel/runtime/helpers/Arrayincludes");var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../@babel/runtime/helpers/asyncToGenerator"),a=getApp(),n=require("../../8A94E9619105A88CECF281668574FB65.js"),i=n.getSupplierType,o=n.handleToHKMOPage;Page({data:{staticHost:a.config.staticHost,CustomBar:a.globalData.systemInfo.CustomBar,primary:a.globalData.corpXcx.primary,corpName:a.globalData.corp.corpName,select_obj:{beginCity:"请选择出发地",beginCityCode:"",beginCityName:"请选择",beginDisCode:"",beginDisName:"",endCity:"请选择到达地",endCityCode:"",endCityName:"请选择",endDisName:"",endDisCode:"",lineDhList:[]},home_tab_list:a.globalData.home_tab_list,currentIndex:0,tabListdefaultActvie:0,tabListdefaultComponentIndex:0,isLoadedActvieBanner:!1,isLoadedActvieHotLine:!1,swiperMaxHeight:350,swiperHeightList:[220,220,220,220,220],indexSupportName:"",topBannerHeight:300,showContactStaffBtn:!1,showBubbleBanner:!0,loadingCustomerwxQrcodeImage:!0,noticeList:[],noticePopup:{},modalName:null,topBannerUrl:"",hotLineContainerClass:"bg-white margin-lr-36 radius-36",hotLineCol:2,hotLineType:a.globalData.corpXcx.hotLineType||1,hotLineBoxClass:"padding-lr-sm",hotLineItemClass:"radius-16 bg-default-blue",componentHotLineType:"0",travelLineContainerClass:"bg-white",travelLineBoxClass:"padding-lr-sm",travelLineItemClass:"radius-16",travelLineListStyle:3,squareNavMenu:null,bannerType:0,tabStyle:1,pageBgType:6},onLoad:function(n){var o=this,l=this;if(wx.setNavigationBarTitle({title:a.globalData.corp.corpName}),a.getCorpXcxInfo((function(){wx.setNavigationBarTitle({title:a.globalData.corp.corpName});var e=a.globalData.home_tab_list,t=e.length,i=1,o=0,r=null;if(a.util.isNotNull(e))for(var s=0;s<t;s++)if(1==e[s].default_actvie){i=s,o=s,r=e[s].component_index;break}a.util.isNotNull(n.currentIndex)&&n.currentIndex<=t+1&&(i=+a.util.positiveInteger(n.currentIndex));var c=a.globalData.corpXcx.indexSupportName;null==a.globalData.corpXcx.indexSupportName&&(c=a.config.indexSupportName);var d=a.globalData.corp.ID,u=l.data.showContactStaffBtn,g="".concat(a.config.staticHost,"/web/xcx/images/home2/topBanner/top_bnner.png"),p=l.data.bannerType,h=1,x=l.data.pageBgType,b=1;"xjbs"==d?(u=!0,g="".concat(a.config.staticHost,"/web/xcx/images/home2/topBanner/").concat(d,".png?v=12"),p=1):["xebs","cxhxd","yzbs","qycx","lsxy","xxbs"].includes(d)?(g="".concat(a.config.staticHost,"/web/xcx/images/home2/topBanner/").concat(d,".png"),p=1):["qbs","xsdcx"].includes(d)?(g="".concat(a.config.staticHost,"/web/xcx/images/home2/topBanner/top_bnner.png"),p=1):["lzbs"].includes(d)?(g="".concat(a.config.staticHost,"/web/xcx/images/home2/topBanner/").concat(d,".png"),p=0):["ycx"].includes(d)?h=2:["xyx"].includes(d)?(g="".concat(a.config.staticHost,"/web/xcx/images/home2/topBanner/").concat(d,".png?V=2"),p=1,x=4):["jxztc"].includes(d)&&["wx84ca42cd818715ff"].includes(a.globalData.corp.appid)&&(b=2),a.config.indexBtnJudgeHotLineCorpList.includes(a.globalData.corp.ID)&&l.handleGetHotLine(),l.setData({index:a.globalData.corp.index,indexSupportName:c,currentIndex:i,tabListdefaultActvie:o,tabListdefaultComponentIndex:r,home_tab_list:e,tabLen:t,showContactStaffBtn:u,topBannerUrl:g,bannerType:p,tabStyle:h,pageBgType:x,componentHotLineType:b})})),a.doLogin(t(e().mark((function t(){var a;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i(),(a=o.selectComponent(".travelLineListComponent"))&&a.getTravelLineList();case 3:case"end":return e.stop()}}),t)})))),a.util.isNotNull(n.sourceid)&&(a.globalData.sourceid=n.sourceid),a.util.isNotNull(n.scene)&&-1!==n.scene.indexOf("sourceid")){var r=n.scene.replace(/[^\d.]/g,"");a.globalData.sourceid=r}},onReady:function(){},onShow:function(){try{var e=wx.getStorageSync(a.globalData.corp.appid+"_select_obj");console.log(e),e&&this.setData({select_obj:e}),wx.removeStorageSync(a.globalData.corp.appid+"_share_obj")}catch(e){console.log(e)}},onPullDownRefresh:function(){wx.stopPullDownRefresh()},onShareAppMessage:function(){return{title:a.globalData.shareData.title,path:a.globalData.corpXcx.tabBarHome}},onShareTimeline:function(){return{title:a.globalData.shareData.title,imageUrl:a.globalData.corpXcx.shareCouponImgUrl,query:""}},_tabSelect:function(e){console.log("_tabSelect",e);var t=e.currentTarget.dataset.currindex,a=this.data.home_tab_list,n=a[t].component_index;if(console.log("handleClickBtn"),["index5","index4","index1","indexHotLine","indexTravelLine"].includes(n))console.log("includes"),e.detail.sid=e.currentTarget.dataset.currindex,this.handleLoadIndexCom(e);else if(["linkUrl","navigateTo","toOtherMiniProgram"].includes(n))return void this.handleClickNavigate(n,a[t].next_page,a[t].to_other_appid);this.setData({currentIndex:t})},handleClickBtn:function(e){this.handleClickNavigate(e.currentTarget.dataset.component_index,e.currentTarget.dataset.next_page,e.currentTarget.dataset.other_appid)},handleClickNavigate:function(e,t,n){if(console.log("handleClickNavigate 参数",e,t,n),"linkUrl"==e)a.util.isNotNull(t)&&-1!=t.indexOf("http")?(t=encodeURIComponent(t),wx.navigateTo({url:"/pages/webview/webview?web_url="+t})):console.log("跳转配置参数有误，外部链接跳转地址不正确");else if("navigateTo"==e){if(a.util.isNull(t))return void console.log("跳转配置参数有误，小程序跳转地址不正确");if(-1!=t.indexOf("http"))return;if(0!==t.indexOf("/package/")&&0!==t.indexOf("/pages/"))return void a.util.showMsg("小程序页面路径设置有误");"/pages/index/index"==t||"/pages/cx/cx"==t||"/pages/user_center/user_center"==t?wx.switchTab({url:t}):wx.navigateTo({url:t})}else"toOtherMiniProgram"==e&&a.util.goOtherMiniApp(n,t)},handleSwiperChange:function(e){console.log("handleSwiperChange",e);if("touch"===e.detail.source){var t=e.detail.current;this.setData({currentIndex:t}),e.detail.sid=e.detail.current,e.detail.from="home handleSwiperChange",this.handleLoadIndexCom(e)}},caclCanQueryClient:function(e){var t=this.data.isLoadedActvieBanner,a=this.data.isLoadedActvieHotLine,n=this.data.tabListdefaultComponentIndex;"index5"==n?t&&a&&(console.log("tabListdefaultComponentIndex == index5",e),e.detail.sid=this.data.tabListdefaultActvie,this.handleLoadIndexCom(e)):"index4"==n?a&&(console.log("tabListdefaultComponentIndex == index4",e),e.detail.sid=this.data.tabListdefaultActvie,this.handleLoadIndexCom(e)):"indexHotLine"==n?a&&(console.log("tabListdefaultComponentIndex == indexHotLine",e),e.detail.sid=this.data.tabListdefaultActvie,this.handleLoadIndexCom(e)):"index1"==n&&console.log("tabListdefaultComponentIndex == index1")},handleLoadIndexCom:function(e){var t=this;console.log("handleLoadIndexCom e",e.detail.from,e);var a=t.data.swiperMaxHeight,n=t.data.swiperHeightList,i=e.detail.sid,o=t.data.home_tab_list,l=".".concat(o[i].component_index,"_").concat(o[i].sid);wx.createSelectorQuery().select(l).boundingClientRect((function(o){e.detail._height?n[i]=e.detail._height:n[i]=o?o.height+10:200,a=n[t.data.currentIndex],console.log("from00000000",e.detail.from,i,n[i]),console.log("swiperMaxHeight",a,"swiperHeightList:",n),t.setData({swiperHeightList:n,swiperMaxHeight:a})})).exec()},onAnimationFinish:function(e){console.log("onAnimationFinish",e)},bannerImageLoad:function(e){var t=e.detail.width/e.detail.height,a=Math.round(750/t);this.setData({topBannerHeight:a}),console.log("topBannerHeight",a)},previewBanner:function(e){var t=["".concat(this.data.topBannerUrl)];console.log("urlList",t),wx.previewImage({urls:t,current:t[0]})},handleOnFirstBannerLoad:function(e){e.detail.sid=this.data.tabListdefaultActvie;var t=this.data.tabListdefaultActvie;this.data.isLoadedActvieBanner||"index5"!=this.data.home_tab_list[t].component_index||(this.setData({isLoadedActvieBanner:!0}),this.caclCanQueryClient(e))},handleOnNoticeLoad:function(e){this.setData({noticeList:e.detail.noticeList,noticePopup:e.detail.noticePopup,modalName:e.detail.modalName})},clickNotice:function(e){this.selectComponent(".banner-notice")&&this.selectComponent(".banner-notice").clickNotice(e)},_goto_next_page:function(e){if(!a.util.isNull(e)){var t="?"+a.util.enQueryString(e),n=a.globalData.corp.interval,i=a.config.pagesUrl.interval2_url;if(console.log("next_page",n),"interval2"===n)i=a.config.pagesUrl.interval2_url;else if("interval21"===n)i=a.config.pagesUrl.interval21_url;else if("interval22"===n)i=a.config.pagesUrl.interval22_url;else if("interval221"===n)i=a.config.pagesUrl.interval221_url;else if("interval23"===n)i=a.config.pagesUrl.interval23_url;else if("interval24"===n)i=a.config.pagesUrl.interval24_url;else if("interval3"===n)i=a.config.pagesUrl.interval3_url;else if("interval31"===n)i=a.config.pagesUrl.interval31_url;else if("interval"===n||"intervalSwc"===n)i="/package/index4/pages/select_address/select_address";else if("interval11"===n)i="/package/interval11/pages/selectAddress/selectAddress";else{if("intervalCommute"!==n)return void a.util.showMsg("请检查拓展参数配置");i="/package/intervalCommute/intervalCommute"}var l=o({url:i+t,ticketObj:e}),r=l.redirectUrl;if("bc"==l.supplier)return console.log("bc：",r),wx.navigateTo({url:r}),wx.setStorageSync(a.globalData.corp.appid+"_ticket_obj",e),wx.setStorageSync(a.globalData.corp.appid+"_select_obj",e),void(this.selectComponent(".index-search-history")&&this.selectComponent(".index-search-history").saveQueryCityHistory(e));console.log(r),wx.navigateTo({url:r}),wx.setStorageSync(a.globalData.corp.appid+"_ticket_obj",e),wx.setStorageSync(a.globalData.corp.appid+"_select_obj",e),this.selectComponent(".index-search-history")&&this.selectComponent(".index-search-history").saveQueryCityHistory(e)}},handleClickHotLineBtn:function(e){e.detail.ticket_obj.corpid=a.globalData.corp.ID,console.log("e.detail.ticket_obj",e.detail.ticket_obj),this._goto_next_page(e.detail.ticket_obj)},handleOnGrandChildHotLineLoad:function(e){if(console.log("handleOnGrandChildHotLineLoad e",e),e.detail.sid==this.data.tabListdefaultActvie){var t=this.data.isLoadedActvieBanner;0==this.data.bannerType&&(t=!0),this.setData({isLoadedActvieBanner:t,isLoadedActvieHotLine:!0}),this.caclCanQueryClient(e)}},showCustomerWxQrcodeModal:function(){this.selectComponent(".index-float-btn").showCustomerWxQrcodeModal()},hideModal:function(){this.setData({modalName:null})},closeBottomBubbleBanner:function(){this.setData({showBubbleBanner:!1})},handleGetHotLine:function(n){var i=this;return t(e().mark((function t(){var n,o;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i,o={action:"line.lineDhList",account:a.globalData.corp.account,lineType:""},e.next=4,a.network.requestPOST(o).then((function(e){var t=[];e.success&&(t=e.data||[],n.setData({lineDhList:t}))})).catch((function(e){console.log("handleGetHotLine err",e)}));case 4:case"end":return e.stop()}}),t)})))()},gotoSquareNav:function(e){var t=e.currentTarget.dataset.otherAppid,n=e.currentTarget.dataset.pagePath;(a.util.isNotNull(t)||a.util.isNotNull(n))&&(a.util.isNotNull(t)&&a.util.isNotNull(n)?a.util.goOtherMiniApp(t,n):a.util.isNotNull(n)?a.util.routerToPage(n):a.util.showMsg("参数有误，缺少页面路径"))}});
},{isPage:false,isComponent:true,currentFile:'pages/home2/home2.js'});require("pages/home2/home2.js");;__wxRoute = "pages/home2/index1/index1";__wxRouteBegin = true;__wxAppCurrentFile__="pages/home2/index1/index1.js";define("pages/home2/index1/index1.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=getApp();Component({properties:{select_obj:{type:Object,observer:function(e,t,a){}},line_type:{type:String,value:""},next_page:{type:String,value:""},sid:{},tabLen:{},componentClass:{value:"",type:null}},data:{primary:e.globalData.corpXcx.primary,lineColNum:2},methods:{_btn_query:function(t){var a={corpid:e.globalData.corp.ID,tripDate:this.data.tripDate,beginCityName:t.currentTarget.dataset.start_city_name,beginCityCode:t.currentTarget.dataset.start_city_id,endCityName:t.currentTarget.dataset.end_city_name,endCityCode:t.currentTarget.dataset.end_city_id},i="?"+e.util.enQueryString(a),n=this.data.next_page,l="";if("interval2"===n)l=e.config.pagesUrl.interval2_url;else if("interval21"===n)l=e.config.pagesUrl.interval21_url;else if("interval22"===n)l=e.config.pagesUrl.interval22_url;else if("interval221"===n)l=e.config.pagesUrl.interval221_url;else if("interval23"===n)l=e.config.pagesUrl.interval23_url;else if("interval24"===n)l=e.config.pagesUrl.interval24_url;else if("interval3"===n)l=e.config.pagesUrl.interval3_url;else if("interval31"===n)l=e.config.pagesUrl.interval31_url;else if("interval"===n)wx.setStorageSync(e.globalData.corp.appid+"_select_obj",a),l="/package/index4/pages/select_address/select_address";else if("interval11"===n)l="/package/interval11/pages/selectAddress/selectAddress";else if("selectDate"==n)l="/package/index4/pages/select_date/select_date";else{if("intervalCommute"!==n)return void e.util.showMsg("请检查拓展参数配置");i="?lineId="+t.currentTarget.dataset.id,l="/package/intervalCommute/intervalCommute"}console.log("url + param",l+i),wx.navigateTo({url:l+i})},_getLine:function(t){var a=this,i=a.data.lineColNum,n=wx.getStorageSync(e.globalData.corp.appid+"_lineList");n&&(n.length<5&&(i=1),a.setData({lineColNum:i,lineList:n}));var l={action:"line.getLineList",account:e.globalData.corp.account,lineType:a.data.line_type};console.log("_data",l),e.network.request("/api/wg.do",l,(function(t){wx.setStorageSync(e.globalData.corp.appid+"_lineList",t.data),t.success?(i=t.data.length<5?1:2,a.setData({lineColNum:i,lineList:t.data})):e.util.showMsg(t.message)}),(function(){}),(function(){a.triggerEvent("loadIndexCom",{sid:a.data.sid,from:"home2 index1 _getLine"})}))}},attached:function(){},ready:function(){console.log("index1 ready");this._getLine();var t=e.util.formatShortTime(new Date);this.setData({tripDate:t,showDate:e.util.formatDate(t)+" "+e.util.getWeekName(t)}),wx.setStorageSync("tripDate",t)}});
},{isPage:false,isComponent:true,currentFile:'pages/home2/index1/index1.js'});require("pages/home2/index1/index1.js");;__wxRoute = "pages/home2/index4/index4";__wxRouteBegin = true;__wxAppCurrentFile__="pages/home2/index4/index4.js";define("pages/home2/index4/index4.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=getApp(),t=require("../../../8A94E9619105A88CECF281668574FB65.js").handleToHKMOPage;Component({properties:{line_type:{type:String,value:""},next_page:{type:String,value:""},sid:{},tabLen:{},componentClass:{value:"",type:null},titleClass:{value:"",type:null},hotLineItemClass:{type:String,value:""},lineDhList:{type:Array,value:[]}},data:{primary:e.globalData.corpXcx.primary,staticHost:e.config.staticHost,select_obj:{beginCity:"请选择出发地",beginCityCode:"",beginCityName:"请选择",beginDisCode:"",beginDisName:"",endCity:"请选择到达地",endCityName:"请选择",endCityCode:"",endDisName:"",endDisCode:""},tripDate:void 0,rotate:0,isChanging:!1,rotateKey:180},methods:{_select_objChange:function(t,i,a){var n=t;console.log("index4");try{if(n){e.util.isNull(n.beginCityName)&&(n.beginCityName="请选择"),e.util.isNull(n.endCityName)&&(n.endCityName="请选择"),this.setData({select_obj:n});var l=wx.getStorageSync("tripDate");e.util.isNotNull(l)&&this.setData({tripDate:l})}}catch(e){console.log(e)}},_selectBeginCity:function(t){wx.navigateTo({url:e.globalData.corpXcxExt.selectCityUrl+"?select=begin&line_type="+this.data.line_type+"&saveStorageKey=_select_obj_index4"+this.data.sid})},_selectEndCity:function(t){if(e.util.isNull(this.data.select_obj.beginCityCode))e.util.showMsg("请选择出发城市！");else{var i=this.data.select_obj;console.log(i),wx.setStorageSync(e.globalData.corp.appid+"_select_obj_index4"+this.data.sid,i),wx.navigateTo({url:e.globalData.corpXcxExt.selectCityUrl+"?select=end&line_type="+this.data.line_type+"&saveStorageKey=_select_obj_index4"+this.data.sid})}},_change:function(){var t=this;if(!t.data.isChanging){t.animation1(),clearTimeout(e.globalData.timerTem);var i=setTimeout((function(){t._do_change()}),200);e.globalData.timerTem=i}},_do_change:function(t){var i=this.data.select_obj.beginCityName,a=this.data.select_obj.beginCity,n=this.data.select_obj.beginCityCode,l={beginCityName:this.data.select_obj.endCityName,beginCity:this.data.select_obj.endCity,beginCityCode:this.data.select_obj.endCityCode,beginAddressCode:"",beginAddressName:"请选择上车站点",endCity:a,endCityName:i,endCityCode:n,endAddressCode:"",endAddressName:"请选择下车站点"};this.setData({select_obj:l}),wx.setStorageSync(e.globalData.corp.appid+"_select_obj_index4"+this.data.sid,l),clearTimeout(e.globalData.timerTem)},animation1:function(){var e=this,t=180==e.data.rotateKey?-180:180;e.setData({rotateKey:t,isChanging:!0}),e.animate(".icon_change",[{rotate:0},{rotate:t}],400,(function(){e.clearAnimation(".icon_change",{rotate:!0})})),e.animate(".animationStartCity",[{opacity:1,translateY:0},{opacity:0,translateY:27},{opacity:1,translateY:0}],400,(function(){e.clearAnimation(".animationStartCity",{opacity:!0,translateY:!0}),e.setData({isChanging:!1})})),e.animate(".animationEndCity",[{opacity:1,translateY:0},{opacity:0,translateY:-27},{opacity:1,translateY:0}],400,(function(){console.log("动画完成 endCityName"),e.clearAnimation(".animationEndCity",{opacity:!0,translateY:!0})}))},_btn_query:function(t){var i=this.data.select_obj.beginCityCode,a=this.data.select_obj.endCityCode;if(e.util.isNull(i))e.util.showMsg("请选择出发城市！");else if(e.util.isNull(a))e.util.showMsg("请选择到达城市！");else{var n="",l="",o=this.redirectPageBylineDh(i,a);if(o){n=o.startAreaId||"",l=o.endAreaId||"";var s={corpid:e.globalData.corp.ID,tripDate:this.data.tripDate,beginCityName:this.data.select_obj.beginCityName,beginCityCode:this.data.select_obj.beginCityCode,startAreaId:n||"",endCityCode:this.data.select_obj.endCityCode,endCityName:this.data.select_obj.endCityName,endAreaId:l||""};this._goto_next_page(s)}}},handleClickHotLineBtn:function(t){t.detail.ticket_obj.corpid=e.globalData.corp.ID,console.log("e.detail.ticket_obj",t.detail.ticket_obj),this._goto_next_page(t.detail.ticket_obj)},handleOnHotLineComLoad:function(e){this.triggerEvent("onGrandChildHotLineLoad",{sid:this.data.sid})},handleClickHistoryBtn:function(e){console.log("e",e);var t=e.detail.beginCityCode,i=e.detail.endCityCode,a=this.redirectPageBylineDh(t,i);a&&(e.detail.startAreaId=a.startAreaId||"",e.detail.endAreaId=a.endAreaId||"",this._goto_next_page(e.detail))},_goto_next_page:function(i){e.util.isNull(i)&&(i={corpid:e.globalData.corp.ID,tripDate:this.data.tripDate,beginCityName:this.data.select_obj.beginCityName,beginCityCode:this.data.select_obj.beginCityCode,endCityCode:this.data.select_obj.endCityCode,endCityName:this.data.select_obj.endCityName});var a="?"+e.util.enQueryString(i),n=this.data.next_page,l=e.config.pagesUrl.interval2_url;if(console.log("next_page",n),"selectDate"===n)l="/package/index4/pages/select_date/select_date";else if("interval2"===n)l=e.config.pagesUrl.interval2_url;else if("interval21"===n)l=e.config.pagesUrl.interval21_url;else if("interval22"===n)l=e.config.pagesUrl.interval22_url;else if("interval221"===n)l=e.config.pagesUrl.interval221_url;else if("interval23"===n)l=e.config.pagesUrl.interval23_url;else if("interval24"===n)l=e.config.pagesUrl.interval24_url;else if("interval3"===n)l=e.config.pagesUrl.interval3_url;else if("interval31"===n)l=e.config.pagesUrl.interval31_url;else if("interval"===n||"intervalSwc"===n)l="/package/index4/pages/select_address/select_address";else if("interval11"===n)l="/package/interval11/pages/selectAddress/selectAddress";else{if("intervalCommute"!==n)return void e.util.showMsg("请检查拓展参数配置");l="/package/intervalCommute/intervalCommute"}var o=t({url:l+a,ticketObj:i}).redirectUrl;console.log("url + param",o),wx.navigateTo({url:o}),wx.setStorageSync(e.globalData.corp.appid+"_select_obj_index4"+this.data.sid,i),this.selectComponent(".index-search-history")&&this.selectComponent(".index-search-history").saveQueryCityHistory(i)},redirectPageBylineDh:function(t,i){if(e.config.indexBtnJudgeHotLineCorpList.includes(e.globalData.corp.ID)){var a=this.data.lineDhList.find((function(e){return t==e.startCityId&&i==e.endCityId}));if(a){var n=a.otherAppid,l=a.pagePath,o=a.startAreaId,s=a.endAreaId;if(e.util.isNotNull(n)||e.util.isNotNull(l))return e.util.isNotNull(n)&&e.util.isNotNull(l)?e.util.goOtherMiniApp(n,l):e.util.isNotNull(l)?e.util.routerToPage(l):e.util.showMsg("常用线路参数有误，缺少页面路径"),!1;if(e.util.isNotNull(o)||e.util.isNotNull(s))return{startAreaId:o,endAreaId:s}}return{}}return{}}},lifetimes:{attached:function(){this.triggerEvent("loadIndexCom",{sid:this.data.sid,_height:220,from:"home2 index4 attached"})},ready:function(){var t=e.util.formatShortTime(new Date);this.setData({tripDate:t,rotate:"180-load"}),wx.setStorageSync("tripDate",t)},detached:function(){clearTimeout(e.globalData.timerTem)}},pageLifetimes:{show:function(){console.log("show12334");try{var t=wx.getStorageSync(e.globalData.corp.appid+"_select_obj_index4"+this.data.sid);console.log("select_obj444",t),t&&(e.util.isNull(t.beginCityName)&&(t.beginCityName="请选择"),e.util.isNull(t.endCityName)&&(t.endCityName="请选择"),this.setData({select_obj:t})),clearTimeout(e.globalData.timerTem)}catch(e){console.log(e)}}}});
},{isPage:false,isComponent:true,currentFile:'pages/home2/index4/index4.js'});require("pages/home2/index4/index4.js");;__wxRoute = "pages/home2/index5/index5";__wxRouteBegin = true;__wxAppCurrentFile__="pages/home2/index5/index5.js";define("pages/home2/index5/index5.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=getApp(),t=require("../../../8A94E9619105A88CECF281668574FB65.js").handleToHKMOPage;Component({options:{multipleSlots:!0},properties:{select_obj:{type:Object,observer:function(e,t,a){this._select_objChange(e,t,a)}},line_type:{type:String,value:""},next_page:{type:String,value:""},sid:{},tabLen:{},componentClass:{value:"",type:null},titleClass:{value:"",type:null},hotLineItemClass:{type:String,value:""},lineDhList:{type:Array,value:[]}},data:{primary:e.globalData.corpXcx.primary,staticHost:e.config.staticHost,select_obj:{beginCity:"出发地",beginCityCode:"",beginCityName:"始发地",beginDisCode:"",beginDisName:"",endCity:"到达地",endCityName:"请选择",endCityCode:"",endDisName:"",endDisCode:""},beginAddress:{ID:0,name:"请选择上车站点"},endAddress:{ID:0,name:"请选择下车站点"},endAdressId:0,tripDate:void 0,showDate:void 0,showAddress:!1,supportTel:"0",isChanging:!1,rotateKey:!0,showCharterCar:!1,indexHistorySaveMaxLen:6,indexHistoryShowMaxLen:2},methods:{_select_objChange:function(t,a,i){var n=t,o=!1;console.log("index5 _select_objChange");try{if(n){e.util.isNull(n.beginCityName)&&(n.beginCityName="始发地"),e.util.isNull(n.endCityName)&&(n.endCityName="到达地"),o=!e.util.isNull(n.beginCityCode)&&"0000"!==n.beginCityCode&&!e.util.isNull(n.endCityCode),this.setData({showAddress:o,select_obj:n});var s=wx.getStorageSync("tripDate");e.util.isNotNull(s)&&this.setData({tripDate:s,showDate:e.util.formatDate(s)+" "+e.util.getWeekName(s)})}}catch(e){console.log(e)}},_selectBeginCity:function(t){wx.navigateTo({url:e.globalData.corpXcxExt.selectCityUrl+"?select=begin&line_type="+this.data.line_type})},_selectEndCity:function(t){e.util.isNull(this.data.select_obj.beginCityCode)?e.util.showMsg("请先选择出发城市！"):(console.log(this.data.select_obj),wx.setStorageSync(e.globalData.corp.appid+"_select_obj",this.data.select_obj),wx.navigateTo({url:e.globalData.corpXcxExt.selectCityUrl+"?select=end&line_type="+this.data.line_type}))},_change:function(e){this.data.isChanging||this.animation1()},_do_change:function(){var t=this.data.select_obj.beginDisCode,a=this.data.select_obj.beginCityName,i=this.data.select_obj.beginCity,n=this.data.select_obj.beginCityCode,o=this.data.select_obj.beginDisName,s={beginCityName:this.data.select_obj.endCityName,beginCity:this.data.select_obj.endCity,beginDisCode:this.data.select_obj.endDisCode,beginDisName:this.data.select_obj.endDisName,beginCityCode:this.data.select_obj.endCityCode,beginAddressCode:"",beginAddressName:"请选择上车站点",endCity:i,endCityName:a,endCityCode:n,endDisCode:t,endDisName:o,endAddressCode:"",endAddressName:"请选择下车站点"};this.setData({select_obj:s}),wx.setStorageSync(e.globalData.corp.appid+"_select_obj",s)},animation1:function(){var e=this;e.animationRotate(),e.animate(".animationStartCity",[{opacity:1,translateX:0},{opacity:.2,translateX:150}],200,(function(){console.log("切换城市 动画前半部分完成"),e.animation2(),e._do_change()})),e.animate(".animationEndCity",[{opacity:1,translateX:0},{opacity:.2,translateX:-150}],200)},animation2:function(){var e=this;e.animate(".animationStartCity",[{opacity:.2,translateX:150},{opacity:1,translateX:0}],200,(function(){e.clearAnimation(".animationStartCity",{opacity:!0,translateX:!0},(function(){}))})),e.animate(".animationEndCity",[{opacity:.2,translateX:-150},{opacity:1,translateX:0}],200,(function(){console.log("finish后半部分 endCityName"),e.clearAnimation(".animationEndCity",{opacity:!0,translateX:!0})}))},animationRotate:function(){var e=this,t=!e.data.rotateKey,a=t?180:-180;e.setData({rotateKey:t,isChanging:!0}),e.animate(".icon_change",[{rotate:0},{rotate:a}],400,(function(){e.clearAnimation(".icon_change",{rotate:!0}),e.setData({isChanging:!1})}))},_selectBeginAddress:function(e){wx.navigateTo({url:"/package/index2/pages/select_address/select_address?select=begin"})},_selectEndAddress:function(){wx.navigateTo({url:"/package/index2/pages/select_address/select_address?select=end"})},_selectDate:function(){var a=this.data.select_obj.beginCityCode,i=this.data.select_obj.endCityCode;if(e.util.isNull(a))e.util.showMsg("请选择出发城市！");else if(e.util.isNull(i))e.util.showMsg("请选择到达城市！");else{var n="",o="",s=this.redirectPageBylineDh(a,i);if(!s)return;n=s.startAreaId||"",o=s.endAreaId||"";var l=wx.getStorageSync(e.globalData.corp.appid+"_select_obj");console.log(l),l.startAreaId=n,l.endAreaId=o;var r=Object.keys(l).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(l[e])})).join("&"),d="/package/index4/pages/select_date/select_date?tripDate="+this.data.tripDate+"&"+r+"&intervalPage="+this.data.next_page,c=t({url:d,ticketObj:l}).redirectUrl;wx.navigateTo({url:c})}},_btn_query:function(t){if(!this.data.isLoading){if(e.util.isNull(this.data.select_obj.beginCityCode))e.util.showMsg("请选择出发城市！");else if(e.util.isNull(this.data.select_obj.endCityCode))e.util.showMsg("请选择到达城市！");else{var a=this.data.select_obj.beginCityCode,i=this.data.select_obj.endCityCode,n="",o="",s=this.redirectPageBylineDh(a,i);if(s){n=s.startAreaId||"",o=s.endAreaId||"";var l={corpid:e.globalData.corp.ID,tripDate:this.data.tripDate,beginCityName:this.data.select_obj.beginCityName,beginCityCode:this.data.select_obj.beginCityCode,startAreaId:n||"",endCityCode:this.data.select_obj.endCityCode,endCityName:this.data.select_obj.endCityName,endAreaId:o||""};this._goto_next_page(l)}}}},handleClickHotLineBtn:function(t){t.detail.ticket_obj.corpid=e.globalData.corp.ID,console.log("e.detail.ticket_obj",t.detail.ticket_obj),this._goto_next_page(t.detail.ticket_obj)},handleOnHotLineComLoad:function(e){console.log("handleOnHotLineComLoad index5",this.data.sid,e),this.triggerEvent("onGrandChildHotLineLoad",{sid:this.data.sid})},handleOnFirstBannerComLoad:function(e){console.log("handleOnFirstBannerComLoad",e),e.detail.sid=this.data.sid,this.triggerEvent("onFirstBannerLoad",e.detail)},handleOnNoticeComLoad:function(e){this.triggerEvent("onNoticeLoad",e.detail)},handleClickHistoryBtn:function(e){console.log("e",e);var t=e.detail.beginCityCode,a=e.detail.endCityCode,i=this.redirectPageBylineDh(t,a);i&&(e.detail.startAreaId=i.startAreaId||"",e.detail.endAreaId=i.endAreaId||"",this._goto_next_page(e.detail))},_goto_next_page:function(a){e.util.isNull(a)&&(a={corpid:e.globalData.corp.ID,tripDate:this.data.tripDate,beginCityName:this.data.select_obj.beginCityName,beginCityCode:this.data.select_obj.beginCityCode,endCityCode:this.data.select_obj.endCityCode,endCityName:this.data.select_obj.endCityName});var i="?"+e.util.enQueryString(a),n=this.data.next_page,o=e.config.pagesUrl.interval2_url;if(console.log("next_page",n),"interval2"===n)o=e.config.pagesUrl.interval2_url;else if("interval21"===n)o=e.config.pagesUrl.interval21_url;else if("interval22"===n)o=e.config.pagesUrl.interval22_url;else if("interval221"===n)o=e.config.pagesUrl.interval221_url;else if("interval23"===n)o=e.config.pagesUrl.interval23_url;else if("interval24"===n)o=e.config.pagesUrl.interval24_url;else if("interval3"===n)o=e.config.pagesUrl.interval3_url;else if("interval31"===n)o=e.config.pagesUrl.interval31_url;else if("interval"===n||"intervalSwc"===n)o="/package/index4/pages/select_address/select_address";else if("interval11"===n)o="/package/interval11/pages/selectAddress/selectAddress";else{if("intervalCommute"!==n)return void e.util.showMsg("请检查拓展参数配置");o="/package/intervalCommute/intervalCommute"}var s=t({url:o+i,ticketObj:a}),l=s.redirectUrl,r=s.supplier;if(console.log("redirectUrl",l),console.log(" supplier",r),"bc"==r)return console.log("bc：",l),wx.navigateTo({url:l}),wx.setStorageSync(e.globalData.corp.appid+"_ticket_obj",a),wx.setStorageSync(e.globalData.corp.appid+"_select_obj",a),void(this.selectComponent(".index-search-history")&&this.selectComponent(".index-search-history").saveQueryCityHistory(a));console.log(l),wx.navigateTo({url:l}),wx.setStorageSync(e.globalData.corp.appid+"_ticket_obj",a),wx.setStorageSync(e.globalData.corp.appid+"_select_obj",a),this.selectComponent(".index-search-history")&&this.selectComponent(".index-search-history").saveQueryCityHistory(a)},_makePhoneCall:function(){e.util.makePhoneCall(this.data.supportTel)},handleMakePhoneCall:function(t){e.util.makePhoneCallArray(t.currentTarget.dataset.tel,t.currentTarget.dataset.telName)},goCharterCar:function(){wx.navigateTo({url:"/package/charterCar/pages/charterCarIndex/charterCarIndex"})},redirectPageBylineDh:function(t,a){if(e.config.indexBtnJudgeHotLineCorpList.includes(e.globalData.corp.ID)){var i=this.data.lineDhList.find((function(e){return t==e.startCityId&&a==e.endCityId}));if(i){var n=i.otherAppid,o=i.pagePath,s=i.startAreaId,l=i.endAreaId;if(e.util.isNotNull(n)||e.util.isNotNull(o))return e.util.isNotNull(n)&&e.util.isNotNull(o)?e.util.goOtherMiniApp(n,o):e.util.isNotNull(o)?e.util.routerToPage(o):e.util.showMsg("常用线路参数有误，缺少页面路径"),!1;if(e.util.isNotNull(s)||e.util.isNotNull(l))return{startAreaId:s,endAreaId:l}}return{}}return{}}},lifetimes:{attached:function(){this.setData({showCharterCar:e.config.showCharterCarCorpList.includes(e.globalData.corp.ID)})},ready:function(){console.log("index5 ready");try{var t=wx.getStorageSync(e.globalData.corp.appid+"_select_obj");t&&(e.util.isNull(t.beginCityName)&&(t.beginCityName="始发地"),e.util.isNull(t.endCityName)&&(t.endCityName="到达地"),this.setData({showAddress:!0,select_obj:t}))}catch(e){console.log(e)}var a=e.util.formatShortTime(new Date);this.setData({tripDate:a,showDate:e.util.formatDate(a)+" "+e.util.getWeekName(a)}),wx.setStorageSync("tripDate",a)}}});
},{isPage:false,isComponent:true,currentFile:'pages/home2/index5/index5.js'});require("pages/home2/index5/index5.js");$gwx_XC_17=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_17 || [];
function gz$gwx_XC_17_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_17_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'bannerClass']])
Z([[7],[3,'bannerImageClass']])
Z([3,'handleOnNoticeComLoad'])
Z([3,'banner-notice'])
Z([[7],[3,'firstBannerHeight']])
Z([[7],[3,'noticeClass']])
Z([[7],[3,'screenWidth']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_17_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_17=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_17=true;
var x=['./pages/index/indexStop/indexStop.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_17_1()
var oJM=_mz(z,'banner-notice',['bannerClass',0,'bannerImageClass',1,'bind:onNoticeComLoad',1,'class',2,'firstBannerHeight',3,'noticeClass',4,'screenWidth',5],[],e,s,gg)
_(r,oJM)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_17";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_17();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/indexStop/indexStop.wxml'] = [$gwx_XC_17, './pages/index/indexStop/indexStop.wxml'];else __wxAppCode__['pages/index/indexStop/indexStop.wxml'] = $gwx_XC_17( './pages/index/indexStop/indexStop.wxml' );
	;__wxRoute = "pages/index/indexStop/indexStop";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/indexStop/indexStop.js";define("pages/index/indexStop/indexStop.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";getApp();Component({properties:{bannerBoxClass:{type:null,value:""},bannerClass:{type:null,value:""},bannerImageClass:{type:null,value:""},noticeClass:{type:null,value:"bg-white padding-lr-lg"},noticePopupDialogClass:{type:null,value:""},screenWidth:{type:null,value:750},firstBannerHeight:{type:null,value:253}},data:{},methods:{}});
},{isPage:false,isComponent:true,currentFile:'pages/index/indexStop/indexStop.js'});require("pages/index/indexStop/indexStop.js");$gwx_XC_18=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_18 || [];
function gz$gwx_XC_18_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_18_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'skinClassName']])
Z([3,'index2Scroll'])
Z([1,true])
Z([3,'cu-nav'])
Z([[2,'=='],[[7],[3,'index']],[1,'index1']])
Z([[7],[3,'select_obj']])
Z([[2,'=='],[[7],[3,'index']],[1,'index11']])
Z([[7],[3,'currentIndex']])
Z(z[5])
Z([[2,'=='],[[7],[3,'index']],[1,'index2']])
Z([3,'margin-bottom-sm margin-lr-24'])
Z([3,'radius-36'])
Z([3,'radius-36 '])
Z([3,'radius-24 margin-lr-lg'])
Z([3,'294'])
Z([3,'padding-lr-sm'])
Z([3,'bg-white margin-lr-24 radius-36'])
Z([3,'radius-16 bg-default-blue'])
Z([3,'margin-bottom-sm margin-lr-24 padding-lr-28 padding-top-28 radius-36 shadow'])
Z([3,''])
Z([3,'full-screen-popupModel-notes-dialog'])
Z([3,'702'])
Z(z[5])
Z([[2,'=='],[[7],[3,'index']],[1,'index21']])
Z(z[5])
Z([[2,'=='],[[7],[3,'index']],[1,'index3']])
Z(z[5])
Z([[2,'=='],[[7],[3,'index']],[1,'index4']])
Z(z[10])
Z(z[11])
Z(z[12])
Z([[7],[3,'bannerPosition']])
Z([3,'radius-24'])
Z([3,'index4-component index-search-component'])
Z(z[14])
Z(z[15])
Z(z[16])
Z(z[17])
Z(z[18])
Z([3,'hide'])
Z(z[21])
Z(z[5])
Z([3,'2'])
Z(z[2])
Z([[2,'=='],[[7],[3,'index']],[1,'index41']])
Z(z[31])
Z([3,'index-search-component'])
Z([[2,'=='],[[7],[3,'index']],[1,'index42']])
Z(z[31])
Z(z[46])
Z(z[15])
Z(z[16])
Z(z[17])
Z(z[5])
Z(z[42])
Z(z[2])
Z([[2,'=='],[[7],[3,'index']],[1,'index43']])
Z(z[10])
Z(z[11])
Z(z[11])
Z(z[31])
Z(z[32])
Z([3,'index43-component index-search-component'])
Z(z[14])
Z(z[15])
Z(z[16])
Z(z[17])
Z(z[18])
Z(z[39])
Z(z[21])
Z(z[5])
Z(z[42])
Z(z[2])
Z([[2,'=='],[[7],[3,'index']],[1,'index5']])
Z(z[10])
Z(z[11])
Z(z[11])
Z(z[31])
Z(z[32])
Z([3,'index5-component index-search-component'])
Z(z[14])
Z(z[15])
Z([3,'bg-white padding-bottom-xs margin-lr-24 radius-36'])
Z(z[17])
Z(z[18])
Z(z[39])
Z(z[20])
Z(z[21])
Z(z[5])
Z([1,false])
Z(z[42])
Z(z[2])
Z([[2,'=='],[[7],[3,'index']],[1,'index51']])
Z(z[10])
Z(z[11])
Z(z[11])
Z(z[31])
Z(z[32])
Z(z[46])
Z(z[15])
Z(z[16])
Z(z[17])
Z(z[18])
Z(z[39])
Z(z[20])
Z(z[21])
Z(z[5])
Z(z[89])
Z(z[42])
Z(z[2])
Z([[2,'=='],[[7],[3,'index']],[1,'index512']])
Z([3,'margin-bottom margin-bottom margin-lr-24'])
Z([3,'radius-14'])
Z(z[112])
Z(z[31])
Z([3,'radius-10'])
Z(z[46])
Z(z[15])
Z([3,'bg-white margin-lr-24 radius-14 '])
Z([3,'radius-14 bg-default-blue'])
Z([3,'margin-bottom margin-lr-sm padding-lr-28 padding-top-28 radius-14 shadow bordrer-12-ghostWhite'])
Z(z[39])
Z(z[20])
Z(z[21])
Z(z[5])
Z(z[89])
Z(z[42])
Z(z[2])
Z([[2,'=='],[[7],[3,'index']],[1,'index52']])
Z(z[10])
Z([3,'radius-16'])
Z(z[130])
Z(z[31])
Z(z[32])
Z(z[46])
Z([3,'padding-lr-sm padding-bottom-xs'])
Z([3,'bg-white margin-lr-24 radius-16'])
Z([3,'radius-16 bg-default-blue '])
Z([3,'margin-bottom-sm margin-lr-24 padding-lr-28 padding-top-28 radius-16 shadow'])
Z(z[39])
Z(z[20])
Z(z[21])
Z(z[5])
Z(z[89])
Z(z[42])
Z(z[2])
Z([[2,'=='],[[7],[3,'index']],[1,'index53']])
Z(z[10])
Z(z[11])
Z(z[11])
Z(z[31])
Z(z[32])
Z([3,'index53-component index-search-component'])
Z(z[14])
Z(z[18])
Z(z[39])
Z(z[20])
Z(z[21])
Z(z[5])
Z(z[89])
Z(z[2])
Z([[2,'=='],[[7],[3,'index']],[1,'indexNav']])
Z(z[10])
Z([3,'radius-20'])
Z(z[163])
Z([3,'302'])
Z([3,' margin-tb-sm bg-white padding-tb-xs  radius-20 padding-lr-28 text-df'])
Z(z[20])
Z(z[21])
Z(z[5])
Z([[2,'=='],[[7],[3,'index']],[1,'indexHotLine']])
Z(z[11])
Z(z[11])
Z([3,'banner-notice'])
Z(z[14])
Z([a,[3,' bg-'],[[7],[3,'primary']],[3,' light round margin-top-sm padding-tb-xs padding-lr-sm']])
Z(z[21])
Z([[2,'=='],[[7],[3,'index']],[1,'indexHotLineCollege']])
Z(z[11])
Z(z[11])
Z(z[173])
Z(z[14])
Z([a,z[175][1],z[175][2],z[175][3]])
Z(z[21])
Z([[2,'=='],[[7],[3,'index']],[1,'indexStop']])
Z(z[10])
Z(z[11])
Z(z[11])
Z(z[14])
Z([a,[3,'bg-'],z[175][2],z[175][3]])
Z(z[21])
Z([[2,'=='],[[7],[3,'index']],[1,'index6']])
Z(z[10])
Z(z[11])
Z(z[11])
Z(z[31])
Z(z[32])
Z(z[46])
Z(z[14])
Z(z[15])
Z(z[16])
Z(z[17])
Z(z[18])
Z(z[39])
Z(z[20])
Z(z[21])
Z(z[5])
Z(z[89])
Z(z[42])
Z(z[2])
Z([[2,'=='],[[7],[3,'index']],[1,'indexHbcx']])
Z(z[5])
Z([[2,'=='],[[7],[3,'index']],[1,'indexSkcx']])
Z(z[31])
Z(z[46])
Z(z[5])
Z([[2,'=='],[[7],[3,'index']],[1,'indexHhzwss']])
Z(z[5])
Z([[2,'=='],[[7],[3,'index']],[1,'indexWs']])
Z(z[5])
Z([[2,'=='],[[7],[3,'index']],[1,'indexOyky']])
Z(z[5])
Z([[2,'=='],[[7],[3,'index']],[1,'indexBzly']])
Z(z[5])
Z([[2,'=='],[[7],[3,'index']],[1,'indexCar1']])
Z([[2,'=='],[[7],[3,'index']],[1,'indexCar2']])
Z([[2,'=='],[[7],[3,'index']],[1,'indexCar3']])
Z([[2,'=='],[[7],[3,'index']],[1,'indexDh2']])
Z([[2,'=='],[[7],[3,'index']],[1,'0']])
Z([[2,'!='],[[7],[3,'index']],[1,'0']])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,1]])
Z([3,'handleClickHotLineBtn'])
Z([[7],[3,'hotLineBoxClass']])
Z([[7],[3,'hotLineCol']])
Z([a,[[7],[3,'hotLineContainerClass']],[3,' padding-top-sm']])
Z([[7],[3,'hotLineItemClass']])
Z([[7],[3,'showHotLineTitleStyle']])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,12]])
Z(z[231])
Z(z[232])
Z(z[233])
Z(z[234][1])
Z(z[235])
Z(z[236])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,2]])
Z(z[231])
Z(z[232])
Z(z[233])
Z([a,z[234][1],z[234][2]])
Z(z[235])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,22]])
Z([3,'1'])
Z(z[42])
Z(z[231])
Z(z[232])
Z(z[233])
Z(z[234][1])
Z(z[235])
Z(z[236])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,3]])
Z(z[231])
Z(z[232])
Z(z[233])
Z(z[234][1])
Z(z[235])
Z([[7],[3,'isShowIndexTel']])
Z([3,'round'])
Z([3,'index-float-btn'])
Z([3,'home'])
Z([[7],[3,'showContactStaffBtn']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_18_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_18=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_18=true;
var x=['./pages/index2/index2.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_18_1()
var lMM=_mz(z,'scroll-view',['scrollY',-1,'class',0,'id',1],[],e,s,gg)
var ePM=_mz(z,'cu-nav',['hideBackGround',2,'id',1],[],e,s,gg)
_(lMM,ePM)
var aNM=_v()
_(lMM,aNM)
if(_oz(z,4,e,s,gg)){aNM.wxVkey=1
var bQM=_n('index1-component')
_rz(z,bQM,'select_obj',5,e,s,gg)
_(aNM,bQM)
}
else if(_oz(z,6,e,s,gg)){aNM.wxVkey=2
var oRM=_mz(z,'index11-component',['currentIndex',7,'select_obj',1],[],e,s,gg)
_(aNM,oRM)
}
else if(_oz(z,9,e,s,gg)){aNM.wxVkey=3
var xSM=_mz(z,'index2-component',['bannerBoxClass',10,'bannerClass',1,'bannerImageClass',2,'btnClass',3,'firstBannerHeight',4,'hotLineBoxClass',5,'hotLineContainerClass',6,'hotLineItemClass',7,'mainClass',8,'noticeClass',9,'noticePopupDialogClass',10,'screenWidth',11,'select_obj',12],[],e,s,gg)
_(aNM,xSM)
}
else if(_oz(z,23,e,s,gg)){aNM.wxVkey=4
var oTM=_n('index21-component')
_rz(z,oTM,'select_obj',24,e,s,gg)
_(aNM,oTM)
}
else if(_oz(z,25,e,s,gg)){aNM.wxVkey=5
var fUM=_n('index3-component')
_rz(z,fUM,'select_obj',26,e,s,gg)
_(aNM,fUM)
}
else if(_oz(z,27,e,s,gg)){aNM.wxVkey=6
var cVM=_mz(z,'index4-component',['bannerBoxClass',28,'bannerClass',1,'bannerImageClass',2,'bannerPosition',3,'btnClass',4,'class',5,'firstBannerHeight',6,'hotLineBoxClass',7,'hotLineContainerClass',8,'hotLineItemClass',9,'mainClass',10,'noticeClass',11,'screenWidth',12,'select_obj',13,'showHotLineTitleStyle',14,'showMyNotice',15],[],e,s,gg)
_(aNM,cVM)
}
else if(_oz(z,44,e,s,gg)){aNM.wxVkey=7
var hWM=_mz(z,'index41-component',['bannerPosition',45,'class',1],[],e,s,gg)
_(aNM,hWM)
}
else if(_oz(z,47,e,s,gg)){aNM.wxVkey=8
var oXM=_mz(z,'index42-component',['bannerPosition',48,'class',1,'hotLineBoxClass',2,'hotLineContainerClass',3,'hotLineItemClass',4,'select_obj',5,'showHotLineTitleStyle',6,'showMyNotice',7],[],e,s,gg)
_(aNM,oXM)
}
else if(_oz(z,56,e,s,gg)){aNM.wxVkey=9
var cYM=_mz(z,'index43-component',['bannerBoxClass',57,'bannerClass',1,'bannerImageClass',2,'bannerPosition',3,'btnClass',4,'class',5,'firstBannerHeight',6,'hotLineBoxClass',7,'hotLineContainerClass',8,'hotLineItemClass',9,'mainClass',10,'noticeClass',11,'screenWidth',12,'select_obj',13,'showHotLineTitleStyle',14,'showMyNotice',15],[],e,s,gg)
_(aNM,cYM)
}
else if(_oz(z,73,e,s,gg)){aNM.wxVkey=10
var oZM=_mz(z,'index5-component',['bannerBoxClass',74,'bannerClass',1,'bannerImageClass',2,'bannerPosition',3,'btnClass',4,'class',5,'firstBannerHeight',6,'hotLineBoxClass',7,'hotLineContainerClass',8,'hotLineItemClass',9,'mainClass',10,'noticeClass',11,'noticePopupDialogClass',12,'screenWidth',13,'select_obj',14,'showCityTitle',15,'showHotLineTitleStyle',16,'showMyNotice',17],[],e,s,gg)
_(aNM,oZM)
}
else if(_oz(z,92,e,s,gg)){aNM.wxVkey=11
var l1M=_mz(z,'index51-component',['bannerBoxClass',93,'bannerClass',1,'bannerImageClass',2,'bannerPosition',3,'btnClass',4,'class',5,'hotLineBoxClass',6,'hotLineContainerClass',7,'hotLineItemClass',8,'mainClass',9,'noticeClass',10,'noticePopupDialogClass',11,'screenWidth',12,'select_obj',13,'showCityTitle',14,'showHotLineTitleStyle',15,'showMyNotice',16],[],e,s,gg)
_(aNM,l1M)
}
else if(_oz(z,110,e,s,gg)){aNM.wxVkey=12
var a2M=_mz(z,'index512-component',['bannerBoxClass',111,'bannerClass',1,'bannerImageClass',2,'bannerPosition',3,'btnClass',4,'class',5,'hotLineBoxClass',6,'hotLineContainerClass',7,'hotLineItemClass',8,'mainClass',9,'noticeClass',10,'noticePopupDialogClass',11,'screenWidth',12,'select_obj',13,'showCityTitle',14,'showHotLineTitleStyle',15,'showMyNotice',16],[],e,s,gg)
_(aNM,a2M)
}
else if(_oz(z,128,e,s,gg)){aNM.wxVkey=13
var t3M=_mz(z,'index52-component',['bannerBoxClass',129,'bannerClass',1,'bannerImageClass',2,'bannerPosition',3,'btnClass',4,'class',5,'hotLineBoxClass',6,'hotLineContainerClass',7,'hotLineItemClass',8,'mainClass',9,'noticeClass',10,'noticePopupDialogClass',11,'screenWidth',12,'select_obj',13,'showCityTitle',14,'showHotLineTitleStyle',15,'showMyNotice',16],[],e,s,gg)
_(aNM,t3M)
}
else if(_oz(z,146,e,s,gg)){aNM.wxVkey=14
var e4M=_mz(z,'index53-component',['bannerBoxClass',147,'bannerClass',1,'bannerImageClass',2,'bannerPosition',3,'btnClass',4,'class',5,'firstBannerHeight',6,'mainClass',7,'noticeClass',8,'noticePopupDialogClass',9,'screenWidth',10,'select_obj',11,'showCityTitle',12,'showMyNotice',13],[],e,s,gg)
_(aNM,e4M)
}
else if(_oz(z,161,e,s,gg)){aNM.wxVkey=15
var b5M=_mz(z,'indexNav-component',['bannerBoxClass',162,'bannerClass',1,'bannerImageClass',2,'firstBannerHeight',3,'noticeClass',4,'noticePopupDialogClass',5,'screenWidth',6,'select_obj',7],[],e,s,gg)
_(aNM,b5M)
}
else if(_oz(z,170,e,s,gg)){aNM.wxVkey=16
var o6M=_mz(z,'banner-notice',['bannerClass',171,'bannerImageClass',1,'class',2,'firstBannerHeight',3,'noticeClass',4,'screenWidth',5],[],e,s,gg)
_(aNM,o6M)
}
else if(_oz(z,177,e,s,gg)){aNM.wxVkey=17
var x7M=_mz(z,'banner-notice',['bannerClass',178,'bannerImageClass',1,'class',2,'firstBannerHeight',3,'noticeClass',4,'screenWidth',5],[],e,s,gg)
_(aNM,x7M)
}
else if(_oz(z,184,e,s,gg)){aNM.wxVkey=18
var o8M=_mz(z,'indexStop-component',['bannerBoxClass',185,'bannerClass',1,'bannerImageClass',2,'firstBannerHeight',3,'noticeClass',4,'screenWidth',5],[],e,s,gg)
_(aNM,o8M)
}
else if(_oz(z,191,e,s,gg)){aNM.wxVkey=19
var f9M=_mz(z,'index6-component',['bannerBoxClass',192,'bannerClass',1,'bannerImageClass',2,'bannerPosition',3,'btnClass',4,'class',5,'firstBannerHeight',6,'hotLineBoxClass',7,'hotLineContainerClass',8,'hotLineItemClass',9,'mainClass',10,'noticeClass',11,'noticePopupDialogClass',12,'screenWidth',13,'select_obj',14,'showCityTitle',15,'showHotLineTitleStyle',16,'showMyNotice',17],[],e,s,gg)
_(aNM,f9M)
}
else if(_oz(z,210,e,s,gg)){aNM.wxVkey=20
var c0M=_n('indexHbcx-component')
_rz(z,c0M,'select_obj',211,e,s,gg)
_(aNM,c0M)
}
else if(_oz(z,212,e,s,gg)){aNM.wxVkey=21
var hAN=_mz(z,'indexSkcx-component',['bannerPosition',213,'class',1,'select_obj',2],[],e,s,gg)
_(aNM,hAN)
}
else if(_oz(z,216,e,s,gg)){aNM.wxVkey=22
var oBN=_n('indexHhzwss-component')
_rz(z,oBN,'select_obj',217,e,s,gg)
_(aNM,oBN)
}
else if(_oz(z,218,e,s,gg)){aNM.wxVkey=23
var cCN=_n('indexWs-component')
_rz(z,cCN,'select_obj',219,e,s,gg)
_(aNM,cCN)
}
else if(_oz(z,220,e,s,gg)){aNM.wxVkey=24
var oDN=_n('indexOyky-component')
_rz(z,oDN,'select_obj',221,e,s,gg)
_(aNM,oDN)
}
else if(_oz(z,222,e,s,gg)){aNM.wxVkey=25
var lEN=_n('indexBzly-component')
_rz(z,lEN,'select_obj',223,e,s,gg)
_(aNM,lEN)
}
else if(_oz(z,224,e,s,gg)){aNM.wxVkey=26
var aFN=_n('indexCar1-component')
_(aNM,aFN)
}
else if(_oz(z,225,e,s,gg)){aNM.wxVkey=27
var tGN=_n('indexCar2-component')
_(aNM,tGN)
}
else if(_oz(z,226,e,s,gg)){aNM.wxVkey=28
var eHN=_n('indexCar3-component')
_(aNM,eHN)
}
else if(_oz(z,227,e,s,gg)){aNM.wxVkey=29
var bIN=_n('indexDh2-component')
_(aNM,bIN)
}
else if(_oz(z,228,e,s,gg)){aNM.wxVkey=30
}
var tOM=_v()
_(lMM,tOM)
if(_oz(z,229,e,s,gg)){tOM.wxVkey=1
var oJN=_v()
_(tOM,oJN)
if(_oz(z,230,e,s,gg)){oJN.wxVkey=1
var cNN=_mz(z,'hot-line',['bind:clickHotLineBtn',231,'hotLineBoxClass',1,'hotLineCol',2,'hotLineContainerClass',3,'hotLineItemClass',4,'showHotLineTitleStyle',5],[],e,s,gg)
_(oJN,cNN)
}
var xKN=_v()
_(tOM,xKN)
if(_oz(z,237,e,s,gg)){xKN.wxVkey=1
var hON=_mz(z,'hot-line2',['bind:clickHotLineBtn',238,'hotLineBoxClass',1,'hotLineCol',2,'hotLineContainerClass',3,'hotLineItemClass',4,'showHotLineTitleStyle',5],[],e,s,gg)
_(xKN,hON)
}
else if(_oz(z,244,e,s,gg)){xKN.wxVkey=2
var oPN=_mz(z,'hotLineCollegeByType',['bind:clickHotLineBtn',245,'hotLineBoxClass',1,'hotLineCol',2,'hotLineContainerClass',3,'hotLineItemClass',4],[],e,s,gg)
_(xKN,oPN)
}
var oLN=_v()
_(tOM,oLN)
if(_oz(z,250,e,s,gg)){oLN.wxVkey=1
var cQN=_mz(z,'hot-line-college',['HotLineCollegeListType',251,'HotLineCollegeTieleType',1,'bind:clickHotLineBtn',2,'hotLineBoxClass',3,'hotLineCol',4,'hotLineContainerClass',5,'hotLineItemClass',6,'showHotLineTitleStyle',7],[],e,s,gg)
_(oLN,cQN)
}
else if(_oz(z,259,e,s,gg)){oLN.wxVkey=2
var oRN=_mz(z,'hotLineMultiLevel',['bind:clickHotLineBtn',260,'hotLineBoxClass',1,'hotLineCol',2,'hotLineContainerClass',3,'hotLineItemClass',4],[],e,s,gg)
_(oLN,oRN)
}
var fMN=_v()
_(tOM,fMN)
if(_oz(z,265,e,s,gg)){fMN.wxVkey=1
var lSN=_n('index-tel')
_rz(z,lSN,'btnClass',266,e,s,gg)
_(fMN,lSN)
}
oJN.wxXCkey=1
oJN.wxXCkey=3
xKN.wxXCkey=1
xKN.wxXCkey=3
xKN.wxXCkey=3
oLN.wxXCkey=1
oLN.wxXCkey=3
oLN.wxXCkey=3
fMN.wxXCkey=1
fMN.wxXCkey=3
}
var aTN=_mz(z,'index-float-btn',['class',267,'pageName',1],[],e,s,gg)
_(lMM,aTN)
aNM.wxXCkey=1
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
aNM.wxXCkey=3
tOM.wxXCkey=1
tOM.wxXCkey=3
_(r,lMM)
var oLM=_v()
_(r,oLM)
if(_oz(z,269,e,s,gg)){oLM.wxVkey=1
}
oLM.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_18";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_18();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index2/index2.wxml'] = [$gwx_XC_18, './pages/index2/index2.wxml'];else __wxAppCode__['pages/index2/index2.wxml'] = $gwx_XC_18( './pages/index2/index2.wxml' );
	;__wxRoute = "pages/index2/index2";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index2/index2.js";define("pages/index2/index2.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../@babel/runtime/helpers/Arrayincludes");var e=getApp(),n=require("../../8A94E9619105A88CECF281668574FB65.js"),a=n.getSupplierType,i=n.handleToHKMOPage;Page({data:{primary:e.globalData.corpXcx.primary,CustomBar:e.globalData.systemInfo.CustomBar,navBgColor:"#fff",index:"2",select_obj:{beginCity:"请选择出发地",beginCityCode:"",beginCityName:"请选择",beginDisCode:"",beginDisName:"",endCity:"请选择到达地",endCityCode:"",endCityName:"请选择",endDisName:"",endDisCode:""},indexSupportName:"",corpName:e.globalData.corp.corpName||"首页",currentIndex:-1,showPrivacyPopup:!1,modalName:null,hotLineType:0,hotLineCol:2,hotLineContainerClass:"bg-white margin-lr-24 radius-36",hotLineItemClass:"radius-16 bg-default-blue",hotLineBoxClass:"padding-lr-sm",showHotLineTitleStyle:1,isShowIndexTel:!1,pageBgType:1,indexBgHeight:246,bannerPosition:"top",bannerClassMore:"",skinClassName:e.globalData.skinClassName,showContactStaffBtn:!1,showBubbleBanner:!0},handleClickHotLineBtn:function(n){e.globalData.corpXcx.toOtherAppid?e.util.goOtherMiniApp(e.globalData.corpXcx.toOtherAppid):["indexHotLine","indexHotLineCollege"].includes(this.data.index)?this._goto_next_page(n.detail.ticket_obj):this.selectComponent(".index-search-component")&&this.selectComponent(".index-search-component")._goto_next_page(n.detail.ticket_obj)},_goto_next_page:function(n){wx.setStorageSync(e.globalData.corp.appid+"_ticket_obj",n),wx.setStorageSync(e.globalData.corp.appid+"_select_obj",n);var a=e.util.enQueryString(n),t="/package/index4/pages/select_date/select_date?"+a+"&go_index_flag=0";"intervalSwc"==e.globalData.corp.interval?t="/package/index4/pages/select_address/select_address?"+a:["interval22","interval221"].includes(e.globalData.corp.interval)&&(t=e.config.pagesUrlV2[e.globalData.corp.interval]+"?"+a);var o=i({url:t+"?"+a,ticketObj:n}).redirectUrl;console.log("url",t),wx.navigateTo({url:o})},imageLoad:function(n){var a=n.detail.width/n.detail.height,i=Math.round(750/a);this.setData({indexBgHeight:i}),wx.setStorageSync(e.globalData.corp.appid+"_indexBgHeight",i)},closeBottomBubbleBanner:function(){this.setData({showBubbleBanner:!1})},handleFloatBtnAction:function(){this.selectComponent(".index-float-btn").handleBtnAction()},onLoad:function(n){var i=this;if(wx.setNavigationBarTitle({title:e.globalData.corp.corpName}),e.getCorpXcxInfo((function(){wx.setNavigationBarTitle({title:e.globalData.corp.corpName});var a=e.globalData.corpXcx.indexSupportName;null==a&&(a=e.config.indexSupportName);var t=i.data.currentIndex;e.util.isNotNull(n.currentIndex)&&(t=+e.util.positiveInteger(n.currentIndex));var o=e.globalData.corp.ID,l=e.globalData.corpXcx.hotLineType||1,d=e.globalData.corp.index,c=i.data.hotLineCol,s=i.data.hotLineContainerClass,r=i.data.hotLineItemClass,x=i.data.hotLineBoxClass,g=i.data.showHotLineTitleStyle,p=i.data.showContactStaffBtn;["index1","index11","index2","index21","index3","indexNav","indexStop","indexHbcx","indexHhzwss","indexWs","indexOyky","indexBzly","indexCar1","indexCar2","indexCar3","indexDh2"].includes(d)&&(l=0),"index41"==d?(s="",r="",x=""):"index512"==d?(s="bg-white margin-lr-24 radius-14",r="radius-14 bg-default-blue"):"index52"==d?(s="bg-white margin-lr-24 radius-16",x="padding-lr-sm padding-bottom-xs"):"indexHotLine"==d?x="padding-lr-sm padding-top":"indexHotLineCollege"==d?x="padding-lr-14 padding-top-sm":"indexOyky"==d&&(s="",r="border-radius-4 bg-default-white",x="margin-lr-xs");var u=!1;["index1","index11","index2","index21","index3","index4","index41","index42","index43","index5","index512","index52","index53","indexHotLine","indexHotLineCollege","index6","indexHhzwss","indexOyky","indexSkcx"].includes(d)&&(u=!0),["index4","index42","index43","index5","index51","index512","index53","index52","index6"].includes(d)?g=2:["indexHotLine","indexHotLineCollege"].includes(d)&&(g=0);var b=i.data.pageBgType,h="",m="top",C=i.data.indexBgHeight,y=i.data.bannerClassMore;["index52"].includes(d)?b=2:["index42","index43","index51","index512","index41"].includes(d)&&(b=3,m="bottom",["index51","index512"].includes(d)&&(b=4),h="".concat(e.config.staticHost,"/web/xcx/images/index/indexBanner/default.png"),["jcx","jtcx","dzcx","jinxztc","xylx","sscx","hccx","jbgk"].includes(o)?h="".concat(e.config.staticHost,"/web/xcx/images/index/indexBanner/").concat(o).concat(i.data.skinClassName,".png?v=12"):["ycx"].includes(o)?h="".concat(e.config.staticHost,"/web/xcx/images/index/indexBanner/").concat(o,"_").concat(e.globalData.corp.appid,".png"):["xxbs"].includes(o)&&(h="".concat(e.config.staticHost,"/web/xcx/images/index/indexBanner/ycx_wx44d254291f27af7c.png")),C=wx.getStorageSync(e.globalData.corp.appid+"_indexBgHeight")),["ycx"].includes(o)?(y="hide",b=3,["wx9ba571ec3b03c48b"].includes(e.globalData.corp.appid)&&(b=1)):["jbgk"].includes(o)&&(y="hide",b=5),["xyx"].includes(o)?(b=3,m="bottom",h="".concat(e.config.staticHost,"/web/xcx/images/index/indexBanner/").concat(o).concat(i.data.skinClassName,".png")):["kjbs","zzcd","ytkc","xc"].includes(o)&&(c=1),["lqkyzx","xxbs"].includes(o)&&(p=!0),i.setData({indexSupportName:a,index:d,hotLineType:l,currentIndex:t,hotLineCol:c,hotLineContainerClass:s,hotLineItemClass:r,hotLineBoxClass:x,showHotLineTitleStyle:g,isShowIndexTel:u,indexBgSrc:h,pageBgType:b,indexBgHeight:C||246,bannerPosition:m,bannerClassMore:y,showContactStaffBtn:p})})),e.doLogin((function(){a()})),e.util.isNotNull(n.sourceid)&&(e.globalData.sourceid=n.sourceid),e.util.isNotNull(n.scene)&&-1!==n.scene.indexOf("sourceid")){var t=n.scene.replace(/[^\d.]/g,"");e.globalData.sourceid=t}},onReady:function(){},onPullDownRefresh:function(){wx.stopPullDownRefresh()},onShow:function(){try{var n;n=wx.getStorageSync(e.globalData.corp.appid+"_select_obj"),console.log("index onShow select_obj",n),n&&this.setData({select_obj:n}),wx.removeStorageSync(e.globalData.corp.appid+"_share_obj")}catch(e){console.log(e)}},onShareAppMessage:function(n){return{title:e.globalData.shareData.title,path:e.globalData.corpXcx.tabBarHome}},onShareTimeline:function(){return{title:e.globalData.shareData.title,query:"",imageUrl:e.globalData.corpXcx.shareCouponImgUrl}}});
},{isPage:true,isComponent:true,currentFile:'pages/index2/index2.js'});require("pages/index2/index2.js");$gwx_XC_19=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_19 || [];
function gz$gwx_XC_19_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_19_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,false])
Z([3,'home'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_19_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_19=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_19=true;
var x=['./pages/index_dh/index_dh.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_19_1()
var eVN=_n('indexDh2')
_(r,eVN)
var bWN=_mz(z,'index-float-btn',['isFullPage',0,'pageName',1],[],e,s,gg)
_(r,bWN)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_19";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_19();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index_dh/index_dh.wxml'] = [$gwx_XC_19, './pages/index_dh/index_dh.wxml'];else __wxAppCode__['pages/index_dh/index_dh.wxml'] = $gwx_XC_19( './pages/index_dh/index_dh.wxml' );
	;__wxRoute = "pages/index_dh/index_dh";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index_dh/index_dh.js";define("pages/index_dh/index_dh.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var a=getApp();Page({data:{primary:a.globalData.corpXcx.primary},onLoad:function(e){if(a.util.isNotNull(e.sourceid)&&(a.globalData.sourceid=e.sourceid),a.util.isNotNull(e.scene)&&-1!==e.scene.indexOf("sourceid")){var t=e.scene.replace(/[^\d.]/g,"");a.globalData.sourceid=t}},onReady:function(){},onShareAppMessage:function(){return{title:a.globalData.shareData.title,path:"/pages/index_dh/index_dh"}},onShareTimeline:function(){return{title:a.globalData.shareData.title,imageUrl:a.globalData.corpXcx.shareCouponImgUrl,query:""}}});
},{isPage:false,isComponent:true,currentFile:'pages/index_dh/index_dh.js'});require("pages/index_dh/index_dh.js");$gwx_XC_20=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
},{isPage:true,isComponent:true,currentFile:'pages/partner/partner_from/partner_from.js'});require("pages/partner/partner_from/partner_from.js");$gwx_XC_21=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_21 || [];
function gz$gwx_XC_21_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_21_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'hide'])
Z([3,'handleOnNoticeComLoad'])
Z([3,'banner-notice'])
Z(z[0])
Z([3,'notifyPassenger'])
Z([[2,'!'],[[6],[[7],[3,'resultIds']],[3,'length']]])
Z([a,[3,'query-form-container bg-white margin-24 padding-tb-xl radius-36 shadow flex flex-column '],[[7],[3,'searchBoxClass']]])
Z([[7],[3,'noticeList']])
Z([3,'index'])
Z([3,'clickNotice'])
Z([3,'margin-bottom-sm'])
Z([[6],[[7],[3,'item']],[3,'content']])
Z([[6],[[7],[3,'item']],[3,'url']])
Z([[6],[[7],[3,'item']],[3,'openType']])
Z([[6],[[7],[3,'item']],[3,'otherAppid']])
Z([[6],[[7],[3,'item']],[3,'pagePath']])
Z([[6],[[7],[3,'item']],[3,'picUrl']])
Z([[6],[[7],[3,'item']],[3,'title']])
Z(z[11])
Z([[7],[3,'isNeedOrderId']])
Z([3,'showOrderSelect'])
Z([a,[3,'cu-btn round flex-sub line-'],[[7],[3,'primary']]])
Z([3,'button-hover'])
Z([[2,'!'],[[7],[3,'loading']]])
Z(z[5])
Z([[6],[[7],[3,'resultIds']],[3,'length']])
Z([a,[3,'result-content bg-white margin-24 radius-36 shadow '],[[2,'?:'],[[6],[[7],[3,'resultIds']],[3,'length']],[1,'animation-slide-right'],[1,'']]])
Z([[2,'>'],[[6],[[7],[3,'resultIds']],[3,'length']],[1,1]])
Z([[7],[3,'fieldArray']])
Z([3,'field'])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'field']],[1,'content']],[[6],[[7],[3,'resulObj']],[3,'content']]])
Z([[6],[[7],[3,'resulObj']],[3,'content']])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'field']],[1,'contentTwo']],[[6],[[7],[3,'resulObj']],[3,'contentTwo']]])
Z([[6],[[7],[3,'resulObj']],[3,'contentTwo']])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'field']],[1,'remark']],[[6],[[7],[3,'resulObj']],[3,'remark']]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'field']],[1,'tel']])
Z([3,'handleMakePhoneCall'])
Z([a,[3,'flex-twice flex align-center justify-end '],[[2,'?:'],[[6],[[7],[3,'resulObj']],[3,'tel']],[[2,'+'],[1,'text-'],[[7],[3,'primary']]],[1,'']]])
Z([[6],[[7],[3,'resulObj']],[3,'label']])
Z([[6],[[7],[3,'resulObj']],[3,'tel']])
Z(z[39])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'field']],[1,'leaderName']],[[6],[[7],[3,'resulObj']],[3,'leaderTel']]])
Z(z[36])
Z([3,'flex-twice flex align-center justify-end'])
Z(z[38])
Z([[6],[[7],[3,'resulObj']],[3,'leaderTel']])
Z(z[45])
Z([[6],[[7],[3,'resulObj']],[[6],[[7],[3,'item']],[3,'field']]])
Z([[7],[3,'showBottomTipsAfterCheck']])
Z([[2,'&&'],[[6],[[7],[3,'resultIds']],[3,'length']],[[7],[3,'showLeaderBtn']]])
Z([3,'hideModal'])
Z([a,[3,'cu-modal bottom-modal '],[[2,'?:'],[[2,'=='],[[7],[3,'modalName']],[1,'orderSelect']],[1,'show'],[1,'']]])
Z([3,'modal'])
Z(z[50])
Z([3,'cu-dialog'])
Z([3,'bindRefresh'])
Z([[7],[3,'triggered']])
Z([[7],[3,'orderScrollTop']])
Z([3,'max-height:60vh;'])
Z([[6],[[7],[3,'orderList']],[3,'length']])
Z([[7],[3,'orderList']])
Z([3,'orderId'])
Z([3,'onOrderSelect'])
Z([3,'margin-lr-36 margin-tb-sm radius-36 bg-white order-box position-relative'])
Z([[6],[[7],[3,'item']],[3,'orderId']])
Z([[6],[[7],[3,'item']],[3,'totalNumber']])
Z([[6],[[7],[3,'item']],[3,'backDate']])
Z([[6],[[7],[3,'item']],[3,'backAddressName']])
Z([[6],[[7],[3,'item']],[3,'backGetOffAddressName']])
Z([1,false])
Z([3,'takeCarInfo'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_21_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_21=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_21=true;
var x=['./pages/takeCarInfo/takeCarInfo.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_21_1()
var t9N=_mz(z,'banner-notice',['bannerClass',0,'bind:onNoticeComLoad',1,'class',1,'noticeClass',2,'pageTab',3],[],e,s,gg)
_(r,t9N)
var c5N=_v()
_(r,c5N)
if(_oz(z,5,e,s,gg)){c5N.wxVkey=1
var e0N=_n('view')
_rz(z,e0N,'class',6,e,s,gg)
var oBO=_v()
_(e0N,oBO)
var xCO=function(fEO,oDO,cFO,gg){
var oHO=_mz(z,'view',['bindtap',9,'class',1,'data-content',2,'data-link-Url',3,'data-open-Type',4,'data-other-Appid',5,'data-page-Path',6,'data-pic-Url',7,'data-title',8],[],fEO,oDO,gg)
var cIO=_v()
_(oHO,cIO)
if(_oz(z,18,fEO,oDO,gg)){cIO.wxVkey=1
}
cIO.wxXCkey=1
_(cFO,oHO)
return cFO
}
oBO.wxXCkey=2
_2z(z,7,xCO,e,s,gg,oBO,'item','index','index')
var bAO=_v()
_(e0N,bAO)
if(_oz(z,19,e,s,gg)){bAO.wxVkey=1
var oJO=_mz(z,'view',['bindtap',20,'class',1,'hoverClass',2],[],e,s,gg)
var lKO=_v()
_(oJO,lKO)
if(_oz(z,23,e,s,gg)){lKO.wxVkey=1
}
lKO.wxXCkey=1
_(bAO,oJO)
}
bAO.wxXCkey=1
_(c5N,e0N)
}
var o6N=_v()
_(r,o6N)
if(_oz(z,24,e,s,gg)){o6N.wxVkey=1
}
var l7N=_v()
_(r,l7N)
if(_oz(z,25,e,s,gg)){l7N.wxVkey=1
var aLO=_n('view')
_rz(z,aLO,'class',26,e,s,gg)
var tMO=_v()
_(aLO,tMO)
if(_oz(z,27,e,s,gg)){tMO.wxVkey=1
}
var bOO=_v()
_(aLO,bOO)
var oPO=function(oRO,xQO,fSO,gg){
var hUO=_v()
_(fSO,hUO)
if(_oz(z,30,oRO,xQO,gg)){hUO.wxVkey=1
var oVO=_v()
_(hUO,oVO)
if(_oz(z,31,oRO,xQO,gg)){oVO.wxVkey=1
}
oVO.wxXCkey=1
}
else if(_oz(z,32,oRO,xQO,gg)){hUO.wxVkey=2
var cWO=_v()
_(hUO,cWO)
if(_oz(z,33,oRO,xQO,gg)){cWO.wxVkey=1
}
cWO.wxXCkey=1
}
else if(_oz(z,34,oRO,xQO,gg)){hUO.wxVkey=3
}
else if(_oz(z,35,oRO,xQO,gg)){hUO.wxVkey=4
var oXO=_mz(z,'view',['bind:tap',36,'class',1,'data-name',2,'data-tel',3],[],oRO,xQO,gg)
var lYO=_v()
_(oXO,lYO)
if(_oz(z,40,oRO,xQO,gg)){lYO.wxVkey=1
}
lYO.wxXCkey=1
_(hUO,oXO)
}
else if(_oz(z,41,oRO,xQO,gg)){hUO.wxVkey=5
var aZO=_mz(z,'view',['bind:tap',42,'class',1,'data-name',2,'data-tel',3],[],oRO,xQO,gg)
var t1O=_v()
_(aZO,t1O)
if(_oz(z,46,oRO,xQO,gg)){t1O.wxVkey=1
}
t1O.wxXCkey=1
_(hUO,aZO)
}
else if(_oz(z,47,oRO,xQO,gg)){hUO.wxVkey=6
}
hUO.wxXCkey=1
return fSO
}
bOO.wxXCkey=2
_2z(z,28,oPO,e,s,gg,bOO,'item','index','field')
var eNO=_v()
_(aLO,eNO)
if(_oz(z,48,e,s,gg)){eNO.wxVkey=1
}
tMO.wxXCkey=1
eNO.wxXCkey=1
_(l7N,aLO)
}
var a8N=_v()
_(r,a8N)
if(_oz(z,49,e,s,gg)){a8N.wxVkey=1
}
var e2O=_mz(z,'view',['catchtap',50,'class',1,'data-target',2],[],e,s,gg)
var b3O=_mz(z,'view',['catchtap',53,'class',1],[],e,s,gg)
var o4O=_mz(z,'scroll-view',['refresherEnabled',-1,'scrollY',-1,'bindrefresherrefresh',55,'refresherTriggered',1,'scrollTop',2,'style',3],[],e,s,gg)
var x5O=_v()
_(o4O,x5O)
if(_oz(z,59,e,s,gg)){x5O.wxVkey=1
var o6O=_v()
_(x5O,o6O)
var f7O=function(h9O,c8O,o0O,gg){
var oBP=_mz(z,'view',['catch:tap',62,'class',1,'data-order-id',2],[],h9O,c8O,gg)
var lCP=_v()
_(oBP,lCP)
if(_oz(z,65,h9O,c8O,gg)){lCP.wxVkey=1
}
var aDP=_v()
_(oBP,aDP)
if(_oz(z,66,h9O,c8O,gg)){aDP.wxVkey=1
}
var tEP=_v()
_(oBP,tEP)
if(_oz(z,67,h9O,c8O,gg)){tEP.wxVkey=1
}
var eFP=_v()
_(oBP,eFP)
if(_oz(z,68,h9O,c8O,gg)){eFP.wxVkey=1
}
lCP.wxXCkey=1
aDP.wxXCkey=1
tEP.wxXCkey=1
eFP.wxXCkey=1
_(o0O,oBP)
return o0O
}
o6O.wxXCkey=2
_2z(z,60,f7O,e,s,gg,o6O,'item','index','orderId')
}
x5O.wxXCkey=1
_(b3O,o4O)
_(e2O,b3O)
_(r,e2O)
var bGP=_mz(z,'index-float-btn',['isFullPage',69,'pageName',1],[],e,s,gg)
_(r,bGP)
c5N.wxXCkey=1
o6N.wxXCkey=1
l7N.wxXCkey=1
a8N.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_21";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_21();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/takeCarInfo/takeCarInfo.wxml'] = [$gwx_XC_21, './pages/takeCarInfo/takeCarInfo.wxml'];else __wxAppCode__['pages/takeCarInfo/takeCarInfo.wxml'] = $gwx_XC_21( './pages/takeCarInfo/takeCarInfo.wxml' );
	;__wxRoute = "pages/takeCarInfo/takeCarInfo";__wxRouteBegin = true;__wxAppCurrentFile__="pages/takeCarInfo/takeCarInfo.js";define("pages/takeCarInfo/takeCarInfo.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/createForOfIteratorHelper"),t=require("../../@babel/runtime/helpers/regeneratorRuntime"),a=require("../../@babel/runtime/helpers/asyncToGenerator"),r=require("../../@babel/runtime/helpers/defineProperty");require("../../@babel/runtime/helpers/Arrayincludes");var l=getApp(),n=require("../../3BE296B59105A88C5D84FEB2CFF3FB65.js").getTelStorage;Page({data:{primary:l.globalData.corpXcx.primary,secondaryColor:l.globalData.corpXcx.secondaryColor,contactName:"",contactTel:"",resulObj:{},inputFocus:"",resultIds:[],displayNumber:0,selectedId:"",searchBoxClass:"",currentIndex:0,infoTips:"",orderId:"",orderList:[],orderLoadTips:"",orderScrollTop:0,triggered:!1,loading:!1,noticeList:"",showLeaderBtn:!0,fieldArray:[{field:"intervalName",label:"班次"},{field:"name",label:"联系人"},{field:"tel",label:"联系电话"},{field:"ticketCount",label:"票数"},{field:"upLocationName",label:"上车地点"},{field:"downLocationName",label:"下车地点"},{field:"takeDateShow",label:"乘车日期"},{field:"assemblyTime",label:"集合时间"},{field:"takeTime",label:"发车时间"},{field:"busNumber",label:"车牌号码"},{field:"leaderName",label:"随车负责人"},{field:"content",label:"乘车信息"},{field:"contentTwo",label:"乘车信息2"},{field:"remark",label:"备注"}],showBottomTipsAfterCheck:!1,isNeedOrderId:!0},init:!0,onLoad:function(e){var t=this.data.infoTips,a=this.data.showLeaderBtn,r=this.data.isNeedOrderId,n=this.data.fieldArray,i=this.data.showBottomTipsAfterCheck;["zqbs"].includes(l.globalData.corp.ID)?(n=[{field:"content",label:"通知内容"},{field:"contentTwo",label:"通知内容2"},{field:"remark",label:"备注"},{field:"intervalName",label:"班次名称"},{field:"busNumber",label:"车牌号码"},{field:"takeDateShow",label:"乘车日期"},{field:"assemblyTime",label:"集合时间"},{field:"takeTime",label:"发车时间"},{field:"name",label:"联系人"},{field:"ticketCount",label:"票数"},{field:"tel",label:"联系电话"},{field:"upLocationName",label:"上车地点"},{field:"leaderName",label:"随车负责人"},{field:"downLocationName",label:"下车地点"}],a=!1,r=!1):["cfd","txky","mtky","xcky","jincky","fcky","lianxky","scky","lvcky"].includes(l.globalData.corp.ID)&&(i=!0),this.setData({infoTips:t,showLeaderBtn:a,fieldArray:n,showBottomTipsAfterCheck:i,isNeedOrderId:r}),wx.setNavigationBarTitle({title:l.globalData.corp.corpName+" 乘车信息"}),r&&this.showOrderSelect()},onReady:function(){},onShow:function(){this.data.resultIds.length&&this.data.resulObj.id&&this.onSwiperItemSelect(null,this.data.resulObj.id)},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},onInput:function(e){this.setData(r({},e.target.dataset.field,e.detail.value))},onInputClear:function(e){this.setData(r({},e.target.dataset.field,""))},onSearch:function(){return this.data.contactName?this.data.contactTel?void this.getIds():l.util.showMsg("请输入联系电话"):l.util.showMsg("请输入联系人")},getIds:function(){var e=this,t={corpid:l.globalData.corp.ID,name:this.data.contactName,tel:this.data.contactTel,orderId:this.data.orderId};l.network.requestPOSTEncrypt(t,"/api/v3/apiNotifyPassenger/getIds","查询中...",!0).then((function(t){if(t.success){var a=t.data||[];e.setData({resultIds:a,displayNumber:a.length>3?3:a.length,searchBoxClass:a.length?"animation-slide-left":"",modalName:null}),a.length?e.onSwiperItemSelect(null,a[0].id):l.util.showMsg("暂无乘车信息，请检查输入的信息，或联系管理员")}else l.util.showMsg(t.message||"查询失败，请重试")})).finally((function(){e.setData({orderId:""})}))},hideModal:function(e){"modal"==e.currentTarget.dataset.target&&this.setData({modalName:null})},handleTelTap:function(e){var t=e&&e.currentTarget.dataset.tel;t&&l.util.makePhoneCallArray(t)},removeHtmlTags:function(e){return e?e.replace(/<[^>]*>/g,""):""},handleContentCopy:function(e){wx.setClipboardData({data:this.removeHtmlTags(e.currentTarget.dataset.value)}).then((function(e){l.util.showMsg("已复制乘车信息")})).catch((function(e){l.util.showMsg(e)}))},handleClearSearchResult:function(){var e=this.data.resulObj.tel,t=this.data.resulObj.name;this.setData({resultIds:[],selectedId:"",resulObj:{},contactTel:e,contactName:t,orderId:""})},onSwiperItemSelect:function(e,r){var n=this;return a(t().mark((function a(){var i,o,s,d;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e&&e.currentTarget.dataset.id||r){t.next=3;break}return t.abrupt("return");case 3:return o=e&&e.currentTarget.dataset.index||0,s={corpid:l.globalData.corp.ID,id:i},d={},t.next=8,l.network.requestPOSTEncrypt(s,"/api/v3/apiNotifyPassenger/getById","查询中...",!0).then((function(e){d=e.data||{},e.success||l.util.showMsg("获取当天乘车信息失败，请重试"),d.takeDate&&(d.takeDateShow="".concat(l.util.formatDate(d.takeDate),"（").concat(l.util.getWeek(d.takeDate),"）"))}));case 8:n.setData({currentIndex:n.handleCurrentIndex(o),selectedId:i,resulObj:d});case 9:case"end":return t.stop()}}),a)})))()},handleCurrentIndex:function(e){var t=e;t>1?t-=1:t<=1&&(t=0);var a=this.data.resultIds.length;return t+2>=a&&(t=a-3),t},showOrderSelect:function(){var r=this;return a(t().mark((function a(){var n,i,o;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.data.loading){t.next=2;break}return t.abrupt("return");case 2:return r.setData({loading:!0}),n={action:"order.myOrderListWithGangAo",openid:l.globalData.openid},i="订单加载完成",o=[],t.next=7,l.network.requestPOST(n).then((function(t){if(t.success&&t.data){var a,r=e(t.data);try{for(r.s();!(a=r.n()).done;){var n=a.value;"gang_ao"!==n.orderTable&&(n.showDate=l.util.formatDate(n.takeDate),n.week=l.util.getWeek(n.takeDate),n.priceFix=l.util.fixedPrice(n.totalFee),n.backDate&&(n.showBackDate=l.util.formatDate(n.backDate),n.backWeek=l.util.getWeek(n.backDate)),o.push(n))}}catch(e){r.e(e)}finally{r.f()}o.length||(i="今天暂无出行订单")}else i=t.message||"获取失败，请向下滑动重新获取"})).catch((function(e){i=e.message||"获取订单异常，请向下滑动重新获取"}));case 7:r.setData({orderList:o,modalName:r.init&&!o.length?"":"orderSelect",orderLoadTips:i,triggered:!1,orderScrollTop:0,loading:!1}),r.init=!1;case 9:case"end":return t.stop()}}),a)})))()},bindRefresh:function(){this.setData({triggered:!0}),this.showOrderSelect()},onOrderSelect:function(e){this.setData({orderId:e.currentTarget.dataset.orderId}),this.getIds()},handleMakePhoneCall:function(e){l.util.makePhoneCallArray(e.currentTarget.dataset.tel,e.currentTarget.dataset.name)},toLeaderPage:function(){var e=n(),t="/package/leaderCheckTicket/pages/leaderCheckTicket/leaderCheckTicket?busNumber="+this.data.resulObj.busNumber+"&takeDate="+this.data.resulObj.takeDate;e||(t="/package/pt_login/pages/pt_login2/pt_login2?returnUrl="+encodeURIComponent(t)+"&isNeedTel=1&isNeedAvatar=0");wx.navigateTo({url:t})},handleOnNoticeComLoad:function(e){console.log("handleOnNoticeComLoad",e),this.setData({noticeList:e.detail.noticeList})},clickNotice:function(e){this.selectComponent(".banner-notice")&&this.selectComponent(".banner-notice").clickNotice(e)}});
},{isPage:false,isComponent:true,currentFile:'pages/takeCarInfo/takeCarInfo.js'});require("pages/takeCarInfo/takeCarInfo.js");$gwx_XC_22=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_22 || [];
function gz$gwx_XC_22_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_22_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'bg-'],[[7],[3,'primary']]])
Z([[7],[3,'corpName']])
Z([[7],[3,'hasHKMOList']])
Z([[7],[3,'canCoupon']])
Z([[7],[3,'hasMonthFund']])
Z([[7],[3,'canMonthCard']])
Z([[7],[3,'isInsureOrder']])
Z([[7],[3,'canInvoice']])
Z([[2,'=='],[[7],[3,'partner_enable']],[1,1]])
Z([[2,'=='],[[7],[3,'canRecharge']],[1,1]])
Z([[7],[3,'canMember']])
Z([[2,'&&'],[[7],[3,'supportTel']],[[2,'!='],[[7],[3,'supportTel']],[1,'0']]])
Z([[7],[3,'showCustomerTelPageBtn']])
Z([[7],[3,'showWeWorkOnLineCustomer']])
Z([[7],[3,'showStaticOnlineCustomerList']])
Z([[7],[3,'showWeChatOnLineCustomer']])
Z([[7],[3,'showSobotOnLineCustomer']])
Z([[7],[3,'customerWx']])
Z([[7],[3,'customerWxQrcodeUrl']])
Z([[2,'=='],[[7],[3,'isChecker']],[1,1]])
Z(z[19])
Z([[2,'=='],[[7],[3,'monRule']],[1,1]])
Z([[2,'=='],[[7],[3,'finance']],[1,1]])
Z([[7],[3,'showEmergencyContact']])
Z([[7],[3,'showPersonalInformation']])
Z(z[24])
Z(z[24])
Z(z[24])
Z([[7],[3,'showServiceAgreement']])
Z([[7],[3,'showItemForGybs']])
Z([[7],[3,'isNeedLicense']])
Z([[7],[3,'showReturnChangeRules']])
Z([[8],'isLoading',[[7],[3,'loadingImage']]])
Z([3,'loading_mask'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_22_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1
}
function gz$gwx_XC_22_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_22_2)return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_2
__WXML_GLOBAL__.ops_cached.$gwx_XC_22_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'bg-'],[[7],[3,'primary']],[3,' light']])
Z([[7],[3,'corpName']])
Z([3,'member-container'])
Z([[2,'!'],[[7],[3,'tel']]])
Z([[2,'&&'],[[7],[3,'tel']],[[2,'!'],[[6],[[7],[3,'memberObj']],[3,'isMember']]]])
Z([[2,'&&'],[[7],[3,'tel']],[[6],[[7],[3,'memberObj']],[3,'isMember']]])
Z([3,'member-box is-login margin-lr-28 margin-tb-sm flex flex-column justify-between'])
Z([[6],[[7],[3,'memberObj']],[3,'expire_date']])
Z([[6],[[7],[3,'memberObj']],[3,'isExpire']])
Z([3,'nav-container flex grid bg-white shadow-radius-box'])
Z([[7],[3,'canCoupon']])
Z([[7],[3,'canInvoice']])
Z([[2,'=='],[[7],[3,'partner_enable']],[1,1]])
Z([[2,'=='],[[7],[3,'canRecharge']],[1,1]])
Z([[2,'&&'],[[7],[3,'supportTel']],[[2,'!='],[[7],[3,'supportTel']],[1,'0']]])
Z([[7],[3,'showCustomerTelPageBtn']])
Z([[7],[3,'showWeWorkOnLineCustomer']])
Z([[7],[3,'customerWx']])
Z([[7],[3,'customerWxQrcodeUrl']])
Z([[7],[3,'canMonthCard']])
Z([[7],[3,'showEmergencyContact']])
Z([[7],[3,'showPersonalInformation']])
Z(z[21])
Z(z[21])
Z(z[21])
Z([[7],[3,'showServiceAgreement']])
Z([[7],[3,'webviewLinkUrl']])
Z([[7],[3,'showItemForGybs']])
Z([[7],[3,'hasHKMOList']])
Z([[8],'isLoading',[[7],[3,'loadingImage']]])
Z([3,'loading_mask'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_22_2);return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_2
}
function gz$gwx_XC_22_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_22_3)return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_3
__WXML_GLOBAL__.ops_cached.$gwx_XC_22_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([[7],[3,'corpName']])
Z([3,'margin-lr bg-white radius-20 text-lg'])
Z([[7],[3,'hasHKMOList']])
Z([[7],[3,'canMonthCard']])
Z([[7],[3,'canCoupon']])
Z([[7],[3,'hasMonthFund']])
Z([[2,'=='],[[7],[3,'isChecker']],[1,1]])
Z(z[7])
Z([[2,'=='],[[7],[3,'finance']],[1,1]])
Z([[2,'&&'],[[7],[3,'supportTel']],[[2,'!='],[[7],[3,'supportTel']],[1,'0']]])
Z([[7],[3,'showStaticOnlineCustomerList']])
Z([[7],[3,'showCustomerTelPageBtn']])
Z([[7],[3,'isInsureOrder']])
Z([[7],[3,'canInvoice']])
Z([[2,'=='],[[7],[3,'partner_enable']],[1,1]])
Z([[2,'=='],[[7],[3,'canRecharge']],[1,1]])
Z([[7],[3,'customerWx']])
Z([[7],[3,'isNeedLicense']])
Z([[7],[3,'showReturnChangeRules']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_22_3);return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_3
}
function gz$gwx_XC_22_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_22_4)return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_4
__WXML_GLOBAL__.ops_cached.$gwx_XC_22_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'userCenter']],[1,'userCenter1']])
Z([[7],[3,'finance']])
Z([[7],[3,'isChecker']])
Z([[7],[3,'monRule']])
Z([[7],[3,'parameter']])
Z([[7],[3,'tel']])
Z([[7],[3,'userInfo']])
Z([[2,'=='],[[7],[3,'userCenter']],[1,'userCenter2']])
Z([3,'handleRefreshMember'])
Z(z[1])
Z(z[2])
Z([[7],[3,'memberObj']])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z([[2,'=='],[[7],[3,'userCenter']],[1,'userCenter3']])
Z(z[1])
Z(z[2])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z([[2,'=='],[[7],[3,'adEnable']],[1,1]])
Z([3,'userCenter'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_22_4);return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_4
}
__WXML_GLOBAL__.ops_set.$gwx_XC_22=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_22=true;
var x=['./pages/user_center/userCenter1/userCenter1.wxml','../../../pages/template/interval.wxml','./pages/user_center/userCenter2/userCenter2.wxml','./pages/user_center/userCenter3/userCenter3.wxml','./pages/user_center/user_center.wxml','../../pages/template/interval.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_22_1()
var xIP=e_[x[0]].i
_ai(xIP,x[1],e_,x[0],1,1)
var hEQ=_n('cu-nav')
_rz(z,hEQ,'bgColor',0,e,s,gg)
_(r,hEQ)
var oJP=_v()
_(r,oJP)
if(_oz(z,1,e,s,gg)){oJP.wxVkey=1
}
var fKP=_v()
_(r,fKP)
if(_oz(z,2,e,s,gg)){fKP.wxVkey=1
}
var cLP=_v()
_(r,cLP)
if(_oz(z,3,e,s,gg)){cLP.wxVkey=1
}
var hMP=_v()
_(r,hMP)
if(_oz(z,4,e,s,gg)){hMP.wxVkey=1
}
var oNP=_v()
_(r,oNP)
if(_oz(z,5,e,s,gg)){oNP.wxVkey=1
}
var cOP=_v()
_(r,cOP)
if(_oz(z,6,e,s,gg)){cOP.wxVkey=1
}
var oPP=_v()
_(r,oPP)
if(_oz(z,7,e,s,gg)){oPP.wxVkey=1
}
var lQP=_v()
_(r,lQP)
if(_oz(z,8,e,s,gg)){lQP.wxVkey=1
}
var aRP=_v()
_(r,aRP)
if(_oz(z,9,e,s,gg)){aRP.wxVkey=1
}
var tSP=_v()
_(r,tSP)
if(_oz(z,10,e,s,gg)){tSP.wxVkey=1
}
var eTP=_v()
_(r,eTP)
if(_oz(z,11,e,s,gg)){eTP.wxVkey=1
}
var bUP=_v()
_(r,bUP)
if(_oz(z,12,e,s,gg)){bUP.wxVkey=1
}
var oVP=_v()
_(r,oVP)
if(_oz(z,13,e,s,gg)){oVP.wxVkey=1
}
var xWP=_v()
_(r,xWP)
if(_oz(z,14,e,s,gg)){xWP.wxVkey=1
}
var oXP=_v()
_(r,oXP)
if(_oz(z,15,e,s,gg)){oXP.wxVkey=1
}
var fYP=_v()
_(r,fYP)
if(_oz(z,16,e,s,gg)){fYP.wxVkey=1
}
var cZP=_v()
_(r,cZP)
if(_oz(z,17,e,s,gg)){cZP.wxVkey=1
}
var h1P=_v()
_(r,h1P)
if(_oz(z,18,e,s,gg)){h1P.wxVkey=1
}
var o2P=_v()
_(r,o2P)
if(_oz(z,19,e,s,gg)){o2P.wxVkey=1
}
var c3P=_v()
_(r,c3P)
if(_oz(z,20,e,s,gg)){c3P.wxVkey=1
}
var o4P=_v()
_(r,o4P)
if(_oz(z,21,e,s,gg)){o4P.wxVkey=1
}
var l5P=_v()
_(r,l5P)
if(_oz(z,22,e,s,gg)){l5P.wxVkey=1
}
var a6P=_v()
_(r,a6P)
if(_oz(z,23,e,s,gg)){a6P.wxVkey=1
}
var t7P=_v()
_(r,t7P)
if(_oz(z,24,e,s,gg)){t7P.wxVkey=1
}
var e8P=_v()
_(r,e8P)
if(_oz(z,25,e,s,gg)){e8P.wxVkey=1
}
var b9P=_v()
_(r,b9P)
if(_oz(z,26,e,s,gg)){b9P.wxVkey=1
}
var o0P=_v()
_(r,o0P)
if(_oz(z,27,e,s,gg)){o0P.wxVkey=1
}
var xAQ=_v()
_(r,xAQ)
if(_oz(z,28,e,s,gg)){xAQ.wxVkey=1
}
var oBQ=_v()
_(r,oBQ)
if(_oz(z,29,e,s,gg)){oBQ.wxVkey=1
}
var fCQ=_v()
_(r,fCQ)
if(_oz(z,30,e,s,gg)){fCQ.wxVkey=1
}
var cDQ=_v()
_(r,cDQ)
if(_oz(z,31,e,s,gg)){cDQ.wxVkey=1
}
var oFQ=_v()
_(r,oFQ)
var cGQ=_oz(z,33,e,s,gg)
var oHQ=_gd(x[0],cGQ,e_,d_)
if(oHQ){
var lIQ=_1z(z,32,e,s,gg) || {}
var cur_globalf=gg.f
oFQ.wxXCkey=3
oHQ(lIQ,lIQ,oFQ,gg)
gg.f=cur_globalf
}
else _w(cGQ,x[0],1,15689)
oJP.wxXCkey=1
fKP.wxXCkey=1
cLP.wxXCkey=1
hMP.wxXCkey=1
oNP.wxXCkey=1
cOP.wxXCkey=1
oPP.wxXCkey=1
lQP.wxXCkey=1
aRP.wxXCkey=1
tSP.wxXCkey=1
eTP.wxXCkey=1
bUP.wxXCkey=1
oVP.wxXCkey=1
xWP.wxXCkey=1
oXP.wxXCkey=1
fYP.wxXCkey=1
cZP.wxXCkey=1
h1P.wxXCkey=1
o2P.wxXCkey=1
c3P.wxXCkey=1
o4P.wxXCkey=1
l5P.wxXCkey=1
a6P.wxXCkey=1
t7P.wxXCkey=1
e8P.wxXCkey=1
b9P.wxXCkey=1
o0P.wxXCkey=1
xAQ.wxXCkey=1
oBQ.wxXCkey=1
fCQ.wxXCkey=1
cDQ.wxXCkey=1
xIP.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[2]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_XC_22_2()
var tKQ=e_[x[2]].i
_ai(tKQ,x[1],e_,x[2],1,1)
var bMQ=_n('cu-nav')
_rz(z,bMQ,'bgColor',0,e,s,gg)
_(r,bMQ)
var eLQ=_v()
_(r,eLQ)
if(_oz(z,1,e,s,gg)){eLQ.wxVkey=1
}
var oNQ=_n('view')
_rz(z,oNQ,'class',2,e,s,gg)
var xOQ=_v()
_(oNQ,xOQ)
if(_oz(z,3,e,s,gg)){xOQ.wxVkey=1
}
else if(_oz(z,4,e,s,gg)){xOQ.wxVkey=2
}
else if(_oz(z,5,e,s,gg)){xOQ.wxVkey=3
var oPQ=_n('view')
_rz(z,oPQ,'class',6,e,s,gg)
var fQQ=_v()
_(oPQ,fQQ)
if(_oz(z,7,e,s,gg)){fQQ.wxVkey=1
}
var cRQ=_v()
_(oPQ,cRQ)
if(_oz(z,8,e,s,gg)){cRQ.wxVkey=1
}
fQQ.wxXCkey=1
cRQ.wxXCkey=1
_(xOQ,oPQ)
}
xOQ.wxXCkey=1
_(r,oNQ)
var hSQ=_n('view')
_rz(z,hSQ,'class',9,e,s,gg)
var oTQ=_v()
_(hSQ,oTQ)
if(_oz(z,10,e,s,gg)){oTQ.wxVkey=1
}
var cUQ=_v()
_(hSQ,cUQ)
if(_oz(z,11,e,s,gg)){cUQ.wxVkey=1
}
var oVQ=_v()
_(hSQ,oVQ)
if(_oz(z,12,e,s,gg)){oVQ.wxVkey=1
}
var lWQ=_v()
_(hSQ,lWQ)
if(_oz(z,13,e,s,gg)){lWQ.wxVkey=1
}
var aXQ=_v()
_(hSQ,aXQ)
if(_oz(z,14,e,s,gg)){aXQ.wxVkey=1
}
var tYQ=_v()
_(hSQ,tYQ)
if(_oz(z,15,e,s,gg)){tYQ.wxVkey=1
}
var eZQ=_v()
_(hSQ,eZQ)
if(_oz(z,16,e,s,gg)){eZQ.wxVkey=1
}
var b1Q=_v()
_(hSQ,b1Q)
if(_oz(z,17,e,s,gg)){b1Q.wxVkey=1
}
var o2Q=_v()
_(hSQ,o2Q)
if(_oz(z,18,e,s,gg)){o2Q.wxVkey=1
}
var x3Q=_v()
_(hSQ,x3Q)
if(_oz(z,19,e,s,gg)){x3Q.wxVkey=1
}
var o4Q=_v()
_(hSQ,o4Q)
if(_oz(z,20,e,s,gg)){o4Q.wxVkey=1
}
var f5Q=_v()
_(hSQ,f5Q)
if(_oz(z,21,e,s,gg)){f5Q.wxVkey=1
}
var c6Q=_v()
_(hSQ,c6Q)
if(_oz(z,22,e,s,gg)){c6Q.wxVkey=1
}
var h7Q=_v()
_(hSQ,h7Q)
if(_oz(z,23,e,s,gg)){h7Q.wxVkey=1
}
var o8Q=_v()
_(hSQ,o8Q)
if(_oz(z,24,e,s,gg)){o8Q.wxVkey=1
}
var c9Q=_v()
_(hSQ,c9Q)
if(_oz(z,25,e,s,gg)){c9Q.wxVkey=1
}
var o0Q=_v()
_(hSQ,o0Q)
if(_oz(z,26,e,s,gg)){o0Q.wxVkey=1
}
var lAR=_v()
_(hSQ,lAR)
if(_oz(z,27,e,s,gg)){lAR.wxVkey=1
}
var aBR=_v()
_(hSQ,aBR)
if(_oz(z,28,e,s,gg)){aBR.wxVkey=1
}
oTQ.wxXCkey=1
cUQ.wxXCkey=1
oVQ.wxXCkey=1
lWQ.wxXCkey=1
aXQ.wxXCkey=1
tYQ.wxXCkey=1
eZQ.wxXCkey=1
b1Q.wxXCkey=1
o2Q.wxXCkey=1
x3Q.wxXCkey=1
o4Q.wxXCkey=1
f5Q.wxXCkey=1
c6Q.wxXCkey=1
h7Q.wxXCkey=1
o8Q.wxXCkey=1
c9Q.wxXCkey=1
o0Q.wxXCkey=1
lAR.wxXCkey=1
aBR.wxXCkey=1
_(r,hSQ)
var tCR=_v()
_(r,tCR)
var eDR=_oz(z,30,e,s,gg)
var bER=_gd(x[2],eDR,e_,d_)
if(bER){
var oFR=_1z(z,29,e,s,gg) || {}
var cur_globalf=gg.f
tCR.wxXCkey=3
bER(oFR,oFR,tCR,gg)
gg.f=cur_globalf
}
else _w(eDR,x[2],3,6465)
eLQ.wxXCkey=1
tKQ.pop()
return r
}
e_[x[2]]={f:m1,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[3]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_XC_22_3()
var oHR=e_[x[3]].i
_ai(oHR,x[1],e_,x[3],1,1)
var cJR=_n('cu-nav')
_rz(z,cJR,'hideBackGround',0,e,s,gg)
_(r,cJR)
var fIR=_v()
_(r,fIR)
if(_oz(z,1,e,s,gg)){fIR.wxVkey=1
}
var hKR=_n('view')
_rz(z,hKR,'class',2,e,s,gg)
var oLR=_v()
_(hKR,oLR)
if(_oz(z,3,e,s,gg)){oLR.wxVkey=1
}
var cMR=_v()
_(hKR,cMR)
if(_oz(z,4,e,s,gg)){cMR.wxVkey=1
}
var oNR=_v()
_(hKR,oNR)
if(_oz(z,5,e,s,gg)){oNR.wxVkey=1
}
var lOR=_v()
_(hKR,lOR)
if(_oz(z,6,e,s,gg)){lOR.wxVkey=1
}
var aPR=_v()
_(hKR,aPR)
if(_oz(z,7,e,s,gg)){aPR.wxVkey=1
}
var tQR=_v()
_(hKR,tQR)
if(_oz(z,8,e,s,gg)){tQR.wxVkey=1
}
var eRR=_v()
_(hKR,eRR)
if(_oz(z,9,e,s,gg)){eRR.wxVkey=1
}
var bSR=_v()
_(hKR,bSR)
if(_oz(z,10,e,s,gg)){bSR.wxVkey=1
}
var oTR=_v()
_(hKR,oTR)
if(_oz(z,11,e,s,gg)){oTR.wxVkey=1
}
var xUR=_v()
_(hKR,xUR)
if(_oz(z,12,e,s,gg)){xUR.wxVkey=1
}
var oVR=_v()
_(hKR,oVR)
if(_oz(z,13,e,s,gg)){oVR.wxVkey=1
}
var fWR=_v()
_(hKR,fWR)
if(_oz(z,14,e,s,gg)){fWR.wxVkey=1
}
var cXR=_v()
_(hKR,cXR)
if(_oz(z,15,e,s,gg)){cXR.wxVkey=1
}
var hYR=_v()
_(hKR,hYR)
if(_oz(z,16,e,s,gg)){hYR.wxVkey=1
}
var oZR=_v()
_(hKR,oZR)
if(_oz(z,17,e,s,gg)){oZR.wxVkey=1
}
var c1R=_v()
_(hKR,c1R)
if(_oz(z,18,e,s,gg)){c1R.wxVkey=1
}
var o2R=_v()
_(hKR,o2R)
if(_oz(z,19,e,s,gg)){o2R.wxVkey=1
}
oLR.wxXCkey=1
cMR.wxXCkey=1
oNR.wxXCkey=1
lOR.wxXCkey=1
aPR.wxXCkey=1
tQR.wxXCkey=1
eRR.wxXCkey=1
bSR.wxXCkey=1
oTR.wxXCkey=1
xUR.wxXCkey=1
oVR.wxXCkey=1
fWR.wxXCkey=1
cXR.wxXCkey=1
hYR.wxXCkey=1
oZR.wxXCkey=1
c1R.wxXCkey=1
o2R.wxXCkey=1
_(r,hKR)
fIR.wxXCkey=1
oHR.pop()
return r
}
e_[x[3]]={f:m2,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[4]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_XC_22_4()
var a4R=e_[x[4]].i
_ai(a4R,x[5],e_,x[4],1,1)
var t5R=_v()
_(r,t5R)
if(_oz(z,0,e,s,gg)){t5R.wxVkey=1
var b7R=_mz(z,'userCenter1-component',['finance',1,'isChecker',1,'monRule',2,'parameter',3,'tel',4,'userInfo',5],[],e,s,gg)
_(t5R,b7R)
}
else if(_oz(z,7,e,s,gg)){t5R.wxVkey=2
var o8R=_mz(z,'userCenter2-component',['bind:refreshMember',8,'finance',1,'isChecker',2,'memberObj',3,'monRule',4,'parameter',5,'tel',6,'userInfo',7],[],e,s,gg)
_(t5R,o8R)
}
else if(_oz(z,16,e,s,gg)){t5R.wxVkey=3
var x9R=_mz(z,'userCenter3-component',['finance',17,'isChecker',1,'monRule',2,'parameter',3,'tel',4,'userInfo',5],[],e,s,gg)
_(t5R,x9R)
}
var e6R=_v()
_(r,e6R)
if(_oz(z,23,e,s,gg)){e6R.wxVkey=1
}
var o0R=_n('index-float-btn')
_rz(z,o0R,'pageName',24,e,s,gg)
_(r,o0R)
t5R.wxXCkey=1
t5R.wxXCkey=3
t5R.wxXCkey=3
t5R.wxXCkey=3
e6R.wxXCkey=1
a4R.pop()
return r
}
e_[x[4]]={f:m3,j:[],i:[],ti:[x[5]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_22";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_22();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user_center/userCenter1/userCenter1.wxml'] = [$gwx_XC_22, './pages/user_center/userCenter1/userCenter1.wxml'];else __wxAppCode__['pages/user_center/userCenter1/userCenter1.wxml'] = $gwx_XC_22( './pages/user_center/userCenter1/userCenter1.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user_center/userCenter2/userCenter2.wxml'] = [$gwx_XC_22, './pages/user_center/userCenter2/userCenter2.wxml'];else __wxAppCode__['pages/user_center/userCenter2/userCenter2.wxml'] = $gwx_XC_22( './pages/user_center/userCenter2/userCenter2.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user_center/userCenter3/userCenter3.wxml'] = [$gwx_XC_22, './pages/user_center/userCenter3/userCenter3.wxml'];else __wxAppCode__['pages/user_center/userCenter3/userCenter3.wxml'] = $gwx_XC_22( './pages/user_center/userCenter3/userCenter3.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user_center/user_center.wxml'] = [$gwx_XC_22, './pages/user_center/user_center.wxml'];else __wxAppCode__['pages/user_center/user_center.wxml'] = $gwx_XC_22( './pages/user_center/user_center.wxml' );
	;__wxRoute = "pages/user_center/userCenter1/userCenter1";__wxRouteBegin = true;__wxAppCurrentFile__="pages/user_center/userCenter1/userCenter1.js";define("pages/user_center/userCenter1/userCenter1.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../@babel/runtime/helpers/Arrayincludes");var e=require("../../../@babel/runtime/helpers/objectSpread2"),a=require("../../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../../@babel/runtime/helpers/asyncToGenerator"),o=getApp(),n=require("../../../3BE296B59105A88C5D84FEB2CFF3FB65.js"),r=n.getUserProfilePro,c=n.getUserInfoStorage,i=n.getTelStorage,s=n.updateXcxUserInfo,l=(n.getServerUserInfo,require("../../../C6AC61C49105A88CA0CA09C31864FB65.js").isSupportFun);Component({properties:{parameter:{type:Object,value:{}},tel:{type:null,value:""},userInfo:{type:Object,value:{}},isChecker:{value:0},finance:{value:0},isHideGuideLogin:{type:null,value:!1},monRule:{value:0}},data:{primary:o.globalData.corpXcx.primary,CustomBar:o.globalData.systemInfo.CustomBar,supportTel:o.globalData.corpXcx.supportTel,customerWx:o.globalData.corpXcx.customerWx,canRecharge:o.globalData.corpXcx.canRecharge,canInvoice:o.globalData.corpXcx.canInvoice,partner_enable:o.globalData.corpXcx.partner_enable,canMember:o.globalData.corpXcx.canMember,canInputNicknameAvatar:!1,canIUseGetUserProfile:!1,canMonthCard:o.globalData.corpXcx.canMonthCard,monthCardName:"限时限次卡",canCoupon:1,isInsureOrder:o.globalData.corpXcx.isInsureOrder,corpName:"",showEmergencyContact:o.globalData.corpXcx.canPassengerUrgent,customerWxQrcodeUrl:"",customerWxQrcodeName:"",showPersonalInformation:!1,showServiceAgreement:!1,partnerSubTitleName:"月入5000元",showCustomerTelPageBtn:!1,customerTelSubTitleName:"",showItemForGybs:!1,showWeChatOnLineCustomer:!1,weChatOnLineCustomerSubTitleName:"",showSobotOnLineCustomer:!1,showWeWorkOnLineCustomer:!1,showStaticOnlineCustomerList:!1,isNeedLicense:!1,showReturnChangeRules:!1,partnerTitleName:o.globalData.corpXcx.partnerTitleName||"分享赚钱",supportTelName:o.globalData.corpXcx.supportTelName||"投诉咨询"},methods:{getUserProfileFun:function(){var e=this;return t(a().mark((function t(){var o,n;return a().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=e,a.next=3,r();case 3:n=a.sent,o.setData({userInfo:n});case 5:case"end":return a.stop()}}),t)})))()},bindGetUserInfo:function(e){var a=this;console.log(e,e.detail.userInfo),a.getUserInfo((function(){var t={avatarUrl:e.detail.userInfo.avatarUrl,nickName:e.detail.userInfo.nickName,serverHaveNickName:!0,serverHaveAvatar:!0};o.globalData.userInfo=t,a.setData({userInfo:t})}))},getUserInfo:function(a){var t=this;wx.getSetting({success:function(n){if(n.authSetting["scope.userInfo"])wx.getUserInfo({withCredentials:!0,lang:"zh_CN",success:function(e){console.log("旧版",e),"getUserInfo:ok"==e.errMsg&&s(e),"function"==typeof a&&a()}});else{var r=e({},o.config.defaultUserInfo);o.globalData.userInfo=r,t.setData({userInfo:r})}}})},onPullDownRefresh:function(){wx.stopPullDownRefresh()},handleMakePhoneCall:function(e){o.util.makePhoneCallArray(e.currentTarget.dataset.tel,e.currentTarget.dataset.name)},goCustomerTelPage:function(){wx.navigateTo({url:"/package/staticCustomerTel/pages/staticCustomerTel/staticCustomerTel"})},goStaticOnlineCustomerList:function(){wx.navigateTo({url:"/package/staticOnlineCustomerList/pages/staticOnlineCustomerList/staticOnlineCustomerList"})},onlineWeChatCustomer:function(e){console.log("小程序客服",e),console.log(e.detail.path),console.log(e.detail.query)},sobotOnlineCustomer:function(e){console.log("智齿客服",e)},onlineCustomer:function(){if(l("2.19.0")){var e="",a="";"wx968a0caf32975b3c"==o.globalData.corp.appid?(e="https://work.weixin.qq.com/kfid/kfcdefb156ab5258bba",a="ww0dd73e53aced3e6e"):"wxaa948175393002a3"==o.globalData.corp.appid?(e="https://work.weixin.qq.com/kfid/kfc00cc1c7dd2112d9d",a="ww7aae4057c0a086b9"):"wx8ada2ad2eb058c4d"==o.globalData.corp.appid?(e="https://work.weixin.qq.com/kfid/kfc3b16381541634729",a="ww644b3c0b715b9cd6"):"wx940f03af3de8061e"==o.globalData.corp.appid?(e="https://work.weixin.qq.com/kfid/kfcaaa6872112f89b26",a="ww67b53f3635fb6442"):"wx471b81bfd5158d1b"==o.globalData.corp.appid?(e="https://work.weixin.qq.com/kfid/kfcb2ad7ffd4b44a329",a="wwc28fd496e1192c1a"):"wx574389d70351185a"==o.globalData.corp.appid?(e="https://work.weixin.qq.com/kfid/kfcc6c6fae2a4ac7382",a="wwb27f5cc145fd01ee"):"wx3e2205baec54e365"==o.globalData.corp.appid?(e="https://work.weixin.qq.com/kfid/kfceafb0d6303c3ff3e",a="wwc8b3983914b8d2cf"):"wx940f03af3de8061e"==o.globalData.corp.appid&&(e="https://work.weixin.qq.com/kfid/kfcaaa6872112f89b26",a="ww67b53f3635fb6442"),wx.openCustomerServiceChat({extInfo:{url:e},corpId:a,success:function(e){console.log("res",e)},fail:function(e){console.log("fail",e)}})}else o.util.showMsg("当前微信版本太低，请升级微信后使用")},copyCustomerWx:function(){var e=this;wx.setClipboardData({data:e.data.customerWx,success:function(a){o.util.showMsg("已复制微信号："+e.data.customerWx)},fail:function(a){o.util.showMsg("授权失败，请手动选择并复制。",a),e.setData({modalName:"copyTextModal"})}})},showCustomerWxQrcodeModal:function(){this.setData({modalName:"customerWxQrcodeModal"})},intervalImageLoad:function(e){var a=e.detail.width/e.detail.height,t=Math.round(620/a);this.setData({imageHeight:t,loadingImage:!1})},viewIntervalImage:function(e){var a=[this.data.customerWxQrcodeUrl];wx.previewImage({urls:a})},_hideModal:function(){this.setData({modalName:null})},goto_my_account:function(){wx.navigateTo({url:"/package/user_center/pages/my_account/my_account"})},gotoMyAccountExport:function(){wx.navigateTo({url:"/package/user_center/pages/myAccountInfoExport/myAccountInfoExport"})},gotoOrderListBtn:function(e){wx.navigateTo({url:"/package/user_center/pages/orderList/orderList?key="+e.currentTarget.dataset.key})},gotoMpOrderListBtn:function(){wx.navigateTo({url:"/pages/webview/webview?web_url=https%3A%2F%2Fjgarden.com.cn%2Fgdzlss%2Fwechat%2Fjump.do%3Furl=https%3A%2F%2Fjgarden.com.cn%2Fgdzlss%2Fwechat%2FmyOrder.do"})},goto_coupon_list:function(){this.checkTel("/package/user_center/pages/coupon_list/coupon_list?hideSelect=true",1,0)},gotoCheckerMonRuleList:function(e){wx.navigateTo({url:"/package/checkerMonRule/pages/checkerMonRuleList/checkerMonRuleList"})},goto_checkerCheckInterval:function(e){wx.navigateTo({url:"/package/checkerCheckInterval/pages/checkerCheckInterval/checkerCheckInterval?isChecker=1"})},goto_checkerFillOrder:function(e){wx.navigateTo({url:"/package/checkerFillOrder/pages/checkerFillOrder/checkerFillOrder"})},goto_point_exchange:function(){this.checkTel("/package/user_center_preload/pages/point_exchange_list/point_exchange_list",1,1)},goto_my_passenger:function(){wx.navigateTo({url:"/package/userPassenger/pages/passengerList/passengerList"})},goto_my_insureOrder:function(){wx.navigateTo({url:"/package/user_center/pages/insureOrderList/insureOrderList"})},geto_feedback:function(){wx.navigateTo({url:"/package/user_center/pages/feedback/feedback"})},getoInvoice:function(){wx.navigateTo({url:"/package/user_center_preload/pages/invoiceIndex/invoiceIndex"})},goto_partner:function(){this.checkTel("/package/partner/pages/partner_index/partner_index",1,1)},goto_recharge:function(){this.checkTel("/package/user_center/pages/recharge/recharge",1,0)},gotoMemberOrder:function(){this.checkTel("/package/userMember/pages/memberOrder/memberOrder",1,0)},goto_month_card:function(){this.checkTel("/package/mon_card/pages/my_mon_card/my_mon_card",1,0)},getoServiceAgreement:function(){["hzzhcx","bycx","mqcx","wwcaky","yantan","hzcx"].includes(o.globalData.corp.ID)?wx.navigateTo({url:"/package/staticPrivacyPolicy/pages/staticPrivacyPolicy/staticPrivacyPolicy"}):wx.openPrivacyContract?wx.openPrivacyContract({success:function(e){console.log("openPrivacyContract success")},fail:function(e){console.error("openPrivacyContract fail",e)}}):o.util.showMsg("当前版本不支持此功能")},gotoEmergencyContact:function(){wx.navigateTo({url:"/package/userEmergencyContact/pages/emergencyContactList/emergencyContactList"})},goAuthTelAndBack:function(){this.isBackRefreshMember=!0,wx.navigateTo({url:"/package/pt_login/pages/pt_login2/pt_login2?navigate_back=1&isNeedTel=1&isNeedAvatar=0"})},goMemberOrder:function(){this.isBackRefreshMember=!0,wx.navigateTo({url:"/package/userMember/pages/memberOrder/memberOrder",fail:function(e){console.log("err",e)}})},gotoPersonalInformationList:function(){wx.navigateTo({url:"/package/staticPersonalInformationList/pages/staticPersonalInformationList/staticPersonalInformationList"})},gotoPersonalInformationShareList:function(){wx.navigateTo({url:"/package/staticPersonalInformationList/pages/staticPersonalInformationShareList/staticPersonalInformationShareList"})},getoTicketNotes:function(){"gybs"==o.globalData.corp.ID||"xxbs"==o.globalData.corp.ID?wx.navigateTo({url:"/package/staticUseProtocol/pages/staticTicketNotes/staticTicketNotes",fail:function(e){console.log("err",e)}}):this.getoServiceAgreement()},getoUseProtocol:function(){"gybs"==o.globalData.corp.ID||"xxbs"==o.globalData.corp.ID?wx.navigateTo({url:"/package/staticUseProtocol/pages/staticUseProtocol/staticUseProtocol",fail:function(e){console.log("err",e)}}):this.getoServiceAgreement()},goLicensePage:function(){wx.navigateTo({url:"/package/fillorderLicense/pages/licenseIndex/licenseIndex?licenseTitle=用户协议"})},getoReturnChangeRules:function(){wx.navigateTo({url:"/package/staticReturnChangeRules/pages/staticReturnChangeRules/staticReturnChangeRules",fail:function(e){console.log("getoReturnChangeRules err",e)}})},goto_hk_mo_list:function(){wx.navigateTo({url:"/package/kwoonchungOrderList/pages/kwoonchungOrderList/kwoonchungOrderList",fail:function(e){console.log("err",e)}})},gotoLineFinancialStatistics:function(){wx.navigateTo({url:"/package/checkerLineFinancialStatistics/pages/lineFinancialByMonth/lineFinancialByMonth",fail:function(e){console.log("err",e)}})},goto_month_fund_list:function(){wx.navigateTo({url:"/package/user_center/pages/monthFundList/monthFundList",fail:function(e){console.log("err",e)}})},checkTel:function(e,a,t){var o=i(),n=c();console.log(o);var r=e;(a&&!o||t&&!n.serverHaveAvatar)&&(r="/package/pt_login/pages/pt_login2/pt_login2?returnUrl="+(e=encodeURIComponent(e))+"&isNeedTel="+a+"&isNeedAvatar="+t),wx.navigateTo({url:r})}},lifetimes:{attached:function(){},ready:function(){this.setData(e({},this.data.parameter))},detached:function(){}}});
},{isPage:false,isComponent:true,currentFile:'pages/user_center/userCenter1/userCenter1.js'});require("pages/user_center/userCenter1/userCenter1.js");;__wxRoute = "pages/user_center/userCenter2/userCenter2";__wxRouteBegin = true;__wxAppCurrentFile__="pages/user_center/userCenter2/userCenter2.js";define("pages/user_center/userCenter2/userCenter2.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../@babel/runtime/helpers/Arrayincludes");var e=require("../../../@babel/runtime/helpers/objectSpread2"),a=require("../../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../../@babel/runtime/helpers/asyncToGenerator"),o=getApp(),r=require("../../../3BE296B59105A88C5D84FEB2CFF3FB65.js"),n=r.getUserProfilePro,c=r.getUserInfoStorage,i=r.getTelStorage,s=r.updateXcxUserInfo,l=(r.getServerUserInfo,require("../../../C6AC61C49105A88CA0CA09C31864FB65.js").isSupportFun);Component({properties:{parameter:{type:Object,value:{}},tel:{type:null,value:""},userInfo:{type:Object,value:{}},memberObj:{type:Object,value:{}},isHideGuideLogin:{type:null,value:!1}},data:{primary:o.globalData.corpXcx.primary,CustomBar:o.globalData.systemInfo.CustomBar,supportTel:o.globalData.corpXcx.supportTel,customerWx:o.globalData.corpXcx.customerWx,canRecharge:o.globalData.corpXcx.canRecharge,canInvoice:o.globalData.corpXcx.canInvoice,partner_enable:o.globalData.corpXcx.partner_enable,canInputNicknameAvatar:!1,canIUseGetUserProfile:!1,canMonthCard:o.globalData.corpXcx.canMonthCard,canCoupon:1,isInsureOrder:o.globalData.corpXcx.isInsureOrder,corpName:"",showEmergencyContact:o.globalData.corpXcx.canPassengerUrgent,customerWxQrcodeUrl:"",customerWxQrcodeName:"",showPersonalInformation:!1,showServiceAgreement:!1,partnerSubTitleName:"月入5000元",showCustomerTelPageBtn:!1,customerTelSubTitleName:"",showItemForGybs:!1,partnerTitleName:o.globalData.corpXcx.partnerTitleName||"分享赚钱",supportTelName:o.globalData.corpXcx.supportTelName||"投诉咨询",webviewLinkUrl:""},methods:{getUserProfileFun:function(){var e=this;return t(a().mark((function t(){var o,r;return a().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=e,a.next=3,n();case 3:r=a.sent,o.setData({userInfo:r});case 5:case"end":return a.stop()}}),t)})))()},bindGetUserInfo:function(e){var a=this;console.log(e,e.detail.userInfo),a.getUserInfo((function(){var t={avatarUrl:e.detail.userInfo.avatarUrl,nickName:e.detail.userInfo.nickName,serverHaveNickName:!0,serverHaveAvatar:!0};o.globalData.userInfo=t,a.setData({userInfo:t})}))},getUserInfo:function(a){var t=this;wx.getSetting({success:function(r){if(r.authSetting["scope.userInfo"])wx.getUserInfo({withCredentials:!0,lang:"zh_CN",success:function(e){console.log("旧版",e),"getUserInfo:ok"==e.errMsg&&s(e),"function"==typeof a&&a()}});else{var n=e({},o.config.defaultUserInfo);o.globalData.userInfo=n,t.setData({userInfo:n})}}})},onPullDownRefresh:function(){wx.stopPullDownRefresh()},_makePhoneCall:function(){o.util.makePhoneCall(this.data.supportTel)},goCustomerTelPage:function(){wx.navigateTo({url:"/package/staticCustomerTel/pages/staticCustomerTel/staticCustomerTel"})},onlineCustomer:function(){if(l("2.19.0")){var e="",a="";"wx968a0caf32975b3c"==o.globalData.corp.appid?(e="https://work.weixin.qq.com/kfid/kfcdefb156ab5258bba",a="ww0dd73e53aced3e6e"):"wxaa948175393002a3"==o.globalData.corp.appid?(e="https://work.weixin.qq.com/kfid/kfc00cc1c7dd2112d9d",a="ww7aae4057c0a086b9"):"wx8ada2ad2eb058c4d"==o.globalData.corp.appid?(e="https://work.weixin.qq.com/kfid/kfc3b16381541634729",a="ww644b3c0b715b9cd6"):"wx940f03af3de8061e"==o.globalData.corp.appid?(e="https://work.weixin.qq.com/kfid/kfcaaa6872112f89b26",a="ww67b53f3635fb6442"):"wx471b81bfd5158d1b"==o.globalData.corp.appid?(e="https://work.weixin.qq.com/kfid/kfcb2ad7ffd4b44a329",a="wwc28fd496e1192c1a"):"wx574389d70351185a"==o.globalData.corp.appid?(e="https://work.weixin.qq.com/kfid/kfcc6c6fae2a4ac7382",a="wwb27f5cc145fd01ee"):"wx3e2205baec54e365"==o.globalData.corp.appid?(e="https://work.weixin.qq.com/kfid/kfceafb0d6303c3ff3e",a="wwc8b3983914b8d2cf"):"wx940f03af3de8061e"==o.globalData.corp.appid&&(e="https://work.weixin.qq.com/kfid/kfcaaa6872112f89b26",a="ww67b53f3635fb6442"),wx.openCustomerServiceChat({extInfo:{url:e},corpId:a,success:function(e){console.log("res",e)},fail:function(e){console.log("fail",e)}})}else o.util.showMsg("当前微信版本太低，请升级微信后使用")},copyCustomerWx:function(){var e=this;wx.setClipboardData({data:e.data.customerWx,success:function(a){o.util.showMsg("已复制微信号："+e.data.customerWx)},fail:function(a){o.util.showMsg("授权失败，请手动选择并复制。",a),e.setData({modalName:"copyTextModal"})}})},showCustomerWxQrcodeModal:function(){this.setData({modalName:"customerWxQrcodeModal"})},intervalImageLoad:function(e){var a=e.detail.width/e.detail.height,t=Math.round(620/a);this.setData({imageHeight:t,loadingImage:!1})},viewIntervalImage:function(e){var a=[this.data.customerWxQrcodeUrl];wx.previewImage({urls:a})},_hideModal:function(){this.setData({modalName:null})},goto_my_account:function(){wx.navigateTo({url:"/package/user_center/pages/my_account/my_account"})},gotoMyAccountExport:function(){wx.navigateTo({url:"/package/user_center/pages/myAccountInfoExport/myAccountInfoExport"})},gotoOrderListBtn:function(e){wx.navigateTo({url:"/package/user_center/pages/orderList/orderList?key="+e.currentTarget.dataset.key})},goto_coupon_list:function(){this.checkTel("/package/user_center/pages/coupon_list/coupon_list?hideSelect=true",1,0)},goto_point_exchange:function(){this.checkTel("/package/user_center_preload/pages/point_exchange_list/point_exchange_list",1,1)},goto_my_passenger:function(){wx.navigateTo({url:"/package/userPassenger/pages/passengerList/passengerList"})},goto_my_insureOrder:function(){wx.navigateTo({url:"/package/user_center/pages/insureOrderList/insureOrderList"})},geto_feedback:function(){wx.navigateTo({url:"/package/user_center/pages/feedback/feedback"})},getoInvoice:function(){wx.navigateTo({url:"/package/user_center_preload/pages/invoiceIndex/invoiceIndex"})},goto_partner:function(){this.checkTel("/package/partner/pages/partner_index/partner_index",1,1)},goto_recharge:function(){this.checkTel("/package/user_center/pages/recharge/recharge",1,0)},goto_month_card:function(){this.checkTel("/package/mon_card/pages/my_mon_card/my_mon_card",1,0)},getoServiceAgreement:function(){["hzzhcx","bycx","mqcx","wwcaky","yantan","hzcx"].includes(o.globalData.corp.ID)?wx.navigateTo({url:"/package/staticPrivacyPolicy/pages/staticPrivacyPolicy/staticPrivacyPolicy"}):wx.openPrivacyContract?wx.openPrivacyContract({success:function(e){console.log("openPrivacyContract success")},fail:function(e){console.error("openPrivacyContract fail",e)}}):o.util.showMsg("当前版本不支持此功能")},goWebView:function(){var e=encodeURIComponent(this.data.webviewLinkUrl);wx.navigateTo({url:"/pages/webview/webview?web_url="+e})},gotoEmergencyContact:function(){wx.navigateTo({url:"/package/userEmergencyContact/pages/emergencyContactList/emergencyContactList"})},goAuthTelAndBack:function(){this.triggerEvent("refreshMember",{isBackRefreshMember:!0}),wx.navigateTo({url:"/package/pt_login/pages/pt_login2/pt_login2?navigate_back=1&isNeedTel=1&isNeedAvatar=0"})},goMemberOrder:function(){this.triggerEvent("refreshMember",{isBackRefreshMember:!0}),wx.navigateTo({url:"/package/userMember/pages/memberOrder/memberOrder",fail:function(e){console.log("err",e)}})},gotoPersonalInformationList:function(){wx.navigateTo({url:"/package/staticPersonalInformationList/pages/staticPersonalInformationList/staticPersonalInformationList"})},gotoPersonalInformationShareList:function(){wx.navigateTo({url:"/package/staticPersonalInformationList/pages/staticPersonalInformationShareList/staticPersonalInformationShareList"})},getoTicketNotes:function(){"gybs"==o.globalData.corp.ID||"xxbs"==o.globalData.corp.ID?wx.navigateTo({url:"/package/staticUseProtocol/pages/staticTicketNotes/staticTicketNotes",fail:function(e){console.log("err",e)}}):this.getoServiceAgreement()},getoUseProtocol:function(){"gybs"==o.globalData.corp.ID||"xxbs"==o.globalData.corp.ID?wx.navigateTo({url:"/package/staticUseProtocol/pages/staticUseProtocol/staticUseProtocol",fail:function(e){console.log("err",e)}}):this.getoServiceAgreement()},checkTel:function(e,a,t){var o=i(),r=c();console.log(o);var n=e;(a&&!o||t&&!r.serverHaveAvatar)&&(n="/package/pt_login/pages/pt_login2/pt_login2?returnUrl="+(e=encodeURIComponent(e))+"&isNeedTel="+a+"&isNeedAvatar="+t),wx.navigateTo({url:n})},goto_hk_mo_list:function(){wx.navigateTo({url:"/package/kwoonchungOrderList/pages/kwoonchungOrderList/kwoonchungOrderList",fail:function(e){console.log("err",e)}})}},lifetimes:{attached:function(){},ready:function(){this.setData(e({},this.data.parameter))},detached:function(){}}});
},{isPage:false,isComponent:true,currentFile:'pages/user_center/userCenter2/userCenter2.js'});require("pages/user_center/userCenter2/userCenter2.js");;__wxRoute = "pages/user_center/userCenter3/userCenter3";__wxRouteBegin = true;__wxAppCurrentFile__="pages/user_center/userCenter3/userCenter3.js";define("pages/user_center/userCenter3/userCenter3.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../@babel/runtime/helpers/Arrayincludes");var e=require("../../../@babel/runtime/helpers/objectSpread2"),a=require("../../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../../@babel/runtime/helpers/asyncToGenerator"),o=getApp(),n=require("../../../3BE296B59105A88C5D84FEB2CFF3FB65.js"),r=n.getUserProfilePro,c=n.getUserInfoStorage,i=n.getTelStorage,s=n.updateXcxUserInfo,l=(n.getServerUserInfo,require("../../../C6AC61C49105A88CA0CA09C31864FB65.js").isSupportFun);Component({properties:{parameter:{type:Object,value:{}},tel:{type:null,value:""},userInfo:{type:Object,value:{}},isChecker:{value:0},finance:{value:0},monRule:{value:0}},data:{primary:o.globalData.corpXcx.primary,CustomBar:o.globalData.systemInfo.CustomBar,supportTel:o.globalData.corpXcx.supportTel,customerWx:o.globalData.corpXcx.customerWx,canRecharge:o.globalData.corpXcx.canRecharge,canInvoice:o.globalData.corpXcx.canInvoice,partner_enable:o.globalData.corpXcx.partner_enable,canInputNicknameAvatar:!1,canIUseGetUserProfile:!1,canMonthCard:o.globalData.corpXcx.canMonthCard,canCoupon:1,isInsureOrder:o.globalData.corpXcx.isInsureOrder,corpName:"",partnerSubTitleName:"月入5000元",showCustomerTelPageBtn:!1,customerTelSubTitleName:"",showItemForGybs:!1,partnerTitleName:o.globalData.corpXcx.partnerTitleName||"分享赚钱",supportTelName:o.globalData.corpXcx.supportTelName||"投诉咨询",showStaticOnlineCustomerList:!1,isNeedLicense:!1,showReturnChangeRules:!1},methods:{getUserProfileFun:function(){var e=this;return t(a().mark((function t(){var o,n;return a().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=e,a.next=3,r();case 3:n=a.sent,o.setData({userInfo:n});case 5:case"end":return a.stop()}}),t)})))()},bindGetUserInfo:function(e){var a=this;console.log(e,e.detail.userInfo),a.getUserInfo((function(){var t={avatarUrl:e.detail.userInfo.avatarUrl,nickName:e.detail.userInfo.nickName,serverHaveNickName:!0,serverHaveAvatar:!0};o.globalData.userInfo=t,a.setData({userInfo:t})}))},getUserInfo:function(a){var t=this;wx.getSetting({success:function(n){if(n.authSetting["scope.userInfo"])wx.getUserInfo({withCredentials:!0,lang:"zh_CN",success:function(e){console.log("旧版",e),"getUserInfo:ok"==e.errMsg&&s(e),"function"==typeof a&&a()}});else{var r=e({},o.config.defaultUserInfo);o.globalData.userInfo=r,t.setData({userInfo:r})}}})},onPullDownRefresh:function(){wx.stopPullDownRefresh()},_makePhoneCall:function(){o.util.makePhoneCall(this.data.supportTel)},goCustomerTelPage:function(){wx.navigateTo({url:"/package/staticCustomerTel/pages/staticCustomerTel/staticCustomerTel"})},goStaticOnlineCustomerList:function(){wx.navigateTo({url:"/package/staticOnlineCustomerList/pages/staticOnlineCustomerList/staticOnlineCustomerList"})},onlineCustomer:function(){if(l("2.19.0")){var e="",a="";"wx968a0caf32975b3c"==o.globalData.corp.appid?(e="https://work.weixin.qq.com/kfid/kfcdefb156ab5258bba",a="ww0dd73e53aced3e6e"):"wxaa948175393002a3"==o.globalData.corp.appid?(e="https://work.weixin.qq.com/kfid/kfc00cc1c7dd2112d9d",a="ww7aae4057c0a086b9"):"wx8ada2ad2eb058c4d"==o.globalData.corp.appid?(e="https://work.weixin.qq.com/kfid/kfc3b16381541634729",a="ww644b3c0b715b9cd6"):"wx940f03af3de8061e"==o.globalData.corp.appid?(e="https://work.weixin.qq.com/kfid/kfcaaa6872112f89b26",a="ww67b53f3635fb6442"):"wx471b81bfd5158d1b"==o.globalData.corp.appid?(e="https://work.weixin.qq.com/kfid/kfcb2ad7ffd4b44a329",a="wwc28fd496e1192c1a"):"wx574389d70351185a"==o.globalData.corp.appid?(e="https://work.weixin.qq.com/kfid/kfcc6c6fae2a4ac7382",a="wwb27f5cc145fd01ee"):"wx3e2205baec54e365"==o.globalData.corp.appid?(e="https://work.weixin.qq.com/kfid/kfceafb0d6303c3ff3e",a="wwc8b3983914b8d2cf"):"wx940f03af3de8061e"==o.globalData.corp.appid&&(e="https://work.weixin.qq.com/kfid/kfcaaa6872112f89b26",a="ww67b53f3635fb6442"),wx.openCustomerServiceChat({extInfo:{url:e},corpId:a,success:function(e){console.log("res",e)},fail:function(e){console.log("fail",e)}})}else o.util.showMsg("当前微信版本太低，请升级微信后使用")},copyCustomerWx:function(){var e=this;wx.setClipboardData({data:e.data.customerWx,success:function(a){o.util.showMsg("已复制微信号："+e.data.customerWx)},fail:function(a){o.util.showMsg("授权失败，请手动选择并复制。",a),e.setData({modalName:"copyTextModal"})}})},_hideModal:function(){this.setData({modalName:null})},goto_my_account:function(){wx.navigateTo({url:"/package/user_center/pages/my_account/my_account"})},gotoMyAccountExport:function(){wx.navigateTo({url:"/package/user_center/pages/myAccountInfoExport/myAccountInfoExport"})},gotoOrderListBtn:function(e){wx.navigateTo({url:"/package/user_center/pages/orderList/orderList?key="+e.currentTarget.dataset.key})},goto_coupon_list:function(){this.checkTel("/package/user_center/pages/coupon_list/coupon_list?hideSelect=true&couponsType=优惠券",1,0)},goto_checkerCheckInterval:function(e){wx.navigateTo({url:"/package/checkerCheckInterval/pages/checkerCheckInterval/checkerCheckInterval?isChecker=1"})},goto_checkerFillOrder:function(e){wx.navigateTo({url:"/package/checkerFillOrder/pages/checkerFillOrder/checkerFillOrder"})},gotoLineFinancialStatistics:function(){wx.navigateTo({url:"/package/checkerLineFinancialStatistics/pages/lineFinancialByMonth/lineFinancialByMonth"})},goto_point_exchange:function(){this.checkTel("/package/user_center_preload/pages/point_exchange_list/point_exchange_list",1,1)},goto_my_passenger:function(){wx.navigateTo({url:"/package/userPassenger/pages/passengerList/passengerList"})},goto_my_insureOrder:function(){wx.navigateTo({url:"/package/user_center/pages/insureOrderList/insureOrderList"})},geto_feedback:function(){wx.navigateTo({url:"/package/user_center/pages/feedback/feedback"})},getoInvoice:function(){wx.navigateTo({url:"/package/user_center_preload/pages/invoiceIndex/invoiceIndex"})},goto_partner:function(){this.checkTel("/package/partner/pages/partner_index/partner_index",1,1)},goto_recharge:function(){this.checkTel("/package/user_center/pages/recharge/recharge",1,0)},goto_month_card:function(){this.checkTel("/package/mon_card/pages/my_mon_card/my_mon_card",1,0)},getoServiceAgreement:function(){["hzzhcx","bycx","mqcx","wwcaky","yantan","hzcx"].includes(o.globalData.corp.ID)?wx.navigateTo({url:"/package/staticPrivacyPolicy/pages/staticPrivacyPolicy/staticPrivacyPolicy"}):wx.openPrivacyContract?wx.openPrivacyContract({success:function(e){console.log("openPrivacyContract success")},fail:function(e){console.error("openPrivacyContract fail",e)}}):o.util.showMsg("当前版本不支持此功能")},gotoEmergencyContact:function(){wx.navigateTo({url:"/package/userEmergencyContact/pages/emergencyContactList/emergencyContactList"})},goAuthTelAndBack:function(){this.isBackRefreshMember=!0,wx.navigateTo({url:"/package/pt_login/pages/pt_login2/pt_login2?navigate_back=1&isNeedTel=1&isNeedAvatar=0"})},goMemberOrder:function(){this.isBackRefreshMember=!0,wx.navigateTo({url:"/package/userMember/pages/memberOrder/memberOrder",fail:function(e){console.log("err",e)}})},gotoPersonalInformationList:function(){wx.navigateTo({url:"/package/staticPersonalInformationList/pages/staticPersonalInformationList/staticPersonalInformationList"})},gotoPersonalInformationShareList:function(){wx.navigateTo({url:"/package/staticPersonalInformationList/pages/staticPersonalInformationShareList/staticPersonalInformationShareList"})},getoTicketNotes:function(){"gybs"==o.globalData.corp.ID||"xxbs"==o.globalData.corp.ID?wx.navigateTo({url:"/package/staticUseProtocol/pages/staticTicketNotes/staticTicketNotes",fail:function(e){console.log("err",e)}}):this.getoServiceAgreement()},goLicensePage:function(){wx.navigateTo({url:"/package/fillorderLicense/pages/licenseIndex/licenseIndex?licenseTitle=用户协议"})},getoReturnChangeRules:function(){wx.navigateTo({url:"/package/staticReturnChangeRules/pages/staticReturnChangeRules/staticReturnChangeRules",fail:function(e){console.log("getoReturnChangeRules err",e)}})},checkTel:function(e,a,t){var o=i(),n=c();console.log(o);var r=e;(a&&!o||t&&!n.serverHaveAvatar)&&(r="/package/pt_login/pages/pt_login2/pt_login2?returnUrl="+(e=encodeURIComponent(e))+"&isNeedTel="+a+"&isNeedAvatar="+t),wx.navigateTo({url:r})},log_out:function(){wx.showModal({title:"您确定退出登录吗？",content:"若需重新使用，可能需要您重新授权",success:function(e){e.confirm?wx.removeStorage({key:"pt_tel",success:function(e){console.log(e),wx.switchTab({url:"/pages/user_center/user_center",success:function(){o.util.showMsg("已退出登录")}})},fail:function(e){console.log(e),o.util.showMsg(e.errMsg)}}):e.cancel&&console.log("用户点击取消")}})},gotoHKMOList:function(){wx.navigateTo({url:"/package/kwoonchungOrderList/pages/kwoonchungOrderList/kwoonchungOrderList",fail:function(e){console.log("err",e)}})},goto_month_fund_list:function(){wx.navigateTo({url:"/package/user_center/pages/monthFundList/monthFundList",fail:function(e){console.log("err",e)}})}},lifetimes:{attached:function(){},ready:function(){this.setData(e({},this.data.parameter))},detached:function(){}}});
},{isPage:false,isComponent:true,currentFile:'pages/user_center/userCenter3/userCenter3.js'});require("pages/user_center/userCenter3/userCenter3.js");;__wxRoute = "pages/user_center/user_center";__wxRouteBegin = true;__wxAppCurrentFile__="pages/user_center/user_center.js";define("pages/user_center/user_center.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../@babel/runtime/helpers/Arrayincludes");var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),a=require("../../@babel/runtime/helpers/asyncToGenerator"),t=require("../../@babel/runtime/helpers/objectSpread2"),o=getApp(),r=require("../../3BE296B59105A88C5D84FEB2CFF3FB65.js"),n=r.getUserProfilePro,c=r.getUserInfoStorage,s=r.getTelStorage,i=r.updateXcxUserInfo,l=r.getServerUserInfo,u=require("../../C6AC61C49105A88CA0CA09C31864FB65.js").isSupportFun;Page({data:{parameter:{},userCenter:o.globalData.corp.userCenter||"userCenter1",primary:o.globalData.corpXcx.primary,supportTel:o.globalData.corpXcx.supportTel,customerWx:o.globalData.corpXcx.customerWx,customerWxQrcodeUrl:"",customerWxQrcodeName:"客服微信",version:"1.0",partnerTitleName:o.globalData.corpXcx.partnerTitleName||"分享赚钱",partnerSubTitleName:"月入5000元",supportTelName:o.globalData.corpXcx.supportTelName||"投诉咨询",userInfo:t({},o.config.defaultUserInfo),tel:"",canInputNicknameAvatar:!1,canIUseGetUserProfile:!1,canCoupon:1,partner_enable:o.globalData.corpXcx.partner_enable,adEnable:o.globalData.corpXcx.adEnable,canRecharge:o.globalData.corpXcx.canRecharge,canInvoice:o.globalData.corpXcx.canInvoice,canMonthCard:o.globalData.corpXcx.canMonthCard,monthCardName:"限时限次卡",isInsureOrder:o.globalData.corpXcx.isInsureOrder,showPersonalInformation:!1,showServiceAgreement:!1,canMember:o.globalData.corpXcx.canMember,showEmergencyContact:!1,showItemForGybs:!1,showCustomerTelPageBtn:!1,customerTelSubTitleName:"",showWeChatOnLineCustomer:!1,weChatOnLineCustomerSubTitleName:"",showSobotOnLineCustomer:!1,showWeWorkOnLineCustomer:!1,showStaticOnlineCustomerList:!1,isNeedLicense:!1,showReturnChangeRules:!1,weWorkOnLineCustomerSubTitleName:"",webviewLinkUrl:"",corpName:"",isFistShow:!0,modalName:null,memberObj:{isMember:!1,expire_date:"",isExpire:!1},loadingImage:!0,imageHeight:125,isChecker:0,finance:0,monRule:0,hasHKMOList:!1,hasMonthFund:!1,isHideGuideLogin:!1,showMpOrderList:!1},isBackRefreshMember:!1,getUserProfileFun:function(){var t=this;return a(e().mark((function a(){var o,r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t,e.next=3,n();case 3:r=e.sent,o.setData({userInfo:r});case 5:case"end":return e.stop()}}),a)})))()},bindGetUserInfo:function(e){var a=this;console.log(e,e.detail.userInfo),a.getUserInfo((function(){var t={avatarUrl:e.detail.userInfo.avatarUrl,nickName:e.detail.userInfo.nickName,serverHaveNickName:!0,serverHaveAvatar:!0};o.globalData.userInfo=t,a.setData({userInfo:t})}))},getUserInfo:function(e){var a=this;wx.getSetting({success:function(r){if(r.authSetting["scope.userInfo"])wx.getUserInfo({withCredentials:!0,lang:"zh_CN",success:function(a){console.log("旧版",a),"getUserInfo:ok"==a.errMsg&&i(a),"function"==typeof e&&e()}});else{var n=t({},o.config.defaultUserInfo);o.globalData.userInfo=n,a.setData({userInfo:n})}}})},onPullDownRefresh:function(){wx.stopPullDownRefresh()},handleMakePhoneCall:function(e){o.util.makePhoneCallArray(this.data.supportTel,this.data.supportTelName)},goCustomerTelPage:function(){wx.navigateTo({url:"/package/staticCustomerTel/pages/staticCustomerTel/staticCustomerTel"})},_adPhoneCall:function(){o.util.makePhoneCall(o.globalData.corpXcx.adTel)},goto_my_account:function(){wx.navigateTo({url:"/package/user_center/pages/my_account/my_account"})},gotoMyAccountExport:function(){wx.navigateTo({url:"/package/user_center/pages/myAccountInfoExport/myAccountInfoExport"})},gotoOrderListBtn:function(e){wx.navigateTo({url:"/package/user_center/pages/orderList/orderList?key="+e.currentTarget.dataset.key})},goto_coupon_list:function(){this.checkTel("/package/user_center/pages/coupon_list/coupon_list?hideSelect=true",1,0)},goto_point_exchange:function(){this.checkTel("/package/user_center_preload/pages/point_exchange_list/point_exchange_list",1,1)},goto_my_passenger:function(){wx.navigateTo({url:"/package/userPassenger/pages/passengerList/passengerList"})},goto_my_insureOrder:function(){wx.navigateTo({url:"/package/user_center/pages/insureOrderList/insureOrderList"})},geto_feedback:function(){wx.navigateTo({url:"/package/user_center/pages/feedback/feedback"})},getoInvoice:function(){wx.navigateTo({url:"/package/user_center_preload/pages/invoiceIndex/invoiceIndex"})},goto_partner:function(){this.checkTel("/package/partner/pages/partner_index/partner_index",1,1)},goto_recharge:function(){this.checkTel("/package/user_center/pages/recharge/recharge",1,0)},goto_month_card:function(){this.checkTel("/package/mon_card/pages/my_mon_card/my_mon_card",1,0)},getoServiceAgreement:function(){["hzzhcx","bycx","mqcx","wwcaky","yantan","hzcx"].includes(o.globalData.corp.ID)?wx.navigateTo({url:"/package/staticPrivacyPolicy/pages/staticPrivacyPolicy/staticPrivacyPolicy"}):wx.openPrivacyContract?wx.openPrivacyContract({success:function(e){console.log("openPrivacyContract success")},fail:function(e){console.error("openPrivacyContract fail",e)}}):o.util.showMsg("当前版本不支持此功能")},gotoEmergencyContact:function(){wx.navigateTo({url:"/package/userEmergencyContact/pages/emergencyContactList/emergencyContactList"})},goAuthTelAndBack:function(){this.isBackRefreshMember=!0,wx.navigateTo({url:"/package/pt_login/pages/pt_login2/pt_login2?navigate_back=1&isNeedTel=1&isNeedAvatar=0"})},goMemberOrder:function(){this.isBackRefreshMember=!0,wx.navigateTo({url:"/package/userMember/pages/memberOrder/memberOrder",fail:function(e){console.log("err",e)}})},gotoPersonalInformationList:function(){wx.navigateTo({url:"/package/staticPersonalInformationList/pages/staticPersonalInformationList/staticPersonalInformationList"})},gotoPersonalInformationShareList:function(){wx.navigateTo({url:"/package/staticPersonalInformationList/pages/staticPersonalInformationShareList/staticPersonalInformationShareList"})},getoTicketNotes:function(){"gybs"==o.globalData.corp.ID||"xxbs"==o.globalData.corp.ID?wx.navigateTo({url:"/package/staticUseProtocol/pages/staticTicketNotes/staticTicketNotes",fail:function(e){console.log("err",e)}}):this.getoServiceAgreement()},getoUseProtocol:function(){"gybs"==o.globalData.corp.ID||"xxbs"==o.globalData.corp.ID?wx.navigateTo({url:"/package/staticUseProtocol/pages/staticUseProtocol/staticUseProtocol",fail:function(e){console.log("err",e)}}):this.getoServiceAgreement()},checkTel:function(e,a,t){var o=s(),r=c();console.log(o);var n=e;(a&&!o||t&&!r.serverHaveAvatar)&&(n="/package/pt_login/pages/pt_login2/pt_login2?returnUrl="+(e=encodeURIComponent(e))+"&isNeedTel="+a+"&isNeedAvatar="+t),wx.navigateTo({url:n})},handleGetCusetomer:function(t){var r=this;return a(e().mark((function a(){var n,c,s;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r,c={action:"weixin.getCusetomer",tel:t},s={},e.next=5,o.network.requestPOST(c).then((function(e){console.log("pro",e),e.success&&(e.data.expireDateShow=e.data.expire_date.slice(0,10),s=e.data)})).catch((function(e){}));case 5:n.setData({memberObj:s,tel:t});case 6:case"end":return e.stop()}}),a)})))()},tryGetUserInfoServer:function(){var t=this;return a(e().mark((function a(){var r,n,c;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t,n=s(),console.log("tel",n),r.data.canMember&&o.util.isPhoneNum(n)&&r.handleGetCusetomer(n),e.next=6,l();case 6:c=e.sent,r.setData({tel:n,userInfo:c});case 8:case"end":return e.stop()}}),a)})))()},queryIsChecker:function(){var t=this;return a(e().mark((function a(){var r,n,c,s,i;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t,n={action:"wxChecker.checkerPermission"},c=0,s=0,i=0,e.next=7,o.network.requestPOST(n).then((function(e){console.log("wxChecker.checkerPermissionr pro",e),e.success&&(c=e.data.isChecker,s=e.data.finance,i=e.data.monRule)})).catch((function(e){console.log("wxChecker.checkerPermissionr err",e)}));case 7:r.setData({isChecker:c,finance:s,monRule:i});case 8:case"end":return e.stop()}}),a)})))()},onLoad:function(){var t=this;o.getCorpXcxInfo(a(e().mark((function a(){var r,n,c,s,i,l,g,p,m,d,x,h,b,f,w,k,y,v,C,I,T,D,_,P,L,N,S,O;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=u("2.21.2"),n=!1,wx.getUserProfile&&(n=!0),c=o.globalData.corp.ID,s=!1,i="限时限次卡",l=t.data.showEmergencyContact,g=t.data.showItemForGybs,p=t.data.showCustomerTelPageBtn,m=t.data.customerTelSubTitleName,d=t.data.showWeChatOnLineCustomer,x=t.data.weChatOnLineCustomerSubTitleName,h=t.data.showSobotOnLineCustomer,b=t.data.showWeWorkOnLineCustomer,f=t.data.showStaticOnlineCustomerList,w=t.data.isNeedLicense,k=t.data.showReturnChangeRules,y=t.data.weWorkOnLineCustomerSubTitleName,v=t.data.customerWxQrcodeUrl,C=t.data.customerWxQrcodeName,I=t.data.showPersonalInformation,T=t.data.showServiceAgreement,D=t.data.partnerSubTitleName,_=t.data.canCoupon,P=t.data.webviewLinkUrl,L=!1,N=t.data.isHideGuideLogin,S=t.data.showMpOrderList,["cfcx","xc","ycfw"].includes(c)?s=!0:["dlcx"].includes(c)?(l=!0,I=!0,T=!0,P="https://mp.weixin.qq.com/s/BvCy2ITBUWtxrPVuyXJ2tQ"):["ltly"].includes(c)?(p=!0,d=!0,x="08:00 - 22:00",v="".concat(o.config.staticHost,"/web/xcx/images/customerWxQrcodeImage/").concat(c,".jpg")):["ycx"].includes(c)?(p=!0,d=!0,x="08:00 - 22:00"):["xjbs","ycx","jdbs","xdbus","sdcd","acbs","kdbus","gdyxbs","yzbs","lzbs","xjtbc","qjtxydb","ledbs"].includes(c)?v="".concat(o.config.staticHost,"/web/xcx/images/customerWxQrcodeImage/").concat(c,".jpg"):["bncd"].includes(c)?(v="".concat(o.config.staticHost,"/web/xcx/images/customerWxQrcodeImage/").concat(c,".jpg"),d=!0):["yuecheng"].includes(c)?"wx940f03af3de8061e"==o.globalData.corp.appid?b=!0:"wx277905918fce4782"==o.globalData.corp.appid&&(v="".concat(o.config.staticHost,"/web/xcx/images/customerWxQrcodeImage/").concat(c,"_").concat(o.globalData.corp.appid,".jpg")):["hzzhcx","bycx","mqcx","wwcaky","yantan","hzcx"].includes(c)?(I=!0,T=!0):"xxbs"==c?(N=!0,p=!0,s=!0,L=!0,g=!0,l=!0,f=!0):"gybs"==c?(D="",g=!0,p=!0,m="07:30 - 23:30",b=!0,_=!1,y="07:30 - 23:30"):["wnyc","xjw"].includes(c)?_=!1:["hhtkk","hqky"].includes(c)?(_=!1,N=!0):["qbs"].includes(c)?v="".concat(o.config.staticHost,"/web/xcx/images/customerWxQrcodeImage/").concat(c,".jpg"):["lexing","yyys","xfcx"].includes(c)?D="":"yybus"==c?(p=!0,m="",w=!0):"lsxy"==c?"wxaa948175393002a3"==o.globalData.corp.appid&&(b=!0,y="07:30 - 23:30"):["ygy","szhcx","cybs"].includes(c)?d=!0:["mjhwbs","dangdangcx","zlaxlb","zhuoyue"].includes(c)?b=!0:["szlkytest","szlky"].includes(c)?(L=!0,i="通勤月卡"):["xhbs","adbus"].includes(c)?h=!0:["wxt","sfcx","ttxy","axky","ztxybs","ttbus","clcwxyztc","hxxybs","sccx"].includes(o.globalData.corp.ID)||["wxb0029a999376d8c7","wx146e23122647e78e","wx171efe9ca3681c93"].includes(o.globalData.corp.appid)?l=!0:["xcbus","dpkx","ddbus","bbzgx","jbgk"].includes(c)?p=!0:["gmbs","gskc"].includes(c)?N=!0:["wbs"].includes(c)||(["leyou"].includes(c)?(p=!0,g=!0):["330"].includes(c)?(p=!0,d=!0,x="08:00 - 20:00"):["cybus"].includes(c)?(b=!0,y="07:30 - 23:30"):["rxztb"].includes(c)&&(v="".concat(o.config.staticHost,"/web/xcx/images/customerWxQrcodeImage/").concat(c,".jpg"),C="关于我们")),console.log("monthCardName",i),O={supportTel:o.globalData.corpXcx.supportTel,customerWx:o.globalData.corpXcx.customerWx,canRecharge:o.globalData.corpXcx.canRecharge,canInvoice:o.globalData.corpXcx.canInvoice,partner_enable:o.globalData.corpXcx.partner_enable,supportTelName:o.globalData.corpXcx.supportTelName||"投诉咨询",partnerTitleName:o.globalData.corpXcx.partnerTitleName||"分享赚钱",canIUseGetUserProfile:n,canInputNicknameAvatar:r,canMonthCard:o.globalData.corpXcx.canMonthCard||s,monthCardName:i,canCoupon:_,webviewLinkUrl:P,isInsureOrder:o.globalData.corpXcx.isInsureOrder,corpName:o.globalData.corp.corpName,showEmergencyContact:l,customerWxQrcodeUrl:v,customerWxQrcodeName:C,showPersonalInformation:I,showServiceAgreement:T,partnerSubTitleName:D,showItemForGybs:g,showCustomerTelPageBtn:p,customerTelSubTitleName:m,showWeChatOnLineCustomer:d,weChatOnLineCustomerSubTitleName:x,showSobotOnLineCustomer:h,showWeWorkOnLineCustomer:b,showStaticOnlineCustomerList:f,isNeedLicense:w,showReturnChangeRules:k,weWorkOnLineCustomerSubTitleName:y,hasMonthFund:L,isHideGuideLogin:N,showMpOrderList:S},console.log("parameter",O),t.setData({parameter:O,version:o.globalData.corp.version,adEnable:o.globalData.corpXcx.adEnable});case 33:case"end":return e.stop()}}),a)})))),o.doLogin((function(){t.tryGetUserInfoServer(),["yybus","yybustest","ycx","bbzgx","xjbs","lbcd","dpkx","xcbus","hmxb","azlkc","qtwx","wwcx","xxbs","test","jxkc","hhcd","gxtbscx","jyxycx","xiaoyi","xgbs","xgcx"].includes(o.globalData.corp.ID)&&t.queryIsChecker()}))},onShow:function(){var e=this;e.data.isFistShow?e.setData({isFistShow:!1}):o.doLogin((function(){var a=s();e.data.canMember&&e.isBackRefreshMember&&(o.util.isPhoneNum(a)&&e.handleGetCusetomer(a),e.isBackRefreshMember=!1),e.setData({userInfo:o.globalData.userInfo,tel:a})}))},onShareAppMessage:function(e){return{title:o.globalData.shareData.title,path:o.globalData.corpXcx.tabBarHome}},onShareTimeline:function(){return{title:o.globalData.shareData.title,query:"",imageUrl:o.globalData.corpXcx.shareCouponImgUrl}},handleRefreshMember:function(e){this.isBackRefreshMember=e.detail.isBackRefreshMember}});
},{isPage:true,isComponent:true,currentFile:'pages/user_center/user_center.js'});require("pages/user_center/user_center.js");$gwx_XC_23=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_23 || [];
function gz$gwx_XC_23_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showHotLine']])
Z([[7],[3,'lineList']])
Z([3,'index'])
Z([3,'_btn_query_hot'])
Z([[6],[[7],[3,'item']],[3,'endAreaId']])
Z([[6],[[7],[3,'item']],[3,'endCityId']])
Z([[6],[[7],[3,'item']],[3,'endCityName']])
Z([[6],[[7],[3,'item']],[3,'otherAppid']])
Z([[6],[[7],[3,'item']],[3,'pagePath']])
Z([[6],[[7],[3,'item']],[3,'startAreaId']])
Z([[6],[[7],[3,'item']],[3,'startCityId']])
Z([[6],[[7],[3,'item']],[3,'startCityName']])
Z([[6],[[7],[3,'item']],[3,'subscript']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
}
function gz$gwx_XC_23_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_23_2)return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_2
__WXML_GLOBAL__.ops_cached.$gwx_XC_23_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bindRefresh'])
Z([3,'bindDownLoad'])
Z([3,''])
Z([[7],[3,'triggered']])
Z([[2,'=='],[[7],[3,'listStyle']],[1,1]])
Z([[2,'=='],[[7],[3,'listStyle']],[1,3]])
Z([[6],[[7],[3,'travelLineList']],[3,'length']])
Z([3,'waterfall-container padding-sm'])
Z([[7],[3,'leftList']])
Z([3,'id'])
Z([3,'onLineTap'])
Z([3,'waterfall-item margin-bottom-sm bg-white radius-16 bg-fafafa '])
Z([[7],[3,'item']])
Z([[6],[[7],[3,'item']],[3,'content']])
Z([[7],[3,'rightList']])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_23_2);return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_2
}
function gz$gwx_XC_23_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_23_3)return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_3
__WXML_GLOBAL__.ops_cached.$gwx_XC_23_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'main '],[[7],[3,'componentClass']],[3,' shadow-box-4-22']])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,1]])
Z([3,'handleClickHotLineBtn'])
Z([3,'handleOnHotLineComLoad'])
Z([3,'text-lg'])
Z([[7],[3,'hotLineItemClass']])
Z([[7],[3,'line_type']])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,2]])
Z(z[2])
Z(z[3])
Z([3,'padding-lr-sm'])
Z([1,2])
Z([3,'bg-white radius-36 margin-top-sm padding-24'])
Z([3,'radius-16 bg-default-blue'])
Z(z[6])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,22]])
Z([3,'1'])
Z(z[2])
Z(z[10])
Z(z[11])
Z([3,'bg-white radius-36 margin-top-sm '])
Z(z[13])
Z(z[6])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,3]])
Z(z[2])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_23_3);return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_3
}
__WXML_GLOBAL__.ops_set.$gwx_XC_23=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_23=true;
var x=['./components/hotLine/hotLine.wxml','./components/travelLineList/travelLineList.wxml','./pages/home2/indexHotLine/indexHotLine.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_23_1()
var cBS=_v()
_(r,cBS)
if(_oz(z,0,e,s,gg)){cBS.wxVkey=1
var hCS=_v()
_(cBS,hCS)
var oDS=function(oFS,cES,lGS,gg){
var tIS=_mz(z,'view',['bindtap',3,'data-end-area-id',1,'data-end_city_id',2,'data-end_city_name',3,'data-other_appid',4,'data-page_path',5,'data-start-area-id',6,'data-start_city_id',7,'data-start_city_name',8],[],oFS,cES,gg)
var eJS=_v()
_(tIS,eJS)
if(_oz(z,12,oFS,cES,gg)){eJS.wxVkey=1
}
eJS.wxXCkey=1
_(lGS,tIS)
return lGS
}
hCS.wxXCkey=2
_2z(z,1,oDS,e,s,gg,hCS,'item','index','index')
}
cBS.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_XC_23_2()
var oLS=_mz(z,'scroll-view',['enableBackToTop',-1,'scrollY',-1,'bindrefresherrefresh',0,'bindscrolltolower',1,'class',1,'refresherTriggered',2],[],e,s,gg)
var xMS=_v()
_(oLS,xMS)
if(_oz(z,4,e,s,gg)){xMS.wxVkey=1
}
else if(_oz(z,5,e,s,gg)){xMS.wxVkey=2
var oNS=_v()
_(xMS,oNS)
if(_oz(z,6,e,s,gg)){oNS.wxVkey=1
var fOS=_n('view')
_rz(z,fOS,'class',7,e,s,gg)
var cPS=_v()
_(fOS,cPS)
var hQS=function(cSS,oRS,oTS,gg){
var aVS=_mz(z,'view',['bindtap',10,'class',1,'data-line-item',2],[],cSS,oRS,gg)
var tWS=_v()
_(aVS,tWS)
if(_oz(z,13,cSS,oRS,gg)){tWS.wxVkey=1
}
tWS.wxXCkey=1
_(oTS,aVS)
return oTS
}
cPS.wxXCkey=2
_2z(z,8,hQS,e,s,gg,cPS,'item','index','id')
var eXS=_v()
_(fOS,eXS)
var bYS=function(x1S,oZS,o2S,gg){
var c4S=_mz(z,'view',['bindtap',16,'class',1,'data-line-item',2],[],x1S,oZS,gg)
var h5S=_v()
_(c4S,h5S)
if(_oz(z,19,x1S,oZS,gg)){h5S.wxVkey=1
}
h5S.wxXCkey=1
_(o2S,c4S)
return o2S
}
eXS.wxXCkey=2
_2z(z,14,bYS,e,s,gg,eXS,'item','index','id')
_(oNS,fOS)
}
oNS.wxXCkey=1
}
else{xMS.wxVkey=3
var o6S=_v()
_(xMS,o6S)
if(_oz(z,20,e,s,gg)){o6S.wxVkey=1
}
o6S.wxXCkey=1
}
xMS.wxXCkey=1
_(r,oLS)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_XC_23_3()
var o8S=_n('view')
_rz(z,o8S,'class',0,e,s,gg)
var l9S=_v()
_(o8S,l9S)
if(_oz(z,1,e,s,gg)){l9S.wxVkey=1
var a0S=_mz(z,'hot-line',['bind:clickHotLineBtn',2,'bind:onHotLineComLoad',1,'hotLineBoxClass',2,'hotLineItemClass',3,'lineType',4],[],e,s,gg)
_(l9S,a0S)
}
else if(_oz(z,7,e,s,gg)){l9S.wxVkey=2
var tAT=_mz(z,'hotLineCollegeByType',['bind:clickHotLineBtn',8,'bind:onHotLineLoad',1,'hotLineBoxClass',2,'hotLineCol',3,'hotLineContainerClass',4,'hotLineItemClass',5,'lineType',6],[],e,s,gg)
_(l9S,tAT)
}
else if(_oz(z,15,e,s,gg)){l9S.wxVkey=3
var eBT=_mz(z,'hot-line-college',['HotLineCollegeListType',16,'bind:clickHotLineBtn',1,'hotLineBoxClass',2,'hotLineCol',3,'hotLineContainerClass',4,'hotLineItemClass',5,'lineType',6],[],e,s,gg)
_(l9S,eBT)
}
else if(_oz(z,23,e,s,gg)){l9S.wxVkey=4
var bCT=_mz(z,'hotLineMultiLevel',['bind:clickHotLineBtn',24,'hotLineBoxClass',1,'hotLineCol',2,'hotLineContainerClass',3,'hotLineItemClass',4,'lineType',5],[],e,s,gg)
_(l9S,bCT)
}
l9S.wxXCkey=1
l9S.wxXCkey=3
l9S.wxXCkey=3
l9S.wxXCkey=3
l9S.wxXCkey=3
_(r,o8S)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_23";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_23();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/hotLine/hotLine.wxml'] = [$gwx_XC_23, './components/hotLine/hotLine.wxml'];else __wxAppCode__['components/hotLine/hotLine.wxml'] = $gwx_XC_23( './components/hotLine/hotLine.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/travelLineList/travelLineList.wxml'] = [$gwx_XC_23, './components/travelLineList/travelLineList.wxml'];else __wxAppCode__['components/travelLineList/travelLineList.wxml'] = $gwx_XC_23( './components/travelLineList/travelLineList.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/home2/indexHotLine/indexHotLine.wxml'] = [$gwx_XC_23, './pages/home2/indexHotLine/indexHotLine.wxml'];else __wxAppCode__['pages/home2/indexHotLine/indexHotLine.wxml'] = $gwx_XC_23( './pages/home2/indexHotLine/indexHotLine.wxml' );
	;__wxRoute = "components/hotLine/hotLine";__wxRouteBegin = true;__wxAppCurrentFile__="components/hotLine/hotLine.js";define("components/hotLine/hotLine.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../@babel/runtime/helpers/asyncToGenerator"),a=getApp();Component({properties:{hotLineTitleText:{type:null,value:"常用线路推荐"},hotLineCol:{type:Number,value:2},hotLineBoxClass:{value:"",type:null},hotLineItemClass:{value:"",type:null},saveStorageKey:{type:String,value:"_select_obj"},lineType:{value:"",type:null}},data:{primary:a.globalData.corpXcx.primary,showHotLine:!1,lineList:[]},lifetimes:{attached:function(){"wx89829471e174e9a4"==a.globalData.corp.appid&&this.setData({hotLineTitleText:"热门路线"}),this.getHotLineStorage(),this.handleGetHotLine()},ready:function(){},detached:function(){}},methods:{getHotLineStorage:function(){var e=wx.getStorageSync(a.globalData.corp.appid+"_line_dh_list");e&&e.length>0&&this.setData({showHotLine:!0,lineList:e})},handleGetHotLine:function(r){var i=this;return t(e().mark((function t(){var r,n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i,n={action:"line.lineDhList",account:a.globalData.corp.account,lineType:r.data.lineType},e.next=4,a.network.requestPOST(n).then((function(e){console.log("components handleGetHotLine",e);var t=[];if(e.success){var i=!1;(t=e.data)&&t.length>0&&(i=!0),r.setData({showHotLine:i,lineList:t})}r.triggerEvent("onHotLineComLoad",{success:e.success}),wx.setStorageSync(a.globalData.corp.appid+"_line_dh_list",t)})).catch((function(e){console.log("handleGetHotLine err",e),r.triggerEvent("onHotLineComLoad",{success:!1})}));case 4:case"end":return e.stop()}}),t)})))()},_btn_query_hot:function(e){var t=e.currentTarget.dataset.other_appid,r=e.currentTarget.dataset.page_path;if(a.util.isNotNull(t)||a.util.isNotNull(r))a.util.isNotNull(t)&&a.util.isNotNull(r)?a.util.goOtherMiniApp(t,r):a.util.isNotNull(r)?a.util.routerToPage(r):a.util.showMsg("常用线路参数有误，缺少页面路径");else if(a.globalData.corpXcx.toOtherAppid)a.util.goOtherMiniApp(a.globalData.corpXcx.toOtherAppid);else{var i=wx.getStorageSync("tripDate")||a.util.formatShortTime(new Date),n={corpid:a.globalData.corp.ID,tripDate:i,beginCityName:e.currentTarget.dataset.start_city_name,beginCityCode:e.currentTarget.dataset.start_city_id,beginAddressCode:"",beginAddressName:"请选择上车站点",endCityName:e.currentTarget.dataset.end_city_name,endCityCode:e.currentTarget.dataset.end_city_id,endAddressCode:"",endAddressName:"请选择下车站点",startAreaId:e.currentTarget.dataset.startAreaId,endAreaId:e.currentTarget.dataset.endAreaId};wx.setStorageSync(a.globalData.corp.appid+this.data.saveStorageKey,n);var o={params:a.util.enQueryString(n),ticket_obj:n};this.triggerEvent("clickHotLineBtn",o)}}}});
},{isPage:false,isComponent:true,currentFile:'components/hotLine/hotLine.js'});require("components/hotLine/hotLine.js");;__wxRoute = "components/travelLineList/travelLineList";__wxRouteBegin = true;__wxAppCurrentFile__="components/travelLineList/travelLineList.js";define("components/travelLineList/travelLineList.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp(),e=0,a=0,i=require("../../8A94E9619105A88CECF281668574FB65.js").handleToHKMOPage;Component({properties:{listStyle:{type:Number,value:2},groupId:{type:String,value:""},lineCol:{type:String,value:"2"},travelLineContainerClass:{type:String,value:""},travelLineBoxClass:{type:String,value:"padding-lr-sm"},travelLineItemClass:{type:String,value:"radius-16"},nextPage:{type:String,value:""},sid:{},tabLen:{},componentClass:{type:String,value:""}},data:{primary:t.globalData.corpXcx.primary,CustomBar:t.globalData.systemInfo.CustomBar,loadTips:"",triggered:!1,travelLineList:[],leftList:[],rightList:[]},lifetimes:{},pageLifetimes:{},methods:{getTravelLineList:function(){var i=this,n={openid:t.globalData.openid,corpid:t.globalData.corp.ID,start:999*e,limit:999,appid:t.globalData.corp.appid,travelLineGroupId:this.data.travelLineGroupId},r=this.data.isRefresh?[]:this.data.travelLineList,l="上拉加载更多",s=this.data.listStyle,o=[],g=[];t.network.requestPOSTEncrypt(n,"/api/v3/travelLine/getTravelLineList",{isShowErrorMsg:!1,noEncryption:!0}).then((function(t){if(t.success&&t.data){if(r=r.concat(t.data),a=Number(t.totalCount),r.find((function(t){return!t.pic}))||(s=3),3==s&&t.data.length)for(var i=0;i<t.data.length;i++){var n=t.data[i];i%2==0?o.push(n):g.push(n)}0==a?l="暂无数据":999*e+999>=a&&(l="全部数据加载完成")}else r=[],l="旅游线路加载失败"})).catch((function(e){l=e.message||"旅游线路获取异常",t.util.showMsg(e.message||"旅游线路获取异常，请重试")})).finally((function(){i.setData({travelLineList:r,loadTips:l,isRefresh:!1,triggered:!1,listStyle:s,leftList:o,rightList:g}),i.triggerEvent("onTravelLineLoad",{sid:i.data.sid})}))},bindDownLoad:function(){var t=this.data.loadTips;999*e+999>=a?t="全部数据加载完成":(e++,t="上拉加载更多",this.getTravelLineList()),this.setData({loadTips:t})},bindRefresh:function(t){e=0,this.setData({isRefresh:!0}),this.getTravelLineList()},onLineTap:function(e){var a=e.currentTarget.dataset.lineItem,n=a.id,r=a.pagePath,l=a.otherAppid,s=a.hasDetail,o=a.beginCityCode,g=a.beginCityName,p=a.endCityName,d=a.endCityCode;if(t.globalData.corpXcx.toOtherAppid)t.util.goOtherMiniApp(t.globalData.corpXcx.toOtherAppid);else if(l&&r)t.util.goOtherMiniApp(l,r);else if(r)t.util.routerToPage(r);else if(s)wx.navigateTo({url:"/package/travelLine/pages/detail/detail?id=".concat(n,"&nextPage=").concat(this.data.nextPage),fail:function(t){console.log("err",t)}});else{var c=t.config.pagesUrl["".concat(this.data.nextPage,"_url")],u={beginCityName:g,beginCityCode:o,endCityCode:d,endCityName:p,corpid:t.globalData.corp.ID},h=t.util.enQueryString(u),v=i({url:"".concat(c,"?").concat(h),ticketObj:u}).redirectUrl;wx.navigateTo({url:v,fail:function(t){console.log("navigateTo err",t)}})}}}});
},{isPage:false,isComponent:true,currentFile:'components/travelLineList/travelLineList.js'});require("components/travelLineList/travelLineList.js");;__wxRoute = "pages/home2/indexHotLine/indexHotLine";__wxRouteBegin = true;__wxAppCurrentFile__="pages/home2/indexHotLine/indexHotLine.js";define("pages/home2/indexHotLine/indexHotLine.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=getApp(),t=require("../../../8A94E9619105A88CECF281668574FB65.js").handleToHKMOPage;Component({properties:{componentClass:{value:"",type:null},line_type:{type:String,value:""},next_page:{type:String,value:""},sid:{},hotLineItemClass:{type:String,value:""},hotLineType:{type:String,value:"1"}},data:{primary:e.globalData.corpXcx.primary},methods:{_goto_next_page:function(i){if(e.util.isNull(i))e.util.showMsg("线路信息有误");else{var l="?"+e.util.enQueryString(i),a=this.data.next_page,n=e.config.pagesUrl.interval2_url;if(console.log("next_page",a),"selectDate"===a)n="/package/index4/pages/select_date/select_date";else if("interval2"===a)n=e.config.pagesUrl.interval2_url;else if("interval21"===a)n=e.config.pagesUrl.interval21_url;else if("interval22"===a)n=e.config.pagesUrl.interval22_url;else if("interval221"===a)n=e.config.pagesUrl.interval221_url;else if("interval23"===a)n=e.config.pagesUrl.interval23_url;else if("interval24"===a)n=e.config.pagesUrl.interval24_url;else if("interval3"===a)n=e.config.pagesUrl.interval3_url;else if("interval31"===a)n=e.config.pagesUrl.interval31_url;else if("interval"===a||"intervalSwc"===a)n="/package/index4/pages/select_address/select_address";else if("interval11"===a)n="/package/interval11/pages/selectAddress/selectAddress";else{if("intervalCommute"!==a)return void e.util.showMsg("请检查拓展参数配置");n="/package/intervalCommute/intervalCommute"}var r=t({url:n+l,ticketObj:i}).redirectUrl;wx.navigateTo({url:r}),wx.setStorageSync(e.globalData.corp.appid+"_ticket_obj",i),wx.setStorageSync(e.globalData.corp.appid+"_select_obj",i)}},handleClickHotLineBtn:function(t){t.detail.ticket_obj.corpid=e.globalData.corp.ID,console.log("e.detail.ticket_obj",t.detail.ticket_obj),this._goto_next_page(t.detail.ticket_obj)},handleOnHotLineComLoad:function(e){console.log("handleOnHotLineComLoad indexHotLine",this.data.sid,e),this.triggerEvent("onGrandChildHotLineLoad",{sid:this.data.sid})}},lifetimes:{attached:function(){}}});
},{isPage:false,isComponent:true,currentFile:'pages/home2/indexHotLine/indexHotLine.js'});require("pages/home2/indexHotLine/indexHotLine.js");$gwx_XC_24=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_24 || [];
function gz$gwx_XC_24_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_24_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_24_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_24=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_24=true;
var x=['./pages/webview/webview.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_24_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_24";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_24();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/webview/webview.wxml'] = [$gwx_XC_24, './pages/webview/webview.wxml'];else __wxAppCode__['pages/webview/webview.wxml'] = $gwx_XC_24( './pages/webview/webview.wxml' );
	;__wxRoute = "pages/webview/webview";__wxRouteBegin = true;__wxAppCurrentFile__="pages/webview/webview.js";define("pages/webview/webview.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=getApp();Page({data:{web_url:""},onLoad:function(a){var t=this;if(e.util.isNotNull(a.web_url)){var l=decodeURIComponent(a.web_url);console.log("web_url",l),t.setData({web_url:l})}else e.getCorpXcxInfo((function(){console.log("app.globalData.corp",e.globalData.corp),"wxf9d910e251587c53"==e.globalData.corp.appid?t.setData({web_url:"https://yttradecloud.bus365.com/yt/c/v1.0/page/querypagesetupinfo?id=1525292076105770&tenantcode=22001&previewindex=2&pagelevel=1"}):e.util.showMsg("缺少必要参数：url")}))},onShareAppMessage:function(a){return{title:e.globalData.shareData.title,path:"/pages/webview/webview?web_url="+this.data.web_url}},onShareTimeline:function(){return{title:e.globalData.shareData.title,query:"web_url="+this.data.web_url,imageUrl:e.globalData.corpXcx.shareCouponImgUrl}}});
},{isPage:true,isComponent:true,currentFile:'pages/webview/webview.js'});require("pages/webview/webview.js");$gwx_XC_25=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_25 || [];
function gz$gwx_XC_25_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_25_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showHotLine']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1
}
function gz$gwx_XC_25_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_25_2)return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_2
__WXML_GLOBAL__.ops_cached.$gwx_XC_25_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'round'])
Z([3,'padding-lr-lg'])
Z([[7],[3,'isShowSelectCollege']])
Z([3,'position-relative'])
Z([[7],[3,'lineList']])
Z([3,'id'])
Z([3,'_btn_query'])
Z([[2,'?:'],[[7],[3,'isLineBigGap']],[1,'margin-tb-sm'],[1,'margin-bottom-xs']])
Z([[6],[[7],[3,'item']],[3,'endCityId']])
Z([[6],[[7],[3,'item']],[3,'endCityName']])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([[6],[[7],[3,'item']],[3,'lineType']])
Z([[6],[[7],[3,'item']],[3,'otherAppid']])
Z([[6],[[7],[3,'item']],[3,'pagePath']])
Z([[6],[[7],[3,'item']],[3,'remark']])
Z([[6],[[7],[3,'item']],[3,'startCityId']])
Z([[6],[[7],[3,'item']],[3,'startCityName']])
Z(z[14])
Z([[8],'isLoading',[[7],[3,'isLoadLineList']]])
Z([3,'loading_mask'])
Z([3,'binCollegeRefresh'])
Z([3,'bindCollegeDownLoad'])
Z([3,'basicScrollHeight text-left'])
Z([[7],[3,'collegeTriggered']])
Z([[6],[[7],[3,'collegeConfigList']],[3,'length']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_2);return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_2
}
function gz$gwx_XC_25_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_25_3)return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_3
__WXML_GLOBAL__.ops_cached.$gwx_XC_25_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'radius-36'])
Z(z[0])
Z([3,'round'])
Z([3,'padding-lr-lg'])
Z([3,'710'])
Z([[2,'&&'],[[7],[3,'collegeConfigList']],[[6],[[7],[3,'collegeConfigList']],[3,'length']]])
Z([a,[3,'grid col-'],[[7],[3,'lineColNum']],[3,' margin-xs position-relative  '],[[2,'?:'],[[7],[3,'isLineBigName']],[1,'text-xxl'],[1,'text-lg']],[3,' line-container']])
Z([[7],[3,'lineList']])
Z([3,'id'])
Z([3,'_btn_query'])
Z([[6],[[7],[3,'item']],[3,'endCityId']])
Z([[6],[[7],[3,'item']],[3,'endCityName']])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([[6],[[7],[3,'item']],[3,'lineType']])
Z([[6],[[7],[3,'item']],[3,'startCityId']])
Z([[6],[[7],[3,'item']],[3,'startCityName']])
Z([[6],[[7],[3,'item']],[3,'remark']])
Z([[8],'isLoading',[[7],[3,'isLoadLineList']]])
Z([3,'loading_mask'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_3);return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_3
}
function gz$gwx_XC_25_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_25_4)return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_4
__WXML_GLOBAL__.ops_cached.$gwx_XC_25_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'globalStyle']])
Z([[7],[3,'bannerClass']])
Z([[7],[3,'bannerImageClass']])
Z([3,'banner-notice'])
Z([[7],[3,'enablePopupNotice']])
Z([[7],[3,'firstBannerHeight']])
Z([[7],[3,'noticeClass']])
Z([[7],[3,'screenWidth']])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,1]])
Z([3,'handleClickHotLineBtn'])
Z([3,'handleOnHotLineLoad'])
Z([[7],[3,'hotLineCol']])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,2]])
Z(z[9])
Z([[7],[3,'hotLineBoxClass']])
Z(z[11])
Z([[7],[3,'hotLineContainerClass']])
Z([[7],[3,'hotLineItemClass']])
Z([[2,'=='],[[7],[3,'hotLineType']],[1,3]])
Z(z[9])
Z(z[14])
Z(z[11])
Z(z[16])
Z(z[17])
Z([a,[3,'cu-dialog '],[[7],[3,'noticePopupDialogClass']]])
Z([[7],[3,'showMoreTips']])
Z([3,'padding-lr-xs padding-bottom bg-white'])
Z([[7],[3,'areaResult']])
Z([3,'item'])
Z(z[27])
Z([3,'areaId'])
Z([3,'adressMap'])
Z([[6],[[7],[3,'item']],[3,'locationList']])
Z([3,'id'])
Z([3,'selectAdressListOff'])
Z([a,[3,'margin-xs text-lg line-box border-radius-4 '],[[2,'?:'],[[2,'=='],[[7],[3,'activeCode']],[[6],[[7],[3,'adressMap']],[3,'id']]],[1,'active-adress '],[1,'bg']],[3,'-'],[[7],[3,'primary']],[3,'  '],[[2,'?:'],[[7],[3,'showLocationIcon']],[1,'justify-between'],[1,'justify-center']]])
Z([[6],[[7],[3,'adressMap']],[3,'id']])
Z([[6],[[7],[3,'adressMap']],[3,'address']])
Z([3,'button-hover'])
Z([[7],[3,'showLocationIcon']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_4);return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_4
}
function gz$gwx_XC_25_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_25_5)return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_5
__WXML_GLOBAL__.ops_cached.$gwx_XC_25_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'padding-lr-lg'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_5);return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_5
}
function gz$gwx_XC_25_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_25_6)return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_6
__WXML_GLOBAL__.ops_cached.$gwx_XC_25_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'flex '],[[2,'?:'],[[2,'=='],[[7],[3,'bannerPosition']],[1,'top']],[1,'flex-column'],[1,'flex-column-reverse']]])
Z([[7],[3,'bannerClass']])
Z([[7],[3,'bannerImageClass']])
Z([3,'handleOnNoticeComLoad'])
Z([3,'banner-notice'])
Z([[7],[3,'firstBannerHeight']])
Z([[7],[3,'noticeClass']])
Z([[7],[3,'screenWidth']])
Z([a,[3,'main '],[[7],[3,'mainClass']]])
Z([[2,'&&'],[[6],[[7],[3,'noticeList']],[3,'length']],[[7],[3,'showMyNotice']]])
Z([3,'handleClickHistoryBtn'])
Z([3,'index-search-history'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_6);return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_6
}
function gz$gwx_XC_25_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_25_7)return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_7
__WXML_GLOBAL__.ops_cached.$gwx_XC_25_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleClickHistoryBtn'])
Z([3,'index-search-history'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_7);return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_7
}
function gz$gwx_XC_25_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_25_8)return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_8
__WXML_GLOBAL__.ops_cached.$gwx_XC_25_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'flex '],[[2,'?:'],[[2,'=='],[[7],[3,'bannerPosition']],[1,'top']],[1,'flex-column'],[1,'flex-column-reverse']],[3,' '],[[7],[3,'skinClassName']]])
Z([[7],[3,'bannerClass']])
Z([[7],[3,'bannerImageClass']])
Z([3,'handleOnNoticeComLoad'])
Z([3,'banner-notice'])
Z([[7],[3,'firstBannerHeight']])
Z([[7],[3,'noticeClass']])
Z([[7],[3,'screenWidth']])
Z([3,'center20 '])
Z([[2,'&&'],[[6],[[7],[3,'noticeList']],[3,'length']],[[7],[3,'showMyNotice']]])
Z([[7],[3,'showTrainTicket']])
Z([3,'handleClickHistoryBtn'])
Z([3,'index-search-history'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_8);return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_8
}
function gz$gwx_XC_25_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_25_9)return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_9
__WXML_GLOBAL__.ops_cached.$gwx_XC_25_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'flex '],[[2,'?:'],[[2,'=='],[[7],[3,'bannerPosition']],[1,'top']],[1,'flex-column'],[1,'flex-column-reverse']]])
Z([[7],[3,'bannerClass']])
Z([[7],[3,'bannerImageClass']])
Z([3,'handleOnNoticeComLoad'])
Z([3,'banner-notice'])
Z([[7],[3,'firstBannerHeight']])
Z([[7],[3,'noticeClass']])
Z([[7],[3,'screenWidth']])
Z([a,[3,'main '],[[7],[3,'mainClass']]])
Z([[2,'&&'],[[6],[[7],[3,'noticeList']],[3,'length']],[[7],[3,'showMyNotice']]])
Z([[7],[3,'showCityTitle']])
Z([[7],[3,'showCharterCar']])
Z([3,'handleClickHistoryBtn'])
Z([3,'index-search-history'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_9);return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_9
}
function gz$gwx_XC_25_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_25_10)return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_10
__WXML_GLOBAL__.ops_cached.$gwx_XC_25_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'flex '],[[2,'?:'],[[2,'=='],[[7],[3,'bannerPosition']],[1,'top']],[1,'flex-column'],[1,'flex-column-reverse']]])
Z([[7],[3,'bannerClass']])
Z([[7],[3,'bannerImageClass']])
Z([3,'handleOnNoticeComLoad'])
Z([3,'banner-notice'])
Z([[7],[3,'firstBannerHeight']])
Z([[7],[3,'noticeClass']])
Z([[7],[3,'screenWidth']])
Z([a,[3,'main '],[[7],[3,'mainClass']]])
Z([[2,'&&'],[[6],[[7],[3,'noticeList']],[3,'length']],[[7],[3,'showMyNotice']]])
Z([[7],[3,'showCityTitle']])
Z([[7],[3,'showCharterCar']])
Z([3,'handleClickHistoryBtn'])
Z([3,'index-search-history'])
Z([[7],[3,'showBottomTabBox']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_10);return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_10
}
function gz$gwx_XC_25_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_25_11)return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_11
__WXML_GLOBAL__.ops_cached.$gwx_XC_25_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'flex '],[[2,'?:'],[[2,'=='],[[7],[3,'bannerPosition']],[1,'top']],[1,'flex-column'],[1,'flex-column-reverse']]])
Z([[7],[3,'bannerClass']])
Z([[7],[3,'bannerImageClass']])
Z([3,'handleOnNoticeComLoad'])
Z([3,'banner-notice'])
Z([[7],[3,'firstBannerHeight']])
Z([[7],[3,'noticeClass']])
Z([[7],[3,'screenWidth']])
Z([a,[3,'main '],[[7],[3,'mainClass']]])
Z([[2,'&&'],[[6],[[7],[3,'noticeList']],[3,'length']],[[7],[3,'showMyNotice']]])
Z([[7],[3,'showCityTitle']])
Z([[7],[3,'showCharterCar']])
Z([3,'handleClickHistoryBtn'])
Z([3,'index-search-history'])
Z([[7],[3,'showBottomTabBox']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_11);return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_11
}
function gz$gwx_XC_25_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_25_12)return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_12
__WXML_GLOBAL__.ops_cached.$gwx_XC_25_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'flex '],[[2,'?:'],[[2,'=='],[[7],[3,'bannerPosition']],[1,'top']],[1,'flex-column'],[1,'flex-column-reverse']]])
Z([[7],[3,'bannerClass']])
Z([[7],[3,'bannerImageClass']])
Z([3,'handleOnNoticeComLoad'])
Z([3,'banner-notice'])
Z([[7],[3,'firstBannerHeight']])
Z([[7],[3,'noticeClass']])
Z([3,'702'])
Z([a,[3,'main '],[[7],[3,'mainClass']]])
Z([[2,'&&'],[[6],[[7],[3,'noticeList']],[3,'length']],[[7],[3,'showMyNotice']]])
Z([[7],[3,'showCharterCar']])
Z([3,'handleClickHistoryBtn'])
Z([3,'index-search-history'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_12);return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_12
}
function gz$gwx_XC_25_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_25_13)return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_13
__WXML_GLOBAL__.ops_cached.$gwx_XC_25_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'flex '],[[2,'?:'],[[2,'=='],[[7],[3,'bannerPosition']],[1,'top']],[1,'flex-column'],[1,'flex-column-reverse']]])
Z([[7],[3,'bannerClass']])
Z([[7],[3,'bannerImageClass']])
Z([3,'handleOnNoticeComLoad'])
Z([3,'banner-notice'])
Z([[7],[3,'firstBannerHeight']])
Z([[7],[3,'noticeClass']])
Z([[7],[3,'screenWidth']])
Z([a,[3,'main '],[[7],[3,'mainClass']]])
Z([[2,'&&'],[[6],[[7],[3,'noticeList']],[3,'length']],[[7],[3,'showMyNotice']]])
Z([[7],[3,'showCharterCar']])
Z([3,'handleClickHistoryBtn'])
Z([3,'index-search-history'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_13);return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_13
}
function gz$gwx_XC_25_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_25_14)return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_14
__WXML_GLOBAL__.ops_cached.$gwx_XC_25_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'bannerClass']])
Z([[7],[3,'bannerImageClass']])
Z([3,'handleOnNoticeComLoad'])
Z([3,'banner-notice'])
Z([[7],[3,'firstBannerHeight']])
Z([[7],[3,'noticeClass']])
Z([[7],[3,'noticePopupDialogClass']])
Z([[7],[3,'screenWidth']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_14);return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_14
}
__WXML_GLOBAL__.ops_set.$gwx_XC_25=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_25=true;
var x=['./components/hotLine2/hotLine2.wxml','./pages/index/index1/index1.wxml','../../../pages/template/interval.wxml','./pages/index/index11/index11.wxml','./pages/index/index2/index2.wxml','./pages/index/index3/index3.wxml','./pages/index/index4/index4.wxml','../../common/icon.wxml','./pages/index/index42/index42.wxml','./pages/index/index43/index43.wxml','./pages/index/index5/index5.wxml','./pages/index/index51/index51.wxml','./pages/index/index512/index512.wxml','./pages/index/index52/index52.wxml','./pages/index/index53/index53.wxml','./pages/index/indexNav/indexNav.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_25_1()
var oFT=_v()
_(r,oFT)
if(_oz(z,0,e,s,gg)){oFT.wxVkey=1
}
oFT.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_XC_25_2()
var cHT=e_[x[1]].i
_ai(cHT,x[2],e_,x[1],1,1)
var oJT=_mz(z,'banner-notice',['noticeBtnClass',0,'noticeClass',1],[],e,s,gg)
_(r,oJT)
var hIT=_v()
_(r,hIT)
if(_oz(z,2,e,s,gg)){hIT.wxVkey=1
}
var cKT=_n('view')
_rz(z,cKT,'class',3,e,s,gg)
var oLT=_v()
_(cKT,oLT)
var lMT=function(tOT,aNT,ePT,gg){
var oRT=_mz(z,'view',['bindtap',6,'class',1,'data-end_city_id',2,'data-end_city_name',3,'data-id',4,'data-line_type',5,'data-other_appid',6,'data-page_path',7,'data-remark',8,'data-start_city_id',9,'data-start_city_name',10],[],tOT,aNT,gg)
var xST=_v()
_(oRT,xST)
if(_oz(z,17,tOT,aNT,gg)){xST.wxVkey=1
}
xST.wxXCkey=1
_(ePT,oRT)
return ePT
}
oLT.wxXCkey=2
_2z(z,4,lMT,e,s,gg,oLT,'item','index','id')
var oTT=_v()
_(cKT,oTT)
var fUT=_oz(z,19,e,s,gg)
var cVT=_gd(x[1],fUT,e_,d_)
if(cVT){
var hWT=_1z(z,18,e,s,gg) || {}
var cur_globalf=gg.f
oTT.wxXCkey=3
cVT(hWT,hWT,oTT,gg)
gg.f=cur_globalf
}
else _w(fUT,x[1],1,1371)
_(r,cKT)
var oXT=_mz(z,'scroll-view',['enableBackToTop',-1,'refresherEnabled',-1,'scrollWithAnimation',-1,'scrollY',-1,'bindrefresherrefresh',20,'bindscrolltolower',1,'class',2,'refresherTriggered',3],[],e,s,gg)
var cYT=_v()
_(oXT,cYT)
if(_oz(z,24,e,s,gg)){cYT.wxVkey=1
}
cYT.wxXCkey=1
_(r,oXT)
hIT.wxXCkey=1
cHT.pop()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[x[2]],ic:[]}
d_[x[3]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_XC_25_3()
var l1T=e_[x[3]].i
_ai(l1T,x[2],e_,x[3],1,1)
var t3T=_mz(z,'banner-notice',['bannerClass',0,'bannerImageClass',1,'noticeBtnClass',1,'noticeClass',2,'screenWidth',3],[],e,s,gg)
_(r,t3T)
var a2T=_v()
_(r,a2T)
if(_oz(z,5,e,s,gg)){a2T.wxVkey=1
var e4T=_n('view')
_rz(z,e4T,'class',6,e,s,gg)
var b5T=_v()
_(e4T,b5T)
var o6T=function(o8T,x7T,f9T,gg){
var hAU=_mz(z,'view',['bindtap',9,'data-end_city_id',1,'data-end_city_name',2,'data-id',3,'data-line_type',4,'data-start_city_id',5,'data-start_city_name',6],[],o8T,x7T,gg)
var oBU=_v()
_(hAU,oBU)
if(_oz(z,16,o8T,x7T,gg)){oBU.wxVkey=1
}
oBU.wxXCkey=1
_(f9T,hAU)
return f9T
}
b5T.wxXCkey=2
_2z(z,7,o6T,e,s,gg,b5T,'item','index','id')
var cCU=_v()
_(e4T,cCU)
var oDU=_oz(z,18,e,s,gg)
var lEU=_gd(x[3],oDU,e_,d_)
if(lEU){
var aFU=_1z(z,17,e,s,gg) || {}
var cur_globalf=gg.f
cCU.wxXCkey=3
lEU(aFU,aFU,cCU,gg)
gg.f=cur_globalf
}
else _w(oDU,x[3],1,1477)
_(a2T,e4T)
}
else{a2T.wxVkey=2
}
a2T.wxXCkey=1
l1T.pop()
return r
}
e_[x[3]]={f:m2,j:[],i:[],ti:[x[2]],ic:[]}
d_[x[4]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_XC_25_4()
var eHU=_n('view')
_rz(z,eHU,'class',0,e,s,gg)
var oJU=_mz(z,'banner-notice',['bannerClass',1,'bannerImageClass',1,'class',2,'enablePopupNotice',3,'firstBannerHeight',4,'noticeClass',5,'screenWidth',6],[],e,s,gg)
_(eHU,oJU)
var bIU=_v()
_(eHU,bIU)
if(_oz(z,8,e,s,gg)){bIU.wxVkey=1
var xKU=_mz(z,'hot-line',['bind:clickHotLineBtn',9,'bind:onHotLineLoad',1,'hotLineCol',2],[],e,s,gg)
_(bIU,xKU)
}
else if(_oz(z,12,e,s,gg)){bIU.wxVkey=2
var oLU=_mz(z,'hotLineCollegeByType',['bind:clickHotLineBtn',13,'hotLineBoxClass',1,'hotLineCol',2,'hotLineContainerClass',3,'hotLineItemClass',4],[],e,s,gg)
_(bIU,oLU)
}
else if(_oz(z,18,e,s,gg)){bIU.wxVkey=3
var fMU=_mz(z,'hotLineMultiLevel',['bind:clickHotLineBtn',19,'hotLineBoxClass',1,'hotLineCol',2,'hotLineContainerClass',3,'hotLineItemClass',4],[],e,s,gg)
_(bIU,fMU)
}
var cNU=_n('view')
_rz(z,cNU,'class',24,e,s,gg)
var hOU=_v()
_(cNU,hOU)
if(_oz(z,25,e,s,gg)){hOU.wxVkey=1
}
var oPU=_n('view')
_rz(z,oPU,'class',26,e,s,gg)
var cQU=_v()
_(oPU,cQU)
if(_oz(z,27,e,s,gg)){cQU.wxVkey=1
var oRU=_v()
_(cQU,oRU)
var lSU=function(tUU,aTU,eVU,gg){
var oXU=_v()
_(eVU,oXU)
var xYU=function(f1U,oZU,c2U,gg){
var o4U=_mz(z,'view',['bindtap',34,'class',1,'data-address_code',2,'data-address_name',3,'hoverClass',4],[],f1U,oZU,gg)
var c5U=_v()
_(o4U,c5U)
if(_oz(z,39,f1U,oZU,gg)){c5U.wxVkey=1
}
c5U.wxXCkey=1
_(c2U,o4U)
return c2U
}
oXU.wxXCkey=2
_2z(z,32,xYU,tUU,aTU,gg,oXU,'adressMap','index','id')
return eVU
}
oRU.wxXCkey=2
_2z(z,29,lSU,e,s,gg,oRU,'item','index','areaId')
}
else{cQU.wxVkey=2
}
cQU.wxXCkey=1
_(cNU,oPU)
hOU.wxXCkey=1
_(eHU,cNU)
bIU.wxXCkey=1
bIU.wxXCkey=3
bIU.wxXCkey=3
bIU.wxXCkey=3
_(r,eHU)
return r
}
e_[x[4]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_XC_25_5()
var l7U=_n('banner-notice')
_rz(z,l7U,'noticeClass',0,e,s,gg)
_(r,l7U)
return r
}
e_[x[5]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_XC_25_6()
var t9U=e_[x[6]].i
_ai(t9U,x[7],e_,x[6],1,1)
var e0U=_n('view')
_rz(z,e0U,'class',0,e,s,gg)
var bAV=_mz(z,'banner-notice',['bannerClass',1,'bannerImageClass',1,'bind:onNoticeComLoad',2,'class',3,'firstBannerHeight',4,'noticeClass',5,'screenWidth',6],[],e,s,gg)
_(e0U,bAV)
var oBV=_n('view')
_rz(z,oBV,'class',8,e,s,gg)
var xCV=_v()
_(oBV,xCV)
if(_oz(z,9,e,s,gg)){xCV.wxVkey=1
}
var oDV=_mz(z,'index-search-history',['bind:clickHistoryBtn',10,'class',1],[],e,s,gg)
_(oBV,oDV)
xCV.wxXCkey=1
_(e0U,oBV)
_(r,e0U)
t9U.pop()
return r
}
e_[x[6]]={f:m5,j:[],i:[],ti:[x[7]],ic:[]}
d_[x[8]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_XC_25_7()
var cFV=e_[x[8]].i
_ai(cFV,x[7],e_,x[8],1,1)
var hGV=_mz(z,'index-search-history',['bind:clickHistoryBtn',0,'class',1],[],e,s,gg)
_(r,hGV)
cFV.pop()
return r
}
e_[x[8]]={f:m6,j:[],i:[],ti:[x[7]],ic:[]}
d_[x[9]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_XC_25_8()
var cIV=e_[x[9]].i
_ai(cIV,x[7],e_,x[9],1,1)
var oJV=_n('view')
_rz(z,oJV,'class',0,e,s,gg)
var lKV=_mz(z,'banner-notice',['bannerClass',1,'bannerImageClass',1,'bind:onNoticeComLoad',2,'class',3,'firstBannerHeight',4,'noticeClass',5,'screenWidth',6],[],e,s,gg)
_(oJV,lKV)
var aLV=_n('view')
_rz(z,aLV,'class',8,e,s,gg)
var tMV=_v()
_(aLV,tMV)
if(_oz(z,9,e,s,gg)){tMV.wxVkey=1
}
var eNV=_v()
_(aLV,eNV)
if(_oz(z,10,e,s,gg)){eNV.wxVkey=1
}
var bOV=_mz(z,'index-search-history',['bind:clickHistoryBtn',11,'class',1],[],e,s,gg)
_(aLV,bOV)
tMV.wxXCkey=1
eNV.wxXCkey=1
_(oJV,aLV)
_(r,oJV)
cIV.pop()
return r
}
e_[x[9]]={f:m7,j:[],i:[],ti:[x[7]],ic:[]}
d_[x[10]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_XC_25_9()
var xQV=_n('view')
_rz(z,xQV,'class',0,e,s,gg)
var oRV=_mz(z,'banner-notice',['bannerClass',1,'bannerImageClass',1,'bind:onNoticeComLoad',2,'class',3,'firstBannerHeight',4,'noticeClass',5,'screenWidth',6],[],e,s,gg)
_(xQV,oRV)
var fSV=_n('view')
_rz(z,fSV,'class',8,e,s,gg)
var cTV=_v()
_(fSV,cTV)
if(_oz(z,9,e,s,gg)){cTV.wxVkey=1
}
var hUV=_v()
_(fSV,hUV)
if(_oz(z,10,e,s,gg)){hUV.wxVkey=1
}
var oVV=_v()
_(fSV,oVV)
if(_oz(z,11,e,s,gg)){oVV.wxVkey=1
}
var cWV=_mz(z,'index-search-history',['bind:clickHistoryBtn',12,'class',1],[],e,s,gg)
_(fSV,cWV)
cTV.wxXCkey=1
hUV.wxXCkey=1
oVV.wxXCkey=1
_(xQV,fSV)
_(r,xQV)
return r
}
e_[x[10]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_XC_25_10()
var lYV=_n('view')
_rz(z,lYV,'class',0,e,s,gg)
var aZV=_mz(z,'banner-notice',['bannerClass',1,'bannerImageClass',1,'bind:onNoticeComLoad',2,'class',3,'firstBannerHeight',4,'noticeClass',5,'screenWidth',6],[],e,s,gg)
_(lYV,aZV)
var t1V=_n('view')
_rz(z,t1V,'class',8,e,s,gg)
var e2V=_v()
_(t1V,e2V)
if(_oz(z,9,e,s,gg)){e2V.wxVkey=1
}
var b3V=_v()
_(t1V,b3V)
if(_oz(z,10,e,s,gg)){b3V.wxVkey=1
}
var o4V=_v()
_(t1V,o4V)
if(_oz(z,11,e,s,gg)){o4V.wxVkey=1
}
var o6V=_mz(z,'index-search-history',['bind:clickHistoryBtn',12,'class',1],[],e,s,gg)
_(t1V,o6V)
var x5V=_v()
_(t1V,x5V)
if(_oz(z,14,e,s,gg)){x5V.wxVkey=1
}
e2V.wxXCkey=1
b3V.wxXCkey=1
o4V.wxXCkey=1
x5V.wxXCkey=1
_(lYV,t1V)
_(r,lYV)
return r
}
e_[x[11]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_XC_25_11()
var c8V=_n('view')
_rz(z,c8V,'class',0,e,s,gg)
var h9V=_mz(z,'banner-notice',['bannerClass',1,'bannerImageClass',1,'bind:onNoticeComLoad',2,'class',3,'firstBannerHeight',4,'noticeClass',5,'screenWidth',6],[],e,s,gg)
_(c8V,h9V)
var o0V=_n('view')
var oBW=_n('view')
_rz(z,oBW,'class',8,e,s,gg)
var lCW=_v()
_(oBW,lCW)
if(_oz(z,9,e,s,gg)){lCW.wxVkey=1
}
var aDW=_v()
_(oBW,aDW)
if(_oz(z,10,e,s,gg)){aDW.wxVkey=1
}
var tEW=_v()
_(oBW,tEW)
if(_oz(z,11,e,s,gg)){tEW.wxVkey=1
}
var eFW=_mz(z,'index-search-history',['bind:clickHistoryBtn',12,'class',1],[],e,s,gg)
_(oBW,eFW)
lCW.wxXCkey=1
aDW.wxXCkey=1
tEW.wxXCkey=1
_(o0V,oBW)
var cAW=_v()
_(o0V,cAW)
if(_oz(z,14,e,s,gg)){cAW.wxVkey=1
}
cAW.wxXCkey=1
_(c8V,o0V)
_(r,c8V)
return r
}
e_[x[12]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_XC_25_12()
var oHW=_n('view')
_rz(z,oHW,'class',0,e,s,gg)
var xIW=_mz(z,'banner-notice',['bannerClass',1,'bannerImageClass',1,'bind:onNoticeComLoad',2,'class',3,'firstBannerHeight',4,'noticeClass',5,'screenWidth',6],[],e,s,gg)
_(oHW,xIW)
var oJW=_n('view')
_rz(z,oJW,'class',8,e,s,gg)
var fKW=_v()
_(oJW,fKW)
if(_oz(z,9,e,s,gg)){fKW.wxVkey=1
}
var cLW=_v()
_(oJW,cLW)
if(_oz(z,10,e,s,gg)){cLW.wxVkey=1
}
var hMW=_mz(z,'index-search-history',['bind:clickHistoryBtn',11,'class',1],[],e,s,gg)
_(oJW,hMW)
fKW.wxXCkey=1
cLW.wxXCkey=1
_(oHW,oJW)
_(r,oHW)
return r
}
e_[x[13]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_XC_25_13()
var cOW=_n('view')
_rz(z,cOW,'class',0,e,s,gg)
var oPW=_mz(z,'banner-notice',['bannerClass',1,'bannerImageClass',1,'bind:onNoticeComLoad',2,'class',3,'firstBannerHeight',4,'noticeClass',5,'screenWidth',6],[],e,s,gg)
_(cOW,oPW)
var lQW=_n('view')
_rz(z,lQW,'class',8,e,s,gg)
var aRW=_v()
_(lQW,aRW)
if(_oz(z,9,e,s,gg)){aRW.wxVkey=1
}
var tSW=_v()
_(lQW,tSW)
if(_oz(z,10,e,s,gg)){tSW.wxVkey=1
}
var eTW=_mz(z,'index-search-history',['bind:clickHistoryBtn',11,'class',1],[],e,s,gg)
_(lQW,eTW)
aRW.wxXCkey=1
tSW.wxXCkey=1
_(cOW,lQW)
_(r,cOW)
return r
}
e_[x[14]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_XC_25_14()
var oVW=_mz(z,'banner-notice',['bannerClass',0,'bannerImageClass',1,'bind:onNoticeComLoad',1,'class',2,'firstBannerHeight',3,'noticeClass',4,'noticePopupDialogClass',5,'screenWidth',6],[],e,s,gg)
_(r,oVW)
return r
}
e_[x[15]]={f:m13,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_25";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_25();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/hotLine2/hotLine2.wxml'] = [$gwx_XC_25, './components/hotLine2/hotLine2.wxml'];else __wxAppCode__['components/hotLine2/hotLine2.wxml'] = $gwx_XC_25( './components/hotLine2/hotLine2.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index1/index1.wxml'] = [$gwx_XC_25, './pages/index/index1/index1.wxml'];else __wxAppCode__['pages/index/index1/index1.wxml'] = $gwx_XC_25( './pages/index/index1/index1.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index11/index11.wxml'] = [$gwx_XC_25, './pages/index/index11/index11.wxml'];else __wxAppCode__['pages/index/index11/index11.wxml'] = $gwx_XC_25( './pages/index/index11/index11.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index2/index2.wxml'] = [$gwx_XC_25, './pages/index/index2/index2.wxml'];else __wxAppCode__['pages/index/index2/index2.wxml'] = $gwx_XC_25( './pages/index/index2/index2.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index3/index3.wxml'] = [$gwx_XC_25, './pages/index/index3/index3.wxml'];else __wxAppCode__['pages/index/index3/index3.wxml'] = $gwx_XC_25( './pages/index/index3/index3.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index4/index4.wxml'] = [$gwx_XC_25, './pages/index/index4/index4.wxml'];else __wxAppCode__['pages/index/index4/index4.wxml'] = $gwx_XC_25( './pages/index/index4/index4.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index42/index42.wxml'] = [$gwx_XC_25, './pages/index/index42/index42.wxml'];else __wxAppCode__['pages/index/index42/index42.wxml'] = $gwx_XC_25( './pages/index/index42/index42.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index43/index43.wxml'] = [$gwx_XC_25, './pages/index/index43/index43.wxml'];else __wxAppCode__['pages/index/index43/index43.wxml'] = $gwx_XC_25( './pages/index/index43/index43.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index5/index5.wxml'] = [$gwx_XC_25, './pages/index/index5/index5.wxml'];else __wxAppCode__['pages/index/index5/index5.wxml'] = $gwx_XC_25( './pages/index/index5/index5.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index51/index51.wxml'] = [$gwx_XC_25, './pages/index/index51/index51.wxml'];else __wxAppCode__['pages/index/index51/index51.wxml'] = $gwx_XC_25( './pages/index/index51/index51.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index512/index512.wxml'] = [$gwx_XC_25, './pages/index/index512/index512.wxml'];else __wxAppCode__['pages/index/index512/index512.wxml'] = $gwx_XC_25( './pages/index/index512/index512.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index52/index52.wxml'] = [$gwx_XC_25, './pages/index/index52/index52.wxml'];else __wxAppCode__['pages/index/index52/index52.wxml'] = $gwx_XC_25( './pages/index/index52/index52.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index53/index53.wxml'] = [$gwx_XC_25, './pages/index/index53/index53.wxml'];else __wxAppCode__['pages/index/index53/index53.wxml'] = $gwx_XC_25( './pages/index/index53/index53.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/indexNav/indexNav.wxml'] = [$gwx_XC_25, './pages/index/indexNav/indexNav.wxml'];else __wxAppCode__['pages/index/indexNav/indexNav.wxml'] = $gwx_XC_25( './pages/index/indexNav/indexNav.wxml' );
	;__wxRoute = "components/hotLine2/hotLine2";__wxRouteBegin = true;__wxAppCurrentFile__="components/hotLine2/hotLine2.js";define("components/hotLine2/hotLine2.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/regeneratorRuntime"),e=require("../../@babel/runtime/helpers/asyncToGenerator"),a=getApp();Component({properties:{showHotLineTitleStyle:{type:null,value:"1"},hotLineCol:{type:Number,value:2},hotLineContainerClass:{type:null,value:""},hotLineBoxClass:{value:"margin-lr-xs padding-bottom-xs",type:null},hotLineItemClass:{value:"border-radius-4 bg-default-white",type:null},saveStorageKey:{type:String,value:"_select_obj"}},data:{staticHost:a.config.staticHost,primary:a.globalData.corpXcx.primary,showHotLine:!1,lineList:[],queryIntervalType:a.globalData.corpXcx.queryIntervalType||0},lifetimes:{attached:function(){this.getHotLineStorage(),this.handleGetHotLine()}},methods:{getHotLineStorage:function(){var t=wx.getStorageSync(a.globalData.corp.appid+"_line_dh_list");t&&t.length>0&&this.setData({showHotLine:!0,lineList:t})},handleGetHotLine:function(r){var i=this;return e(t().mark((function e(){var r,n;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i,n={action:"line.lineDhList",account:a.globalData.corp.account,lineType:""},t.next=4,a.network.requestPOST(n).then((function(t){var e=[];if(t.success){var i=!1;(e=t.data)&&e.length>0&&(i=!0),r.setData({showHotLine:i,lineList:e})}r.triggerEvent("onHotLineLoad",{success:t.success}),wx.setStorageSync(a.globalData.corp.appid+"_line_dh_list",e)})).catch((function(t){console.log("handleGetHotLine err",t)}));case 4:case"end":return t.stop()}}),e)})))()},_btn_query_hot:function(t){var e=t.currentTarget.dataset.other_appid,r=t.currentTarget.dataset.page_path;if(a.util.isNotNull(e)||a.util.isNotNull(r))a.util.isNotNull(e)&&a.util.isNotNull(r)?a.util.goOtherMiniApp(e,r):a.util.isNotNull(r)?a.util.routerToPage(r):a.util.showMsg("常用线路参数有误，缺少页面路径");else{var i=wx.getStorageSync("tripDate")||a.util.formatShortTime(new Date),n={corpid:a.globalData.corp.ID,tripDate:i,beginCityName:t.currentTarget.dataset.start_city_name,beginCityCode:t.currentTarget.dataset.start_city_id,beginAddressCode:"",beginAddressName:"请选择上车站点",endCityName:t.currentTarget.dataset.end_city_name,endCityCode:t.currentTarget.dataset.end_city_id,endAddressCode:"",endAddressName:"请选择下车站点",startAreaId:t.currentTarget.dataset.startAreaId,endAreaId:t.currentTarget.dataset.endAreaId};0!=this.data.queryIntervalType&&"index2"!=a.globalData.corp.index||wx.setStorageSync(a.globalData.corp.appid+this.data.saveStorageKey,n);var o={params:a.util.enQueryString(n),ticket_obj:n};this.triggerEvent("clickHotLineBtn",o)}}}});
},{isPage:false,isComponent:true,currentFile:'components/hotLine2/hotLine2.js'});require("components/hotLine2/hotLine2.js");;__wxRoute = "pages/index/index1/index1";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/index1/index1.js";define("pages/index/index1/index1.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../@babel/runtime/helpers/Arrayincludes");var e=require("../../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../../@babel/runtime/helpers/asyncToGenerator"),a=getApp(),l=require("../../../C6AC61C49105A88CA0CA09C31864FB65.js").getNextPage,i=0;Component({properties:{select_obj:{type:Object}},data:{primary:a.globalData.corpXcx.primary,corp:{},lineColNum:2,isLoadLineList:!1,lineList:[],isLineBigGap:!1,lineBigGapLimit:7,isLineBigName:!1,select_obj:{beginCity:"请选择出发地",beginCityCode:"",beginCityName:"请选择出发城市",beginDisCode:"",beginDisName:"",endCity:"请选择到达地",endCityName:"请选择",endCityCode:"",endDisName:"",endDisCode:""},beginAddress:{ID:0,name:"请选择上车站点"},endAddress:{ID:0,name:"请选择下车站点"},endAdressId:0,tripDate:void 0,showAddress:!1,isShowSelectCollege:!1,modalName:null,isRefreshCollegeConfig:!1,dictCollegeName:"学院 / 小区",collegeTriggered:!1,collegeConfigList:[],collegeTotalCount:0,currenCollegeObjStorage:"",currenCollegeID:"",currenCollegeName:"",loadCollegeConfigTips:""},methods:{openCollegeModalBtn:function(){var a=this;return t(e().mark((function t(){var l;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=0,(l=a).setData({isRefreshCollegeConfig:!0}),e.next=5,l.getCollegeConfigList();case 5:l.setData({modalName:"collegeListModal"});case 6:case"end":return e.stop()}}),t)})))()},hideModal:function(){this.setData({modalName:null})},binCollegeRefresh:function(){var a=this;return t(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0,a.setData({isRefreshCollegeConfig:!0,loadCollegeConfigTips:"加载中..."}),a.getCollegeConfigList();case 3:case"end":return e.stop()}}),t)})))()},bindCollegeDownLoad:function(e){var t=this.data.loadCollegeConfigTips;10*i+10>=this.data.collegeTotalCount?t="共 ".concat(this.data.collegeTotalCount," 条记录"):(i++,t="加载中...",this.getCollegeConfigList()),this.setData({loadCollegeConfigTips:t})},getCollegeConfigList:function(){var l=this;return t(e().mark((function t(){var o,n,r,s,g,c,d;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=l).setData({loadCollegeConfigTips:"加载中..."}),n={start:10*i,limit:10,subAppid:a.globalData.corp.appid,action:"line.getCollegeConfig"},r={},0,s="上拉加载更多",g=o.data.currenCollegeID,c=o.data.currenCollegeName,d=o.data.isRefreshCollegeConfig?[]:o.data.collegeConfigList,console.log("collegeConfigList",d),e.next=12,a.network.requestPOST(n).then((function(e){(console.log("pro",e),e.success&&a.util.isNotNull(e.data))?(console.log("pro",e.data),1==e.data.length&&(g=e.data[0].id,c=e.data[0].collegeName),10*i+10>=e.totalCount&&(s="共 ".concat(e.totalCount," 条记录"))):(e.data=e.data||[],s=e.message||"没有学院/小区配置");d=d.concat(e.data),r=e})).catch((function(e){console.log("err",e),s=(e=e||{}).message||"获取学院/小区配置列表失败",a.util.showMsg(s),r=e}));case 12:console.log("collegeConfigList",d),o.setData({collegeConfigList:d,collegeTriggered:!1,isRefreshCollegeConfig:!1,collegeTotalCount:+r.totalCount||0,loadCollegeConfigTips:s,currenCollegeID:g,currenCollegeName:c});case 14:case"end":return e.stop()}}),t)})))()},handleSelectCollege:function(e){console.log("e",e);var t=e.currentTarget.dataset.id,l=e.currentTarget.dataset.name;this.setData({currenCollegeID:t,currenCollegeName:l,modalName:null}),a.util.isNull(t)?this._getLine():this.handleGetCollegeLineList(),wx.setStorageSync(a.globalData.corp.appid+"_currenCollegeObj",{currenCollegeID:t,currenCollegeName:l})},handleGetCollegeLineList:function(){var l=this;return t(e().mark((function t(){var i,o,n,r,s;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=l).setData({isLoadLineList:!0}),o={action:"line.getCollegeLineList",collegeId:i.data.currenCollegeID},n={},r=i.data.isLineBigGap,s=i.data.lineColNum,e.next=8,a.network.requestPOST(o).then((function(e){console.log("pro",e),wx.hideLoading(),e.success&&e.data?(console.log("pro.data",e.data),console.log(e.data),r=e.data.length<i.data.lineBigGapLimit,s=i.calcLineColNum(e.data.length)):a.util.showMsg(e.message||"获取线路失败"),n=e})).catch((function(e){wx.hideLoading(),a.util.showMsg(e.message),n=e}));case 8:i.setData({isLineBigGap:r,lineColNum:s,lineList:n.data,isLoadLineList:!1});case 9:case"end":return e.stop()}}),t)})))()},_btn_query:function(e){var t=e.currentTarget.dataset.other_appid,i=e.currentTarget.dataset.page_path;if(console.log(e),a.util.isNotNull(t)||a.util.isNotNull(i))a.util.isNotNull(t)&&a.util.isNotNull(i)?a.util.goOtherMiniApp(t,i):a.util.isNotNull(i)?a.util.routerToPage(i):a.util.showMsg("常用线路参数有误，缺少页面路径");else if(a.globalData.corpXcx.toOtherAppid)a.util.goOtherMiniApp(a.globalData.corpXcx.toOtherAppid);else{var o=a.globalData.corp.ID,n={tripDate:this.data.tripDate,beginCityName:e.currentTarget.dataset.start_city_name,beginCityCode:e.currentTarget.dataset.start_city_id,endCityName:e.currentTarget.dataset.end_city_name,endCityCode:e.currentTarget.dataset.end_city_id,corpid:o,lineId:e.currentTarget.dataset.id},r=a.util.enQueryString(n),s="/package/index4/pages/select_date/select_date?";"interval4"==a.globalData.corp.interval?s="/package/interval4/pages/interval4/interval4?":"interval11"===a.globalData.corp.interval&&(s="/package/interval11/pages/selectAddress/selectAddress?"),["shky","qycx","hlzcfw"].includes(o)||"intervalCommute"==a.globalData.corp.interval?s=l(a.globalData.corp.interval)+"?":"jxjx"==o&&(s="/package/gpsByBusName/pages/gpsByBusName/gpsByBusName?",r="inputLicensePlate="+e.currentTarget.dataset.remark),console.log("url + params",s+r),wx.navigateTo({url:s+r,fail:function(e){console.log("err",e)}}),wx.setStorageSync(a.globalData.corp.appid+"_select_obj",n)}},calcLineColNum:function(e){return["hbhpgky","szlky"].includes(a.globalData.corp.ID)||e<7?1:2},_getLine:function(e){var t=this,l=t.data.lineColNum,i=!1,o=wx.getStorageSync(a.globalData.corp.appid+"_lineList");o&&(i=o.length<t.data.lineBigGapLimit,l=t.calcLineColNum(o.length),t.setData({lineColNum:l,lineList:o,isLineBigGap:i,isLoadLineList:!0}));var n={action:"line.getLineList",account:a.globalData.corp.account,lineType:""};a.network.request("/api/wg.do",n,(function(e){console.log("data.data",e.data),wx.setStorageSync(a.globalData.corp.appid+"_lineList",e.data),null!=e.data?(console.log(e.data),o=e.data,i=o.length<t.data.lineBigGapLimit,l=2,l=t.calcLineColNum(o.length),t.setData({lineColNum:l,lineList:o,isLineBigGap:i})):a.util.showMsg(e.message)}),(function(){}),(function(){t.setData({isLoadLineList:!1})}))}},lifetimes:{attached:function(){var e=this.data.isLineBigName,t=this.data.lineBigGapLimit,l=this.data.isShowSelectCollege,i=this.data.dictCollegeName;"pingo"==a.globalData.corp.ID?t=2:"jncxxw"==a.globalData.corp.ID?e=!0:["xxbs","sqbs","ddxy","cytqbs","cyhbcx","ytcx","tzcx"].includes(a.globalData.corp.ID)?l=!0:"kkys"==a.globalData.corp.ID&&(l=!0,i="学院 / 城市"),this.setData({lineBigGapLimit:t,isLineBigName:e,isShowSelectCollege:l,dictCollegeName:i})},ready:function(){if(this.data.isShowSelectCollege){var e=wx.getStorageSync(a.globalData.corp.appid+"_currenCollegeObj");a.util.isNotNull(e)&&e.currenCollegeID?(this.setData({currenCollegeID:e.currenCollegeID,currenCollegeName:e.currenCollegeName}),this.handleGetCollegeLineList()):this.openCollegeModalBtn()}else this._getLine();var t=a.util.formatShortTime(new Date);this.setData({tripDate:t}),wx.setStorageSync("tripDate",t)}}});
},{isPage:false,isComponent:true,currentFile:'pages/index/index1/index1.js'});require("pages/index/index1/index1.js");;__wxRoute = "pages/index/index11/index11";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/index11/index11.js";define("pages/index/index11/index11.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../@babel/runtime/helpers/Arrayincludes");var e=require("../../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../../@babel/runtime/helpers/asyncToGenerator"),a=getApp(),i=require("../../../C6AC61C49105A88CA0CA09C31864FB65.js").getNextPage,l=0;Component({properties:{select_obj:{type:Object},currentIndex:{type:null,value:-1}},data:{primary:a.globalData.corpXcx.primary,corp:{},lineColNum:1,isLoadLineList:!1,lineList:[],isLineBigGap:!1,lineBigGapLimit:7,isLineBigName:!1,select_obj:{beginCity:"请选择出发地",beginCityCode:"",beginCityName:"请选择出发城市",beginDisCode:"",beginDisName:"",endCity:"请选择到达地",endCityName:"请选择",endCityCode:"",endDisName:"",endDisCode:""},beginAddress:{ID:0,name:"请选择上车站点"},endAddress:{ID:0,name:"请选择下车站点"},endAdressId:0,tripDate:void 0,showAddress:!1,isShowSelectCollege:!1,modalName:null,isRefreshCollegeConfig:!1,dictCollegeName:"学院 / 小区",collegeTriggered:!1,collegeConfigList:[],collegeTotalCount:0,currenCollegeObjStorage:"",currenCollegeID:"",currenCollegeName:"",loadCollegeConfigTips:"",indicatorTranslateX:0,tabAction:0,tabWidth:345},methods:{switchTab:function(e){var t=e.currentTarget.dataset.index,a=e.currentTarget.dataset.id,i=e.currentTarget.dataset.name,l=this.data.tabWidth*t;this.setData({tabAction:t,currenCollegeID:a,currenCollegeName:i,indicatorTranslateX:l}),this.handleSelectCollege()},binCollegeRefresh:function(){var a=this;return t(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=0,a.setData({isRefreshCollegeConfig:!0,loadCollegeConfigTips:"加载中..."}),a.getCollegeConfigList();case 3:case"end":return e.stop()}}),t)})))()},bindCollegeDownLoad:function(e){var t=this.data.loadCollegeConfigTips;10*l+10>=this.data.collegeTotalCount?t="共 ".concat(this.data.collegeTotalCount," 条记录"):(l++,t="加载中...",this.getCollegeConfigList()),this.setData({loadCollegeConfigTips:t})},getCollegeConfigList:function(){var i=this;return t(e().mark((function t(){var n,o,r,s,c,g,d;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=i).setData({loadCollegeConfigTips:"加载中..."}),o={start:10*l,limit:10,subAppid:a.globalData.corp.appid,action:"line.getCollegeConfig"},r={},0,s="上拉加载更多",c=n.data.currenCollegeID,g=n.data.currenCollegeName,d=n.data.isRefreshCollegeConfig?[]:n.data.collegeConfigList,console.log("collegeConfigList",d),e.next=12,a.network.requestPOST(o).then((function(e){console.log("pro",e),e.success&&a.util.isNotNull(e.data)?(c=e.data[0].id,g=e.data[0].collegeName,10*l+10>=e.totalCount&&(s="共 ".concat(e.totalCount," 条记录"))):(e.data=e.data||[],s=e.message||"没有学院/小区配置"),d=d.concat(e.data),r=e})).catch((function(e){console.log("err",e),s=(e=e||{}).message||"获取学院/小区配置列表失败",a.util.showMsg(s),r=e}));case 12:console.log("kk",d),n.setData({collegeConfigList:d,collegeTriggered:!1,isRefreshCollegeConfig:!1,collegeTotalCount:+r.totalCount||0,loadCollegeConfigTips:s,currenCollegeID:c,currenCollegeName:g});case 14:case"end":return e.stop()}}),t)})))()},handleSelectCollege:function(e){var t=this.data.currenCollegeID,i=this.data.currenCollegeName;a.util.isNull(t)?this._getLine():this.handleGetCollegeLineList(),wx.setStorageSync(a.globalData.corp.appid+"_currenCollegeObj",{currenCollegeID:t,currenCollegeName:i})},handleGetCollegeLineList:function(){var i=this;return t(e().mark((function t(){var l,n,o,r,s;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=i,!a.util.isNull(l.data.currenCollegeID)){e.next=3;break}return e.abrupt("return");case 3:return l.setData({isLoadLineList:!0}),n={action:"line.getCollegeLineList",collegeId:l.data.currenCollegeID},o={},r=l.data.isLineBigGap,s=l.data.lineColNum,e.next=10,a.network.requestPOST(n).then((function(e){console.log("pro",e),wx.hideLoading(),e.success&&e.data?(console.log("pro.data",e.data),console.log(e.data),r=e.data.length<l.data.lineBigGapLimit,s=l.calcLineColNum(e.data.length)):a.util.showMsg(e.message||"获取线路失败"),o=e})).catch((function(e){wx.hideLoading(),a.util.showMsg(e.message),o=e}));case 10:l.setData({isLineBigGap:r,lineColNum:s,lineList:o.data,isLoadLineList:!1});case 11:case"end":return e.stop()}}),t)})))()},_btn_query:function(e){if(a.globalData.corpXcx.toOtherAppid)a.util.goOtherMiniApp(a.globalData.corpXcx.toOtherAppid);else{var t=a.globalData.corp.ID,l={tripDate:this.data.tripDate,beginCityName:e.currentTarget.dataset.start_city_name,beginCityCode:e.currentTarget.dataset.start_city_id,endCityName:e.currentTarget.dataset.end_city_name,endCityCode:e.currentTarget.dataset.end_city_id,corpid:t,lineId:e.currentTarget.dataset.id},n=a.util.enQueryString(l),o="/package/index4/pages/select_date/select_date?";"interval4"==a.globalData.corp.interval&&(o="/package/interval4/pages/interval4/interval4?"),(["shky","qycx","hlzcfw"].includes(t)||"intervalCommute"==a.globalData.corp.interval)&&(o=i(a.globalData.corp.interval)+"?"),wx.navigateTo({url:o+n}),wx.setStorageSync(a.globalData.corp.appid+"_select_obj",l)}},calcLineColNum:function(e){return"hbhpgky"==a.globalData.corp.ID||e<7?1:2},_getLine:function(e){var t=this,i=t.data.lineColNum,l=!1,n=wx.getStorageSync(a.globalData.corp.appid+"_lineList");n&&(l=n.length<t.data.lineBigGapLimit,i=t.calcLineColNum(n.length),t.setData({lineColNum:i,lineList:n,isLineBigGap:l,isLoadLineList:!0}));var o={action:"line.getLineList",account:a.globalData.corp.account,lineType:""};a.network.request("/api/wg.do",o,(function(e){console.log("data.data",e.data),wx.setStorageSync(a.globalData.corp.appid+"_lineList",e.data),null!=e.data?(console.log(e.data),n=e.data,l=n.length<t.data.lineBigGapLimit,i=2,i=t.calcLineColNum(n.length),t.setData({lineColNum:i,lineList:n,isLineBigGap:l})):a.util.showMsg(e.message)}),(function(){}),(function(){t.setData({isLoadLineList:!1})}))}},lifetimes:{attached:function(){var e=this.data.isLineBigName,t=this.data.lineBigGapLimit,i=this.data.isShowSelectCollege,l=this.data.dictCollegeName;"pingo"==a.globalData.corp.ID?t=2:"jncxxw"==a.globalData.corp.ID?e=!0:["xxbs","sqbs","ddxy","cytqbs","cyhbcx","ytcx","tzcx"].includes(a.globalData.corp.ID)?i=!0:"kkys"==a.globalData.corp.ID&&(i=!0,l="学院 / 城市"),this.setData({lineBigGapLimit:t,isLineBigName:e,isShowSelectCollege:i,dictCollegeName:l})},ready:function(){var i=this;return t(e().mark((function t(){var l,n,o,r,s,c,g,d;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((l=i).data.isShowSelectCollege){e.next=5;break}l._getLine(),e.next=15;break;case 5:return e.next=7,l.getCollegeConfigList();case 7:n=l.data.collegeConfigList,o=0,r=l.data.currentIndex,s=l.data.currenCollegeID,c=l.data.currenCollegeName,r>=0&&n.length>r?(o=r,s=n[r].id,c=n[r].collegeName,wx.setStorageSync(a.globalData.corp.appid+"_currenCollegeObj",{currenCollegeID:s,currenCollegeName:c})):(g=wx.getStorageSync(a.globalData.corp.appid+"_currenCollegeObj"),a.util.isNotNull(g)&&g.currenCollegeID&&(o=l.data.collegeConfigList.findIndex((function(e){return e.id==g.currenCollegeID})),s=g.currenCollegeID,c=g.currenCollegeName)),l.setData({tabAction:o,indicatorTranslateX:i.data.tabWidth*o,currenCollegeID:s,currenCollegeName:c}),l.handleGetCollegeLineList();case 15:d=a.util.formatShortTime(new Date),l.setData({tripDate:d}),wx.setStorageSync("tripDate",d);case 18:case"end":return e.stop()}}),t)})))()}},pageLifetimes:{show:function(){a.globalData.corpXcx.isWhiteList&&a.goWhiteListLogin()}}});
},{isPage:false,isComponent:true,currentFile:'pages/index/index11/index11.js'});require("pages/index/index11/index11.js");;__wxRoute = "pages/index/index2/index2";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/index2/index2.js";define("pages/index/index2/index2.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../@babel/runtime/helpers/Arrayincludes");var e=getApp(),t={};Component({properties:{select_obj:{type:Object,observer:function(e,t,a){this._select_objChange(e,t,a)}},noticePopupDialogClass:{type:null,value:""},mainClass:{type:null,value:"padding-lr-lg border-radius-4"},bannerBoxClass:{type:null,value:""},noticeClass:{type:null,value:"bg-white padding-lr-lg"},screenWidth:{type:null,value:750},firstBannerHeight:{type:null,value:253},bannerClass:{type:null,value:""},bannerImageClass:{type:null,value:""},btnClass:{type:null,value:""},hotLineCol:{type:Number,value:2},hotLineContainerClass:{type:null,value:""},hotLineItemClass:{type:null,value:"border-radius-4 bg-default-white"},hotLineBoxClass:{type:null,value:"margin-lr-xs"},isNoSelectCity:{type:null,value:0},enablePopupNotice:{value:!0,type:null},go_index_flag:{value:1,type:null}},data:{globalStyle:e.globalData.corpXcx.globalStyle,primary:e.globalData.corpXcx.primary,select_obj:{beginCity:"请选择出发地",beginCityCode:"",beginCityName:"请选择",beginDisCode:"",beginDisName:"",endCity:"请选择到达地",endCityName:"请选择",endCityCode:"",endDisName:"",endDisCode:""},beginAddress:{ID:0,name:"请选择上车站点"},endAddress:{ID:0,name:"请选择下车站点"},tripDate:void 0,showDate:void 0,showAddress:!1,rotate:0,isChanging:!1,rotateKey:180,show_type:"modal",select_type:"begin",activeCode:"",btnQueryName:"查询",col:2,areaMessage:"",showLocationIcon:!1,hotLineType:e.globalData.corpXcx.hotLineType||1},methods:{_select_objChange:function(t,a,i){var s=t,o=!1;console.log("index2");try{if(s){e.util.isNull(s.beginCityName)&&(s.beginCityName="请选择"),e.util.isNull(s.endCityName)&&(s.endCityName="请选择"),o=!e.util.isNull(s.beginCityCode)&&"0000"!==s.beginCityCode&&!e.util.isNull(s.endCityCode),this.setData({showAddress:o,select_obj:s});var l=wx.getStorageSync("tripDate");console.log(l),e.util.isNotNull(l)&&this.setData({tripDate:l,showDate:e.util.formatDate(l)+" "+e.util.getWeekName(l)}),this._initAddressData(s)}}catch(e){console.log(e)}},_initAddressData:function(t){if(e.util.isNotNull(t.beginCityCode)&&e.util.isNotNull(t.endCityCode)){var a=e.globalData.corp.appid+"_"+t.beginCityCode+"_"+t.endCityCode;console.log(a);var i=wx.getStorageSync(a+"_beginAddress");console.log(i),e.util.isNotNull(i)&&e.util.isNull(t.beginAddressCode)&&(t.beginAddressCode=i.ID,t.beginAddressName=i.name);var s=wx.getStorageSync(a+"_endAddress");e.util.isNotNull(s)&&e.util.isNull(t.endAddressCode)&&(t.endAddressCode=s.ID,t.endAddressName=s.name),this.setData({select_obj:t})}},_selectBeginCity:function(t){1!=this.data.isNoSelectCity&&wx.navigateTo({url:e.globalData.corpXcxExt.selectCityUrl+"?select=begin"})},_selectEndCity:function(t){if(1!=this.data.isNoSelectCity)if(e.util.isNull(this.data.select_obj.beginCityCode))e.util.showMsg("请先选择出发城市！");else{var a=this.data.select_obj;console.log(a),wx.setStorageSync(e.globalData.corp.appid+"_select_obj",a),wx.navigateTo({url:e.globalData.corpXcxExt.selectCityUrl+"?select=end"})}},_btn_query:function(t){if(e.globalData.corpXcx.toOtherAppid)e.util.goOtherMiniApp(e.globalData.corpXcx.toOtherAppid);else if(e.util.isNull(this.data.select_obj.beginCityCode))e.util.showMsg("请选择出发城市！");else if(e.util.isNull(this.data.select_obj.endCityCode))e.util.showMsg("请选择到达城市！");else if(e.util.isNull(this.data.select_obj.beginAddressCode))e.util.showMsg("请选择上车站点！");else if(e.util.isNull(this.data.select_obj.endAddressCode))e.util.showMsg("请选择下车站点！");else{var a={tripDate:this.data.tripDate,beginCityName:this.data.select_obj.beginCityName,beginCityCode:this.data.select_obj.beginCityCode,beginDisCode:this.data.select_obj.beginDisCode,beginDisName:this.data.select_obj.beginDisName,beginAddressCode:this.data.select_obj.beginAddressCode,beginAddressName:this.data.select_obj.beginAddressName,endCityCode:this.data.select_obj.endCityCode,endDisCode:this.data.select_obj.endDisCode,endDisName:this.data.select_obj.endDisName,endCityName:this.data.select_obj.endCityName,endAddressCode:this.data.select_obj.endAddressCode,endAddressName:this.data.select_obj.endAddressName};wx.setStorageSync(e.globalData.corp.appid+"_ticket_obj",a);var i=e.util.enQueryString(a);console.log("params",i);var s="/package/bus/pages/interval/interval?"+i;wx.navigateTo({url:s})}},_change:function(){var t=this;if(!t.data.isChanging){t.animation1(),clearTimeout(e.globalData.timerTem);var a=setTimeout((function(){t._do_change()}),200);e.globalData.timerTem=a}},_do_change:function(t){var a=this.data.select_obj.beginDisCode,i=this.data.select_obj.beginCityName,s=this.data.select_obj.beginCity,o=this.data.select_obj.beginCityCode,l=this.data.select_obj.beginDisName,d={beginCityName:this.data.select_obj.endCityName,beginCity:this.data.select_obj.endCity,beginDisCode:this.data.select_obj.endDisCode,beginDisName:this.data.select_obj.endDisName,beginCityCode:this.data.select_obj.endCityCode,beginAddressCode:"",beginAddressName:"请选择上车站点",endCity:s,endCityName:i,endCityCode:o,endDisCode:a,endDisName:l,endAddressCode:"",endAddressName:"请选择下车站点"};this.setData({select_obj:d}),this._initAddressData(d),wx.setStorageSync(e.globalData.corp.appid+"_select_obj",d),clearTimeout(e.globalData.timerTem)},animation1:function(){var e=this,t=180==e.data.rotateKey?-180:180;e.setData({rotateKey:t,isChanging:!0}),e.animate(".icon_change",[{rotate:0},{rotate:t}],400,(function(){e.clearAnimation(".icon_change",{rotate:!0})})),e.animate(".animationStartCity",[{opacity:1,translateX:0},{opacity:.2,translateX:150},{opacity:1,translateX:0}],400,(function(){e.clearAnimation(".animationStartCity",{opacity:!0,translateX:!0}),e.setData({isChanging:!1})})),e.animate(".animationEndCity",[{opacity:1,translateX:0},{opacity:.2,translateX:-150},{opacity:1,translateX:0}],400,(function(){console.log("动画完成 endCityName"),e.clearAnimation(".animationEndCity",{opacity:!0,translateX:!0})}))},_selectAddress:function(t){if(e.util.isNull(this.data.select_obj.beginCityCode))e.util.showMsg("请先选择出发城市！");else if(e.util.isNull(this.data.select_obj.endCityCode))e.util.showMsg("请先选择到达城市！");else{var a=t.currentTarget.dataset.cur_type;if("modal"==this.data.show_type){var i="选择上车站点",s="0",o=this.data.select_obj.beginAddressCode;"end"==a&&(i="选择下车站点",s="2",o=this.data.select_obj.endAddressCode),this.setData({select_type:a,modalName:"select_addr_modal",modalTitle:i,activeCode:o,areaResult:[],adressResult:[]}),this._loadLocationDate(s)}else"page"==this.data.show_type&&wx.navigateTo({url:"/package/index2/pages/select_address/select_address?select="+a})}},hideModal:function(e){this.setData({modalName:null})},_loadLocationDate:function(t){var a=this,i={action:"area.areaAndLocationVo",startCityId:a.data.select_obj.beginCityCode,endCityId:a.data.select_obj.endCityCode,corpid:e.globalData.corp.ID,locationType:t},s=null,o="2",l=!1,d="";e.network.request("/api/wg.do",i,(function(t){if(t.success&&e.util.isNotNull(t.data)){s=t.data.areaList;var i=0;s.forEach((function(e){i+=e.locationList.length})),i>30&&(o="3"),"hycx"==e.globalData.corp.ID&&(o="2"),("2"==o&&i>16||"3"==o&&i>24)&&(l=!0)}else d=t.message;a.setData({col:o,areaResult:s,showMoreTips:l,areaMessage:d})}))},selectAdressListOff:function(t){var a=wx.getStorageSync(e.globalData.corp.appid+"_select_obj");a||(a={});var i=this.data.select_type,s=e.globalData.corp.appid+"_"+a.beginCityCode+"_"+a.endCityCode;if("begin"==i){a.beginAddressCode=t.currentTarget.dataset.address_code,a.beginAddressName=t.currentTarget.dataset.address_name;var o={ID:t.currentTarget.dataset.address_code,name:t.currentTarget.dataset.address_name};wx.setStorageSync(s+"_beginAddress",o)}else if("end"==i){a.endAddressCode=t.currentTarget.dataset.address_code,a.endAddressName=t.currentTarget.dataset.address_name;var l={ID:t.currentTarget.dataset.address_code,name:t.currentTarget.dataset.address_name};wx.setStorageSync(s+"_endAddress",l)}this.setData({select_obj:a,modalName:null}),wx.setStorageSync(e.globalData.corp.appid+"_select_obj",a)},_selectDate:function(){var t=this.data.select_obj;if(e.util.isNull(t.beginCityCode))e.util.showMsg("请选择出发城市！");else if(e.util.isNull(t.endCityCode))e.util.showMsg("请选择到达城市！");else{var a={tripDate:this.data.tripDate,beginCityName:this.data.select_obj.beginCityName,beginCityCode:this.data.select_obj.beginCityCode,endCityCode:this.data.select_obj.endCityCode,endCityName:this.data.select_obj.endCityName},i=e.util.enQueryString(a);wx.navigateTo({url:"/package/index4/pages/select_date/select_date?go_index_flag=".concat(this.data.go_index_flag,"&").concat(i)})}},handleClickHotLineBtn:function(t){console.log("toOtherAppid",e.globalData.corpXcx.toOtherAppid);e.globalData.corpXcx.toOtherAppid?e.util.goOtherMiniApp(e.globalData.corpXcx.toOtherAppid):this._initAddressData(t.detail.ticket_obj)},handleOnHotLineLoad:function(e){console.log(e),e.detail.success&&this._initLine()},_initLine:function(){if(e.util.isNull(this.data.select_obj.beginCityCode)&&e.util.isNull(this.data.select_obj.endCityCode)){var t=wx.getStorageSync(e.globalData.corp.appid+"_line_dh_list");if(t&&t.length>1){var a=wx.getStorageSync(e.globalData.corp.appid+"_select_obj");a||(a={}),a.beginCityCode=t[0].begin_city_code,a.beginCityName=t[0].begin_city_name,a.endCityName=t[0].end_city_name,a.endCityCode=t[0].end_city_code,a.beginAddressCode="",a.beginAddressName="请选择上车站点",a.endAddressCode="",a.endAddressName="请选择下车站点",wx.setStorageSync(e.globalData.corp.appid+"_select_obj",a),this.setData({showAddress:!0,select_obj:a}),this._initAddressData(a)}}},toMap:function(a){var i=a.currentTarget.dataset.locationItem,s=i.lat,o=i.lng,l=i.stationAddr,d=i.address;if(o&&s){var n=t[e.globalData.corp.appid];if(n){var r=e.globalData.shareData.title,c=JSON.stringify({name:d,latitude:+s,longitude:+o});wx.navigateTo({url:"plugin://routePlan/index?key="+n+"&referer="+r+"&endPoint="+c+" &navigation=1&themeColor=#609df0"})}else wx.openLocation({longitude:+o,latitude:+s,name:d,address:l})}}},lifetimes:{attached:function(){var t=this.data.btnQueryName;"bbzszh"==e.globalData.corp.ID?t="订票":"ttxy"==e.globalData.corp.ID&&(t="查询车票"),this.setData({btnQueryName:t,showLocationIcon:["sybs","lqkyzx","dybs","wrbs"].includes(e.globalData.corp.ID)})},ready:function(){try{var t=wx.getStorageSync(e.globalData.corp.appid+"_select_obj");t&&(e.util.isNull(t.beginCityName)&&(t.beginCityName="请选择"),e.util.isNull(t.endCityName)&&(t.endCityName="请选择"),this.setData({showAddress:!0,select_obj:t,rotate:"180-load"})),clearTimeout(e.globalData.timerTem)}catch(e){console.log(e)}var a=e.util.formatShortTime(new Date);this.setData({corpid:e.globalData.corp.ID,tripDate:a,showDate:e.util.formatDate(a)+" "+e.util.getWeekName(a)}),wx.setStorageSync("tripDate",a)},detached:function(){clearTimeout(e.globalData.timerTem)}}});
},{isPage:false,isComponent:true,currentFile:'pages/index/index2/index2.js'});require("pages/index/index2/index2.js");;__wxRoute = "pages/index/index3/index3";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/index3/index3.js";define("pages/index/index3/index3.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp();Component({properties:{select_obj:{type:Object}},data:{showMouch:!0,select_obj:{beginCity:"请选择出发地",beginCityCode:"",beginCityName:"请选择出发城市",beginDisCode:"",beginDisName:"",endCity:"请选择到达地",endCityName:"请选择",endCityCode:"",endDisName:"",endDisCode:""},tripDate:void 0},methods:{_btn_query:function(e){console.log(e.currentTarget.dataset);var a={tripDate:this.data.tripDate,beginCityName:e.currentTarget.dataset.start_city_name,beginCityCode:e.currentTarget.dataset.start_city_id,endCityName:e.currentTarget.dataset.end_city_name,endCityCode:e.currentTarget.dataset.end_city_id};wx.setStorageSync(t.globalData.corp.appid+"_select_obj",a);var i=t.util.enQueryString(a);wx.navigateTo({url:"/package/index4/pages/select_date/select_date?tripDate="+this.data.tripDate+"&"+i})},_getLine:function(e){var a=this,i=wx.getStorageSync(t.globalData.corp.appid+"_lineList");i&&a.setData({showMouch:!(i.length<5),lineList:i});var n={action:"line.getLineList",account:t.globalData.corp.account,lineType:""};t.network.request("/api/wg.do",n,(function(e){if(wx.setStorageSync(t.globalData.corp.appid+"_lineList",e.data),null!=e.data){var i=e.data;a.setData({showMouch:!(i.length<5),lineList:i})}else t.util.showMsg(e.message)}))}},attached:function(){},ready:function(){this._getLine();var e=t.util.formatShortTime(new Date);this.setData({tripDate:e}),wx.setStorageSync("tripDate",e)}});
},{isPage:false,isComponent:true,currentFile:'pages/index/index3/index3.js'});require("pages/index/index3/index3.js");;__wxRoute = "pages/index/index4/index4";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/index4/index4.js";define("pages/index/index4/index4.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../../@babel/runtime/helpers/asyncToGenerator");require("../../../@babel/runtime/helpers/Arrayincludes");var a=getApp(),i=require("../../../3BE296B59105A88C5D84FEB2CFF3FB65.js"),n=i.getUserInfoStorage,o=i.getTelStorage,l=require("../../../8A94E9619105A88CECF281668574FB65.js").handleToHKMOPage;Component({properties:{select_obj:{type:Object,observer:function(e,t,a){this._select_objChange(e,t,a)}},selectCityNavBack:!1,mainClass:{type:null,value:"padding-lr-lg border-radius-4"},bannerBoxClass:{type:null,value:""},noticeClass:{type:null,value:"bg-white padding-lr-lg"},noticePopupDialogClass:{type:null,value:""},screenWidth:{type:null,value:750},firstBannerHeight:{type:null,value:253},bannerClass:{type:null,value:""},bannerImageClass:{type:null,value:""},btnClass:{type:null,value:""},showMyNotice:{type:null,value:!1},bannerPosition:{value:"top",type:null}},data:{primary:a.globalData.corpXcx.primary,staticHost:a.config.staticHost,canMonthCard:a.globalData.corpXcx.canMonthCard,select_obj:{beginCity:"请选择出发地",beginCityCode:"",beginCityName:"请选择出发城市",beginDisCode:"",beginDisName:"",endCity:"请选择到达地",endCityName:"请选择",endCityCode:"",endDisName:"",endDisCode:""},tripDate:void 0,rotate:0,isChanging:!1,rotateKey:180,noticeList:[],lineDhList:[]},methods:{_select_objChange:function(e,t,i){var n=e;console.log("index4");try{if(n){a.util.isNull(n.beginCityName)&&(n.beginCityName="请选择"),a.util.isNull(n.endCityName)&&(n.endCityName="请选择"),this.setData({select_obj:n});var o=wx.getStorageSync("tripDate");a.util.isNotNull(o)&&this.setData({tripDate:o})}}catch(e){console.log(e)}},_selectBeginCity:function(e){wx.navigateTo({url:a.globalData.corpXcxExt.selectCityUrl+"?select=begin&selectCityNavBack="+this.data.selectCityNavBack})},_selectEndCity:function(e){if(a.util.isNull(this.data.select_obj.beginCityCode))a.util.showMsg("请选择出发城市！");else{var t=this.data.select_obj;console.log(t),wx.setStorageSync(a.globalData.corp.appid+"_select_obj",t),wx.navigateTo({url:a.globalData.corpXcxExt.selectCityUrl+"?select=end&selectCityNavBack="+this.data.selectCityNavBack})}},_btn_query:function(e){var t=this.data.select_obj.beginCityCode,i=this.data.select_obj.endCityCode;if(a.util.isNull(t))a.util.showMsg("请选择出发城市！");else if(a.util.isNull(i))a.util.showMsg("请选择到达城市！");else{var n="",o="",l=this.redirectPageBylineDh(t,i);if(l){n=l.startAreaId||"",o=l.endAreaId||"";var r={corpid:a.globalData.corp.ID,tripDate:this.data.tripDate,beginCityName:this.data.select_obj.beginCityName,beginCityCode:t,startAreaId:n||"",endCityCode:i,endCityName:this.data.select_obj.endCityName,endAreaId:o||""};"tmm"!=a.globalData.corp.ID?a.globalData.corpXcx.toOtherAppid?a.util.goOtherMiniApp(a.globalData.corpXcx.toOtherAppid):this._goto_next_page(r):this.goOtherMPYYBS()||this._goto_next_page(r)}}},goOtherMPYYBS:function(e){return"xcx2"===a.globalData.corp.account&&(wx.navigateToMiniProgram({appId:"wx406aa18672f06e02",path:"pages/home/home",envVersion:"release",success:function(e){console.log(e)},fail:function(e){console.log(e)}}),!0)},_goto_next_page:function(e){wx.setStorageSync(a.globalData.corp.appid+"_ticket_obj",e),wx.setStorageSync(a.globalData.corp.appid+"_select_obj",e);var t=a.util.enQueryString(e),i="/package/index4/pages/select_date/select_date?"+t+"&go_index_flag=0";"intervalSwc"==a.globalData.corp.interval?i="/package/index4/pages/select_address/select_address?"+t:["interval22","interval221"].includes(a.globalData.corp.interval)&&(i=a.config.pagesUrlV2[a.globalData.corp.interval]+"?"+t);var n=l({url:i+"?"+t,ticketObj:e}).redirectUrl;console.log("url",i),wx.navigateTo({url:n}),this.selectComponent(".index-search-history")&&this.selectComponent(".index-search-history").saveQueryCityHistory(e)},_change:function(){var e=this;if(!e.data.isChanging){e.animation1(),clearTimeout(a.globalData.timerTem);var t=setTimeout((function(){e._do_change()}),200);a.globalData.timerTem=t}},_do_change:function(e){var t=this.data.select_obj.beginCityName,i=this.data.select_obj.beginCity,n=this.data.select_obj.beginCityCode,o={beginCityName:this.data.select_obj.endCityName,beginCity:this.data.select_obj.endCity,beginCityCode:this.data.select_obj.endCityCode,beginAddressName:"请选择上车站点",endCity:i,endCityName:t,endCityCode:n,endAddressName:"请选择下车站点"};this.setData({select_obj:o}),wx.setStorageSync(a.globalData.corp.appid+"_select_obj",o),clearTimeout(a.globalData.timerTem)},animation1:function(){var e=this,t=180==e.data.rotateKey?-180:180;e.setData({rotateKey:t,isChanging:!0}),e.animate(".icon_change",[{rotate:0},{rotate:t}],400,(function(){e.clearAnimation(".icon_change",{rotate:!0})})),e.animate(".animationStartCity",[{opacity:1,translateY:0},{opacity:0,translateY:27},{opacity:1,translateY:0}],400,(function(){e.clearAnimation(".animationStartCity",{opacity:!0,translateY:!0}),e.setData({isChanging:!1})})),e.animate(".animationEndCity",[{opacity:1,translateY:0},{opacity:0,translateY:-27},{opacity:1,translateY:0}],400,(function(){console.log("动画完成 endCityName"),e.clearAnimation(".animationEndCity",{opacity:!0,translateY:!0})}))},handleClickHotLineBtn:function(e){console.log("e",e);if("tmm"==a.globalData.corp.ID){if(this.goOtherMPYYBS(e.detail.ticket_obj))return}else if(a.globalData.corpXcx.toOtherAppid)return void a.util.goOtherMiniApp(a.globalData.corpXcx.toOtherAppid);this.setData({select_obj:e.detail.ticket_obj}),this._goto_next_page(e.detail.ticket_obj)},handleClickHistoryBtn:function(e){console.log("e",e);var t=e.detail.beginCityCode,a=e.detail.endCityCode,i=this.redirectPageBylineDh(t,a);i&&(e.detail.startAreaId=i.startAreaId||"",e.detail.endAreaId=i.endAreaId||"",this._goto_next_page(e.detail))},gotoMyMonthCard:function(){this.checkTel("/package/mon_card/pages/my_mon_card/my_mon_card",1,0)},geto_feedback:function(){wx.navigateTo({url:"/package/user_center/pages/feedback/feedback"})},makePhoneCallBtn:function(){a.util.isNull(a.globalData.corpXcx.indexTel)?a.util.showMsg("未设置号码"):a.util.makePhoneCall(a.globalData.corpXcx.indexTel)},codingBtn:function(){a.util.showMsg("开发中")},goto_coupon_list:function(){this.checkTel("/package/user_center/pages/coupon_list/coupon_list?hideSelect=true",1,0)},checkTel:function(e,t,a){var i=o(),l=n();console.log(i);var r=e;(t&&!i||a&&!l.serverHaveAvatar)&&(r="/package/pt_login/pages/pt_login2/pt_login2?returnUrl="+(e=encodeURIComponent(e))+"&isNeedTel="+t+"&isNeedAvatar="+a),wx.navigateTo({url:r})},handleOnNoticeComLoad:function(e){console.log("handleOnNoticeComLoad",e),this.setData({noticeList:e.detail.noticeList,noticePopup:e.detail.noticePopup,modalName:e.detail.modalName})},clickNotice:function(e){this.selectComponent(".banner-notice")&&this.selectComponent(".banner-notice").clickNotice(e)},handleGetHotLine:function(i){var n=this;return t(e().mark((function t(){var i,o;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n,o={action:"line.lineDhList",account:a.globalData.corp.account,lineType:""},e.next=4,a.network.requestPOST(o).then((function(e){var t=[];e.success&&(t=e.data||[],i.setData({lineDhList:t}))})).catch((function(e){console.log("handleGetHotLine err",e)}));case 4:case"end":return e.stop()}}),t)})))()},redirectPageBylineDh:function(e,t){if(a.config.indexBtnJudgeHotLineCorpList.includes(a.globalData.corp.ID)){var i=this.data.lineDhList.find((function(a){return e==a.startCityId&&t==a.endCityId}));if(i){var n=i.otherAppid,o=i.pagePath,l=i.startAreaId,r=i.endAreaId;if(a.util.isNotNull(n)||a.util.isNotNull(o))return a.util.isNotNull(n)&&a.util.isNotNull(o)?a.util.goOtherMiniApp(n,o):a.util.isNotNull(o)?a.util.routerToPage(o):a.util.showMsg("常用线路参数有误，缺少页面路径"),!1;if(a.util.isNotNull(l)||a.util.isNotNull(r))return{startAreaId:l,endAreaId:r}}return{}}return{}}},lifetimes:{attached:function(){},ready:function(){try{var e=wx.getStorageSync(a.globalData.corp.appid+"_select_obj");e&&(a.util.isNull(e.beginCityName)&&(e.beginCityName="请选择"),a.util.isNull(e.endCityName)&&(e.endCityName="请选择"),this.setData({select_obj:e})),clearTimeout(a.globalData.timerTem)}catch(e){console.log(e)}a.config.indexBtnJudgeHotLineCorpList.includes(a.globalData.corp.ID)&&this.handleGetHotLine();var t=a.util.formatShortTime(new Date);this.setData({tripDate:t,rotate:"180-load"}),wx.setStorageSync("tripDate",t)},detached:function(){clearTimeout(a.globalData.timerTem)}}});
},{isPage:false,isComponent:true,currentFile:'pages/index/index4/index4.js'});require("pages/index/index4/index4.js");;__wxRoute = "pages/index/index42/index42";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/index42/index42.js";define("pages/index/index42/index42.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../@babel/runtime/helpers/Arrayincludes");var t=getApp(),e=require("../../../3BE296B59105A88C5D84FEB2CFF3FB65.js"),a=e.getUserInfoStorage,i=e.getTelStorage;Component({properties:{select_obj:{type:Object,observer:function(t,e,a){this._select_objChange(t,e,a)}},showHotLineTitleStyle:{type:null,value:"1"},hotLineCol:{type:Number,value:2},hotLineContainerClass:{type:null,value:""},hotLineBoxClass:{value:"margin-lr-xs",type:null},hotLineItemClass:{value:"border-radius-4 bg-default-white",type:null}},data:{primary:t.globalData.corpXcx.primary,staticHost:t.config.staticHost,corpName:t.globalData.corp.corpName||"首页",CustomBar:t.globalData.systemInfo.CustomBar,canMonthCard:t.globalData.corpXcx.canMonthCard,select_obj:{beginCity:"请选择出发地",beginCityCode:"",beginCityName:"请选择出发城市",beginDisCode:"",beginDisName:"",endCity:"请选择到达地",endCityName:"请选择",endCityCode:"",endDisName:"",endDisCode:""},tripDate:void 0,rotate:0,isChanging:!1,rotateKey:180},methods:{_select_objChange:function(e,a,i){var o=e;console.log("index4");try{if(o){t.util.isNull(o.beginCityName)&&(o.beginCityName="请选择"),t.util.isNull(o.endCityName)&&(o.endCityName="请选择"),this.setData({select_obj:o});var n=wx.getStorageSync("tripDate");t.util.isNotNull(n)&&this.setData({tripDate:n})}}catch(t){console.log(t)}},_selectBeginCity:function(e){wx.navigateTo({url:t.globalData.corpXcxExt.selectCityUrl+"?select=begin"})},_selectEndCity:function(e){if(t.util.isNull(this.data.select_obj.beginCityCode))t.util.showMsg("请选择出发城市！");else{var a=this.data.select_obj;console.log(a),wx.setStorageSync(t.globalData.corp.appid+"_select_obj",a),wx.navigateTo({url:t.globalData.corpXcxExt.selectCityUrl+"?select=end"})}},_btn_query:function(e){if(t.util.isNull(this.data.select_obj.beginCityCode))t.util.showMsg("请选择出发城市！");else if(t.util.isNull(this.data.select_obj.endCityCode))t.util.showMsg("请选择到达城市！");else{var a={corpid:t.globalData.corp.ID,tripDate:this.data.tripDate,beginCityName:this.data.select_obj.beginCityName,beginCityCode:this.data.select_obj.beginCityCode,endCityCode:this.data.select_obj.endCityCode,endCityName:this.data.select_obj.endCityName};"tmm"!=t.globalData.corp.ID?t.globalData.corpXcx.toOtherAppid?t.util.goOtherMiniApp(t.globalData.corpXcx.toOtherAppid):this._goto_next_page(a):this.goOtherMPYYBS()||this._goto_next_page(a)}},goOtherMPYYBS:function(e){return"xcx2"===t.globalData.corp.account&&(wx.navigateToMiniProgram({appId:"wx406aa18672f06e02",path:"pages/home/home",envVersion:"release",success:function(t){console.log(t)},fail:function(t){console.log(t)}}),!0)},_goto_next_page:function(e){wx.setStorageSync(t.globalData.corp.appid+"_ticket_obj",e);var a=t.util.enQueryString(e),i="/package/index4/pages/select_date/select_date?"+a+"&go_index_flag=0";"intervalSwc"==t.globalData.corp.interval?i="/package/index4/pages/select_address/select_address?"+a:["interval22","interval221"].includes(t.globalData.corp.interval)&&(i=t.config.pagesUrlV2[t.globalData.corp.interval]+"?"+a),console.log("url",i),wx.navigateTo({url:i}),this.selectComponent(".index-search-history")&&this.selectComponent(".index-search-history").saveQueryCityHistory(e)},_change:function(){var e=this;if(!e.data.isChanging){e.animation1(),clearTimeout(t.globalData.timerTem);var a=setTimeout((function(){e._do_change()}),200);t.globalData.timerTem=a}},_do_change:function(e){var a=this.data.select_obj.beginCityName,i=this.data.select_obj.beginCity,o=this.data.select_obj.beginCityCode,n={beginCityName:this.data.select_obj.endCityName,beginCity:this.data.select_obj.endCity,beginCityCode:this.data.select_obj.endCityCode,beginAddressName:"请选择上车站点",endCity:i,endCityName:a,endCityCode:o,endAddressName:"请选择下车站点"};this.setData({select_obj:n}),wx.setStorageSync(t.globalData.corp.appid+"_select_obj",n),clearTimeout(t.globalData.timerTem)},animation1:function(){var t=this,e=180==t.data.rotateKey?-180:180;t.setData({rotateKey:e,isChanging:!0}),t.animate(".icon_change",[{rotate:0},{rotate:e}],400,(function(){t.clearAnimation(".icon_change",{rotate:!0})})),t.animate(".animationStartCity",[{opacity:1,translateY:0},{opacity:0,translateY:27},{opacity:1,translateY:0}],400,(function(){t.clearAnimation(".animationStartCity",{opacity:!0,translateY:!0}),t.setData({isChanging:!1})})),t.animate(".animationEndCity",[{opacity:1,translateY:0},{opacity:0,translateY:-27},{opacity:1,translateY:0}],400,(function(){console.log("动画完成 endCityName"),t.clearAnimation(".animationEndCity",{opacity:!0,translateY:!0})}))},handleClickHotLineBtn:function(e){console.log("e",e);if("tmm"==t.globalData.corp.ID){if(this.goOtherMPYYBS(e.detail.ticket_obj))return}else if(t.globalData.corpXcx.toOtherAppid)return void t.util.goOtherMiniApp(t.globalData.corpXcx.toOtherAppid);this.setData({select_obj:e.detail.ticket_obj}),this._goto_next_page(e.detail.ticket_obj)},handleClickHistoryBtn:function(t){console.log("e",t),this._goto_next_page(t.detail)},gotoMyMonthCard:function(){this.checkTel("/package/mon_card/pages/my_mon_card/my_mon_card",1,0)},geto_feedback:function(){wx.navigateTo({url:"/package/user_center/pages/feedback/feedback"})},makePhoneCallBtn:function(){t.util.isNull(t.globalData.corpXcx.indexTel)?t.util.showMsg("未设置号码"):t.util.makePhoneCall(t.globalData.corpXcx.indexTel)},codingBtn:function(){t.util.showMsg("开发中")},goto_coupon_list:function(){this.checkTel("/package/user_center/pages/coupon_list/coupon_list?hideSelect=true",1,0)},checkTel:function(t,e,o){var n=i(),l=a();console.log(n);var s=t;(e&&!n||o&&!l.serverHaveAvatar)&&(s="/package/pt_login/pages/pt_login2/pt_login2?returnUrl="+(t=encodeURIComponent(t))+"&isNeedTel="+e+"&isNeedAvatar="+o),wx.navigateTo({url:s})}},lifetimes:{attached:function(){},ready:function(){try{var e=wx.getStorageSync(t.globalData.corp.appid+"_select_obj");e&&(t.util.isNull(e.beginCityName)&&(e.beginCityName="请选择"),t.util.isNull(e.endCityName)&&(e.endCityName="请选择"),this.setData({select_obj:e})),clearTimeout(t.globalData.timerTem)}catch(t){console.log(t)}var a=t.util.formatShortTime(new Date);this.setData({tripDate:a,rotate:"180-load"}),wx.setStorageSync("tripDate",a)},detached:function(){clearTimeout(t.globalData.timerTem)}}});
},{isPage:false,isComponent:true,currentFile:'pages/index/index42/index42.js'});require("pages/index/index42/index42.js");;__wxRoute = "pages/index/index43/index43";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/index43/index43.js";define("pages/index/index43/index43.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../@babel/runtime/helpers/Arrayincludes");var e=require("../../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../../@babel/runtime/helpers/asyncToGenerator"),i=getApp(),a=require("../../../3BE296B59105A88C5D84FEB2CFF3FB65.js"),o=a.getUserInfoStorage,n=a.getTelStorage,l=require("../../../8A94E9619105A88CECF281668574FB65.js").handleToHKMOPage;Component({properties:{select_obj:{type:Object,observer:function(e,t,i){this._select_objChange(e,t,i)}},mainClass:{type:null,value:"padding-lr-lg border-radius-4"},bannerBoxClass:{type:null,value:""},noticeClass:{type:null,value:"bg-white padding-lr-lg"},noticePopupDialogClass:{type:null,value:""},screenWidth:{type:null,value:750},firstBannerHeight:{type:null,value:253},bannerClass:{type:null,value:""},bannerImageClass:{type:null,value:""},btnClass:{type:null,value:""},showHotLineTitleStyle:{type:null,value:"1"},showMyNotice:{type:null,value:!1},hotLineCol:{type:Number,value:2},hotLineContainerClass:{type:null,value:""},hotLineBoxClass:{value:"margin-lr-xs",type:null},hotLineItemClass:{value:"border-radius-4 bg-default-white",type:null},bannerPosition:{value:"top",type:null}},data:{primary:i.globalData.corpXcx.primary,staticHost:i.config.staticHost,corpName:i.globalData.corp.corpName||"首页",CustomBar:i.globalData.systemInfo.CustomBar,canMonthCard:i.globalData.corpXcx.canMonthCard,select_obj:{beginCity:"请选择出发地",beginCityCode:"",beginCityName:"请选择出发城市",beginDisCode:"",beginDisName:"",endCity:"请选择到达地",endCityName:"请选择",endCityCode:"",endDisName:"",endDisCode:""},tripDate:void 0,rotate:0,isChanging:!1,rotateKey:180,noticeList:[],noticePopup:{},modalName:null,queryIntervalType:i.globalData.corpXcx.queryIntervalType||0,showTrainTicket:!1,skinClassName:i.globalData.skinClassName},methods:{_select_objChange:function(e,t,a){var o=e;console.log("index4");try{if(o){i.util.isNull(o.beginCityName)&&(o.beginCityName="请选择"),i.util.isNull(o.endCityName)&&(o.endCityName="请选择"),i.util.isNull(o.beginDivisionCityName)&&(o.beginDivisionCityName="请选择"),i.util.isNull(o.endDivisionCityName)&&(o.endDivisionCityName="请选择"),this.setData({select_obj:o});var n=wx.getStorageSync("tripDate");i.util.isNotNull(n)&&this.setData({tripDate:n})}}catch(e){console.log(e)}},_selectBeginCity:function(e){var t=i.globalData.corpXcxExt.selectCityUrl+"?select=begin";wx.navigateTo({url:t})},_selectEndCity:function(e){if(1==this.data.queryIntervalType||2==this.data.queryIntervalType){if(i.util.isNull(this.data.select_obj.beginDivisionCityCode))return void i.util.showMsg("请先选择出发城市！")}else if(i.util.isNull(this.data.select_obj.beginCityCode))return void i.util.showMsg("请选择出发城市！");var t=this.data.select_obj;console.log(t),wx.setStorageSync(i.globalData.corp.appid+"_select_obj",t);var a=i.globalData.corpXcxExt.selectCityUrl+"?select=end";wx.navigateTo({url:a})},_btn_query:function(e){if(1==this.data.queryIntervalType||2==this.data.queryIntervalType){if(i.util.isNull(this.data.select_obj.beginDivisionCityCode))return void i.util.showMsg("请先选择出发区域！");if(i.util.isNull(this.data.select_obj.endDivisionCityCode))return void i.util.showMsg("请先选择到达区域！")}else{if(i.util.isNull(this.data.select_obj.beginCityCode))return void i.util.showMsg("请选择出发城市！");if(i.util.isNull(this.data.select_obj.endCityCode))return void i.util.showMsg("请选择到达城市！")}var t={corpid:i.globalData.corp.ID,tripDate:this.data.tripDate,beginCityName:this.data.select_obj.beginCityName||"",beginCityCode:this.data.select_obj.beginCityCode||"",beginDivisionCityName:this.data.select_obj.beginDivisionCityName||"",beginDivisionCityCode:this.data.select_obj.beginDivisionCityCode||"",beginAdDivisionName:this.data.select_obj.beginAdDivisionName||"",beginAdDivisionCode:this.data.select_obj.beginAdDivisionCode||"",beginProvinceCode:this.data.select_obj.beginProvinceCode||"",beginTownStreetCode:this.data.select_obj.beginTownStreetCode||"",startAreaId:this.data.select_obj.startAreaId||"",startAreaName:this.data.select_obj.startAreaName||"",endCityCode:this.data.select_obj.endCityCode||"",endCityName:this.data.select_obj.endCityName||"",endAdDivisionName:this.data.select_obj.endAdDivisionName||"",endAdDivisionCode:this.data.select_obj.endAdDivisionCode||"",endDivisionCityName:this.data.select_obj.endDivisionCityName||"",endDivisionCityCode:this.data.select_obj.endDivisionCityCode||"",endProvinceCode:this.data.select_obj.endProvinceCode||"",endTownStreetCode:this.data.select_obj.endTownStreetCode||"",endAreaId:this.data.select_obj.endAreaId||"",endAreaName:this.data.select_obj.endAreaName||""};"tmm"!=i.globalData.corp.ID?i.globalData.corpXcx.toOtherAppid?i.util.goOtherMiniApp(i.globalData.corpXcx.toOtherAppid):this._goto_next_page(t):this.goOtherMPYYBS()||this._goto_next_page(t)},goOtherMPYYBS:function(e){return"xcx2"===i.globalData.corp.account&&(wx.navigateToMiniProgram({appId:"wx406aa18672f06e02",path:"pages/home/home",envVersion:"release",success:function(e){console.log(e)},fail:function(e){console.log(e)}}),!0)},_goto_next_page:function(e){wx.setStorageSync(i.globalData.corp.appid+"_ticket_obj",e);var t=!0,a=this.data.queryIntervalType;1==a&&2==a&&(i.util.isNull(e.beginDivisionCityCode)||i.util.isNull(e.endDivisionCityCode))&&(t=!1);var o=i.util.enQueryString(e),n="/package/index4/pages/select_date/select_date?"+o+"&go_index_flag=0";"intervalSwc"==i.globalData.corp.interval?n="/package/index4/pages/select_address/select_address?"+o:["interval22","interval221"].includes(i.globalData.corp.interval)&&(n=i.config.pagesUrlV2[i.globalData.corp.interval]+"?"+o);var s=l({url:n,ticketObj:e}).redirectUrl;console.log("url",s),wx.navigateTo({url:s}),t&&this.selectComponent(".index-search-history")&&this.selectComponent(".index-search-history").saveQueryCityHistory(e)},_change:function(){var e=this;if(!e.data.isChanging){e.animation1(),clearTimeout(i.globalData.timerTem);var t=setTimeout((function(){e._do_change()}),200);i.globalData.timerTem=t}},_do_change:function(e){var t=this.data.select_obj.beginCityName,a=this.data.select_obj.beginCity,o=this.data.select_obj.beginCityCode,n=this.data.select_obj.beginProvinceCode,l=this.data.select_obj.beginDivisionCityCode,s=this.data.select_obj.beginDivisionCityName,r=this.data.select_obj.beginAdDivisionName,d=this.data.select_obj.beginAdDivisionCode,c=this.data.select_obj.beginTownStreetCode,g=this.data.select_obj.startAreaId,u=this.data.select_obj.startAreaName,b={beginCityName:this.data.select_obj.endCityName,beginCity:this.data.select_obj.endCity,beginCityCode:this.data.select_obj.endCityCode,beginDivisionCityCode:this.data.select_obj.endDivisionCityCode,beginDivisionCityName:this.data.select_obj.endDivisionCityName,beginAdDivisionCode:this.data.select_obj.endAdDivisionCode,beginAdDivisionName:this.data.select_obj.endAdDivisionName,beginProvinceCode:this.data.select_obj.endProvinceCode,beginTownStreetCode:this.data.select_obj.endTownStreetCode,startAreaId:this.data.select_obj.endAreaId,startAreaName:this.data.select_obj.endAreaName,beginAddressName:"请选择上车站点",endCity:a,endCityName:t,endCityCode:o,endDivisionCityCode:l,endDivisionCityName:s,endAdDivisionName:r,endAdDivisionCode:d,endProvinceCode:n,endTownStreetCode:c,endAreaId:g,endAreaName:u,endAddressName:"请选择下车站点"};this.setData({select_obj:b}),wx.setStorageSync(i.globalData.corp.appid+"_select_obj",b),clearTimeout(i.globalData.timerTem)},animation1:function(){var e=this,t=180==e.data.rotateKey?-180:180;e.setData({rotateKey:t,isChanging:!0}),e.animate(".icon_change",[{rotate:0},{rotate:t}],400,(function(){e.clearAnimation(".icon_change",{rotate:!0})})),e.animate(".animationStartCity",[{opacity:1,translateX:0},{opacity:.2,translateX:150},{opacity:1,translateX:0}],400,(function(){e.clearAnimation(".animationStartCity",{opacity:!0,translateY:!0}),e.setData({isChanging:!1})})),e.animate(".animationEndCity",[{opacity:1,translateX:0},{opacity:.2,translateX:-150},{opacity:1,translateX:0}],400,(function(){console.log("动画完成 endCityName"),e.clearAnimation(".animationEndCity",{opacity:!0,translateY:!0})}))},handleClickHotLineBtn:function(e){console.log("e",e);if("tmm"==i.globalData.corp.ID){if(this.goOtherMPYYBS(e.detail.ticket_obj))return}else if(i.globalData.corpXcx.toOtherAppid)return void i.util.goOtherMiniApp(i.globalData.corpXcx.toOtherAppid);this.setData({select_obj:e.detail.ticket_obj}),this._goto_next_page(e.detail.ticket_obj)},handleClickHistoryBtn:function(e){console.log("e",e),this._goto_next_page(e.detail)},gotoMyMonthCard:function(){this.checkTel("/package/mon_card/pages/my_mon_card/my_mon_card",1,0)},geto_feedback:function(){wx.navigateTo({url:"/package/user_center/pages/feedback/feedback"})},makePhoneCallBtn:function(){i.util.isNull(i.globalData.corpXcx.indexTel)?i.util.showMsg("未设置号码"):i.util.makePhoneCall(i.globalData.corpXcx.indexTel)},codingBtn:function(){i.util.showMsg("开发中")},goto_coupon_list:function(){this.checkTel("/package/user_center/pages/coupon_list/coupon_list?hideSelect=true",1,0)},checkTel:function(e,t,i){var a=n(),l=o();console.log(a);var s=e;(t&&!a||i&&!l.serverHaveAvatar)&&(s="/package/pt_login/pages/pt_login2/pt_login2?returnUrl="+(e=encodeURIComponent(e))+"&isNeedTel="+t+"&isNeedAvatar="+i),wx.navigateTo({url:s})},getBannerNotice:function(){var a=this;return t(e().mark((function t(){var o,n,l,s,r,d,c;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a,n={action:"banner.indexInfo",subAppid:i.globalData.corp.appid},l="0",s=[],r=[],d={},c=null,wx.showNavigationBarLoading(),e.next=10,i.network.requestPOST(n).then((function(e){console.log("pro",e),e.success&&e.data&&(e.data.adunit&&(l=e.data.adunit.tplAdunitid),e.data.bannerList&&e.data.bannerList.length&&(s=e.data.bannerList),e.data.notice&&(r=e.data.notice.noticeList,e.data.notice.noticePopup&&o.data.enablePopupNotice&&(e.data.notice.noticePopup.title||e.data.notice.noticePopup.content)&&(d=e.data.notice.noticePopup,c="popupModel"),o.setData({noticeList:r,noticePopup:d,modalName:c})))})).catch((function(e){console.log(e)}));case 10:wx.hideNavigationBarLoading(),o.setData({tplAdunitid:l,bannerList:s,noticeList:r,noticePopup:d,modalName:c}),wx.setStorageSync(i.globalData.corp.appid+"_bannerList_index",s);case 13:case"end":return e.stop()}}),t)})))()},hideModal:function(){this.setData({modalName:null})},handleOnNoticeComLoad:function(e){console.log("handleOnNoticeComLoad",e),this.setData({noticeList:e.detail.noticeList,noticePopup:e.detail.noticePopup,modalName:e.detail.modalName})},clickNotice:function(e){this.selectComponent(".banner-notice")&&this.selectComponent(".banner-notice").clickNotice(e)},goWebViewLvyitong:function(){var e=encodeURIComponent("https://ycx.lvyitong.cn");wx.navigateTo({url:"/pages/webview/webview?web_url="+e})}},lifetimes:{attached:function(){var e=this.data.bannerBoxClass;["ycx","jbgk"].includes(i.globalData.corp.ID)&&(e="hide"),this.setData({bannerBoxClass:e})},ready:function(){try{var e=wx.getStorageSync(i.globalData.corp.appid+"_select_obj");e&&(i.util.isNull(e.beginCityName)&&(e.beginCityName="请选择"),i.util.isNull(e.endCityName)&&(e.endCityName="请选择"),this.setData({select_obj:e})),clearTimeout(i.globalData.timerTem)}catch(e){console.log(e)}var t=i.util.formatShortTime(new Date);this.setData({tripDate:t,rotate:"180-load"}),wx.setStorageSync("tripDate",t),this.getBannerNotice()},detached:function(){clearTimeout(i.globalData.timerTem)}}});
},{isPage:false,isComponent:true,currentFile:'pages/index/index43/index43.js'});require("pages/index/index43/index43.js");;__wxRoute = "pages/index/index5/index5";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/index5/index5.js";define("pages/index/index5/index5.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,t=require("../../../@babel/runtime/helpers/regeneratorRuntime"),i=require("../../../@babel/runtime/helpers/asyncToGenerator"),a=getApp(),n=require("../../../8A94E9619105A88CECF281668574FB65.js").handleToHKMOPage;Component({properties:{select_obj:{type:Object,observer:function(e,t,i){this._select_objChange(e,t,i)}},bannerBoxClass:{type:null,value:""},bannerClass:{type:null,value:""},bannerImageClass:{type:null,value:""},noticeClass:{type:null,value:"bg-white padding-lr-lg"},noticePopupDialogClass:{type:null,value:""},screenWidth:{type:null,value:750},firstBannerHeight:{type:null,value:253},mainClass:{type:null,value:"padding-lr-lg border-radius-4"},btnClass:{type:null,value:""},showCityTitle:{type:null,value:!0},showMyNotice:{type:null,value:!1},showHotLineTitleStyle:{type:null,value:"1"},hotLineCol:{type:Number,value:2},hotLineContainerClass:{type:null,value:""},hotLineBoxClass:{value:"margin-lr-xs",type:null},hotLineItemClass:{value:"border-radius-4 bg-default-white",type:null},selectCityNavBack:!1,bannerPosition:{value:"top",type:null}},data:{staticHost:a.config.staticHost,primary:a.globalData.corpXcx.primary,select_obj:{beginCity:"出发地",beginCityCode:"",beginCityName:"出发城市",beginDisCode:"",beginDisName:"",endCity:"到达地",endCityName:"到达城市",endCityCode:"",endDisName:"",endDisCode:""},tripDate:void 0,showDate:void 0,showDateWeek:"",showAddress:!1,rotate:0,isChanging:!1,rotateKey:180,showCharterCar:!1,lineDhList:[],queryIntervalType:a.globalData.corpXcx.queryIntervalType||0},methods:{_select_objChange:(e=i(t().mark((function e(i,n,o){var l,s,r,d;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=this,s=i,r=!1,console.log("index5");try{s&&(a.util.isNull(s.beginCityName)&&(s.beginCityName="出发城市"),a.util.isNull(s.endCityName)&&(s.endCityName="到达城市"),a.util.isNull(s.beginDivisionCityName)&&(s.beginDivisionCityName="出发城市"),a.util.isNull(s.endDivisionCityName)&&(s.endDivisionCityName="到达城市"),r=!a.util.isNull(s.beginCityCode)&&"0000"!==s.beginCityCode&&!a.util.isNull(s.endCityCode),l.setData({showAddress:r,select_obj:s}),d=wx.getStorageSync("tripDate"),a.util.isNotNull(d)&&l.setData({tripDate:d,showDate:a.util.formatDate(d),showDateWeek:a.util.getWeekName(d)}))}catch(e){console.log(e)}case 5:case"end":return e.stop()}}),e,this)}))),function(t,i,a){return e.apply(this,arguments)}),_selectBeginCity:function(e){var t=a.globalData.corpXcxExt.selectCityUrl+"?select=begin&emptyStartCityTitle=出发城市&emptyEndCityTitle=到达城市&selectCityNavBack="+this.data.selectCityNavBack;wx.navigateTo({url:t})},_selectEndCity:function(e){if(1==this.data.queryIntervalType||2==this.data.queryIntervalType){if(a.util.isNull(this.data.select_obj.beginDivisionCityCode))return void a.util.showMsg("请先选择出发城市！")}else if(a.util.isNull(this.data.select_obj.beginCityCode))return void a.util.showMsg("请先选择出发城市！");var t=this.data.select_obj;console.log(t),wx.setStorageSync(a.globalData.corp.appid+"_select_obj",t);var i=a.globalData.corpXcxExt.selectCityUrl+"?select=end&emptyStartCityTitle=出发城市&emptyEndCityTitle=到达城市&selectCityNavBack="+this.data.selectCityNavBack;wx.navigateTo({url:i})},_change:function(){var e=this;if(!e.data.isChanging){e.animation1(),clearTimeout(a.globalData.timerTem);var t=setTimeout((function(){e._do_change()}),200);a.globalData.timerTem=t}},_do_change:function(e){var t=this.data.select_obj.beginDisCode,i=this.data.select_obj.beginCityName,n=this.data.select_obj.beginCity,o=this.data.select_obj.beginCityCode,l=this.data.select_obj.beginDisName,s=this.data.select_obj.beginProvinceCode,r=this.data.select_obj.beginDivisionCityCode,d=this.data.select_obj.beginDivisionCityName,c=this.data.select_obj.beginAdDivisionName,u=this.data.select_obj.beginAdDivisionCode,g=this.data.select_obj.beginTownStreetCode,C=this.data.select_obj.startAreaId,b=this.data.select_obj.startAreaName,h={beginCityName:this.data.select_obj.endCityName,beginCity:this.data.select_obj.endCity,beginDisCode:this.data.select_obj.endDisCode,beginDisName:this.data.select_obj.endDisName,beginCityCode:this.data.select_obj.endCityCode,beginDivisionCityCode:this.data.select_obj.endDivisionCityCode,beginDivisionCityName:this.data.select_obj.endDivisionCityName,beginAdDivisionCode:this.data.select_obj.endAdDivisionCode,beginAdDivisionName:this.data.select_obj.endAdDivisionName,beginProvinceCode:this.data.select_obj.endProvinceCode,beginTownStreetCode:this.data.select_obj.endTownStreetCode,startAreaId:this.data.select_obj.endAreaId,startAreaName:this.data.select_obj.endAreaName,beginAddressCode:"",beginAddressName:"请选择上车站点",endCity:n,endCityName:i,endCityCode:o,endDivisionCityCode:r,endDivisionCityName:d,endAdDivisionName:c,endAdDivisionCode:u,endProvinceCode:s,endDisCode:t,endDisName:l,endTownStreetCode:g,endAreaId:C,endAreaName:b,endAddressCode:"",endAddressName:"请选择下车站点"};a.util.isNull(h.beginCityCode)&&(h.beginCityName="出发城市"),a.util.isNull(h.endCityCode)&&(h.endCityName="到达城市"),a.util.isNull(h.beginDivisionCityCode)&&(h.beginDivisionCityName="出发城市"),a.util.isNull(h.endDivisionCityCode)&&(h.endDivisionCityName="到达城市"),this.setData({select_obj:h}),wx.setStorageSync(a.globalData.corp.appid+"_select_obj",h),clearTimeout(a.globalData.timerTem)},animation1:function(){var e=this,t=180==e.data.rotateKey?-180:180;e.setData({rotateKey:t,isChanging:!0}),e.animate(".icon_change",[{rotate:0},{rotate:t}],400,(function(){e.clearAnimation(".icon_change",{rotate:!0})})),e.animate(".animationStartCity",[{opacity:1,translateX:0},{opacity:.2,translateX:150},{opacity:1,translateX:0}],400,(function(){e.clearAnimation(".animationStartCity",{opacity:!0,translateX:!0}),e.setData({isChanging:!1})})),e.animate(".animationEndCity",[{opacity:1,translateX:0},{opacity:.2,translateX:-150},{opacity:1,translateX:0}],400,(function(){console.log("动画完成 endCityName"),e.clearAnimation(".animationEndCity",{opacity:!0,translateX:!0})}))},_selectBeginAddress:function(e){wx.navigateTo({url:"/package/index2/pages/select_address/select_address?select=begin"})},_selectEndAddress:function(){wx.navigateTo({url:"/package/index2/pages/select_address/select_address?select=end"})},_selectDate:function(){if(a.globalData.corpXcx.toOtherAppid)a.util.goOtherMiniApp(a.globalData.corpXcx.toOtherAppid);else{var e="",t="";if(1==this.data.queryIntervalType||2==this.data.queryIntervalType){if(a.util.isNull(this.data.select_obj.beginDivisionCityCode))return void a.util.showMsg("请选择出发区域！");if(a.util.isNull(this.data.select_obj.endDivisionCityCode))return void a.util.showMsg("请选择到达区域！");e=this.data.select_obj.startAreaId,t=this.data.select_obj.endAreaId}else{var i=this.data.select_obj.beginCityCode,o=this.data.select_obj.endCityCode;if(a.util.isNull(i))return void a.util.showMsg("请选择出发城市！");if(a.util.isNull(o))return void a.util.showMsg("请选择到达城市！");var l=this.redirectPageBylineDh(i,o);if(!l)return;e=l.startAreaId||"",t=l.endAreaId||""}var s=wx.getStorageSync(a.globalData.corp.appid+"_select_obj");console.log(s),s.startAreaId=e,s.endAreaId=t;var r=Object.keys(s).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(s[e])})).join("&"),d="/package/index4/pages/select_date/select_date?tripDate="+this.data.tripDate+"&"+r,c=n({url:d,ticketObj:this.data.select_obj}).redirectUrl;wx.navigateTo({url:c})}},_btn_query:function(e){var t=this.data.select_obj.beginCityCode,i=this.data.select_obj.endCityCode,n="",o="";if(a.globalData.corpXcx.toOtherAppid)a.util.goOtherMiniApp(a.globalData.corpXcx.toOtherAppid);else{if(1==this.data.queryIntervalType||2==this.data.queryIntervalType){if(a.util.isNull(this.data.select_obj.beginDivisionCityCode))return void a.util.showMsg("请先选择出发区域！");if(a.util.isNull(this.data.select_obj.endDivisionCityCode))return void a.util.showMsg("请先选择到达区域！");n=this.data.select_obj.startAreaId,o=this.data.select_obj.endAreaId}else{if(a.util.isNull(t))return void a.util.showMsg("请选择出发城市！");if(a.util.isNull(i))return void a.util.showMsg("请选择到达城市！");var l=this.redirectPageBylineDh(t,i);if(!l)return;n=l.startAreaId||"",o=l.endAreaId||""}var s={tripDate:this.data.tripDate,beginCityName:this.data.select_obj.beginCityName||"",beginCityCode:t||"",beginDivisionCityName:this.data.select_obj.beginDivisionCityName||"",beginDivisionCityCode:this.data.select_obj.beginDivisionCityCode||"",beginAdDivisionName:this.data.select_obj.beginAdDivisionName||"",beginAdDivisionCode:this.data.select_obj.beginAdDivisionCode||"",beginProvinceCode:this.data.select_obj.beginProvinceCode||"",beginTownStreetCode:this.data.select_obj.beginTownStreetCode||"",startAreaName:this.data.select_obj.startAreaName||"",startAreaId:n||"",endCityCode:i||"",endCityName:this.data.select_obj.endCityName||"",endAdDivisionName:this.data.select_obj.endAdDivisionName||"",endAdDivisionCode:this.data.select_obj.endAdDivisionCode||"",endDivisionCityName:this.data.select_obj.endDivisionCityName||"",endDivisionCityCode:this.data.select_obj.endDivisionCityCode||"",endProvinceCode:this.data.select_obj.endProvinceCode||"",endTownStreetCode:this.data.select_obj.endTownStreetCode||"",endAreaName:this.data.select_obj.endAreaName||"",endAreaId:o||""};this._goto_next_page(s)}},handleClickHotLineBtn:function(e){a.globalData.corpXcx.toOtherAppid?a.util.goOtherMiniApp(a.globalData.corpXcx.toOtherAppid):this._goto_next_page(e.detail.ticket_obj)},handleOnNoticeComLoad:function(e){console.log("handleOnNoticeComLoad",e),this.setData({noticeList:e.detail.noticeList,noticePopup:e.detail.noticePopup,modalName:e.detail.modalName})},clickNotice:function(e){this.selectComponent(".banner-notice")&&this.selectComponent(".banner-notice").clickNotice(e)},handleClickHistoryBtn:function(e){if(console.log("e",e),a.util.isNull(e.detail.beginDivisionCityCode)||a.util.isNull(e.detail.endDivisionCityCode)){var t=e.detail.beginCityCode,i=e.detail.endCityCode,n=this.redirectPageBylineDh(t,i);if(!n)return;e.detail.startAreaId=n.startAreaId||"",e.detail.endAreaId=n.endAreaId||""}this._goto_next_page(e.detail)},_goto_next_page:function(e){e.corpid=a.globalData.corp.ID,wx.setStorageSync(a.globalData.corp.appid+"_ticket_obj",e);var t=!0,i=this.data.queryIntervalType;1!=i&&2!=i||!a.util.isNull(e.beginDivisionCityCode)&&!a.util.isNull(e.endDivisionCityCode)||(t=!1),t&&wx.setStorageSync(a.globalData.corp.appid+"_select_obj",e);var o="?"+a.util.enQueryString(e),l=a.config.pagesUrl.interval2_url;"interval2"===a.globalData.corp.interval?l=a.config.pagesUrl.interval2_url:"interval21"===a.globalData.corp.interval?l=a.config.pagesUrl.interval21_url:"interval22"===a.globalData.corp.interval?l=a.config.pagesUrl.interval22_url:"interval221"===a.globalData.corp.interval?l=a.config.pagesUrl.interval221_url:"interval23"===a.globalData.corp.interval?l=a.config.pagesUrl.interval23_url:"interval24"===a.globalData.corp.interval?l=a.config.pagesUrl.interval24_url:"interval3"===a.globalData.corp.interval?l=a.config.pagesUrl.interval3_url:"interval31"===a.globalData.corp.interval?l=a.config.pagesUrl.interval31_url:"interval"===a.globalData.corp.interval||"intervalSwc"===a.globalData.corp.interval?l="/package/index4/pages/select_address/select_address":"interval11"===a.globalData.corp.interval?l="/package/interval11/pages/selectAddress/selectAddress":"interval4"==a.globalData.corp.interval&&(l="/package/interval4/pages/interval4/interval4");var s=n({url:l+o,ticketObj:e}).redirectUrl;console.log(s),wx.navigateTo({url:s,fail:function(e){console.log("err",e)}}),t&&this.selectComponent(".index-search-history")&&this.selectComponent(".index-search-history").saveQueryCityHistory(e)},makePhoneCallBtn:function(e){a.util.makePhoneCall(e.currentTarget.dataset.tel)},goCharterCar:function(){wx.navigateTo({url:"/package/charterCar/pages/charterCarIndex/charterCarIndex"})},handleGetHotLine:function(e){var n=this;return i(t().mark((function e(){var i,o;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n,o={action:"line.lineDhList",account:a.globalData.corp.account,lineType:""},e.next=4,a.network.requestPOST(o).then((function(e){var t=[];e.success&&(t=e.data||[],i.setData({lineDhList:t}))})).catch((function(e){console.log("handleGetHotLine err",e)}));case 4:case"end":return e.stop()}}),e)})))()},redirectPageBylineDh:function(e,t){if(a.config.indexBtnJudgeHotLineCorpList.includes(a.globalData.corp.ID)){var i=this.data.lineDhList.find((function(i){return e==i.startCityId&&t==i.endCityId}));if(i){var n=i.otherAppid,o=i.pagePath,l=i.startAreaId,s=i.endAreaId;if(a.util.isNotNull(n)||a.util.isNotNull(o))return a.util.isNotNull(n)&&a.util.isNotNull(o)?a.util.goOtherMiniApp(n,o):a.util.isNotNull(o)?a.util.routerToPage(o):a.util.showMsg("常用线路参数有误，缺少页面路径"),!1;if(a.util.isNotNull(l)||a.util.isNotNull(s))return{startAreaId:l,endAreaId:s}}return{}}return{}}},lifetimes:{attached:function(){this.setData({showCharterCar:a.config.showCharterCarCorpList.includes(a.globalData.corp.ID)})},ready:function(){try{var e=wx.getStorageSync(a.globalData.corp.appid+"_select_obj");e&&(a.util.isNull(e.beginCityName)&&(e.beginCityName="出发城市"),a.util.isNull(e.endCityName)&&(e.endCityName="到达城市"),this.setData({showAddress:!0,select_obj:e,rotate:"180-load"})),clearTimeout(a.globalData.timerTem)}catch(e){console.log(e)}a.config.indexBtnJudgeHotLineCorpList.includes(a.globalData.corp.ID)&&this.handleGetHotLine();var t=a.util.formatShortTime(new Date);this.setData({tripDate:t,showDate:a.util.formatDate(t),showDateWeek:a.util.getWeekName(t)}),wx.setStorageSync("tripDate",t)},detached:function(){clearTimeout(a.globalData.timerTem)}}});
},{isPage:false,isComponent:true,currentFile:'pages/index/index5/index5.js'});require("pages/index/index5/index5.js");;__wxRoute = "pages/index/index51/index51";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/index51/index51.js";define("pages/index/index51/index51.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../@babel/runtime/helpers/Arrayincludes");var e,t=require("../../../@babel/runtime/helpers/regeneratorRuntime"),a=require("../../../@babel/runtime/helpers/asyncToGenerator"),i=require("../../../3BE296B59105A88C5D84FEB2CFF3FB65.js"),l=i.getUserInfoStorage,n=i.getTelStorage,o=getApp(),s=require("../../../8A94E9619105A88CECF281668574FB65.js").handleToHKMOPage;Component({properties:{select_obj:{type:Object,observer:function(e,t,a){this._select_objChange(e,t,a)}},bannerBoxClass:{type:null,value:""},bannerClass:{type:null,value:""},bannerImageClass:{type:null,value:""},noticeClass:{type:null,value:"bg-white padding-lr-lg"},noticePopupDialogClass:{type:null,value:""},screenWidth:{type:null,value:750},firstBannerHeight:{type:null,value:253},mainClass:{type:null,value:"padding-lr-lg border-radius-4"},btnClass:{type:null,value:""},showCityTitle:{type:null,value:!0},showMyNotice:{type:null,value:!1},showHotLineTitleStyle:{type:null,value:"1"},hotLineCol:{type:Number,value:2},hotLineContainerClass:{type:null,value:""},hotLineBoxClass:{value:"margin-lr-xs",type:null},hotLineItemClass:{value:"border-radius-4 bg-default-white",type:null},selectCityNavBack:!1,bannerPosition:{value:"top",type:null}},data:{staticHost:o.config.staticHost,primary:o.globalData.corpXcx.primary,CustomBar:o.globalData.systemInfo.CustomBar,select_obj:{beginCity:"出发地",beginCityCode:"",beginCityName:"出发城市",beginDisCode:"",beginDisName:"",endCity:"到达地",endCityName:"到达城市",endCityCode:"",endDisName:"",endDisCode:""},tripDate:void 0,showDate:void 0,showDateWeek:"",showAddress:!1,rotate:0,isChanging:!1,rotateKey:180,showCharterCar:!1,showBottomTabBox:!1},methods:{_select_objChange:(e=a(t().mark((function e(a,i,l){var n,s,r,c;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=this,s=a,r=!1,console.log("index5");try{s&&(o.util.isNull(s.beginCityName)&&(s.beginCityName="出发城市"),o.util.isNull(s.endCityName)&&(s.endCityName="到达城市"),r=!o.util.isNull(s.beginCityCode)&&"0000"!==s.beginCityCode&&!o.util.isNull(s.endCityCode),n.setData({showAddress:r,select_obj:s}),c=wx.getStorageSync("tripDate"),o.util.isNotNull(c)&&n.setData({tripDate:c,showDate:o.util.formatDate(c),showDateWeek:o.util.getWeekName(c)}))}catch(e){console.log(e)}case 5:case"end":return e.stop()}}),e,this)}))),function(t,a,i){return e.apply(this,arguments)}),_selectBeginCity:function(e){wx.navigateTo({url:o.globalData.corpXcxExt.selectCityUrl+"?select=begin&emptyStartCityTitle=出发城市&emptyEndCityTitle=到达城市&selectCityNavBack="+this.data.selectCityNavBack})},_selectEndCity:function(e){if(o.util.isNull(this.data.select_obj.beginCityCode))o.util.showMsg("请先选择出发城市！");else{var t=this.data.select_obj;console.log(t),wx.setStorageSync(o.globalData.corp.appid+"_select_obj",t),wx.navigateTo({url:o.globalData.corpXcxExt.selectCityUrl+"?select=end&emptyStartCityTitle=出发城市&emptyEndCityTitle=到达城市&selectCityNavBack="+this.data.selectCityNavBack})}},_change:function(){var e=this;if(!e.data.isChanging){e.animation1(),clearTimeout(o.globalData.timerTem);var t=setTimeout((function(){e._do_change()}),200);o.globalData.timerTem=t}},_do_change:function(e){var t=this.data.select_obj.beginDisCode,a=this.data.select_obj.beginCityName,i=this.data.select_obj.beginCity,l=this.data.select_obj.beginCityCode,n=this.data.select_obj.beginDisName,s={beginCityName:this.data.select_obj.endCityName,beginCity:this.data.select_obj.endCity,beginDisCode:this.data.select_obj.endDisCode,beginDisName:this.data.select_obj.endDisName,beginCityCode:this.data.select_obj.endCityCode,beginAddressCode:"",beginAddressName:"请选择上车站点",endCity:i,endCityName:a,endCityCode:l,endDisCode:t,endDisName:n,endAddressCode:"",endAddressName:"请选择下车站点"};o.util.isNull(s.beginCityCode)&&(s.beginCityName="出发城市"),o.util.isNull(s.endCityCode)&&(s.endCityName="到达城市"),this.setData({select_obj:s}),wx.setStorageSync(o.globalData.corp.appid+"_select_obj",s),clearTimeout(o.globalData.timerTem)},animation1:function(){var e=this,t=180==e.data.rotateKey?-180:180;e.setData({rotateKey:t,isChanging:!0}),e.animate(".icon_change",[{rotate:0},{rotate:t}],400,(function(){e.clearAnimation(".icon_change",{rotate:!0})})),e.animate(".animationStartCity",[{opacity:1,translateX:0},{opacity:.2,translateX:150},{opacity:1,translateX:0}],400,(function(){e.clearAnimation(".animationStartCity",{opacity:!0,translateX:!0}),e.setData({isChanging:!1})})),e.animate(".animationEndCity",[{opacity:1,translateX:0},{opacity:.2,translateX:-150},{opacity:1,translateX:0}],400,(function(){console.log("动画完成 endCityName"),e.clearAnimation(".animationEndCity",{opacity:!0,translateX:!0})}))},_selectBeginAddress:function(e){wx.navigateTo({url:"/package/index2/pages/select_address/select_address?select=begin"})},_selectEndAddress:function(){wx.navigateTo({url:"/package/index2/pages/select_address/select_address?select=end"})},_selectDate:function(){if(o.globalData.corpXcx.toOtherAppid)o.util.goOtherMiniApp(o.globalData.corpXcx.toOtherAppid);else if(o.util.isNull(this.data.select_obj.beginCityCode))o.util.showMsg("请选择出发城市！");else if(o.util.isNull(this.data.select_obj.endCityCode))o.util.showMsg("请选择到达城市！");else{var e=wx.getStorageSync(o.globalData.corp.appid+"_select_obj");console.log(e);var t=Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&"),a=s({url:"/package/index4/pages/select_date/select_date?tripDate="+this.data.tripDate+"&"+t,ticketObj:e}).redirectUrl;wx.navigateTo({url:a})}},_btn_query:function(e){if(o.globalData.corpXcx.toOtherAppid)o.util.goOtherMiniApp(o.globalData.corpXcx.toOtherAppid);else if(o.util.isNull(this.data.select_obj.beginCityCode))o.util.showMsg("请选择出发城市！");else if(o.util.isNull(this.data.select_obj.endCityCode))o.util.showMsg("请选择到达城市！");else{var t={tripDate:this.data.tripDate,beginCityName:this.data.select_obj.beginCityName,beginCityCode:this.data.select_obj.beginCityCode,endCityCode:this.data.select_obj.endCityCode,endCityName:this.data.select_obj.endCityName};this._goto_next_page(t)}},handleClickHotLineBtn:function(e){o.globalData.corpXcx.toOtherAppid?o.util.goOtherMiniApp(o.globalData.corpXcx.toOtherAppid):this._goto_next_page(e.detail.ticket_obj)},handleOnNoticeComLoad:function(e){console.log("handleOnNoticeComLoad",e),this.setData({noticeList:e.detail.noticeList,noticePopup:e.detail.noticePopup,modalName:e.detail.modalName})},clickNotice:function(e){this.selectComponent(".banner-notice")&&this.selectComponent(".banner-notice").clickNotice(e)},handleClickHistoryBtn:function(e){console.log("e",e),this._goto_next_page(e.detail)},_goto_next_page:function(e){e.corpid=o.globalData.corp.ID,wx.setStorageSync(o.globalData.corp.appid+"_ticket_obj",e),wx.setStorageSync(o.globalData.corp.appid+"_select_obj",e);var t="?"+o.util.enQueryString(e),a=o.config.pagesUrl.interval2_url;"interval2"===o.globalData.corp.interval?a=o.config.pagesUrl.interval2_url:"interval21"===o.globalData.corp.interval?a=o.config.pagesUrl.interval21_url:"interval22"===o.globalData.corp.interval?a=o.config.pagesUrl.interval22_url:"interval221"===o.globalData.corp.interval?a=o.config.pagesUrl.interval221_url:"interval23"===o.globalData.corp.interval?a=o.config.pagesUrl.interval23_url:"interval24"===o.globalData.corp.interval?a=o.config.pagesUrl.interval24_url:"interval3"===o.globalData.corp.interval?a=o.config.pagesUrl.interval3_url:"interval31"===o.globalData.corp.interval?a=o.config.pagesUrl.interval31_url:"interval"===o.globalData.corp.interval||"intervalSwc"===o.globalData.corp.interval?a="/package/index4/pages/select_address/select_address":"interval11"===o.globalData.corp.interval?a="/package/interval11/pages/selectAddress/selectAddress":"interval4"==o.globalData.corp.interval&&(a="/package/interval4/pages/interval4/interval4");var i=s({url:a+t,ticketObj:e}).redirectUrl;console.log(i),wx.navigateTo({url:i,fail:function(e){console.log("err",e)}}),this.selectComponent(".index-search-history")&&this.selectComponent(".index-search-history").saveQueryCityHistory(e)},makePhoneCallBtn:function(e){o.util.makePhoneCall(e.currentTarget.dataset.tel)},goCharterCar:function(){wx.navigateTo({url:"/package/charterCar/pages/charterCarIndex/charterCarIndex"})},checkTel:function(e,t,a){var i=n(),o=l();console.log(i);var s=e;(t&&!i||a&&!o.serverHaveAvatar)&&(s="/package/pt_login/pages/pt_login2/pt_login2?returnUrl="+(e=encodeURIComponent(e))+"&isNeedTel="+t+"&isNeedAvatar="+a),wx.navigateTo({url:s})},goto_coupon_list:function(){this.checkTel("/package/user_center/pages/coupon_list/coupon_list?hideSelect=true",1,0)},getoInvoice:function(){wx.navigateTo({url:"/package/user_center_preload/pages/invoiceIndex/invoiceIndex"})},onlineCustomer:function(){o.util.showMsg("在线客服功能开发中，敬请期待")},handleMakePhoneCall:function(e){o.util.makePhoneCallArray(o.globalData.corpXcx.indexTel,"电话预定")}},lifetimes:{attached:function(){var e=!1,t=this.data.bannerBoxClass,a="".concat(o.config.staticHost,"/web/xcx/images/index/indexBanner/default.png");["xylx"].includes(o.globalData.corp.ID)?(e=!0,a="".concat(o.config.staticHost,"/web/xcx/images/index/indexBanner/").concat(o.globalData.corp.ID,".png")):["jcx","jtcx","dzcx"].includes(o.globalData.corp.ID)?a="".concat(o.config.staticHost,"/web/xcx/images/index/indexBanner/").concat(o.globalData.corp.ID,".png"):["ycx","jbgk"].includes(o.globalData.corp.ID)&&(t="hide"),this.setData({showCharterCar:o.config.showCharterCarCorpList.includes(o.globalData.corp.ID),showBottomTabBox:e,indexBgSrc:a,bannerBoxClass:t})},ready:function(){try{var e=wx.getStorageSync(o.globalData.corp.appid+"_select_obj");e&&(o.util.isNull(e.beginCityName)&&(e.beginCityName="出发城市"),o.util.isNull(e.endCityName)&&(e.endCityName="到达城市"),this.setData({showAddress:!0,select_obj:e,rotate:"180-load"})),clearTimeout(o.globalData.timerTem)}catch(e){console.log(e)}var t=o.util.formatShortTime(new Date);this.setData({tripDate:t,showDate:o.util.formatDate(t),showDateWeek:o.util.getWeekName(t)}),wx.setStorageSync("tripDate",t)},detached:function(){clearTimeout(o.globalData.timerTem)}}});
},{isPage:false,isComponent:true,currentFile:'pages/index/index51/index51.js'});require("pages/index/index51/index51.js");;__wxRoute = "pages/index/index512/index512";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/index512/index512.js";define("pages/index/index512/index512.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../@babel/runtime/helpers/Arrayincludes");var e,t=require("../../../@babel/runtime/helpers/regeneratorRuntime"),a=require("../../../@babel/runtime/helpers/asyncToGenerator"),i=require("../../../3BE296B59105A88C5D84FEB2CFF3FB65.js"),l=i.getUserInfoStorage,o=i.getTelStorage,n=getApp(),s=require("../../../8A94E9619105A88CECF281668574FB65.js").handleToHKMOPage;Component({properties:{select_obj:{type:Object,observer:function(e,t,a){this._select_objChange(e,t,a)}},bannerBoxClass:{type:null,value:""},bannerClass:{type:null,value:""},bannerImageClass:{type:null,value:""},noticeClass:{type:null,value:"bg-white padding-lr-lg"},noticePopupDialogClass:{type:null,value:""},screenWidth:{type:null,value:750},firstBannerHeight:{type:null,value:253},mainClass:{type:null,value:"padding-lr-lg border-radius-4"},btnClass:{type:null,value:""},showCityTitle:{type:null,value:!0},showMyNotice:{type:null,value:!1},showHotLineTitleStyle:{type:null,value:"1"},hotLineCol:{type:Number,value:2},hotLineContainerClass:{type:null,value:""},hotLineBoxClass:{value:"margin-lr-xs",type:null},hotLineItemClass:{value:"border-radius-4 bg-default-white",type:null},selectCityNavBack:!1,bannerPosition:{value:"top",type:null}},data:{staticHost:n.config.staticHost,primary:n.globalData.corpXcx.primary,CustomBar:n.globalData.systemInfo.CustomBar,select_obj:{beginCity:"出发地",beginCityCode:"",beginCityName:"出发城市",beginDisCode:"",beginDisName:"",endCity:"到达地",endCityName:"到达城市",endCityCode:"",endDisName:"",endDisCode:""},tripDate:void 0,showDate:void 0,showDateWeek:"",showAddress:!1,rotate:0,isChanging:!1,rotateKey:180,showCharterCar:!1,showBottomTabBox:!1},methods:{_select_objChange:(e=a(t().mark((function e(a,i,l){var o,s,r,c;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=this,s=a,r=!1,console.log("index5");try{s&&(n.util.isNull(s.beginCityName)&&(s.beginCityName="出发城市"),n.util.isNull(s.endCityName)&&(s.endCityName="到达城市"),r=!n.util.isNull(s.beginCityCode)&&"0000"!==s.beginCityCode&&!n.util.isNull(s.endCityCode),o.setData({showAddress:r,select_obj:s}),c=wx.getStorageSync("tripDate"),n.util.isNotNull(c)&&o.setData({tripDate:c,showDate:n.util.formatDate(c),showDateWeek:n.util.getWeekName(c)}))}catch(e){console.log(e)}case 5:case"end":return e.stop()}}),e,this)}))),function(t,a,i){return e.apply(this,arguments)}),_selectBeginCity:function(e){wx.navigateTo({url:n.globalData.corpXcxExt.selectCityUrl+"?select=begin&emptyStartCityTitle=出发城市&emptyEndCityTitle=到达城市&selectCityNavBack="+this.data.selectCityNavBack})},_selectEndCity:function(e){if(n.util.isNull(this.data.select_obj.beginCityCode))n.util.showMsg("请先选择出发城市！");else{var t=this.data.select_obj;console.log(t),wx.setStorageSync(n.globalData.corp.appid+"_select_obj",t),wx.navigateTo({url:n.globalData.corpXcxExt.selectCityUrl+"?select=end&emptyStartCityTitle=出发城市&emptyEndCityTitle=到达城市&selectCityNavBack="+this.data.selectCityNavBack})}},_change:function(){var e=this;if(!e.data.isChanging){e.animation1(),clearTimeout(n.globalData.timerTem);var t=setTimeout((function(){e._do_change()}),200);n.globalData.timerTem=t}},_do_change:function(e){var t=this.data.select_obj.beginDisCode,a=this.data.select_obj.beginCityName,i=this.data.select_obj.beginCity,l=this.data.select_obj.beginCityCode,o=this.data.select_obj.beginDisName,s={beginCityName:this.data.select_obj.endCityName,beginCity:this.data.select_obj.endCity,beginDisCode:this.data.select_obj.endDisCode,beginDisName:this.data.select_obj.endDisName,beginCityCode:this.data.select_obj.endCityCode,beginAddressCode:"",beginAddressName:"请选择上车站点",endCity:i,endCityName:a,endCityCode:l,endDisCode:t,endDisName:o,endAddressCode:"",endAddressName:"请选择下车站点"};n.util.isNull(s.beginCityCode)&&(s.beginCityName="出发城市"),n.util.isNull(s.endCityCode)&&(s.endCityName="到达城市"),this.setData({select_obj:s}),wx.setStorageSync(n.globalData.corp.appid+"_select_obj",s),clearTimeout(n.globalData.timerTem)},animation1:function(){var e=this,t=180==e.data.rotateKey?-180:180;e.setData({rotateKey:t,isChanging:!0}),e.animate(".icon_change",[{rotate:0},{rotate:t}],400,(function(){e.clearAnimation(".icon_change",{rotate:!0})})),e.animate(".animationStartCity",[{opacity:1,translateX:0},{opacity:.2,translateX:150},{opacity:1,translateX:0}],400,(function(){e.clearAnimation(".animationStartCity",{opacity:!0,translateX:!0}),e.setData({isChanging:!1})})),e.animate(".animationEndCity",[{opacity:1,translateX:0},{opacity:.2,translateX:-150},{opacity:1,translateX:0}],400,(function(){console.log("动画完成 endCityName"),e.clearAnimation(".animationEndCity",{opacity:!0,translateX:!0})}))},_selectBeginAddress:function(e){wx.navigateTo({url:"/package/index2/pages/select_address/select_address?select=begin"})},_selectEndAddress:function(){wx.navigateTo({url:"/package/index2/pages/select_address/select_address?select=end"})},_selectDate:function(){if(n.globalData.corpXcx.toOtherAppid)n.util.goOtherMiniApp(n.globalData.corpXcx.toOtherAppid);else if(n.util.isNull(this.data.select_obj.beginCityCode))n.util.showMsg("请选择出发城市！");else if(n.util.isNull(this.data.select_obj.endCityCode))n.util.showMsg("请选择到达城市！");else{var e=wx.getStorageSync(n.globalData.corp.appid+"_select_obj");console.log(e);var t=Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&"),a=s({url:"/package/index4/pages/select_date/select_date?tripDate="+this.data.tripDate+"&"+t,ticketObj:e}).redirectUrl;wx.navigateTo({url:a})}},_btn_query:function(e){if(n.globalData.corpXcx.toOtherAppid)n.util.goOtherMiniApp(n.globalData.corpXcx.toOtherAppid);else if(n.util.isNull(this.data.select_obj.beginCityCode))n.util.showMsg("请选择出发城市！");else if(n.util.isNull(this.data.select_obj.endCityCode))n.util.showMsg("请选择到达城市！");else{var t={tripDate:this.data.tripDate,beginCityName:this.data.select_obj.beginCityName,beginCityCode:this.data.select_obj.beginCityCode,endCityCode:this.data.select_obj.endCityCode,endCityName:this.data.select_obj.endCityName};this._goto_next_page(t)}},handleClickHotLineBtn:function(e){n.globalData.corpXcx.toOtherAppid?n.util.goOtherMiniApp(n.globalData.corpXcx.toOtherAppid):this._goto_next_page(e.detail.ticket_obj)},handleOnNoticeComLoad:function(e){console.log("handleOnNoticeComLoad",e),this.setData({noticeList:e.detail.noticeList,noticePopup:e.detail.noticePopup,modalName:e.detail.modalName})},clickNotice:function(e){this.selectComponent(".banner-notice")&&this.selectComponent(".banner-notice").clickNotice(e)},handleClickHistoryBtn:function(e){console.log("e",e),this._goto_next_page(e.detail)},_goto_next_page:function(e){e.corpid=n.globalData.corp.ID,wx.setStorageSync(n.globalData.corp.appid+"_ticket_obj",e),wx.setStorageSync(n.globalData.corp.appid+"_select_obj",e);var t="?"+n.util.enQueryString(e),a=n.config.pagesUrl.interval2_url;"interval2"===n.globalData.corp.interval?a=n.config.pagesUrl.interval2_url:"interval21"===n.globalData.corp.interval?a=n.config.pagesUrl.interval21_url:"interval22"===n.globalData.corp.interval?a=n.config.pagesUrl.interval22_url:"interval221"===n.globalData.corp.interval?a=n.config.pagesUrl.interval221_url:"interval23"===n.globalData.corp.interval?a=n.config.pagesUrl.interval23_url:"interval24"===n.globalData.corp.interval?a=n.config.pagesUrl.interval24_url:"interval3"===n.globalData.corp.interval?a=n.config.pagesUrl.interval3_url:"interval31"===n.globalData.corp.interval?a=n.config.pagesUrl.interval31_url:"interval"===n.globalData.corp.interval||"intervalSwc"===n.globalData.corp.interval?a="/package/index4/pages/select_address/select_address":"interval11"===n.globalData.corp.interval?a="/package/interval11/pages/selectAddress/selectAddress":"interval4"==n.globalData.corp.interval&&(a="/package/interval4/pages/interval4/interval4");var i=s({url:a+t,ticketObj:e}).redirectUrl;console.log(a+t),wx.navigateTo({url:i,fail:function(e){console.log("err",e)}}),this.selectComponent(".index-search-history")&&this.selectComponent(".index-search-history").saveQueryCityHistory(e)},makePhoneCallBtn:function(e){n.util.makePhoneCall(e.currentTarget.dataset.tel)},goCharterCar:function(){wx.navigateTo({url:"/package/charterCar/pages/charterCarIndex/charterCarIndex"})},checkTel:function(e,t,a){var i=o(),n=l();console.log(i);var s=e;(t&&!i||a&&!n.serverHaveAvatar)&&(s="/package/pt_login/pages/pt_login2/pt_login2?returnUrl="+(e=encodeURIComponent(e))+"&isNeedTel="+t+"&isNeedAvatar="+a),wx.navigateTo({url:s})},goto_coupon_list:function(){this.checkTel("/package/user_center/pages/coupon_list/coupon_list?hideSelect=true",1,0)},getoInvoice:function(){wx.navigateTo({url:"/package/user_center_preload/pages/invoiceIndex/invoiceIndex"})},onlineCustomer:function(){n.util.showMsg("在线客服功能开发中，敬请期待")},handleMakePhoneCall:function(e){n.util.makePhoneCallArray(n.globalData.corpXcx.indexTel,"电话预定")}},lifetimes:{attached:function(){var e=!1,t="".concat(n.config.staticHost,"/web/xcx/images/index/indexBanner/default.png");["xylx"].includes(n.globalData.corp.ID)&&(e=!0,t="".concat(n.config.staticHost,"/web/xcx/images/index/indexBanner/").concat(n.globalData.corp.ID,".png")),this.setData({showCharterCar:n.config.showCharterCarCorpList.includes(n.globalData.corp.ID),showBottomTabBox:e,indexBgSrc:t})},ready:function(){try{var e=wx.getStorageSync(n.globalData.corp.appid+"_select_obj");e&&(n.util.isNull(e.beginCityName)&&(e.beginCityName="出发城市"),n.util.isNull(e.endCityName)&&(e.endCityName="到达城市"),this.setData({showAddress:!0,select_obj:e,rotate:"180-load"})),clearTimeout(n.globalData.timerTem)}catch(e){console.log(e)}var t=n.util.formatShortTime(new Date);this.setData({tripDate:t,showDate:n.util.formatDate(t),showDateWeek:n.util.getWeekName(t)}),wx.setStorageSync("tripDate",t)},detached:function(){clearTimeout(n.globalData.timerTem)}}});
},{isPage:false,isComponent:true,currentFile:'pages/index/index512/index512.js'});require("pages/index/index512/index512.js");;__wxRoute = "pages/index/index52/index52";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/index52/index52.js";define("pages/index/index52/index52.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../@babel/runtime/helpers/Arrayincludes");var e=getApp();Component({properties:{select_obj:{type:Object,observer:function(e,t,a){this._select_objChange(e,t,a)}},bannerBoxClass:{type:null,value:""},bannerClass:{type:null,value:""},bannerImageClass:{type:null,value:""},noticeClass:{type:null,value:"bg-white padding-lr-lg"},noticePopupDialogClass:{type:null,value:""},screenWidth:{type:null,value:750},firstBannerHeight:{type:null,value:253},mainClass:{type:null,value:"padding-lr-lg border-radius-4"},btnClass:{type:null,value:""},showCityTitle:{type:null,value:!0},showMyNotice:{type:null,value:!1},showHotLineTitleStyle:{type:null,value:"1"},hotLineCol:{type:Number,value:2},hotLineContainerClass:{type:null,value:""},hotLineBoxClass:{value:"margin-lr-xs",type:null},hotLineItemClass:{value:"border-radius-4 bg-default-white",type:null},bannerPosition:{value:"top",type:null}},data:{staticHost:e.config.staticHost,primary:e.globalData.corpXcx.primary,CustomBar:e.globalData.systemInfo.CustomBar,noticeList:[],select_obj:{beginCity:"出发地",beginCityCode:"",beginCityName:"出发地",beginDisCode:"",beginDisName:"",endCity:"目的地",endCityName:"请选择",endCityCode:"",endDisName:"",endDisCode:""},tripDate:void 0,showDate:void 0,showDateWeek:"",rotate:0,isChanging:!1,rotateKey:180,hotLineCol:2,showCharterCar:!1,animationDuration:"15s",hotLineType:e.globalData.corpXcx.hotLineType||1},methods:{_select_objChange:function(t,a,i){var l=t;console.log("index52");try{if(l){e.util.isNull(l.beginCityName)&&(l.beginCityName="出发地"),e.util.isNull(l.endCityName)&&(l.endCityName="目的地"),this.setData({select_obj:l});var o=wx.getStorageSync("tripDate");e.util.isNotNull(o)&&this.setData({tripDate:o,showDate:e.util.formatDate(o),showDateWeek:e.util.getWeekName(o)})}}catch(e){console.log(e)}},_selectBeginCity:function(t){wx.navigateTo({url:e.globalData.corpXcxExt.selectCityUrl+"?select=begin&emptyStartCityTitle=出发城市&emptyEndCityTitle=到达城市&emptyEndCityHolder=请输入地址匹配出行路线"})},_selectEndCity:function(t){if(e.util.isNull(this.data.select_obj.beginCityCode))e.util.showMsg("请先输入出发地！");else{var a=this.data.select_obj;console.log(a),wx.setStorageSync(e.globalData.corp.appid+"_select_obj",a),wx.navigateTo({url:e.globalData.corpXcxExt.selectCityUrl+"?select=end&emptyStartCityTitle=出发城市&emptyEndCityTitle=到达城市"})}},_change:function(){var t=this;if(!t.data.isChanging){t.animation1(),clearTimeout(e.globalData.timerTem);var a=setTimeout((function(){t._do_change()}),200);e.globalData.timerTem=a}},_do_change:function(t){var a=this.data.select_obj.beginDisCode,i=this.data.select_obj.beginCityName,l=this.data.select_obj.beginCity,o=this.data.select_obj.beginCityCode,n=this.data.select_obj.beginDisName,s={beginCityName:this.data.select_obj.endCityName,beginCity:this.data.select_obj.endCity,beginDisCode:this.data.select_obj.endDisCode,beginDisName:this.data.select_obj.endDisName,beginCityCode:this.data.select_obj.endCityCode,beginAddressCode:"",beginAddressName:"请选择上车站点",endCity:l,endCityName:i,endCityCode:o,endDisCode:a,endDisName:n,endAddressCode:"",endAddressName:"请选择下车站点"};e.util.isNull(s.beginCityCode)&&(s.beginCityName="请输入地址匹配出行路线"),e.util.isNull(s.endCityCode)&&(s.endCityName="请输入地址匹配出行路线"),this.setData({select_obj:s}),wx.setStorageSync(e.globalData.corp.appid+"_select_obj",s),clearTimeout(e.globalData.timerTem)},animation1:function(){var e=this,t=180==e.data.rotateKey?-180:180;e.setData({rotateKey:t,isChanging:!0}),e.animate(".icon_change",[{rotate:0},{rotate:t}],400,(function(){e.clearAnimation(".icon_change",{rotate:!0})})),e.animate(".animationStartCity",[{opacity:1,translateY:0},{opacity:0,translateY:27},{opacity:1,translateY:0}],400,(function(){e.clearAnimation(".animationStartCity",{opacity:!0,translateX:!0}),e.setData({isChanging:!1})})),e.animate(".animationEndCity",[{opacity:1,translateY:0},{opacity:0,translateY:-27},{opacity:1,translateY:0}],400,(function(){console.log("动画完成 endCityName"),e.clearAnimation(".animationEndCity",{opacity:!0,translateX:!0})}))},_selectBeginAddress:function(e){wx.navigateTo({url:"/package/index2/pages/select_address/select_address?select=begin"})},_selectEndAddress:function(){wx.navigateTo({url:"/package/index2/pages/select_address/select_address?select=end"})},_selectDate:function(){if(e.globalData.corpXcx.toOtherAppid)e.util.goOtherMiniApp(e.globalData.corpXcx.toOtherAppid);else if(e.util.isNull(this.data.select_obj.beginCityCode))e.util.showMsg("请输入出发地！");else if(e.util.isNull(this.data.select_obj.endCityCode))e.util.showMsg("请输入目的地！");else{var t=wx.getStorageSync(e.globalData.corp.appid+"_select_obj");console.log(t);var a=Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&");wx.navigateTo({url:"/package/index4/pages/select_date/select_date?tripDate="+this.data.tripDate+"&"+a})}},_btn_query:function(t){if(e.globalData.corpXcx.toOtherAppid)e.util.goOtherMiniApp(e.globalData.corpXcx.toOtherAppid);else if(e.util.isNull(this.data.select_obj.beginCityCode))e.util.showMsg("请输入出发地！");else if(e.util.isNull(this.data.select_obj.endCityCode))e.util.showMsg("请输入目的地！");else{var a={tripDate:this.data.tripDate,beginCityName:this.data.select_obj.beginCityName,beginCityCode:this.data.select_obj.beginCityCode,endCityCode:this.data.select_obj.endCityCode,endCityName:this.data.select_obj.endCityName};this._goto_next_page(a)}},handleClickHotLineBtn:function(t){e.globalData.corpXcx.toOtherAppid?e.util.goOtherMiniApp(e.globalData.corpXcx.toOtherAppid):this._goto_next_page(t.detail.ticket_obj)},calculateAndSetAnimationDuration:function(){var e=this,t=wx.createSelectorQuery().in(this);t.select("#scrollText").boundingClientRect(),t.exec((function(t){if(t&&t[0]){var a=t[0],i=Math.round(a.width+280),l=Math.round(20*i/1e3);e.setData({animationDuration:"".concat(l,"s")})}}))},handleOnNoticeComLoad:function(t){console.log("handleOnNoticeComLoad",t),this.setData({noticeList:t.detail.noticeList}),e.util.isNotNull(this.data.noticeList)&&this.calculateAndSetAnimationDuration()},clickNotice:function(e){this.selectComponent(".banner-notice")&&this.selectComponent(".banner-notice").clickNotice(e)},handleClickHistoryBtn:function(e){console.log("e",e),this._goto_next_page(e.detail)},_goto_next_page:function(t){t.corpid=e.globalData.corp.ID,wx.setStorageSync(e.globalData.corp.appid+"_ticket_obj",t),wx.setStorageSync(e.globalData.corp.appid+"_select_obj",t);var a="?"+e.util.enQueryString(t),i=e.config.pagesUrl.interval2_url;"interval2"===e.globalData.corp.interval?i=e.config.pagesUrl.interval2_url:"interval21"===e.globalData.corp.interval?i=e.config.pagesUrl.interval21_url:"interval23"===e.globalData.corp.interval?i=e.config.pagesUrl.interval23_url:"interval24"===e.globalData.corp.interval?i=e.config.pagesUrl.interval24_url:"interval3"===e.globalData.corp.interval?i=e.config.pagesUrl.interval3_url:"interval31"===e.globalData.corp.interval?i=e.config.pagesUrl.interval31_url:"interval"===e.globalData.corp.interval||"intervalSwc"===e.globalData.corp.interval?i="/package/index4/pages/select_address/select_address":"interval11"===e.globalData.corp.interval?i="/package/interval11/pages/selectAddress/selectAddress":"interval4"==e.globalData.corp.interval&&(i="/package/interval4/pages/interval4/interval4"),console.log(i+a),wx.navigateTo({url:i+a,fail:function(e){console.log("err",e)}}),this.selectComponent(".index-search-history")&&this.selectComponent(".index-search-history").saveQueryCityHistory(t)},makePhoneCallBtn:function(t){e.util.makePhoneCall(t.currentTarget.dataset.tel)},goCharterCar:function(){wx.navigateTo({url:"/package/charterCar/pages/charterCarIndex/charterCarIndex"})}},lifetimes:{attached:function(){this.setData({showCharterCar:e.config.showCharterCarCorpList.includes(e.globalData.corp.ID),isFirstLoad:!0})},ready:function(){try{var t=wx.getStorageSync(e.globalData.corp.appid+"_select_obj")||{};["yybus","yybustest"].includes(e.globalData.corp.ID)&&(t.beginCityCode="",t.beginCityName="请输入地址匹配出行路线",t.endCityCode="",t.endCityName="请输入地址匹配出行路线"),this.setData({select_obj:t})}catch(e){console.log(e)}var a=this.data.hotLineCol;"xc"==e.globalData.corp.ID&&(a=1);var i=e.util.formatShortTime(new Date);this.setData({tripDate:i,showDate:e.util.formatDate(i),showDateWeek:e.util.getWeekName(i),hotLineCol:a,rotate:"180-load"}),clearTimeout(e.globalData.timerTem),wx.setStorageSync("tripDate",i)},detached:function(){clearTimeout(e.globalData.timerTem)}}});
},{isPage:false,isComponent:true,currentFile:'pages/index/index52/index52.js'});require("pages/index/index52/index52.js");;__wxRoute = "pages/index/index53/index53";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/index53/index53.js";define("pages/index/index53/index53.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../@babel/runtime/helpers/Arrayincludes");var e,t=require("../../../@babel/runtime/helpers/regeneratorRuntime"),i=require("../../../@babel/runtime/helpers/asyncToGenerator"),a=getApp(),n=require("../../../8A94E9619105A88CECF281668574FB65.js").handleToHKMOPage;Component({properties:{select_obj:{type:Object,observer:function(e,t,i){this._select_objChange(e,t,i)}},bannerBoxClass:{type:null,value:""},bannerClass:{type:null,value:""},bannerImageClass:{type:null,value:""},noticeClass:{type:null,value:"bg-white padding-lr-lg"},noticePopupDialogClass:{type:null,value:""},screenWidth:{type:null,value:750},firstBannerHeight:{type:null,value:253},mainClass:{type:null,value:"padding-lr-lg border-radius-4"},btnClass:{type:null,value:""},showCityTitle:{type:null,value:!0},showMyNotice:{type:null,value:!1},showHotLineTitleStyle:{type:null,value:"1"},hotLineCol:{type:Number,value:2},hotLineContainerClass:{type:null,value:""},hotLineBoxClass:{value:"margin-lr-xs",type:null},hotLineItemClass:{value:"border-radius-4 bg-default-white",type:null},selectCityNavBack:!1,bannerPosition:{value:"top",type:null}},data:{staticHost:a.config.staticHost,primary:a.globalData.corpXcx.primary,select_obj:{beginCity:"出发地",beginCityCode:"",beginCityName:"出发城市",beginDisCode:"",beginDisName:"",endCity:"到达地",endCityName:"到达城市",endCityCode:"",endDisName:"",endDisCode:""},tripDate:void 0,showDate:void 0,showDateWeek:"",showAddress:!1,rotate:90,isChanging:!1,rotateKey:270,hotLineCol:2,showCharterCar:!1,lineDhList:[],queryIntervalType:a.globalData.corpXcx.queryIntervalType||0},methods:{_select_objChange:(e=i(t().mark((function e(i,n,o){var l,s,r,d;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=this,s=i,r=!1,console.log("index5");try{s&&(a.util.isNull(s.beginCityName)&&(s.beginCityName="出发城市"),a.util.isNull(s.endCityName)&&(s.endCityName="到达城市"),a.util.isNull(s.beginDivisionCityName)&&(s.beginDivisionCityName="出发城市"),a.util.isNull(s.endDivisionCityName)&&(s.endDivisionCityName="到达城市"),r=!a.util.isNull(s.beginCityCode)&&"0000"!==s.beginCityCode&&!a.util.isNull(s.endCityCode),l.setData({showAddress:r,select_obj:s}),d=wx.getStorageSync("tripDate"),a.util.isNotNull(d)&&l.setData({tripDate:d,showDate:a.util.formatDate(d),showDateWeek:a.util.getWeekName(d)}))}catch(e){console.log(e)}case 5:case"end":return e.stop()}}),e,this)}))),function(t,i,a){return e.apply(this,arguments)}),_selectBeginCity:function(e){var t=a.globalData.corpXcxExt.selectCityUrl+"?select=begin&emptyStartCityTitle=出发城市&emptyEndCityTitle=到达城市&selectCityNavBack="+this.data.selectCityNavBack;wx.navigateTo({url:t})},_selectEndCity:function(e){if(1==this.data.queryIntervalType||2==this.data.queryIntervalType){if(a.util.isNull(this.data.select_obj.beginDivisionCityCode))return void a.util.showMsg("请先选择出发城市！")}else if(a.util.isNull(this.data.select_obj.beginCityCode))return void a.util.showMsg("请先选择出发城市！");var t=this.data.select_obj;console.log(t),wx.setStorageSync(a.globalData.corp.appid+"_select_obj",t);var i=a.globalData.corpXcxExt.selectCityUrl+"?select=end&emptyStartCityTitle=出发城市&emptyEndCityTitle=到达城市&selectCityNavBack="+this.data.selectCityNavBack;wx.navigateTo({url:i})},_change:function(){var e=this;if(!e.data.isChanging){e.animation1(),clearTimeout(a.globalData.timerTem);var t=setTimeout((function(){e._do_change()}),200);a.globalData.timerTem=t}},_do_change:function(e){var t=this.data.select_obj.beginDisCode,i=this.data.select_obj.beginCityName,n=this.data.select_obj.beginCity,o=this.data.select_obj.beginCityCode,l=this.data.select_obj.beginDisName,s=this.data.select_obj.beginProvinceCode,r=this.data.select_obj.beginDivisionCityCode,d=this.data.select_obj.beginDivisionCityName,c=this.data.select_obj.beginAdDivisionName,u=this.data.select_obj.beginAdDivisionCode,g=this.data.select_obj.beginTownStreetCode,C=this.data.select_obj.startAreaId,b=this.data.select_obj.startAreaName,h={beginCityName:this.data.select_obj.endCityName,beginCity:this.data.select_obj.endCity,beginDisCode:this.data.select_obj.endDisCode,beginDisName:this.data.select_obj.endDisName,beginCityCode:this.data.select_obj.endCityCode,beginDivisionCityCode:this.data.select_obj.endDivisionCityCode,beginDivisionCityName:this.data.select_obj.endDivisionCityName,beginAdDivisionCode:this.data.select_obj.endAdDivisionCode,beginAdDivisionName:this.data.select_obj.endAdDivisionName,beginProvinceCode:this.data.select_obj.endProvinceCode,beginTownStreetCode:this.data.select_obj.endTownStreetCode,startAreaId:this.data.select_obj.endAreaId,startAreaName:this.data.select_obj.endAreaName,beginAddressCode:"",beginAddressName:"请选择上车站点",endCity:n,endCityName:i,endCityCode:o,endDivisionCityCode:r,endDivisionCityName:d,endAdDivisionName:c,endAdDivisionCode:u,endProvinceCode:s,endDisCode:t,endDisName:l,endTownStreetCode:g,endAreaId:C,endAreaName:b,endAddressCode:"",endAddressName:"请选择下车站点"};a.util.isNull(h.beginCityCode)&&(h.beginCityName="出发城市"),a.util.isNull(h.endCityCode)&&(h.endCityName="到达城市"),a.util.isNull(h.beginDivisionCityCode)&&(h.beginDivisionCityName="出发城市"),a.util.isNull(h.endDivisionCityCode)&&(h.endDivisionCityName="到达城市"),this.setData({select_obj:h}),wx.setStorageSync(a.globalData.corp.appid+"_select_obj",h),clearTimeout(a.globalData.timerTem)},animation1:function(){var e=this,t=270==e.data.rotateKey?-90:270;e.setData({rotateKey:t,isChanging:!0}),e.animate(".icon_change",[{rotate:90},{rotate:t}],400,(function(){e.clearAnimation(".icon_change",{rotate:!0})})),e.animate(".animationStartCity",[{opacity:1,translateX:0},{opacity:0,translateY:27},{opacity:1,translateY:0}],400,(function(){e.clearAnimation(".animationStartCity",{opacity:!0,translateY:!0}),e.setData({isChanging:!1})})),e.animate(".animationEndCity",[{opacity:1,translateY:0},{opacity:0,translateY:-27},{opacity:1,translateY:0}],400,(function(){console.log("动画完成 endCityName"),e.clearAnimation(".animationEndCity",{opacity:!0,translateY:!0})}))},_selectBeginAddress:function(e){wx.navigateTo({url:"/package/index2/pages/select_address/select_address?select=begin"})},_selectEndAddress:function(){wx.navigateTo({url:"/package/index2/pages/select_address/select_address?select=end"})},_selectDate:function(){if(a.globalData.corpXcx.toOtherAppid)a.util.goOtherMiniApp(a.globalData.corpXcx.toOtherAppid);else{var e="",t="";if(1==this.data.queryIntervalType||2==this.data.queryIntervalType){if(a.util.isNull(this.data.select_obj.beginDivisionCityCode))return void a.util.showMsg("请选择出发城市！");if(a.util.isNull(this.data.select_obj.endDivisionCityCode))return void a.util.showMsg("请选择到达城市！");e=this.data.select_obj.startAreaId,t=this.data.select_obj.endAreaId}else{var i=this.data.select_obj.beginCityCode,o=this.data.select_obj.endCityCode;if(a.util.isNull(i))return void a.util.showMsg("请选择出发城市！");if(a.util.isNull(o))return void a.util.showMsg("请选择到达城市！");var l=this.redirectPageBylineDh(i,o);if(!l)return;e=l.startAreaId||"",t=l.endAreaId||""}var s=wx.getStorageSync(a.globalData.corp.appid+"_select_obj");console.log(s),s.startAreaId=e,s.endAreaId=t;var r=Object.keys(s).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(s[e])})).join("&"),d="/package/index4/pages/select_date/select_date?tripDate="+this.data.tripDate+"&"+r,c=n({url:d,ticketObj:this.data.select_obj}).redirectUrl;wx.navigateTo({url:c})}},_btn_query:function(e){var t=this.data.select_obj.beginCityCode,i=this.data.select_obj.endCityCode,n="",o="";if(a.globalData.corpXcx.toOtherAppid)a.util.goOtherMiniApp(a.globalData.corpXcx.toOtherAppid);else{if(1==this.data.queryIntervalType||2==this.data.queryIntervalType){if(a.util.isNull(this.data.select_obj.beginDivisionCityCode))return void a.util.showMsg("请先选择出发城市！");if(a.util.isNull(this.data.select_obj.endDivisionCityCode))return void a.util.showMsg("请先选择到达城市！");n=this.data.select_obj.startAreaId,o=this.data.select_obj.endAreaId}else{if(a.util.isNull(t))return void a.util.showMsg("请选择出发城市！");if(a.util.isNull(i))return void a.util.showMsg("请选择到达城市！");var l=this.redirectPageBylineDh(t,i);if(!l)return;n=l.startAreaId||"",o=l.endAreaId||""}var s={tripDate:this.data.tripDate,beginCityName:this.data.select_obj.beginCityName||"",beginCityCode:t||"",beginDivisionCityName:this.data.select_obj.beginDivisionCityName||"",beginDivisionCityCode:this.data.select_obj.beginDivisionCityCode||"",beginAdDivisionName:this.data.select_obj.beginAdDivisionName||"",beginAdDivisionCode:this.data.select_obj.beginAdDivisionCode||"",beginProvinceCode:this.data.select_obj.beginProvinceCode||"",beginTownStreetCode:this.data.select_obj.beginTownStreetCode||"",startAreaName:this.data.select_obj.startAreaName||"",startAreaId:n||"",endCityCode:i||"",endCityName:this.data.select_obj.endCityName||"",endAdDivisionName:this.data.select_obj.endAdDivisionName||"",endAdDivisionCode:this.data.select_obj.endAdDivisionCode||"",endDivisionCityName:this.data.select_obj.endDivisionCityName||"",endDivisionCityCode:this.data.select_obj.endDivisionCityCode||"",endProvinceCode:this.data.select_obj.endProvinceCode||"",endTownStreetCode:this.data.select_obj.endTownStreetCode||"",endAreaName:this.data.select_obj.endAreaName||"",endAreaId:o||""};this._goto_next_page(s)}},handleClickHotLineBtn:function(e){a.globalData.corpXcx.toOtherAppid?a.util.goOtherMiniApp(a.globalData.corpXcx.toOtherAppid):this._goto_next_page(e.detail.ticket_obj)},handleOnNoticeComLoad:function(e){console.log("handleOnNoticeComLoad",e),this.setData({noticeList:e.detail.noticeList,noticePopup:e.detail.noticePopup,modalName:e.detail.modalName})},clickNotice:function(e){this.selectComponent(".banner-notice")&&this.selectComponent(".banner-notice").clickNotice(e)},handleClickHistoryBtn:function(e){if(console.log("e",e),a.util.isNull(e.detail.beginDivisionCityCode)||a.util.isNull(e.detail.endDivisionCityCode)){var t=e.detail.beginCityCode,i=e.detail.endCityCode,n=this.redirectPageBylineDh(t,i);if(!n)return;e.detail.startAreaId=n.startAreaId||"",e.detail.endAreaId=n.endAreaId||""}this._goto_next_page(e.detail)},_goto_next_page:function(e){e.corpid=a.globalData.corp.ID,wx.setStorageSync(a.globalData.corp.appid+"_ticket_obj",e);var t=!0,i=this.data.queryIntervalType;1!=i&&2!=i||!a.util.isNull(e.beginDivisionCityCode)&&!a.util.isNull(e.endDivisionCityCode)||(t=!1),t&&wx.setStorageSync(a.globalData.corp.appid+"_select_obj",e);var o="?"+a.util.enQueryString(e),l=a.config.pagesUrl.interval2_url;"interval2"===a.globalData.corp.interval?l=a.config.pagesUrl.interval2_url:"interval21"===a.globalData.corp.interval?l=a.config.pagesUrl.interval21_url:"interval22"===a.globalData.corp.interval?l=a.config.pagesUrl.interval22_url:"interval221"===a.globalData.corp.interval?l=a.config.pagesUrl.interval221_url:"interval23"===a.globalData.corp.interval?l=a.config.pagesUrl.interval23_url:"interval24"===a.globalData.corp.interval?l=a.config.pagesUrl.interval24_url:"interval3"===a.globalData.corp.interval?l=a.config.pagesUrl.interval3_url:"interval31"===a.globalData.corp.interval?l=a.config.pagesUrl.interval31_url:"interval"===a.globalData.corp.interval||"intervalSwc"===a.globalData.corp.interval?l="/package/index4/pages/select_address/select_address":"interval11"===a.globalData.corp.interval?l="/package/interval11/pages/selectAddress/selectAddress":"interval4"==a.globalData.corp.interval&&(l="/package/interval4/pages/interval4/interval4");var s=n({url:l+o,ticketObj:e}).redirectUrl;console.log(s),wx.navigateTo({url:s,fail:function(e){console.log("err",e)}}),t&&this.selectComponent(".index-search-history")&&this.selectComponent(".index-search-history").saveQueryCityHistory(e)},makePhoneCallBtn:function(e){a.util.makePhoneCall(e.currentTarget.dataset.tel)},goCharterCar:function(){wx.navigateTo({url:"/package/charterCar/pages/charterCarIndex/charterCarIndex"})},handleGetHotLine:function(e){var n=this;return i(t().mark((function e(){var i,o;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n,o={action:"line.lineDhList",account:a.globalData.corp.account,lineType:""},e.next=4,a.network.requestPOST(o).then((function(e){var t=[];e.success&&(t=e.data||[],i.setData({lineDhList:t}))})).catch((function(e){console.log("handleGetHotLine err",e)}));case 4:case"end":return e.stop()}}),e)})))()},redirectPageBylineDh:function(e,t){if(a.config.indexBtnJudgeHotLineCorpList.includes(a.globalData.corp.ID)){var i=this.data.lineDhList.find((function(i){return e==i.startCityId&&t==i.endCityId}));if(i){var n=i.otherAppid,o=i.pagePath,l=i.startAreaId,s=i.endAreaId;if(a.util.isNotNull(n)||a.util.isNotNull(o))return a.util.isNotNull(n)&&a.util.isNotNull(o)?a.util.goOtherMiniApp(n,o):a.util.isNotNull(o)?a.util.routerToPage(o):a.util.showMsg("常用线路参数有误，缺少页面路径"),!1;if(a.util.isNotNull(l)||a.util.isNotNull(s))return{startAreaId:l,endAreaId:s}}return{}}return{}}},lifetimes:{attached:function(){this.setData({showCharterCar:a.config.showCharterCarCorpList.includes(a.globalData.corp.ID)})},ready:function(){try{var e=wx.getStorageSync(a.globalData.corp.appid+"_select_obj");e&&(a.util.isNull(e.beginCityName)&&(e.beginCityName="出发城市"),a.util.isNull(e.endCityName)&&(e.endCityName="到达城市"),this.setData({showAddress:!0,select_obj:e,rotate:"270-load"})),clearTimeout(a.globalData.timerTem)}catch(e){console.log(e)}a.config.indexBtnJudgeHotLineCorpList.includes(a.globalData.corp.ID)&&this.handleGetHotLine();var t=this.data.hotLineCol;["xc","kjbs"].includes(a.globalData.corp.ID)&&(t=1);var i=a.util.formatShortTime(new Date);this.setData({tripDate:i,showDate:a.util.formatDate(i),showDateWeek:a.util.getWeekName(i),hotLineCol:t}),wx.setStorageSync("tripDate",i)},detached:function(){clearTimeout(a.globalData.timerTem)}}});
},{isPage:false,isComponent:true,currentFile:'pages/index/index53/index53.js'});require("pages/index/index53/index53.js");;__wxRoute = "pages/index/indexNav/indexNav";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/indexNav/indexNav.js";define("pages/index/indexNav/indexNav.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../@babel/runtime/helpers/Arrayincludes");var e=getApp();Component({properties:{bannerBoxClass:{type:null,value:""},bannerClass:{type:null,value:""},bannerImageClass:{type:null,value:""},noticeClass:{type:null,value:"bg-white padding-lr-lg"},noticePopupDialogClass:{type:null,value:""},screenWidth:{type:null,value:750},firstBannerHeight:{type:null,value:253}},data:{home_tab_list:e.globalData.home_tab_list,staticHost:e.config.staticHost},methods:{toIndexNavByLineType:function(t){var a=t.currentTarget.dataset;if(a.tab_title=a.tab_title.replace(/<.*?>/g,""),["linkUrl","navigateTo","toOtherMiniProgram"].includes(a.component_index))this.handleClickNavigate(a.component_index,a.next_page,a.to_other_appid,a.tab_title);else{var i=e.util.enQueryString(a);wx.navigateTo({url:"/package/indexNavByLineType/pages/indexNavByLineType/indexNavByLineType?"+i})}},handleClickNavigate:function(t,a,i,l){if(console.log("handleClickNavigate 参数",t,a,i),"linkUrl"==t)e.util.isNotNull(a)&&-1!=a.indexOf("http")?(a=encodeURIComponent(a),wx.navigateTo({url:"/pages/webview/webview?web_url="+a})):console.log("跳转配置参数有误，外部链接跳转地址不正确");else if("navigateTo"==t){if(e.util.isNull(a))return void console.log("跳转配置参数有误，小程序跳转地址不正确");if(-1!=a.indexOf("http"))return void console.log("跳转配置参数有误，小程序跳转地址不需要包含http");if(0!==a.indexOf("/package/")&&0!==a.indexOf("/pages/"))return void e.util.showMsg("小程序页面路径设置有误");if("/pages/index/index"==a||"/pages/cx/cx"==a||"/pages/user_center/user_center"==a)wx.switchTab({url:a});else{var n=e.util.enQueryString({tab_title:l});console.log("navigateTo params",n),console.log(a+"?"+n),wx.navigateTo({url:a+"?"+n,fail:function(e){console.log("navigate faill",e)}})}}else"toOtherMiniProgram"==t&&e.util.goOtherMiniApp(i,a)}},lifetimes:{attached:function(){var e=this.data.home_tab_list;e.forEach((function(e){e.tab_title=e.tab_title.replace(/&lt;/g,"<").replace(/&gt;/g,">"),e.tab_title=e.tab_title.replace(/&lt/g,"<").replace(/&gt/g,">")})),this.setData({home_tab_list:e})},ready:function(){},detached:function(){clearTimeout(e.globalData.timerTem)}}});
},{isPage:false,isComponent:true,currentFile:'pages/index/indexNav/indexNav.js'});require("pages/index/indexNav/indexNav.js");$gwx_XC_26=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_26 || [];
function gz$gwx_XC_26_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_26_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[6],[[7],[3,'collegeConfigList']],[3,'length']],[1,0]])
Z([a,[3,'page-container margin-bottom '],[[7],[3,'hotLineContainerClass']]])
Z([[6],[[7],[3,'collegeConfigList']],[3,'length']])
Z([[2,'=='],[[7],[3,'HotLineCollegeListType']],[1,1]])
Z([[7],[3,'lineList']])
Z([3,'index'])
Z([3,'_btn_query_hot'])
Z([[6],[[7],[3,'item']],[3,'endAreaId']])
Z([[6],[[7],[3,'item']],[3,'endCityCode']])
Z([[6],[[7],[3,'item']],[3,'endCityName']])
Z([[6],[[7],[3,'item']],[3,'otherAppid']])
Z([[6],[[7],[3,'item']],[3,'pagePath']])
Z([[6],[[7],[3,'item']],[3,'startAreaId']])
Z([[6],[[7],[3,'item']],[3,'beginCityCode']])
Z([[6],[[7],[3,'item']],[3,'beginCityName']])
Z([[6],[[7],[3,'item']],[3,'subscript']])
Z([[2,'=='],[[7],[3,'HotLineCollegeListType']],[1,2]])
Z(z[4])
Z([3,'id'])
Z([3,'_btn_query'])
Z([3,'lineItem'])
Z(z[7])
Z(z[8])
Z(z[9])
Z([[6],[[7],[3,'item']],[3,'id']])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[14])
Z([3,'item-hover'])
Z([[6],[[7],[3,'item']],[3,'minPrice']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_26_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1
}
function gz$gwx_XC_26_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_26_2)return __WXML_GLOBAL__.ops_cached.$gwx_XC_26_2
__WXML_GLOBAL__.ops_cached.$gwx_XC_26_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'collegeLineDhList']],[[2,'>'],[[6],[[7],[3,'collegeLineDhList']],[3,'length']],[1,0]]])
Z([[7],[3,'collegeLineDhList']])
Z([3,'index'])
Z([[7],[3,'ishowCollegeNameUnderLine']])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'list']],[[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'list']],[3,'length']],[1,0]]])
Z([3,'lineIndex'])
Z([3,'lineItem'])
Z([[6],[[7],[3,'item']],[3,'list']])
Z([3,'lineId'])
Z([3,'_btn_query_hot'])
Z([3,'position-relative'])
Z([[6],[[7],[3,'lineItem']],[3,'endAreaId']])
Z([[6],[[7],[3,'lineItem']],[3,'endCityCode']])
Z([[6],[[7],[3,'lineItem']],[3,'endCityName']])
Z([[6],[[7],[3,'lineItem']],[3,'otherAppid']])
Z([[6],[[7],[3,'lineItem']],[3,'pagePath']])
Z([[6],[[7],[3,'lineItem']],[3,'startAreaId']])
Z([[6],[[7],[3,'lineItem']],[3,'beginCityCode']])
Z([[6],[[7],[3,'lineItem']],[3,'beginCityName']])
Z([[6],[[7],[3,'lineItem']],[3,'subscript']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_26_2);return __WXML_GLOBAL__.ops_cached.$gwx_XC_26_2
}
function gz$gwx_XC_26_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_26_3)return __WXML_GLOBAL__.ops_cached.$gwx_XC_26_3
__WXML_GLOBAL__.ops_cached.$gwx_XC_26_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showHotLine']])
Z([a,[3,'page-container margin-bottom '],[[7],[3,'hotLineContainerClass']]])
Z([[6],[[7],[3,'hotCityList']],[3,'length']])
Z([3,'position-relative'])
Z([[2,'&&'],[[7],[3,'collegeList']],[[2,'>'],[[6],[[7],[3,'collegeList']],[3,'length']],[1,0]]])
Z([[7],[3,'collegeList']])
Z([3,'index'])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'collegeName']],[1,0]])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'collegeLineVoList']],[[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'collegeLineVoList']],[3,'length']],[1,0]]])
Z([3,'lineIndex'])
Z([3,'lineItem'])
Z([[6],[[7],[3,'item']],[3,'collegeLineVoList']])
Z(z[9])
Z([3,'_btn_query_hot'])
Z([[6],[[7],[3,'lineItem']],[3,'endAreaId']])
Z([[6],[[7],[3,'lineItem']],[3,'endCityId']])
Z([[6],[[7],[3,'lineItem']],[3,'endCityName']])
Z([[6],[[7],[3,'lineItem']],[3,'otherAppid']])
Z([[6],[[7],[3,'lineItem']],[3,'pagePath']])
Z([[6],[[7],[3,'lineItem']],[3,'startAreaId']])
Z([[6],[[7],[3,'lineItem']],[3,'startCityId']])
Z([[6],[[7],[3,'lineItem']],[3,'startCityName']])
Z([[6],[[7],[3,'lineItem']],[3,'subscript']])
Z([[9],[[8],'isLoading',[[7],[3,'isLoading']]],[[8],'loadingClass',[1,'radius-20']]])
Z([3,'loading_mask'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_26_3);return __WXML_GLOBAL__.ops_cached.$gwx_XC_26_3
}
__WXML_GLOBAL__.ops_set.$gwx_XC_26=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_26=true;
var x=['./components/hotLineCollege/hotLineCollege.wxml','./components/hotLineCollegeByType/hotLineCollegeByType.wxml','./components/hotLineMultiLevel/hotLineMultiLevel.wxml','../../pages/template/interval.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_26_1()
var oXW=_v()
_(r,oXW)
if(_oz(z,0,e,s,gg)){oXW.wxVkey=1
var fYW=_n('view')
_rz(z,fYW,'class',1,e,s,gg)
var cZW=_v()
_(fYW,cZW)
if(_oz(z,2,e,s,gg)){cZW.wxVkey=1
}
var h1W=_v()
_(fYW,h1W)
if(_oz(z,3,e,s,gg)){h1W.wxVkey=1
var o2W=_v()
_(h1W,o2W)
var c3W=function(l5W,o4W,a6W,gg){
var e8W=_mz(z,'view',['bindtap',6,'data-end-area-id',1,'data-end_city_id',2,'data-end_city_name',3,'data-other_appid',4,'data-page_path',5,'data-start-area-id',6,'data-start_city_id',7,'data-start_city_name',8],[],l5W,o4W,gg)
var b9W=_v()
_(e8W,b9W)
if(_oz(z,15,l5W,o4W,gg)){b9W.wxVkey=1
}
b9W.wxXCkey=1
_(a6W,e8W)
return a6W
}
o2W.wxXCkey=2
_2z(z,4,c3W,e,s,gg,o2W,'item','index','index')
}
else if(_oz(z,16,e,s,gg)){h1W.wxVkey=2
var o0W=_v()
_(h1W,o0W)
var xAX=function(fCX,oBX,cDX,gg){
var oFX=_mz(z,'view',['bindtap',19,'class',1,'data-end-area-id',2,'data-end_city_id',3,'data-end_city_name',4,'data-id',5,'data-other_appid',6,'data-page_path',7,'data-start-area-id',8,'data-start_city_id',9,'data-start_city_name',10,'hoverClass',11],[],fCX,oBX,gg)
var cGX=_v()
_(oFX,cGX)
if(_oz(z,31,fCX,oBX,gg)){cGX.wxVkey=1
}
cGX.wxXCkey=1
_(cDX,oFX)
return cDX
}
o0W.wxXCkey=2
_2z(z,17,xAX,e,s,gg,o0W,'item','index','id')
}
cZW.wxXCkey=1
h1W.wxXCkey=1
_(oXW,fYW)
}
oXW.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_XC_26_2()
var lIX=_v()
_(r,lIX)
if(_oz(z,0,e,s,gg)){lIX.wxVkey=1
var aJX=_v()
_(lIX,aJX)
var tKX=function(bMX,eLX,oNX,gg){
var oPX=_v()
_(oNX,oPX)
if(_oz(z,3,bMX,eLX,gg)){oPX.wxVkey=1
}
var fQX=_v()
_(oNX,fQX)
if(_oz(z,4,bMX,eLX,gg)){fQX.wxVkey=1
var cRX=_v()
_(fQX,cRX)
var hSX=function(cUX,oTX,oVX,gg){
var aXX=_mz(z,'view',['bindtap',9,'class',1,'data-end-area-id',2,'data-end_city_id',3,'data-end_city_name',4,'data-other_appid',5,'data-page_path',6,'data-start-area-id',7,'data-start_city_id',8,'data-start_city_name',9],[],cUX,oTX,gg)
var tYX=_v()
_(aXX,tYX)
if(_oz(z,19,cUX,oTX,gg)){tYX.wxVkey=1
}
tYX.wxXCkey=1
_(oVX,aXX)
return oVX
}
cRX.wxXCkey=2
_2z(z,7,hSX,bMX,eLX,gg,cRX,'lineItem','lineIndex','lineId')
}
else{fQX.wxVkey=2
}
oPX.wxXCkey=1
fQX.wxXCkey=1
return oNX
}
aJX.wxXCkey=2
_2z(z,1,tKX,e,s,gg,aJX,'item','index','index')
}
lIX.wxXCkey=1
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_XC_26_3()
var b1X=e_[x[2]].i
_ai(b1X,x[3],e_,x[2],1,1)
var o2X=_v()
_(r,o2X)
if(_oz(z,0,e,s,gg)){o2X.wxVkey=1
var x3X=_n('view')
_rz(z,x3X,'class',1,e,s,gg)
var o4X=_v()
_(x3X,o4X)
if(_oz(z,2,e,s,gg)){o4X.wxVkey=1
}
var f5X=_n('view')
_rz(z,f5X,'class',3,e,s,gg)
var c6X=_v()
_(f5X,c6X)
if(_oz(z,4,e,s,gg)){c6X.wxVkey=1
var h7X=_v()
_(c6X,h7X)
var o8X=function(o0X,c9X,lAY,gg){
var tCY=_v()
_(lAY,tCY)
if(_oz(z,7,o0X,c9X,gg)){tCY.wxVkey=1
}
var eDY=_v()
_(lAY,eDY)
if(_oz(z,8,o0X,c9X,gg)){eDY.wxVkey=1
var bEY=_v()
_(eDY,bEY)
var oFY=function(oHY,xGY,fIY,gg){
var hKY=_mz(z,'view',['bindtap',13,'data-end-area-id',1,'data-end_city_id',2,'data-end_city_name',3,'data-other_appid',4,'data-page_path',5,'data-start-area-id',6,'data-start_city_id',7,'data-start_city_name',8],[],oHY,xGY,gg)
var oLY=_v()
_(hKY,oLY)
if(_oz(z,22,oHY,xGY,gg)){oLY.wxVkey=1
}
oLY.wxXCkey=1
_(fIY,hKY)
return fIY
}
bEY.wxXCkey=2
_2z(z,11,oFY,o0X,c9X,gg,bEY,'lineItem','lineIndex','lineIndex')
}
else{eDY.wxVkey=2
}
tCY.wxXCkey=1
eDY.wxXCkey=1
return lAY
}
h7X.wxXCkey=2
_2z(z,5,o8X,e,s,gg,h7X,'item','index','index')
}
else{c6X.wxVkey=2
}
var cMY=_v()
_(f5X,cMY)
var oNY=_oz(z,24,e,s,gg)
var lOY=_gd(x[2],oNY,e_,d_)
if(lOY){
var aPY=_1z(z,23,e,s,gg) || {}
var cur_globalf=gg.f
cMY.wxXCkey=3
lOY(aPY,aPY,cMY,gg)
gg.f=cur_globalf
}
else _w(oNY,x[2],1,2498)
c6X.wxXCkey=1
_(x3X,f5X)
o4X.wxXCkey=1
_(o2X,x3X)
}
o2X.wxXCkey=1
b1X.pop()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[x[3]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_26";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_26();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/hotLineCollege/hotLineCollege.wxml'] = [$gwx_XC_26, './components/hotLineCollege/hotLineCollege.wxml'];else __wxAppCode__['components/hotLineCollege/hotLineCollege.wxml'] = $gwx_XC_26( './components/hotLineCollege/hotLineCollege.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/hotLineCollegeByType/hotLineCollegeByType.wxml'] = [$gwx_XC_26, './components/hotLineCollegeByType/hotLineCollegeByType.wxml'];else __wxAppCode__['components/hotLineCollegeByType/hotLineCollegeByType.wxml'] = $gwx_XC_26( './components/hotLineCollegeByType/hotLineCollegeByType.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/hotLineMultiLevel/hotLineMultiLevel.wxml'] = [$gwx_XC_26, './components/hotLineMultiLevel/hotLineMultiLevel.wxml'];else __wxAppCode__['components/hotLineMultiLevel/hotLineMultiLevel.wxml'] = $gwx_XC_26( './components/hotLineMultiLevel/hotLineMultiLevel.wxml' );
	;__wxRoute = "components/hotLineCollege/hotLineCollege";__wxRouteBegin = true;__wxAppCurrentFile__="components/hotLineCollege/hotLineCollege.js";define("components/hotLineCollege/hotLineCollege.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../@babel/runtime/helpers/asyncToGenerator"),a=getApp();Component({properties:{HotLineCollegeTieleType:{type:null,value:1},HotLineCollegeListType:{type:null,value:2},hotLineCol:{type:Number,value:2},hotLineContainerClass:{type:null,value:""},hotLineBoxClass:{value:"margin-lr-xs",type:null},hotLineItemClass:{value:"border-radius-4 bg-default-white",type:null},saveStorageKey:{type:String,value:"_select_obj"},lineType:{type:String,value:""}},data:{staticHost:a.config.staticHost,primary:a.globalData.corpXcx.primary,showHotLine:!1,lineList:[],collegeConfigList:[],collegeTotalCount:0,currenCollegeObjStorage:"",currenCollegeID:"",queryIntervalType:a.globalData.corpXcx.queryIntervalType||0,scrollLeft:0},lifetimes:{attached:function(){this.getCollegeConfigList()}},methods:{getCollegeConfigList:function(){var l=this;return t(e().mark((function t(){var i,r,n,o,s,c;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={action:"line.getCollegeLineGxInfoList",lineType:(i=l).data.lineType},n=wx.getStorageSync(a.globalData.corp.appid+"_hotlineCollegeID_"+i.data.lineType)||"",o=0,s=[],c=[],e.next=8,a.network.requestPOST(r).then((function(e){e.success&&a.util.isNotNull(e.data)&&(s=e.data||[]).length>0&&(n&&(o=s.findIndex((function(e){return e.id==n}))),o>=0?(n=s[o].id,c=s[o].list):(n=s[0].id,c=s[0].list,o=0))})).catch((function(e){e=e||{},a.util.showMsg(e.message)}));case 8:i.setData({collegeConfigList:s,currenCollegeID:n,current_index:o,lineList:c}),a.util.isNotNull(n)&&i.moveCollegescroll(o);case 10:case"end":return e.stop()}}),t)})))()},handleSelectCollege:function(e){var t=e.currentTarget.dataset.id,l=e.currentTarget.dataset.index;this.setData({currenCollegeID:t,lineList:this.data.collegeConfigList[l].list}),this.moveCollegescroll(l),wx.setStorageSync(a.globalData.corp.appid+"_hotlineCollegeID_"+this.data.lineType,t)},handleGetCollegeLineList:function(){var l=this;return t(e().mark((function t(){var i,r,n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={action:"line.getCollegeLineList",collegeId:(i=l).data.currenCollegeID},n={},e.next=5,a.network.requestPOST(r).then((function(e){console.log("pro",e),wx.hideLoading(),e.success&&e.data||(e.data=[],a.util.showMsg(e.message||"获取线路失败")),n=e})).catch((function(e){wx.hideLoading(),a.util.showMsg(e.message),n=e}));case 5:i.setData({lineList:n.data});case 6:case"end":return e.stop()}}),t)})))()},_btn_query_hot:function(e){console.log(e);var t=e.currentTarget.dataset.other_appid,l=e.currentTarget.dataset.page_path;if(a.util.isNotNull(t)||a.util.isNotNull(l))a.util.isNotNull(t)&&a.util.isNotNull(l)?a.util.goOtherMiniApp(t,l):a.util.isNotNull(l)?a.util.routerToPage(l):a.util.showMsg("常用线路参数有误，缺少页面路径");else if(a.globalData.corpXcx.toOtherAppid)a.util.goOtherMiniApp(a.globalData.corpXcx.toOtherAppid);else{var i=a.globalData.corp.ID,r=wx.getStorageSync("tripDate")||a.util.formatShortTime(new Date);console.log("tripDate",r);var n={tripDate:r,beginCityName:e.currentTarget.dataset.start_city_name,beginCityCode:e.currentTarget.dataset.start_city_id,endCityName:e.currentTarget.dataset.end_city_name,endCityCode:e.currentTarget.dataset.end_city_id,corpid:i,lineId:e.currentTarget.dataset.id,startAreaId:e.currentTarget.dataset.startAreaId,endAreaId:e.currentTarget.dataset.endAreaId};0!=this.data.queryIntervalType&&"index2"!=a.globalData.corp.index||wx.setStorageSync(a.globalData.corp.appid+this.data.saveStorageKey,n);var o={params:a.util.enQueryString(n),ticket_obj:n};this.triggerEvent("clickHotLineBtn",o)}},moveCollegescroll:function(e){var t=this;this.createSelectorQuery().select("#collegeBoxItem".concat(e)).boundingClientRect().select("#collegeBoxItem0").boundingClientRect().exec((function(e){if(e[0]&&e[1]){var a=e[0],l=e[1],i=a.left-l.left-150;t.setData({scrollLeft:i})}}))}}});
},{isPage:false,isComponent:true,currentFile:'components/hotLineCollege/hotLineCollege.js'});require("components/hotLineCollege/hotLineCollege.js");;__wxRoute = "components/hotLineCollegeByType/hotLineCollegeByType";__wxRouteBegin = true;__wxAppCurrentFile__="components/hotLineCollegeByType/hotLineCollegeByType.js";define("components/hotLineCollegeByType/hotLineCollegeByType.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../@babel/runtime/helpers/asyncToGenerator");require("../../@babel/runtime/helpers/Arrayincludes");var a=getApp();Component({properties:{showHotLineTitleStyle:{type:null,value:"1"},hotLineCol:{type:Number,value:2},hotLineContainerClass:{type:null,value:""},hotLineBoxClass:{value:"margin-lr-xs",type:null},hotLineItemClass:{value:"border-radius-4 bg-default-white",type:null},saveStorageKey:{type:String,value:"_select_obj"},lineType:{type:String,value:""}},data:{globalStyle:a.globalData.corpXcx.globalStyle,primary:a.globalData.corpXcx.primary,staticHost:a.config.staticHost,showHotLine:!1,collegeLineDhList:[],queryIntervalType:a.globalData.corpXcx.queryIntervalType||0,ishowCollegeNameUnderLine:!0,skinClassName:a.globalData.skinClassName},lifetimes:{attached:function(){var e=this.data.ishowCollegeNameUnderLine;["jxkc"].includes(a.globalData.corp.ID)&&(e=!1),this.setData({ishowCollegeNameUnderLine:e}),this.handleGetCollegeLineDhList()}},methods:{handleGetCollegeLineDhList:function(r){var i=this;return t(e().mark((function t(){var r,n,l;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={action:"line.getCollegeLineGxInfoList",lineType:(r=i).data.lineType},l=[],e.next=5,a.network.requestPOST(n).then((function(e){l=e.success&&a.util.isNotNull(e.data)&&e.data||[],r.setData({collegeLineDhList:l}),r.triggerEvent("onHotLineLoad",{success:e.success})})).catch((function(e){console.log("handleGetHotLine err",e),r.triggerEvent("onHotLineLoad",{success:!1})}));case 5:case"end":return e.stop()}}),t)})))()},_btn_query_hot:function(e){var t=e.currentTarget.dataset.other_appid,r=e.currentTarget.dataset.page_path;if(a.util.isNotNull(t)||a.util.isNotNull(r))a.util.isNotNull(t)&&a.util.isNotNull(r)?a.util.goOtherMiniApp(t,r):a.util.isNotNull(r)?a.util.routerToPage(r):a.util.showMsg("常用线路参数有误，缺少页面路径");else{var i=wx.getStorageSync("tripDate")||a.util.formatShortTime(new Date),n={corpid:a.globalData.corp.ID,tripDate:i,beginCityName:e.currentTarget.dataset.start_city_name,beginCityCode:e.currentTarget.dataset.start_city_id,beginAddressCode:"",beginAddressName:"请选择上车站点",endCityName:e.currentTarget.dataset.end_city_name,endCityCode:e.currentTarget.dataset.end_city_id,endAddressCode:"",endAddressName:"请选择下车站点",startAreaId:e.currentTarget.dataset.startAreaId,endAreaId:e.currentTarget.dataset.endAreaId};0!=this.data.queryIntervalType&&"index2"!=a.globalData.corp.index||wx.setStorageSync(a.globalData.corp.appid+this.data.saveStorageKey,n);var l={params:a.util.enQueryString(n),ticket_obj:n};this.triggerEvent("clickHotLineBtn",l)}}}});
},{isPage:false,isComponent:true,currentFile:'components/hotLineCollegeByType/hotLineCollegeByType.js'});require("components/hotLineCollegeByType/hotLineCollegeByType.js");;__wxRoute = "components/hotLineMultiLevel/hotLineMultiLevel";__wxRouteBegin = true;__wxAppCurrentFile__="components/hotLineMultiLevel/hotLineMultiLevel.js";define("components/hotLineMultiLevel/hotLineMultiLevel.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/regeneratorRuntime"),e=require("../../@babel/runtime/helpers/asyncToGenerator"),a=getApp();Component({properties:{showHotLineTitleStyle:{type:null,value:"1"},hotLineCol:{type:Number,value:2},hotLineContainerClass:{type:null,value:""},hotLineBoxClass:{value:"margin-lr-xs",type:null},hotLineItemClass:{value:"border-radius-4 bg-default-white",type:null},saveStorageKey:{type:String,value:"_select_obj"},lineType:{value:"",type:null}},data:{primary:a.globalData.corpXcx.primary,showHotLine:!1,collegeList:[],hotCityList:[],cityId:"",current_index:0,scrollLeft:0,isLoading:!1,queryIntervalType:a.globalData.corpXcx.queryIntervalType||0},lifetimes:{attached:function(){this.getCityHotList()}},methods:{getScrollWidth:function(){var t=this,e=this.createSelectorQuery();e.select(".hotCityBox").boundingClientRect(),e.select(".hotCityListBox").boundingClientRect(),e.exec((function(e){if(e[0]&&e[1]){var a=e[0].width,r=e[1].width;t.setData({wrapWidth:a,scrollWidth:r,showArrow:r>a})}}))},onScroll:function(t){var e=this.data,a=e.scrollWidth,r=e.wrapWidth,i=e.showArrow,n=t.detail.scrollLeft<a-r+10;n!=i&&this.setData({showArrow:n})},getCityHotList:function(r){var i=this;return e(t().mark((function e(){var r,n,o,l,s,c,d;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],o=[],l=!1,s="",c=0,d={action:"cityHot.threeTier",lineType:(r=i).data.lineType||""},t.next=9,a.network.requestPOST(d).then((function(t){t.success&&a.util.isNotNull(t.data)&&(n=t.data.hotCityList||[]).length>0&&(l=!0,s=wx.getStorageSync(a.globalData.corp.appid+"_hotCityId_"+r.data.lineType),a.util.isNotNull(s)?(c=n.findIndex((function(t){return t.id==s})))>=0?(s=n[c].id,o=n[c].collegeList):(s=n[0].id,o=n[0].collegeList,c=0):(s=n[0].id,c=0,o=n[0].collegeList)),r.setData({hotCityList:n,collegeList:o,showHotLine:l,cityId:s,current_index:c}),a.util.isNotNull(s)&&r.hotCityscroll(c)})).catch((function(t){console.log("getCityHotList err",t)}));case 9:return n.length>0&&r.getScrollWidth(),t.abrupt("return",n);case 11:case"end":return t.stop()}}),e)})))()},hotCityscroll:function(t){var e=this;this.createSelectorQuery().select("#hotCityItem".concat(t)).boundingClientRect().select("#hotCityItem0").boundingClientRect().exec((function(t){if(t[0]&&t[1]){var a=t[0],r=t[1],i=a.left-r.left-150;e.setData({scrollLeft:i})}}))},onHotCity:function(t){var e=t.currentTarget.dataset.index;this.hotCityscroll(e),this.setData({cityId:t.currentTarget.dataset.id,current_index:e,collegeList:this.data.hotCityList[e].collegeList}),wx.setStorageSync(a.globalData.corp.appid+"_hotCityId_"+this.data.lineType,t.currentTarget.dataset.id)},_btn_query_hot:function(t){var e=t.currentTarget.dataset.other_appid,r=t.currentTarget.dataset.page_path,i="".concat(t.currentTarget.dataset.page_path).concat(-1==t.currentTarget.dataset.page_path.indexOf("?")?"?":"&","beginCityCode=").concat(t.currentTarget.dataset.start_city_id,"&beginCityName=").concat(t.currentTarget.dataset.start_city_name,"&endCityCode=").concat(t.currentTarget.dataset.end_city_id,"&endCityName=").concat(t.currentTarget.dataset.end_city_name,"&endAreaId=").concat(t.currentTarget.dataset.endAreaId,"&startAreaId=").concat(t.currentTarget.dataset.startAreaId);if(a.util.isNotNull(e)||a.util.isNotNull(r))a.util.isNotNull(e)&&a.util.isNotNull(r)?a.util.goOtherMiniApp(e,i):a.util.isNotNull(r)?a.util.routerToPage(i):a.util.showMsg("常用线路参数有误，缺少页面路径");else{var n=wx.getStorageSync("tripDate")||a.util.formatShortTime(new Date),o={corpid:a.globalData.corp.ID,tripDate:n,beginCityName:t.currentTarget.dataset.start_city_name,beginCityCode:t.currentTarget.dataset.start_city_id,beginAddressCode:"",beginAddressName:"请选择上车站点",endCityName:t.currentTarget.dataset.end_city_name,endCityCode:t.currentTarget.dataset.end_city_id,endAddressCode:"",endAddressName:"请选择下车站点",startAreaId:t.currentTarget.dataset.startAreaId,endAreaId:t.currentTarget.dataset.endAreaId};0!=this.data.queryIntervalType&&"index2"!=a.globalData.corp.index||wx.setStorageSync(a.globalData.corp.appid+this.data.saveStorageKey,o);var l={params:a.util.enQueryString(o),ticket_obj:o};this.triggerEvent("clickHotLineBtn",l)}}}});
},{isPage:false,isComponent:true,currentFile:'components/hotLineMultiLevel/hotLineMultiLevel.js'});require("components/hotLineMultiLevel/hotLineMultiLevel.js");$gwx_XC_27=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_27 || [];
function gz$gwx_XC_27_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_27_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'btnAction']],[1,'onlineWeChatCustomer']])
Z([3,'handleTouchStart'])
Z([3,'handleBtnAction'])
Z([3,'handleTouchEnd'])
Z([3,'handleTouchMove'])
Z([3,'index-float-btn flex align-center'])
Z([3,'float-btn'])
Z([3,'contact'])
Z([a,[3,'background:linear-gradient(90deg, var(--holder'],[[7],[3,'btnColor']],[3,'Light) -100%, var(--holder'],[[7],[3,'btnColor']],[3,') 100%);'],[[7],[3,'btnStyle']]])
Z([[7],[3,'btnIconUrl']])
Z([[2,'=='],[[7],[3,'btnAction']],[1,'onlineSobotCustomer']])
Z(z[1])
Z(z[2])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[7])
Z([a,[3,'sobot|'],[[6],[[7],[3,'userInfo']],[3,'nickName']],[3,'|'],[[6],[[7],[3,'userInfo']],[3,'avatarUrl']]])
Z([a,z[8][1],z[8][2],z[8][3],z[8][2],z[8][5],z[8][6]])
Z(z[9])
Z([[7],[3,'btnAction']])
Z(z[1])
Z(z[2])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z([a,z[8][1],z[8][2],z[8][3],z[8][2],z[8][5],z[8][6]])
Z(z[9])
Z([[8],'isLoading',[[7],[3,'loadingCustomerwxQrcodeImage']]])
Z([3,'loading_mask'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_27_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_27=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_27=true;
var x=['./components/indexFloatBtn/indexFloatBtn.wxml','../../pages/template/interval.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_27_1()
var eRY=e_[x[0]].i
_ai(eRY,x[1],e_,x[0],1,1)
var bSY=_v()
_(r,bSY)
if(_oz(z,0,e,s,gg)){bSY.wxVkey=1
var oTY=_mz(z,'button',['bind:touchstart',1,'bindtap',1,'catch:touchend',2,'catch:touchmove',3,'class',4,'id',5,'openType',6,'style',7],[],e,s,gg)
var xUY=_v()
_(oTY,xUY)
if(_oz(z,9,e,s,gg)){xUY.wxVkey=1
}
xUY.wxXCkey=1
_(bSY,oTY)
}
else if(_oz(z,10,e,s,gg)){bSY.wxVkey=2
var oVY=_mz(z,'button',['bind:touchstart',11,'bindtap',1,'catch:touchend',2,'catch:touchmove',3,'class',4,'id',5,'openType',6,'sessionFrom',7,'style',8],[],e,s,gg)
var fWY=_v()
_(oVY,fWY)
if(_oz(z,20,e,s,gg)){fWY.wxVkey=1
}
fWY.wxXCkey=1
_(bSY,oVY)
}
else if(_oz(z,21,e,s,gg)){bSY.wxVkey=3
var cXY=_mz(z,'view',['bind:touchstart',22,'bindtap',1,'catch:touchend',2,'catch:touchmove',3,'class',4,'id',5,'style',6],[],e,s,gg)
var hYY=_v()
_(cXY,hYY)
if(_oz(z,29,e,s,gg)){hYY.wxVkey=1
}
hYY.wxXCkey=1
_(bSY,cXY)
}
var oZY=_v()
_(r,oZY)
var c1Y=_oz(z,31,e,s,gg)
var o2Y=_gd(x[0],c1Y,e_,d_)
if(o2Y){
var l3Y=_1z(z,30,e,s,gg) || {}
var cur_globalf=gg.f
oZY.wxXCkey=3
o2Y(l3Y,l3Y,oZY,gg)
gg.f=cur_globalf
}
else _w(c1Y,x[0],1,2082)
bSY.wxXCkey=1
eRY.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_27";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_27();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/indexFloatBtn/indexFloatBtn.wxml'] = [$gwx_XC_27, './components/indexFloatBtn/indexFloatBtn.wxml'];else __wxAppCode__['components/indexFloatBtn/indexFloatBtn.wxml'] = $gwx_XC_27( './components/indexFloatBtn/indexFloatBtn.wxml' );
	;__wxRoute = "components/indexFloatBtn/indexFloatBtn";__wxRouteBegin = true;__wxAppCurrentFile__="components/indexFloatBtn/indexFloatBtn.js";define("components/indexFloatBtn/indexFloatBtn.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/objectSpread2"),e=getApp(),o=e.globalData.systemInfo,n=o.CustomBar,i=o.windowWidth,a=o.windowHeight,r=(o.safeArea,!1),l=0,s=0,c=880,g=-25,h=new RegExp("^([a-zA-Z]+:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i"),m=t({},e.globalData.corpXcx.wxHomeBtnPage);Component({properties:{floatBtnName:{type:String,value:"客服"},floatBtnIconClass:{type:String,value:"icon-staff"},pageName:{type:String,value:""},isFullPage:{type:Boolean,value:!0}},data:{primary:e.globalData.corpXcx.primary,btnColor:"",modalName:null,loadingCustomerwxQrcodeImage:!0,customerwxQrcodeImageHeight:125,btnAction:"",btnStyle:"visibility: hidden;"},wxHomeBtnConfig:null,btnDOMInfo:null,startSite:null,methods:{handleBtnAction:function(){var t=this.data.btnAction;if("showModal"==t){if(!this.wxHomeBtnConfig.modalName)return;this.setData({modalName:this.wxHomeBtnConfig.modalName})}else if("navigateTo"==t){if(!this.wxHomeBtnConfig.pagePath)return;wx.navigateTo({url:this.wxHomeBtnConfig.pagePath,success:function(t){console.log("res",t)},fail:function(t){console.log("err",t)}})}else if("goOtherMiniApp"==t){if(!this.wxHomeBtnConfig.otherAppid||!this.wxHomeBtnConfig.pagePath)return;e.util.goOtherMiniApp(this.wxHomeBtnConfig.otherAppid,this.wxHomeBtnConfig.pagePath)}else if("makePhoneCall"==t){if(!this.wxHomeBtnConfig.tel)return;e.util.makePhoneCallArray(this.wxHomeBtnConfig.tel,this.wxHomeBtnConfig.btnName)}else if("weWorkOnLineCustomer"==t){if(!this.wxHomeBtnConfig.weworkServiceChatUrl||!this.wxHomeBtnConfig.weworkCorpid)return;this.onlineCustomer(this.wxHomeBtnConfig.weworkServiceChatUrl,this.wxHomeBtnConfig.weworkCorpid)}else"onlineWeChatCustomer"==t?console.log("打开微信小程序在线客服"):"onlineSobotCustomer"==t&&console.log("打开第三方客服智齿")},showCustomerWxQrcodeModal:function(){this.setData({modalName:"customerWxQrcodeModal"})},customerwxQrcodeImageLoad:function(t){console.log("customerwxQrcodeImageLoad");var e=t.detail.width/t.detail.height,o=Math.round(620/e);this.setData({customerwxQrcodeImageHeight:o,loadingCustomerwxQrcodeImage:!1})},viewIntervalImage:function(t){var e=[this.data.modalPicUrl];wx.previewImage({urls:e})},hideModal:function(){this.setData({modalName:null})},onlineCustomer:function(t,e){wx.openCustomerServiceChat({extInfo:{url:t},corpId:e,success:function(t){console.log("onlineCustomer res",t)},fail:function(t){console.log("onlineCustomer fail",t)}})},getBtnDOM:function(t){var e=this,o=e.createSelectorQuery();o.select("#float-btn").boundingClientRect((function(o){e.btnDOMInfo=o,t&&t()})),o.exec()},px2rpx:function(t){return Math.floor(750/i*Number(t))},rpx2px:function(t){return Math.floor(i/750*Number(t))},handleTouchStart:function(t){this.startSite=t.changedTouches[0],r=!0,l=this.rpx2px(c),s=this.rpx2px(g)},handleTouchEnd:function(){r=!1;var t=i/2,o=s+this.btnDOMInfo.width/2;g=t>=o?-25:this.px2rpx(i-this.btnDOMInfo.width+15),a-80<l+this.btnDOMInfo.height?l=a-80:l<n&&(l=n),c=this.px2rpx(l),wx.setStorageSync(e.globalData.corp.appid+"_float_btn_site",{topRPX:c,rightRPX:g,isFullPageLast:this.data.isFullPage}),this.setData({btnStyle:"top: ".concat(c,"rpx; right: ").concat(g,"rpx; transition: right 0.35s, top 0.35s;")})},handleTouchMove:function(t){if(r){var e=t.changedTouches[0],o=this.startSite.clientX-e.clientX,n=e.clientY-this.startSite.clientY;this.startSite=e,l+=n,s+=o,c=this.px2rpx(l),g=this.px2rpx(s),this.setData({btnStyle:"top: ".concat(c,"rpx; right: ").concat(g,"rpx;")})}},validateURL:function(t){return t&&"string"==typeof t?h.test(t)?t:e.config.staticHost+("/"==t[0]?"":"/")+t:""},getStorageSite:function(){var t=wx.getStorageSync(e.globalData.corp.appid+"_float_btn_site");if(t){var o=t.topRPX,a=t.rightRPX,r=t.isFullPageLast;if(c=o,this.data.isFullPage!=r){var l=this.px2rpx(n);r?c-=l:c+=l}g=-25==a?-25:this.px2rpx(i-this.btnDOMInfo.width+15),this.setData({btnStyle:"top: ".concat(c,"rpx; right: ").concat(g,"rpx;")})}else this.setData({btnStyle:"top: ".concat(c,"rpx; right: ").concat(g,"rpx;")})}},pageLifetimes:{show:function(){this.btnDOMInfo&&this.getStorageSite()}},lifetimes:{attached:function(){},ready:function(){var t=this;if(t.wxHomeBtnConfig=m[t.data.pageName]||{},Object.keys(t.wxHomeBtnConfig).length){"showModal"===t.wxHomeBtnConfig.btnAction&&(t.wxHomeBtnConfig.modalPicUrl=t.validateURL(t.wxHomeBtnConfig.modalPicUrl)),t.wxHomeBtnConfig.btnIconUrl=t.validateURL(t.wxHomeBtnConfig.btnIconUrl);var o=t.wxHomeBtnConfig.btnColor||e.globalData.corpXcx.primary;"SpringFestival"==e.globalData.skinClassName&&"home"==t.data.pageName&&(o="red"),t.setData({btnColor:o,btnAction:t.wxHomeBtnConfig.btnAction,btnName:t.wxHomeBtnConfig.btnName,modalPicUrl:t.wxHomeBtnConfig.modalPicUrl,btnIconUrl:t.wxHomeBtnConfig.btnIconUrl}),t.getBtnDOM((function(){t.getStorageSite()})),console.log("windowHeight",a)}}}});
},{isPage:false,isComponent:true,currentFile:'components/indexFloatBtn/indexFloatBtn.js'});require("components/indexFloatBtn/indexFloatBtn.js");$gwx_XC_28=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_28 || [];
function gz$gwx_XC_28_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_28_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_28_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_28_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'indexHistoryList']],[3,'length']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_28_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_28_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_28=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_28=true;
var x=['./components/indexSearchHistory/indexSearchHistory.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_28_1()
var t5Y=_v()
_(r,t5Y)
if(_oz(z,0,e,s,gg)){t5Y.wxVkey=1
}
t5Y.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_28";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_28();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/indexSearchHistory/indexSearchHistory.wxml'] = [$gwx_XC_28, './components/indexSearchHistory/indexSearchHistory.wxml'];else __wxAppCode__['components/indexSearchHistory/indexSearchHistory.wxml'] = $gwx_XC_28( './components/indexSearchHistory/indexSearchHistory.wxml' );
	;__wxRoute = "components/indexSearchHistory/indexSearchHistory";__wxRouteBegin = true;__wxAppCurrentFile__="components/indexSearchHistory/indexSearchHistory.js";define("components/indexSearchHistory/indexSearchHistory.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp();Component({properties:{isNeedUpdateIndexHistory:{type:Boolean,value:!0},indexHistorySaveMaxLen:{type:[Number,String],value:6},indexHistoryShowMaxLen:{type:[Number,String],value:5},histroyContainerClass:{type:null,value:""},historyKey:{type:null,value:""}},data:{ifFirst:!0,indexHistoryList:[],historyType:"_index_history_list",queryIntervalType:t.globalData.corpXcx.queryIntervalType||0},methods:{saveQueryCityHistory:function(i){if(i){var e=wx.getStorageSync(t.globalData.corp.appid+this.data.historyType+this.data.historyKey)||[];if(1==this.data.queryIntervalType){var a=i.beginAdDivisionCode||i.beginDivisionCityCode,s=i.endAdDivisionCode||i.endDivisionCityCode;if(t.util.isNull(a)||t.util.isNull(s))return;if(e.length)for(var o=0;o<e.length;o++)if((e[o].beginAdDivisionCode==a||e[o].beginDivisionCityCode==a)&&e[o].endAdDivisionCode==s||e[o].endDivisionCityCode==s){e.splice(o,1),console.log("i",o);break}}else if(2==this.data.queryIntervalType){var r=i.startAreaId||i.beginDivisionCityCode,n=i.endAreaId||i.endDivisionCityCode;if(t.util.isNull(r)||t.util.isNull(n))return;if(e.length)for(var d=0;d<e.length;d++)if((e[d].startAreaId==r||e[d].beginDivisionCityCode==r)&&e[d].endAreaId==n||e[d].endDivisionCityCode==n){e.splice(d,1),console.log("i",d);break}}else{if(t.util.isNull(i.beginCityCode)||t.util.isNull(i.endCityCode))return;if(e.length)for(var l=0;l<e.length;l++)if(e[l].beginCityCode==i.beginCityCode&&e[l].endCityCode==i.endCityCode){e.splice(l,1),console.log("i",l);break}}this.setData({isNeedUpdateIndexHistory:!0}),e.unshift(i),e.length>this.data.indexHistorySaveMaxLen&&(e=e.slice(0,this.data.indexHistorySaveMaxLen)),wx.setStorageSync(t.globalData.corp.appid+this.data.historyType+this.data.historyKey,e)}},selectHistoryItem:function(i){t.globalData.corpXcx.toOtherAppid?t.util.goOtherMiniApp(t.globalData.corpXcx.toOtherAppid):(i.currentTarget.dataset.item.corpid=t.globalData.corp.ID,i.currentTarget.dataset.item.tripDate=wx.getStorageSync("tripDate")||t.util.formatShortTime(new Date),this.triggerEvent("clickHistoryBtn",i.currentTarget.dataset.item))},removeIndexHistory:function(){this.setData({indexHistoryList:[]}),wx.removeStorageSync(t.globalData.corp.appid+this.data.historyType+this.data.historyKey)}},pageLifetimes:{show:function(){if(!this.data.ifFirst&&this.data.isNeedUpdateIndexHistory){var i=wx.getStorageSync(t.globalData.corp.appid+this.data.historyType+this.data.historyKey)||[];t.util.isNotNull(i)&&i.length>this.data.indexHistoryShowMaxLen&&(i=i.slice(0,this.data.indexHistoryShowMaxLen)),this.setData({indexHistoryList:i,isNeedUpdateIndexHistory:!1})}}},lifetimes:{attached:function(){var i="_index_history_list";if(1==this.data.queryIntervalType?i="_index_ad_history_list":2==this.data.queryIntervalType&&(i="_index_area_history_list"),this.setData({historyType:i}),this.data.isNeedUpdateIndexHistory){var e=wx.getStorageSync(t.globalData.corp.appid+i+this.data.historyKey)||[];t.util.isNotNull(e)&&e.length>this.data.indexHistoryShowMaxLen&&(e=e.slice(0,this.data.indexHistoryShowMaxLen)),this.setData({indexHistoryList:e,isNeedUpdateIndexHistory:!1,ifFirst:!1})}}}});
},{isPage:false,isComponent:true,currentFile:'components/indexSearchHistory/indexSearchHistory.js'});require("components/indexSearchHistory/indexSearchHistory.js");$gwx_XC_29=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_29 || [];
function gz$gwx_XC_29_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_29_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_29_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_29_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'indexTel']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_29_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_29_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_29=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_29=true;
var x=['./components/indexTel/indexTel.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_29_1()
var b7Y=_v()
_(r,b7Y)
if(_oz(z,0,e,s,gg)){b7Y.wxVkey=1
}
b7Y.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_29";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_29();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/indexTel/indexTel.wxml'] = [$gwx_XC_29, './components/indexTel/indexTel.wxml'];else __wxAppCode__['components/indexTel/indexTel.wxml'] = $gwx_XC_29( './components/indexTel/indexTel.wxml' );
	;__wxRoute = "components/indexTel/indexTel";__wxRouteBegin = true;__wxAppCurrentFile__="components/indexTel/indexTel.js";define("components/indexTel/indexTel.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../@babel/runtime/helpers/Arrayincludes");var a=getApp();Component({properties:{indexTelName:{value:"点击拔号订票",type:null},btnClass:{value:"",type:null},indexTel:{value:a.globalData.corpXcx.indexTel,type:null}},data:{primary:a.globalData.corpXcx.primary},lifetimes:{attached:function(){var e=this.data.indexTelName,l=this.data.btnClass;["sdly"].includes(a.globalData.corp.ID)?e="7-55座豪华客车出租 ":["ytkc"].includes(a.globalData.corp.ID)?(e="7-55座豪华客车出租 ",l="border-radius-4"):"lbcd"==a.globalData.corp.ID?e="包车 租车 旅游 咨询周队":"blfgsw"==a.globalData.corp.ID?e="旅游包车请咨询":"nscd"==a.globalData.corp.ID&&(e="包车租车旅游连联系周队"),this.setData({indexTelName:e,btnClass:l})}},methods:{handleMakePhoneCall:function(e){a.util.makePhoneCallArray(e.currentTarget.dataset.tel,e.currentTarget.dataset.name)}}});
},{isPage:false,isComponent:true,currentFile:'components/indexTel/indexTel.js'});require("components/indexTel/indexTel.js");$gwx_XC_30=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_30 || [];
function gz$gwx_XC_30_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'wrapper flex flex-column'])
Z([3,'padding-lr-lg padding-bottom order-rule-scroll'])
Z([[6],[[7],[3,'wxOrderRuleRes']],[3,'orderNotice']])
Z([[2,'&&'],[[6],[[7],[3,'wxOrderRuleRes']],[3,'refundRuleList']],[[2,'>'],[[6],[[6],[[7],[3,'wxOrderRuleRes']],[3,'refundRuleList']],[3,'length']],[1,0]]])
Z([[2,'&&'],[[6],[[7],[3,'wxOrderRuleRes']],[3,'changeRuleList']],[[2,'>'],[[6],[[6],[[7],[3,'wxOrderRuleRes']],[3,'changeRuleList']],[3,'length']],[1,0]]])
Z([[6],[[7],[3,'wxOrderRuleRes']],[3,'changeRefundRuleList']])
Z([3,'bottom-confirm margin-lr-36'])
Z([[2,'||'],[[2,'=='],[[7],[3,'checkOption']],[1,1]],[[2,'=='],[[7],[3,'checkOption']],[1,2]]])
Z([3,'tapCheckOption'])
Z([3,'text-lg margin-bottom-xs'])
Z([[6],[[7],[3,'wxOrderRuleRes']],[3,'agreementTitle']])
Z([3,'hideRuleResModal'])
Z([a,[3,'yu-btn '],[[2,'?:'],[[2,'>'],[[7],[3,'ruleResCountdown']],[1,0]],[1,'bg-gray '],[1,'bg-']],[[7],[3,'primary']]])
Z([3,'item-hover'])
Z([[2,'>'],[[7],[3,'ruleResCountdown']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_30=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_30=true;
var x=['./components/orderRuleModal/orderRuleModal.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_30_1()
var x9Y=_n('view')
_rz(z,x9Y,'class',0,e,s,gg)
var o0Y=_mz(z,'scroll-view',['enableFlex',-1,'scrollWithAnimation',-1,'scrollY',-1,'class',1],[],e,s,gg)
var fAZ=_v()
_(o0Y,fAZ)
if(_oz(z,2,e,s,gg)){fAZ.wxVkey=1
}
var cBZ=_v()
_(o0Y,cBZ)
if(_oz(z,3,e,s,gg)){cBZ.wxVkey=1
}
var hCZ=_v()
_(o0Y,hCZ)
if(_oz(z,4,e,s,gg)){hCZ.wxVkey=1
}
var oDZ=_v()
_(o0Y,oDZ)
if(_oz(z,5,e,s,gg)){oDZ.wxVkey=1
}
fAZ.wxXCkey=1
cBZ.wxXCkey=1
hCZ.wxXCkey=1
oDZ.wxXCkey=1
_(x9Y,o0Y)
var cEZ=_n('view')
_rz(z,cEZ,'class',6,e,s,gg)
var oFZ=_v()
_(cEZ,oFZ)
if(_oz(z,7,e,s,gg)){oFZ.wxVkey=1
var lGZ=_mz(z,'view',['bind:tap',8,'class',1],[],e,s,gg)
var aHZ=_v()
_(lGZ,aHZ)
if(_oz(z,10,e,s,gg)){aHZ.wxVkey=1
}
aHZ.wxXCkey=1
_(oFZ,lGZ)
}
else{oFZ.wxVkey=2
}
var tIZ=_mz(z,'button',['bindtap',11,'class',1,'hoverClass',2],[],e,s,gg)
var eJZ=_v()
_(tIZ,eJZ)
if(_oz(z,14,e,s,gg)){eJZ.wxVkey=1
}
eJZ.wxXCkey=1
_(cEZ,tIZ)
oFZ.wxXCkey=1
_(x9Y,cEZ)
_(r,x9Y)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_30";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_30();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/orderRuleModal/orderRuleModal.wxml'] = [$gwx_XC_30, './components/orderRuleModal/orderRuleModal.wxml'];else __wxAppCode__['components/orderRuleModal/orderRuleModal.wxml'] = $gwx_XC_30( './components/orderRuleModal/orderRuleModal.wxml' );
	;__wxRoute = "components/orderRuleModal/orderRuleModal";__wxRouteBegin = true;__wxAppCurrentFile__="components/orderRuleModal/orderRuleModal.js";define("components/orderRuleModal/orderRuleModal.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../@babel/runtime/helpers/Arrayincludes");var e=getApp();Component({properties:{wxOrderRuleRes:{type:Object,default:{},observer:function(t){var o=null,a=t,l=this.data.checkOption,r=this.data.showRuleDescribe;a&&(l=0,e.util.isNull(a.buttonName)&&(a.buttonName="好的，我知道了"),a.popup&&(o="orderRuleModal",l=a.checkOption),this.data.isHKMO&&(r=!1),a.orderNotice&&(a.orderNotice=a.orderNotice.replace(/替换小程序名称/g,e.globalData.corp.corpName)),a.checkContent&&(a.checkContent=a.checkContent.replace(/替换小程序名称/g,e.globalData.corp.corpName)),a.agreementTitle&&(a.agreementTitle=a.agreementTitle.replace(/替换小程序名称/g,e.globalData.corp.corpName))),this.setData({wxOrderRuleRes:a,bottomModalName:o,checkOption:l,showRuleDescribe:r}),a&&a.popup&&this.data.firstRuleResCountdown&&(this.setData({firstRuleResCountdown:!1,ruleResCountdown:a.countdown||0}),this.orderRuleResCountDown())}},isHKMO:{type:Boolean,default:!1}},data:{primary:e.globalData.corpXcx.primary,bottomModalName:null,checkOption:0,ruleResCountdown:0,firstRuleResCountdown:!0,showRuleDescribe:!0,orderRuleTitle:"购票退改规则",orderNoticeTitle:"购票须知",refundRuleTitle:"退票规则",changeRuleTitle:"改签规则",changeRefundRuleTitle:"改签后退票规则"},methods:{tapCheckOption:function(){var e=this.data.checkOption;e=1==e?2:2==e?1:0,this.setData({checkOption:e})},toAgreementPage:function(e){wx.navigateTo({url:"/package/fillorderAgreement/pages/fillorderAgreement/fillorderAgreement?ruleId=".concat(e.currentTarget.dataset.wxorderruleid)})},hideRuleResModal:function(t){this.data.ruleResCountdown>0||(2!=this.data.checkOption?this.setData({bottomModalName:null}):e.util.showMsg("请勾选"+this.data.wxOrderRuleRes.checkContent))},orderRuleResCountDown:function(){var e=this,t=this.data.ruleResCountdown;t>0&&setTimeout((function(){e.setData({ruleResCountdown:t-1}),e.orderRuleResCountDown()}),1e3)},onShowFieldChange:function(){this.data.isHKMO||this.setData({showRuleDescribe:!this.data.showRuleDescribe})},show:function(){this.setData({bottomModalName:"orderRuleModal"})},hide:function(){this.setData({bottomModalName:null})}},lifetimes:{attached:function(){var t=this.data,o=t.orderRuleTitle,a=t.orderNoticeTitle,l=t.refundRuleTitle,r=t.changeRuleTitle,i=t.changeRefundRuleTitle;"qtwx"==e.globalData.corp.ID?(o="拼团包车规则",a="拼团须知",l="拼团退款规则",r="拼团改签规则",i="拼团改签后退票规则"):["xyjxztc","czxyjx","xyxybs","hdxyjx"].includes(e.globalData.corp.ID)?(o="拼团退改规则",a="拼团须知",l="退团规则",i="改签后退团规则"):["jxztc"].includes(e.globalData.corp.ID)&&["wxf117f28ee16c3208"].includes(e.globalData.corp.appid)&&(o="拼团出行退改规则",a="拼团出行须知",l="拼团出行退订规则",r="拼团出行改签规则",i="拼团出行改签后退订规则"),this.setData({orderRuleTitle:o,orderNoticeTitle:a,refundRuleTitle:l,changeRuleTitle:r,changeRefundRuleTitle:i})},ready:function(){}}});
},{isPage:false,isComponent:true,currentFile:'components/orderRuleModal/orderRuleModal.js'});require("components/orderRuleModal/orderRuleModal.js");