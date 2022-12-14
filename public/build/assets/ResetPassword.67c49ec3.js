import{J as _}from"./AuthenticationCard.7891d415.js";import{L as c}from"./LoadingButton.12b60332.js";import{A as w}from"./AppLayout.0a48a2f0.js";import{X as b}from"./XInput.8b04715f.js";import{_ as g,z as n,o as h,c as V,w as l,b as t,a,f as y,t as v,k as x}from"./app.9fb1098e.js";const k={components:{XInput:b,AppLayout:w,LoadingButton:c,JetAuthenticationCard:_},props:{email:String,token:String},data(){return{form:this.$inertia.form({token:this.token,email:this.email,password:"",password_confirmation:""})}},methods:{submit(){this.form.post(this.route("password.update"),{onFinish:()=>this.form.reset("password","password_confirmation")})}}},P={class:"mt-4"},j={class:"mt-4"},B={class:"flex items-center justify-end mt-4"};function C(s,e,S,q,o,m){const d=n("app-head"),i=n("x-input"),p=n("loading-button"),u=n("jet-authentication-card"),f=n("app-layout");return h(),V(f,null,{default:l(()=>[t(d,{title:s.__("Reset Password")},null,8,["title"]),t(u,null,{default:l(()=>[a("form",{onSubmit:e[3]||(e[3]=x((...r)=>m.submit&&m.submit(...r),["prevent"]))},[a("div",null,[t(i,{id:"email",modelValue:o.form.email,"onUpdate:modelValue":e[0]||(e[0]=r=>o.form.email=r),label:s.__("Email"),required:!0,autofocus:!0,error:o.form.errors.email,type:"email",name:"email"},null,8,["modelValue","label","error"])]),a("div",P,[t(i,{id:"password",modelValue:o.form.password,"onUpdate:modelValue":e[1]||(e[1]=r=>o.form.password=r),label:s.__("Password"),required:!0,autocomplete:"new-password",error:o.form.errors.password,type:"password",name:"password"},null,8,["modelValue","label","error"])]),a("div",j,[t(i,{id:"password_confirmation",modelValue:o.form.password_confirmation,"onUpdate:modelValue":e[2]||(e[2]=r=>o.form.password_confirmation=r),label:s.__("Confirm Password"),required:!0,autocomplete:"new-password",error:o.form.errors.password_confirmation,type:"password",name:"password_confirmation"},null,8,["modelValue","label","error"])]),a("div",B,[t(p,{loading:o.form.processing,class:"ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50"},{default:l(()=>[y(v(s.__("Reset Password")),1)]),_:1},8,["loading"])])],32)]),_:1})]),_:1})}const J=g(k,[["render",C]]);export{J as default};
