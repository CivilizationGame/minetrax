import{u as y,r as b,o as i,d as r,b as t,w as e,a,e as v,f as l,F as $,g as x,n as A,t as k,h as n}from"./app.59cfc05c.js";import{_ as N}from"./ActionMessage.f3911aa4.js";import{_ as j}from"./ActionSection.0fde498c.js";import{_ as P}from"./Button.578eb273.js";import{_ as U}from"./ConfirmationModal.c6bb817a.js";import{_ as J}from"./DangerButton.6fc01139.js";import{_ as T}from"./DialogModal.5ef0ee9c.js";import{_ as L}from"./FormSection.326f5b96.js";import{_ as M}from"./Input.89926af4.js";import{_ as w}from"./Checkbox.1ca39cdc.js";import{_ as z}from"./InputError.8dfd7c06.js";import{_ as S}from"./Label.579aab3c.js";import{_ as C}from"./SecondaryButton.ecfcbbe1.js";import{J as E}from"./SectionBorder.ae60bce9.js";import"./SectionTitle.978ab08d.js";import"./Modal.cdd06bfb.js";const Y=n(" Create API Token "),q=n(" API tokens allow third-party services to authenticate with our application on your behalf. "),G={class:"col-span-6 sm:col-span-4"},H={key:0,class:"col-span-6"},K={class:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"},O={class:"flex items-center"},Q={class:"ml-2 text-sm text-gray-600"},R=n(" Created. "),W=n(" Create "),X={key:0},Z={class:"mt-10 sm:mt-0"},ee=n(" Manage API Tokens "),se=n(" You may delete any of your existing tokens if they are no longer needed. "),te={class:"space-y-6"},oe={class:"flex items-center"},ne={key:0,class:"text-sm text-gray-400"},le=["onClick"],ae=["onClick"],ie=n(" API Token "),re=a("div",null," Please copy your new API token. For your security, it won't be shown again. ",-1),ce={key:0,class:"mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500"},de=n(" Close "),me=n(" API Token Permissions "),ue={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},_e={class:"flex items-center"},pe={class:"ml-2 text-sm text-gray-600"},fe=n(" Cancel "),ve=n(" Save "),ke=n(" Delete API Token "),ge=n(" Are you sure you would like to delete this API token? "),he=n(" Cancel "),ye=n(" Delete "),Je={__name:"ApiTokenManager",props:{tokens:Array,availablePermissions:Array,defaultPermissions:Array},setup(d){const c=y({name:"",permissions:d.defaultPermissions}),u=y({permissions:[]}),h=y(),g=b(!1),_=b(null),p=b(null),F=()=>{c.post(route("api-tokens.store"),{preserveScroll:!0,onSuccess:()=>{g.value=!0,c.reset()}})},I=m=>{u.permissions=m.abilities,_.value=m},V=()=>{u.put(route("api-tokens.update",_.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>_.value=null})},D=m=>{p.value=m},B=()=>{h.delete(route("api-tokens.destroy",p.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>p.value=null})};return(m,o)=>(i(),r("div",null,[t(L,{onSubmitted:F},{title:e(()=>[Y]),description:e(()=>[q]),form:e(()=>[a("div",G,[t(S,{for:"name",value:"Name"}),t(M,{id:"name",modelValue:l(c).name,"onUpdate:modelValue":o[0]||(o[0]=s=>l(c).name=s),type:"text",class:"mt-1 block w-full",autofocus:""},null,8,["modelValue"]),t(z,{message:l(c).errors.name,class:"mt-2"},null,8,["message"])]),d.availablePermissions.length>0?(i(),r("div",H,[t(S,{for:"permissions",value:"Permissions"}),a("div",K,[(i(!0),r($,null,x(d.availablePermissions,s=>(i(),r("div",{key:s},[a("label",O,[t(w,{checked:l(c).permissions,"onUpdate:checked":o[1]||(o[1]=f=>l(c).permissions=f),value:s},null,8,["checked","value"]),a("span",Q,k(s),1)])]))),128))])])):v("",!0)]),actions:e(()=>[t(N,{on:l(c).recentlySuccessful,class:"mr-3"},{default:e(()=>[R]),_:1},8,["on"]),t(P,{class:A({"opacity-25":l(c).processing}),disabled:l(c).processing},{default:e(()=>[W]),_:1},8,["class","disabled"])]),_:1}),d.tokens.length>0?(i(),r("div",X,[t(E),a("div",Z,[t(j,null,{title:e(()=>[ee]),description:e(()=>[se]),content:e(()=>[a("div",te,[(i(!0),r($,null,x(d.tokens,s=>(i(),r("div",{key:s.id,class:"flex items-center justify-between"},[a("div",null,k(s.name),1),a("div",oe,[s.last_used_ago?(i(),r("div",ne," Last used "+k(s.last_used_ago),1)):v("",!0),d.availablePermissions.length>0?(i(),r("button",{key:1,class:"cursor-pointer ml-6 text-sm text-gray-400 underline",onClick:f=>I(s)}," Permissions ",8,le)):v("",!0),a("button",{class:"cursor-pointer ml-6 text-sm text-red-500",onClick:f=>D(s)}," Delete ",8,ae)])]))),128))])]),_:1})])])):v("",!0),t(T,{show:g.value,onClose:o[3]||(o[3]=s=>g.value=!1)},{title:e(()=>[ie]),content:e(()=>[re,m.$page.props.jetstream.flash.token?(i(),r("div",ce,k(m.$page.props.jetstream.flash.token),1)):v("",!0)]),footer:e(()=>[t(C,{onClick:o[2]||(o[2]=s=>g.value=!1)},{default:e(()=>[de]),_:1})]),_:1},8,["show"]),t(T,{show:_.value!=null,onClose:o[6]||(o[6]=s=>_.value=null)},{title:e(()=>[me]),content:e(()=>[a("div",ue,[(i(!0),r($,null,x(d.availablePermissions,s=>(i(),r("div",{key:s},[a("label",_e,[t(w,{checked:l(u).permissions,"onUpdate:checked":o[4]||(o[4]=f=>l(u).permissions=f),value:s},null,8,["checked","value"]),a("span",pe,k(s),1)])]))),128))])]),footer:e(()=>[t(C,{onClick:o[5]||(o[5]=s=>_.value=null)},{default:e(()=>[fe]),_:1}),t(P,{class:A(["ml-3",{"opacity-25":l(u).processing}]),disabled:l(u).processing,onClick:V},{default:e(()=>[ve]),_:1},8,["class","disabled"])]),_:1},8,["show"]),t(U,{show:p.value!=null,onClose:o[8]||(o[8]=s=>p.value=null)},{title:e(()=>[ke]),content:e(()=>[ge]),footer:e(()=>[t(C,{onClick:o[7]||(o[7]=s=>p.value=null)},{default:e(()=>[he]),_:1}),t(J,{class:A(["ml-3",{"opacity-25":l(h).processing}]),disabled:l(h).processing,onClick:B},{default:e(()=>[ye]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{Je as default};
