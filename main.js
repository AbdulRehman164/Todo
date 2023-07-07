/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVG9kbywgdG9kb3MgfSBmcm9tICcuL3RvZG8nO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodo: () => (/* binding */ createTodo),\n/* harmony export */   todos: () => (/* binding */ todos)\n/* harmony export */ });\nconst todosArray = [];\r\n\r\n// CREATING TODOS\r\nfunction createTodo(data, project) {\r\n  const proto = {\r\n    project,\r\n  };\r\n  const todo = {\r\n    title: data.title,\r\n    description: data.description,\r\n    dueDate: data.dueDate,\r\n    priority: data.priority,\r\n    isChecked: data.isChecked,\r\n  };\r\n  todosArray.push(Object.assign(Object.create(proto), todo));\r\n}\r\n\r\n// GETTING TODOS\r\nfunction todos() {\r\n  const proto = {\r\n    deleteTodo,\r\n    edit,\r\n  };\r\n  return Object.assign(Object.create(proto), todosArray);\r\n}\r\n\r\n// BEHAVIOURS\r\n\r\nfunction deleteTodo(index) {\r\n  todosArray.splice(index, 1);\r\n}\r\n\r\nfunction edit(data, index) {\r\n  todosArray[index] = Object.assign(todosArray[index], data);\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9kby5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG8uanM/MjRkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0b2Rvc0FycmF5ID0gW107XHJcblxyXG4vLyBDUkVBVElORyBUT0RPU1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9kbyhkYXRhLCBwcm9qZWN0KSB7XHJcbiAgY29uc3QgcHJvdG8gPSB7XHJcbiAgICBwcm9qZWN0LFxyXG4gIH07XHJcbiAgY29uc3QgdG9kbyA9IHtcclxuICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICBkdWVEYXRlOiBkYXRhLmR1ZURhdGUsXHJcbiAgICBwcmlvcml0eTogZGF0YS5wcmlvcml0eSxcclxuICAgIGlzQ2hlY2tlZDogZGF0YS5pc0NoZWNrZWQsXHJcbiAgfTtcclxuICB0b2Rvc0FycmF5LnB1c2goT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKHByb3RvKSwgdG9kbykpO1xyXG59XHJcblxyXG4vLyBHRVRUSU5HIFRPRE9TXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2RvcygpIHtcclxuICBjb25zdCBwcm90byA9IHtcclxuICAgIGRlbGV0ZVRvZG8sXHJcbiAgICBlZGl0LFxyXG4gIH07XHJcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShwcm90byksIHRvZG9zQXJyYXkpO1xyXG59XHJcblxyXG4vLyBCRUhBVklPVVJTXHJcblxyXG5mdW5jdGlvbiBkZWxldGVUb2RvKGluZGV4KSB7XHJcbiAgdG9kb3NBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0KGRhdGEsIGluZGV4KSB7XHJcbiAgdG9kb3NBcnJheVtpbmRleF0gPSBPYmplY3QuYXNzaWduKHRvZG9zQXJyYXlbaW5kZXhdLCBkYXRhKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/todo.js\n");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;