import{o as d,c as p,s as o,b as a,T as w,w as O,k as n,U as f,e as c,x as b,y as v,F as L,g as $,t as g,h as y}from"./app.59cfc05c.js";function V(e){return e===0?!1:Array.isArray(e)&&e.length===0?!0:!e}function k(e){return(...t)=>!e(...t)}function T(e,t){return e===void 0&&(e="undefined"),e===null&&(e="null"),e===!1&&(e="false"),e.toString().toLowerCase().indexOf(t.trim())!==-1}function D(e,t,i,l){return t?e.filter(u=>T(l(u,i),t)).sort((u,r)=>l(u,i).length-l(r,i).length):e}function E(e){return e.filter(t=>!t.$isLabel)}function S(e,t){return i=>i.reduce((l,u)=>u[e]&&u[e].length?(l.push({$groupLabel:u[t],$isLabel:!0}),l.concat(u[e])):l,[])}function P(e,t,i,l,u){return r=>r.map(s=>{if(!s[i])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];const h=D(s[i],e,t,u);return h.length?{[l]:s[l],[i]:h}:[]})}const B=(...e)=>t=>e.reduce((i,l)=>l(i),t);var A={data(){return{search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default(e,t){return V(e)?"":t?e[t]:e}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default(){return[]}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1}},mounted(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0])},computed:{internalValue(){return this.modelValue||this.modelValue===0?Array.isArray(this.modelValue)?this.modelValue:[this.modelValue]:[]},filteredOptions(){const e=this.search||"",t=e.toLowerCase().trim();let i=this.options.concat();return this.internalSearch?i=this.groupValues?this.filterAndFlat(i,t,this.label):D(i,t,this.label,this.customLabel):i=this.groupValues?S(this.groupValues,this.groupLabel)(i):i,i=this.hideSelected?i.filter(k(this.isSelected)):i,this.taggable&&t.length&&!this.isExistingOption(t)&&(this.tagPosition==="bottom"?i.push({isTag:!0,label:e}):i.unshift({isTag:!0,label:e})),i.slice(0,this.optionsLimit)},valueKeys(){return this.trackBy?this.internalValue.map(e=>e[this.trackBy]):this.internalValue},optionKeys(){return(this.groupValues?this.flatAndStrip(this.options):this.options).map(t=>this.customLabel(t,this.label).toString().toLowerCase())},currentOptionLabel(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("update:modelValue",this.multiple?[]:null))},search(){this.$emit("search-change",this.search)}},emits:["open","search-change","close","select","update:modelValue","remove","tag"],methods:{getValue(){return this.multiple?this.internalValue:this.internalValue.length===0?null:this.internalValue[0]},filterAndFlat(e,t,i){return B(P(t,i,this.groupValues,this.groupLabel,this.customLabel),S(this.groupValues,this.groupLabel))(e)},flatAndStrip(e){return B(S(this.groupValues,this.groupLabel),E)(e)},updateSearch(e){this.search=e},isExistingOption(e){return this.options?this.optionKeys.indexOf(e)>-1:!1},isSelected(e){const t=this.trackBy?e[this.trackBy]:e;return this.valueKeys.indexOf(t)>-1},isOptionDisabled(e){return!!e.$isDisabled},getOptionLabel(e){if(V(e))return"";if(e.isTag)return e.label;if(e.$isLabel)return e.$groupLabel;const t=this.customLabel(e,this.label);return V(t)?"":t},select(e,t){if(e.$isLabel&&this.groupSelect){this.selectGroup(e);return}if(!(this.blockKeys.indexOf(t)!==-1||this.disabled||e.$isDisabled||e.$isLabel)&&!(this.max&&this.multiple&&this.internalValue.length===this.max)&&!(t==="Tab"&&!this.pointerDirty)){if(e.isTag)this.$emit("tag",e.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(e)){t!=="Tab"&&this.removeElement(e);return}this.$emit("select",e,this.id),this.multiple?this.$emit("update:modelValue",this.internalValue.concat([e])):this.$emit("update:modelValue",e),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},selectGroup(e){const t=this.options.find(i=>i[this.groupLabel]===e.$groupLabel);if(!!t){if(this.wholeGroupSelected(t)){this.$emit("remove",t[this.groupValues],this.id);const i=this.internalValue.filter(l=>t[this.groupValues].indexOf(l)===-1);this.$emit("update:modelValue",i)}else{const i=t[this.groupValues].filter(l=>!(this.isOptionDisabled(l)||this.isSelected(l)));this.$emit("select",i,this.id),this.$emit("update:modelValue",this.internalValue.concat(i))}this.closeOnSelect&&this.deactivate()}},wholeGroupSelected(e){return e[this.groupValues].every(t=>this.isSelected(t)||this.isOptionDisabled(t))},wholeGroupDisabled(e){return e[this.groupValues].every(this.isOptionDisabled)},removeElement(e,t=!0){if(this.disabled||e.$isDisabled)return;if(!this.allowEmpty&&this.internalValue.length<=1){this.deactivate();return}const i=typeof e=="object"?this.valueKeys.indexOf(e[this.trackBy]):this.valueKeys.indexOf(e);if(this.$emit("remove",e,this.id),this.multiple){const l=this.internalValue.slice(0,i).concat(this.internalValue.slice(i+1));this.$emit("update:modelValue",l)}else this.$emit("update:modelValue",null);this.closeOnSelect&&t&&this.deactivate()},removeLastElement(){this.blockKeys.indexOf("Delete")===-1&&this.search.length===0&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate(){this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&this.pointer===0&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick(()=>this.$refs.search&&this.$refs.search.focus())):this.$el.focus(),this.$emit("open",this.id))},deactivate(){!this.isOpen||(this.isOpen=!1,this.searchable?this.$refs.search&&this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle(){this.isOpen?this.deactivate():this.activate()},adjustPosition(){if(typeof window>"u")return;const e=this.$el.getBoundingClientRect().top,t=window.innerHeight-this.$el.getBoundingClientRect().bottom;t>this.maxHeight||t>e||this.openDirection==="below"||this.openDirection==="bottom"?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(t-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(e-40,this.maxHeight))}}},H={data(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition(){return this.pointer*this.optionHeight},visibleElements(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions(){this.pointerAdjust()},isOpen(){this.pointerDirty=!1},pointer(){this.$refs.search&&this.$refs.search.setAttribute("aria-activedescendant",this.id+"-"+this.pointer.toString())}},methods:{optionHighlight(e,t){return{"multiselect__option--highlight":e===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(t)}},groupHighlight(e,t){if(!this.groupSelect)return["multiselect__option--disabled",{"multiselect__option--group":t.$isLabel}];const i=this.options.find(l=>l[this.groupLabel]===t.$groupLabel);return i&&!this.wholeGroupDisabled(i)?["multiselect__option--group",{"multiselect__option--highlight":e===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(i)}]:"multiselect__option--disabled"},addPointerElement({key:e}="Enter"){this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset()},pointerForward(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0},pointerBackward(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0},pointerReset(){!this.closeOnSelect||(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()},pointerSet(e){this.pointer=e,this.pointerDirty=!0}}},M={name:"vue-multiselect",mixins:[A,H],props:{name:{type:String,default:""},modelValue:{type:null,default(){return[]}},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:e=>`and ${e} more`},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{isSingleLabelVisible(){return(this.singleValue||this.singleValue===0)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible(){return!this.internalValue.length&&(!this.searchable||!this.isOpen)},visibleValues(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue(){return this.internalValue[0]},deselectLabelText(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText(){return this.showLabels?this.selectLabel:""},selectGroupLabelText(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText(){return this.showLabels?this.selectedLabel:""},inputStyle(){return this.searchable||this.multiple&&this.modelValue&&this.modelValue.length?this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}:""},contentStyle(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove(){return this.openDirection==="above"||this.openDirection==="top"?!0:this.openDirection==="below"||this.openDirection==="bottom"?!1:this.preferredOpenDirection==="above"},showSearchInput(){return this.searchable&&(this.hasSingleSelectedSlot&&(this.visibleSingleValue||this.visibleSingleValue===0)?this.isOpen:!0)}}};const F={ref:"tags",class:"multiselect__tags"},K={class:"multiselect__tags-wrap"},G={class:"multiselect__spinner"},C={key:0},N={class:"multiselect__option"},R={class:"multiselect__option"},z=y("No elements found. Consider changing the search query."),j={class:"multiselect__option"},q=y("List is empty.");function I(e,t,i,l,u,r){return d(),p("div",{tabindex:e.searchable?-1:i.tabindex,class:[{"multiselect--active":e.isOpen,"multiselect--disabled":i.disabled,"multiselect--above":r.isAbove},"multiselect"],onFocus:t[14]||(t[14]=s=>e.activate()),onBlur:t[15]||(t[15]=s=>e.searchable?!1:e.deactivate()),onKeydown:[t[16]||(t[16]=f(n(s=>e.pointerForward(),["self","prevent"]),["down"])),t[17]||(t[17]=f(n(s=>e.pointerBackward(),["self","prevent"]),["up"]))],onKeypress:t[18]||(t[18]=f(n(s=>e.addPointerElement(s),["stop","self"]),["enter","tab"])),onKeyup:t[19]||(t[19]=f(s=>e.deactivate(),["esc"])),role:"combobox","aria-owns":"listbox-"+e.id},[o(e.$slots,"caret",{toggle:e.toggle},()=>[a("div",{onMousedown:t[1]||(t[1]=n(s=>e.toggle(),["prevent","stop"])),class:"multiselect__select"},null,32)]),o(e.$slots,"clear",{search:e.search}),a("div",F,[o(e.$slots,"selection",{search:e.search,remove:e.removeElement,values:r.visibleValues,isOpen:e.isOpen},()=>[b(a("div",K,[(d(!0),p(L,null,$(r.visibleValues,(s,h)=>o(e.$slots,"tag",{option:s,search:e.search,remove:e.removeElement},()=>[(d(),p("span",{class:"multiselect__tag",key:h},[a("span",{textContent:g(e.getOptionLabel(s))},null,8,["textContent"]),a("i",{tabindex:"1",onKeypress:f(n(m=>e.removeElement(s),["prevent"]),["enter"]),onMousedown:n(m=>e.removeElement(s),["prevent"]),class:"multiselect__tag-icon"},null,40,["onKeypress","onMousedown"])]))])),256))],512),[[v,r.visibleValues.length>0]]),e.internalValue&&e.internalValue.length>i.limit?o(e.$slots,"limit",{key:0},()=>[a("strong",{class:"multiselect__strong",textContent:g(i.limitText(e.internalValue.length-i.limit))},null,8,["textContent"])]):c("v-if",!0)]),a(w,{name:"multiselect__loading"},{default:O(()=>[o(e.$slots,"loading",{},()=>[b(a("div",G,null,512),[[v,i.loading]])])]),_:3}),e.searchable?(d(),p("input",{key:0,ref:"search",name:i.name,id:e.id,type:"text",autocomplete:"off",spellcheck:"false",placeholder:e.placeholder,style:r.inputStyle,value:e.search,disabled:i.disabled,tabindex:i.tabindex,onInput:t[2]||(t[2]=s=>e.updateSearch(s.target.value)),onFocus:t[3]||(t[3]=n(s=>e.activate(),["prevent"])),onBlur:t[4]||(t[4]=n(s=>e.deactivate(),["prevent"])),onKeyup:t[5]||(t[5]=f(s=>e.deactivate(),["esc"])),onKeydown:[t[6]||(t[6]=f(n(s=>e.pointerForward(),["prevent"]),["down"])),t[7]||(t[7]=f(n(s=>e.pointerBackward(),["prevent"]),["up"])),t[9]||(t[9]=f(n(s=>e.removeLastElement(),["stop"]),["delete"]))],onKeypress:t[8]||(t[8]=f(n(s=>e.addPointerElement(s),["prevent","stop","self"]),["enter"])),class:"multiselect__input","aria-controls":"listbox-"+e.id},null,44,["name","id","placeholder","value","disabled","tabindex","aria-controls"])):c("v-if",!0),r.isSingleLabelVisible?(d(),p("span",{key:1,class:"multiselect__single",onMousedown:t[10]||(t[10]=n((...s)=>e.toggle&&e.toggle(...s),["prevent"]))},[o(e.$slots,"singleLabel",{option:r.singleValue},()=>[y(g(e.currentOptionLabel),1)])],32)):c("v-if",!0),r.isPlaceholderVisible?(d(),p("span",{key:2,class:"multiselect__placeholder",onMousedown:t[11]||(t[11]=n((...s)=>e.toggle&&e.toggle(...s),["prevent"]))},[o(e.$slots,"placeholder",{},()=>[y(g(e.placeholder),1)])],32)):c("v-if",!0)],512),a(w,{name:"multiselect"},{default:O(()=>[b(a("div",{class:"multiselect__content-wrapper",onFocus:t[12]||(t[12]=(...s)=>e.activate&&e.activate(...s)),tabindex:"-1",onMousedown:t[13]||(t[13]=n(()=>{},["prevent"])),style:{maxHeight:e.optimizedHeight+"px"},ref:"list"},[a("ul",{class:"multiselect__content",style:r.contentStyle,role:"listbox",id:"listbox-"+e.id},[o(e.$slots,"beforeList"),e.multiple&&e.max===e.internalValue.length?(d(),p("li",C,[a("span",N,[o(e.$slots,"maxElements",{},()=>[y("Maximum of "+g(e.max)+" options selected. First remove a selected option to select another.",1)])])])):c("v-if",!0),!e.max||e.internalValue.length<e.max?(d(!0),p(L,{key:1},$(e.filteredOptions,(s,h)=>(d(),p("li",{class:"multiselect__element",key:h,id:e.id+"-"+h,role:s&&(s.$isLabel||s.$isDisabled)?null:"option"},[s&&(s.$isLabel||s.$isDisabled)?c("v-if",!0):(d(),p("span",{key:0,class:[e.optionHighlight(h,s),"multiselect__option"],onClick:n(m=>e.select(s),["stop"]),onMouseenter:n(m=>e.pointerSet(h),["self"]),"data-select":s&&s.isTag?e.tagPlaceholder:r.selectLabelText,"data-selected":r.selectedLabelText,"data-deselect":r.deselectLabelText},[o(e.$slots,"option",{option:s,search:e.search,index:h},()=>[a("span",null,g(e.getOptionLabel(s)),1)])],42,["onClick","onMouseenter","data-select","data-selected","data-deselect"])),s&&(s.$isLabel||s.$isDisabled)?(d(),p("span",{key:1,"data-select":e.groupSelect&&r.selectGroupLabelText,"data-deselect":e.groupSelect&&r.deselectGroupLabelText,class:[e.groupHighlight(h,s),"multiselect__option"],onMouseenter:n(m=>e.groupSelect&&e.pointerSet(h),["self"]),onMousedown:n(m=>e.selectGroup(s),["prevent"])},[o(e.$slots,"option",{option:s,search:e.search,index:h},()=>[a("span",null,g(e.getOptionLabel(s)),1)])],42,["data-select","data-deselect","onMouseenter","onMousedown"])):c("v-if",!0)],8,["id","role"]))),128)):c("v-if",!0),b(a("li",null,[a("span",R,[o(e.$slots,"noResult",{search:e.search},()=>[z])])],512),[[v,i.showNoResults&&e.filteredOptions.length===0&&e.search&&!i.loading]]),b(a("li",null,[a("span",j,[o(e.$slots,"noOptions",{},()=>[q])])],512),[[v,i.showNoOptions&&e.options.length===0&&!e.search&&!i.loading]]),o(e.$slots,"afterList")],12,["id"])],36),[[v,e.isOpen]])]),_:3})],42,["tabindex","aria-owns"])}M.render=I;export{M as s};
