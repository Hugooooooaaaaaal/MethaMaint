(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function La(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ee={},ur=[],Vt=()=>{},Rm=()=>!1,$i=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ua=t=>t.startsWith("onUpdate:"),tt=Object.assign,Ba=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Pm=Object.prototype.hasOwnProperty,me=(t,e)=>Pm.call(t,e),te=Array.isArray,hr=t=>ji(t)==="[object Map]",$h=t=>ji(t)==="[object Set]",ie=t=>typeof t=="function",Ve=t=>typeof t=="string",Tn=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",jh=t=>(Ae(t)||ie(t))&&ie(t.then)&&ie(t.catch),Hh=Object.prototype.toString,ji=t=>Hh.call(t),Dm=t=>ji(t).slice(8,-1),qh=t=>ji(t)==="[object Object]",$a=t=>Ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,es=La(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Vm=/-(\w)/g,fn=Hi(t=>t.replace(Vm,(e,n)=>n?n.toUpperCase():"")),xm=/\B([A-Z])/g,Gn=Hi(t=>t.replace(xm,"-$1").toLowerCase()),zh=Hi(t=>t.charAt(0).toUpperCase()+t.slice(1)),Do=Hi(t=>t?`on${zh(t)}`:""),ln=(t,e)=>!Object.is(t,e),Vo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Kh=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Om=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Cc;const qi=()=>Cc||(Cc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ja(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ve(r)?Fm(r):ja(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ve(t)||Ae(t))return t}const Mm=/;(?![^(]*\))/g,km=/:([^]+)/,Nm=/\/\*[^]*?\*\//g;function Fm(t){const e={};return t.replace(Nm,"").split(Mm).forEach(n=>{if(n){const r=n.split(km);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ha(t){let e="";if(Ve(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const r=Ha(t[n]);r&&(e+=r+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Lm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Um=La(Lm);function Gh(t){return!!t||t===""}const Wh=t=>!!(t&&t.__v_isRef===!0),li=t=>Ve(t)?t:t==null?"":te(t)||Ae(t)&&(t.toString===Hh||!ie(t.toString))?Wh(t)?li(t.value):JSON.stringify(t,Qh,2):String(t),Qh=(t,e)=>Wh(e)?Qh(t,e.value):hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[xo(r,i)+" =>"]=s,n),{})}:$h(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>xo(n))}:Tn(e)?xo(e):Ae(e)&&!te(e)&&!qh(e)?String(e):e,xo=(t,e="")=>{var n;return Tn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let st;class Yh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=st,!e&&st&&(this.index=(st.scopes||(st.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=st;try{return st=this,e()}finally{st=n}}}on(){st=this}off(){st=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Bm(t){return new Yh(t)}function $m(){return st}function jm(t,e=!1){st&&st.cleanups.push(t)}let Te;const Oo=new WeakSet;class Xh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,st&&st.active&&st.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Oo.has(this)&&(Oo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Rc(this),ef(this);const e=Te,n=Et;Te=this,Et=!0;try{return this.fn()}finally{tf(this),Te=e,Et=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ka(e);this.deps=this.depsTail=void 0,Rc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Oo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ta(this)&&this.run()}get dirty(){return ta(this)}}let Jh=0,ts,ns;function Zh(t,e=!1){if(t.flags|=8,e){t.next=ns,ns=t;return}t.next=ts,ts=t}function qa(){Jh++}function za(){if(--Jh>0)return;if(ns){let e=ns;for(ns=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ts;){let e=ts;for(ts=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ef(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function tf(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ka(r),Hm(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ta(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(nf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function nf(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===hs))return;t.globalVersion=hs;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ta(t)){t.flags&=-3;return}const n=Te,r=Et;Te=t,Et=!0;try{ef(t);const s=t.fn(t._value);(e.version===0||ln(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Te=n,Et=r,tf(t),t.flags&=-3}}function Ka(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ka(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Hm(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Et=!0;const rf=[];function En(){rf.push(Et),Et=!1}function wn(){const t=rf.pop();Et=t===void 0?!0:t}function Rc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Te;Te=void 0;try{e()}finally{Te=n}}}let hs=0;class qm{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ga{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Te||!Et||Te===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Te)n=this.activeLink=new qm(Te,this),Te.deps?(n.prevDep=Te.depsTail,Te.depsTail.nextDep=n,Te.depsTail=n):Te.deps=Te.depsTail=n,sf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Te.depsTail,n.nextDep=void 0,Te.depsTail.nextDep=n,Te.depsTail=n,Te.deps===n&&(Te.deps=r)}return n}trigger(e){this.version++,hs++,this.notify(e)}notify(e){qa();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{za()}}}function sf(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)sf(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const yi=new WeakMap,Ln=Symbol(""),na=Symbol(""),fs=Symbol("");function Xe(t,e,n){if(Et&&Te){let r=yi.get(t);r||yi.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ga),s.map=r,s.key=n),s.track()}}function Ht(t,e,n,r,s,i){const a=yi.get(t);if(!a){hs++;return}const l=u=>{u&&u.trigger()};if(qa(),e==="clear")a.forEach(l);else{const u=te(t),f=u&&$a(n);if(u&&n==="length"){const d=Number(r);a.forEach((m,T)=>{(T==="length"||T===fs||!Tn(T)&&T>=d)&&l(m)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),f&&l(a.get(fs)),e){case"add":u?f&&l(a.get("length")):(l(a.get(Ln)),hr(t)&&l(a.get(na)));break;case"delete":u||(l(a.get(Ln)),hr(t)&&l(a.get(na)));break;case"set":hr(t)&&l(a.get(Ln));break}}za()}function zm(t,e){const n=yi.get(t);return n&&n.get(e)}function tr(t){const e=ge(t);return e===t?e:(Xe(e,"iterate",fs),yt(t)?e:e.map(Je))}function zi(t){return Xe(t=ge(t),"iterate",fs),t}const Km={__proto__:null,[Symbol.iterator](){return Mo(this,Symbol.iterator,Je)},concat(...t){return tr(this).concat(...t.map(e=>te(e)?tr(e):e))},entries(){return Mo(this,"entries",t=>(t[1]=Je(t[1]),t))},every(t,e){return $t(this,"every",t,e,void 0,arguments)},filter(t,e){return $t(this,"filter",t,e,n=>n.map(Je),arguments)},find(t,e){return $t(this,"find",t,e,Je,arguments)},findIndex(t,e){return $t(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return $t(this,"findLast",t,e,Je,arguments)},findLastIndex(t,e){return $t(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return $t(this,"forEach",t,e,void 0,arguments)},includes(...t){return ko(this,"includes",t)},indexOf(...t){return ko(this,"indexOf",t)},join(t){return tr(this).join(t)},lastIndexOf(...t){return ko(this,"lastIndexOf",t)},map(t,e){return $t(this,"map",t,e,void 0,arguments)},pop(){return Wr(this,"pop")},push(...t){return Wr(this,"push",t)},reduce(t,...e){return Pc(this,"reduce",t,e)},reduceRight(t,...e){return Pc(this,"reduceRight",t,e)},shift(){return Wr(this,"shift")},some(t,e){return $t(this,"some",t,e,void 0,arguments)},splice(...t){return Wr(this,"splice",t)},toReversed(){return tr(this).toReversed()},toSorted(t){return tr(this).toSorted(t)},toSpliced(...t){return tr(this).toSpliced(...t)},unshift(...t){return Wr(this,"unshift",t)},values(){return Mo(this,"values",Je)}};function Mo(t,e,n){const r=zi(t),s=r[e]();return r!==t&&!yt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Gm=Array.prototype;function $t(t,e,n,r,s,i){const a=zi(t),l=a!==t&&!yt(t),u=a[e];if(u!==Gm[e]){const m=u.apply(t,i);return l?Je(m):m}let f=n;a!==t&&(l?f=function(m,T){return n.call(this,Je(m),T,t)}:n.length>2&&(f=function(m,T){return n.call(this,m,T,t)}));const d=u.call(a,f,r);return l&&s?s(d):d}function Pc(t,e,n,r){const s=zi(t);let i=n;return s!==t&&(yt(t)?n.length>3&&(i=function(a,l,u){return n.call(this,a,l,u,t)}):i=function(a,l,u){return n.call(this,a,Je(l),u,t)}),s[e](i,...r)}function ko(t,e,n){const r=ge(t);Xe(r,"iterate",fs);const s=r[e](...n);return(s===-1||s===!1)&&Ya(n[0])?(n[0]=ge(n[0]),r[e](...n)):s}function Wr(t,e,n=[]){En(),qa();const r=ge(t)[e].apply(t,n);return za(),wn(),r}const Wm=La("__proto__,__v_isRef,__isVue"),of=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tn));function Qm(t){Tn(t)||(t=String(t));const e=ge(this);return Xe(e,"has",t),e.hasOwnProperty(t)}class af{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?ip:hf:i?uf:cf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=te(e);if(!s){let u;if(a&&(u=Km[n]))return u;if(n==="hasOwnProperty")return Qm}const l=Reflect.get(e,n,He(e)?e:r);return(Tn(n)?of.has(n):Wm(n))||(s||Xe(e,"get",n),i)?l:He(l)?a&&$a(n)?l:l.value:Ae(l)?s?ff(l):Rr(l):l}}class lf extends af{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const u=jn(i);if(!yt(r)&&!jn(r)&&(i=ge(i),r=ge(r)),!te(e)&&He(i)&&!He(r))return u?!1:(i.value=r,!0)}const a=te(e)&&$a(n)?Number(n)<e.length:me(e,n),l=Reflect.set(e,n,r,He(e)?e:s);return e===ge(s)&&(a?ln(r,i)&&Ht(e,"set",n,r):Ht(e,"add",n,r)),l}deleteProperty(e,n){const r=me(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Ht(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Tn(n)||!of.has(n))&&Xe(e,"has",n),r}ownKeys(e){return Xe(e,"iterate",te(e)?"length":Ln),Reflect.ownKeys(e)}}class Ym extends af{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Xm=new lf,Jm=new Ym,Zm=new lf(!0);const ra=t=>t,Qs=t=>Reflect.getPrototypeOf(t);function ep(t,e,n){return function(...r){const s=this.__v_raw,i=ge(s),a=hr(i),l=t==="entries"||t===Symbol.iterator&&a,u=t==="keys"&&a,f=s[t](...r),d=n?ra:e?sa:Je;return!e&&Xe(i,"iterate",u?na:Ln),{next(){const{value:m,done:T}=f.next();return T?{value:m,done:T}:{value:l?[d(m[0]),d(m[1])]:d(m),done:T}},[Symbol.iterator](){return this}}}}function Ys(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function tp(t,e){const n={get(s){const i=this.__v_raw,a=ge(i),l=ge(s);t||(ln(s,l)&&Xe(a,"get",s),Xe(a,"get",l));const{has:u}=Qs(a),f=e?ra:t?sa:Je;if(u.call(a,s))return f(i.get(s));if(u.call(a,l))return f(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Xe(ge(s),"iterate",Ln),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=ge(i),l=ge(s);return t||(ln(s,l)&&Xe(a,"has",s),Xe(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,u=ge(l),f=e?ra:t?sa:Je;return!t&&Xe(u,"iterate",Ln),l.forEach((d,m)=>s.call(i,f(d),f(m),a))}};return tt(n,t?{add:Ys("add"),set:Ys("set"),delete:Ys("delete"),clear:Ys("clear")}:{add(s){!e&&!yt(s)&&!jn(s)&&(s=ge(s));const i=ge(this);return Qs(i).has.call(i,s)||(i.add(s),Ht(i,"add",s,s)),this},set(s,i){!e&&!yt(i)&&!jn(i)&&(i=ge(i));const a=ge(this),{has:l,get:u}=Qs(a);let f=l.call(a,s);f||(s=ge(s),f=l.call(a,s));const d=u.call(a,s);return a.set(s,i),f?ln(i,d)&&Ht(a,"set",s,i):Ht(a,"add",s,i),this},delete(s){const i=ge(this),{has:a,get:l}=Qs(i);let u=a.call(i,s);u||(s=ge(s),u=a.call(i,s)),l&&l.call(i,s);const f=i.delete(s);return u&&Ht(i,"delete",s,void 0),f},clear(){const s=ge(this),i=s.size!==0,a=s.clear();return i&&Ht(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ep(s,t,e)}),n}function Wa(t,e){const n=tp(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(me(n,s)&&s in r?n:r,s,i)}const np={get:Wa(!1,!1)},rp={get:Wa(!1,!0)},sp={get:Wa(!0,!1)};const cf=new WeakMap,uf=new WeakMap,hf=new WeakMap,ip=new WeakMap;function op(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ap(t){return t.__v_skip||!Object.isExtensible(t)?0:op(Dm(t))}function Rr(t){return jn(t)?t:Qa(t,!1,Xm,np,cf)}function lp(t){return Qa(t,!1,Zm,rp,uf)}function ff(t){return Qa(t,!0,Jm,sp,hf)}function Qa(t,e,n,r,s){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=ap(t);if(a===0)return t;const l=new Proxy(t,a===2?r:n);return s.set(t,l),l}function fr(t){return jn(t)?fr(t.__v_raw):!!(t&&t.__v_isReactive)}function jn(t){return!!(t&&t.__v_isReadonly)}function yt(t){return!!(t&&t.__v_isShallow)}function Ya(t){return t?!!t.__v_raw:!1}function ge(t){const e=t&&t.__v_raw;return e?ge(e):t}function cp(t){return!me(t,"__v_skip")&&Object.isExtensible(t)&&Kh(t,"__v_skip",!0),t}const Je=t=>Ae(t)?Rr(t):t,sa=t=>Ae(t)?ff(t):t;function He(t){return t?t.__v_isRef===!0:!1}function Hn(t){return df(t,!1)}function dr(t){return df(t,!0)}function df(t,e){return He(t)?t:new up(t,e)}class up{constructor(e,n){this.dep=new Ga,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ge(e),this._value=n?e:Je(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||yt(e)||jn(e);e=r?e:ge(e),ln(e,n)&&(this._rawValue=e,this._value=r?e:Je(e),this.dep.trigger())}}function hp(t){return He(t)?t.value:t}const fp={get:(t,e,n)=>e==="__v_raw"?t:hp(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return He(s)&&!He(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function gf(t){return fr(t)?t:new Proxy(t,fp)}function dp(t){const e=te(t)?new Array(t.length):{};for(const n in t)e[n]=mp(t,n);return e}class gp{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return zm(ge(this._object),this._key)}}function mp(t,e,n){const r=t[e];return He(r)?r:new gp(t,e,n)}class pp{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ga(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=hs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Te!==this)return Zh(this,!0),!0}get value(){const e=this.dep.track();return nf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function yp(t,e,n=!1){let r,s;return ie(t)?r=t:(r=t.get,s=t.set),new pp(r,s,n)}const Xs={},_i=new WeakMap;let Mn;function _p(t,e=!1,n=Mn){if(n){let r=_i.get(n);r||_i.set(n,r=[]),r.push(t)}}function vp(t,e,n=Ee){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:u}=n,f=z=>s?z:yt(z)||s===!1||s===0?sn(z,1):sn(z);let d,m,T,I,V=!1,P=!1;if(He(t)?(m=()=>t.value,V=yt(t)):fr(t)?(m=()=>f(t),V=!0):te(t)?(P=!0,V=t.some(z=>fr(z)||yt(z)),m=()=>t.map(z=>{if(He(z))return z.value;if(fr(z))return f(z);if(ie(z))return u?u(z,2):z()})):ie(t)?e?m=u?()=>u(t,2):t:m=()=>{if(T){En();try{T()}finally{wn()}}const z=Mn;Mn=d;try{return u?u(t,3,[I]):t(I)}finally{Mn=z}}:m=Vt,e&&s){const z=m,pe=s===!0?1/0:s;m=()=>sn(z(),pe)}const O=$m(),K=()=>{d.stop(),O&&O.active&&Ba(O.effects,d)};if(i&&e){const z=e;e=(...pe)=>{z(...pe),K()}}let W=P?new Array(t.length).fill(Xs):Xs;const ee=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const pe=d.run();if(s||V||(P?pe.some((ve,A)=>ln(ve,W[A])):ln(pe,W))){T&&T();const ve=Mn;Mn=d;try{const A=[pe,W===Xs?void 0:P&&W[0]===Xs?[]:W,I];u?u(e,3,A):e(...A),W=pe}finally{Mn=ve}}}else d.run()};return l&&l(ee),d=new Xh(m),d.scheduler=a?()=>a(ee,!1):ee,I=z=>_p(z,!1,d),T=d.onStop=()=>{const z=_i.get(d);if(z){if(u)u(z,4);else for(const pe of z)pe();_i.delete(d)}},e?r?ee(!0):W=d.run():a?a(ee.bind(null,!0),!0):d.run(),K.pause=d.pause.bind(d),K.resume=d.resume.bind(d),K.stop=K,K}function sn(t,e=1/0,n){if(e<=0||!Ae(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,He(t))sn(t.value,e,n);else if(te(t))for(let r=0;r<t.length;r++)sn(t[r],e,n);else if($h(t)||hr(t))t.forEach(r=>{sn(r,e,n)});else if(qh(t)){for(const r in t)sn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&sn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function As(t,e,n,r){try{return r?t(...r):t()}catch(s){Ki(s,e,n)}}function Mt(t,e,n,r){if(ie(t)){const s=As(t,e,n,r);return s&&jh(s)&&s.catch(i=>{Ki(i,e,n)}),s}if(te(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Mt(t[i],e,n,r));return s}}function Ki(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ee;if(e){let l=e.parent;const u=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let m=0;m<d.length;m++)if(d[m](t,u,f)===!1)return}l=l.parent}if(i){En(),As(i,null,10,[t,u,f]),wn();return}}Tp(t,n,s,r,a)}function Tp(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const it=[];let At=-1;const gr=[];let nn=null,sr=0;const mf=Promise.resolve();let vi=null;function pf(t){const e=vi||mf;return t?e.then(this?t.bind(this):t):e}function Ep(t){let e=At+1,n=it.length;for(;e<n;){const r=e+n>>>1,s=it[r],i=ds(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Xa(t){if(!(t.flags&1)){const e=ds(t),n=it[it.length-1];!n||!(t.flags&2)&&e>=ds(n)?it.push(t):it.splice(Ep(e),0,t),t.flags|=1,yf()}}function yf(){vi||(vi=mf.then(vf))}function wp(t){te(t)?gr.push(...t):nn&&t.id===-1?nn.splice(sr+1,0,t):t.flags&1||(gr.push(t),t.flags|=1),yf()}function Dc(t,e,n=At+1){for(;n<it.length;n++){const r=it[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;it.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function _f(t){if(gr.length){const e=[...new Set(gr)].sort((n,r)=>ds(n)-ds(r));if(gr.length=0,nn){nn.push(...e);return}for(nn=e,sr=0;sr<nn.length;sr++){const n=nn[sr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}nn=null,sr=0}}const ds=t=>t.id==null?t.flags&2?-1:1/0:t.id;function vf(t){try{for(At=0;At<it.length;At++){const e=it[At];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),As(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;At<it.length;At++){const e=it[At];e&&(e.flags&=-2)}At=-1,it.length=0,_f(),vi=null,(it.length||gr.length)&&vf()}}let Tt=null,Tf=null;function Ti(t){const e=Tt;return Tt=t,Tf=t&&t.type.__scopeId||null,e}function Ef(t,e=Tt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Uc(-1);const i=Ti(e);let a;try{a=t(...s)}finally{Ti(i),r._d&&Uc(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Vn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let u=l.dir[r];u&&(En(),Mt(u,n,8,[t.el,l,t,e]),wn())}}const Ip=Symbol("_vte"),Ap=t=>t.__isTeleport;function Ja(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ja(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function wf(t,e){return ie(t)?tt({name:t.name},e,{setup:t}):t}function If(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ei(t,e,n,r,s=!1){if(te(t)){t.forEach((V,P)=>Ei(V,e&&(te(e)?e[P]:e),n,r,s));return}if(rs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ei(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?sl(r.component):r.el,a=s?null:i,{i:l,r:u}=t,f=e&&e.r,d=l.refs===Ee?l.refs={}:l.refs,m=l.setupState,T=ge(m),I=m===Ee?()=>!1:V=>me(T,V);if(f!=null&&f!==u&&(Ve(f)?(d[f]=null,I(f)&&(m[f]=null)):He(f)&&(f.value=null)),ie(u))As(u,l,12,[a,d]);else{const V=Ve(u),P=He(u);if(V||P){const O=()=>{if(t.f){const K=V?I(u)?m[u]:d[u]:u.value;s?te(K)&&Ba(K,i):te(K)?K.includes(i)||K.push(i):V?(d[u]=[i],I(u)&&(m[u]=d[u])):(u.value=[i],t.k&&(d[t.k]=u.value))}else V?(d[u]=a,I(u)&&(m[u]=a)):P&&(u.value=a,t.k&&(d[t.k]=a))};a?(O.id=-1,ft(O,n)):O()}}}qi().requestIdleCallback;qi().cancelIdleCallback;const rs=t=>!!t.type.__asyncLoader,Af=t=>t.type.__isKeepAlive;function bp(t,e){bf(t,"a",e)}function Sp(t,e){bf(t,"da",e)}function bf(t,e,n=et){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Gi(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Af(s.parent.vnode)&&Cp(r,e,n,s),s=s.parent}}function Cp(t,e,n,r){const s=Gi(e,t,r,!0);Cf(()=>{Ba(r[e],s)},n)}function Gi(t,e,n=et,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{En();const l=bs(n),u=Mt(e,n,t,a);return l(),wn(),u});return r?s.unshift(i):s.push(i),i}}const Yt=t=>(e,n=et)=>{(!ps||t==="sp")&&Gi(t,(...r)=>e(...r),n)},Rp=Yt("bm"),Sf=Yt("m"),Pp=Yt("bu"),Dp=Yt("u"),Vp=Yt("bum"),Cf=Yt("um"),xp=Yt("sp"),Op=Yt("rtg"),Mp=Yt("rtc");function kp(t,e=et){Gi("ec",t,e)}const Np=Symbol.for("v-ndc");function Fp(t,e,n,r){let s;const i=n,a=te(t);if(a||Ve(t)){const l=a&&fr(t);let u=!1;l&&(u=!yt(t),t=zi(t)),s=new Array(t.length);for(let f=0,d=t.length;f<d;f++)s[f]=e(u?Je(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ae(t))if(t[Symbol.iterator])s=Array.from(t,(l,u)=>e(l,u,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let u=0,f=l.length;u<f;u++){const d=l[u];s[u]=e(t[d],d,u,i)}}else s=[];return s}const ia=t=>t?Qf(t)?sl(t):ia(t.parent):null,ss=tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ia(t.parent),$root:t=>ia(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Pf(t),$forceUpdate:t=>t.f||(t.f=()=>{Xa(t.update)}),$nextTick:t=>t.n||(t.n=pf.bind(t.proxy)),$watch:t=>sy.bind(t)}),No=(t,e)=>t!==Ee&&!t.__isScriptSetup&&me(t,e),Lp={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:u}=t;let f;if(e[0]!=="$"){const I=a[e];if(I!==void 0)switch(I){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(No(r,e))return a[e]=1,r[e];if(s!==Ee&&me(s,e))return a[e]=2,s[e];if((f=t.propsOptions[0])&&me(f,e))return a[e]=3,i[e];if(n!==Ee&&me(n,e))return a[e]=4,n[e];oa&&(a[e]=0)}}const d=ss[e];let m,T;if(d)return e==="$attrs"&&Xe(t.attrs,"get",""),d(t);if((m=l.__cssModules)&&(m=m[e]))return m;if(n!==Ee&&me(n,e))return a[e]=4,n[e];if(T=u.config.globalProperties,me(T,e))return T[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return No(s,e)?(s[e]=n,!0):r!==Ee&&me(r,e)?(r[e]=n,!0):me(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||t!==Ee&&me(t,a)||No(e,a)||(l=i[0])&&me(l,a)||me(r,a)||me(ss,a)||me(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:me(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Vc(t){return te(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let oa=!0;function Up(t){const e=Pf(t),n=t.proxy,r=t.ctx;oa=!1,e.beforeCreate&&xc(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:u,inject:f,created:d,beforeMount:m,mounted:T,beforeUpdate:I,updated:V,activated:P,deactivated:O,beforeDestroy:K,beforeUnmount:W,destroyed:ee,unmounted:z,render:pe,renderTracked:ve,renderTriggered:A,errorCaptured:p,serverPrefetch:v,expose:w,inheritAttrs:b,components:C,directives:_,filters:ut}=e;if(f&&Bp(f,r,null),a)for(const ye in a){const fe=a[ye];ie(fe)&&(r[ye]=fe.bind(n))}if(s){const ye=s.call(n,n);Ae(ye)&&(t.data=Rr(ye))}if(oa=!0,i)for(const ye in i){const fe=i[ye],_t=ie(fe)?fe.bind(n,n):ie(fe.get)?fe.get.bind(n,n):Vt,An=!ie(fe)&&ie(fe.set)?fe.set.bind(n):Vt,Ft=je({get:_t,set:An});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>Ft.value,set:xe=>Ft.value=xe})}if(l)for(const ye in l)Rf(l[ye],r,n,ye);if(u){const ye=ie(u)?u.call(n):u;Reflect.ownKeys(ye).forEach(fe=>{Za(fe,ye[fe])})}d&&xc(d,t,"c");function Fe(ye,fe){te(fe)?fe.forEach(_t=>ye(_t.bind(n))):fe&&ye(fe.bind(n))}if(Fe(Rp,m),Fe(Sf,T),Fe(Pp,I),Fe(Dp,V),Fe(bp,P),Fe(Sp,O),Fe(kp,p),Fe(Mp,ve),Fe(Op,A),Fe(Vp,W),Fe(Cf,z),Fe(xp,v),te(w))if(w.length){const ye=t.exposed||(t.exposed={});w.forEach(fe=>{Object.defineProperty(ye,fe,{get:()=>n[fe],set:_t=>n[fe]=_t})})}else t.exposed||(t.exposed={});pe&&t.render===Vt&&(t.render=pe),b!=null&&(t.inheritAttrs=b),C&&(t.components=C),_&&(t.directives=_),v&&If(t)}function Bp(t,e,n=Vt){te(t)&&(t=aa(t));for(const r in t){const s=t[r];let i;Ae(s)?"default"in s?i=pr(s.from||r,s.default,!0):i=pr(s.from||r):i=pr(s),He(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function xc(t,e,n){Mt(te(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rf(t,e,n,r){let s=r.includes(".")?jf(n,r):()=>n[r];if(Ve(t)){const i=e[t];ie(i)&&zt(s,i)}else if(ie(t))zt(s,t.bind(n));else if(Ae(t))if(te(t))t.forEach(i=>Rf(i,e,n,r));else{const i=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(i)&&zt(s,i,t)}}function Pf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let u;return l?u=l:!s.length&&!n&&!r?u=e:(u={},s.length&&s.forEach(f=>wi(u,f,a,!0)),wi(u,e,a)),Ae(e)&&i.set(e,u),u}function wi(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&wi(t,i,n,!0),s&&s.forEach(a=>wi(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=$p[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const $p={data:Oc,props:Mc,emits:Mc,methods:Yr,computed:Yr,beforeCreate:rt,created:rt,beforeMount:rt,mounted:rt,beforeUpdate:rt,updated:rt,beforeDestroy:rt,beforeUnmount:rt,destroyed:rt,unmounted:rt,activated:rt,deactivated:rt,errorCaptured:rt,serverPrefetch:rt,components:Yr,directives:Yr,watch:Hp,provide:Oc,inject:jp};function Oc(t,e){return e?t?function(){return tt(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function jp(t,e){return Yr(aa(t),aa(e))}function aa(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function rt(t,e){return t?[...new Set([].concat(t,e))]:e}function Yr(t,e){return t?tt(Object.create(null),t,e):e}function Mc(t,e){return t?te(t)&&te(e)?[...new Set([...t,...e])]:tt(Object.create(null),Vc(t),Vc(e??{})):e}function Hp(t,e){if(!t)return e;if(!e)return t;const n=tt(Object.create(null),t);for(const r in e)n[r]=rt(t[r],e[r]);return n}function Df(){return{app:null,config:{isNativeTag:Rm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qp=0;function zp(t,e){return function(r,s=null){ie(r)||(r=tt({},r)),s!=null&&!Ae(s)&&(s=null);const i=Df(),a=new WeakSet,l=[];let u=!1;const f=i.app={_uid:qp++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Sy,get config(){return i.config},set config(d){},use(d,...m){return a.has(d)||(d&&ie(d.install)?(a.add(d),d.install(f,...m)):ie(d)&&(a.add(d),d(f,...m))),f},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),f},component(d,m){return m?(i.components[d]=m,f):i.components[d]},directive(d,m){return m?(i.directives[d]=m,f):i.directives[d]},mount(d,m,T){if(!u){const I=f._ceVNode||Ie(r,s);return I.appContext=i,T===!0?T="svg":T===!1&&(T=void 0),t(I,d,T),u=!0,f._container=d,d.__vue_app__=f,sl(I.component)}},onUnmount(d){l.push(d)},unmount(){u&&(Mt(l,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(d,m){return i.provides[d]=m,f},runWithContext(d){const m=mr;mr=f;try{return d()}finally{mr=m}}};return f}}let mr=null;function Za(t,e){if(et){let n=et.provides;const r=et.parent&&et.parent.provides;r===n&&(n=et.provides=Object.create(r)),n[t]=e}}function pr(t,e,n=!1){const r=et||Tt;if(r||mr){const s=mr?mr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ie(e)?e.call(r&&r.proxy):e}}const Vf={},xf=()=>Object.create(Vf),Of=t=>Object.getPrototypeOf(t)===Vf;function Kp(t,e,n,r=!1){const s={},i=xf();t.propsDefaults=Object.create(null),Mf(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:lp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Gp(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=ge(s),[u]=t.propsOptions;let f=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let m=0;m<d.length;m++){let T=d[m];if(Wi(t.emitsOptions,T))continue;const I=e[T];if(u)if(me(i,T))I!==i[T]&&(i[T]=I,f=!0);else{const V=fn(T);s[V]=la(u,l,V,I,t,!1)}else I!==i[T]&&(i[T]=I,f=!0)}}}else{Mf(t,e,s,i)&&(f=!0);let d;for(const m in l)(!e||!me(e,m)&&((d=Gn(m))===m||!me(e,d)))&&(u?n&&(n[m]!==void 0||n[d]!==void 0)&&(s[m]=la(u,l,m,void 0,t,!0)):delete s[m]);if(i!==l)for(const m in i)(!e||!me(e,m))&&(delete i[m],f=!0)}f&&Ht(t.attrs,"set","")}function Mf(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let u in e){if(es(u))continue;const f=e[u];let d;s&&me(s,d=fn(u))?!i||!i.includes(d)?n[d]=f:(l||(l={}))[d]=f:Wi(t.emitsOptions,u)||(!(u in r)||f!==r[u])&&(r[u]=f,a=!0)}if(i){const u=ge(n),f=l||Ee;for(let d=0;d<i.length;d++){const m=i[d];n[m]=la(s,u,m,f[m],t,!me(f,m))}}return a}function la(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=me(a,"default");if(l&&r===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&ie(u)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const d=bs(s);r=f[n]=u.call(null,e),d()}}else r=u;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Gn(n))&&(r=!0))}return r}const Wp=new WeakMap;function kf(t,e,n=!1){const r=n?Wp:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let u=!1;if(!ie(t)){const d=m=>{u=!0;const[T,I]=kf(m,e,!0);tt(a,T),I&&l.push(...I)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!u)return Ae(t)&&r.set(t,ur),ur;if(te(i))for(let d=0;d<i.length;d++){const m=fn(i[d]);kc(m)&&(a[m]=Ee)}else if(i)for(const d in i){const m=fn(d);if(kc(m)){const T=i[d],I=a[m]=te(T)||ie(T)?{type:T}:tt({},T),V=I.type;let P=!1,O=!0;if(te(V))for(let K=0;K<V.length;++K){const W=V[K],ee=ie(W)&&W.name;if(ee==="Boolean"){P=!0;break}else ee==="String"&&(O=!1)}else P=ie(V)&&V.name==="Boolean";I[0]=P,I[1]=O,(P||me(I,"default"))&&l.push(m)}}const f=[a,l];return Ae(t)&&r.set(t,f),f}function kc(t){return t[0]!=="$"&&!es(t)}const Nf=t=>t[0]==="_"||t==="$stable",el=t=>te(t)?t.map(Rt):[Rt(t)],Qp=(t,e,n)=>{if(e._n)return e;const r=Ef((...s)=>el(e(...s)),n);return r._c=!1,r},Ff=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Nf(s))continue;const i=t[s];if(ie(i))e[s]=Qp(s,i,r);else if(i!=null){const a=el(i);e[s]=()=>a}}},Lf=(t,e)=>{const n=el(e);t.slots.default=()=>n},Uf=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Yp=(t,e,n)=>{const r=t.slots=xf();if(t.vnode.shapeFlag&32){const s=e._;s?(Uf(r,e,n),n&&Kh(r,"_",s,!0)):Ff(e,r)}else e&&Lf(t,e)},Xp=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Ee;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Uf(s,e,n):(i=!e.$stable,Ff(e,s)),a=e}else e&&(Lf(t,e),a={default:1});if(i)for(const l in s)!Nf(l)&&a[l]==null&&delete s[l]},ft=hy;function Jp(t){return Zp(t)}function Zp(t,e){const n=qi();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:u,setText:f,setElementText:d,parentNode:m,nextSibling:T,setScopeId:I=Vt,insertStaticContent:V}=t,P=(y,E,D,k=null,M=null,N=null,j=void 0,U=null,L=!!E.dynamicChildren)=>{if(y===E)return;y&&!Qr(y,E)&&(k=Lt(y),xe(y,M,N,!0),y=null),E.patchFlag===-2&&(L=!1,E.dynamicChildren=null);const{type:F,ref:Q,shapeFlag:H}=E;switch(F){case Qi:O(y,E,D,k);break;case gs:K(y,E,D,k);break;case Lo:y==null&&W(E,D,k,j);break;case Ct:C(y,E,D,k,M,N,j,U,L);break;default:H&1?pe(y,E,D,k,M,N,j,U,L):H&6?_(y,E,D,k,M,N,j,U,L):(H&64||H&128)&&F.process(y,E,D,k,M,N,j,U,L,wt)}Q!=null&&M&&Ei(Q,y&&y.ref,N,E||y,!E)},O=(y,E,D,k)=>{if(y==null)r(E.el=l(E.children),D,k);else{const M=E.el=y.el;E.children!==y.children&&f(M,E.children)}},K=(y,E,D,k)=>{y==null?r(E.el=u(E.children||""),D,k):E.el=y.el},W=(y,E,D,k)=>{[y.el,y.anchor]=V(y.children,E,D,k,y.el,y.anchor)},ee=({el:y,anchor:E},D,k)=>{let M;for(;y&&y!==E;)M=T(y),r(y,D,k),y=M;r(E,D,k)},z=({el:y,anchor:E})=>{let D;for(;y&&y!==E;)D=T(y),s(y),y=D;s(E)},pe=(y,E,D,k,M,N,j,U,L)=>{E.type==="svg"?j="svg":E.type==="math"&&(j="mathml"),y==null?ve(E,D,k,M,N,j,U,L):v(y,E,M,N,j,U,L)},ve=(y,E,D,k,M,N,j,U)=>{let L,F;const{props:Q,shapeFlag:H,transition:G,dirs:J}=y;if(L=y.el=a(y.type,N,Q&&Q.is,Q),H&8?d(L,y.children):H&16&&p(y.children,L,null,k,M,Fo(y,N),j,U),J&&Vn(y,null,k,"created"),A(L,y,y.scopeId,j,k),Q){for(const re in Q)re!=="value"&&!es(re)&&i(L,re,null,Q[re],N,k);"value"in Q&&i(L,"value",null,Q.value,N),(F=Q.onVnodeBeforeMount)&&It(F,k,y)}J&&Vn(y,null,k,"beforeMount");const Y=ey(M,G);Y&&G.beforeEnter(L),r(L,E,D),((F=Q&&Q.onVnodeMounted)||Y||J)&&ft(()=>{F&&It(F,k,y),Y&&G.enter(L),J&&Vn(y,null,k,"mounted")},M)},A=(y,E,D,k,M)=>{if(D&&I(y,D),k)for(let N=0;N<k.length;N++)I(y,k[N]);if(M){let N=M.subTree;if(E===N||qf(N.type)&&(N.ssContent===E||N.ssFallback===E)){const j=M.vnode;A(y,j,j.scopeId,j.slotScopeIds,M.parent)}}},p=(y,E,D,k,M,N,j,U,L=0)=>{for(let F=L;F<y.length;F++){const Q=y[F]=U?rn(y[F]):Rt(y[F]);P(null,Q,E,D,k,M,N,j,U)}},v=(y,E,D,k,M,N,j)=>{const U=E.el=y.el;let{patchFlag:L,dynamicChildren:F,dirs:Q}=E;L|=y.patchFlag&16;const H=y.props||Ee,G=E.props||Ee;let J;if(D&&xn(D,!1),(J=G.onVnodeBeforeUpdate)&&It(J,D,E,y),Q&&Vn(E,y,D,"beforeUpdate"),D&&xn(D,!0),(H.innerHTML&&G.innerHTML==null||H.textContent&&G.textContent==null)&&d(U,""),F?w(y.dynamicChildren,F,U,D,k,Fo(E,M),N):j||fe(y,E,U,null,D,k,Fo(E,M),N,!1),L>0){if(L&16)b(U,H,G,D,M);else if(L&2&&H.class!==G.class&&i(U,"class",null,G.class,M),L&4&&i(U,"style",H.style,G.style,M),L&8){const Y=E.dynamicProps;for(let re=0;re<Y.length;re++){const ae=Y[re],ze=H[ae],Le=G[ae];(Le!==ze||ae==="value")&&i(U,ae,ze,Le,M,D)}}L&1&&y.children!==E.children&&d(U,E.children)}else!j&&F==null&&b(U,H,G,D,M);((J=G.onVnodeUpdated)||Q)&&ft(()=>{J&&It(J,D,E,y),Q&&Vn(E,y,D,"updated")},k)},w=(y,E,D,k,M,N,j)=>{for(let U=0;U<E.length;U++){const L=y[U],F=E[U],Q=L.el&&(L.type===Ct||!Qr(L,F)||L.shapeFlag&70)?m(L.el):D;P(L,F,Q,null,k,M,N,j,!0)}},b=(y,E,D,k,M)=>{if(E!==D){if(E!==Ee)for(const N in E)!es(N)&&!(N in D)&&i(y,N,E[N],null,M,k);for(const N in D){if(es(N))continue;const j=D[N],U=E[N];j!==U&&N!=="value"&&i(y,N,U,j,M,k)}"value"in D&&i(y,"value",E.value,D.value,M)}},C=(y,E,D,k,M,N,j,U,L)=>{const F=E.el=y?y.el:l(""),Q=E.anchor=y?y.anchor:l("");let{patchFlag:H,dynamicChildren:G,slotScopeIds:J}=E;J&&(U=U?U.concat(J):J),y==null?(r(F,D,k),r(Q,D,k),p(E.children||[],D,Q,M,N,j,U,L)):H>0&&H&64&&G&&y.dynamicChildren?(w(y.dynamicChildren,G,D,M,N,j,U),(E.key!=null||M&&E===M.subTree)&&Bf(y,E,!0)):fe(y,E,D,Q,M,N,j,U,L)},_=(y,E,D,k,M,N,j,U,L)=>{E.slotScopeIds=U,y==null?E.shapeFlag&512?M.ctx.activate(E,D,k,j,L):ut(E,D,k,M,N,j,L):Xt(y,E,L)},ut=(y,E,D,k,M,N,j)=>{const U=y.component=_y(y,k,M);if(Af(y)&&(U.ctx.renderer=wt),Ty(U,!1,j),U.asyncDep){if(M&&M.registerDep(U,Fe,j),!y.el){const L=U.subTree=Ie(gs);K(null,L,E,D)}}else Fe(U,y,E,D,M,N,j)},Xt=(y,E,D)=>{const k=E.component=y.component;if(cy(y,E,D))if(k.asyncDep&&!k.asyncResolved){ye(k,E,D);return}else k.next=E,k.update();else E.el=y.el,k.vnode=E},Fe=(y,E,D,k,M,N,j)=>{const U=()=>{if(y.isMounted){let{next:H,bu:G,u:J,parent:Y,vnode:re}=y;{const Ke=$f(y);if(Ke){H&&(H.el=re.el,ye(y,H,j)),Ke.asyncDep.then(()=>{y.isUnmounted||U()});return}}let ae=H,ze;xn(y,!1),H?(H.el=re.el,ye(y,H,j)):H=re,G&&Vo(G),(ze=H.props&&H.props.onVnodeBeforeUpdate)&&It(ze,Y,H,re),xn(y,!0);const Le=Fc(y),mt=y.subTree;y.subTree=Le,P(mt,Le,m(mt.el),Lt(mt),y,M,N),H.el=Le.el,ae===null&&uy(y,Le.el),J&&ft(J,M),(ze=H.props&&H.props.onVnodeUpdated)&&ft(()=>It(ze,Y,H,re),M)}else{let H;const{el:G,props:J}=E,{bm:Y,m:re,parent:ae,root:ze,type:Le}=y,mt=rs(E);xn(y,!1),Y&&Vo(Y),!mt&&(H=J&&J.onVnodeBeforeMount)&&It(H,ae,E),xn(y,!0);{ze.ce&&ze.ce._injectChildStyle(Le);const Ke=y.subTree=Fc(y);P(null,Ke,D,k,y,M,N),E.el=Ke.el}if(re&&ft(re,M),!mt&&(H=J&&J.onVnodeMounted)){const Ke=E;ft(()=>It(H,ae,Ke),M)}(E.shapeFlag&256||ae&&rs(ae.vnode)&&ae.vnode.shapeFlag&256)&&y.a&&ft(y.a,M),y.isMounted=!0,E=D=k=null}};y.scope.on();const L=y.effect=new Xh(U);y.scope.off();const F=y.update=L.run.bind(L),Q=y.job=L.runIfDirty.bind(L);Q.i=y,Q.id=y.uid,L.scheduler=()=>Xa(Q),xn(y,!0),F()},ye=(y,E,D)=>{E.component=y;const k=y.vnode.props;y.vnode=E,y.next=null,Gp(y,E.props,k,D),Xp(y,E.children,D),En(),Dc(y),wn()},fe=(y,E,D,k,M,N,j,U,L=!1)=>{const F=y&&y.children,Q=y?y.shapeFlag:0,H=E.children,{patchFlag:G,shapeFlag:J}=E;if(G>0){if(G&128){An(F,H,D,k,M,N,j,U,L);return}else if(G&256){_t(F,H,D,k,M,N,j,U,L);return}}J&8?(Q&16&&Sn(F,M,N),H!==F&&d(D,H)):Q&16?J&16?An(F,H,D,k,M,N,j,U,L):Sn(F,M,N,!0):(Q&8&&d(D,""),J&16&&p(H,D,k,M,N,j,U,L))},_t=(y,E,D,k,M,N,j,U,L)=>{y=y||ur,E=E||ur;const F=y.length,Q=E.length,H=Math.min(F,Q);let G;for(G=0;G<H;G++){const J=E[G]=L?rn(E[G]):Rt(E[G]);P(y[G],J,D,null,M,N,j,U,L)}F>Q?Sn(y,M,N,!0,!1,H):p(E,D,k,M,N,j,U,L,H)},An=(y,E,D,k,M,N,j,U,L)=>{let F=0;const Q=E.length;let H=y.length-1,G=Q-1;for(;F<=H&&F<=G;){const J=y[F],Y=E[F]=L?rn(E[F]):Rt(E[F]);if(Qr(J,Y))P(J,Y,D,null,M,N,j,U,L);else break;F++}for(;F<=H&&F<=G;){const J=y[H],Y=E[G]=L?rn(E[G]):Rt(E[G]);if(Qr(J,Y))P(J,Y,D,null,M,N,j,U,L);else break;H--,G--}if(F>H){if(F<=G){const J=G+1,Y=J<Q?E[J].el:k;for(;F<=G;)P(null,E[F]=L?rn(E[F]):Rt(E[F]),D,Y,M,N,j,U,L),F++}}else if(F>G)for(;F<=H;)xe(y[F],M,N,!0),F++;else{const J=F,Y=F,re=new Map;for(F=Y;F<=G;F++){const Ue=E[F]=L?rn(E[F]):Rt(E[F]);Ue.key!=null&&re.set(Ue.key,F)}let ae,ze=0;const Le=G-Y+1;let mt=!1,Ke=0;const Jt=new Array(Le);for(F=0;F<Le;F++)Jt[F]=0;for(F=J;F<=H;F++){const Ue=y[F];if(ze>=Le){xe(Ue,M,N,!0);continue}let pt;if(Ue.key!=null)pt=re.get(Ue.key);else for(ae=Y;ae<=G;ae++)if(Jt[ae-Y]===0&&Qr(Ue,E[ae])){pt=ae;break}pt===void 0?xe(Ue,M,N,!0):(Jt[pt-Y]=F+1,pt>=Ke?Ke=pt:mt=!0,P(Ue,E[pt],D,null,M,N,j,U,L),ze++)}const kr=mt?ty(Jt):ur;for(ae=kr.length-1,F=Le-1;F>=0;F--){const Ue=Y+F,pt=E[Ue],Os=Ue+1<Q?E[Ue+1].el:k;Jt[F]===0?P(null,pt,D,Os,M,N,j,U,L):mt&&(ae<0||F!==kr[ae]?Ft(pt,D,Os,2):ae--)}}},Ft=(y,E,D,k,M=null)=>{const{el:N,type:j,transition:U,children:L,shapeFlag:F}=y;if(F&6){Ft(y.component.subTree,E,D,k);return}if(F&128){y.suspense.move(E,D,k);return}if(F&64){j.move(y,E,D,wt);return}if(j===Ct){r(N,E,D);for(let H=0;H<L.length;H++)Ft(L[H],E,D,k);r(y.anchor,E,D);return}if(j===Lo){ee(y,E,D);return}if(k!==2&&F&1&&U)if(k===0)U.beforeEnter(N),r(N,E,D),ft(()=>U.enter(N),M);else{const{leave:H,delayLeave:G,afterLeave:J}=U,Y=()=>r(N,E,D),re=()=>{H(N,()=>{Y(),J&&J()})};G?G(N,Y,re):re()}else r(N,E,D)},xe=(y,E,D,k=!1,M=!1)=>{const{type:N,props:j,ref:U,children:L,dynamicChildren:F,shapeFlag:Q,patchFlag:H,dirs:G,cacheIndex:J}=y;if(H===-2&&(M=!1),U!=null&&Ei(U,null,D,y,!0),J!=null&&(E.renderCache[J]=void 0),Q&256){E.ctx.deactivate(y);return}const Y=Q&1&&G,re=!rs(y);let ae;if(re&&(ae=j&&j.onVnodeBeforeUnmount)&&It(ae,E,y),Q&6)bn(y.component,D,k);else{if(Q&128){y.suspense.unmount(D,k);return}Y&&Vn(y,null,E,"beforeUnmount"),Q&64?y.type.remove(y,E,D,wt,k):F&&!F.hasOnce&&(N!==Ct||H>0&&H&64)?Sn(F,E,D,!1,!0):(N===Ct&&H&384||!M&&Q&16)&&Sn(L,E,D),k&&Oe(y)}(re&&(ae=j&&j.onVnodeUnmounted)||Y)&&ft(()=>{ae&&It(ae,E,y),Y&&Vn(y,null,E,"unmounted")},D)},Oe=y=>{const{type:E,el:D,anchor:k,transition:M}=y;if(E===Ct){go(D,k);return}if(E===Lo){z(y);return}const N=()=>{s(D),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(y.shapeFlag&1&&M&&!M.persisted){const{leave:j,delayLeave:U}=M,L=()=>j(D,N);U?U(y.el,N,L):L()}else N()},go=(y,E)=>{let D;for(;y!==E;)D=T(y),s(y),y=D;s(E)},bn=(y,E,D)=>{const{bum:k,scope:M,job:N,subTree:j,um:U,m:L,a:F}=y;Nc(L),Nc(F),k&&Vo(k),M.stop(),N&&(N.flags|=8,xe(j,y,E,D)),U&&ft(U,E),ft(()=>{y.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Sn=(y,E,D,k=!1,M=!1,N=0)=>{for(let j=N;j<y.length;j++)xe(y[j],E,D,k,M)},Lt=y=>{if(y.shapeFlag&6)return Lt(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const E=T(y.anchor||y.el),D=E&&E[Ip];return D?T(D):E};let Or=!1;const xs=(y,E,D)=>{y==null?E._vnode&&xe(E._vnode,null,null,!0):P(E._vnode||null,y,E,null,null,null,D),E._vnode=y,Or||(Or=!0,Dc(),_f(),Or=!1)},wt={p:P,um:xe,m:Ft,r:Oe,mt:ut,mc:p,pc:fe,pbc:w,n:Lt,o:t};return{render:xs,hydrate:void 0,createApp:zp(xs)}}function Fo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function xn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ey(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Bf(t,e,n=!1){const r=t.children,s=e.children;if(te(r)&&te(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=rn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Bf(a,l)),l.type===Qi&&(l.el=a.el)}}function ty(t){const e=t.slice(),n=[0];let r,s,i,a,l;const u=t.length;for(r=0;r<u;r++){const f=t[r];if(f!==0){if(s=n[n.length-1],t[s]<f){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<f?i=l+1:a=l;f<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function $f(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$f(e)}function Nc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ny=Symbol.for("v-scx"),ry=()=>pr(ny);function tl(t,e){return nl(t,null,e)}function zt(t,e,n){return nl(t,e,n)}function nl(t,e,n=Ee){const{immediate:r,deep:s,flush:i,once:a}=n,l=tt({},n),u=e&&r||!e&&i!=="post";let f;if(ps){if(i==="sync"){const I=ry();f=I.__watcherHandles||(I.__watcherHandles=[])}else if(!u){const I=()=>{};return I.stop=Vt,I.resume=Vt,I.pause=Vt,I}}const d=et;l.call=(I,V,P)=>Mt(I,d,V,P);let m=!1;i==="post"?l.scheduler=I=>{ft(I,d&&d.suspense)}:i!=="sync"&&(m=!0,l.scheduler=(I,V)=>{V?I():Xa(I)}),l.augmentJob=I=>{e&&(I.flags|=4),m&&(I.flags|=2,d&&(I.id=d.uid,I.i=d))};const T=vp(t,e,l);return ps&&(f?f.push(T):u&&T()),T}function sy(t,e,n){const r=this.proxy,s=Ve(t)?t.includes(".")?jf(r,t):()=>r[t]:t.bind(r,r);let i;ie(e)?i=e:(i=e.handler,n=e);const a=bs(this),l=nl(s,i.bind(r),n);return a(),l}function jf(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const iy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${fn(e)}Modifiers`]||t[`${Gn(e)}Modifiers`];function oy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ee;let s=n;const i=e.startsWith("update:"),a=i&&iy(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>Ve(d)?d.trim():d)),a.number&&(s=n.map(Om)));let l,u=r[l=Do(e)]||r[l=Do(fn(e))];!u&&i&&(u=r[l=Do(Gn(e))]),u&&Mt(u,t,6,s);const f=r[l+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Mt(f,t,6,s)}}function Hf(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!ie(t)){const u=f=>{const d=Hf(f,e,!0);d&&(l=!0,tt(a,d))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!i&&!l?(Ae(t)&&r.set(t,null),null):(te(i)?i.forEach(u=>a[u]=null):tt(a,i),Ae(t)&&r.set(t,a),a)}function Wi(t,e){return!t||!$i(e)?!1:(e=e.slice(2).replace(/Once$/,""),me(t,e[0].toLowerCase()+e.slice(1))||me(t,Gn(e))||me(t,e))}function Fc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:u,render:f,renderCache:d,props:m,data:T,setupState:I,ctx:V,inheritAttrs:P}=t,O=Ti(t);let K,W;try{if(n.shapeFlag&4){const z=s||r,pe=z;K=Rt(f.call(pe,z,d,m,I,T,V)),W=l}else{const z=e;K=Rt(z.length>1?z(m,{attrs:l,slots:a,emit:u}):z(m,null)),W=e.props?l:ay(l)}}catch(z){is.length=0,Ki(z,t,1),K=Ie(gs)}let ee=K;if(W&&P!==!1){const z=Object.keys(W),{shapeFlag:pe}=ee;z.length&&pe&7&&(i&&z.some(Ua)&&(W=ly(W,i)),ee=Tr(ee,W,!1,!0))}return n.dirs&&(ee=Tr(ee,null,!1,!0),ee.dirs=ee.dirs?ee.dirs.concat(n.dirs):n.dirs),n.transition&&Ja(ee,n.transition),K=ee,Ti(O),K}const ay=t=>{let e;for(const n in t)(n==="class"||n==="style"||$i(n))&&((e||(e={}))[n]=t[n]);return e},ly=(t,e)=>{const n={};for(const r in t)(!Ua(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function cy(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:u}=e,f=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?Lc(r,a,f):!!a;if(u&8){const d=e.dynamicProps;for(let m=0;m<d.length;m++){const T=d[m];if(a[T]!==r[T]&&!Wi(f,T))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Lc(r,a,f):!0:!!a;return!1}function Lc(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Wi(n,i))return!0}return!1}function uy({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const qf=t=>t.__isSuspense;function hy(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):wp(t)}const Ct=Symbol.for("v-fgt"),Qi=Symbol.for("v-txt"),gs=Symbol.for("v-cmt"),Lo=Symbol.for("v-stc"),is=[];let dt=null;function ir(t=!1){is.push(dt=t?null:[])}function fy(){is.pop(),dt=is[is.length-1]||null}let ms=1;function Uc(t,e=!1){ms+=t,t<0&&dt&&e&&(dt.hasOnce=!0)}function zf(t){return t.dynamicChildren=ms>0?dt||ur:null,fy(),ms>0&&dt&&dt.push(t),t}function Js(t,e,n,r,s,i){return zf(bt(t,e,n,r,s,i,!0))}function Kf(t,e,n,r,s){return zf(Ie(t,e,n,r,s,!0))}function Ii(t){return t?t.__v_isVNode===!0:!1}function Qr(t,e){return t.type===e.type&&t.key===e.key}const Gf=({key:t})=>t??null,ci=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ve(t)||He(t)||ie(t)?{i:Tt,r:t,k:e,f:!!n}:t:null);function bt(t,e=null,n=null,r=0,s=null,i=t===Ct?0:1,a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Gf(e),ref:e&&ci(e),scopeId:Tf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Tt};return l?(rl(u,n),i&128&&t.normalize(u)):n&&(u.shapeFlag|=Ve(n)?8:16),ms>0&&!a&&dt&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&dt.push(u),u}const Ie=dy;function dy(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Np)&&(t=gs),Ii(t)){const l=Tr(t,e,!0);return n&&rl(l,n),ms>0&&!i&&dt&&(l.shapeFlag&6?dt[dt.indexOf(t)]=l:dt.push(l)),l.patchFlag=-2,l}if(Ay(t)&&(t=t.__vccOpts),e){e=gy(e);let{class:l,style:u}=e;l&&!Ve(l)&&(e.class=Ha(l)),Ae(u)&&(Ya(u)&&!te(u)&&(u=tt({},u)),e.style=ja(u))}const a=Ve(t)?1:qf(t)?128:Ap(t)?64:Ae(t)?4:ie(t)?2:0;return bt(t,e,n,r,s,a,i,!0)}function gy(t){return t?Ya(t)||Of(t)?tt({},t):t:null}function Tr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:u}=t,f=e?Wf(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&Gf(f),ref:e&&e.ref?n&&i?te(i)?i.concat(ci(e)):[i,ci(e)]:ci(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ct?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Tr(t.ssContent),ssFallback:t.ssFallback&&Tr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&r&&Ja(d,u.clone(d)),d}function my(t=" ",e=0){return Ie(Qi,null,t,e)}function Rt(t){return t==null||typeof t=="boolean"?Ie(gs):te(t)?Ie(Ct,null,t.slice()):Ii(t)?rn(t):Ie(Qi,null,String(t))}function rn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Tr(t)}function rl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),rl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Of(e)?e._ctx=Tt:s===3&&Tt&&(Tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:Tt},n=32):(e=String(e),r&64?(n=16,e=[my(e)]):n=8);t.children=e,t.shapeFlag|=n}function Wf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ha([e.class,r.class]));else if(s==="style")e.style=ja([e.style,r.style]);else if($i(s)){const i=e[s],a=r[s];a&&i!==a&&!(te(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function It(t,e,n,r=null){Mt(t,e,7,[n,r])}const py=Df();let yy=0;function _y(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||py,i={uid:yy++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Yh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kf(r,s),emitsOptions:Hf(r,s),emit:null,emitted:null,propsDefaults:Ee,inheritAttrs:r.inheritAttrs,ctx:Ee,data:Ee,props:Ee,attrs:Ee,slots:Ee,refs:Ee,setupState:Ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=oy.bind(null,i),t.ce&&t.ce(i),i}let et=null;const vy=()=>et||Tt;let Ai,ca;{const t=qi(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Ai=e("__VUE_INSTANCE_SETTERS__",n=>et=n),ca=e("__VUE_SSR_SETTERS__",n=>ps=n)}const bs=t=>{const e=et;return Ai(t),t.scope.on(),()=>{t.scope.off(),Ai(e)}},Bc=()=>{et&&et.scope.off(),Ai(null)};function Qf(t){return t.vnode.shapeFlag&4}let ps=!1;function Ty(t,e=!1,n=!1){e&&ca(e);const{props:r,children:s}=t.vnode,i=Qf(t);Kp(t,r,i,e),Yp(t,s,n);const a=i?Ey(t,e):void 0;return e&&ca(!1),a}function Ey(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Lp);const{setup:r}=n;if(r){En();const s=t.setupContext=r.length>1?Iy(t):null,i=bs(t),a=As(r,t,0,[t.props,s]),l=jh(a);if(wn(),i(),(l||t.sp)&&!rs(t)&&If(t),l){if(a.then(Bc,Bc),e)return a.then(u=>{$c(t,u)}).catch(u=>{Ki(u,t,0)});t.asyncDep=a}else $c(t,a)}else Yf(t)}function $c(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=gf(e)),Yf(t)}function Yf(t,e,n){const r=t.type;t.render||(t.render=r.render||Vt);{const s=bs(t);En();try{Up(t)}finally{wn(),s()}}}const wy={get(t,e){return Xe(t,"get",""),t[e]}};function Iy(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,wy),slots:t.slots,emit:t.emit,expose:e}}function sl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(gf(cp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ss)return ss[n](t)},has(e,n){return n in e||n in ss}})):t.proxy}function Ay(t){return ie(t)&&"__vccOpts"in t}const je=(t,e)=>yp(t,e,ps);function by(t,e,n){const r=arguments.length;return r===2?Ae(e)&&!te(e)?Ii(e)?Ie(t,null,[e]):Ie(t,e):Ie(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ii(n)&&(n=[n]),Ie(t,e,n))}const Sy="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ua;const jc=typeof window<"u"&&window.trustedTypes;if(jc)try{ua=jc.createPolicy("vue",{createHTML:t=>t})}catch{}const Xf=ua?t=>ua.createHTML(t):t=>t,Cy="http://www.w3.org/2000/svg",Ry="http://www.w3.org/1998/Math/MathML",jt=typeof document<"u"?document:null,Hc=jt&&jt.createElement("template"),Py={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?jt.createElementNS(Cy,t):e==="mathml"?jt.createElementNS(Ry,t):n?jt.createElement(t,{is:n}):jt.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>jt.createTextNode(t),createComment:t=>jt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>jt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Hc.innerHTML=Xf(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Hc.content;if(r==="svg"||r==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Dy=Symbol("_vtc");function Vy(t,e,n){const r=t[Dy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const qc=Symbol("_vod"),xy=Symbol("_vsh"),Oy=Symbol(""),My=/(^|;)\s*display\s*:/;function ky(t,e,n){const r=t.style,s=Ve(n);let i=!1;if(n&&!s){if(e)if(Ve(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&ui(r,l,"")}else for(const a in e)n[a]==null&&ui(r,a,"");for(const a in n)a==="display"&&(i=!0),ui(r,a,n[a])}else if(s){if(e!==n){const a=r[Oy];a&&(n+=";"+a),r.cssText=n,i=My.test(n)}}else e&&t.removeAttribute("style");qc in t&&(t[qc]=i?r.display:"",t[xy]&&(r.display="none"))}const zc=/\s*!important$/;function ui(t,e,n){if(te(n))n.forEach(r=>ui(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ny(t,e);zc.test(n)?t.setProperty(Gn(r),n.replace(zc,""),"important"):t[r]=n}}const Kc=["Webkit","Moz","ms"],Uo={};function Ny(t,e){const n=Uo[e];if(n)return n;let r=fn(e);if(r!=="filter"&&r in t)return Uo[e]=r;r=zh(r);for(let s=0;s<Kc.length;s++){const i=Kc[s]+r;if(i in t)return Uo[e]=i}return e}const Gc="http://www.w3.org/1999/xlink";function Wc(t,e,n,r,s,i=Um(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Gc,e.slice(6,e.length)):t.setAttributeNS(Gc,e,n):n==null||i&&!Gh(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Tn(n)?String(n):n)}function Qc(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Xf(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Gh(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function Fy(t,e,n,r){t.addEventListener(e,n,r)}function Ly(t,e,n,r){t.removeEventListener(e,n,r)}const Yc=Symbol("_vei");function Uy(t,e,n,r,s=null){const i=t[Yc]||(t[Yc]={}),a=i[e];if(r&&a)a.value=r;else{const[l,u]=By(e);if(r){const f=i[e]=Hy(r,s);Fy(t,l,f,u)}else a&&(Ly(t,l,a,u),i[e]=void 0)}}const Xc=/(?:Once|Passive|Capture)$/;function By(t){let e;if(Xc.test(t)){e={};let r;for(;r=t.match(Xc);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Gn(t.slice(2)),e]}let Bo=0;const $y=Promise.resolve(),jy=()=>Bo||($y.then(()=>Bo=0),Bo=Date.now());function Hy(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Mt(qy(r,n.value),e,5,[r])};return n.value=t,n.attached=jy(),n}function qy(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Jc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,zy=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Vy(t,r,a):e==="style"?ky(t,n,r):$i(e)?Ua(e)||Uy(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ky(t,e,r,a))?(Qc(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wc(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ve(r))?Qc(t,fn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Wc(t,e,r,a))};function Ky(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Jc(e)&&ie(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Jc(e)&&Ve(n)?!1:e in t}const Gy=tt({patchProp:zy},Py);let Zc;function Wy(){return Zc||(Zc=Jp(Gy))}const Jf=(...t)=>{const e=Wy().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Yy(r);if(!s)return;const i=e._component;!ie(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Qy(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Qy(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Yy(t){return Ve(t)?document.querySelector(t):t}var eu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Xy=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},ed={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,u=s+2<t.length,f=u?t[s+2]:0,d=i>>2,m=(i&3)<<4|l>>4;let T=(l&15)<<2|f>>6,I=f&63;u||(I=64,a||(T=64)),r.push(n[d],n[m],n[T],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Xy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const f=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||f==null||m==null)throw new Jy;const T=i<<2|l>>4;if(r.push(T),f!==64){const I=l<<4&240|f>>2;if(r.push(I),m!==64){const V=f<<6&192|m;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Jy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zy=function(t){const e=Zf(t);return ed.encodeByteArray(e,!0)},bi=function(t){return Zy(t).replace(/\./g,"")},e_=function(t){try{return ed.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=()=>t_().__FIREBASE_DEFAULTS__,r_=()=>{if(typeof process>"u"||typeof eu>"u")return;const t=eu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},s_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&e_(t[1]);return e&&JSON.parse(e)},il=()=>{try{return n_()||r_()||s_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},i_=t=>{var e,n;return(n=(e=il())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},o_=t=>{const e=i_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},td=()=>{var t;return(t=il())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[bi(JSON.stringify(n)),bi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function u_(){var t;const e=(t=il())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function h_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function f_(){return!u_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nd(){try{return typeof indexedDB=="object"}catch{return!1}}function rd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function d_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="FirebaseError";class In extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=g_,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yi.prototype.create)}}class Yi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?m_(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new In(s,l,r)}}function m_(t,e){return t.replace(p_,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const p_=/\{\$([^}]+)}/g;function Si(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(tu(i)&&tu(a)){if(!Si(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function tu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=1e3,__=2,v_=4*60*60*1e3,T_=.5;function nu(t,e=y_,n=__){const r=e*Math.pow(n,t),s=Math.round(T_*r*(Math.random()-.5)*2);return Math.min(v_,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t){return t&&t._delegate?t._delegate:t}class Kt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new a_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(I_(e))try{this.getOrInitializeService({instanceIdentifier:kn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kn){return this.instances.has(e)}getOptions(e=kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:w_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kn){return this.component?this.component.multipleInstances?e:kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function w_(t){return t===kn?void 0:t}function I_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new E_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const b_={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},S_=ce.INFO,C_={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},R_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=C_[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class al{constructor(e){this.name=e,this._logLevel=S_,this._logHandler=R_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?b_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const P_=(t,e)=>e.some(n=>t instanceof n);let ru,su;function D_(){return ru||(ru=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function V_(){return su||(su=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sd=new WeakMap,ha=new WeakMap,id=new WeakMap,$o=new WeakMap,ll=new WeakMap;function x_(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(cn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&sd.set(n,t)}).catch(()=>{}),ll.set(e,t),e}function O_(t){if(ha.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});ha.set(t,e)}let fa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ha.get(t);if(e==="objectStoreNames")return t.objectStoreNames||id.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function M_(t){fa=t(fa)}function k_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jo(this),e,...n);return id.set(r,e.sort?e.sort():[e]),cn(r)}:V_().includes(t)?function(...e){return t.apply(jo(this),e),cn(sd.get(this))}:function(...e){return cn(t.apply(jo(this),e))}}function N_(t){return typeof t=="function"?k_(t):(t instanceof IDBTransaction&&O_(t),P_(t,D_())?new Proxy(t,fa):t)}function cn(t){if(t instanceof IDBRequest)return x_(t);if($o.has(t))return $o.get(t);const e=N_(t);return e!==t&&($o.set(t,e),ll.set(e,t)),e}const jo=t=>ll.get(t);function od(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=cn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(cn(a.result),u.oldVersion,u.newVersion,cn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const F_=["get","getKey","getAll","getAllKeys","count"],L_=["put","add","delete","clear"],Ho=new Map;function iu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ho.get(e))return Ho.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=L_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||F_.includes(n)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),s&&u.done]))[0]};return Ho.set(e,i),i}M_(t=>({...t,get:(e,n,r)=>iu(e,n)||t.get(e,n,r),has:(e,n)=>!!iu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(B_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function B_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const da="@firebase/app",ou="0.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new al("@firebase/app"),$_="@firebase/app-compat",j_="@firebase/analytics-compat",H_="@firebase/analytics",q_="@firebase/app-check-compat",z_="@firebase/app-check",K_="@firebase/auth",G_="@firebase/auth-compat",W_="@firebase/database",Q_="@firebase/data-connect",Y_="@firebase/database-compat",X_="@firebase/functions",J_="@firebase/functions-compat",Z_="@firebase/installations",ev="@firebase/installations-compat",tv="@firebase/messaging",nv="@firebase/messaging-compat",rv="@firebase/performance",sv="@firebase/performance-compat",iv="@firebase/remote-config",ov="@firebase/remote-config-compat",av="@firebase/storage",lv="@firebase/storage-compat",cv="@firebase/firestore",uv="@firebase/vertexai",hv="@firebase/firestore-compat",fv="firebase",dv="11.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="[DEFAULT]",gv={[da]:"fire-core",[$_]:"fire-core-compat",[H_]:"fire-analytics",[j_]:"fire-analytics-compat",[z_]:"fire-app-check",[q_]:"fire-app-check-compat",[K_]:"fire-auth",[G_]:"fire-auth-compat",[W_]:"fire-rtdb",[Q_]:"fire-data-connect",[Y_]:"fire-rtdb-compat",[X_]:"fire-fn",[J_]:"fire-fn-compat",[Z_]:"fire-iid",[ev]:"fire-iid-compat",[tv]:"fire-fcm",[nv]:"fire-fcm-compat",[rv]:"fire-perf",[sv]:"fire-perf-compat",[iv]:"fire-rc",[ov]:"fire-rc-compat",[av]:"fire-gcs",[lv]:"fire-gcs-compat",[cv]:"fire-fst",[hv]:"fire-fst-compat",[uv]:"fire-vertex","fire-js":"fire-js",[fv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Map,mv=new Map,ma=new Map;function au(t,e){try{t.container.addComponent(e)}catch(n){Gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dn(t){const e=t.name;if(ma.has(e))return Gt.debug(`There were multiple attempts to register component ${e}.`),!1;ma.set(e,t);for(const n of Ci.values())au(n,t);for(const n of mv.values())au(n,t);return!0}function Ss(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pv(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},un=new Yi("app","Firebase",yv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=dv;function ad(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ga,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw un.create("bad-app-name",{appName:String(s)});if(n||(n=td()),!n)throw un.create("no-options");const i=Ci.get(s);if(i){if(Si(n,i.options)&&Si(r,i.config))return i;throw un.create("duplicate-app",{appName:s})}const a=new A_(s);for(const u of ma.values())a.addComponent(u);const l=new _v(n,r,a);return Ci.set(s,l),l}function ld(t=ga){const e=Ci.get(t);if(!e&&t===ga&&td())return ad();if(!e)throw un.create("no-app",{appName:t});return e}function xt(t,e,n){var r;let s=(r=gv[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gt.warn(l.join(" "));return}dn(new Kt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv="firebase-heartbeat-database",Ev=1,ys="firebase-heartbeat-store";let qo=null;function cd(){return qo||(qo=od(Tv,Ev,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ys)}catch(n){console.warn(n)}}}}).catch(t=>{throw un.create("idb-open",{originalErrorMessage:t.message})})),qo}async function wv(t){try{const n=(await cd()).transaction(ys),r=await n.objectStore(ys).get(ud(t));return await n.done,r}catch(e){if(e instanceof In)Gt.warn(e.message);else{const n=un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gt.warn(n.message)}}}async function lu(t,e){try{const r=(await cd()).transaction(ys,"readwrite");await r.objectStore(ys).put(e,ud(t)),await r.done}catch(n){if(n instanceof In)Gt.warn(n.message);else{const r=un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gt.warn(r.message)}}}function ud(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=1024,Av=30;class bv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Cv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=cu();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Av){const a=Rv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Gt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cu(),{heartbeatsToSend:r,unsentEntries:s}=Sv(this._heartbeatsCache.heartbeats),i=bi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Gt.warn(n),""}}}function cu(){return new Date().toISOString().substring(0,10)}function Sv(t,e=Iv){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),uu(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),uu(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Cv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nd()?rd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function uu(t){return bi(JSON.stringify({version:2,heartbeats:t})).length}function Rv(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(t){dn(new Kt("platform-logger",e=>new U_(e),"PRIVATE")),dn(new Kt("heartbeat",e=>new bv(e),"PRIVATE")),xt(da,ou,t),xt(da,ou,"esm2017"),xt("fire-js","")}Pv("");var Dv="firebase",Vv="11.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(Dv,Vv,"app");var hu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hn,hd;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,p){function v(){}v.prototype=p.prototype,A.D=p.prototype,A.prototype=new v,A.prototype.constructor=A,A.C=function(w,b,C){for(var _=Array(arguments.length-2),ut=2;ut<arguments.length;ut++)_[ut-2]=arguments[ut];return p.prototype[b].apply(w,_)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,p,v){v||(v=0);var w=Array(16);if(typeof p=="string")for(var b=0;16>b;++b)w[b]=p.charCodeAt(v++)|p.charCodeAt(v++)<<8|p.charCodeAt(v++)<<16|p.charCodeAt(v++)<<24;else for(b=0;16>b;++b)w[b]=p[v++]|p[v++]<<8|p[v++]<<16|p[v++]<<24;p=A.g[0],v=A.g[1],b=A.g[2];var C=A.g[3],_=p+(C^v&(b^C))+w[0]+3614090360&4294967295;p=v+(_<<7&4294967295|_>>>25),_=C+(b^p&(v^b))+w[1]+3905402710&4294967295,C=p+(_<<12&4294967295|_>>>20),_=b+(v^C&(p^v))+w[2]+606105819&4294967295,b=C+(_<<17&4294967295|_>>>15),_=v+(p^b&(C^p))+w[3]+3250441966&4294967295,v=b+(_<<22&4294967295|_>>>10),_=p+(C^v&(b^C))+w[4]+4118548399&4294967295,p=v+(_<<7&4294967295|_>>>25),_=C+(b^p&(v^b))+w[5]+1200080426&4294967295,C=p+(_<<12&4294967295|_>>>20),_=b+(v^C&(p^v))+w[6]+2821735955&4294967295,b=C+(_<<17&4294967295|_>>>15),_=v+(p^b&(C^p))+w[7]+4249261313&4294967295,v=b+(_<<22&4294967295|_>>>10),_=p+(C^v&(b^C))+w[8]+1770035416&4294967295,p=v+(_<<7&4294967295|_>>>25),_=C+(b^p&(v^b))+w[9]+2336552879&4294967295,C=p+(_<<12&4294967295|_>>>20),_=b+(v^C&(p^v))+w[10]+4294925233&4294967295,b=C+(_<<17&4294967295|_>>>15),_=v+(p^b&(C^p))+w[11]+2304563134&4294967295,v=b+(_<<22&4294967295|_>>>10),_=p+(C^v&(b^C))+w[12]+1804603682&4294967295,p=v+(_<<7&4294967295|_>>>25),_=C+(b^p&(v^b))+w[13]+4254626195&4294967295,C=p+(_<<12&4294967295|_>>>20),_=b+(v^C&(p^v))+w[14]+2792965006&4294967295,b=C+(_<<17&4294967295|_>>>15),_=v+(p^b&(C^p))+w[15]+1236535329&4294967295,v=b+(_<<22&4294967295|_>>>10),_=p+(b^C&(v^b))+w[1]+4129170786&4294967295,p=v+(_<<5&4294967295|_>>>27),_=C+(v^b&(p^v))+w[6]+3225465664&4294967295,C=p+(_<<9&4294967295|_>>>23),_=b+(p^v&(C^p))+w[11]+643717713&4294967295,b=C+(_<<14&4294967295|_>>>18),_=v+(C^p&(b^C))+w[0]+3921069994&4294967295,v=b+(_<<20&4294967295|_>>>12),_=p+(b^C&(v^b))+w[5]+3593408605&4294967295,p=v+(_<<5&4294967295|_>>>27),_=C+(v^b&(p^v))+w[10]+38016083&4294967295,C=p+(_<<9&4294967295|_>>>23),_=b+(p^v&(C^p))+w[15]+3634488961&4294967295,b=C+(_<<14&4294967295|_>>>18),_=v+(C^p&(b^C))+w[4]+3889429448&4294967295,v=b+(_<<20&4294967295|_>>>12),_=p+(b^C&(v^b))+w[9]+568446438&4294967295,p=v+(_<<5&4294967295|_>>>27),_=C+(v^b&(p^v))+w[14]+3275163606&4294967295,C=p+(_<<9&4294967295|_>>>23),_=b+(p^v&(C^p))+w[3]+4107603335&4294967295,b=C+(_<<14&4294967295|_>>>18),_=v+(C^p&(b^C))+w[8]+1163531501&4294967295,v=b+(_<<20&4294967295|_>>>12),_=p+(b^C&(v^b))+w[13]+2850285829&4294967295,p=v+(_<<5&4294967295|_>>>27),_=C+(v^b&(p^v))+w[2]+4243563512&4294967295,C=p+(_<<9&4294967295|_>>>23),_=b+(p^v&(C^p))+w[7]+1735328473&4294967295,b=C+(_<<14&4294967295|_>>>18),_=v+(C^p&(b^C))+w[12]+2368359562&4294967295,v=b+(_<<20&4294967295|_>>>12),_=p+(v^b^C)+w[5]+4294588738&4294967295,p=v+(_<<4&4294967295|_>>>28),_=C+(p^v^b)+w[8]+2272392833&4294967295,C=p+(_<<11&4294967295|_>>>21),_=b+(C^p^v)+w[11]+1839030562&4294967295,b=C+(_<<16&4294967295|_>>>16),_=v+(b^C^p)+w[14]+4259657740&4294967295,v=b+(_<<23&4294967295|_>>>9),_=p+(v^b^C)+w[1]+2763975236&4294967295,p=v+(_<<4&4294967295|_>>>28),_=C+(p^v^b)+w[4]+1272893353&4294967295,C=p+(_<<11&4294967295|_>>>21),_=b+(C^p^v)+w[7]+4139469664&4294967295,b=C+(_<<16&4294967295|_>>>16),_=v+(b^C^p)+w[10]+3200236656&4294967295,v=b+(_<<23&4294967295|_>>>9),_=p+(v^b^C)+w[13]+681279174&4294967295,p=v+(_<<4&4294967295|_>>>28),_=C+(p^v^b)+w[0]+3936430074&4294967295,C=p+(_<<11&4294967295|_>>>21),_=b+(C^p^v)+w[3]+3572445317&4294967295,b=C+(_<<16&4294967295|_>>>16),_=v+(b^C^p)+w[6]+76029189&4294967295,v=b+(_<<23&4294967295|_>>>9),_=p+(v^b^C)+w[9]+3654602809&4294967295,p=v+(_<<4&4294967295|_>>>28),_=C+(p^v^b)+w[12]+3873151461&4294967295,C=p+(_<<11&4294967295|_>>>21),_=b+(C^p^v)+w[15]+530742520&4294967295,b=C+(_<<16&4294967295|_>>>16),_=v+(b^C^p)+w[2]+3299628645&4294967295,v=b+(_<<23&4294967295|_>>>9),_=p+(b^(v|~C))+w[0]+4096336452&4294967295,p=v+(_<<6&4294967295|_>>>26),_=C+(v^(p|~b))+w[7]+1126891415&4294967295,C=p+(_<<10&4294967295|_>>>22),_=b+(p^(C|~v))+w[14]+2878612391&4294967295,b=C+(_<<15&4294967295|_>>>17),_=v+(C^(b|~p))+w[5]+4237533241&4294967295,v=b+(_<<21&4294967295|_>>>11),_=p+(b^(v|~C))+w[12]+1700485571&4294967295,p=v+(_<<6&4294967295|_>>>26),_=C+(v^(p|~b))+w[3]+2399980690&4294967295,C=p+(_<<10&4294967295|_>>>22),_=b+(p^(C|~v))+w[10]+4293915773&4294967295,b=C+(_<<15&4294967295|_>>>17),_=v+(C^(b|~p))+w[1]+2240044497&4294967295,v=b+(_<<21&4294967295|_>>>11),_=p+(b^(v|~C))+w[8]+1873313359&4294967295,p=v+(_<<6&4294967295|_>>>26),_=C+(v^(p|~b))+w[15]+4264355552&4294967295,C=p+(_<<10&4294967295|_>>>22),_=b+(p^(C|~v))+w[6]+2734768916&4294967295,b=C+(_<<15&4294967295|_>>>17),_=v+(C^(b|~p))+w[13]+1309151649&4294967295,v=b+(_<<21&4294967295|_>>>11),_=p+(b^(v|~C))+w[4]+4149444226&4294967295,p=v+(_<<6&4294967295|_>>>26),_=C+(v^(p|~b))+w[11]+3174756917&4294967295,C=p+(_<<10&4294967295|_>>>22),_=b+(p^(C|~v))+w[2]+718787259&4294967295,b=C+(_<<15&4294967295|_>>>17),_=v+(C^(b|~p))+w[9]+3951481745&4294967295,A.g[0]=A.g[0]+p&4294967295,A.g[1]=A.g[1]+(b+(_<<21&4294967295|_>>>11))&4294967295,A.g[2]=A.g[2]+b&4294967295,A.g[3]=A.g[3]+C&4294967295}r.prototype.u=function(A,p){p===void 0&&(p=A.length);for(var v=p-this.blockSize,w=this.B,b=this.h,C=0;C<p;){if(b==0)for(;C<=v;)s(this,A,C),C+=this.blockSize;if(typeof A=="string"){for(;C<p;)if(w[b++]=A.charCodeAt(C++),b==this.blockSize){s(this,w),b=0;break}}else for(;C<p;)if(w[b++]=A[C++],b==this.blockSize){s(this,w),b=0;break}}this.h=b,this.o+=p},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var p=1;p<A.length-8;++p)A[p]=0;var v=8*this.o;for(p=A.length-8;p<A.length;++p)A[p]=v&255,v/=256;for(this.u(A),A=Array(16),p=v=0;4>p;++p)for(var w=0;32>w;w+=8)A[v++]=this.g[p]>>>w&255;return A};function i(A,p){var v=l;return Object.prototype.hasOwnProperty.call(v,A)?v[A]:v[A]=p(A)}function a(A,p){this.h=p;for(var v=[],w=!0,b=A.length-1;0<=b;b--){var C=A[b]|0;w&&C==p||(v[b]=C,w=!1)}this.g=v}var l={};function u(A){return-128<=A&&128>A?i(A,function(p){return new a([p|0],0>p?-1:0)}):new a([A|0],0>A?-1:0)}function f(A){if(isNaN(A)||!isFinite(A))return m;if(0>A)return O(f(-A));for(var p=[],v=1,w=0;A>=v;w++)p[w]=A/v|0,v*=4294967296;return new a(p,0)}function d(A,p){if(A.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(A.charAt(0)=="-")return O(d(A.substring(1),p));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=f(Math.pow(p,8)),w=m,b=0;b<A.length;b+=8){var C=Math.min(8,A.length-b),_=parseInt(A.substring(b,b+C),p);8>C?(C=f(Math.pow(p,C)),w=w.j(C).add(f(_))):(w=w.j(v),w=w.add(f(_)))}return w}var m=u(0),T=u(1),I=u(16777216);t=a.prototype,t.m=function(){if(P(this))return-O(this).m();for(var A=0,p=1,v=0;v<this.g.length;v++){var w=this.i(v);A+=(0<=w?w:4294967296+w)*p,p*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(V(this))return"0";if(P(this))return"-"+O(this).toString(A);for(var p=f(Math.pow(A,6)),v=this,w="";;){var b=z(v,p).g;v=K(v,b.j(p));var C=((0<v.g.length?v.g[0]:v.h)>>>0).toString(A);if(v=b,V(v))return C+w;for(;6>C.length;)C="0"+C;w=C+w}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function V(A){if(A.h!=0)return!1;for(var p=0;p<A.g.length;p++)if(A.g[p]!=0)return!1;return!0}function P(A){return A.h==-1}t.l=function(A){return A=K(this,A),P(A)?-1:V(A)?0:1};function O(A){for(var p=A.g.length,v=[],w=0;w<p;w++)v[w]=~A.g[w];return new a(v,~A.h).add(T)}t.abs=function(){return P(this)?O(this):this},t.add=function(A){for(var p=Math.max(this.g.length,A.g.length),v=[],w=0,b=0;b<=p;b++){var C=w+(this.i(b)&65535)+(A.i(b)&65535),_=(C>>>16)+(this.i(b)>>>16)+(A.i(b)>>>16);w=_>>>16,C&=65535,_&=65535,v[b]=_<<16|C}return new a(v,v[v.length-1]&-2147483648?-1:0)};function K(A,p){return A.add(O(p))}t.j=function(A){if(V(this)||V(A))return m;if(P(this))return P(A)?O(this).j(O(A)):O(O(this).j(A));if(P(A))return O(this.j(O(A)));if(0>this.l(I)&&0>A.l(I))return f(this.m()*A.m());for(var p=this.g.length+A.g.length,v=[],w=0;w<2*p;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var b=0;b<A.g.length;b++){var C=this.i(w)>>>16,_=this.i(w)&65535,ut=A.i(b)>>>16,Xt=A.i(b)&65535;v[2*w+2*b]+=_*Xt,W(v,2*w+2*b),v[2*w+2*b+1]+=C*Xt,W(v,2*w+2*b+1),v[2*w+2*b+1]+=_*ut,W(v,2*w+2*b+1),v[2*w+2*b+2]+=C*ut,W(v,2*w+2*b+2)}for(w=0;w<p;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=p;w<2*p;w++)v[w]=0;return new a(v,0)};function W(A,p){for(;(A[p]&65535)!=A[p];)A[p+1]+=A[p]>>>16,A[p]&=65535,p++}function ee(A,p){this.g=A,this.h=p}function z(A,p){if(V(p))throw Error("division by zero");if(V(A))return new ee(m,m);if(P(A))return p=z(O(A),p),new ee(O(p.g),O(p.h));if(P(p))return p=z(A,O(p)),new ee(O(p.g),p.h);if(30<A.g.length){if(P(A)||P(p))throw Error("slowDivide_ only works with positive integers.");for(var v=T,w=p;0>=w.l(A);)v=pe(v),w=pe(w);var b=ve(v,1),C=ve(w,1);for(w=ve(w,2),v=ve(v,2);!V(w);){var _=C.add(w);0>=_.l(A)&&(b=b.add(v),C=_),w=ve(w,1),v=ve(v,1)}return p=K(A,b.j(p)),new ee(b,p)}for(b=m;0<=A.l(p);){for(v=Math.max(1,Math.floor(A.m()/p.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),C=f(v),_=C.j(p);P(_)||0<_.l(A);)v-=w,C=f(v),_=C.j(p);V(C)&&(C=T),b=b.add(C),A=K(A,_)}return new ee(b,A)}t.A=function(A){return z(this,A).h},t.and=function(A){for(var p=Math.max(this.g.length,A.g.length),v=[],w=0;w<p;w++)v[w]=this.i(w)&A.i(w);return new a(v,this.h&A.h)},t.or=function(A){for(var p=Math.max(this.g.length,A.g.length),v=[],w=0;w<p;w++)v[w]=this.i(w)|A.i(w);return new a(v,this.h|A.h)},t.xor=function(A){for(var p=Math.max(this.g.length,A.g.length),v=[],w=0;w<p;w++)v[w]=this.i(w)^A.i(w);return new a(v,this.h^A.h)};function pe(A){for(var p=A.g.length+1,v=[],w=0;w<p;w++)v[w]=A.i(w)<<1|A.i(w-1)>>>31;return new a(v,A.h)}function ve(A,p){var v=p>>5;p%=32;for(var w=A.g.length-v,b=[],C=0;C<w;C++)b[C]=0<p?A.i(C+v)>>>p|A.i(C+v+1)<<32-p:A.i(C+v);return new a(b,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,hd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,hn=a}).apply(typeof hu<"u"?hu:typeof self<"u"?self:typeof window<"u"?window:{});var Zs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fd,Xr,dd,hi,pa,gd,md,pd;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zs=="object"&&Zs];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(o,c){if(c)e:{var h=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var S=o[g];if(!(S in h))break e;h=h[S]}o=o[o.length-1],g=h[o],c=c(g),c!=g&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,g=!1,S={next:function(){if(!g&&h<o.length){var R=h++;return{value:c(R,o[R]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function f(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function d(o,c,h){return o.call.apply(o.bind,arguments)}function m(o,c,h){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),o.apply(c,S)}}return function(){return o.apply(c,arguments)}}function T(o,c,h){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:m,T.apply(null,arguments)}function I(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function V(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(g,S,R){for(var B=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)B[_e-2]=arguments[_e];return c.prototype[S].apply(g,B)}}function P(o){const c=o.length;if(0<c){const h=Array(c);for(let g=0;g<c;g++)h[g]=o[g];return h}return[]}function O(o,c){for(let h=1;h<arguments.length;h++){const g=arguments[h];if(u(g)){const S=o.length||0,R=g.length||0;o.length=S+R;for(let B=0;B<R;B++)o[S+B]=g[B]}else o.push(g)}}class K{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function W(o){return/^[\s\xa0]*$/.test(o)}function ee(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var pe=ee().indexOf("Gecko")!=-1&&!(ee().toLowerCase().indexOf("webkit")!=-1&&ee().indexOf("Edge")==-1)&&!(ee().indexOf("Trident")!=-1||ee().indexOf("MSIE")!=-1)&&ee().indexOf("Edge")==-1;function ve(o,c,h){for(const g in o)c.call(h,o[g],g,o)}function A(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function p(o){const c={};for(const h in o)c[h]=o[h];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,c){let h,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(h in g)o[h]=g[h];for(let R=0;R<v.length;R++)h=v[R],Object.prototype.hasOwnProperty.call(g,h)&&(o[h]=g[h])}}function b(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function C(o){l.setTimeout(()=>{throw o},0)}function _(){var o=_t;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class ut{constructor(){this.h=this.g=null}add(c,h){const g=Xt.get();g.set(c,h),this.h?this.h.next=g:this.g=g,this.h=g}}var Xt=new K(()=>new Fe,o=>o.reset());class Fe{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,fe=!1,_t=new ut,An=()=>{const o=l.Promise.resolve(void 0);ye=()=>{o.then(Ft)}};var Ft=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){C(h)}var c=Xt;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}fe=!1};function xe(){this.s=this.s,this.C=this.C}xe.prototype.s=!1,xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Oe(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Oe.prototype.h=function(){this.defaultPrevented=!0};var go=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o}();function bn(o,c){if(Oe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(pe){e:{try{z(c.nodeName);var S=!0;break e}catch{}S=!1}S||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Sn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&bn.aa.h.call(this)}}V(bn,Oe);var Sn={2:"touch",3:"pen",4:"mouse"};bn.prototype.h=function(){bn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Lt="closure_listenable_"+(1e6*Math.random()|0),Or=0;function xs(o,c,h,g,S){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!g,this.ha=S,this.key=++Or,this.da=this.fa=!1}function wt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Mr(o){this.src=o,this.g={},this.h=0}Mr.prototype.add=function(o,c,h,g,S){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var B=E(o,c,g,S);return-1<B?(c=o[B],h||(c.fa=!1)):(c=new xs(c,this.src,R,!!g,S),c.fa=h,o.push(c)),c};function y(o,c){var h=c.type;if(h in o.g){var g=o.g[h],S=Array.prototype.indexOf.call(g,c,void 0),R;(R=0<=S)&&Array.prototype.splice.call(g,S,1),R&&(wt(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function E(o,c,h,g){for(var S=0;S<o.length;++S){var R=o[S];if(!R.da&&R.listener==c&&R.capture==!!h&&R.ha==g)return S}return-1}var D="closure_lm_"+(1e6*Math.random()|0),k={};function M(o,c,h,g,S){if(Array.isArray(c)){for(var R=0;R<c.length;R++)M(o,c[R],h,g,S);return null}return h=J(h),o&&o[Lt]?o.K(c,h,f(g)?!!g.capture:!1,S):N(o,c,h,!1,g,S)}function N(o,c,h,g,S,R){if(!c)throw Error("Invalid event type");var B=f(S)?!!S.capture:!!S,_e=H(o);if(_e||(o[D]=_e=new Mr(o)),h=_e.add(c,h,g,B,R),h.proxy)return h;if(g=j(),h.proxy=g,g.src=o,g.listener=h,o.addEventListener)go||(S=B),S===void 0&&(S=!1),o.addEventListener(c.toString(),g,S);else if(o.attachEvent)o.attachEvent(F(c.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function j(){function o(h){return c.call(o.src,o.listener,h)}const c=Q;return o}function U(o,c,h,g,S){if(Array.isArray(c))for(var R=0;R<c.length;R++)U(o,c[R],h,g,S);else g=f(g)?!!g.capture:!!g,h=J(h),o&&o[Lt]?(o=o.i,c=String(c).toString(),c in o.g&&(R=o.g[c],h=E(R,h,g,S),-1<h&&(wt(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete o.g[c],o.h--)))):o&&(o=H(o))&&(c=o.g[c.toString()],o=-1,c&&(o=E(c,h,g,S)),(h=-1<o?c[o]:null)&&L(h))}function L(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Lt])y(c.i,o);else{var h=o.type,g=o.proxy;c.removeEventListener?c.removeEventListener(h,g,o.capture):c.detachEvent?c.detachEvent(F(h),g):c.addListener&&c.removeListener&&c.removeListener(g),(h=H(c))?(y(h,o),h.h==0&&(h.src=null,c[D]=null)):wt(o)}}}function F(o){return o in k?k[o]:k[o]="on"+o}function Q(o,c){if(o.da)o=!0;else{c=new bn(c,this);var h=o.listener,g=o.ha||o.src;o.fa&&L(o),o=h.call(g,c)}return o}function H(o){return o=o[D],o instanceof Mr?o:null}var G="__closure_events_fn_"+(1e9*Math.random()>>>0);function J(o){return typeof o=="function"?o:(o[G]||(o[G]=function(c){return o.handleEvent(c)}),o[G])}function Y(){xe.call(this),this.i=new Mr(this),this.M=this,this.F=null}V(Y,xe),Y.prototype[Lt]=!0,Y.prototype.removeEventListener=function(o,c,h,g){U(this,o,c,h,g)};function re(o,c){var h,g=o.F;if(g)for(h=[];g;g=g.F)h.push(g);if(o=o.M,g=c.type||c,typeof c=="string")c=new Oe(c,o);else if(c instanceof Oe)c.target=c.target||o;else{var S=c;c=new Oe(g,o),w(c,S)}if(S=!0,h)for(var R=h.length-1;0<=R;R--){var B=c.g=h[R];S=ae(B,g,!0,c)&&S}if(B=c.g=o,S=ae(B,g,!0,c)&&S,S=ae(B,g,!1,c)&&S,h)for(R=0;R<h.length;R++)B=c.g=h[R],S=ae(B,g,!1,c)&&S}Y.prototype.N=function(){if(Y.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],g=0;g<h.length;g++)wt(h[g]);delete o.g[c],o.h--}}this.F=null},Y.prototype.K=function(o,c,h,g){return this.i.add(String(o),c,!1,h,g)},Y.prototype.L=function(o,c,h,g){return this.i.add(String(o),c,!0,h,g)};function ae(o,c,h,g){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var S=!0,R=0;R<c.length;++R){var B=c[R];if(B&&!B.da&&B.capture==h){var _e=B.listener,Be=B.ha||B.src;B.fa&&y(o.i,B),S=_e.call(Be,g)!==!1&&S}}return S&&!g.defaultPrevented}function ze(o,c,h){if(typeof o=="function")h&&(o=T(o,h));else if(o&&typeof o.handleEvent=="function")o=T(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function Le(o){o.g=ze(()=>{o.g=null,o.i&&(o.i=!1,Le(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class mt extends xe{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Le(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ke(o){xe.call(this),this.h=o,this.g={}}V(Ke,xe);var Jt=[];function kr(o){ve(o.g,function(c,h){this.g.hasOwnProperty(h)&&L(c)},o),o.g={}}Ke.prototype.N=function(){Ke.aa.N.call(this),kr(this)},Ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ue=l.JSON.stringify,pt=l.JSON.parse,Os=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function mo(){}mo.prototype.h=null;function Nl(o){return o.h||(o.h=o.i())}function Fl(){}var Nr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function po(){Oe.call(this,"d")}V(po,Oe);function yo(){Oe.call(this,"c")}V(yo,Oe);var Cn={},Ll=null;function Ms(){return Ll=Ll||new Y}Cn.La="serverreachability";function Ul(o){Oe.call(this,Cn.La,o)}V(Ul,Oe);function Fr(o){const c=Ms();re(c,new Ul(c))}Cn.STAT_EVENT="statevent";function Bl(o,c){Oe.call(this,Cn.STAT_EVENT,o),this.stat=c}V(Bl,Oe);function nt(o){const c=Ms();re(c,new Bl(c,o))}Cn.Ma="timingevent";function $l(o,c){Oe.call(this,Cn.Ma,o),this.size=c}V($l,Oe);function Lr(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Ur(){this.g=!0}Ur.prototype.xa=function(){this.g=!1};function im(o,c,h,g,S,R){o.info(function(){if(o.g)if(R)for(var B="",_e=R.split("&"),Be=0;Be<_e.length;Be++){var de=_e[Be].split("=");if(1<de.length){var Ge=de[0];de=de[1];var We=Ge.split("_");B=2<=We.length&&We[1]=="type"?B+(Ge+"="+de+"&"):B+(Ge+"=redacted&")}}else B=null;else B=R;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+c+`
`+h+`
`+B})}function om(o,c,h,g,S,R,B){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+c+`
`+h+`
`+R+" "+B})}function Xn(o,c,h,g){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+lm(o,h)+(g?" "+g:"")})}function am(o,c){o.info(function(){return"TIMEOUT: "+c})}Ur.prototype.info=function(){};function lm(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var g=h[o];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var R=S[0];if(R!="noop"&&R!="stop"&&R!="close")for(var B=1;B<S.length;B++)S[B]=""}}}}return Ue(h)}catch{return c}}var ks={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_o;function Ns(){}V(Ns,mo),Ns.prototype.g=function(){return new XMLHttpRequest},Ns.prototype.i=function(){return{}},_o=new Ns;function Zt(o,c,h,g){this.j=o,this.i=c,this.l=h,this.R=g||1,this.U=new Ke(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hl}function Hl(){this.i=null,this.g="",this.h=!1}var ql={},vo={};function To(o,c,h){o.L=1,o.v=Bs(Ut(c)),o.m=h,o.P=!0,zl(o,null)}function zl(o,c){o.F=Date.now(),Fs(o),o.A=Ut(o.v);var h=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),ic(h.i,"t",g),o.C=0,h=o.j.J,o.h=new Hl,o.g=Ic(o.j,h?c:null,!o.m),0<o.O&&(o.M=new mt(T(o.Y,o,o.g),o.O)),c=o.U,h=o.g,g=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(Jt[0]=S.toString()),S=Jt);for(var R=0;R<S.length;R++){var B=M(h,S[R],g||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Fr(),im(o.i,o.u,o.A,o.l,o.R,o.m)}Zt.prototype.ca=function(o){o=o.target;const c=this.M;c&&Bt(o)==3?c.j():this.Y(o)},Zt.prototype.Y=function(o){try{if(o==this.g)e:{const We=Bt(this.g);var c=this.g.Ba();const er=this.g.Z();if(!(3>We)&&(We!=3||this.g&&(this.h.h||this.g.oa()||fc(this.g)))){this.J||We!=4||c==7||(c==8||0>=er?Fr(3):Fr(2)),Eo(this);var h=this.g.Z();this.X=h;t:if(Kl(this)){var g=fc(this.g);o="";var S=g.length,R=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rn(this),Br(this);var B="";break t}this.h.i=new l.TextDecoder}for(c=0;c<S;c++)this.h.h=!0,o+=this.h.i.decode(g[c],{stream:!(R&&c==S-1)});g.length=0,this.h.g+=o,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=h==200,om(this.i,this.u,this.A,this.l,this.R,We,h),this.o){if(this.T&&!this.K){t:{if(this.g){var _e,Be=this.g;if((_e=Be.g?Be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(_e)){var de=_e;break t}}de=null}if(h=de)Xn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wo(this,h);else{this.o=!1,this.s=3,nt(12),Rn(this),Br(this);break e}}if(this.P){h=!0;let vt;for(;!this.J&&this.C<B.length;)if(vt=cm(this,B),vt==vo){We==4&&(this.s=4,nt(14),h=!1),Xn(this.i,this.l,null,"[Incomplete Response]");break}else if(vt==ql){this.s=4,nt(15),Xn(this.i,this.l,B,"[Invalid Chunk]"),h=!1;break}else Xn(this.i,this.l,vt,null),wo(this,vt);if(Kl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),We!=4||B.length!=0||this.h.h||(this.s=1,nt(16),h=!1),this.o=this.o&&h,!h)Xn(this.i,this.l,B,"[Invalid Chunked Response]"),Rn(this),Br(this);else if(0<B.length&&!this.W){this.W=!0;var Ge=this.j;Ge.g==this&&Ge.ba&&!Ge.M&&(Ge.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Ro(Ge),Ge.M=!0,nt(11))}}else Xn(this.i,this.l,B,null),wo(this,B);We==4&&Rn(this),this.o&&!this.J&&(We==4?vc(this.j,this):(this.o=!1,Fs(this)))}else Sm(this.g),h==400&&0<B.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),Rn(this),Br(this)}}}catch{}finally{}};function Kl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function cm(o,c){var h=o.C,g=c.indexOf(`
`,h);return g==-1?vo:(h=Number(c.substring(h,g)),isNaN(h)?ql:(g+=1,g+h>c.length?vo:(c=c.slice(g,g+h),o.C=g+h,c)))}Zt.prototype.cancel=function(){this.J=!0,Rn(this)};function Fs(o){o.S=Date.now()+o.I,Gl(o,o.I)}function Gl(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Lr(T(o.ba,o),c)}function Eo(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Zt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(am(this.i,this.A),this.L!=2&&(Fr(),nt(17)),Rn(this),this.s=2,Br(this)):Gl(this,this.S-o)};function Br(o){o.j.G==0||o.J||vc(o.j,o)}function Rn(o){Eo(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,kr(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function wo(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||Io(h.h,o))){if(!o.K&&Io(h.h,o)&&h.G==3){try{var g=h.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Ks(h),qs(h);else break e;Co(h),nt(18)}}else h.za=S[1],0<h.za-h.T&&37500>S[2]&&h.F&&h.v==0&&!h.C&&(h.C=Lr(T(h.Za,h),6e3));if(1>=Yl(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Dn(h,11)}else if((o.K||h.g==o)&&Ks(h),!W(c))for(S=h.Da.g.parse(c),c=0;c<S.length;c++){let de=S[c];if(h.T=de[0],de=de[1],h.G==2)if(de[0]=="c"){h.K=de[1],h.ia=de[2];const Ge=de[3];Ge!=null&&(h.la=Ge,h.j.info("VER="+h.la));const We=de[4];We!=null&&(h.Aa=We,h.j.info("SVER="+h.Aa));const er=de[5];er!=null&&typeof er=="number"&&0<er&&(g=1.5*er,h.L=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const vt=o.g;if(vt){const Ws=vt.g?vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ws){var R=g.h;R.g||Ws.indexOf("spdy")==-1&&Ws.indexOf("quic")==-1&&Ws.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Ao(R,R.h),R.h=null))}if(g.D){const Po=vt.g?vt.g.getResponseHeader("X-HTTP-Session-Id"):null;Po&&(g.ya=Po,we(g.I,g.D,Po))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),g=h;var B=o;if(g.qa=wc(g,g.J?g.ia:null,g.W),B.K){Xl(g.h,B);var _e=B,Be=g.L;Be&&(_e.I=Be),_e.B&&(Eo(_e),Fs(_e)),g.g=B}else yc(g);0<h.i.length&&zs(h)}else de[0]!="stop"&&de[0]!="close"||Dn(h,7);else h.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Dn(h,7):So(h):de[0]!="noop"&&h.l&&h.l.ta(de),h.v=0)}}Fr(4)}catch{}}var um=class{constructor(o,c){this.g=o,this.map=c}};function Wl(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ql(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Yl(o){return o.h?1:o.g?o.g.size:0}function Io(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Ao(o,c){o.g?o.g.add(c):o.h=c}function Xl(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Wl.prototype.cancel=function(){if(this.i=Jl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Jl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return P(o.i)}function hm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,g=0;g<h;g++)c.push(o[g]);return c}c=[],h=0;for(g in o)c[h++]=o[g];return c}function fm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const g in o)c[h++]=g;return c}}}function Zl(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=fm(o),g=hm(o),S=g.length,R=0;R<S;R++)c.call(void 0,g[R],h&&h[R],o)}var ec=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dm(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var g=o[h].indexOf("="),S=null;if(0<=g){var R=o[h].substring(0,g);S=o[h].substring(g+1)}else R=o[h];c(R,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Pn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Pn){this.h=o.h,Ls(this,o.j),this.o=o.o,this.g=o.g,Us(this,o.s),this.l=o.l;var c=o.i,h=new Hr;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),tc(this,h),this.m=o.m}else o&&(c=String(o).match(ec))?(this.h=!1,Ls(this,c[1]||"",!0),this.o=$r(c[2]||""),this.g=$r(c[3]||"",!0),Us(this,c[4]),this.l=$r(c[5]||"",!0),tc(this,c[6]||"",!0),this.m=$r(c[7]||"")):(this.h=!1,this.i=new Hr(null,this.h))}Pn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(jr(c,nc,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(jr(c,nc,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(jr(h,h.charAt(0)=="/"?pm:mm,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",jr(h,_m)),o.join("")};function Ut(o){return new Pn(o)}function Ls(o,c,h){o.j=h?$r(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Us(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function tc(o,c,h){c instanceof Hr?(o.i=c,vm(o.i,o.h)):(h||(c=jr(c,ym)),o.i=new Hr(c,o.h))}function we(o,c,h){o.i.set(c,h)}function Bs(o){return we(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function $r(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function jr(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,gm),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function gm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var nc=/[#\/\?@]/g,mm=/[#\?:]/g,pm=/[#\?]/g,ym=/[#\?@]/g,_m=/#/g;function Hr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function en(o){o.g||(o.g=new Map,o.h=0,o.i&&dm(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}t=Hr.prototype,t.add=function(o,c){en(this),this.i=null,o=Jn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function rc(o,c){en(o),c=Jn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function sc(o,c){return en(o),c=Jn(o,c),o.g.has(c)}t.forEach=function(o,c){en(this),this.g.forEach(function(h,g){h.forEach(function(S){o.call(c,S,g,this)},this)},this)},t.na=function(){en(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let g=0;g<c.length;g++){const S=o[g];for(let R=0;R<S.length;R++)h.push(c[g])}return h},t.V=function(o){en(this);let c=[];if(typeof o=="string")sc(this,o)&&(c=c.concat(this.g.get(Jn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},t.set=function(o,c){return en(this),this.i=null,o=Jn(this,o),sc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},t.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function ic(o,c,h){rc(o,c),0<h.length&&(o.i=null,o.g.set(Jn(o,c),P(h)),o.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var g=c[h];const R=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var S=R;B[g]!==""&&(S+="="+encodeURIComponent(String(B[g]))),o.push(S)}}return this.i=o.join("&")};function Jn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function vm(o,c){c&&!o.j&&(en(o),o.i=null,o.g.forEach(function(h,g){var S=g.toLowerCase();g!=S&&(rc(this,g),ic(this,S,h))},o)),o.j=c}function Tm(o,c){const h=new Ur;if(l.Image){const g=new Image;g.onload=I(tn,h,"TestLoadImage: loaded",!0,c,g),g.onerror=I(tn,h,"TestLoadImage: error",!1,c,g),g.onabort=I(tn,h,"TestLoadImage: abort",!1,c,g),g.ontimeout=I(tn,h,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else c(!1)}function Em(o,c){const h=new Ur,g=new AbortController,S=setTimeout(()=>{g.abort(),tn(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:g.signal}).then(R=>{clearTimeout(S),R.ok?tn(h,"TestPingServer: ok",!0,c):tn(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(S),tn(h,"TestPingServer: error",!1,c)})}function tn(o,c,h,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(h)}catch{}}function wm(){this.g=new Os}function Im(o,c,h){const g=h||"";try{Zl(o,function(S,R){let B=S;f(S)&&(B=Ue(S)),c.push(g+R+"="+encodeURIComponent(B))})}catch(S){throw c.push(g+"type="+encodeURIComponent("_badmap")),S}}function $s(o){this.l=o.Ub||null,this.j=o.eb||!1}V($s,mo),$s.prototype.g=function(){return new js(this.l,this.j)},$s.prototype.i=function(o){return function(){return o}}({});function js(o,c){Y.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(js,Y),t=js.prototype,t.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,zr(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qr(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,zr(this)),this.g&&(this.readyState=3,zr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;oc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function oc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?qr(this):zr(this),this.readyState==3&&oc(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,qr(this))},t.Qa=function(o){this.g&&(this.response=o,qr(this))},t.ga=function(){this.g&&qr(this)};function qr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,zr(o)}t.setRequestHeader=function(o,c){this.u.append(o,c)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function zr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(js.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ac(o){let c="";return ve(o,function(h,g){c+=g,c+=":",c+=h,c+=`\r
`}),c}function bo(o,c,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=ac(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):we(o,c,h))}function Se(o){Y.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Se,Y);var Am=/^https?$/i,bm=["POST","PUT"];t=Se.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,c,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_o.g(),this.v=this.o?Nl(this.o):Nl(_o),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(R){lc(this,R);return}if(o=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)h.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const R of g.keys())h.set(R,g.get(R));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),S=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(bm,c,void 0))||g||S||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,B]of h)this.g.setRequestHeader(R,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hc(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){lc(this,R)}};function lc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,cc(o),Hs(o)}function cc(o){o.A||(o.A=!0,re(o,"complete"),re(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,re(this,"complete"),re(this,"abort"),Hs(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hs(this,!0)),Se.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?uc(this):this.bb())},t.bb=function(){uc(this)};function uc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Bt(o)!=4||o.Z()!=2)){if(o.u&&Bt(o)==4)ze(o.Ea,0,o);else if(re(o,"readystatechange"),Bt(o)==4){o.h=!1;try{const B=o.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var g;if(g=B===0){var S=String(o.D).match(ec)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),g=!Am.test(S?S.toLowerCase():"")}h=g}if(h)re(o,"complete"),re(o,"success");else{o.m=6;try{var R=2<Bt(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",cc(o)}}finally{Hs(o)}}}}function Hs(o,c){if(o.g){hc(o);const h=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||re(o,"ready");try{h.onreadystatechange=g}catch{}}}function hc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function Bt(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),pt(c)}};function fc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Sm(o){const c={};o=(o.g&&2<=Bt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(W(o[g]))continue;var h=b(o[g]);const S=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=c[S]||[];c[S]=R,R.push(h)}A(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Kr(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function dc(o){this.Aa=0,this.i=[],this.j=new Ur,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Kr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Kr("baseRetryDelayMs",5e3,o),this.cb=Kr("retryDelaySeedMs",1e4,o),this.Wa=Kr("forwardChannelMaxRetries",2,o),this.wa=Kr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Wl(o&&o.concurrentRequestLimit),this.Da=new wm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=dc.prototype,t.la=8,t.G=1,t.connect=function(o,c,h,g){nt(0),this.W=o,this.H=c||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.I=wc(this,null,this.W),zs(this)};function So(o){if(gc(o),o.G==3){var c=o.U++,h=Ut(o.I);if(we(h,"SID",o.K),we(h,"RID",c),we(h,"TYPE","terminate"),Gr(o,h),c=new Zt(o,o.j,c),c.L=2,c.v=Bs(Ut(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=Ic(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Fs(c)}Ec(o)}function qs(o){o.g&&(Ro(o),o.g.cancel(),o.g=null)}function gc(o){qs(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ks(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function zs(o){if(!Ql(o.h)&&!o.s){o.s=!0;var c=o.Ga;ye||An(),fe||(ye(),fe=!0),_t.add(c,o),o.B=0}}function Cm(o,c){return Yl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Lr(T(o.Ga,o,c),Tc(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new Zt(this,this.j,o);let R=this.o;if(this.S&&(R?(R=p(R),w(R,this.S)):R=this.S),this.m!==null||this.O||(S.H=R,R=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=pc(this,S,c),h=Ut(this.I),we(h,"RID",o),we(h,"CVER",22),this.D&&we(h,"X-HTTP-Session-Id",this.D),Gr(this,h),R&&(this.O?c="headers="+encodeURIComponent(String(ac(R)))+"&"+c:this.m&&bo(h,this.m,R)),Ao(this.h,S),this.Ua&&we(h,"TYPE","init"),this.P?(we(h,"$req",c),we(h,"SID","null"),S.T=!0,To(S,h,null)):To(S,h,c),this.G=2}}else this.G==3&&(o?mc(this,o):this.i.length==0||Ql(this.h)||mc(this))};function mc(o,c){var h;c?h=c.l:h=o.U++;const g=Ut(o.I);we(g,"SID",o.K),we(g,"RID",h),we(g,"AID",o.T),Gr(o,g),o.m&&o.o&&bo(g,o.m,o.o),h=new Zt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=pc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ao(o.h,h),To(h,g,c)}function Gr(o,c){o.H&&ve(o.H,function(h,g){we(c,g,h)}),o.l&&Zl({},function(h,g){we(c,g,h)})}function pc(o,c,h){h=Math.min(o.i.length,h);var g=o.l?T(o.l.Na,o.l,o):null;e:{var S=o.i;let R=-1;for(;;){const B=["count="+h];R==-1?0<h?(R=S[0].g,B.push("ofs="+R)):R=0:B.push("ofs="+R);let _e=!0;for(let Be=0;Be<h;Be++){let de=S[Be].g;const Ge=S[Be].map;if(de-=R,0>de)R=Math.max(0,S[Be].g-100),_e=!1;else try{Im(Ge,B,"req"+de+"_")}catch{g&&g(Ge)}}if(_e){g=B.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,g}function yc(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;ye||An(),fe||(ye(),fe=!0),_t.add(c,o),o.v=0}}function Co(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Lr(T(o.Fa,o),Tc(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,_c(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Lr(T(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),qs(this),_c(this))};function Ro(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function _c(o){o.g=new Zt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Ut(o.qa);we(c,"RID","rpc"),we(c,"SID",o.K),we(c,"AID",o.T),we(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&we(c,"TO",o.ja),we(c,"TYPE","xmlhttp"),Gr(o,c),o.m&&o.o&&bo(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Bs(Ut(c)),h.m=null,h.P=!0,zl(h,o)}t.Za=function(){this.C!=null&&(this.C=null,qs(this),Co(this),nt(19))};function Ks(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function vc(o,c){var h=null;if(o.g==c){Ks(o),Ro(o),o.g=null;var g=2}else if(Io(o.h,c))h=c.D,Xl(o.h,c),g=1;else return;if(o.G!=0){if(c.o)if(g==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var S=o.B;g=Ms(),re(g,new $l(g,h)),zs(o)}else yc(o);else if(S=c.s,S==3||S==0&&0<c.X||!(g==1&&Cm(o,c)||g==2&&Co(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),S){case 1:Dn(o,5);break;case 4:Dn(o,10);break;case 3:Dn(o,6);break;default:Dn(o,2)}}}function Tc(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Dn(o,c){if(o.j.info("Error code "+c),c==2){var h=T(o.fb,o),g=o.Xa;const S=!g;g=new Pn(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ls(g,"https"),Bs(g),S?Tm(g.toString(),h):Em(g.toString(),h)}else nt(2);o.G=0,o.l&&o.l.sa(c),Ec(o),gc(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Ec(o){if(o.G=0,o.ka=[],o.l){const c=Jl(o.h);(c.length!=0||o.i.length!=0)&&(O(o.ka,c),O(o.ka,o.i),o.h.i.length=0,P(o.i),o.i.length=0),o.l.ra()}}function wc(o,c,h){var g=h instanceof Pn?Ut(h):new Pn(h);if(g.g!="")c&&(g.g=c+"."+g.g),Us(g,g.s);else{var S=l.location;g=S.protocol,c=c?c+"."+S.hostname:S.hostname,S=+S.port;var R=new Pn(null);g&&Ls(R,g),c&&(R.g=c),S&&Us(R,S),h&&(R.l=h),g=R}return h=o.D,c=o.ya,h&&c&&we(g,h,c),we(g,"VER",o.la),Gr(o,g),g}function Ic(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new Se(new $s({eb:h})):new Se(o.pa),c.Ha(o.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ac(){}t=Ac.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Gs(){}Gs.prototype.g=function(o,c){return new ht(o,c)};function ht(o,c){Y.call(this),this.g=new dc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!W(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!W(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Zn(this)}V(ht,Y),ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ht.prototype.close=function(){So(this.g)},ht.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ue(o),o=h);c.i.push(new um(c.Ya++,o)),c.G==3&&zs(c)},ht.prototype.N=function(){this.g.l=null,delete this.j,So(this.g),delete this.g,ht.aa.N.call(this)};function bc(o){po.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}V(bc,po);function Sc(){yo.call(this),this.status=1}V(Sc,yo);function Zn(o){this.g=o}V(Zn,Ac),Zn.prototype.ua=function(){re(this.g,"a")},Zn.prototype.ta=function(o){re(this.g,new bc(o))},Zn.prototype.sa=function(o){re(this.g,new Sc)},Zn.prototype.ra=function(){re(this.g,"b")},Gs.prototype.createWebChannel=Gs.prototype.g,ht.prototype.send=ht.prototype.o,ht.prototype.open=ht.prototype.m,ht.prototype.close=ht.prototype.close,pd=function(){return new Gs},md=function(){return Ms()},gd=Cn,pa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ks.NO_ERROR=0,ks.TIMEOUT=8,ks.HTTP_ERROR=6,hi=ks,jl.COMPLETE="complete",dd=jl,Fl.EventType=Nr,Nr.OPEN="a",Nr.CLOSE="b",Nr.ERROR="c",Nr.MESSAGE="d",Y.prototype.listen=Y.prototype.K,Xr=Fl,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha,fd=Se}).apply(typeof Zs<"u"?Zs:typeof self<"u"?self:typeof window<"u"?window:{});const fu="@firebase/firestore",du="4.7.7";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pr="11.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new al("@firebase/firestore");function or(){return qn.logLevel}function q(t,...e){if(qn.logLevel<=ce.DEBUG){const n=e.map(cl);qn.debug(`Firestore (${Pr}): ${t}`,...n)}}function Wt(t,...e){if(qn.logLevel<=ce.ERROR){const n=e.map(cl);qn.error(`Firestore (${Pr}): ${t}`,...n)}}function Er(t,...e){if(qn.logLevel<=ce.WARN){const n=e.map(cl);qn.warn(`Firestore (${Pr}): ${t}`,...n)}}function cl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t="Unexpected state"){const e=`FIRESTORE (${Pr}) INTERNAL ASSERTION FAILED: `+t;throw Wt(e),new Error(e)}function be(t,e){t||se()}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends In{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class Ov{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Mv{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){be(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Un,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Un)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new yd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new Ye(e)}}class kv{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Nv{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new kv(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fv{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,pv(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){be(this.o===void 0);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new gu(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.R=n.token,new gu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Lv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function _a(t,e){const n=ya().encode(t),r=ya().encode(e);for(let s=0;s<Math.min(n.length,r.length);s++){const i=oe(n[s],r[s]);if(i!==0)return i}return oe(n.length,r.length)}function wr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=-62135596800,pu=1e6;class lt{static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*pu);return new lt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<mu)throw new X($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/pu}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-mu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new lt(0,0))}static max(){return new ne(new lt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu="__name__";class St{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(),r===void 0?r=e.length-n:r>e.length-n&&se(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return St.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof St?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=St.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return oe(e.length,n.length)}static compareSegments(e,n){const r=St.isNumericId(e),s=St.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?St.extractNumericId(e).compare(St.extractNumericId(n)):_a(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return hn.fromString(e.substring(4,e.length-2))}}class Ce extends St{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const Bv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends St{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return Bv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===yu}static keyField(){return new ot([yu])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new X($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new X($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new X($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Ce.fromString(e))}static fromName(e){return new Z(Ce.fromString(e).popFirst(5))}static empty(){return new Z(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Ce(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=-1;function $v(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ne.fromTimestamp(r===1e9?new lt(n+1,0):new lt(n,r));return new gn(s,Z.empty(),e)}function jv(t){return new gn(t.readTime,t.key,_s)}class gn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gn(ne.min(),Z.empty(),_s)}static max(){return new gn(ne.max(),Z.empty(),_s)}}function Hv(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==qv)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},u=>r(u))}),a=!0,i===s&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(s=>s?x.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new x((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const f=u;n(e[f]).next(d=>{a[f]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(e,n){return new x((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Kv(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Dr(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ji.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=-1;function Zi(t){return t==null}function va(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="";function Wv(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=_u(e)),e=Qv(t.get(n),e);return _u(e)}function Qv(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case _d:n+="";break;default:n+=i}}return n}function _u(t){return t+_d+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Yv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ei(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ei(this.root,e,this.comparator,!1)}getReverseIterator(){return new ei(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ei(this.root,e,this.comparator,!0)}}class ei{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??$e.RED,this.left=s??$e.EMPTY,this.right=i??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new $e(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return $e.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const e=this.left.check();if(e!==this.right.check())throw se();return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(e,n,r,s,i){return this}insert(e,n,r){return new $e(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Tu(this.data.getIterator())}getIteratorFrom(e){return new Tu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ke(this.comparator);return n.data=e,n}}class Tu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new on([])}unionWith(e){let n=new ke(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new on(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return wr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new vd("Invalid base64 string: "+i):i}}(e);return new qe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const Xv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mn(t){if(be(!!t),typeof t=="string"){let e=0;const n=Xv.exec(t);if(be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function pn(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="server_timestamp",Ed="__type__",wd="__previous_value__",Id="__local_write_time__";function ul(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ed])===null||n===void 0?void 0:n.stringValue)===Td}function eo(t){const e=t.mapValue.fields[wd];return ul(e)?eo(e):e}function vs(t){const e=mn(t.mapValue.fields[Id].timestampValue);return new lt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,n,r,s,i,a,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=f}}const Ri="(default)";class Ts{constructor(e,n){this.projectId=e,this.database=n||Ri}static empty(){return new Ts("","")}get isDefaultDatabase(){return this.database===Ri}isEqual(e){return e instanceof Ts&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv="__type__",eT="__max__",ti={mapValue:{}},tT="__vector__",Ta="value";function yn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ul(t)?4:rT(t)?9007199254740991:nT(t)?10:11:se()}function kt(t,e){if(t===e)return!0;const n=yn(t);if(n!==yn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vs(t).isEqual(vs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=mn(s.timestampValue),l=mn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return pn(s.bytesValue).isEqual(pn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Re(s.geoPointValue.latitude)===Re(i.geoPointValue.latitude)&&Re(s.geoPointValue.longitude)===Re(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Re(s.integerValue)===Re(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Re(s.doubleValue),l=Re(i.doubleValue);return a===l?va(a)===va(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return wr(t.arrayValue.values||[],e.arrayValue.values||[],kt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(vu(a)!==vu(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!kt(a[u],l[u])))return!1;return!0}(t,e);default:return se()}}function Es(t,e){return(t.values||[]).find(n=>kt(n,e))!==void 0}function Ir(t,e){if(t===e)return 0;const n=yn(t),r=yn(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Re(i.integerValue||i.doubleValue),u=Re(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Eu(t.timestampValue,e.timestampValue);case 4:return Eu(vs(t),vs(e));case 5:return _a(t.stringValue,e.stringValue);case 6:return function(i,a){const l=pn(i),u=pn(a);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let f=0;f<l.length&&f<u.length;f++){const d=oe(l[f],u[f]);if(d!==0)return d}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=oe(Re(i.latitude),Re(a.latitude));return l!==0?l:oe(Re(i.longitude),Re(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return wu(t.arrayValue,e.arrayValue);case 10:return function(i,a){var l,u,f,d;const m=i.fields||{},T=a.fields||{},I=(l=m[Ta])===null||l===void 0?void 0:l.arrayValue,V=(u=T[Ta])===null||u===void 0?void 0:u.arrayValue,P=oe(((f=I==null?void 0:I.values)===null||f===void 0?void 0:f.length)||0,((d=V==null?void 0:V.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:wu(I,V)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===ti.mapValue&&a===ti.mapValue)return 0;if(i===ti.mapValue)return 1;if(a===ti.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),f=a.fields||{},d=Object.keys(f);u.sort(),d.sort();for(let m=0;m<u.length&&m<d.length;++m){const T=_a(u[m],d[m]);if(T!==0)return T;const I=Ir(l[u[m]],f[d[m]]);if(I!==0)return I}return oe(u.length,d.length)}(t.mapValue,e.mapValue);default:throw se()}}function Eu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=mn(t),r=mn(e),s=oe(n.seconds,r.seconds);return s!==0?s:oe(n.nanos,r.nanos)}function wu(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ir(n[s],r[s]);if(i)return i}return oe(n.length,r.length)}function Ar(t){return Ea(t)}function Ea(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=mn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return pn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ea(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ea(n.fields[a])}`;return s+"}"}(t.mapValue):se()}function fi(t){switch(yn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=eo(t);return e?16+fi(e):16;case 5:return 2*t.stringValue.length;case 6:return pn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+fi(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Cs(r.fields,(i,a)=>{s+=i.length+fi(a)}),s}(t.mapValue);default:throw se()}}function wa(t){return!!t&&"integerValue"in t}function hl(t){return!!t&&"arrayValue"in t}function Iu(t){return!!t&&"nullValue"in t}function Au(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zo(t){return!!t&&"mapValue"in t}function nT(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Zv])===null||n===void 0?void 0:n.stringValue)===tT}function os(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Cs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=os(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=os(t.arrayValue.values[n]);return e}return Object.assign({},t)}function rT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===eT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!zo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=os(n)}setAll(e){let n=ot.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=os(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());zo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];zo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Cs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Pt(os(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ze(e,0,ne.min(),ne.min(),ne.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,s){return new Ze(e,1,n,ne.min(),r,s,0)}static newNoDocument(e,n){return new Ze(e,2,n,ne.min(),ne.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,ne.min(),ne.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.position=e,this.inclusive=n}}function bu(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(a.referenceValue),n.key):r=Ir(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Su(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n="asc"){this.field=e,this.dir=n}}function sT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{}class Me extends Ad{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new oT(e,n,r):n==="array-contains"?new cT(e,r):n==="in"?new uT(e,r):n==="not-in"?new hT(e,r):n==="array-contains-any"?new fT(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new aT(e,r):new lT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ir(n,this.value)):n!==null&&yn(this.value)===yn(n)&&this.matchesComparison(Ir(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nt extends Ad{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Nt(e,n)}matches(e){return bd(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function bd(t){return t.op==="and"}function Sd(t){return iT(t)&&bd(t)}function iT(t){for(const e of t.filters)if(e instanceof Nt)return!1;return!0}function Ia(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+Ar(t.value);if(Sd(t))return t.filters.map(e=>Ia(e)).join(",");{const e=t.filters.map(n=>Ia(n)).join(",");return`${t.op}(${e})`}}function Cd(t,e){return t instanceof Me?function(r,s){return s instanceof Me&&r.op===s.op&&r.field.isEqual(s.field)&&kt(r.value,s.value)}(t,e):t instanceof Nt?function(r,s){return s instanceof Nt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Cd(a,s.filters[l]),!0):!1}(t,e):void se()}function Rd(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${Ar(n.value)}`}(t):t instanceof Nt?function(n){return n.op.toString()+" {"+n.getFilters().map(Rd).join(" ,")+"}"}(t):"Filter"}class oT extends Me{constructor(e,n,r){super(e,n,r),this.key=Z.fromName(r.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.matchesComparison(n)}}class aT extends Me{constructor(e,n){super(e,"in",n),this.keys=Pd("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lT extends Me{constructor(e,n){super(e,"not-in",n),this.keys=Pd("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Pd(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Z.fromName(r.referenceValue))}class cT extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hl(n)&&Es(n.arrayValue,this.value)}}class uT extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Es(this.value.arrayValue,n)}}class hT extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Es(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Es(this.value.arrayValue,n)}}class fT extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Es(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.le=null}}function Cu(t,e=null,n=[],r=[],s=null,i=null,a=null){return new dT(t,e,n,r,s,i,a)}function fl(t){const e=ue(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ia(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Zi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ar(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ar(r)).join(",")),e.le=n}return e.le}function dl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!sT(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Cd(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Su(t.startAt,e.startAt)&&Su(t.endAt,e.endAt)}function Aa(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function gT(t,e,n,r,s,i,a,l){return new to(t,e,n,r,s,i,a,l)}function Dd(t){return new to(t)}function Ru(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function mT(t){return t.collectionGroup!==null}function as(t){const e=ue(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ke(ot.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new Di(i,r))}),n.has(ot.keyField().canonicalString())||e.he.push(new Di(ot.keyField(),r))}return e.he}function Ot(t){const e=ue(t);return e.Pe||(e.Pe=pT(e,as(t))),e.Pe}function pT(t,e){if(t.limitType==="F")return Cu(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Di(s.field,i)});const n=t.endAt?new Pi(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Pi(t.startAt.position,t.startAt.inclusive):null;return Cu(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ba(t,e,n){return new to(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function no(t,e){return dl(Ot(t),Ot(e))&&t.limitType===e.limitType}function Vd(t){return`${fl(Ot(t))}|lt:${t.limitType}`}function ar(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Rd(s)).join(", ")}]`),Zi(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ar(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ar(s)).join(",")),`Target(${r})`}(Ot(t))}; limitType=${t.limitType})`}function ro(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of as(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const f=bu(a,l,u);return a.inclusive?f<=0:f<0}(r.startAt,as(r),s)||r.endAt&&!function(a,l,u){const f=bu(a,l,u);return a.inclusive?f>=0:f>0}(r.endAt,as(r),s))}(t,e)}function yT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xd(t){return(e,n)=>{let r=!1;for(const s of as(t)){const i=_T(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function _T(t,e,n){const r=t.field.isKeyField()?Z.comparator(e.key,n.key):function(i,a,l){const u=a.data.field(i),f=l.data.field(i);return u!==null&&f!==null?Ir(u,f):se()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Cs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Yv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=new Pe(Z.comparator);function _n(){return vT}const Od=new Pe(Z.comparator);function Jr(...t){let e=Od;for(const n of t)e=e.insert(n.key,n);return e}function TT(t){let e=Od;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Nn(){return ls()}function Md(){return ls()}function ls(){return new Wn(t=>t.toString(),(t,e)=>t.isEqual(e))}const ET=new ke(Z.comparator);function he(...t){let e=ET;for(const n of t)e=e.add(n);return e}const wT=new ke(oe);function IT(){return wT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:va(e)?"-0":e}}function bT(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this._=void 0}}function ST(t,e,n){return t instanceof Sa?function(s,i){const a={fields:{[Ed]:{stringValue:Td},[Id]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ul(i)&&(i=eo(i)),i&&(a.fields[wd]=i),{mapValue:a}}(n,e):t instanceof Vi?kd(t,e):t instanceof xi?Nd(t,e):function(s,i){const a=RT(s,i),l=Pu(a)+Pu(s.Ie);return wa(a)&&wa(s.Ie)?bT(l):AT(s.serializer,l)}(t,e)}function CT(t,e,n){return t instanceof Vi?kd(t,e):t instanceof xi?Nd(t,e):n}function RT(t,e){return t instanceof Ca?function(r){return wa(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Sa extends so{}class Vi extends so{constructor(e){super(),this.elements=e}}function kd(t,e){const n=Fd(e);for(const r of t.elements)n.some(s=>kt(s,r))||n.push(r);return{arrayValue:{values:n}}}class xi extends so{constructor(e){super(),this.elements=e}}function Nd(t,e){let n=Fd(e);for(const r of t.elements)n=n.filter(s=>!kt(s,r));return{arrayValue:{values:n}}}class Ca extends so{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Pu(t){return Re(t.integerValue||t.doubleValue)}function Fd(t){return hl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function PT(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Vi&&s instanceof Vi||r instanceof xi&&s instanceof xi?wr(r.elements,s.elements,kt):r instanceof Ca&&s instanceof Ca?kt(r.Ie,s.Ie):r instanceof Sa&&s instanceof Sa}(t.transform,e.transform)}class Bn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bn}static exists(e){return new Bn(void 0,e)}static updateTime(e){return new Bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function di(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class gl{}function Ld(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new VT(t.key,Bn.none()):new ml(t.key,t.data,Bn.none());{const n=t.data,r=Pt.empty();let s=new ke(ot.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new io(t.key,r,new on(s.toArray()),Bn.none())}}function DT(t,e,n){t instanceof ml?function(s,i,a){const l=s.value.clone(),u=Vu(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof io?function(s,i,a){if(!di(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Vu(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Ud(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function cs(t,e,n,r){return t instanceof ml?function(i,a,l,u){if(!di(i.precondition,a))return l;const f=i.value.clone(),d=xu(i.fieldTransforms,u,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(t,e,n,r):t instanceof io?function(i,a,l,u){if(!di(i.precondition,a))return l;const f=xu(i.fieldTransforms,u,a),d=a.data;return d.setAll(Ud(i)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,a,l){return di(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function Du(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&wr(r,s,(i,a)=>PT(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ml extends gl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class io extends gl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ud(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Vu(t,e,n){const r=new Map;be(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,CT(a,l,n[s]))}return r}function xu(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,ST(i,a,e))}return r}class VT extends gl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&DT(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=cs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=cs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Md();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const u=Ld(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&wr(this.mutations,e.mutations,(n,r)=>Du(n,r))&&wr(this.baseMutations,e.baseMutations,(n,r)=>Du(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,le;function Bd(t){if(t===void 0)return Wt("GRPC error has no .code"),$.UNKNOWN;switch(t){case De.OK:return $.OK;case De.CANCELLED:return $.CANCELLED;case De.UNKNOWN:return $.UNKNOWN;case De.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case De.INTERNAL:return $.INTERNAL;case De.UNAVAILABLE:return $.UNAVAILABLE;case De.UNAUTHENTICATED:return $.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case De.NOT_FOUND:return $.NOT_FOUND;case De.ALREADY_EXISTS:return $.ALREADY_EXISTS;case De.PERMISSION_DENIED:return $.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case De.ABORTED:return $.ABORTED;case De.OUT_OF_RANGE:return $.OUT_OF_RANGE;case De.UNIMPLEMENTED:return $.UNIMPLEMENTED;case De.DATA_LOSS:return $.DATA_LOSS;default:return se()}}(le=De||(De={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=new hn([4294967295,4294967295],0);function Ou(t){const e=ya().encode(t),n=new hd;return n.update(e),new Uint8Array(n.digest())}function Mu(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hn([n,r],0),new hn([s,i],0)]}class pl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Zr(`Invalid padding: ${n}`);if(r<0)throw new Zr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Zr(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Zr(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=hn.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(hn.fromNumber(r)));return s.compare(kT)===1&&(s=new hn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=Ou(e),[r,s]=Mu(n);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);if(!this.Re(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new pl(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ee===0)return;const n=Ou(e),[r,s]=Mu(n);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);this.Ve(a)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Zr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Rs.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new oo(ne.min(),s,new Pe(oe),_n(),he())}}class Rs{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Rs(r,n,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class $d{constructor(e,n){this.targetId=e,this.ge=n}}class jd{constructor(e,n,r=qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ku{constructor(){this.pe=0,this.ye=Nu(),this.we=qe.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=he(),n=he(),r=he();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:se()}}),new Rs(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=Nu()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,be(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class NT{constructor(e){this.ke=e,this.qe=new Map,this.Qe=_n(),this.$e=ni(),this.Ue=ni(),this.Ke=new Pe(oe)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:se()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){const n=e.targetId,r=e.ge.count,s=this.Xe(n);if(s){const i=s.target;if(Aa(i))if(r===0){const a=new Z(i.path);this.ze(n,a,Ze.newNoDocument(a,ne.min()))}else be(r===1);else{const a=this.et(n);if(a!==r){const l=this.tt(e),u=l?this.nt(l,e,a):1;if(u!==0){this.Ye(n);const f=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,f)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=pn(r).toUint8Array()}catch(u){if(u instanceof vd)return Er("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new pl(a,s,i)}catch(u){return Er(u instanceof Zr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ee===0?null:l}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.ke.it(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.ze(n,i,null),s++)}),s}ot(e){const n=new Map;this.qe.forEach((i,a)=>{const l=this.Xe(a);if(l){if(i.current&&Aa(l.target)){const u=new Z(l.target.path);this._t(u).has(a)||this.ut(a,u)||this.ze(a,u,Ze.newNoDocument(u,e))}i.ve&&(n.set(a,i.Fe()),i.Me())}});let r=he();this.Ue.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const f=this.Xe(u);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.Qe.forEach((i,a)=>a.setReadTime(e));const s=new oo(e,n,this.Ke,this.Qe,r);return this.Qe=_n(),this.$e=ni(),this.Ue=ni(),this.Ke=new Pe(oe),s}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,n)?s.xe(n,1):s.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),this.Ue=this.Ue.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new ku,this.qe.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new ke(oe),this.Ue=this.Ue.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new ke(oe),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new ku),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function ni(){return new Pe(Z.comparator)}function Nu(){return new Pe(Z.comparator)}const FT={asc:"ASCENDING",desc:"DESCENDING"},LT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},UT={and:"AND",or:"OR"};class BT{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ra(t,e){return t.useProto3Json||Zi(e)?e:{value:e}}function $T(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yr(t){return be(!!t),ne.fromTimestamp(function(n){const r=mn(n);return new lt(r.seconds,r.nanos)}(t))}function HT(t,e){return Pa(t,e).canonicalString()}function Pa(t,e){const n=function(s){return new Ce(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Hd(t){const e=Ce.fromString(t);return be(Wd(e)),e}function Ko(t,e){const n=Hd(e);if(n.get(1)!==t.databaseId.projectId)throw new X($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(zd(n))}function qd(t,e){return HT(t.databaseId,e)}function qT(t){const e=Hd(t);return e.length===4?Ce.emptyPath():zd(e)}function Fu(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zd(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function zT(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:se()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(f,d){return f.useProto3Json?(be(d===void 0||typeof d=="string"),qe.fromBase64String(d||"")):(be(d===void 0||d instanceof Buffer||d instanceof Uint8Array),qe.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(f){const d=f.code===void 0?$.UNKNOWN:Bd(f.code);return new X(d,f.message||"")}(a);n=new jd(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ko(t,r.document.name),i=yr(r.document.updateTime),a=r.document.createTime?yr(r.document.createTime):ne.min(),l=new Pt({mapValue:{fields:r.document.fields}}),u=Ze.newFoundDocument(s,i,a,l),f=r.targetIds||[],d=r.removedTargetIds||[];n=new gi(f,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ko(t,r.document),i=r.readTime?yr(r.readTime):ne.min(),a=Ze.newNoDocument(s,i),l=r.removedTargetIds||[];n=new gi([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ko(t,r.document),i=r.removedTargetIds||[];n=new gi([],i,s,null)}else{if(!("filter"in e))return se();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new MT(s,i),l=r.targetId;n=new $d(l,a)}}return n}function KT(t,e){return{documents:[qd(t,e.path)]}}function GT(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=qd(t,s);const i=function(f){if(f.length!==0)return Gd(Nt.create(f,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(f){if(f.length!==0)return f.map(d=>function(T){return{field:lr(T.field),direction:YT(T.dir)}}(d))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Ra(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{ht:n,parent:s}}function WT(t){let e=qT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(m){const T=Kd(m);return T instanceof Nt&&Sd(T)?T.getFilters():[T]}(n.where));let a=[];n.orderBy&&(a=function(m){return m.map(T=>function(V){return new Di(cr(V.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(T))}(n.orderBy));let l=null;n.limit&&(l=function(m){let T;return T=typeof m=="object"?m.value:m,Zi(T)?null:T}(n.limit));let u=null;n.startAt&&(u=function(m){const T=!!m.before,I=m.values||[];return new Pi(I,T)}(n.startAt));let f=null;return n.endAt&&(f=function(m){const T=!m.before,I=m.values||[];return new Pi(I,T)}(n.endAt)),gT(e,s,a,i,l,"F",u,f)}function QT(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Kd(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=cr(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=cr(n.unaryFilter.field);return Me.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=cr(n.unaryFilter.field);return Me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=cr(n.unaryFilter.field);return Me.create(a,"!=",{nullValue:"NULL_VALUE"});default:return se()}}(t):t.fieldFilter!==void 0?function(n){return Me.create(cr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Nt.create(n.compositeFilter.filters.map(r=>Kd(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return se()}}(n.compositeFilter.op))}(t):se()}function YT(t){return FT[t]}function XT(t){return LT[t]}function JT(t){return UT[t]}function lr(t){return{fieldPath:t.canonicalString()}}function cr(t){return ot.fromServerFormat(t.fieldPath)}function Gd(t){return t instanceof Me?function(n){if(n.op==="=="){if(Au(n.value))return{unaryFilter:{field:lr(n.field),op:"IS_NAN"}};if(Iu(n.value))return{unaryFilter:{field:lr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Au(n.value))return{unaryFilter:{field:lr(n.field),op:"IS_NOT_NAN"}};if(Iu(n.value))return{unaryFilter:{field:lr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:lr(n.field),op:XT(n.op),value:n.value}}}(t):t instanceof Nt?function(n){const r=n.getFilters().map(s=>Gd(s));return r.length===1?r[0]:{compositeFilter:{op:JT(n.op),filters:r}}}(t):se()}function Wd(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n,r,s,i=ne.min(),a=ne.min(),l=qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new an(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new an(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new an(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new an(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e){this.Tt=e}}function e0(t){const e=WT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ba(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(){this.Tn=new n0}addToCollectionParentIndex(e,n){return this.Tn.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(gn.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(gn.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class n0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ke(Ce.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ke(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Qd=41943040;class at{static withCacheSize(e){return new at(e,at.DEFAULT_COLLECTION_PERCENTILE,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */at.DEFAULT_COLLECTION_PERCENTILE=10,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,at.DEFAULT=new at(Qd,at.DEFAULT_COLLECTION_PERCENTILE,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),at.DISABLED=new at(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new br(0)}static Kn(){return new br(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="LruGarbageCollector",r0=1048576;function Bu([t,e],[n,r]){const s=oe(t,n);return s===0?oe(e,r):s}class s0{constructor(e){this.Hn=e,this.buffer=new ke(Bu),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Bu(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class i0{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){q(Uu,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Dr(n)?q(Uu,"Ignoring IndexedDB error during garbage collection: ",n):await Xi(n)}await this.er(3e5)})}}class o0{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return x.resolve(Ji.ae);const r=new s0(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(Lu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Lu):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,a,l,u,f;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(f=Date.now(),or()<=ce.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(f-u)+`ms
Total Duration: ${f-d}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function a0(t,e){return new o0(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(){this.changes=new Wn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&cs(r.mutation,s,on.empty(),lt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const s=Nn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=Jr();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=Nn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=_n();const a=ls(),l=function(){return ls()}();return n.forEach((u,f)=>{const d=r.get(f.key);s.has(f.key)&&(d===void 0||d.mutation instanceof io)?i=i.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),cs(d.mutation,f,d.mutation.getFieldMask(),lt.now())):a.set(f.key,on.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((f,d)=>a.set(f,d)),n.forEach((f,d)=>{var m;return l.set(f,new c0(d,(m=a.get(f))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ls();let s=new Pe((a,l)=>a-l),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const f=n.get(u);if(f===null)return;let d=r.get(u)||on.empty();d=l.applyToLocalView(f,d),r.set(u,d);const m=(s.get(l.batchId)||he()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),f=u.key,d=u.value,m=Md();d.forEach(T=>{if(!i.has(T)){const I=Ld(n.get(T),r.get(T));I!==null&&m.set(T,I),i=i.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,m))}return x.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return Z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):mT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):x.resolve(Nn());let l=_s,u=i;return a.next(f=>x.forEach(f,(d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(d)?x.resolve():this.remoteDocumentCache.getEntry(e,d).next(T=>{u=u.insert(d,T)}))).next(()=>this.populateOverlays(e,f,i)).next(()=>this.computeViews(e,u,f,he())).next(d=>({batchId:l,changes:TT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Z(n)).next(r=>{let s=Jr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Jr();return this.indexManager.getCollectionParents(e,i).next(l=>x.forEach(l,u=>{const f=function(m,T){return new to(T,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next(d=>{d.forEach((m,T)=>{a=a.insert(m,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((u,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,Ze.newInvalidDocument(d)))});let l=Jr();return a.forEach((u,f)=>{const d=i.get(u);d!==void 0&&cs(d.mutation,f,on.empty(),lt.now()),ro(n,f)&&(l=l.insert(u,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return x.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:yr(s.createTime)}}(n)),x.resolve()}getNamedQuery(e,n){return x.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:e0(s.bundledQuery),readTime:yr(s.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(){this.overlays=new Pe(Z.comparator),this.Rr=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Nn();return x.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const s=Nn(),i=n.length+1,a=new Z(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,f=u.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return x.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Pe((f,d)=>f-d);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>r){let d=i.get(f.largestBatchId);d===null&&(d=Nn(),i=i.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const l=Nn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((f,d)=>l.set(f,d)),!(l.size()>=s)););return x.resolve(l)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new OT(n,r));let i=this.Rr.get(n);i===void 0&&(i=he(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(){this.sessionToken=qe.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.Vr=new ke(Ne.mr),this.gr=new ke(Ne.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new Ne(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new Ne(e,n))}Sr(e,n){e.forEach(r=>this.removeReference(r,n))}br(e){const n=new Z(new Ce([])),r=new Ne(n,e),s=new Ne(n,e+1),i=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new Z(new Ce([])),r=new Ne(n,e),s=new Ne(n,e+1);let i=he();return this.gr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new Ne(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ne{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return Z.comparator(e.key,n.key)||oe(e.Cr,n.Cr)}static pr(e,n){return oe(e.Cr,n.Cr)||Z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new ke(Ne.mr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new xT(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Mr=this.Mr.add(new Ne(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return x.resolve(a)}lookupMutationBatch(e,n){return x.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?Gv:this.Fr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ne(n,0),s=new Ne(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],a=>{const l=this.Or(a.Cr);i.push(l)}),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ke(oe);return n.forEach(s=>{const i=new Ne(s,0),a=new Ne(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],l=>{r=r.add(l.Cr)})}),x.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const a=new Ne(new Z(i),0);let l=new ke(oe);return this.Mr.forEachWhile(u=>{const f=u.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(u.Cr)),!0)},a),x.resolve(this.Br(l))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){be(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return x.forEach(n.mutations,s=>{const i=new Ne(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new Ne(n,0),s=this.Mr.firstAfterOrEqual(r);return x.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e){this.kr=e,this.docs=function(){return new Pe(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=_n();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ze.newInvalidDocument(s))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=_n();const a=n.path,l=new Z(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:f,value:{document:d}}=u.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Hv(jv(d),r)<=0||(s.has(d.key)||ro(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,n,r,s){se()}qr(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new p0(this)}getSize(e){return x.resolve(this.size)}}class p0 extends l0{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this.persistence=e,this.Qr=new Wn(n=>fl(n),dl),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.$r=0,this.Ur=new yl,this.targetCount=0,this.Kr=br.Un()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),x.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new br(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.zn(n),x.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),x.waitFor(i).next(()=>s)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.Ur.yr(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.Ur.Sr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),x.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ur.vr(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.Ur.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Ji(0),this.zr=!1,this.zr=!0,this.jr=new d0,this.referenceDelegate=e(this),this.Hr=new y0(this),this.indexManager=new t0,this.remoteDocumentCache=function(s){return new m0(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new ZT(n),this.Yr=new h0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new f0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new g0(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const s=new _0(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return x.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class _0 extends zv{constructor(e){super(),this.currentSequenceNumber=e}}class _l{constructor(e){this.persistence=e,this.ti=new yl,this.ni=null}static ri(e){return new _l(e)}get ii(){if(this.ni)return this.ni;throw se()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),x.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.ii,r=>{const s=Z.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,ne.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return x.or([()=>x.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class Oi{constructor(e,n){this.persistence=e,this.oi=new Wn(r=>Wv(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=a0(this,n)}static ri(e,n){return new Oi(e,n)}Zr(){}Xr(e){return x.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return x.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?x.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,a=>this.ar(e,a,n).next(l=>{l||(r++,i.removeEntry(a,ne.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),x.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),x.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=fi(e.data.value)),n}ar(e,n,r){return x.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return x.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=he(),s=he();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new vl(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return f_()?8:Kv(c_())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new v0;return this._s(e,n,a).next(l=>{if(i.result=l,this.Xi)return this.us(e,n,a,l.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(or()<=ce.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",ar(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),x.resolve()):(or()<=ce.DEBUG&&q("QueryEngine","Query:",ar(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(or()<=ce.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",ar(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ot(n))):x.resolve())}rs(e,n){if(Ru(n))return x.resolve(null);let r=Ot(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ba(n,null,"F"),r=Ot(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=he(...i);return this.ns.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const f=this.cs(n,l);return this.ls(n,f,a,u.readTime)?this.rs(e,ba(n,null,"F")):this.hs(e,f,n,u)}))})))}ss(e,n,r,s){return Ru(n)||s.isEqual(ne.min())?x.resolve(null):this.ns.getDocuments(e,r).next(i=>{const a=this.cs(n,i);return this.ls(n,a,r,s)?x.resolve(null):(or()<=ce.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ar(n)),this.hs(e,a,n,$v(s,_s)).next(l=>l))})}cs(e,n){let r=new ke(xd(e));return n.forEach((s,i)=>{ro(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return or()<=ce.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",ar(n)),this.ns.getDocumentsMatchingQuery(e,n,gn.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl="LocalStore",E0=3e8;class w0{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new Pe(oe),this.Is=new Wn(i=>fl(i),dl),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new u0(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function I0(t,e,n,r){return new w0(t,e,n,r)}async function Xd(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=he();for(const f of s){a.push(f.batchId);for(const d of f.mutations)u=u.add(d.key)}for(const f of i){l.push(f.batchId);for(const d of f.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(f=>({Rs:f,removedBatchIds:a,addedBatchIds:l}))})})}function Jd(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function A0(t,e){const n=ue(t),r=e.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const l=[];e.targetChanges.forEach((d,m)=>{const T=s.get(m);if(!T)return;l.push(n.Hr.removeMatchingKeys(i,d.removedDocuments,m).next(()=>n.Hr.addMatchingKeys(i,d.addedDocuments,m)));let I=T.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(qe.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),s=s.insert(m,I),function(P,O,K){return P.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=E0?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(T,I,d)&&l.push(n.Hr.updateTargetData(i,I))});let u=_n(),f=he();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(b0(i,a,e.documentUpdates).next(d=>{u=d.Vs,f=d.fs})),!r.isEqual(ne.min())){const d=n.Hr.getLastRemoteSnapshotVersion(i).next(m=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return x.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,f)).next(()=>u)}).then(i=>(n.Ts=s,i))}function b0(t,e,n){let r=he(),s=he();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=_n();return n.forEach((l,u)=>{const f=i.get(l);u.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(ne.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!f.isValidDocument()||u.version.compareTo(f.version)>0||u.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):q(Tl,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",u.version)}),{Vs:a,fs:s}})}function S0(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,e).next(i=>i?(s=i,x.resolve(s)):n.Hr.allocateTargetId(r).next(a=>(s=new an(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function Da(t,e,n){const r=ue(t),s=r.Ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Dr(a))throw a;q(Tl,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function $u(t,e,n){const r=ue(t);let s=ne.min(),i=he();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,f,d){const m=ue(u),T=m.Is.get(d);return T!==void 0?x.resolve(m.Ts.get(T)):m.Hr.getTargetData(f,d)}(r,a,Ot(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,e,n?s:ne.min(),n?i:he())).next(l=>(C0(r,yT(e),l),{documents:l,gs:i})))}function C0(t,e,n){let r=t.Es.get(e)||ne.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Es.set(e,r)}class ju{constructor(){this.activeTargetIds=IT()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class R0{constructor(){this.ho=new ju,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new ju,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu="ConnectivityMonitor";class qu{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){q(Hu,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){q(Hu,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ri=null;function Va(){return ri===null?ri=function(){return 268435456+Math.round(2147483648*Math.random())}():ri++,"0x"+ri.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go="RestConnection",D0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class V0{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Ri?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(e,n,r,s,i){const a=Va(),l=this.bo(e,n.toUriEncodedString());q(Go,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(u,s,i),this.vo(e,l,u,r).then(f=>(q(Go,`Received RPC '${e}' ${a}: `,f),f),f=>{throw Er(Go,`RPC '${e}' ${a} failed with error: `,f,"url: ",l,"request:",r),f})}Co(e,n,r,s,i,a){return this.So(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Pr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}bo(e,n){const r=D0[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="WebChannelConnection";class O0 extends V0{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=Va();return new Promise((a,l)=>{const u=new fd;u.setWithCredentials(!0),u.listenOnce(dd.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case hi.NO_ERROR:const d=u.getResponseJson();q(Qe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case hi.TIMEOUT:q(Qe,`RPC '${e}' ${i} timed out`),l(new X($.DEADLINE_EXCEEDED,"Request time out"));break;case hi.HTTP_ERROR:const m=u.getStatus();if(q(Qe,`RPC '${e}' ${i} failed with status:`,m,"response text:",u.getResponseText()),m>0){let T=u.getResponseJson();Array.isArray(T)&&(T=T[0]);const I=T==null?void 0:T.error;if(I&&I.status&&I.message){const V=function(O){const K=O.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(K)>=0?K:$.UNKNOWN}(I.status);l(new X(V,I.message))}else l(new X($.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new X($.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{q(Qe,`RPC '${e}' ${i} completed.`)}});const f=JSON.stringify(s);q(Qe,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",f,r,15)})}Wo(e,n,r){const s=Va(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=pd(),l=md(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(u.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=i.join("");q(Qe,`Creating RPC '${e}' stream ${s}: ${d}`,u);const m=a.createWebChannel(d,u);let T=!1,I=!1;const V=new x0({Fo:O=>{I?q(Qe,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(T||(q(Qe,`Opening RPC '${e}' stream ${s} transport.`),m.open(),T=!0),q(Qe,`RPC '${e}' stream ${s} sending:`,O),m.send(O))},Mo:()=>m.close()}),P=(O,K,W)=>{O.listen(K,ee=>{try{W(ee)}catch(z){setTimeout(()=>{throw z},0)}})};return P(m,Xr.EventType.OPEN,()=>{I||(q(Qe,`RPC '${e}' stream ${s} transport opened.`),V.Qo())}),P(m,Xr.EventType.CLOSE,()=>{I||(I=!0,q(Qe,`RPC '${e}' stream ${s} transport closed`),V.Uo())}),P(m,Xr.EventType.ERROR,O=>{I||(I=!0,Er(Qe,`RPC '${e}' stream ${s} transport errored:`,O),V.Uo(new X($.UNAVAILABLE,"The operation could not be completed")))}),P(m,Xr.EventType.MESSAGE,O=>{var K;if(!I){const W=O.data[0];be(!!W);const ee=W,z=(ee==null?void 0:ee.error)||((K=ee[0])===null||K===void 0?void 0:K.error);if(z){q(Qe,`RPC '${e}' stream ${s} received error:`,z);const pe=z.status;let ve=function(v){const w=De[v];if(w!==void 0)return Bd(w)}(pe),A=z.message;ve===void 0&&(ve=$.INTERNAL,A="Unknown error status: "+pe+" with message "+z.message),I=!0,V.Uo(new X(ve,A)),m.close()}else q(Qe,`RPC '${e}' stream ${s} received:`,W),V.Ko(W)}}),P(l,gd.STAT_EVENT,O=>{O.stat===pa.PROXY?q(Qe,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===pa.NOPROXY&&q(Qe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.$o()},0),V}}function Wo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(t){return new BT(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="PersistentStream";class M0{constructor(e,n,r,s,i,a,l,u){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new eg(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Wt(n.toString()),Wt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new X($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return q(zu,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(q(zu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class k0 extends M0{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=zT(this.serializer,e),r=function(i){if(!("targetChange"in i))return ne.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ne.min():a.readTime?yr(a.readTime):ne.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=Fu(this.serializer),n.addTarget=function(i,a){let l;const u=a.target;if(l=Aa(u)?{documents:KT(i,u)}:{query:GT(i,u).ht},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=jT(i,a.resumeToken);const f=Ra(i,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(ne.min())>0){l.readTime=$T(i,a.snapshotVersion.toTimestamp());const f=Ra(i,a.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,e);const r=QT(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=Fu(this.serializer),n.removeTarget=e,this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{}class F0 extends N0{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new X($.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.So(e,Pa(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X($.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Co(e,Pa(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new X($.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class L0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Wt(n),this.N_=!1):q("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="RemoteStore";class U0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{r.enqueueAndForget(async()=>{Ds(this)&&(q(Sr,"Restarting streams for network reachability change."),await async function(u){const f=ue(u);f.W_.add(4),await Ps(f),f.j_.set("Unknown"),f.W_.delete(4),await ao(f)}(this))})}),this.j_=new L0(r,s)}}async function ao(t){if(Ds(t))for(const e of t.G_)await e(!0)}async function Ps(t){for(const e of t.G_)await e(!1)}function tg(t,e){const n=ue(t);n.K_.has(e.targetId)||(n.K_.set(e.targetId,e),Al(n)?Il(n):Vr(n).c_()&&wl(n,e))}function El(t,e){const n=ue(t),r=Vr(n);n.K_.delete(e),r.c_()&&ng(n,e),n.K_.size===0&&(r.c_()?r.P_():Ds(n)&&n.j_.set("Unknown"))}function wl(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vr(t).y_(e)}function ng(t,e){t.H_.Ne(e),Vr(t).w_(e)}function Il(t){t.H_=new NT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.K_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),Vr(t).start(),t.j_.B_()}function Al(t){return Ds(t)&&!Vr(t).u_()&&t.K_.size>0}function Ds(t){return ue(t).W_.size===0}function rg(t){t.H_=void 0}async function B0(t){t.j_.set("Online")}async function $0(t){t.K_.forEach((e,n)=>{wl(t,e)})}async function j0(t,e){rg(t),Al(t)?(t.j_.q_(e),Il(t)):t.j_.set("Unknown")}async function H0(t,e,n){if(t.j_.set("Online"),e instanceof jd&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.K_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.K_.delete(l),s.H_.removeTarget(l))}(t,e)}catch(r){q(Sr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ku(t,r)}else if(e instanceof gi?t.H_.We(e):e instanceof $d?t.H_.Ze(e):t.H_.je(e),!n.isEqual(ne.min()))try{const r=await Jd(t.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.H_.ot(a);return l.targetChanges.forEach((u,f)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.K_.get(f);d&&i.K_.set(f,d.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,f)=>{const d=i.K_.get(u);if(!d)return;i.K_.set(u,d.withResumeToken(qe.EMPTY_BYTE_STRING,d.snapshotVersion)),ng(i,u);const m=new an(d.target,u,f,d.sequenceNumber);wl(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q(Sr,"Failed to raise snapshot:",r),await Ku(t,r)}}async function Ku(t,e,n){if(!Dr(e))throw e;t.W_.add(1),await Ps(t),t.j_.set("Offline"),n||(n=()=>Jd(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(Sr,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await ao(t)})}async function Gu(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),q(Sr,"RemoteStore received new credentials");const r=Ds(n);n.W_.add(3),await Ps(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await ao(n)}async function q0(t,e){const n=ue(t);e?(n.W_.delete(2),await ao(n)):e||(n.W_.add(2),await Ps(n),n.j_.set("Unknown"))}function Vr(t){return t.J_||(t.J_=function(n,r,s){const i=ue(n);return i.M_(),new k0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:B0.bind(null,t),No:$0.bind(null,t),Lo:j0.bind(null,t),p_:H0.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),Al(t)?Il(t):t.j_.set("Unknown")):(await t.J_.stop(),rg(t))})),t.J_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new bl(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sg(t,e){if(Wt("AsyncQueue",`${e}: ${t}`),Dr(t))return new X($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{static emptySet(e){return new _r(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Z.comparator(n.key,r.key):(n,r)=>Z.comparator(n.key,r.key),this.keyedMap=Jr(),this.sortedSet=new Pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _r)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new _r;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(){this.Z_=new Pe(Z.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):se():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Cr{constructor(e,n,r,s,i,a,l,u,f){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=f}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new Cr(e,n,_r.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&no(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class K0{constructor(){this.queries=Qu(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=ue(n),i=s.queries;s.queries=Qu(),i.forEach((a,l)=>{for(const u of l.ta)u.onError(r)})})(this,new X($.ABORTED,"Firestore shutting down"))}}function Qu(){return new Wn(t=>Vd(t),no)}async function G0(t,e){const n=ue(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new z0,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=sg(a,`Initialization of query '${ar(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ta.push(e),e.sa(n.onlineState),i.ea&&e.oa(i.ea)&&Sl(n)}async function W0(t,e){const n=ue(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.ta.indexOf(e);a>=0&&(i.ta.splice(a,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Q0(t,e){const n=ue(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.ta)l.oa(s)&&(r=!0);a.ea=s}}r&&Sl(n)}function Y0(t,e,n){const r=ue(t),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(e)}function Sl(t){t.ia.forEach(e=>{e.next()})}var xa,Yu;(Yu=xa||(xa={}))._a="default",Yu.Cache="cache";class X0{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Cr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=Cr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==xa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){this.key=e}}class og{constructor(e){this.key=e}}class J0{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=he(),this.mutatedKeys=he(),this.ya=xd(e),this.wa=new _r(this.ya)}get Sa(){return this.fa}ba(e,n){const r=n?n.Da:new Wu,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,m)=>{const T=s.get(d),I=ro(this.query,m)?m:null,V=!!T&&this.mutatedKeys.has(T.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let O=!1;T&&I?T.data.isEqual(I.data)?V!==P&&(r.track({type:3,doc:I}),O=!0):this.va(T,I)||(r.track({type:2,doc:I}),O=!0,(u&&this.ya(I,u)>0||f&&this.ya(I,f)<0)&&(l=!0)):!T&&I?(r.track({type:0,doc:I}),O=!0):T&&!I&&(r.track({type:1,doc:T}),O=!0,(u||f)&&(l=!0)),O&&(I?(a=a.add(I),i=P?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{wa:a,Da:r,ls:l,mutatedKeys:i}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const a=e.Da.X_();a.sort((d,m)=>function(I,V){const P=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se()}};return P(I)-P(V)}(d.type,m.type)||this.ya(d.doc,m.doc)),this.Ca(r),s=s!=null&&s;const l=n&&!s?this.Fa():[],u=this.pa.size===0&&this.current&&!s?1:0,f=u!==this.ga;return this.ga=u,a.length!==0||f?{snapshot:new Cr(this.query,e.wa,i,a,e.mutatedKeys,u===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Wu,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=he(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new og(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new ig(r))}),n}Oa(e){this.fa=e.gs,this.pa=he();const n=this.ba(e.documents);return this.applyChanges(n,!0)}Na(){return Cr.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Cl="SyncEngine";class Z0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class eE{constructor(e){this.key=e,this.Ba=!1}}class tE{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new Wn(l=>Vd(l),no),this.qa=new Map,this.Qa=new Set,this.$a=new Pe(Z.comparator),this.Ua=new Map,this.Ka=new yl,this.Wa={},this.Ga=new Map,this.za=br.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function nE(t,e,n=!0){const r=hg(t);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await ag(r,e,n,!0),s}async function rE(t,e){const n=hg(t);await ag(n,e,!0,!1)}async function ag(t,e,n,r){const s=await S0(t.localStore,Ot(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await sE(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&tg(t.remoteStore,s),l}async function sE(t,e,n,r,s){t.Ha=(m,T,I)=>async function(P,O,K,W){let ee=O.view.ba(K);ee.ls&&(ee=await $u(P.localStore,O.query,!1).then(({documents:A})=>O.view.ba(A,ee)));const z=W&&W.targetChanges.get(O.targetId),pe=W&&W.targetMismatches.get(O.targetId)!=null,ve=O.view.applyChanges(ee,P.isPrimaryClient,z,pe);return Ju(P,O.targetId,ve.Ma),ve.snapshot}(t,m,T,I);const i=await $u(t.localStore,e,!0),a=new J0(e,i.gs),l=a.ba(i.documents),u=Rs.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),f=a.applyChanges(l,t.isPrimaryClient,u);Ju(t,n,f.Ma);const d=new Z0(e,n,a);return t.ka.set(e,d),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),f.snapshot}async function iE(t,e,n){const r=ue(t),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(a=>!no(a,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Da(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&El(r.remoteStore,s.targetId),Oa(r,s.targetId)}).catch(Xi)):(Oa(r,s.targetId),await Da(r.localStore,s.targetId,!0))}async function oE(t,e){const n=ue(t),r=n.ka.get(e),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),El(n.remoteStore,r.targetId))}async function lg(t,e){const n=ue(t);try{const r=await A0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Ua.get(i);a&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?be(a.Ba):s.removedDocuments.size>0&&(be(a.Ba),a.Ba=!1))}),await ug(n,r,e)}catch(r){await Xi(r)}}function Xu(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,a)=>{const l=a.view.sa(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=ue(a);u.onlineState=l;let f=!1;u.queries.forEach((d,m)=>{for(const T of m.ta)T.sa(l)&&(f=!0)}),f&&Sl(u)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function aE(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ua.get(e),i=s&&s.key;if(i){let a=new Pe(Z.comparator);a=a.insert(i,Ze.newNoDocument(i,ne.min()));const l=he().add(i),u=new oo(ne.min(),new Map,new Pe(oe),a,l);await lg(r,u),r.$a=r.$a.remove(i),r.Ua.delete(e),Rl(r)}else await Da(r.localStore,e,!1).then(()=>Oa(r,e,n)).catch(Xi)}function Oa(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ka.br(e).forEach(r=>{t.Ka.containsKey(r)||cg(t,r)})}function cg(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(El(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ua.delete(n),Rl(t))}function Ju(t,e,n){for(const r of n)r instanceof ig?(t.Ka.addReference(r.key,e),lE(t,r)):r instanceof og?(q(Cl,"Document no longer in limbo: "+r.key),t.Ka.removeReference(r.key,e),t.Ka.containsKey(r.key)||cg(t,r.key)):se()}function lE(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(q(Cl,"New document in limbo: "+n),t.Qa.add(r),Rl(t))}function Rl(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new Z(Ce.fromString(e)),r=t.za.next();t.Ua.set(r,new eE(n)),t.$a=t.$a.insert(n,r),tg(t.remoteStore,new an(Ot(Dd(n.path)),r,"TargetPurposeLimboResolution",Ji.ae))}}async function ug(t,e,n){const r=ue(t),s=[],i=[],a=[];r.ka.isEmpty()||(r.ka.forEach((l,u)=>{a.push(r.Ha(u,e,n).then(f=>{var d;if((f||n)&&r.isPrimaryClient){const m=f?!f.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(f){s.push(f);const m=vl.Yi(u.targetId,f);i.push(m)}}))}),await Promise.all(a),r.La.p_(s),await async function(u,f){const d=ue(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>x.forEach(f,T=>x.forEach(T.Hi,I=>d.persistence.referenceDelegate.addReference(m,T.targetId,I)).next(()=>x.forEach(T.Ji,I=>d.persistence.referenceDelegate.removeReference(m,T.targetId,I)))))}catch(m){if(!Dr(m))throw m;q(Tl,"Failed to update sequence numbers: "+m)}for(const m of f){const T=m.targetId;if(!m.fromCache){const I=d.Ts.get(T),V=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(V);d.Ts=d.Ts.insert(T,P)}}}(r.localStore,i))}async function cE(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){q(Cl,"User change. New user:",e.toKey());const r=await Xd(n.localStore,e);n.currentUser=e,function(i,a){i.Ga.forEach(l=>{l.forEach(u=>{u.reject(new X($.CANCELLED,a))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ug(n,r.Rs)}}function uE(t,e){const n=ue(t),r=n.Ua.get(e);if(r&&r.Ba)return he().add(r.key);{let s=he();const i=n.qa.get(e);if(!i)return s;for(const a of i){const l=n.ka.get(a);s=s.unionWith(l.view.Sa)}return s}}function hg(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=lg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aE.bind(null,e),e.La.p_=Q0.bind(null,e.eventManager),e.La.Ja=Y0.bind(null,e.eventManager),e}class Mi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zd(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return I0(this.persistence,new T0,e.initialUser,this.serializer)}Xa(e){return new Yd(_l.ri,this.serializer)}Za(e){return new R0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Mi.provider={build:()=>new Mi};class hE extends Mi{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){be(this.persistence.referenceDelegate instanceof Oi);const r=this.persistence.referenceDelegate.garbageCollector;return new i0(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?at.withCacheSize(this.cacheSizeBytes):at.DEFAULT;return new Yd(r=>Oi.ri(r,n),this.serializer)}}class Ma{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=cE.bind(null,this.syncEngine),await q0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new K0}()}createDatastore(e){const n=Zd(e.databaseInfo.databaseId),r=function(i){return new O0(i)}(e.databaseInfo);return function(i,a,l,u){return new F0(i,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new U0(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Xu(this.syncEngine,n,0),function(){return qu.D()?new qu:new P0}())}createSyncEngine(e,n){return function(s,i,a,l,u,f,d){const m=new tE(s,i,a,l,u,f);return d&&(m.ja=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ue(s);q(Sr,"RemoteStore shutting down."),i.W_.add(5),await Ps(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ma.provider={build:()=>new Ma};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Wt("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="FirestoreClient";class dE{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ye.UNAUTHENTICATED,this.clientId=Uv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{q(vn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(q(vn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=sg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qo(t,e){t.asyncQueue.verifyOperationInProgress(),q(vn,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Xd(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Zu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await gE(t);q(vn,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Gu(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Gu(e.remoteStore,s)),t._onlineComponents=e}async function gE(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(vn,"Using user provided OfflineComponentProvider");try{await Qo(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Er("Error using user provided cache. Falling back to memory cache: "+n),await Qo(t,new Mi)}}else q(vn,"Using default OfflineComponentProvider"),await Qo(t,new hE(void 0));return t._offlineComponents}async function mE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(vn,"Using user provided OnlineComponentProvider"),await Zu(t,t._uninitializedComponentsProvider._online)):(q(vn,"Using default OnlineComponentProvider"),await Zu(t,new Ma))),t._onlineComponents}async function pE(t){const e=await mE(t),n=e.eventManager;return n.onListen=nE.bind(null,e.syncEngine),n.onUnlisten=iE.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=rE.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=oE.bind(null,e.syncEngine),n}function yE(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,f){const d=new fE({next:T=>{d.su(),a.enqueueAndForget(()=>W0(i,m)),T.fromCache&&u.source==="server"?f.reject(new X($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(T)},error:T=>f.reject(T)}),m=new X0(l,d,{includeMetadataChanges:!0,Ta:!0});return G0(i,m)}(await pE(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=new Map;function _E(t,e,n,r){if(e===!0&&r===!0)throw new X($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function th(t){if(Z.isDocumentKey(t))throw new X($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vE(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se()}function ka(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vE(t);throw new X($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="firestore.googleapis.com",nh=!0;class rh{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=dg,this.ssl=nh}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:nh;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Qd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<r0)throw new X($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_E("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new X($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new X($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new X($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rh(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new xv;switch(r.type){case"firstParty":return new Nv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=eh.get(n);r&&(q("ComponentProvider","Removing Datastore"),eh.delete(n),r.terminate())}(this),Promise.resolve()}}function TE(t,e,n,r={}){var s;const i=(t=ka(t,Pl))._getSettings(),a=`${e}:${n}`;if(i.host!==dg&&i.host!==a&&Er("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ye.MOCK_USER;else{l=l_(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new X($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ye(f)}t._authCredentials=new Ov(new yd(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lo(this.firestore,e,this._query)}}class xr{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xr(this.firestore,e,this._key)}}class vr extends lo{constructor(e,n,r){super(e,n,Dd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xr(this.firestore,null,new Z(e))}withConverter(e){return new vr(this.firestore,e,this._path)}}function EE(t,e,...n){if(t=ol(t),t instanceof Pl){const r=Ce.fromString(e,...n);return th(r),new vr(t,null,r)}{if(!(t instanceof xr||t instanceof vr))throw new X($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return th(r),new vr(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh="AsyncQueue";class ih{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new eg(this,"async_queue_retry"),this.Su=()=>{const r=Wo();r&&q(sh,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const n=Wo();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Wo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Un;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Dr(e))throw e;q(sh,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Wt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=bl.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&se()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class gg extends Pl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new ih,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ih(e),this._firestoreClient=void 0,await e}}}function wE(t,e){const n=typeof t=="object"?t:ld(),r=typeof t=="string"?t:Ri,s=Ss(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=o_("firestore");i&&TE(s,...i)}return s}function IE(t){if(t._terminated)throw new X($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||AE(t),t._firestoreClient}function AE(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,f,d){return new Jv(l,u,f,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,fg(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new dE(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ki(qe.fromBase64String(e))}catch(n){throw new X($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ki(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}const CE=new RegExp("[~\\*/\\[\\]]");function RE(t,e,n){if(e.search(CE)>=0)throw oh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new mg(...e.split("."))._internalPath}catch{throw oh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function oh(t,e,n,r,s){let i=`Function ${e}() called with invalid data`;i+=". ";let a="";return new X($.INVALID_ARGUMENT,i+t+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xr(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class PE extends pg{data(){return super.data()}}function yg(t,e){return typeof e=="string"?RE(t,e):e instanceof mg?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class VE{convertValue(e,n="none"){switch(yn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(pn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw se()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Cs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Ta].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Re(a.doubleValue));return new SE(i)}convertGeoPoint(e){return new bE(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=eo(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vs(e));default:return null}}convertTimestamp(e){const n=mn(e);return new lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);be(Wd(r));const s=new Ts(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(n)||Wt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xE extends pg{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new mi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(yg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class mi extends xE{data(e={}){return super.data(e)}}class OE{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new si(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new mi(this._firestore,this._userDataWriter,r.key,r,new si(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new mi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new si(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new mi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new si(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,d=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:ME(l.type),doc:u,oldIndex:f,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ME(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se()}}class kE extends VE{constructor(e){super(),this.firestore=e}convertBytes(e){return new ki(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xr(this.firestore,null,n)}}function NE(t){t=ka(t,lo);const e=ka(t.firestore,gg),n=IE(e),r=new kE(e);return DE(t._query),yE(n,t._query).then(s=>new OE(e,r,t,s))}(function(e,n=!0){(function(s){Pr=s})(vv),dn(new Kt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new gg(new Mv(r.getProvider("auth-internal")),new Fv(a,r.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new X($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ts(f.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),xt(fu,du,e),xt(fu,du,"esm2017")})();const _g="@firebase/installations",Dl="0.6.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=1e4,Tg=`w:${Dl}`,Eg="FIS_v2",FE="https://firebaseinstallations.googleapis.com/v1",LE=60*60*1e3,UE="installations",BE="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},zn=new Yi(UE,BE,$E);function wg(t){return t instanceof In&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig({projectId:t}){return`${FE}/projects/${t}/installations`}function Ag(t){return{token:t.token,requestStatus:2,expiresIn:HE(t.expiresIn),creationTime:Date.now()}}async function bg(t,e){const r=(await e.json()).error;return zn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Sg({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function jE(t,{refreshToken:e}){const n=Sg(t);return n.append("Authorization",qE(e)),n}async function Cg(t){const e=await t();return e.status>=500&&e.status<600?t():e}function HE(t){return Number(t.replace("s","000"))}function qE(t){return`${Eg} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zE({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Ig(t),s=Sg(t),i=e.getImmediate({optional:!0});if(i){const f=await i.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={fid:n,authVersion:Eg,appId:t.appId,sdkVersion:Tg},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await Cg(()=>fetch(r,l));if(u.ok){const f=await u.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:Ag(f.authToken)}}else throw await bg("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE=/^[cdef][\w-]{21}$/,Na="";function WE(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=QE(t);return GE.test(n)?n:Na}catch{return Na}}function QE(t){return KE(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=new Map;function Dg(t,e){const n=co(t);Vg(n,e),YE(n,e)}function Vg(t,e){const n=Pg.get(t);if(n)for(const r of n)r(e)}function YE(t,e){const n=XE();n&&n.postMessage({key:t,fid:e}),JE()}let Fn=null;function XE(){return!Fn&&"BroadcastChannel"in self&&(Fn=new BroadcastChannel("[Firebase] FID Change"),Fn.onmessage=t=>{Vg(t.data.key,t.data.fid)}),Fn}function JE(){Pg.size===0&&Fn&&(Fn.close(),Fn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE="firebase-installations-database",ew=1,Kn="firebase-installations-store";let Yo=null;function Vl(){return Yo||(Yo=od(ZE,ew,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Kn)}}})),Yo}async function Ni(t,e){const n=co(t),s=(await Vl()).transaction(Kn,"readwrite"),i=s.objectStore(Kn),a=await i.get(n);return await i.put(e,n),await s.done,(!a||a.fid!==e.fid)&&Dg(t,e.fid),e}async function xg(t){const e=co(t),r=(await Vl()).transaction(Kn,"readwrite");await r.objectStore(Kn).delete(e),await r.done}async function uo(t,e){const n=co(t),s=(await Vl()).transaction(Kn,"readwrite"),i=s.objectStore(Kn),a=await i.get(n),l=e(a);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&Dg(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xl(t){let e;const n=await uo(t.appConfig,r=>{const s=tw(r),i=nw(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Na?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function tw(t){const e=t||{fid:WE(),registrationStatus:0};return Og(e)}function nw(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(zn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=rw(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:sw(t)}:{installationEntry:e}}async function rw(t,e){try{const n=await zE(t,e);return Ni(t.appConfig,n)}catch(n){throw wg(n)&&n.customData.serverCode===409?await xg(t.appConfig):await Ni(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function sw(t){let e=await ah(t.appConfig);for(;e.registrationStatus===1;)await Rg(100),e=await ah(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await xl(t);return r||n}return e}function ah(t){return uo(t,e=>{if(!e)throw zn.create("installation-not-found");return Og(e)})}function Og(t){return iw(t)?{fid:t.fid,registrationStatus:0}:t}function iw(t){return t.registrationStatus===1&&t.registrationTime+vg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ow({appConfig:t,heartbeatServiceProvider:e},n){const r=aw(t,n),s=jE(t,n),i=e.getImmediate({optional:!0});if(i){const f=await i.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={installation:{sdkVersion:Tg,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await Cg(()=>fetch(r,l));if(u.ok){const f=await u.json();return Ag(f)}else throw await bg("Generate Auth Token",u)}function aw(t,{fid:e}){return`${Ig(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ol(t,e=!1){let n;const r=await uo(t.appConfig,i=>{if(!Mg(i))throw zn.create("not-registered");const a=i.authToken;if(!e&&uw(a))return i;if(a.requestStatus===1)return n=lw(t,e),i;{if(!navigator.onLine)throw zn.create("app-offline");const l=fw(i);return n=cw(t,l),l}});return n?await n:r.authToken}async function lw(t,e){let n=await lh(t.appConfig);for(;n.authToken.requestStatus===1;)await Rg(100),n=await lh(t.appConfig);const r=n.authToken;return r.requestStatus===0?Ol(t,e):r}function lh(t){return uo(t,e=>{if(!Mg(e))throw zn.create("not-registered");const n=e.authToken;return dw(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function cw(t,e){try{const n=await ow(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ni(t.appConfig,r),n}catch(n){if(wg(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await xg(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ni(t.appConfig,r)}throw n}}function Mg(t){return t!==void 0&&t.registrationStatus===2}function uw(t){return t.requestStatus===2&&!hw(t)}function hw(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+LE}function fw(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function dw(t){return t.requestStatus===1&&t.requestTime+vg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gw(t){const e=t,{installationEntry:n,registrationPromise:r}=await xl(e);return r?r.catch(console.error):Ol(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mw(t,e=!1){const n=t;return await pw(n),(await Ol(n,e)).token}async function pw(t){const{registrationPromise:e}=await xl(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(t){if(!t||!t.options)throw Xo("App Configuration");if(!t.name)throw Xo("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Xo(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Xo(t){return zn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg="installations",_w="installations-internal",vw=t=>{const e=t.getProvider("app").getImmediate(),n=yw(e),r=Ss(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Tw=t=>{const e=t.getProvider("app").getImmediate(),n=Ss(e,kg).getImmediate();return{getId:()=>gw(n),getToken:s=>mw(n,s)}};function Ew(){dn(new Kt(kg,vw,"PUBLIC")),dn(new Kt(_w,Tw,"PRIVATE"))}Ew();xt(_g,Dl);xt(_g,Dl,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi="analytics",ww="firebase_id",Iw="origin",Aw=60*1e3,bw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ml="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new al("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},gt=new Yi("analytics","Analytics",Sw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(t){if(!t.startsWith(Ml)){const e=gt.create("invalid-gtag-resource",{gtagURL:t});return ct.warn(e.message),""}return t}function Ng(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Rw(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Pw(t,e){const n=Rw("firebase-js-sdk-policy",{createScriptURL:Cw}),r=document.createElement("script"),s=`${Ml}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Dw(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Vw(t,e,n,r,s,i){const a=r[s];try{if(a)await e[a];else{const u=(await Ng(n)).find(f=>f.measurementId===s);u&&await e[u.appId]}}catch(l){ct.error(l)}t("config",s,i)}async function xw(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await Ng(n);for(const u of a){const f=l.find(m=>m.measurementId===u),d=f&&e[f.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){ct.error(i)}}function Ow(t,e,n,r){async function s(i,...a){try{if(i==="event"){const[l,u]=a;await xw(t,e,n,l,u)}else if(i==="config"){const[l,u]=a;await Vw(t,e,n,r,l,u)}else if(i==="consent"){const[l,u]=a;t("consent",l,u)}else if(i==="get"){const[l,u,f]=a;t("get",l,u,f)}else if(i==="set"){const[l]=a;t("set",l)}else t(i,...a)}catch(l){ct.error(l)}}return s}function Mw(t,e,n,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Ow(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function kw(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ml)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=30,Fw=1e3;class Lw{constructor(e={},n=Fw){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Fg=new Lw;function Uw(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Bw(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:Uw(r)},i=bw.replace("{app-id}",n),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let l="";try{const u=await a.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw gt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function $w(t,e=Fg,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw gt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw gt.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new qw;return setTimeout(async()=>{l.abort()},Aw),Lg({appId:r,apiKey:s,measurementId:i},a,l,e)}async function Lg(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Fg){var i;const{appId:a,measurementId:l}=t;try{await jw(r,e)}catch(u){if(l)return ct.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw u}try{const u=await Bw(t);return s.deleteThrottleMetadata(a),u}catch(u){const f=u;if(!Hw(f)){if(s.deleteThrottleMetadata(a),l)return ct.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:a,measurementId:l};throw u}const d=Number((i=f==null?void 0:f.customData)===null||i===void 0?void 0:i.httpStatus)===503?nu(n,s.intervalMillis,Nw):nu(n,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(a,m),ct.debug(`Calling attemptFetch again in ${d} millis`),Lg(t,m,r,s)}}function jw(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(gt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Hw(t){if(!(t instanceof In)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class qw{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function zw(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,a=Object.assign(Object.assign({},r),{send_to:i});t("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kw(){if(nd())try{await rd()}catch(t){return ct.warn(gt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ct.warn(gt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Gw(t,e,n,r,s,i,a){var l;const u=$w(t);u.then(I=>{n[I.measurementId]=I.appId,t.options.measurementId&&I.measurementId!==t.options.measurementId&&ct.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>ct.error(I)),e.push(u);const f=Kw().then(I=>{if(I)return r.getId()}),[d,m]=await Promise.all([u,f]);kw(i)||Pw(i,d.measurementId),s("js",new Date);const T=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return T[Iw]="firebase",T.update=!0,m!=null&&(T[ww]=m),s("config",d.measurementId,T),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e){this.app=e}_delete(){return delete us[this.app.options.appId],Promise.resolve()}}let us={},ch=[];const uh={};let Jo="dataLayer",Qw="gtag",hh,Ug,fh=!1;function Yw(){const t=[];if(h_()&&t.push("This is a browser extension environment."),d_()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=gt.create("invalid-analytics-context",{errorInfo:e});ct.warn(n.message)}}function Xw(t,e,n){Yw();const r=t.options.appId;if(!r)throw gt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ct.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw gt.create("no-api-key");if(us[r]!=null)throw gt.create("already-exists",{id:r});if(!fh){Dw(Jo);const{wrappedGtag:i,gtagCore:a}=Mw(us,ch,uh,Jo,Qw);Ug=i,hh=a,fh=!0}return us[r]=Gw(t,ch,uh,e,hh,Jo,n),new Ww(t)}function Jw(t=ld()){t=ol(t);const e=Ss(t,Fi);return e.isInitialized()?e.getImmediate():Zw(t)}function Zw(t,e={}){const n=Ss(t,Fi);if(n.isInitialized()){const s=n.getImmediate();if(Si(e,n.getOptions()))return s;throw gt.create("already-initialized")}return n.initialize({options:e})}function eI(t,e,n,r){t=ol(t),zw(Ug,us[t.app.options.appId],e,n,r).catch(s=>ct.error(s))}const dh="@firebase/analytics",gh="0.10.11";function tI(){dn(new Kt(Fi,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Xw(r,s,n)},"PUBLIC")),dn(new Kt("analytics-internal",t,"PRIVATE")),xt(dh,gh),xt(dh,gh,"esm2017");function t(e){try{const n=e.getProvider(Fi).getImmediate();return{logEvent:(r,s,i)=>eI(n,r,s,i)}}catch(n){throw gt.create("interop-component-reg-failed",{reason:n})}}}tI();const nI={apiKey:"AIzaSyCtaAYQHP6QHpm48cnHH2WgUAjxvMQ7ZdY",authDomain:"methamaint.firebaseapp.com",projectId:"methamaint",storageBucket:"methamaint.firebasestorage.app",messagingSenderId:"933028671775",appId:"1:933028671775:web:c58b85ee5323aa3c92402a",measurementId:"G-LZ4P4S1ZNZ"},Bg=ad(nI),rI=wE(Bg);Jw(Bg);function Qn(t,e){return n=>Object.keys(t).reduce((r,s)=>{const a=typeof t[s]=="object"&&t[s]!=null&&!Array.isArray(t[s])?t[s]:{type:t[s]};return n&&s in n?r[s]={...a,default:n[s]}:r[s]=a,e&&!r[s].source&&(r[s].source=e),r},{})}const sI=Qn({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component"),Dt=typeof window<"u",iI=Dt&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function oI(t,e,n){const r=e.length-1;if(r<0)return t===void 0?n:t;for(let s=0;s<r;s++){if(t==null)return n;t=t[e[s]]}return t==null||t[e[r]]===void 0?n:t[e[r]]}function mh(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),oI(t,e.split("."),n))}function $g(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,r)=>e+r)}function aI(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function ph(t){let e;return t!==null&&typeof t=="object"&&((e=Object.getPrototypeOf(t))===Object.prototype||e===null)}function Zo(t,e){return e.every(n=>t.hasOwnProperty(n))}function lI(t,e){const n={},r=new Set(Object.keys(t));for(const s of e)r.has(s)&&(n[s]=t[s]);return n}function cI(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function yh(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function _h(t,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-t.length))+t}function uI(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let r=0;for(;r<t.length;)n.push(t.substr(r,e)),r+=e;return n}function Qt(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const s in t)r[s]=t[s];for(const s in e){const i=t[s],a=e[s];if(ph(i)&&ph(a)){r[s]=Qt(i,a,n);continue}if(n&&Array.isArray(i)&&Array.isArray(a)){r[s]=n(i,a);continue}r[s]=a}return r}function $n(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if($n.cache.has(t))return $n.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return $n.cache.set(t,e),e}$n.cache=new Map;const nr=2.4,vh=.2126729,Th=.7151522,Eh=.072175,hI=.55,fI=.58,dI=.57,gI=.62,ii=.03,wh=1.45,mI=5e-4,pI=1.25,yI=1.25,_I=.078,Ih=12.82051282051282,oi=.06,vI=.001;function Ah(t,e){const n=(t.r/255)**nr,r=(t.g/255)**nr,s=(t.b/255)**nr,i=(e.r/255)**nr,a=(e.g/255)**nr,l=(e.b/255)**nr;let u=n*vh+r*Th+s*Eh,f=i*vh+a*Th+l*Eh;if(u<=ii&&(u+=(ii-u)**wh),f<=ii&&(f+=(ii-f)**wh),Math.abs(f-u)<mI)return 0;let d;if(f>u){const m=(f**hI-u**fI)*pI;d=m<vI?0:m<_I?m-m*Ih*oi:m-oi}else{const m=(f**gI-u**dI)*yI;d=m>-.001?0:m>-.078?m-m*Ih*oi:m+oi}return d*100}const Li=.20689655172413793,TI=t=>t>Li**3?Math.cbrt(t):t/(3*Li**2)+4/29,EI=t=>t>Li?t**3:3*Li**2*(t-4/29);function jg(t){const e=TI,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function Hg(t){const e=EI,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const wI=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],II=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,AI=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],bI=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function qg(t){const e=Array(3),n=II,r=wI;for(let s=0;s<3;++s)e[s]=Math.round(cI(n(r[s][0]*t[0]+r[s][1]*t[1]+r[s][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function kl(t){let{r:e,g:n,b:r}=t;const s=[0,0,0],i=bI,a=AI;e=i(e/255),n=i(n/255),r=i(r/255);for(let l=0;l<3;++l)s[l]=a[l][0]*e+a[l][1]*n+a[l][2]*r;return s}const bh=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,SI={rgb:(t,e,n,r)=>({r:t,g:e,b:n,a:r}),rgba:(t,e,n,r)=>({r:t,g:e,b:n,a:r}),hsl:(t,e,n,r)=>Sh({h:t,s:e,l:n,a:r}),hsla:(t,e,n,r)=>Sh({h:t,s:e,l:n,a:r}),hsv:(t,e,n,r)=>ws({h:t,s:e,v:n,a:r}),hsva:(t,e,n,r)=>ws({h:t,s:e,v:n,a:r})};function qt(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&bh.test(t)){const{groups:e}=t.match(bh),{fn:n,values:r}=e,s=r.split(/,\s*/).map(i=>i.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(i)/100:parseFloat(i));return SI[n](...s)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),RI(e)}else if(typeof t=="object"){if(Zo(t,["r","g","b"]))return t;if(Zo(t,["h","s","l"]))return ws(zg(t));if(Zo(t,["h","s","v"]))return ws(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function ws(t){const{h:e,s:n,v:r,a:s}=t,i=l=>{const u=(l+e/60)%6;return r-r*n*Math.max(Math.min(u,4-u,1),0)},a=[i(5),i(3),i(1)].map(l=>Math.round(l*255));return{r:a[0],g:a[1],b:a[2],a:s}}function Sh(t){return ws(zg(t))}function zg(t){const{h:e,s:n,l:r,a:s}=t,i=r+n*Math.min(r,1-r),a=i===0?0:2-2*r/i;return{h:e,s:a,v:i,a:s}}function ai(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function CI(t){let{r:e,g:n,b:r,a:s}=t;return`#${[ai(e),ai(n),ai(r),s!==void 0?ai(Math.round(s*255)):""].join("")}`}function RI(t){t=PI(t);let[e,n,r,s]=uI(t,2).map(i=>parseInt(i,16));return s=s===void 0?s:s/255,{r:e,g:n,b:r,a:s}}function PI(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=yh(yh(t,6),8,"F")),t}function DI(t,e){const n=jg(kl(t));return n[0]=n[0]+e*10,qg(Hg(n))}function VI(t,e){const n=jg(kl(t));return n[0]=n[0]-e*10,qg(Hg(n))}function xI(t){const e=qt(t);return kl(e)[1]}function OI(t){const e=Math.abs(Ah(qt(0),qt(t)));return Math.abs(Ah(qt(16777215),qt(t)))>Math.min(e,50)?"#fff":"#000"}function Yn(t,e){const n=vy();if(!n)throw new Error(`[Vuetify] ${t} must be called from inside a setup function`);return n}function MI(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=Yn(t).type;return $n((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let Kg=0,pi=new WeakMap;function Gg(){const t=Yn("getUid");if(pi.has(t))return pi.get(t);{const e=Kg++;return pi.set(t,e),e}}Gg.reset=()=>{Kg=0,pi=new WeakMap};function kI(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yn("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}const Is=Symbol.for("vuetify:defaults");function NI(t){return Hn(t)}function Wg(){const t=pr(Is);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function FI(t,e){var n,r;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((r=t.props)==null?void 0:r[$n(e)])<"u"}function LI(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Wg();const r=Yn("useDefaults");if(e=e??r.type.name??r.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const s=je(()=>{var u;return(u=n.value)==null?void 0:u[t._as??e]}),i=new Proxy(t,{get(u,f){var m,T,I,V,P,O,K;const d=Reflect.get(u,f);return f==="class"||f==="style"?[(m=s.value)==null?void 0:m[f],d].filter(W=>W!=null):typeof f=="string"&&!FI(r.vnode,f)?((T=s.value)==null?void 0:T[f])!==void 0?(I=s.value)==null?void 0:I[f]:((P=(V=n.value)==null?void 0:V.global)==null?void 0:P[f])!==void 0?(K=(O=n.value)==null?void 0:O.global)==null?void 0:K[f]:d:d}}),a=dr();tl(()=>{if(s.value){const u=Object.entries(s.value).filter(f=>{let[d]=f;return d.startsWith(d[0].toUpperCase())});a.value=u.length?Object.fromEntries(u):void 0}else a.value=void 0});function l(){const u=kI(Is,r);Za(Is,je(()=>a.value?Qt((u==null?void 0:u.value)??{},a.value):u==null?void 0:u.value))}return{props:i,provideSubDefaults:l}}function Vs(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=Qn(t.props??{},t.name)();const e=Object.keys(t.props).filter(n=>n!=="class"&&n!=="style");t.filterProps=function(r){return lI(r,e)},t.props._as=String,t.setup=function(r,s){const i=Wg();if(!i.value)return t._setup(r,s);const{props:a,provideSubDefaults:l}=LI(r,r._as??t.name,i),u=t._setup(a,s);return l(),u}}return t}function Qg(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?Vs:wf)(e)}function UI(t){const e=Yn("useRender");e.render=t}const BI=[null,"default","comfortable","compact"],$I=Qn({density:{type:String,default:"default",validator:t=>BI.includes(t)}},"density");function jI(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:MI();return{densityClasses:je(()=>`${e}--density-${t.density}`)}}const HI=Qn({tag:{type:String,default:"div"}},"tag"),Ui=Symbol.for("vuetify:theme"),qI=Qn({theme:String},"theme");function Ch(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function zI(){var r,s;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ch();const e=Ch();if(!t)return{...e,isDisabled:!0};const n={};for(const[i,a]of Object.entries(t.themes??{})){const l=a.dark||i==="dark"?(r=e.themes)==null?void 0:r.dark:(s=e.themes)==null?void 0:s.light;n[i]=Qt(l,a)}return Qt(e,{...t,themes:n})}function KI(t){const e=zI(t),n=Hn(e.defaultTheme),r=Hn(e.themes),s=je(()=>{const d={};for(const[m,T]of Object.entries(r.value)){const I=d[m]={...T,colors:{...T.colors}};if(e.variations)for(const V of e.variations.colors){const P=I.colors[V];if(P)for(const O of["lighten","darken"]){const K=O==="lighten"?DI:VI;for(const W of $g(e.variations[O],1))I.colors[`${V}-${O}-${W}`]=CI(K(qt(P),W))}}for(const V of Object.keys(I.colors)){if(/^on-[a-z]/.test(V)||I.colors[`on-${V}`])continue;const P=`on-${V}`,O=qt(I.colors[V]);I.colors[P]=OI(O)}}return d}),i=je(()=>s.value[n.value]),a=je(()=>{var V;const d=[];(V=i.value)!=null&&V.dark&&On(d,":root",["color-scheme: dark"]),On(d,":root",Rh(i.value));for(const[P,O]of Object.entries(s.value))On(d,`.v-theme--${P}`,[`color-scheme: ${O.dark?"dark":"normal"}`,...Rh(O)]);const m=[],T=[],I=new Set(Object.values(s.value).flatMap(P=>Object.keys(P.colors)));for(const P of I)/^on-[a-z]/.test(P)?On(T,`.${P}`,[`color: rgb(var(--v-theme-${P})) !important`]):(On(m,`.bg-${P}`,[`--v-theme-overlay-multiplier: var(--v-theme-${P}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${P})) !important`,`color: rgb(var(--v-theme-on-${P})) !important`]),On(T,`.text-${P}`,[`color: rgb(var(--v-theme-${P})) !important`]),On(T,`.border-${P}`,[`--v-border-color: var(--v-theme-${P})`]));return d.push(...m,...T),d.map((P,O)=>O===0?P:`    ${P}`).join("")});function l(){return{style:[{children:a.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function u(d){if(e.isDisabled)return;const m=d._context.provides.usehead;if(m)if(m.push){const I=m.push(l);Dt&&zt(a,()=>{I.patch(l)})}else Dt?(m.addHeadObjs(je(l)),tl(()=>m.updateDOM())):m.addHeadObjs(l());else{let V=function(){if(typeof document<"u"&&!I){const P=document.createElement("style");P.type="text/css",P.id="vuetify-theme-stylesheet",e.cspNonce&&P.setAttribute("nonce",e.cspNonce),I=P,document.head.appendChild(I)}I&&(I.innerHTML=a.value)};var T=V;let I=Dt?document.getElementById("vuetify-theme-stylesheet"):null;Dt?zt(a,V,{immediate:!0}):V()}}const f=je(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:u,isDisabled:e.isDisabled,name:n,themes:r,current:i,computedThemes:s,themeClasses:f,styles:a,global:{name:n,current:i}}}function GI(t){Yn("provideTheme");const e=pr(Ui,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=je(()=>t.theme??e.name.value),r=je(()=>e.themes.value[n.value]),s=je(()=>e.isDisabled?void 0:`v-theme--${n.value}`),i={...e,name:n,current:r,themeClasses:s};return Za(Ui,i),i}function On(t,e,n){t.push(`${e} {
`,...n.map(r=>`  ${r};
`),`}
`)}function Rh(t){const e=t.dark?2:1,n=t.dark?1:2,r=[];for(const[s,i]of Object.entries(t.colors)){const a=qt(i);r.push(`--v-theme-${s}: ${a.r},${a.g},${a.b}`),s.startsWith("on-")||r.push(`--v-theme-${s}-overlay-multiplier: ${xI(i)>.18?e:n}`)}for(const[s,i]of Object.entries(t.variables)){const a=typeof i=="string"&&i.startsWith("#")?qt(i):void 0,l=a?`${a.r}, ${a.g}, ${a.b}`:void 0;r.push(`--v-${s}: ${l??i}`)}return r}const WI=Qn({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...sI(),...$I(),...HI(),...qI()},"VTable"),QI=Qg()({name:"VTable",props:WI(),setup(t,e){let{slots:n,emit:r}=e;const{themeClasses:s}=GI(t),{densityClasses:i}=jI(t);return UI(()=>Ie(t.tag,{class:["v-table",{"v-table--fixed-height":!!t.height,"v-table--fixed-header":t.fixedHeader,"v-table--fixed-footer":t.fixedFooter,"v-table--has-top":!!n.top,"v-table--has-bottom":!!n.bottom,"v-table--hover":t.hover},s.value,i.value,t.class],style:t.style},{default:()=>{var a,l,u;return[(a=n.top)==null?void 0:a.call(n),n.default?Ie("div",{class:"v-table__wrapper",style:{height:aI(t.height)}},[Ie("table",null,[n.default()])]):(l=n.wrapper)==null?void 0:l.call(n),(u=n.bottom)==null?void 0:u.call(n)]}})),{}}}),YI={key:0},XI={key:1},JI={__name:"HelloWorld",setup(t){const e=Hn([]);return Sf(async()=>{try{const r=await NE(EE(rI,"arborescence"));e.value=r.docs.map(s=>({id:s.id,...s.data()}))}catch(r){console.error("Erreur lors de la récupération des données :",r)}}),(r,s)=>(ir(),Kf(QI,null,{default:Ef(()=>[s[0]||(s[0]=bt("thead",null,[bt("tr",null,[bt("th",{class:"text-left"},"Nom"),bt("th",{class:"text-left"},"Description"),bt("th",{class:"text-left"},"Code")])],-1)),e.value.length?(ir(),Js("tbody",YI,[(ir(!0),Js(Ct,null,Fp(e.value,i=>(ir(),Js("tr",{key:i.id},[bt("td",null,li(i.nom),1),bt("td",null,li(i.description),1),bt("td",null,li(i.code),1)]))),128))])):(ir(),Js("p",XI,"Chargement des données..."))]),_:1}))}},ZI=wf({__name:"App",setup(t){return(e,n)=>(ir(),Kf(JI))}}),eA=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Yg=eA(ZI,[["__scopeId","data-v-d702ae53"]]);function tA(t,e){let n;function r(){n=Bm(),n.run(()=>e.length?e(()=>{n==null||n.stop(),r()}):e())}zt(t,s=>{s&&!n?r():s||(n==null||n.stop(),n=void 0)},{immediate:!0}),jm(()=>{n==null||n.stop()})}function nA(t,e,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:m=>m,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:m=>m;const i=Yn("useProxiedModel"),a=Hn(t[e]!==void 0?t[e]:n),l=$n(e),f=je(l!==e?()=>{var m,T,I,V;return t[e],!!(((m=i.vnode.props)!=null&&m.hasOwnProperty(e)||(T=i.vnode.props)!=null&&T.hasOwnProperty(l))&&((I=i.vnode.props)!=null&&I.hasOwnProperty(`onUpdate:${e}`)||(V=i.vnode.props)!=null&&V.hasOwnProperty(`onUpdate:${l}`)))}:()=>{var m,T;return t[e],!!((m=i.vnode.props)!=null&&m.hasOwnProperty(e)&&((T=i.vnode.props)!=null&&T.hasOwnProperty(`onUpdate:${e}`)))});tA(()=>!f.value,()=>{zt(()=>t[e],m=>{a.value=m})});const d=je({get(){const m=t[e];return r(f.value?m:a.value)},set(m){const T=s(m),I=ge(f.value?t[e]:a.value);I===T||r(I)===m||(a.value=T,i==null||i.emit(`update:${e}`,T))}});return Object.defineProperty(d,"externalValue",{get:()=>f.value?t[e]:a.value}),d}const rA={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},fileUpload:{title:"Drag and drop files here",divider:"or",browse:"Browse Files"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},Ph="$vuetify.",Dh=(t,e)=>t.replace(/\{(\d+)\}/g,(n,r)=>String(e[+r])),Xg=(t,e,n)=>function(r){for(var s=arguments.length,i=new Array(s>1?s-1:0),a=1;a<s;a++)i[a-1]=arguments[a];if(!r.startsWith(Ph))return Dh(r,i);const l=r.replace(Ph,""),u=t.value&&n.value[t.value],f=e.value&&n.value[e.value];let d=mh(u,l,null);return d||(`${r}${t.value}`,d=mh(f,l,null)),d||(d=r),typeof d!="string"&&(d=r),Dh(d,i)};function Jg(t,e){return(n,r)=>new Intl.NumberFormat([t.value,e.value],r).format(n)}function ea(t,e,n){const r=nA(t,e,t[e]??n.value);return r.value=t[e]??n.value,zt(n,s=>{t[e]==null&&(r.value=n.value)}),r}function Zg(t){return e=>{const n=ea(e,"locale",t.current),r=ea(e,"fallback",t.fallback),s=ea(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:r,messages:s,t:Xg(n,r,s),n:Jg(n,r),provide:Zg({current:n,fallback:r,messages:s})}}}function sA(t){const e=dr((t==null?void 0:t.locale)??"en"),n=dr((t==null?void 0:t.fallback)??"en"),r=Hn({en:rA,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:r,t:Xg(e,n,r),n:Jg(e,n),provide:Zg({current:e,fallback:n,messages:r})}}const Vh=Symbol.for("vuetify:locale");function iA(t){return t.name!=null}function oA(t){const e=t!=null&&t.adapter&&iA(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:sA(t),n=lA(e,t);return{...e,...n}}function aA(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function lA(t,e){const n=Hn((e==null?void 0:e.rtl)??aA()),r=je(()=>n.value[t.current.value]??!1);return{isRtl:r,rtl:n,rtlClasses:je(()=>`v-locale--is-${r.value?"rtl":"ltr"}`)}}const ho={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function cA(t,e,n){const r=[];let s=[];const i=em(t),a=tm(t),l=n??ho[e.slice(-2).toUpperCase()]??0,u=(i.getDay()-l+7)%7,f=(a.getDay()-l+7)%7;for(let d=0;d<u;d++){const m=new Date(i);m.setDate(m.getDate()-(u-d)),s.push(m)}for(let d=1;d<=a.getDate();d++){const m=new Date(t.getFullYear(),t.getMonth(),d);s.push(m),s.length===7&&(r.push(s),s=[])}for(let d=1;d<7-f;d++){const m=new Date(a);m.setDate(m.getDate()+d),s.push(m)}return s.length>0&&r.push(s),r}function uA(t,e,n){const r=n??ho[e.slice(-2).toUpperCase()]??0,s=new Date(t);for(;s.getDay()!==r;)s.setDate(s.getDate()-1);return s}function hA(t,e){const n=new Date(t),r=((ho[e.slice(-2).toUpperCase()]??0)+6)%7;for(;n.getDay()!==r;)n.setDate(n.getDate()+1);return n}function em(t){return new Date(t.getFullYear(),t.getMonth(),1)}function tm(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function fA(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const dA=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function nm(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(dA.test(t))return fA(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const xh=new Date(2e3,0,2);function gA(t,e){const n=e??ho[t.slice(-2).toUpperCase()]??0;return $g(7).map(r=>{const s=new Date(xh);return s.setDate(xh.getDate()+n+r),new Intl.DateTimeFormat(t,{weekday:"narrow"}).format(s)})}function mA(t,e,n,r){const s=nm(t)??new Date,i=r==null?void 0:r[e];if(typeof i=="function")return i(s,e,n);let a={};switch(e){case"fullDate":a={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":a={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const l=s.getDate(),u=new Intl.DateTimeFormat(n,{month:"long"}).format(s);return`${l} ${u}`;case"normalDateWithWeekday":a={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":a={month:"short",day:"numeric"};break;case"year":a={year:"numeric"};break;case"month":a={month:"long"};break;case"monthShort":a={month:"short"};break;case"monthAndYear":a={month:"long",year:"numeric"};break;case"monthAndDate":a={month:"long",day:"numeric"};break;case"weekday":a={weekday:"long"};break;case"weekdayShort":a={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(s.getDate());case"hours12h":a={hour:"numeric",hour12:!0};break;case"hours24h":a={hour:"numeric",hour12:!1};break;case"minutes":a={minute:"numeric"};break;case"seconds":a={second:"numeric"};break;case"fullTime":a={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":a={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":a={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":a={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":a={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":a={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":a={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":a={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":a={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":a={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:a=i??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,a).format(s)}function pA(t,e){const n=t.toJsDate(e),r=n.getFullYear(),s=_h(String(n.getMonth()+1),2,"0"),i=_h(String(n.getDate()),2,"0");return`${r}-${s}-${i}`}function yA(t){const[e,n,r]=t.split("-").map(Number);return new Date(e,n-1,r)}function _A(t,e){const n=new Date(t);return n.setMinutes(n.getMinutes()+e),n}function vA(t,e){const n=new Date(t);return n.setHours(n.getHours()+e),n}function TA(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function EA(t,e){const n=new Date(t);return n.setDate(n.getDate()+e*7),n}function wA(t,e){const n=new Date(t);return n.setDate(1),n.setMonth(n.getMonth()+e),n}function IA(t){return t.getFullYear()}function AA(t){return t.getMonth()}function bA(t){return t.getDate()}function SA(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function CA(t){return new Date(t.getFullYear(),t.getMonth()-1,1)}function RA(t){return t.getHours()}function PA(t){return t.getMinutes()}function DA(t){return new Date(t.getFullYear(),0,1)}function VA(t){return new Date(t.getFullYear(),11,31)}function xA(t,e){return Bi(t,e[0])&&kA(t,e[1])}function OA(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function Bi(t,e){return t.getTime()>e.getTime()}function MA(t,e){return Bi(Fa(t),Fa(e))}function kA(t,e){return t.getTime()<e.getTime()}function Oh(t,e){return t.getTime()===e.getTime()}function NA(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function FA(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function LA(t,e){return t.getFullYear()===e.getFullYear()}function UA(t,e,n){const r=new Date(t),s=new Date(e);switch(n){case"years":return r.getFullYear()-s.getFullYear();case"quarters":return Math.floor((r.getMonth()-s.getMonth()+(r.getFullYear()-s.getFullYear())*12)/4);case"months":return r.getMonth()-s.getMonth()+(r.getFullYear()-s.getFullYear())*12;case"weeks":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24));case"hours":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60));case"minutes":return Math.floor((r.getTime()-s.getTime())/(1e3*60));case"seconds":return Math.floor((r.getTime()-s.getTime())/1e3);default:return r.getTime()-s.getTime()}}function BA(t,e){const n=new Date(t);return n.setHours(e),n}function $A(t,e){const n=new Date(t);return n.setMinutes(e),n}function jA(t,e){const n=new Date(t);return n.setMonth(e),n}function HA(t,e){const n=new Date(t);return n.setDate(e),n}function qA(t,e){const n=new Date(t);return n.setFullYear(e),n}function Fa(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0)}function zA(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class KA{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return nm(e)}toJsDate(e){return e}toISO(e){return pA(this,e)}parseISO(e){return yA(e)}addMinutes(e,n){return _A(e,n)}addHours(e,n){return vA(e,n)}addDays(e,n){return TA(e,n)}addWeeks(e,n){return EA(e,n)}addMonths(e,n){return wA(e,n)}getWeekArray(e,n){return cA(e,this.locale,n?Number(n):void 0)}startOfWeek(e,n){return uA(e,this.locale,n?Number(n):void 0)}endOfWeek(e){return hA(e,this.locale)}startOfMonth(e){return em(e)}endOfMonth(e){return tm(e)}format(e,n){return mA(e,n,this.locale,this.formats)}isEqual(e,n){return Oh(e,n)}isValid(e){return OA(e)}isWithinRange(e,n){return xA(e,n)}isAfter(e,n){return Bi(e,n)}isAfterDay(e,n){return MA(e,n)}isBefore(e,n){return!Bi(e,n)&&!Oh(e,n)}isSameDay(e,n){return NA(e,n)}isSameMonth(e,n){return FA(e,n)}isSameYear(e,n){return LA(e,n)}setMinutes(e,n){return $A(e,n)}setHours(e,n){return BA(e,n)}setMonth(e,n){return jA(e,n)}setDate(e,n){return HA(e,n)}setYear(e,n){return qA(e,n)}getDiff(e,n,r){return UA(e,n,r)}getWeekdays(e){return gA(this.locale,e?Number(e):void 0)}getYear(e){return IA(e)}getMonth(e){return AA(e)}getDate(e){return bA(e)}getNextMonth(e){return SA(e)}getPreviousMonth(e){return CA(e)}getHours(e){return RA(e)}getMinutes(e){return PA(e)}startOfDay(e){return Fa(e)}endOfDay(e){return zA(e)}startOfYear(e){return DA(e)}endOfYear(e){return VA(e)}}const GA=Symbol.for("vuetify:date-options"),Mh=Symbol.for("vuetify:date-adapter");function WA(t,e){const n=Qt({adapter:KA,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t);return{options:n,instance:QA(n,e)}}function QA(t,e){const n=Rr(typeof t.adapter=="function"?new t.adapter({locale:t.locale[e.current.value]??e.current.value,formats:t.formats}):t.adapter);return zt(e.current,r=>{n.locale=t.locale[r]??r??n.locale}),n}const kh=Symbol.for("vuetify:display"),Nh={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},YA=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Nh;return Qt(Nh,t)};function Fh(t){return Dt&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function Lh(t){return Dt&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function Uh(t){const e=Dt&&!t?window.navigator.userAgent:"ssr";function n(V){return!!e.match(V)}const r=n(/android/i),s=n(/iphone|ipad|ipod/i),i=n(/cordova/i),a=n(/electron/i),l=n(/chrome/i),u=n(/edge/i),f=n(/firefox/i),d=n(/opera/i),m=n(/win/i),T=n(/mac/i),I=n(/linux/i);return{android:r,ios:s,cordova:i,electron:a,chrome:l,edge:u,firefox:f,opera:d,win:m,mac:T,linux:I,touch:iI,ssr:e==="ssr"}}function XA(t,e){const{thresholds:n,mobileBreakpoint:r}=YA(t),s=dr(Lh(e)),i=dr(Uh(e)),a=Rr({}),l=dr(Fh(e));function u(){s.value=Lh(),l.value=Fh()}function f(){u(),i.value=Uh()}return tl(()=>{const d=l.value<n.sm,m=l.value<n.md&&!d,T=l.value<n.lg&&!(m||d),I=l.value<n.xl&&!(T||m||d),V=l.value<n.xxl&&!(I||T||m||d),P=l.value>=n.xxl,O=d?"xs":m?"sm":T?"md":I?"lg":V?"xl":"xxl",K=typeof r=="number"?r:n[r],W=l.value<K;a.xs=d,a.sm=m,a.md=T,a.lg=I,a.xl=V,a.xxl=P,a.smAndUp=!d,a.mdAndUp=!(d||m),a.lgAndUp=!(d||m||T),a.xlAndUp=!(d||m||T||I),a.smAndDown=!(T||I||V||P),a.mdAndDown=!(I||V||P),a.lgAndDown=!(V||P),a.xlAndDown=!P,a.name=O,a.height=s.value,a.width=l.value,a.mobile=W,a.mobileBreakpoint=r,a.platform=i.value,a.thresholds=n}),Dt&&window.addEventListener("resize",u,{passive:!0}),{...dp(a),update:f,ssr:!!e}}const JA=Symbol.for("vuetify:goto");function ZA(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:t=>t,easeInQuad:t=>t**2,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t**2:-1+(4-2*t)*t,easeInCubic:t=>t**3,easeOutCubic:t=>--t**3+1,easeInOutCubic:t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t**4,easeOutQuart:t=>1- --t**4,easeInOutQuart:t=>t<.5?8*t**4:1-8*--t**4,easeInQuint:t=>t**5,easeOutQuint:t=>1+--t**5,easeInOutQuint:t=>t<.5?16*t**5:1+16*--t**5}}}function eb(t,e){return{rtl:e.isRtl,options:Qt(ZA(),t)}}const tb={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper",upload:"mdi-cloud-upload"},nb={component:t=>by(rm,{...t,class:"mdi"})},rb=[String,Function,Object,Array],Bh=Symbol.for("vuetify:icons"),fo=Qn({icon:{type:rb},tag:{type:String,required:!0}},"icon");Qg()({name:"VComponentIcon",props:fo(),setup(t,e){let{slots:n}=e;return()=>{const r=t.icon;return Ie(t.tag,null,{default:()=>{var s;return[t.icon?Ie(r,null,null):(s=n.default)==null?void 0:s.call(n)]}})}}});const sb=Vs({name:"VSvgIcon",inheritAttrs:!1,props:fo(),setup(t,e){let{attrs:n}=e;return()=>Ie(t.tag,Wf(n,{style:null}),{default:()=>[Ie("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(r=>Array.isArray(r)?Ie("path",{d:r[0],"fill-opacity":r[1]},null):Ie("path",{d:r},null)):Ie("path",{d:t.icon},null)])]})}});Vs({name:"VLigatureIcon",props:fo(),setup(t){return()=>Ie(t.tag,null,{default:()=>[t.icon]})}});const rm=Vs({name:"VClassIcon",props:fo(),setup(t){return()=>Ie(t.tag,{class:t.icon},null)}});function ib(){return{svg:{component:sb},class:{component:rm}}}function ob(t){const e=ib(),n=(t==null?void 0:t.defaultSet)??"mdi";return n==="mdi"&&!e.mdi&&(e.mdi=nb),Qt({defaultSet:n,sets:e,aliases:{...tb,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},t)}function sm(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,r=Qt(e,n),{aliases:s={},components:i={},directives:a={}}=r,l=NI(r.defaults),u=XA(r.display,r.ssr),f=KI(r.theme),d=ob(r.icons),m=oA(r.locale),T=WA(r.date,m),I=eb(r.goTo,m);return{install:P=>{for(const O in a)P.directive(O,a[O]);for(const O in i)P.component(O,i[O]);for(const O in s)P.component(O,Vs({...s[O],name:O,aliasName:s[O].name}));if(f.install(P),P.provide(Is,l),P.provide(kh,u),P.provide(Ui,f),P.provide(Bh,d),P.provide(Vh,m),P.provide(GA,T.options),P.provide(Mh,T.instance),P.provide(JA,I),Dt&&r.ssr)if(P.$nuxt)P.$nuxt.hook("app:suspense:resolve",()=>{u.update()});else{const{mount:O}=P;P.mount=function(){const K=O(...arguments);return pf(()=>u.update()),P.mount=O,K}}Gg.reset(),P.mixin({computed:{$vuetify(){return Rr({defaults:rr.call(this,Is),display:rr.call(this,kh),theme:rr.call(this,Ui),icons:rr.call(this,Bh),locale:rr.call(this,Vh),date:rr.call(this,Mh)})}}})},defaults:l,display:u,theme:f,icons:d,locale:m,date:T,goTo:I}}const ab="3.7.11";sm.version=ab;function rr(t){var r,s;const e=this.$,n=((r=e.parent)==null?void 0:r.provides)??((s=e.vnode.appContext)==null?void 0:s.provides);if(n&&t in n)return n[t]}Jf(Yg);const lb=sm();Jf(Yg).use(lb).mount("#app");
