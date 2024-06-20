"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/getinvolved",{

/***/ "./components/form.tsx":
/*!*****************************!*\
  !*** ./components/form.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GetInvolved; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction GetInvolved() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        fname: \"\",\n        lname: \"\",\n        email: \"\",\n        phone: \"\",\n        message: \"\"\n    });\n    const validateEmail = (email)=>{\n        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n        return emailRegex.test(email);\n    };\n    const validatePhone = (phone)=>{\n        const phoneRegex = /^(\\+44\\s?7\\d{3}|\\(?07\\d{3}\\)?)\\s?\\d{3}\\s?\\d{3}$/;\n        return phoneRegex.test(phone);\n    };\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        let hasErrors = false;\n        const errorMessages = {};\n        if (!validateEmail(formData.email)) {\n            errorMessages.email = \"Please enter a valid email address.\";\n            hasErrors = true;\n        }\n        if (!validatePhone(formData.phone)) {\n            errorMessages.phone = \"Please enter a valid phone number.\";\n            hasErrors = true;\n        }\n        if (hasErrors) {\n            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({\n                icon: \"error\",\n                title: \"Oops...\",\n                text: Object.values(errorMessages).join(\" \")\n            });\n            return;\n        }\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"https://api.airtable.com/v0/appJR1EiOHZwNV46t/tbl1lqA0QKonu7b8d\", {\n                records: [\n                    {\n                        fields: {\n                            fname: formData.fname,\n                            lname: formData.lname,\n                            email: formData.email,\n                            phone: formData.phone,\n                            message: formData.message\n                        }\n                    }\n                ]\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(/* unsupported import.meta.env.VITE_APP_TOKEN */ undefined.VITE_APP_TOKEN),\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (response.status === 200) {\n                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({\n                    icon: \"success\",\n                    title: \"Success\",\n                    text: \"Thanks for signing up. See you at the festival!\"\n                });\n                setFormData({\n                    fname: \"\",\n                    lname: \"\",\n                    email: \"\",\n                    phone: \"\",\n                    message: \"\"\n                });\n            }\n        } catch (error) {\n            console.error(\"Error submitting form:\", error);\n            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({\n                icon: \"error\",\n                title: \"Submission Failed\",\n                text: \"An error occurred while submitting the form. Please try again.\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: \"space-y-6 rounded-lg bg-white p-8 text-black shadow-lg font-body\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 gap-6 md:grid-cols-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"fname\",\n                        value: formData.fname,\n                        onChange: handleChange,\n                        placeholder: \"First Name\",\n                        className: \"rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-bg-darker\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/form.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"lname\",\n                        value: formData.lname,\n                        onChange: handleChange,\n                        placeholder: \"Last Name\",\n                        className: \"rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-bg-darker\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/form.tsx\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/form.tsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"email\",\n                name: \"email\",\n                value: formData.email,\n                onChange: handleChange,\n                placeholder: \"Email\",\n                className: \"w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-bg-darker\",\n                required: true\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/form.tsx\",\n                lineNumber: 141,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"tel\",\n                name: \"phone\",\n                value: formData.phone,\n                onChange: handleChange,\n                placeholder: \"Phone\",\n                className: \"w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-bg-darker\",\n                required: true\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/form.tsx\",\n                lineNumber: 150,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                name: \"message\",\n                value: formData.message,\n                onChange: handleChange,\n                placeholder: \"Message\",\n                className: \"w-full resize-none rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-bg-darker\",\n                rows: 4,\n                required: true\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/form.tsx\",\n                lineNumber: 159,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"w-full rounded-md bg-red-custom px-4 py-3 font-medium text-white shadow-md hover:bg-bg-darker focus:outline-none focus:ring-2 focus:ring-bg-darker focus:ring-opacity-50\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/form.tsx\",\n                lineNumber: 168,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/coding-2/Documents/projects/fare-free-london/components/form.tsx\",\n        lineNumber: 117,\n        columnNumber: 5\n    }, this);\n}\n_s(GetInvolved, \"8mubTMgcr+RmZqrwwuz6JutydbI=\");\n_c = GetInvolved;\nvar _c;\n$RefreshReg$(_c, \"GetInvolved\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLO2dCQUNMOUIsTUFBSztnQkFDTEMsT0FBT2YsU0FBU0ksS0FBSztnQkFDckJ5QyxVQUFVakM7Z0JBQ1ZrQyxhQUFZO2dCQUNaTCxXQUFVO2dCQUNWTSxRQUFROzs7Ozs7MEJBRVYsOERBQUNKO2dCQUNDQyxNQUFLO2dCQUNMOUIsTUFBSztnQkFDTEMsT0FBT2YsU0FBU0ssS0FBSztnQkFDckJ3QyxVQUFVakM7Z0JBQ1ZrQyxhQUFZO2dCQUNaTCxXQUFVO2dCQUNWTSxRQUFROzs7Ozs7MEJBRVYsOERBQUNDO2dCQUNDbEMsTUFBSztnQkFDTEMsT0FBT2YsU0FBU00sT0FBTztnQkFDdkJ1QyxVQUFVakM7Z0JBQ1ZrQyxhQUFZO2dCQUNaTCxXQUFVO2dCQUNWUSxNQUFNO2dCQUNORixRQUFROzs7Ozs7MEJBRVYsOERBQUNHO2dCQUNDTixNQUFLO2dCQUNMSCxXQUFVOzBCQUNYOzs7Ozs7Ozs7Ozs7QUFLUDtHQW5Ld0IxQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Zvcm0udHN4PzhlZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIENoYW5nZUV2ZW50LCBGb3JtRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xuXG5pbnRlcmZhY2UgRm9ybURhdGEge1xuICBmbmFtZTogc3RyaW5nO1xuICBsbmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBwaG9uZTogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdldEludm9sdmVkKCkge1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlPEZvcm1EYXRhPih7XG4gICAgZm5hbWU6IFwiXCIsXG4gICAgbG5hbWU6IFwiXCIsXG4gICAgZW1haWw6IFwiXCIsXG4gICAgcGhvbmU6IFwiXCIsXG4gICAgbWVzc2FnZTogXCJcIixcbiAgfSk7XG5cbiAgY29uc3QgdmFsaWRhdGVFbWFpbCA9IChlbWFpbDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgZW1haWxSZWdleCA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvO1xuICAgIHJldHVybiBlbWFpbFJlZ2V4LnRlc3QoZW1haWwpO1xuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRlUGhvbmUgPSAocGhvbmU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHBob25lUmVnZXggPVxuICAgICAgL14oXFwrNDRcXHM/N1xcZHszfXxcXCg/MDdcXGR7M31cXCk/KVxccz9cXGR7M31cXHM/XFxkezN9JC87XG4gICAgcmV0dXJuIHBob25lUmVnZXgudGVzdChwaG9uZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKFxuICAgIGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50PlxuICApID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAuLi5mb3JtRGF0YSxcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IEZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBoYXNFcnJvcnMgPSBmYWxzZTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbiAgICBpZiAoIXZhbGlkYXRlRW1haWwoZm9ybURhdGEuZW1haWwpKSB7XG4gICAgICBlcnJvck1lc3NhZ2VzLmVtYWlsID0gXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLlwiO1xuICAgICAgaGFzRXJyb3JzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIXZhbGlkYXRlUGhvbmUoZm9ybURhdGEucGhvbmUpKSB7XG4gICAgICBlcnJvck1lc3NhZ2VzLnBob25lID0gXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBwaG9uZSBudW1iZXIuXCI7XG4gICAgICBoYXNFcnJvcnMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChoYXNFcnJvcnMpIHtcbiAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIGljb246IFwiZXJyb3JcIixcbiAgICAgICAgdGl0bGU6IFwiT29wcy4uLlwiLFxuICAgICAgICB0ZXh0OiBPYmplY3QudmFsdWVzKGVycm9yTWVzc2FnZXMpLmpvaW4oXCIgXCIpLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgXCJodHRwczovL2FwaS5haXJ0YWJsZS5jb20vdjAvYXBwSlIxRWlPSFp3TlY0NnQvdGJsMWxxQTBRS29udTdiOGRcIixcbiAgICAgICAge1xuICAgICAgICAgIHJlY29yZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAgICAgZm5hbWU6IGZvcm1EYXRhLmZuYW1lLFxuICAgICAgICAgICAgICAgIGxuYW1lOiBmb3JtRGF0YS5sbmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbDogZm9ybURhdGEuZW1haWwsXG4gICAgICAgICAgICAgICAgcGhvbmU6IGZvcm1EYXRhLnBob25lLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGZvcm1EYXRhLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7aW1wb3J0Lm1ldGEuZW52LlZJVEVfQVBQX1RPS0VOfWAsXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICB0aXRsZTogXCJTdWNjZXNzXCIsXG4gICAgICAgICAgdGV4dDogXCJUaGFua3MgZm9yIHNpZ25pbmcgdXAuIFNlZSB5b3UgYXQgdGhlIGZlc3RpdmFsIVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICAgIGZuYW1lOiBcIlwiLFxuICAgICAgICAgIGxuYW1lOiBcIlwiLFxuICAgICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICAgIHBob25lOiBcIlwiLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiXCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc3VibWl0dGluZyBmb3JtOlwiLCBlcnJvcik7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICAgIHRpdGxlOiBcIlN1Ym1pc3Npb24gRmFpbGVkXCIsXG4gICAgICAgIHRleHQ6IFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgc3VibWl0dGluZyB0aGUgZm9ybS4gUGxlYXNlIHRyeSBhZ2Fpbi5cIixcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtXG4gICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgY2xhc3NOYW1lPVwic3BhY2UteS02IHJvdW5kZWQtbGcgYmctd2hpdGUgcC04IHRleHQtYmxhY2sgc2hhZG93LWxnIGZvbnQtYm9keVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC02IG1kOmdyaWQtY29scy0yXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwiZm5hbWVcIlxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5mbmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHB4LTQgcHktMyBzaGFkb3ctc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJnLWRhcmtlclwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJsbmFtZVwiXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmxuYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBweC00IHB5LTMgc2hhZG93LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1iZy1kYXJrZXJcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWx9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHB4LTQgcHktMyBzaGFkb3ctc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJnLWRhcmtlclwiXG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZWxcIlxuICAgICAgICBuYW1lPVwicGhvbmVcIlxuICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGhvbmV9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmVcIlxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHB4LTQgcHktMyBzaGFkb3ctc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJnLWRhcmtlclwiXG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAvPlxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLm1lc3NhZ2V9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByZXNpemUtbm9uZSByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcHgtNCBweS0zIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmctZGFya2VyXCJcbiAgICAgICAgcm93cz17NH1cbiAgICAgICAgcmVxdWlyZWRcbiAgICAgID48L3RleHRhcmVhPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbWQgYmctcmVkLWN1c3RvbSBweC00IHB5LTMgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBzaGFkb3ctbWQgaG92ZXI6YmctYmctZGFya2VyIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1iZy1kYXJrZXIgZm9jdXM6cmluZy1vcGFjaXR5LTUwXCJcbiAgICAgID5cbiAgICAgICAgU3VibWl0XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsIlN3YWwiLCJHZXRJbnZvbHZlZCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJmbmFtZSIsImxuYW1lIiwiZW1haWwiLCJwaG9uZSIsIm1lc3NhZ2UiLCJ2YWxpZGF0ZUVtYWlsIiwiZW1haWxSZWdleCIsInRlc3QiLCJ2YWxpZGF0ZVBob25lIiwicGhvbmVSZWdleCIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImhhc0Vycm9ycyIsImVycm9yTWVzc2FnZXMiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwidGV4dCIsIk9iamVjdCIsInZhbHVlcyIsImpvaW4iLCJyZXNwb25zZSIsInBvc3QiLCJyZWNvcmRzIiwiZmllbGRzIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJlbnYiLCJWSVRFX0FQUF9UT0tFTiIsInN0YXR1cyIsImVycm9yIiwiY29uc29sZSIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImRpdiIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInRleHRhcmVhIiwicm93cyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/form.tsx\n"));

/***/ })

});