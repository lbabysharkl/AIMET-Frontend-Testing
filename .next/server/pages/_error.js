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
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\n\n__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ \"core-js/modules/es.object.set-prototype-of.js\");\n\n__webpack_require__(/*! core-js/modules/es.function.bind.js */ \"core-js/modules/es.function.bind.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ \"core-js/modules/es.object.get-prototype-of.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"core-js/modules/es.object.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ \"core-js/modules/es.reflect.construct.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.create.js */ \"core-js/modules/es.object.create.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.js */ \"core-js/modules/es.symbol.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"core-js/modules/es.symbol.description.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"core-js/modules/es.symbol.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"core-js/modules/es.array.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"core-js/modules/es.string.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"core-js/modules/web.dom-collections.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"core-js/modules/es.object.define-property.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.assign.js */ \"core-js/modules/es.object.assign.js\");\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n  enumerable: true,\n  get: function get() {\n    return Error;\n  }\n}));\n\nvar _interop_require_default = __webpack_require__(/*! @swc/helpers/_/_interop_require_default */ \"./node_modules/@swc/helpers/cjs/_interop_require_default.cjs\");\n\nvar _react = /*#__PURE__*/_interop_require_default._(__webpack_require__(/*! react */ \"react\"));\n\nvar _head = /*#__PURE__*/_interop_require_default._(__webpack_require__(/*! ../shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\"));\n\nvar statusCodes = {\n  400: \"Bad Request\",\n  404: \"This page could not be found\",\n  405: \"Method Not Allowed\",\n  500: \"Internal Server Error\"\n};\n\nfunction _getInitialProps(param) {\n  var res = param.res,\n      err = param.err;\n  var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;\n  return {\n    statusCode: statusCode\n  };\n}\n\nvar styles = {\n  error: {\n    // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52\n    fontFamily: 'system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"',\n    height: \"100vh\",\n    textAlign: \"center\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\",\n    justifyContent: \"center\"\n  },\n  desc: {\n    display: \"inline-block\",\n    textAlign: \"left\"\n  },\n  h1: {\n    display: \"inline-block\",\n    margin: \"0 20px 0 0\",\n    paddingRight: 23,\n    fontSize: 24,\n    fontWeight: 500,\n    verticalAlign: \"top\",\n    lineHeight: \"49px\"\n  },\n  h2: {\n    fontSize: 14,\n    fontWeight: 400,\n    lineHeight: \"49px\",\n    margin: 0\n  }\n};\n\nvar Error = /*#__PURE__*/function (_react$default$Compon) {\n  _inherits(Error, _react$default$Compon);\n\n  var _super = _createSuper(Error);\n\n  function Error() {\n    _classCallCheck(this, Error);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Error, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          statusCode = _this$props.statusCode,\n          _this$props$withDarkM = _this$props.withDarkMode,\n          withDarkMode = _this$props$withDarkM === void 0 ? true : _this$props$withDarkM;\n      var title = this.props.title || statusCodes[statusCode] || \"An unexpected error has occurred\";\n      return /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n        style: styles.error\n      }, /*#__PURE__*/_react[\"default\"].createElement(_head[\"default\"], null, /*#__PURE__*/_react[\"default\"].createElement(\"title\", null, statusCode ? statusCode + \": \" + title : \"Application error: a client-side exception has occurred\")), /*#__PURE__*/_react[\"default\"].createElement(\"div\", null, /*#__PURE__*/_react[\"default\"].createElement(\"style\", {\n        dangerouslySetInnerHTML: {\n          /* CSS minified from\n          body { margin: 0; color: #000; background: #fff; }\n          .next-error-h1 {\n            border-right: 1px solid rgba(0, 0, 0, .3);\n          }\n           ${\n            withDarkMode\n              ? `@media (prefers-color-scheme: dark) {\n            body { color: #fff; background: #000; }\n            .next-error-h1 {\n              border-right: 1px solid rgba(255, 255, 255, .3);\n            }\n          }`\n              : ''\n          }\n          */\n          __html: \"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}\" + (withDarkMode ? \"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}\" : \"\")\n        }\n      }), statusCode ? /*#__PURE__*/_react[\"default\"].createElement(\"h1\", {\n        className: \"next-error-h1\",\n        style: styles.h1\n      }, statusCode) : null, /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n        style: styles.desc\n      }, /*#__PURE__*/_react[\"default\"].createElement(\"h2\", {\n        style: styles.h2\n      }, this.props.title || statusCode ? title : /*#__PURE__*/_react[\"default\"].createElement(_react[\"default\"].Fragment, null, \"Application error: a client-side exception has occurred (see the browser console for more information)\"), \".\"))));\n    }\n  }]);\n\n  return Error;\n}(_react[\"default\"].Component);\n\n(function () {\n  Error.displayName = \"ErrorPage\";\n})();\n\n(function () {\n  Error.getInitialProps = _getInitialProps;\n})();\n\n(function () {\n  Error.origGetInitialProps = _getInitialProps;\n})();\n\nif ((typeof exports[\"default\"] === 'function' || _typeof(exports[\"default\"]) === 'object' && exports[\"default\"] !== null) && typeof exports[\"default\"].__esModule === 'undefined') {\n  Object.defineProperty(exports[\"default\"], '__esModule', {\n    value: true\n  });\n  Object.assign(exports[\"default\"], exports);\n  module.exports = exports[\"default\"];\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNiQSw4Q0FBNkM7RUFDekNHLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBSCwyQ0FBMEM7RUFDdENJLFVBQVUsRUFBRSxJQUQwQjtFQUV0Q0MsR0FBRyxFQUFFLGVBQVc7SUFDWixPQUFPQyxLQUFQO0VBQ0g7QUFKcUMsQ0FBMUM7O0FBTUEsSUFBTUMsd0JBQXdCLEdBQUdDLG1CQUFPLENBQUMsNkdBQUQsQ0FBeEM7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHLGFBQWNGLHdCQUF3QixDQUFDRyxDQUF6QixDQUEyQkYsbUJBQU8sQ0FBQyxvQkFBRCxDQUFsQyxDQUE3Qjs7QUFDQSxJQUFNRyxLQUFLLEdBQUcsYUFBY0osd0JBQXdCLENBQUNHLENBQXpCLENBQTJCRixtQkFBTyxDQUFDLHVFQUFELENBQWxDLENBQTVCOztBQUNBLElBQU1JLFdBQVcsR0FBRztFQUNoQixLQUFLLGFBRFc7RUFFaEIsS0FBSyw4QkFGVztFQUdoQixLQUFLLG9CQUhXO0VBSWhCLEtBQUs7QUFKVyxDQUFwQjs7QUFNQSxTQUFTQyxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7RUFDN0IsSUFBTUMsR0FBTixHQUFxQkQsS0FBckIsQ0FBTUMsR0FBTjtFQUFBLElBQVlDLEdBQVosR0FBcUJGLEtBQXJCLENBQVlFLEdBQVo7RUFDQSxJQUFNQyxVQUFVLEdBQUdGLEdBQUcsSUFBSUEsR0FBRyxDQUFDRSxVQUFYLEdBQXdCRixHQUFHLENBQUNFLFVBQTVCLEdBQXlDRCxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0MsVUFBUCxHQUFvQixHQUFuRjtFQUNBLE9BQU87SUFDSEEsVUFBVSxFQUFWQTtFQURHLENBQVA7QUFHSDs7QUFDRCxJQUFNQyxNQUFNLEdBQUc7RUFDWEMsS0FBSyxFQUFFO0lBQ0g7SUFD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RnpDLEVBRWdOLEdBRmhOLENBRm9CLENBdkI0TSxDQUY1TixDQUFyQjtJQThCSDs7OztFQWxDZW5DLE1BQU0sV0FBTixDQUFlb0MsUzs7QUFvQ25DLENBQUMsWUFBSTtFQUNEdkMsS0FBSyxDQUFDd0MsV0FBTixHQUFvQixXQUFwQjtBQUNILENBRkQ7O0FBR0EsQ0FBQyxZQUFJO0VBQ0R4QyxLQUFLLENBQUN5QyxlQUFOLEdBQXdCbEMsZ0JBQXhCO0FBQ0gsQ0FGRDs7QUFHQSxDQUFDLFlBQUk7RUFDRFAsS0FBSyxDQUFDMEMsbUJBQU4sR0FBNEJuQyxnQkFBNUI7QUFDSCxDQUZEOztBQUlBLElBQUksQ0FBQyxPQUFPWCxPQUFPLFdBQWQsS0FBMkIsVUFBM0IsSUFBMEMsUUFBT0EsT0FBTyxXQUFkLE1BQTJCLFFBQTNCLElBQXVDQSxPQUFPLFdBQVAsS0FBb0IsSUFBdEcsS0FBZ0gsT0FBT0EsT0FBTyxXQUFQLENBQWdCK0MsVUFBdkIsS0FBc0MsV0FBMUosRUFBdUs7RUFDcktqRCxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQU8sV0FBN0IsRUFBdUMsWUFBdkMsRUFBcUQ7SUFBRUMsS0FBSyxFQUFFO0VBQVQsQ0FBckQ7RUFDQUgsTUFBTSxDQUFDa0QsTUFBUCxDQUFjaEQsT0FBTyxXQUFyQixFQUErQkEsT0FBL0I7RUFDQWlELE1BQU0sQ0FBQ2pELE9BQVAsR0FBaUJBLE9BQU8sV0FBeEI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbGVuZGFyX3ZpZXcvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcz8xOGYyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVmYXVsdFwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gRXJyb3I7XG4gICAgfVxufSk7XG5jb25zdCBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQgPSByZXF1aXJlKFwiQHN3Yy9oZWxwZXJzL18vX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0XCIpO1xuY29uc3QgX3JlYWN0ID0gLyojX19QVVJFX18qLyBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuXyhyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgX2hlYWQgPSAvKiNfX1BVUkVfXyovIF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5fKHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xuY29uc3Qgc3RhdHVzQ29kZXMgPSB7XG4gICAgNDAwOiBcIkJhZCBSZXF1ZXN0XCIsXG4gICAgNDA0OiBcIlRoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmRcIixcbiAgICA0MDU6IFwiTWV0aG9kIE5vdCBBbGxvd2VkXCIsXG4gICAgNTAwOiBcIkludGVybmFsIFNlcnZlciBFcnJvclwiXG59O1xuZnVuY3Rpb24gX2dldEluaXRpYWxQcm9wcyhwYXJhbSkge1xuICAgIGxldCB7IHJlcyAsIGVyciAgfSA9IHBhcmFtO1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgJiYgcmVzLnN0YXR1c0NvZGUgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogNDA0O1xuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1c0NvZGVcbiAgICB9O1xufVxuY29uc3Qgc3R5bGVzID0ge1xuICAgIGVycm9yOiB7XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9ibG9iL21haW4vbW9kZXJuLW5vcm1hbGl6ZS5jc3MjTDM4LUw1MlxuICAgICAgICBmb250RmFtaWx5OiAnc3lzdGVtLXVpLFwiU2Vnb2UgVUlcIixSb2JvdG8sSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIicsXG4gICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIlxuICAgIH0sXG4gICAgZGVzYzoge1xuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiXG4gICAgfSxcbiAgICBoMToge1xuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICBtYXJnaW46IFwiMCAyMHB4IDAgMFwiLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IDIzLFxuICAgICAgICBmb250U2l6ZTogMjQsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgdmVydGljYWxBbGlnbjogXCJ0b3BcIixcbiAgICAgICAgbGluZUhlaWdodDogXCI0OXB4XCJcbiAgICB9LFxuICAgIGgyOiB7XG4gICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICBsaW5lSGVpZ2h0OiBcIjQ5cHhcIixcbiAgICAgICAgbWFyZ2luOiAwXG4gICAgfVxufTtcbmNsYXNzIEVycm9yIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzQ29kZSAsIHdpdGhEYXJrTW9kZSA9dHJ1ZSAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZSB8fCBzdGF0dXNDb2Rlc1tzdGF0dXNDb2RlXSB8fCBcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkXCI7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5lcnJvclxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwgbnVsbCwgc3RhdHVzQ29kZSA/IHN0YXR1c0NvZGUgKyBcIjogXCIgKyB0aXRsZSA6IFwiQXBwbGljYXRpb24gZXJyb3I6IGEgY2xpZW50LXNpZGUgZXhjZXB0aW9uIGhhcyBvY2N1cnJlZFwiKSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIC8qIENTUyBtaW5pZmllZCBmcm9tXG4gICAgICAgICAgICAgICAgYm9keSB7IG1hcmdpbjogMDsgY29sb3I6ICMwMDA7IGJhY2tncm91bmQ6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAubmV4dC1lcnJvci1oMSB7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAke1xuICAgICAgICAgICAgICAgICAgd2l0aERhcmtNb2RlXG4gICAgICAgICAgICAgICAgICAgID8gYEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICAgICAgICAgIGJvZHkgeyBjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogIzAwMDsgfVxuICAgICAgICAgICAgICAgICAgLm5leHQtZXJyb3ItaDEge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgKi8gX19odG1sOiBcImJvZHl7Y29sb3I6IzAwMDtiYWNrZ3JvdW5kOiNmZmY7bWFyZ2luOjB9Lm5leHQtZXJyb3ItaDF7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCByZ2JhKDAsMCwwLC4zKX1cIiArICh3aXRoRGFya01vZGUgPyBcIkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6ZGFyayl7Ym9keXtjb2xvcjojZmZmO2JhY2tncm91bmQ6IzAwMH0ubmV4dC1lcnJvci1oMXtib3JkZXItcmlnaHQ6MXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjMpfX1cIiA6IFwiXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLCBzdGF0dXNDb2RlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm5leHQtZXJyb3ItaDFcIixcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuaDFcbiAgICAgICAgfSwgc3RhdHVzQ29kZSkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5kZXNjXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgyXCIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuaDJcbiAgICAgICAgfSwgdGhpcy5wcm9wcy50aXRsZSB8fCBzdGF0dXNDb2RlID8gdGl0bGUgOiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIFwiQXBwbGljYXRpb24gZXJyb3I6IGEgY2xpZW50LXNpZGUgZXhjZXB0aW9uIGhhcyBvY2N1cnJlZCAoc2VlIHRoZSBicm93c2VyIGNvbnNvbGUgZm9yIG1vcmUgaW5mb3JtYXRpb24pXCIpLCBcIi5cIikpKSk7XG4gICAgfVxufVxuKCgpPT57XG4gICAgRXJyb3IuZGlzcGxheU5hbWUgPSBcIkVycm9yUGFnZVwiO1xufSkoKTtcbigoKT0+e1xuICAgIEVycm9yLmdldEluaXRpYWxQcm9wcyA9IF9nZXRJbml0aWFsUHJvcHM7XG59KSgpO1xuKCgpPT57XG4gICAgRXJyb3Iub3JpZ0dldEluaXRpYWxQcm9wcyA9IF9nZXRJbml0aWFsUHJvcHM7XG59KSgpO1xuXG5pZiAoKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdvYmplY3QnICYmIGV4cG9ydHMuZGVmYXVsdCAhPT0gbnVsbCkpICYmIHR5cGVvZiBleHBvcnRzLmRlZmF1bHQuX19lc01vZHVsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMuZGVmYXVsdCwgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuICBPYmplY3QuYXNzaWduKGV4cG9ydHMuZGVmYXVsdCwgZXhwb3J0cyk7XG4gIG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1fZXJyb3IuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZW51bWVyYWJsZSIsImdldCIsIkVycm9yIiwiX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0IiwicmVxdWlyZSIsIl9yZWFjdCIsIl8iLCJfaGVhZCIsInN0YXR1c0NvZGVzIiwiX2dldEluaXRpYWxQcm9wcyIsInBhcmFtIiwicmVzIiwiZXJyIiwic3RhdHVzQ29kZSIsInN0eWxlcyIsImVycm9yIiwiZm9udEZhbWlseSIsImhlaWdodCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZGVzYyIsImgxIiwibWFyZ2luIiwicGFkZGluZ1JpZ2h0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidmVydGljYWxBbGlnbiIsImxpbmVIZWlnaHQiLCJoMiIsInByb3BzIiwid2l0aERhcmtNb2RlIiwidGl0bGUiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNsYXNzTmFtZSIsIkZyYWdtZW50IiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiX19lc01vZHVsZSIsImFzc2lnbiIsIm1vZHVsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_error.js\n");

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/head.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/head.js ***!
  \***************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\"use client\";\n\"use strict\";\n\n__webpack_require__(/*! core-js/modules/es.object.keys.js */ \"core-js/modules/es.object.keys.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.js */ \"core-js/modules/es.symbol.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ \"core-js/modules/es.object.get-own-property-descriptor.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.for-each.js */ \"core-js/modules/es.array.for-each.js\");\n\n__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"core-js/modules/web.dom-collections.for-each.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ \"core-js/modules/es.object.get-own-property-descriptors.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ \"core-js/modules/es.object.define-properties.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"core-js/modules/es.symbol.description.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"core-js/modules/es.symbol.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"core-js/modules/es.object.define-property.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.concat.js */ \"core-js/modules/es.array.concat.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.reduce.js */ \"core-js/modules/es.array.reduce.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"core-js/modules/es.object.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/es.promise.js */ \"core-js/modules/es.promise.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"core-js/modules/es.array.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.set.js */ \"core-js/modules/es.set.js\");\n\n__webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"core-js/modules/es.string.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"core-js/modules/web.dom-collections.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.index-of.js */ \"core-js/modules/es.array.index-of.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.slice.js */ \"core-js/modules/es.array.slice.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.map.js */ \"core-js/modules/es.array.map.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.reverse.js */ \"core-js/modules/es.array.reverse.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.filter.js */ \"core-js/modules/es.array.filter.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.some.js */ \"core-js/modules/es.array.some.js\");\n\n__webpack_require__(/*! core-js/modules/es.string.starts-with.js */ \"core-js/modules/es.string.starts-with.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.assign.js */ \"core-js/modules/es.object.assign.js\");\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n0 && (0);\n\nfunction _export(target, all) {\n  for (var name in all) Object.defineProperty(target, name, {\n    enumerable: true,\n    get: all[name]\n  });\n}\n\n_export(exports, {\n  defaultHead: function defaultHead() {\n    return _defaultHead;\n  },\n  \"default\": function _default() {\n    return _default2;\n  }\n});\n\nvar _interop_require_default = __webpack_require__(/*! @swc/helpers/_/_interop_require_default */ \"./node_modules/@swc/helpers/cjs/_interop_require_default.cjs\");\n\nvar _interop_require_wildcard = __webpack_require__(/*! @swc/helpers/_/_interop_require_wildcard */ \"./node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs\");\n\nvar _react = /*#__PURE__*/_interop_require_wildcard._(__webpack_require__(/*! react */ \"react\"));\n\nvar _sideeffect = /*#__PURE__*/_interop_require_default._(__webpack_require__(/*! ./side-effect */ \"./side-effect\"));\n\nvar _ampcontext = __webpack_require__(/*! ./amp-context */ \"./amp-context\");\n\nvar _headmanagercontext = __webpack_require__(/*! ./head-manager-context */ \"./head-manager-context\");\n\nvar _ampmode = __webpack_require__(/*! ./amp-mode */ \"./amp-mode\");\n\nvar _warnonce = __webpack_require__(/*! ./utils/warn-once */ \"./utils/warn-once\");\n\nfunction _defaultHead(inAmpMode) {\n  if (inAmpMode === void 0) inAmpMode = false;\n  var head = [/*#__PURE__*/_react[\"default\"].createElement(\"meta\", {\n    charSet: \"utf-8\"\n  })];\n\n  if (!inAmpMode) {\n    head.push( /*#__PURE__*/_react[\"default\"].createElement(\"meta\", {\n      name: \"viewport\",\n      content: \"width=device-width\"\n    }));\n  }\n\n  return head;\n}\n\nfunction onlyReactElement(list, child) {\n  // React children can be \"string\" or \"number\" in this case we ignore them for backwards compat\n  if (typeof child === \"string\" || typeof child === \"number\") {\n    return list;\n  } // Adds support for React.Fragment\n\n\n  if (child.type === _react[\"default\"].Fragment) {\n    return list.concat( // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]\n    _react[\"default\"].Children.toArray(child.props.children).reduce( // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]\n    function (fragmentList, fragmentChild) {\n      if (typeof fragmentChild === \"string\" || typeof fragmentChild === \"number\") {\n        return fragmentList;\n      }\n\n      return fragmentList.concat(fragmentChild);\n    }, []));\n  }\n\n  return list.concat(child);\n}\n\nvar METATYPES = [\"name\", \"httpEquiv\", \"charSet\", \"itemProp\"];\n/*\n returns a function for filtering head child elements\n which shouldn't be duplicated, like <title/>\n Also adds support for deduplicated `key` properties\n*/\n\nfunction unique() {\n  var keys = new Set();\n  var tags = new Set();\n  var metaTypes = new Set();\n  var metaCategories = {};\n  return function (h) {\n    var isUnique = true;\n    var hasKey = false;\n\n    if (h.key && typeof h.key !== \"number\" && h.key.indexOf(\"$\") > 0) {\n      hasKey = true;\n      var key = h.key.slice(h.key.indexOf(\"$\") + 1);\n\n      if (keys.has(key)) {\n        isUnique = false;\n      } else {\n        keys.add(key);\n      }\n    } // eslint-disable-next-line default-case\n\n\n    switch (h.type) {\n      case \"title\":\n      case \"base\":\n        if (tags.has(h.type)) {\n          isUnique = false;\n        } else {\n          tags.add(h.type);\n        }\n\n        break;\n\n      case \"meta\":\n        for (var i = 0, len = METATYPES.length; i < len; i++) {\n          var metatype = METATYPES[i];\n          if (!h.props.hasOwnProperty(metatype)) continue;\n\n          if (metatype === \"charSet\") {\n            if (metaTypes.has(metatype)) {\n              isUnique = false;\n            } else {\n              metaTypes.add(metatype);\n            }\n          } else {\n            var category = h.props[metatype];\n            var categories = metaCategories[metatype] || new Set();\n\n            if ((metatype !== \"name\" || !hasKey) && categories.has(category)) {\n              isUnique = false;\n            } else {\n              categories.add(category);\n              metaCategories[metatype] = categories;\n            }\n          }\n        }\n\n        break;\n    }\n\n    return isUnique;\n  };\n}\n/**\n *\n * @param headChildrenElements List of children of <Head>\n */\n\n\nfunction reduceComponents(headChildrenElements, props) {\n  var inAmpMode = props.inAmpMode;\n  return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(_defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map(function (c, i) {\n    var key = c.key || i;\n\n    if (false) { var newProps; }\n\n    if (true) {\n      // omit JSON-LD structured data snippets from the warning\n      if (c.type === \"script\" && c.props[\"type\"] !== \"application/ld+json\") {\n        var srcMessage = c.props[\"src\"] ? '<script> tag with src=\"' + c.props[\"src\"] + '\"' : \"inline <script>\";\n        (0, _warnonce.warnOnce)(\"Do not add <script> tags using next/head (see \" + srcMessage + \"). Use next/script instead. \\nSee more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component\");\n      } else if (c.type === \"link\" && c.props[\"rel\"] === \"stylesheet\") {\n        (0, _warnonce.warnOnce)('Do not add stylesheets using next/head (see <link rel=\"stylesheet\"> tag with href=\"' + c.props[\"href\"] + '\"). Use Document instead. \\nSee more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component');\n      }\n    }\n\n    return /*#__PURE__*/_react[\"default\"].cloneElement(c, {\n      key: key\n    });\n  });\n}\n/**\n * This component injects elements to `<head>` of your page.\n * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.\n */\n\n\nfunction Head(param) {\n  var children = param.children;\n  var ampState = (0, _react.useContext)(_ampcontext.AmpStateContext);\n  var headManager = (0, _react.useContext)(_headmanagercontext.HeadManagerContext);\n  return /*#__PURE__*/_react[\"default\"].createElement(_sideeffect[\"default\"], {\n    reduceComponentsToState: reduceComponents,\n    headManager: headManager,\n    inAmpMode: (0, _ampmode.isInAmpMode)(ampState)\n  }, children);\n}\n\nvar _default2 = Head;\n\nif ((typeof exports[\"default\"] === 'function' || _typeof(exports[\"default\"]) === 'object' && exports[\"default\"] !== null) && typeof exports[\"default\"].__esModule === 'undefined') {\n  Object.defineProperty(exports[\"default\"], '__esModule', {\n    value: true\n  });\n  Object.assign(exports[\"default\"], exports);\n  module.exports = exports[\"default\"];\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSw4Q0FBNkM7RUFDekNHLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBLE1BQU1DLENBQU47O0FBSUEsU0FBU0UsT0FBVCxDQUFpQkMsTUFBakIsRUFBeUJDLEdBQXpCLEVBQThCO0VBQzFCLEtBQUksSUFBSUMsSUFBUixJQUFnQkQsR0FBaEIsRUFBb0JSLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQk0sTUFBdEIsRUFBOEJFLElBQTlCLEVBQW9DO0lBQ3BEQyxVQUFVLEVBQUUsSUFEd0M7SUFFcERDLEdBQUcsRUFBRUgsR0FBRyxDQUFDQyxJQUFEO0VBRjRDLENBQXBDO0FBSXZCOztBQUNESCxPQUFPLENBQUNKLE9BQUQsRUFBVTtFQUNiRyxXQUFXLEVBQUUsdUJBQVc7SUFDcEIsT0FBT0EsWUFBUDtFQUNILENBSFk7RUFJYixXQUFTLG9CQUFXO0lBQ2hCLE9BQU9PLFNBQVA7RUFDSDtBQU5ZLENBQVYsQ0FBUDs7QUFRQSxJQUFNQyx3QkFBd0IsR0FBR0MsbUJBQU8sQ0FBQyw2R0FBRCxDQUF4Qzs7QUFDQSxJQUFNQyx5QkFBeUIsR0FBR0QsbUJBQU8sQ0FBQywrR0FBRCxDQUF6Qzs7QUFDQSxJQUFNRSxNQUFNLEdBQUcsYUFBY0QseUJBQXlCLENBQUNFLENBQTFCLENBQTRCSCxtQkFBTyxDQUFDLG9CQUFELENBQW5DLENBQTdCOztBQUNBLElBQU1JLFdBQVcsR0FBRyxhQUFjTCx3QkFBd0IsQ0FBQ0ksQ0FBekIsQ0FBMkJILG1CQUFPLENBQUMsb0NBQUQsQ0FBbEMsQ0FBbEM7O0FBQ0EsSUFBTUssV0FBVyxHQUFHTCxtQkFBTyxDQUFDLG9DQUFELENBQTNCOztBQUNBLElBQU1NLG1CQUFtQixHQUFHTixtQkFBTyxDQUFDLHNEQUFELENBQW5DOztBQUNBLElBQU1PLFFBQVEsR0FBR1AsbUJBQU8sQ0FBQyw4QkFBRCxDQUF4Qjs7QUFDQSxJQUFNUSxTQUFTLEdBQUdSLG1CQUFPLENBQUMsNENBQUQsQ0FBekI7O0FBRUEsU0FBU1QsWUFBVCxDQUFxQmtCLFNBQXJCLEVBQWdDO0VBQzVCLElBQUlBLFNBQVMsS0FBSyxLQUFLLENBQXZCLEVBQTBCQSxTQUFTLEdBQUcsS0FBWjtFQUMxQixJQUFNQyxJQUFJLEdBQUcsQ0FDVCxhQUFjUixNQUFNLFdBQU4sQ0FBZVMsYUFBZixDQUE2QixNQUE3QixFQUFxQztJQUMvQ0MsT0FBTyxFQUFFO0VBRHNDLENBQXJDLENBREwsQ0FBYjs7RUFLQSxJQUFJLENBQUNILFNBQUwsRUFBZ0I7SUFDWkMsSUFBSSxDQUFDRyxJQUFMLEVBQVUsYUFBY1gsTUFBTSxXQUFOLENBQWVTLGFBQWYsQ0FBNkIsTUFBN0IsRUFBcUM7TUFDekRoQixJQUFJLEVBQUUsVUFEbUQ7TUFFekRtQixPQUFPLEVBQUU7SUFGZ0QsQ0FBckMsQ0FBeEI7RUFJSDs7RUFDRCxPQUFPSixJQUFQO0FBQ0g7O0FBQ0QsU0FBU0ssZ0JBQVQsQ0FBMEJDLElBQTFCLEVBQWdDQyxLQUFoQyxFQUF1QztFQUNuQztFQUNBLElBQUksT0FBT0EsS0FBUCxLQUFpQixRQUFqQixJQUE2QixPQUFPQSxLQUFQLEtBQWlCLFFBQWxELEVBQTREO0lBQ3hELE9BQU9ELElBQVA7RUFDSCxDQUprQyxDQUtuQzs7O0VBQ0EsSUFBSUMsS0FBSyxDQUFDQyxJQUFOLEtBQWVoQixNQUFNLFdBQU4sQ0FBZWlCLFFBQWxDLEVBQTRDO0lBQ3hDLE9BQU9ILElBQUksQ0FBQ0ksTUFBTCxFQUFZO0lBQ25CbEIsTUFBTSxXQUFOLENBQWVtQixRQUFmLENBQXdCQyxPQUF4QixDQUFnQ0wsS0FBSyxDQUFDTSxLQUFOLENBQVlDLFFBQTVDLEVBQXNEQyxNQUF0RCxFQUE2RDtJQUM3RCxVQUFDQyxZQUFELEVBQWVDLGFBQWYsRUFBK0I7TUFDM0IsSUFBSSxPQUFPQSxhQUFQLEtBQXlCLFFBQXpCLElBQXFDLE9BQU9BLGFBQVAsS0FBeUIsUUFBbEUsRUFBNEU7UUFDeEUsT0FBT0QsWUFBUDtNQUNIOztNQUNELE9BQU9BLFlBQVksQ0FBQ04sTUFBYixDQUFvQk8sYUFBcEIsQ0FBUDtJQUNILENBTkQsRUFNRyxFQU5ILENBRE8sQ0FBUDtFQVFIOztFQUNELE9BQU9YLElBQUksQ0FBQ0ksTUFBTCxDQUFZSCxLQUFaLENBQVA7QUFDSDs7QUFDRCxJQUFNVyxTQUFTLEdBQUcsQ0FDZCxNQURjLEVBRWQsV0FGYyxFQUdkLFNBSGMsRUFJZCxVQUpjLENBQWxCO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBRyxTQUFTQyxNQUFULEdBQWtCO0VBQ2pCLElBQU1DLElBQUksR0FBRyxJQUFJQyxHQUFKLEVBQWI7RUFDQSxJQUFNQyxJQUFJLEdBQUcsSUFBSUQsR0FBSixFQUFiO0VBQ0EsSUFBTUUsU0FBUyxHQUFHLElBQUlGLEdBQUosRUFBbEI7RUFDQSxJQUFNRyxjQUFjLEdBQUcsRUFBdkI7RUFDQSxPQUFPLFVBQUNDLENBQUQsRUFBSztJQUNSLElBQUlDLFFBQVEsR0FBRyxJQUFmO0lBQ0EsSUFBSUMsTUFBTSxHQUFHLEtBQWI7O0lBQ0EsSUFBSUYsQ0FBQyxDQUFDRyxHQUFGLElBQVMsT0FBT0gsQ0FBQyxDQUFDRyxHQUFULEtBQWlCLFFBQTFCLElBQXNDSCxDQUFDLENBQUNHLEdBQUYsQ0FBTUMsT0FBTixDQUFjLEdBQWQsSUFBcUIsQ0FBL0QsRUFBa0U7TUFDOURGLE1BQU0sR0FBRyxJQUFUO01BQ0EsSUFBTUMsR0FBRyxHQUFHSCxDQUFDLENBQUNHLEdBQUYsQ0FBTUUsS0FBTixDQUFZTCxDQUFDLENBQUNHLEdBQUYsQ0FBTUMsT0FBTixDQUFjLEdBQWQsSUFBcUIsQ0FBakMsQ0FBWjs7TUFDQSxJQUFJVCxJQUFJLENBQUNXLEdBQUwsQ0FBU0gsR0FBVCxDQUFKLEVBQW1CO1FBQ2ZGLFFBQVEsR0FBRyxLQUFYO01BQ0gsQ0FGRCxNQUVPO1FBQ0hOLElBQUksQ0FBQ1ksR0FBTCxDQUFTSixHQUFUO01BQ0g7SUFDSixDQVhPLENBWVI7OztJQUNBLFFBQU9ILENBQUMsQ0FBQ2pCLElBQVQ7TUFDSSxLQUFLLE9BQUw7TUFDQSxLQUFLLE1BQUw7UUFDSSxJQUFJYyxJQUFJLENBQUNTLEdBQUwsQ0FBU04sQ0FBQyxDQUFDakIsSUFBWCxDQUFKLEVBQXNCO1VBQ2xCa0IsUUFBUSxHQUFHLEtBQVg7UUFDSCxDQUZELE1BRU87VUFDSEosSUFBSSxDQUFDVSxHQUFMLENBQVNQLENBQUMsQ0FBQ2pCLElBQVg7UUFDSDs7UUFDRDs7TUFDSixLQUFLLE1BQUw7UUFDSSxLQUFJLElBQUl5QixDQUFDLEdBQUcsQ0FBUixFQUFXQyxHQUFHLEdBQUdoQixTQUFTLENBQUNpQixNQUEvQixFQUF1Q0YsQ0FBQyxHQUFHQyxHQUEzQyxFQUFnREQsQ0FBQyxFQUFqRCxFQUFvRDtVQUNoRCxJQUFNRyxRQUFRLEdBQUdsQixTQUFTLENBQUNlLENBQUQsQ0FBMUI7VUFDQSxJQUFJLENBQUNSLENBQUMsQ0FBQ1osS0FBRixDQUFRd0IsY0FBUixDQUF1QkQsUUFBdkIsQ0FBTCxFQUF1Qzs7VUFDdkMsSUFBSUEsUUFBUSxLQUFLLFNBQWpCLEVBQTRCO1lBQ3hCLElBQUliLFNBQVMsQ0FBQ1EsR0FBVixDQUFjSyxRQUFkLENBQUosRUFBNkI7Y0FDekJWLFFBQVEsR0FBRyxLQUFYO1lBQ0gsQ0FGRCxNQUVPO2NBQ0hILFNBQVMsQ0FBQ1MsR0FBVixDQUFjSSxRQUFkO1lBQ0g7VUFDSixDQU5ELE1BTU87WUFDSCxJQUFNRSxRQUFRLEdBQUdiLENBQUMsQ0FBQ1osS0FBRixDQUFRdUIsUUFBUixDQUFqQjtZQUNBLElBQU1HLFVBQVUsR0FBR2YsY0FBYyxDQUFDWSxRQUFELENBQWQsSUFBNEIsSUFBSWYsR0FBSixFQUEvQzs7WUFDQSxJQUFJLENBQUNlLFFBQVEsS0FBSyxNQUFiLElBQXVCLENBQUNULE1BQXpCLEtBQW9DWSxVQUFVLENBQUNSLEdBQVgsQ0FBZU8sUUFBZixDQUF4QyxFQUFrRTtjQUM5RFosUUFBUSxHQUFHLEtBQVg7WUFDSCxDQUZELE1BRU87Y0FDSGEsVUFBVSxDQUFDUCxHQUFYLENBQWVNLFFBQWY7Y0FDQWQsY0FBYyxDQUFDWSxRQUFELENBQWQsR0FBMkJHLFVBQTNCO1lBQ0g7VUFDSjtRQUNKOztRQUNEO0lBOUJSOztJQWdDQSxPQUFPYixRQUFQO0VBQ0gsQ0E5Q0Q7QUErQ0g7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQUksU0FBU2MsZ0JBQVQsQ0FBMEJDLG9CQUExQixFQUFnRDVCLEtBQWhELEVBQXVEO0VBQ3ZELElBQVFkLFNBQVIsR0FBdUJjLEtBQXZCLENBQVFkLFNBQVI7RUFDQSxPQUFPMEMsb0JBQW9CLENBQUMxQixNQUFyQixDQUE0QlYsZ0JBQTVCLEVBQThDLEVBQTlDLEVBQWtEcUMsT0FBbEQsR0FBNERoQyxNQUE1RCxDQUFtRTdCLFlBQVcsQ0FBQ2tCLFNBQUQsQ0FBWCxDQUF1QjJDLE9BQXZCLEVBQW5FLEVBQXFHQyxNQUFyRyxDQUE0R3hCLE1BQU0sRUFBbEgsRUFBc0h1QixPQUF0SCxHQUFnSUUsR0FBaEksQ0FBb0ksVUFBQ0MsQ0FBRCxFQUFJWixDQUFKLEVBQVE7SUFDL0ksSUFBTUwsR0FBRyxHQUFHaUIsQ0FBQyxDQUFDakIsR0FBRixJQUFTSyxDQUFyQjs7SUFDQSxJQUFJLEtBQUosRUFBK0YsaUJBZTlGOztJQUNELElBQUksTUFBd0M7TUFDeEM7TUFDQSxJQUFJWSxDQUFDLENBQUNyQyxJQUFGLEtBQVcsUUFBWCxJQUF1QnFDLENBQUMsQ0FBQ2hDLEtBQUYsQ0FBUSxNQUFSLE1BQW9CLHFCQUEvQyxFQUFzRTtRQUNsRSxJQUFNMEMsVUFBVSxHQUFHVixDQUFDLENBQUNoQyxLQUFGLENBQVEsS0FBUixJQUFpQiw0QkFBNEJnQyxDQUFDLENBQUNoQyxLQUFGLENBQVEsS0FBUixDQUE1QixHQUE2QyxHQUE5RCxHQUFvRSxpQkFBdkY7UUFDQSxDQUFDLEdBQUdmLFNBQVMsQ0FBQzBELFFBQWQsRUFBd0IsbURBQW1ERCxVQUFuRCxHQUFnRSxxSEFBeEY7TUFDSCxDQUhELE1BR08sSUFBSVYsQ0FBQyxDQUFDckMsSUFBRixLQUFXLE1BQVgsSUFBcUJxQyxDQUFDLENBQUNoQyxLQUFGLENBQVEsS0FBUixNQUFtQixZQUE1QyxFQUEwRDtRQUM3RCxDQUFDLEdBQUdmLFNBQVMsQ0FBQzBELFFBQWQsRUFBd0Isd0ZBQXdGWCxDQUFDLENBQUNoQyxLQUFGLENBQVEsTUFBUixDQUF4RixHQUEwRyxtSEFBbEk7TUFDSDtJQUNKOztJQUNELE9BQU8sYUFBY3JCLE1BQU0sV0FBTixDQUFlOEQsWUFBZixDQUE0QlQsQ0FBNUIsRUFBK0I7TUFDaERqQixHQUFHLEVBQUhBO0lBRGdELENBQS9CLENBQXJCO0VBR0gsQ0E5Qk0sQ0FBUDtBQStCSDtBQUNEO0FBQ0E7QUFDQTtBQUNBOzs7QUFBSSxTQUFTNkIsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0VBQ3JCLElBQU01QyxRQUFOLEdBQW9CNEMsS0FBcEIsQ0FBTTVDLFFBQU47RUFDQSxJQUFNNkMsUUFBUSxHQUFHLENBQUMsR0FBR25FLE1BQU0sQ0FBQ29FLFVBQVgsRUFBdUJqRSxXQUFXLENBQUNrRSxlQUFuQyxDQUFqQjtFQUNBLElBQU1DLFdBQVcsR0FBRyxDQUFDLEdBQUd0RSxNQUFNLENBQUNvRSxVQUFYLEVBQXVCaEUsbUJBQW1CLENBQUNtRSxrQkFBM0MsQ0FBcEI7RUFDQSxPQUFPLGFBQWN2RSxNQUFNLFdBQU4sQ0FBZVMsYUFBZixDQUE2QlAsV0FBVyxXQUF4QyxFQUFrRDtJQUNuRXNFLHVCQUF1QixFQUFFeEIsZ0JBRDBDO0lBRW5Fc0IsV0FBVyxFQUFFQSxXQUZzRDtJQUduRS9ELFNBQVMsRUFBRSxDQUFDLEdBQUdGLFFBQVEsQ0FBQ29FLFdBQWIsRUFBMEJOLFFBQTFCO0VBSHdELENBQWxELEVBSWxCN0MsUUFKa0IsQ0FBckI7QUFLSDs7QUFDRCxJQUFNMUIsU0FBUSxHQUFHcUUsSUFBakI7O0FBRUEsSUFBSSxDQUFDLE9BQU8vRSxPQUFPLFdBQWQsS0FBMkIsVUFBM0IsSUFBMEMsUUFBT0EsT0FBTyxXQUFkLE1BQTJCLFFBQTNCLElBQXVDQSxPQUFPLFdBQVAsS0FBb0IsSUFBdEcsS0FBZ0gsT0FBT0EsT0FBTyxXQUFQLENBQWdCd0YsVUFBdkIsS0FBc0MsV0FBMUosRUFBdUs7RUFDcksxRixNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQU8sV0FBN0IsRUFBdUMsWUFBdkMsRUFBcUQ7SUFBRUMsS0FBSyxFQUFFO0VBQVQsQ0FBckQ7RUFDQUgsTUFBTSxDQUFDMkYsTUFBUCxDQUFjekYsT0FBTyxXQUFyQixFQUErQkEsT0FBL0I7RUFDQUUsTUFBTSxDQUFDRixPQUFQLEdBQWlCQSxPQUFPLFdBQXhCO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWxlbmRhcl92aWV3Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanM/ZmI1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuMCAmJiAobW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGVmYXVsdEhlYWQ6IG51bGwsXG4gICAgZGVmYXVsdDogbnVsbFxufSk7XG5mdW5jdGlvbiBfZXhwb3J0KHRhcmdldCwgYWxsKSB7XG4gICAgZm9yKHZhciBuYW1lIGluIGFsbClPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGdldDogYWxsW25hbWVdXG4gICAgfSk7XG59XG5fZXhwb3J0KGV4cG9ydHMsIHtcbiAgICBkZWZhdWx0SGVhZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0SGVhZDtcbiAgICB9LFxuICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHQ7XG4gICAgfVxufSk7XG5jb25zdCBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQgPSByZXF1aXJlKFwiQHN3Yy9oZWxwZXJzL18vX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0XCIpO1xuY29uc3QgX2ludGVyb3BfcmVxdWlyZV93aWxkY2FyZCA9IHJlcXVpcmUoXCJAc3djL2hlbHBlcnMvXy9faW50ZXJvcF9yZXF1aXJlX3dpbGRjYXJkXCIpO1xuY29uc3QgX3JlYWN0ID0gLyojX19QVVJFX18qLyBfaW50ZXJvcF9yZXF1aXJlX3dpbGRjYXJkLl8ocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IF9zaWRlZWZmZWN0ID0gLyojX19QVVJFX18qLyBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuXyhyZXF1aXJlKFwiLi9zaWRlLWVmZmVjdFwiKSk7XG5jb25zdCBfYW1wY29udGV4dCA9IHJlcXVpcmUoXCIuL2FtcC1jb250ZXh0XCIpO1xuY29uc3QgX2hlYWRtYW5hZ2VyY29udGV4dCA9IHJlcXVpcmUoXCIuL2hlYWQtbWFuYWdlci1jb250ZXh0XCIpO1xuY29uc3QgX2FtcG1vZGUgPSByZXF1aXJlKFwiLi9hbXAtbW9kZVwiKTtcbmNvbnN0IF93YXJub25jZSA9IHJlcXVpcmUoXCIuL3V0aWxzL3dhcm4tb25jZVwiKTtcblxuZnVuY3Rpb24gZGVmYXVsdEhlYWQoaW5BbXBNb2RlKSB7XG4gICAgaWYgKGluQW1wTW9kZSA9PT0gdm9pZCAwKSBpbkFtcE1vZGUgPSBmYWxzZTtcbiAgICBjb25zdCBoZWFkID0gW1xuICAgICAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGNoYXJTZXQ6IFwidXRmLThcIlxuICAgICAgICB9KVxuICAgIF07XG4gICAgaWYgKCFpbkFtcE1vZGUpIHtcbiAgICAgICAgaGVhZC5wdXNoKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgbmFtZTogXCJ2aWV3cG9ydFwiLFxuICAgICAgICAgICAgY29udGVudDogXCJ3aWR0aD1kZXZpY2Utd2lkdGhcIlxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIHJldHVybiBoZWFkO1xufVxuZnVuY3Rpb24gb25seVJlYWN0RWxlbWVudChsaXN0LCBjaGlsZCkge1xuICAgIC8vIFJlYWN0IGNoaWxkcmVuIGNhbiBiZSBcInN0cmluZ1wiIG9yIFwibnVtYmVyXCIgaW4gdGhpcyBjYXNlIHdlIGlnbm9yZSB0aGVtIGZvciBiYWNrd2FyZHMgY29tcGF0XG4gICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgY2hpbGQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuICAgIC8vIEFkZHMgc3VwcG9ydCBmb3IgUmVhY3QuRnJhZ21lbnRcbiAgICBpZiAoY2hpbGQudHlwZSA9PT0gX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3QuY29uY2F0KC8vIEB0cy1leHBlY3QtZXJyb3IgQHR5cGVzL3JlYWN0IGRvZXMgbm90IHJlbW92ZSBmcmFnbWVudHMgYnV0IHRoaXMgY291bGQgYWxzbyByZXR1cm4gUmVhY3RQb3J0YWxbXVxuICAgICAgICBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkLnByb3BzLmNoaWxkcmVuKS5yZWR1Y2UoLy8gQHRzLWV4cGVjdC1lcnJvciBAdHlwZXMvcmVhY3QgZG9lcyBub3QgcmVtb3ZlIGZyYWdtZW50cyBidXQgdGhpcyBjb3VsZCBhbHNvIHJldHVybiBSZWFjdFBvcnRhbFtdXG4gICAgICAgIChmcmFnbWVudExpc3QsIGZyYWdtZW50Q2hpbGQpPT57XG4gICAgICAgICAgICBpZiAodHlwZW9mIGZyYWdtZW50Q2hpbGQgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGZyYWdtZW50Q2hpbGQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJhZ21lbnRMaXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50TGlzdC5jb25jYXQoZnJhZ21lbnRDaGlsZCk7XG4gICAgICAgIH0sIFtdKSk7XG4gICAgfVxuICAgIHJldHVybiBsaXN0LmNvbmNhdChjaGlsZCk7XG59XG5jb25zdCBNRVRBVFlQRVMgPSBbXG4gICAgXCJuYW1lXCIsXG4gICAgXCJodHRwRXF1aXZcIixcbiAgICBcImNoYXJTZXRcIixcbiAgICBcIml0ZW1Qcm9wXCJcbl07XG4vKlxuIHJldHVybnMgYSBmdW5jdGlvbiBmb3IgZmlsdGVyaW5nIGhlYWQgY2hpbGQgZWxlbWVudHNcbiB3aGljaCBzaG91bGRuJ3QgYmUgZHVwbGljYXRlZCwgbGlrZSA8dGl0bGUvPlxuIEFsc28gYWRkcyBzdXBwb3J0IGZvciBkZWR1cGxpY2F0ZWQgYGtleWAgcHJvcGVydGllc1xuKi8gZnVuY3Rpb24gdW5pcXVlKCkge1xuICAgIGNvbnN0IGtleXMgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgdGFncyA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBtZXRhVHlwZXMgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgbWV0YUNhdGVnb3JpZXMgPSB7fTtcbiAgICByZXR1cm4gKGgpPT57XG4gICAgICAgIGxldCBpc1VuaXF1ZSA9IHRydWU7XG4gICAgICAgIGxldCBoYXNLZXkgPSBmYWxzZTtcbiAgICAgICAgaWYgKGgua2V5ICYmIHR5cGVvZiBoLmtleSAhPT0gXCJudW1iZXJcIiAmJiBoLmtleS5pbmRleE9mKFwiJFwiKSA+IDApIHtcbiAgICAgICAgICAgIGhhc0tleSA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBoLmtleS5zbGljZShoLmtleS5pbmRleE9mKFwiJFwiKSArIDEpO1xuICAgICAgICAgICAgaWYgKGtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBrZXlzLmFkZChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LWNhc2VcbiAgICAgICAgc3dpdGNoKGgudHlwZSl7XG4gICAgICAgICAgICBjYXNlIFwidGl0bGVcIjpcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlXCI6XG4gICAgICAgICAgICAgICAgaWYgKHRhZ3MuaGFzKGgudHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YWdzLmFkZChoLnR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtZXRhXCI6XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMCwgbGVuID0gTUVUQVRZUEVTLmxlbmd0aDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWV0YXR5cGUgPSBNRVRBVFlQRVNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghaC5wcm9wcy5oYXNPd25Qcm9wZXJ0eShtZXRhdHlwZSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWV0YXR5cGUgPT09IFwiY2hhclNldFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWV0YVR5cGVzLmhhcyhtZXRhdHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhVHlwZXMuYWRkKG1ldGF0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gaC5wcm9wc1ttZXRhdHlwZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gbWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdIHx8IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobWV0YXR5cGUgIT09IFwibmFtZVwiIHx8ICFoYXNLZXkpICYmIGNhdGVnb3JpZXMuaGFzKGNhdGVnb3J5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMuYWRkKGNhdGVnb3J5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gPSBjYXRlZ29yaWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1VuaXF1ZTtcbiAgICB9O1xufVxuLyoqXG4gKlxuICogQHBhcmFtIGhlYWRDaGlsZHJlbkVsZW1lbnRzIExpc3Qgb2YgY2hpbGRyZW4gb2YgPEhlYWQ+XG4gKi8gZnVuY3Rpb24gcmVkdWNlQ29tcG9uZW50cyhoZWFkQ2hpbGRyZW5FbGVtZW50cywgcHJvcHMpIHtcbiAgICBjb25zdCB7IGluQW1wTW9kZSAgfSA9IHByb3BzO1xuICAgIHJldHVybiBoZWFkQ2hpbGRyZW5FbGVtZW50cy5yZWR1Y2Uob25seVJlYWN0RWxlbWVudCwgW10pLnJldmVyc2UoKS5jb25jYXQoZGVmYXVsdEhlYWQoaW5BbXBNb2RlKS5yZXZlcnNlKCkpLmZpbHRlcih1bmlxdWUoKSkucmV2ZXJzZSgpLm1hcCgoYywgaSk9PntcbiAgICAgICAgY29uc3Qga2V5ID0gYy5rZXkgfHwgaTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcImRldmVsb3BtZW50XCIgJiYgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTICYmICFpbkFtcE1vZGUpIHtcbiAgICAgICAgICAgIGlmIChjLnR5cGUgPT09IFwibGlua1wiICYmIGMucHJvcHNbXCJocmVmXCJdICYmIC8vIFRPRE8ocHJhdGVla2JoQCk6IFJlcGxhY2UgdGhpcyB3aXRoIGNvbnN0IGZyb20gYGNvbnN0YW50c2Agd2hlbiB0aGUgdHJlZSBzaGFraW5nIHdvcmtzLlxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3NcIixcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L1wiXG4gICAgICAgICAgICBdLnNvbWUoKHVybCk9PmMucHJvcHNbXCJocmVmXCJdLnN0YXJ0c1dpdGgodXJsKSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uYy5wcm9wcyB8fCB7fVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbmV3UHJvcHNbXCJkYXRhLWhyZWZcIl0gPSBuZXdQcm9wc1tcImhyZWZcIl07XG4gICAgICAgICAgICAgICAgbmV3UHJvcHNbXCJocmVmXCJdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGlzIGF0dHJpYnV0ZSB0byBtYWtlIGl0IGVhc3kgdG8gaWRlbnRpZnkgb3B0aW1pemVkIHRhZ3NcbiAgICAgICAgICAgICAgICBuZXdQcm9wc1tcImRhdGEtb3B0aW1pemVkLWZvbnRzXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoYywgbmV3UHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgICAgICAvLyBvbWl0IEpTT04tTEQgc3RydWN0dXJlZCBkYXRhIHNuaXBwZXRzIGZyb20gdGhlIHdhcm5pbmdcbiAgICAgICAgICAgIGlmIChjLnR5cGUgPT09IFwic2NyaXB0XCIgJiYgYy5wcm9wc1tcInR5cGVcIl0gIT09IFwiYXBwbGljYXRpb24vbGQranNvblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjTWVzc2FnZSA9IGMucHJvcHNbXCJzcmNcIl0gPyAnPHNjcmlwdD4gdGFnIHdpdGggc3JjPVwiJyArIGMucHJvcHNbXCJzcmNcIl0gKyAnXCInIDogXCJpbmxpbmUgPHNjcmlwdD5cIjtcbiAgICAgICAgICAgICAgICAoMCwgX3dhcm5vbmNlLndhcm5PbmNlKShcIkRvIG5vdCBhZGQgPHNjcmlwdD4gdGFncyB1c2luZyBuZXh0L2hlYWQgKHNlZSBcIiArIHNyY01lc3NhZ2UgKyBcIikuIFVzZSBuZXh0L3NjcmlwdCBpbnN0ZWFkLiBcXG5TZWUgbW9yZSBpbmZvIGhlcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25vLXNjcmlwdC10YWdzLWluLWhlYWQtY29tcG9uZW50XCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjLnR5cGUgPT09IFwibGlua1wiICYmIGMucHJvcHNbXCJyZWxcIl0gPT09IFwic3R5bGVzaGVldFwiKSB7XG4gICAgICAgICAgICAgICAgKDAsIF93YXJub25jZS53YXJuT25jZSkoJ0RvIG5vdCBhZGQgc3R5bGVzaGVldHMgdXNpbmcgbmV4dC9oZWFkIChzZWUgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiPiB0YWcgd2l0aCBocmVmPVwiJyArIGMucHJvcHNbXCJocmVmXCJdICsgJ1wiKS4gVXNlIERvY3VtZW50IGluc3RlYWQuIFxcblNlZSBtb3JlIGluZm8gaGVyZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbm8tc3R5bGVzaGVldHMtaW4taGVhZC1jb21wb25lbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoYywge1xuICAgICAgICAgICAga2V5XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBpbmplY3RzIGVsZW1lbnRzIHRvIGA8aGVhZD5gIG9mIHlvdXIgcGFnZS5cbiAqIFRvIGF2b2lkIGR1cGxpY2F0ZWQgYHRhZ3NgIGluIGA8aGVhZD5gIHlvdSBjYW4gdXNlIHRoZSBga2V5YCBwcm9wZXJ0eSwgd2hpY2ggd2lsbCBtYWtlIHN1cmUgZXZlcnkgdGFnIGlzIG9ubHkgcmVuZGVyZWQgb25jZS5cbiAqLyBmdW5jdGlvbiBIZWFkKHBhcmFtKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4gIH0gPSBwYXJhbTtcbiAgICBjb25zdCBhbXBTdGF0ZSA9ICgwLCBfcmVhY3QudXNlQ29udGV4dCkoX2FtcGNvbnRleHQuQW1wU3RhdGVDb250ZXh0KTtcbiAgICBjb25zdCBoZWFkTWFuYWdlciA9ICgwLCBfcmVhY3QudXNlQ29udGV4dCkoX2hlYWRtYW5hZ2VyY29udGV4dC5IZWFkTWFuYWdlckNvbnRleHQpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3NpZGVlZmZlY3QuZGVmYXVsdCwge1xuICAgICAgICByZWR1Y2VDb21wb25lbnRzVG9TdGF0ZTogcmVkdWNlQ29tcG9uZW50cyxcbiAgICAgICAgaGVhZE1hbmFnZXI6IGhlYWRNYW5hZ2VyLFxuICAgICAgICBpbkFtcE1vZGU6ICgwLCBfYW1wbW9kZS5pc0luQW1wTW9kZSkoYW1wU3RhdGUpXG4gICAgfSwgY2hpbGRyZW4pO1xufVxuY29uc3QgX2RlZmF1bHQgPSBIZWFkO1xuXG5pZiAoKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdvYmplY3QnICYmIGV4cG9ydHMuZGVmYXVsdCAhPT0gbnVsbCkpICYmIHR5cGVvZiBleHBvcnRzLmRlZmF1bHQuX19lc01vZHVsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMuZGVmYXVsdCwgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuICBPYmplY3QuYXNzaWduKGV4cG9ydHMuZGVmYXVsdCwgZXhwb3J0cyk7XG4gIG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWFkLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIm1vZHVsZSIsImRlZmF1bHRIZWFkIiwiX2V4cG9ydCIsInRhcmdldCIsImFsbCIsIm5hbWUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiX2RlZmF1bHQiLCJfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQiLCJyZXF1aXJlIiwiX2ludGVyb3BfcmVxdWlyZV93aWxkY2FyZCIsIl9yZWFjdCIsIl8iLCJfc2lkZWVmZmVjdCIsIl9hbXBjb250ZXh0IiwiX2hlYWRtYW5hZ2VyY29udGV4dCIsIl9hbXBtb2RlIiwiX3dhcm5vbmNlIiwiaW5BbXBNb2RlIiwiaGVhZCIsImNyZWF0ZUVsZW1lbnQiLCJjaGFyU2V0IiwicHVzaCIsImNvbnRlbnQiLCJvbmx5UmVhY3RFbGVtZW50IiwibGlzdCIsImNoaWxkIiwidHlwZSIsIkZyYWdtZW50IiwiY29uY2F0IiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwicHJvcHMiLCJjaGlsZHJlbiIsInJlZHVjZSIsImZyYWdtZW50TGlzdCIsImZyYWdtZW50Q2hpbGQiLCJNRVRBVFlQRVMiLCJ1bmlxdWUiLCJrZXlzIiwiU2V0IiwidGFncyIsIm1ldGFUeXBlcyIsIm1ldGFDYXRlZ29yaWVzIiwiaCIsImlzVW5pcXVlIiwiaGFzS2V5Iiwia2V5IiwiaW5kZXhPZiIsInNsaWNlIiwiaGFzIiwiYWRkIiwiaSIsImxlbiIsImxlbmd0aCIsIm1ldGF0eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJyZWR1Y2VDb21wb25lbnRzIiwiaGVhZENoaWxkcmVuRWxlbWVudHMiLCJyZXZlcnNlIiwiZmlsdGVyIiwibWFwIiwiYyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfT1BUSU1JWkVfRk9OVFMiLCJzb21lIiwidXJsIiwic3RhcnRzV2l0aCIsIm5ld1Byb3BzIiwidW5kZWZpbmVkIiwiY2xvbmVFbGVtZW50Iiwic3JjTWVzc2FnZSIsIndhcm5PbmNlIiwiSGVhZCIsInBhcmFtIiwiYW1wU3RhdGUiLCJ1c2VDb250ZXh0IiwiQW1wU3RhdGVDb250ZXh0IiwiaGVhZE1hbmFnZXIiLCJIZWFkTWFuYWdlckNvbnRleHQiLCJyZWR1Y2VDb21wb25lbnRzVG9TdGF0ZSIsImlzSW5BbXBNb2RlIiwiX19lc01vZHVsZSIsImFzc2lnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/shared/lib/head.js\n");

/***/ }),

/***/ "core-js/modules/es.array.concat.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es.array.concat.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.array.concat.js");

/***/ }),

/***/ "core-js/modules/es.array.filter.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es.array.filter.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.array.filter.js");

/***/ }),

/***/ "core-js/modules/es.array.for-each.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.array.for-each.js" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.array.for-each.js");

/***/ }),

/***/ "core-js/modules/es.array.index-of.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.array.index-of.js" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.array.index-of.js");

/***/ }),

/***/ "core-js/modules/es.array.iterator.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.array.iterator.js" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.array.iterator.js");

/***/ }),

/***/ "core-js/modules/es.array.map.js":
/*!**************************************************!*\
  !*** external "core-js/modules/es.array.map.js" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.array.map.js");

/***/ }),

/***/ "core-js/modules/es.array.reduce.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es.array.reduce.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.array.reduce.js");

/***/ }),

/***/ "core-js/modules/es.array.reverse.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es.array.reverse.js" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.array.reverse.js");

/***/ }),

/***/ "core-js/modules/es.array.slice.js":
/*!****************************************************!*\
  !*** external "core-js/modules/es.array.slice.js" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.array.slice.js");

/***/ }),

/***/ "core-js/modules/es.array.some.js":
/*!***************************************************!*\
  !*** external "core-js/modules/es.array.some.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.array.some.js");

/***/ }),

/***/ "core-js/modules/es.function.bind.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es.function.bind.js" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.function.bind.js");

/***/ }),

/***/ "core-js/modules/es.object.assign.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es.object.assign.js" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.object.assign.js");

/***/ }),

/***/ "core-js/modules/es.object.create.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es.object.create.js" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.object.create.js");

/***/ }),

/***/ "core-js/modules/es.object.define-properties.js":
/*!*****************************************************************!*\
  !*** external "core-js/modules/es.object.define-properties.js" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.object.define-properties.js");

/***/ }),

/***/ "core-js/modules/es.object.define-property.js":
/*!***************************************************************!*\
  !*** external "core-js/modules/es.object.define-property.js" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.object.define-property.js");

/***/ }),

/***/ "core-js/modules/es.object.get-own-property-descriptor.js":
/*!***************************************************************************!*\
  !*** external "core-js/modules/es.object.get-own-property-descriptor.js" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.object.get-own-property-descriptor.js");

/***/ }),

/***/ "core-js/modules/es.object.get-own-property-descriptors.js":
/*!****************************************************************************!*\
  !*** external "core-js/modules/es.object.get-own-property-descriptors.js" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.object.get-own-property-descriptors.js");

/***/ }),

/***/ "core-js/modules/es.object.get-prototype-of.js":
/*!****************************************************************!*\
  !*** external "core-js/modules/es.object.get-prototype-of.js" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.object.get-prototype-of.js");

/***/ }),

/***/ "core-js/modules/es.object.keys.js":
/*!****************************************************!*\
  !*** external "core-js/modules/es.object.keys.js" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.object.keys.js");

/***/ }),

/***/ "core-js/modules/es.object.set-prototype-of.js":
/*!****************************************************************!*\
  !*** external "core-js/modules/es.object.set-prototype-of.js" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.object.set-prototype-of.js");

/***/ }),

/***/ "core-js/modules/es.object.to-string.js":
/*!*********************************************************!*\
  !*** external "core-js/modules/es.object.to-string.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.object.to-string.js");

/***/ }),

/***/ "core-js/modules/es.promise.js":
/*!************************************************!*\
  !*** external "core-js/modules/es.promise.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.promise.js");

/***/ }),

/***/ "core-js/modules/es.reflect.construct.js":
/*!**********************************************************!*\
  !*** external "core-js/modules/es.reflect.construct.js" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.reflect.construct.js");

/***/ }),

/***/ "core-js/modules/es.set.js":
/*!********************************************!*\
  !*** external "core-js/modules/es.set.js" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.set.js");

/***/ }),

/***/ "core-js/modules/es.string.iterator.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es.string.iterator.js" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.string.iterator.js");

/***/ }),

/***/ "core-js/modules/es.string.starts-with.js":
/*!***********************************************************!*\
  !*** external "core-js/modules/es.string.starts-with.js" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.string.starts-with.js");

/***/ }),

/***/ "core-js/modules/es.symbol.description.js":
/*!***********************************************************!*\
  !*** external "core-js/modules/es.symbol.description.js" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.symbol.description.js");

/***/ }),

/***/ "core-js/modules/es.symbol.iterator.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es.symbol.iterator.js" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.symbol.iterator.js");

/***/ }),

/***/ "core-js/modules/es.symbol.js":
/*!***********************************************!*\
  !*** external "core-js/modules/es.symbol.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.symbol.js");

/***/ }),

/***/ "core-js/modules/web.dom-collections.for-each.js":
/*!******************************************************************!*\
  !*** external "core-js/modules/web.dom-collections.for-each.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/web.dom-collections.for-each.js");

/***/ }),

/***/ "core-js/modules/web.dom-collections.iterator.js":
/*!******************************************************************!*\
  !*** external "core-js/modules/web.dom-collections.iterator.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/web.dom-collections.iterator.js");

/***/ }),

/***/ "./amp-context":
/*!******************************************************!*\
  !*** external "next/dist/shared/lib/amp-context.js" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ "./amp-mode":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/amp-mode.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ "./head-manager-context":
/*!***************************************************************!*\
  !*** external "next/dist/shared/lib/head-manager-context.js" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ "./side-effect":
/*!******************************************************!*\
  !*** external "next/dist/shared/lib/side-effect.js" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ "./utils/warn-once":
/*!**********************************************************!*\
  !*** external "next/dist/shared/lib/utils/warn-once.js" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "./node_modules/@swc/helpers/cjs/_interop_require_default.cjs":
/*!********************************************************************!*\
  !*** ./node_modules/@swc/helpers/cjs/_interop_require_default.cjs ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nexports._ = exports._interop_require_default = _interop_require_default;\nfunction _interop_require_default(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2Nqcy9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuY2pzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLFNBQVMsR0FBRyxnQ0FBZ0M7QUFDNUM7QUFDQSwyQ0FBMkM7QUFDM0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWxlbmRhcl92aWV3Ly4vbm9kZV9tb2R1bGVzL0Bzd2MvaGVscGVycy9janMvX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0LmNqcz9hYzYxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl8gPSBleHBvcnRzLl9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdCA9IF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdDtcbmZ1bmN0aW9uIF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/cjs/_interop_require_default.cjs\n");

/***/ }),

/***/ "./node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs":
/*!*********************************************************************!*\
  !*** ./node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nfunction _getRequireWildcardCache(nodeInterop) {\n    if (typeof WeakMap !== \"function\") return null;\n\n    var cacheBabelInterop = new WeakMap();\n    var cacheNodeInterop = new WeakMap();\n\n    return (_getRequireWildcardCache = function(nodeInterop) {\n        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;\n    })(nodeInterop);\n}\nexports._ = exports._interop_require_wildcard = _interop_require_wildcard;\nfunction _interop_require_wildcard(obj, nodeInterop) {\n    if (!nodeInterop && obj && obj.__esModule) return obj;\n    if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") return { default: obj };\n\n    var cache = _getRequireWildcardCache(nodeInterop);\n\n    if (cache && cache.has(obj)) return cache.get(obj);\n\n    var newObj = {};\n    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;\n\n    for (var key in obj) {\n        if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) {\n            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;\n            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);\n            else newObj[key] = obj[key];\n        }\n    }\n\n    newObj.default = obj;\n\n    if (cache) cache.set(obj, newObj);\n\n    return newObj;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2Nqcy9faW50ZXJvcF9yZXF1aXJlX3dpbGRjYXJkLmNqcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFNBQVMsR0FBRyxpQ0FBaUM7QUFDN0M7QUFDQTtBQUNBLHVGQUF1Rjs7QUFFdkY7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FsZW5kYXJfdmlldy8uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvY2pzL19pbnRlcm9wX3JlcXVpcmVfd2lsZGNhcmQuY2pzP2Q1OTIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkge1xuICAgIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcblxuICAgIHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7XG4gICAgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpO1xuXG4gICAgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbihub2RlSW50ZXJvcCkge1xuICAgICAgICByZXR1cm4gbm9kZUludGVyb3AgPyBjYWNoZU5vZGVJbnRlcm9wIDogY2FjaGVCYWJlbEludGVyb3A7XG4gICAgfSkobm9kZUludGVyb3ApO1xufVxuZXhwb3J0cy5fID0gZXhwb3J0cy5faW50ZXJvcF9yZXF1aXJlX3dpbGRjYXJkID0gX2ludGVyb3BfcmVxdWlyZV93aWxkY2FyZDtcbmZ1bmN0aW9uIF9pbnRlcm9wX3JlcXVpcmVfd2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkge1xuICAgIGlmICghbm9kZUludGVyb3AgJiYgb2JqICYmIG9iai5fX2VzTW9kdWxlKSByZXR1cm4gb2JqO1xuICAgIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiB7IGRlZmF1bHQ6IG9iaiB9O1xuXG4gICAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKTtcblxuICAgIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuXG4gICAgdmFyIG5ld09iaiA9IHt9O1xuICAgIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG4gICAgICAgICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgICAgICAgZWxzZSBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmV3T2JqLmRlZmF1bHQgPSBvYmo7XG5cbiAgICBpZiAoY2FjaGUpIGNhY2hlLnNldChvYmosIG5ld09iaik7XG5cbiAgICByZXR1cm4gbmV3T2JqO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_error.js"));
module.exports = __webpack_exports__;

})();