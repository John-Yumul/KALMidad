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

/***/ "./web/presenter/login.js":
/*!********************************!*\
  !*** ./web/presenter/login.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nvar loggedInUid;\r\n\r\n\r\nconst signinButton = document.getElementById('signin-button')\r\n\r\nsigninButton.addEventListener('click', () => {\r\n    try {\r\n        const p_emal = document.getElementById('signin-email').value \r\n        const p_password = document.getElementById('signin-password').value\r\n        const recaptchaToken = document.getElementById('g-recaptcha-response').value\r\n\r\n        const { user } = signInUser(p_emal, p_password, recaptchaToken)\r\n        console.log('User: ' + user)\r\n    }\r\n    catch (error) { \r\n        const errorHolder = document.getElementById('error-message-holder')\r\n        errorHolder.textContent = `Error signing in: ${error.message}`\r\n    }\r\n})\r\n\r\nasync function signInUser(p_email, p_password, recaptchaToken) {\r\n    return new Promise(async (resolve, reject) => { \r\n        try {\r\n            const response = await axios.post(\r\n                'http://localhost:5500/users/signin', \r\n                { p_email, p_password, recaptchaToken, }, \r\n                { headers: { 'Content-Type': 'application/json', }}\r\n            )\r\n\r\n            if (response.data && response.data.message) {\r\n                loggedInUid = response.data.user.uid\r\n                resolve(response.data)\r\n            }\r\n        } catch(error) { reject(error.message) }\r\n    })\r\n};\r\n\r\n\n\n//# sourceURL=webpack://src/./web/presenter/login.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./web/presenter/login.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;