/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/css/styles.css":
/*!***********************************!*\
  !*** ./src/assets/css/styles.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/assets/css/styles.css?\n}");

/***/ }),

/***/ "./src/assets/js/script.js":
/*!*********************************!*\
  !*** ./src/assets/js/script.js ***!
  \*********************************/
/***/ (() => {

eval("{\r\n\r\nlet listaId = [];\r\nlet idInfo = [];\r\nconst colSinistra = document.getElementById(\"col-sinistra\");\r\nconst colDestra = document.getElementById(\"col-destra\");\r\nconst load = document.getElementById(\"load\");\r\nlet btnLoad = document.getElementById(\"btnLoadMore\");\r\n\r\n\r\nfunction createCard(titolo, url, date, column){\r\n\r\n        const card = document.createElement(\"div\")\r\n        card.className = \"card text-center mb-3\"\r\n        card.style.width = \"18rem\"\r\n        \r\n        const description = document.createElement(\"a\")\r\n        description.className = \"card-link\"\r\n        description.href = url;\r\n        card.appendChild(description)\r\n\r\n        const innerDiv = document.createElement(\"div\")\r\n        innerDiv.className = \"card-body\"\r\n        description.appendChild(innerDiv)\r\n\r\n        const title = document.createElement(\"h5\")\r\n        title.className = \"card-title\"\r\n        title.appendChild(document.createTextNode(titolo))\r\n        innerDiv.appendChild(title)\r\n\r\n        \r\n\r\n        const time = document.createElement(\"p\")\r\n        time.className = \"card-text\"\r\n        time.appendChild(document.createTextNode(date.toLocaleDateString()))\r\n        innerDiv.appendChild(time)\r\n\r\n        column.appendChild(card);\r\n        \r\n    }\r\n        \r\nasync function caricaDati() {\r\n    try {\r\n        if (listaId.length === 0) {\r\n            const response = await fetch(\"https://hacker-news.firebaseio.com/v0/newstories.json\");\r\n            if (!response.ok) throw new Error(\"Errore \" + response.status);\r\n            listaId = await response.json();\r\n            console.log(listaId)\r\n        }\r\n\r\n        const idDaCaricare = listaId.splice(0, 10);\r\n        const nuoveNews = [];\r\n\r\n        for (let id of idDaCaricare) {\r\n            try {\r\n                const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);\r\n                if (!response.ok) throw new Error(\"Errore \" + response.status);\r\n                const data = await response.json();\r\n                nuoveNews.push(data);\r\n                idInfo.push(data);\r\n            } catch (error) {\r\n                console.error(\"Errore item:\", error);\r\n            }\r\n            console.log(id)\r\n        }\r\n\r\n        nuoveNews.forEach((n, index) => {\r\n        let titolo = n.title;\r\n        let url = n.url;\r\n        let date = new Date(n.time * 1000);\r\n\r\n        if (index < 5) {\r\n        createCard(titolo, url, date, colSinistra);\r\n        } else {\r\n        createCard(titolo, url, date, colDestra);\r\n        }\r\n    });\r\n\r\n    } catch (error) {\r\n        console.error(\"Errore generale:\", error);\r\n    }\r\n    \r\n    console.log(idInfo);\r\n    console.log(listaId);\r\n}\r\n\r\n   \r\n    function loader(load) {\r\n        \r\n        if(!load){\r\n            console.log(\"Loader non disponibile\");\r\n            return;\r\n        }\r\n\r\n        setTimeout(() => {\r\n            load.classList.remove(\"d-none\");\r\n            load.classList.add(\"d-block\");\r\n            \r\n        }, 100)\r\n        \r\n        setTimeout(() => {\r\n            load.classList.remove(\"d-block\");\r\n            load.classList.add(\"d-none\");\r\n            \r\n        }, 1000)\r\n    }\r\n\r\nbtnLoad.addEventListener(\"click\", () => {\r\n    \r\n    caricaDati();\r\n    loader(load);\r\n});\r\n\r\ncaricaDati();\n\n//# sourceURL=webpack:///./src/assets/js/script.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_assets_js_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../src/assets/js/script */ \"./src/assets/js/script.js\");\n/* harmony import */ var _src_assets_js_script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_assets_js_script__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_assets_css_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../src/assets/css/styles.css */ \"./src/assets/css/styles.css\");\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?\n}");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;