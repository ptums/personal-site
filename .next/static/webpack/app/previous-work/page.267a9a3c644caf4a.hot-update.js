"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/previous-work/page",{

/***/ "(app-client)/./components/SingleProject.tsx":
/*!**************************************!*\
  !*** ./components/SingleProject.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n/**\n * \n * \n * const Description = styled.div`\n  background-color: ${(props) => props.theme.colors.darkGreenOpacity};\n  text-align: left;\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  opacity: 0;\n  transition: all 0.2s;\n * @returns \n */ const SingleProject = (param)=>{\n    let { slug , video , label , stack  } = param;\n    _s();\n    const [showDescription, setShowDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return(//     margin: 24px 32px;\n    // width: 420px;\n    // max-width: 100%;\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative rounded mb-12 max-w-full lg:my-6 lg:mx-8 bg-white shadow flex flex-col items-center justify-center\",\n            style: {\n                width: 420,\n                height: 210\n            },\n            onMouseEnter: ()=>setShowDescription(true),\n            onMouseLeave: ()=>setShowDescription(false),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: slug,\n                target: \"_blank\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        dangerouslySetInnerHTML: {\n                            __html: '\\n            <video  style=\"max-width:100%\" class=\"graphic-container mobile-video\" autoplay = \"true\" muted = \"true\" playsinline = \"true\" loop = \"true\" >\\n              <source src='.concat(video, ' type=\"video/mp4\" />\\n            </video>\\n          ')\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/SingleProject.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        initial: false,\n                        animate: showDescription ? {\n                            height: 75\n                        } : {\n                            height: 0\n                        },\n                        className: \"bg-emerald-800 bg-opacity-75 absolute bottom-0 w-full min-h-min text-white text-left\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-base mx-2 mt-1 text-white text-white font-semibold\",\n                                children: label\n                            }, void 0, false, {\n                                fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/SingleProject.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-base mx-2 mb-2 text-white text-white font-semibold\",\n                                children: \"Stack:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/SingleProject.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-sm\",\n                                children: stack.join(\", \")\n                            }, void 0, false, {\n                                fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/SingleProject.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/SingleProject.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/SingleProject.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/SingleProject.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false));\n};\n_s(SingleProject, \"DFzql2HwpOP7ymR7ubqygTxctnU=\");\n_c = SingleProject;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleProject);\nvar _c;\n$RefreshReg$(_c, \"SingleProject\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9TaW5nbGVQcm9qZWN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ2lDO0FBQ007QUFPdkM7Ozs7Ozs7Ozs7OztDQVlDLEdBQ0QsTUFBTUUsZ0JBQWdCLFNBQTRDO1FBQTNDLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLE1BQUssRUFBVzs7SUFDM0QsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHUiwrQ0FBUUEsQ0FBVSxLQUFLO0lBQ3JFLE9BQ0UseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixtQkFBbUI7a0JBQ25CO2tCQUNFLDRFQUFDUztZQUNDQyxXQUFVO1lBQ1ZDLE9BQU87Z0JBQUVDLE9BQU87Z0JBQUtDLFFBQVE7WUFBSTtZQUNqQ0MsY0FBYyxJQUFNTixtQkFBbUIsSUFBSTtZQUMzQ08sY0FBYyxJQUFNUCxtQkFBbUIsS0FBSztzQkFFNUMsNEVBQUNRO2dCQUFFQyxNQUFNZDtnQkFBTWUsUUFBTzs7a0NBQ3BCLDhEQUFDVDt3QkFDQ1UseUJBQXlCOzRCQUN2QkMsUUFBUSx3TEFFWSxPQUFOaEIsT0FBTTt3QkFHdEI7Ozs7OztrQ0FFRiw4REFBQ0gscURBQVU7d0JBQ1RvQixTQUFTLEtBQUs7d0JBQ2RDLFNBQVNmLGtCQUFrQjs0QkFBRU0sUUFBUTt3QkFBRyxJQUFJOzRCQUFFQSxRQUFRO3dCQUFFLENBQUM7d0JBQ3pESCxXQUFVOzswQ0FFViw4REFBQ2E7Z0NBQUViLFdBQVU7MENBQ1ZMOzs7Ozs7MENBRUgsOERBQUNtQjtnQ0FBS2QsV0FBVTswQ0FBMEQ7Ozs7OzswQ0FHMUUsOERBQUNjO2dDQUFLZCxXQUFVOzBDQUFXSixNQUFNbUIsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhbEQ7R0EvQ012QjtLQUFBQTtBQWlETiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpbmdsZVByb2plY3QudHN4PzY5NTEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi4vdHlwZXMvUHJvamVjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwcm9qZWN0OiBQcm9qZWN0O1xufVxuXG4vKipcbiAqIFxuICogXG4gKiBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZGFya0dyZWVuT3BhY2l0eX07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAqIEByZXR1cm5zIFxuICovXG5jb25zdCBTaW5nbGVQcm9qZWN0ID0gKHsgc2x1ZywgdmlkZW8sIGxhYmVsLCBzdGFjayB9OiBQcm9qZWN0KSA9PiB7XG4gIGNvbnN0IFtzaG93RGVzY3JpcHRpb24sIHNldFNob3dEZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgLy8gICAgIG1hcmdpbjogMjRweCAzMnB4O1xuICAgIC8vIHdpZHRoOiA0MjBweDtcbiAgICAvLyBtYXgtd2lkdGg6IDEwMCU7XG4gICAgPD5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgcm91bmRlZFx0bWItMTIgbWF4LXctZnVsbCBsZzpteS02IGxnOm14LTggYmctd2hpdGUgc2hhZG93IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDQyMCwgaGVpZ2h0OiAyMTAgfX1cbiAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRTaG93RGVzY3JpcHRpb24odHJ1ZSl9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0U2hvd0Rlc2NyaXB0aW9uKGZhbHNlKX1cbiAgICAgID5cbiAgICAgICAgPGEgaHJlZj17c2x1Z30gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICA8dmlkZW8gIHN0eWxlPVwibWF4LXdpZHRoOjEwMCVcIiBjbGFzcz1cImdyYXBoaWMtY29udGFpbmVyIG1vYmlsZS12aWRlb1wiIGF1dG9wbGF5ID0gXCJ0cnVlXCIgbXV0ZWQgPSBcInRydWVcIiBwbGF5c2lubGluZSA9IFwidHJ1ZVwiIGxvb3AgPSBcInRydWVcIiA+XG4gICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPSR7dmlkZW99IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxuICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICBgLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXtmYWxzZX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3Nob3dEZXNjcmlwdGlvbiA/IHsgaGVpZ2h0OiA3NSB9IDogeyBoZWlnaHQ6IDAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWVtZXJhbGQtODAwIGJnLW9wYWNpdHktNzUgYWJzb2x1dGUgYm90dG9tLTAgdy1mdWxsIG1pbi1oLW1pbiB0ZXh0LXdoaXRlIHRleHQtbGVmdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIG14LTIgbXQtMSB0ZXh0LXdoaXRlIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgbXgtMiBtYi0yIHRleHQtd2hpdGUgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgIFN0YWNrOlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbVwiPntzdGFjay5qb2luKFwiLCBcIil9PC9zcGFuPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICB7LyogPERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgPFRpdGxlPntsYWJlbH08L1RpdGxlPlxuICAgICAgICAgICAgPFN0YWNrPlxuICAgICAgICAgICAgICA8c3Ryb25nPlN0YWNrOiA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgPFN0YWNrSXRlbT57c3RhY2suam9pbihcIiwgXCIpfTwvU3RhY2tJdGVtPlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L0Rlc2NyaXB0aW9uPiAqL31cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQcm9qZWN0O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwibW90aW9uIiwiU2luZ2xlUHJvamVjdCIsInNsdWciLCJ2aWRlbyIsImxhYmVsIiwic3RhY2siLCJzaG93RGVzY3JpcHRpb24iLCJzZXRTaG93RGVzY3JpcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImluaXRpYWwiLCJhbmltYXRlIiwicCIsInNwYW4iLCJqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/SingleProject.tsx\n"));

/***/ })

});