import{J as h}from"./AuthenticationCard.d60a6910.js";import{L as g}from"./LoadingButton.c5ddbc08.js";import{A as b,I as w}from"./AppLayout.ef871758.js";import{X as y}from"./XInput.f3a51c4d.js";import{_ as x,z as o,o as v,c as C,w as n,b as t,a,t as u,h as V,k as I}from"./app.59cfc05c.js";const j={components:{XInput:y,AppLayout:b,LoadingButton:g,JetAuthenticationCard:h,Icon:w},data(){return{form:this.$inertia.form({password:""})}},methods:{submit(){this.form.post(this.route("password.confirm"),{onFinish:()=>this.form.reset()})}}},k={class:"mb-4 text-sm text-gray-600 dark:text-gray-400"},B={class:"flex justify-end mt-4"};function P(e,s,A,L,r,l){const p=o("app-head"),d=o("Icon"),m=o("x-input"),c=o("loading-button"),f=o("jet-authentication-card"),_=o("app-layout");return v(),C(_,null,{default:n(()=>[t(p,{title:e.__("Confirm your Password")},null,8,["title"]),t(f,null,{logo:n(()=>[t(d,{name:"finger-print2",class:"w-20 h-20 fill-current text-light-blue-500"})]),default:n(()=>[a("div",k,u(e.__("This is a secure area of the application. Please confirm your password before continuing.")),1),a("form",{onSubmit:s[1]||(s[1]=I((...i)=>l.submit&&l.submit(...i),["prevent"]))},[a("div",null,[t(m,{id:"password",modelValue:r.form.password,"onUpdate:modelValue":s[0]||(s[0]=i=>r.form.password=i),label:e.__("Password"),required:!0,autocomplete:"current-password",error:r.form.errors.password,autofocus:!0,type:"password",name:"password"},null,8,["modelValue","label","error"])]),a("div",B,[t(c,{loading:r.form.processing,class:"inline-flex justify-center px-4 py-2 ml-4 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50"},{default:n(()=>[V(u(e.__("Confirm")),1)]),_:1},8,["loading"])])],32)]),_:1})]),_:1})}const q=x(j,[["render",P]]);export{q as default};
