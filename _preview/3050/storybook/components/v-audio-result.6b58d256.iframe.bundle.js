(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/components/VSearchResultsGrid/VAudioResult.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");var defineProperty=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),vue=(__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.array.join.js"),__webpack_require__("../node_modules/.pnpm/vue@2.7.14/node_modules/vue/dist/vue.js")),use_analytics=__webpack_require__("./src/composables/use-analytics.ts"),use_audio_snackbar=__webpack_require__("./src/composables/use-audio-snackbar.ts"),use_sensitive_media=__webpack_require__("./src/composables/use-sensitive-media.ts"),media=__webpack_require__("./src/constants/media.ts"),VAudioTrack=__webpack_require__("./src/components/VAudioTrack/VAudioTrack.vue");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var VAudioResultvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VAudioResult",components:{VAudioTrack:VAudioTrack.default},inheritAttrs:!1,props:{layout:{type:String,required:!0},size:{type:String},audio:{type:Object,required:!0},searchTerm:{type:String,required:!0},isRelated:{type:Boolean,required:!0}},setup:function setup(props){var sendCustomEvent=Object(use_analytics.a)().sendCustomEvent,audio=Object(vue.toRefs)(props).audio,shouldBlur=Object(use_sensitive_media.a)(audio).isHidden;return{sendSelectSearchResultEvent:function sendSelectSearchResultEvent(audio,_ref){var _a,_b;_ref.inWaveform||(Object(use_audio_snackbar.a)().hide(),sendCustomEvent("SELECT_SEARCH_RESULT",{id:audio.id,mediaType:media.b,query:props.searchTerm,provider:audio.provider,relatedTo:null,sensitivities:null!==(_b=null===(_a=audio.sensitivity)||void 0===_a?void 0:_a.join(","))&&void 0!==_b?_b:"",isBlurred:shouldBlur.value}))},sendInteractionEvent:function sendInteractionEvent(data){var component=props.isRelated?"VRelatedAudio":"box"===props.layout?"VAllResultsGrid":"AudioSearch";sendCustomEvent("AUDIO_INTERACTION",_objectSpread(_objectSpread({},data),{},{component:component}))}}}}),VSearchResultsGrid_VAudioResultvue_type_script_lang_ts_=VAudioResultvue_type_script_lang_ts_,componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VSearchResultsGrid_VAudioResultvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("li",[_c("VAudioTrack",_vm._g(_vm._b({attrs:{audio:_vm.audio,layout:_vm.layout,size:_vm.size,"search-term":_vm.searchTerm},on:{interacted:_vm.sendInteractionEvent,mousedown:function mousedown($event){return _vm.sendSelectSearchResultEvent(_vm.audio,$event)}}},"VAudioTrack",_vm.$attrs,!1),_vm.$listeners))],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VAudioTrack:__webpack_require__("./src/components/VAudioTrack/VAudioTrack.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VAudioResult",exportName:"default",description:"",tags:{},props:[{name:"layout",type:{name:'Extract<AudioLayout, "box" | "row">'},required:!0},{name:"size",type:{name:"AudioSize"}},{name:"audio",type:{name:"AudioDetail"},required:!0},{name:"searchTerm",type:{name:"string"},required:!0},{name:"isRelated",type:{name:"boolean"},required:!0}]}}}]);