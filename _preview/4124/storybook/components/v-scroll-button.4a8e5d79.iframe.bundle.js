(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"./src/components/VScrollButton.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../node_modules/.pnpm/core-js@3.36.1/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.36.1/node_modules/core-js/modules/es.regexp.to-string.js");var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.js"),emits=__webpack_require__("./src/types/emits.ts"),components_VScrollButtonvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VScrollButton",props:{isFilterSidebarVisible:{type:Boolean,default:!0}},emits:{tab:Object(emits.a)()},setup:function setup(props){return{hClass:Object(vue.computed)((function(){return props.isFilterSidebarVisible?"ltr:right-[22rem] rtl:left-[22rem]":"ltr:right-4 rtl:left-4"})),scrollToTop:function scrollToTop(e){var _a;((null===(_a=e.currentTarget)||void 0===_a?void 0:_a.closest("#main-page"))||window).scrollTo({top:0,left:0,behavior:"smooth"})}}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)(components_VScrollButtonvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("button",{staticClass:"scroll fixed bottom-4 mb-4 ms-auto h-14 w-14 rounded-full bg-pink text-center text-white transition-all duration-100 ease-linear hover:bg-dark-pink hover:shadow-md",class:_vm.hClass,attrs:{"aria-label":_vm.$t("browsePage.aria.scroll").toString(),type:"button"},on:{click:_vm.scrollToTop,keydown:function keydown($event){return!$event.type.indexOf("key")&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")||$event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey?null:_vm.$emit("tab",$event)}}},[_c("svg",{staticClass:"h-full w-full fill-curr",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"}},[_c("path",{attrs:{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"}})])])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"VScrollButton",exportName:"default",description:"",tags:{},props:[{name:"isFilterSidebarVisible",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"tab"}]}}}]);