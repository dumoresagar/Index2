/*!
 * Dynamsoft JavaScript Library
 * @product Dynamsoft License JS Edition
 * @website https://www.dynamsoft.com
 * @copyright Copyright 2024, Dynamsoft Corporation
 * @author Dynamsoft
 * @version 3.0.20
 * @fileoverview Dynamsoft JavaScript Library for Core
 * More info DL JS: https://www.dynamsoft.com/capture-vision/docs/web/programming/javascript/api-reference/license/license-module.html
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("dynamsoft-core")):"function"==typeof define&&define.amd?define(["exports","dynamsoft-core"],t):t(((e="undefined"!=typeof globalThis?globalThis:e||self).Dynamsoft=e.Dynamsoft||{},e.Dynamsoft.License={}),e.Dynamsoft.Core)}(this,(function(e,t){"use strict";const s="undefined"==typeof self,r=s?{}:self,n=(()=>{if(!s&&document.currentScript){let e=document.currentScript.src,t=e.indexOf("?");if(-1!=t)e=e.substring(0,t);else{let t=e.indexOf("#");-1!=t&&(e=e.substring(0,t))}return e.substring(0,e.lastIndexOf("/")+1)}return"./"})(),i=e=>e&&"object"==typeof e&&"function"==typeof e.then;const o=" is not allowed to change after `createInstance` or `loadWasm` is called.",a=!s&&document.currentScript&&(document.currentScript.getAttribute("data-license")||document.currentScript.getAttribute("data-productKeys")||document.currentScript.getAttribute("data-licenseKey")||document.currentScript.getAttribute("data-handshakeCode")||document.currentScript.getAttribute("data-organizationID"))||"",c=(e,t)=>{const s=e;if(!s._pLoad.isEmpty)throw new Error("`license`"+o);s._license=t};!s&&document.currentScript&&document.currentScript.getAttribute("data-sessionPassword");const l=e=>{if(null==e)e=[];else{e=e instanceof Array?[...e]:[e];for(let t=0;t<e.length;++t){if(!s){let s=document.createElement("a");s.href=e[t],e[t]=s.href}e[t].endsWith("/")||(e[t]+="/")}}return e},d=(e,t)=>{const s=e;if(!s._pLoad.isEmpty)throw new Error("`licenseServer`"+o);s._licenseServer=l(t)},u=(e,t)=>{const s=e;if(!s._pLoad.isEmpty)throw new Error("`deviceFriendlyName`"+o);s._deviceFriendlyName=t||""};let f,h,g,m,p,y,v;"undefined"!=typeof navigator&&(f=navigator,h=f.userAgent,g=f.platform,m=f.mediaDevices),function(){if(!s){const e={Edge:{search:"Edg",verSearch:"Edg"},OPR:null,Chrome:null,Safari:{str:f.vendor,search:"Apple",verSearch:["Version","iPhone OS","CPU OS"]},Firefox:null,Explorer:{search:"MSIE",verSearch:"MSIE"}},t={HarmonyOS:null,Android:null,iPhone:null,iPad:null,Windows:{str:g,search:"Win"},Mac:{str:g},Linux:{str:g}};let s="unknownBrowser",r=0,n="unknownOS";for(let t in e){const n=e[t]||{};let i=n.str||h,o=n.search||t,a=n.verStr||h,c=n.verSearch||t;if(c instanceof Array||(c=[c]),-1!=i.indexOf(o)){s=t;for(let e of c){let t=a.indexOf(e);if(-1!=t){r=parseFloat(a.substring(t+e.length+1));break}}break}}for(let e in t){const s=t[e]||{};let r=s.str||h,i=s.search||e;if(-1!=r.indexOf(i)){n=e;break}}"Linux"==n&&-1!=h.indexOf("Windows NT")&&(n="HarmonyOS"),p={browser:s,version:r,OS:n}}s&&(p={browser:"ssr",version:0,OS:"ssr"})}(),"undefined"!=typeof WebAssembly&&h&&(!/Safari/.test(h)||/Chrome/.test(h)||/\(.+\s11_2_([2-6]).*\)/.test(h)),m&&m.getUserMedia,"Chrome"===p.browser&&p.version>66||"Safari"===p.browser&&p.version>13||"OPR"===p.browser&&p.version>43||"Edge"===p.browser&&p.version;const k=async()=>{await t.loadWasm("license");const{p:e,justWait:n}=t.newAsyncDependency("dynamsoft_inited");if(n)return e;try{let{lt:n,l:i,ls:a,sp:c,rmk:d,cv:u}=((e,t=!1)=>{const s=e;if(s._pLoad.isEmpty){let e,n,i,o=s._license||"",a=JSON.parse(JSON.stringify(s._licenseServer)),c=s._sessionPassword,d=0;if(o.startsWith("t")||o.startsWith("f"))d=0;else if(0===o.length||o.startsWith("P")||o.startsWith("L")||o.startsWith("Y")||o.startsWith("A"))d=1;else{d=2;const t=o.indexOf(":");-1!=t&&(o=o.substring(t+1));const s=o.indexOf("?");if(-1!=s&&(n=o.substring(s+1),o=o.substring(0,s)),o.startsWith("DLC2"))d=0;else{if(o.startsWith("DLS2")){let t;try{let e=o.substring(4);e=atob(e),t=JSON.parse(e)}catch(e){throw new Error("Format Error: The license string you specified is invalid, please check to make sure it is correct.")}if(o=t.handshakeCode?t.handshakeCode:t.organizationID?t.organizationID:"","number"==typeof o&&(o=JSON.stringify(o)),0===a.length){let e=[];t.mainServerURL&&(e[0]=t.mainServerURL),t.standbyServerURL&&(e[1]=t.standbyServerURL),a=l(e)}!c&&t.sessionPassword&&(c=t.sessionPassword),e=t.remark}("200001"===o||o.startsWith("200001-"))&&(a&&a.length||(o="")),o||(d=1)}}if(d&&(t||(r.crypto||(i="Please upgrade your browser to support online key."),r.crypto.subtle||(i="Require https to use online key in this browser."))),i){if(1!==d)throw new Error(i);d=0,console.warn(i),s._lastErrorCode=-1,s._lastErrorString=i}return 1===d&&(o="",console.warn("Applying for a public trial license ...")),{lt:d,l:o,ls:a,sp:c,rmk:e,cv:n}}throw new Error("Can't preprocess license again"+o)})(w);w._pLoad.task=e;let f=t.getNextTaskID();return t.mapTaskCallBack[f]=r=>{if(r.message&&w._onAuthMessage){let e=w._onAuthMessage(r.message);null!=e&&(r.message=e)}let i=!1;if(1===n&&(i=!0),r.success?(t.onLog&&t.onLog("init license success"),r.message&&console.warn(r.message),t.CoreModule._bSupportIRTModule=r.bSupportIRTModule,t.CoreModule._bSupportDce4Module=r.bSupportDce4Module,w.bPassValidation=!0):(v=Error(r.message),r.stack&&(v.stack=r.stack),i||111==r.ltsErrorCode&&-1!=r.message.toLowerCase().indexOf("trial license")&&(i=!0)),i){let e=t.engineResourcePaths.license;t.engineResourcePaths.rootDirectory&&(e=t.engineResourcePaths.rootDirectory+"/"+e),e=(e=>{if(null==e&&(e="./"),s);else{let t=document.createElement("a");t.href=e,e=t.href}return e.endsWith("/")||(e+="/"),e})(e),(async(e,t,s)=>{if(!e._bNeverShowDialog)try{let r=await fetch(e.engineResourcePath+"dls.license.dialog.html");if(!r.ok)throw Error("Get license dialog fail. Network Error: "+r.statusText);let n=await r.text();if(!n.trim().startsWith("<"))throw Error("Get license dialog fail. Can't get valid HTMLElement.");let i=document.createElement("div");i.innerHTML=n;let o=[];for(let e=0;e<i.childElementCount;++e){let t=i.children[e];t instanceof HTMLStyleElement&&(o.push(t),document.head.append(t))}let a=1==i.childElementCount?i.children[0]:i;a.remove();let c,l,d,u,f,h=[a],g=a.children;for(let e of g)h.push(e);for(let e=0;e<h.length;++e)for(let t of h[e].children)h.push(t);for(let e of h)if(!c&&e.classList.contains("dls-license-mask"))c=e,e.addEventListener("click",(t=>{if(e==t.target){a.remove();for(let e of o)e.remove()}}));else if(!l&&e.classList.contains("dls-license-icon-close"))l=e,e.addEventListener("click",(()=>{a.remove();for(let e of o)e.remove()}));else if(!d&&e.classList.contains("dls-license-icon-error"))d=e,"error"!=t&&e.remove();else if(!u&&e.classList.contains("dls-license-icon-warn"))u=e,"warn"!=t&&e.remove();else if(!f&&e.classList.contains("dls-license-msg-content")){f=e;let t=s;for(;t;){let s=t.indexOf("["),r=t.indexOf("]",s),n=t.indexOf("(",r),i=t.indexOf(")",n);if(-1==s||-1==r||-1==n||-1==i){e.appendChild(new Text(t));break}s>0&&e.appendChild(new Text(t.substring(0,s)));let o=document.createElement("a"),a=t.substring(s+1,r);o.innerText=a;let c=t.substring(n+1,i);o.setAttribute("href",c),o.setAttribute("target","_blank"),e.appendChild(o),t=t.substring(i+1)}}document.body.appendChild(a)}catch(t){e._onLog&&e._onLog(t.message||t)}})({_bNeverShowDialog:w._bNeverShowDialog,engineResourcePath:e,_onLog:t.onLog},r.success?"warn":"error",r.message)}r.success?e.resolve(void 0):e.reject(v)},i&&(i.startsWith("t")||i.startsWith("f"))&&(y=i),t.worker.postMessage({type:"dynamsoft",body:{v:"3.0.20",brtk:!!n,bptk:1===n,l:i,os:p,fn:w.deviceFriendlyName,ls:a,sp:c,rmk:d,cv:u},id:f}),w.bCallInitLicense=!0,e}catch(t){throw v=t,e.reject(t),t}};t.mapPackageRegister.license={},t.mapPackageRegister.license.dynamsoft=k,t.mapPackageRegister.license.getAR=async()=>{if(v)throw v;return t.worker?new Promise(((e,s)=>{let r=t.getNextTaskID();t.mapTaskCallBack[r]=async t=>{if(t.success)if(delete t.success,y&&(t.pk=y),Object.keys(t).length){if(t.lem){let e=Error(t.lem);e.ltsErrorCode=t.lec,delete t.lem,delete t.lec,t.ae=e}e(t)}else e(null);else{let e=Error(t.message);t.stack&&(e.stack=t.stack),s(e)}},t.worker.postMessage({type:"getAR",id:r})})):null};class w{static setLicenseServer(e){d(w,e)}static get license(){return this._license}static set license(e){c(w,e)}static get licenseServer(){return this._licenseServer}static set licenseServer(e){d(w,e)}static get deviceFriendlyName(){return this._deviceFriendlyName}static set deviceFriendlyName(e){u(w,e)}static initLicense(e,t){if(c(w,e),w.bCallInitLicense=!0,t)return(async()=>{try{await k()}catch(e){return{isSuccess:!1,error:e.message||e}}return{isSuccess:!0,error:"Successful."}})()}static setDeviceFriendlyName(e){u(w,e)}static getDeviceFriendlyName(){return w._deviceFriendlyName}static getDeviceUUID(){return(async()=>{const{p:e,justWait:s}=t.newAsyncDependency("license_uuid");if(s)return e;await t.loadWasm();let r=t.getNextTaskID();return t.mapTaskCallBack[r]=t=>{if(t.success)e.resolve(t.uuid);else{const s=Error(t.message);t.stack&&(s.stack=t.stack),e.reject(s)}},t.worker.postMessage({type:"getDeviceUUID",id:r}),e})()}}if(w._pLoad=new class extends Promise{constructor(e){let t,s;super(((e,r)=>{t=e,s=r})),this._s="pending",this.resolve=e=>{this.isPending&&(i(e)?this.task=e:(this._s="fulfilled",t(e)))},this.reject=e=>{this.isPending&&(this._s="rejected",s(e))},this.task=e}get status(){return this._s}get isPending(){return"pending"===this._s}get isFulfilled(){return"fulfilled"===this._s}get isRejected(){return"rejected"===this._s}get task(){return this._task}set task(e){let t;this._task=e,i(e)?t=e:"function"==typeof e&&(t=new Promise(e)),t&&(async()=>{try{const s=await t;e===this._task&&this.resolve(s)}catch(t){e===this._task&&this.reject(t)}})()}get isEmpty(){return null==this._task}},w.bPassValidation=!1,w.bCallInitLicense=!1,w._license=a,w._licenseServer=[],w._deviceFriendlyName="",null==t.engineResourcePaths.license&&(t.engineResourcePaths.license=n),t.workerAutoResources.license={wasm:!0},t.mapPackageRegister.license.LicenseManager=w,t.engineResourcePaths.std.version&&t.compareVersion(t.engineResourcePaths.std.version,"1.0.0")<0){const e="1.0.0";t.engineResourcePaths.std.version=e,t.engineResourcePaths.std.path=n+`../../dynamsoft-capture-vision-std@${e}/dist/`}e.LicenseManager=w,e.LicenseModule=class{static getVersion(){const e=t.innerVersions.license&&t.innerVersions.license.worker,s=t.innerVersions.license&&t.innerVersions.license.wasm;return`3.0.20(Worker: ${e||"Not Loaded"}, Wasm: ${s||"Not Loaded"})`}},Object.defineProperty(e,"__esModule",{value:!0})}));
