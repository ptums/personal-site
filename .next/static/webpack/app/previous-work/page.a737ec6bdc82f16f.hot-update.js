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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n/**\n * \n * \n * const Description = styled.div`\n  background-color: ${(props) => props.theme.colors.darkGreenOpacity};\n  text-align: left;\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  opacity: 0;\n  transition: all 0.2s;\n * @returns \n */ const SingleProject = (param)=>{\n    let { slug , video , label , stack  } = param;\n    _s();\n    const [showDescription, setShowDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return(//     margin: 24px 32px;\n    // width: 420px;\n    // max-width: 100%;\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative rounded mb-12 max-w-full lg:my-6 lg:mx-8 bg-white shadow flex flex-col items-center justify-center\",\n            style: {\n                width: 420,\n                height: 210\n            },\n            onMouseEnter: ()=>setShowDescription(true),\n            onMouseLeave: ()=>setShowDescription(false),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: slug,\n                target: \"_blank\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        dangerouslySetInnerHTML: {\n                            __html: '\\n            <video  style=\"max-width:100%\" class=\"graphic-container mobile-video\" autoplay = \"true\" muted = \"true\" playsinline = \"true\" loop = \"true\" >\\n              <source src='.concat(video, ' type=\"video/mp4\" />\\n            </video>\\n          ')\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/SingleProject.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        initial: false,\n                        animate: showDescription ? {\n                            height: 75\n                        } : {\n                            height: 0\n                        },\n                        className: \"bg-emerald-800 bg-opacity-75 absolute bottom-0 w-full min-h-min text-white text-left\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-base mx-2 mt-1 text-white text-white font-semibold\",\n                                children: label\n                            }, void 0, false, {\n                                fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/SingleProject.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-base mx-2 mb-2 text-white text-white font-semibold w-full\",\n                                children: [\n                                    \"Tech Stack:\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-sm text-white inline font-normal\",\n                                        children: stack.map((s, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                                children: [\n                                                    s,\n                                                    index !== stack.length - 1 ? \", \" : \"\"\n                                                ]\n                                            }, s, true, {\n                                                fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/SingleProject.tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 19\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/SingleProject.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/SingleProject.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/SingleProject.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/SingleProject.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/SingleProject.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false));\n};\n_s(SingleProject, \"DFzql2HwpOP7ymR7ubqygTxctnU=\");\n_c = SingleProject;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleProject);\nvar _c;\n$RefreshReg$(_c, \"SingleProject\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9TaW5nbGVQcm9qZWN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzJDO0FBQ0o7QUFPdkM7Ozs7Ozs7Ozs7OztDQVlDLEdBQ0QsTUFBTUcsZ0JBQWdCLFNBQTRDO1FBQTNDLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLE1BQUssRUFBVzs7SUFDM0QsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHVCwrQ0FBUUEsQ0FBVSxLQUFLO0lBQ3JFLE9BQ0UseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixtQkFBbUI7a0JBQ25CO2tCQUNFLDRFQUFDVTtZQUNDQyxXQUFVO1lBQ1ZDLE9BQU87Z0JBQUVDLE9BQU87Z0JBQUtDLFFBQVE7WUFBSTtZQUNqQ0MsY0FBYyxJQUFNTixtQkFBbUIsSUFBSTtZQUMzQ08sY0FBYyxJQUFNUCxtQkFBbUIsS0FBSztzQkFFNUMsNEVBQUNRO2dCQUFFQyxNQUFNZDtnQkFBTWUsUUFBTzs7a0NBQ3BCLDhEQUFDVDt3QkFDQ1UseUJBQXlCOzRCQUN2QkMsUUFBUSx3TEFFWSxPQUFOaEIsT0FBTTt3QkFHdEI7Ozs7OztrQ0FFRiw4REFBQ0gscURBQVU7d0JBQ1RvQixTQUFTLEtBQUs7d0JBQ2RDLFNBQVNmLGtCQUFrQjs0QkFBRU0sUUFBUTt3QkFBRyxJQUFJOzRCQUFFQSxRQUFRO3dCQUFFLENBQUM7d0JBQ3pESCxXQUFVOzswQ0FFViw4REFBQ2E7Z0NBQUViLFdBQVU7MENBQ1ZMOzs7Ozs7MENBRUgsOERBQUNrQjtnQ0FBRWIsV0FBVTs7b0NBQWlFO29DQUNoRTtrREFDWiw4REFBQ2M7d0NBQUtkLFdBQVU7a0RBQ2JKLE1BQU1tQixHQUFHLENBQUMsQ0FBQ0MsR0FBV0Msc0JBQ3JCLDhEQUFDM0IsMkNBQVFBOztvREFDTjBCO29EQUNBQyxVQUFVckIsTUFBTXNCLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBRTs7K0NBRjFCRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CakM7R0F0RE14QjtLQUFBQTtBQXdETiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpbmdsZVByb2plY3QudHN4PzY5NTEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL3R5cGVzL1Byb2plY3RcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcHJvamVjdDogUHJvamVjdDtcbn1cblxuLyoqXG4gKiBcbiAqIFxuICogY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmRhcmtHcmVlbk9wYWNpdHl9O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gKiBAcmV0dXJucyBcbiAqL1xuY29uc3QgU2luZ2xlUHJvamVjdCA9ICh7IHNsdWcsIHZpZGVvLCBsYWJlbCwgc3RhY2sgfTogUHJvamVjdCkgPT4ge1xuICBjb25zdCBbc2hvd0Rlc2NyaXB0aW9uLCBzZXRTaG93RGVzY3JpcHRpb25dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIC8vICAgICBtYXJnaW46IDI0cHggMzJweDtcbiAgICAvLyB3aWR0aDogNDIwcHg7XG4gICAgLy8gbWF4LXdpZHRoOiAxMDAlO1xuICAgIDw+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWRcdG1iLTEyIG1heC13LWZ1bGwgbGc6bXktNiBsZzpteC04IGJnLXdoaXRlIHNoYWRvdyBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiA0MjAsIGhlaWdodDogMjEwIH19XG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2hvd0Rlc2NyaXB0aW9uKHRydWUpfVxuICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNob3dEZXNjcmlwdGlvbihmYWxzZSl9XG4gICAgICA+XG4gICAgICAgIDxhIGhyZWY9e3NsdWd9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogYFxuICAgICAgICAgICAgPHZpZGVvICBzdHlsZT1cIm1heC13aWR0aDoxMDAlXCIgY2xhc3M9XCJncmFwaGljLWNvbnRhaW5lciBtb2JpbGUtdmlkZW9cIiBhdXRvcGxheSA9IFwidHJ1ZVwiIG11dGVkID0gXCJ0cnVlXCIgcGxheXNpbmxpbmUgPSBcInRydWVcIiBsb29wID0gXCJ0cnVlXCIgPlxuICAgICAgICAgICAgICA8c291cmNlIHNyYz0ke3ZpZGVvfSB0eXBlPVwidmlkZW8vbXA0XCIgLz5cbiAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgYCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgaW5pdGlhbD17ZmFsc2V9XG4gICAgICAgICAgICBhbmltYXRlPXtzaG93RGVzY3JpcHRpb24gPyB7IGhlaWdodDogNzUgfSA6IHsgaGVpZ2h0OiAwIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1lbWVyYWxkLTgwMCBiZy1vcGFjaXR5LTc1IGFic29sdXRlIGJvdHRvbS0wIHctZnVsbCBtaW4taC1taW4gdGV4dC13aGl0ZSB0ZXh0LWxlZnRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBteC0yIG10LTEgdGV4dC13aGl0ZSB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIG14LTIgbWItMiB0ZXh0LXdoaXRlIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgVGVjaCBTdGFjazp7XCIgXCJ9XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBpbmxpbmUgZm9udC1ub3JtYWxcIj5cbiAgICAgICAgICAgICAgICB7c3RhY2subWFwKChzOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e3N9PlxuICAgICAgICAgICAgICAgICAgICB7c31cbiAgICAgICAgICAgICAgICAgICAge2luZGV4ICE9PSBzdGFjay5sZW5ndGggLSAxID8gXCIsIFwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgey8qIDxEZXNjcmlwdGlvbj5cbiAgICAgICAgICAgIDxUaXRsZT57bGFiZWx9PC9UaXRsZT5cbiAgICAgICAgICAgIDxTdGFjaz5cbiAgICAgICAgICAgICAgPHN0cm9uZz5TdGFjazogPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDxTdGFja0l0ZW0+e3N0YWNrLmpvaW4oXCIsIFwiKX08L1N0YWNrSXRlbT5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9EZXNjcmlwdGlvbj4gKi99XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUHJvamVjdDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZyYWdtZW50IiwibW90aW9uIiwiU2luZ2xlUHJvamVjdCIsInNsdWciLCJ2aWRlbyIsImxhYmVsIiwic3RhY2siLCJzaG93RGVzY3JpcHRpb24iLCJzZXRTaG93RGVzY3JpcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImluaXRpYWwiLCJhbmltYXRlIiwicCIsInNwYW4iLCJtYXAiLCJzIiwiaW5kZXgiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/SingleProject.tsx\n"));

/***/ })

});