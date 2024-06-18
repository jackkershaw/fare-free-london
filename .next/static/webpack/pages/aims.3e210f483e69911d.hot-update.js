"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/aims",{

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Header() {\n    _s();\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const variants = {\n        open: {\n            opacity: 1,\n            y: 0\n        },\n        closed: {\n            opacity: 0,\n            y: -10\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"bg-darkerBg lg:px-10 pb-5 mb-5 lg:mb-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"lg:grid lg:grid-cols-2 lg:mx-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-end justify-between px-5 lg:px-0 lg:justify-start lg:space-y-10 bg-darkerBg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setMenuOpen(!menuOpen),\n                            className: \"lg:hidden text-5xl text-heading pr-5 pb-8\",\n                            type: \"button\",\n                            \"aria-label\": \"menu\",\n                            children: menuOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"icon-[mdi--arrow-up] text-heading\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"icon-[mdi--hamburger-menu] text-heading\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            className: \"max-h-[220px] \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"min-w-[250px] min-h-[250px] lg:min-w-[20vw] lg:min-h-[20vh] relative\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: \"/images/banner-draft.png\",\n                                    alt: \"logo\",\n                                    fill: true,\n                                    className: \"object-contain object-center\",\n                                    sizes: \"(100vw, 100vh)\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row lg:flex-col lg:justify-end lg:hidden\",\n                    children: menuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        className: \"absolute lg:static space-y-8 justify-start w-full flex flex-col z-50 bg-darkerBg h-[120vh] pl-5 lg:pl-0\",\n                        initial: {\n                            opacity: 0,\n                            y: -20\n                        },\n                        animate: {\n                            opacity: 1,\n                            y: 0\n                        },\n                        exit: {\n                            opacity: 0,\n                            y: -20\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col space-y-12 text-4xl font-sans py-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/aims\",\n                                        className: \"text-heading hover:text-hover active:text-heading\",\n                                        \"aria-label\": \"link to the aims page\",\n                                        children: \"Our Aims\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/news?category=\",\n                                        className: \"text-heading hover:text-hover active:text-heading\",\n                                        \"aria-label\": \"link to the news page\",\n                                        children: \"Latest News\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/getinvolved\",\n                                        className: \"text-heading hover:text-hover active:text-heading\",\n                                        \"aria-label\": \"link to the get involved page\",\n                                        children: \"Get Involved\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"hello!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hidden lg:flex flex-row lg:flex-col lg:justify-end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-x-10 space-y-8 lg:space-y-0 lg:items-center justify-end w-full flex flex-col lg:flex-row z-50 bg-darkerBg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center space-x-10 text-3xl font-sans pb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/aims\",\n                                    className: \"text-heading hover:text-hover active:text-heading\",\n                                    \"aria-label\": \"link to the aims page\",\n                                    children: \"Our Aims\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/news\",\n                                    className: \"text-heading hover:text-hover active:text-heading\",\n                                    \"aria-label\": \"link to the news page\",\n                                    children: \"Latest News\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/getinvolved\",\n                                    className: \"text-heading hover:text-hover active:text-heading\",\n                                    \"aria-label\": \"link to the get involved page\",\n                                    children: \"Get Involved\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"K77eQVFAaxZgbvGoNWFAiCE7OTY=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0o7QUFDRTtBQUNRO0FBRXhCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFFekMsTUFBTU8sV0FBVztRQUNmQyxNQUFNO1lBQUVDLFNBQVM7WUFBR0MsR0FBRztRQUFFO1FBQ3pCQyxRQUFRO1lBQUVGLFNBQVM7WUFBR0MsR0FBRyxDQUFDO1FBQUc7SUFDL0I7SUFFQSxxQkFDRSw4REFBQ0U7UUFBT0MsV0FBVTtrQkFDaEIsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNFOzRCQUNDQyxTQUFTLElBQU1WLFlBQVksQ0FBQ0Q7NEJBQzVCUSxXQUFVOzRCQUNWSSxNQUFLOzRCQUNMQyxjQUFXO3NDQUVWYix5QkFDQyw4REFBQ2M7Z0NBQUtOLFdBQVU7Ozs7O3FEQUVoQiw4REFBQ007Z0NBQUtOLFdBQVU7Ozs7Ozs7Ozs7O3NDQUdwQiw4REFBQ1osa0RBQUlBOzRCQUFDbUIsTUFBSzs0QkFBSVAsV0FBVTtzQ0FDdkIsNEVBQUNDO2dDQUFJRCxXQUFVOzBDQUNiLDRFQUFDWCxtREFBS0E7b0NBQ0ptQixLQUFJO29DQUNKQyxLQUFJO29DQUNKQyxJQUFJO29DQUNKVixXQUFVO29DQUNWVyxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU1kLDhEQUFDVjtvQkFBSUQsV0FBVTs4QkFDWlIsMEJBQ0MsOERBQUNGLGlEQUFNQSxDQUFDVyxHQUFHO3dCQUNURCxXQUFVO3dCQUNWWSxTQUFTOzRCQUFFaEIsU0FBUzs0QkFBR0MsR0FBRyxDQUFDO3dCQUFHO3dCQUM5QmdCLFNBQVM7NEJBQUVqQixTQUFTOzRCQUFHQyxHQUFHO3dCQUFFO3dCQUM1QmlCLE1BQU07NEJBQUVsQixTQUFTOzRCQUFHQyxHQUFHLENBQUM7d0JBQUc7OzBDQUUzQiw4REFBQ0k7Z0NBQUlELFdBQVU7O2tEQUNiLDhEQUFDWixrREFBSUE7d0NBQ0htQixNQUFLO3dDQUNMUCxXQUFVO3dDQUNWSyxjQUFXO2tEQUNaOzs7Ozs7a0RBR0QsOERBQUNqQixrREFBSUE7d0NBQ0htQixNQUFLO3dDQUNMUCxXQUFVO3dDQUNWSyxjQUFXO2tEQUNaOzs7Ozs7a0RBR0QsOERBQUNqQixrREFBSUE7d0NBQ0htQixNQUFLO3dDQUNMUCxXQUFVO3dDQUNWSyxjQUFXO2tEQUNaOzs7Ozs7Ozs7Ozs7MENBSUgsOERBQUNKOzBDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLWCw4REFBQ0E7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNDO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDQzs0QkFBSUQsV0FBVTs7OENBQ2IsOERBQUNaLGtEQUFJQTtvQ0FDSG1CLE1BQUs7b0NBQ0xQLFdBQVU7b0NBQ1ZLLGNBQVc7OENBQ1o7Ozs7Ozs4Q0FHRCw4REFBQ2pCLGtEQUFJQTtvQ0FDSG1CLE1BQUs7b0NBQ0xQLFdBQVU7b0NBQ1ZLLGNBQVc7OENBQ1o7Ozs7Ozs4Q0FJRCw4REFBQ2pCLGtEQUFJQTtvQ0FDSG1CLE1BQUs7b0NBQ0xQLFdBQVU7b0NBQ1ZLLGNBQVc7OENBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmO0dBeEd3QmQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIudHN4Pzg3MGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB2YXJpYW50cyA9IHtcbiAgICBvcGVuOiB7IG9wYWNpdHk6IDEsIHk6IDAgfSxcbiAgICBjbG9zZWQ6IHsgb3BhY2l0eTogMCwgeTogLTEwIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImJnLWRhcmtlckJnIGxnOnB4LTEwIHBiLTUgbWItNSBsZzptYi0wXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmdyaWQgbGc6Z3JpZC1jb2xzLTIgbGc6bXgtMTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWVuZCBqdXN0aWZ5LWJldHdlZW4gcHgtNSBsZzpweC0wIGxnOmp1c3RpZnktc3RhcnQgbGc6c3BhY2UteS0xMCBiZy1kYXJrZXJCZ1wiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1lbnVPcGVuKCFtZW51T3Blbil9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsZzpoaWRkZW4gdGV4dC01eGwgdGV4dC1oZWFkaW5nIHByLTUgcGItOFwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJtZW51XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bWVudU9wZW4gPyAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tW21kaS0tYXJyb3ctdXBdIHRleHQtaGVhZGluZ1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tW21kaS0taGFtYnVyZ2VyLW1lbnVdIHRleHQtaGVhZGluZ1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJtYXgtaC1bMjIwcHhdIFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdy1bMjUwcHhdIG1pbi1oLVsyNTBweF0gbGc6bWluLXctWzIwdnddIGxnOm1pbi1oLVsyMHZoXSByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2Jhbm5lci1kcmFmdC5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICAgICAgICAgIGZpbGxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpbiBvYmplY3QtY2VudGVyXCJcbiAgICAgICAgICAgICAgICBzaXplcz1cIigxMDB2dywgMTAwdmgpXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBtb2JpbGUgbWVudSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGxnOmZsZXgtY29sIGxnOmp1c3RpZnktZW5kIGxnOmhpZGRlblwiPlxuICAgICAgICAgIHttZW51T3BlbiAmJiAoXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZzpzdGF0aWMgc3BhY2UteS04IGp1c3RpZnktc3RhcnQgdy1mdWxsIGZsZXggZmxleC1jb2wgei01MCBiZy1kYXJrZXJCZyBoLVsxMjB2aF0gcGwtNSBsZzpwbC0wXCJcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAtMjAgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgeTogLTIwIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTEyIHRleHQtNHhsIGZvbnQtc2FucyBweS0xMFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2FpbXNcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1oZWFkaW5nIGhvdmVyOnRleHQtaG92ZXIgYWN0aXZlOnRleHQtaGVhZGluZ1wiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibGluayB0byB0aGUgYWltcyBwYWdlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBPdXIgQWltc1xuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9uZXdzP2NhdGVnb3J5PVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWhlYWRpbmcgaG92ZXI6dGV4dC1ob3ZlciBhY3RpdmU6dGV4dC1oZWFkaW5nXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsaW5rIHRvIHRoZSBuZXdzIHBhZ2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIExhdGVzdCBOZXdzXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2dldGludm9sdmVkXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtaGVhZGluZyBob3Zlcjp0ZXh0LWhvdmVyIGFjdGl2ZTp0ZXh0LWhlYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxpbmsgdG8gdGhlIGdldCBpbnZvbHZlZCBwYWdlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBHZXQgSW52b2x2ZWRcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PmhlbGxvITwvZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogZGVza3RvcCBtZW51ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4IGZsZXgtcm93IGxnOmZsZXgtY29sIGxnOmp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS14LTEwIHNwYWNlLXktOCBsZzpzcGFjZS15LTAgbGc6aXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHctZnVsbCBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IHotNTAgYmctZGFya2VyQmdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgc3BhY2UteC0xMCB0ZXh0LTN4bCBmb250LXNhbnMgcGItNlwiPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvYWltc1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1oZWFkaW5nIGhvdmVyOnRleHQtaG92ZXIgYWN0aXZlOnRleHQtaGVhZGluZ1wiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxpbmsgdG8gdGhlIGFpbXMgcGFnZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBPdXIgQWltc1xuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9uZXdzXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWhlYWRpbmcgaG92ZXI6dGV4dC1ob3ZlciBhY3RpdmU6dGV4dC1oZWFkaW5nXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibGluayB0byB0aGUgbmV3cyBwYWdlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIExhdGVzdCBOZXdzXG4gICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvZ2V0aW52b2x2ZWRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtaGVhZGluZyBob3Zlcjp0ZXh0LWhvdmVyIGFjdGl2ZTp0ZXh0LWhlYWRpbmdcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsaW5rIHRvIHRoZSBnZXQgaW52b2x2ZWQgcGFnZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBHZXQgSW52b2x2ZWRcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMaW5rIiwiSW1hZ2UiLCJtb3Rpb24iLCJIZWFkZXIiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwidmFyaWFudHMiLCJvcGVuIiwib3BhY2l0eSIsInkiLCJjbG9zZWQiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwidHlwZSIsImFyaWEtbGFiZWwiLCJzcGFuIiwiaHJlZiIsInNyYyIsImFsdCIsImZpbGwiLCJzaXplcyIsImluaXRpYWwiLCJhbmltYXRlIiwiZXhpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.tsx\n"));

/***/ })

});