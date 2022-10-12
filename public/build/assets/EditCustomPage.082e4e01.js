import{A as k}from"./AppLayout.ef871758.js";import{_ as w}from"./InputError.8dfd7c06.js";import{L as P}from"./LoadingButton.c5ddbc08.js";import{X as V}from"./XInput.f3a51c4d.js";import{e as C}from"./easymde.dfdf664b.js";import{X as U}from"./XCheckbox.5b234eb6.js";import{_ as E,z as a,o as j,c as M,w as c,b as i,a as e,t as l,h as _,k as D,x as n,y as p,C as L,G as g}from"./app.59cfc05c.js";const T={components:{XCheckbox:U,AppLayout:k,JetInputError:w,LoadingButton:P,XInput:V},props:{customPage:Object},data(){return{form:this.$inertia.form({title:this.customPage.title,body:this.customPage.body,path:this.customPage.path,is_visible:this.customPage.is_visible,is_in_navbar:this.customPage.is_in_navbar,is_redirect:this.customPage.is_redirect,redirect_url:this.customPage.redirect_url,_method:"PUT"}),easyMDE:null}},mounted(){this.easyMDE=new C({previewClass:"editor-preview prose max-w-none"})},methods:{updateCustomPage(){this.form.body=this.easyMDE.value(),this.form.post(route("admin.custom-page.update",this.customPage.id),{})}}},B={class:"py-12 px-10 max-w-7xl mx-auto"},N={class:"flex justify-between mb-8"},R={class:"font-bold text-3xl text-gray-500 dark:text-gray-300"},X={class:"mt-10 sm:mt-0"},A={class:"md:grid md:grid-cols-4 md:gap-6"},O={class:"md:col-span-1"},S={class:"px-4 sm:px-0"},I={class:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-400"},z={class:"mt-1 text-sm text-gray-600 dark:text-gray-500"},G=e("br",null,null,-1),J={class:"mt-5 md:mt-0 md:col-span-3"},q={class:"shadow overflow-hidden sm:rounded-md"},F={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},H={class:"grid grid-cols-6 gap-6"},K={class:"col-span-6 sm:col-span-6"},Q={class:"col-span-6 sm:col-span-6"},W={class:"flex items-center col-span-6 sm:col-span-3"},Y={class:"col-span-6 sm:col-span-6"},Z={class:"col-span-6 sm:col-span-6"},$={class:"flex items-center col-span-6 sm:col-span-3"},ee={class:"text-base font-medium text-gray-900 dark:text-gray-400"},se={class:"mt-4 flex space-x-4"},oe={class:"flex items-start"},te={class:"flex items-center h-5"},re={class:"ml-3 text-sm"},ie={for:"is_visible",class:"font-medium text-gray-700 dark:text-gray-400"},le={class:"flex items-start"},ae={class:"flex items-center h-5"},ne={class:"ml-3 text-sm"},de={for:"is_in_navbar",class:"font-medium text-gray-700 dark:text-gray-400"},me={class:"px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6 flex justify-end"};function ce(o,t,f,_e,s,u){const h=a("app-head"),b=a("inertia-link"),d=a("x-input"),y=a("x-checkbox"),m=a("jet-input-error"),x=a("loading-button"),v=a("app-layout");return j(),M(v,null,{default:c(()=>[i(h,{title:`Edit Custom Page: ${f.customPage.title}`},null,8,["title"]),e("div",B,[e("div",N,[e("h1",R,l(o.__("Edit Custom Page")),1),i(b,{href:o.route("admin.custom-page.index"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:c(()=>[e("span",null,l(o.__("Cancel")),1)]),_:1},8,["href"])]),e("div",X,[e("div",A,[e("div",O,[e("div",S,[e("h3",I,l(o.__("Overview")),1),e("p",z,[_(l(o.__("Using custom pages you can create a page based on markdown to show information like privacy, rules etc."))+" ",1),G,_(" "+l(o.__("Using custom pages you can also redirect to some external links.")),1)])])]),e("div",J,[e("form",{onSubmit:t[7]||(t[7]=D((...r)=>u.updateCustomPage&&u.updateCustomPage(...r),["prevent"]))},[e("div",q,[e("div",F,[e("div",H,[e("div",K,[i(d,{id:"title",modelValue:s.form.title,"onUpdate:modelValue":t[0]||(t[0]=r=>s.form.title=r),label:o.__("Title of Page"),help:o.__("Eg: Privacy & Policy"),error:s.form.errors.title,type:"text",name:"title","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])]),e("div",Q,[i(d,{id:"path",modelValue:s.form.path,"onUpdate:modelValue":t[1]||(t[1]=r=>s.form.path=r),label:o.__("URL Path"),help:o.__("Eg: privacy-policy"),error:s.form.errors.path,type:"text",name:"path","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])]),e("div",W,[i(y,{id:"is_redirect",modelValue:s.form.is_redirect,"onUpdate:modelValue":t[2]||(t[2]=r=>s.form.is_redirect=r),label:o.__("External Redirect"),help:o.__("Tick if visiting this page should redirect to an external url."),name:"is_redirect",error:s.form.errors.is_redirect},null,8,["modelValue","label","help","error"])]),n(e("div",Y,[i(d,{id:"redirect_url",modelValue:s.form.redirect_url,"onUpdate:modelValue":t[3]||(t[3]=r=>s.form.redirect_url=r),label:o.__("Redirect URL"),help:o.__("Eg: https://my-custom-shop.com"),error:s.form.errors.redirect_url,type:"text",name:"redirect_url","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])],512),[[p,s.form.is_redirect]]),n(e("div",Z,[n(e("textarea",{id:"body","onUpdate:modelValue":t[4]||(t[4]=r=>s.form.body=r),"aria-label":"body",name:"body",class:"mt-1 focus:ring-light-blue-500 focus:border-light-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[L,s.form.body]]),i(m,{message:s.form.errors.body,class:"mt-2"},null,8,["message"])],512),[[p,!s.form.is_redirect]]),e("div",$,[e("fieldset",null,[e("legend",ee,l(o.__("Options")),1),e("div",se,[e("div",oe,[e("div",te,[n(e("input",{id:"is_visible","onUpdate:modelValue":t[5]||(t[5]=r=>s.form.is_visible=r),name:"is_visible",type:"checkbox",class:"focus:ring-light-blue-400 h-4 w-4 text-light-blue-500 border-gray-300 dark:border-gray-900 rounded dark:bg-cool-gray-900"},null,512),[[g,s.form.is_visible]])]),e("div",re,[e("label",ie,l(o.__("Visible")),1)])]),e("div",le,[e("div",ae,[n(e("input",{id:"is_in_navbar","onUpdate:modelValue":t[6]||(t[6]=r=>s.form.is_in_navbar=r),name:"is_in_navbar",type:"checkbox",class:"focus:ring-light-blue-400 h-4 w-4 text-light-blue-500 border-gray-300 dark:border-gray-900 rounded dark:bg-cool-gray-900"},null,512),[[g,s.form.is_in_navbar]])]),e("div",ne,[e("label",de,l(o.__("Add to Navbar")),1)])])]),i(m,{message:s.form.errors.is_in_navbar,class:"mt-2"},null,8,["message"]),i(m,{message:s.form.errors.is_visible,class:"mt-2"},null,8,["message"])])])])]),e("div",me,[i(x,{loading:s.form.processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:c(()=>[_(l(o.__("Update Page")),1)]),_:1},8,["loading"])])])],32)])])])])]),_:1})}const xe=E(T,[["render",ce]]);export{xe as default};
