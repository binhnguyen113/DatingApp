(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+6CW":
    /*!***********************************************************************!*\
      !*** ./src/app/members/member-messages/member-messages.component.css ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function CW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card {\r\n    border: none;\r\n}\r\n\r\n.chat {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.chat li {\r\n    margin-bottom: 10px;\r\n    padding-bottom: 10px;\r\n    border-bottom: 1px dotted #B3A9A9;\r\n}\r\n\r\n.rounded-circle {\r\n    max-height: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItbWVzc2FnZXMvbWVtYmVyLW1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvbWVtYmVyLW1lc3NhZ2VzL21lbWJlci1tZXNzYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY2hhdCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNoYXQgbGkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjQjNBOUE5O1xyXG59XHJcblxyXG4ucm91bmRlZC1jaXJjbGUge1xyXG4gICAgbWF4LWhlaWdodDogNTBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "+nPA":
    /*!*************************************************!*\
      !*** ./src/app/register/register.component.css ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function nPA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "/Lly":
    /*!*************************************************************!*\
      !*** ./src/app/errors/test-errors/test-errors.component.ts ***!
      \*************************************************************/

    /*! exports provided: TestErrorsComponent */

    /***/
    function Lly(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestErrorsComponent", function () {
        return TestErrorsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_test_errors_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./test-errors.component.html */
      "LXXr");
      /* harmony import */


      var _test_errors_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./test-errors.component.css */
      "GOUF");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var TestErrorsComponent = /*#__PURE__*/function () {
        function TestErrorsComponent(http) {
          _classCallCheck(this, TestErrorsComponent);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
          this.validationErrors = [];
        }

        _createClass(TestErrorsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "get404Error",
          value: function get404Error() {
            this.http.get(this.baseUrl + 'buggy/not-found').subscribe(function (response) {
              console.log(response);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "get400Error",
          value: function get400Error() {
            this.http.get(this.baseUrl + 'buggy/bad-request').subscribe(function (response) {
              console.log(response);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "get500Error",
          value: function get500Error() {
            this.http.get(this.baseUrl + 'buggy/server-error').subscribe(function (response) {
              console.log(response);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "get401Error",
          value: function get401Error() {
            this.http.get(this.baseUrl + 'buggy/auth').subscribe(function (response) {
              console.log(response);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "get400ValidationError",
          value: function get400ValidationError() {
            var _this = this;

            this.http.post(this.baseUrl + 'account/register', {}).subscribe(function (response) {
              console.log(response);
            }, function (error) {
              console.log(error);
              _this.validationErrors = error;
            });
          }
        }]);

        return TestErrorsComponent;
      }();

      TestErrorsComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      TestErrorsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-test-errors',
        template: _raw_loader_test_errors_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_test_errors_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TestErrorsComponent);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Admin\DatingApp\client\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0r7+":
    /*!***********************************************************!*\
      !*** ./src/app/_forms/date-input/date-input.component.ts ***!
      \***********************************************************/

    /*! exports provided: DateInputComponent */

    /***/
    function r7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateInputComponent", function () {
        return DateInputComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_date_input_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./date-input.component.html */
      "rRnX");
      /* harmony import */


      var _date_input_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./date-input.component.css */
      "UpVr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var DateInputComponent = /*#__PURE__*/function () {
        function DateInputComponent(ngControl) {
          _classCallCheck(this, DateInputComponent);

          this.ngControl = ngControl;
          this.label = '';
          this.maxDate = new Date();
          this.ngControl.valueAccessor = this;
          this.bsConfig = {
            containerClass: 'theme-red',
            dateInputFormat: 'DD MMMM YYYY'
          };
        }

        _createClass(DateInputComponent, [{
          key: "writeValue",
          value: function writeValue(obj) {}
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {}
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DateInputComponent;
      }();

      DateInputComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"]
          }]
        }];
      };

      DateInputComponent.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      DateInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-date-input',
        template: _raw_loader_date_input_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_date_input_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DateInputComponent);
      /***/
    },

    /***/
    1:
    /*!******************************!*\
      !*** tough-cookie (ignored) ***!
      \******************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "1W4x":
    /*!************************************************!*\
      !*** ./src/app/register/register.component.ts ***!
      \************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function W4x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.component.html */
      "OOnH");
      /* harmony import */


      var _register_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.component.css */
      "+nPA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/account.service */
      "5ZPe");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(accountService, toastr, fb, router) {
          _classCallCheck(this, RegisterComponent);

          this.accountService = accountService;
          this.toastr = toastr;
          this.fb = fb;
          this.router = router;
          this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.maxDate = new Date();
          this.validationErrors = [];
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.intitializeForm();
            this.maxDate = new Date();
            this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
          }
        }, {
          key: "intitializeForm",
          value: function intitializeForm() {
            this.registerForm = this.fb.group({
              gender: ['male'],
              username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              knownAs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              dateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(8)]],
              confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, this.matchValues('password')]]
            });
          }
        }, {
          key: "matchValues",
          value: function matchValues(matchTo) {
            return function (control) {
              var _a;

              var con = (_a = control === null || control === void 0 ? void 0 : control.parent) === null || _a === void 0 ? void 0 : _a.controls;
              if (con) return (control === null || control === void 0 ? void 0 : control.value) === con[matchTo].value ? null : {
                isMatching: true
              };else return null;
            };
          }
        }, {
          key: "register",
          value: function register() {
            var _this2 = this;

            this.accountService.register(this.registerForm.value).subscribe(function (response) {
              _this2.router.navigateByUrl('\members');
            }, function (error) {
              _this2.validationErrors = error;
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.cancelRegister.emit(false);
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ctorParameters = function () {
        return [{
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      RegisterComponent.propDecorators = {
        cancelRegister: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegisterComponent);
      /***/
    },

    /***/
    "1f5s":
    /*!************************************************************!*\
      !*** ./src/app/_forms/text-input/text-input.component.css ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function f5s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19mb3Jtcy90ZXh0LWlucHV0L3RleHQtaW5wdXQuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    2:
    /*!****************************!*\
      !*** node-fetch (ignored) ***!
      \****************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "2Hd7":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-panel/admin-panel.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Hd7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2>Admin Panel</h2>\n<div class=\"tab-panel\">\n    <tabset class=\"member-tabset\">\n        <tab heading=\"User management\" *appHasRole='[\"Admin\"]'>\n            <div class=\"container\">\n                <app-user-management></app-user-management>\n            </div>\n        </tab>\n        <tab heading=\"Photo management\" *appHasRole='[\"Admin\",\"Moderator\"]'>\n            <div class=\"container\">\n                <app-photo-management></app-photo-management>\n            </div>\n        </tab>\n    </tabset>\n</div>";
      /***/
    },

    /***/
    "2qCV":
    /*!**********************************************************************!*\
      !*** ./src/app/members/member-messages/member-messages.component.ts ***!
      \**********************************************************************/

    /*! exports provided: MemberMessagesComponent */

    /***/
    function qCV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberMessagesComponent", function () {
        return MemberMessagesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_member_messages_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./member-messages.component.html */
      "BopY");
      /* harmony import */


      var _member_messages_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./member-messages.component.css */
      "+6CW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/message.service */
      "Qskx");

      var MemberMessagesComponent = /*#__PURE__*/function () {
        function MemberMessagesComponent(messageService) {
          _classCallCheck(this, MemberMessagesComponent);

          this.messageService = messageService;
        }

        _createClass(MemberMessagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "sendMessage",
          value: function sendMessage() {
            var _this3 = this;

            this.messageService.sendMessage(this.username, this.messageContent).then(function () {
              _this3.messageForm.reset();
            });
          }
        }]);

        return MemberMessagesComponent;
      }();

      MemberMessagesComponent.ctorParameters = function () {
        return [{
          type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
        }];
      };

      MemberMessagesComponent.propDecorators = {
        messageForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['messageForm']
        }],
        messages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        username: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      MemberMessagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        selector: 'app-member-messages',
        template: _raw_loader_member_messages_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_member_messages_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MemberMessagesComponent);
      /***/
    },

    /***/
    3:
    /*!******************************!*\
      !*** fetch-cookie (ignored) ***!
      \******************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    4:
    /*!**********************************!*\
      !*** abort-controller (ignored) ***!
      \**********************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "4+ph":
    /*!**********************************************************************!*\
      !*** ./src/app/admin/photo-management/photo-management.component.ts ***!
      \**********************************************************************/

    /*! exports provided: PhotoManagementComponent */

    /***/
    function ph(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotoManagementComponent", function () {
        return PhotoManagementComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_photo_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./photo-management.component.html */
      "GV+h");
      /* harmony import */


      var _photo_management_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./photo-management.component.css */
      "Gxrn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PhotoManagementComponent = /*#__PURE__*/function () {
        function PhotoManagementComponent() {
          _classCallCheck(this, PhotoManagementComponent);
        }

        _createClass(PhotoManagementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PhotoManagementComponent;
      }();

      PhotoManagementComponent.ctorParameters = function () {
        return [];
      };

      PhotoManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-photo-management',
        template: _raw_loader_photo_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_photo_management_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PhotoManagementComponent);
      /***/
    },

    /***/
    "4rg4":
    /*!*********************************************************!*\
      !*** ./src/app/errors/not-found/not-found.component.ts ***!
      \*********************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function rg4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "Tkli");
      /* harmony import */


      var _not_found_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./not-found.component.css */
      "7KZ6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NotFoundComponent = /*#__PURE__*/_createClass(function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      });

      NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-not-found',
        template: _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_not_found_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NotFoundComponent);
      /***/
    },

    /***/
    5:
    /*!********************!*\
      !*** ws (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "5ZPe":
    /*!**********************************************!*\
      !*** ./src/app/_services/account.service.ts ***!
      \**********************************************/

    /*! exports provided: AccountService */

    /***/
    function ZPe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountService", function () {
        return AccountService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _presence_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./presence.service */
      "mV+E");

      var AccountService = /*#__PURE__*/function () {
        function AccountService(http, presence) {
          _classCallCheck(this, AccountService);

          this.http = http;
          this.presence = presence;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
          this.currentUserSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
          this.currentUser$ = this.currentUserSource.asObservable();
        }

        _createClass(AccountService, [{
          key: "login",
          value: function login(model) {
            var _this4 = this;

            return this.http.post(this.baseUrl + 'account/login', model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              var user = response;

              if (user) {
                _this4.setCurrentUser(user);

                _this4.presence.createHubConnection(user);
              }
            }));
          }
        }, {
          key: "register",
          value: function register(model) {
            var _this5 = this;

            return this.http.post(this.baseUrl + 'account/register', model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
              if (user) {
                _this5.setCurrentUser(user);

                _this5.presence.createHubConnection(user);
              }
            }));
          }
        }, {
          key: "setCurrentUser",
          value: function setCurrentUser(user) {
            user.roles = [];
            var roles = this.getDecodedToken(user.token).role;
            Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSource.next(user);
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('user');
            this.currentUserSource.next(null);
            this.presence.stopHubConnection();
          }
        }, {
          key: "getDecodedToken",
          value: function getDecodedToken(token) {
            return JSON.parse(atob(token.split('.')[1]));
          }
        }]);

        return AccountService;
      }();

      AccountService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _presence_service__WEBPACK_IMPORTED_MODULE_6__["PresenceService"]
        }];
      };

      AccountService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], AccountService);
      /***/
    },

    /***/
    6:
    /*!*****************************!*\
      !*** eventsource (ignored) ***!
      \*****************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "7KZ6":
    /*!**********************************************************!*\
      !*** ./src/app/errors/not-found/not-found.component.css ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function KZ6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9ycy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "81j5":
    /*!***************************************************************!*\
      !*** ./src/app/errors/server-error/server-error.component.ts ***!
      \***************************************************************/

    /*! exports provided: ServerErrorComponent */

    /***/
    function j5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function () {
        return ServerErrorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_server_error_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./server-error.component.html */
      "MhCG");
      /* harmony import */


      var _server_error_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./server-error.component.css */
      "R5SI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ServerErrorComponent = /*#__PURE__*/function () {
        function ServerErrorComponent(router) {
          _classCallCheck(this, ServerErrorComponent);

          var _a, _b;

          this.router = router;
          var navigation = this.router.getCurrentNavigation();
          this.error = (_b = (_a = navigation === null || navigation === void 0 ? void 0 : navigation.extras) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b['error'];
        }

        _createClass(ServerErrorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ServerErrorComponent;
      }();

      ServerErrorComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ServerErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-server-error',
        template: _raw_loader_server_error_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_server_error_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ServerErrorComponent);
      /***/
    },

    /***/
    "8T1h":
    /*!***************************************************!*\
      !*** ./src/app/_directives/has-role.directive.ts ***!
      \***************************************************/

    /*! exports provided: HasRoleDirective */

    /***/
    function T1h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HasRoleDirective", function () {
        return HasRoleDirective;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/account.service */
      "5ZPe");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var HasRoleDirective = /*#__PURE__*/function () {
        function HasRoleDirective(viewContainerRef, templateRef, accountService) {
          var _this6 = this;

          _classCallCheck(this, HasRoleDirective);

          this.viewContainerRef = viewContainerRef;
          this.templateRef = templateRef;
          this.accountService = accountService;
          this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (user) {
            _this6.user = user;
          });
        }

        _createClass(HasRoleDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            var _a, _b; //clear view if no roles


            if (!((_a = this.user) === null || _a === void 0 ? void 0 : _a.roles) || this.user == null) {
              this.viewContainerRef.clear();
              return;
            }

            if ((_b = this.user) === null || _b === void 0 ? void 0 : _b.roles.some(function (r) {
              return _this7.appHasRole.includes(r);
            })) {
              this.viewContainerRef.createEmbeddedView(this.templateRef);
            } else {
              this.viewContainerRef.clear();
            }
          }
        }]);

        return HasRoleDirective;
      }();

      HasRoleDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
        }];
      };

      HasRoleDirective.propDecorators = {
        appHasRole: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      HasRoleDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appHasRole]'
      })], HasRoleDirective);
      /***/
    },

    /***/
    "8rMn":
    /*!*******************************************!*\
      !*** ./src/app/_services/busy.service.ts ***!
      \*******************************************/

    /*! exports provided: BusyService */

    /***/
    function rMn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusyService", function () {
        return BusyService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");

      var BusyService = /*#__PURE__*/function () {
        function BusyService(spinnerService) {
          _classCallCheck(this, BusyService);

          this.spinnerService = spinnerService;
          this.busyRequestCount = 0;
        }

        _createClass(BusyService, [{
          key: "busy",
          value: function busy() {
            this.busyRequestCount++;
            this.spinnerService.show(undefined, {
              type: 'line-scale-praty',
              bdColor: 'rgba(255,255,255,0)',
              color: '#333333'
            });
          }
        }, {
          key: "idle",
          value: function idle() {
            this.busyRequestCount--;

            if (this.busyRequestCount <= 0) {
              this.busyRequestCount = 0;
              this.spinnerService.hide();
            }
          }
        }]);

        return BusyService;
      }();

      BusyService.ctorParameters = function () {
        return [{
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
        }];
      };

      BusyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], BusyService);
      /***/
    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.component.html */
      "Gd4t");
      /* harmony import */


      var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component.css */
      "RV7M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);

          this.registerMode = false;
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "registerToggle",
          value: function registerToggle() {
            this.registerMode = !this.registerMode;
          }
        }, {
          key: "cancelRegisterModel",
          value: function cancelRegisterModel(event) {
            this.registerMode = event;
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ctorParameters = function () {
        return [];
      };

      HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomeComponent);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "Au4E":
    /*!***************************************!*\
      !*** ./src/app/_models/pagination.ts ***!
      \***************************************/

    /*! exports provided: PaginatedResult */

    /***/
    function Au4E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginatedResult", function () {
        return PaginatedResult;
      });

      var PaginatedResult = /*#__PURE__*/_createClass(function PaginatedResult() {
        _classCallCheck(this, PaginatedResult);
      });
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiUrl: 'https://localhost:5001/api/',
        hubUrl: 'https://localhost:5001/hubs/'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BopY":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-messages/member-messages.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BopY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-body\">\n        <div *ngIf=\"(messageService.messageThread$ | async)?.length === 0\">\n            No messages yet... say hi by using the message box below\n        </div>\n\n        <ul #scrollMe\n            style=\"overflow-y: scroll; height: 500px;\"\n            [scrollTop]=\"scrollMe.scrollHeight\"\n            *ngIf=\"(messageService.messageThread$ | async).length > 0\" \n            class=\"chat\">\n            <li *ngFor=\"let message of (messageService.messageThread$ | async)\">\n                <div>\n                    <span class=\"chat-img float-right\">\n                        <img class=\"rounded-circle\" src=\"{{message.senderPhotoUrl || './assets/user.png'}}\" \n                            alt=\"{{message.senderUsername}}\">\n                    </span>\n                    <div class=\"chat-body\">\n                        <div class=\"header\">\n                            <small class=\"text-muted\">\n                                <span class=\"fa fa-clock-o\">{{message.messageSent | timeago}}</span>\n                                <span class=\"text-danger\" *ngIf=\"!message.dateRead \n                                    && message.senderUsername !== username\">\n                                    (unread)\n                                </span>\n                                <span class=\"text-success\" *ngIf=\"message.dateRead \n                                    && message.senderUsername !== username\">\n                                    (read {{message.dateRead | timeago}})\n                                </span>\n                            </small>\n                        </div>\n                        <p>{{message.content}}</p>\n                    </div>\n                </div>\n            </li>\n        </ul>\n    </div>\n\n    <div class=\"card-footer\">\n        <form #messageForm=\"ngForm\" (submit)=\"sendMessage()\" autocomplete=\"off\">\n            <div class=\"input-group\">\n                <input\n                    name=\"messageContent\"\n                    required\n                    [(ngModel)]=\"messageContent\" \n                    type=\"text\" \n                    class=\"form-control input-sm\" \n                    placeholder=\"Send a private message\">\n                <div class=\"input-group-append\">\n                    <button [disabled]=\"!messageForm.valid\" class=\"btn btn-primary\" type=\"submit\">Send</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>";
      /***/
    },

    /***/
    "Btx/":
    /*!**************************************************!*\
      !*** ./src/app/_interceptors/jwt.interceptor.ts ***!
      \**************************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function Btx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/account.service */
      "5ZPe");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor(accountService) {
          _classCallCheck(this, JwtInterceptor);

          this.accountService = accountService;
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var currentUser;
            this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (user) {
              return currentUser = user;
            });

            if (currentUser) {
              request = request.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(currentUser.token)
                }
              });
            }

            return next.handle(request);
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.ctorParameters = function () {
        return [{
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
        }];
      };

      JwtInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], JwtInterceptor);
      /***/
    },

    /***/
    "Cegr":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/roles-modal/roles-modal.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Cegr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Edit roles for {{user.username}}</h4>\n    <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n      <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form #rolesForm=\"ngForm\" id=\"rolesForm\">\n        <div class=\"form-check\" *ngFor=\"let role of roles\">\n            <input type=\"checkbox\"\n                class=\"form-check-input\"\n                [checked]=\"role.checked\"\n                value=\"role.name\"\n                (change)=\"role.checked = !role.checked\"\n                [disabled]=\"role.name === 'Admin' && user.username === 'admin'\"\n            >\n            <label>{{role.name}}</label>\n        </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"updateRoles()\">Submit</button>\n  </div>";
      /***/
    },

    /***/
    "DruN":
    /*!************************************************!*\
      !*** ./src/app/messages/messages.component.ts ***!
      \************************************************/

    /*! exports provided: MessagesComponent */

    /***/
    function DruN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () {
        return MessagesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_messages_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./messages.component.html */
      "rt/O");
      /* harmony import */


      var _messages_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./messages.component.css */
      "Okie");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_confirm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/confirm.service */
      "xuvy");
      /* harmony import */


      var _services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_services/message.service */
      "Qskx");

      var MessagesComponent = /*#__PURE__*/function () {
        function MessagesComponent(messageService, confirmService) {
          _classCallCheck(this, MessagesComponent);

          this.messageService = messageService;
          this.confirmService = confirmService;
          this.messages = [];
          this.container = 'Unread';
          this.pageNumber = 1;
          this.pageSize = 5;
          this.loading = false;
        }

        _createClass(MessagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadMessages();
          }
        }, {
          key: "loadMessages",
          value: function loadMessages() {
            var _this8 = this;

            this.loading = true;
            this.messageService.getMessages(this.pageNumber, this.pageSize, this.container).subscribe(function (response) {
              _this8.messages = response.result;
              _this8.pagination = response.pagination;
              _this8.loading = false;
            });
          }
        }, {
          key: "deleteMessage",
          value: function deleteMessage(id) {
            var _this9 = this;

            this.confirmService.confirm('Confirm delete message', 'This cannot be undone').subscribe(function (result) {
              if (result) {
                _this9.messageService.deleteMessage(id).subscribe(function () {
                  _this9.messages.splice(_this9.messages.findIndex(function (m) {
                    return m.id === id;
                  }), 1);
                });
              }
            });
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            this.pageNumber = event.page;
            this.loadMessages();
          }
        }]);

        return MessagesComponent;
      }();

      MessagesComponent.ctorParameters = function () {
        return [{
          type: _services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]
        }, {
          type: _services_confirm_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmService"]
        }];
      };

      MessagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-messages',
        template: _raw_loader_messages_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_messages_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MessagesComponent);
      /***/
    },

    /***/
    "FRJe":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/photo-editor/photo-editor.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FRJe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-2\" *ngFor=\"let photo of member.photos\">\n        <img src=\"{{photo.url}}\" alt=\"{{photo.url}}\" class=\"img-thumbnail p-1\">\n        <div class=\"text-center\">\n            <button \n                [disabled]=\"photo.isMain\"\n                (click)=\"setMainPhoto(photo)\"\n                [ngClass]='photo.isMain ? \"btn-success active\" : \"btn-outline-success\"'\n                class=\"btn btn-sm\"\n            >Main</button>\n            <button\n                [disabled]=\"photo.isMain\" \n                (click)=\"deletePhoto(photo.id)\"\n                class=\"btn btn-sm btn-danger\"\n            ><i class=\"fa fa-trash\"></i></button>\n        </div>\n    </div>\n</div>\n\n<div class=\"row mt-3\">\n \n    <div class=\"col-md-3\">\n  \n        <h3>Add photos</h3>\n\n        <div ng2FileDrop\n             [ngClass]=\"{'nv-file-over': hasBaseDropzoneOver}\"\n             (fileOver)=\"fileOverBase($event)\"\n             [uploader]=\"uploader\"\n             class=\"card bg-faded p-3 text-center mb-3 my-drop-zone\">\n             <i class=\"fa fa-upload fa-3x\"></i>\n            Drop photos here\n        </div>\n\n        Multiple\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\n\n        Single\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n    </div>\n\n    <div class=\"col-md-9\" style=\"margin-bottom: 40px\" *ngIf=\"uploader?.queue?.length\">\n\n        <h3>Upload queue</h3>\n        <p>Queue length: {{ uploader?.queue?.length }}</p>\n\n        <table class=\"table\">\n            <thead>\n            <tr>\n                <th width=\"50%\">Name</th>\n                <th>Size</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let item of uploader.queue\">\n                <td><strong>{{ item?.file?.name }}</strong></td>\n                <td *ngIf=\"uploader.options.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n            </tr>\n            </tbody>\n        </table>\n\n        <div>\n            <div>\n                Queue progress:\n                <div class=\"progress\" style=\"\">\n                    <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                </div>\n            </div>\n            <button type=\"button\" class=\"btn btn-success btn-s\"\n                    (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                <span class=\"fa fa-upload\"></span> Upload all\n            </button>\n            <button type=\"button\" class=\"btn btn-warning btn-s\"\n                    (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                <span class=\"fa fa-ban\"></span> Cancel all\n            </button>\n            <button type=\"button\" class=\"btn btn-danger btn-s\"\n                    (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                <span class=\"fa fa-trash\"></span> Remove all\n            </button>\n        </div>\n\n    </div>\n\n</div>";
      /***/
    },

    /***/
    "GCkI":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-management/user-management.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GCkI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <table class=\"table\">\n        <tr>\n            <th style=\"width: 30%\">Username</th>\n            <th style=\"width: 40%\">Active roles</th>\n            <th style=\"width: 30%\"></th>\n        </tr>\n        <tr *ngFor=\"let user of users\">\n            <td>{{user.username}}</td>\n            <td>{{user.roles}}</td>\n            <td><button (click)=\"openRolesModal(user)\" class=\"btn btn-info\">Edit Roles</button></td>\n        </tr>\n    </table>\n</div>";
      /***/
    },

    /***/
    "GOUF":
    /*!**************************************************************!*\
      !*** ./src/app/errors/test-errors/test-errors.component.css ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function GOUF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9ycy90ZXN0LWVycm9ycy90ZXN0LWVycm9ycy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "GV+h":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/photo-management/photo-management.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GVH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>photo-management works!</p>\n";
      /***/
    },

    /***/
    "Gd4t":
    /*!********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function Gd4t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container mt-5\">\n    <div *ngIf=\"!registerMode\" style=\"text-align: center;\">\n    <h1>Find your match</h1>\n    <p class=\"lead\">Come on in to view your matches... all you need to do is sign up!</p>\n        <div class=\"text-center\">\n            <button (click)=\"registerToggle()\" class=\"btn btn-primary btn-lg mr-2\">Register</button>\n            <button class=\"btn btn-info btn-lg \">Learn more</button>\n        </div>\n    </div>\n\n    <div *ngIf=\"registerMode\" class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-4\">\n                <app-register  (cancelRegister)=\"cancelRegisterModel($event)\"></app-register>\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "Gxrn":
    /*!***********************************************************************!*\
      !*** ./src/app/admin/photo-management/photo-management.component.css ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function Gxrn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Bob3RvLW1hbmFnZW1lbnQvcGhvdG8tbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "IiJT":
    /*!*******************************************!*\
      !*** ./src/app/_modules/shared.module.ts ***!
      \*******************************************/

    /*! exports provided: SharedModule */

    /***/
    function IiJT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "dZIy");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "44PX");
      /* harmony import */


      var _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @kolkov/ngx-gallery */
      "XGsO");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-file-upload */
      "7pIB");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "hzby");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "Lm2G");
      /* harmony import */


      var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/buttons */
      "s3T5");
      /* harmony import */


      var ngx_timeago__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-timeago */
      "twue");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");

      var SharedModule = /*#__PURE__*/_createClass(function SharedModule() {
        _classCallCheck(this, SharedModule);
      });

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot({
          positionClass: 'toastr-bottom-right'
        }), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(), _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_6__["NgxGalleryModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"].forRoot(), ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"].forRoot(), ngx_timeago__WEBPACK_IMPORTED_MODULE_11__["TimeagoModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"].forRoot()],
        exports: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"], _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_6__["NgxGalleryModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"], ngx_timeago__WEBPACK_IMPORTED_MODULE_11__["TimeagoModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"]]
      })], SharedModule);
      /***/
    },

    /***/
    "LXXr":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/errors/test-errors/test-errors.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LXXr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container >\n    <button (click)=\"get500Error()\" class=\"btn btn-outline-primary mr-3\">Test 500 Error</button>\n    <button (click)=\"get400Error()\" class=\"btn btn-outline-primary mr-3\">Test 400 Error</button>\n    <button (click)=\"get401Error()\" class=\"btn btn-outline-primary mr-3\">Test 401 Error</button>\n    <button (click)=\"get404Error()\" class=\"btn btn-outline-primary mr-3\">Test 404 Error</button>\n    <button (click)=\"get400ValidationError()\" class=\"btn btn-outline-primary mr-3\">Test 400 Validation Error</button>\n    \n    <div class=\"row mt-5\" *ngIf=\"validationErrors.length > 0\">\n        <ul class=\"text-danger\">\n            <li *ngFor=\"let error of validationErrors\">\n                {{error}}\n            </li>\n        </ul>\n    </div>\n</ng-container>";
      /***/
    },

    /***/
    "LlU7":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lists/lists.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function LlU7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"text-center mt-3\">\n    <h2>{{predicate === 'liked' ? 'Members I like' : 'Members who like me'}}</h2>\n</div>\n\n<div class=\"container mt-3\">\n    <div class=\"row\">\n        <div class=\"btn-group\" name=\"predicate\">\n            <button class=\"btn btn-primary\" btnRadio=\"liked\" \n                [(ngModel)]=\"predicate\" (click)=\"loadLikes()\">Members I like</button>\n            <button class=\"btn btn-primary\" btnRadio=\"likedBy\" \n                [(ngModel)]=\"predicate\" (click)=\"loadLikes()\">Members who like me</button>\n        </div>\n    </div>    \n\n    <div class=\"row mt-3\">\n        <div class=\"col-2\" *ngFor=\"let member of members\">\n            <app-member-card [member]=\"member\"></app-member-card>\n        </div>\n    </div>\n</div>\n\n<div class=\"d-flex justify-content-center\" *ngIf=\"pagination\">\n    <pagination \n        [boundaryLinks]=\"true\" \n        [totalItems]='pagination.totalItems'\n        [itemsPerPage]='pagination.itemsPerPage'\n        [(ngModel)]=\"pagination.currentPage\"\n        (pageChanged)=\"pageChanged($event)\"\n        previousText=\"&lsaquo;\" \n        nextText=\"&rsaquo;\" \n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n</pagination>\n</div>";
      /***/
    },

    /***/
    "MMab":
    /*!****************************************************!*\
      !*** ./src/app/_interceptors/error.interceptor.ts ***!
      \****************************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function MMab(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(router, toastr) {
          _classCallCheck(this, ErrorInterceptor);

          this.router = router;
          this.toastr = toastr;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this10 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              if (error) {
                switch (error.status) {
                  case 400:
                    if (error.error.errors) {
                      var modalStateErrors = [];

                      for (var key in error.error.errors) {
                        if (error.error.errors[key]) {
                          modalStateErrors.push(error.error.errors[key]);
                        }
                      }

                      throw modalStateErrors.flat();
                    } else if (typeof error.error === 'object') {
                      error.statusText = 'Bad Request';

                      _this10.toastr.error(error.statusText, error.status);
                    } else {
                      _this10.toastr.error(error.error, error.status);
                    }

                    break;

                  case 401:
                    error.statusText = 'Unauthorized';

                    _this10.toastr.error(error.statusText, error.status);

                    break;

                  case 404:
                    _this10.router.navigateByUrl('/not-found');

                    break;

                  case 500:
                    var navigationExtras = {
                      state: {
                        error: error.error
                      }
                    };

                    _this10.router.navigateByUrl('/server-error', navigationExtras);

                    break;

                  default:
                    _this10.toastr.error('Something unexpected went wrong');

                    console.log(error);
                    break;
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      };

      ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ErrorInterceptor);
      /***/
    },

    /***/
    "MhCG":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/errors/server-error/server-error.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MhCG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h4>Internal server errror - refreshing the page will make the error disappear!</h4>\n<ng-container *ngIf=\"error\">\n    <h5 class=\"text-danger\">Error: {{error.message}}</h5>\n    <p class=\"font-weight-bold\">Note: If you are seeing this then Angular is probably not to blame</p>\n    <p>what to do next?</p>\n    <ol>\n        <li>Open the chrome dev tools</li>\n        <li>Inspect the network tab</li>\n        <li>Check the failing request</li>\n        <li>Examine the request URL - make sure it is correct</li>\n        <li>Reproduce the error in Postman - if we see the same respone, then the issue is not with Angular</li>\n    </ol>\n    <p>Following is the strack trace - this is where your investigation should start!</p>\n    <code class=\"mt-5\" style=\"background-color: whitesmoke;\">{{error.details}}</code>\n</ng-container>\n";
      /***/
    },

    /***/
    "NWYD":
    /*!****************************************!*\
      !*** ./src/app/_guards/admin.guard.ts ***!
      \****************************************/

    /*! exports provided: AdminGuard */

    /***/
    function NWYD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminGuard", function () {
        return AdminGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/account.service */
      "5ZPe");

      var AdminGuard = /*#__PURE__*/function () {
        function AdminGuard(accountService, toastr) {
          _classCallCheck(this, AdminGuard);

          this.accountService = accountService;
          this.toastr = toastr;
        }

        _createClass(AdminGuard, [{
          key: "canActivate",
          value: function canActivate() {
            var _this11 = this;

            return this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
              if (user && (user.roles.includes('Admin') || user.roles.includes('Moderator'))) {
                return true;
              } else {
                _this11.toastr.error('You cannot enter this area');

                return false;
              }
            }));
          }
        }]);

        return AdminGuard;
      }();

      AdminGuard.ctorParameters = function () {
        return [{
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }];
      };

      AdminGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AdminGuard);
      /***/
    },

    /***/
    "OMJ/":
    /*!********************************************!*\
      !*** ./src/app/_services/admin.service.ts ***!
      \********************************************/

    /*! exports provided: AdminService */

    /***/
    function OMJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminService", function () {
        return AdminService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var AdminService = /*#__PURE__*/function () {
        function AdminService(http) {
          _classCallCheck(this, AdminService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        }

        _createClass(AdminService, [{
          key: "getUsersWithRoles",
          value: function getUsersWithRoles() {
            return this.http.get(this.baseUrl + 'admin/users-with-roles');
          }
        }, {
          key: "updateUserRoles",
          value: function updateUserRoles(username, roles) {
            return this.http.post(this.baseUrl + 'admin/edit-roles/' + username + '?roles=' + roles, {});
          }
        }]);

        return AdminService;
      }();

      AdminService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      AdminService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], AdminService);
      /***/
    },

    /***/
    "OOnH":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function OOnH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form [formGroup]=\"registerForm\" (ngSubmit)=\"registerForm.valid && register()\" autocomplete=\"off\">\n    <h2 class=\"text-center text-primary\">Sign up</h2>\n    <hr>\n    <div class=\"form-group\">\n        <label class=\"control-label\" style=\"margin-right: 10px;\">I am a:</label>\n        <label class=\"radio-inline\">\n            <input type=\"radio\" value=\"made\" formControlName='gender'>Male\n        </label>\n        <label class=\"radio-inline\">\n            <input type=\"radio\" value=\"female\" formControlName='gender' class=\"ml-3\">Female\n        </label>\n    </div>\n    <app-text-input [formControl]='registerForm.controls[\"username\"]' [label] ='\"Username\"'></app-text-input>\n    \n    <app-text-input [formControl]='registerForm.controls[\"knownAs\"]' [label] ='\"Known As\"'></app-text-input>\n    \n    <app-date-input [formControl]='registerForm.controls[\"dateOfBirth\"]' \n    [label] ='\"Date Of Birth\"' [maxDate]='maxDate'></app-date-input>\n\n    <app-text-input [formControl]='registerForm.controls[\"city\"]' [label] ='\"City\"'></app-text-input>\n\n    <app-text-input [formControl]='registerForm.controls[\"country\"]' [label] ='\"Country\"'></app-text-input>\n\n    <app-text-input [formControl]='registerForm.controls[\"password\"]' [label] ='\"Password\"' \n    [type]='\"password\"'></app-text-input>\n    \n    <app-text-input [formControl]='registerForm.controls[\"confirmPassword\"]' \n    [label] ='\"Comfirm Password\"' \n    [type]='\"password\"'></app-text-input>\n\n    <div class=\"row\" *ngIf=\"validationErrors.length > 0\">\n        <ul class=\"text-danger\">\n            <li *ngFor=\"let error of validationErrors\">\n                {{error}}\n            </li>\n        </ul>\n    </div>\n\n    <div class=\"form-group text-center\">\n        <button [disabled]='!registerForm.valid'  class=\"btn btn-success mr-1\" type=\"submit\">Register</button>\n        <button class=\"btn btn-default mr-1\" (click)=\"cancel()\" type=\"button\">Cancel</button>\n    </div>\n  \n</form>\n\n\n";
      /***/
    },

    /***/
    "OcPW":
    /*!********************************************************************!*\
      !*** ./src/app/admin/user-management/user-management.component.ts ***!
      \********************************************************************/

    /*! exports provided: UserManagementComponent */

    /***/
    function OcPW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function () {
        return UserManagementComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-management.component.html */
      "GCkI");
      /* harmony import */


      var _user_management_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-management.component.css */
      "nyuw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var src_app_modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modals/roles-modal/roles-modal.component */
      "yNbP");
      /* harmony import */


      var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/admin.service */
      "OMJ/");

      var UserManagementComponent = /*#__PURE__*/function () {
        function UserManagementComponent(adminService, modalService) {
          _classCallCheck(this, UserManagementComponent);

          this.adminService = adminService;
          this.modalService = modalService;
        }

        _createClass(UserManagementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUsersWithRoles();
          }
        }, {
          key: "getUsersWithRoles",
          value: function getUsersWithRoles() {
            var _this12 = this;

            this.adminService.getUsersWithRoles().subscribe(function (users) {
              _this12.users = users;
            });
          }
        }, {
          key: "openRolesModal",
          value: function openRolesModal(user) {
            var _this13 = this;

            var config = {
              "class": 'modal-dialog-centered',
              initialState: {
                user: user,
                roles: this.getRolesArray(user)
              }
            };
            this.bsModalRef = this.modalService.show(src_app_modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_5__["RolesModalComponent"], config);
            this.bsModalRef.content.updateSelectedRoles.subscribe(function (values) {
              var rolesToUpdate = {
                roles: _toConsumableArray(values.filter(function (el) {
                  return el.checked === true;
                }).map(function (el) {
                  return el.name;
                }))
              };

              if (rolesToUpdate) {
                _this13.adminService.updateUserRoles(user.username, rolesToUpdate.roles).subscribe(function () {
                  user.roles = _toConsumableArray(rolesToUpdate.roles);
                });
              }
            });
          }
        }, {
          key: "getRolesArray",
          value: function getRolesArray(user) {
            var roles = [];
            var userRoles = user.roles;
            var availableRoles = [{
              name: 'Admin',
              value: 'Admin'
            }, {
              name: 'Moderator',
              value: 'Moderator'
            }, {
              name: 'Member',
              value: 'Member'
            }];
            availableRoles.forEach(function (role) {
              var isMatch = false;

              var _iterator = _createForOfIteratorHelper(userRoles),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var userRole = _step.value;

                  if (role.name === userRole) {
                    isMatch = true;
                    role.checked = true;
                    roles.push(role);
                    break;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              if (!isMatch) {
                role.checked = false;
                roles.push(role);
              }
            });
            return roles;
          }
        }]);

        return UserManagementComponent;
      }();

      UserManagementComponent.ctorParameters = function () {
        return [{
          type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]
        }];
      };

      UserManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-management',
        template: _raw_loader_user_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_management_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserManagementComponent);
      /***/
    },

    /***/
    "Od0w":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/member-list.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Od0w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"text-center mt-3\">\n    <h2>Your matches - {{pagination?.totalItems}} found</h2>    \n</div>\n\n<div class=\"container mt-3\">\n    <form #form=\"ngForm\" class=\"form-inline mb-3\" (ngSubmit)=\"loadMembers()\" autocomplete=\"off\">\n        <div class=\"form-group\">\n            <label >Age from:</label>\n            <input type=\"number\" class=\"form-control ml-1\" style=\"width: 70px;\" name=\"minAge\" \n                [(ngModel)]=\"userParams.minAge\">\n        </div>   \n\n        <div class=\"form-group px-2\">\n            <label >Age to:</label>\n            <input type=\"number\" class=\"form-control ml-1\" style=\"width: 70px;\" name=\"maxAge\" \n                [(ngModel)]=\"userParams.maxAge\">\n        </div>  \n\n        <div class=\"form-group px-2\">\n            <label>Show: </label>\n            <select name=\"gender\" style=\"width: 130px;\" [(ngModel)]=\"userParams.gender\" class=\"form-control ml-1\">\n                <option *ngFor=\"let gender of genderList\" [value]=\"gender.value\">\n                    {{gender.display}}\n                </option>    \n            </select>\n        </div>\n\n        <button class=\"btn btn-primary ml-1\" type=\"submit\">Apply Filters</button>\n        <button (click)=\"resetFilters()\" class=\"btn btn-info ml-1\" type=\"submit\">Reset Filters</button>\n        <div class=\"col\">\n            <div class=\"btn-group float-right\">\n                <button\n                    type=\"button\" \n                    class=\"btn btn-primary\" \n                    name=\"orderBy\"\n                    (click)=\"loadMembers()\" \n                    btnRadio=\"lastActive\"\n                    [(ngModel)]=\"userParams.orderBy\">Last Active</button>\n    \n                <button\n                    type=\"button\" \n                    class=\"btn btn-primary\" \n                    name=\"orderBy\"\n                    (click)=\"loadMembers()\" \n                    btnRadio=\"created\"\n                    [(ngModel)]=\"userParams.orderBy\">Newest Members</button>\n            </div>\n        </div>\n        \n\n    </form>\n</div>\n\n<div class=\"row\">\n    <div *ngFor=\"let member of members\" class=\"col-2\">\n        <app-member-card [member]=\"member\"></app-member-card>\n    </div>\n</div>\n\n<div class=\"d-flex justify-content-center\" *ngIf=\"pagination\">\n    <pagination \n        [boundaryLinks]=\"true\" \n        [totalItems]='pagination.totalItems'\n        [itemsPerPage]='pagination.itemsPerPage'\n        [(ngModel)]=\"pagination.currentPage\"\n        (pageChanged)=\"pageChanged($event)\"\n        previousText=\"&lsaquo;\" \n        nextText=\"&rsaquo;\" \n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n</pagination>\n</div>\n";
      /***/
    },

    /***/
    "Okie":
    /*!*************************************************!*\
      !*** ./src/app/messages/messages.component.css ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function Okie(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".img-circle {\r\n    max-height: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWNpcmNsZSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "PL33":
    /*!******************************************************************!*\
      !*** ./src/app/members/member-detail/member-detail.component.ts ***!
      \******************************************************************/

    /*! exports provided: MemberDetailComponent */

    /***/
    function PL33(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberDetailComponent", function () {
        return MemberDetailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_member_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./member-detail.component.html */
      "rw5Q");
      /* harmony import */


      var _member_detail_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./member-detail.component.css */
      "Us+a");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @kolkov/ngx-gallery */
      "XGsO");
      /* harmony import */


      var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/message.service */
      "Qskx");
      /* harmony import */


      var src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_services/presence.service */
      "mV+E");
      /* harmony import */


      var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_services/account.service */
      "5ZPe");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var MemberDetailComponent = /*#__PURE__*/function () {
        function MemberDetailComponent(presence, route, messageService, accountService, router) {
          var _this14 = this;

          _classCallCheck(this, MemberDetailComponent);

          this.presence = presence;
          this.route = route;
          this.messageService = messageService;
          this.accountService = accountService;
          this.router = router;
          this.messages = [];
          this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe(function (user) {
            return _this14.user = user;
          });

          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
          };
        }

        _createClass(MemberDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.route.data.subscribe(function (data) {
              _this15.member = data.member;
            });
            this.route.queryParams.subscribe(function (params) {
              params.tab ? _this15.selectTab(params.tab) : _this15.selectTab(0);
            });
            this.galleryOptions = [{
              width: '500px',
              height: '500px',
              imagePercent: 100,
              thumbnailsColumns: 4,
              imageAnimation: _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_5__["NgxGalleryAnimation"].Slide,
              preview: false
            }];
            this.galleryImages = this.getImages();
          }
        }, {
          key: "getImages",
          value: function getImages() {
            var imageUrls = []; // Kiểm tra xem this.member đã được xác định trước khi cố gắng truy cập thuộc tính photos

            if (this.member && this.member.photos) {
              var _iterator2 = _createForOfIteratorHelper(this.member.photos),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var photo = _step2.value;
                  imageUrls.push({
                    small: photo === null || photo === void 0 ? void 0 : photo.url,
                    medium: photo === null || photo === void 0 ? void 0 : photo.url,
                    big: photo === null || photo === void 0 ? void 0 : photo.url
                  });
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            return imageUrls;
          }
        }, {
          key: "loadMessages",
          value: function loadMessages() {
            var _this16 = this;

            this.messageService.getMessageThread(this.member.username).subscribe(function (messages) {
              _this16.messages = messages;
            });
          }
        }, {
          key: "selectTab",
          value: function selectTab(tabId) {
            this.memberTabs.tabs[tabId].active = true;
          }
        }, {
          key: "onTabActivated",
          value: function onTabActivated(data) {
            this.activeTab = data;

            if (this.activeTab.heading === 'Messages' && this.messages.length === 0) {
              this.messageService.createHubConnection(this.user, this.member.username);
            } else {
              this.messageService.stopHubConnection();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.messageService.stopHubConnection();
          }
        }]);

        return MemberDetailComponent;
      }();

      MemberDetailComponent.ctorParameters = function () {
        return [{
          type: src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_7__["PresenceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }, {
          type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      MemberDetailComponent.propDecorators = {
        memberTabs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['memberTabs', {
            "static": true
          }]
        }]
      };
      MemberDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-member-detail',
        template: _raw_loader_member_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_member_detail_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MemberDetailComponent);
      /***/
    },

    /***/
    "PSoG":
    /*!***************************************!*\
      !*** ./src/app/_guards/auth.guard.ts ***!
      \***************************************/

    /*! exports provided: AuthGuard */

    /***/
    function PSoG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/account.service */
      "5ZPe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(accounntService, toastr) {
          _classCallCheck(this, AuthGuard);

          this.accounntService = accounntService;
          this.toastr = toastr;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            var _this17 = this;

            return this.accounntService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
              if (user) return true;

              _this17.toastr.error('You shall not pass!');

              return false;
            }));
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], AuthGuard);
      ;
      /***/
    },

    /***/
    "Qskx":
    /*!**********************************************!*\
      !*** ./src/app/_services/message.service.ts ***!
      \**********************************************/

    /*! exports provided: MessageService */

    /***/
    function Qskx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageService", function () {
        return MessageService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @microsoft/signalr */
      "6HpG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _paginationHelpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./paginationHelpers */
      "VkjZ");

      var MessageService = /*#__PURE__*/function () {
        function MessageService(http) {
          _classCallCheck(this, MessageService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
          this.hubUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].hubUrl;
          this.messageThreadSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
          this.messageThread$ = this.messageThreadSource.asObservable();
        }

        _createClass(MessageService, [{
          key: "createHubConnection",
          value: function createHubConnection(user, otherUsername) {
            var _this18 = this;

            this.hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__["HubConnectionBuilder"]().withUrl(this.hubUrl + 'message?user=' + otherUsername, {
              accessTokenFactory: function accessTokenFactory() {
                return user.token;
              }
            }).withAutomaticReconnect().build();
            this.hubConnection.start()["catch"](function (error) {
              return console.log(error);
            });
            this.hubConnection.on('ReceiveMessageThread', function (messages) {
              _this18.messageThreadSource.next(messages);
            });
            this.hubConnection.on('NewMessage', function (message) {
              _this18.messageThread$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (messages) {
                _this18.messageThreadSource.next([].concat(_toConsumableArray(messages), [message]));
              });
            });
            this.hubConnection.on('UpdatedGroup', function (group) {
              if (group.connections.some(function (x) {
                return x.username === otherUsername;
              })) {
                _this18.messageThread$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (messages) {
                  messages.forEach(function (message) {
                    if (!message.dateRead) {
                      message.dateRead = new Date(Date.now());
                    }
                  });

                  _this18.messageThreadSource.next(_toConsumableArray(messages));
                });
              }
            });
            this.hubConnection.on('UpdatedGroup', function (group) {
              if (group.connections.some(function (x) {
                return x.username === otherUsername;
              })) {
                _this18.messageThread$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (messages) {
                  messages.forEach(function (message) {
                    if (!message.dateRead) {
                      message.dateRead = new Date(Date.now());
                    }
                  });

                  _this18.messageThreadSource.next(_toConsumableArray(messages));
                });
              }
            });
          }
        }, {
          key: "stopHubConnection",
          value: function stopHubConnection() {
            if (this.hubConnection) {
              this.hubConnection.stop();
            }
          }
        }, {
          key: "getMessages",
          value: function getMessages(pageNumber, pageSize, container) {
            var params = Object(_paginationHelpers__WEBPACK_IMPORTED_MODULE_7__["getPaginationHeaders"])(pageNumber, pageSize);
            params = params.append('Container', container);
            return Object(_paginationHelpers__WEBPACK_IMPORTED_MODULE_7__["getPaginatedResult"])(this.baseUrl + 'messages', params, this.http);
          }
        }, {
          key: "getMessageThread",
          value: function getMessageThread(username) {
            return this.http.get(this.baseUrl + 'messages/thread/' + username);
          }
        }, {
          key: "sendMessage",
          value: function () {
            var _sendMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(username, content) {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", this.hubConnection.invoke('SendMessage', {
                      recipientUsername: username,
                      content: content
                    })["catch"](function (error) {
                      return console.log(error);
                    }));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));

            function sendMessage(_x, _x2) {
              return _sendMessage.apply(this, arguments);
            }

            return sendMessage;
          }()
        }, {
          key: "deleteMessage",
          value: function deleteMessage(id) {
            return this.http["delete"](this.baseUrl + 'messages/' + id);
          }
        }]);

        return MessageService;
      }();

      MessageService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      MessageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], MessageService);
      /***/
    },

    /***/
    "R5SI":
    /*!****************************************************************!*\
      !*** ./src/app/errors/server-error/server-error.component.css ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function R5SI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9ycy9zZXJ2ZXItZXJyb3Ivc2VydmVyLWVycm9yLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "RV7M":
    /*!*****************************************!*\
      !*** ./src/app/home/home.component.css ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function RV7M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "Rv1c":
    /*!**************************************************************!*\
      !*** ./src/app/members/member-list/member-list.component.ts ***!
      \**************************************************************/

    /*! exports provided: MemberListComponent */

    /***/
    function Rv1c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberListComponent", function () {
        return MemberListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_member_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./member-list.component.html */
      "Od0w");
      /* harmony import */


      var _member_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./member-list.component.css */
      "V6PN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/members.service */
      "YMan");

      var MemberListComponent = /*#__PURE__*/function () {
        function MemberListComponent(memberService) {
          _classCallCheck(this, MemberListComponent);

          this.memberService = memberService;
          this.genderList = [{
            value: 'male',
            display: 'Males'
          }, {
            value: 'female',
            display: 'Females'
          }];
          this.userParams = this.memberService.getUserParams();
        }

        _createClass(MemberListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadMembers();
          }
        }, {
          key: "loadMembers",
          value: function loadMembers() {
            var _this19 = this;

            this.memberService.setUserParams(this.userParams);
            this.memberService.getMembers(this.userParams).subscribe(function (response) {
              _this19.members = response.result;
              _this19.pagination = response.pagination;
            });
          }
        }, {
          key: "resetFilters",
          value: function resetFilters() {
            this.userParams = this.memberService.resetUserParams();
            this.loadMembers();
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            this.userParams.pageNumber = event.page;
            this.memberService.setUserParams(this.userParams);
            this.loadMembers();
          }
        }]);

        return MemberListComponent;
      }();

      MemberListComponent.ctorParameters = function () {
        return [{
          type: src_app_services_members_service__WEBPACK_IMPORTED_MODULE_4__["MembersService"]
        }];
      };

      MemberListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-member-list',
        template: _raw_loader_member_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_member_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MemberListComponent);
      /***/
    },

    /***/
    "SECP":
    /*!***************************************!*\
      !*** ./src/app/nav/nav.component.css ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function SECP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dropdown-toggle, .dropdown-item {\r\n    cursor: pointer;\r\n}\r\n\r\nimg {\r\n    max-height: 50px;\r\n    border: 2px solid #fff;\r\n    display: inline;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi10b2dnbGUsIC5kcm9wZG93bi1pdGVtIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59Il19 */";
      /***/
    },

    /***/
    "SFMN":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-edit/member-edit.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SFMN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\" *ngIf=\"member\">\n    <div class=\"col-4\">\n        <h1>Your profile</h1>\n    </div>\n    <div class=\"col-8\">\n        <div class=\"alert alert-info\" *ngIf=\"editForm.dirty\">\n            <strong>Information: </strong>You have made changes. Any unsaved changes will be lost\n        </div>\n    </div>\n    <div class=\"col-4\">\n        <div class=\"card\">\n            <img src=\"{{member.photoUrl || './assets/user.png'}}\" alt=\"{{member.knownAs}}\" \n                class=\"card-img-top img-thumbnail\">  \n            <div class=\"card-body\">\n                <div>\n                    <strong>Location:</strong>\n                    <p>{{member.city}}, {{member.country}}</p>\n                </div>\n                <div>\n                    <strong>Age:</strong>\n                    <p>{{member.age}}</p>\n                </div>\n                <div>\n                    <strong>Last Active:</strong>\n                    <p>{{member.lastActive | timeago}}</p>\n                </div>\n                <div>\n                    <strong>Member since:</strong>\n                    <p>{{member.created | date: 'dd MMM yyyy'}}</p>\n                </div>\n            </div>  \n            <div class=\"card-footer\">\n                <button [disabled]=\"!editForm.dirty\" form=\"editForm\" type=\"submit\" class=\"btn btn-success btn-block\">Save Changes</button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-8\">\n        <tabset class=\"member-tabset\"> \n            <tab heading=\"About {{member.knownAs}}\">\n                <form #editForm=\"ngForm\" id=\"editForm\" (ngSubmit)=\"updateMember()\">\n                    <h4>Desciption</h4>\n                    <textarea class=\"form-control\" [(ngModel)]=\"member.introduction\" name=\"introduction\" rows=\"6\"></textarea>\n                    <h4 class=\"mt-2\">Looking for</h4>\n                    <textarea class=\"form-control\" [(ngModel)]=\"member.lookingFor\" name=\"lookingFor\" rows=\"6\"></textarea>\n                    <h4 class=\"mt-2\">Interests</h4>\n                    <textarea class=\"form-control\" [(ngModel)]=\"member.interests\" name=\"interests\" rows=\"6\"></textarea>\n                    <h4 class=\"mt-2\">Location Details: </h4>\n                    <div class=\"form-inline\">\n                        <label for=\"city\">City: </label>\n                        <input [(ngModel)]=\"member.city\" type=\"text\" name=\"city\" class=\"form-control mx-2\">\n                        <label for=\"city\">Country: </label>\n                        <input [(ngModel)]=\"member.country\" type=\"text\" name=\"country\" class=\"form-control mx-2\">\n                    </div>\n                </form>\n            </tab>\n            <tab heading=\"Edit Photos\">\n                <app-photo-editor [member]=\"member\"></app-photo-editor>\n            </tab>\n        </tabset>\n    </div>\n</div>";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./_services/account.service */
      "5ZPe");
      /* harmony import */


      var _services_presence_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./_services/presence.service */
      "mV+E");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(accountService, presence) {
          _classCallCheck(this, AppComponent);

          this.accountService = accountService;
          this.presence = presence;
          this.title = 'The Dating app';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setCurrentUser();
          }
        }, {
          key: "setCurrentUser",
          value: function setCurrentUser() {
            var user = JSON.parse(localStorage.getItem('user') || null);

            if (user) {
              this.accountService.setCurrentUser(user);
              this.presence.createHubConnection(user);
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]
        }, {
          type: _services_presence_service__WEBPACK_IMPORTED_MODULE_5__["PresenceService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "Tkli":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/errors/not-found/not-found.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Tkli(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <h1>Not found</h1>\n    <button class=\"btn btn-info btn-lg\" routerLink=\"/\">Return to home page</button>\n</div>\n";
      /***/
    },

    /***/
    "U0OR":
    /*!***************************************************************!*\
      !*** ./src/app/members/member-edit/member-edit.component.css ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function U0OR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".img-thumbnail {\r\n    margin: 25px;\r\n    width: 85%;\r\n    height: 85%;\r\n}\r\n\r\n.card-body {\r\n    padding: 0 25px;\r\n}\r\n\r\n.card-footer {\r\n    padding: 10px 15px;\r\n    background-color: #fff;\r\n    border-top: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItZWRpdC9tZW1iZXItZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL21lbWJlci1lZGl0L21lbWJlci1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXRodW1ibmFpbCB7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMCAyNXB4O1xyXG59XHJcblxyXG4uY2FyZC1mb290ZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "UpVr":
    /*!************************************************************!*\
      !*** ./src/app/_forms/date-input/date-input.component.css ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function UpVr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19mb3Jtcy9kYXRlLWlucHV0L2RhdGUtaW5wdXQuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "Ur/1":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-card/member-card.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ur1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card mb-4\">\n    <div class=\"card-img-wrapper\">\n        <img src=\"{{member.photoUrl || './assets/user.png'}}\" alt=\"{{member.knownAs}}\" class=\"card-img-top\">\n        <ul class=\"list-inline member-icons animate text-center\">\n            <li class=\"list-inline-item\"><button routerLink=\"/members/{{member.username}}\" class=\"btn btn-primary\">\n                <i class=\"fa fa-user\"></i></button></li>\n            <li class=\"list-inline-item\"><button (click)=\"addLike(member)\" class=\"btn btn-primary\">\n                <i class=\"fa fa-heart\"></i></button></li>\n            <li class=\"list-inline-item\"><button \n                routerLink='/members/{{member.username}}'\n                [queryParams]='{tab: 3}'\n                 class=\"btn btn-primary\">\n                <i class=\"fa fa-envelope\"></i></button></li>\n        </ul>\n    </div>\n    <div class=\"card-body p-1\">\n        <h6 class=\"card-title text-center mb-1\">\n            <span [class.is-online]=\"(presence.onlineUsers$ | async).includes(member.username)\">\n                <i class=\"fa fa-user mr-2\"> </i>\n            </span>\n           \n            {{member.knownAs}}, {{member.age}}\n        </h6>\n        <p class=\"card-text text-muted text-center\">{{member.city}}</p>\n    </div>\n</div>";
      /***/
    },

    /***/
    "Us+a":
    /*!*******************************************************************!*\
      !*** ./src/app/members/member-detail/member-detail.component.css ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function UsA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".img-thumbnail {\r\n    margin: 25px;\r\n    width: 85%;\r\n    height: 85%;\r\n}\r\n\r\n.card-body {\r\n    padding: 0 25px;\r\n}\r\n\r\n.card-footer {\r\n    padding: 10px 15px;\r\n    background-color: #fff;\r\n    border-top: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItZGV0YWlsL21lbWJlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9tZW1iZXItZGV0YWlsL21lbWJlci1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctdGh1bWJuYWlsIHtcclxuICAgIG1hcmdpbjogMjVweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwIDI1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "V6PN":
    /*!***************************************************************!*\
      !*** ./src/app/members/member-list/member-list.component.css ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function V6PN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvbWVtYmVyLWxpc3QvbWVtYmVyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "VNsv":
    /*!******************************************************!*\
      !*** ./src/app/_interceptors/loading.interceptor.ts ***!
      \******************************************************/

    /*! exports provided: LoadingInterceptor */

    /***/
    function VNsv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingInterceptor", function () {
        return LoadingInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_busy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/busy.service */
      "8rMn");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var LoadingInterceptor = /*#__PURE__*/function () {
        function LoadingInterceptor(busyService) {
          _classCallCheck(this, LoadingInterceptor);

          this.busyService = busyService;
        }

        _createClass(LoadingInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this20 = this;

            this.busyService.busy();
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              _this20.busyService.idle();
            }));
          }
        }]);

        return LoadingInterceptor;
      }();

      LoadingInterceptor.ctorParameters = function () {
        return [{
          type: _services_busy_service__WEBPACK_IMPORTED_MODULE_2__["BusyService"]
        }];
      };

      LoadingInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], LoadingInterceptor);
      /***/
    },

    /***/
    "VkjZ":
    /*!************************************************!*\
      !*** ./src/app/_services/paginationHelpers.ts ***!
      \************************************************/

    /*! exports provided: getPaginatedResult, getPaginationHeaders */

    /***/
    function VkjZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getPaginatedResult", function () {
        return getPaginatedResult;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getPaginationHeaders", function () {
        return getPaginationHeaders;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _models_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_models/pagination */
      "Au4E");

      function getPaginatedResult(url, params, http) {
        var paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_2__["PaginatedResult"]();
        return http.get(url, {
          observe: 'response',
          params: params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
          var _a;

          paginatedResult.result = response.body;

          if (response.headers.get('Pagination') !== null) {
            paginatedResult.pagination = JSON.parse((_a = response.headers.get('Pagination')) !== null && _a !== void 0 ? _a : '');
          }

          return paginatedResult;
        }));
      }

      function getPaginationHeaders(pageNumber, pageSize) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        params = params.append('pageNumber', pageNumber.toString());
        params = params.append('pageSize', pageSize.toString());
        return params;
      }
      /***/

    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ngx-spinner>\r\n    <h3>Loading...</h3>\r\n</ngx-spinner>\r\n\r\n<app-nav></app-nav>\r\n\r\n<div class=\"container\" style=\"margin-top: 100px\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n";
      /***/
    },

    /***/
    "YMan":
    /*!**********************************************!*\
      !*** ./src/app/_services/members.service.ts ***!
      \**********************************************/

    /*! exports provided: MembersService */

    /***/
    function YMan(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MembersService", function () {
        return MembersService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _models_userParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_models/userParams */
      "nXO7");
      /* harmony import */


      var _account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./account.service */
      "5ZPe");
      /* harmony import */


      var _paginationHelpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./paginationHelpers */
      "VkjZ");

      var MembersService = /*#__PURE__*/function () {
        function MembersService(http, accountService) {
          var _this21 = this;

          _classCallCheck(this, MembersService);

          this.http = http;
          this.accountService = accountService;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
          this.members = [];
          this.memberCache = new Map();
          this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (user) {
            _this21.user = _this21.user;
            _this21.userParams = new _models_userParams__WEBPACK_IMPORTED_MODULE_6__["UserParams"](user);
          });
        }

        _createClass(MembersService, [{
          key: "getUserParams",
          value: function getUserParams() {
            return this.userParams;
          }
        }, {
          key: "setUserParams",
          value: function setUserParams(params) {
            this.userParams = params;
          }
        }, {
          key: "resetUserParams",
          value: function resetUserParams() {
            this.userParams = new _models_userParams__WEBPACK_IMPORTED_MODULE_6__["UserParams"](this.user);
            return this.userParams;
          }
        }, {
          key: "getMembers",
          value: function getMembers(userParams) {
            var _this22 = this;

            var response = this.memberCache.get(Object.values(userParams).join('-'));

            if (response) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(response);
            }

            var params = Object(_paginationHelpers__WEBPACK_IMPORTED_MODULE_8__["getPaginationHeaders"])(userParams.pageNumber, userParams.pageSize);
            params = params.append('minAge', userParams.minAge.toString());
            params = params.append('maxAge', userParams.maxAge.toString());
            params = params.append('gender', userParams.gender);
            params = params.append('orderBy', userParams.orderBy);
            return Object(_paginationHelpers__WEBPACK_IMPORTED_MODULE_8__["getPaginatedResult"])(this.baseUrl + 'users', params, this.http).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              _this22.memberCache.set(Object.values(userParams).join('-'), response);

              return response;
            }));
          }
        }, {
          key: "getMember",
          value: function getMember(username) {
            var member = _toConsumableArray(this.memberCache.values()).reduce(function (arr, elem) {
              return arr.concat(elem.result);
            }, []).find(function (member) {
              return member.username === username;
            });

            if (member) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(member);
            }

            return this.http.get(this.baseUrl + 'users/' + username);
          }
        }, {
          key: "updateMember",
          value: function updateMember(member) {
            var _this23 = this;

            return this.http.put(this.baseUrl + 'users', member).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
              var index = _this23.members.indexOf(member);

              _this23.members[index] = member;
            }));
          }
        }, {
          key: "setMainPhoto",
          value: function setMainPhoto(photoId) {
            return this.http.put(this.baseUrl + 'users/set-main-photo/' + photoId, {});
          }
        }, {
          key: "deletePhoto",
          value: function deletePhoto(photoId) {
            return this.http["delete"](this.baseUrl + 'users/delete-photo/' + photoId);
          }
        }, {
          key: "addLike",
          value: function addLike(username) {
            return this.http.post(this.baseUrl + 'likes/' + username, {});
          }
        }, {
          key: "getLikes",
          value: function getLikes(predicate, pageNumber, pageSize) {
            var params = Object(_paginationHelpers__WEBPACK_IMPORTED_MODULE_8__["getPaginationHeaders"])(pageNumber, pageSize);
            params = params.append('predicate', predicate);
            return Object(_paginationHelpers__WEBPACK_IMPORTED_MODULE_8__["getPaginatedResult"])(this.baseUrl + 'likes', params, this.http);
          }
        }]);

        return MembersService;
      }();

      MembersService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]
        }];
      };

      MembersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], MembersService);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./nav/nav.component */
      "izVM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./register/register.component */
      "1W4x");
      /* harmony import */


      var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./members/member-list/member-list.component */
      "Rv1c");
      /* harmony import */


      var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./members/member-detail/member-detail.component */
      "PL33");
      /* harmony import */


      var _lists_lists_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./lists/lists.component */
      "hnRM");
      /* harmony import */


      var _messages_messages_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./messages/messages.component */
      "DruN");
      /* harmony import */


      var _modules_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./_modules/shared.module */
      "IiJT");
      /* harmony import */


      var _errors_test_errors_test_errors_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./errors/test-errors/test-errors.component */
      "/Lly");
      /* harmony import */


      var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./_interceptors/error.interceptor */
      "MMab");
      /* harmony import */


      var _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./errors/not-found/not-found.component */
      "4rg4");
      /* harmony import */


      var _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./errors/server-error/server-error.component */
      "81j5");
      /* harmony import */


      var _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./members/member-card/member-card.component */
      "kntC");
      /* harmony import */


      var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./_interceptors/jwt.interceptor */
      "Btx/");
      /* harmony import */


      var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./members/member-edit/member-edit.component */
      "u2he");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./_interceptors/loading.interceptor */
      "VNsv");
      /* harmony import */


      var _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./members/photo-editor/photo-editor.component */
      "Zkt1");
      /* harmony import */


      var _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./_forms/text-input/text-input.component */
      "hOav");
      /* harmony import */


      var _forms_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./_forms/date-input/date-input.component */
      "0r7+");
      /* harmony import */


      var _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./members/member-messages/member-messages.component */
      "2qCV");
      /* harmony import */


      var _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./admin/admin-panel/admin-panel.component */
      "qPLm");
      /* harmony import */


      var _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./_directives/has-role.directive */
      "8T1h");
      /* harmony import */


      var _admin_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./admin/user-management/user-management.component */
      "OcPW");
      /* harmony import */


      var _admin_photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./admin/photo-management/photo-management.component */
      "4+ph");
      /* harmony import */


      var _modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./modals/roles-modal/roles-modal.component */
      "yNbP");
      /* harmony import */


      var _modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./modals/confirm-dialog/confirm-dialog.component */
      "vMgs");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_11__["MemberListComponent"], _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_12__["MemberDetailComponent"], _lists_lists_component__WEBPACK_IMPORTED_MODULE_13__["ListsComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_14__["MessagesComponent"], _errors_test_errors_test_errors_component__WEBPACK_IMPORTED_MODULE_16__["TestErrorsComponent"], _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"], _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_19__["ServerErrorComponent"], _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_20__["MemberCardComponent"], _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_22__["MemberEditComponent"], _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_25__["PhotoEditorComponent"], _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_26__["TextInputComponent"], _forms_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_27__["DateInputComponent"], _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_28__["MemberMessagesComponent"], _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_29__["AdminPanelComponent"], _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_30__["HasRoleDirective"], _admin_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_31__["UserManagementComponent"], _admin_photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_32__["PhotoManagementComponent"], _modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_33__["RolesModalComponent"], _modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_34__["ConfirmDialogComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _modules_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_23__["NgxSpinnerModule"]],
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_17__["ErrorInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_21__["JwtInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_24__["LoadingInterceptor"],
          multi: true
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "Zkt1":
    /*!****************************************************************!*\
      !*** ./src/app/members/photo-editor/photo-editor.component.ts ***!
      \****************************************************************/

    /*! exports provided: PhotoEditorComponent */

    /***/
    function Zkt1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotoEditorComponent", function () {
        return PhotoEditorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_photo_editor_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./photo-editor.component.html */
      "FRJe");
      /* harmony import */


      var _photo_editor_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./photo-editor.component.css */
      "cGH7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-file-upload */
      "7pIB");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/account.service */
      "5ZPe");
      /* harmony import */


      var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_services/members.service */
      "YMan");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var PhotoEditorComponent = /*#__PURE__*/function () {
        function PhotoEditorComponent(accountService, memberService) {
          var _this24 = this;

          _classCallCheck(this, PhotoEditorComponent);

          this.accountService = accountService;
          this.memberService = memberService;
          this.hasBaseDropZoneOver = false;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
          this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (user) {
            return _this24.user = user;
          });
        }

        _createClass(PhotoEditorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeUploader();
          }
        }, {
          key: "fileOverBase",
          value: function fileOverBase(e) {
            this.hasBaseDropZoneOver = e;
          }
        }, {
          key: "setMainPhoto",
          value: function setMainPhoto(photo) {
            var _this25 = this;

            this.memberService.setMainPhoto(photo.id).subscribe(function () {
              _this25.user.photoUrl = photo.url;

              _this25.accountService.setCurrentUser(_this25.user);

              _this25.member.photoUrl = photo.url;

              _this25.member.photos.forEach(function (p) {
                if (p.isMain) p.isMain = false;
                if (p.id === photo.id) p.isMain = true;
              });
            });
          }
        }, {
          key: "deletePhoto",
          value: function deletePhoto(photoId) {
            var _this26 = this;

            this.memberService.deletePhoto(photoId).subscribe(function () {
              _this26.member.photos = _this26.member.photos.filter(function (x) {
                return x.id !== photoId;
              });
            });
          }
        }, {
          key: "initializeUploader",
          value: function initializeUploader() {
            var _this27 = this;

            this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({
              url: this.baseUrl + 'users/add-photo',
              authToken: 'Bearer ' + this.user.token,
              isHTML5: true,
              allowedFileType: ['image'],
              removeAfterUpload: true,
              autoUpload: false,
              maxFileSize: 10 * 1024 * 1024
            });

            this.uploader.onAfterAddingFile = function (file) {
              file.withCredentials = false;
            };

            this.uploader.onSuccessItem = function (item, response, status, headers) {
              if (response) {
                var photo = JSON.parse(response);

                _this27.member.photos.push(photo);

                if (photo.isMain) {
                  _this27.user.photoUrl = photo.url;
                  _this27.member.photoUrl = photo.url;

                  _this27.accountService.setCurrentUser(_this27.user);
                }
              }
            };
          }
        }]);

        return PhotoEditorComponent;
      }();

      PhotoEditorComponent.ctorParameters = function () {
        return [{
          type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]
        }, {
          type: src_app_services_members_service__WEBPACK_IMPORTED_MODULE_7__["MembersService"]
        }];
      };

      PhotoEditorComponent.propDecorators = {
        member: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PhotoEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-photo-editor',
        template: _raw_loader_photo_editor_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_photo_editor_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PhotoEditorComponent);
      /***/
    },

    /***/
    "a8qC":
    /*!********************************************************!*\
      !*** ./src/app/_resolvers/member-detailed.resolver.ts ***!
      \********************************************************/

    /*! exports provided: MemberDetailedResolver */

    /***/
    function a8qC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberDetailedResolver", function () {
        return MemberDetailedResolver;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_members_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/members.service */
      "YMan");

      var MemberDetailedResolver = /*#__PURE__*/function () {
        function MemberDetailedResolver(memberService) {
          _classCallCheck(this, MemberDetailedResolver);

          this.memberService = memberService;
        }

        _createClass(MemberDetailedResolver, [{
          key: "resolve",
          value: function resolve(route) {
            return this.memberService.getMember(route.paramMap.get('username'));
          }
        }]);

        return MemberDetailedResolver;
      }();

      MemberDetailedResolver.ctorParameters = function () {
        return [{
          type: _services_members_service__WEBPACK_IMPORTED_MODULE_2__["MembersService"]
        }];
      };

      MemberDetailedResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MemberDetailedResolver);
      /***/
    },

    /***/
    "cGH7":
    /*!*****************************************************************!*\
      !*** ./src/app/members/photo-editor/photo-editor.component.css ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function cGH7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvcGhvdG8tZWRpdG9yL3Bob3RvLWVkaXRvci5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "gTRF":
    /*!**************************************************************!*\
      !*** ./src/app/modals/roles-modal/roles-modal.component.css ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function gTRF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9yb2xlcy1tb2RhbC9yb2xlcy1tb2RhbC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "hOav":
    /*!***********************************************************!*\
      !*** ./src/app/_forms/text-input/text-input.component.ts ***!
      \***********************************************************/

    /*! exports provided: TextInputComponent */

    /***/
    function hOav(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextInputComponent", function () {
        return TextInputComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_text_input_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./text-input.component.html */
      "n7CQ");
      /* harmony import */


      var _text_input_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./text-input.component.css */
      "1f5s");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var TextInputComponent = /*#__PURE__*/function () {
        function TextInputComponent(ngControl) {
          _classCallCheck(this, TextInputComponent);

          this.ngControl = ngControl;
          this.label = '';
          this.type = 'text';
          this.ngControl.valueAccessor = this;
        }

        _createClass(TextInputComponent, [{
          key: "writeValue",
          value: function writeValue(obj) {}
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {}
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {}
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TextInputComponent;
      }();

      TextInputComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"]
          }]
        }];
      };

      TextInputComponent.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      TextInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-text-input',
        template: _raw_loader_text_input_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_text_input_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TextInputComponent);
      /***/
    },

    /***/
    "hnRM":
    /*!******************************************!*\
      !*** ./src/app/lists/lists.component.ts ***!
      \******************************************/

    /*! exports provided: ListsComponent */

    /***/
    function hnRM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListsComponent", function () {
        return ListsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lists_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lists.component.html */
      "LlU7");
      /* harmony import */


      var _lists_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lists.component.css */
      "zqoj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_members_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/members.service */
      "YMan");

      var ListsComponent = /*#__PURE__*/function () {
        function ListsComponent(memberService) {
          _classCallCheck(this, ListsComponent);

          this.memberService = memberService;
          this.predicate = 'liked';
          this.pageNumber = 1;
          this.pageSize = 5;
        }

        _createClass(ListsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadLikes();
          }
        }, {
          key: "loadLikes",
          value: function loadLikes() {
            var _this28 = this;

            this.memberService.getLikes(this.predicate, this.pageNumber, this.pageSize).subscribe(function (response) {
              _this28.members = response.result;
              _this28.pagination = response.pagination;
            });
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            this.pageNumber = event.page;
            this.loadLikes();
          }
        }]);

        return ListsComponent;
      }();

      ListsComponent.ctorParameters = function () {
        return [{
          type: _services_members_service__WEBPACK_IMPORTED_MODULE_4__["MembersService"]
        }];
      };

      ListsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lists',
        template: _raw_loader_lists_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lists_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ListsComponent);
      /***/
    },

    /***/
    "hqKe":
    /*!*************************************************************!*\
      !*** ./src/app/admin/admin-panel/admin-panel.component.css ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function hqKe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXBhbmVsL2FkbWluLXBhbmVsLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "huGP":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/confirm-dialog/confirm-dialog.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function huGP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">{{title}}</h4>\n  </div>\n  <div class=\"modal-body\">\n    <p>{{message}}</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"confirm()\">{{btnOkText}}</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"decline()\">{{btnCancelText}}</button>\n  </div>";
      /***/
    },

    /***/
    "izVM":
    /*!**************************************!*\
      !*** ./src/app/nav/nav.component.ts ***!
      \**************************************/

    /*! exports provided: NavComponent */

    /***/
    function izVM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
        return NavComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nav.component.html */
      "keMZ");
      /* harmony import */


      var _nav_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nav.component.css */
      "SECP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/account.service */
      "5ZPe");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var NavComponent = /*#__PURE__*/function () {
        function NavComponent(accountService, router, toastr) {
          _classCallCheck(this, NavComponent);

          this.accountService = accountService;
          this.router = router;
          this.toastr = toastr;
          this.model = {};
        }

        _createClass(NavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "login",
          value: function login() {
            var _this29 = this;

            this.accountService.login(this.model).subscribe(function (response) {
              _this29.router.navigateByUrl('\members');
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.accountService.logout();
            this.router.navigateByUrl('/');
          }
        }]);

        return NavComponent;
      }();

      NavComponent.ctorParameters = function () {
        return [{
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }];
      };

      NavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav',
        template: _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NavComponent);
      /***/
    },

    /***/
    "keMZ":
    /*!******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function keMZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-primary\">\n  <div class='container'>\n    <a class=\"navbar-brand\" routerLink='/' routerLinkActive=\"active\">Dating App</a>\n      \n    <ul class=\"navbar-nav mr-auto\">\n      <ng-container *ngIf=\"accountService.currentUser$ | async\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink='/members' routerLinkActive=\"active\">Matches</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink='/lists' routerLinkActive=\"active\">Lists</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink='/messages' routerLinkActive=\"active\">Messages</a>\n        </li>\n        <li *appHasRole='[\"Admin\", \"Moderator\"]' class=\"nav-item\">\n          <a class=\"nav-link\" routerLink='/admin' routerLinkActive=\"active\">Admin</a>\n        </li>\n      </ng-container>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink='/errors' routerLinkActive=\"active\">Errors</a>\n      </li>\n        \n      </ul>\n      <div class=\"dropdown\" *ngIf=\"accountService.currentUser$ | async as user\"  dropdown>\n        <img src=\"{{user.photoUrl || './assets/user.png'}}\" alt=\"{{user.username}}\">\n        <a class=\"dropdown-toggle text-light ml-2\" dropdownToggle>Welcome {{user.knownAs || user.username | titlecase}}</a>\n        <div class=\"dropdown-menu mt-3\" *dropdownMenu>\n          <a class=\"dropdown-item\"routerLink=\"/member/edit\" routerLinkActive=\"active\">Edit Profile</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" (click)=\"logout()\">Logout</a>\n        </div>\n      </div>\n      <form *ngIf=\"(accountService.currentUser$ | async) === null\" #loginForm=\"ngForm\" class=\"d-flex\" (ngSubmit)=\"login()\" \n      autocomplete=\"off\">\n        <input \n        name=\"username\"\n        [(ngModel)] = \"model.username\"\n        class=\"form-control mr-sm-2\" \n        type=\"text\" \n        placeholder=\"Username\">\n        <input \n        name=\"password\"\n        [(ngModel)] = \"model.password\"\n        class=\"form-control mr-sm-2\" \n        type=\"password\" \n        placeholder=\"Password\">\n        <button class=\"btn btn-success my-2 my-sm-0\" type=\"submit\">Login</button>\n      </form>\n    </div>\n</nav>\n  \n    \n";
      /***/
    },

    /***/
    "kntC":
    /*!**************************************************************!*\
      !*** ./src/app/members/member-card/member-card.component.ts ***!
      \**************************************************************/

    /*! exports provided: MemberCardComponent */

    /***/
    function kntC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberCardComponent", function () {
        return MemberCardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_member_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./member-card.component.html */
      "Ur/1");
      /* harmony import */


      var _member_card_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./member-card.component.css */
      "oXys");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/members.service */
      "YMan");
      /* harmony import */


      var src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/presence.service */
      "mV+E");

      var MemberCardComponent = /*#__PURE__*/function () {
        function MemberCardComponent(memberService, toastr, presence) {
          _classCallCheck(this, MemberCardComponent);

          this.memberService = memberService;
          this.toastr = toastr;
          this.presence = presence;
        }

        _createClass(MemberCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addLike",
          value: function addLike(member) {
            var _this30 = this;

            this.memberService.addLike(member.username).subscribe(function () {
              _this30.toastr.success('You have liked ' + member.knownAs);
            });
          }
        }]);

        return MemberCardComponent;
      }();

      MemberCardComponent.ctorParameters = function () {
        return [{
          type: src_app_services_members_service__WEBPACK_IMPORTED_MODULE_5__["MembersService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_6__["PresenceService"]
        }];
      };

      MemberCardComponent.propDecorators = {
        member: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      MemberCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-member-card',
        template: _raw_loader_member_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_member_card_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MemberCardComponent);
      /***/
    },

    /***/
    "mV+E":
    /*!***********************************************!*\
      !*** ./src/app/_services/presence.service.ts ***!
      \***********************************************/

    /*! exports provided: PresenceService */

    /***/
    function mVE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PresenceService", function () {
        return PresenceService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @microsoft/signalr */
      "6HpG");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var PresenceService = /*#__PURE__*/function () {
        function PresenceService(toastr, router) {
          _classCallCheck(this, PresenceService);

          this.toastr = toastr;
          this.router = router;
          this.hubUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].hubUrl;
          this.onlineUsersSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
          this.onlineUsers$ = this.onlineUsersSource.asObservable();
        }

        _createClass(PresenceService, [{
          key: "createHubConnection",
          value: function createHubConnection(user) {
            var _this31 = this;

            this.hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__["HubConnectionBuilder"]().withUrl(this.hubUrl + 'presence', {
              accessTokenFactory: function accessTokenFactory() {
                return user.token;
              }
            }).withAutomaticReconnect().build();
            this.hubConnection.start()["catch"](function (error) {
              return console.log(error);
            });
            this.hubConnection.on('UserIsOnline', function (username) {
              _this31.onlineUsers$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (usernames) {
                _this31.onlineUsersSource.next([].concat(_toConsumableArray(usernames), [username]));
              });
            });
            this.hubConnection.on('UserIsOffline', function (username) {
              _this31.onlineUsers$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (usernames) {
                _this31.onlineUsersSource.next(_toConsumableArray(usernames.filter(function (x) {
                  return x !== username;
                })));
              });
            });
            this.hubConnection.on('GetOnlineUsers', function (usernames) {
              _this31.onlineUsersSource.next(usernames);
            });
            this.hubConnection.on('NewMessageReceived', function (_ref) {
              var username = _ref.username,
                  knownAs = _ref.knownAs;

              _this31.toastr.info(knownAs + ' has sent you a new message').onTap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function () {
                return _this31.router.navigateByUrl('/members/' + username + '?tab=3');
              });
            });
          }
        }, {
          key: "stopHubConnection",
          value: function stopHubConnection() {
            this.hubConnection.stop()["catch"](function (error) {
              return console.log(error);
            });
          }
        }]);

        return PresenceService;
      }();

      PresenceService.ctorParameters = function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      PresenceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PresenceService);
      /***/
    },

    /***/
    "n7CQ":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_forms/text-input/text-input.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function n7CQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"form-group\">\n    <input \n    [class.is-invalid]=\"ngControl.touched && ngControl.invalid\"\n    type={{type}}\n    class=\"form-control\"\n    [formControl]=\"ngControl.control\" \n    placeholder={{label}}>\n\n    <div *ngIf=\"ngControl.control?.errors?.required\" \n    class=\"invalid-feedback\">Please enter a {{label}}</div>\n\n    <div *ngIf=\"ngControl.control?.errors?.minlength\"\n    class=\"invalid-feedback\">\n    {{label}} must be least {{ngControl.control?.errors?.minlength['requiredLength']}}\n    </div>\n\n    <div *ngIf=\"ngControl.control?.errors?.maxlength\" \n    class=\"invalid-feedback\">\n    {{label}} must be most {{ngControl.control?.errors?.maxlength['requiredLength']}}\n    </div>\n\n    <div *ngIf=\"ngControl.control?.errors?.isMatching\" \n    class=\"invalid-feedback\">Passwords do not match</div>\n\n\n</div>";
      /***/
    },

    /***/
    "nXO7":
    /*!***************************************!*\
      !*** ./src/app/_models/userParams.ts ***!
      \***************************************/

    /*! exports provided: UserParams */

    /***/
    function nXO7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserParams", function () {
        return UserParams;
      });

      var UserParams = /*#__PURE__*/_createClass(function UserParams(user) {
        _classCallCheck(this, UserParams);

        this.minAge = 18;
        this.maxAge = 99;
        this.pageNumber = 1;
        this.pageSize = 5;
        this.orderBy = 'lastActive';
        this.gender = user && user.gender === 'female' ? 'male' : 'female';
      });
      /***/

    },

    /***/
    "njUE":
    /*!********************************************************************!*\
      !*** ./src/app/modals/confirm-dialog/confirm-dialog.component.css ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function njUE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "nyuw":
    /*!*********************************************************************!*\
      !*** ./src/app/admin/user-management/user-management.component.css ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function nyuw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "oXys":
    /*!***************************************************************!*\
      !*** ./src/app/members/member-card/member-card.component.css ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function oXys(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card:hover img {\r\n    transform: scale(1.2, 1.2);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n    opacity: 0.7;\r\n}\r\n\r\n.card img {\r\n    transform: scale(1.0, 1.0);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;    \r\n}\r\n\r\n.card-img-wrapper {\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.member-icons {\r\n    position: absolute;\r\n    bottom: -30%;\r\n    left: 0;\r\n    right: 0;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    opacity: 0;\r\n}\r\n\r\n.card-img-wrapper:hover .member-icons {\r\n    opacity: 1;\r\n    bottom: 0;\r\n}\r\n\r\n.animate {\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n@keyframes fa-blink {\r\n    0% {opacity: 1;}\r\n    100% {opacity: 0.4;}\r\n}\r\n\r\n.is-online {\r\n    animation: fa-blink 1.5s linear infinite;\r\n    color: rgb(1, 180, 42);    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItY2FyZC9tZW1iZXItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixvQ0FBb0M7SUFDcEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxJQUFJLFVBQVUsQ0FBQztJQUNmLE1BQU0sWUFBWSxDQUFDO0FBQ3ZCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvbWVtYmVyLWNhcmQvbWVtYmVyLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkOmhvdmVyIGltZyB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4uY2FyZCBpbWcge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAsIDEuMCk7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDsgICAgXHJcbn1cclxuXHJcbi5jYXJkLWltZy13cmFwcGVyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5tZW1iZXItaWNvbnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMzAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY2FyZC1pbWctd3JhcHBlcjpob3ZlciAubWVtYmVyLWljb25zIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5hbmltYXRlIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhLWJsaW5rIHtcclxuICAgIDAlIHtvcGFjaXR5OiAxO31cclxuICAgIDEwMCUge29wYWNpdHk6IDAuNDt9XHJcbn1cclxuXHJcbi5pcy1vbmxpbmUge1xyXG4gICAgYW5pbWF0aW9uOiBmYS1ibGluayAxLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGNvbG9yOiByZ2IoMSwgMTgwLCA0Mik7ICAgIFxyXG59Il19 */";
      /***/
    },

    /***/
    "qPLm":
    /*!************************************************************!*\
      !*** ./src/app/admin/admin-panel/admin-panel.component.ts ***!
      \************************************************************/

    /*! exports provided: AdminPanelComponent */

    /***/
    function qPLm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function () {
        return AdminPanelComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_panel_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin-panel.component.html */
      "2Hd7");
      /* harmony import */


      var _admin_panel_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-panel.component.css */
      "hqKe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AdminPanelComponent = /*#__PURE__*/function () {
        function AdminPanelComponent() {
          _classCallCheck(this, AdminPanelComponent);
        }

        _createClass(AdminPanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminPanelComponent;
      }();

      AdminPanelComponent.ctorParameters = function () {
        return [];
      };

      AdminPanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-panel',
        template: _raw_loader_admin_panel_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_panel_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AdminPanelComponent);
      /***/
    },

    /***/
    "rRnX":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_forms/date-input/date-input.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rRnX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"form-group\">\n    <input \n    type=\"text\"\n    [class.is-invalid]='ngControl.touched && ngControl.invalid'\n    class=\"form-control\"\n    [formControl]='ngControl.control'\n    placeholder=\"{{label}}\"\n    bsDatepicker\n    [bsConfig]='bsConfig'\n    [maxDate]='maxDate'\n>\n    <div *ngIf=\"ngControl.control?.errors?.required\" class=\"invalid-feedback\">{{label}} is required</div>\n</div>";
      /***/
    },

    /***/
    "rt/O":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function rtO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row mb-4\">\n    <div class=\"btn-group\" name='container'>\n        <button class=\"btn btn-primary\" btnRadio='Unread' [(ngModel)]=\"container\" \n            (click)=\"loadMessages()\">\n            <i class=\"fa fa-envelope\"></i> Unread\n        </button>\n        <button class=\"btn btn-primary\" btnRadio='Inbox' [(ngModel)]=\"container\" \n            (click)=\"loadMessages()\">\n            <i class=\"fa fa-envelope-open\"></i> Inbox\n        </button>\n        <button class=\"btn btn-primary\" btnRadio='Outbox' [(ngModel)]=\"container\" \n            (click)=\"loadMessages()\">\n            <i class=\"fa fa-paper-plane\"></i> Outbox\n        </button>\n    </div>\n</div>\n\n<div class=\"row\" *ngIf=\"messages?.length === 0\">\n    <h3>No messages</h3>\n</div>\n\n<div class=\"row\" *ngIf=\"messages?.length > 0\">\n    <table class=\"table table-hover\" style=\"cursor: pointer;\">\n        <tr>\n            <th style=\"width: 40%;\">Message</th>\n            <th style=\"width: 20%;\">From / To</th>\n            <th style=\"width: 20%;\">Sent / Received</th>\n            <th style=\"width: 20%;\"></th>\n        </tr>\n        <tr [hidden]=\"loading\" *ngFor=\"let message of messages\" \n            routerLink='{{container === \"Outbox\" \n            ? \"/members/\" + message.recipientUsername \n            : \"/members/\" + message.senderUsername}}' [queryParams]=\"{tab: 3}\" >\n            <td>{{message.content}}</td>\n            <td>\n                <div *ngIf=\"containter === 'Outbox'\">\n                    <img \n                        class=\"img-circle rounded-circle mr-2\"\n                        src=\"{{message.recipientPhotoUrl || './assets/user.png'}}\" \n                        alt=\"{{message.recipientUsername}}\">\n                    <strong>{{message.recipientUsername | titlecase}}</strong>\n                </div>\n                <div *ngIf=\"containter !== 'Outbox'\">\n                    <img \n                        class=\"img-circle rounded-circle mr-2\"\n                        src=\"{{message.senderPhotoUrl || './assets/user.png'}}\" \n                        alt=\"{{message.senderUsername}}\">\n                    <strong>{{message.senderUsername | titlecase}}</strong>\n                </div>\n            </td>\n            <td>{{message.messageSent | timeago}}</td>\n            <td>\n                <button (click)=\"$event.stopPropagation()\" (click)=\"deleteMessage(message.id)\" class=\"btn btn-danger\">Delete</button>\n            </td>\n        </tr>\n    </table>\n</div>\n\n<div class=\"d-flex justify-content-center\" *ngIf=\"pagination && !loading\">\n    <pagination \n        [boundaryLinks]=\"true\" \n        [totalItems]='pagination.totalItems'\n        [itemsPerPage]='pagination.itemsPerPage'\n        [(ngModel)]=\"pagination.currentPage\"\n        (pageChanged)=\"pageChanged($event)\"\n        previousText=\"&lsaquo;\" \n        nextText=\"&rsaquo;\" \n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n</pagination>\n</div>\n";
      /***/
    },

    /***/
    "rw5Q":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-detail/member-detail.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rw5Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-4\">\n        <div class=\"card\">\n            <img src=\"{{member.photoUrl || './assets/user.png'}}\" alt=\"{{member.knownAs}}\" \n                class=\"card-img-top img-thumbnail\">  \n            <div class=\"card-body\">\n                <div class=\"mb-2\" *ngIf=\"(presence.onlineUsers$ | async).includes(member.username)\">\n                    <i class=\"fa fa-user-circle text-success\"></i> Online now\n                </div>\n                <div>\n                    <strong>Location:</strong>\n                    <p>{{member.city}}, {{member.country}}</p>\n                </div>\n                <div>\n                    <strong>Age:</strong>\n                    <p>{{member.age}}</p>\n                </div>\n                <div>\n                    <strong>Last Active:</strong>\n                    <p>{{member.lastActive | timeago}}</p>\n                </div>\n                <div>\n                    <strong>Member since:</strong>\n                    <p>{{member.created | date: 'dd mmmm yyyy'}}</p>\n                </div>\n            </div>  \n            <div class=\"card-footer\">\n                <div class=\"btn-group d-flex\">\n                    <button class=\"btn btn-primary\">Like</button>\n                    <button (click)=\"selectTab(3)\" class=\"btn btn-success\">Message</button>\n                </div>    \n            </div>\n        </div>\n    </div>\n    \n\n    <div class=\"col-8\">\n        <tabset class=\"member-tabset\" #memberTabs> \n            <tab heading=\"About {{member.knownAs}}\" (selectTab)=\"onTabActivated($event)\">\n                <h4>Desciption</h4>\n                <p>{{member.introduction}}</p>\n                <h4>Looking for</h4>\n                <p>{{member.lookingFor}}</p>\n            </tab>\n            <tab heading=\"Interests\" (selectTab)=\"onTabActivated($event)\">\n                <h4>Interests</h4>\n                <p>{{member.interests}}</p>\n            </tab>\n            <tab heading=\"Photos\" (selectTab)=\"onTabActivated($event)\">\n                <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\" \n                style=\"display: inline-block; margin-bottom: 20px;\"></ngx-gallery>\n            </tab>\n            <tab heading=\"Messages\" (selectTab)=\"onTabActivated($event)\">\n                <app-member-messages  [username]=\"member.username\"></app-member-messages>\n            </tab>\n        </tabset>\n    </div>\n</div>\n        ";
      /***/
    },

    /***/
    "u2he":
    /*!**************************************************************!*\
      !*** ./src/app/members/member-edit/member-edit.component.ts ***!
      \**************************************************************/

    /*! exports provided: MemberEditComponent */

    /***/
    function u2he(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberEditComponent", function () {
        return MemberEditComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_member_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./member-edit.component.html */
      "SFMN");
      /* harmony import */


      var _member_edit_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./member-edit.component.css */
      "U0OR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/account.service */
      "5ZPe");
      /* harmony import */


      var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_services/members.service */
      "YMan");

      var MemberEditComponent = /*#__PURE__*/function () {
        function MemberEditComponent(accountService, memberService, toastr) {
          var _this32 = this;

          _classCallCheck(this, MemberEditComponent);

          this.accountService = accountService;
          this.memberService = memberService;
          this.toastr = toastr;
          this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (user) {
            return _this32.user = user;
          });
        }

        _createClass(MemberEditComponent, [{
          key: "unloadNotification",
          value: function unloadNotification($event) {
            if (this.editForm.dirty) {
              $event.returnValue = true;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadMember();
          }
        }, {
          key: "loadMember",
          value: function loadMember() {
            var _this33 = this;

            this.memberService.getMember(this.user.username).subscribe(function (member) {
              _this33.member = member;
            });
          }
        }, {
          key: "updateMember",
          value: function updateMember() {
            var _this34 = this;

            this.memberService.updateMember(this.member).subscribe(function () {
              _this34.toastr.success('Profile updated successfully');

              _this34.editForm.reset(_this34.member);
            });
          }
        }]);

        return MemberEditComponent;
      }();

      MemberEditComponent.ctorParameters = function () {
        return [{
          type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]
        }, {
          type: src_app_services_members_service__WEBPACK_IMPORTED_MODULE_7__["MembersService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      };

      MemberEditComponent.propDecorators = {
        editForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['editForm']
        }],
        unloadNotification: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['window:beforeunload', ['$event']]
        }]
      };
      MemberEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-member-edit',
        template: _raw_loader_member_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_member_edit_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MemberEditComponent);
      /***/
    },

    /***/
    "v9I1":
    /*!**********************************************************!*\
      !*** ./src/app/_guards/prevent-unsaved-changes.guard.ts ***!
      \**********************************************************/

    /*! exports provided: PreventUnsavedChangesGuard */

    /***/
    function v9I1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreventUnsavedChangesGuard", function () {
        return PreventUnsavedChangesGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/confirm.service */
      "xuvy");

      var PreventUnsavedChangesGuard = /*#__PURE__*/function () {
        function PreventUnsavedChangesGuard(confirmService) {
          _classCallCheck(this, PreventUnsavedChangesGuard);

          this.confirmService = confirmService;
        }

        _createClass(PreventUnsavedChangesGuard, [{
          key: "canDeactivate",
          value: function canDeactivate(component) {
            if (component.editForm.dirty) {
              return this.confirmService.confirm();
            }

            return true;
          }
        }]);

        return PreventUnsavedChangesGuard;
      }();

      PreventUnsavedChangesGuard.ctorParameters = function () {
        return [{
          type: _services_confirm_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmService"]
        }];
      };

      PreventUnsavedChangesGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PreventUnsavedChangesGuard);
      /***/
    },

    /***/
    "vMgs":
    /*!*******************************************************************!*\
      !*** ./src/app/modals/confirm-dialog/confirm-dialog.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ConfirmDialogComponent */

    /***/
    function vMgs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () {
        return ConfirmDialogComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_confirm_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./confirm-dialog.component.html */
      "huGP");
      /* harmony import */


      var _confirm_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./confirm-dialog.component.css */
      "njUE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");

      var ConfirmDialogComponent = /*#__PURE__*/function () {
        function ConfirmDialogComponent(bsModalRef) {
          _classCallCheck(this, ConfirmDialogComponent);

          this.bsModalRef = bsModalRef;
        }

        _createClass(ConfirmDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "confirm",
          value: function confirm() {
            this.result = true;
            this.bsModalRef.hide();
          }
        }, {
          key: "decline",
          value: function decline() {
            this.result = false;
            this.bsModalRef.hide();
          }
        }]);

        return ConfirmDialogComponent;
      }();

      ConfirmDialogComponent.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]
        }];
      };

      ConfirmDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm-dialog',
        template: _raw_loader_confirm_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirm_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ConfirmDialogComponent);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./members/member-list/member-list.component */
      "Rv1c");
      /* harmony import */


      var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./members/member-detail/member-detail.component */
      "PL33");
      /* harmony import */


      var _lists_lists_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./lists/lists.component */
      "hnRM");
      /* harmony import */


      var _messages_messages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./messages/messages.component */
      "DruN");
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./_guards/auth.guard */
      "PSoG");
      /* harmony import */


      var _errors_test_errors_test_errors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./errors/test-errors/test-errors.component */
      "/Lly");
      /* harmony import */


      var _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./errors/not-found/not-found.component */
      "4rg4");
      /* harmony import */


      var _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./errors/server-error/server-error.component */
      "81j5");
      /* harmony import */


      var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./members/member-edit/member-edit.component */
      "u2he");
      /* harmony import */


      var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./_guards/prevent-unsaved-changes.guard */
      "v9I1");
      /* harmony import */


      var _resolvers_member_detailed_resolver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./_resolvers/member-detailed.resolver */
      "a8qC");
      /* harmony import */


      var _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./admin/admin-panel/admin-panel.component */
      "qPLm");
      /* harmony import */


      var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./_guards/admin.guard */
      "NWYD");

      var routes = [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
      }, {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        children: [{
          path: 'members',
          component: _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_4__["MemberListComponent"]
        }, {
          path: 'members/:username',
          component: _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_5__["MemberDetailComponent"],
          resolve: {
            member: _resolvers_member_detailed_resolver__WEBPACK_IMPORTED_MODULE_14__["MemberDetailedResolver"]
          }
        }, {
          path: 'member/edit',
          component: _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_12__["MemberEditComponent"],
          canDeactivate: [_guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_13__["PreventUnsavedChangesGuard"]]
        }, {
          path: 'lists',
          component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_6__["ListsComponent"]
        }, {
          path: 'messages',
          component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_7__["MessagesComponent"]
        }, {
          path: 'admin',
          component: _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_15__["AdminPanelComponent"],
          canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_16__["AdminGuard"]]
        }]
      }, {
        path: 'errors',
        component: _errors_test_errors_test_errors_component__WEBPACK_IMPORTED_MODULE_9__["TestErrorsComponent"]
      }, {
        path: 'not-found',
        component: _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"]
      }, {
        path: 'server-error',
        component: _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_11__["ServerErrorComponent"]
      }, {
        path: '**',
        component: _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
        pathMatch: 'full'
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "xuvy":
    /*!**********************************************!*\
      !*** ./src/app/_services/confirm.service.ts ***!
      \**********************************************/

    /*! exports provided: ConfirmService */

    /***/
    function xuvy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmService", function () {
        return ConfirmService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../modals/confirm-dialog/confirm-dialog.component */
      "vMgs");

      var ConfirmService = /*#__PURE__*/function () {
        function ConfirmService(modalService) {
          _classCallCheck(this, ConfirmService);

          this.modalService = modalService;
        }

        _createClass(ConfirmService, [{
          key: "confirm",
          value: function confirm() {
            var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Confirmation';
            var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Are you sure you want to do this?';
            var btnOkText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Ok';
            var btnCancelText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Cancel';
            var config = {
              initialState: {
                title: title,
                message: message,
                btnOkText: btnOkText,
                btnCancelText: btnCancelText
              }
            };
            this.bsModelRef = this.modalService.show(_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], config);
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](this.getResult());
          }
        }, {
          key: "getResult",
          value: function getResult() {
            var _this35 = this;

            return function (observer) {
              var subcription = _this35.bsModelRef.onHidden.subscribe(function () {
                observer.next(_this35.bsModelRef.content.result);
                observer.complete();
              });

              return {
                unsubscribe: function unsubscribe() {
                  subcription.unsubscribe();
                }
              };
            };
          }
        }]);

        return ConfirmService;
      }();

      ConfirmService.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
        }];
      };

      ConfirmService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ConfirmService);
      /***/
    },

    /***/
    "yNbP":
    /*!*************************************************************!*\
      !*** ./src/app/modals/roles-modal/roles-modal.component.ts ***!
      \*************************************************************/

    /*! exports provided: RolesModalComponent */

    /***/
    function yNbP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RolesModalComponent", function () {
        return RolesModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_roles_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./roles-modal.component.html */
      "Cegr");
      /* harmony import */


      var _roles_modal_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./roles-modal.component.css */
      "gTRF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");

      var RolesModalComponent = /*#__PURE__*/function () {
        function RolesModalComponent(bsModalRef) {
          _classCallCheck(this, RolesModalComponent);

          this.bsModalRef = bsModalRef;
          this.updateSelectedRoles = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(RolesModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "updateRoles",
          value: function updateRoles() {
            this.updateSelectedRoles.emit(this.roles);
            this.bsModalRef.hide();
          }
        }]);

        return RolesModalComponent;
      }();

      RolesModalComponent.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]
        }];
      };

      RolesModalComponent.propDecorators = {
        updateSelectedRoles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      RolesModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-roles-modal',
        template: _raw_loader_roles_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_roles_modal_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RolesModalComponent);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "zqoj":
    /*!*******************************************!*\
      !*** ./src/app/lists/lists.component.css ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function zqoj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RzL2xpc3RzLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map