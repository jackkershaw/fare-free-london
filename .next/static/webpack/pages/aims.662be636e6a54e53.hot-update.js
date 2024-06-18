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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Header() {\n    _s();\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const variants = {\n        open: {\n            opacity: 1,\n            y: 0\n        },\n        closed: {\n            opacity: 0,\n            y: -10\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"bg-darkerBg lg:px-10 pb-5 mb-5 lg:mb-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"lg:grid lg:grid-cols-2 lg:mx-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-end justify-between px-5 lg:px-0 lg:justify-start lg:space-y-10 bg-darkerBg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setMenuOpen(!menuOpen),\n                            className: \"lg:hidden text-5xl text-heading p-5\",\n                            \"aria-label\": \"menu\",\n                            children: menuOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"icon-[mdi--arrow-up] text-heading\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"icon-[mdi--hamburger-menu] text-heading\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            className: \"max-h-[220px] \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"min-w-[250px] min-h-[250px] lg:min-w-[20vw] lg:min-h-[20vh] relative\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: \"/images/banner-draft.png\",\n                                    alt: \"logo\",\n                                    fill: true,\n                                    className: \"object-contain object-center\",\n                                    sizes: \"(100vw, 100vh)\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row lg:flex-col lg:justify-end lg:hidden\",\n                    children: menuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        className: \"absolute lg:static space-y-8 justify-start w-full flex flex-col z-50 bg-darkerBg pl-5 lg:pl-0\",\n                        initial: {\n                            opacity: 0,\n                            y: -20\n                        },\n                        animate: {\n                            opacity: 1,\n                            y: 0\n                        },\n                        exit: {\n                            opacity: 0,\n                            y: -20\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col lg:flex-row lg:items-center space-y-5 lg:space-y-0 lg:space-x-8 text-3xl font-sans pb-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/aims\",\n                                    className: \"text-heading hover:text-hover active:text-heading\",\n                                    \"aria-label\": \"link to the aims page\",\n                                    children: \"Our Aims\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/news?category=\",\n                                    className: \"text-heading hover:text-hover active:text-heading\",\n                                    \"aria-label\": \"link to the news page\",\n                                    children: \"Latest News\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/getinvolved\",\n                                    className: \"text-heading hover:text-hover active:text-heading\",\n                                    \"aria-label\": \"link to the get involved page\",\n                                    children: \"Get Involved\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hidden lg:flex flex-row lg:flex-col lg:justify-end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-x-10 space-y-8 lg:space-y-0 lg:items-center justify-end w-full flex flex-col lg:flex-row z-50 bg-darkerBg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center space-x-10 text-3xl font-sans pb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/aims\",\n                                    className: \"text-heading hover:text-hover active:text-heading\",\n                                    \"aria-label\": \"link to the aims page\",\n                                    children: \"Our Aims\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/news\",\n                                    className: \"text-heading hover:text-hover active:text-heading\",\n                                    \"aria-label\": \"link to the news page\",\n                                    children: \"Latest News\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/getinvolved\",\n                                    className: \"text-heading hover:text-hover active:text-heading\",\n                                    \"aria-label\": \"link to the get involved page\",\n                                    children: \"Get Involved\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/header.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"K77eQVFAaxZgbvGoNWFAiCE7OTY=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0o7QUFDRTtBQUNRO0FBRXhCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFFekMsTUFBTU8sV0FBVztRQUNmQyxNQUFNO1lBQUVDLFNBQVM7WUFBR0MsR0FBRztRQUFFO1FBQ3pCQyxRQUFRO1lBQUVGLFNBQVM7WUFBR0MsR0FBRyxDQUFDO1FBQUc7SUFDL0I7SUFFQSxxQkFDRSw4REFBQ0U7UUFBT0MsV0FBVTtrQkFDaEIsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNFOzRCQUNDQyxTQUFTLElBQU1WLFlBQVksQ0FBQ0Q7NEJBQzVCUSxXQUFVOzRCQUNWSSxjQUFXO3NDQUVWWix5QkFDQyw4REFBQ2E7Z0NBQUtMLFdBQVU7Ozs7O3FEQUVoQiw4REFBQ0s7Z0NBQUtMLFdBQVU7Ozs7Ozs7Ozs7O3NDQUdwQiw4REFBQ1osa0RBQUlBOzRCQUFDa0IsTUFBSzs0QkFBSU4sV0FBVTtzQ0FDdkIsNEVBQUNDO2dDQUFJRCxXQUFVOzBDQUNiLDRFQUFDWCxtREFBS0E7b0NBQ0prQixLQUFJO29DQUNKQyxLQUFJO29DQUNKQyxJQUFJO29DQUNKVCxXQUFVO29DQUNWVSxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU1kLDhEQUFDVDtvQkFBSUQsV0FBVTs4QkFDWlIsMEJBQ0MsOERBQUNGLGlEQUFNQSxDQUFDVyxHQUFHO3dCQUNURCxXQUFVO3dCQUNWVyxTQUFTOzRCQUFFZixTQUFTOzRCQUFHQyxHQUFHLENBQUM7d0JBQUc7d0JBQzlCZSxTQUFTOzRCQUFFaEIsU0FBUzs0QkFBR0MsR0FBRzt3QkFBRTt3QkFDNUJnQixNQUFNOzRCQUFFakIsU0FBUzs0QkFBR0MsR0FBRyxDQUFDO3dCQUFHO2tDQUUzQiw0RUFBQ0k7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDWixrREFBSUE7b0NBQ0hrQixNQUFLO29DQUNMTixXQUFVO29DQUNWSSxjQUFXOzhDQUNaOzs7Ozs7OENBR0QsOERBQUNoQixrREFBSUE7b0NBQ0hrQixNQUFLO29DQUNMTixXQUFVO29DQUNWSSxjQUFXOzhDQUNaOzs7Ozs7OENBSUQsOERBQUNoQixrREFBSUE7b0NBQ0hrQixNQUFLO29DQUNMTixXQUFVO29DQUNWSSxjQUFXOzhDQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQVFULDhEQUFDSDtvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ1osa0RBQUlBO29DQUNIa0IsTUFBSztvQ0FDTE4sV0FBVTtvQ0FDVkksY0FBVzs4Q0FDWjs7Ozs7OzhDQUdELDhEQUFDaEIsa0RBQUlBO29DQUNIa0IsTUFBSztvQ0FDTE4sV0FBVTtvQ0FDVkksY0FBVzs4Q0FDWjs7Ozs7OzhDQUlELDhEQUFDaEIsa0RBQUlBO29DQUNIa0IsTUFBSztvQ0FDTE4sV0FBVTtvQ0FDVkksY0FBVzs4Q0FDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2Y7R0F2R3dCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci50c3g/ODcwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHZhcmlhbnRzID0ge1xuICAgIG9wZW46IHsgb3BhY2l0eTogMSwgeTogMCB9LFxuICAgIGNsb3NlZDogeyBvcGFjaXR5OiAwLCB5OiAtMTAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctZGFya2VyQmcgbGc6cHgtMTAgcGItNSBtYi01IGxnOm1iLTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Z3JpZCBsZzpncmlkLWNvbHMtMiBsZzpteC0xMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtZW5kIGp1c3RpZnktYmV0d2VlbiBweC01IGxnOnB4LTAgbGc6anVzdGlmeS1zdGFydCBsZzpzcGFjZS15LTEwIGJnLWRhcmtlckJnXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TWVudU9wZW4oIW1lbnVPcGVuKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxnOmhpZGRlbiB0ZXh0LTV4bCB0ZXh0LWhlYWRpbmcgcC01XCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJtZW51XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bWVudU9wZW4gPyAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tW21kaS0tYXJyb3ctdXBdIHRleHQtaGVhZGluZ1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tW21kaS0taGFtYnVyZ2VyLW1lbnVdIHRleHQtaGVhZGluZ1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJtYXgtaC1bMjIwcHhdIFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdy1bMjUwcHhdIG1pbi1oLVsyNTBweF0gbGc6bWluLXctWzIwdnddIGxnOm1pbi1oLVsyMHZoXSByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2Jhbm5lci1kcmFmdC5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICAgICAgICAgIGZpbGxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpbiBvYmplY3QtY2VudGVyXCJcbiAgICAgICAgICAgICAgICBzaXplcz1cIigxMDB2dywgMTAwdmgpXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBtb2JpbGUgbWVudSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGxnOmZsZXgtY29sIGxnOmp1c3RpZnktZW5kIGxnOmhpZGRlblwiPlxuICAgICAgICAgIHttZW51T3BlbiAmJiAoXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZzpzdGF0aWMgc3BhY2UteS04IGp1c3RpZnktc3RhcnQgdy1mdWxsIGZsZXggZmxleC1jb2wgei01MCBiZy1kYXJrZXJCZyBwbC01IGxnOnBsLTBcIlxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC0yMCB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB5OiAtMjAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGxnOml0ZW1zLWNlbnRlciBzcGFjZS15LTUgbGc6c3BhY2UteS0wIGxnOnNwYWNlLXgtOCB0ZXh0LTN4bCBmb250LXNhbnMgcGItNVwiPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2FpbXNcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1oZWFkaW5nIGhvdmVyOnRleHQtaG92ZXIgYWN0aXZlOnRleHQtaGVhZGluZ1wiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibGluayB0byB0aGUgYWltcyBwYWdlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBPdXIgQWltc1xuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9uZXdzP2NhdGVnb3J5PVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWhlYWRpbmcgaG92ZXI6dGV4dC1ob3ZlciBhY3RpdmU6dGV4dC1oZWFkaW5nXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsaW5rIHRvIHRoZSBuZXdzIHBhZ2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIExhdGVzdCBOZXdzXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvZ2V0aW52b2x2ZWRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1oZWFkaW5nIGhvdmVyOnRleHQtaG92ZXIgYWN0aXZlOnRleHQtaGVhZGluZ1wiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibGluayB0byB0aGUgZ2V0IGludm9sdmVkIHBhZ2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEdldCBJbnZvbHZlZFxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBkZXNrdG9wIG1lbnUgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggZmxleC1yb3cgbGc6ZmxleC1jb2wgbGc6anVzdGlmeS1lbmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXgtMTAgc3BhY2UteS04IGxnOnNwYWNlLXktMCBsZzppdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgdy1mdWxsIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgei01MCBiZy1kYXJrZXJCZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBzcGFjZS14LTEwIHRleHQtM3hsIGZvbnQtc2FucyBwYi02XCI+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9haW1zXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWhlYWRpbmcgaG92ZXI6dGV4dC1ob3ZlciBhY3RpdmU6dGV4dC1oZWFkaW5nXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibGluayB0byB0aGUgYWltcyBwYWdlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE91ciBBaW1zXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPVwiL25ld3NcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtaGVhZGluZyBob3Zlcjp0ZXh0LWhvdmVyIGFjdGl2ZTp0ZXh0LWhlYWRpbmdcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsaW5rIHRvIHRoZSBuZXdzIHBhZ2VcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTGF0ZXN0IE5ld3NcbiAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9nZXRpbnZvbHZlZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1oZWFkaW5nIGhvdmVyOnRleHQtaG92ZXIgYWN0aXZlOnRleHQtaGVhZGluZ1wiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxpbmsgdG8gdGhlIGdldCBpbnZvbHZlZCBwYWdlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEdldCBJbnZvbHZlZFxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmsiLCJJbWFnZSIsIm1vdGlvbiIsIkhlYWRlciIsIm1lbnVPcGVuIiwic2V0TWVudU9wZW4iLCJ2YXJpYW50cyIsIm9wZW4iLCJvcGFjaXR5IiwieSIsImNsb3NlZCIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJhcmlhLWxhYmVsIiwic3BhbiIsImhyZWYiLCJzcmMiLCJhbHQiLCJmaWxsIiwic2l6ZXMiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImV4aXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header.tsx\n"));

/***/ })

});