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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$l(playDemo);\n\nfunction playDemo() {\n  const generate = $l('.generate');\n  const image = $l('.image-to-be-gen');\n\n  const small = $l('.small');\n  const normal = $l('.normal');\n  const large = $l('.large');\n\n  const CLASSLIST = ['small', 'normal', 'large'];\n\n  generate.on(\"click\", e => {\n    $l.ajax({\n      url: `https://api.giphy.com/v1/gifs/random?tag=parks+and+rec&api_key=L2yCnV4B058nsp7fHBXAtCUhXKIa6A8v&rating=G`,\n      success(img) {\n        image.attr('src', `${JSON.parse(img).data.images.original.url}`);\n      }\n    }).then(() => {\n      CLASSLIST.forEach(className => {\n        image.removeClass(className);\n      });\n\n      image.addClass(\"normal\");\n      small.addClass(\"show\");\n      normal.addClass(\"show\");\n      large.addClass(\"show\");\n    });\n  });\n\n  small.on(\"click\", e => {\n    CLASSLIST.forEach(className => {\n      image.removeClass(className);\n    });\n    image.addClass(\"small\");\n  });\n\n  normal.on(\"click\", e => {\n    CLASSLIST.forEach(className => {\n      image.removeClass(className);\n    });\n    image.addClass(\"normal\");\n  });\n\n  large.on(\"click\", e => {\n    CLASSLIST.forEach(className => {\n      image.removeClass(className);\n    });\n    image.addClass(\"large\");\n  });\n}\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });