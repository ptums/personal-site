"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/Introduction.tsx":
/*!*************************************!*\
  !*** ./components/Introduction.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_components_Introduction_tsx_import_Playfair_Display_arguments_weight_800_display_swap_subsets_latin_variableName_playFairDisplay___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"components/Introduction.tsx\",\"import\":\"Playfair_Display\",\"arguments\":[{\"weight\":\"800\",\"display\":\"swap\",\"subsets\":[\"latin\"]}],\"variableName\":\"playFairDisplay\"} */ \"(app-client)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"components/Introduction.tsx\\\",\\\"import\\\":\\\"Playfair_Display\\\",\\\"arguments\\\":[{\\\"weight\\\":\\\"800\\\",\\\"display\\\":\\\"swap\\\",\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"playFairDisplay\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_components_Introduction_tsx_import_Playfair_Display_arguments_weight_800_display_swap_subsets_latin_variableName_playFairDisplay___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_components_Introduction_tsx_import_Playfair_Display_arguments_weight_800_display_swap_subsets_latin_variableName_playFairDisplay___WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constants */ \"(app-client)/./utils/constants.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst PHRASES = [\n    \"Lead Web Developer\",\n    \"Senior Front End Engineer\",\n    \"Software Educator\"\n];\nconst TextButtons = (param)=>/*#__PURE__*/ {\n    let { selectedBtn , setShowFull , setSelectedBtn  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"my-6 mx-auto flex flex-col sm:flex-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"\".concat(selectedBtn === \"Short Bio\" ? \"text-white bg-green-500\" : \"text-green-500 rounded borer-green-500\", \" p-2 text-base\"),\n                onClick: ()=>{\n                    setShowFull(false);\n                    setSelectedBtn(\"Short Bio\");\n                },\n                children: \"Short Bio\"\n            }, void 0, false, {\n                fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/Introduction.tsx\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"\".concat(selectedBtn === \"Long Bio\" ? \"text-white bg-green-500\" : \"text-green-500 rounded borer-green-500\", \" p-2 text-base\"),\n                onClick: ()=>{\n                    setShowFull(true);\n                    setSelectedBtn(\"Long Bio\");\n                },\n                children: \"Long Bio\"\n            }, void 0, false, {\n                fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/Introduction.tsx\",\n                lineNumber: 44,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/Introduction.tsx\",\n        lineNumber: 30,\n        columnNumber: 3\n    }, undefined);\n};\n_c = TextButtons;\nconst Introduction = ()=>{\n    _s();\n    const [phraseIndex, setPhraseIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [showFull, setShowFull] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedBtn, setSelectedBtn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Short Bio\");\n    const longIntro = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.INTRO.slice(1, _utils_constants__WEBPACK_IMPORTED_MODULE_2__.INTRO.length);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timeout = setInterval(()=>{\n            setPhraseIndex((prev)=>phraseIndex !== 2 ? prev + 1 : 0);\n        }, 3200);\n        return ()=>clearInterval(timeout);\n    }, [\n        phraseIndex\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (showFull) {\n            setSelectedBtn(\"Long Bio\");\n        }\n    }, [\n        showFull\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl text-green-900 tracking-wider mb-1 font-bold\",\n                style: {\n                    letterSpacing: 8\n                },\n                children: \"Peter F. Tumulty\"\n            }, void 0, false, {\n                fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/Introduction.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                initial: {\n                    opacity: 0\n                },\n                animate: {\n                    opacity: 1\n                },\n                exit: {\n                    opacity: 0\n                },\n                transition: {\n                    duration: 2\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"m-0 text-green-600 extrabold \".concat((next_font_google_target_css_path_components_Introduction_tsx_import_Playfair_Display_arguments_weight_800_display_swap_subsets_latin_variableName_playFairDisplay___WEBPACK_IMPORTED_MODULE_4___default().className)),\n                    style: {\n                        letterSpacing: 8,\n                        fontSize: \"1.5rem\"\n                    },\n                    children: PHRASES[phraseIndex]\n                }, void 0, false, {\n                    fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/Introduction.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, undefined)\n            }, PHRASES[phraseIndex], false, {\n                fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/Introduction.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-base my-6 mx-0 text-green-900\",\n                children: _utils_constants__WEBPACK_IMPORTED_MODULE_2__.INTRO[0]\n            }, void 0, false, {\n                fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/Introduction.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined),\n            showFull && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    longIntro.map((paragraph, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                            initial: {\n                                opacity: 0,\n                                height: 0\n                            },\n                            animate: {\n                                opacity: 1,\n                                height: \"auto\"\n                            },\n                            transition: {\n                                duration: 1.2,\n                                delay: index * 1.2\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-base my-6 mx-0 text-green-900\",\n                                children: paragraph\n                            }, paragraph, false, {\n                                fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/Introduction.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 15\n                            }, undefined)\n                        }, paragraph, false, {\n                            fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/Introduction.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 13\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        initial: {\n                            opacity: 0\n                        },\n                        animate: {\n                            opacity: 1\n                        },\n                        transition: {\n                            duration: 0.5,\n                            delay: longIntro.length + 0.3 * 1.2\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextButtons, {\n                            selectedBtn: selectedBtn,\n                            setShowFull: setShowFull,\n                            setSelectedBtn: setSelectedBtn\n                        }, void 0, false, {\n                            fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/Introduction.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/Introduction.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true),\n            !showFull && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                initial: {\n                    opacity: 0\n                },\n                animate: {\n                    opacity: 1\n                },\n                transition: {\n                    duration: 0.5,\n                    delay: 0\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextButtons, {\n                    selectedBtn: selectedBtn,\n                    setShowFull: setShowFull,\n                    setSelectedBtn: setSelectedBtn\n                }, void 0, false, {\n                    fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/Introduction.tsx\",\n                    lineNumber: 136,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/petertumulty/Sites/tumulty.me-next-13/components/Introduction.tsx\",\n                lineNumber: 131,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Introduction, \"3oxLE3yIY678yeVn7B291Y4N6/8=\");\n_c1 = Introduction;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Introduction);\nvar _c, _c1;\n$RefreshReg$(_c, \"TextButtons\");\n$RefreshReg$(_c1, \"Introduction\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9JbnRyb2R1Y3Rpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFNTUE7QUFMaUM7QUFFWTtBQUNSO0FBUTNDLE1BQU1NLFVBQVU7SUFDZDtJQUNBO0lBQ0E7Q0FDRDtBQVFELE1BQU1DLGNBQWMsdUJBS2xCO1FBTG1CLEVBQ25CQyxZQUFXLEVBQ1hDLFlBQVcsRUFDWEMsZUFBYyxFQUNHO1dBQ2pCLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQ0NELFdBQVcsR0FJVixPQUhDSixnQkFBZ0IsY0FDWiw0QkFDQSx3Q0FBd0MsRUFDN0M7Z0JBQ0RNLFNBQVMsSUFBTTtvQkFDYkwsWUFBWSxLQUFLO29CQUNqQkMsZUFBZTtnQkFDakI7MEJBQ0Q7Ozs7OzswQkFHRCw4REFBQ0c7Z0JBQ0NELFdBQVcsR0FJVixPQUhDSixnQkFBZ0IsYUFDWiw0QkFDQSx3Q0FBd0MsRUFDN0M7Z0JBQ0RNLFNBQVMsSUFBTTtvQkFDYkwsWUFBWSxJQUFJO29CQUNoQkMsZUFBZTtnQkFDakI7MEJBQ0Q7Ozs7Ozs7Ozs7OztBQUdFO0tBaENESDtBQWtDTixNQUFNUSxlQUFlLElBQU07O0lBQ3pCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHYiwrQ0FBUUEsQ0FBUztJQUN2RCxNQUFNLENBQUNjLFVBQVVULFlBQVksR0FBR0wsK0NBQVFBLENBQVUsS0FBSztJQUN2RCxNQUFNLENBQUNJLGFBQWFFLGVBQWUsR0FBR04sK0NBQVFBLENBQVM7SUFDdkQsTUFBTWUsWUFBWWQseURBQVcsQ0FBQyxHQUFHQSwwREFBWTtJQUU3Q0YsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1tQixVQUFVQyxZQUFZLElBQU07WUFDaENOLGVBQWUsQ0FBQ08sT0FBVVIsZ0JBQWdCLElBQUlRLE9BQU8sSUFBSSxDQUFDO1FBQzVELEdBQUc7UUFFSCxPQUFPLElBQU1DLGNBQWNIO0lBQzdCLEdBQUc7UUFBQ047S0FBWTtJQUVoQmIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUllLFVBQVU7WUFDWlIsZUFBZTtRQUNqQixDQUFDO0lBQ0gsR0FBRztRQUFDUTtLQUFTO0lBRWIscUJBQ0U7OzBCQUNFLDhEQUFDUTtnQkFDQ2QsV0FBVTtnQkFDVmUsT0FBTztvQkFBRUMsZUFBZTtnQkFBRTswQkFDM0I7Ozs7OzswQkFHRCw4REFBQzNCLHFEQUFVO2dCQUVUNEIsU0FBUztvQkFBRUMsU0FBUztnQkFBRTtnQkFDdEJDLFNBQVM7b0JBQUVELFNBQVM7Z0JBQUU7Z0JBQ3RCRSxNQUFNO29CQUFFRixTQUFTO2dCQUFFO2dCQUNuQkcsWUFBWTtvQkFBRUMsVUFBVTtnQkFBRTswQkFFMUIsNEVBQUNDO29CQUNDdkIsV0FBVyxnQ0FBMEQsT0FBMUJaLHFOQUF5QjtvQkFDcEUyQixPQUFPO3dCQUFFQyxlQUFlO3dCQUFHUSxVQUFVO29CQUFTOzhCQUU3QzlCLE9BQU8sQ0FBQ1UsWUFBWTs7Ozs7O2VBVmxCVixPQUFPLENBQUNVLFlBQVk7Ozs7OzBCQWMzQiw4REFBQ21CO2dCQUFFdkIsV0FBVTswQkFBc0NQLHNEQUFROzs7Ozs7WUFDMURhLDBCQUNDOztvQkFDR0MsVUFBVWtCLEdBQUcsQ0FBQyxDQUFDQyxXQUFtQkMsc0JBQ2pDLDhEQUFDdEMscURBQVU7NEJBQ1Q0QixTQUFTO2dDQUFFQyxTQUFTO2dDQUFHVSxRQUFROzRCQUFFOzRCQUNqQ1QsU0FBUztnQ0FBRUQsU0FBUztnQ0FBR1UsUUFBUTs0QkFBTzs0QkFDdENQLFlBQVk7Z0NBQUVDLFVBQVU7Z0NBQUtPLE9BQU9GLFFBQVE7NEJBQUk7c0NBR2hELDRFQUFDSjtnQ0FBRXZCLFdBQVU7MENBQ1YwQjsrQkFEb0RBOzs7OzsyQkFGbERBOzs7OztrQ0FPVCw4REFBQ3JDLHFEQUFVO3dCQUNUNEIsU0FBUzs0QkFBRUMsU0FBUzt3QkFBRTt3QkFDdEJDLFNBQVM7NEJBQUVELFNBQVM7d0JBQUU7d0JBQ3RCRyxZQUFZOzRCQUFFQyxVQUFVOzRCQUFLTyxPQUFPdEIsVUFBVUUsTUFBTSxHQUFHLE1BQU07d0JBQUk7a0NBRWpFLDRFQUFDZDs0QkFDQ0MsYUFBYUE7NEJBQ2JDLGFBQWFBOzRCQUNiQyxnQkFBZ0JBOzs7Ozs7Ozs7Ozs7O1lBS3ZCLENBQUNRLDBCQUNBLDhEQUFDakIscURBQVU7Z0JBQ1Q0QixTQUFTO29CQUFFQyxTQUFTO2dCQUFFO2dCQUN0QkMsU0FBUztvQkFBRUQsU0FBUztnQkFBRTtnQkFDdEJHLFlBQVk7b0JBQUVDLFVBQVU7b0JBQUtPLE9BQU87Z0JBQUU7MEJBRXRDLDRFQUFDbEM7b0JBQ0NDLGFBQWFBO29CQUNiQyxhQUFhQTtvQkFDYkMsZ0JBQWdCQTs7Ozs7Ozs7Ozs7OztBQU01QjtHQXRGTUs7TUFBQUE7QUF3Rk4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnRyb2R1Y3Rpb24udHN4PzZkYTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgUGxheWZhaXJfRGlzcGxheSB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSU5UUk8gfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5cbmNvbnN0IHBsYXlGYWlyRGlzcGxheSA9IFBsYXlmYWlyX0Rpc3BsYXkoe1xuICB3ZWlnaHQ6IFwiODAwXCIsXG4gIGRpc3BsYXk6IFwic3dhcFwiLFxuICBzdWJzZXRzOiBbXCJsYXRpblwiXSxcbn0pO1xuXG5jb25zdCBQSFJBU0VTID0gW1xuICBcIkxlYWQgV2ViIERldmVsb3BlclwiLFxuICBcIlNlbmlvciBGcm9udCBFbmQgRW5naW5lZXJcIixcbiAgXCJTb2Z0d2FyZSBFZHVjYXRvclwiLFxuXTtcblxuaW50ZXJmYWNlIFRleHRCdXR0b25zUHJvcHMge1xuICBzZWxlY3RlZEJ0bjogc3RyaW5nO1xuICBzZXRTaG93RnVsbDogKGU6IGJvb2xlYW4pID0+IHZvaWQ7XG4gIHNldFNlbGVjdGVkQnRuOiAoZTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5jb25zdCBUZXh0QnV0dG9ucyA9ICh7XG4gIHNlbGVjdGVkQnRuLFxuICBzZXRTaG93RnVsbCxcbiAgc2V0U2VsZWN0ZWRCdG4sXG59OiBUZXh0QnV0dG9uc1Byb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibXktNiBteC1hdXRvIGZsZXggZmxleC1jb2wgc206ZmxleC1yb3dcIj5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICBzZWxlY3RlZEJ0biA9PT0gXCJTaG9ydCBCaW9cIlxuICAgICAgICAgID8gXCJ0ZXh0LXdoaXRlIGJnLWdyZWVuLTUwMFwiXG4gICAgICAgICAgOiBcInRleHQtZ3JlZW4tNTAwIHJvdW5kZWQgYm9yZXItZ3JlZW4tNTAwXCJcbiAgICAgIH0gcC0yIHRleHQtYmFzZWB9XG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIHNldFNob3dGdWxsKGZhbHNlKTtcbiAgICAgICAgc2V0U2VsZWN0ZWRCdG4oXCJTaG9ydCBCaW9cIik7XG4gICAgICB9fVxuICAgID5cbiAgICAgIFNob3J0IEJpb1xuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgIHNlbGVjdGVkQnRuID09PSBcIkxvbmcgQmlvXCJcbiAgICAgICAgICA/IFwidGV4dC13aGl0ZSBiZy1ncmVlbi01MDBcIlxuICAgICAgICAgIDogXCJ0ZXh0LWdyZWVuLTUwMCByb3VuZGVkIGJvcmVyLWdyZWVuLTUwMFwiXG4gICAgICB9IHAtMiB0ZXh0LWJhc2VgfVxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBzZXRTaG93RnVsbCh0cnVlKTtcbiAgICAgICAgc2V0U2VsZWN0ZWRCdG4oXCJMb25nIEJpb1wiKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgTG9uZyBCaW9cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4pO1xuY29uc3QgSW50cm9kdWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBbcGhyYXNlSW5kZXgsIHNldFBocmFzZUluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFtzaG93RnVsbCwgc2V0U2hvd0Z1bGxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbc2VsZWN0ZWRCdG4sIHNldFNlbGVjdGVkQnRuXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJTaG9ydCBCaW9cIik7XG4gIGNvbnN0IGxvbmdJbnRybyA9IElOVFJPLnNsaWNlKDEsIElOVFJPLmxlbmd0aCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aW1lb3V0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0UGhyYXNlSW5kZXgoKHByZXYpID0+IChwaHJhc2VJbmRleCAhPT0gMiA/IHByZXYgKyAxIDogMCkpO1xuICAgIH0sIDMyMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZW91dCk7XG4gIH0sIFtwaHJhc2VJbmRleF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNob3dGdWxsKSB7XG4gICAgICBzZXRTZWxlY3RlZEJ0bihcIkxvbmcgQmlvXCIpO1xuICAgIH1cbiAgfSwgW3Nob3dGdWxsXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxXG4gICAgICAgIGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtZ3JlZW4tOTAwIHRyYWNraW5nLXdpZGVyIG1iLTEgZm9udC1ib2xkXCJcbiAgICAgICAgc3R5bGU9e3sgbGV0dGVyU3BhY2luZzogOCB9fVxuICAgICAgPlxuICAgICAgICBQZXRlciBGLiBUdW11bHR5XG4gICAgICA8L2gxPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAga2V5PXtQSFJBU0VTW3BocmFzZUluZGV4XX1cbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMiB9fVxuICAgICAgPlxuICAgICAgICA8cFxuICAgICAgICAgIGNsYXNzTmFtZT17YG0tMCB0ZXh0LWdyZWVuLTYwMCBleHRyYWJvbGQgJHtwbGF5RmFpckRpc3BsYXkuY2xhc3NOYW1lfWB9XG4gICAgICAgICAgc3R5bGU9e3sgbGV0dGVyU3BhY2luZzogOCwgZm9udFNpemU6IFwiMS41cmVtXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtQSFJBU0VTW3BocmFzZUluZGV4XX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgbXktNiBteC0wIHRleHQtZ3JlZW4tOTAwXCI+e0lOVFJPWzBdfTwvcD5cbiAgICAgIHtzaG93RnVsbCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge2xvbmdJbnRyby5tYXAoKHBhcmFncmFwaDogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIGhlaWdodDogMCB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIGhlaWdodDogXCJhdXRvXCIgfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMS4yLCBkZWxheTogaW5kZXggKiAxLjIgfX1cbiAgICAgICAgICAgICAga2V5PXtwYXJhZ3JhcGh9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBteS02IG14LTAgdGV4dC1ncmVlbi05MDBcIiBrZXk9e3BhcmFncmFwaH0+XG4gICAgICAgICAgICAgICAge3BhcmFncmFwaH1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41LCBkZWxheTogbG9uZ0ludHJvLmxlbmd0aCArIDAuMyAqIDEuMiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUZXh0QnV0dG9uc1xuICAgICAgICAgICAgICBzZWxlY3RlZEJ0bj17c2VsZWN0ZWRCdG59XG4gICAgICAgICAgICAgIHNldFNob3dGdWxsPXtzZXRTaG93RnVsbH1cbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRCdG49e3NldFNlbGVjdGVkQnRufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHshc2hvd0Z1bGwgJiYgKFxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgZGVsYXk6IDAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUZXh0QnV0dG9uc1xuICAgICAgICAgICAgc2VsZWN0ZWRCdG49e3NlbGVjdGVkQnRufVxuICAgICAgICAgICAgc2V0U2hvd0Z1bGw9e3NldFNob3dGdWxsfVxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRCdG49e3NldFNlbGVjdGVkQnRufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnRyb2R1Y3Rpb247XG4iXSwibmFtZXMiOlsicGxheUZhaXJEaXNwbGF5IiwibW90aW9uIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIklOVFJPIiwiUEhSQVNFUyIsIlRleHRCdXR0b25zIiwic2VsZWN0ZWRCdG4iLCJzZXRTaG93RnVsbCIsInNldFNlbGVjdGVkQnRuIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIkludHJvZHVjdGlvbiIsInBocmFzZUluZGV4Iiwic2V0UGhyYXNlSW5kZXgiLCJzaG93RnVsbCIsImxvbmdJbnRybyIsInNsaWNlIiwibGVuZ3RoIiwidGltZW91dCIsInNldEludGVydmFsIiwicHJldiIsImNsZWFySW50ZXJ2YWwiLCJoMSIsInN0eWxlIiwibGV0dGVyU3BhY2luZyIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJwIiwiZm9udFNpemUiLCJtYXAiLCJwYXJhZ3JhcGgiLCJpbmRleCIsImhlaWdodCIsImRlbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Introduction.tsx\n"));

/***/ })

});