"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksetup_webpack"] = self["webpackChunksetup_webpack"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  background-color: #f06d26;\r\n  color: #fff;\r\n}\r\n\r\n.nav-bar {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  list-style: none;\r\n}\r\n\r\n.nav-section {\r\n  min-width: 223px;\r\n}\r\n\r\nfooter {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #f06d26;\r\n  color: #fff;\r\n  text-align: center;\r\n}\r\n\r\n#menu-items {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\n.btn {\r\n  padding: 10px;\r\n  margin: 10px;\r\n}\r\n\r\n.btn-container {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.category-name {\r\n  background-color: #f06d26;\r\n  width: fit-content;\r\n  margin: 10px;\r\n  padding: 5px;\r\n  border-radius: 7px;\r\n}\r\n\r\n/* pop-up */\r\n\r\n#pop-up {\r\n  display: none;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  margin: auto;\r\n  width: 30%;\r\n  padding: 10px;\r\n  height: 70vh;\r\n  background-color: orange;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n  border: 5px solid #000;\r\n  border-radius: 15px;\r\n}\r\n\r\n#pop-up::-webkit-scrollbar {\r\n  width: 1em;\r\n}\r\n\r\n#pop-up::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n#pop-up::-webkit-scrollbar-thumb {\r\n  background-color: rgb(122, 93, 93);\r\n  outline: 1px solid slategrey;\r\n  border-radius: 10px;\r\n}\r\n\r\n#pop-up-image {\r\n  text-align: center;\r\n}\r\n\r\nimg {\r\n  width: 350px;\r\n  margin: auto;\r\n  border-radius: 60px;\r\n  padding: 5px;\r\n  display: block;\r\n}\r\n\r\n#add-comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n\r\n#comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  justify-content: flex-start;\r\n  align-content: flex-start;\r\n  flex-wrap: wrap;\r\n}\r\n\r\ninput {\r\n  flex: 1;\r\n  padding: 5px;\r\n  font-weight: 700;\r\n  width: 370px;\r\n  height: 300px;\r\n}\r\n\r\n.add-comment {\r\n  width: 80px;\r\n}\r\n\r\n.show-comment {\r\n  border: 2px solid #000;\r\n  border-radius: 10px;\r\n  padding: 0;\r\n  margin-top: 20px;\r\n  list-style: none;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n  height: 250px;\r\n}\r\n\r\n.show-comment::-webkit-scrollbar {\r\n  width: 1em;\r\n}\r\n\r\n.show-comment::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.show-comment::-webkit-scrollbar-thumb {\r\n  background-color: rgb(122, 93, 93);\r\n  outline: 1px solid slategrey;\r\n  border-radius: 30px;\r\n}\r\n\r\n.show-comment > li {\r\n  margin: 10px;\r\n  padding: 5px;\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n  border: 1px solid #000;\r\n}\r\n\r\n/* Define a class for the blur overlay */\r\n.blur-overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */\r\n  backdrop-filter: blur(5px); /* Apply the blur effect */\r\n  z-index: 1000; /* Ensure it's above other content */\r\n  display: none; /* Initially hidden */\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://setup-webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://setup-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://setup-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://setup-webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_list_items_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/list-items.js */ \"./src/modules/list-items.js\");\n/* harmony import */ var _modules_itemcount_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/itemcount.js */ \"./src/modules/itemcount.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  (0,_modules_itemcount_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  (0,_modules_list_items_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack://setup-webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/countComment.js":
/*!*************************************!*\
  !*** ./src/modules/countComment.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   commentCount: () => (/* binding */ commentCount),\n/* harmony export */   commentsCount: () => (/* binding */ commentsCount),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   totalComment: () => (/* binding */ totalComment)\n/* harmony export */ });\n/* harmony import */ var _fetchComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchComments.js */ \"./src/modules/fetchComments.js\");\n\r\n\r\nconst totalComment = () => {\r\n  const numberOfComment = document.getElementById('show-comment').children.length;\r\n  return numberOfComment;\r\n};\r\n\r\nconst commentCount = (commentList) => commentList?.length ?? 0;\r\n\r\nconst commentsCount = async (id) => {\r\n  const commentsCountElement = document.getElementById('commentsCount');\r\n\r\n  try {\r\n    const result = await (0,_fetchComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id);\r\n\r\n    if (result === undefined || result.length === undefined) {\r\n      commentsCountElement.textContent = 0;\r\n    } else {\r\n      commentsCountElement.textContent = result.length;\r\n    }\r\n  } catch (error) {\r\n    commentsCountElement.textContent = 0;\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCount);\r\n\n\n//# sourceURL=webpack://setup-webpack/./src/modules/countComment.js?");

/***/ }),

/***/ "./src/modules/displayComments.js":
/*!****************************************!*\
  !*** ./src/modules/displayComments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _postComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postComment.js */ \"./src/modules/postComment.js\");\n/* harmony import */ var _fetchComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchComments.js */ \"./src/modules/fetchComments.js\");\n/* harmony import */ var _countComment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countComment.js */ \"./src/modules/countComment.js\");\n\r\n\r\n\r\n\r\nconst popupContainer = document.querySelector('#pop-up');\r\n\r\nconst displayComments = async (id) => {\r\n  const commentsContainer = document.querySelector('.show-comment');\r\n  commentsContainer.textContent = '';\r\n  (0,_fetchComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id).then((result) => {\r\n    if (!Array.isArray(result)) {\r\n      commentsContainer.textContent = 'No comments available';\r\n      return;\r\n    }\r\n    result.forEach((e) => {\r\n      const paragraph = document.createElement('li');\r\n      paragraph.textContent = `(${e.creation_date}) ${e.username}: ${e.comment}`;\r\n      commentsContainer.appendChild(paragraph);\r\n    });\r\n  });\r\n};\r\n\r\npopupContainer.addEventListener('click', async (event) => {\r\n  const userName = document.querySelector('#commentator-name').value;\r\n  const userComment = document.querySelector('#comment').value;\r\n  if (event.target.classList.contains('add-comment')) {\r\n    event.preventDefault();\r\n    await (0,_postComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(event.target.id, userName, userComment);\r\n    await (0,_fetchComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(event.target.id);\r\n    displayComments(event.target.id);\r\n    (0,_countComment_js__WEBPACK_IMPORTED_MODULE_2__.commentsCount)(event.target.id);\r\n  }\r\n\r\n  const closeButton = document.querySelector('#closeButton');\r\n  const popUp = document.querySelector('#pop-up');\r\n\r\n  closeButton.addEventListener('click', () => {\r\n    popUp.style.display = 'none';\r\n  });\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComments);\r\n\n\n//# sourceURL=webpack://setup-webpack/./src/modules/displayComments.js?");

/***/ }),

/***/ "./src/modules/displaylikes.js":
/*!*************************************!*\
  !*** ./src/modules/displaylikes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchlike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchlike.js */ \"./src/modules/fetchlike.js\");\n/* harmony import */ var _postlikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postlikes.js */ \"./src/modules/postlikes.js\");\n\r\n\r\n\r\nconst menuItems = document.getElementById('menu-items');\r\n\r\nconst displayLikes = async (idCategory) => {\r\n  (0,_fetchlike_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((result) => {\r\n    const likeResult = result.find((items) => items.item_id === idCategory);\r\n    let likesCount = 0;\r\n    if (likeResult) {\r\n      likesCount = likeResult.likes;\r\n    }\r\n\r\n    const likecontainer = document.getElementById(`like-count-${idCategory}`);\r\n    likecontainer.textContent = `${likesCount}  Likes`;\r\n  });\r\n};\r\n\r\nconst handleLikeBtn = () => {\r\n  menuItems.addEventListener('click', async (event) => {\r\n    if (event.target.classList.contains('like-icon')) {\r\n      const parentID = parseInt(event.target.id, 10);\r\n      event.target.style.color = 'red';\r\n      await (0,_postlikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(parentID);\r\n      await displayLikes(parentID);\r\n    }\r\n  });\r\n};\r\n\r\nhandleLikeBtn();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayLikes);\n\n//# sourceURL=webpack://setup-webpack/./src/modules/displaylikes.js?");

/***/ }),

/***/ "./src/modules/fetchComments.js":
/*!**************************************!*\
  !*** ./src/modules/fetchComments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _usedApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usedApi.js */ \"./src/modules/usedApi.js\");\n\r\n\r\nconst commentURL = `${_usedApi_js__WEBPACK_IMPORTED_MODULE_0__.involvementUrl}${_usedApi_js__WEBPACK_IMPORTED_MODULE_0__.involvementApiKey}/comments`;\r\n\r\nconst fetchComments = async (id) => {\r\n  const response = await fetch(`${commentURL}?item_id=${id}`);\r\n  const result = await response.json();\r\n  return result;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchComments);\n\n//# sourceURL=webpack://setup-webpack/./src/modules/fetchComments.js?");

/***/ }),

/***/ "./src/modules/fetchlike.js":
/*!**********************************!*\
  !*** ./src/modules/fetchlike.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _likeApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likeApi.js */ \"./src/modules/likeApi.js\");\n\r\n\r\nconst fetchLikes = async () => {\r\n  const response = await fetch(_likeApi_js__WEBPACK_IMPORTED_MODULE_0__.likeUrl);\r\n  const result = await response.json();\r\n  return result;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchLikes);\r\n\n\n//# sourceURL=webpack://setup-webpack/./src/modules/fetchlike.js?");

/***/ }),

/***/ "./src/modules/itemcount.js":
/*!**********************************!*\
  !*** ./src/modules/itemcount.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   fetchData: () => (/* binding */ fetchData)\n/* harmony export */ });\nconst fetchData = async () => {\r\n  const likeUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';\r\n  const response = await fetch(likeUrl);\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\nconst itemCount = () => {\r\n  const items = document.getElementById('items');\r\n  fetchData().then((data) => {\r\n    const result = data.categories;\r\n    items.textContent = result.length;\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCount);\n\n//# sourceURL=webpack://setup-webpack/./src/modules/itemcount.js?");

/***/ }),

/***/ "./src/modules/likeApi.js":
/*!********************************!*\
  !*** ./src/modules/likeApi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   involvementApiKey: () => (/* binding */ involvementApiKey),\n/* harmony export */   involvementURL: () => (/* binding */ involvementURL),\n/* harmony export */   likeUrl: () => (/* binding */ likeUrl)\n/* harmony export */ });\nconst involvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\r\nconst involvementApiKey = 'ZiT4bSLyBWmiPGUwJj9O';\r\nconst likeUrl = `${involvementURL}${involvementApiKey}/likes`;\r\n\r\n\n\n//# sourceURL=webpack://setup-webpack/./src/modules/likeApi.js?");

/***/ }),

/***/ "./src/modules/list-items.js":
/*!***********************************!*\
  !*** ./src/modules/list-items.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loadDescription_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadDescription.js */ \"./src/modules/loadDescription.js\");\n/* harmony import */ var _displaylikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displaylikes.js */ \"./src/modules/displaylikes.js\");\n\r\n\r\n\r\nconst listURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';\r\nlet categoryId = 0;\r\nconst listItems = async () => {\r\n  const response = await fetch(listURL);\r\n  const { categories } = await response.json();\r\n  const listDisplay = document.getElementById('menu-items');\r\n\r\n  categories.forEach(async (category) => {\r\n    const listItem = document.createElement('Div');\r\n    listItem.classList.add('menu-item');\r\n    listItem.innerHTML = `\r\n    <div class='meal-img'>\r\n      <h2 class='category-name'>${category.strCategory}</h2>\r\n      <div class='img-container'>\r\n       <img src='${category.strCategoryThumb}' alt='Category thumbnail'/>\r\n       </div>\r\n       <div class='btn-container'>\r\n        <button class='btn' id='${category.idCategory}' >Comments</button>\r\n        <div id='${category.idCategory}\" class='likes-count\">\r\n        <i id=\"${category.idCategory}\" class=\"fas fa-heart like-icon\" aria-hidden='true'></i>\r\n        <p id=\"like-count-${category.idCategory}\"></p>\r\n        </div>\r\n        </div>\r\n        \r\n     </div> \r\n    `;\r\n    // eslint-disable-next-line radix\r\n    categoryId = parseInt(category.idCategory);\r\n    (0,_displaylikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(categoryId);\r\n    // Add an event listener to the button\r\n    const popUp = document.querySelector('#pop-up');\r\n    const button = listItem.querySelector('.btn');\r\n    button.addEventListener('click', () => {\r\n      (0,_loadDescription_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(category.idCategory);\r\n      popUp.style.display = 'block';\r\n    });\r\n\r\n    listDisplay.appendChild(listItem);\r\n    // toggleDisplay(category.idCategory);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listItems);\r\n\n\n//# sourceURL=webpack://setup-webpack/./src/modules/list-items.js?");

/***/ }),

/***/ "./src/modules/loadDescription.js":
/*!****************************************!*\
  !*** ./src/modules/loadDescription.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayComments.js */ \"./src/modules/displayComments.js\");\n/* harmony import */ var _countComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countComment.js */ \"./src/modules/countComment.js\");\n\r\n\r\n\r\nconst popUp = document.querySelector('#pop-up');\r\n\r\nconst loadDescription = async (id) => {\r\n  const request = new Request(\r\n    'https://www.themealdb.com/api/json/v1/1/categories.php',\r\n  );\r\n  const response = await fetch(request);\r\n  const data = await response.json();\r\n  popUp.innerHTML = `\r\n  <button class=\"close-button\" id=\"closeButton\">&times;</button>\r\n  <div class=\"pop-up-image\"><img src=\"${\r\n  data.categories[id - 1].strCategoryThumb\r\n}\" alt=\"\" /></div>\r\n      <div class=\"pop-up-details\">\r\n        <div>\r\n          <h2>Description</h2>\r\n          <p>${data.categories[id - 1].strCategoryDescription}</p>\r\n        </div>\r\n        <div id=\"add-comment-form\">\r\n          <h2>Add Your Comment</h2>\r\n          <form action=\"\" id=\"comment-form\">\r\n            <input type=\"text\" id=\"commentator-name\" required/>\r\n            <input type=\"text\" id=\"comment\" required/>\r\n            <button type=\"submit\" id=\"${\r\n  data.categories[id - 1].idCategory\r\n}\" class=\"add-comment\">Comment</button>\r\n          </form>\r\n        </div>\r\n        <h4>Comments:  (<span class=\"comments-count\" id=\"commentsCount\"></span>)</h4> \r\n        <ul class=\"show-comment id=\"show-comment\">\r\n\r\n          </ul>\r\n      </div>`;\r\n\r\n  (0,_countComment_js__WEBPACK_IMPORTED_MODULE_1__.commentsCount)(data.categories[id - 1].idCategory);\r\n  (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.categories[id - 1].idCategory);\r\n};\r\n\r\n// const closeButton = document.getElementById(\"closeButton\");\r\n// const popUp = document.querySelector(\"#pop-up\");\r\n// closeButton.addEventListener(\"click\", () => {\r\n//   //  loadDescription(category.idCategory);\r\n//   popUp.style.display = \"none\";\r\n// });\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadDescription);\r\n\n\n//# sourceURL=webpack://setup-webpack/./src/modules/loadDescription.js?");

/***/ }),

/***/ "./src/modules/postComment.js":
/*!************************************!*\
  !*** ./src/modules/postComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _usedApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usedApi.js */ \"./src/modules/usedApi.js\");\n\r\n\r\nconst commentURL = `${_usedApi_js__WEBPACK_IMPORTED_MODULE_0__.involvementUrl}${_usedApi_js__WEBPACK_IMPORTED_MODULE_0__.involvementApiKey}/comments`;\r\n\r\nconst postComments = async (ID, name, comment) => {\r\n  await fetch(commentURL, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: ID,\r\n      username: name,\r\n      comment,\r\n    }),\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComments);\r\n\n\n//# sourceURL=webpack://setup-webpack/./src/modules/postComment.js?");

/***/ }),

/***/ "./src/modules/postlikes.js":
/*!**********************************!*\
  !*** ./src/modules/postlikes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _likeApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likeApi.js */ \"./src/modules/likeApi.js\");\n\r\n\r\nconst postLikes = async (idCategory) => {\r\n  await fetch(_likeApi_js__WEBPACK_IMPORTED_MODULE_0__.likeUrl, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({ item_id: idCategory }),\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLikes);\n\n//# sourceURL=webpack://setup-webpack/./src/modules/postlikes.js?");

/***/ }),

/***/ "./src/modules/usedApi.js":
/*!********************************!*\
  !*** ./src/modules/usedApi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   involvementApiKey: () => (/* binding */ involvementApiKey),\n/* harmony export */   involvementUrl: () => (/* binding */ involvementUrl),\n/* harmony export */   mealsUrl: () => (/* binding */ mealsUrl)\n/* harmony export */ });\nconst mealsUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';\r\n\r\nconst involvementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\r\nconst involvementApiKey = 'ZiT4bSLyBWmiPGUwJj9O';\r\n\r\n\r\n\n\n//# sourceURL=webpack://setup-webpack/./src/modules/usedApi.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);