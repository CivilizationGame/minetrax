import{J as b}from"./AuthenticationCard.7891d415.js";import{L as h}from"./LoadingButton.12b60332.js";import{A as w}from"./AppLayout.0a48a2f0.js";import{X as y}from"./XInput.8b04715f.js";import{_ as x,z as e,o as d,c as k,w as i,b as a,a as r,t as l,d as v,e as V,f as B,k as N}from"./app.9fb1098e.js";const j={components:{XInput:y,AppLayout:w,LoadingButton:h,JetAuthenticationCard:b},props:{status:String},data(){return{form:this.$inertia.form({email:""})}},methods:{submit(){this.form.post(this.route("password.email"))}}},A={class:"mb-4 text-sm text-gray-600 dark:text-gray-400"},C={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},L={class:"flex items-center justify-end mt-4"};function E(t,o,m,F,s,u){const p=e("app-head"),c=e("x-input"),f=e("loading-button"),_=e("jet-authentication-card"),g=e("app-layout");return d(),k(g,null,{default:i(()=>[a(p,{title:t.__("Forgot Password")},null,8,["title"]),a(_,null,{default:i(()=>[r("div",A,l(t.__("Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.")),1),m.status?(d(),v("div",C,l(m.status),1)):V("",!0),r("form",{onSubmit:o[1]||(o[1]=N((...n)=>u.submit&&u.submit(...n),["prevent"]))},[r("div",null,[a(c,{id:"email",modelValue:s.form.email,"onUpdate:modelValue":o[0]||(o[0]=n=>s.form.email=n),label:t.__("Email Address"),error:s.form.errors.email,autofocus:!0,required:!0,type:"email",name:"email"},null,8,["modelValue","label","error"])]),r("div",L,[a(f,{loading:s.form.processing,class:"ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50"},{default:i(()=>[B(l(t.__("Email Password Reset Link")),1)]),_:1},8,["loading"])])],32)]),_:1})]),_:1})}const z=x(j,[["render",E]]);export{z as default};
