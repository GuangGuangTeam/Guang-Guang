/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/bitong.jpeg";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/class2.jpeg";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(32),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/macbook/Desktop/test/qa/src/scripts/view/component/foot.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] foot.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45356347", Component.options)
  } else {
    hotAPI.reload("data-v-45356347", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/class3.jpeg";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/class1.jpeg";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/logo.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/iconfont/iconfont.ttf";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/iconfont/iconfont.woff";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(48),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/macbook/Desktop/test/qa/src/scripts/view/main/main.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-780428d0", Component.options)
  } else {
    hotAPI.reload("data-v-780428d0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/ba1.jpeg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/t1.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/m1.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/m2.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/m3.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/m4.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/m5.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/m6.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/m7.png";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/m8.png";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/ad1.jpeg";

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styles_app_scss__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styles_app_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styles_app_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(25);







__WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_router___default.a);

const router = new __WEBPACK_IMPORTED_MODULE_2_vue_router___default.a({
  routes: __WEBPACK_IMPORTED_MODULE_3__routes__["a" /* default */],
  linkActiveClass: 'active'
});

new __WEBPACK_IMPORTED_MODULE_1_vue___default.a({
  el: '#guangguang',
  router
});

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = window.Vue;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = window.VueRouter;

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_index_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__view_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_main_main_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_main_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__view_main_main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_classify_classify_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_classify_classify_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__view_classify_classify_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_brand_brand_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_brand_brand_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__view_brand_brand_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_cart_cart_vue__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_cart_cart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__view_cart_cart_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_home_home_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_home_home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__view_home_home_vue__);







/* harmony default export */ __webpack_exports__["a"] = ([{
  path: '/',
  component: __WEBPACK_IMPORTED_MODULE_0__view_index_vue___default.a,
  redirect: '/main',
  children: [{
    path: '/main',
    component: __WEBPACK_IMPORTED_MODULE_1__view_main_main_vue___default.a
  }, {
    path: '/classify',
    component: __WEBPACK_IMPORTED_MODULE_2__view_classify_classify_vue___default.a
  }]
}, {
  path: '/brand',
  component: __WEBPACK_IMPORTED_MODULE_3__view_brand_brand_vue___default.a
}, {
  path: '/cart',
  component: __WEBPACK_IMPORTED_MODULE_4__view_cart_cart_vue___default.a
}, {
  path: '/home',
  component: __WEBPACK_IMPORTED_MODULE_5__view_home_home_vue___default.a
  //   {
  //     path: '/detail/:id',
  //     component: Detail,
  //     name: 'detail'
  //   }
}]);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(53),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/macbook/Desktop/test/qa/src/scripts/view/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b85241ca", Component.options)
  } else {
    hotAPI.reload("data-v-b85241ca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_top_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_top_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__component_top_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_foot_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_foot_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__component_foot_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__main_main_vue__);
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },
  methods: {},

  components: {
    MainCont: __WEBPACK_IMPORTED_MODULE_2__main_main_vue___default.a,
    Top: __WEBPACK_IMPORTED_MODULE_0__component_top_vue___default.a,
    Foot: __WEBPACK_IMPORTED_MODULE_1__component_foot_vue___default.a
  }
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(30),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/macbook/Desktop/test/qa/src/scripts/view/component/top.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] top.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00ef6be8", Component.options)
  } else {
    hotAPI.reload("data-v-00ef6be8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__media_images_logo_png__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__media_images_logo_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__media_images_logo_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__media_images_iconfont_iconfont_ttf__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__media_images_iconfont_iconfont_ttf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__media_images_iconfont_iconfont_ttf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__media_images_iconfont_iconfont_woff__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__media_images_iconfont_iconfont_woff___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__media_images_iconfont_iconfont_woff__);
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },
  methods: {}
});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-top"
  }, [_c('div', {
    staticClass: "m-head"
  }, [_c('h1', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(6),
      "alt": ""
    }
  })])]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "text",
      "placeholder": "请输入宝贝关键词"
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "yo-ico"
  }, [_vm._v("")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-00ef6be8", module.exports)
  }
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__media_images_iconfont_iconfont_ttf__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__media_images_iconfont_iconfont_ttf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__media_images_iconfont_iconfont_ttf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__media_images_iconfont_iconfont_woff__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__media_images_iconfont_iconfont_woff___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__media_images_iconfont_iconfont_woff__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },
  methods: {}
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-foot"
  }, [_c('ul', [_c('router-link', {
    attrs: {
      "to": "/main",
      "tag": "li"
    }
  }, [_c('i', {
    staticClass: "yo-ico"
  }, [_vm._v("")]), _vm._v(" "), _c('b', [_vm._v("首页")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/classify",
      "tag": "li"
    }
  }, [_c('i', {
    staticClass: "yo-ico"
  }, [_vm._v("")]), _vm._v(" "), _c('b', [_vm._v("分类")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/brand",
      "tag": "li"
    }
  }, [_c('i', {
    staticClass: "yo-ico"
  }, [_vm._v("")]), _vm._v(" "), _c('b', [_vm._v("品牌")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/cart",
      "tag": "li"
    }
  }, [_c('i', {
    staticClass: "yo-ico"
  }, [_vm._v("")]), _vm._v(" "), _c('b', [_vm._v("购物车")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/home",
      "tag": "li"
    }
  }, [_c('i', {
    staticClass: "yo-ico"
  }, [_vm._v("")]), _vm._v(" "), _c('b', [_vm._v("我的")])])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-45356347", module.exports)
  }
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_carousel_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_carousel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__component_carousel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_products_list_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_products_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__component_products_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_main_classify_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_main_classify_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__component_main_classify_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__media_images_menu_m1_png__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__media_images_menu_m1_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__media_images_menu_m1_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__media_images_menu_m2_png__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__media_images_menu_m2_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__media_images_menu_m2_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__media_images_menu_m3_png__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__media_images_menu_m3_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__media_images_menu_m3_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__media_images_menu_m4_png__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__media_images_menu_m4_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__media_images_menu_m4_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__media_images_menu_m5_png__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__media_images_menu_m5_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__media_images_menu_m5_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__media_images_menu_m6_png__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__media_images_menu_m6_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__media_images_menu_m6_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__media_images_menu_m7_png__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__media_images_menu_m7_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__media_images_menu_m7_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__media_images_menu_m8_png__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__media_images_menu_m8_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__media_images_menu_m8_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__media_images_class1_jpeg__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__media_images_class1_jpeg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__media_images_class1_jpeg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__media_images_ad1_jpeg__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__media_images_ad1_jpeg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__media_images_ad1_jpeg__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//















/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {};
    },
    components: {
        MainClassify: __WEBPACK_IMPORTED_MODULE_2__component_main_classify_vue___default.a,
        Carousel: __WEBPACK_IMPORTED_MODULE_0__component_carousel_vue___default.a,
        ProductsList: __WEBPACK_IMPORTED_MODULE_1__component_products_list_vue___default.a
    }
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(35)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(41),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/macbook/Desktop/test/qa/src/scripts/view/component/carousel.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] carousel.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28df328e", Component.options)
  } else {
    hotAPI.reload("data-v-28df328e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(38)("6a6d853e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.7@css-loader/index.js?sourceMap!../../../../node_modules/_vue-loader@12.2.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-28df328e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!../../../../node_modules/_vue-loader@12.2.2@vue-loader/lib/selector.js?type=styles&index=0!./carousel.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.7@css-loader/index.js?sourceMap!../../../../node_modules/_vue-loader@12.2.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-28df328e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!../../../../node_modules/_vue-loader@12.2.2@vue-loader/lib/selector.js?type=styles&index=0!./carousel.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(true);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/**\r\n * Yo框架全局base定义\r\n * 本文件与variables不同地方在于，这里所定义的map可以使用在variables和任何地方\r\n * lib中map使用“_”开头，本文件中不使用\"_\"\r\n * base ⇌ extra\r\n */\n/**\r\n * Yo框架全局base定义\r\n * 本文件与variables不同地方在于，这里所定义的map可以使用在variables和任何地方\r\n * 本文件中map使用\"_\"开头，extra中不使用\"_\"\r\n * base ⇌ extra\r\n */\n/**\r\n * 合并base和extra中的同类base map\r\n * 用以解决业务方升级Yo时需比base和extra的一致性\r\n * 当extra为空时，base map将以base文件里的定义作为默认值\r\n * 当extra不为空时，base map使用extra文件里的定义\r\n */\n/**\n * Yo框架全局Variables\n * Yo基础变量map，如果不想定义某属性，将其value设置为null；\n * Yo仅使用2种长度单位：px用于边框，rem用于除边框之外的所有地方\n * variables中map使用“_”开头，本文件中不使用\"_\"\n * variables ⇌ config\n */\n/**\r\n * Yo框架全局Variables\r\n * Yo基础变量map，如果不想定义某属性，将其value设置为null\r\n * Yo仅使用2种长度单位：px用于边框，rem用于除边框之外的所有地方\r\n * 本文件中map使用\"_\"开头，config中不使用\"_\"\r\n * variables ⇌ config\r\n */\n/**\r\n * 合并variables和config中的同类map\r\n * 用以解决业务方升级Yo时需比config和variables的一致性\r\n * 当config为空时，使用variables中的map作为默认值\r\n * 当config不为空时，使用config中的定义\r\n */\n/**\r\n * Yo框架自定义全局函数\r\n * 扩充Sass默认函数库，用以增强语法\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的第一项\r\n * @function first\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的最后一项\r\n * @function last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的倒数第几项\r\n * @function nth-last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要返回的值在list中的倒数位置 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 移除SassList中的某个项目并返回新的List\r\n * @function remove\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {String} $value 指定需要被删除的值 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 截取SassList中的某个部分并返回新的List\r\n * @function slice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $start 指定需要截取的开始下标 <2.1.0>\r\n * @param {Integer} $end 指定需要截取的结束下标（不包括end），当该值缺省时默认为末尾下标 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 从SassList中添加/删除项目，然后返回新的List。\r\n * @function splice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要移除的开始下标 <2.1.0>\r\n * @param {Integer} $count 指定需要移除的数量，不可以为负值，0表示不移除 <2.1.0>\r\n * @param {String} $values 指定需要添加的新值（可以是多个），如果该值缺省，则表示只移除不添加新值 <2.1.0>\r\n */\n/**\r\n * Yo框架全局基础方法\r\n * 包括响应式方案，CSS3兼容性方案，厂商前缀方案，iconfont方案，flex布局等全局方法\r\n */\n/**\r\n * @module 常用方法\r\n * @description 给需要的属性加厂家前缀\r\n * @method prefix\r\n * @version 1.0.0\r\n * @param {String} $property 指定属性 <1.0.0>\r\n * @param {String} $value 指定属性值 <1.0.0>\r\n * @skip\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义字体图标\r\n * @method _iconfont\r\n * @version 1.0.0\r\n * @skip\r\n */\n/**\r\n * @module 常用方法\r\n * @description 四则运算(系统要求：iOS6.0+,Android4.4+)\r\n * @method calc\r\n * @version 1.7.0\r\n * @param {String} $property 指定需要进行计算的CSS属性 <1.7.0>\r\n * @param {String} $value 与原生CSS语法一致，区别在于需要使用引号包裹表达式 <1.7.0>\r\n * @example\r\n * .calc {\r\n *     @include calc(width, \"100% - 100px\");\r\n * }\r\n *\r\n * <div class=\"calc\">四则运算</div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义响应式方案\r\n * @method responsive\r\n * @version 1.0.0\r\n * @param {String} $media 指定媒体查询条件，取值为`config`文件map `media-types`中的值 <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 清除浮动方案\r\n * @method clearfix\r\n * @version 1.0.0\r\n * @param {String} $type 指定清除浮动的方式，包括：pseudo-element | bfc，默认值：pseudo-element <1.8.5>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 清除行内级元素间间隙方案\r\n * @method clearspace\r\n * @version 3.0.3\r\n * @param {Length} $font-size 指定子元素字号，默认值：.14rem <3.0.3>\r\n * @example\r\n * .demo {\r\n *     @include clearspace;\r\n * }\r\n *\r\n * <div class=\"demo\">\r\n *      <span class=\"item\">1</span>\r\n *      <span class=\"item\">2</span>\r\n *      <span class=\"item\">3</span>\r\n * </div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 描述元素内容在横、纵方向上的对齐方式，默认为水平垂直居中对齐\r\n * @method align\r\n * @version 2.0.0\r\n * @param {String} $flexbox 元素布局方式，可选值：flex | inline-flex，默认值：flex <2.0.0>\r\n * @param {Keyword} $justify-content 元素内容的水平对齐方式，取值与`justify-content`属性一致，默认值：center <2.0.0>\r\n * @param {Keyword} $align-items 元素内容的垂直对齐方式，取值与`align-items`属性一致，默认值：center <2.0.0>\r\n * @example\r\n * .demo {\r\n *     @include align;\r\n * }\r\n *\r\n * <div class=\"demo\">\r\n *      <img alt=\"未知尺寸图片居中\" />\r\n * </div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义是否有滚动条\r\n * @method overflow\r\n * @version 1.0.0\r\n * @param {String} $overflow 取值与最新原生语法一致，默认值：auto <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 生成全屏方法\r\n * @method fullscreen\r\n * @version 1.7.0\r\n * @param {Integer} $z-index 指定层叠级别 <1.7.0>\r\n * @param {Keywords} $position 指定定位方式，取除`static | relative`之外的值，默认值：absolute <1.8.5>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义使用何种滤镜\r\n * @method filter\r\n * @version 1.7.0\r\n * @param {String} $filter 取值与`filter`属性一致 <1.7.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义UA默认外观\r\n * @method appearance\r\n * @version 1.0.0\r\n * @param {String} $appearance 取值与`appearance`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义如何选中内容\r\n * @method user-select\r\n * @version 1.0.0\r\n * @param {String} $user-select 取值与`user-select`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义盒模型\r\n * @method box-sizing\r\n * @version 1.0.0\r\n * @param {String} $box-sizing 指定盒模型类型，取值与`box-sizing`属性一致，默认值：border-box <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义渐变色值\r\n * @method gradient\r\n * @version 1.0.0\r\n * @param {String} $type 指定渐变的4种类型：linear, repeating-linear, radial, repeating-radial <1.0.0>\r\n * @param {String} $dir 指定渐变方向，可选值：[left | right] || [top | bottom] | angle <2.0.0>\r\n * @param {String} $gradient 指定渐变取值，与w3c最新原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景图像缩放（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-size\r\n * @version 1.4.0\r\n * @param {Keywords | Length} $background-size 指定背景图缩放值，取值与`background-size`属性一致 <1.4.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景裁减（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-clip\r\n * @version 1.6.0\r\n * @param {Keywords} $background-clip 指定背景图缩放值，取值与`background-clip`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景显示区域（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-origin\r\n * @version 1.6.0\r\n * @param {Keywords} $background-origin 指定背景图`background-position`属性计算相对的参考点，取值与`background-origin`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 为元素添加边框（包括1px边框）\r\n * @method border\r\n * @version 2.0.0\r\n * @param {String} $border-width 指定边框厚度（单位为px），默认值：1px，取值与`border-width`属性一致，不同方向代表边框位置 <2.0.0>\r\n * @param {String} $border-color 指定边框颜色 <2.0.0>\r\n * @param {String} $border-style 指定边框样式 <2.0.0>\r\n * @param {String} $radius 指定边框圆角半径，默认值：null <2.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义圆角，用于修复某些安卓机型上“圆角+边框+背景”，背景溢出的情况\r\n * @method border-radius\r\n * @version 1.6.0\r\n * @param {Length} $border-radius 指定元素的圆角半径，取值与`border-radius`属性一致 <1.6.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义简单变换\r\n * @method transform\r\n * @version 1.0.0\r\n * @param {String} $transform 取值范围与`transform`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义变换原点\r\n * @method transform-origin\r\n * @version 1.0.0\r\n * @param {Length | Percentage | Keywords} $transform-origin 取值范围与`transform-origin`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定某元素的子元素是（看起来）位于三维空间内，还是在该元素所在的平面内被扁平化\r\n * @method transform-style\r\n * @version 2.0.0\r\n * @param {String} $transform-style 取值范围与`transform-style`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定观察者与「z=0」平面的距离，使具有三维位置变换的元素产生透视效果。「z>0」的三维元素比正常大，而「z<0」时则比正常小，大小程度由该属性的值决定。\r\n * @method perspective\r\n * @version 2.0.0\r\n * @param {none | Length} $perspective 取值范围与`perspective`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定透视点的位置\r\n * @method perspective-origin\r\n * @version 2.0.0\r\n * @param {Length | Percentage | Keywords} $perspective-origin 取值范围与`perspective-origin`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定元素背面面向用户时是否可见\r\n * @method backface-visibility\r\n * @version 2.0.0\r\n * @param {Keywords} $backface-visibility 取值范围与`backface-visibility`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 定义动画\r\n * @method animation\r\n * @version 1.0.0\r\n * @param {String} $animation 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定需要引用的动画名称\r\n * @method animation-name\r\n * @version 3.0.0\r\n * @param {String} $animation-name 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画运行一次所持续的时长\r\n * @method animation-duration\r\n * @version 3.0.0\r\n * @param {String} $animation-duration 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画运行方式\r\n * @method animation-timing-function\r\n * @version 3.0.0\r\n * @param {String} $animation-timing-function 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画延迟多久之后再开始\r\n * @method animation-delay\r\n * @version 3.0.0\r\n * @param {String} $animation-delay 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画循环几次\r\n * @method animation-iteration-count\r\n * @version 3.0.0\r\n * @param {String} $animation-iteration-count 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画的运动方向\r\n * @method animation-direction\r\n * @version 3.0.0\r\n * @param {String} $animation-direction 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画的运动状态\r\n * @method animation-play-state\r\n * @version 3.0.0\r\n * @param {String} $animation-play-state 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画时间之外的状态\r\n * @method animation-fill-mode\r\n * @version 3.0.0\r\n * @param {String} $animation-fill-mode 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Transition\r\n * @description 定义补间\r\n * @method transition\r\n * @version 1.0.0\r\n * @param {String} $transition 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义显示类型为伸缩盒\r\n * @method flexbox\r\n * @version 1.0.0\r\n * @param {String} $flexbox 默认值：flex，可选值：flex | inline-flex <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素如何分配空间\r\n * @method flex\r\n * @version 1.0.0\r\n * @param {Number} $flex 取值与`flex`属性一致，默认值：1 <1.0.0>\r\n * @param {String} $direction 默认值: row，可选值：row | column <1.5.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的排版顺序\r\n * @method order\r\n * @version 1.0.0\r\n * @param {Integer} $order 取值与`order`属性一致，默认值：1 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素流动方向及遇见边界时是否换行(要求系统：iOS7.0+, Android4.4+)\r\n * @method flex-flow\r\n * @version 2.0.0\r\n * @param {String} $flex-flow 取值与`flex-flow`属性一致，默认值：row nowrap <2.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的流动方向\r\n * @method flex-direction\r\n * @version 1.0.0\r\n * @param {String} $flex-direction 取值与`flex-direction`属性一致，默认值：row <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素溢出后排版(要求系统：iOS7.0+, Android4.4+)\r\n * @method flex-wrap\r\n * @version 1.0.0\r\n * @param {String} $flex-wrap 取值与`flex-wrap`属性一致，默认值：nowrap <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器主轴对齐方式(其中`space-around`值需要iOS7.0+,Android4.4+)\r\n * @method justify-content\r\n * @version 1.0.0\r\n * @param {String} $justify-content 取值与`justify-content`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义多行弹性容器侧轴对齐方式(要求系统：iOS7.0+,Android4.4+)\r\n * @method align-content\r\n * @version 1.8.5\r\n * @param {String} $align-content 取值与`align-content`属性一致，默认值：center <1.8.5>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义单行弹性容器侧轴对齐方式\r\n * @method align-items\r\n * @version 1.0.0\r\n * @param {String} $align-items 取值与`align-items`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器中子元素自身的在侧轴对齐方式(要求系统：iOS7.0+,Android4.4+)\r\n * @method align-self\r\n * @version 1.0.0\r\n * @param {String} $align-self 取值与`align-self`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成矩形方法\r\n * @method rect\r\n * @version 1.0.0\r\n * @param {Length} $width 定义矩形的长度 <1.0.0>\r\n * @param {Length} $height 定义矩形的高度 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成正方形方法\r\n * @method square\r\n * @version 1.0.0\r\n * @param {Length} $size 定义正方形的边长 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成圆形方法\r\n * @method circle\r\n * @version 1.0.0\r\n * @param {Length} $size 定义圆的半径长度 <1.0.0>\r\n * @param {Length} $radius 定义圆的圆角半径长度 <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 在自适应宽度情况下，确保内容元素的宽高比固定，比如：实现随屏幕大小而变化的正方形。\r\n * @method fixed-scale\r\n * @version 3.0.10\r\n * @param {Length} $width 默认值：100%。用以指定内容元素的初始宽度，由于尺寸需动态变化，不要使用固定单位 <3.0.10>\r\n * @param {Length} $scale 默认值：1/1，即正方形。用以指定内容元素的宽度高比 <3.0.10>\r\n */\n/**\r\n * @module 文本\r\n * @description 链接处理方法\r\n * @method link\r\n * @version 1.0.0\r\n * @param {Color} $color 定义链接颜色 <1.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 文本碰到边界是否换行\r\n * @method wrap\r\n * @version 1.0.0\r\n * @param {Boolean} $is-wrap 定义文本是否换行，默认值：true <2.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 单行文本溢出时显示省略号\r\n * @method ellipsis\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n * @param {Integer} $line-clamp 定义需要显示的行数，默认值：1（即使用单行溢出的处理方案），需要注意的是本参数只支持webkit内核 <2.1.2>\r\n */\n/**\r\n * @module 文本\r\n * @description 文字隐藏方案\r\n * @method texthide\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n */\n/**\r\n * Yo框架全局Reset\r\n * Yo重置Mobile及高级浏览器上常见的差异\r\n */\n*,\n::before,\n::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n}\nhtml,\nbody {\n  overflow: hidden;\n  height: 100%;\n}\n::-webkit-scrollbar {\n  display: none;\n}\nhtml {\n  background-color: #eee;\n  color: #212121;\n  font-size: 100px;\n  -webkit-user-select: none;\n  user-select: none;\n}\nbody {\n  margin: 0;\n  font-size: 0.14em;\n  line-height: 1.5;\n  font-family: Helvetica Neue, Helvetica, STHeiTi, sans-serif;\n}\nul,\nol,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nfigure,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\nbutton,\np,\nblockquote,\nth,\ntd,\npre,\nxmp {\n  margin: 0;\n  padding: 0;\n}\ninput,\ntextarea,\nbutton,\nselect,\npre,\nxmp,\ntt,\ncode,\nkbd,\nsamp {\n  line-height: inherit;\n  font-family: inherit;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nsmall,\nbig,\ninput,\ntextarea,\nbutton,\nselect {\n  font-size: inherit;\n}\naddress,\ncite,\ndfn,\nem,\ni,\noptgroup,\nvar {\n  font-style: normal;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: fixed;\n  text-align: left;\n}\nul,\nol,\nmenu {\n  list-style: none;\n}\nfieldset,\nimg {\n  border: 0;\n  vertical-align: middle;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \" \";\n}\ntextarea,\npre,\nxmp {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\ntextarea {\n  resize: vertical;\n}\ninput,\ntextarea,\nbutton,\nselect,\nsummary,\na {\n  outline: 0 none;\n}\ninput,\ntextarea,\nbutton,\nselect {\n  color: inherit;\n}\ninput:disabled,\n  textarea:disabled,\n  button:disabled,\n  select:disabled {\n    opacity: 1;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput[type=\"button\"],\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"file\"]::-webkit-file-upload-button,\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n  appearance: none;\n}\n::-webkit-details-marker {\n  display: none;\n}\nmark {\n  background-color: transparent;\n}\na,\nins,\ns,\nu,\ndel {\n  text-decoration: none;\n}\na,\nimg {\n  -webkit-touch-callout: none;\n}\na {\n  color: #00afc7;\n}\n.g-clear::after,\n.g-mod::after {\n  display: block;\n  overflow: hidden;\n  clear: both;\n  height: 0;\n  content: \" \";\n}\n@font-face {\n  font-family: yofont;\n  src: url(//ss.qunarzz.com/yo/font/1.0.3/yofont.woff) format(\"woff\"), url(//ss.qunarzz.com/yo/font/1.0.3/yofont.ttf) format(\"truetype\");\n}\n.yo-ico {\n  font-family: yofont !important;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  vertical-align: middle;\n}\n#guangguang {\n  width: 100%;\n  height: 100%;\n}\n@font-face {\n  font-family: 'yofont';\n  src: url(\"/media/iconfont/iconfont.woff\") format(\"woff\"), url(\"http://localhost:4000/media/iconfont/iconfont.ttf\") format(\"truetype\");\n}\n.m-index {\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  background: #fff;\n}\n.m-index section {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    flex: 1;\n    width: .1px;\n    width: 100%;\n    overflow-y: scroll;\n}\n.m-top {\n  height: .38rem;\n  background: #fff;\n}\n.m-top .m-head {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n    justify-content: space-between;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    align-items: center;\n    padding: 0 0.1rem;\n}\n.m-top .m-head h1 {\n      width: 25%;\n      height: .38rem;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n      justify-content: center;\n}\n.m-top .m-head h1 a {\n        display: block;\n        height: 100%;\n        line-height: .38rem;\n}\n.m-top .m-head h1 a img {\n          width: 100%;\n}\n.m-top .m-head input {\n      width: 65%;\n      height: .26rem;\n      border: 1px solid #f6f6f6;\n      border-radius: 3px;\n      padding: 0.05rem;\n      font-size: 0.12rem;\n      position: relative;\n}\n.m-top .m-head i {\n      position: absolute;\n      z-index: 1;\n      right: 5%;\n      color: #b1b1b1;\n}\n.m-foot {\n  height: .44rem;\n  background: #fff;\n}\n.m-foot ul {\n    position: relative;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    align-items: center;\n    height: 100%;\n}\n.m-foot ul::after {\n      pointer-events: none;\n      position: absolute;\n      z-index: 999;\n      top: 0;\n      left: 0;\n      content: \" \";\n      border-color: #ccc;\n      border-style: solid;\n      border-width: 1px 0 0 0;\n      -webkit-transform-origin: 0 0;\n      transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n.m-foot ul::after {\n          width: 100%;\n          height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n.m-foot ul::after {\n          width: 200%;\n          height: 200%;\n          -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n.m-foot ul::after {\n          width: 300%;\n          height: 300%;\n          -webkit-transform: scale(0.33333);\n          transform: scale(0.33333);\n}\n}\n.m-foot ul li {\n      -webkit-box-flex: 1;\n      -webkit-flex: 1;\n      flex: 1;\n      width: .1px;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-direction: column;\n      flex-direction: column;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n      justify-content: center;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n      align-items: center;\n}\n.m-foot ul li i {\n        font-weight: 100;\n        font-size: 0.18rem;\n}\n.m-foot ul li b {\n        font-weight: 300;\n        font-size: 0.1rem;\n}\n.m-foot ul li.active b, .m-foot ul li.active i {\n        color: #f02a41;\n}\n.m-main ul.menu {\n  width: 100%;\n  height: 1.2rem;\n  background: #fff;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  padding: 0.05rem 0;\n  position: relative;\n}\n.m-main ul.menu::after {\n    pointer-events: none;\n    position: absolute;\n    z-index: 999;\n    top: 0;\n    left: 0;\n    content: \" \";\n    border-color: #ccc;\n    border-style: solid;\n    border-width: 0 0 1px 0;\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n.m-main ul.menu::after {\n        width: 100%;\n        height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n.m-main ul.menu::after {\n        width: 200%;\n        height: 200%;\n        -webkit-transform: scale(0.5);\n        transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n.m-main ul.menu::after {\n        width: 300%;\n        height: 300%;\n        -webkit-transform: scale(0.33333);\n        transform: scale(0.33333);\n}\n}\n.m-main ul.menu li {\n    width: 25%;\n    height: 0.56rem;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    align-items: center;\n}\n.m-main ul.menu li img {\n      width: 0.35rem;\n      height: 0.35rem;\n}\n.m-main ul.menu li span {\n      font-weight: 400;\n      font-size: 0.09rem;\n}\n.m-main .ad {\n  padding: .05rem 0.2rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.m-main .ad span {\n    display: inline-block;\n    width: 0.6rem;\n    height: 0.13rem;\n    position: relative;\n    font-size: 0.1rem;\n    line-height: .13rem;\n    color: #e4393c;\n}\n.m-main .ad span::after {\n      pointer-events: none;\n      position: absolute;\n      z-index: 999;\n      top: 0;\n      left: 0;\n      content: \" \";\n      border-color: #ccc;\n      border-style: solid;\n      border-width: 0 1px 0 0;\n      -webkit-transform-origin: 0 0;\n      transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n.m-main .ad span::after {\n          width: 100%;\n          height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n.m-main .ad span::after {\n          width: 200%;\n          height: 200%;\n          -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n.m-main .ad span::after {\n          width: 300%;\n          height: 300%;\n          -webkit-transform: scale(0.33333);\n          transform: scale(0.33333);\n}\n}\n.m-main .ad .swiper-container-ad {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    flex: 1;\n    width: .1px;\n    height: .13rem;\n    overflow: hidden;\n}\n.m-main .ad .swiper-container-ad .swiper-wrapper {\n      height: .13rem;\n}\n.m-main .ad .swiper-container-ad .swiper-wrapper .swiper-slide {\n        height: .2rem;\n        line-height: 0rem;\n        font-size: 0.1rem;\n        padding: 0 .1rem;\n}\n.m-main .ad .swiper-container-ad .swiper-wrapper .swiper-slide .hot {\n          display: inline-block;\n          width: .34rem;\n          height: .16rem;\n          color: #fff;\n          line-height: .13rem;\n          text-align: center;\n          background: #e4393c;\n          margin-right: .1rem;\n}\n.m-main .ad-img {\n  width: 100%;\n  height: 1.34rem;\n}\n.m-main .ad-img img {\n    width: 100%;\n    height: 1.34rem;\n}\n.m-main .content {\n  width: 100%;\n  height: 3.07rem;\n  background: #fe319f;\n}\n.m-main .content p {\n    height: 0.28rem;\n    width: 100%;\n    text-align: center;\n    line-height: 0.28rem;\n}\n.m-main .content p img {\n      height: 0.17rem;\n}\n.m-main .content ul {\n    padding: .05rem;\n    padding-top: 0;\n    width: 100%;\n    height: 1.95rem;\n    background: #fe319f;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    align-items: center;\n    -webkit-flex-wrap: wrap;\n    flex-wrap: wrap;\n}\n.m-main .content ul li {\n      width: 50%;\n      height: 0.95rem;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-direction: column;\n      flex-direction: column;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n      justify-content: center;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n      align-items: center;\n      position: relative;\n      background: #fff;\n}\n.m-main .content ul li::after {\n        pointer-events: none;\n        position: absolute;\n        z-index: 999;\n        top: 0;\n        left: 0;\n        content: \" \";\n        border-color: #ccc;\n        border-style: solid;\n        border-width: 0 0 1px 1px;\n        -webkit-transform-origin: 0 0;\n        transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n.m-main .content ul li::after {\n            width: 100%;\n            height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n.m-main .content ul li::after {\n            width: 200%;\n            height: 200%;\n            -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n.m-main .content ul li::after {\n            width: 300%;\n            height: 300%;\n            -webkit-transform: scale(0.33333);\n            transform: scale(0.33333);\n}\n}\n.m-main .content ul li img {\n        width: 1.41rem;\n        height: 0.77rem;\n}\n.m-main .content ul li:nth-child(2n-1) {\n        position: relative;\n}\n.m-main .content ul li:nth-child(2n-1)::after {\n          pointer-events: none;\n          position: absolute;\n          z-index: 999;\n          top: 0;\n          left: 0;\n          content: \" \";\n          border-color: #ccc;\n          border-style: solid;\n          border-width: 0 0 1px 0;\n          -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n.m-main .content ul li:nth-child(2n-1)::after {\n              width: 100%;\n              height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n.m-main .content ul li:nth-child(2n-1)::after {\n              width: 200%;\n              height: 200%;\n              -webkit-transform: scale(0.5);\n              transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n.m-main .content ul li:nth-child(2n-1)::after {\n              width: 300%;\n              height: 300%;\n              -webkit-transform: scale(0.33333);\n              transform: scale(0.33333);\n}\n}\n.m-main .content ul li:nth-child(3) {\n        position: relative;\n}\n.m-main .content ul li:nth-child(3)::after {\n          pointer-events: none;\n          position: absolute;\n          z-index: 999;\n          top: 0;\n          left: 0;\n          content: \" \";\n          border-color: #ccc;\n          border-style: solid;\n          border-width: 0 0 0 0;\n          -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n.m-main .content ul li:nth-child(3)::after {\n              width: 100%;\n              height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n.m-main .content ul li:nth-child(3)::after {\n              width: 200%;\n              height: 200%;\n              -webkit-transform: scale(0.5);\n              transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n.m-main .content ul li:nth-child(3)::after {\n              width: 300%;\n              height: 300%;\n              -webkit-transform: scale(0.33333);\n              transform: scale(0.33333);\n}\n}\n.m-main .content ul li:nth-child(4) {\n        position: relative;\n}\n.m-main .content ul li:nth-child(4)::after {\n          pointer-events: none;\n          position: absolute;\n          z-index: 999;\n          top: 0;\n          left: 0;\n          content: \" \";\n          border-color: #ccc;\n          border-style: solid;\n          border-width: 0 0 0 1px;\n          -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n.m-main .content ul li:nth-child(4)::after {\n              width: 100%;\n              height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n.m-main .content ul li:nth-child(4)::after {\n              width: 200%;\n              height: 200%;\n              -webkit-transform: scale(0.5);\n              transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n.m-main .content ul li:nth-child(4)::after {\n              width: 300%;\n              height: 300%;\n              -webkit-transform: scale(0.33333);\n              transform: scale(0.33333);\n}\n}\n.m-main .content .ad-big-img {\n    background: #fff;\n    padding: .045rem;\n    width: 100%;\n    height: 0.82rem;\n}\n.m-main .content .ad-big-img img {\n      width: 100%;\n      height: 0.72rem;\n}\n.classify-menu ul li .content {\n  width: 100%;\n  height: 3.76rem;\n  background: #f76d55;\n}\n.classify-menu ul li .content p {\n    height: 0.28rem;\n    width: 100%;\n    text-align: center;\n    line-height: 0.28rem;\n}\n.classify-menu ul li .content p img {\n      height: 0.17rem;\n}\n.classify-menu ul li .content ul {\n    padding: .05rem;\n    padding-top: 0;\n    width: 100%;\n    height: 1.68rem;\n    background: #f76d55;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    align-items: center;\n    -webkit-flex-wrap: wrap;\n    flex-wrap: wrap;\n}\n.classify-menu ul li .content ul li {\n      width: 50%;\n      height: 0.84rem;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-direction: column;\n      flex-direction: column;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n      justify-content: center;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n      align-items: center;\n      position: relative;\n      background: #fff;\n}\n.classify-menu ul li .content ul li::after {\n        pointer-events: none;\n        position: absolute;\n        z-index: 999;\n        top: 0;\n        left: 0;\n        content: \" \";\n        border-color: #ccc;\n        border-style: solid;\n        border-width: 0 0 1px 1px;\n        -webkit-transform-origin: 0 0;\n        transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n.classify-menu ul li .content ul li::after {\n            width: 100%;\n            height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n.classify-menu ul li .content ul li::after {\n            width: 200%;\n            height: 200%;\n            -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n.classify-menu ul li .content ul li::after {\n            width: 300%;\n            height: 300%;\n            -webkit-transform: scale(0.33333);\n            transform: scale(0.33333);\n}\n}\n.classify-menu ul li .content ul li img {\n        width: 1.41rem;\n        height: 0.72rem;\n}\n.classify-menu ul li .content ul li:nth-child(2n-1) {\n        position: relative;\n}\n.classify-menu ul li .content ul li:nth-child(2n-1)::after {\n          pointer-events: none;\n          position: absolute;\n          z-index: 999;\n          top: 0;\n          left: 0;\n          content: \" \";\n          border-color: #ccc;\n          border-style: solid;\n          border-width: 0 0 1px 0;\n          -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n.classify-menu ul li .content ul li:nth-child(2n-1)::after {\n              width: 100%;\n              height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n.classify-menu ul li .content ul li:nth-child(2n-1)::after {\n              width: 200%;\n              height: 200%;\n              -webkit-transform: scale(0.5);\n              transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n.classify-menu ul li .content ul li:nth-child(2n-1)::after {\n              width: 300%;\n              height: 300%;\n              -webkit-transform: scale(0.33333);\n              transform: scale(0.33333);\n}\n}\n.classify-menu ul li .content ul li:nth-child(3) {\n        position: relative;\n}\n.classify-menu ul li .content ul li:nth-child(3)::after {\n          pointer-events: none;\n          position: absolute;\n          z-index: 999;\n          top: 0;\n          left: 0;\n          content: \" \";\n          border-color: #ccc;\n          border-style: solid;\n          border-width: 0 0 0 0;\n          -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n.classify-menu ul li .content ul li:nth-child(3)::after {\n              width: 100%;\n              height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n.classify-menu ul li .content ul li:nth-child(3)::after {\n              width: 200%;\n              height: 200%;\n              -webkit-transform: scale(0.5);\n              transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n.classify-menu ul li .content ul li:nth-child(3)::after {\n              width: 300%;\n              height: 300%;\n              -webkit-transform: scale(0.33333);\n              transform: scale(0.33333);\n}\n}\n.classify-menu ul li .content ul li:nth-child(4) {\n        position: relative;\n}\n.classify-menu ul li .content ul li:nth-child(4)::after {\n          pointer-events: none;\n          position: absolute;\n          z-index: 999;\n          top: 0;\n          left: 0;\n          content: \" \";\n          border-color: #ccc;\n          border-style: solid;\n          border-width: 0 0 0 1px;\n          -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n.classify-menu ul li .content ul li:nth-child(4)::after {\n              width: 100%;\n              height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n.classify-menu ul li .content ul li:nth-child(4)::after {\n              width: 200%;\n              height: 200%;\n              -webkit-transform: scale(0.5);\n              transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n.classify-menu ul li .content ul li:nth-child(4)::after {\n              width: 300%;\n              height: 300%;\n              -webkit-transform: scale(0.33333);\n              transform: scale(0.33333);\n}\n}\n.classify-menu ul li .content ul.small {\n    height: .98rem;\n}\n.classify-menu ul li .content ul.small li {\n      width: 25%;\n      height: 0.94rem;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n      justify-content: center;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n      align-items: center;\n      position: relative;\n      background: #fff;\n}\n.classify-menu ul li .content ul.small li::after {\n        pointer-events: none;\n        position: absolute;\n        z-index: 999;\n        top: 0;\n        left: 0;\n        content: \" \";\n        border-color: #ccc;\n        border-style: solid;\n        border-width: 0 0 1px 1px;\n        -webkit-transform-origin: 0 0;\n        transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n.classify-menu ul li .content ul.small li::after {\n            width: 100%;\n            height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n.classify-menu ul li .content ul.small li::after {\n            width: 200%;\n            height: 200%;\n            -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n.classify-menu ul li .content ul.small li::after {\n            width: 300%;\n            height: 300%;\n            -webkit-transform: scale(0.33333);\n            transform: scale(0.33333);\n}\n}\n.classify-menu ul li .content ul.small li img {\n        width: 0.70rem;\n        height: 0.77rem;\n}\n.classify-menu ul li .content ul.small li:nth-child(n) {\n        position: relative;\n}\n.classify-menu ul li .content ul.small li:nth-child(n)::after {\n          pointer-events: none;\n          position: absolute;\n          z-index: 999;\n          top: 0;\n          left: 0;\n          content: \" \";\n          border-color: #ccc;\n          border-style: solid;\n          border-width: 1px 0 0 1px;\n          -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n.classify-menu ul li .content ul.small li:nth-child(n)::after {\n              width: 100%;\n              height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n.classify-menu ul li .content ul.small li:nth-child(n)::after {\n              width: 200%;\n              height: 200%;\n              -webkit-transform: scale(0.5);\n              transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n.classify-menu ul li .content ul.small li:nth-child(n)::after {\n              width: 300%;\n              height: 300%;\n              -webkit-transform: scale(0.33333);\n              transform: scale(0.33333);\n}\n}\n.classify-menu ul li .content ul.small li:first-child {\n        position: relative;\n}\n.classify-menu ul li .content ul.small li:first-child::after {\n          pointer-events: none;\n          position: absolute;\n          z-index: 999;\n          top: 0;\n          left: 0;\n          content: \" \";\n          border-color: #ccc;\n          border-style: solid;\n          border-width: 1px 0 0 0;\n          -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n.classify-menu ul li .content ul.small li:first-child::after {\n              width: 100%;\n              height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n.classify-menu ul li .content ul.small li:first-child::after {\n              width: 200%;\n              height: 200%;\n              -webkit-transform: scale(0.5);\n              transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n.classify-menu ul li .content ul.small li:first-child::after {\n              width: 300%;\n              height: 300%;\n              -webkit-transform: scale(0.33333);\n              transform: scale(0.33333);\n}\n}\n.classify-menu ul li .content .ad-big-img {\n    background: #f8f8f8;\n    padding: .05rem;\n    width: 100%;\n    height: 0.82rem;\n}\n.classify-menu ul li .content .ad-big-img img {\n      height: 0.72rem;\n}\n.products {\n  background: #fff;\n  padding: .1rem 0;\n  padding-bottom: 0;\n}\n.products p {\n    text-align: center;\n    font-size: .12rem;\n}\n.products ul#prolist {\n    width: 100%;\n    overflow: hidden;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    align-items: center;\n    -webkit-flex-wrap: wrap;\n    flex-wrap: wrap;\n    padding: 0.05rem 0;\n    padding-bottom: 0;\n}\n.products ul#prolist li {\n      width: 50%;\n      height: 2rem;\n      padding: 0.08rem 0.08rem 0.04rem 0.08rem;\n      position: relative;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-direction: column;\n      flex-direction: column;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n      justify-content: center;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n      align-items: center;\n}\n.products ul#prolist li::after {\n        pointer-events: none;\n        position: absolute;\n        z-index: 999;\n        top: 0;\n        left: 0;\n        content: \" \";\n        border-color: #ccc;\n        border-style: solid;\n        border-width: 0 0 1px 1px;\n        -webkit-transform-origin: 0 0;\n        transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n.products ul#prolist li::after {\n            width: 100%;\n            height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n.products ul#prolist li::after {\n            width: 200%;\n            height: 200%;\n            -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n.products ul#prolist li::after {\n            width: 300%;\n            height: 300%;\n            -webkit-transform: scale(0.33333);\n            transform: scale(0.33333);\n}\n}\n.products ul#prolist li img {\n        width: 1.41rem;\n        height: 1.41rem;\n}\n.products ul#prolist li .info {\n        font-size: 0.1rem;\n        line-height: .13rem;\n        padding-top: .05rem;\n        text-align: left;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display: -webkit-box !important;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n}\n.products ul#prolist li .prices {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-box-pack: justify;\n        -webkit-justify-content: space-between;\n        justify-content: space-between;\n        width: 100%;\n}\n.products ul#prolist li .prices .price {\n          font-size: 0.12rem;\n          color: #f02a41;\n          font-weight: 500;\n}\n.products ul#prolist li .prices .buybtn {\n          display: inline-block;\n          width: 0.32rem;\n          height: 0.16rem;\n          background: #fe9901;\n          font-size: 0.1rem;\n          line-height: 0.16rem;\n          text-align: center;\n          color: #fff;\n          border-radius: 3px;\n          -webkit-background-clip: padding-box !important;\n          background-clip: padding-box !important;\n}\n.products ul#prolist li::nth-child(2n-1) {\n        position: relative;\n}\n.products ul#prolist li::nth-child(2n-1)::after {\n          pointer-events: none;\n          position: absolute;\n          z-index: 999;\n          top: 0;\n          left: 0;\n          content: \" \";\n          border-color: #ccc;\n          border-style: solid;\n          border-width: 0 0 1px 0;\n          -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n.products ul#prolist li::nth-child(2n-1)::after {\n              width: 100%;\n              height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n.products ul#prolist li::nth-child(2n-1)::after {\n              width: 200%;\n              height: 200%;\n              -webkit-transform: scale(0.5);\n              transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n.products ul#prolist li::nth-child(2n-1)::after {\n              width: 300%;\n              height: 300%;\n              -webkit-transform: scale(0.33333);\n              transform: scale(0.33333);\n}\n}\n#guangguang {\n  width: 100%;\n  height: 100%;\n}\n@font-face {\n  font-family: 'yofont';\n  src: url(\"/media/iconfont/iconfont.woff\") format(\"woff\"), url(\"http://localhost:4000/media/iconfont/iconfont.ttf\") format(\"truetype\");\n}\n.banner img {\n  width: 100%;\n}\n", "", {"version":3,"sources":["/Users/macbook/Desktop/test/qa/src/scripts/view/component/carousel.vue"],"names":[],"mappings":"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","file":"carousel.vue","sourcesContent":["@charset \"UTF-8\";\n/**\r\n * Yo框架全局base定义\r\n * 本文件与variables不同地方在于，这里所定义的map可以使用在variables和任何地方\r\n * lib中map使用“_”开头，本文件中不使用\"_\"\r\n * base ⇌ extra\r\n */\n/**\r\n * Yo框架全局base定义\r\n * 本文件与variables不同地方在于，这里所定义的map可以使用在variables和任何地方\r\n * 本文件中map使用\"_\"开头，extra中不使用\"_\"\r\n * base ⇌ extra\r\n */\n/**\r\n * 合并base和extra中的同类base map\r\n * 用以解决业务方升级Yo时需比base和extra的一致性\r\n * 当extra为空时，base map将以base文件里的定义作为默认值\r\n * 当extra不为空时，base map使用extra文件里的定义\r\n */\n/**\n * Yo框架全局Variables\n * Yo基础变量map，如果不想定义某属性，将其value设置为null；\n * Yo仅使用2种长度单位：px用于边框，rem用于除边框之外的所有地方\n * variables中map使用“_”开头，本文件中不使用\"_\"\n * variables ⇌ config\n */\n/**\r\n * Yo框架全局Variables\r\n * Yo基础变量map，如果不想定义某属性，将其value设置为null\r\n * Yo仅使用2种长度单位：px用于边框，rem用于除边框之外的所有地方\r\n * 本文件中map使用\"_\"开头，config中不使用\"_\"\r\n * variables ⇌ config\r\n */\n/**\r\n * 合并variables和config中的同类map\r\n * 用以解决业务方升级Yo时需比config和variables的一致性\r\n * 当config为空时，使用variables中的map作为默认值\r\n * 当config不为空时，使用config中的定义\r\n */\n/**\r\n * Yo框架自定义全局函数\r\n * 扩充Sass默认函数库，用以增强语法\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的第一项\r\n * @function first\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的最后一项\r\n * @function last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的倒数第几项\r\n * @function nth-last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要返回的值在list中的倒数位置 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 移除SassList中的某个项目并返回新的List\r\n * @function remove\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {String} $value 指定需要被删除的值 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 截取SassList中的某个部分并返回新的List\r\n * @function slice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $start 指定需要截取的开始下标 <2.1.0>\r\n * @param {Integer} $end 指定需要截取的结束下标（不包括end），当该值缺省时默认为末尾下标 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 从SassList中添加/删除项目，然后返回新的List。\r\n * @function splice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要移除的开始下标 <2.1.0>\r\n * @param {Integer} $count 指定需要移除的数量，不可以为负值，0表示不移除 <2.1.0>\r\n * @param {String} $values 指定需要添加的新值（可以是多个），如果该值缺省，则表示只移除不添加新值 <2.1.0>\r\n */\n/**\r\n * Yo框架全局基础方法\r\n * 包括响应式方案，CSS3兼容性方案，厂商前缀方案，iconfont方案，flex布局等全局方法\r\n */\n/**\r\n * @module 常用方法\r\n * @description 给需要的属性加厂家前缀\r\n * @method prefix\r\n * @version 1.0.0\r\n * @param {String} $property 指定属性 <1.0.0>\r\n * @param {String} $value 指定属性值 <1.0.0>\r\n * @skip\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义字体图标\r\n * @method _iconfont\r\n * @version 1.0.0\r\n * @skip\r\n */\n/**\r\n * @module 常用方法\r\n * @description 四则运算(系统要求：iOS6.0+,Android4.4+)\r\n * @method calc\r\n * @version 1.7.0\r\n * @param {String} $property 指定需要进行计算的CSS属性 <1.7.0>\r\n * @param {String} $value 与原生CSS语法一致，区别在于需要使用引号包裹表达式 <1.7.0>\r\n * @example\r\n * .calc {\r\n *     @include calc(width, \"100% - 100px\");\r\n * }\r\n *\r\n * <div class=\"calc\">四则运算</div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义响应式方案\r\n * @method responsive\r\n * @version 1.0.0\r\n * @param {String} $media 指定媒体查询条件，取值为`config`文件map `media-types`中的值 <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 清除浮动方案\r\n * @method clearfix\r\n * @version 1.0.0\r\n * @param {String} $type 指定清除浮动的方式，包括：pseudo-element | bfc，默认值：pseudo-element <1.8.5>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 清除行内级元素间间隙方案\r\n * @method clearspace\r\n * @version 3.0.3\r\n * @param {Length} $font-size 指定子元素字号，默认值：.14rem <3.0.3>\r\n * @example\r\n * .demo {\r\n *     @include clearspace;\r\n * }\r\n *\r\n * <div class=\"demo\">\r\n *      <span class=\"item\">1</span>\r\n *      <span class=\"item\">2</span>\r\n *      <span class=\"item\">3</span>\r\n * </div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 描述元素内容在横、纵方向上的对齐方式，默认为水平垂直居中对齐\r\n * @method align\r\n * @version 2.0.0\r\n * @param {String} $flexbox 元素布局方式，可选值：flex | inline-flex，默认值：flex <2.0.0>\r\n * @param {Keyword} $justify-content 元素内容的水平对齐方式，取值与`justify-content`属性一致，默认值：center <2.0.0>\r\n * @param {Keyword} $align-items 元素内容的垂直对齐方式，取值与`align-items`属性一致，默认值：center <2.0.0>\r\n * @example\r\n * .demo {\r\n *     @include align;\r\n * }\r\n *\r\n * <div class=\"demo\">\r\n *      <img alt=\"未知尺寸图片居中\" />\r\n * </div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义是否有滚动条\r\n * @method overflow\r\n * @version 1.0.0\r\n * @param {String} $overflow 取值与最新原生语法一致，默认值：auto <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 生成全屏方法\r\n * @method fullscreen\r\n * @version 1.7.0\r\n * @param {Integer} $z-index 指定层叠级别 <1.7.0>\r\n * @param {Keywords} $position 指定定位方式，取除`static | relative`之外的值，默认值：absolute <1.8.5>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义使用何种滤镜\r\n * @method filter\r\n * @version 1.7.0\r\n * @param {String} $filter 取值与`filter`属性一致 <1.7.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义UA默认外观\r\n * @method appearance\r\n * @version 1.0.0\r\n * @param {String} $appearance 取值与`appearance`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义如何选中内容\r\n * @method user-select\r\n * @version 1.0.0\r\n * @param {String} $user-select 取值与`user-select`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义盒模型\r\n * @method box-sizing\r\n * @version 1.0.0\r\n * @param {String} $box-sizing 指定盒模型类型，取值与`box-sizing`属性一致，默认值：border-box <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义渐变色值\r\n * @method gradient\r\n * @version 1.0.0\r\n * @param {String} $type 指定渐变的4种类型：linear, repeating-linear, radial, repeating-radial <1.0.0>\r\n * @param {String} $dir 指定渐变方向，可选值：[left | right] || [top | bottom] | angle <2.0.0>\r\n * @param {String} $gradient 指定渐变取值，与w3c最新原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景图像缩放（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-size\r\n * @version 1.4.0\r\n * @param {Keywords | Length} $background-size 指定背景图缩放值，取值与`background-size`属性一致 <1.4.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景裁减（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-clip\r\n * @version 1.6.0\r\n * @param {Keywords} $background-clip 指定背景图缩放值，取值与`background-clip`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景显示区域（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-origin\r\n * @version 1.6.0\r\n * @param {Keywords} $background-origin 指定背景图`background-position`属性计算相对的参考点，取值与`background-origin`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 为元素添加边框（包括1px边框）\r\n * @method border\r\n * @version 2.0.0\r\n * @param {String} $border-width 指定边框厚度（单位为px），默认值：1px，取值与`border-width`属性一致，不同方向代表边框位置 <2.0.0>\r\n * @param {String} $border-color 指定边框颜色 <2.0.0>\r\n * @param {String} $border-style 指定边框样式 <2.0.0>\r\n * @param {String} $radius 指定边框圆角半径，默认值：null <2.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义圆角，用于修复某些安卓机型上“圆角+边框+背景”，背景溢出的情况\r\n * @method border-radius\r\n * @version 1.6.0\r\n * @param {Length} $border-radius 指定元素的圆角半径，取值与`border-radius`属性一致 <1.6.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义简单变换\r\n * @method transform\r\n * @version 1.0.0\r\n * @param {String} $transform 取值范围与`transform`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义变换原点\r\n * @method transform-origin\r\n * @version 1.0.0\r\n * @param {Length | Percentage | Keywords} $transform-origin 取值范围与`transform-origin`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定某元素的子元素是（看起来）位于三维空间内，还是在该元素所在的平面内被扁平化\r\n * @method transform-style\r\n * @version 2.0.0\r\n * @param {String} $transform-style 取值范围与`transform-style`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定观察者与「z=0」平面的距离，使具有三维位置变换的元素产生透视效果。「z>0」的三维元素比正常大，而「z<0」时则比正常小，大小程度由该属性的值决定。\r\n * @method perspective\r\n * @version 2.0.0\r\n * @param {none | Length} $perspective 取值范围与`perspective`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定透视点的位置\r\n * @method perspective-origin\r\n * @version 2.0.0\r\n * @param {Length | Percentage | Keywords} $perspective-origin 取值范围与`perspective-origin`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定元素背面面向用户时是否可见\r\n * @method backface-visibility\r\n * @version 2.0.0\r\n * @param {Keywords} $backface-visibility 取值范围与`backface-visibility`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 定义动画\r\n * @method animation\r\n * @version 1.0.0\r\n * @param {String} $animation 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定需要引用的动画名称\r\n * @method animation-name\r\n * @version 3.0.0\r\n * @param {String} $animation-name 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画运行一次所持续的时长\r\n * @method animation-duration\r\n * @version 3.0.0\r\n * @param {String} $animation-duration 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画运行方式\r\n * @method animation-timing-function\r\n * @version 3.0.0\r\n * @param {String} $animation-timing-function 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画延迟多久之后再开始\r\n * @method animation-delay\r\n * @version 3.0.0\r\n * @param {String} $animation-delay 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画循环几次\r\n * @method animation-iteration-count\r\n * @version 3.0.0\r\n * @param {String} $animation-iteration-count 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画的运动方向\r\n * @method animation-direction\r\n * @version 3.0.0\r\n * @param {String} $animation-direction 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画的运动状态\r\n * @method animation-play-state\r\n * @version 3.0.0\r\n * @param {String} $animation-play-state 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画时间之外的状态\r\n * @method animation-fill-mode\r\n * @version 3.0.0\r\n * @param {String} $animation-fill-mode 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Transition\r\n * @description 定义补间\r\n * @method transition\r\n * @version 1.0.0\r\n * @param {String} $transition 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义显示类型为伸缩盒\r\n * @method flexbox\r\n * @version 1.0.0\r\n * @param {String} $flexbox 默认值：flex，可选值：flex | inline-flex <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素如何分配空间\r\n * @method flex\r\n * @version 1.0.0\r\n * @param {Number} $flex 取值与`flex`属性一致，默认值：1 <1.0.0>\r\n * @param {String} $direction 默认值: row，可选值：row | column <1.5.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的排版顺序\r\n * @method order\r\n * @version 1.0.0\r\n * @param {Integer} $order 取值与`order`属性一致，默认值：1 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素流动方向及遇见边界时是否换行(要求系统：iOS7.0+, Android4.4+)\r\n * @method flex-flow\r\n * @version 2.0.0\r\n * @param {String} $flex-flow 取值与`flex-flow`属性一致，默认值：row nowrap <2.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的流动方向\r\n * @method flex-direction\r\n * @version 1.0.0\r\n * @param {String} $flex-direction 取值与`flex-direction`属性一致，默认值：row <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素溢出后排版(要求系统：iOS7.0+, Android4.4+)\r\n * @method flex-wrap\r\n * @version 1.0.0\r\n * @param {String} $flex-wrap 取值与`flex-wrap`属性一致，默认值：nowrap <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器主轴对齐方式(其中`space-around`值需要iOS7.0+,Android4.4+)\r\n * @method justify-content\r\n * @version 1.0.0\r\n * @param {String} $justify-content 取值与`justify-content`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义多行弹性容器侧轴对齐方式(要求系统：iOS7.0+,Android4.4+)\r\n * @method align-content\r\n * @version 1.8.5\r\n * @param {String} $align-content 取值与`align-content`属性一致，默认值：center <1.8.5>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义单行弹性容器侧轴对齐方式\r\n * @method align-items\r\n * @version 1.0.0\r\n * @param {String} $align-items 取值与`align-items`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器中子元素自身的在侧轴对齐方式(要求系统：iOS7.0+,Android4.4+)\r\n * @method align-self\r\n * @version 1.0.0\r\n * @param {String} $align-self 取值与`align-self`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成矩形方法\r\n * @method rect\r\n * @version 1.0.0\r\n * @param {Length} $width 定义矩形的长度 <1.0.0>\r\n * @param {Length} $height 定义矩形的高度 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成正方形方法\r\n * @method square\r\n * @version 1.0.0\r\n * @param {Length} $size 定义正方形的边长 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成圆形方法\r\n * @method circle\r\n * @version 1.0.0\r\n * @param {Length} $size 定义圆的半径长度 <1.0.0>\r\n * @param {Length} $radius 定义圆的圆角半径长度 <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 在自适应宽度情况下，确保内容元素的宽高比固定，比如：实现随屏幕大小而变化的正方形。\r\n * @method fixed-scale\r\n * @version 3.0.10\r\n * @param {Length} $width 默认值：100%。用以指定内容元素的初始宽度，由于尺寸需动态变化，不要使用固定单位 <3.0.10>\r\n * @param {Length} $scale 默认值：1/1，即正方形。用以指定内容元素的宽度高比 <3.0.10>\r\n */\n/**\r\n * @module 文本\r\n * @description 链接处理方法\r\n * @method link\r\n * @version 1.0.0\r\n * @param {Color} $color 定义链接颜色 <1.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 文本碰到边界是否换行\r\n * @method wrap\r\n * @version 1.0.0\r\n * @param {Boolean} $is-wrap 定义文本是否换行，默认值：true <2.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 单行文本溢出时显示省略号\r\n * @method ellipsis\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n * @param {Integer} $line-clamp 定义需要显示的行数，默认值：1（即使用单行溢出的处理方案），需要注意的是本参数只支持webkit内核 <2.1.2>\r\n */\n/**\r\n * @module 文本\r\n * @description 文字隐藏方案\r\n * @method texthide\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n */\n/**\r\n * Yo框架全局Reset\r\n * Yo重置Mobile及高级浏览器上常见的差异\r\n */\n*,\n::before,\n::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n\nhtml,\nbody {\n  overflow: hidden;\n  height: 100%; }\n\n::-webkit-scrollbar {\n  display: none; }\n\nhtml {\n  background-color: #eee;\n  color: #212121;\n  font-size: 100px;\n  -webkit-user-select: none;\n  user-select: none; }\n\nbody {\n  margin: 0;\n  font-size: 0.14em;\n  line-height: 1.5;\n  font-family: Helvetica Neue, Helvetica, STHeiTi, sans-serif; }\n\nul,\nol,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nfigure,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\nbutton,\np,\nblockquote,\nth,\ntd,\npre,\nxmp {\n  margin: 0;\n  padding: 0; }\n\ninput,\ntextarea,\nbutton,\nselect,\npre,\nxmp,\ntt,\ncode,\nkbd,\nsamp {\n  line-height: inherit;\n  font-family: inherit; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nsmall,\nbig,\ninput,\ntextarea,\nbutton,\nselect {\n  font-size: inherit; }\n\naddress,\ncite,\ndfn,\nem,\ni,\noptgroup,\nvar {\n  font-style: normal; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: fixed;\n  text-align: left; }\n\nul,\nol,\nmenu {\n  list-style: none; }\n\nfieldset,\nimg {\n  border: 0;\n  vertical-align: middle; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nvideo {\n  display: inline-block; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\\0020\"; }\n\ntextarea,\npre,\nxmp {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n\ntextarea {\n  resize: vertical; }\n\ninput,\ntextarea,\nbutton,\nselect,\nsummary,\na {\n  outline: 0 none; }\n\ninput,\ntextarea,\nbutton,\nselect {\n  color: inherit; }\n  input:disabled,\n  textarea:disabled,\n  button:disabled,\n  select:disabled {\n    opacity: 1; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0; }\n\ninput[type=\"button\"],\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"file\"]::-webkit-file-upload-button,\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n  appearance: none; }\n\n::-webkit-details-marker {\n  display: none; }\n\nmark {\n  background-color: transparent; }\n\na,\nins,\ns,\nu,\ndel {\n  text-decoration: none; }\n\na,\nimg {\n  -webkit-touch-callout: none; }\n\na {\n  color: #00afc7; }\n\n.g-clear::after,\n.g-mod::after {\n  display: block;\n  overflow: hidden;\n  clear: both;\n  height: 0;\n  content: \"\\0020\"; }\n\n@font-face {\n  font-family: yofont;\n  src: url(//ss.qunarzz.com/yo/font/1.0.3/yofont.woff) format(\"woff\"), url(//ss.qunarzz.com/yo/font/1.0.3/yofont.ttf) format(\"truetype\"); }\n\n.yo-ico {\n  font-family: yofont !important;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  vertical-align: middle; }\n\n#guangguang {\n  width: 100%;\n  height: 100%; }\n\n@font-face {\n  font-family: 'yofont';\n  src: url(\"/media/iconfont/iconfont.woff\") format(\"woff\"), url(\"http://localhost:4000/media/iconfont/iconfont.ttf\") format(\"truetype\"); }\n\n.m-index {\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  background: #fff; }\n  .m-index section {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    flex: 1;\n    width: .1px;\n    width: 100%;\n    overflow-y: scroll; }\n\n.m-top {\n  height: .38rem;\n  background: #fff; }\n  .m-top .m-head {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n    justify-content: space-between;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    align-items: center;\n    padding: 0 0.1rem; }\n    .m-top .m-head h1 {\n      width: 25%;\n      height: .38rem;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n      justify-content: center; }\n      .m-top .m-head h1 a {\n        display: block;\n        height: 100%;\n        line-height: .38rem; }\n        .m-top .m-head h1 a img {\n          width: 100%; }\n    .m-top .m-head input {\n      width: 65%;\n      height: .26rem;\n      border: 1px solid #f6f6f6;\n      border-radius: 3px;\n      padding: 0.05rem;\n      font-size: 0.12rem;\n      position: relative; }\n    .m-top .m-head i {\n      position: absolute;\n      z-index: 1;\n      right: 5%;\n      color: #b1b1b1; }\n\n.m-foot {\n  height: .44rem;\n  background: #fff; }\n  .m-foot ul {\n    position: relative;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    align-items: center;\n    height: 100%; }\n    .m-foot ul::after {\n      pointer-events: none;\n      position: absolute;\n      z-index: 999;\n      top: 0;\n      left: 0;\n      content: \"\\0020\";\n      border-color: #ccc;\n      border-style: solid;\n      border-width: 1px 0 0 0;\n      -webkit-transform-origin: 0 0;\n      transform-origin: 0 0; }\n      @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n        .m-foot ul::after {\n          width: 100%;\n          height: 100%; } }\n      @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n        .m-foot ul::after {\n          width: 200%;\n          height: 200%;\n          -webkit-transform: scale(0.5);\n          transform: scale(0.5); } }\n      @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n        .m-foot ul::after {\n          width: 300%;\n          height: 300%;\n          -webkit-transform: scale(0.33333);\n          transform: scale(0.33333); } }\n    .m-foot ul li {\n      -webkit-box-flex: 1;\n      -webkit-flex: 1;\n      flex: 1;\n      width: .1px;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-direction: column;\n      flex-direction: column;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n      justify-content: center;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n      align-items: center; }\n      .m-foot ul li i {\n        font-weight: 100;\n        font-size: 0.18rem; }\n      .m-foot ul li b {\n        font-weight: 300;\n        font-size: 0.1rem; }\n      .m-foot ul li.active b, .m-foot ul li.active i {\n        color: #f02a41; }\n\n.m-main ul.menu {\n  width: 100%;\n  height: 1.2rem;\n  background: #fff;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  padding: 0.05rem 0;\n  position: relative; }\n  .m-main ul.menu::after {\n    pointer-events: none;\n    position: absolute;\n    z-index: 999;\n    top: 0;\n    left: 0;\n    content: \"\\0020\";\n    border-color: #ccc;\n    border-style: solid;\n    border-width: 0 0 1px 0;\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0; }\n    @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n      .m-main ul.menu::after {\n        width: 100%;\n        height: 100%; } }\n    @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n      .m-main ul.menu::after {\n        width: 200%;\n        height: 200%;\n        -webkit-transform: scale(0.5);\n        transform: scale(0.5); } }\n    @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n      .m-main ul.menu::after {\n        width: 300%;\n        height: 300%;\n        -webkit-transform: scale(0.33333);\n        transform: scale(0.33333); } }\n  .m-main ul.menu li {\n    width: 25%;\n    height: 0.56rem;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    align-items: center; }\n    .m-main ul.menu li img {\n      width: 0.35rem;\n      height: 0.35rem; }\n    .m-main ul.menu li span {\n      font-weight: 400;\n      font-size: 0.09rem; }\n\n.m-main .ad {\n  padding: .05rem 0.2rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex; }\n  .m-main .ad span {\n    display: inline-block;\n    width: 0.6rem;\n    height: 0.13rem;\n    position: relative;\n    font-size: 0.1rem;\n    line-height: .13rem;\n    color: #e4393c; }\n    .m-main .ad span::after {\n      pointer-events: none;\n      position: absolute;\n      z-index: 999;\n      top: 0;\n      left: 0;\n      content: \"\\0020\";\n      border-color: #ccc;\n      border-style: solid;\n      border-width: 0 1px 0 0;\n      -webkit-transform-origin: 0 0;\n      transform-origin: 0 0; }\n      @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n        .m-main .ad span::after {\n          width: 100%;\n          height: 100%; } }\n      @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n        .m-main .ad span::after {\n          width: 200%;\n          height: 200%;\n          -webkit-transform: scale(0.5);\n          transform: scale(0.5); } }\n      @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n        .m-main .ad span::after {\n          width: 300%;\n          height: 300%;\n          -webkit-transform: scale(0.33333);\n          transform: scale(0.33333); } }\n  .m-main .ad .swiper-container-ad {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    flex: 1;\n    width: .1px;\n    height: .13rem;\n    overflow: hidden; }\n    .m-main .ad .swiper-container-ad .swiper-wrapper {\n      height: .13rem; }\n      .m-main .ad .swiper-container-ad .swiper-wrapper .swiper-slide {\n        height: .2rem;\n        line-height: 0rem;\n        font-size: 0.1rem;\n        padding: 0 .1rem; }\n        .m-main .ad .swiper-container-ad .swiper-wrapper .swiper-slide .hot {\n          display: inline-block;\n          width: .34rem;\n          height: .16rem;\n          color: #fff;\n          line-height: .13rem;\n          text-align: center;\n          background: #e4393c;\n          margin-right: .1rem; }\n\n.m-main .ad-img {\n  width: 100%;\n  height: 1.34rem; }\n  .m-main .ad-img img {\n    width: 100%;\n    height: 1.34rem; }\n\n.m-main .content {\n  width: 100%;\n  height: 3.07rem;\n  background: #fe319f; }\n  .m-main .content p {\n    height: 0.28rem;\n    width: 100%;\n    text-align: center;\n    line-height: 0.28rem; }\n    .m-main .content p img {\n      height: 0.17rem; }\n  .m-main .content ul {\n    padding: .05rem;\n    padding-top: 0;\n    width: 100%;\n    height: 1.95rem;\n    background: #fe319f;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    align-items: center;\n    -webkit-flex-wrap: wrap;\n    flex-wrap: wrap; }\n    .m-main .content ul li {\n      width: 50%;\n      height: 0.95rem;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-direction: column;\n      flex-direction: column;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n      justify-content: center;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n      align-items: center;\n      position: relative;\n      background: #fff; }\n      .m-main .content ul li::after {\n        pointer-events: none;\n        position: absolute;\n        z-index: 999;\n        top: 0;\n        left: 0;\n        content: \"\\0020\";\n        border-color: #ccc;\n        border-style: solid;\n        border-width: 0 0 1px 1px;\n        -webkit-transform-origin: 0 0;\n        transform-origin: 0 0; }\n        @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n          .m-main .content ul li::after {\n            width: 100%;\n            height: 100%; } }\n        @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n          .m-main .content ul li::after {\n            width: 200%;\n            height: 200%;\n            -webkit-transform: scale(0.5);\n            transform: scale(0.5); } }\n        @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n          .m-main .content ul li::after {\n            width: 300%;\n            height: 300%;\n            -webkit-transform: scale(0.33333);\n            transform: scale(0.33333); } }\n      .m-main .content ul li img {\n        width: 1.41rem;\n        height: 0.77rem; }\n      .m-main .content ul li:nth-child(2n-1) {\n        position: relative; }\n        .m-main .content ul li:nth-child(2n-1)::after {\n          pointer-events: none;\n          position: absolute;\n          z-index: 999;\n          top: 0;\n          left: 0;\n          content: \"\\0020\";\n          border-color: #ccc;\n          border-style: solid;\n          border-width: 0 0 1px 0;\n          -webkit-transform-origin: 0 0;\n          transform-origin: 0 0; }\n          @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n            .m-main .content ul li:nth-child(2n-1)::after {\n              width: 100%;\n              height: 100%; } }\n          @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n            .m-main .content ul li:nth-child(2n-1)::after {\n              width: 200%;\n              height: 200%;\n              -webkit-transform: scale(0.5);\n              transform: scale(0.5); } }\n          @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n            .m-main .content ul li:nth-child(2n-1)::after {\n              width: 300%;\n              height: 300%;\n              -webkit-transform: scale(0.33333);\n              transform: scale(0.33333); } }\n      .m-main .content ul li:nth-child(3) {\n        position: relative; }\n        .m-main .content ul li:nth-child(3)::after {\n          pointer-events: none;\n          position: absolute;\n          z-index: 999;\n          top: 0;\n          left: 0;\n          content: \"\\0020\";\n          border-color: #ccc;\n          border-style: solid;\n          border-width: 0 0 0 0;\n          -webkit-transform-origin: 0 0;\n          transform-origin: 0 0; }\n          @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n            .m-main .content ul li:nth-child(3)::after {\n              width: 100%;\n              height: 100%; } }\n          @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n            .m-main .content ul li:nth-child(3)::after {\n              width: 200%;\n              height: 200%;\n              -webkit-transform: scale(0.5);\n              transform: scale(0.5); } }\n          @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n            .m-main .content ul li:nth-child(3)::after {\n              width: 300%;\n              height: 300%;\n              -webkit-transform: scale(0.33333);\n              transform: scale(0.33333); } }\n      .m-main .content ul li:nth-child(4) {\n        position: relative; }\n        .m-main .content ul li:nth-child(4)::after {\n          pointer-events: none;\n          position: absolute;\n          z-index: 999;\n          top: 0;\n          left: 0;\n          content: \"\\0020\";\n          border-color: #ccc;\n          border-style: solid;\n          border-width: 0 0 0 1px;\n          -webkit-transform-origin: 0 0;\n          transform-origin: 0 0; }\n          @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n            .m-main .content ul li:nth-child(4)::after {\n              width: 100%;\n              height: 100%; } }\n          @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n            .m-main .content ul li:nth-child(4)::after {\n              width: 200%;\n              height: 200%;\n              -webkit-transform: scale(0.5);\n              transform: scale(0.5); } }\n          @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n            .m-main .content ul li:nth-child(4)::after {\n              width: 300%;\n              height: 300%;\n              -webkit-transform: scale(0.33333);\n              transform: scale(0.33333); } }\n  .m-main .content .ad-big-img {\n    background: #fff;\n    padding: .045rem;\n    width: 100%;\n    height: 0.82rem; }\n    .m-main .content .ad-big-img img {\n      width: 100%;\n      height: 0.72rem; }\n\n.classify-menu ul li .content {\n  width: 100%;\n  height: 3.76rem;\n  background: #f76d55; }\n  .classify-menu ul li .content p {\n    height: 0.28rem;\n    width: 100%;\n    text-align: center;\n    line-height: 0.28rem; }\n    .classify-menu ul li .content p img {\n      height: 0.17rem; }\n  .classify-menu ul li .content ul {\n    padding: .05rem;\n    padding-top: 0;\n    width: 100%;\n    height: 1.68rem;\n    background: #f76d55;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    align-items: center;\n    -webkit-flex-wrap: wrap;\n    flex-wrap: wrap; }\n    .classify-menu ul li .content ul li {\n      width: 50%;\n      height: 0.84rem;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-direction: column;\n      flex-direction: column;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n      justify-content: center;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n      align-items: center;\n      position: relative;\n      background: #fff; }\n      .classify-menu ul li .content ul li::after {\n        pointer-events: none;\n        position: absolute;\n        z-index: 999;\n        top: 0;\n        left: 0;\n        content: \"\\0020\";\n        border-color: #ccc;\n        border-style: solid;\n        border-width: 0 0 1px 1px;\n        -webkit-transform-origin: 0 0;\n        transform-origin: 0 0; }\n        @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n          .classify-menu ul li .content ul li::after {\n            width: 100%;\n            height: 100%; } }\n        @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n          .classify-menu ul li .content ul li::after {\n            width: 200%;\n            height: 200%;\n            -webkit-transform: scale(0.5);\n            transform: scale(0.5); } }\n        @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n          .classify-menu ul li .content ul li::after {\n            width: 300%;\n            height: 300%;\n            -webkit-transform: scale(0.33333);\n            transform: scale(0.33333); } }\n      .classify-menu ul li .content ul li img {\n        width: 1.41rem;\n        height: 0.72rem; }\n      .classify-menu ul li .content ul li:nth-child(2n-1) {\n        position: relative; }\n        .classify-menu ul li .content ul li:nth-child(2n-1)::after {\n          pointer-events: none;\n          position: absolute;\n          z-index: 999;\n          top: 0;\n          left: 0;\n          content: \"\\0020\";\n          border-color: #ccc;\n          border-style: solid;\n          border-width: 0 0 1px 0;\n          -webkit-transform-origin: 0 0;\n          transform-origin: 0 0; }\n          @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n            .classify-menu ul li .content ul li:nth-child(2n-1)::after {\n              width: 100%;\n              height: 100%; } }\n          @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n            .classify-menu ul li .content ul li:nth-child(2n-1)::after {\n              width: 200%;\n              height: 200%;\n              -webkit-transform: scale(0.5);\n              transform: scale(0.5); } }\n          @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n            .classify-menu ul li .content ul li:nth-child(2n-1)::after {\n              width: 300%;\n              height: 300%;\n              -webkit-transform: scale(0.33333);\n              transform: scale(0.33333); } }\n      .classify-menu ul li .content ul li:nth-child(3) {\n        position: relative; }\n        .classify-menu ul li .content ul li:nth-child(3)::after {\n          pointer-events: none;\n          position: absolute;\n          z-index: 999;\n          top: 0;\n          left: 0;\n          content: \"\\0020\";\n          border-color: #ccc;\n          border-style: solid;\n          border-width: 0 0 0 0;\n          -webkit-transform-origin: 0 0;\n          transform-origin: 0 0; }\n          @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n            .classify-menu ul li .content ul li:nth-child(3)::after {\n              width: 100%;\n              height: 100%; } }\n          @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n            .classify-menu ul li .content ul li:nth-child(3)::after {\n              width: 200%;\n              height: 200%;\n              -webkit-transform: scale(0.5);\n              transform: scale(0.5); } }\n          @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n            .classify-menu ul li .content ul li:nth-child(3)::after {\n              width: 300%;\n              height: 300%;\n              -webkit-transform: scale(0.33333);\n              transform: scale(0.33333); } }\n      .classify-menu ul li .content ul li:nth-child(4) {\n        position: relative; }\n        .classify-menu ul li .content ul li:nth-child(4)::after {\n          pointer-events: none;\n          position: absolute;\n          z-index: 999;\n          top: 0;\n          left: 0;\n          content: \"\\0020\";\n          border-color: #ccc;\n          border-style: solid;\n          border-width: 0 0 0 1px;\n          -webkit-transform-origin: 0 0;\n          transform-origin: 0 0; }\n          @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n            .classify-menu ul li .content ul li:nth-child(4)::after {\n              width: 100%;\n              height: 100%; } }\n          @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n            .classify-menu ul li .content ul li:nth-child(4)::after {\n              width: 200%;\n              height: 200%;\n              -webkit-transform: scale(0.5);\n              transform: scale(0.5); } }\n          @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n            .classify-menu ul li .content ul li:nth-child(4)::after {\n              width: 300%;\n              height: 300%;\n              -webkit-transform: scale(0.33333);\n              transform: scale(0.33333); } }\n  .classify-menu ul li .content ul.small {\n    height: .98rem; }\n    .classify-menu ul li .content ul.small li {\n      width: 25%;\n      height: 0.94rem;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n      justify-content: center;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n      align-items: center;\n      position: relative;\n      background: #fff; }\n      .classify-menu ul li .content ul.small li::after {\n        pointer-events: none;\n        position: absolute;\n        z-index: 999;\n        top: 0;\n        left: 0;\n        content: \"\\0020\";\n        border-color: #ccc;\n        border-style: solid;\n        border-width: 0 0 1px 1px;\n        -webkit-transform-origin: 0 0;\n        transform-origin: 0 0; }\n        @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n          .classify-menu ul li .content ul.small li::after {\n            width: 100%;\n            height: 100%; } }\n        @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n          .classify-menu ul li .content ul.small li::after {\n            width: 200%;\n            height: 200%;\n            -webkit-transform: scale(0.5);\n            transform: scale(0.5); } }\n        @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n          .classify-menu ul li .content ul.small li::after {\n            width: 300%;\n            height: 300%;\n            -webkit-transform: scale(0.33333);\n            transform: scale(0.33333); } }\n      .classify-menu ul li .content ul.small li img {\n        width: 0.70rem;\n        height: 0.77rem; }\n      .classify-menu ul li .content ul.small li:nth-child(n) {\n        position: relative; }\n        .classify-menu ul li .content ul.small li:nth-child(n)::after {\n          pointer-events: none;\n          position: absolute;\n          z-index: 999;\n          top: 0;\n          left: 0;\n          content: \"\\0020\";\n          border-color: #ccc;\n          border-style: solid;\n          border-width: 1px 0 0 1px;\n          -webkit-transform-origin: 0 0;\n          transform-origin: 0 0; }\n          @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n            .classify-menu ul li .content ul.small li:nth-child(n)::after {\n              width: 100%;\n              height: 100%; } }\n          @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n            .classify-menu ul li .content ul.small li:nth-child(n)::after {\n              width: 200%;\n              height: 200%;\n              -webkit-transform: scale(0.5);\n              transform: scale(0.5); } }\n          @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n            .classify-menu ul li .content ul.small li:nth-child(n)::after {\n              width: 300%;\n              height: 300%;\n              -webkit-transform: scale(0.33333);\n              transform: scale(0.33333); } }\n      .classify-menu ul li .content ul.small li:first-child {\n        position: relative; }\n        .classify-menu ul li .content ul.small li:first-child::after {\n          pointer-events: none;\n          position: absolute;\n          z-index: 999;\n          top: 0;\n          left: 0;\n          content: \"\\0020\";\n          border-color: #ccc;\n          border-style: solid;\n          border-width: 1px 0 0 0;\n          -webkit-transform-origin: 0 0;\n          transform-origin: 0 0; }\n          @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n            .classify-menu ul li .content ul.small li:first-child::after {\n              width: 100%;\n              height: 100%; } }\n          @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n            .classify-menu ul li .content ul.small li:first-child::after {\n              width: 200%;\n              height: 200%;\n              -webkit-transform: scale(0.5);\n              transform: scale(0.5); } }\n          @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n            .classify-menu ul li .content ul.small li:first-child::after {\n              width: 300%;\n              height: 300%;\n              -webkit-transform: scale(0.33333);\n              transform: scale(0.33333); } }\n  .classify-menu ul li .content .ad-big-img {\n    background: #f8f8f8;\n    padding: .05rem;\n    width: 100%;\n    height: 0.82rem; }\n    .classify-menu ul li .content .ad-big-img img {\n      height: 0.72rem; }\n\n.products {\n  background: #fff;\n  padding: .1rem 0;\n  padding-bottom: 0; }\n  .products p {\n    text-align: center;\n    font-size: .12rem; }\n  .products ul#prolist {\n    width: 100%;\n    overflow: hidden;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    align-items: center;\n    -webkit-flex-wrap: wrap;\n    flex-wrap: wrap;\n    padding: 0.05rem 0;\n    padding-bottom: 0; }\n    .products ul#prolist li {\n      width: 50%;\n      height: 2rem;\n      padding: 0.08rem 0.08rem 0.04rem 0.08rem;\n      position: relative;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-direction: column;\n      flex-direction: column;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n      justify-content: center;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n      align-items: center; }\n      .products ul#prolist li::after {\n        pointer-events: none;\n        position: absolute;\n        z-index: 999;\n        top: 0;\n        left: 0;\n        content: \"\\0020\";\n        border-color: #ccc;\n        border-style: solid;\n        border-width: 0 0 1px 1px;\n        -webkit-transform-origin: 0 0;\n        transform-origin: 0 0; }\n        @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n          .products ul#prolist li::after {\n            width: 100%;\n            height: 100%; } }\n        @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n          .products ul#prolist li::after {\n            width: 200%;\n            height: 200%;\n            -webkit-transform: scale(0.5);\n            transform: scale(0.5); } }\n        @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n          .products ul#prolist li::after {\n            width: 300%;\n            height: 300%;\n            -webkit-transform: scale(0.33333);\n            transform: scale(0.33333); } }\n      .products ul#prolist li img {\n        width: 1.41rem;\n        height: 1.41rem; }\n      .products ul#prolist li .info {\n        font-size: 0.1rem;\n        line-height: .13rem;\n        padding-top: .05rem;\n        text-align: left;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display: -webkit-box !important;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -webkit-flex-direction: column;\n        flex-direction: column; }\n      .products ul#prolist li .prices {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-box-pack: justify;\n        -webkit-justify-content: space-between;\n        justify-content: space-between;\n        width: 100%; }\n        .products ul#prolist li .prices .price {\n          font-size: 0.12rem;\n          color: #f02a41;\n          font-weight: 500; }\n        .products ul#prolist li .prices .buybtn {\n          display: inline-block;\n          width: 0.32rem;\n          height: 0.16rem;\n          background: #fe9901;\n          font-size: 0.1rem;\n          line-height: 0.16rem;\n          text-align: center;\n          color: #fff;\n          border-radius: 3px;\n          -webkit-background-clip: padding-box !important;\n          background-clip: padding-box !important; }\n      .products ul#prolist li::nth-child(2n-1) {\n        position: relative; }\n        .products ul#prolist li::nth-child(2n-1)::after {\n          pointer-events: none;\n          position: absolute;\n          z-index: 999;\n          top: 0;\n          left: 0;\n          content: \"\\0020\";\n          border-color: #ccc;\n          border-style: solid;\n          border-width: 0 0 1px 0;\n          -webkit-transform-origin: 0 0;\n          transform-origin: 0 0; }\n          @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n            .products ul#prolist li::nth-child(2n-1)::after {\n              width: 100%;\n              height: 100%; } }\n          @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n            .products ul#prolist li::nth-child(2n-1)::after {\n              width: 200%;\n              height: 200%;\n              -webkit-transform: scale(0.5);\n              transform: scale(0.5); } }\n          @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n            .products ul#prolist li::nth-child(2n-1)::after {\n              width: 300%;\n              height: 300%;\n              -webkit-transform: scale(0.33333);\n              transform: scale(0.33333); } }\n\n#guangguang {\n  width: 100%;\n  height: 100%; }\n\n@font-face {\n  font-family: 'yofont';\n  src: url(\"/media/iconfont/iconfont.woff\") format(\"woff\"), url(\"http://localhost:4000/media/iconfont/iconfont.ttf\") format(\"truetype\"); }\n\n.banner img {\n  width: 100%; }\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(39)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__media_images_ba1_jpeg__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__media_images_ba1_jpeg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__media_images_ba1_jpeg__);
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },
  methods: {}
});

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "banner"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(10)
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-28df328e", module.exports)
  }
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(44),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/macbook/Desktop/test/qa/src/scripts/view/component/products-list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] products-list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5676745e", Component.options)
  } else {
    hotAPI.reload("data-v-5676745e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__media_images_bitong_jpeg__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__media_images_bitong_jpeg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__media_images_bitong_jpeg__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },
  methods: {}
});

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "products"
  }, [_c('p', [_vm._v("艺术品专卖")]), _vm._v(" "), _c('ul', {
    attrs: {
      "id": "prolist"
    }
  }, [_c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(1)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("办公室笔筒精品雕刻")]), _vm._v(" "), _c('div', {
    staticClass: "prices"
  }, [_c('span', {
    staticClass: "price"
  }, [_vm._v("¥8800.00")]), _vm._v(" "), _c('span', {
    staticClass: "buybtn"
  }, [_vm._v("抢购")])])]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(1)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("办公室笔筒精品雕刻")]), _vm._v(" "), _c('div', {
    staticClass: "prices"
  }, [_c('span', {
    staticClass: "price"
  }, [_vm._v("¥8800.00")]), _vm._v(" "), _c('span', {
    staticClass: "buybtn"
  }, [_vm._v("抢购")])])]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(1)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("办公室笔筒精品雕刻")]), _vm._v(" "), _c('div', {
    staticClass: "prices"
  }, [_c('span', {
    staticClass: "price"
  }, [_vm._v("¥8800.00")]), _vm._v(" "), _c('span', {
    staticClass: "buybtn"
  }, [_vm._v("抢购")])])]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(1)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("办公室笔筒精品雕刻")]), _vm._v(" "), _c('div', {
    staticClass: "prices"
  }, [_c('span', {
    staticClass: "price"
  }, [_vm._v("¥8800.00")]), _vm._v(" "), _c('span', {
    staticClass: "buybtn"
  }, [_vm._v("抢购")])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5676745e", module.exports)
  }
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(47),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/macbook/Desktop/test/qa/src/scripts/view/component/main-classify.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] main-classify.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f7c9a6e2", Component.options)
  } else {
    hotAPI.reload("data-v-f7c9a6e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__media_images_class2_jpeg__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__media_images_class2_jpeg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__media_images_class2_jpeg__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },
  methods: {}
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "classify-menu"
  }, [_c('ul', [_c('li', [_c('div', {
    staticClass: "content"
  }, [_c('p', [_c('img', {
    attrs: {
      "src": __webpack_require__(11)
    }
  })]), _vm._v(" "), _c('ul', {
    staticClass: "big"
  }, [_c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(2)
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(2)
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(2)
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(2)
    }
  })])]), _vm._v(" "), _c('ul', {
    staticClass: "small"
  }, [_c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(4)
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(4)
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(4)
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(4)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "ad-big-img"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(5),
      "alt": ""
    }
  })])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-f7c9a6e2", module.exports)
  }
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-main"
  }, [_c('Carousel'), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('MainClassify'), _vm._v(" "), _c('ProductsList')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ul', {
    staticClass: "menu"
  }, [_c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(12)
    }
  }), _vm._v(" "), _c('span', [_vm._v("女装")])]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(13)
    }
  }), _vm._v(" "), _c('span', [_vm._v("男装")])]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(14)
    }
  }), _vm._v(" "), _c('span', [_vm._v("艺术品")])]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(15)
    }
  }), _vm._v(" "), _c('span', [_vm._v("饰品")])]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(16)
    }
  }), _vm._v(" "), _c('span', [_vm._v("商务合作")])]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(17)
    }
  }), _vm._v(" "), _c('span', [_vm._v("精美鞋靴")])]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(18)
    }
  }), _vm._v(" "), _c('span', [_vm._v("关于我们")])]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(19)
    }
  }), _vm._v(" "), _c('span', [_vm._v("生活家居")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ad"
  }, [_c('span', [_vm._v("逛逛·热点")]), _vm._v(" "), _c('div', {
    staticClass: "swiper-container-ad"
  }, [_c('div', {
    staticClass: "swiper-wrapper"
  }, [_c('div', {
    staticClass: "swiper-slide"
  }, [_c('b', {
    staticClass: "hot"
  }, [_vm._v("HOT")]), _vm._v("透闪石决定和田玉质量")]), _vm._v(" "), _c('div', {
    staticClass: "swiper-slide"
  }, [_c('b', {
    staticClass: "hot"
  }, [_vm._v("HOT")]), _vm._v("玉器的几种修复方法")]), _vm._v(" "), _c('div', {
    staticClass: "swiper-slide"
  }, [_c('b', {
    staticClass: "hot"
  }, [_vm._v("HOT")]), _vm._v("和田玉与佛文化")]), _vm._v(" "), _c('div', {
    staticClass: "swiper-slide"
  }, [_c('b', {
    staticClass: "hot"
  }, [_vm._v("HOT")]), _vm._v("玉镯的开光")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ad-img"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(20)
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('p', [_c('img', {
    attrs: {
      "src": __webpack_require__(11)
    }
  })]), _vm._v(" "), _c('ul', [_c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(49)
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(50)
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(51)
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(52)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "ad-big-img"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(5),
      "alt": ""
    }
  })])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-780428d0", module.exports)
  }
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/c1.jpeg";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/c2.jpeg";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/c3.jpeg";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/c4.jpeg";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-index"
  }, [_c('Top'), _vm._v(" "), _c('section', [_c('router-view')], 1), _vm._v(" "), _c('Foot')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-b85241ca", module.exports)
  }
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(56),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/macbook/Desktop/test/qa/src/scripts/view/classify/classify.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] classify.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-230173f8", Component.options)
  } else {
    hotAPI.reload("data-v-230173f8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },
  methods: {}
});

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_vm._v("\n    分类...\n")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-230173f8", module.exports)
  }
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(58),
  /* template */
  __webpack_require__(59),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/macbook/Desktop/test/qa/src/scripts/view/brand/brand.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] brand.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c8c2a08", Component.options)
  } else {
    hotAPI.reload("data-v-0c8c2a08", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_foot_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_foot_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__component_foot_vue__);
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },
  methods: {},
  components: {
    Foot: __WEBPACK_IMPORTED_MODULE_0__component_foot_vue___default.a
  }
});

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-index"
  }, [_c('section', [_vm._v("\n          品牌...\n      ")]), _vm._v(" "), _c('Foot')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0c8c2a08", module.exports)
  }
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(61),
  /* template */
  __webpack_require__(62),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/macbook/Desktop/test/qa/src/scripts/view/cart/cart.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] cart.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-698703f8", Component.options)
  } else {
    hotAPI.reload("data-v-698703f8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_foot_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_foot_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__component_foot_vue__);
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },
  methods: {},
  components: {
    Foot: __WEBPACK_IMPORTED_MODULE_0__component_foot_vue___default.a
  }
});

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-index"
  }, [_c('section', [_vm._v("\n          购物车...\n      ")]), _vm._v(" "), _c('Foot')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-698703f8", module.exports)
  }
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(65),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/macbook/Desktop/test/qa/src/scripts/view/home/home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27a99358", Component.options)
  } else {
    hotAPI.reload("data-v-27a99358", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_foot_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_foot_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__component_foot_vue__);
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },
  methods: {},
  components: {
    Foot: __WEBPACK_IMPORTED_MODULE_0__component_foot_vue___default.a
  }
});

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-index"
  }, [_c('section', [_vm._v("\n          个人信息...\n      ")]), _vm._v(" "), _c('Foot')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-27a99358", module.exports)
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map