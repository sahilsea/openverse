(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{"./src/pages/audio/_id/index.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../node_modules/.pnpm/core-js@3.36.1/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.36.1/node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.36.1/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.36.1/node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.36.1/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.36.1/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.36.1/node_modules/core-js/modules/web.dom-collections.for-each.js");var defineProperty=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),asyncToGenerator=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),vue=(__webpack_require__("../node_modules/.pnpm/regenerator-runtime@0.13.11/node_modules/regenerator-runtime/runtime.js"),__webpack_require__("../node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.js")),dist_runtime=__webpack_require__("../node_modules/.pnpm/@nuxtjs+composition-api@0.34.0_nuxt@2.17.2_vue@2.7.15/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),media=__webpack_require__("./src/constants/media.ts"),constants_window=__webpack_require__("./src/constants/window.ts"),use_analytics=__webpack_require__("./src/composables/use-analytics.ts"),use_sensitive_media=__webpack_require__("./src/composables/use-sensitive-media.ts"),single_result=__webpack_require__("./src/middleware/single-result.ts"),media_single_result=__webpack_require__("./src/stores/media/single-result.ts"),use_single_result_page_meta=__webpack_require__("./src/composables/use-single-result-page-meta.ts"),VAudioTrack=__webpack_require__("./src/components/VAudioTrack/VAudioTrack.vue"),VMediaReuse=__webpack_require__("./src/components/VMediaInfo/VMediaReuse.vue"),VRelatedMedia=__webpack_require__("./src/components/VMediaInfo/VRelatedMedia.vue"),VMediaDetails=__webpack_require__("./src/components/VMediaInfo/VMediaDetails.vue"),VSafetyWall=__webpack_require__("./src/components/VSafetyWall/VSafetyWall.vue"),VSingleResultControls=__webpack_require__("./src/components/VSingleResultControls.vue"),VAudioThumbnail=__webpack_require__("./src/components/VAudioThumbnail/VAudioThumbnail.vue"),VErrorSection=__webpack_require__("./src/components/VErrorSection/VErrorSection.vue");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){Object(defineProperty.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var _idvue_type_script_lang_ts_=Object(dist_runtime.b)({name:"AudioDetailPage",components:{VErrorSection:VErrorSection.default,VAudioThumbnail:VAudioThumbnail.default,VSingleResultControls:VSingleResultControls.default,VSafetyWall:VSafetyWall.default,VMediaDetails:VMediaDetails.default,VAudioTrack:VAudioTrack.default,VMediaReuse:VMediaReuse.default,VRelatedMedia:VRelatedMedia.default},layout:"content-layout",middleware:single_result.singleResultMiddleware,fetchOnServer:!1,setup:function setup(){var _a,singleResultStore=Object(media_single_result.a)(),route=Object(dist_runtime.k)(),audio=Object(vue.ref)((null===(_a=singleResultStore.audio)||void 0===_a?void 0:_a.id)&&singleResultStore.audio.id===route.value.params.id?singleResultStore.audio:null),fetchingError=Object(vue.computed)((function(){return singleResultStore.fetchState.fetchingError})),nuxtError=Object(dist_runtime.h)().error;Object(dist_runtime.i)(Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee(){var _a,audioId,fetchedAudio;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return audioId=route.value.params.id,_context.next=3,singleResultStore.fetch(media.b,audioId);case 3:(fetchedAudio=singleResultStore.audio)?audio.value=fetchedAudio:nuxtError(null!==(_a=singleResultStore.fetchState.fetchingError)&&void 0!==_a?_a:{});case 5:case"end":return _context.stop()}}),_callee)}))));var sendCustomEvent=Object(use_analytics.a)().sendCustomEvent,_useSensitiveMedia=Object(use_sensitive_media.a)(audio.value),isHidden=_useSensitiveMedia.isHidden,reveal=_useSensitiveMedia.reveal,hide=_useSensitiveMedia.hide,_useSingleResultPageM=Object(use_single_result_page_meta.a)(audio),pageTitle=_useSingleResultPageM.pageTitle,detailPageMeta=_useSingleResultPageM.detailPageMeta;return Object(dist_runtime.j)((function(){return _objectSpread(_objectSpread({},detailPageMeta),{},{title:pageTitle.value})})),{audio:audio,fetchingError:fetchingError,sendAudioEvent:function sendAudioEvent(data,component){sendCustomEvent("AUDIO_INTERACTION",_objectSpread(_objectSpread({},data),{},{component:component}))},skipToContentTargetId:constants_window.b,isHidden:isHidden,reveal:reveal,hide:hide}},head:{}}),audio_idvue_type_script_lang_ts_=_idvue_type_script_lang_ts_,componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(audio_idvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("main",{staticClass:"relative flex-grow",attrs:{id:_vm.skipToContentTargetId,tabindex:"-1"}},[_vm.fetchingError?_c("VErrorSection",{staticClass:"px-6 py-10 lg:px-10",attrs:{"fetching-error":_vm.fetchingError}}):_vm.audio?[_vm.isHidden?_c("VSafetyWall",{attrs:{media:_vm.audio},on:{reveal:_vm.reveal}}):[_c("VSingleResultControls",{attrs:{media:_vm.audio}}),_vm._v(" "),_c("VAudioTrack",{staticClass:"main-track",attrs:{layout:"full",audio:_vm.audio},on:{interacted:function interacted($event){return _vm.sendAudioEvent($event,"AudioDetailPage")}}}),_vm._v(" "),_c("div",{staticClass:"mx-auto mt-10 flex flex-col gap-10 px-6 lg:mt-16 lg:max-w-5xl lg:gap-16"},[_c("VMediaReuse",{attrs:{media:_vm.audio}}),_vm._v(" "),_c("VMediaDetails",{attrs:{media:_vm.audio},scopedSlots:_vm._u([{key:"thumbnail",fn:function fn(){return[_c("div",{staticClass:"h-[75px] w-[75px] flex-none overflow-hidden rounded-sm lg:h-30 lg:w-30"},[_c("VAudioThumbnail",{attrs:{audio:_vm.audio}})],1)]},proxy:!0}])}),_vm._v(" "),_vm.audio?_c("VRelatedMedia",{staticClass:"mb-12",attrs:{"media-type":"audio","related-to":_vm.audio.id}}):_vm._e()],1)]]:_vm._e()],2)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VErrorSection:__webpack_require__("./src/components/VErrorSection/VErrorSection.vue").default,VSafetyWall:__webpack_require__("./src/components/VSafetyWall/VSafetyWall.vue").default,VSingleResultControls:__webpack_require__("./src/components/VSingleResultControls.vue").default,VAudioTrack:__webpack_require__("./src/components/VAudioTrack/VAudioTrack.vue").default,VMediaReuse:__webpack_require__("./src/components/VMediaInfo/VMediaReuse.vue").default,VAudioThumbnail:__webpack_require__("./src/components/VAudioThumbnail/VAudioThumbnail.vue").default,VMediaDetails:__webpack_require__("./src/components/VMediaInfo/VMediaDetails.vue").default,VRelatedMedia:__webpack_require__("./src/components/VMediaInfo/VRelatedMedia.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"AudioDetailPage",exportName:"default",description:"",tags:{}}}}]);