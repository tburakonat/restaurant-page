/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Karla-VariableFont_wght.ttf */ "./src/fonts/Karla-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/SquarePeg-Regular.ttf */ "./src/fonts/SquarePeg-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpeg */ "./src/images/background.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\tfont-family: 'Karla', 'Square Peg';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf'), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('ttf');\n\tfont-weight: 600;\n\tfont-style: normal;\n}\n\n* {\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbody {\n\tfont-family: 'Karla', cursive;\n\tbackground: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center center fixed;\n\tbackground-size: cover;\n}\n\n/* Navbar Styling */\n\n.navbar {\n\tdisplay: flex;\n\talign-items: center;\n\theight: 15vh;\n\tbackground-color: burlywood;\n}\n\n.navbar--image {\n\t-webkit-user-drag: none;\n\tmargin-left: 30px;\n\tcursor: pointer;\n}\n\n.name {\n\tfont-family: 'Karla', cursive;\n\tfont-weight: 600;\n\tfont-size: 30px;\n\tmargin-left: 20px;\n}\n\n.navbar--list {\n\tmargin-left: auto;\n\tlist-style-type: none;\n\tdisplay: flex;\n\tjustify-content: center;\n\tfont-size: 20px;\n\tfont-weight: 600;\n}\n\n.navbar--list li {\n\tmargin-right: 30px;\n}\n\n.navbar--list li a {\n\ttext-decoration: none;\n\tcolor: black;\n\ttransition: all 250ms ease-out;\n}\n\n.navbar--list li a:hover {\n\ttext-decoration: underline;\n\tcolor: aliceblue;\n\tcursor: pointer;\n}\n\n/* Home Tab Styling */\n\n.home {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tmargin-inline: 25%;\n\theight: 85vh;\n\ttext-align: center;\n\tcolor: aliceblue;\n}\n\n.header {\n\tfont-family: 'Square Peg', cursive;\n\tfont-size: 35px;\n\tfont-weight: bold;\n}\n\n.information {\n\tfont-family: 'Karla', cursive;\n\tmargin-top: 50px;\n\tline-height: 30px;\n}\n\n.time {\n\tmargin-top: 30px;\n}\n\n/* Menu Tab Styling */\n.menu {\n\tmargin-top: 30px;\n\tmargin-inline: 5%;\n\ttext-align: center;\n\tcolor: aliceblue;\n\tmin-height: 85vh;\n}\n\n.categories {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n\tjustify-items: center;\n\tgap: 20px;\n\tmargin-block: 30px;\n\tpadding: 30px;\n\tbackground-color: red;\n}\n\n.category {\n\tbackground-color: green;\n\twidth: 600px;\n\theight: 600px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-around;\n\talign-items: center;\n}\n\n.food {\n\tbackground-color: yellow;\n\twidth: 550px;\n\theight: 120px;\n}\n\n/* Über Uns Tab Styling */\n.about-us {\n\tmargin-top: 30px;\n\ttext-align: center;\n\tcolor: aliceblue;\n\tmin-height: 85vh;\n}\n\n.about-us div {\n\tpadding-bottom: 50px;\n\tpadding-inline: 25%;\n\tbackground-color: #ffffff8f;\n\tmargin-top: 50px;\n}\n\n.about-us div * {\n\tpadding-top: 30px;\n\tline-height: 25px;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;CACC,kCAAkC;CAClC,iHAAiH;CACjH,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,sBAAsB;CACtB,SAAS;CACT,UAAU;AACX;;AAEA;CACC,6BAA6B;CAC7B;uEAC8D;CAC9D,sBAAsB;AACvB;;AAEA,mBAAmB;;AAEnB;CACC,aAAa;CACb,mBAAmB;CACnB,YAAY;CACZ,2BAA2B;AAC5B;;AAEA;CACC,uBAAuB;CACvB,iBAAiB;CACjB,eAAe;AAChB;;AAEA;CACC,6BAA6B;CAC7B,gBAAgB;CAChB,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;CACjB,qBAAqB;CACrB,aAAa;CACb,uBAAuB;CACvB,eAAe;CACf,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,qBAAqB;CACrB,YAAY;CACZ,8BAA8B;AAC/B;;AAEA;CACC,0BAA0B;CAC1B,gBAAgB;CAChB,eAAe;AAChB;;AAEA,qBAAqB;;AAErB;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,kBAAkB;CAClB,YAAY;CACZ,kBAAkB;CAClB,gBAAgB;AACjB;;AAEA;CACC,kCAAkC;CAClC,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,6BAA6B;CAC7B,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,gBAAgB;AACjB;;AAEA,qBAAqB;AACrB;CACC,gBAAgB;CAChB,iBAAiB;CACjB,kBAAkB;CAClB,gBAAgB;CAChB,gBAAgB;AACjB;;AAEA;CACC,aAAa;CACb,2DAA2D;CAC3D,qBAAqB;CACrB,SAAS;CACT,kBAAkB;CAClB,aAAa;CACb,qBAAqB;AACtB;;AAEA;CACC,uBAAuB;CACvB,YAAY;CACZ,aAAa;CACb,aAAa;CACb,sBAAsB;CACtB,6BAA6B;CAC7B,mBAAmB;AACpB;;AAEA;CACC,wBAAwB;CACxB,YAAY;CACZ,aAAa;AACd;;AAEA,yBAAyB;AACzB;CACC,gBAAgB;CAChB,kBAAkB;CAClB,gBAAgB;CAChB,gBAAgB;AACjB;;AAEA;CACC,oBAAoB;CACpB,mBAAmB;CACnB,2BAA2B;CAC3B,gBAAgB;AACjB;;AAEA;CACC,iBAAiB;CACjB,iBAAiB;AAClB","sourcesContent":["@font-face {\n\tfont-family: 'Karla', 'Square Peg';\n\tsrc: url('./fonts/Karla-VariableFont_wght.ttf') format('ttf'), url('./fonts/SquarePeg-Regular.ttf') format('ttf');\n\tfont-weight: 600;\n\tfont-style: normal;\n}\n\n* {\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbody {\n\tfont-family: 'Karla', cursive;\n\tbackground: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),\n\t\turl('./images/background.jpeg') no-repeat center center fixed;\n\tbackground-size: cover;\n}\n\n/* Navbar Styling */\n\n.navbar {\n\tdisplay: flex;\n\talign-items: center;\n\theight: 15vh;\n\tbackground-color: burlywood;\n}\n\n.navbar--image {\n\t-webkit-user-drag: none;\n\tmargin-left: 30px;\n\tcursor: pointer;\n}\n\n.name {\n\tfont-family: 'Karla', cursive;\n\tfont-weight: 600;\n\tfont-size: 30px;\n\tmargin-left: 20px;\n}\n\n.navbar--list {\n\tmargin-left: auto;\n\tlist-style-type: none;\n\tdisplay: flex;\n\tjustify-content: center;\n\tfont-size: 20px;\n\tfont-weight: 600;\n}\n\n.navbar--list li {\n\tmargin-right: 30px;\n}\n\n.navbar--list li a {\n\ttext-decoration: none;\n\tcolor: black;\n\ttransition: all 250ms ease-out;\n}\n\n.navbar--list li a:hover {\n\ttext-decoration: underline;\n\tcolor: aliceblue;\n\tcursor: pointer;\n}\n\n/* Home Tab Styling */\n\n.home {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tmargin-inline: 25%;\n\theight: 85vh;\n\ttext-align: center;\n\tcolor: aliceblue;\n}\n\n.header {\n\tfont-family: 'Square Peg', cursive;\n\tfont-size: 35px;\n\tfont-weight: bold;\n}\n\n.information {\n\tfont-family: 'Karla', cursive;\n\tmargin-top: 50px;\n\tline-height: 30px;\n}\n\n.time {\n\tmargin-top: 30px;\n}\n\n/* Menu Tab Styling */\n.menu {\n\tmargin-top: 30px;\n\tmargin-inline: 5%;\n\ttext-align: center;\n\tcolor: aliceblue;\n\tmin-height: 85vh;\n}\n\n.categories {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n\tjustify-items: center;\n\tgap: 20px;\n\tmargin-block: 30px;\n\tpadding: 30px;\n\tbackground-color: red;\n}\n\n.category {\n\tbackground-color: green;\n\twidth: 600px;\n\theight: 600px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-around;\n\talign-items: center;\n}\n\n.food {\n\tbackground-color: yellow;\n\twidth: 550px;\n\theight: 120px;\n}\n\n/* Über Uns Tab Styling */\n.about-us {\n\tmargin-top: 30px;\n\ttext-align: center;\n\tcolor: aliceblue;\n\tmin-height: 85vh;\n}\n\n.about-us div {\n\tpadding-bottom: 50px;\n\tpadding-inline: 25%;\n\tbackground-color: #ffffff8f;\n\tmargin-top: 50px;\n}\n\n.about-us div * {\n\tpadding-top: 30px;\n\tline-height: 25px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/functions/render.js":
/*!*********************************!*\
  !*** ./src/functions/render.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// removes all content style attributes and removes children till only header remains as the sole children
const render = function () {
	const content = document.querySelector('#content')
	while (content.children.length > 1) {
		content.children[1].remove()
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);


/***/ }),

/***/ "./src/pages/aboutUs.js":
/*!******************************!*\
  !*** ./src/pages/aboutUs.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const makeAboutUs = () => {
	const aboutUs = document.createElement('div')
	aboutUs.classList.add('about-us')

	const h2 = document.createElement('h2')
	h2.textContent = 'Über Uns'

	const content = document.createElement('div')
	content.classList.add('about-us-content')

	const firstH3 = document.createElement('h3')
	firstH3.textContent = 'Qualität steht ganz oben!'

	const firstP = document.createElement('p')
	firstP.textContent =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nobis quas minus quodnecessitatibus corporis! Quos consequatur ex reiciendis quia quae debitis unde! Commodi solutasimilique quo nulla blanditiis vitae.'

	const secondH3 = document.createElement('h3')
	secondH3.textContent = 'Sauberkeit ist uns wichtig!'

	const secondP = document.createElement('p')
	secondP.textContent =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nobis quas minus quodnecessitatibus corporis! Quos consequatur ex reiciendis quia quae debitis unde! Commodi solutasimilique quo nulla blanditiis vitae.'

	const thirdH3 = document.createElement('h3')
	thirdH3.textContent = 'Wir sind ein Ort zum Genießen!'

	const thirdP = document.createElement('p')
	thirdP.textContent =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nobis quas minus quodnecessitatibus corporis! Quos consequatur ex reiciendis quia quae debitis unde! Commodi solutasimilique quo nulla blanditiis vitae.'

	content.appendChild(firstH3)
	content.appendChild(firstP)
	content.appendChild(secondH3)
	content.appendChild(secondP)
	content.appendChild(thirdH3)
	content.appendChild(thirdP)
	aboutUs.appendChild(h2)
	aboutUs.appendChild(content)

	return aboutUs
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeAboutUs);


/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const makeHome = () => {
	const home = document.createElement('div')
	home.classList.add('home')

	const header = document.createElement('div')
	header.classList.add('header')

	const h2 = document.createElement('h2')
	h2.textContent = 'Genieße fantastisches Essen und ein entspanntes Ambiente'
	header.appendChild(h2)

	const information = document.createElement('div')
	information.classList.add('information')

	const place = document.createElement('div')
	place.classList.add('place')
	place.innerHTML = 'Musterstraße 13,<br />63571 Gelnhausen'

	const time = document.createElement('div')
	time.classList.add('time')
	time.innerHTML = 'Mo-Fr: 8 - 20 Uhr <br /> Sa-So: 10 - 22 Uhr'

	information.appendChild(place)
	information.appendChild(time)

	home.appendChild(header)
	home.appendChild(information)

	return home
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeHome);


/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const makeMenu = () => {
	const menu = document.createElement('div')
	menu.classList.add('menu')

	const h2 = document.createElement('h2')
	h2.textContent = 'Unser Menü'

	const categories = document.createElement('div')
	categories.classList.add('categories')
	for (let i = 0; i < 4; i++) {
		const category = document.createElement('div')
		category.classList.add('category')
		categories.appendChild(category)

		const h3 = document.createElement('h3')
		h3.textContent = 'Hot Food'
		category.appendChild(h3)

		for (let i = 0; i < 4; i++) {
			const food = document.createElement('div')
			food.classList.add('food')
			category.appendChild(food)
		}
	}
	menu.appendChild(h2)
	menu.appendChild(categories)

	return menu
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeMenu);


/***/ }),

/***/ "./src/pages/navbar.js":
/*!*****************************!*\
  !*** ./src/pages/navbar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_doener_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/doener.png */ "./src/images/doener.png");
/* harmony import */ var _aboutUs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutUs */ "./src/pages/aboutUs.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/pages/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/pages/menu.js");
/* harmony import */ var _functions_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/render */ "./src/functions/render.js");






const makeNavbar = () => {
	const content = document.querySelector('#content')

	const navbar = document.createElement('nav')
	navbar.classList.add('navbar')

	const logo = document.createElement('img')
	logo.classList.add('navbar--image')
	logo.src = _images_doener_png__WEBPACK_IMPORTED_MODULE_0__
	logo.width = '75'
	logo.addEventListener('click', () => {
		;(0,_functions_render__WEBPACK_IMPORTED_MODULE_4__["default"])()
		content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])())
	})

	const header = document.createElement('header')
	header.classList.add('name')
	header.textContent = "Burak's Place"

	const ul = document.createElement('ul')
	ul.classList.add('navbar--list')

	const menuLi = document.createElement('li')
	const menuA = document.createElement('a')
	menuA.id = 'menu'
	menuA.addEventListener('click', () => {
		;(0,_functions_render__WEBPACK_IMPORTED_MODULE_4__["default"])()
		content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])())
	})
	menuLi.appendChild(menuA)
	menuA.textContent = 'Menü'

	const aboutUsLi = document.createElement('li')
	const aboutUsA = document.createElement('a')
	aboutUsA.id = 'about'
	aboutUsA.addEventListener('click', () => {
		;(0,_functions_render__WEBPACK_IMPORTED_MODULE_4__["default"])()
		content.appendChild((0,_aboutUs__WEBPACK_IMPORTED_MODULE_1__["default"])())
	})
	aboutUsLi.appendChild(aboutUsA)
	aboutUsA.textContent = 'Über Uns'

	ul.appendChild(menuLi)
	ul.appendChild(aboutUsLi)

	navbar.appendChild(logo)
	navbar.appendChild(header)
	navbar.appendChild(ul)

	content.appendChild(navbar)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeNavbar);


/***/ }),

/***/ "./src/fonts/Karla-VariableFont_wght.ttf":
/*!***********************************************!*\
  !*** ./src/fonts/Karla-VariableFont_wght.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7cdc609f35daffcb788.ttf";

/***/ }),

/***/ "./src/fonts/SquarePeg-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/SquarePeg-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "381be1381bbd94205c6f.ttf";

/***/ }),

/***/ "./src/images/background.jpeg":
/*!************************************!*\
  !*** ./src/images/background.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3a5b5d0f57e67dd50c1.jpeg";

/***/ }),

/***/ "./src/images/doener.png":
/*!*******************************!*\
  !*** ./src/images/doener.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5fc2a5ec1315c108ddfa.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _images_background_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/background.jpeg */ "./src/images/background.jpeg");
/* harmony import */ var _pages_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/navbar */ "./src/pages/navbar.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");





document.getElementById('content')

window.addEventListener('load', () => {
	;(0,_pages_navbar__WEBPACK_IMPORTED_MODULE_2__["default"])()
	content.appendChild((0,_pages_home__WEBPACK_IMPORTED_MODULE_3__["default"])())
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDWTtBQUNNO0FBQ0o7O0FBRW5DOztBQUVBO0FBQ0EsQ0FBQywwREFBVTtBQUNYLHFCQUFxQix1REFBUTtBQUM3QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZnVuY3Rpb25zL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvYWJvdXRVcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0thcmxhLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvU3F1YXJlUGVnLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmFja2dyb3VuZC5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ0thcmxhJywgJ1NxdWFyZSBQZWcnO1xcblxcdHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3R0ZicpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHRmJyk7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbioge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcblxcdGZvbnQtZmFtaWx5OiAnS2FybGEnLCBjdXJzaXZlO1xcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNyksIHJnYmEoMCwgMCwgMCwgMC43KSksXFxuXFx0XFx0dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4vKiBOYXZiYXIgU3R5bGluZyAqL1xcblxcbi5uYXZiYXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDE1dmg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xcbn1cXG5cXG4ubmF2YmFyLS1pbWFnZSB7XFxuXFx0LXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XFxuXFx0bWFyZ2luLWxlZnQ6IDMwcHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmFtZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdLYXJsYScsIGN1cnNpdmU7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRmb250LXNpemU6IDMwcHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5uYXZiYXItLWxpc3Qge1xcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubmF2YmFyLS1saXN0IGxpIHtcXG5cXHRtYXJnaW4tcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5uYXZiYXItLWxpc3QgbGkgYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1vdXQ7XFxufVxcblxcbi5uYXZiYXItLWxpc3QgbGkgYTpob3ZlciB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0Y29sb3I6IGFsaWNlYmx1ZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEhvbWUgVGFiIFN0eWxpbmcgKi9cXG5cXG4uaG9tZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdG1hcmdpbi1pbmxpbmU6IDI1JTtcXG5cXHRoZWlnaHQ6IDg1dmg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGNvbG9yOiBhbGljZWJsdWU7XFxufVxcblxcbi5oZWFkZXIge1xcblxcdGZvbnQtZmFtaWx5OiAnU3F1YXJlIFBlZycsIGN1cnNpdmU7XFxuXFx0Zm9udC1zaXplOiAzNXB4O1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaW5mb3JtYXRpb24ge1xcblxcdGZvbnQtZmFtaWx5OiAnS2FybGEnLCBjdXJzaXZlO1xcblxcdG1hcmdpbi10b3A6IDUwcHg7XFxuXFx0bGluZS1oZWlnaHQ6IDMwcHg7XFxufVxcblxcbi50aW1lIHtcXG5cXHRtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4vKiBNZW51IFRhYiBTdHlsaW5nICovXFxuLm1lbnUge1xcblxcdG1hcmdpbi10b3A6IDMwcHg7XFxuXFx0bWFyZ2luLWlubGluZTogNSU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGNvbG9yOiBhbGljZWJsdWU7XFxuXFx0bWluLWhlaWdodDogODV2aDtcXG59XFxuXFxuLmNhdGVnb3JpZXMge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MDBweCwgMWZyKSk7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMjBweDtcXG5cXHRtYXJnaW4tYmxvY2s6IDMwcHg7XFxuXFx0cGFkZGluZzogMzBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5jYXRlZ29yeSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuXFx0d2lkdGg6IDYwMHB4O1xcblxcdGhlaWdodDogNjAwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb29kIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuXFx0d2lkdGg6IDU1MHB4O1xcblxcdGhlaWdodDogMTIwcHg7XFxufVxcblxcbi8qIMOcYmVyIFVucyBUYWIgU3R5bGluZyAqL1xcbi5hYm91dC11cyB7XFxuXFx0bWFyZ2luLXRvcDogMzBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Y29sb3I6IGFsaWNlYmx1ZTtcXG5cXHRtaW4taGVpZ2h0OiA4NXZoO1xcbn1cXG5cXG4uYWJvdXQtdXMgZGl2IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNTBweDtcXG5cXHRwYWRkaW5nLWlubGluZTogMjUlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY4ZjtcXG5cXHRtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4uYWJvdXQtdXMgZGl2ICoge1xcblxcdHBhZGRpbmctdG9wOiAzMHB4O1xcblxcdGxpbmUtaGVpZ2h0OiAyNXB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGtDQUFrQztDQUNsQyxpSEFBaUg7Q0FDakgsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixTQUFTO0NBQ1QsVUFBVTtBQUNYOztBQUVBO0NBQ0MsNkJBQTZCO0NBQzdCO3VFQUM4RDtDQUM5RCxzQkFBc0I7QUFDdkI7O0FBRUEsbUJBQW1COztBQUVuQjtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixpQkFBaUI7Q0FDakIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLDZCQUE2QjtDQUM3QixnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixxQkFBcUI7Q0FDckIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7O0FBRUEscUJBQXFCOztBQUVyQjtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGtDQUFrQztDQUNsQyxlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsNkJBQTZCO0NBQzdCLGdCQUFnQjtDQUNoQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUEscUJBQXFCO0FBQ3JCO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiwyREFBMkQ7Q0FDM0QscUJBQXFCO0NBQ3JCLFNBQVM7Q0FDVCxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osYUFBYTtDQUNiLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsNkJBQTZCO0NBQzdCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLHdCQUF3QjtDQUN4QixZQUFZO0NBQ1osYUFBYTtBQUNkOztBQUVBLHlCQUF5QjtBQUN6QjtDQUNDLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsMkJBQTJCO0NBQzNCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdLYXJsYScsICdTcXVhcmUgUGVnJztcXG5cXHRzcmM6IHVybCgnLi9mb250cy9LYXJsYS1WYXJpYWJsZUZvbnRfd2dodC50dGYnKSBmb3JtYXQoJ3R0ZicpLCB1cmwoJy4vZm9udHMvU3F1YXJlUGVnLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0dGYnKTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKiB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdLYXJsYScsIGN1cnNpdmU7XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC43KSwgcmdiYSgwLCAwLCAwLCAwLjcpKSxcXG5cXHRcXHR1cmwoJy4vaW1hZ2VzL2JhY2tncm91bmQuanBlZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi8qIE5hdmJhciBTdHlsaW5nICovXFxuXFxuLm5hdmJhciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGhlaWdodDogMTV2aDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XFxufVxcblxcbi5uYXZiYXItLWltYWdlIHtcXG5cXHQtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcXG5cXHRtYXJnaW4tbGVmdDogMzBweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYW1lIHtcXG5cXHRmb250LWZhbWlseTogJ0thcmxhJywgY3Vyc2l2ZTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdGZvbnQtc2l6ZTogMzBweDtcXG5cXHRtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLm5hdmJhci0tbGlzdCB7XFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5uYXZiYXItLWxpc3QgbGkge1xcblxcdG1hcmdpbi1yaWdodDogMzBweDtcXG59XFxuXFxuLm5hdmJhci0tbGlzdCBsaSBhIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLW91dDtcXG59XFxuXFxuLm5hdmJhci0tbGlzdCBsaSBhOmhvdmVyIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHRjb2xvcjogYWxpY2VibHVlO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogSG9tZSBUYWIgU3R5bGluZyAqL1xcblxcbi5ob21lIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0bWFyZ2luLWlubGluZTogMjUlO1xcblxcdGhlaWdodDogODV2aDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Y29sb3I6IGFsaWNlYmx1ZTtcXG59XFxuXFxuLmhlYWRlciB7XFxuXFx0Zm9udC1mYW1pbHk6ICdTcXVhcmUgUGVnJywgY3Vyc2l2ZTtcXG5cXHRmb250LXNpemU6IDM1cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5pbmZvcm1hdGlvbiB7XFxuXFx0Zm9udC1mYW1pbHk6ICdLYXJsYScsIGN1cnNpdmU7XFxuXFx0bWFyZ2luLXRvcDogNTBweDtcXG5cXHRsaW5lLWhlaWdodDogMzBweDtcXG59XFxuXFxuLnRpbWUge1xcblxcdG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbi8qIE1lbnUgVGFiIFN0eWxpbmcgKi9cXG4ubWVudSB7XFxuXFx0bWFyZ2luLXRvcDogMzBweDtcXG5cXHRtYXJnaW4taW5saW5lOiA1JTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Y29sb3I6IGFsaWNlYmx1ZTtcXG5cXHRtaW4taGVpZ2h0OiA4NXZoO1xcbn1cXG5cXG4uY2F0ZWdvcmllcyB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwMHB4LCAxZnIpKTtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAyMHB4O1xcblxcdG1hcmdpbi1ibG9jazogMzBweDtcXG5cXHRwYWRkaW5nOiAzMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmNhdGVnb3J5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG5cXHR3aWR0aDogNjAwcHg7XFxuXFx0aGVpZ2h0OiA2MDBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb2Qge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG5cXHR3aWR0aDogNTUwcHg7XFxuXFx0aGVpZ2h0OiAxMjBweDtcXG59XFxuXFxuLyogw5xiZXIgVW5zIFRhYiBTdHlsaW5nICovXFxuLmFib3V0LXVzIHtcXG5cXHRtYXJnaW4tdG9wOiAzMHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRjb2xvcjogYWxpY2VibHVlO1xcblxcdG1pbi1oZWlnaHQ6IDg1dmg7XFxufVxcblxcbi5hYm91dC11cyBkaXYge1xcblxcdHBhZGRpbmctYm90dG9tOiA1MHB4O1xcblxcdHBhZGRpbmctaW5saW5lOiAyNSU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjhmO1xcblxcdG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi5hYm91dC11cyBkaXYgKiB7XFxuXFx0cGFkZGluZy10b3A6IDMwcHg7XFxuXFx0bGluZS1oZWlnaHQ6IDI1cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIHJlbW92ZXMgYWxsIGNvbnRlbnQgc3R5bGUgYXR0cmlidXRlcyBhbmQgcmVtb3ZlcyBjaGlsZHJlbiB0aWxsIG9ubHkgaGVhZGVyIHJlbWFpbnMgYXMgdGhlIHNvbGUgY2hpbGRyZW5cbmNvbnN0IHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jylcblx0d2hpbGUgKGNvbnRlbnQuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuXHRcdGNvbnRlbnQuY2hpbGRyZW5bMV0ucmVtb3ZlKClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJcbiIsImNvbnN0IG1ha2VBYm91dFVzID0gKCkgPT4ge1xuXHRjb25zdCBhYm91dFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblx0YWJvdXRVcy5jbGFzc0xpc3QuYWRkKCdhYm91dC11cycpXG5cblx0Y29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG5cdGgyLnRleHRDb250ZW50ID0gJ8OcYmVyIFVucydcblxuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblx0Y29udGVudC5jbGFzc0xpc3QuYWRkKCdhYm91dC11cy1jb250ZW50JylcblxuXHRjb25zdCBmaXJzdEgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuXHRmaXJzdEgzLnRleHRDb250ZW50ID0gJ1F1YWxpdMOkdCBzdGVodCBnYW56IG9iZW4hJ1xuXG5cdGNvbnN0IGZpcnN0UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuXHRmaXJzdFAudGV4dENvbnRlbnQgPVxuXHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEaXN0aW5jdGlvIG5vYmlzIHF1YXMgbWludXMgcXVvZG5lY2Vzc2l0YXRpYnVzIGNvcnBvcmlzISBRdW9zIGNvbnNlcXVhdHVyIGV4IHJlaWNpZW5kaXMgcXVpYSBxdWFlIGRlYml0aXMgdW5kZSEgQ29tbW9kaSBzb2x1dGFzaW1pbGlxdWUgcXVvIG51bGxhIGJsYW5kaXRpaXMgdml0YWUuJ1xuXG5cdGNvbnN0IHNlY29uZEgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuXHRzZWNvbmRIMy50ZXh0Q29udGVudCA9ICdTYXViZXJrZWl0IGlzdCB1bnMgd2ljaHRpZyEnXG5cblx0Y29uc3Qgc2Vjb25kUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuXHRzZWNvbmRQLnRleHRDb250ZW50ID1cblx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRGlzdGluY3RpbyBub2JpcyBxdWFzIG1pbnVzIHF1b2RuZWNlc3NpdGF0aWJ1cyBjb3Jwb3JpcyEgUXVvcyBjb25zZXF1YXR1ciBleCByZWljaWVuZGlzIHF1aWEgcXVhZSBkZWJpdGlzIHVuZGUhIENvbW1vZGkgc29sdXRhc2ltaWxpcXVlIHF1byBudWxsYSBibGFuZGl0aWlzIHZpdGFlLidcblxuXHRjb25zdCB0aGlyZEgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuXHR0aGlyZEgzLnRleHRDb250ZW50ID0gJ1dpciBzaW5kIGVpbiBPcnQgenVtIEdlbmllw59lbiEnXG5cblx0Y29uc3QgdGhpcmRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5cdHRoaXJkUC50ZXh0Q29udGVudCA9XG5cdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIERpc3RpbmN0aW8gbm9iaXMgcXVhcyBtaW51cyBxdW9kbmVjZXNzaXRhdGlidXMgY29ycG9yaXMhIFF1b3MgY29uc2VxdWF0dXIgZXggcmVpY2llbmRpcyBxdWlhIHF1YWUgZGViaXRpcyB1bmRlISBDb21tb2RpIHNvbHV0YXNpbWlsaXF1ZSBxdW8gbnVsbGEgYmxhbmRpdGlpcyB2aXRhZS4nXG5cblx0Y29udGVudC5hcHBlbmRDaGlsZChmaXJzdEgzKVxuXHRjb250ZW50LmFwcGVuZENoaWxkKGZpcnN0UClcblx0Y29udGVudC5hcHBlbmRDaGlsZChzZWNvbmRIMylcblx0Y29udGVudC5hcHBlbmRDaGlsZChzZWNvbmRQKVxuXHRjb250ZW50LmFwcGVuZENoaWxkKHRoaXJkSDMpXG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcmRQKVxuXHRhYm91dFVzLmFwcGVuZENoaWxkKGgyKVxuXHRhYm91dFVzLmFwcGVuZENoaWxkKGNvbnRlbnQpXG5cblx0cmV0dXJuIGFib3V0VXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZUFib3V0VXNcbiIsImNvbnN0IG1ha2VIb21lID0gKCkgPT4ge1xuXHRjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblx0aG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJylcblxuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHRoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcblxuXHRjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcblx0aDIudGV4dENvbnRlbnQgPSAnR2VuaWXDn2UgZmFudGFzdGlzY2hlcyBFc3NlbiB1bmQgZWluIGVudHNwYW5udGVzIEFtYmllbnRlJ1xuXHRoZWFkZXIuYXBwZW5kQ2hpbGQoaDIpXG5cblx0Y29uc3QgaW5mb3JtYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHRpbmZvcm1hdGlvbi5jbGFzc0xpc3QuYWRkKCdpbmZvcm1hdGlvbicpXG5cblx0Y29uc3QgcGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHRwbGFjZS5jbGFzc0xpc3QuYWRkKCdwbGFjZScpXG5cdHBsYWNlLmlubmVySFRNTCA9ICdNdXN0ZXJzdHJhw59lIDEzLDxiciAvPjYzNTcxIEdlbG5oYXVzZW4nXG5cblx0Y29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdHRpbWUuY2xhc3NMaXN0LmFkZCgndGltZScpXG5cdHRpbWUuaW5uZXJIVE1MID0gJ01vLUZyOiA4IC0gMjAgVWhyIDxiciAvPiBTYS1TbzogMTAgLSAyMiBVaHInXG5cblx0aW5mb3JtYXRpb24uYXBwZW5kQ2hpbGQocGxhY2UpXG5cdGluZm9ybWF0aW9uLmFwcGVuZENoaWxkKHRpbWUpXG5cblx0aG9tZS5hcHBlbmRDaGlsZChoZWFkZXIpXG5cdGhvbWUuYXBwZW5kQ2hpbGQoaW5mb3JtYXRpb24pXG5cblx0cmV0dXJuIGhvbWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZUhvbWVcbiIsImNvbnN0IG1ha2VNZW51ID0gKCkgPT4ge1xuXHRjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblx0bWVudS5jbGFzc0xpc3QuYWRkKCdtZW51JylcblxuXHRjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcblx0aDIudGV4dENvbnRlbnQgPSAnVW5zZXIgTWVuw7wnXG5cblx0Y29uc3QgY2F0ZWdvcmllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdGNhdGVnb3JpZXMuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcmllcycpXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0Y29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHRcdGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5Jylcblx0XHRjYXRlZ29yaWVzLmFwcGVuZENoaWxkKGNhdGVnb3J5KVxuXG5cdFx0Y29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG5cdFx0aDMudGV4dENvbnRlbnQgPSAnSG90IEZvb2QnXG5cdFx0Y2F0ZWdvcnkuYXBwZW5kQ2hpbGQoaDMpXG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHRcdFx0Y29uc3QgZm9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdFx0XHRmb29kLmNsYXNzTGlzdC5hZGQoJ2Zvb2QnKVxuXHRcdFx0Y2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZm9vZClcblx0XHR9XG5cdH1cblx0bWVudS5hcHBlbmRDaGlsZChoMilcblx0bWVudS5hcHBlbmRDaGlsZChjYXRlZ29yaWVzKVxuXG5cdHJldHVybiBtZW51XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VNZW51XG4iLCJpbXBvcnQgZG9lbmVyIGZyb20gJy4uL2ltYWdlcy9kb2VuZXIucG5nJ1xuaW1wb3J0IG1ha2VBYm91dFVzIGZyb20gJy4vYWJvdXRVcydcbmltcG9ydCBtYWtlSG9tZSBmcm9tICcuL2hvbWUnXG5pbXBvcnQgbWFrZU1lbnUgZnJvbSAnLi9tZW51J1xuaW1wb3J0IHJlbmRlciBmcm9tICcuLi9mdW5jdGlvbnMvcmVuZGVyJ1xuXG5jb25zdCBtYWtlTmF2YmFyID0gKCkgPT4ge1xuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuXG5cdGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG5cdG5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXInKVxuXG5cdGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuXHRsb2dvLmNsYXNzTGlzdC5hZGQoJ25hdmJhci0taW1hZ2UnKVxuXHRsb2dvLnNyYyA9IGRvZW5lclxuXHRsb2dvLndpZHRoID0gJzc1J1xuXHRsb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdHJlbmRlcigpXG5cdFx0Y29udGVudC5hcHBlbmRDaGlsZChtYWtlSG9tZSgpKVxuXHR9KVxuXG5cdGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG5cdGhlYWRlci5jbGFzc0xpc3QuYWRkKCduYW1lJylcblx0aGVhZGVyLnRleHRDb250ZW50ID0gXCJCdXJhaydzIFBsYWNlXCJcblxuXHRjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcblx0dWwuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLS1saXN0JylcblxuXHRjb25zdCBtZW51TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG5cdGNvbnN0IG1lbnVBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG5cdG1lbnVBLmlkID0gJ21lbnUnXG5cdG1lbnVBLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdHJlbmRlcigpXG5cdFx0Y29udGVudC5hcHBlbmRDaGlsZChtYWtlTWVudSgpKVxuXHR9KVxuXHRtZW51TGkuYXBwZW5kQ2hpbGQobWVudUEpXG5cdG1lbnVBLnRleHRDb250ZW50ID0gJ01lbsO8J1xuXG5cdGNvbnN0IGFib3V0VXNMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcblx0Y29uc3QgYWJvdXRVc0EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcblx0YWJvdXRVc0EuaWQgPSAnYWJvdXQnXG5cdGFib3V0VXNBLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdHJlbmRlcigpXG5cdFx0Y29udGVudC5hcHBlbmRDaGlsZChtYWtlQWJvdXRVcygpKVxuXHR9KVxuXHRhYm91dFVzTGkuYXBwZW5kQ2hpbGQoYWJvdXRVc0EpXG5cdGFib3V0VXNBLnRleHRDb250ZW50ID0gJ8OcYmVyIFVucydcblxuXHR1bC5hcHBlbmRDaGlsZChtZW51TGkpXG5cdHVsLmFwcGVuZENoaWxkKGFib3V0VXNMaSlcblxuXHRuYXZiYXIuYXBwZW5kQ2hpbGQobG9nbylcblx0bmF2YmFyLmFwcGVuZENoaWxkKGhlYWRlcilcblx0bmF2YmFyLmFwcGVuZENoaWxkKHVsKVxuXG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2YmFyKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlTmF2YmFyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5pbXBvcnQgJy4vaW1hZ2VzL2JhY2tncm91bmQuanBlZydcbmltcG9ydCBtYWtlTmF2YmFyIGZyb20gJy4vcGFnZXMvbmF2YmFyJ1xuaW1wb3J0IG1ha2VIb21lIGZyb20gJy4vcGFnZXMvaG9tZSdcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcblx0bWFrZU5hdmJhcigpXG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFrZUhvbWUoKSlcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=