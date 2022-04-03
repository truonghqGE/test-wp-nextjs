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

/***/ "./pages/category/index.js":
/*!*********************************!*\
  !*** ./pages/category/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query GraphQL {\\n      categories {\\n        nodes {\\n          name\\n          slug\\n          id\\n          uri\\n        }\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query GraphQL($categoryName: String!) {\\n      informationalPost(where: { categoryName: $categoryName }) {\\n        nodes {\\n          title\\n          slug\\n          link\\n          id\\n          featuredImage {\\n            node {\\n              uri\\n            }\\n          }\\n        }\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Category = function() {\n    var _this1 = _this;\n    var ref4, ref1;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var GET_CATEGORY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_templateObject());\n    var GET_LIST_POSTS = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_templateObject1());\n    var ref2 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(GET_CATEGORY, {\n        fetchPolicy: \"cache-and-network\"\n    }), loading = ref2.loading, error = ref2.error, data = ref2.data;\n    //   const [callGetListPosts, { data: listPosts }] = useLazyQuery(GET_LIST_POSTS, {\n    //     fetchPolicy: \"network-only\",\n    //   });\n    var categoryList = data === null || data === void 0 ? void 0 : (ref4 = data.categories) === null || ref4 === void 0 ? void 0 : ref4.nodes;\n    var postLists = listPosts === null || listPosts === void 0 ? void 0 : (ref1 = listPosts.informationalPost) === null || ref1 === void 0 ? void 0 : ref1.nodes;\n    var getListPosts = function(item) {\n        console.log(item, \"item\");\n    // if (item) {\n    //   callGetListPosts({\n    //     variables: {\n    //       categoryName: item.name,\n    //     },\n    //   });\n    // }\n    // router.push(\"/category/\" + item.slug);\n    };\n    var callGetPost = function(item) {\n        console.log(item, \"item\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n            lineNumber: 63,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container mx-auto p-4\",\n            __source: {\n                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: \"text-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Catelogy\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"catelogy flex justify-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: categoryList === null || categoryList === void 0 ? void 0 : categoryList.map(function(item) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            onClick: function() {\n                                return getListPosts(item);\n                            },\n                            __source: {\n                                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                                className: \"nav nav-tabs text-center\",\n                                id: \"myTab\",\n                                role: \"tablist\",\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                },\n                                __self: _this1,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    className: \"cursor-pointer rounded h-20 m-3 p-3 nav-item m-4 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white\",\n                                    __source: {\n                                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this1,\n                                    children: item.name\n                                })\n                            })\n                        });\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: \"text-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Posts by category\"\n                }),\n                postLists === null || postLists === void 0 ? void 0 : postLists.map(function(item) {\n                    var ref, ref3;\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"card flex border bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-8 text-white rounded\",\n                        onClick: function() {\n                            return callGetPost(item);\n                        },\n                        __source: {\n                            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        },\n                        __self: _this1,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                width: \"200\",\n                                height: \"100\",\n                                className: \"mr-3\",\n                                src: \"https://wordpress-749115-2523479.cloudwaysapps.com/\" + (item === null || item === void 0 ? void 0 : (ref = item.featuredImage) === null || ref === void 0 ? void 0 : (ref3 = ref.node) === null || ref3 === void 0 ? void 0 : ref3.uri),\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                },\n                                __self: _this1\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                className: \"mt-3\",\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                },\n                                __self: _this1,\n                                children: item.title\n                            })\n                        ]\n                    }));\n                })\n            ]\n        })\n    }));\n};\n_s(Category, \"3cmGJmCPbWz07HwSwgYwWOwFKhw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = Category;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXRlZ29yeS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFrRDtBQUNLO0FBQzFCO0FBQ1U7Ozs7Ozs7Ozs7Ozs7O1FBSVosQ0FXekI7Ozs7Ozs7OztRQUMyQixDQWdCM0I7Ozs7Ozs7O0FBOUJGLEdBQUssQ0FBQ08sUUFBUSxHQUFHLFFBQ2pCLEdBRHVCLENBQUM7O1FBdUNEQyxJQUFnQixFQUNuQkMsSUFBNEI7O0lBdkM5QyxHQUFLLENBQUNDLE1BQU0sR0FBR0osc0RBQVM7SUFDeEIsR0FBSyxDQUFDSyxZQUFZLEdBQUdOLHVEQUFHO0lBWXhCLEdBQUssQ0FBQ08sY0FBYyxHQUFHUCx1REFBRztJQWtCMUIsR0FBSyxDQUE0QkYsSUFFL0IsR0FGK0JBLHdEQUFRLENBQUNRLFlBQVksRUFBRSxDQUFDO1FBQ3ZERSxXQUFXLEVBQUUsQ0FBbUI7SUFDbEMsQ0FBQyxHQUZPQyxPQUFPLEdBQWtCWCxJQUUvQixDQUZNVyxPQUFPLEVBQUVDLEtBQUssR0FBV1osSUFFL0IsQ0FGZVksS0FBSyxFQUFFUCxJQUFJLEdBQUtMLElBRS9CLENBRnNCSyxJQUFJO0lBRzlCLEVBQW1GO0lBQ25GLEVBQW1DO0lBQ25DLEVBQVE7SUFFTixHQUFLLENBQUNRLFlBQVksR0FBR1IsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBSkEsQ0FBZ0IsSUFBaEJBLElBQWdCLEdBQWhCQSxJQUFJLENBQUVTLFVBQVUsY0FBaEJULElBQWdCLEtBQWhCQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxJQUFnQixDQUFFVSxLQUFLO0lBQzVDLEdBQUssQ0FBQ0MsU0FBUyxHQUFHVixTQUFTLGFBQVRBLFNBQVMsS0FBVEEsSUFBSSxDQUFKQSxDQUE0QixHQUE1QkEsSUFBSSxDQUFKQSxDQUE0QixJQUE1QkEsSUFBNEIsR0FBNUJBLFNBQVMsQ0FBRVcsaUJBQWlCLGNBQTVCWCxJQUE0QixLQUE1QkEsSUFBSSxDQUFKQSxDQUE0QixHQUE1QkEsSUFBSSxDQUFKQSxDQUE0QixHQUE1QkEsSUFBNEIsQ0FBRVMsS0FBSztJQUNyRCxHQUFLLENBQUNHLFlBQVksR0FBRyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO1FBQzlCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxFQUFFLENBQU07SUFDeEIsRUFBYztJQUNkLEVBQXVCO0lBQ3ZCLEVBQW1CO0lBQ25CLEVBQWlDO0lBQ2pDLEVBQVM7SUFDVCxFQUFRO0lBQ1IsRUFBSTtJQUNKLEVBQXlDO0lBQzNDLENBQUM7SUFDRCxHQUFLLENBQUNHLFdBQVcsR0FBRyxRQUFRLENBQVBILElBQUksRUFBSyxDQUFDO1FBQzdCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxFQUFFLENBQU07SUFDMUIsQ0FBQztJQUVELE1BQU0sc0VBQ0hJLENBQUc7Ozs7Ozs7d0ZBQ0RBLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQXVCOzs7Ozs7OztxRkFDbkNDLENBQUM7b0JBQUNELFNBQVMsRUFBQyxDQUFhOzs7Ozs7OzhCQUFDLENBQVE7O3FGQUNsQ0QsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQThCOzs7Ozs7OzhCQUMxQ1gsWUFBWSxhQUFaQSxZQUFZLEtBQVpBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLFlBQVksQ0FBRWEsR0FBRyxDQUFDLFFBQVEsQ0FBUFAsSUFBSTtzQ0FDdEIsTUFBTSx3REFBTEksQ0FBRzs0QkFBQ0ksT0FBTyxFQUFFLFFBQVE7Z0NBQUZULE1BQU0sQ0FBTkEsWUFBWSxDQUFDQyxJQUFJOzs7Ozs7OzsyR0FDbENTLENBQUU7Z0NBQ0RKLFNBQVMsRUFBQyxDQUEwQjtnQ0FDcENLLEVBQUUsRUFBQyxDQUFPO2dDQUNWQyxJQUFJLEVBQUMsQ0FBUzs7Ozs7OzsrR0FFYkMsQ0FBRTtvQ0FBQ1AsU0FBUyxFQUFDLENBQXNHOzs7Ozs7OzhDQUNqSEwsSUFBSSxDQUFDYSxJQUFJOzs7Ozs7cUZBTW5CUCxDQUFDO29CQUFDRCxTQUFTLEVBQUMsQ0FBYTs7Ozs7Ozs4QkFBQyxDQUFpQjs7Z0JBQzNDUixTQUFTLGFBQVRBLFNBQVMsS0FBVEEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLElBQUksQ0FBSkEsQ0FBYyxHQUFkQSxTQUFTLENBQUVVLEdBQUcsQ0FBQyxRQUFRLENBQVBQLElBQUk7d0JBV2JBLEdBQW1CO2lHQVZ4QkksQ0FBRzt3QkFDRkMsU0FBUyxFQUFDLENBQW1GO3dCQUM3RkcsT0FBTyxFQUFFLFFBQVE7NEJBQUZMLE1BQU0sQ0FBTkEsV0FBVyxDQUFDSCxJQUFJOzs7Ozs7Ozs7aUdBRTlCYyxDQUFHO2dDQUNGQyxLQUFLLEVBQUMsQ0FBSztnQ0FDWEMsTUFBTSxFQUFDLENBQUs7Z0NBQ1pYLFNBQVMsRUFBQyxDQUFNO2dDQUNoQlksR0FBRyxFQUNELENBQXFELHdEQUNyRGpCLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQW1CLEdBQW5CQSxJQUFJLENBQUpBLENBQW1CLElBQW5CQSxHQUFtQixHQUFuQkEsSUFBSSxDQUFFa0IsYUFBYSxjQUFuQmxCLEdBQW1CLEtBQW5CQSxJQUFJLENBQUpBLENBQW1CLEdBQW5CQSxJQUFJLENBQUpBLENBQW1CLFdBQW5CQSxHQUFtQixDQUFFbUIsSUFBSSx1QkFBekJuQixJQUFJLENBQUpBLENBQW1CLEdBQW5CQSxJQUFJLENBQUpBLENBQW1CLFFBQVFvQixHQUFHOzs7Ozs7OztpR0FHakNkLENBQUM7Z0NBQUNELFNBQVMsRUFBQyxDQUFNOzs7Ozs7OzBDQUFFTCxJQUFJLENBQUNxQixLQUFLOzs7Ozs7OztBQU0zQyxDQUFDO0dBaEdLcEMsUUFBUTs7UUFDR0Qsa0RBQVM7UUErQlNILG9EQUFROzs7S0FoQ3JDSSxRQUFRO0FBaUdkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcnkvaW5kZXguanM/MmEzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnksIHVzZUxhenlRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBDYXRlZ29yeSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IEdFVF9DQVRFR09SWSA9IGdxbGBcbiAgICBxdWVyeSBHcmFwaFFMIHtcbiAgICAgIGNhdGVnb3JpZXMge1xuICAgICAgICBub2RlcyB7XG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIHNsdWdcbiAgICAgICAgICBpZFxuICAgICAgICAgIHVyaVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuICBjb25zdCBHRVRfTElTVF9QT1NUUyA9IGdxbGBcbiAgICBxdWVyeSBHcmFwaFFMKCRjYXRlZ29yeU5hbWU6IFN0cmluZyEpIHtcbiAgICAgIGluZm9ybWF0aW9uYWxQb3N0KHdoZXJlOiB7IGNhdGVnb3J5TmFtZTogJGNhdGVnb3J5TmFtZSB9KSB7XG4gICAgICAgIG5vZGVzIHtcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIHNsdWdcbiAgICAgICAgICBsaW5rXG4gICAgICAgICAgaWRcbiAgICAgICAgICBmZWF0dXJlZEltYWdlIHtcbiAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICB1cmlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG5cbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX0NBVEVHT1JZLCB7XG4gICAgZmV0Y2hQb2xpY3k6IFwiY2FjaGUtYW5kLW5ldHdvcmtcIixcbiAgfSk7XG4vLyAgIGNvbnN0IFtjYWxsR2V0TGlzdFBvc3RzLCB7IGRhdGE6IGxpc3RQb3N0cyB9XSA9IHVzZUxhenlRdWVyeShHRVRfTElTVF9QT1NUUywge1xuLy8gICAgIGZldGNoUG9saWN5OiBcIm5ldHdvcmstb25seVwiLFxuLy8gICB9KTtcblxuICBjb25zdCBjYXRlZ29yeUxpc3QgPSBkYXRhPy5jYXRlZ29yaWVzPy5ub2RlcztcbiAgY29uc3QgcG9zdExpc3RzID0gbGlzdFBvc3RzPy5pbmZvcm1hdGlvbmFsUG9zdD8ubm9kZXM7XG4gIGNvbnN0IGdldExpc3RQb3N0cyA9IChpdGVtKSA9PiB7XG4gICAgY29uc29sZS5sb2coaXRlbSwgXCJpdGVtXCIpO1xuICAgIC8vIGlmIChpdGVtKSB7XG4gICAgLy8gICBjYWxsR2V0TGlzdFBvc3RzKHtcbiAgICAvLyAgICAgdmFyaWFibGVzOiB7XG4gICAgLy8gICAgICAgY2F0ZWdvcnlOYW1lOiBpdGVtLm5hbWUsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICB9KTtcbiAgICAvLyB9XG4gICAgLy8gcm91dGVyLnB1c2goXCIvY2F0ZWdvcnkvXCIgKyBpdGVtLnNsdWcpO1xuICB9O1xuICBjb25zdCBjYWxsR2V0UG9zdCA9IChpdGVtKSA9PiB7XG4gICAgY29uc29sZS5sb2coaXRlbSwgXCJpdGVtXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC00XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+Q2F0ZWxvZ3k8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWxvZ3kgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIHtjYXRlZ29yeUxpc3Q/Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBnZXRMaXN0UG9zdHMoaXRlbSl9PlxuICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnMgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgIGlkPVwibXlUYWJcIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJsaXN0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciByb3VuZGVkIGgtMjAgbS0zIHAtMyBuYXYtaXRlbSBtLTQgYmctY3lhbi01MDAgc2hhZG93LWxnIHNoYWRvdy1jeWFuLTUwMC81MCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+UG9zdHMgYnkgY2F0ZWdvcnk8L3A+XG4gICAgICAgIHtwb3N0TGlzdHM/Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQgZmxleCBib3JkZXIgYmctY3lhbi01MDAgc2hhZG93LWxnIHNoYWRvdy1jeWFuLTUwMC81MCBtdC04IHRleHQtd2hpdGUgcm91bmRlZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjYWxsR2V0UG9zdChpdGVtKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjAwXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItM1wiXG4gICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgXCJodHRwczovL3dvcmRwcmVzcy03NDkxMTUtMjUyMzQ3OS5jbG91ZHdheXNhcHBzLmNvbS9cIiArXG4gICAgICAgICAgICAgICAgaXRlbT8uZmVhdHVyZWRJbWFnZT8ubm9kZT8udXJpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTNcIj57aXRlbS50aXRsZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVF1ZXJ5IiwidXNlTGF6eVF1ZXJ5IiwiZ3FsIiwidXNlUm91dGVyIiwiQ2F0ZWdvcnkiLCJkYXRhIiwibGlzdFBvc3RzIiwicm91dGVyIiwiR0VUX0NBVEVHT1JZIiwiR0VUX0xJU1RfUE9TVFMiLCJmZXRjaFBvbGljeSIsImxvYWRpbmciLCJlcnJvciIsImNhdGVnb3J5TGlzdCIsImNhdGVnb3JpZXMiLCJub2RlcyIsInBvc3RMaXN0cyIsImluZm9ybWF0aW9uYWxQb3N0IiwiZ2V0TGlzdFBvc3RzIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJjYWxsR2V0UG9zdCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJtYXAiLCJvbkNsaWNrIiwidWwiLCJpZCIsInJvbGUiLCJsaSIsIm5hbWUiLCJpbWciLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImZlYXR1cmVkSW1hZ2UiLCJub2RlIiwidXJpIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/category/index.js\n");

/***/ })

});