/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/events/page",{

/***/ "(app-pages-browser)/./components lazy recursive ^\\.\\/.*$":
/*!****************************************************!*\
  !*** ./components/ lazy ^\.\/.*$ namespace object ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./events/EventForm": [
		"(app-pages-browser)/./components/events/EventForm.jsx",
		"_app-pages-browser_components_events_EventForm_jsx"
	],
	"./events/EventForm.jsx": [
		"(app-pages-browser)/./components/events/EventForm.jsx",
		"_app-pages-browser_components_events_EventForm_jsx"
	],
	"./events/EventsList": [
		"(app-pages-browser)/./components/events/EventsList.jsx"
	],
	"./events/EventsList.jsx": [
		"(app-pages-browser)/./components/events/EventsList.jsx"
	],
	"./events/invitations/InvitationForm": [
		"(app-pages-browser)/./components/events/invitations/InvitationForm.jsx",
		"_app-pages-browser_components_events_invitations_InvitationForm_jsx"
	],
	"./events/invitations/InvitationForm.jsx": [
		"(app-pages-browser)/./components/events/invitations/InvitationForm.jsx",
		"_app-pages-browser_components_events_invitations_InvitationForm_jsx"
	],
	"./events/invitations/InvitationsFormInputs": [
		"(app-pages-browser)/./components/events/invitations/InvitationsFormInputs.jsx",
		"_app-pages-browser_components_events_invitations_InvitationsFormInputs_jsx"
	],
	"./events/invitations/InvitationsFormInputs.jsx": [
		"(app-pages-browser)/./components/events/invitations/InvitationsFormInputs.jsx",
		"_app-pages-browser_components_events_invitations_InvitationsFormInputs_jsx"
	],
	"./global/Confirmation": [
		"(app-pages-browser)/./components/global/Confirmation.jsx",
		"_app-pages-browser_components_global_Confirmation_jsx"
	],
	"./global/Confirmation.jsx": [
		"(app-pages-browser)/./components/global/Confirmation.jsx",
		"_app-pages-browser_components_global_Confirmation_jsx"
	],
	"./global/FormContainer": [
		"(app-pages-browser)/./components/global/FormContainer.jsx"
	],
	"./global/FormContainer.jsx": [
		"(app-pages-browser)/./components/global/FormContainer.jsx"
	],
	"./global/Header": [
		"(app-pages-browser)/./components/global/Header.jsx"
	],
	"./global/Header.jsx": [
		"(app-pages-browser)/./components/global/Header.jsx"
	],
	"./global/lists/NavListLine": [
		"(app-pages-browser)/./components/global/lists/NavListLine.jsx"
	],
	"./global/lists/NavListLine.jsx": [
		"(app-pages-browser)/./components/global/lists/NavListLine.jsx"
	],
	"./loader/SpinLoader": [
		"(app-pages-browser)/./components/loader/SpinLoader.jsx"
	],
	"./loader/SpinLoader.jsx": [
		"(app-pages-browser)/./components/loader/SpinLoader.jsx"
	],
	"./user/PasswordForm": [
		"(app-pages-browser)/./components/user/PasswordForm.jsx",
		"_app-pages-browser_components_user_PasswordForm_jsx"
	],
	"./user/PasswordForm.jsx": [
		"(app-pages-browser)/./components/user/PasswordForm.jsx",
		"_app-pages-browser_components_user_PasswordForm_jsx"
	],
	"./user/UserForm": [
		"(app-pages-browser)/./components/user/UserForm.jsx",
		"_app-pages-browser_components_user_UserForm_jsx"
	],
	"./user/UserForm.jsx": [
		"(app-pages-browser)/./components/user/UserForm.jsx",
		"_app-pages-browser_components_user_UserForm_jsx"
	],
	"./user/login/LoginForm": [
		"(app-pages-browser)/./components/user/login/LoginForm.jsx",
		"_app-pages-browser_components_user_login_LoginForm_jsx"
	],
	"./user/login/LoginForm.jsx": [
		"(app-pages-browser)/./components/user/login/LoginForm.jsx",
		"_app-pages-browser_components_user_login_LoginForm_jsx"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = "(app-pages-browser)/./components lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "(app-pages-browser)/./components/events/EventsList.jsx":
/*!******************************************!*\
  !*** ./components/events/EventsList.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EventsList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _global_lists_NavListLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/lists/NavListLine */ \"(app-pages-browser)/./components/global/lists/NavListLine.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction EventsList() {\n    _s();\n    const [hostedEvents, setHostedEvents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    function parseHostedEvent(hostedEvent) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_lists_NavListLine__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            data: item\n        }, item.id, false, {\n            fileName: \"/Users/paulbodner/Documents/event-manager/nextjs-event-manager/components/events/EventsList.jsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this);\n    }\n    async function getHostedEvents() {\n        let res = await fetch(\"/api/events\");\n        res = await res.json();\n        setHostedEvents(res);\n    }\n    ;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!hostedEvents) {\n            getHostedEvents();\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {}, void 0, false, {\n        fileName: \"/Users/paulbodner/Documents/event-manager/nextjs-event-manager/components/events/EventsList.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(EventsList, \"Dw6RZtA3eoUv4GcIa7V4gL8KKXY=\");\n_c = EventsList;\nvar _c;\n$RefreshReg$(_c, \"EventsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZXZlbnRzL0V2ZW50c0xpc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFMkM7QUFDVztBQUV2QyxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0wsK0NBQVFBO0lBRWhELFNBQVNNLGlCQUFpQkMsV0FBVztRQUNuQyxxQkFDRSw4REFBQ0wsaUVBQVdBO1lBRVZNLE1BQU9DO1dBRERBLEtBQUtDLEVBQUU7Ozs7O0lBSW5CO0lBRUEsZUFBZUM7UUFDYixJQUFJQyxNQUFNLE1BQU1DLE1BQU07UUFDdEJELE1BQU0sTUFBTUEsSUFBSUUsSUFBSTtRQUNwQlQsZ0JBQWdCTztJQUNsQjs7SUFFQVgsZ0RBQVNBLENBQUM7UUFDUixJQUFJLENBQUNHLGNBQWE7WUFDaEJPO1FBQ0Y7SUFDRjtJQUVBLHFCQUVFLDhEQUFDSTs7Ozs7QUFJTDtHQTlCd0JaO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZXZlbnRzL0V2ZW50c0xpc3QuanN4PzJkNWEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IE5hdkxpc3RMaW5lIGZyb20gXCIuLi9nbG9iYWwvbGlzdHMvTmF2TGlzdExpbmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnRzTGlzdCgpe1xuICBjb25zdCBbaG9zdGVkRXZlbnRzLCBzZXRIb3N0ZWRFdmVudHNdID0gdXNlU3RhdGUoKTtcblxuICBmdW5jdGlvbiBwYXJzZUhvc3RlZEV2ZW50KGhvc3RlZEV2ZW50KXtcbiAgICByZXR1cm4gKFxuICAgICAgPE5hdkxpc3RMaW5lIFxuICAgICAgICBrZXk9eyBpdGVtLmlkIH1cbiAgICAgICAgZGF0YT17IGl0ZW0gfVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRIb3N0ZWRFdmVudHMoKXtcbiAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvZXZlbnRzJylcbiAgICByZXMgPSBhd2FpdCByZXMuanNvbigpXG4gICAgc2V0SG9zdGVkRXZlbnRzKHJlcylcbiAgfTtcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBpZiAoIWhvc3RlZEV2ZW50cyl7XG4gICAgICBnZXRIb3N0ZWRFdmVudHMoKVxuICAgIH0gXG4gIH0pO1xuXG4gIHJldHVybiAoXG5cbiAgICA8dWw+XG5cbiAgICA8L3VsPlxuICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTmF2TGlzdExpbmUiLCJFdmVudHNMaXN0IiwiaG9zdGVkRXZlbnRzIiwic2V0SG9zdGVkRXZlbnRzIiwicGFyc2VIb3N0ZWRFdmVudCIsImhvc3RlZEV2ZW50IiwiZGF0YSIsIml0ZW0iLCJpZCIsImdldEhvc3RlZEV2ZW50cyIsInJlcyIsImZldGNoIiwianNvbiIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/events/EventsList.jsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/global/lists/NavListLine.jsx":
/*!*************************************************!*\
  !*** ./components/global/lists/NavListLine.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavListLine; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction NavListLine(param) {\n    let { styles, title, path } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n        href: path,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: title\n        }, void 0, false, {\n            fileName: \"/Users/paulbodner/Documents/event-manager/nextjs-event-manager/components/global/lists/NavListLine.jsx\",\n            lineNumber: 5,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/paulbodner/Documents/event-manager/nextjs-event-manager/components/global/lists/NavListLine.jsx\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, this);\n}\n_c = NavListLine;\nvar _c;\n$RefreshReg$(_c, \"NavListLine\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZ2xvYmFsL2xpc3RzL05hdkxpc3RMaW5lLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZSxTQUFTQSxZQUFZLEtBQXdCO1FBQXhCLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUcsR0FBeEI7SUFFbEMscUJBQ0UsOERBQUNDO1FBQUtDLE1BQU9GO2tCQUNYLDRFQUFDRztzQkFBS0o7Ozs7Ozs7Ozs7O0FBR1o7S0FQd0JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2xvYmFsL2xpc3RzL05hdkxpc3RMaW5lLmpzeD8wZjBmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkxpc3RMaW5lKHsgc3R5bGVzLCB0aXRsZSwgcGF0aCwgfSl7XG5cbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmPXsgcGF0aCB9PlxuICAgICAgPGxpPnsgdGl0bGUgfTwvbGk+XG4gICAgPC9MaW5rPlxuICApO1xufSJdLCJuYW1lcyI6WyJOYXZMaXN0TGluZSIsInN0eWxlcyIsInRpdGxlIiwicGF0aCIsIkxpbmsiLCJocmVmIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/global/lists/NavListLine.jsx\n"));

/***/ })

});