"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_components_events_invitations_InvitationForm_jsx",{

/***/ "(app-pages-browser)/./components/events/invitations/InvitationForm.jsx":
/*!**********************************************************!*\
  !*** ./components/events/invitations/InvitationForm.jsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InvitaionForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _InvitationsFormInputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InvitationsFormInputs */ \"(app-pages-browser)/./components/events/invitations/InvitationsFormInputs.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction InvitaionForm(param) {\n    let { submitForm, formData } = param;\n    _s();\n    const [numInvites, setNumInvites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const parsedInvitationsFormSections = [];\n    for(let i = 0; i < numInvites; i++){\n        parsedInvitationsFormSections.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InvitationsFormInputs__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, \"invite-form-key-\".concat(i), false, {\n            fileName: \"/Users/paulbodner/Documents/event-manager/nextjs-event-manager/components/events/invitations/InvitationForm.jsx\",\n            lineNumber: 12,\n            columnNumber: 40\n        }, this));\n    }\n    ;\n    function increaseInvites() {\n        setNumInvites(numInvites + 1);\n    }\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            id: \"invitationForm\",\n            method: \"POST\",\n            onSubmit: (e)=>submitForm(e, formData.path),\n            children: [\n                parsedInvitationsFormSections,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    id: \"add-invitation-btn\",\n                    onClick: increaseInvites,\n                    children: \"Add Invitation\"\n                }, void 0, false, {\n                    fileName: \"/Users/paulbodner/Documents/event-manager/nextjs-event-manager/components/events/invitations/InvitationForm.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: [\n                        \"Send Invite\",\n                        parsedInvitationsFormSections.length > 1 ? \"s\" : \"\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/paulbodner/Documents/event-manager/nextjs-event-manager/components/events/invitations/InvitationForm.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/paulbodner/Documents/event-manager/nextjs-event-manager/components/events/invitations/InvitationForm.jsx\",\n            lineNumber: 21,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(InvitaionForm, \"vdrCqxZd0NPBoTeF+OTudXcFQ1o=\");\n_c = InvitaionForm;\nvar _c;\n$RefreshReg$(_c, \"InvitaionForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZXZlbnRzL2ludml0YXRpb25zL0ludml0YXRpb25Gb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRWlDO0FBQzBCO0FBRTVDLFNBQVNFLGNBQWMsS0FBd0I7UUFBeEIsRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUUsR0FBeEI7O0lBQ3BDLE1BQU0sQ0FBRUMsWUFBWUMsY0FBZSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNTyxnQ0FBZ0MsRUFBRTtJQUV4QyxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUgsWUFBWUcsSUFBSztRQUNuQ0QsOEJBQThCRSxJQUFJLGVBQUMsOERBQUNSLDhEQUFvQkEsTUFBTSxtQkFBcUIsT0FBRk87Ozs7O0lBQ25GOztJQUVBLFNBQVNFO1FBQ1BKLGNBQWNELGFBQWE7SUFDN0I7O0lBRUEscUJBQ0U7a0JBQ0EsNEVBQUNNO1lBQ0NDLElBQUc7WUFDSEMsUUFBTztZQUNQQyxVQUFXLENBQUNDLElBQUlaLFdBQVdZLEdBQUdYLFNBQVNZLElBQUk7O2dCQUV6Q1Q7OEJBQ0YsOERBQUNVO29CQUFPTCxJQUFHO29CQUFxQk0sU0FBVVI7OEJBQWtCOzs7Ozs7OEJBQzVELDhEQUFDTztvQkFBT0UsTUFBSzs7d0JBQVM7d0JBQWFaLDhCQUE4QmEsTUFBTSxHQUFDLElBQUksTUFBTTs7Ozs7Ozs7Ozs7Ozs7QUFJeEY7R0ExQndCbEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvaW52aXRhdGlvbnMvSW52aXRhdGlvbkZvcm0uanN4PzgxNmUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW52aXRhdGlvbkZvcm1JbnB1dHMgZnJvbSBcIi4vSW52aXRhdGlvbnNGb3JtSW5wdXRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludml0YWlvbkZvcm0oeyBzdWJtaXRGb3JtLCBmb3JtRGF0YSB9KXtcbiAgY29uc3QgWyBudW1JbnZpdGVzLCBzZXROdW1JbnZpdGVzIF0gPSB1c2VTdGF0ZSgxKTtcblxuICBjb25zdCBwYXJzZWRJbnZpdGF0aW9uc0Zvcm1TZWN0aW9ucyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtSW52aXRlczsgaSsrICl7XG4gICAgcGFyc2VkSW52aXRhdGlvbnNGb3JtU2VjdGlvbnMucHVzaCg8SW52aXRhdGlvbkZvcm1JbnB1dHMga2V5PXtgaW52aXRlLWZvcm0ta2V5LSR7aX1gfSAvPik7XG4gIH07XG5cbiAgZnVuY3Rpb24gaW5jcmVhc2VJbnZpdGVzICgpe1xuICAgIHNldE51bUludml0ZXMobnVtSW52aXRlcyArIDEpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8Zm9ybSBcbiAgICAgIGlkPVwiaW52aXRhdGlvbkZvcm1cIiBcbiAgICAgIG1ldGhvZD1cIlBPU1RcIlxuICAgICAgb25TdWJtaXQ9eyAoZSk9PnN1Ym1pdEZvcm0oZSwgZm9ybURhdGEucGF0aCkgfVxuICAgICAgPlxuICAgICAgeyBwYXJzZWRJbnZpdGF0aW9uc0Zvcm1TZWN0aW9ucyB9XG4gICAgICA8YnV0dG9uIGlkPSdhZGQtaW52aXRhdGlvbi1idG4nIG9uQ2xpY2s9eyBpbmNyZWFzZUludml0ZXMgfT5BZGQgSW52aXRhdGlvbjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VuZCBJbnZpdGV7IHBhcnNlZEludml0YXRpb25zRm9ybVNlY3Rpb25zLmxlbmd0aD4xID8gJ3MnIDogJycgfTwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkludml0YXRpb25Gb3JtSW5wdXRzIiwiSW52aXRhaW9uRm9ybSIsInN1Ym1pdEZvcm0iLCJmb3JtRGF0YSIsIm51bUludml0ZXMiLCJzZXROdW1JbnZpdGVzIiwicGFyc2VkSW52aXRhdGlvbnNGb3JtU2VjdGlvbnMiLCJpIiwicHVzaCIsImluY3JlYXNlSW52aXRlcyIsImZvcm0iLCJpZCIsIm1ldGhvZCIsIm9uU3VibWl0IiwiZSIsInBhdGgiLCJidXR0b24iLCJvbkNsaWNrIiwidHlwZSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/events/invitations/InvitationForm.jsx\n"));

/***/ })

});