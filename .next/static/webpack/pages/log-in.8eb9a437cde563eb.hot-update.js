"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/log-in",{

/***/ "./pages/log-in.tsx":
/*!**************************!*\
  !*** ./pages/log-in.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/input */ \"./components/input.tsx\");\n/* harmony import */ var _lib_client_useMutation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/client/useMutation */ \"./lib/client/useMutation.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Enter = function() {\n    _s();\n    var ref = _slicedToArray((0,_lib_client_useMutation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/users/enter\"), 2), enter = ref[0], ref1 = ref[1], loading = ref1.loading, data = ref1.data, error = ref1.error;\n    var ref2 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)(), register = ref2.register, handleSubmit = ref2.handleSubmit, reset = ref2.reset;\n    var onValid = function(validForm) {\n        if (loading) return;\n        enter(validForm);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-16 px-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-3xl font-bold text-center\",\n                children: \"Enter to Carrot\"\n            }, void 0, false, {\n                fileName: \"C:\\\\twitter_2023\\\\pages\\\\log-in.tsx\",\n                lineNumber: 36,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-12\",\n                children: [\n                    \"if(!data?.ok)\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"text-sm text-gray-500 font-medium\",\n                                    children: \"Enter using:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\twitter_2023\\\\pages\\\\log-in.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\twitter_2023\\\\pages\\\\log-in.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: handleSubmit(onValid),\n                                className: \"flex flex-col mt-8 space-y-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        register: register(\"userId\", {\n                                            required: true\n                                        }),\n                                        name: \"userId\",\n                                        label: \"Email address\",\n                                        type: \"email\",\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\twitter_2023\\\\pages\\\\log-in.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        register: register(\"userName\", {\n                                            required: true\n                                        }),\n                                        name: \"userName\",\n                                        label: \"userName\",\n                                        type: \"text\",\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\twitter_2023\\\\pages\\\\log-in.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\twitter_2023\\\\pages\\\\log-in.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\twitter_2023\\\\pages\\\\log-in.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\twitter_2023\\\\pages\\\\log-in.tsx\",\n                lineNumber: 37,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\twitter_2023\\\\pages\\\\log-in.tsx\",\n        lineNumber: 35,\n        columnNumber: 1\n    }, _this);\n};\n_s(Enter, \"HVaY24CMpIl7PjMgmQg0X8pEDx0=\", false, function() {\n    return [\n        _lib_client_useMutation__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm\n    ];\n});\n_c = Enter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Enter);\nvar _c;\n$RefreshReg$(_c, \"Enter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2ctaW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUdnQjtBQUNGO0FBQ1k7O0FBWXBELElBQU1JLEtBQUssR0FBYSxXQUFNOztJQUU1QixJQUNBRCxHQUErQyxrQkFBL0NBLG1FQUFXLENBQWlCLGtCQUFrQixDQUFDLE1BRHhDRSxLQUFLLEdBQ1pGLEdBQStDLEdBRG5DLFNBQ1pBLEdBQStDLEtBRC9CRyxPQUFPLFFBQVBBLE9BQU8sRUFBRUMsSUFBSSxRQUFKQSxJQUFJLEVBQUVDLEtBQUssUUFBTEEsS0FBSztJQUVwQyxJQUEwQ1AsSUFBb0IsR0FBcEJBLHdEQUFPLEVBQWEsRUFBdERRLFFBQVEsR0FBMEJSLElBQW9CLENBQXREUSxRQUFRLEVBQUVDLFlBQVksR0FBWVQsSUFBb0IsQ0FBNUNTLFlBQVksRUFBRUMsS0FBSyxHQUFLVixJQUFvQixDQUE5QlUsS0FBSztJQUtyQyxJQUFNQyxPQUFPLEdBQUcsU0FBQ0MsU0FBb0IsRUFBSztRQUN4QyxJQUFJUCxPQUFPLEVBQUUsT0FBTztRQUNwQkQsS0FBSyxDQUFDUSxTQUFTLENBQUMsQ0FBQztLQUNsQjtJQUlELHFCQUNGLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxZQUFZOzswQkFDekIsOERBQUNDLElBQUU7Z0JBQUNELFNBQVMsRUFBQyxnQ0FBZ0M7MEJBQUMsaUJBQWU7Ozs7O3FCQUFLOzBCQUNqRSw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLE9BQU87O29CQUFDLGVBQ1I7a0NBQ1Q7OzBDQUNBLDhEQUFDRCxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsNEJBQTRCOzBDQUN6Qyw0RUFBQ0UsSUFBRTtvQ0FBQ0YsU0FBUyxFQUFDLG1DQUFtQzs4Q0FBQyxjQUVsRDs7Ozs7eUNBQUs7Ozs7O3FDQUNEOzBDQUNOLDhEQUFDRyxNQUFJO2dDQUNIQyxRQUFRLEVBQUVULFlBQVksQ0FBQ0UsT0FBTyxDQUFDO2dDQUMvQkcsU0FBUyxFQUFDLDhCQUE4Qjs7a0RBRXRDLDhEQUFDYix5REFBSzt3Q0FDSk8sUUFBUSxFQUFFQSxRQUFRLENBQUMsUUFBUSxFQUFFOzRDQUMzQlcsUUFBUSxFQUFFLElBQUk7eUNBQ2YsQ0FBQzt3Q0FDRkMsSUFBSSxFQUFDLFFBQVE7d0NBQ2JDLEtBQUssRUFBQyxlQUFlO3dDQUNyQkMsSUFBSSxFQUFDLE9BQU87d0NBQ1pILFFBQVE7Ozs7OzZDQUNSO2tEQUNGLDhEQUFDbEIseURBQUs7d0NBQ0pPLFFBQVEsRUFBRUEsUUFBUSxDQUFDLFVBQVUsRUFBRTs0Q0FDN0JXLFFBQVEsRUFBRSxJQUFJO3lDQUNmLENBQUM7d0NBQ0ZDLElBQUksRUFBQyxVQUFVO3dDQUNmQyxLQUFLLEVBQUMsVUFBVTt3Q0FDaEJDLElBQUksRUFBQyxNQUFNO3dDQUNYSCxRQUFROzs7Ozs2Q0FDUjtrREFDRiw4REFBQ0ksUUFBTTtrREFBQyxPQUFLOzs7Ozs2Q0FBUzs7Ozs7O3FDQUNuQjs7b0NBQ0o7Ozs7OztxQkFHSDs7Ozs7O2FBQ0osQ0FDRjtDQUNIO0dBekRLcEIsS0FBSzs7UUFHVEQsK0RBQVc7UUFDK0JGLG9EQUFPOzs7QUFKN0NHLEtBQUFBLEtBQUs7QUEwRFgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2ctaW4udHN4PzMwZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL2lucHV0XCI7XHJcbmltcG9ydCB1c2VNdXRhdGlvbiBmcm9tIFwiLi4vbGliL2NsaWVudC91c2VNdXRhdGlvblwiO1xyXG5cclxuaW50ZXJmYWNlIEVudGVyRm9ybSB7XHJcbiAgdXNlcklkOiBzdHJpbmc7XHJcbiAgdXNlck5hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBNdXRhdGlvblJlc3VsdCB7XHJcbiAgb2s6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IEVudGVyOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW2VudGVyLCB7IGxvYWRpbmcsIGRhdGEsIGVycm9yIH1dID1cclxuICB1c2VNdXRhdGlvbjxNdXRhdGlvblJlc3VsdD4oXCIvYXBpL3VzZXJzL2VudGVyXCIpO1xyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgcmVzZXQgfSA9IHVzZUZvcm08RW50ZXJGb3JtPigpO1xyXG5cclxuXHJcblxyXG5cclxuICBjb25zdCBvblZhbGlkID0gKHZhbGlkRm9ybTogRW50ZXJGb3JtKSA9PiB7XHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuO1xyXG4gICAgZW50ZXIodmFsaWRGb3JtKTtcclxuICB9O1xyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbjxkaXYgY2xhc3NOYW1lPVwibXQtMTYgcHgtNFwiPlxyXG4gIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1jZW50ZXJcIj5FbnRlciB0byBDYXJyb3Q8L2gzPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMlwiPlxyXG4gICAgICBpZighZGF0YT8ub2spe1xyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBmb250LW1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgIEVudGVyIHVzaW5nOlxyXG4gICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uVmFsaWQpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG10LTggc3BhY2UteS00XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3RlcihcInVzZXJJZFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlcklkXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyKFwidXNlck5hbWVcIiwge1xyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInVzZXJOYW1lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwidXNlck5hbWVcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b24+TG9naW48L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICB9XHJcbiAgIFxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRW50ZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRm9ybSIsIklucHV0IiwidXNlTXV0YXRpb24iLCJFbnRlciIsImVudGVyIiwibG9hZGluZyIsImRhdGEiLCJlcnJvciIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwicmVzZXQiLCJvblZhbGlkIiwidmFsaWRGb3JtIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJoNSIsImZvcm0iLCJvblN1Ym1pdCIsInJlcXVpcmVkIiwibmFtZSIsImxhYmVsIiwidHlwZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/log-in.tsx\n");

/***/ })

});