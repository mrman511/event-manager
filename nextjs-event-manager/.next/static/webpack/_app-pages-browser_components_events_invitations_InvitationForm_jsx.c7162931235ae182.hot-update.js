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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InvitaionForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _InvitationsFormInputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InvitationsFormInputs */ \"(app-pages-browser)/./components/events/invitations/InvitationsFormInputs.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction InvitaionForm(param) {\n    let { submitForm, formData } = param;\n    _s();\n    const [numInvites, setNumInvites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const parsedInvitationsFormSections = [];\n    for(let i = 0; i < numInvites; i++){\n        parsedInvitationsFormSections.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InvitationsFormInputs__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, \"invite-form-key-\".concat(i), false, {\n            fileName: \"/Users/paulbodner/Documents/event-manager/nextjs-event-manager/components/events/invitations/InvitationForm.jsx\",\n            lineNumber: 12,\n            columnNumber: 40\n        }, this));\n    }\n    ;\n    function increaseInvites() {\n        setNumInvites(numInvites + 1);\n    }\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            id: \"invitationForm\",\n            method: \"POST\",\n            onSubmit: submitForm(e, formData.path),\n            children: [\n                parsedInvitationsFormSections,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    id: \"add-invitation-btn\",\n                    onClick: increaseInvites,\n                    children: \"Add Invitation\"\n                }, void 0, false, {\n                    fileName: \"/Users/paulbodner/Documents/event-manager/nextjs-event-manager/components/events/invitations/InvitationForm.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: [\n                        \"Send Invite\",\n                        parsedInvitationsFormSections.length > 1 ? \"s\" : \"\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/paulbodner/Documents/event-manager/nextjs-event-manager/components/events/invitations/InvitationForm.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/paulbodner/Documents/event-manager/nextjs-event-manager/components/events/invitations/InvitationForm.jsx\",\n            lineNumber: 21,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(InvitaionForm, \"vdrCqxZd0NPBoTeF+OTudXcFQ1o=\");\n_c = InvitaionForm;\nvar _c;\n$RefreshReg$(_c, \"InvitaionForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZXZlbnRzL2ludml0YXRpb25zL0ludml0YXRpb25Gb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRWlDO0FBQzBCO0FBRTVDLFNBQVNFLGNBQWMsS0FBd0I7UUFBeEIsRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUUsR0FBeEI7O0lBQ3BDLE1BQU0sQ0FBRUMsWUFBWUMsY0FBZSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNTyxnQ0FBZ0MsRUFBRTtJQUV4QyxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUgsWUFBWUcsSUFBSztRQUNuQ0QsOEJBQThCRSxJQUFJLGVBQUMsOERBQUNSLDhEQUFvQkEsTUFBTSxtQkFBcUIsT0FBRk87Ozs7O0lBQ25GOztJQUVBLFNBQVNFO1FBQ1BKLGNBQWNELGFBQWE7SUFDN0I7O0lBRUEscUJBQ0U7a0JBQ0EsNEVBQUNNO1lBQ0NDLElBQUc7WUFDSEMsUUFBTztZQUNQQyxVQUFXWCxXQUFXWSxHQUFHWCxTQUFTWSxJQUFJOztnQkFFcENUOzhCQUNGLDhEQUFDVTtvQkFBT0wsSUFBRztvQkFBcUJNLFNBQVVSOzhCQUFrQjs7Ozs7OzhCQUM1RCw4REFBQ087b0JBQU9FLE1BQUs7O3dCQUFTO3dCQUFhWiw4QkFBOEJhLE1BQU0sR0FBQyxJQUFJLE1BQU07Ozs7Ozs7Ozs7Ozs7O0FBSXhGO0dBMUJ3QmxCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZXZlbnRzL2ludml0YXRpb25zL0ludml0YXRpb25Gb3JtLmpzeD84MTZlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEludml0YXRpb25Gb3JtSW5wdXRzIGZyb20gXCIuL0ludml0YXRpb25zRm9ybUlucHV0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnZpdGFpb25Gb3JtKHsgc3VibWl0Rm9ybSwgZm9ybURhdGEgfSl7XG4gIGNvbnN0IFsgbnVtSW52aXRlcywgc2V0TnVtSW52aXRlcyBdID0gdXNlU3RhdGUoMSk7XG5cbiAgY29uc3QgcGFyc2VkSW52aXRhdGlvbnNGb3JtU2VjdGlvbnMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUludml0ZXM7IGkrKyApe1xuICAgIHBhcnNlZEludml0YXRpb25zRm9ybVNlY3Rpb25zLnB1c2goPEludml0YXRpb25Gb3JtSW5wdXRzIGtleT17YGludml0ZS1mb3JtLWtleS0ke2l9YH0gLz4pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGluY3JlYXNlSW52aXRlcyAoKXtcbiAgICBzZXROdW1JbnZpdGVzKG51bUludml0ZXMgKyAxKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGZvcm0gXG4gICAgICBpZD1cImludml0YXRpb25Gb3JtXCIgXG4gICAgICBtZXRob2Q9XCJQT1NUXCJcbiAgICAgIG9uU3VibWl0PXsgc3VibWl0Rm9ybShlLCBmb3JtRGF0YS5wYXRoKSB9XG4gICAgICA+XG4gICAgICB7IHBhcnNlZEludml0YXRpb25zRm9ybVNlY3Rpb25zIH1cbiAgICAgIDxidXR0b24gaWQ9J2FkZC1pbnZpdGF0aW9uLWJ0bicgb25DbGljaz17IGluY3JlYXNlSW52aXRlcyB9PkFkZCBJbnZpdGF0aW9uPC9idXR0b24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZW5kIEludml0ZXsgcGFyc2VkSW52aXRhdGlvbnNGb3JtU2VjdGlvbnMubGVuZ3RoPjEgPyAncycgOiAnJyB9PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW52aXRhdGlvbkZvcm1JbnB1dHMiLCJJbnZpdGFpb25Gb3JtIiwic3VibWl0Rm9ybSIsImZvcm1EYXRhIiwibnVtSW52aXRlcyIsInNldE51bUludml0ZXMiLCJwYXJzZWRJbnZpdGF0aW9uc0Zvcm1TZWN0aW9ucyIsImkiLCJwdXNoIiwiaW5jcmVhc2VJbnZpdGVzIiwiZm9ybSIsImlkIiwibWV0aG9kIiwib25TdWJtaXQiLCJlIiwicGF0aCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0eXBlIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/events/invitations/InvitationForm.jsx\n"));

/***/ })

});