import{I as v,A as w}from"./AppLayout.ef871758.js";import{S as P,c as j,W as N,R as A}from"./orbit_controls.aebce7e4.js";import{_ as V,z as c,B,o,c as p,w as _,b as u,a as e,t as n,n as z,d as i,e as k,g as C,F as L,h,x as d}from"./app.59cfc05c.js";const D={components:{Icon:v,AppLayout:w},props:{linkedPlayers:Array,maxPlayerPerUser:Number},mounted(){for(const s of this.linkedPlayers){let l=new P({canvas:document.getElementById(`skin_container_${s.uuid}`),width:200,height:300,skin:`https://crafatar.com/skins/${s.uuid}`}),a=j(l);a.enableRotate=!0,a.enableZoom=!1,a.enablePan=!1;let m=l.animations.add(N);m.speed=.1;let g=l.animations.add(A);g.speed=.5}}},R={class:"py-3 px-2 md:py-12 md:px-10 max-w-6xl mx-auto space-y-4"},S={class:"mb-4 bg-white dark:bg-cool-gray-800 border-t-4 border-light-blue-500 rounded-b text-light-blue-900 dark:text-light-blue-400 px-4 py-3 shadow",role:"alert"},U={class:"flex"},I=e("div",{class:"py-1"},[e("svg",{class:"fill-current h-6 w-6 text-light-blue-500 mr-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"})])],-1),T={class:"font-bold"},E={class:"text-sm"},F={key:0,class:"pt-5 pb-5 pr-10 flex justify-center"},H={class:"text-red-500 italic"},M=["id"],W={class:"flex flex-col space-y-2"},Y={class:"username"},O={class:"text-xs text-gray-500 dark:text-gray-400"},Z={class:"flex items-center justify-between"},$={class:"font-bold dark:text-gray-400"},q={class:"flex items-center space-x-2 text-center text-sm text-light-blue-400 font-extrabold"},G={key:0,class:"border-2 rounded text-lg px-2 border-light-blue-300 bg-light-blue-50 dark:bg-cool-gray-800"},J={key:1,class:"italic text-sm text-gray-500 dark:text-gray-400"},K={class:"flex items-center justify-between"},Q={class:"font-bold dark:text-gray-400"},X={key:1,class:"italic text-sm text-gray-500 dark:text-gray-400"},ee={class:"flex items-center justify-between"},te={class:"font-bold dark:text-gray-400"},se={class:"flex items-center space-x-2"},ne={key:0,class:"dark:text-gray-200"},oe={key:1,class:"italic text-sm text-gray-500 dark:text-gray-400"},ae=["src","alt","title"],ie={class:"flex items-center justify-between"},le={class:"font-bold dark:text-gray-400"},re={class:"flex items-center space-x-2"},ce={class:"dark:text-gray-200"},de=["title","src","alt"],_e={class:"flex items-center justify-between"},ue={class:"font-bold dark:text-gray-400"},he={class:"flex items-center space-x-2"},me=["title"],ge={class:"flex justify-end"},fe={class:"hidden md:block"};function pe(s,l,a,m,g,ke){const y=c("app-head"),f=c("inertia-link"),x=c("icon"),b=c("app-layout"),r=B("tippy");return o(),p(b,null,{default:_(()=>[u(y,{title:s.__("Your Linked Players")},null,8,["title"]),e("div",R,[e("div",S,[e("div",U,[I,e("div",null,[e("p",T,n(s.__("You can link upto :count :player to your account! ( :left available )",{count:a.maxPlayerPerUser,player:a.maxPlayerPerUser===1?s.__("player"):s.__("players"),left:a.maxPlayerPerUser-a.linkedPlayers.length})),1),e("p",E,n(s.__("Initiate the process by joining the server and typing /account-link in chat. A link will be generated, click on that link and your player will added to your account.")),1)])])]),e("div",{class:z(["md:grid gap-4 space-y-2 md:space-y-0",a.linkedPlayers.length>1?"grid-cols-2":"grid-cols-1 place-items-center"])},[a.linkedPlayers.length<=0?(o(),i("div",F,[e("p",H,n(s.__("No players linked to your account right now.")),1)])):k("",!0),(o(!0),i(L,null,C(a.linkedPlayers,t=>(o(),i("div",{key:t.uuid,class:"shadow pt-5 pb-5 pr-10 bg-white dark:bg-cool-gray-800 rounded flex justify-center"},[e("canvas",{id:`skin_container_${t.uuid}`},null,8,M),e("div",W,[e("div",Y,[u(f,{as:"a",href:s.route("player.show",t.uuid),class:"font-bold text-lg text-light-blue-400 hover:text-light-blue-500"},{default:_(()=>[h(n(t.username),1)]),_:2},1032,["href"]),e("p",O,n(t.uuid),1)]),e("div",Z,[e("p",$,n(s.__("Position"))+": ",1),e("div",q,[t.position?(o(),i("span",G,n(t.position),1)):(o(),i("span",J,n(s.__("None")),1))])]),e("div",K,[e("p",Q,n(s.__("Rating"))+": ",1),t.rating!=null?d((o(),p(x,{key:0,class:"w-8 h-8 focus:outline-none",name:`rating-${t.rating}`,content:t.rating},null,8,["name","content"])),[[r]]):(o(),i("p",X,n(s.__("None")),1))]),e("div",ee,[e("p",te,n(s.__("Rank"))+": ",1),e("div",se,[t.rank?(o(),i("p",ne,n(t.rank.name),1)):(o(),i("p",oe,n(s.__("None")),1)),t.rank&&t.rank.photo_url?d((o(),i("img",{key:2,src:t.rank.photo_url,alt:t.rank.name,title:t.rank.name,class:"h-8 w-8 focus:outline-none"},null,8,ae)),[[r]]):k("",!0)])]),e("div",ie,[e("p",le,n(s.__("Country"))+": ",1),e("div",re,[e("p",ce,n(t.country.name),1),d(e("img",{title:t.country.name,src:t.country.photo_path,alt:t.country.name,class:"h-8 w-8 -mt-0.5 focus:outline-none"},null,8,de),[[r]])])]),e("div",_e,[e("p",ue,n(s.__("Last Seen"))+": ",1),e("div",he,[d((o(),i("p",{class:"focus:outline-none dark:text-gray-200",title:s.formatToDayDateString(t.last_seen_at)},[h(n(s.formatTimeAgoToNow(t.last_seen_at)),1)],8,me)),[[r]])])]),e("div",ge,[u(f,{as:"button","preserve-scroll":!0,"preserve-state":!1,method:"delete",href:s.route("account-link.delete",t.uuid),class:"mt-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"},{default:_(()=>[h(n(s.__("Unlink"))+"\xA0",1),e("span",fe,"\xA0"+n(t.username),1)]),_:2},1032,["href"])])])]))),128))],2)])]),_:1})}const ve=V(D,[["render",pe]]);export{ve as default};
