/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ``, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/index.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/index.css"
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/index.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _modules_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/game.js */ \"./src/modules/game.js\");\n\n\nconst game = new _modules_game_js__WEBPACK_IMPORTED_MODULE_1__.Game();\nconst playerBoard = document.querySelector(\"#player-board\");\nconst computerBoard = document.querySelector(\"#computer-board\");\n\nfunction renderBoard(board, container) {\n  board.forEach((row, y) => {\n    // create a row\n    const rowElement = document.createElement(\"div\");\n\n    row.forEach((cell, x) => {\n      const button = document.createElement(\"button\");\n      rowElement.appendChild(button);\n    });\n    container.appendChild(rowElement);\n  });\n}\n\nrenderBoard(game.player.gameBoard.board, playerBoard);\nrenderBoard(game.computer.gameBoard.board, computerBoard);\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?\n}");

/***/ },

/***/ "./src/modules/game.js"
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/modules/player.js\");\n\n\nclass Game {\n  constructor() {\n    this.player = new _player_js__WEBPACK_IMPORTED_MODULE_0__.Player();\n    this.computer = new _player_js__WEBPACK_IMPORTED_MODULE_0__.Computer();\n    this.turn = \"player\";\n    this.gameOver = false;\n    this.winner = null;\n  }\n  switchTurn() {\n    if (this.turn === \"player\") {\n      this.turn = \"computer\";\n    } else {\n      this.turn = \"player\";\n    }\n  }\n  playerAttack(coordinate) {\n    if (this.gameOver) {\n      return;\n    }\n    this.player.attack(this.computer.gameBoard, coordinate);\n    this.switchTurn();\n  }\n  computerAttack() {\n    if (this.gameOver) {\n      return;\n    }\n    this.computer.attackPlayer(this.player.gameBoard);\n    this.switchTurn();\n  }\n  checkGameOver() {\n    const playerCondition = this.player.gameBoard.allShipsSunk();\n    const computerCondition = this.computer.gameBoard.allShipsSunk();\n    if (playerCondition) {\n      this.gameOver = true;\n      this.winner = \"computer\";\n    } else if (computerCondition) {\n      this.gameOver = true;\n      this.winner = \"player\";\n    }\n  }\n}\n\n\n//# sourceURL=webpack://restaurant/./src/modules/game.js?\n}");

/***/ },

/***/ "./src/modules/gameboard.js"
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameBoard: () => (/* binding */ GameBoard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/modules/ship.js\");\n\n\nclass GameBoard {\n  constructor() {\n    this.board = [];\n    this.createBoard();\n    this.missedAttacks = [];\n    this.successfulAttacks = [];\n    this.ships = [];\n    this.fleet = [];\n    this.createFleet();\n  }\n  createBoard() {\n    for (let i = 0; i < 10; i++) {\n      const rows = [];\n      for (let j = 0; j < 10; j++) {\n        const array = \"x\";\n        rows.push(array);\n      }\n      this.board.push(rows);\n    }\n  }\n  createFleet() {\n    const ships = [\n      [\"Carrier\", 5],\n      [\"Battleship\", 4],\n      [\"Cruiser\", 3],\n      [\"Submarine\", 3],\n      [\"Destroyer\", 2],\n    ];\n    //forEach create new Ship and push to this.fleet\n    ships.forEach((ship) => {\n      this.fleet.push(new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(ship[0], ship[1]));\n    });\n  }\n  placeShip(id, coordinate, orientation) {\n    const x = coordinate[0];\n    const y = coordinate[1];\n\n    const ship = this.fleet.find((vessel) => {\n      return vessel.id === id;\n    });\n\n    if (!ship) {\n      return false;\n    }\n\n    if (ship.alreadyPlaced) {\n      return false;\n    }\n\n    if (x + ship.length - 1 > 9 && orientation === \"horizontal\") {\n      return false;\n    }\n    if (y + ship.length - 1 > 9 && orientation === \"vertical\") {\n      return false;\n    }\n    if (x < 0 || x > 9 || y < 0 || y > 9) {\n      return false;\n    }\n\n    for (let i = 0; i < ship.length; i++) {\n      if (orientation === \"horizontal\" && this.board[y][x + i] !== \"x\") {\n        return false;\n      }\n      if (orientation === \"vertical\" && this.board[y + i][x] !== \"x\") {\n        return false;\n      }\n    }\n\n    for (let i = 0; i < ship.length; i++) {\n      if (orientation === \"horizontal\") {\n        this.board[y][x + i] = ship;\n      }\n      if (orientation === \"vertical\") {\n        this.board[y + i][x] = ship;\n      }\n    }\n    this.ships.push(ship);\n    ship.alreadyPlaced = true;\n    return true;\n  }\n  receiveAttack(coordinate) {\n    const x = coordinate[0];\n    const y = coordinate[1];\n    if (x < 0 || x > 9 || y < 0 || y > 9) {\n      return false;\n    }\n    const alreadyMissed = this.missedAttacks.some((attackCoordinate) => {\n      if (attackCoordinate[0] === x && attackCoordinate[1] === y) {\n        return true;\n      }\n      return false;\n    });\n    if (this.board[y][x] === \"x\" && !alreadyMissed) {\n      this.missedAttacks.push([x, y]);\n    }\n    const alreadyattacked = this.successfulAttacks.some((attackCoordinate) => {\n      if (attackCoordinate[0] === x && attackCoordinate[1] === y) {\n        return true;\n      }\n      return false;\n    });\n    if (typeof this.board[y][x] === \"object\" && !alreadyattacked) {\n      this.board[y][x].hit();\n      this.successfulAttacks.push([x, y]);\n    }\n  }\n  allShipsSunk() {\n    if (this.ships.length === 0) {\n      return false;\n    }\n\n    return this.ships.every((ship) => {\n      return ship.destroyed;\n    });\n  }\n}\n\n\n//# sourceURL=webpack://restaurant/./src/modules/gameboard.js?\n}");

/***/ },

/***/ "./src/modules/player.js"
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Computer: () => (/* binding */ Computer),\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/modules/gameboard.js\");\n\n\nclass Player {\n  constructor() {\n    this.gameBoard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__.GameBoard();\n  }\n\n  attack(gameBoard, coordinate) {\n    gameBoard.receiveAttack(coordinate);\n  }\n}\n\nclass Computer extends Player {\n  constructor() {\n    super();\n    this.placeShips();\n    this.attacks = [];\n    this.hits = [];\n    this.targetHits = [];\n    this.direction = null;\n  }\n\n  placeShips() {\n    this.gameBoard.fleet.forEach((ship) => {\n      let orientation = \"\";\n      let coord = null;\n\n      while (!ship.alreadyPlaced) {\n        const randomAxisNumber = Math.floor(Math.random() * 2);\n\n        if (randomAxisNumber === 1) {\n          orientation = \"horizontal\";\n        } else {\n          orientation = \"vertical\";\n        }\n\n        const randomCoordinateNumberX = Math.floor(Math.random() * 10);\n        const randomCoordinateNumberY = Math.floor(Math.random() * 10);\n\n        coord = [randomCoordinateNumberX, randomCoordinateNumberY];\n\n        this.gameBoard.placeShip(ship.id, coord, orientation);\n      }\n    });\n  }\n\n  attackPlayer(gameboard) {\n    let coord = null;\n\n    // No current target: random attack\n    if (this.targetHits.length === 0) {\n      coord = this.getRandomAttack();\n    }\n\n    // We have one hit on the current target\n    else if (this.targetHits.length === 1) {\n      coord = this.getNeighbourAttack(this.targetHits[0]);\n\n      if (coord) {\n        this.direction = this.getDirection(this.targetHits[0], coord);\n      }\n    }\n\n    // We have multiple hits on the current target\n    else {\n      const lastHit = this.targetHits[this.targetHits.length - 1];\n\n      const nextCoordinate = this.getNextInDirection(lastHit, this.direction);\n\n      if (nextCoordinate && this.isValidAttack(nextCoordinate)) {\n        coord = nextCoordinate;\n      } else {\n        // Can't continue in this direction.\n        // Go back to the original hit and try another direction.\n        coord = this.getNeighbourAttack(this.targetHits[0]);\n\n        if (coord) {\n          this.direction = this.getDirection(this.targetHits[0], coord);\n        }\n      }\n    }\n\n    // If no target coordinate was available, make a random attack.\n    if (!coord) {\n      coord = this.getRandomAttack();\n    }\n\n    this.attack(gameboard, coord);\n    this.attacks.push(coord);\n\n    const successfulAttack = gameboard.successfulAttacks.some((attack) => {\n      return attack[0] === coord[0] && attack[1] === coord[1];\n    });\n\n    if (successfulAttack) {\n      this.hits.push(coord);\n      this.targetHits.push(coord);\n\n      const ship = gameboard.board[coord[1]][coord[0]];\n\n      if (ship.destroyed) {\n        this.targetHits = [];\n        this.direction = null;\n      }\n    } else if (this.targetHits.length > 1) {\n      // We missed while following a direction.\n      // Stop continuing in that direction.\n      this.direction = null;\n    }\n\n    return coord;\n  }\n\n  getRandomAttack() {\n    let coord = null;\n    let found = false;\n\n    while (!found) {\n      const x = Math.floor(Math.random() * 10);\n      const y = Math.floor(Math.random() * 10);\n\n      const alreadyAttacked = this.attacks.some((attack) => {\n        return attack[0] === x && attack[1] === y;\n      });\n\n      if (!alreadyAttacked) {\n        coord = [x, y];\n        found = true;\n      }\n    }\n\n    return coord;\n  }\n\n  getNeighbourAttack(hit) {\n    const x = hit[0];\n    const y = hit[1];\n\n    const neighbours = [\n      [x, y + 1], // down\n      [x, y - 1], // up\n      [x - 1, y], // left\n      [x + 1, y], // right\n    ];\n\n    for (const neighbour of neighbours) {\n      if (this.isValidAttack(neighbour)) {\n        return neighbour;\n      }\n    }\n\n    return null;\n  }\n\n  getNextInDirection(hit, direction) {\n    const x = hit[0];\n    const y = hit[1];\n\n    if (direction === \"down\") {\n      return [x, y + 1];\n    }\n\n    if (direction === \"up\") {\n      return [x, y - 1];\n    }\n\n    if (direction === \"left\") {\n      return [x - 1, y];\n    }\n\n    if (direction === \"right\") {\n      return [x + 1, y];\n    }\n\n    return null;\n  }\n\n  getDirection(firstHit, secondHit) {\n    const xDifference = secondHit[0] - firstHit[0];\n    const yDifference = secondHit[1] - firstHit[1];\n\n    if (xDifference === 1) {\n      return \"right\";\n    }\n\n    if (xDifference === -1) {\n      return \"left\";\n    }\n\n    if (yDifference === 1) {\n      return \"down\";\n    }\n\n    if (yDifference === -1) {\n      return \"up\";\n    }\n\n    return null;\n  }\n\n  isValidAttack(coordinate) {\n    const x = coordinate[0];\n    const y = coordinate[1];\n\n    if (x < 0 || x > 9 || y < 0 || y > 9) {\n      return false;\n    }\n\n    return !this.attacks.some((attack) => {\n      return attack[0] === x && attack[1] === y;\n    });\n  }\n}\n\n\n//# sourceURL=webpack://restaurant/./src/modules/player.js?\n}");

/***/ },

/***/ "./src/modules/ship.js"
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(id, length) {\n    this.id = id;\n    this.length = length;\n    this.hitPoints = length;\n    this.destroyed = false;\n    this.alreadyPlaced = false;\n  }\n  hit() {\n    if (this.destroyed) {\n      return;\n    }\n    this.hitPoints -= 1;\n\n    if (this.hitPoints === 0) {\n      this.destroyed = true;\n      return;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://restaurant/./src/modules/ship.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;