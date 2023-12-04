// Vencord 6573c47
// Standalone: true
// Platform: Universal
// Updater disabled: false
"use strict";function a(e,r=300){let n;return function(...d){clearTimeout(n),n=setTimeout(()=>{e(...d)},r)}}var s=require("electron"),m=require("fs"),S=require("path");var o=require("electron");function t(e,...r){return o.ipcRenderer.invoke(e,...r)}function c(e,...r){return o.ipcRenderer.sendSync(e,...r)}var _={},p=c("VencordGetPluginIpcMethodMap");for(let[e,r]of Object.entries(p)){let n=_[e]={};for(let[d,g]of Object.entries(r))n[d]=(...u)=>t(g,...u)}var i={themes:{uploadTheme:(e,r)=>t("VencordUploadTheme",e,r),deleteTheme:e=>t("VencordDeleteTheme",e),getThemesDir:()=>t("VencordGetThemesDir"),getThemesList:()=>t("VencordGetThemesList"),getThemeData:e=>t("VencordGetThemeData",e),getSystemValues:()=>t("VencordGetThemeSystemValues")},updater:{getUpdates:()=>t("VencordGetUpdates"),update:()=>t("VencordUpdate"),rebuild:()=>t("VencordBuild"),getRepo:()=>t("VencordGetRepo")},settings:{get:()=>c("VencordGetSettings"),set:e=>t("VencordSetSettings",e),getSettingsDir:()=>t("VencordGetSettingsDir")},quickCss:{get:()=>t("VencordGetQuickCss"),set:e=>t("VencordSetQuickCss",e),addChangeListener(e){o.ipcRenderer.on("VencordQuickCssUpdate",(r,n)=>e(n))},addThemeChangeListener(e){o.ipcRenderer.on("VencordThemeUpdate",()=>e())},openFile:()=>t("VencordOpenQuickCss"),openEditor:()=>t("VencordOpenMonacoEditor")},native:{getVersions:()=>process.versions,openExternal:e=>t("VencordOpenExternal",e)},pluginHelpers:_};s.contextBridge.exposeInMainWorld("VencordNative",i);if(location.protocol!=="data:"){let e=(0,S.join)(__dirname,"vencordDesktopRenderer.css"),r=document.createElement("style");r.id="vencord-css-core",r.textContent=(0,m.readFileSync)(e,"utf-8"),document.readyState==="complete"?document.documentElement.appendChild(r):document.addEventListener("DOMContentLoaded",()=>document.documentElement.appendChild(r),{once:!0})}else s.contextBridge.exposeInMainWorld("setCss",a(i.quickCss.set)),s.contextBridge.exposeInMainWorld("getCurrentCss",i.quickCss.get),s.contextBridge.exposeInMainWorld("getTheme",()=>"vs-dark");
//# sourceURL=VencordPreload
//# sourceMappingURL=vencord://vencordDesktopPreload.js.map
