import{h as kc,r as Mc,a5 as Oc,a6 as xc,c as Lc,w as lt,V as Mo,o as us,a as Q,b as Bt,a1 as Oo,v as Wn,l as ls,f as Fc,e as xo,a7 as Uc,d as Rt,i as Lo,F as Bc,Y as qc,a8 as hn,j as $c,a9 as jc,k as zc}from"./index-DDyB_HML.js";var Fo={};/**
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
 */const eu=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Hc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],l=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},nu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,g=o>>2,w=(o&3)<<4|l>>4;let R=(l&15)<<2|f>>6,b=f&63;h||(b=64,a||(R=64)),r.push(e[g],e[w],e[R],e[b])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(eu(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Hc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const w=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||l==null||f==null||w==null)throw new Gc;const R=o<<2|l>>4;if(r.push(R),f!==64){const b=l<<4&240|f>>2;if(r.push(b),w!==64){const N=f<<6&192|w;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Gc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kc=function(n){const t=eu(n);return nu.encodeByteArray(t,!0)},ar=function(n){return Kc(n).replace(/\./g,"")},Qc=function(n){try{return nu.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Wc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xc=()=>Wc().__FIREBASE_DEFAULTS__,Yc=()=>{if(typeof process>"u"||typeof Fo>"u")return;const n=Fo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Jc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Qc(n[1]);return t&&JSON.parse(t)},Qs=()=>{try{return Xc()||Yc()||Jc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Zc=n=>{var t,e;return(e=(t=Qs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},th=n=>{const t=Zc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},ru=()=>{var n;return(n=Qs())===null||n===void 0?void 0:n.config};/**
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
 */class eh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function nh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ar(JSON.stringify(e)),ar(JSON.stringify(a)),""].join(".")}/**
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
 */function rh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sh(){var n;const t=(n=Qs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ih(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function oh(){return!sh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function su(){try{return typeof indexedDB=="object"}catch{return!1}}function iu(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function ah(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const uh="FirebaseError";class ae extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=uh,Object.setPrototypeOf(this,ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vr.prototype.create)}}class vr{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?lh(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new ae(s,l,r)}}function lh(n,t){return n.replace(ch,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const ch=/\{\$([^}]+)}/g;function ur(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Uo(o)&&Uo(a)){if(!ur(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Uo(n){return n!==null&&typeof n=="object"}/**
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
 */const hh=1e3,dh=2,fh=4*60*60*1e3,ph=.5;function Bo(n,t=hh,e=dh){const r=t*Math.pow(e,n),s=Math.round(ph*r*(Math.random()-.5)*2);return Math.min(fh,r+s)}/**
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
 */function ke(n){return n&&n._delegate?n._delegate:n}class qt{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const fe="[DEFAULT]";/**
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
 */class mh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new eh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(_h(t))try{this.getOrInitializeService({instanceIdentifier:fe})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=fe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=fe){return this.instances.has(t)}getOptions(t=fe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=fe){return this.component?this.component.multipleInstances?t:fe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gh(n){return n===fe?void 0:n}function _h(n){return n.instantiationMode==="EAGER"}/**
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
 */class yh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new mh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const Eh={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Th=B.INFO,vh={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Ih=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=vh[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ws{constructor(t){this.name=t,this._logLevel=Th,this._logHandler=Ih,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Eh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const wh=(n,t)=>t.some(e=>n instanceof e);let qo,$o;function Ah(){return qo||(qo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rh(){return $o||($o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ou=new WeakMap,Is=new WeakMap,au=new WeakMap,cs=new WeakMap,Xs=new WeakMap;function Ch(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Yt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&ou.set(e,n)}).catch(()=>{}),Xs.set(t,n),t}function bh(n){if(Is.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Is.set(n,t)}let ws={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Is.get(n);if(t==="objectStoreNames")return n.objectStoreNames||au.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Yt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Sh(n){ws=n(ws)}function Ph(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(hs(this),t,...e);return au.set(r,t.sort?t.sort():[t]),Yt(r)}:Rh().includes(n)?function(...t){return n.apply(hs(this),t),Yt(ou.get(this))}:function(...t){return Yt(n.apply(hs(this),t))}}function Vh(n){return typeof n=="function"?Ph(n):(n instanceof IDBTransaction&&bh(n),wh(n,Ah())?new Proxy(n,ws):n)}function Yt(n){if(n instanceof IDBRequest)return Ch(n);if(cs.has(n))return cs.get(n);const t=Vh(n);return t!==n&&(cs.set(n,t),Xs.set(t,n)),t}const hs=n=>Xs.get(n);function uu(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),l=Yt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Yt(a.result),h.oldVersion,h.newVersion,Yt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Dh=["get","getKey","getAll","getAllKeys","count"],Nh=["put","add","delete","clear"],ds=new Map;function jo(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ds.get(t))return ds.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Nh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Dh.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[e](...l),s&&h.done]))[0]};return ds.set(t,o),o}Sh(n=>({...n,get:(t,e,r)=>jo(t,e)||n.get(t,e,r),has:(t,e)=>!!jo(t,e)||n.has(t,e)}));/**
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
 */class kh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Mh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Mh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const As="@firebase/app",zo="0.11.0";/**
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
 */const $t=new Ws("@firebase/app"),Oh="@firebase/app-compat",xh="@firebase/analytics-compat",Lh="@firebase/analytics",Fh="@firebase/app-check-compat",Uh="@firebase/app-check",Bh="@firebase/auth",qh="@firebase/auth-compat",$h="@firebase/database",jh="@firebase/data-connect",zh="@firebase/database-compat",Hh="@firebase/functions",Gh="@firebase/functions-compat",Kh="@firebase/installations",Qh="@firebase/installations-compat",Wh="@firebase/messaging",Xh="@firebase/messaging-compat",Yh="@firebase/performance",Jh="@firebase/performance-compat",Zh="@firebase/remote-config",td="@firebase/remote-config-compat",ed="@firebase/storage",nd="@firebase/storage-compat",rd="@firebase/firestore",sd="@firebase/vertexai",id="@firebase/firestore-compat",od="firebase",ad="11.3.0";/**
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
 */const Rs="[DEFAULT]",ud={[As]:"fire-core",[Oh]:"fire-core-compat",[Lh]:"fire-analytics",[xh]:"fire-analytics-compat",[Uh]:"fire-app-check",[Fh]:"fire-app-check-compat",[Bh]:"fire-auth",[qh]:"fire-auth-compat",[$h]:"fire-rtdb",[jh]:"fire-data-connect",[zh]:"fire-rtdb-compat",[Hh]:"fire-fn",[Gh]:"fire-fn-compat",[Kh]:"fire-iid",[Qh]:"fire-iid-compat",[Wh]:"fire-fcm",[Xh]:"fire-fcm-compat",[Yh]:"fire-perf",[Jh]:"fire-perf-compat",[Zh]:"fire-rc",[td]:"fire-rc-compat",[ed]:"fire-gcs",[nd]:"fire-gcs-compat",[rd]:"fire-fst",[id]:"fire-fst-compat",[sd]:"fire-vertex","fire-js":"fire-js",[od]:"fire-js-all"};/**
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
 */const lr=new Map,ld=new Map,Cs=new Map;function Ho(n,t){try{n.container.addComponent(t)}catch(e){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function te(n){const t=n.name;if(Cs.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;Cs.set(t,n);for(const e of lr.values())Ho(e,n);for(const e of ld.values())Ho(e,n);return!0}function Cn(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function cd(n){return n==null?!1:n.settings!==void 0}/**
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
 */const hd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jt=new vr("app","Firebase",hd);/**
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
 */class dd{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Jt.create("app-deleted",{appName:this._name})}}/**
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
 */const fd=ad;function lu(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Rs,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Jt.create("bad-app-name",{appName:String(s)});if(e||(e=ru()),!e)throw Jt.create("no-options");const o=lr.get(s);if(o){if(ur(e,o.options)&&ur(r,o.config))return o;throw Jt.create("duplicate-app",{appName:s})}const a=new yh(s);for(const h of Cs.values())a.addComponent(h);const l=new dd(e,r,a);return lr.set(s,l),l}function cu(n=Rs){const t=lr.get(n);if(!t&&n===Rs&&ru())return lu();if(!t)throw Jt.create("no-app",{appName:n});return t}function kt(n,t,e){var r;let s=(r=ud[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${s}" with version "${t}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$t.warn(l.join(" "));return}te(new qt(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const pd="firebase-heartbeat-database",md=1,Tn="firebase-heartbeat-store";let fs=null;function hu(){return fs||(fs=uu(pd,md,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Tn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Jt.create("idb-open",{originalErrorMessage:n.message})})),fs}async function gd(n){try{const e=(await hu()).transaction(Tn),r=await e.objectStore(Tn).get(du(n));return await e.done,r}catch(t){if(t instanceof ae)$t.warn(t.message);else{const e=Jt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$t.warn(e.message)}}}async function Go(n,t){try{const r=(await hu()).transaction(Tn,"readwrite");await r.objectStore(Tn).put(t,du(n)),await r.done}catch(e){if(e instanceof ae)$t.warn(e.message);else{const r=Jt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});$t.warn(r.message)}}}function du(n){return`${n.name}!${n.options.appId}`}/**
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
 */const _d=1024,yd=30;class Ed{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new vd(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ko();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>yd){const a=Id(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){$t.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ko(),{heartbeatsToSend:r,unsentEntries:s}=Td(this._heartbeatsCache.heartbeats),o=ar(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return $t.warn(e),""}}}function Ko(){return new Date().toISOString().substring(0,10)}function Td(n,t=_d){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Qo(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Qo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class vd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return su()?iu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await gd(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Go(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Go(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Qo(n){return ar(JSON.stringify({version:2,heartbeats:n})).length}function Id(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function wd(n){te(new qt("platform-logger",t=>new kh(t),"PRIVATE")),te(new qt("heartbeat",t=>new Ed(t),"PRIVATE")),kt(As,zo,n),kt(As,zo,"esm2017"),kt("fire-js","")}wd("");var Ad="firebase",Rd="11.3.0";/**
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
 */kt(Ad,Rd,"app");var Wo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zt,fu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,p){function _(){}_.prototype=p.prototype,T.D=p.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(y,E,I){for(var m=Array(arguments.length-2),Lt=2;Lt<arguments.length;Lt++)m[Lt-2]=arguments[Lt];return p.prototype[E].apply(y,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=T.g[0],_=T.g[1],E=T.g[2];var I=T.g[3],m=p+(I^_&(E^I))+y[0]+3614090360&4294967295;p=_+(m<<7&4294967295|m>>>25),m=I+(E^p&(_^E))+y[1]+3905402710&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(_^I&(p^_))+y[2]+606105819&4294967295,E=I+(m<<17&4294967295|m>>>15),m=_+(p^E&(I^p))+y[3]+3250441966&4294967295,_=E+(m<<22&4294967295|m>>>10),m=p+(I^_&(E^I))+y[4]+4118548399&4294967295,p=_+(m<<7&4294967295|m>>>25),m=I+(E^p&(_^E))+y[5]+1200080426&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(_^I&(p^_))+y[6]+2821735955&4294967295,E=I+(m<<17&4294967295|m>>>15),m=_+(p^E&(I^p))+y[7]+4249261313&4294967295,_=E+(m<<22&4294967295|m>>>10),m=p+(I^_&(E^I))+y[8]+1770035416&4294967295,p=_+(m<<7&4294967295|m>>>25),m=I+(E^p&(_^E))+y[9]+2336552879&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(_^I&(p^_))+y[10]+4294925233&4294967295,E=I+(m<<17&4294967295|m>>>15),m=_+(p^E&(I^p))+y[11]+2304563134&4294967295,_=E+(m<<22&4294967295|m>>>10),m=p+(I^_&(E^I))+y[12]+1804603682&4294967295,p=_+(m<<7&4294967295|m>>>25),m=I+(E^p&(_^E))+y[13]+4254626195&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(_^I&(p^_))+y[14]+2792965006&4294967295,E=I+(m<<17&4294967295|m>>>15),m=_+(p^E&(I^p))+y[15]+1236535329&4294967295,_=E+(m<<22&4294967295|m>>>10),m=p+(E^I&(_^E))+y[1]+4129170786&4294967295,p=_+(m<<5&4294967295|m>>>27),m=I+(_^E&(p^_))+y[6]+3225465664&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^_&(I^p))+y[11]+643717713&4294967295,E=I+(m<<14&4294967295|m>>>18),m=_+(I^p&(E^I))+y[0]+3921069994&4294967295,_=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(_^E))+y[5]+3593408605&4294967295,p=_+(m<<5&4294967295|m>>>27),m=I+(_^E&(p^_))+y[10]+38016083&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^_&(I^p))+y[15]+3634488961&4294967295,E=I+(m<<14&4294967295|m>>>18),m=_+(I^p&(E^I))+y[4]+3889429448&4294967295,_=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(_^E))+y[9]+568446438&4294967295,p=_+(m<<5&4294967295|m>>>27),m=I+(_^E&(p^_))+y[14]+3275163606&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^_&(I^p))+y[3]+4107603335&4294967295,E=I+(m<<14&4294967295|m>>>18),m=_+(I^p&(E^I))+y[8]+1163531501&4294967295,_=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(_^E))+y[13]+2850285829&4294967295,p=_+(m<<5&4294967295|m>>>27),m=I+(_^E&(p^_))+y[2]+4243563512&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^_&(I^p))+y[7]+1735328473&4294967295,E=I+(m<<14&4294967295|m>>>18),m=_+(I^p&(E^I))+y[12]+2368359562&4294967295,_=E+(m<<20&4294967295|m>>>12),m=p+(_^E^I)+y[5]+4294588738&4294967295,p=_+(m<<4&4294967295|m>>>28),m=I+(p^_^E)+y[8]+2272392833&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^_)+y[11]+1839030562&4294967295,E=I+(m<<16&4294967295|m>>>16),m=_+(E^I^p)+y[14]+4259657740&4294967295,_=E+(m<<23&4294967295|m>>>9),m=p+(_^E^I)+y[1]+2763975236&4294967295,p=_+(m<<4&4294967295|m>>>28),m=I+(p^_^E)+y[4]+1272893353&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^_)+y[7]+4139469664&4294967295,E=I+(m<<16&4294967295|m>>>16),m=_+(E^I^p)+y[10]+3200236656&4294967295,_=E+(m<<23&4294967295|m>>>9),m=p+(_^E^I)+y[13]+681279174&4294967295,p=_+(m<<4&4294967295|m>>>28),m=I+(p^_^E)+y[0]+3936430074&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^_)+y[3]+3572445317&4294967295,E=I+(m<<16&4294967295|m>>>16),m=_+(E^I^p)+y[6]+76029189&4294967295,_=E+(m<<23&4294967295|m>>>9),m=p+(_^E^I)+y[9]+3654602809&4294967295,p=_+(m<<4&4294967295|m>>>28),m=I+(p^_^E)+y[12]+3873151461&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^_)+y[15]+530742520&4294967295,E=I+(m<<16&4294967295|m>>>16),m=_+(E^I^p)+y[2]+3299628645&4294967295,_=E+(m<<23&4294967295|m>>>9),m=p+(E^(_|~I))+y[0]+4096336452&4294967295,p=_+(m<<6&4294967295|m>>>26),m=I+(_^(p|~E))+y[7]+1126891415&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~_))+y[14]+2878612391&4294967295,E=I+(m<<15&4294967295|m>>>17),m=_+(I^(E|~p))+y[5]+4237533241&4294967295,_=E+(m<<21&4294967295|m>>>11),m=p+(E^(_|~I))+y[12]+1700485571&4294967295,p=_+(m<<6&4294967295|m>>>26),m=I+(_^(p|~E))+y[3]+2399980690&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~_))+y[10]+4293915773&4294967295,E=I+(m<<15&4294967295|m>>>17),m=_+(I^(E|~p))+y[1]+2240044497&4294967295,_=E+(m<<21&4294967295|m>>>11),m=p+(E^(_|~I))+y[8]+1873313359&4294967295,p=_+(m<<6&4294967295|m>>>26),m=I+(_^(p|~E))+y[15]+4264355552&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~_))+y[6]+2734768916&4294967295,E=I+(m<<15&4294967295|m>>>17),m=_+(I^(E|~p))+y[13]+1309151649&4294967295,_=E+(m<<21&4294967295|m>>>11),m=p+(E^(_|~I))+y[4]+4149444226&4294967295,p=_+(m<<6&4294967295|m>>>26),m=I+(_^(p|~E))+y[11]+3174756917&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~_))+y[2]+718787259&4294967295,E=I+(m<<15&4294967295|m>>>17),m=_+(I^(E|~p))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(E+(m<<21&4294967295|m>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+I&4294967295}r.prototype.u=function(T,p){p===void 0&&(p=T.length);for(var _=p-this.blockSize,y=this.B,E=this.h,I=0;I<p;){if(E==0)for(;I<=_;)s(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<p;)if(y[E++]=T.charCodeAt(I++),E==this.blockSize){s(this,y),E=0;break}}else for(;I<p;)if(y[E++]=T[I++],E==this.blockSize){s(this,y),E=0;break}}this.h=E,this.o+=p},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;var _=8*this.o;for(p=T.length-8;p<T.length;++p)T[p]=_&255,_/=256;for(this.u(T),T=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)T[_++]=this.g[p]>>>y&255;return T};function o(T,p){var _=l;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=p(T)}function a(T,p){this.h=p;for(var _=[],y=!0,E=T.length-1;0<=E;E--){var I=T[E]|0;y&&I==p||(_[E]=I,y=!1)}this.g=_}var l={};function h(T){return-128<=T&&128>T?o(T,function(p){return new a([p|0],0>p?-1:0)}):new a([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return w;if(0>T)return k(f(-T));for(var p=[],_=1,y=0;T>=_;y++)p[y]=T/_|0,_*=4294967296;return new a(p,0)}function g(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return k(g(T.substring(1),p));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(p,8)),y=w,E=0;E<T.length;E+=8){var I=Math.min(8,T.length-E),m=parseInt(T.substring(E,E+I),p);8>I?(I=f(Math.pow(p,I)),y=y.j(I).add(f(m))):(y=y.j(_),y=y.add(f(m)))}return y}var w=h(0),R=h(1),b=h(16777216);n=a.prototype,n.m=function(){if(O(this))return-k(this).m();for(var T=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);T+=(0<=y?y:4294967296+y)*p,p*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(N(this))return"0";if(O(this))return"-"+k(this).toString(T);for(var p=f(Math.pow(T,6)),_=this,y="";;){var E=st(_,p).g;_=J(_,E.j(p));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=E,N(_))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function N(T){if(T.h!=0)return!1;for(var p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function O(T){return T.h==-1}n.l=function(T){return T=J(this,T),O(T)?-1:N(T)?0:1};function k(T){for(var p=T.g.length,_=[],y=0;y<p;y++)_[y]=~T.g[y];return new a(_,~T.h).add(R)}n.abs=function(){return O(this)?k(this):this},n.add=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],y=0,E=0;E<=p;E++){var I=y+(this.i(E)&65535)+(T.i(E)&65535),m=(I>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=m>>>16,I&=65535,m&=65535,_[E]=m<<16|I}return new a(_,_[_.length-1]&-2147483648?-1:0)};function J(T,p){return T.add(k(p))}n.j=function(T){if(N(this)||N(T))return w;if(O(this))return O(T)?k(this).j(k(T)):k(k(this).j(T));if(O(T))return k(this.j(k(T)));if(0>this.l(b)&&0>T.l(b))return f(this.m()*T.m());for(var p=this.g.length+T.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var I=this.i(y)>>>16,m=this.i(y)&65535,Lt=T.i(E)>>>16,Ke=T.i(E)&65535;_[2*y+2*E]+=m*Ke,K(_,2*y+2*E),_[2*y+2*E+1]+=I*Ke,K(_,2*y+2*E+1),_[2*y+2*E+1]+=m*Lt,K(_,2*y+2*E+1),_[2*y+2*E+2]+=I*Lt,K(_,2*y+2*E+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new a(_,0)};function K(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function G(T,p){this.g=T,this.h=p}function st(T,p){if(N(p))throw Error("division by zero");if(N(T))return new G(w,w);if(O(T))return p=st(k(T),p),new G(k(p.g),k(p.h));if(O(p))return p=st(T,k(p)),new G(k(p.g),p.h);if(30<T.g.length){if(O(T)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var _=R,y=p;0>=y.l(T);)_=xt(_),y=xt(y);var E=at(_,1),I=at(y,1);for(y=at(y,2),_=at(_,2);!N(y);){var m=I.add(y);0>=m.l(T)&&(E=E.add(_),I=m),y=at(y,1),_=at(_,1)}return p=J(T,E.j(p)),new G(E,p)}for(E=w;0<=T.l(p);){for(_=Math.max(1,Math.floor(T.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(_),m=I.j(p);O(m)||0<m.l(T);)_-=y,I=f(_),m=I.j(p);N(I)&&(I=R),E=E.add(I),T=J(T,m)}return new G(E,T)}n.A=function(T){return st(this,T).h},n.and=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&T.i(y);return new a(_,this.h&T.h)},n.or=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|T.i(y);return new a(_,this.h|T.h)},n.xor=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^T.i(y);return new a(_,this.h^T.h)};function xt(T){for(var p=T.g.length+1,_=[],y=0;y<p;y++)_[y]=T.i(y)<<1|T.i(y-1)>>>31;return new a(_,T.h)}function at(T,p){var _=p>>5;p%=32;for(var y=T.g.length-_,E=[],I=0;I<y;I++)E[I]=0<p?T.i(I+_)>>>p|T.i(I+_+1)<<32-p:T.i(I+_);return new a(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,fu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=g,Zt=a}).apply(typeof Wo<"u"?Wo:typeof self<"u"?self:typeof window<"u"?window:{});var Xn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pu,dn,mu,nr,bs,gu,_u,yu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,c){return i==Array.prototype||i==Object.prototype||(i[u]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xn=="object"&&Xn];for(var u=0;u<i.length;++u){var c=i[u];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var c=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var v=i[d];if(!(v in c))break t;c=c[v]}i=i[i.length-1],d=c[i],u=u(d),u!=d&&u!=null&&t(c,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var c=0,d=!1,v={next:function(){if(!d&&c<i.length){var A=c++;return{value:u(A,i[A]),done:!1}}return d=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function f(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function g(i,u,c){return i.call.apply(i.bind,arguments)}function w(i,u,c){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,d),i.apply(u,v)}}return function(){return i.apply(u,arguments)}}function R(i,u,c){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:w,R.apply(null,arguments)}function b(i,u){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function N(i,u){function c(){}c.prototype=u.prototype,i.aa=u.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(d,v,A){for(var P=Array(arguments.length-2),z=2;z<arguments.length;z++)P[z-2]=arguments[z];return u.prototype[v].apply(d,P)}}function O(i){const u=i.length;if(0<u){const c=Array(u);for(let d=0;d<u;d++)c[d]=i[d];return c}return[]}function k(i,u){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const v=i.length||0,A=d.length||0;i.length=v+A;for(let P=0;P<A;P++)i[v+P]=d[P]}else i.push(d)}}class J{constructor(u,c){this.i=u,this.j=c,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function K(i){return/^[\s\xa0]*$/.test(i)}function G(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function st(i){return st[" "](i),i}st[" "]=function(){};var xt=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function at(i,u,c){for(const d in i)u.call(c,i[d],d,i)}function T(i,u){for(const c in i)u.call(void 0,i[c],c,i)}function p(i){const u={};for(const c in i)u[c]=i[c];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,u){let c,d;for(let v=1;v<arguments.length;v++){d=arguments[v];for(c in d)i[c]=d[c];for(let A=0;A<_.length;A++)c=_[A],Object.prototype.hasOwnProperty.call(d,c)&&(i[c]=d[c])}}function E(i){var u=1;i=i.split(":");const c=[];for(;0<u&&i.length;)c.push(i.shift()),u--;return i.length&&c.push(i.join(":")),c}function I(i){l.setTimeout(()=>{throw i},0)}function m(){var i=Fr;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class Lt{constructor(){this.h=this.g=null}add(u,c){const d=Ke.get();d.set(u,c),this.h?this.h.next=d:this.g=d,this.h=d}}var Ke=new J(()=>new Jl,i=>i.reset());class Jl{constructor(){this.next=this.g=this.h=null}set(u,c){this.h=u,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Qe,We=!1,Fr=new Lt,ki=()=>{const i=l.Promise.resolve(void 0);Qe=()=>{i.then(Zl)}};var Zl=()=>{for(var i;i=m();){try{i.h.call(i.g)}catch(c){I(c)}var u=Ke;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}We=!1};function Ht(){this.s=this.s,this.C=this.C}Ht.prototype.s=!1,Ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function dt(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var tc=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};l.addEventListener("test",c,u),l.removeEventListener("test",c,u)}catch{}return i}();function Xe(i,u){if(dt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(xt){t:{try{st(u.nodeName);var v=!0;break t}catch{}v=!1}v||(u=null)}}else c=="mouseover"?u=i.fromElement:c=="mouseout"&&(u=i.toElement);this.relatedTarget=u,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:ec[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Xe.aa.h.call(this)}}N(Xe,dt);var ec={2:"touch",3:"pen",4:"mouse"};Xe.prototype.h=function(){Xe.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Vn="closure_listenable_"+(1e6*Math.random()|0),nc=0;function rc(i,u,c,d,v){this.listener=i,this.proxy=null,this.src=u,this.type=c,this.capture=!!d,this.ha=v,this.key=++nc,this.da=this.fa=!1}function Dn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Nn(i){this.src=i,this.g={},this.h=0}Nn.prototype.add=function(i,u,c,d,v){var A=i.toString();i=this.g[A],i||(i=this.g[A]=[],this.h++);var P=Br(i,u,d,v);return-1<P?(u=i[P],c||(u.fa=!1)):(u=new rc(u,this.src,A,!!d,v),u.fa=c,i.push(u)),u};function Ur(i,u){var c=u.type;if(c in i.g){var d=i.g[c],v=Array.prototype.indexOf.call(d,u,void 0),A;(A=0<=v)&&Array.prototype.splice.call(d,v,1),A&&(Dn(u),i.g[c].length==0&&(delete i.g[c],i.h--))}}function Br(i,u,c,d){for(var v=0;v<i.length;++v){var A=i[v];if(!A.da&&A.listener==u&&A.capture==!!c&&A.ha==d)return v}return-1}var qr="closure_lm_"+(1e6*Math.random()|0),$r={};function Mi(i,u,c,d,v){if(Array.isArray(u)){for(var A=0;A<u.length;A++)Mi(i,u[A],c,d,v);return null}return c=Li(c),i&&i[Vn]?i.K(u,c,f(d)?!!d.capture:!1,v):sc(i,u,c,!1,d,v)}function sc(i,u,c,d,v,A){if(!u)throw Error("Invalid event type");var P=f(v)?!!v.capture:!!v,z=zr(i);if(z||(i[qr]=z=new Nn(i)),c=z.add(u,c,d,P,A),c.proxy)return c;if(d=ic(),c.proxy=d,d.src=i,d.listener=c,i.addEventListener)tc||(v=P),v===void 0&&(v=!1),i.addEventListener(u.toString(),d,v);else if(i.attachEvent)i.attachEvent(xi(u.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function ic(){function i(c){return u.call(i.src,i.listener,c)}const u=oc;return i}function Oi(i,u,c,d,v){if(Array.isArray(u))for(var A=0;A<u.length;A++)Oi(i,u[A],c,d,v);else d=f(d)?!!d.capture:!!d,c=Li(c),i&&i[Vn]?(i=i.i,u=String(u).toString(),u in i.g&&(A=i.g[u],c=Br(A,c,d,v),-1<c&&(Dn(A[c]),Array.prototype.splice.call(A,c,1),A.length==0&&(delete i.g[u],i.h--)))):i&&(i=zr(i))&&(u=i.g[u.toString()],i=-1,u&&(i=Br(u,c,d,v)),(c=-1<i?u[i]:null)&&jr(c))}function jr(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[Vn])Ur(u.i,i);else{var c=i.type,d=i.proxy;u.removeEventListener?u.removeEventListener(c,d,i.capture):u.detachEvent?u.detachEvent(xi(c),d):u.addListener&&u.removeListener&&u.removeListener(d),(c=zr(u))?(Ur(c,i),c.h==0&&(c.src=null,u[qr]=null)):Dn(i)}}}function xi(i){return i in $r?$r[i]:$r[i]="on"+i}function oc(i,u){if(i.da)i=!0;else{u=new Xe(u,this);var c=i.listener,d=i.ha||i.src;i.fa&&jr(i),i=c.call(d,u)}return i}function zr(i){return i=i[qr],i instanceof Nn?i:null}var Hr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Li(i){return typeof i=="function"?i:(i[Hr]||(i[Hr]=function(u){return i.handleEvent(u)}),i[Hr])}function ft(){Ht.call(this),this.i=new Nn(this),this.M=this,this.F=null}N(ft,Ht),ft.prototype[Vn]=!0,ft.prototype.removeEventListener=function(i,u,c,d){Oi(this,i,u,c,d)};function Tt(i,u){var c,d=i.F;if(d)for(c=[];d;d=d.F)c.push(d);if(i=i.M,d=u.type||u,typeof u=="string")u=new dt(u,i);else if(u instanceof dt)u.target=u.target||i;else{var v=u;u=new dt(d,i),y(u,v)}if(v=!0,c)for(var A=c.length-1;0<=A;A--){var P=u.g=c[A];v=kn(P,d,!0,u)&&v}if(P=u.g=i,v=kn(P,d,!0,u)&&v,v=kn(P,d,!1,u)&&v,c)for(A=0;A<c.length;A++)P=u.g=c[A],v=kn(P,d,!1,u)&&v}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var c=i.g[u],d=0;d<c.length;d++)Dn(c[d]);delete i.g[u],i.h--}}this.F=null},ft.prototype.K=function(i,u,c,d){return this.i.add(String(i),u,!1,c,d)},ft.prototype.L=function(i,u,c,d){return this.i.add(String(i),u,!0,c,d)};function kn(i,u,c,d){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var v=!0,A=0;A<u.length;++A){var P=u[A];if(P&&!P.da&&P.capture==c){var z=P.listener,ut=P.ha||P.src;P.fa&&Ur(i.i,P),v=z.call(ut,d)!==!1&&v}}return v&&!d.defaultPrevented}function Fi(i,u,c){if(typeof i=="function")c&&(i=R(i,c));else if(i&&typeof i.handleEvent=="function")i=R(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(i,u||0)}function Ui(i){i.g=Fi(()=>{i.g=null,i.i&&(i.i=!1,Ui(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class ac extends Ht{constructor(u,c){super(),this.m=u,this.l=c,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ui(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ye(i){Ht.call(this),this.h=i,this.g={}}N(Ye,Ht);var Bi=[];function qi(i){at(i.g,function(u,c){this.g.hasOwnProperty(c)&&jr(u)},i),i.g={}}Ye.prototype.N=function(){Ye.aa.N.call(this),qi(this)},Ye.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gr=l.JSON.stringify,uc=l.JSON.parse,lc=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function Kr(){}Kr.prototype.h=null;function $i(i){return i.h||(i.h=i.i())}function ji(){}var Je={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qr(){dt.call(this,"d")}N(Qr,dt);function Wr(){dt.call(this,"c")}N(Wr,dt);var le={},zi=null;function Mn(){return zi=zi||new ft}le.La="serverreachability";function Hi(i){dt.call(this,le.La,i)}N(Hi,dt);function Ze(i){const u=Mn();Tt(u,new Hi(u))}le.STAT_EVENT="statevent";function Gi(i,u){dt.call(this,le.STAT_EVENT,i),this.stat=u}N(Gi,dt);function vt(i){const u=Mn();Tt(u,new Gi(u,i))}le.Ma="timingevent";function Ki(i,u){dt.call(this,le.Ma,i),this.size=u}N(Ki,dt);function tn(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},u)}function en(){this.g=!0}en.prototype.xa=function(){this.g=!1};function cc(i,u,c,d,v,A){i.info(function(){if(i.g)if(A)for(var P="",z=A.split("&"),ut=0;ut<z.length;ut++){var j=z[ut].split("=");if(1<j.length){var pt=j[0];j=j[1];var mt=pt.split("_");P=2<=mt.length&&mt[1]=="type"?P+(pt+"="+j+"&"):P+(pt+"=redacted&")}}else P=null;else P=A;return"XMLHTTP REQ ("+d+") [attempt "+v+"]: "+u+`
`+c+`
`+P})}function hc(i,u,c,d,v,A,P){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+v+"]: "+u+`
`+c+`
`+A+" "+P})}function Ie(i,u,c,d){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+fc(i,c)+(d?" "+d:"")})}function dc(i,u){i.info(function(){return"TIMEOUT: "+u})}en.prototype.info=function(){};function fc(i,u){if(!i.g)return u;if(!u)return null;try{var c=JSON.parse(u);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var d=c[i];if(!(2>d.length)){var v=d[1];if(Array.isArray(v)&&!(1>v.length)){var A=v[0];if(A!="noop"&&A!="stop"&&A!="close")for(var P=1;P<v.length;P++)v[P]=""}}}}return Gr(c)}catch{return u}}var On={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Qi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xr;function xn(){}N(xn,Kr),xn.prototype.g=function(){return new XMLHttpRequest},xn.prototype.i=function(){return{}},Xr=new xn;function Gt(i,u,c,d){this.j=i,this.i=u,this.l=c,this.R=d||1,this.U=new Ye(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wi}function Wi(){this.i=null,this.g="",this.h=!1}var Xi={},Yr={};function Jr(i,u,c){i.L=1,i.v=Bn(Ft(u)),i.m=c,i.P=!0,Yi(i,null)}function Yi(i,u){i.F=Date.now(),Ln(i),i.A=Ft(i.v);var c=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),ho(c.i,"t",d),i.C=0,c=i.j.J,i.h=new Wi,i.g=Vo(i.j,c?u:null,!i.m),0<i.O&&(i.M=new ac(R(i.Y,i,i.g),i.O)),u=i.U,c=i.g,d=i.ca;var v="readystatechange";Array.isArray(v)||(v&&(Bi[0]=v.toString()),v=Bi);for(var A=0;A<v.length;A++){var P=Mi(c,v[A],d||u.handleEvent,!1,u.h||u);if(!P)break;u.g[P.key]=P}u=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),Ze(),cc(i.i,i.u,i.A,i.l,i.R,i.m)}Gt.prototype.ca=function(i){i=i.target;const u=this.M;u&&Ut(i)==3?u.j():this.Y(i)},Gt.prototype.Y=function(i){try{if(i==this.g)t:{const mt=Ut(this.g);var u=this.g.Ba();const Re=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||Eo(this.g)))){this.J||mt!=4||u==7||(u==8||0>=Re?Ze(3):Ze(2)),Zr(this);var c=this.g.Z();this.X=c;e:if(Ji(this)){var d=Eo(this.g);i="";var v=d.length,A=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ce(this),nn(this);var P="";break e}this.h.i=new l.TextDecoder}for(u=0;u<v;u++)this.h.h=!0,i+=this.h.i.decode(d[u],{stream:!(A&&u==v-1)});d.length=0,this.h.g+=i,this.C=0,P=this.h.g}else P=this.g.oa();if(this.o=c==200,hc(this.i,this.u,this.A,this.l,this.R,mt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var z,ut=this.g;if((z=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(z)){var j=z;break e}}j=null}if(c=j)Ie(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ts(this,c);else{this.o=!1,this.s=3,vt(12),ce(this),nn(this);break t}}if(this.P){c=!0;let bt;for(;!this.J&&this.C<P.length;)if(bt=pc(this,P),bt==Yr){mt==4&&(this.s=4,vt(14),c=!1),Ie(this.i,this.l,null,"[Incomplete Response]");break}else if(bt==Xi){this.s=4,vt(15),Ie(this.i,this.l,P,"[Invalid Chunk]"),c=!1;break}else Ie(this.i,this.l,bt,null),ts(this,bt);if(Ji(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||P.length!=0||this.h.h||(this.s=1,vt(16),c=!1),this.o=this.o&&c,!c)Ie(this.i,this.l,P,"[Invalid Chunked Response]"),ce(this),nn(this);else if(0<P.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+P.length),os(pt),pt.M=!0,vt(11))}}else Ie(this.i,this.l,P,null),ts(this,P);mt==4&&ce(this),this.o&&!this.J&&(mt==4?Co(this.j,this):(this.o=!1,Ln(this)))}else Dc(this.g),c==400&&0<P.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),ce(this),nn(this)}}}catch{}finally{}};function Ji(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function pc(i,u){var c=i.C,d=u.indexOf(`
`,c);return d==-1?Yr:(c=Number(u.substring(c,d)),isNaN(c)?Xi:(d+=1,d+c>u.length?Yr:(u=u.slice(d,d+c),i.C=d+c,u)))}Gt.prototype.cancel=function(){this.J=!0,ce(this)};function Ln(i){i.S=Date.now()+i.I,Zi(i,i.I)}function Zi(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=tn(R(i.ba,i),u)}function Zr(i){i.B&&(l.clearTimeout(i.B),i.B=null)}Gt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(dc(this.i,this.A),this.L!=2&&(Ze(),vt(17)),ce(this),this.s=2,nn(this)):Zi(this,this.S-i)};function nn(i){i.j.G==0||i.J||Co(i.j,i)}function ce(i){Zr(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,qi(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function ts(i,u){try{var c=i.j;if(c.G!=0&&(c.g==i||es(c.h,i))){if(!i.K&&es(c.h,i)&&c.G==3){try{var d=c.Da.g.parse(u)}catch{d=null}if(Array.isArray(d)&&d.length==3){var v=d;if(v[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)Gn(c),zn(c);else break t;is(c),vt(18)}}else c.za=v[1],0<c.za-c.T&&37500>v[2]&&c.F&&c.v==0&&!c.C&&(c.C=tn(R(c.Za,c),6e3));if(1>=no(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else de(c,11)}else if((i.K||c.g==i)&&Gn(c),!K(u))for(v=c.Da.g.parse(u),u=0;u<v.length;u++){let j=v[u];if(c.T=j[0],j=j[1],c.G==2)if(j[0]=="c"){c.K=j[1],c.ia=j[2];const pt=j[3];pt!=null&&(c.la=pt,c.j.info("VER="+c.la));const mt=j[4];mt!=null&&(c.Aa=mt,c.j.info("SVER="+c.Aa));const Re=j[5];Re!=null&&typeof Re=="number"&&0<Re&&(d=1.5*Re,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const bt=i.g;if(bt){const Qn=bt.g?bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qn){var A=d.h;A.g||Qn.indexOf("spdy")==-1&&Qn.indexOf("quic")==-1&&Qn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(ns(A,A.h),A.h=null))}if(d.D){const as=bt.g?bt.g.getResponseHeader("X-HTTP-Session-Id"):null;as&&(d.ya=as,H(d.I,d.D,as))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var P=i;if(d.qa=Po(d,d.J?d.ia:null,d.W),P.K){ro(d.h,P);var z=P,ut=d.L;ut&&(z.I=ut),z.B&&(Zr(z),Ln(z)),d.g=P}else Ao(d);0<c.i.length&&Hn(c)}else j[0]!="stop"&&j[0]!="close"||de(c,7);else c.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?de(c,7):ss(c):j[0]!="noop"&&c.l&&c.l.ta(j),c.v=0)}}Ze(4)}catch{}}var mc=class{constructor(i,u){this.g=i,this.map=u}};function to(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function eo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function no(i){return i.h?1:i.g?i.g.size:0}function es(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function ns(i,u){i.g?i.g.add(u):i.h=u}function ro(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}to.prototype.cancel=function(){if(this.i=so(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function so(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const c of i.g.values())u=u.concat(c.D);return u}return O(i.i)}function gc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var u=[],c=i.length,d=0;d<c;d++)u.push(i[d]);return u}u=[],c=0;for(d in i)u[c++]=i[d];return u}function _c(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var u=[];i=i.length;for(var c=0;c<i;c++)u.push(c);return u}u=[],c=0;for(const d in i)u[c++]=d;return u}}}function io(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var c=_c(i),d=gc(i),v=d.length,A=0;A<v;A++)u.call(void 0,d[A],c&&c[A],i)}var oo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yc(i,u){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var d=i[c].indexOf("="),v=null;if(0<=d){var A=i[c].substring(0,d);v=i[c].substring(d+1)}else A=i[c];u(A,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function he(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof he){this.h=i.h,Fn(this,i.j),this.o=i.o,this.g=i.g,Un(this,i.s),this.l=i.l;var u=i.i,c=new on;c.i=u.i,u.g&&(c.g=new Map(u.g),c.h=u.h),ao(this,c),this.m=i.m}else i&&(u=String(i).match(oo))?(this.h=!1,Fn(this,u[1]||"",!0),this.o=rn(u[2]||""),this.g=rn(u[3]||"",!0),Un(this,u[4]),this.l=rn(u[5]||"",!0),ao(this,u[6]||"",!0),this.m=rn(u[7]||"")):(this.h=!1,this.i=new on(null,this.h))}he.prototype.toString=function(){var i=[],u=this.j;u&&i.push(sn(u,uo,!0),":");var c=this.g;return(c||u=="file")&&(i.push("//"),(u=this.o)&&i.push(sn(u,uo,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(sn(c,c.charAt(0)=="/"?vc:Tc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",sn(c,wc)),i.join("")};function Ft(i){return new he(i)}function Fn(i,u,c){i.j=c?rn(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function Un(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function ao(i,u,c){u instanceof on?(i.i=u,Ac(i.i,i.h)):(c||(u=sn(u,Ic)),i.i=new on(u,i.h))}function H(i,u,c){i.i.set(u,c)}function Bn(i){return H(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function rn(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function sn(i,u,c){return typeof i=="string"?(i=encodeURI(i).replace(u,Ec),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Ec(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var uo=/[#\/\?@]/g,Tc=/[#\?:]/g,vc=/[#\?]/g,Ic=/[#\?@]/g,wc=/#/g;function on(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function Kt(i){i.g||(i.g=new Map,i.h=0,i.i&&yc(i.i,function(u,c){i.add(decodeURIComponent(u.replace(/\+/g," ")),c)}))}n=on.prototype,n.add=function(i,u){Kt(this),this.i=null,i=we(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(u),this.h+=1,this};function lo(i,u){Kt(i),u=we(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function co(i,u){return Kt(i),u=we(i,u),i.g.has(u)}n.forEach=function(i,u){Kt(this),this.g.forEach(function(c,d){c.forEach(function(v){i.call(u,v,d,this)},this)},this)},n.na=function(){Kt(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),c=[];for(let d=0;d<u.length;d++){const v=i[d];for(let A=0;A<v.length;A++)c.push(u[d])}return c},n.V=function(i){Kt(this);let u=[];if(typeof i=="string")co(this,i)&&(u=u.concat(this.g.get(we(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)u=u.concat(i[c])}return u},n.set=function(i,u){return Kt(this),this.i=null,i=we(this,i),co(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function ho(i,u,c){lo(i,u),0<c.length&&(i.i=null,i.g.set(we(i,u),O(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var c=0;c<u.length;c++){var d=u[c];const A=encodeURIComponent(String(d)),P=this.V(d);for(d=0;d<P.length;d++){var v=A;P[d]!==""&&(v+="="+encodeURIComponent(String(P[d]))),i.push(v)}}return this.i=i.join("&")};function we(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function Ac(i,u){u&&!i.j&&(Kt(i),i.i=null,i.g.forEach(function(c,d){var v=d.toLowerCase();d!=v&&(lo(this,d),ho(this,v,c))},i)),i.j=u}function Rc(i,u){const c=new en;if(l.Image){const d=new Image;d.onload=b(Qt,c,"TestLoadImage: loaded",!0,u,d),d.onerror=b(Qt,c,"TestLoadImage: error",!1,u,d),d.onabort=b(Qt,c,"TestLoadImage: abort",!1,u,d),d.ontimeout=b(Qt,c,"TestLoadImage: timeout",!1,u,d),l.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else u(!1)}function Cc(i,u){const c=new en,d=new AbortController,v=setTimeout(()=>{d.abort(),Qt(c,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:d.signal}).then(A=>{clearTimeout(v),A.ok?Qt(c,"TestPingServer: ok",!0,u):Qt(c,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(v),Qt(c,"TestPingServer: error",!1,u)})}function Qt(i,u,c,d,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),d(c)}catch{}}function bc(){this.g=new lc}function Sc(i,u,c){const d=c||"";try{io(i,function(v,A){let P=v;f(v)&&(P=Gr(v)),u.push(d+A+"="+encodeURIComponent(P))})}catch(v){throw u.push(d+"type="+encodeURIComponent("_badmap")),v}}function qn(i){this.l=i.Ub||null,this.j=i.eb||!1}N(qn,Kr),qn.prototype.g=function(){return new $n(this.l,this.j)},qn.prototype.i=function(i){return function(){return i}}({});function $n(i,u){ft.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N($n,ft),n=$n.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,un(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,an(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,un(this)),this.g&&(this.readyState=3,un(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function fo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?an(this):un(this),this.readyState==3&&fo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,an(this))},n.Qa=function(i){this.g&&(this.response=i,an(this))},n.ga=function(){this.g&&an(this)};function an(i){i.readyState=4,i.l=null,i.j=null,i.v=null,un(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var c=u.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=u.next();return i.join(`\r
`)};function un(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty($n.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function po(i){let u="";return at(i,function(c,d){u+=d,u+=":",u+=c,u+=`\r
`}),u}function rs(i,u,c){t:{for(d in c){var d=!1;break t}d=!0}d||(c=po(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):H(i,u,c))}function Y(i){ft.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Y,ft);var Pc=/^https?$/i,Vc=["POST","PUT"];n=Y.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xr.g(),this.v=this.o?$i(this.o):$i(Xr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(A){mo(this,A);return}if(i=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var v in d)c.set(v,d[v]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const A of d.keys())c.set(A,d.get(A));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(A=>A.toLowerCase()=="content-type"),v=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Vc,u,void 0))||d||v||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,P]of c)this.g.setRequestHeader(A,P);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yo(this),this.u=!0,this.g.send(i),this.u=!1}catch(A){mo(this,A)}};function mo(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,go(i),jn(i)}function go(i){i.A||(i.A=!0,Tt(i,"complete"),Tt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Tt(this,"complete"),Tt(this,"abort"),jn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jn(this,!0)),Y.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?_o(this):this.bb())},n.bb=function(){_o(this)};function _o(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Ut(i)!=4||i.Z()!=2)){if(i.u&&Ut(i)==4)Fi(i.Ea,0,i);else if(Tt(i,"readystatechange"),Ut(i)==4){i.h=!1;try{const P=i.Z();t:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var c;if(!(c=u)){var d;if(d=P===0){var v=String(i.D).match(oo)[1]||null;!v&&l.self&&l.self.location&&(v=l.self.location.protocol.slice(0,-1)),d=!Pc.test(v?v.toLowerCase():"")}c=d}if(c)Tt(i,"complete"),Tt(i,"success");else{i.m=6;try{var A=2<Ut(i)?i.g.statusText:""}catch{A=""}i.l=A+" ["+i.Z()+"]",go(i)}}finally{jn(i)}}}}function jn(i,u){if(i.g){yo(i);const c=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||Tt(i,"ready");try{c.onreadystatechange=d}catch{}}}function yo(i){i.I&&(l.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Ut(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),uc(u)}};function Eo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Dc(i){const u={};i=(i.g&&2<=Ut(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(K(i[d]))continue;var c=E(i[d]);const v=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const A=u[v]||[];u[v]=A,A.push(c)}T(u,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ln(i,u,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||u}function To(i){this.Aa=0,this.i=[],this.j=new en,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ln("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ln("baseRetryDelayMs",5e3,i),this.cb=ln("retryDelaySeedMs",1e4,i),this.Wa=ln("forwardChannelMaxRetries",2,i),this.wa=ln("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new to(i&&i.concurrentRequestLimit),this.Da=new bc,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=To.prototype,n.la=8,n.G=1,n.connect=function(i,u,c,d){vt(0),this.W=i,this.H=u||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=Po(this,null,this.W),Hn(this)};function ss(i){if(vo(i),i.G==3){var u=i.U++,c=Ft(i.I);if(H(c,"SID",i.K),H(c,"RID",u),H(c,"TYPE","terminate"),cn(i,c),u=new Gt(i,i.j,u),u.L=2,u.v=Bn(Ft(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!c&&l.Image&&(new Image().src=u.v,c=!0),c||(u.g=Vo(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ln(u)}So(i)}function zn(i){i.g&&(os(i),i.g.cancel(),i.g=null)}function vo(i){zn(i),i.u&&(l.clearTimeout(i.u),i.u=null),Gn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function Hn(i){if(!eo(i.h)&&!i.s){i.s=!0;var u=i.Ga;Qe||ki(),We||(Qe(),We=!0),Fr.add(u,i),i.B=0}}function Nc(i,u){return no(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=tn(R(i.Ga,i,u),bo(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const v=new Gt(this,this.j,i);let A=this.o;if(this.S&&(A?(A=p(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(v.H=A,A=null),this.P)t:{for(var u=0,c=0;c<this.i.length;c++){e:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(u+=d,4096<u){u=c;break t}if(u===4096||c===this.i.length-1){u=c+1;break t}}u=1e3}else u=1e3;u=wo(this,v,u),c=Ft(this.I),H(c,"RID",i),H(c,"CVER",22),this.D&&H(c,"X-HTTP-Session-Id",this.D),cn(this,c),A&&(this.O?u="headers="+encodeURIComponent(String(po(A)))+"&"+u:this.m&&rs(c,this.m,A)),ns(this.h,v),this.Ua&&H(c,"TYPE","init"),this.P?(H(c,"$req",u),H(c,"SID","null"),v.T=!0,Jr(v,c,null)):Jr(v,c,u),this.G=2}}else this.G==3&&(i?Io(this,i):this.i.length==0||eo(this.h)||Io(this))};function Io(i,u){var c;u?c=u.l:c=i.U++;const d=Ft(i.I);H(d,"SID",i.K),H(d,"RID",c),H(d,"AID",i.T),cn(i,d),i.m&&i.o&&rs(d,i.m,i.o),c=new Gt(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),u&&(i.i=u.D.concat(i.i)),u=wo(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ns(i.h,c),Jr(c,d,u)}function cn(i,u){i.H&&at(i.H,function(c,d){H(u,d,c)}),i.l&&io({},function(c,d){H(u,d,c)})}function wo(i,u,c){c=Math.min(i.i.length,c);var d=i.l?R(i.l.Na,i.l,i):null;t:{var v=i.i;let A=-1;for(;;){const P=["count="+c];A==-1?0<c?(A=v[0].g,P.push("ofs="+A)):A=0:P.push("ofs="+A);let z=!0;for(let ut=0;ut<c;ut++){let j=v[ut].g;const pt=v[ut].map;if(j-=A,0>j)A=Math.max(0,v[ut].g-100),z=!1;else try{Sc(pt,P,"req"+j+"_")}catch{d&&d(pt)}}if(z){d=P.join("&");break t}}}return i=i.i.splice(0,c),u.D=i,d}function Ao(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;Qe||ki(),We||(Qe(),We=!0),Fr.add(u,i),i.v=0}}function is(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=tn(R(i.Fa,i),bo(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Ro(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=tn(R(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),zn(this),Ro(this))};function os(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function Ro(i){i.g=new Gt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=Ft(i.qa);H(u,"RID","rpc"),H(u,"SID",i.K),H(u,"AID",i.T),H(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&H(u,"TO",i.ja),H(u,"TYPE","xmlhttp"),cn(i,u),i.m&&i.o&&rs(u,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=Bn(Ft(u)),c.m=null,c.P=!0,Yi(c,i)}n.Za=function(){this.C!=null&&(this.C=null,zn(this),is(this),vt(19))};function Gn(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function Co(i,u){var c=null;if(i.g==u){Gn(i),os(i),i.g=null;var d=2}else if(es(i.h,u))c=u.D,ro(i.h,u),d=1;else return;if(i.G!=0){if(u.o)if(d==1){c=u.m?u.m.length:0,u=Date.now()-u.F;var v=i.B;d=Mn(),Tt(d,new Ki(d,c)),Hn(i)}else Ao(i);else if(v=u.s,v==3||v==0&&0<u.X||!(d==1&&Nc(i,u)||d==2&&is(i)))switch(c&&0<c.length&&(u=i.h,u.i=u.i.concat(c)),v){case 1:de(i,5);break;case 4:de(i,10);break;case 3:de(i,6);break;default:de(i,2)}}}function bo(i,u){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*u}function de(i,u){if(i.j.info("Error code "+u),u==2){var c=R(i.fb,i),d=i.Xa;const v=!d;d=new he(d||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Fn(d,"https"),Bn(d),v?Rc(d.toString(),c):Cc(d.toString(),c)}else vt(2);i.G=0,i.l&&i.l.sa(u),So(i),vo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function So(i){if(i.G=0,i.ka=[],i.l){const u=so(i.h);(u.length!=0||i.i.length!=0)&&(k(i.ka,u),k(i.ka,i.i),i.h.i.length=0,O(i.i),i.i.length=0),i.l.ra()}}function Po(i,u,c){var d=c instanceof he?Ft(c):new he(c);if(d.g!="")u&&(d.g=u+"."+d.g),Un(d,d.s);else{var v=l.location;d=v.protocol,u=u?u+"."+v.hostname:v.hostname,v=+v.port;var A=new he(null);d&&Fn(A,d),u&&(A.g=u),v&&Un(A,v),c&&(A.l=c),d=A}return c=i.D,u=i.ya,c&&u&&H(d,c,u),H(d,"VER",i.la),cn(i,d),d}function Vo(i,u,c){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new Y(new qn({eb:c})):new Y(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Do(){}n=Do.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Kn(){}Kn.prototype.g=function(i,u){return new At(i,u)};function At(i,u){ft.call(this),this.g=new To(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!K(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!K(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Ae(this)}N(At,ft),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){ss(this.g)},At.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=Gr(i),i=c);u.i.push(new mc(u.Ya++,i)),u.G==3&&Hn(u)},At.prototype.N=function(){this.g.l=null,delete this.j,ss(this.g),delete this.g,At.aa.N.call(this)};function No(i){Qr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const c in u){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}N(No,Qr);function ko(){Wr.call(this),this.status=1}N(ko,Wr);function Ae(i){this.g=i}N(Ae,Do),Ae.prototype.ua=function(){Tt(this.g,"a")},Ae.prototype.ta=function(i){Tt(this.g,new No(i))},Ae.prototype.sa=function(i){Tt(this.g,new ko)},Ae.prototype.ra=function(){Tt(this.g,"b")},Kn.prototype.createWebChannel=Kn.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,yu=function(){return new Kn},_u=function(){return Mn()},gu=le,bs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},On.NO_ERROR=0,On.TIMEOUT=8,On.HTTP_ERROR=6,nr=On,Qi.COMPLETE="complete",mu=Qi,ji.EventType=Je,Je.OPEN="a",Je.CLOSE="b",Je.ERROR="c",Je.MESSAGE="d",ft.prototype.listen=ft.prototype.K,dn=ji,Y.prototype.listenOnce=Y.prototype.L,Y.prototype.getLastError=Y.prototype.Ka,Y.prototype.getLastErrorCode=Y.prototype.Ba,Y.prototype.getStatus=Y.prototype.Z,Y.prototype.getResponseJson=Y.prototype.Oa,Y.prototype.getResponseText=Y.prototype.oa,Y.prototype.send=Y.prototype.ea,Y.prototype.setWithCredentials=Y.prototype.Ha,pu=Y}).apply(typeof Xn<"u"?Xn:typeof self<"u"?self:typeof window<"u"?window:{});const Xo="@firebase/firestore",Yo="4.7.7";/**
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
 */class _t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
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
 */let $e="11.3.0";/**
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
 */const ye=new Ws("@firebase/firestore");function Ce(){return ye.logLevel}function V(n,...t){if(ye.logLevel<=B.DEBUG){const e=t.map(Ys);ye.debug(`Firestore (${$e}): ${n}`,...e)}}function jt(n,...t){if(ye.logLevel<=B.ERROR){const e=t.map(Ys);ye.error(`Firestore (${$e}): ${n}`,...e)}}function Me(n,...t){if(ye.logLevel<=B.WARN){const e=t.map(Ys);ye.warn(`Firestore (${$e}): ${n}`,...e)}}function Ys(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function L(n="Unexpected state"){const t=`FIRESTORE (${$e}) INTERNAL ASSERTION FAILED: `+n;throw jt(t),new Error(t)}function X(n,t){n||L()}function q(n,t){return n}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends ae{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ge{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Eu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Cd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(_t.UNAUTHENTICATED))}shutdown(){}}class bd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Sd{constructor(t){this.t=t,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){X(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new ge;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ge,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},l=h=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ge)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string"),new Eu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string"),new _t(t)}}class Pd{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Vd{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Pd(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Jo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Dd{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,cd(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){X(this.o===void 0);const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Jo(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(X(typeof e.token=="string"),this.R=e.token,new Jo(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Nd(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */function Ss(){return new TextEncoder}/**
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
 */class kd{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Nd(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function F(n,t){return n<t?-1:n>t?1:0}function Ps(n,t){const e=Ss().encode(n),r=Ss().encode(t);for(let s=0;s<Math.min(e.length,r.length);s++){const o=F(e[s],r[s]);if(o!==0)return o}return F(e.length,r.length)}function Oe(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */const Zo=-62135596800,ta=1e6;class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*ta);return new ot(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Zo)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ta}_compareTo(t){return this.seconds===t.seconds?F(this.nanoseconds,t.nanoseconds):F(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Zo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class x{static fromTimestamp(t){return new x(t)}static min(){return new x(new ot(0,0))}static max(){return new x(new ot(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ea="__name__";class Dt{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(),r===void 0?r=t.length-e:r>t.length-e&&L(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Dt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Dt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Dt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return F(t.length,e.length)}static compareSegments(t,e){const r=Dt.isNumericId(t),s=Dt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Dt.extractNumericId(t).compare(Dt.extractNumericId(e)):Ps(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Zt.fromString(t.substring(4,t.length-2))}}class W extends Dt{construct(t,e,r){return new W(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new D(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new W(e)}static emptyPath(){return new W([])}}const Md=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends Dt{construct(t,e,r){return new Et(t,e,r)}static isValidIdentifier(t){return Md.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ea}static keyField(){return new Et([ea])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new D(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new D(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new D(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Et(e)}static emptyPath(){return new Et([])}}/**
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
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(W.fromString(t))}static fromName(t){return new M(W.fromString(t).popFirst(5))}static empty(){return new M(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&W.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return W.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new W(t.slice()))}}/**
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
 */const vn=-1;function Od(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=x.fromTimestamp(r===1e9?new ot(e+1,0):new ot(e,r));return new ee(s,M.empty(),t)}function xd(n){return new ee(n.readTime,n.key,vn)}class ee{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ee(x.min(),M.empty(),vn)}static max(){return new ee(x.max(),M.empty(),vn)}}function Ld(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:F(n.largestBatchId,t.largestBatchId))}/**
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
 */const Fd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ud{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Ir(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Fd)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let s=0,o=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(s=>s?C.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,s)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(g=>{a[f]=g,++l,l===o&&r(a)},g=>s(g))}})}static doWhile(t,e){return new C((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Bd(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function je(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class wr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}wr.ae=-1;/**
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
 */const qd=-1;function Ar(n){return n==null}function cr(n){return n===0&&1/n==-1/0}function $d(n){return typeof n=="number"&&Number.isInteger(n)&&!cr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Tu="";function jd(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=na(t)),t=zd(n.get(e),t);return na(t)}function zd(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Tu:e+="";break;default:e+=o}}return e}function na(n){return n+Tu+""}/**
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
 */function ra(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ze(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function vu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class tt{constructor(t,e){this.comparator=t,this.root=e||ct.EMPTY}insert(t,e){return new tt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(t){return new tt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Yn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Yn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Yn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Yn(this.root,t,this.comparator,!0)}}class Yn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ct{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ct.RED,this.left=s??ct.EMPTY,this.right=o??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ct(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ct.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,r,s,o){return this}insert(t,e,r){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rt{constructor(t){this.comparator=t,this.data=new tt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new sa(this.data.getIterator())}getIteratorFrom(t){return new sa(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof rt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new rt(this.comparator);return e.data=t,e}}class sa{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wt{constructor(t){this.fields=t,t.sort(Et.comparator)}static empty(){return new Wt([])}unionWith(t){let e=new rt(Et.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Wt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Oe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Iu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Iu("Invalid base64 string: "+o):o}}(t);return new ht(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return F(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const Hd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ne(n){if(X(!!n),typeof n=="string"){let t=0;const e=Hd.exec(n);if(X(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Z(n.seconds),nanos:Z(n.nanos)}}function Z(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function re(n){return typeof n=="string"?ht.fromBase64String(n):ht.fromUint8Array(n)}/**
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
 */const wu="server_timestamp",Au="__type__",Ru="__previous_value__",Cu="__local_write_time__";function Js(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Au])===null||e===void 0?void 0:e.stringValue)===wu}function Rr(n){const t=n.mapValue.fields[Ru];return Js(t)?Rr(t):t}function In(n){const t=ne(n.mapValue.fields[Cu].timestampValue);return new ot(t.seconds,t.nanos)}/**
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
 */class Gd{constructor(t,e,r,s,o,a,l,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f}}const hr="(default)";class wn{constructor(t,e){this.projectId=t,this.database=e||hr}static empty(){return new wn("","")}get isDefaultDatabase(){return this.database===hr}isEqual(t){return t instanceof wn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const bu="__type__",Kd="__max__",Jn={mapValue:{}},Su="__vector__",dr="value";function se(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Js(n)?4:Wd(n)?9007199254740991:Qd(n)?10:11:L()}function Ot(n,t){if(n===t)return!0;const e=se(n);if(e!==se(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return In(n).isEqual(In(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ne(s.timestampValue),l=ne(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return re(s.bytesValue).isEqual(re(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return Z(s.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(s.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Z(s.integerValue)===Z(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=Z(s.doubleValue),l=Z(o.doubleValue);return a===l?cr(a)===cr(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return Oe(n.arrayValue.values||[],t.arrayValue.values||[],Ot);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(ra(a)!==ra(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Ot(a[h],l[h])))return!1;return!0}(n,t);default:return L()}}function An(n,t){return(n.values||[]).find(e=>Ot(e,t))!==void 0}function xe(n,t){if(n===t)return 0;const e=se(n),r=se(t);if(e!==r)return F(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return F(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=Z(o.integerValue||o.doubleValue),h=Z(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,t);case 3:return ia(n.timestampValue,t.timestampValue);case 4:return ia(In(n),In(t));case 5:return Ps(n.stringValue,t.stringValue);case 6:return function(o,a){const l=re(o),h=re(a);return l.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let f=0;f<l.length&&f<h.length;f++){const g=F(l[f],h[f]);if(g!==0)return g}return F(l.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=F(Z(o.latitude),Z(a.latitude));return l!==0?l:F(Z(o.longitude),Z(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return oa(n.arrayValue,t.arrayValue);case 10:return function(o,a){var l,h,f,g;const w=o.fields||{},R=a.fields||{},b=(l=w[dr])===null||l===void 0?void 0:l.arrayValue,N=(h=R[dr])===null||h===void 0?void 0:h.arrayValue,O=F(((f=b==null?void 0:b.values)===null||f===void 0?void 0:f.length)||0,((g=N==null?void 0:N.values)===null||g===void 0?void 0:g.length)||0);return O!==0?O:oa(b,N)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Jn.mapValue&&a===Jn.mapValue)return 0;if(o===Jn.mapValue)return 1;if(a===Jn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),f=a.fields||{},g=Object.keys(f);h.sort(),g.sort();for(let w=0;w<h.length&&w<g.length;++w){const R=Ps(h[w],g[w]);if(R!==0)return R;const b=xe(l[h[w]],f[g[w]]);if(b!==0)return b}return F(h.length,g.length)}(n.mapValue,t.mapValue);default:throw L()}}function ia(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return F(n,t);const e=ne(n),r=ne(t),s=F(e.seconds,r.seconds);return s!==0?s:F(e.nanos,r.nanos)}function oa(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=xe(e[s],r[s]);if(o)return o}return F(e.length,r.length)}function Le(n){return Vs(n)}function Vs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ne(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return re(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Vs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Vs(e.fields[a])}`;return s+"}"}(n.mapValue):L()}function rr(n){switch(se(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Rr(n);return t?16+rr(t):16;case 5:return 2*n.stringValue.length;case 6:return re(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+rr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return ze(r.fields,(o,a)=>{s+=o.length+rr(a)}),s}(n.mapValue);default:throw L()}}function aa(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Ds(n){return!!n&&"integerValue"in n}function Zs(n){return!!n&&"arrayValue"in n}function ua(n){return!!n&&"nullValue"in n}function la(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ps(n){return!!n&&"mapValue"in n}function Qd(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[bu])===null||e===void 0?void 0:e.stringValue)===Su}function mn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ze(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=mn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=mn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Wd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Kd}/**
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
 */class Nt{constructor(t){this.value=t}static empty(){return new Nt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ps(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=mn(e)}setAll(t){let e=Et.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=mn(a):s.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());ps(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ot(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];ps(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){ze(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Nt(mn(this.value))}}/**
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
 */class yt{constructor(t,e,r,s,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new yt(t,0,x.min(),x.min(),x.min(),Nt.empty(),0)}static newFoundDocument(t,e,r,s){return new yt(t,1,e,x.min(),r,s,0)}static newNoDocument(t,e){return new yt(t,2,e,x.min(),x.min(),Nt.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,x.min(),x.min(),Nt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(x.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fr{constructor(t,e){this.position=t,this.inclusive=e}}function ca(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),e.key):r=xe(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ha(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ot(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Rn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Xd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Pu{}class nt extends Pu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Jd(t,e,r):e==="array-contains"?new ef(t,r):e==="in"?new nf(t,r):e==="not-in"?new rf(t,r):e==="array-contains-any"?new sf(t,r):new nt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Zd(t,r):new tf(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(xe(e,this.value)):e!==null&&se(this.value)===se(e)&&this.matchesComparison(xe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vt extends Pu{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Vt(t,e)}matches(t){return Vu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Vu(n){return n.op==="and"}function Du(n){return Yd(n)&&Vu(n)}function Yd(n){for(const t of n.filters)if(t instanceof Vt)return!1;return!0}function Ns(n){if(n instanceof nt)return n.field.canonicalString()+n.op.toString()+Le(n.value);if(Du(n))return n.filters.map(t=>Ns(t)).join(",");{const t=n.filters.map(e=>Ns(e)).join(",");return`${n.op}(${t})`}}function Nu(n,t){return n instanceof nt?function(r,s){return s instanceof nt&&r.op===s.op&&r.field.isEqual(s.field)&&Ot(r.value,s.value)}(n,t):n instanceof Vt?function(r,s){return s instanceof Vt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,l)=>o&&Nu(a,s.filters[l]),!0):!1}(n,t):void L()}function ku(n){return n instanceof nt?function(e){return`${e.field.canonicalString()} ${e.op} ${Le(e.value)}`}(n):n instanceof Vt?function(e){return e.op.toString()+" {"+e.getFilters().map(ku).join(" ,")+"}"}(n):"Filter"}class Jd extends nt{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class Zd extends nt{constructor(t,e){super(t,"in",e),this.keys=Mu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class tf extends nt{constructor(t,e){super(t,"not-in",e),this.keys=Mu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Mu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class ef extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Zs(e)&&An(e.arrayValue,this.value)}}class nf extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&An(this.value.arrayValue,e)}}class rf extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(An(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!An(this.value.arrayValue,e)}}class sf extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Zs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>An(this.value.arrayValue,r))}}/**
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
 */class of{constructor(t,e=null,r=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.le=null}}function da(n,t=null,e=[],r=[],s=null,o=null,a=null){return new of(n,t,e,r,s,o,a)}function ti(n){const t=q(n);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ns(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Ar(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Le(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Le(r)).join(",")),t.le=e}return t.le}function ei(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Xd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Nu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ha(n.startAt,t.startAt)&&ha(n.endAt,t.endAt)}function ks(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class He{constructor(t,e=null,r=[],s=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function af(n,t,e,r,s,o,a,l){return new He(n,t,e,r,s,o,a,l)}function Ou(n){return new He(n)}function fa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xu(n){return n.collectionGroup!==null}function gn(n){const t=q(n);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new rt(Et.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new Rn(o,r))}),e.has(Et.keyField().canonicalString())||t.he.push(new Rn(Et.keyField(),r))}return t.he}function Mt(n){const t=q(n);return t.Pe||(t.Pe=uf(t,gn(n))),t.Pe}function uf(n,t){if(n.limitType==="F")return da(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Rn(s.field,o)});const e=n.endAt?new fr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new fr(n.startAt.position,n.startAt.inclusive):null;return da(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ms(n,t){const e=n.filters.concat([t]);return new He(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function pr(n,t,e){return new He(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Cr(n,t){return ei(Mt(n),Mt(t))&&n.limitType===t.limitType}function Lu(n){return`${ti(Mt(n))}|lt:${n.limitType}`}function be(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>ku(s)).join(", ")}]`),Ar(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Le(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Le(s)).join(",")),`Target(${r})`}(Mt(n))}; limitType=${n.limitType})`}function br(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of gn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,l,h){const f=ca(a,l,h);return a.inclusive?f<=0:f<0}(r.startAt,gn(r),s)||r.endAt&&!function(a,l,h){const f=ca(a,l,h);return a.inclusive?f>=0:f>0}(r.endAt,gn(r),s))}(n,t)}function lf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Fu(n){return(t,e)=>{let r=!1;for(const s of gn(n)){const o=cf(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function cf(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,a,l){const h=a.data.field(o),f=l.data.field(o);return h!==null&&f!==null?xe(h,f):L()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L()}}/**
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
 */class ve{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ze(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return vu(this.inner)}size(){return this.innerSize}}/**
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
 */const hf=new tt(M.comparator);function ie(){return hf}const Uu=new tt(M.comparator);function fn(...n){let t=Uu;for(const e of n)t=t.insert(e.key,e);return t}function df(n){let t=Uu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function pe(){return _n()}function Bu(){return _n()}function _n(){return new ve(n=>n.toString(),(n,t)=>n.isEqual(t))}const ff=new rt(M.comparator);function $(...n){let t=ff;for(const e of n)t=t.add(e);return t}const pf=new rt(F);function mf(){return pf}/**
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
 */function ni(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cr(t)?"-0":t}}function qu(n){return{integerValue:""+n}}function gf(n,t){return $d(t)?qu(t):ni(n,t)}/**
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
 */class Sr{constructor(){this._=void 0}}function _f(n,t,e){return n instanceof Os?function(s,o){const a={fields:{[Au]:{stringValue:wu},[Cu]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Js(o)&&(o=Rr(o)),o&&(a.fields[Ru]=o),{mapValue:a}}(e,t):n instanceof mr?$u(n,t):n instanceof gr?ju(n,t):function(s,o){const a=Ef(s,o),l=pa(a)+pa(s.Ie);return Ds(a)&&Ds(s.Ie)?qu(l):ni(s.serializer,l)}(n,t)}function yf(n,t,e){return n instanceof mr?$u(n,t):n instanceof gr?ju(n,t):e}function Ef(n,t){return n instanceof xs?function(r){return Ds(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Os extends Sr{}class mr extends Sr{constructor(t){super(),this.elements=t}}function $u(n,t){const e=zu(t);for(const r of n.elements)e.some(s=>Ot(s,r))||e.push(r);return{arrayValue:{values:e}}}class gr extends Sr{constructor(t){super(),this.elements=t}}function ju(n,t){let e=zu(t);for(const r of n.elements)e=e.filter(s=>!Ot(s,r));return{arrayValue:{values:e}}}class xs extends Sr{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function pa(n){return Z(n.integerValue||n.doubleValue)}function zu(n){return Zs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Tf(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof mr&&s instanceof mr||r instanceof gr&&s instanceof gr?Oe(r.elements,s.elements,Ot):r instanceof xs&&s instanceof xs?Ot(r.Ie,s.Ie):r instanceof Os&&s instanceof Os}(n.transform,t.transform)}class _e{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new _e}static exists(t){return new _e(void 0,t)}static updateTime(t){return new _e(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function sr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ri{}function Hu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new If(n.key,_e.none()):new si(n.key,n.data,_e.none());{const e=n.data,r=Nt.empty();let s=new rt(Et.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Pr(n.key,r,new Wt(s.toArray()),_e.none())}}function vf(n,t,e){n instanceof si?function(s,o,a){const l=s.value.clone(),h=ga(s.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof Pr?function(s,o,a){if(!sr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=ga(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Gu(s)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function yn(n,t,e,r){return n instanceof si?function(o,a,l,h){if(!sr(o.precondition,a))return l;const f=o.value.clone(),g=_a(o.fieldTransforms,h,a);return f.setAll(g),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof Pr?function(o,a,l,h){if(!sr(o.precondition,a))return l;const f=_a(o.fieldTransforms,h,a),g=a.data;return g.setAll(Gu(o)),g.setAll(f),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,r):function(o,a,l){return sr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function ma(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Oe(r,s,(o,a)=>Tf(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class si extends ri{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Pr extends ri{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Gu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ga(n,t,e){const r=new Map;X(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,yf(a,l,e[s]))}return r}function _a(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,_f(o,a,t))}return r}class If extends ri{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wf{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&vf(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=yn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=yn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Bu();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const h=Hu(a,l);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(x.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),$())}isEqual(t){return this.batchId===t.batchId&&Oe(this.mutations,t.mutations,(e,r)=>ma(e,r))&&Oe(this.baseMutations,t.baseMutations,(e,r)=>ma(e,r))}}/**
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
 */class Af{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Rf{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var et,U;function Ku(n){if(n===void 0)return jt("GRPC error has no .code"),S.UNKNOWN;switch(n){case et.OK:return S.OK;case et.CANCELLED:return S.CANCELLED;case et.UNKNOWN:return S.UNKNOWN;case et.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case et.INTERNAL:return S.INTERNAL;case et.UNAVAILABLE:return S.UNAVAILABLE;case et.UNAUTHENTICATED:return S.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case et.NOT_FOUND:return S.NOT_FOUND;case et.ALREADY_EXISTS:return S.ALREADY_EXISTS;case et.PERMISSION_DENIED:return S.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case et.ABORTED:return S.ABORTED;case et.OUT_OF_RANGE:return S.OUT_OF_RANGE;case et.UNIMPLEMENTED:return S.UNIMPLEMENTED;case et.DATA_LOSS:return S.DATA_LOSS;default:return L()}}(U=et||(et={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Cf=new Zt([4294967295,4294967295],0);function ya(n){const t=Ss().encode(n),e=new fu;return e.update(t),new Uint8Array(e.digest())}function Ea(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Zt([e,r],0),new Zt([s,o],0)]}class ii{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new pn(`Invalid padding: ${e}`);if(r<0)throw new pn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new pn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new pn(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=Zt.fromNumber(this.Ee)}Ae(t,e,r){let s=t.add(e.multiply(Zt.fromNumber(r)));return s.compare(Cf)===1&&(s=new Zt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=ya(t),[r,s]=Ea(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(r,s,o);if(!this.Re(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new ii(o,s,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ee===0)return;const e=ya(t),[r,s]=Ea(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(r,s,o);this.Ve(a)}}Ve(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class pn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Vr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,bn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Vr(x.min(),s,new tt(F),ie(),$())}}class bn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new bn(r,e,$(),$(),$())}}/**
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
 */class ir{constructor(t,e,r,s){this.me=t,this.removedTargetIds=e,this.key=r,this.fe=s}}class Qu{constructor(t,e){this.targetId=t,this.ge=e}}class Wu{constructor(t,e,r=ht.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Ta{constructor(){this.pe=0,this.ye=va(),this.we=ht.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=$(),e=$(),r=$();return this.ye.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:L()}}),new bn(this.we,this.Se,t,e,r)}Me(){this.be=!1,this.ye=va()}xe(t,e){this.be=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,X(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class bf{constructor(t){this.ke=t,this.qe=new Map,this.Qe=ie(),this.$e=Zn(),this.Ue=Zn(),this.Ke=new tt(F)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,e=>{const r=this.He(e);switch(t.state){case 0:this.Je(e)&&r.Ce(t.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(t.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(e);break;case 3:this.Je(e)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),r.Ce(t.resumeToken));break;default:L()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach((r,s)=>{this.Je(s)&&e(s)})}Ze(t){const e=t.targetId,r=t.ge.count,s=this.Xe(e);if(s){const o=s.target;if(ks(o))if(r===0){const a=new M(o.path);this.ze(e,a,yt.newNoDocument(a,x.min()))}else X(r===1);else{const a=this.et(e);if(a!==r){const l=this.tt(t),h=l?this.nt(l,t,a):1;if(h!==0){this.Ye(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,f)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=re(r).toUint8Array()}catch(h){if(h instanceof Iu)return Me("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new ii(a,s,o)}catch(h){return Me(h instanceof pn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.Ee===0?null:l}nt(t,e,r){return e.ge.count===r-this.st(t,e.targetId)?0:2}st(t,e){const r=this.ke.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.ke.it(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.ze(e,o,null),s++)}),s}ot(t){const e=new Map;this.qe.forEach((o,a)=>{const l=this.Xe(a);if(l){if(o.current&&ks(l.target)){const h=new M(l.target.path);this._t(h).has(a)||this.ut(a,h)||this.ze(a,h,yt.newNoDocument(h,t))}o.ve&&(e.set(a,o.Fe()),o.Me())}});let r=$();this.Ue.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const f=this.Xe(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.Qe.forEach((o,a)=>a.setReadTime(t));const s=new Vr(t,e,this.Ke,this.Qe,r);return this.Qe=ie(),this.$e=Zn(),this.Ue=Zn(),this.Ke=new tt(F),s}Ge(t,e){if(!this.Je(t))return;const r=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,r),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}ze(t,e,r){if(!this.Je(t))return;const s=this.He(t);this.ut(t,e)?s.xe(e,1):s.Oe(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),this.Ue=this.Ue.insert(e,this.ct(e).add(t)),r&&(this.Qe=this.Qe.insert(e,r))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new Ta,this.qe.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new rt(F),this.Ue=this.Ue.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new rt(F),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||V("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new Ta),this.ke.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function Zn(){return new tt(M.comparator)}function va(){return new tt(M.comparator)}const Sf={asc:"ASCENDING",desc:"DESCENDING"},Pf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Vf={and:"AND",or:"OR"};class Df{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ls(n,t){return n.useProto3Json||Ar(t)?t:{value:t}}function Fs(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Xu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ve(n){return X(!!n),x.fromTimestamp(function(e){const r=ne(e);return new ot(r.seconds,r.nanos)}(n))}function Yu(n,t){return Us(n,t).canonicalString()}function Us(n,t){const e=function(s){return new W(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Ju(n){const t=W.fromString(n);return X(rl(t)),t}function ms(n,t){const e=Ju(t);if(e.get(1)!==n.databaseId.projectId)throw new D(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new D(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(tl(e))}function Zu(n,t){return Yu(n.databaseId,t)}function Nf(n){const t=Ju(n);return t.length===4?W.emptyPath():tl(t)}function Ia(n){return new W(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function tl(n){return X(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function kf(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,g){return f.useProto3Json?(X(g===void 0||typeof g=="string"),ht.fromBase64String(g||"")):(X(g===void 0||g instanceof Buffer||g instanceof Uint8Array),ht.fromUint8Array(g||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(f){const g=f.code===void 0?S.UNKNOWN:Ku(f.code);return new D(g,f.message||"")}(a);e=new Wu(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ms(n,r.document.name),o=Ve(r.document.updateTime),a=r.document.createTime?Ve(r.document.createTime):x.min(),l=new Nt({mapValue:{fields:r.document.fields}}),h=yt.newFoundDocument(s,o,a,l),f=r.targetIds||[],g=r.removedTargetIds||[];e=new ir(f,g,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ms(n,r.document),o=r.readTime?Ve(r.readTime):x.min(),a=yt.newNoDocument(s,o),l=r.removedTargetIds||[];e=new ir([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ms(n,r.document),o=r.removedTargetIds||[];e=new ir([],o,s,null)}else{if(!("filter"in t))return L();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Rf(s,o),l=r.targetId;e=new Qu(l,a)}}return e}function Mf(n,t){return{documents:[Zu(n,t.path)]}}function Of(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Zu(n,s);const o=function(f){if(f.length!==0)return nl(Vt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(g=>function(R){return{field:Se(R.field),direction:Ff(R.dir)}}(g))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Ls(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ht:e,parent:s}}function xf(n){let t=Nf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){X(r===1);const g=e.from[0];g.allDescendants?s=g.collectionId:t=t.child(g.collectionId)}let o=[];e.where&&(o=function(w){const R=el(w);return R instanceof Vt&&Du(R)?R.getFilters():[R]}(e.where));let a=[];e.orderBy&&(a=function(w){return w.map(R=>function(N){return new Rn(Pe(N.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(R))}(e.orderBy));let l=null;e.limit&&(l=function(w){let R;return R=typeof w=="object"?w.value:w,Ar(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(w){const R=!!w.before,b=w.values||[];return new fr(b,R)}(e.startAt));let f=null;return e.endAt&&(f=function(w){const R=!w.before,b=w.values||[];return new fr(b,R)}(e.endAt)),af(t,s,a,o,l,"F",h,f)}function Lf(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function el(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Pe(e.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Pe(e.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Pe(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Pe(e.unaryFilter.field);return nt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(n):n.fieldFilter!==void 0?function(e){return nt.create(Pe(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Vt.create(e.compositeFilter.filters.map(r=>el(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(n):L()}function Ff(n){return Sf[n]}function Uf(n){return Pf[n]}function Bf(n){return Vf[n]}function Se(n){return{fieldPath:n.canonicalString()}}function Pe(n){return Et.fromServerFormat(n.fieldPath)}function nl(n){return n instanceof nt?function(e){if(e.op==="=="){if(la(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NAN"}};if(ua(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(la(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NOT_NAN"}};if(ua(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Se(e.field),op:Uf(e.op),value:e.value}}}(n):n instanceof Vt?function(e){const r=e.getFilters().map(s=>nl(s));return r.length===1?r[0]:{compositeFilter:{op:Bf(e.op),filters:r}}}(n):L()}function rl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Xt{constructor(t,e,r,s,o=x.min(),a=x.min(),l=ht.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new Xt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class qf{constructor(t){this.Tt=t}}function $f(n){const t=xf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?pr(t,t.limit,"L"):t}/**
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
 */class jf{constructor(){this.Tn=new zf}addToCollectionParentIndex(t,e){return this.Tn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(ee.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(ee.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class zf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new rt(W.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new rt(W.comparator)).toArray()}}/**
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
 */const wa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},sl=41943040;class It{static withCacheSize(t){return new It(t,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(sl,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
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
 */class Fe{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new Fe(0)}static Kn(){return new Fe(-1)}}/**
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
 */const Aa="LruGarbageCollector",Hf=1048576;function Ra([n,t],[e,r]){const s=F(n,e);return s===0?F(t,r):s}class Gf{constructor(t){this.Hn=t,this.buffer=new rt(Ra),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Ra(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Kf{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){V(Aa,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){je(e)?V(Aa,"Ignoring IndexedDB error during garbage collection: ",e):await Ir(e)}await this.er(3e5)})}}class Qf{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return C.resolve(wr.ae);const r=new Gf(e);return this.tr.forEachTarget(t,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(t,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.tr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(wa)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wa):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let r,s,o,a,l,h,f;const g=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,a=Date.now(),this.nthSequenceNumber(t,s))).next(w=>(r=w,l=Date.now(),this.removeTargets(t,r,e))).next(w=>(o=w,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(w=>(f=Date.now(),Ce()<=B.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-g}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${w} documents in `+(f-h)+`ms
Total Duration: ${f-g}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:w})))}}function Wf(n,t){return new Qf(n,t)}/**
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
 */class Xf{constructor(){this.changes=new ve(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,yt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Yf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Jf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&yn(r.mutation,s,Wt.empty(),ot.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,$()).next(()=>r))}getLocalViewOfDocuments(t,e,r=$()){const s=pe();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=fn();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=pe();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,$()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,s){let o=ie();const a=_n(),l=function(){return _n()}();return e.forEach((h,f)=>{const g=r.get(f.key);s.has(f.key)&&(g===void 0||g.mutation instanceof Pr)?o=o.insert(f.key,f):g!==void 0?(a.set(f.key,g.mutation.getFieldMask()),yn(g.mutation,f,g.mutation.getFieldMask(),ot.now())):a.set(f.key,Wt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,g)=>a.set(f,g)),e.forEach((f,g)=>{var w;return l.set(f,new Yf(g,(w=a.get(f))!==null&&w!==void 0?w:null))}),l))}recalculateAndSaveOverlays(t,e){const r=_n();let s=new tt((a,l)=>a-l),o=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let g=r.get(h)||Wt.empty();g=l.applyToLocalView(f,g),r.set(h,g);const w=(s.get(l.batchId)||$()).add(h);s=s.insert(l.batchId,w)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,g=h.value,w=Bu();g.forEach(R=>{if(!o.has(R)){const b=Hu(e.get(R),r.get(R));b!==null&&w.set(R,b),o=o.add(R)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,w))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):xu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):C.resolve(pe());let l=vn,h=o;return a.next(f=>C.forEach(f,(g,w)=>(l<w.largestBatchId&&(l=w.largestBatchId),o.get(g)?C.resolve():this.remoteDocumentCache.getEntry(t,g).next(R=>{h=h.insert(g,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,$())).next(g=>({batchId:l,changes:df(g)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let s=fn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=fn();return this.indexManager.getCollectionParents(t,o).next(l=>C.forEach(l,h=>{const f=function(w,R){return new He(R,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(g=>{g.forEach((w,R)=>{a=a.insert(w,R)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,f)=>{const g=f.getKey();a.get(g)===null&&(a=a.insert(g,yt.newInvalidDocument(g)))});let l=fn();return a.forEach((h,f)=>{const g=o.get(h);g!==void 0&&yn(g.mutation,f,Wt.empty(),ot.now()),br(e,f)&&(l=l.insert(h,f))}),l})}}/**
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
 */class Zf{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return C.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Ve(s.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(s){return{name:s.name,query:$f(s.bundledQuery),readTime:Ve(s.readTime)}}(e)),C.resolve()}}/**
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
 */class tp{constructor(){this.overlays=new tt(M.comparator),this.Rr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=pe();return C.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.Et(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const s=pe(),o=e.length+1,a=new M(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new tt((f,g)=>f-g);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let g=o.get(f.largestBatchId);g===null&&(g=pe(),o=o.insert(f.largestBatchId,g)),g.set(f.getKey(),f)}}const l=pe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,g)=>l.set(f,g)),!(l.size()>=s)););return C.resolve(l)}Et(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Af(e,r));let o=this.Rr.get(e);o===void 0&&(o=$(),this.Rr.set(e,o)),this.Rr.set(e,o.add(r.key))}}/**
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
 */class ep{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
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
 */class oi{constructor(){this.Vr=new rt(it.mr),this.gr=new rt(it.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const r=new it(t,e);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.wr(new it(t,e))}Sr(t,e){t.forEach(r=>this.removeReference(r,e))}br(t){const e=new M(new W([])),r=new it(e,t),s=new it(e,t+1),o=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),o.push(a.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new M(new W([])),r=new it(e,t),s=new it(e,t+1);let o=$();return this.gr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new it(t,0),r=this.Vr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class it{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return M.comparator(t.key,e.key)||F(t.Cr,e.Cr)}static pr(t,e){return F(t.Cr,e.Cr)||M.comparator(t.key,e.key)}}/**
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
 */class np{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new rt(it.mr)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new wf(o,e,r,s);this.mutationQueue.push(a);for(const l of s)this.Mr=this.Mr.add(new it(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Nr(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?qd:this.Fr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new it(e,0),s=new it(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,s],a=>{const l=this.Or(a.Cr);o.push(l)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new rt(F);return e.forEach(s=>{const o=new it(s,0),a=new it(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,a],l=>{r=r.add(l.Cr)})}),C.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new it(new M(o),0);let l=new rt(F);return this.Mr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(h.Cr)),!0)},a),C.resolve(this.Br(l))}Br(t){const e=[];return t.forEach(r=>{const s=this.Or(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){X(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return C.forEach(e.mutations,s=>{const o=new it(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,e){const r=new it(e,0),s=this.Mr.firstAfterOrEqual(r);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class rp{constructor(t){this.kr=t,this.docs=function(){return new tt(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.kr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(e))}getEntries(t,e){let r=ie();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():yt.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=ie();const a=e.path,l=new M(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:g}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Ld(xd(g),r)<=0||(s.has(g.key)||br(e,g))&&(o=o.insert(g.key,g.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,s){L()}qr(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new sp(this)}getSize(t){return C.resolve(this.size)}}class sp extends Xf{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Ir.addEntry(t,s)):this.Ir.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
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
 */class ip{constructor(t){this.persistence=t,this.Qr=new ve(e=>ti(e),ei),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.$r=0,this.Ur=new oi,this.targetCount=0,this.Kr=Fe.Un()}forEachTarget(t,e){return this.Qr.forEach((r,s)=>e(s)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.$r&&(this.$r=e),C.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new Fe(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.zn(e),C.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Qr.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Qr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.Qr.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.Ur.yr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.Ur.Sr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Ur.vr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.Ur.containsKey(e))}}/**
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
 */class il{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new wr(0),this.zr=!1,this.zr=!0,this.jr=new ep,this.referenceDelegate=t(this),this.Hr=new ip(this),this.indexManager=new jf,this.remoteDocumentCache=function(s){return new rp(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new qf(e),this.Yr=new Zf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new tp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Wr[t.toKey()];return r||(r=new np(e,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,r){V("MemoryPersistence","Starting transaction:",t);const s=new op(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(o=>this.referenceDelegate.Xr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}ei(t,e){return C.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,e)))}}class op extends Ud{constructor(t){super(),this.currentSequenceNumber=t}}class ai{constructor(t){this.persistence=t,this.ti=new oi,this.ni=null}static ri(t){return new ai(t)}get ii(){if(this.ni)return this.ni;throw L()}addReference(t,e,r){return this.ti.addReference(r,e),this.ii.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.ti.removeReference(r,e),this.ii.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),C.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.ii,r=>{const s=M.fromPath(r);return this.si(t,s).next(o=>{o||e.removeEntry(s,x.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(r=>{r?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return C.or([()=>C.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class _r{constructor(t,e){this.persistence=t,this.oi=new ve(r=>jd(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Wf(this,e)}static ri(t,e){return new _r(t,e)}Zr(){}Xr(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}sr(t){let e=0;return this.rr(t,r=>{e++}).next(()=>e)}rr(t,e){return C.forEach(this.oi,(r,s)=>this.ar(t,r,s).next(o=>o?C.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.qr(t,a=>this.ar(t,a,e).next(l=>{l||(r++,o.removeEntry(a,x.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),C.resolve()}removeReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),C.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=rr(t.data.value)),e}ar(t,e,r){return C.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.oi.get(e);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class ui{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Hi=r,this.Ji=s}static Yi(t,e){let r=$(),s=$();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ui(t,e.fromCache,r,s)}}/**
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
 */class ap{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class up{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return oh()?8:Bd(rh())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.rs(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ss(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new ap;return this._s(t,e,a).next(l=>{if(o.result=l,this.Xi)return this.us(t,e,a,l.size)})}).next(()=>o.result)}us(t,e,r,s){return r.documentReadCount<this.es?(Ce()<=B.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",be(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),C.resolve()):(Ce()<=B.DEBUG&&V("QueryEngine","Query:",be(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Ce()<=B.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",be(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Mt(e))):C.resolve())}rs(t,e){if(fa(e))return C.resolve(null);let r=Mt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=pr(e,null,"F"),r=Mt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=$(...o);return this.ns.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.cs(e,l);return this.ls(e,f,a,h.readTime)?this.rs(t,pr(e,null,"F")):this.hs(t,f,e,h)}))})))}ss(t,e,r,s){return fa(e)||s.isEqual(x.min())?C.resolve(null):this.ns.getDocuments(t,r).next(o=>{const a=this.cs(e,o);return this.ls(e,a,r,s)?C.resolve(null):(Ce()<=B.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),be(e)),this.hs(t,a,e,Od(s,vn)).next(l=>l))})}cs(t,e){let r=new rt(Fu(t));return e.forEach((s,o)=>{br(t,o)&&(r=r.add(o))}),r}ls(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}_s(t,e,r){return Ce()<=B.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",be(e)),this.ns.getDocumentsMatchingQuery(t,e,ee.min(),r)}hs(t,e,r,s){return this.ns.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const li="LocalStore",lp=3e8;class cp{constructor(t,e,r,s){this.persistence=t,this.Ps=e,this.serializer=s,this.Ts=new tt(F),this.Is=new ve(o=>ti(o),ei),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Jf(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function hp(n,t,e,r){return new cp(n,t,e,r)}async function ol(n,t){const e=q(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.As(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let h=$();for(const f of s){a.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}for(const f of o){l.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}return e.localDocuments.getDocuments(r,h).next(f=>({Rs:f,removedBatchIds:a,addedBatchIds:l}))})})}function al(n){const t=q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function dp(n,t){const e=q(n),r=t.snapshotVersion;let s=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.ds.newChangeBuffer({trackRemovals:!0});s=e.Ts;const l=[];t.targetChanges.forEach((g,w)=>{const R=s.get(w);if(!R)return;l.push(e.Hr.removeMatchingKeys(o,g.removedDocuments,w).next(()=>e.Hr.addMatchingKeys(o,g.addedDocuments,w)));let b=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?b=b.withResumeToken(ht.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):g.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(g.resumeToken,r)),s=s.insert(w,b),function(O,k,J){return O.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=lp?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0}(R,b,g)&&l.push(e.Hr.updateTargetData(o,b))});let h=ie(),f=$();if(t.documentUpdates.forEach(g=>{t.resolvedLimboDocuments.has(g)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,g))}),l.push(fp(o,a,t.documentUpdates).next(g=>{h=g.Vs,f=g.fs})),!r.isEqual(x.min())){const g=e.Hr.getLastRemoteSnapshotVersion(o).next(w=>e.Hr.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(g)}return C.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.Ts=s,o))}function fp(n,t,e){let r=$(),s=$();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=ie();return e.forEach((l,h)=>{const f=o.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(x.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):V(li,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)}),{Vs:a,fs:s}})}function pp(n,t){const e=q(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Hr.getTargetData(r,t).next(o=>o?(s=o,C.resolve(s)):e.Hr.allocateTargetId(r).next(a=>(s=new Xt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(r.targetId,r),e.Is.set(t,r.targetId)),r})}async function Bs(n,t,e){const r=q(n),s=r.Ts.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!je(a))throw a;V(li,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ts=r.Ts.remove(t),r.Is.delete(s.target)}function Ca(n,t,e){const r=q(n);let s=x.min(),o=$();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,g){const w=q(h),R=w.Is.get(g);return R!==void 0?C.resolve(w.Ts.get(R)):w.Hr.getTargetData(f,g)}(r,a,Mt(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,t,e?s:x.min(),e?o:$())).next(l=>(mp(r,lf(t),l),{documents:l,gs:o})))}function mp(n,t,e){let r=n.Es.get(t)||x.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Es.set(t,r)}class ba{constructor(){this.activeTargetIds=mf()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class gp{constructor(){this.ho=new ba,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,r){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new ba,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class _p{To(t){}shutdown(){}}/**
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
 */const Sa="ConnectivityMonitor";class Pa{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){V(Sa,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){V(Sa,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let tr=null;function qs(){return tr===null?tr=function(){return 268435456+Math.round(2147483648*Math.random())}():tr++,"0x"+tr.toString(16)}/**
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
 */const gs="RestConnection",yp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ep{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===hr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(t,e,r,s,o){const a=qs(),l=this.bo(t,e.toUriEncodedString());V(gs,`Sending RPC '${t}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(h,s,o),this.vo(t,l,h,r).then(f=>(V(gs,`Received RPC '${t}' ${a}: `,f),f),f=>{throw Me(gs,`RPC '${t}' ${a} failed with error: `,f,"url: ",l,"request:",r),f})}Co(t,e,r,s,o,a){return this.So(t,e,r,s,o)}Do(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$e}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}bo(t,e){const r=yp[t];return`${this.po}/v1/${e}:${r}`}terminate(){}}/**
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
 */class Tp{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
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
 */const gt="WebChannelConnection";class vp extends Ep{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,r,s){const o=qs();return new Promise((a,l)=>{const h=new pu;h.setWithCredentials(!0),h.listenOnce(mu.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case nr.NO_ERROR:const g=h.getResponseJson();V(gt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(g)),a(g);break;case nr.TIMEOUT:V(gt,`RPC '${t}' ${o} timed out`),l(new D(S.DEADLINE_EXCEEDED,"Request time out"));break;case nr.HTTP_ERROR:const w=h.getStatus();if(V(gt,`RPC '${t}' ${o} failed with status:`,w,"response text:",h.getResponseText()),w>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const b=R==null?void 0:R.error;if(b&&b.status&&b.message){const N=function(k){const J=k.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(J)>=0?J:S.UNKNOWN}(b.status);l(new D(N,b.message))}else l(new D(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new D(S.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{V(gt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);V(gt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,r,15)})}Wo(t,e,r){const s=qs(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=yu(),l=_u(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Do(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const g=o.join("");V(gt,`Creating RPC '${t}' stream ${s}: ${g}`,h);const w=a.createWebChannel(g,h);let R=!1,b=!1;const N=new Tp({Fo:k=>{b?V(gt,`Not sending because RPC '${t}' stream ${s} is closed:`,k):(R||(V(gt,`Opening RPC '${t}' stream ${s} transport.`),w.open(),R=!0),V(gt,`RPC '${t}' stream ${s} sending:`,k),w.send(k))},Mo:()=>w.close()}),O=(k,J,K)=>{k.listen(J,G=>{try{K(G)}catch(st){setTimeout(()=>{throw st},0)}})};return O(w,dn.EventType.OPEN,()=>{b||(V(gt,`RPC '${t}' stream ${s} transport opened.`),N.Qo())}),O(w,dn.EventType.CLOSE,()=>{b||(b=!0,V(gt,`RPC '${t}' stream ${s} transport closed`),N.Uo())}),O(w,dn.EventType.ERROR,k=>{b||(b=!0,Me(gt,`RPC '${t}' stream ${s} transport errored:`,k),N.Uo(new D(S.UNAVAILABLE,"The operation could not be completed")))}),O(w,dn.EventType.MESSAGE,k=>{var J;if(!b){const K=k.data[0];X(!!K);const G=K,st=(G==null?void 0:G.error)||((J=G[0])===null||J===void 0?void 0:J.error);if(st){V(gt,`RPC '${t}' stream ${s} received error:`,st);const xt=st.status;let at=function(_){const y=et[_];if(y!==void 0)return Ku(y)}(xt),T=st.message;at===void 0&&(at=S.INTERNAL,T="Unknown error status: "+xt+" with message "+st.message),b=!0,N.Uo(new D(at,T)),w.close()}else V(gt,`RPC '${t}' stream ${s} received:`,K),N.Ko(K)}}),O(l,gu.STAT_EVENT,k=>{k.stat===bs.PROXY?V(gt,`RPC '${t}' stream ${s} detected buffering proxy`):k.stat===bs.NOPROXY&&V(gt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.$o()},0),N}}function _s(){return typeof document<"u"?document:null}/**
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
 */function Dr(n){return new Df(n,!0)}/**
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
 */class ul{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=r,this.zo=s,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,e-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Va="PersistentStream";class Ip{constructor(t,e,r,s,o,a,l,h){this.Ti=t,this.n_=r,this.r_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new ul(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(jt(e.toString()),jt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===e&&this.V_(r,s)},r=>{t(()=>{const s=new D(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(t,e){const r=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return V(Va,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(V(Va,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wp extends Ip{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=kf(this.serializer,t),r=function(o){if(!("targetChange"in o))return x.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?x.min():a.readTime?Ve(a.readTime):x.min()}(t);return this.listener.p_(e,r)}y_(t){const e={};e.database=Ia(this.serializer),e.addTarget=function(o,a){let l;const h=a.target;if(l=ks(h)?{documents:Mf(o,h)}:{query:Of(o,h).ht},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Xu(o,a.resumeToken);const f=Ls(o,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(x.min())>0){l.readTime=Fs(o,a.snapshotVersion.toTimestamp());const f=Ls(o,a.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const r=Lf(this.serializer,t);r&&(e.labels=r),this.I_(e)}w_(t){const e={};e.database=Ia(this.serializer),e.removeTarget=t,this.I_(e)}}/**
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
 */class Ap{}class Rp extends Ap{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.So(t,Us(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(S.UNKNOWN,o.toString())})}Co(t,e,r,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Co(t,Us(e,r),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(S.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Cp{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(jt(e),this.N_=!1):V("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const Ue="RemoteStore";class bp{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(a=>{r.enqueueAndForget(async()=>{Pn(this)&&(V(Ue,"Restarting streams for network reachability change."),await async function(h){const f=q(h);f.W_.add(4),await Sn(f),f.j_.set("Unknown"),f.W_.delete(4),await Nr(f)}(this))})}),this.j_=new Cp(r,s)}}async function Nr(n){if(Pn(n))for(const t of n.G_)await t(!0)}async function Sn(n){for(const t of n.G_)await t(!1)}function ll(n,t){const e=q(n);e.K_.has(t.targetId)||(e.K_.set(t.targetId,t),fi(e)?di(e):Ge(e).c_()&&hi(e,t))}function ci(n,t){const e=q(n),r=Ge(e);e.K_.delete(t),r.c_()&&cl(e,t),e.K_.size===0&&(r.c_()?r.P_():Pn(e)&&e.j_.set("Unknown"))}function hi(n,t){if(n.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(x.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ge(n).y_(t)}function cl(n,t){n.H_.Ne(t),Ge(n).w_(t)}function di(n){n.H_=new bf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>n.K_.get(t)||null,it:()=>n.datastore.serializer.databaseId}),Ge(n).start(),n.j_.B_()}function fi(n){return Pn(n)&&!Ge(n).u_()&&n.K_.size>0}function Pn(n){return q(n).W_.size===0}function hl(n){n.H_=void 0}async function Sp(n){n.j_.set("Online")}async function Pp(n){n.K_.forEach((t,e)=>{hi(n,t)})}async function Vp(n,t){hl(n),fi(n)?(n.j_.q_(t),di(n)):n.j_.set("Unknown")}async function Dp(n,t,e){if(n.j_.set("Online"),t instanceof Wu&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const l of o.targetIds)s.K_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.K_.delete(l),s.H_.removeTarget(l))}(n,t)}catch(r){V(Ue,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Da(n,r)}else if(t instanceof ir?n.H_.We(t):t instanceof Qu?n.H_.Ze(t):n.H_.je(t),!e.isEqual(x.min()))try{const r=await al(n.localStore);e.compareTo(r)>=0&&await function(o,a){const l=o.H_.ot(a);return l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const g=o.K_.get(f);g&&o.K_.set(f,g.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,f)=>{const g=o.K_.get(h);if(!g)return;o.K_.set(h,g.withResumeToken(ht.EMPTY_BYTE_STRING,g.snapshotVersion)),cl(o,h);const w=new Xt(g.target,h,f,g.sequenceNumber);hi(o,w)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){V(Ue,"Failed to raise snapshot:",r),await Da(n,r)}}async function Da(n,t,e){if(!je(t))throw t;n.W_.add(1),await Sn(n),n.j_.set("Offline"),e||(e=()=>al(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V(Ue,"Retrying IndexedDB access"),await e(),n.W_.delete(1),await Nr(n)})}async function Na(n,t){const e=q(n);e.asyncQueue.verifyOperationInProgress(),V(Ue,"RemoteStore received new credentials");const r=Pn(e);e.W_.add(3),await Sn(e),r&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await Nr(e)}async function Np(n,t){const e=q(n);t?(e.W_.delete(2),await Nr(e)):t||(e.W_.add(2),await Sn(e),e.j_.set("Unknown"))}function Ge(n){return n.J_||(n.J_=function(e,r,s){const o=q(e);return o.M_(),new wp(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{xo:Sp.bind(null,n),No:Pp.bind(null,n),Lo:Vp.bind(null,n),p_:Dp.bind(null,n)}),n.G_.push(async t=>{t?(n.J_.h_(),fi(n)?di(n):n.j_.set("Unknown")):(await n.J_.stop(),hl(n))})),n.J_}/**
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
 */class pi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new ge,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,l=new pi(t,e,a,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dl(n,t){if(jt("AsyncQueue",`${t}: ${n}`),je(n))return new D(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class De{static emptySet(t){return new De(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=fn(),this.sortedSet=new tt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof De)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new De;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class ka{constructor(){this.Z_=new tt(M.comparator)}track(t){const e=t.doc.key,r=this.Z_.get(e);r?t.type!==0&&r.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&r.type!==1?this.Z_=this.Z_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Z_=this.Z_.remove(e):t.type===1&&r.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):L():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Be{constructor(t,e,r,s,o,a,l,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new Be(t,e,De.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Cr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class kp{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class Mp{constructor(){this.queries=Ma(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,r){const s=q(e),o=s.queries;s.queries=Ma(),o.forEach((a,l)=>{for(const h of l.ta)h.onError(r)})})(this,new D(S.ABORTED,"Firestore shutting down"))}}function Ma(){return new ve(n=>Lu(n),Cr)}async function Op(n,t){const e=q(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.na()&&t.ra()&&(r=2):(o=new kp,r=t.ra()?0:1);try{switch(r){case 0:o.ea=await e.onListen(s,!0);break;case 1:o.ea=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=dl(a,`Initialization of query '${be(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.ta.push(t),t.sa(e.onlineState),o.ea&&t.oa(o.ea)&&mi(e)}async function xp(n,t){const e=q(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.ta.indexOf(t);a>=0&&(o.ta.splice(a,1),o.ta.length===0?s=t.ra()?0:1:!o.na()&&t.ra()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Lp(n,t){const e=q(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.ta)l.oa(s)&&(r=!0);a.ea=s}}r&&mi(e)}function Fp(n,t,e){const r=q(n),s=r.queries.get(t);if(s)for(const o of s.ta)o.onError(e);r.queries.delete(t)}function mi(n){n.ia.forEach(t=>{t.next()})}var $s,Oa;(Oa=$s||($s={}))._a="default",Oa.Cache="cache";class Up{constructor(t,e,r){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Be(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const r=e!=="Offline";return(!this.options.Ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=Be.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==$s.Cache}}/**
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
 */class fl{constructor(t){this.key=t}}class pl{constructor(t){this.key=t}}class Bp{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=$(),this.mutatedKeys=$(),this.ya=Fu(t),this.wa=new De(this.ya)}get Sa(){return this.fa}ba(t,e){const r=e?e.Da:new ka,s=e?e.wa:this.wa;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((g,w)=>{const R=s.get(g),b=br(this.query,w)?w:null,N=!!R&&this.mutatedKeys.has(R.key),O=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let k=!1;R&&b?R.data.isEqual(b.data)?N!==O&&(r.track({type:3,doc:b}),k=!0):this.va(R,b)||(r.track({type:2,doc:b}),k=!0,(h&&this.ya(b,h)>0||f&&this.ya(b,f)<0)&&(l=!0)):!R&&b?(r.track({type:0,doc:b}),k=!0):R&&!b&&(r.track({type:1,doc:R}),k=!0,(h||f)&&(l=!0)),k&&(b?(a=a.add(b),o=O?o.add(g):o.delete(g)):(a=a.delete(g),o=o.delete(g)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),o=o.delete(g.key),r.track({type:1,doc:g})}return{wa:a,Da:r,ls:l,mutatedKeys:o}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const a=t.Da.X_();a.sort((g,w)=>function(b,N){const O=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return O(b)-O(N)}(g.type,w.type)||this.ya(g.doc,w.doc)),this.Ca(r),s=s!=null&&s;const l=e&&!s?this.Fa():[],h=this.pa.size===0&&this.current&&!s?1:0,f=h!==this.ga;return this.ga=h,a.length!==0||f?{snapshot:new Be(this.query,t.wa,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new ka,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=$(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const e=[];return t.forEach(r=>{this.pa.has(r)||e.push(new pl(r))}),this.pa.forEach(r=>{t.has(r)||e.push(new fl(r))}),e}Oa(t){this.fa=t.gs,this.pa=$();const e=this.ba(t.documents);return this.applyChanges(e,!0)}Na(){return Be.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const gi="SyncEngine";class qp{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class $p{constructor(t){this.key=t,this.Ba=!1}}class jp{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new ve(l=>Lu(l),Cr),this.qa=new Map,this.Qa=new Set,this.$a=new tt(M.comparator),this.Ua=new Map,this.Ka=new oi,this.Wa={},this.Ga=new Map,this.za=Fe.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function zp(n,t,e=!0){const r=El(n);let s;const o=r.ka.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Na()):s=await ml(r,t,e,!0),s}async function Hp(n,t){const e=El(n);await ml(e,t,!0,!1)}async function ml(n,t,e,r){const s=await pp(n.localStore,Mt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await Gp(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&ll(n.remoteStore,s),l}async function Gp(n,t,e,r,s){n.Ha=(w,R,b)=>async function(O,k,J,K){let G=k.view.ba(J);G.ls&&(G=await Ca(O.localStore,k.query,!1).then(({documents:T})=>k.view.ba(T,G)));const st=K&&K.targetChanges.get(k.targetId),xt=K&&K.targetMismatches.get(k.targetId)!=null,at=k.view.applyChanges(G,O.isPrimaryClient,st,xt);return La(O,k.targetId,at.Ma),at.snapshot}(n,w,R,b);const o=await Ca(n.localStore,t,!0),a=new Bp(t,o.gs),l=a.ba(o.documents),h=bn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(l,n.isPrimaryClient,h);La(n,e,f.Ma);const g=new qp(t,e,a);return n.ka.set(t,g),n.qa.has(e)?n.qa.get(e).push(t):n.qa.set(e,[t]),f.snapshot}async function Kp(n,t,e){const r=q(n),s=r.ka.get(t),o=r.qa.get(s.targetId);if(o.length>1)return r.qa.set(s.targetId,o.filter(a=>!Cr(a,t))),void r.ka.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Bs(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&ci(r.remoteStore,s.targetId),js(r,s.targetId)}).catch(Ir)):(js(r,s.targetId),await Bs(r.localStore,s.targetId,!0))}async function Qp(n,t){const e=q(n),r=e.ka.get(t),s=e.qa.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ci(e.remoteStore,r.targetId))}async function gl(n,t){const e=q(n);try{const r=await dp(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Ua.get(o);a&&(X(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?X(a.Ba):s.removedDocuments.size>0&&(X(a.Ba),a.Ba=!1))}),await yl(e,r,t)}catch(r){await Ir(r)}}function xa(n,t,e){const r=q(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ka.forEach((o,a)=>{const l=a.view.sa(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const h=q(a);h.onlineState=l;let f=!1;h.queries.forEach((g,w)=>{for(const R of w.ta)R.sa(l)&&(f=!0)}),f&&mi(h)}(r.eventManager,t),s.length&&r.La.p_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Wp(n,t,e){const r=q(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Ua.get(t),o=s&&s.key;if(o){let a=new tt(M.comparator);a=a.insert(o,yt.newNoDocument(o,x.min()));const l=$().add(o),h=new Vr(x.min(),new Map,new tt(F),a,l);await gl(r,h),r.$a=r.$a.remove(o),r.Ua.delete(t),_i(r)}else await Bs(r.localStore,t,!1).then(()=>js(r,t,e)).catch(Ir)}function js(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.qa.get(t))n.ka.delete(r),e&&n.La.Ja(r,e);n.qa.delete(t),n.isPrimaryClient&&n.Ka.br(t).forEach(r=>{n.Ka.containsKey(r)||_l(n,r)})}function _l(n,t){n.Qa.delete(t.path.canonicalString());const e=n.$a.get(t);e!==null&&(ci(n.remoteStore,e),n.$a=n.$a.remove(t),n.Ua.delete(e),_i(n))}function La(n,t,e){for(const r of e)r instanceof fl?(n.Ka.addReference(r.key,t),Xp(n,r)):r instanceof pl?(V(gi,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,t),n.Ka.containsKey(r.key)||_l(n,r.key)):L()}function Xp(n,t){const e=t.key,r=e.path.canonicalString();n.$a.get(e)||n.Qa.has(r)||(V(gi,"New document in limbo: "+e),n.Qa.add(r),_i(n))}function _i(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const t=n.Qa.values().next().value;n.Qa.delete(t);const e=new M(W.fromString(t)),r=n.za.next();n.Ua.set(r,new $p(e)),n.$a=n.$a.insert(e,r),ll(n.remoteStore,new Xt(Mt(Ou(e.path)),r,"TargetPurposeLimboResolution",wr.ae))}}async function yl(n,t,e){const r=q(n),s=[],o=[],a=[];r.ka.isEmpty()||(r.ka.forEach((l,h)=>{a.push(r.Ha(h,t,e).then(f=>{var g;if((f||e)&&r.isPrimaryClient){const w=f?!f.fromCache:(g=e==null?void 0:e.targetChanges.get(h.targetId))===null||g===void 0?void 0:g.current;r.sharedClientState.updateQueryState(h.targetId,w?"current":"not-current")}if(f){s.push(f);const w=ui.Yi(h.targetId,f);o.push(w)}}))}),await Promise.all(a),r.La.p_(s),await async function(h,f){const g=q(h);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>C.forEach(f,R=>C.forEach(R.Hi,b=>g.persistence.referenceDelegate.addReference(w,R.targetId,b)).next(()=>C.forEach(R.Ji,b=>g.persistence.referenceDelegate.removeReference(w,R.targetId,b)))))}catch(w){if(!je(w))throw w;V(li,"Failed to update sequence numbers: "+w)}for(const w of f){const R=w.targetId;if(!w.fromCache){const b=g.Ts.get(R),N=b.snapshotVersion,O=b.withLastLimboFreeSnapshotVersion(N);g.Ts=g.Ts.insert(R,O)}}}(r.localStore,o))}async function Yp(n,t){const e=q(n);if(!e.currentUser.isEqual(t)){V(gi,"User change. New user:",t.toKey());const r=await ol(e.localStore,t);e.currentUser=t,function(o,a){o.Ga.forEach(l=>{l.forEach(h=>{h.reject(new D(S.CANCELLED,a))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await yl(e,r.Rs)}}function Jp(n,t){const e=q(n),r=e.Ua.get(t);if(r&&r.Ba)return $().add(r.key);{let s=$();const o=e.qa.get(t);if(!o)return s;for(const a of o){const l=e.ka.get(a);s=s.unionWith(l.view.Sa)}return s}}function El(n){const t=q(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=gl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Wp.bind(null,t),t.La.p_=Lp.bind(null,t.eventManager),t.La.Ja=Fp.bind(null,t.eventManager),t}class yr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Dr(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return hp(this.persistence,new up,t.initialUser,this.serializer)}Xa(t){return new il(ai.ri,this.serializer)}Za(t){return new gp}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yr.provider={build:()=>new yr};class Zp extends yr{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){X(this.persistence.referenceDelegate instanceof _r);const r=this.persistence.referenceDelegate.garbageCollector;return new Kf(r,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new il(r=>_r.ri(r,e),this.serializer)}}class zs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Yp.bind(null,this.syncEngine),await Np(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Mp}()}createDatastore(t){const e=Dr(t.databaseInfo.databaseId),r=function(o){return new vp(o)}(t.databaseInfo);return function(o,a,l,h){return new Rp(o,a,l,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,l){return new bp(r,s,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>xa(this.syncEngine,e,0),function(){return Pa.D()?new Pa:new _p}())}createSyncEngine(t,e){return function(s,o,a,l,h,f,g){const w=new jp(s,o,a,l,h,f);return g&&(w.ja=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=q(s);V(Ue,"RemoteStore shutting down."),o.W_.add(5),await Sn(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}zs.provider={build:()=>new zs};/**
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
 */class tm{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):jt("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const oe="FirestoreClient";class em{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=kd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{V(oe,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(V(oe,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ge;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=dl(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ys(n,t){n.asyncQueue.verifyOperationInProgress(),V(oe,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ol(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Fa(n,t){n.asyncQueue.verifyOperationInProgress();const e=await nm(n);V(oe,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Na(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Na(t.remoteStore,s)),n._onlineComponents=t}async function nm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(oe,"Using user provided OfflineComponentProvider");try{await ys(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Me("Error using user provided cache. Falling back to memory cache: "+e),await ys(n,new yr)}}else V(oe,"Using default OfflineComponentProvider"),await ys(n,new Zp(void 0));return n._offlineComponents}async function rm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(oe,"Using user provided OnlineComponentProvider"),await Fa(n,n._uninitializedComponentsProvider._online)):(V(oe,"Using default OnlineComponentProvider"),await Fa(n,new zs))),n._onlineComponents}async function sm(n){const t=await rm(n),e=t.eventManager;return e.onListen=zp.bind(null,t.syncEngine),e.onUnlisten=Kp.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Hp.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Qp.bind(null,t.syncEngine),e}function im(n,t,e={}){const r=new ge;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,f){const g=new tm({next:R=>{g.su(),a.enqueueAndForget(()=>xp(o,w)),R.fromCache&&h.source==="server"?f.reject(new D(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),w=new Up(l,g,{includeMetadataChanges:!0,Ta:!0});return Op(o,w)}(await sm(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Tl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Ua=new Map;function om(n,t,e,r){if(t===!0&&r===!0)throw new D(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ba(n){if(M.isDocumentKey(n))throw new D(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function kr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L()}function Hs(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new D(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=kr(n);throw new D(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */const vl="firestore.googleapis.com",qa=!0;class $a{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new D(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=vl,this.ssl=qa}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:qa;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=sl;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Hf)throw new D(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}om("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class yi{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $a({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $a(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Cd;switch(r.type){case"firstParty":return new Vd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Ua.get(e);r&&(V("ComponentProvider","Removing Datastore"),Ua.delete(e),r.terminate())}(this),Promise.resolve()}}function am(n,t,e,r={}){var s;const o=(n=Hs(n,yi))._getSettings(),a=`${t}:${e}`;if(o.host!==vl&&o.host!==a&&Me("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,h;if(typeof r.mockUserToken=="string")l=r.mockUserToken,h=_t.MOCK_USER;else{l=nh(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new D(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new _t(f)}n._authCredentials=new bd(new Eu(l,h))}}/**
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
 */class ue{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ue(this.firestore,t,this._query)}}class zt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ne(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new zt(this.firestore,t,this._key)}}class Ne extends ue{constructor(t,e,r){super(t,e,Ou(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new zt(this.firestore,null,new M(t))}withConverter(t){return new Ne(this.firestore,t,this._path)}}function um(n,t,...e){if(n=ke(n),n instanceof yi){const r=W.fromString(t,...e);return Ba(r),new Ne(n,null,r)}{if(!(n instanceof zt||n instanceof Ne))throw new D(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(W.fromString(t,...e));return Ba(r),new Ne(n.firestore,null,r)}}/**
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
 */const ja="AsyncQueue";class za{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new ul(this,"async_queue_retry"),this.Su=()=>{const r=_s();r&&V(ja,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=t;const e=_s();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=_s();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new ge;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!je(t))throw t;V(ja,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.bu.then(()=>(this.pu=!0,t().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw jt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=e,e}enqueueAfterDelay(t,e,r){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const s=pi.createAndSchedule(this,t,e,r,o=>this.Fu(o));return this.fu.push(s),s}Du(){this.gu&&L()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class Il extends yi{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new za,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new za(t),this._firestoreClient=void 0,await t}}}function lm(n,t){const e=typeof n=="object"?n:cu(),r=typeof n=="string"?n:hr,s=Cn(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=th("firestore");o&&am(s,...o)}return s}function cm(n){if(n._terminated)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||hm(n),n._firestoreClient}function hm(n){var t,e,r;const s=n._freezeSettings(),o=function(l,h,f,g){return new Gd(l,h,f,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,Tl(g.experimentalLongPollingOptions),g.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new em(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class qe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new qe(ht.fromBase64String(t))}catch(e){throw new D(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new qe(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class wl{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Al{constructor(t){this._methodName=t}}/**
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
 */class Ei{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return F(this._lat,t._lat)||F(this._long,t._long)}}/**
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
 */class Ti{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const dm=/^__.*__$/;function Rl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class vi{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new vi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:r,Qu:!1});return s.$u(t),s}Uu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Gs(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(Rl(this.Lu)&&dm.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class fm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Dr(t)}ju(t,e,r,s=!1){return new vi({Lu:t,methodName:e,zu:r,path:Et.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pm(n){const t=n._freezeSettings(),e=Dr(n._databaseId);return new fm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function mm(n,t,e,r=!1){return Ii(e,n.ju(r?4:3,t))}function Ii(n,t){if(Cl(n=ke(n)))return _m("Unsupported field value:",t,n),gm(n,t);if(n instanceof Al)return function(r,s){if(!Rl(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const l of r){let h=Ii(l,s.Ku(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ot.fromDate(r);return{timestampValue:Fs(s.serializer,o)}}if(r instanceof ot){const o=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fs(s.serializer,o)}}if(r instanceof Ei)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qe)return{bytesValue:Xu(s.serializer,r._byteString)};if(r instanceof zt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Yu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ti)return function(a,l){return{mapValue:{fields:{[bu]:{stringValue:Su},[dr]:{arrayValue:{values:a.toArray().map(f=>{if(typeof f!="number")throw l.Wu("VectorValues must only contain numeric values.");return ni(l.serializer,f)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${kr(r)}`)}(n,t)}function gm(n,t){const e={};return vu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ze(n,(r,s)=>{const o=Ii(s,t.qu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Cl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ot||n instanceof Ei||n instanceof qe||n instanceof zt||n instanceof Al||n instanceof Ti)}function _m(n,t,e){if(!Cl(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=kr(e);throw r==="an object"?t.Wu(n+" a custom object"):t.Wu(n+" "+r)}}const ym=new RegExp("[~\\*/\\[\\]]");function Em(n,t,e){if(t.search(ym)>=0)throw Gs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new wl(...t.split("."))._internalPath}catch{throw Gs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Gs(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new D(S.INVALID_ARGUMENT,l+n+h)}/**
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
 */class bl{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Tm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Mr("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Tm extends bl{data(){return super.data()}}function Mr(n,t){return typeof t=="string"?Em(n,t):t instanceof wl?t._internalPath:t._delegate._internalPath}/**
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
 */function vm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new D(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wi{}class Ai extends wi{}function St(n,t,...e){let r=[];t instanceof wi&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof Ri).length,l=o.filter(h=>h instanceof Or).length;if(a>1||a>0&&l>0)throw new D(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Or extends Ai{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Or(t,e,r)}_apply(t){const e=this._parse(t);return Sl(t._query,e),new ue(t.firestore,t.converter,Ms(t._query,e))}_parse(t){const e=pm(t.firestore);return function(o,a,l,h,f,g,w){let R;if(f.isKeyField()){if(g==="array-contains"||g==="array-contains-any")throw new D(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${g}' queries on documentId().`);if(g==="in"||g==="not-in"){Ga(w,g);const N=[];for(const O of w)N.push(Ha(h,o,O));R={arrayValue:{values:N}}}else R=Ha(h,o,w)}else g!=="in"&&g!=="not-in"&&g!=="array-contains-any"||Ga(w,g),R=mm(l,a,w,g==="in"||g==="not-in");return nt.create(f,g,R)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Pt(n,t,e){const r=t,s=Mr("where",n);return Or._create(s,r,e)}class Ri extends wi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ri(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Vt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const l=o.getFlattenedFilters();for(const h of l)Sl(a,h),a=Ms(a,h)}(t._query,e),new ue(t.firestore,t.converter,Ms(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ci extends Ai{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Ci(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new D(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Rn(o,a)}(t._query,this._field,this._direction);return new ue(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new He(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function Im(n,t="asc"){const e=t,r=Mr("orderBy",n);return Ci._create(r,e)}class bi extends Ai{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new bi(t,e,r)}_apply(t){return new ue(t.firestore,t.converter,pr(t._query,this._limit,this._limitType))}}function wm(n){return bi._create("limit",n,"F")}function Ha(n,t,e){if(typeof(e=ke(e))=="string"){if(e==="")throw new D(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xu(t)&&e.indexOf("/")!==-1)throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(W.fromString(e));if(!M.isDocumentKey(r))throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return aa(n,new M(r))}if(e instanceof zt)return aa(n,e._key);throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${kr(e)}.`)}function Ga(n,t){if(!Array.isArray(n)||n.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Sl(n,t){const e=function(s,o){for(const a of s)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new D(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new D(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Am{convertValue(t,e="none"){switch(se(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(re(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ze(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[dr].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Z(a.doubleValue));return new Ti(o)}convertGeoPoint(t){return new Ei(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Rr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(In(t));default:return null}}convertTimestamp(t){const e=ne(t);return new ot(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=W.fromString(t);X(rl(r));const s=new wn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(e)||jt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */class er{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Rm extends bl{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new or(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Mr("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class or extends Rm{data(t={}){return super.data(t)}}class Cm{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new er(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new or(this._firestore,this._userDataWriter,r.key,r,new er(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const h=new or(s._firestore,s._userDataWriter,l.doc.key,l.doc,new er(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new or(s._firestore,s._userDataWriter,l.doc.key,l.doc,new er(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,g=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),g=a.indexOf(l.doc.key)),{type:bm(l.type),doc:h,oldIndex:f,newIndex:g}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function bm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}class Sm extends Am{constructor(t){super(),this.firestore=t}convertBytes(t){return new qe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new zt(this.firestore,null,e)}}function Pm(n){n=Hs(n,ue);const t=Hs(n.firestore,Il),e=cm(t),r=new Sm(t);return vm(n._query),im(e,n._query).then(s=>new Cm(t,r,n,s))}(function(t,e=!0){(function(s){$e=s})(fd),te(new qt("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new Il(new Sd(r.getProvider("auth-internal")),new Dd(a,r.getProvider("app-check-internal")),function(f,g){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new D(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wn(f.options.projectId,g)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),kt(Xo,Yo,t),kt(Xo,Yo,"esm2017")})();const Pl="@firebase/installations",Si="0.6.12";/**
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
 */const Vl=1e4,Dl=`w:${Si}`,Nl="FIS_v2",Vm="https://firebaseinstallations.googleapis.com/v1",Dm=60*60*1e3,Nm="installations",km="Installations";/**
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
 */const Mm={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ee=new vr(Nm,km,Mm);function kl(n){return n instanceof ae&&n.code.includes("request-failed")}/**
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
 */function Ml({projectId:n}){return`${Vm}/projects/${n}/installations`}function Ol(n){return{token:n.token,requestStatus:2,expiresIn:xm(n.expiresIn),creationTime:Date.now()}}async function xl(n,t){const r=(await t.json()).error;return Ee.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ll({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Om(n,{refreshToken:t}){const e=Ll(n);return e.append("Authorization",Lm(t)),e}async function Fl(n){const t=await n();return t.status>=500&&t.status<600?n():t}function xm(n){return Number(n.replace("s","000"))}function Lm(n){return`${Nl} ${n}`}/**
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
 */async function Fm({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=Ml(n),s=Ll(n),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={fid:e,authVersion:Nl,appId:n.appId,sdkVersion:Dl},l={method:"POST",headers:s,body:JSON.stringify(a)},h=await Fl(()=>fetch(r,l));if(h.ok){const f=await h.json();return{fid:f.fid||e,registrationStatus:2,refreshToken:f.refreshToken,authToken:Ol(f.authToken)}}else throw await xl("Create Installation",h)}/**
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
 */function Ul(n){return new Promise(t=>{setTimeout(t,n)})}/**
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
 */function Um(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Bm=/^[cdef][\w-]{21}$/,Ks="";function qm(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=$m(n);return Bm.test(e)?e:Ks}catch{return Ks}}function $m(n){return Um(n).substr(0,22)}/**
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
 */function xr(n){return`${n.appName}!${n.appId}`}/**
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
 */const Bl=new Map;function ql(n,t){const e=xr(n);$l(e,t),jm(e,t)}function $l(n,t){const e=Bl.get(n);if(e)for(const r of e)r(t)}function jm(n,t){const e=zm();e&&e.postMessage({key:n,fid:t}),Hm()}let me=null;function zm(){return!me&&"BroadcastChannel"in self&&(me=new BroadcastChannel("[Firebase] FID Change"),me.onmessage=n=>{$l(n.data.key,n.data.fid)}),me}function Hm(){Bl.size===0&&me&&(me.close(),me=null)}/**
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
 */const Gm="firebase-installations-database",Km=1,Te="firebase-installations-store";let Es=null;function Pi(){return Es||(Es=uu(Gm,Km,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(Te)}}})),Es}async function Er(n,t){const e=xr(n),s=(await Pi()).transaction(Te,"readwrite"),o=s.objectStore(Te),a=await o.get(e);return await o.put(t,e),await s.done,(!a||a.fid!==t.fid)&&ql(n,t.fid),t}async function jl(n){const t=xr(n),r=(await Pi()).transaction(Te,"readwrite");await r.objectStore(Te).delete(t),await r.done}async function Lr(n,t){const e=xr(n),s=(await Pi()).transaction(Te,"readwrite"),o=s.objectStore(Te),a=await o.get(e),l=t(a);return l===void 0?await o.delete(e):await o.put(l,e),await s.done,l&&(!a||a.fid!==l.fid)&&ql(n,l.fid),l}/**
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
 */async function Vi(n){let t;const e=await Lr(n.appConfig,r=>{const s=Qm(r),o=Wm(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===Ks?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function Qm(n){const t=n||{fid:qm(),registrationStatus:0};return zl(t)}function Wm(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ee.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Xm(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Ym(n)}:{installationEntry:t}}async function Xm(n,t){try{const e=await Fm(n,t);return Er(n.appConfig,e)}catch(e){throw kl(e)&&e.customData.serverCode===409?await jl(n.appConfig):await Er(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function Ym(n){let t=await Ka(n.appConfig);for(;t.registrationStatus===1;)await Ul(100),t=await Ka(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await Vi(n);return r||e}return t}function Ka(n){return Lr(n,t=>{if(!t)throw Ee.create("installation-not-found");return zl(t)})}function zl(n){return Jm(n)?{fid:n.fid,registrationStatus:0}:n}function Jm(n){return n.registrationStatus===1&&n.registrationTime+Vl<Date.now()}/**
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
 */async function Zm({appConfig:n,heartbeatServiceProvider:t},e){const r=tg(n,e),s=Om(n,e),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={installation:{sdkVersion:Dl,appId:n.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},h=await Fl(()=>fetch(r,l));if(h.ok){const f=await h.json();return Ol(f)}else throw await xl("Generate Auth Token",h)}function tg(n,{fid:t}){return`${Ml(n)}/${t}/authTokens:generate`}/**
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
 */async function Di(n,t=!1){let e;const r=await Lr(n.appConfig,o=>{if(!Hl(o))throw Ee.create("not-registered");const a=o.authToken;if(!t&&rg(a))return o;if(a.requestStatus===1)return e=eg(n,t),o;{if(!navigator.onLine)throw Ee.create("app-offline");const l=ig(o);return e=ng(n,l),l}});return e?await e:r.authToken}async function eg(n,t){let e=await Qa(n.appConfig);for(;e.authToken.requestStatus===1;)await Ul(100),e=await Qa(n.appConfig);const r=e.authToken;return r.requestStatus===0?Di(n,t):r}function Qa(n){return Lr(n,t=>{if(!Hl(t))throw Ee.create("not-registered");const e=t.authToken;return og(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ng(n,t){try{const e=await Zm(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await Er(n.appConfig,r),e}catch(e){if(kl(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await jl(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Er(n.appConfig,r)}throw e}}function Hl(n){return n!==void 0&&n.registrationStatus===2}function rg(n){return n.requestStatus===2&&!sg(n)}function sg(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+Dm}function ig(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function og(n){return n.requestStatus===1&&n.requestTime+Vl<Date.now()}/**
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
 */async function ag(n){const t=n,{installationEntry:e,registrationPromise:r}=await Vi(t);return r?r.catch(console.error):Di(t).catch(console.error),e.fid}/**
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
 */async function ug(n,t=!1){const e=n;return await lg(e),(await Di(e,t)).token}async function lg(n){const{registrationPromise:t}=await Vi(n);t&&await t}/**
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
 */function cg(n){if(!n||!n.options)throw Ts("App Configuration");if(!n.name)throw Ts("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw Ts(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ts(n){return Ee.create("missing-app-config-values",{valueName:n})}/**
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
 */const Gl="installations",hg="installations-internal",dg=n=>{const t=n.getProvider("app").getImmediate(),e=cg(t),r=Cn(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},fg=n=>{const t=n.getProvider("app").getImmediate(),e=Cn(t,Gl).getImmediate();return{getId:()=>ag(e),getToken:s=>ug(e,s)}};function pg(){te(new qt(Gl,dg,"PUBLIC")),te(new qt(hg,fg,"PRIVATE"))}pg();kt(Pl,Si);kt(Pl,Si,"esm2017");/**
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
 */const Tr="analytics",mg="firebase_id",gg="origin",_g=60*1e3,yg="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ni="https://www.googletagmanager.com/gtag/js";/**
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
 */const wt=new Ws("@firebase/analytics");/**
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
 */const Eg={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ct=new vr("analytics","Analytics",Eg);/**
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
 */function Tg(n){if(!n.startsWith(Ni)){const t=Ct.create("invalid-gtag-resource",{gtagURL:n});return wt.warn(t.message),""}return n}function Kl(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function vg(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function Ig(n,t){const e=vg("firebase-js-sdk-policy",{createScriptURL:Tg}),r=document.createElement("script"),s=`${Ni}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function wg(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function Ag(n,t,e,r,s,o){const a=r[s];try{if(a)await t[a];else{const h=(await Kl(e)).find(f=>f.measurementId===s);h&&await t[h.appId]}}catch(l){wt.error(l)}n("config",s,o)}async function Rg(n,t,e,r,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await Kl(e);for(const h of a){const f=l.find(w=>w.measurementId===h),g=f&&t[f.appId];if(g)o.push(g);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,s||{})}catch(o){wt.error(o)}}function Cg(n,t,e,r){async function s(o,...a){try{if(o==="event"){const[l,h]=a;await Rg(n,t,e,l,h)}else if(o==="config"){const[l,h]=a;await Ag(n,t,e,r,l,h)}else if(o==="consent"){const[l,h]=a;n("consent",l,h)}else if(o==="get"){const[l,h,f]=a;n("get",l,h,f)}else if(o==="set"){const[l]=a;n("set",l)}else n(o,...a)}catch(l){wt.error(l)}}return s}function bg(n,t,e,r,s){let o=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=Cg(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function Sg(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Ni)&&e.src.includes(n))return e;return null}/**
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
 */const Pg=30,Vg=1e3;class Dg{constructor(t={},e=Vg){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Ql=new Dg;function Ng(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function kg(n){var t;const{appId:e,apiKey:r}=n,s={method:"GET",headers:Ng(r)},o=yg.replace("{app-id}",e),a=await fetch(o,s);if(a.status!==200&&a.status!==304){let l="";try{const h=await a.json();!((t=h.error)===null||t===void 0)&&t.message&&(l=h.error.message)}catch{}throw Ct.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function Mg(n,t=Ql,e){const{appId:r,apiKey:s,measurementId:o}=n.options;if(!r)throw Ct.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw Ct.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Lg;return setTimeout(async()=>{l.abort()},_g),Wl({appId:r,apiKey:s,measurementId:o},a,l,t)}async function Wl(n,{throttleEndTimeMillis:t,backoffCount:e},r,s=Ql){var o;const{appId:a,measurementId:l}=n;try{await Og(r,t)}catch(h){if(l)return wt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw h}try{const h=await kg(n);return s.deleteThrottleMetadata(a),h}catch(h){const f=h;if(!xg(f)){if(s.deleteThrottleMetadata(a),l)return wt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:a,measurementId:l};throw h}const g=Number((o=f==null?void 0:f.customData)===null||o===void 0?void 0:o.httpStatus)===503?Bo(e,s.intervalMillis,Pg):Bo(e,s.intervalMillis),w={throttleEndTimeMillis:Date.now()+g,backoffCount:e+1};return s.setThrottleMetadata(a,w),wt.debug(`Calling attemptFetch again in ${g} millis`),Wl(n,w,r,s)}}function Og(n,t){return new Promise((e,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),r(Ct.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function xg(n){if(!(n instanceof ae)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class Lg{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Fg(n,t,e,r,s){if(s&&s.global){n("event",e,r);return}else{const o=await t,a=Object.assign(Object.assign({},r),{send_to:o});n("event",e,a)}}/**
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
 */async function Ug(){if(su())try{await iu()}catch(n){return wt.warn(Ct.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return wt.warn(Ct.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Bg(n,t,e,r,s,o,a){var l;const h=Mg(n);h.then(b=>{e[b.measurementId]=b.appId,n.options.measurementId&&b.measurementId!==n.options.measurementId&&wt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>wt.error(b)),t.push(h);const f=Ug().then(b=>{if(b)return r.getId()}),[g,w]=await Promise.all([h,f]);Sg(o)||Ig(o,g.measurementId),s("js",new Date);const R=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return R[gg]="firebase",R.update=!0,w!=null&&(R[mg]=w),s("config",g.measurementId,R),g.measurementId}/**
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
 */class qg{constructor(t){this.app=t}_delete(){return delete En[this.app.options.appId],Promise.resolve()}}let En={},Wa=[];const Xa={};let vs="dataLayer",$g="gtag",Ya,Xl,Ja=!1;function jg(){const n=[];if(ih()&&n.push("This is a browser extension environment."),ah()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),e=Ct.create("invalid-analytics-context",{errorInfo:t});wt.warn(e.message)}}function zg(n,t,e){jg();const r=n.options.appId;if(!r)throw Ct.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)wt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ct.create("no-api-key");if(En[r]!=null)throw Ct.create("already-exists",{id:r});if(!Ja){wg(vs);const{wrappedGtag:o,gtagCore:a}=bg(En,Wa,Xa,vs,$g);Xl=o,Ya=a,Ja=!0}return En[r]=Bg(n,Wa,Xa,t,Ya,vs,e),new qg(n)}function Hg(n=cu()){n=ke(n);const t=Cn(n,Tr);return t.isInitialized()?t.getImmediate():Gg(n)}function Gg(n,t={}){const e=Cn(n,Tr);if(e.isInitialized()){const s=e.getImmediate();if(ur(t,e.getOptions()))return s;throw Ct.create("already-initialized")}return e.initialize({options:t})}function Kg(n,t,e,r){n=ke(n),Fg(Xl,En[n.app.options.appId],t,e,r).catch(s=>wt.error(s))}const Za="@firebase/analytics",tu="0.10.11";function Qg(){te(new qt(Tr,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return zg(r,s,e)},"PUBLIC")),te(new qt("analytics-internal",n,"PRIVATE")),kt(Za,tu),kt(Za,tu,"esm2017");function n(t){try{const e=t.getProvider(Tr).getImmediate();return{logEvent:(r,s,o)=>Kg(e,r,s,o)}}catch(e){throw Ct.create("interop-component-reg-failed",{reason:e})}}}Qg();const Wg={apiKey:"AIzaSyCtaAYQHP6QHpm48cnHH2WgUAjxvMQ7ZdY",authDomain:"methamaint.firebaseapp.com",projectId:"methamaint",storageBucket:"methamaint.firebasestorage.app",messagingSenderId:"933028671775",appId:"1:933028671775:web:c58b85ee5323aa3c92402a",measurementId:"G-LZ4P4S1ZNZ"},Yl=lu(Wg),Xg=lm(Yl);Hg(Yl);const Zg=kc({__name:"HelloWorld",setup(n){const t=Mc([]),e=Oc({INTERVENTION:"",TITRE:"",STATUT:"",DATE_MIN:"",DATE_MAX:"",MACHINE:"",NATURE:"",PRIORITE:"",CAUSE:""});async function r(){let a=St(um(Xg,"interventions"));console.log("filters_interventions",e),e.INTERVENTION&&(a=St(a,Pt("num_intervention","==",e.INTERVENTION))),e.MACHINE&&(a=St(a,Pt("installation.code",">=",e.MACHINE),Pt("installation.code","<",e.MACHINE+""))),e.TITRE&&(a=St(a,Pt("titre",">=",e.TITRE),Pt("titre","<",e.TITRE+""))),e.STATUT&&(a=St(a,Pt("statut","==",e.STATUT))),e.NATURE&&(a=St(a,Pt("nature","==",e.NATURE))),e.PRIORITE&&(a=St(a,Pt("priorite","==",e.PRIORITE))),e.CAUSE&&(a=St(a,Pt("cause","==",e.CAUSE))),e.DATE_MIN&&(a=St(a,Pt("date",">=",new Date(e.DATE_MIN)))),e.DATE_MAX&&(a=St(a,Pt("date","<=",new Date(e.DATE_MAX)))),a=St(a,Im("date"),wm(10)),console.log("q",a);const l=await Pm(a);t.value=l.docs.map(h=>({id:h.id,...h.data()})),console.log("items",t)}function s(a){switch(a){case"En Cours":return"orange";case"Terminée":return"green";case"En Préparation":return"blue";case"Annulée":return"red";default:return"grey"}}function o(a){return a&&a.seconds?new Date(a.seconds*1e3).toLocaleDateString():"Date non spécifiée"}return xc(r),(a,l)=>(us(),Lc(Mo,null,{default:lt(()=>[Q(Bt,{cols:"12",md:"12"},{default:lt(()=>[Q(Oo,null,{default:lt(()=>[Q(Mo,null,{default:lt(()=>[Q(Bt,{cols:"12",md:"6"},{default:lt(()=>[Q(Wn,{modelValue:e.TITRE,"onUpdate:modelValue":l[0]||(l[0]=h=>e.TITRE=h),label:"Titre",clearable:""},null,8,["modelValue"])]),_:1}),Q(Bt,{cols:"12",md:"6"},{default:lt(()=>[Q(ls,{modelValue:e.STATUT,"onUpdate:modelValue":l[1]||(l[1]=h=>e.STATUT=h),items:[{text:"En Préparation",value:"En Préparation"},{text:"En Cours",value:"En Cours"},{text:"Terminé",value:"Terminé"}],"item-title":"text","item-value":"value",label:"Statut"},null,8,["modelValue"])]),_:1}),Q(Bt,{cols:"12",md:"6"},{default:lt(()=>[Q(Wn,{modelValue:e.MACHINE,"onUpdate:modelValue":l[2]||(l[2]=h=>e.MACHINE=h),label:"Machine",clearable:""},null,8,["modelValue"])]),_:1}),Q(Bt,{cols:"12",md:"6"},{default:lt(()=>[Q(ls,{modelValue:e.NATURE,"onUpdate:modelValue":l[3]||(l[3]=h=>e.NATURE=h),items:["Préventif","Correctif"],"item-title":"text","item-value":"value",label:"Nature"},null,8,["modelValue"])]),_:1}),Q(Bt,{cols:"12",md:"6"},{default:lt(()=>[Q(ls,{modelValue:e.PRIORITE,"onUpdate:modelValue":l[4]||(l[4]=h=>e.PRIORITE=h),items:["P1-Immédiat","P2-Dans la semaine","P3-Moins urgent"],label:"Priorité"},null,8,["modelValue"])]),_:1}),Q(Bt,{cols:"12",md:"6"},{default:lt(()=>[Q(Wn,{modelValue:e.DATE_MIN,"onUpdate:modelValue":l[5]||(l[5]=h=>e.DATE_MIN=h),label:"Date Début",type:"date"},null,8,["modelValue"])]),_:1}),Q(Bt,{cols:"12",md:"6"},{default:lt(()=>[Q(Wn,{modelValue:e.DATE_MAX,"onUpdate:modelValue":l[6]||(l[6]=h=>e.DATE_MAX=h),label:"Date Fin",type:"date"},null,8,["modelValue"])]),_:1}),Q(Bt,{cols:"12"},{default:lt(()=>[Q(Fc,{color:"primary",onClick:r},{default:lt(()=>l[7]||(l[7]=[xo("Filtrer")])),_:1})]),_:1})]),_:1})]),_:1}),Q(Oo,null,{default:lt(()=>[Q(Uc,null,{default:lt(()=>[l[8]||(l[8]=Rt("thead",null,[Rt("tr",null,[Rt("th",{class:"text-left"},"Numéro"),Rt("th",{class:"text-left"},"Titre"),Rt("th",{class:"text-left"},"Date"),Rt("th",{class:"text-left"},"Machine"),Rt("th",{class:"text-left"},"Statut")])],-1)),Rt("tbody",null,[(us(!0),Lo(Bc,null,qc(t.value,(h,f)=>(us(),Lo("tr",{key:h.id},[Rt("td",null,hn(h.num_intervention),1),Rt("td",null,hn(h.titre),1),Rt("td",null,hn(o(h.date)),1),Rt("td",null,hn(h.installation.reference+"_"+h.installation.nom),1),Rt("td",null,[$c(" Badge de statut "),Q(jc,{color:s(h.statut),content:" "},{default:lt(()=>[Q(zc,{color:s(h.statut),dark:""},{default:lt(()=>[xo(hn(h.statut),1)]),_:2},1032,["color"])]),_:2},1032,["color"])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}});export{Zg as default};
