"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Header() {\n    _s();\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const variants = {\n        open: {\n            opacity: 1,\n            y: 0\n        },\n        closed: {\n            opacity: 0,\n            y: -10\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"bg-darkerBg lg:px-10 pb-5 mb-5 lg:mb-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"lg:grid lg:grid-cols-2 lg:mx-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-end justify-between px-5 lg:px-0 lg:justify-start lg:space-y-10 bg-darkerBg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setMenuOpen(!menuOpen),\n                            className: \"lg:hidden text-5xl text-link pr-5 pb-8\",\n                            type: \"button\",\n                            \"aria-label\": \"menu\",\n                            children: menuOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"icon-[mdi--arrow-up] text-link\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"icon-[mdi--hamburger-menu] text-link\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            className: \"max-h-[220px] \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"min-w-[250px] min-h-[250px] lg:min-w-[20vw] lg:min-h-[20vh] relative\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: \"/images/banner-draft.png\",\n                                    alt: \"logo\",\n                                    fill: true,\n                                    className: \"object-contain object-center\",\n                                    sizes: \"(100vw, 100vh)\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row\",\n                    children: menuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        className: \"absolute lg:static space-y-8 justify-start w-full flex flex-col z-50 bg-darkerBg h-[80vh] pl-5 lg:pl-0\",\n                        initial: {\n                            opacity: 0,\n                            y: -20\n                        },\n                        animate: {\n                            opacity: 1,\n                            y: 0\n                        },\n                        exit: {\n                            opacity: 0,\n                            y: -20\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col space-y-12 text-4xl font-sans py-10 pl-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/aims\",\n                                    className: \"text-link hover:text-hover active:text-link\",\n                                    \"aria-label\": \"link to the aims page\",\n                                    children: \"Our Aims\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/news?category=\",\n                                    className: \"text-link hover:text-hover active:text-link\",\n                                    \"aria-label\": \"link to the news page\",\n                                    children: \"Latest News\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/getinvolved\",\n                                    className: \"text-link hover:text-hover active:text-link\",\n                                    \"aria-label\": \"link to the get involved page\",\n                                    children: \"Get Involved\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hidden lg:flex flex-row lg:flex-col lg:justify-end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-x-10 space-y-8 lg:space-y-0 lg:items-center justify-end w-full flex flex-col lg:flex-row z-50 bg-darkerBg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center space-x-10 text-3xl font-sans pb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/aims\",\n                                    className: \"text-link hover:text-hover active:text-link\",\n                                    \"aria-label\": \"link to the aims page\",\n                                    children: \"Our Aims\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/news\",\n                                    className: \"text-link hover:text-hover active:text-link\",\n                                    \"aria-label\": \"link to the news page\",\n                                    children: \"Latest News\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/getinvolved\",\n                                    className: \"text-link hover:text-hover active:text-link\",\n                                    \"aria-label\": \"link to the get involved page\",\n                                    children: \"Get Involved\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"K77eQVFAaxZgbvGoNWFAiCE7OTY=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0o7QUFDRTtBQUNRO0FBRXhCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFFekMsTUFBTU8sV0FBVztRQUNmQyxNQUFNO1lBQUVDLFNBQVM7WUFBR0MsR0FBRztRQUFFO1FBQ3pCQyxRQUFRO1lBQUVGLFNBQVM7WUFBR0MsR0FBRyxDQUFDO1FBQUc7SUFDL0I7SUFFQSxxQkFDRSw4REFBQ0U7UUFBT0MsV0FBVTtrQkFDaEIsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNFOzRCQUNDQyxTQUFTLElBQU1WLFlBQVksQ0FBQ0Q7NEJBQzVCUSxXQUFVOzRCQUNWSSxNQUFLOzRCQUNMQyxjQUFXO3NDQUVWYix5QkFDQyw4REFBQ2M7Z0NBQUtOLFdBQVU7Ozs7O3FEQUVoQiw4REFBQ007Z0NBQUtOLFdBQVU7Ozs7Ozs7Ozs7O3NDQUdwQiw4REFBQ1osa0RBQUlBOzRCQUFDbUIsTUFBSzs0QkFBSVAsV0FBVTtzQ0FDdkIsNEVBQUNDO2dDQUFJRCxXQUFVOzBDQUNiLDRFQUFDWCxtREFBS0E7b0NBQ0ptQixLQUFJO29DQUNKQyxLQUFJO29DQUNKQyxJQUFJO29DQUNKVixXQUFVO29DQUNWVyxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU1kLDhEQUFDVjtvQkFBSUQsV0FBVTs4QkFDWlIsMEJBQ0MsOERBQUNGLGlEQUFNQSxDQUFDVyxHQUFHO3dCQUNURCxXQUFVO3dCQUNWWSxTQUFTOzRCQUFFaEIsU0FBUzs0QkFBR0MsR0FBRyxDQUFDO3dCQUFHO3dCQUM5QmdCLFNBQVM7NEJBQUVqQixTQUFTOzRCQUFHQyxHQUFHO3dCQUFFO3dCQUM1QmlCLE1BQU07NEJBQUVsQixTQUFTOzRCQUFHQyxHQUFHLENBQUM7d0JBQUc7a0NBRTNCLDRFQUFDSTs0QkFBSUQsV0FBVTs7OENBQ2IsOERBQUNaLGtEQUFJQTtvQ0FDSG1CLE1BQUs7b0NBQ0xQLFdBQVU7b0NBQ1ZLLGNBQVc7OENBQ1o7Ozs7Ozs4Q0FHRCw4REFBQ2pCLGtEQUFJQTtvQ0FDSG1CLE1BQUs7b0NBQ0xQLFdBQVU7b0NBQ1ZLLGNBQVc7OENBQ1o7Ozs7Ozs4Q0FHRCw4REFBQ2pCLGtEQUFJQTtvQ0FDSG1CLE1BQUs7b0NBQ0xQLFdBQVU7b0NBQ1ZLLGNBQVc7OENBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBUVQsOERBQUNKO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ0M7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDWixrREFBSUE7b0NBQ0htQixNQUFLO29DQUNMUCxXQUFVO29DQUNWSyxjQUFXOzhDQUNaOzs7Ozs7OENBR0QsOERBQUNqQixrREFBSUE7b0NBQ0htQixNQUFLO29DQUNMUCxXQUFVO29DQUNWSyxjQUFXOzhDQUNaOzs7Ozs7OENBSUQsOERBQUNqQixrREFBSUE7b0NBQ0htQixNQUFLO29DQUNMUCxXQUFVO29DQUNWSyxjQUFXOzhDQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTZjtHQXZHd0JkO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyLnRzeD84NzBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdmFyaWFudHMgPSB7XG4gICAgb3BlbjogeyBvcGFjaXR5OiAxLCB5OiAwIH0sXG4gICAgY2xvc2VkOiB7IG9wYWNpdHk6IDAsIHk6IC0xMCB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJiZy1kYXJrZXJCZyBsZzpweC0xMCBwYi01IG1iLTUgbGc6bWItMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpncmlkIGxnOmdyaWQtY29scy0yIGxnOm14LTEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuIHB4LTUgbGc6cHgtMCBsZzpqdXN0aWZ5LXN0YXJ0IGxnOnNwYWNlLXktMTAgYmctZGFya2VyQmdcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNZW51T3BlbighbWVudU9wZW4pfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGc6aGlkZGVuIHRleHQtNXhsIHRleHQtbGluayBwci01IHBiLThcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwibWVudVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge21lbnVPcGVuID8gKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLVttZGktLWFycm93LXVwXSB0ZXh0LWxpbmtcIj48L3NwYW4+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLVttZGktLWhhbWJ1cmdlci1tZW51XSB0ZXh0LWxpbmtcIj48L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibWF4LWgtWzIyMHB4XSBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLXctWzI1MHB4XSBtaW4taC1bMjUwcHhdIGxnOm1pbi13LVsyMHZ3XSBsZzptaW4taC1bMjB2aF0gcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9iYW5uZXItZHJhZnQucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgICAgICAgICAgICBmaWxsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvbnRhaW4gb2JqZWN0LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgc2l6ZXM9XCIoMTAwdncsIDEwMHZoKVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogbW9iaWxlIG1lbnUgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgIHttZW51T3BlbiAmJiAoXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZzpzdGF0aWMgc3BhY2UteS04IGp1c3RpZnktc3RhcnQgdy1mdWxsIGZsZXggZmxleC1jb2wgei01MCBiZy1kYXJrZXJCZyBoLVs4MHZoXSBwbC01IGxnOnBsLTBcIlxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC0yMCB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB5OiAtMjAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMTIgdGV4dC00eGwgZm9udC1zYW5zIHB5LTEwIHBsLTVcIj5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9haW1zXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGluayBob3Zlcjp0ZXh0LWhvdmVyIGFjdGl2ZTp0ZXh0LWxpbmtcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxpbmsgdG8gdGhlIGFpbXMgcGFnZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgT3VyIEFpbXNcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvbmV3cz9jYXRlZ29yeT1cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1saW5rIGhvdmVyOnRleHQtaG92ZXIgYWN0aXZlOnRleHQtbGlua1wiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibGluayB0byB0aGUgbmV3cyBwYWdlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBMYXRlc3QgTmV3c1xuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9nZXRpbnZvbHZlZFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxpbmsgaG92ZXI6dGV4dC1ob3ZlciBhY3RpdmU6dGV4dC1saW5rXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsaW5rIHRvIHRoZSBnZXQgaW52b2x2ZWQgcGFnZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgR2V0IEludm9sdmVkXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIGRlc2t0b3AgbWVudSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBmbGV4LXJvdyBsZzpmbGV4LWNvbCBsZzpqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteC0xMCBzcGFjZS15LTggbGc6c3BhY2UteS0wIGxnOml0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCB3LWZ1bGwgZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyB6LTUwIGJnLWRhcmtlckJnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHNwYWNlLXgtMTAgdGV4dC0zeGwgZm9udC1zYW5zIHBiLTZcIj5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPVwiL2FpbXNcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGluayBob3Zlcjp0ZXh0LWhvdmVyIGFjdGl2ZTp0ZXh0LWxpbmtcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsaW5rIHRvIHRoZSBhaW1zIHBhZ2VcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgT3VyIEFpbXNcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvbmV3c1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1saW5rIGhvdmVyOnRleHQtaG92ZXIgYWN0aXZlOnRleHQtbGlua1wiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxpbmsgdG8gdGhlIG5ld3MgcGFnZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMYXRlc3QgTmV3c1xuICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPVwiL2dldGludm9sdmVkXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxpbmsgaG92ZXI6dGV4dC1ob3ZlciBhY3RpdmU6dGV4dC1saW5rXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibGluayB0byB0aGUgZ2V0IGludm9sdmVkIHBhZ2VcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgR2V0IEludm9sdmVkXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGluayIsIkltYWdlIiwibW90aW9uIiwiSGVhZGVyIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsInZhcmlhbnRzIiwib3BlbiIsIm9wYWNpdHkiLCJ5IiwiY2xvc2VkIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsInR5cGUiLCJhcmlhLWxhYmVsIiwic3BhbiIsImhyZWYiLCJzcmMiLCJhbHQiLCJmaWxsIiwic2l6ZXMiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImV4aXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header.tsx\n"));

/***/ })

});