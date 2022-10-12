import{_ as S}from"./ActionSection.0fde498c.js";import{_ as x}from"./Button.578eb273.js";import{r as k,a2 as T,o as a,d,a as n,s as j,b as i,w as t,h as l,t as o,U as R,n as v,a3 as A,_ as P,z as m,c as b,e as f,F as B,g as V}from"./app.59cfc05c.js";import{_ as E}from"./DialogModal.5ef0ee9c.js";import{_ as q}from"./Input.89926af4.js";import{_ as J}from"./InputError.8dfd7c06.js";import{_ as F}from"./SecondaryButton.ecfcbbe1.js";import{_ as N}from"./DangerButton.6fc01139.js";import"./SectionTitle.978ab08d.js";import"./Modal.cdd06bfb.js";const D={class:"mt-4"},K={__name:"ConfirmsPassword",props:{title:{type:String,default:"Confirm Password"},content:{type:String,default:"For your security, please confirm your password to continue."},button:{type:String,default:"Confirm"}},emits:["confirmed"],setup(e,{emit:g}){const h=k(!1),r=T({password:"",error:"",processing:!1}),s=k(null),u=()=>{axios.get(route("password.confirmation")).then(c=>{c.data.confirmed?g("confirmed"):(h.value=!0,setTimeout(()=>s.value.focus(),250))})},p=()=>{r.processing=!0,axios.post(route("password.confirm"),{password:r.password}).then(()=>{r.processing=!1,_(),A().then(()=>g("confirmed"))}).catch(c=>{r.processing=!1,r.error=c.response.data.errors.password[0],s.value.focus()})},_=()=>{h.value=!1,r.password="",r.error=""};return(c,y)=>(a(),d("span",null,[n("span",{onClick:u},[j(c.$slots,"default")]),i(E,{show:h.value,onClose:_},{title:t(()=>[l(o(e.title),1)]),content:t(()=>[l(o(e.content)+" ",1),n("div",D,[i(q,{ref_key:"passwordInput",ref:s,modelValue:r.password,"onUpdate:modelValue":y[0]||(y[0]=w=>r.password=w),type:"password",class:"mt-1 block w-3/4",placeholder:c.__("Password"),onKeyup:R(p,["enter"])},null,8,["modelValue","placeholder","onKeyup"]),i(J,{message:r.error,class:"mt-2"},null,8,["message"])])]),footer:t(()=>[i(F,{onClick:_},{default:t(()=>[l(o(c.__("Cancel")),1)]),_:1}),i(x,{class:v(["ml-3",{"opacity-25":r.processing}]),disabled:r.processing,onClick:p},{default:t(()=>[l(o(e.button),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}},L={components:{JetActionSection:S,JetButton:x,JetConfirmsPassword:K,JetDangerButton:N,JetSecondaryButton:F},data(){return{enabling:!1,disabling:!1,qrCode:null,recoveryCodes:[]}},computed:{twoFactorEnabled(){return!this.enabling&&this.$page.props.user.two_factor_enabled}},methods:{enableTwoFactorAuthentication(){this.enabling=!0,this.$inertia.post("/user/two-factor-authentication",{},{preserveScroll:!0,onSuccess:()=>Promise.all([this.showQrCode(),this.showRecoveryCodes()]),onFinish:()=>this.enabling=!1})},showQrCode(){return axios.get("/user/two-factor-qr-code").then(e=>{this.qrCode=e.data.svg})},showRecoveryCodes(){return axios.get("/user/two-factor-recovery-codes").then(e=>{this.recoveryCodes=e.data})},regenerateRecoveryCodes(){axios.post("/user/two-factor-recovery-codes").then(e=>{this.showRecoveryCodes()})},disableTwoFactorAuthentication(){this.disabling=!0,this.$inertia.delete("/user/two-factor-authentication",{preserveScroll:!0,onSuccess:()=>this.disabling=!1})}}},M={key:0,class:"text-lg font-medium text-gray-900 dark:text-gray-300"},Q={key:1,class:"text-lg font-medium text-gray-900 dark:text-gray-300"},Y={class:"mt-3 max-w-xl text-sm text-gray-600 dark:text-gray-400"},z={key:2},H={key:0},I={class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},U={class:"font-semibold"},G=["innerHTML"],W={key:1},O={class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},X={class:"font-semibold"},Z={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 dark:bg-cool-gray-900 dark:text-gray-200 rounded-lg"},$={class:"mt-5"},ee={key:0},oe={key:1};function te(e,g,h,r,s,u){const p=m("jet-button"),_=m("jet-confirms-password"),c=m("jet-secondary-button"),y=m("jet-danger-button"),w=m("jet-action-section");return a(),b(w,null,{title:t(()=>[l(o(e.__("Two Factor Authentication")),1)]),description:t(()=>[l(o(e.__("Add additional security to your account using two factor authentication.")),1)]),content:t(()=>[u.twoFactorEnabled?(a(),d("h3",M,o(e.__("You have enabled two factor authentication.")),1)):(a(),d("h3",Q,o(e.__("You have not enabled two factor authentication.")),1)),n("div",Y,[n("p",null,o(e.__("When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.")),1)]),u.twoFactorEnabled?(a(),d("div",z,[s.qrCode?(a(),d("div",H,[n("div",I,[n("p",U,o(e.__("Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application.")),1)]),n("div",{class:"mt-4 dark:p-4 dark:w-56 dark:bg-white",innerHTML:s.qrCode},null,8,G)])):f("",!0),s.recoveryCodes.length>0?(a(),d("div",W,[n("div",O,[n("p",X,o(e.__("Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost.")),1)]),n("div",Z,[(a(!0),d(B,null,V(s.recoveryCodes,C=>(a(),d("div",{key:C},o(C),1))),128))])])):f("",!0)])):f("",!0),n("div",$,[u.twoFactorEnabled?(a(),d("div",oe,[i(_,{onConfirmed:u.regenerateRecoveryCodes},{default:t(()=>[s.recoveryCodes.length>0?(a(),b(c,{key:0,class:"mr-3"},{default:t(()=>[l(o(e.__("Regenerate Recovery Codes")),1)]),_:1})):f("",!0)]),_:1},8,["onConfirmed"]),i(_,{onConfirmed:u.showRecoveryCodes},{default:t(()=>[s.recoveryCodes.length===0?(a(),b(c,{key:0,class:"mr-3"},{default:t(()=>[l(o(e.__("Show Recovery Codes")),1)]),_:1})):f("",!0)]),_:1},8,["onConfirmed"]),i(_,{onConfirmed:u.disableTwoFactorAuthentication},{default:t(()=>[i(y,{class:v({"opacity-25":s.disabling}),disabled:s.disabling},{default:t(()=>[l(o(e.__("Disable")),1)]),_:1},8,["class","disabled"])]),_:1},8,["onConfirmed"])])):(a(),d("div",ee,[i(_,{onConfirmed:u.enableTwoFactorAuthentication},{default:t(()=>[i(p,{type:"button",class:v({"opacity-25":s.enabling}),disabled:s.enabling},{default:t(()=>[l(o(e.__("Enable")),1)]),_:1},8,["class","disabled"])]),_:1},8,["onConfirmed"])]))])]),_:1})}const me=P(L,[["render",te]]);export{me as default};
