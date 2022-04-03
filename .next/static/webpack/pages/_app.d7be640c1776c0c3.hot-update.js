"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_base_axios_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/base/axios-client */ \"./api-client/base/axios-client.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! katex/dist/katex.min.css */ \"./node_modules/katex/dist/katex.min.css\");\n/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n// import Header from '@/components/layouts/header';\n\n\n\n// import { useAuth } from '../hooks';\n\n\n\nvar _s = $RefreshSig$();\nvar variants = {\n    hidden: {\n        opacity: 0,\n        x: -200,\n        y: 0\n    },\n    enter: {\n        opacity: 1,\n        x: 0,\n        y: 0\n    },\n    exit: {\n        opacity: 0,\n        x: 0,\n        y: -100\n    }\n};\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    // const { logout, profile, error } = useAuth();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var handleErrorAuthentication = function() {\n        logout();\n    };\n    (0,_api_base_axios_client__WEBPACK_IMPORTED_MODULE_3__.constructCallBack)(handleErrorAuthentication);\n    var permission = Component.permission;\n    var theme = Component.layout;\n    var asPath = router.asPath;\n    var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_7__.ApolloClient({\n        uri: 'https://wordpress-749115-2523479.cloudwaysapps.com/graphql',\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_7__.InMemoryCache()\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {\n        __source: {\n            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/_app.js\",\n            lineNumber: 40,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_apollo_client__WEBPACK_IMPORTED_MODULE_7__.ApolloProvider, {\n            client: client,\n            __source: {\n                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/_app.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Category, {\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/_app.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(swr__WEBPACK_IMPORTED_MODULE_4__.SWRConfig, {\n                    value: {\n                        fetcher: function(url) {\n                            return _api_base_axios_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(url);\n                        },\n                        dedupingInterval: 60 * 60 * 1000,\n                        revalidateOnFocus: false,\n                        shouldRetryOnError: false\n                    },\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/_app.js\",\n                        lineNumber: 43,\n                        columnNumber: 7\n                    },\n                    __self: this\n                })\n            ]\n        })\n    }));\n}\n_s(MyApp, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDOUIsRUFBb0Q7QUFDM0I7QUFDK0M7QUFDekM7QUFDL0IsRUFBc0M7QUFDTDtBQUNNO0FBUWhCOztBQUV2QixHQUFLLENBQUNVLFFBQVEsR0FBRyxDQUFDO0lBQ2hCQyxNQUFNLEVBQUUsQ0FBQztRQUFDQyxPQUFPLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEdBQUcsR0FBRztRQUFFQyxDQUFDLEVBQUUsQ0FBQztJQUFDLENBQUM7SUFDckNDLEtBQUssRUFBRSxDQUFDO1FBQUNILE9BQU8sRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO0lBQUMsQ0FBQztJQUNqQ0UsSUFBSSxFQUFFLENBQUM7UUFBQ0osT0FBTyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxHQUFHLEdBQUc7SUFBQyxDQUFDO0FBQ3JDLENBQUM7U0FFUUcsS0FBSyxDQUFDLEtBQXdCLEVBQUUsQ0FBQztRQUF6QkMsU0FBUyxHQUFYLEtBQXdCLENBQXRCQSxTQUFTLEVBQUVDLFNBQVMsR0FBdEIsS0FBd0IsQ0FBWEEsU0FBUzs7SUFDbkMsRUFBZ0Q7SUFDaEQsR0FBSyxDQUFDQyxNQUFNLEdBQUdoQixzREFBUztJQUN4QixHQUFLLENBQUNpQix5QkFBeUIsR0FBRyxRQUNwQyxHQUQwQyxDQUFDO1FBQ3ZDQyxNQUFNO0lBQ1IsQ0FBQztJQUNEcEIseUVBQWlCLENBQUNtQix5QkFBeUI7SUFDM0MsR0FBSyxDQUFDRSxVQUFVLEdBQUdMLFNBQVMsQ0FBQ0ssVUFBVTtJQUN2QyxHQUFLLENBQUNDLEtBQUssR0FBR04sU0FBUyxDQUFDTyxNQUFNO0lBRTlCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHTixNQUFNLENBQUNNLE1BQU07SUFDNUIsR0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQUFDdEIsd0RBQVksQ0FBQyxDQUFDO1FBQy9CdUIsR0FBRyxFQUFFLENBQTREO1FBQ2pFQyxLQUFLLEVBQUUsR0FBRyxDQUFDdkIseURBQWE7SUFDMUIsQ0FBQztJQUNELE1BQU0sc0VBQ0hOLHVEQUFjOzs7Ozs7O3dGQUNaTywwREFBYztZQUFDb0IsTUFBTSxFQUFFQSxNQUFNOzs7Ozs7OztxRkFDM0JJLFFBQVE7Ozs7Ozs7O3FGQUNWNUIsMENBQVM7b0JBQ1I2QixLQUFLLEVBQUUsQ0FBQzt3QkFDTkMsT0FBTyxFQUFFLFFBQVEsQ0FBUEMsR0FBRyxFQUFLLENBQUM7NEJBQ2pCLE1BQU0sQ0FBQ2pDLGtFQUFlLENBQUNpQyxHQUFHO3dCQUM1QixDQUFDO3dCQUNERSxnQkFBZ0IsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUk7d0JBQ2hDQyxpQkFBaUIsRUFBRSxLQUFLO3dCQUN4QkMsa0JBQWtCLEVBQUUsS0FBSztvQkFDM0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFZVCxDQUFDO0dBdkNRckIsS0FBSzs7UUFFR2Isa0RBQVM7OztLQUZqQmEsS0FBSztBQXlDZCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG4vLyBpbXBvcnQgSGVhZGVyIGZyb20gJ0AvY29tcG9uZW50cy9sYXlvdXRzL2hlYWRlcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zQ2xpZW50LCB7IGNvbnN0cnVjdENhbGxCYWNrIH0gZnJvbSAnQC9hcGkvYmFzZS9heGlvcy1jbGllbnQnO1xuaW1wb3J0IHsgU1dSQ29uZmlnIH0gZnJvbSAnc3dyJztcbi8vIGltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi9ob29rcyc7XG5pbXBvcnQgJ2thdGV4L2Rpc3Qva2F0ZXgubWluLmNzcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCB7XG4gIEFwb2xsb0NsaWVudCxcbiAgSW5NZW1vcnlDYWNoZSxcbiAgQXBvbGxvUHJvdmlkZXIsXG4gIHVzZVF1ZXJ5LFxuICBncWxcbn0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmNvbnN0IHZhcmlhbnRzID0ge1xuICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeDogLTIwMCwgeTogMCB9LFxuICBlbnRlcjogeyBvcGFjaXR5OiAxLCB4OiAwLCB5OiAwIH0sXG4gIGV4aXQ6IHsgb3BhY2l0eTogMCwgeDogMCwgeTogLTEwMCB9XG59O1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgLy8gY29uc3QgeyBsb2dvdXQsIHByb2ZpbGUsIGVycm9yIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBoYW5kbGVFcnJvckF1dGhlbnRpY2F0aW9uID0gKCkgPT4ge1xuICAgIGxvZ291dCgpO1xuICB9O1xuICBjb25zdHJ1Y3RDYWxsQmFjayhoYW5kbGVFcnJvckF1dGhlbnRpY2F0aW9uKTtcbiAgY29uc3QgcGVybWlzc2lvbiA9IENvbXBvbmVudC5wZXJtaXNzaW9uO1xuICBjb25zdCB0aGVtZSA9IENvbXBvbmVudC5sYXlvdXQ7XG5cbiAgY29uc3QgYXNQYXRoID0gcm91dGVyLmFzUGF0aDtcbiAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgdXJpOiAnaHR0cHM6Ly93b3JkcHJlc3MtNzQ5MTE1LTI1MjM0NzkuY2xvdWR3YXlzYXBwcy5jb20vZ3JhcGhxbCcsXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKClcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgICAgPENhdGVnb3J5PjwvQ2F0ZWdvcnk+XG4gICAgICA8U1dSQ29uZmlnXG4gICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgZmV0Y2hlcjogKHVybCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGF4aW9zQ2xpZW50LmdldCh1cmwpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVkdXBpbmdJbnRlcnZhbDogNjAgKiA2MCAqIDEwMDAsIC8vIDFoclxuICAgICAgICAgIHJldmFsaWRhdGVPbkZvY3VzOiBmYWxzZSxcbiAgICAgICAgICBzaG91bGRSZXRyeU9uRXJyb3I6IGZhbHNlXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHsvKiA8SGVhZGVyIC8+ICovfVxuICAgICAgICB7LyogPFRoZW1lTWFuYWdlciB0aGVtZT17dGhlbWV9PiAqL31cbiAgICAgICAgICB7LyogPE1pZGRsZXdhcmVBdXRoIGF1dGg9e3Blcm1pc3Npb24gIT09ICdwdWJsaWMnfT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXthc1BhdGh9IC8+XG4gICAgICAgICAgPC9NaWRkbGV3YXJlQXV0aD4gKi99XG4gICAgICAgIHsvKiA8L1RoZW1lTWFuYWdlcj4gKi99XG4gICAgICA8L1NXUkNvbmZpZz5cbiAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJheGlvc0NsaWVudCIsImNvbnN0cnVjdENhbGxCYWNrIiwiU1dSQ29uZmlnIiwidXNlUm91dGVyIiwiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsIkFwb2xsb1Byb3ZpZGVyIiwidXNlUXVlcnkiLCJncWwiLCJ2YXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ4IiwieSIsImVudGVyIiwiZXhpdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiaGFuZGxlRXJyb3JBdXRoZW50aWNhdGlvbiIsImxvZ291dCIsInBlcm1pc3Npb24iLCJ0aGVtZSIsImxheW91dCIsImFzUGF0aCIsImNsaWVudCIsInVyaSIsImNhY2hlIiwiRnJhZ21lbnQiLCJDYXRlZ29yeSIsInZhbHVlIiwiZmV0Y2hlciIsInVybCIsImdldCIsImRlZHVwaW5nSW50ZXJ2YWwiLCJyZXZhbGlkYXRlT25Gb2N1cyIsInNob3VsZFJldHJ5T25FcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});