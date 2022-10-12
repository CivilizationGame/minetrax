import{A as B}from"./AppLayout.ef871758.js";import{P as C}from"./Pagination.110c315f.js";import{_ as D}from"./ConfirmationModal.c6bb817a.js";import{_ as A}from"./SecondaryButton.ecfcbbe1.js";import{_ as W}from"./DangerButton.6fc01139.js";import{_ as Q}from"./AlertCard.90980e2d.js";import{_ as j,z as l,B as T,o,c as _,w as a,b as p,a as t,h as i,t as s,e as c,x as N,d as n,g as F,F as P,n as L}from"./app.59cfc05c.js";import"./Modal.cdd06bfb.js";const V={components:{AlertCard:Q,AppLayout:B,Pagination:C,JetConfirmationModal:D,JetSecondaryButton:A,JetDangerButton:W},props:{servers:Object,canCreateBungeeServer:Boolean},data(){return{deleteServerForm:this.$inertia.form(),serverBeingDeleted:null,serverStatus:{},serverWebQueryStatus:{}}},mounted(){this.servers.data.forEach(e=>{axios.get(route("server.ping.get",e.id)).then(()=>{this.$nextTick(()=>this.serverStatus[e.id]=1)}).catch(()=>{this.$nextTick(()=>this.serverStatus[e.id]=-1)}),e.type.value!==5?axios.get(route("server.webquery.get",e.id)).then(()=>{this.$nextTick(()=>this.serverWebQueryStatus[e.id]=1)}).catch(()=>{this.$nextTick(()=>this.serverWebQueryStatus[e.id]=-1)}):this.serverWebQueryStatus[e.id]=0})},methods:{confirmServerDeletion(e){this.serverBeingDeleted=e},deleteServer(){this.deleteServerForm.delete(route("admin.server.delete",this.serverBeingDeleted),{preserveScroll:!0,preserveState:!0,onSuccess:()=>this.serverBeingDeleted=null})}}},q={class:"py-12 px-10 max-w-7xl mx-auto"},O={class:"flex justify-between mb-8"},E={class:"font-bold text-3xl text-gray-500 dark:text-gray-300 flex items-center"},I={class:"flex"},J={class:"hidden md:inline"},z={class:"flex flex-col"},M={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},R={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},U={class:"shadow overflow-hidden border-b border-gray-200 dark:border-none sm:rounded-lg"},Y={class:"min-w-full divide-y divide-gray-200 dark:divide-gray-700"},G={class:"bg-gray-50 dark:bg-cool-gray-800 text-gray-500 dark:text-gray-300"},H={scope:"col",class:"px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"},K={scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},X={scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},Z={scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},$={scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},ee={scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},te={scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},se={scope:"col",class:"relative px-6 py-3"},re={class:"sr-only"},oe={class:"bg-white dark:bg-cool-gray-800 divide-y divide-gray-200 dark:divide-gray-700"},ae={class:"px-3 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"},ne={class:"px-6 py-4 whitespace-nowrap"},ie={class:"flex items-center"},de={class:"flex-shrink-0 h-10 w-10"},le=["src"],ce={class:"ml-4"},_e={class:"text-sm font-medium text-gray-900 dark:text-gray-300"},pe={class:"text-sm text-gray-500 dark:text-gray-400"},ue={class:"px-6 py-4 whitespace-nowrap"},ye={class:"text-sm text-gray-900 dark:text-gray-300"},ge={class:"text-sm text-gray-500 dark:text-gray-400"},he={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"},me={class:"px-6 py-4 space-y-1 whitespace-nowrap"},xe={class:"flex"},fe={key:0,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-opacity-25 dark:text-green-400"},be={key:1,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-opacity-25 dark:text-red-400"},ve={key:2,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800 dark:bg-opacity-25 dark:text-gray-400"},ke={class:"flex"},we={key:0,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-opacity-25 dark:text-green-400"},Se={key:1,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-opacity-25 dark:text-red-400"},Be={key:2},Ce={key:3,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800 dark:bg-opacity-25 dark:text-gray-400"},De={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"},Ae={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"},We={key:0,class:"italic"},Qe={key:1},je={class:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium dark:text-gray-300"},Te=i(" / "),Ne=i(" / "),Fe=["onClick"],Pe={key:0},Le={class:"border-t px-6 py-4 text-center dark:text-gray-400 dark:border-gray-700",colspan:"8"};function Ve(e,g,u,qe,d,h){const m=l("app-head"),x=l("AlertCard"),y=l("inertia-link"),f=l("pagination"),b=l("jet-secondary-button"),v=l("jet-danger-button"),k=l("jet-confirmation-modal"),w=l("app-layout"),S=T("tippy");return o(),_(w,null,{default:a(()=>[p(m,{title:e.__("Servers Administration")},null,8,["title"]),t("div",q,[u.canCreateBungeeServer?(o(),_(x,{key:0,"text-color":"text-orange-800 dark:text-orange-500","border-color":"border-orange-500"},{body:a(()=>[i(s(e.__("When a bungee server is not added. Player List Box and Player Status Box (if enabled from settings), use first added server as default query server.")),1)]),default:a(()=>[i(s(e.__("You don't have Bungee/Proxy Server Added!"))+" ",1)]),_:1})):c("",!0),t("div",O,[t("h1",E,[i(s(e.__("Servers"))+" ",1),e.can("create servers")?N((o(),_(y,{key:0,as:"button",title:e.__("MineTrax automatically scan all servers every hour for new players and statistics updates. Click here to force a scan now. Use it rarely."),href:e.route("admin.server.force-scan"),method:"post",class:"ml-2 inline-flex items-center px-4 py-2 border border-2 border-red-600 rounded-md font-semibold text-xs text-red-600 uppercase tracking-widest focus:outline-none focus:border-red-800 transition ease-in-out duration-150 dark:text-red-500 dark:border-red-700 dark:hover:border-red-500"},{default:a(()=>[t("span",null,s(e.__("Rescan all servers")),1)]),_:1},8,["title","href"])),[[S]]):c("",!0)]),t("div",I,[e.can("create servers")&&u.canCreateBungeeServer?(o(),_(y,{key:0,href:e.route("admin.server.create-bungee"),class:"mr-1 inline-flex items-center px-4 py-2 border border-2 border-gray-800 rounded-md font-semibold text-xs text-gray-800 uppercase tracking-widest focus:outline-none focus:border-gray-900 transition ease-in-out duration-150 dark:text-gray-300 dark:border-gray-700 dark:hover:border-gray-500"},{default:a(()=>[t("span",null,s(e.__("Add Bungee Server")),1)]),_:1},8,["href"])):c("",!0),e.can("create servers")?(o(),_(y,{key:1,href:e.route("admin.server.create"),class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:a(()=>[t("span",null,s(e.__("Add")),1),t("span",J,"\xA0"+s(e.__("Server")),1)]),_:1},8,["href"])):c("",!0)])]),t("div",z,[t("div",M,[t("div",R,[t("div",U,[t("table",Y,[t("thead",G,[t("tr",null,[t("th",H,s(e.__("#")),1),t("th",K,s(e.__("Name")),1),t("th",X,s(e.__("IP:Port")),1),t("th",Z,s(e.__("Type")),1),t("th",$,s(e.__("Status")),1),t("th",ee,s(e.__("Version")),1),t("th",te,s(e.__("Last Scanned")),1),t("th",se,[t("span",re,s(e.__("Edit")),1)])])]),t("tbody",oe,[(o(!0),n(P,null,F(u.servers.data,r=>(o(),n("tr",{key:r.id},[t("td",ae,s(r.id),1),t("td",ne,[t("div",ie,[t("div",de,[t("img",{class:"h-10 w-10",src:r.country.photo_path,alt:"Country Flag"},null,8,le)]),t("div",ce,[t("div",_e,s(r.name),1),t("div",pe,s(r.hostname),1)])])]),t("td",ue,[t("div",ye,s(r.ip_address)+" : "+s(r.join_port),1),t("div",ge,s(e.__("WebQuery: :webquery_port",{webquery_port:r.webquery_port||e.__("not set")})),1)]),t("td",he,s(r.type.key),1),t("td",me,[t("div",xe,[d.serverStatus[r.id]===1?(o(),n("span",fe,s(e.__("Server Online")),1)):d.serverStatus[r.id]===-1?(o(),n("span",be,s(e.__("Server Offline")),1)):(o(),n("span",ve,s(e.__("Loading"))+"...",1))]),t("div",ke,[d.serverWebQueryStatus[r.id]===1?(o(),n("span",we,s(e.__("WebQuery Online")),1)):d.serverWebQueryStatus[r.id]===-1?(o(),n("span",Se,s(e.__("WebQuery Offline")),1)):d.serverWebQueryStatus[r.id]===0?(o(),n("span",Be)):(o(),n("span",Ce,s(e.__("Loading"))+"...",1))])]),t("td",De,s(r.minecraft_version),1),t("td",Ae,[r.type.value===5?(o(),n("span",We,s(e.__("not applicable")),1)):(o(),n("span",Qe,s(r.last_scanned_at?e.formatTimeAgoToNow(r.last_scanned_at):e.__("not scanned yet")),1))]),t("td",je,[p(y,{as:"a",href:e.route("admin.server.show",r.id),class:"text-blue-600 hover:text-blue-900"},{default:a(()=>[i(s(e.__("View Intel")),1)]),_:2},1032,["href"]),Te,e.can("update servers")?(o(),_(y,{key:0,as:"a",href:e.route("admin.server.edit",r.id),class:"text-yellow-600 hover:text-yellow-900"},{default:a(()=>[i(s(e.__("Edit")),1)]),_:2},1032,["href"])):c("",!0),Ne,e.can("delete servers")?(o(),n("button",{key:1,class:"text-red-600 hover:text-red-900 focus:outline-none",onClick:Oe=>h.confirmServerDeletion(r.id)},s(e.__("Delete")),9,Fe)):c("",!0)])]))),128)),u.servers.data.length===0?(o(),n("tr",Pe,[t("td",Le,s(e.__("No servers found.")),1)])):c("",!0)])])])])])]),p(f,{links:u.servers.links},null,8,["links"])]),p(k,{show:!!d.serverBeingDeleted,onClose:g[1]||(g[1]=r=>d.serverBeingDeleted=null)},{title:a(()=>[i(s(e.__("Delete Server")),1)]),content:a(()=>[i(s(e.__("Are you sure you would like to delete this Server? All data related to this server will be deleted too.")),1)]),footer:a(()=>[p(b,{onClick:g[0]||(g[0]=r=>d.serverBeingDeleted=null)},{default:a(()=>[i(s(e.__("Nevermind")),1)]),_:1}),p(v,{class:L(["ml-2",{"opacity-25":d.deleteServerForm.processing}]),disabled:d.deleteServerForm.processing,onClick:h.deleteServer},{default:a(()=>[i(s(e.__("Delete Server")),1)]),_:1},8,["class","disabled","onClick"])]),_:1},8,["show"])]),_:1})}const Ge=j(V,[["render",Ve]]);export{Ge as default};
