"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/schedule",{

/***/ "./pages/schedule.js":
/*!***************************!*\
  !*** ./pages/schedule.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Table */ \"./node_modules/react-bootstrap/esm/Table.js\");\n/* harmony import */ var _components_toolbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/toolbox */ \"./components/toolbox.js\");\n/* harmony import */ var _components_toolbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_toolbox__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _HardCodedData_Schedule_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HardCodedData/Schedule.json */ \"./HardCodedData/Schedule.json\");\n\n\n// import Date from \"../../components/date\";\n// import utilStyles from \"../../styles/utils.module.css\";\n\n\n// import day from \"../components/day\";\n\n//query to data\n// export async function getStaticProps({ params }) {\n// const postData = getData();\n// return {\n//     props: {\n//         postData,\n//     },\n// };\n// }\n// for(int i=0; i<7; i++){\n//     <day/>\n// }\nfunction Post(param) {\n    let { postData  } = param;\n    console.log(_HardCodedData_Schedule_json__WEBPACK_IMPORTED_MODULE_3__);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                striped: true,\n                bordered: true,\n                hover: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_toolbox__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ori\\\\Desktop\\\\MentorFrontend\\\\pages\\\\schedule.js\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ori\\\\Desktop\\\\MentorFrontend\\\\pages\\\\schedule.js\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ori\\\\Desktop\\\\MentorFrontend\\\\pages\\\\schedule.js\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ori\\\\Desktop\\\\MentorFrontend\\\\pages\\\\schedule.js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ori\\\\Desktop\\\\MentorFrontend\\\\pages\\\\schedule.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: utilStyles.headingXl,\n                        children: postData.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ori\\\\Desktop\\\\MentorFrontend\\\\pages\\\\schedule.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: utilStyles.lightText,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Date, {\n                            dateString: postData.date\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ori\\\\Desktop\\\\MentorFrontend\\\\pages\\\\schedule.js\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ori\\\\Desktop\\\\MentorFrontend\\\\pages\\\\schedule.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        dangerouslySetInnerHTML: {\n                            __html: postData.contentHtml\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ori\\\\Desktop\\\\MentorFrontend\\\\pages\\\\schedule.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ori\\\\Desktop\\\\MentorFrontend\\\\pages\\\\schedule.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ori\\\\Desktop\\\\MentorFrontend\\\\pages\\\\schedule.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zY2hlZHVsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUM3Qiw0Q0FBNEM7QUFDNUMsMERBQTBEO0FBQ2hCO0FBQ0U7QUFDNUMsdUNBQXVDO0FBQ1c7QUFDbEQsZUFBZTtBQUNmLHFEQUFxRDtBQUVyRCw4QkFBOEI7QUFDOUIsV0FBVztBQUNYLGVBQWU7QUFDZixvQkFBb0I7QUFDcEIsU0FBUztBQUNULEtBQUs7QUFDTCxJQUFJO0FBRUosMEJBQTBCO0FBQzFCLGFBQWE7QUFDYixJQUFJO0FBRVcsU0FBU0ksS0FBSyxLQUFZLEVBQUU7UUFBZCxFQUFFQyxTQUFRLEVBQUUsR0FBWjtJQUN6QkMsUUFBUUMsR0FBRyxDQUFDSix5REFBSUE7SUFDaEIscUJBQ0ksOERBQUNLOzswQkFDRyw4REFBQ1AsNkRBQUtBO2dCQUFDUSxPQUFPO2dCQUFDQyxRQUFRO2dCQUFDQyxLQUFLOzBCQUN6Qiw0RUFBQ0M7O3NDQUNHLDhEQUFDQztzQ0FDRyw0RUFBQ1gsNERBQU9BOzs7Ozs7Ozs7O3NDQUVaLDhEQUFDVzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJVCw4REFBQ0M7O2tDQUNHLDhEQUFDQzt3QkFBR0MsV0FBV0MsV0FBV0MsU0FBUztrQ0FBR2IsU0FBU2MsS0FBSzs7Ozs7O2tDQUNwRCw4REFBQ1g7d0JBQUlRLFdBQVdDLFdBQVdHLFNBQVM7a0NBQ2hDLDRFQUFDQzs0QkFBS0MsWUFBWWpCLFNBQVNrQixJQUFJOzs7Ozs7Ozs7OztrQ0FFbkMsOERBQUNmO3dCQUNHZ0IseUJBQXlCOzRCQUFFQyxRQUFRcEIsU0FBU3FCLFdBQVc7d0JBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs1RSxDQUFDO0tBeEJ1QnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NjaGVkdWxlLmpzP2RiNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG4vLyBpbXBvcnQgRGF0ZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9kYXRlXCI7XHJcbi8vIGltcG9ydCB1dGlsU3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9UYWJsZVwiO1xyXG5pbXBvcnQgVG9vbGJveCBmcm9tIFwiLi4vY29tcG9uZW50cy90b29sYm94XCI7XHJcbi8vIGltcG9ydCBkYXkgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGF5XCI7XHJcbmltcG9ydCBkYXRhIGZyb20gXCIuLi9IYXJkQ29kZWREYXRhL1NjaGVkdWxlLmpzb25cIjtcclxuLy9xdWVyeSB0byBkYXRhXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcblxyXG4vLyBjb25zdCBwb3N0RGF0YSA9IGdldERhdGEoKTtcclxuLy8gcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgICAgcG9zdERhdGEsXHJcbi8vICAgICB9LFxyXG4vLyB9O1xyXG4vLyB9XHJcblxyXG4vLyBmb3IoaW50IGk9MDsgaTw3OyBpKyspe1xyXG4vLyAgICAgPGRheS8+XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0RGF0YSB9KSB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXI+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbGJveCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPjwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L1RhYmxlPlxyXG5cclxuICAgICAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdYbH0+e3Bvc3REYXRhLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saWdodFRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXRlIGRhdGVTdHJpbmc9e3Bvc3REYXRhLmRhdGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3REYXRhLmNvbnRlbnRIdG1sIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiVGFibGUiLCJUb29sYm94IiwiZGF0YSIsIlBvc3QiLCJwb3N0RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJzdHJpcGVkIiwiYm9yZGVyZWQiLCJob3ZlciIsInRib2R5IiwidHIiLCJhcnRpY2xlIiwiaDEiLCJjbGFzc05hbWUiLCJ1dGlsU3R5bGVzIiwiaGVhZGluZ1hsIiwidGl0bGUiLCJsaWdodFRleHQiLCJEYXRlIiwiZGF0ZVN0cmluZyIsImRhdGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNvbnRlbnRIdG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/schedule.js\n"));

/***/ })

});