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
exports.id = "pages/create-account";
exports.ids = ["pages/create-account"];
exports.modules = {

/***/ "./pages/create-account.tsx":
/*!**********************************!*\
  !*** ./pages/create-account.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Forms)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);\nreact_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Forms() {\n    const { register , handleSubmit , formState: { errors: errors1  } , setValue , setError , reset , resetField  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({\n        mode: \"onChange\"\n    });\n    const onValid = (data)=>{\n        console.log(\"i'm valid ^^\");\n        //setError(\"username\", {message:\"Taken\"});\n        //setError(\"errors\", {message : \"backend is problem\"});\n        reset();\n    };\n    const onInvalid = (errors)=>{\n        console.log(errors);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit(onValid, onInvalid),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ...register(\"userId\", {\n                    required: true,\n                    validate: {\n                        notDaum: (value)=>!value.includes(\"@daum.net\") || \"Daum is not allowed\"\n                    }\n                }),\n                type: \"email\",\n                placeholder: \"userId\"\n            }, void 0, false, {\n                fileName: \"C:\\\\twitter_2023\\\\pages\\\\create-account.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this),\n            errors1.userId?.message,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ...register(\"userName\", {\n                    required: true,\n                    minLength: {\n                        message: \"must loger than 4 chars \",\n                        value: 4\n                    }\n                }),\n                type: \"text\",\n                placeholder: \"userName\"\n            }, void 0, false, {\n                fileName: \"C:\\\\twitter_2023\\\\pages\\\\create-account.tsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this),\n            errors1.userId?.message,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"submit\",\n                value: \"Create Account\"\n            }, void 0, false, {\n                fileName: \"C:\\\\twitter_2023\\\\pages\\\\create-account.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, this),\n            errors1.errors?.message\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\twitter_2023\\\\pages\\\\create-account.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUtYWNjb3VudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDNEI7QUFVdkMsU0FBU0UsS0FBSyxHQUFFO0lBQzdCLE1BQU0sRUFBRUMsUUFBUSxHQUNkQyxZQUFZLEdBQ1pDLFNBQVMsRUFBRyxFQUFDQyxNQUFNLEVBQU5BLE9BQU0sR0FBQyxHQUNwQkMsUUFBUSxHQUNSQyxRQUFRLEdBQ1JDLEtBQUssR0FDTEMsVUFBVSxHQUNYLEdBQUdULHdEQUFPLENBQWE7UUFFdEJVLElBQUksRUFBRyxVQUFVO0tBRWxCLENBQUM7SUFHRixNQUFNQyxPQUFPLEdBQUcsQ0FBQ0MsSUFBZSxHQUFLO1FBQ25DQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1QiwwQ0FBMEM7UUFDMUMsdURBQXVEO1FBQ3ZETixLQUFLLEVBQUUsQ0FBQztLQUVUO0lBRUQsTUFBTU8sU0FBUyxHQUFHLENBQUNWLE1BQWtCLEdBQUs7UUFDdENRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxNQUFNLENBQUMsQ0FBQztLQUN2QjtJQUVELHFCQUNFLDhEQUFDVyxNQUFJO1FBQUNDLFFBQVEsRUFBRWQsWUFBWSxDQUFDUSxPQUFPLEVBQUVJLFNBQVMsQ0FBQzs7MEJBQzVDLDhEQUFDRyxPQUFLO2dCQUNMLEdBQUdoQixRQUFRLENBQUMsUUFBUSxFQUFFO29CQUNuQmlCLFFBQVEsRUFBRyxJQUFJO29CQUNmQyxRQUFRLEVBQUU7d0JBQ1JDLE9BQU8sRUFBRyxDQUFDQyxLQUFLLEdBQ2hCLENBQUNBLEtBQUssQ0FBQ0MsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFHLHFCQUFxQjtxQkFFdkQ7aUJBQ0YsQ0FBQztnQkFDRkMsSUFBSSxFQUFDLE9BQU87Z0JBQ1pDLFdBQVcsRUFBQyxRQUFROzs7OztvQkFDbEI7WUFDRHBCLE9BQU0sQ0FBQ3FCLE1BQU0sRUFBRUMsT0FBTzswQkFJdkIsOERBQUNULE9BQUs7Z0JBQ0wsR0FBR2hCLFFBQVEsQ0FBQyxVQUFVLEVBQUU7b0JBQ3JCaUIsUUFBUSxFQUFHLElBQUk7b0JBQ2ZTLFNBQVMsRUFBRTt3QkFDVEQsT0FBTyxFQUFHLDBCQUEwQjt3QkFDcENMLEtBQUssRUFBRyxDQUFDO3FCQUNaO2lCQUNGLENBQUM7Z0JBQ0ZFLElBQUksRUFBQyxNQUFNO2dCQUNYQyxXQUFXLEVBQUMsVUFBVTs7Ozs7b0JBQ3BCO1lBQ0RwQixPQUFNLENBQUNxQixNQUFNLEVBQUVDLE9BQU87MEJBRXZCLDhEQUFDVCxPQUFLO2dCQUFDTSxJQUFJLEVBQUMsUUFBUTtnQkFBQ0YsS0FBSyxFQUFDLGdCQUFnQjs7Ozs7b0JBQUc7WUFDN0NqQixPQUFNLENBQUNBLE1BQU0sRUFBRXNCLE9BQU87Ozs7OztZQUNwQixDQUVMO0NBRUwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vcGFnZXMvY3JlYXRlLWFjY291bnQudHN4PzQ1MGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGaWVsZEVycm9ycywgdXNlRm9ybX0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5cclxuXHJcbmludGVyZmFjZSBFbnJvbGxGb3JtIHtcclxuICB1c2VySWQgOiBzdHJpbmc7XHJcbiAgdXNlck5hbWUgOiBzdHJpbmc7XHJcbiAgZXJyb3JzPyA6IHN0cmluZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1zKCl7XHJcbiAgY29uc3QgeyByZWdpc3RlciwgXHJcbiAgICBoYW5kbGVTdWJtaXQsIFxyXG4gICAgZm9ybVN0YXRlIDoge2Vycm9yc30sXHJcbiAgICBzZXRWYWx1ZSxcclxuICAgIHNldEVycm9yLFxyXG4gICAgcmVzZXQsXHJcbiAgICByZXNldEZpZWxkXHJcbiAgfSA9IHVzZUZvcm08RW5yb2xsRm9ybT4oe1xyXG4gIFxyXG4gICAgbW9kZSA6IFwib25DaGFuZ2VcIiwvLyBvbkJsdXIsIG9uQ2hhbmdlLCBvblN1Ym1pdOuTseydmCDsmLXshZjsnbQg7J6I7J2MXHJcblxyXG4gIH0pO1xyXG5cclxuXHJcbiAgY29uc3Qgb25WYWxpZCA9IChkYXRhOkVucm9sbEZvcm0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaSdtIHZhbGlkIF5eXCIpO1xyXG4gICAgLy9zZXRFcnJvcihcInVzZXJuYW1lXCIsIHttZXNzYWdlOlwiVGFrZW5cIn0pO1xyXG4gICAgLy9zZXRFcnJvcihcImVycm9yc1wiLCB7bWVzc2FnZSA6IFwiYmFja2VuZCBpcyBwcm9ibGVtXCJ9KTtcclxuICAgIHJlc2V0KCk7XHJcbiAgIFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uSW52YWxpZCA9IChlcnJvcnM6RmllbGRFcnJvcnMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3JzKTtcclxuICB9OyAgXHJcblxyXG4gIHJldHVybihcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25WYWxpZCwgb25JbnZhbGlkKX0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgey4uLnJlZ2lzdGVyKFwidXNlcklkXCIsIHtcclxuICAgICAgICAgICAgcmVxdWlyZWQgOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWxpZGF0ZSA6e1xyXG4gICAgICAgICAgICAgIG5vdERhdW0gOiAodmFsdWUpID0+XHJcbiAgICAgICAgICAgICAgIXZhbHVlLmluY2x1ZGVzKFwiQGRhdW0ubmV0XCIpIHx8XCJEYXVtIGlzIG5vdCBhbGxvd2VkXCIsIC8vIGJvb2xlYW7rsJjtmZhcclxuICAgICAgICAgICAgICAvLyDsmZwg7IK87ZWtIOyXsOyCsOyekCDsk7Dri4jquYwg7JWI65CY7KeAP1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KX1cclxuICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwidXNlcklkXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHtlcnJvcnMudXNlcklkPy5tZXNzYWdlfVxyXG4gICAgICAgIFxyXG4gICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgIHsuLi5yZWdpc3RlcihcInVzZXJOYW1lXCIsIHtcclxuICAgICAgICAgICAgcmVxdWlyZWQgOiB0cnVlLFxyXG4gICAgICAgICAgICBtaW5MZW5ndGg6IHtcclxuICAgICAgICAgICAgICBtZXNzYWdlIDogXCJtdXN0IGxvZ2VyIHRoYW4gNCBjaGFycyBcIixcclxuICAgICAgICAgICAgICB2YWx1ZSA6IDQsXHJcbiAgICAgICAgICB9LCAvLyDsl5Drn6ztg4DsnoXrj4Qg67CU66GcIOyVjCDsiJgg7J6I7J2MXHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwidXNlck5hbWVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2Vycm9ycy51c2VySWQ/Lm1lc3NhZ2V9XHJcblxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJDcmVhdGUgQWNjb3VudFwiIC8+XHJcbiAgICAgICAge2Vycm9ycy5lcnJvcnM/Lm1lc3NhZ2V9XHJcbiAgICA8L2Zvcm0+XHJcblxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUZvcm0iLCJGb3JtcyIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwic2V0VmFsdWUiLCJzZXRFcnJvciIsInJlc2V0IiwicmVzZXRGaWVsZCIsIm1vZGUiLCJvblZhbGlkIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvbkludmFsaWQiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInJlcXVpcmVkIiwidmFsaWRhdGUiLCJub3REYXVtIiwidmFsdWUiLCJpbmNsdWRlcyIsInR5cGUiLCJwbGFjZWhvbGRlciIsInVzZXJJZCIsIm1lc3NhZ2UiLCJtaW5MZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/create-account.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/create-account.tsx"));
module.exports = __webpack_exports__;

})();