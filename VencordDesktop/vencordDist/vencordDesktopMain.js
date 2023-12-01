// Vencord ec16fd8
// Standalone: true
// Platform: Universal
// Updater disabled: false
"use strict";var Yn=Object.create;var Te=Object.defineProperty;var Xn=Object.getOwnPropertyDescriptor;var Jn=Object.getOwnPropertyNames;var Qn=Object.getPrototypeOf,qn=Object.prototype.hasOwnProperty;var O=(e,n)=>()=>(e&&(n=e(e=0)),n);var Ye=(e,n)=>{for(var t in n)Te(e,t,{get:n[t],enumerable:!0})},$n=(e,n,t,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of Jn(n))!qn.call(e,i)&&i!==t&&Te(e,i,{get:()=>n[i],enumerable:!(r=Xn(n,i))||r.enumerable});return e};var et=(e,n,t)=>(t=e!=null?Yn(Qn(e)):{},$n(n||!e||!e.__esModule?Te(t,"default",{value:e,enumerable:!0}):t,e));var u=O(()=>{"use strict"});var te,xe=O(()=>{u();te="ec16fd8"});var B,Ee=O(()=>{u();B="Vendicated/Vencord"});var Xe,Je=O(()=>{"use strict";u();xe();Ee();Xe=`Vencord/${te}${B?` (https://github.com/${B})`:""}`});var le=O(()=>{"use strict";u()});function H(e,n={}){return new Promise((t,r)=>{Qe.default.get(e,n,i=>{let{statusCode:o,statusMessage:a,headers:s}=i;if(o>=400)return void r(`${o}: ${a} - ${e}`);if(o>=300)return void t(H(s.location,n));let c=[];i.on("error",r),i.on("data",f=>c.push(f)),i.once("end",()=>t(Buffer.concat(c)))})})}var Qe,De=O(()=>{"use strict";u();Qe=et(require("https"))});function re(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(n){return{ok:!1,error:n instanceof Error?{...n}:n}}}}var qe,$e=O(()=>{"use strict";u();qe=["vencordDesktopMain.js","vencordDesktopPreload.js","vencordDesktopRenderer.js","vencordDesktopRenderer.css"]});var it={};async function rn(e){return H(nt+e,{headers:{Accept:"application/vnd.github+json","User-Agent":Xe}})}async function tt(){if(!await an())return[];let n=await rn(`/compare/${te}...HEAD`);return JSON.parse(n.toString("utf-8")).commits.map(r=>({hash:r.sha.slice(0,7),author:r.author.login,message:r.commit.message}))}async function an(){let e=await rn("/releases/latest"),n=JSON.parse(e.toString());return n.name.slice(n.name.lastIndexOf(" ")+1)===te?!1:(n.assets.forEach(({name:r,browser_download_url:i})=>{qe.some(o=>r.startsWith(o))&&Re.push([r,i])}),!0)}async function rt(){return await Promise.all(Re.map(async([e,n])=>(0,nn.writeFile)((0,tn.join)(__dirname,e),await H(n)))),Re=[],!0}var ie,nn,tn,nt,Re,on=O(()=>{"use strict";u();Je();le();ie=require("electron"),nn=require("fs/promises"),tn=require("path");xe();Ee();De();$e();nt=`https://api.github.com/repos/${B}`,Re=[];ie.ipcMain.handle("VencordGetRepo",re(()=>`https://github.com/${B}`));ie.ipcMain.handle("VencordGetUpdates",re(tt));ie.ipcMain.handle("VencordUpdate",re(an));ie.ipcMain.handle("VencordBuild",re(rt))});u();var Z=require("electron"),Bn=require("path");u();u();Promise.resolve().then(()=>on());u();le();var ke=require("electron");u();var cn={};u();var sn=require("electron");sn.app.on("browser-window-created",(e,n)=>{n.webContents.on("frame-created",(t,{frame:r})=>{r.once("dom-ready",()=>{if(r.url.startsWith("https://open.spotify.com/embed/")){let i=he().plugins?.FixSpotifyEmbeds;if(!i?.enabled)return;r.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${i.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})});var Ge={};Ye(Ge,{resolveRedirect:()=>ot});u();var un=require("https"),at=/^https:\/\/(spotify\.link|s\.team)\/.+$/;function fn(e){return new Promise((n,t)=>{let r=(0,un.request)(new URL(e),{method:"HEAD"},i=>{n(i.headers.location?fn(i.headers.location):e)});r.on("error",t),r.end()})}async function ot(e,n){return at.test(n)?fn(n):n}var ze={};Ye(ze,{readRecording:()=>st});u();var ln=require("electron"),hn=require("fs/promises"),ae=require("path");async function st(e,n){n=(0,ae.normalize)(n);let t=(0,ae.basename)(n),r=(0,ae.normalize)(ln.app.getPath("userData")+"/");if(console.log(t,r,n),t!=="recording.ogg"||!n.startsWith(r))return null;try{let i=await(0,hn.readFile)(n);return new Uint8Array(i.buffer)}catch{return null}}var gn={FixSpotifyEmbeds:cn,OpenInApp:Ge,VoiceMessages:ze};var pn={};for(let[e,n]of Object.entries(gn)){let t=Object.entries(n);if(!t.length)continue;let r=pn[e]={};for(let[i,o]of t){let a=`VencordPluginNative_${e}_${i}`;ke.ipcMain.handle(a,o),r[i]=a}}ke.ipcMain.on("VencordGetPluginIpcMethodMap",e=>{e.returnValue=pn});u();le();u();var oe=class{constructor(n=1/0){this.maxSize=n}queue=[];promise;next(){let n=this.queue.shift();n?this.promise=Promise.resolve().then(n).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(n){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(n),this.run()}unshift(n){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(n),this.run()}get size(){return this.queue.length}};var v=require("electron"),Y=require("fs"),R=require("fs/promises"),b=require("path");u();var vn="PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgogICAgICAgIDx0aXRsZT5WZW5jb3JkIFF1aWNrQ1NTIEVkaXRvcjwvdGl0bGU+CiAgICAgICAgPGxpbmsKICAgICAgICAgICAgcmVsPSJzdHlsZXNoZWV0IgogICAgICAgICAgICBocmVmPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuNDAuMC9taW4vdnMvZWRpdG9yL2VkaXRvci5tYWluLm1pbi5jc3MiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLU1Pb1EwMmg4MGhrbGNjZkxyWEZZa0N6RytXVmpPUmZsT3A5WnA4ZGx0aWFSUCszNUxZbk80TEtPa2xSNjRvTUdmR2dKRExPOFdKcGtNMW81Z1pYWVpRPT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICAvPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgaHRtbCwKICAgICAgICAgICAgYm9keSwKICAgICAgICAgICAgI2NvbnRhaW5lciB7CiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgICAgICBsZWZ0OiAwOwogICAgICAgICAgICAgICAgdG9wOiAwOwogICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgICAgICAgfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2hlYWQ+CgogICAgPGJvZHk+CiAgICAgICAgPGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj4KICAgICAgICA8c2NyaXB0CiAgICAgICAgICAgIHNyYz0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjQwLjAvbWluL3ZzL2xvYWRlci5taW4uanMiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLVF6TXBYZUNQY2lBSFA0d2JZbFYyUFlnclFjYUVrRFFVanprUFU0eG5qeVZTRDlUMzYvdWRhbXh0TkJxYjRxSzQvYk1RTVBaOGF5ckJlOWhyR2RCRmpRPT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICA+PC9zY3JpcHQ+CgogICAgICAgIDxzY3JpcHQ+CiAgICAgICAgICAgIHJlcXVpcmUuY29uZmlnKHsKICAgICAgICAgICAgICAgIHBhdGhzOiB7CiAgICAgICAgICAgICAgICAgICAgdnM6ICJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuNDAuMC9taW4vdnMiLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKChjc3MpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250YWluZXIiKSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAiY3NzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZSgpLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4KICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICA8L3NjcmlwdD4KICAgIDwvYm9keT4KPC9odG1sPgo=";u();var ct=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,ut=/^\\@/;function Pe(e,n={}){return{fileName:e,name:n.name??e.replace(/\.css$/i,""),author:n.author??"Unknown Author",description:n.description??"A Discord Theme.",version:n.version,license:n.license,source:n.source,website:n.website,invite:n.invite}}function mn(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function In(e,n){if(!e)return Pe(n);let t=e.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!t)return Pe(n);let r={},i="",o="";for(let a of t.split(ct))if(a.length!==0)if(a.charAt(0)==="@"&&a.charAt(1)!==" "){r[i]=o.trim();let s=a.indexOf(" ");i=a.substring(1,s),o=a.substring(s+1)}else o+=" "+a.replace("\\n",`
`).replace(ut,"@");return r[i]=o.trim(),delete r[""],Pe(n,r)}u();var dn=require("electron"),_=require("path"),ge=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,_.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,_.join)(dn.app.getPath("userData"),"..","Vencord")),se=(0,_.join)(ge,"settings"),L=(0,_.join)(ge,"themes"),pe=(0,_.join)(se,"quickCss.css"),Ue=(0,_.join)(se,"settings.json"),An=["https:","http:","steam:","spotify:","com.epicgames.launcher:"];u();var Cn=require("electron");function yn(e){e.webContents.setWindowOpenHandler(({url:n})=>{switch(n){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":return{action:"allow"}}try{var{protocol:t}=new URL(n)}catch{return{action:"deny"}}switch(t){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":Cn.shell.openExternal(n)}return{action:"deny"}})}(0,Y.mkdirSync)(se,{recursive:!0});(0,Y.mkdirSync)(L,{recursive:!0});function Oe(e,n){let t=(0,b.normalize)(e),r=(0,b.join)(e,n),i=(0,b.normalize)(r);return i.startsWith(t)?i:null}function ft(){return(0,R.readFile)(pe,"utf-8").catch(()=>"")}async function lt(){let e=await(0,R.readdir)(L).catch(()=>[]),n=[];for(let t of e){if(!t.endsWith(".css"))continue;let r=await wn(t).then(mn).catch(()=>null);r!=null&&n.push(In(r,t))}return n}function wn(e){e=e.replace(/\?v=\d+$/,"");let n=Oe(L,e);return n?(0,R.readFile)(n,"utf-8"):Promise.reject(`Unsafe path ${e}`)}function Sn(){try{return(0,Y.readFileSync)(Ue,"utf-8")}catch{return"{}"}}function he(){try{return JSON.parse(Sn())}catch{return{}}}v.ipcMain.handle("VencordOpenQuickCss",()=>v.shell.openPath(pe));v.ipcMain.handle("VencordOpenExternal",(e,n)=>{try{var{protocol:t}=new URL(n)}catch{throw"Malformed URL"}if(!An.includes(t))throw"Disallowed protocol.";v.shell.openExternal(n)});var ht=new oe,gt=new oe;v.ipcMain.handle("VencordGetQuickCss",()=>ft());v.ipcMain.handle("VencordSetQuickCss",(e,n)=>ht.push(()=>(0,R.writeFile)(pe,n)));v.ipcMain.handle("VencordGetThemesDir",()=>L);v.ipcMain.handle("VencordGetThemesList",()=>lt());v.ipcMain.handle("VencordGetThemeData",(e,n)=>wn(n));v.ipcMain.handle("VencordGetThemeSystemValues",()=>({"os-accent-color":`#${v.systemPreferences.getAccentColor?.()||""}`}));v.ipcMain.handle("VencordGetSettingsDir",()=>se);v.ipcMain.on("VencordGetSettings",e=>e.returnValue=Sn());v.ipcMain.handle("VencordSetSettings",(e,n)=>{gt.push(()=>(0,R.writeFile)(Ue,n))});v.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let e=new v.BrowserWindow({title:"Vencord QuickCSS Editor",autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,b.join)(__dirname,"vencordDesktopPreload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});yn(e),await e.loadURL(`data:text/html;base64,${vn}`)});u();var Fn=require("electron");u();var En=require("module"),pt=(0,En.createRequire)("/"),me,vt=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{me=pt("worker_threads").Worker}catch{}var mt=me?function(e,n,t,r,i){var o=!1,a=new me(e+vt,{eval:!0}).on("error",function(s){return i(s,null)}).on("message",function(s){return i(null,s)}).on("exit",function(s){s&&!o&&i(new Error("exited with code "+s),null)});return a.postMessage(t,r),a.terminate=function(){return o=!0,me.prototype.terminate.call(a)},a}:function(e,n,t,r,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var o=function(){};return{terminate:o,postMessage:o}},A=Uint8Array,V=Uint16Array,Me=Uint32Array,_e=new A([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Le=new A([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Dn=new A([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Rn=function(e,n){for(var t=new V(31),r=0;r<31;++r)t[r]=n+=1<<e[r-1];for(var i=new Me(t[30]),r=1;r<30;++r)for(var o=t[r];o<t[r+1];++o)i[o]=o-t[r]<<5|r;return[t,i]},Gn=Rn(_e,2),Ze=Gn[0],It=Gn[1];Ze[28]=258,It[258]=28;var zn=Rn(Le,0),kn=zn[0],Mr=zn[1],Ae=new V(32768);for(l=0;l<32768;++l)G=(l&43690)>>>1|(l&21845)<<1,G=(G&52428)>>>2|(G&13107)<<2,G=(G&61680)>>>4|(G&3855)<<4,Ae[l]=((G&65280)>>>8|(G&255)<<8)>>>1;var G,l,X=function(e,n,t){for(var r=e.length,i=0,o=new V(n);i<r;++i)e[i]&&++o[e[i]-1];var a=new V(n);for(i=0;i<n;++i)a[i]=a[i-1]+o[i-1]<<1;var s;if(t){s=new V(1<<n);var c=15-n;for(i=0;i<r;++i)if(e[i])for(var f=i<<4|e[i],h=n-e[i],m=a[e[i]-1]++<<h,S=m|(1<<h)-1;m<=S;++m)s[Ae[m]>>>c]=f}else for(s=new V(r),i=0;i<r;++i)e[i]&&(s[i]=Ae[a[e[i]-1]++]>>>15-e[i]);return s},ce=new A(288);for(l=0;l<144;++l)ce[l]=8;var l;for(l=144;l<256;++l)ce[l]=9;var l;for(l=256;l<280;++l)ce[l]=7;var l;for(l=280;l<288;++l)ce[l]=8;var l,Pn=new A(32);for(l=0;l<32;++l)Pn[l]=5;var l;var Un=X(ce,9,1);var On=X(Pn,5,1),Ie=function(e){for(var n=e[0],t=1;t<e.length;++t)e[t]>n&&(n=e[t]);return n},w=function(e,n,t){var r=n/8|0;return(e[r]|e[r+1]<<8)>>(n&7)&t},de=function(e,n){var t=n/8|0;return(e[t]|e[t+1]<<8|e[t+2]<<16)>>(n&7)},Vn=function(e){return(e+7)/8|0},Ce=function(e,n,t){(n==null||n<0)&&(n=0),(t==null||t>e.length)&&(t=e.length);var r=new(e.BYTES_PER_ELEMENT==2?V:e.BYTES_PER_ELEMENT==4?Me:A)(t-n);return r.set(e.subarray(n,t)),r};var Nn=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],C=function(e,n,t){var r=new Error(n||Nn[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,C),!t)throw r;return r},Mn=function(e,n,t){var r=e.length;if(!r||t&&t.f&&!t.l)return n||new A(0);var i=!n||t,o=!t||t.i;t||(t={}),n||(n=new A(r*3));var a=function(Be){var He=n.length;if(Be>He){var be=new A(Math.max(He*2,Be));be.set(n),n=be}},s=t.f||0,c=t.p||0,f=t.b||0,h=t.l,m=t.d,S=t.m,z=t.n,Q=r*8;do{if(!h){s=w(e,c,1);var N=w(e,c+1,3);if(c+=3,N)if(N==1)h=Un,m=On,S=9,z=5;else if(N==2){var P=w(e,c,31)+257,W=w(e,c+10,15)+4,q=P+w(e,c+5,31)+1;c+=14;for(var M=new A(q),$=new A(19),d=0;d<W;++d)$[Dn[d]]=w(e,c+d*3,7);c+=W*3;for(var D=Ie($),ue=(1<<D)-1,F=X($,D,1),d=0;d<q;){var ee=F[w(e,c,ue)];c+=ee&15;var I=ee>>>4;if(I<16)M[d++]=I;else{var j=0,fe=0;for(I==16?(fe=3+w(e,c,3),c+=2,j=M[d-1]):I==17?(fe=3+w(e,c,7),c+=3):I==18&&(fe=11+w(e,c,127),c+=7);fe--;)M[d++]=j}}var Fe=M.subarray(0,P),U=M.subarray(P);S=Ie(Fe),z=Ie(U),h=X(Fe,S,1),m=X(U,z,1)}else C(1);else{var I=Vn(c)+4,y=e[I-4]|e[I-3]<<8,k=I+y;if(k>r){o&&C(0);break}i&&a(f+y),n.set(e.subarray(I,k),f),t.b=f+=y,t.p=c=k*8,t.f=s;continue}if(c>Q){o&&C(0);break}}i&&a(f+131072);for(var Hn=(1<<S)-1,bn=(1<<z)-1,ye=c;;ye=c){var j=h[de(e,c)&Hn],K=j>>>4;if(c+=j&15,c>Q){o&&C(0);break}if(j||C(2),K<256)n[f++]=K;else if(K==256){ye=c,h=null;break}else{var je=K-254;if(K>264){var d=K-257,ne=_e[d];je=w(e,c,(1<<ne)-1)+Ze[d],c+=ne}var we=m[de(e,c)&bn],Se=we>>>4;we||C(3),c+=we&15;var U=kn[Se];if(Se>3){var ne=Le[Se];U+=de(e,c)&(1<<ne)-1,c+=ne}if(c>Q){o&&C(0);break}i&&a(f+131072);for(var Ke=f+je;f<Ke;f+=4)n[f]=n[f-U],n[f+1]=n[f+1-U],n[f+2]=n[f+2-U],n[f+3]=n[f+3-U];f=Ke}}t.l=h,t.p=ye,t.b=f,t.f=s,h&&(s=1,t.m=S,t.d=m,t.n=z)}while(!s);return f==n.length?n:Ce(n,0,f)};var dt=new A(0);var At=function(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t},Tn=function(e,n,t){for(var r=e(),i=e.toString(),o=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<r.length;++a){var s=r[a],c=o[a];if(typeof s=="function"){n+=";"+c+"=";var f=s.toString();if(s.prototype)if(f.indexOf("[native code]")!=-1){var h=f.indexOf(" ",8)+1;n+=f.slice(h,f.indexOf("(",h))}else{n+=f;for(var m in s.prototype)n+=";"+c+".prototype."+m+"="+s.prototype[m].toString()}else n+=f}else t[c]=s}return[n,t]},ve=[],Ct=function(e){var n=[];for(var t in e)e[t].buffer&&n.push((e[t]=new e[t].constructor(e[t])).buffer);return n},yt=function(e,n,t,r){var i;if(!ve[t]){for(var o="",a={},s=e.length-1,c=0;c<s;++c)i=Tn(e[c],o,a),o=i[0],a=i[1];ve[t]=Tn(e[s],o,a)}var f=At({},ve[t][1]);return mt(ve[t][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+n.toString()+"}",t,f,Ct(f),r)},wt=function(){return[A,V,Me,_e,Le,Dn,Ze,kn,Un,On,Ae,Nn,X,Ie,w,de,Vn,Ce,C,Mn,We,_n,Ln]};var _n=function(e){return postMessage(e,[e.buffer])},Ln=function(e){return e&&e.size&&new A(e.size)},St=function(e,n,t,r,i,o){var a=yt(t,r,i,function(s,c){a.terminate(),o(s,c)});return a.postMessage([e,n],n.consume?[e.buffer]:[]),function(){a.terminate()}};var x=function(e,n){return e[n]|e[n+1]<<8},T=function(e,n){return(e[n]|e[n+1]<<8|e[n+2]<<16|e[n+3]<<24)>>>0},Ve=function(e,n){return T(e,n)+T(e,n+4)*4294967296};function Tt(e,n,t){return t||(t=n,n={}),typeof t!="function"&&C(7),St(e,n,[wt],function(r){return _n(We(r.data[0],Ln(r.data[1])))},1,t)}function We(e,n){return Mn(e,n)}var Ne=typeof TextDecoder<"u"&&new TextDecoder,xt=0;try{Ne.decode(dt,{stream:!0}),xt=1}catch{}var Et=function(e){for(var n="",t=0;;){var r=e[t++],i=(r>127)+(r>223)+(r>239);if(t+i>e.length)return[n,Ce(e,t-1)];i?i==3?(r=((r&15)<<18|(e[t++]&63)<<12|(e[t++]&63)<<6|e[t++]&63)-65536,n+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?n+=String.fromCharCode((r&31)<<6|e[t++]&63):n+=String.fromCharCode((r&15)<<12|(e[t++]&63)<<6|e[t++]&63):n+=String.fromCharCode(r)}};function Dt(e,n){if(n){for(var t="",r=0;r<e.length;r+=16384)t+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return t}else{if(Ne)return Ne.decode(e);var i=Et(e),o=i[0],a=i[1];return a.length&&C(8),o}}var Rt=function(e,n){return n+30+x(e,n+26)+x(e,n+28)},Gt=function(e,n,t){var r=x(e,n+28),i=Dt(e.subarray(n+46,n+46+r),!(x(e,n+8)&2048)),o=n+46+r,a=T(e,n+20),s=t&&a==4294967295?zt(e,o):[a,T(e,n+24),T(e,n+42)],c=s[0],f=s[1],h=s[2];return[x(e,n+10),c,f,i,o+x(e,n+30)+x(e,n+32),h]},zt=function(e,n){for(;x(e,n)!=1;n+=4+x(e,n+2));return[Ve(e,n+12),Ve(e,n+4),Ve(e,n+20)]};var xn=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function Zn(e,n,t){t||(t=n,n={}),typeof t!="function"&&C(7);var r=[],i=function(){for(var I=0;I<r.length;++I)r[I]()},o={},a=function(I,y){xn(function(){t(I,y)})};xn(function(){a=t});for(var s=e.length-22;T(e,s)!=101010256;--s)if(!s||e.length-s>65558)return a(C(13,0,1),null),i;var c=x(e,s+8);if(c){var f=c,h=T(e,s+16),m=h==4294967295||f==65535;if(m){var S=T(e,s-12);m=T(e,S)==101075792,m&&(f=c=T(e,S+32),h=T(e,S+48))}for(var z=n&&n.filter,Q=function(I){var y=Gt(e,h,m),k=y[0],P=y[1],W=y[2],q=y[3],M=y[4],$=y[5],d=Rt(e,$);h=M;var D=function(F,ee){F?(i(),a(F,null)):(ee&&(o[q]=ee),--c||a(null,o))};if(!z||z({name:q,size:P,originalSize:W,compression:k}))if(!k)D(null,Ce(e,d,d+P));else if(k==8){var ue=e.subarray(d,d+P);if(P<32e4)try{D(null,We(ue,new A(W)))}catch(F){D(F,null)}else r.push(Tt(ue,{size:W},D))}else D(C(14,"unknown compression type "+k,1),null);else D(null,null)},N=0;N<f;++N)Q(N)}else a(null,{});return i}var jn=require("fs"),E=require("fs/promises"),J=require("path");u();function Wn(e){function n(a,s,c,f){let h=0;return h+=a<<0,h+=s<<8,h+=c<<16,h+=f<<24>>>0,h}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let t=e[4]===3,r=e[4]===2;if(!r&&!t||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(r){let a=n(e[8],e[9],e[10],e[11]),s=n(e[12],e[13],e[14],e[15]),c=16+a+s;return e.subarray(c,e.length)}let o=12+n(e[8],e[9],e[10],e[11]);return e.subarray(o,e.length)}De();var kt=(0,J.join)(ge,"ExtensionCache");async function Pt(e,n){return await(0,E.mkdir)(n,{recursive:!0}),new Promise((t,r)=>{Zn(e,(i,o)=>{if(i)return void r(i);Promise.all(Object.keys(o).map(async a=>{if(a.startsWith("_metadata/"))return;if(a.endsWith("/"))return void(0,E.mkdir)((0,J.join)(n,a),{recursive:!0});let s=a.split("/"),c=s.pop(),f=s.join("/"),h=(0,J.join)(n,f);f&&await(0,E.mkdir)(h,{recursive:!0}),await(0,E.writeFile)((0,J.join)(h,c),o[a])})).then(()=>t()).catch(a=>{(0,E.rm)(n,{recursive:!0,force:!0}),r(a)})})})}async function Kn(e){let n=(0,J.join)(kt,`${e}`);try{await(0,E.access)(n,jn.constants.F_OK)}catch{let r=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await H(r,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await Pt(Wn(i),n).catch(console.error)}Fn.session.defaultSession.loadExtension(n)}Z.app.whenReady().then(()=>{Z.protocol.registerFileProtocol("vencord",({url:i},o)=>{let a=i.slice(10);if(a.endsWith("/")&&(a=a.slice(0,-1)),a.startsWith("/themes/")){let s=a.slice(8),c=Oe(L,s);if(!c){o({statusCode:403});return}o(c.replace(/\?v=\d+$/,""));return}switch(a){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":o((0,Bn.join)(__dirname,a));break;default:o({statusCode:403})}});try{he().enableReactDevtools&&Kn("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(i=>console.error("[Vencord] Failed to install React Developer Tools",i))}catch{}let e=(i,o)=>Object.keys(i).find(a=>a.toLowerCase()===o),n=i=>{let o={};return i.split(";").forEach(a=>{let[s,...c]=a.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(o,s)&&(o[s]=c)}),o},t=i=>Object.entries(i).filter(([,o])=>o?.length).map(o=>o.flat().join(" ")).join("; "),r=i=>{let o=e(i,"content-security-policy");if(o){let a=n(i[o][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])a[s]??=[],a[s].push("*","blob:","data:","vencord:","'unsafe-inline'");a["script-src"]??=[],a["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),i[o]=[t(a)]}};Z.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:i,resourceType:o},a)=>{if(i&&(o==="mainFrame"&&r(i),o==="stylesheet")){let s=e(i,"content-type");s&&(i[s]=["text/css"])}a({cancel:!1,responseHeaders:i})}),Z.session.defaultSession.webRequest.onHeadersReceived=()=>{}});
//# sourceURL=VencordDesktopMain
//# sourceMappingURL=vencord://vencordDesktopMain.js.map
/*! For license information please see vencordDesktopMain.js.LEGAL.txt */
