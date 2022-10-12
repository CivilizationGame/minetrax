import{I as P,A as B}from"./AppLayout.ef871758.js";import{P as N}from"./Pagination.110c315f.js";import{_ as j}from"./ConfirmationModal.c6bb817a.js";import{_ as A}from"./SecondaryButton.ecfcbbe1.js";import{_ as F}from"./DangerButton.6fc01139.js";import{_ as S,z as c,B as V,o as a,c as n,w as i,b as d,a as e,t as s,e as u,d as p,g as I,F as T,h as r,n as J,x as f}from"./app.59cfc05c.js";import"./Modal.cdd06bfb.js";const z={components:{Icon:P,AppLayout:B,Pagination:N,JetConfirmationModal:j,JetSecondaryButton:A,JetDangerButton:F},props:{customPages:Object},data(){return{deleteCustomPageForm:this.$inertia.form(),customPageBeingDeleted:null}},methods:{confirmCustomPageDeletion(t){this.customPageBeingDeleted=t},deleteNews(){this.deleteCustomPageForm.delete(route("admin.custom-page.delete",this.customPageBeingDeleted),{preserveScroll:!0,preserveState:!0,onSuccess:()=>this.customPageBeingDeleted=null})}}},E={class:"py-12 px-10 max-w-7xl mx-auto"},L={class:"flex justify-between mb-8"},M={class:"font-bold text-3xl text-gray-500 dark:text-gray-400"},O={class:"flex"},R={class:"hidden md:inline"},$={class:"flex flex-col"},q={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},G={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},H={class:"shadow overflow-hidden border-b border-gray-200 dark:border-none sm:rounded-lg"},K={class:"min-w-full divide-y divide-gray-200 dark:divide-gray-700"},Q={class:"bg-gray-50 dark:bg-cool-gray-800 text-gray-500 dark:text-gray-200"},U={scope:"col",class:"px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"},W={scope:"col",class:"w-6 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},X={scope:"col",class:"w-6 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},Y={scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},Z={scope:"col",class:"px-6 py-3 whitespace-nowrap text-left text-xs font-medium uppercase tracking-wider"},ee={scope:"col",class:"px-6 py-3 whitespace-nowrap text-left text-xs font-medium uppercase tracking-wider"},te={scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},se={scope:"col",class:"relative px-6 py-3"},oe={class:"sr-only"},ae={class:"bg-white dark:bg-cool-gray-800 divide-y divide-gray-200 dark:divide-gray-700"},ne={class:"px-3 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"},ie={class:"px-6 py-4 whitespace-normal w-1/2"},re={class:"flex items-center"},ce={class:"text-sm font-medium text-gray-900 dark:text-gray-300"},le={class:"px-6 py-4 whitespace-normal w-1/2"},de={class:"flex items-center"},_e={class:"text-sm font-medium text-gray-900 dark:text-gray-300"},pe={class:"px-9 py-4 text-sm text-gray-500"},me={class:"px-9 py-4 whitespace-nowrap text-sm text-gray-500 align-middle text-center"},ue={class:"px-9 py-4 whitespace-nowrap text-sm text-gray-500 align-middle text-center"},ge={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"},he=["content"],ye={class:"px-6 py-4 whitespace-nowrap dark:text-gray-400 text-right text-sm font-medium"},xe=r(" / "),fe=r(" / "),we=["onClick"],ke={key:0},ve={class:"border-t px-6 py-4 text-center",colspan:"7"};function be(t,m,g,Ce,_,y){const w=c("app-head"),h=c("inertia-link"),l=c("icon"),k=c("pagination"),v=c("jet-secondary-button"),b=c("jet-danger-button"),C=c("jet-confirmation-modal"),D=c("app-layout"),x=V("tippy");return a(),n(D,null,{default:i(()=>[d(w,{title:"Custom Pages Administration"}),e("div",E,[e("div",L,[e("h1",M,s(t.__("Custom Pages")),1),e("div",O,[t.can("create custom_pages")?(a(),n(h,{key:0,href:t.route("admin.custom-page.create"),class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:i(()=>[e("span",null,s(t.__("Create")),1),e("span",R,"\xA0"+s(t.__("Custom Page")),1)]),_:1},8,["href"])):u("",!0)])]),e("div",$,[e("div",q,[e("div",G,[e("div",H,[e("table",K,[e("thead",Q,[e("tr",null,[e("th",U,s(t.__("#")),1),e("th",W,s(t.__("Title")),1),e("th",X,s(t.__("Path")),1),e("th",Y,s(t.__("Visible")),1),e("th",Z,s(t.__("In Navbar")),1),e("th",ee,s(t.__("Is Redirect")),1),e("th",te,s(t.__("Created")),1),e("th",se,[e("span",oe,s(t.__("Actions")),1)])])]),e("tbody",ae,[(a(!0),p(T,null,I(g.customPages.data,o=>(a(),p("tr",{key:o.id},[e("td",ne,s(o.id),1),e("td",ie,[e("div",re,[e("div",ce,s(o.title),1)])]),e("td",le,[e("div",de,[e("div",_e,s(o.path),1)])]),e("td",pe,[o.is_visible?(a(),n(l,{key:0,class:"text-green-500 focus:outline-none",name:"check-circle"})):(a(),n(l,{key:1,class:"text-red-500",name:"cross-circle"}))]),e("td",me,[o.is_in_navbar?(a(),n(l,{key:0,class:"text-green-500",name:"check-circle"})):(a(),n(l,{key:1,class:"text-red-500",name:"cross-circle"}))]),e("td",ue,[o.is_redirect?f((a(),n(l,{key:0,class:"text-green-500 focus:outline-none",name:"check-circle",title:o.redirect_url},null,8,["title"])),[[x]]):(a(),n(l,{key:1,class:"text-red-500",name:"cross-circle"}))]),e("td",ge,[f((a(),p("span",{class:"focus:outline-none",content:t.formatToDayDateString(o.created_at)},[r(s(t.formatTimeAgoToNow(o.created_at)),1)],8,he)),[[x]])]),e("td",ye,[d(h,{as:"a",href:t.route("custom-page.show",o.path),class:"text-blue-600 hover:text-blue-900"},{default:i(()=>[r(s(t.__("View")),1)]),_:2},1032,["href"]),xe,t.can("update news")?(a(),n(h,{key:0,as:"a",href:t.route("admin.custom-page.edit",o.id),class:"text-yellow-600 hover:text-yellow-900"},{default:i(()=>[r(s(t.__("Edit")),1)]),_:2},1032,["href"])):u("",!0),fe,t.can("delete custom_pages")?(a(),p("button",{key:1,class:"text-red-600 hover:text-red-900 focus:outline-none",onClick:De=>y.confirmCustomPageDeletion(o.id)},s(t.__("Delete")),9,we)):u("",!0)])]))),128)),g.customPages.data.length===0?(a(),p("tr",ke,[e("td",ve,s(t.__("No custom pages found.")),1)])):u("",!0)])])])])])]),d(k,{links:g.customPages.links},null,8,["links"])]),d(C,{show:!!_.customPageBeingDeleted,onClose:m[1]||(m[1]=o=>_.customPageBeingDeleted=null)},{title:i(()=>[r(s(t.__("Delete Page")),1)]),content:i(()=>[r(s(t.__("Are you sure you would like to delete this Page?")),1)]),footer:i(()=>[d(v,{onClick:m[0]||(m[0]=o=>_.customPageBeingDeleted=null)},{default:i(()=>[r(s(t.__("Nevermind")),1)]),_:1}),d(b,{class:J(["ml-2",{"opacity-25":_.deleteCustomPageForm.processing}]),disabled:_.deleteCustomPageForm.processing,onClick:y.deleteNews},{default:i(()=>[r(s(t.__("Delete Page")),1)]),_:1},8,["class","disabled","onClick"])]),_:1},8,["show"])]),_:1})}const Ve=S(z,[["render",be]]);export{Ve as default};
