import{J as C}from"./AuthenticationCard.7891d415.js";import{_ as L}from"./Input.be5c7101.js";import{_ as B}from"./Label.bb99c994.js";import{i as h,g as b,o,d as n,a as u,t as a,F as m,h as J,e as A,l as E,_ as F,z as i,c as N,w as f,b as s,f as d,k}from"./app.9fb1098e.js";import{L as R}from"./LoadingButton.12b60332.js";import{A as U}from"./AppLayout.0a48a2f0.js";const P={key:0},S={class:"font-medium text-red-600"},T={class:"mt-3 list-disc list-inside text-sm text-red-600"},$={__name:"ValidationErrors",setup(t){const e=h(()=>E().props.value.errors),p=h(()=>Object.keys(e.value).length>0);return(y,r)=>b(p)?(o(),n("div",P,[u("div",S,a(y.__("Whoops! Something went wrong.")),1),u("ul",T,[(o(!0),n(m,null,J(b(e),(l,_)=>(o(),n("li",{key:_},a(l),1))),128))])])):A("",!0)}},z={components:{AppLayout:U,LoadingButton:R,JetAuthenticationCard:C,JetInput:L,JetLabel:B,JetValidationErrors:$},data(){return{recovery:!1,form:this.$inertia.form({code:"",recovery_code:""})}},methods:{toggleRecovery(){this.recovery^=!0,this.$nextTick(()=>{this.recovery?(this.$refs.recovery_code.focus(),this.form.code=""):(this.$refs.code.focus(),this.form.recovery_code="")})},submit(){this.form.post(this.route("two-factor.login"))}}},D={class:"mb-4 text-sm text-gray-600 dark:text-gray-400"},I={key:0},M={key:1},O={class:"flex items-center justify-end mt-4"};function W(t,e,p,y,r,l){const _=i("app-head"),x=i("jet-validation-errors"),v=i("jet-label"),g=i("jet-input"),V=i("loading-button"),j=i("jet-authentication-card"),w=i("app-layout");return o(),N(w,null,{default:f(()=>[s(_,{title:t.__("2FA Challenge confirmation")},null,8,["title"]),s(j,null,{default:f(()=>[u("div",D,[r.recovery?(o(),n(m,{key:1},[d(a(t.__("Please confirm access to your account by entering one of your emergency recovery codes.")),1)],64)):(o(),n(m,{key:0},[d(a(t.__("Please confirm access to your account by entering the authentication code provided by your authenticator application.")),1)],64))]),s(x,{class:"mb-4"}),u("form",{onSubmit:e[3]||(e[3]=k((...c)=>l.submit&&l.submit(...c),["prevent"]))},[r.recovery?(o(),n("div",M,[s(v,{for:"recovery_code",value:t.__("Recovery Code")},null,8,["value"]),s(g,{id:"recovery_code",ref:"recovery_code",modelValue:r.form.recovery_code,"onUpdate:modelValue":e[1]||(e[1]=c=>r.form.recovery_code=c),type:"text",class:"mt-1 block w-full",autocomplete:"one-time-code"},null,8,["modelValue"])])):(o(),n("div",I,[s(v,{for:"code",value:t.__("Code")},null,8,["value"]),s(g,{id:"code",ref:"code",modelValue:r.form.code,"onUpdate:modelValue":e[0]||(e[0]=c=>r.form.code=c),type:"text",inputmode:"numeric",class:"mt-1 block w-full",autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"])])),u("div",O,[u("button",{type:"button",class:"text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer",onClick:e[2]||(e[2]=k((...c)=>l.toggleRecovery&&l.toggleRecovery(...c),["prevent"]))},[r.recovery?(o(),n(m,{key:1},[d(a(t.__("Use an authentication code")),1)],64)):(o(),n(m,{key:0},[d(a(t.__("Use a recovery code")),1)],64))]),s(V,{loading:r.form.processing,class:"ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50"},{default:f(()=>[d(a(t.__("Login")),1)]),_:1},8,["loading"])])],32)]),_:1})]),_:1})}const Y=F(z,[["render",W]]);export{Y as default};
