"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api-client/base/axios-client.js":
/*!*****************************************!*\
  !*** ./api-client/base/axios-client.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"constructCallBack\": () => (/* binding */ constructCallBack),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nlet callbackErrorAuthentication = ()=>{\n};\nconst constructCallBack = (handle)=>{\n    callbackErrorAuthentication = handle;\n};\nconst axiosClient = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: process.env.API_URL + '/api',\n    headers: {\n        'Content-Type': 'application/json'\n    }\n});\n// Add a response interceptor\naxiosClient.interceptors.response.use(function(response) {\n    // Any status code that lie within the range of 2xx cause this function to trigger\n    // Do something with response data\n    return response.data;\n}, function(error) {\n    if (error.response.status === 401) {\n        callbackErrorAuthentication();\n    }\n    // Any status codes that falls outside the range of 2xx cause this function to trigger\n    // Do something with response error\n    return Promise.reject(error);\n});\naxiosClient.interceptors.request.use(function(config) {\n    var ref;\n    const token = window === null || window === void 0 ? void 0 : (ref = window.localStorage) === null || ref === void 0 ? void 0 : ref.getItem('token');\n    if (token) config.headers.Authorization = 'Bearer ' + token;\n    return config;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosClient);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGktY2xpZW50L2Jhc2UvYXhpb3MtY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUI7QUFFekIsR0FBRyxDQUFDQywyQkFBMkIsT0FBUyxDQUFDO0FBQUEsQ0FBQztBQUVuQyxLQUFLLENBQUNDLGlCQUFpQixJQUFJQyxNQUFNLEdBQUssQ0FBQztJQUM1Q0YsMkJBQTJCLEdBQUdFLE1BQU07QUFDdEMsQ0FBQztBQUVELEtBQUssQ0FBQ0MsV0FBVyxHQUFHSixtREFBWSxDQUFDLENBQUM7SUFDaENNLE9BQU8sRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE9BQU8sR0FBRyxDQUFNO0lBQ3JDQyxPQUFPLEVBQUUsQ0FBQztRQUNSLENBQWMsZUFBRSxDQUFrQjtJQUNwQyxDQUFDO0FBQ0gsQ0FBQztBQUVELEVBQTZCO0FBQzdCTixXQUFXLENBQUNPLFlBQVksQ0FBQ0MsUUFBUSxDQUFDQyxHQUFHLENBQ25DLFFBQVEsQ0FBRUQsUUFBUSxFQUFFLENBQUM7SUFDbkIsRUFBa0Y7SUFDbEYsRUFBa0M7SUFDbEMsTUFBTSxDQUFDQSxRQUFRLENBQUNFLElBQUk7QUFDdEIsQ0FBQyxFQUNELFFBQVEsQ0FBRUMsS0FBSyxFQUFFLENBQUM7SUFDaEIsRUFBRSxFQUFFQSxLQUFLLENBQUNILFFBQVEsQ0FBQ0ksTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2xDZiwyQkFBMkI7SUFDN0IsQ0FBQztJQUNELEVBQXNGO0lBQ3RGLEVBQW1DO0lBQ25DLE1BQU0sQ0FBQ2dCLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLO0FBQzdCLENBQUM7QUFHSFgsV0FBVyxDQUFDTyxZQUFZLENBQUNRLE9BQU8sQ0FBQ04sR0FBRyxDQUFDLFFBQVEsQ0FBRU8sTUFBTSxFQUFFLENBQUM7UUFDeENDLEdBQW9CO0lBQWxDLEtBQUssQ0FBQ0MsS0FBSyxHQUFHRCxNQUFNLGFBQU5BLE1BQU0sS0FBTkEsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsSUFBSSxDQUFKQSxDQUFvQixJQUFwQkEsR0FBb0IsR0FBcEJBLE1BQU0sQ0FBRUUsWUFBWSxjQUFwQkYsR0FBb0IsS0FBcEJBLElBQUksQ0FBSkEsQ0FBb0IsR0FBcEJBLElBQUksQ0FBSkEsQ0FBb0IsR0FBcEJBLEdBQW9CLENBQUVHLE9BQU8sQ0FBQyxDQUFPO0lBQ25ELEVBQUUsRUFBRUYsS0FBSyxFQUFFRixNQUFNLENBQUNWLE9BQU8sQ0FBQ2UsYUFBYSxHQUFHLENBQVMsV0FBR0gsS0FBSztJQUMzRCxNQUFNLENBQUNGLE1BQU07QUFDZixDQUFDO0FBRUQsaUVBQWVoQixXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi13ZWJzaXRlLy4vYXBpLWNsaWVudC9iYXNlL2F4aW9zLWNsaWVudC5qcz8zMTZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmxldCBjYWxsYmFja0Vycm9yQXV0aGVudGljYXRpb24gPSAoKSA9PiB7fTtcblxuZXhwb3J0IGNvbnN0IGNvbnN0cnVjdENhbGxCYWNrID0gKGhhbmRsZSkgPT4ge1xuICBjYWxsYmFja0Vycm9yQXV0aGVudGljYXRpb24gPSBoYW5kbGU7XG59O1xuXG5jb25zdCBheGlvc0NsaWVudCA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL2FwaScsXG4gIGhlYWRlcnM6IHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gIH1cbn0pO1xuXG4vLyBBZGQgYSByZXNwb25zZSBpbnRlcmNlcHRvclxuYXhpb3NDbGllbnQuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcbiAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgLy8gQW55IHN0YXR1cyBjb2RlIHRoYXQgbGllIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgMnh4IGNhdXNlIHRoaXMgZnVuY3Rpb24gdG8gdHJpZ2dlclxuICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHJlc3BvbnNlIGRhdGFcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSxcbiAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICBjYWxsYmFja0Vycm9yQXV0aGVudGljYXRpb24oKTtcbiAgICB9XG4gICAgLy8gQW55IHN0YXR1cyBjb2RlcyB0aGF0IGZhbGxzIG91dHNpZGUgdGhlIHJhbmdlIG9mIDJ4eCBjYXVzZSB0aGlzIGZ1bmN0aW9uIHRvIHRyaWdnZXJcbiAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCByZXNwb25zZSBlcnJvclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gIH1cbik7XG5cbmF4aW9zQ2xpZW50LmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGNvbnN0IHRva2VuID0gd2luZG93Py5sb2NhbFN0b3JhZ2U/LmdldEl0ZW0oJ3Rva2VuJyk7XG4gIGlmICh0b2tlbikgY29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCZWFyZXIgJyArIHRva2VuO1xuICByZXR1cm4gY29uZmlnO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGF4aW9zQ2xpZW50O1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiY2FsbGJhY2tFcnJvckF1dGhlbnRpY2F0aW9uIiwiY29uc3RydWN0Q2FsbEJhY2siLCJoYW5kbGUiLCJheGlvc0NsaWVudCIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiQVBJX1VSTCIsImhlYWRlcnMiLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImRhdGEiLCJlcnJvciIsInN0YXR1cyIsIlByb21pc2UiLCJyZWplY3QiLCJyZXF1ZXN0IiwiY29uZmlnIiwid2luZG93IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiQXV0aG9yaXphdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api-client/base/axios-client.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api_base_axios_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/base/axios-client */ \"./api-client/base/axios-client.js\");\n\n\n\n\n\n// import { useAuth } from \"hooks\";\n\nfunction Home() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/index.js\",\n            lineNumber: 10,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/index.js\",\n                    lineNumber: 11,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/index.js\",\n                            lineNumber: 12,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Adaptive Learning\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\",\n                        __source: {\n                            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/index.js\",\n                            lineNumber: 13,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/index.js\",\n                            lineNumber: 14,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/index.js\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"Trang chủ\"\n            })\n        ]\n    }));\n};\nHome.permission = \"public\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUN0QjtBQUNrQjtBQUNQO0FBQ3ZDLEVBQW1DO0FBQ2M7QUFFbEMsUUFBUSxDQUFDTyxJQUFJLEdBQUcsQ0FBQztJQUM5QixNQUFNLHVFQUNIQyxDQUFHOzs7Ozs7OztrRkFDREwsa0RBQUk7Ozs7Ozs7O3lGQUNGTSxDQUFLOzs7Ozs7O2tDQUFDLENBQWlCOzt5RkFDdkJDLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFhO3dCQUFDQyxPQUFPLEVBQUMsQ0FBOEI7Ozs7Ozs7O3lGQUM5REMsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNDLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7O2lGQUVyQ1AsQ0FBRzs7Ozs7OzswQkFBQyxDQUFTOzs7O0FBR3BCLENBQUM7QUFFREQsSUFBSSxDQUFDUyxVQUFVLEdBQUcsQ0FBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuLXdlYnNpdGUvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbi8vIGltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiaG9va3NcIjtcbmltcG9ydCBheGlvc0NsaWVudCBmcm9tIFwiQC9hcGkvYmFzZS9heGlvcy1jbGllbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5BZGFwdGl2ZSBMZWFybmluZzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdj5UcmFuZyBjaOG7pzwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5Ib21lLnBlcm1pc3Npb24gPSBcInB1YmxpY1wiO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkIiwic3R5bGVzIiwidXNlUm91dGVyIiwiYXhpb3NDbGllbnQiLCJIb21lIiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsInBlcm1pc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();