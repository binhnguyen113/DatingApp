(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+6CW":
/*!***********************************************************************!*\
  !*** ./src/app/members/member-messages/member-messages.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\r\n    border: none;\r\n}\r\n\r\n.chat {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.chat li {\r\n    margin-bottom: 10px;\r\n    padding-bottom: 10px;\r\n    border-bottom: 1px dotted #B3A9A9;\r\n}\r\n\r\n.rounded-circle {\r\n    max-height: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItbWVzc2FnZXMvbWVtYmVyLW1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvbWVtYmVyLW1lc3NhZ2VzL21lbWJlci1tZXNzYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY2hhdCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNoYXQgbGkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjQjNBOUE5O1xyXG59XHJcblxyXG4ucm91bmRlZC1jaXJjbGUge1xyXG4gICAgbWF4LWhlaWdodDogNTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "+nPA":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "/Lly":
/*!*************************************************************!*\
  !*** ./src/app/errors/test-errors/test-errors.component.ts ***!
  \*************************************************************/
/*! exports provided: TestErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestErrorsComponent", function() { return TestErrorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_test_errors_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./test-errors.component.html */ "LXXr");
/* harmony import */ var _test_errors_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test-errors.component.css */ "GOUF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");






let TestErrorsComponent = class TestErrorsComponent {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.validationErrors = [];
    }
    ngOnInit() {
    }
    get404Error() {
        this.http.get(this.baseUrl + 'buggy/not-found').subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    get400Error() {
        this.http.get(this.baseUrl + 'buggy/bad-request').subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    get500Error() {
        this.http.get(this.baseUrl + 'buggy/server-error').subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    get401Error() {
        this.http.get(this.baseUrl + 'buggy/auth').subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    get400ValidationError() {
        this.http.post(this.baseUrl + 'account/register', {}).subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
            this.validationErrors = error;
        });
    }
};
TestErrorsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TestErrorsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-test-errors',
        template: _raw_loader_test_errors_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_test_errors_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TestErrorsComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\DatingApp\client\src\main.ts */"zUnb");


/***/ }),

/***/ "0r7+":
/*!***********************************************************!*\
  !*** ./src/app/_forms/date-input/date-input.component.ts ***!
  \***********************************************************/
/*! exports provided: DateInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateInputComponent", function() { return DateInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_date_input_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./date-input.component.html */ "rRnX");
/* harmony import */ var _date_input_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-input.component.css */ "UpVr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





let DateInputComponent = class DateInputComponent {
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.label = '';
        this.maxDate = new Date();
        this.ngControl.valueAccessor = this;
        this.bsConfig = {
            containerClass: 'theme-red',
            dateInputFormat: 'DD MMMM YYYY'
        };
    }
    writeValue(obj) {
    }
    registerOnChange(fn) {
    }
    registerOnTouched(fn) {
    }
    ngOnInit() {
    }
};
DateInputComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"] }] }
];
DateInputComponent.propDecorators = {
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DateInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-date-input',
        template: _raw_loader_date_input_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_date_input_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DateInputComponent);



/***/ }),

/***/ 1:
/*!******************************!*\
  !*** tough-cookie (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "OOnH");
/* harmony import */ var _register_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.css */ "+nPA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/account.service */ "5ZPe");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let RegisterComponent = class RegisterComponent {
    constructor(accountService, toastr, fb, router) {
        this.accountService = accountService;
        this.toastr = toastr;
        this.fb = fb;
        this.router = router;
        this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.maxDate = new Date();
        this.validationErrors = [];
    }
    ngOnInit() {
        this.intitializeForm();
        this.maxDate = new Date();
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    }
    intitializeForm() {
        this.registerForm = this.fb.group({
            gender: ['male'],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            knownAs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            dateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(8)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, this.matchValues('password')]]
        });
    }
    matchValues(matchTo) {
        return (control) => {
            var _a;
            let con = (_a = control === null || control === void 0 ? void 0 : control.parent) === null || _a === void 0 ? void 0 : _a.controls;
            if (con)
                return (control === null || control === void 0 ? void 0 : control.value) === con[matchTo].value ? null : { isMatching: true };
            else
                return null;
        };
    }
    register() {
        this.accountService.register(this.registerForm.value).subscribe(response => {
            this.router.navigateByUrl('\members');
        }, error => {
            this.validationErrors = error;
        });
    }
    cancel() {
        this.cancelRegister.emit(false);
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
RegisterComponent.propDecorators = {
    cancelRegister: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterComponent);



/***/ }),

/***/ "1f5s":
/*!************************************************************!*\
  !*** ./src/app/_forms/text-input/text-input.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19mb3Jtcy90ZXh0LWlucHV0L3RleHQtaW5wdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 2:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2Hd7":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-panel/admin-panel.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Admin Panel</h2>\n<div class=\"tab-panel\">\n    <tabset class=\"member-tabset\">\n        <tab heading=\"User management\" *appHasRole='[\"Admin\"]'>\n            <div class=\"container\">\n                <app-user-management></app-user-management>\n            </div>\n        </tab>\n        <tab heading=\"Photo management\" *appHasRole='[\"Admin\",\"Moderator\"]'>\n            <div class=\"container\">\n                <app-photo-management></app-photo-management>\n            </div>\n        </tab>\n    </tabset>\n</div>");

/***/ }),

/***/ "2qCV":
/*!**********************************************************************!*\
  !*** ./src/app/members/member-messages/member-messages.component.ts ***!
  \**********************************************************************/
/*! exports provided: MemberMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberMessagesComponent", function() { return MemberMessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_member_messages_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./member-messages.component.html */ "BopY");
/* harmony import */ var _member_messages_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./member-messages.component.css */ "+6CW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/message.service */ "Qskx");





let MemberMessagesComponent = class MemberMessagesComponent {
    constructor(messageService) {
        this.messageService = messageService;
    }
    ngOnInit() {
    }
    sendMessage() {
        this.messageService.sendMessage(this.username, this.messageContent).then(() => {
            this.messageForm.reset();
        });
    }
};
MemberMessagesComponent.ctorParameters = () => [
    { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
];
MemberMessagesComponent.propDecorators = {
    messageForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['messageForm',] }],
    messages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    username: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
MemberMessagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        selector: 'app-member-messages',
        template: _raw_loader_member_messages_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_member_messages_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MemberMessagesComponent);



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** fetch-cookie (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** abort-controller (ignored) ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "4+ph":
/*!**********************************************************************!*\
  !*** ./src/app/admin/photo-management/photo-management.component.ts ***!
  \**********************************************************************/
/*! exports provided: PhotoManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoManagementComponent", function() { return PhotoManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_photo_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./photo-management.component.html */ "GV+h");
/* harmony import */ var _photo_management_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo-management.component.css */ "Gxrn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PhotoManagementComponent = class PhotoManagementComponent {
    constructor() { }
    ngOnInit() {
    }
};
PhotoManagementComponent.ctorParameters = () => [];
PhotoManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-photo-management',
        template: _raw_loader_photo_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_photo_management_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PhotoManagementComponent);



/***/ }),

/***/ "4rg4":
/*!*********************************************************!*\
  !*** ./src/app/errors/not-found/not-found.component.ts ***!
  \*********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./not-found.component.html */ "Tkli");
/* harmony import */ var _not_found_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component.css */ "7KZ6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NotFoundComponent = class NotFoundComponent {
};
NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-not-found',
        template: _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_not_found_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotFoundComponent);



/***/ }),

/***/ 5:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "5ZPe":
/*!**********************************************!*\
  !*** ./src/app/_services/account.service.ts ***!
  \**********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _presence_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./presence.service */ "mV+E");







let AccountService = class AccountService {
    constructor(http, presence) {
        this.http = http;
        this.presence = presence;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.currentUserSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        this.currentUser$ = this.currentUserSource.asObservable();
    }
    login(model) {
        return this.http.post(this.baseUrl + 'account/login', model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            const user = response;
            if (user) {
                this.setCurrentUser(user);
                this.presence.createHubConnection(user);
            }
        }));
    }
    register(model) {
        return this.http.post(this.baseUrl + 'account/register', model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((user) => {
            if (user) {
                this.setCurrentUser(user);
                this.presence.createHubConnection(user);
            }
        }));
    }
    setCurrentUser(user) {
        user.roles = [];
        const roles = this.getDecodedToken(user.token).role;
        Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user);
    }
    logout() {
        localStorage.removeItem('user');
        this.currentUserSource.next(null);
        this.presence.stopHubConnection();
    }
    getDecodedToken(token) {
        return JSON.parse(atob(token.split('.')[1]));
    }
};
AccountService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _presence_service__WEBPACK_IMPORTED_MODULE_6__["PresenceService"] }
];
AccountService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AccountService);



/***/ }),

/***/ 6:
/*!*****************************!*\
  !*** eventsource (ignored) ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "7KZ6":
/*!**********************************************************!*\
  !*** ./src/app/errors/not-found/not-found.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9ycy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "81j5":
/*!***************************************************************!*\
  !*** ./src/app/errors/server-error/server-error.component.ts ***!
  \***************************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_server_error_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./server-error.component.html */ "MhCG");
/* harmony import */ var _server_error_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server-error.component.css */ "R5SI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let ServerErrorComponent = class ServerErrorComponent {
    constructor(router) {
        var _a, _b;
        this.router = router;
        const navigation = this.router.getCurrentNavigation();
        this.error = (_b = (_a = navigation === null || navigation === void 0 ? void 0 : navigation.extras) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b['error'];
    }
    ngOnInit() {
    }
};
ServerErrorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ServerErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-server-error',
        template: _raw_loader_server_error_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_server_error_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ServerErrorComponent);



/***/ }),

/***/ "8T1h":
/*!***************************************************!*\
  !*** ./src/app/_directives/has-role.directive.ts ***!
  \***************************************************/
/*! exports provided: HasRoleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasRoleDirective", function() { return HasRoleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/account.service */ "5ZPe");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let HasRoleDirective = class HasRoleDirective {
    constructor(viewContainerRef, templateRef, accountService) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.accountService = accountService;
        this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(user => {
            this.user = user;
        });
    }
    ngOnInit() {
        var _a, _b;
        //clear view if no roles
        if (!((_a = this.user) === null || _a === void 0 ? void 0 : _a.roles) || this.user == null) {
            this.viewContainerRef.clear();
            return;
        }
        if ((_b = this.user) === null || _b === void 0 ? void 0 : _b.roles.some(r => this.appHasRole.includes(r))) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainerRef.clear();
        }
    }
};
HasRoleDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }
];
HasRoleDirective.propDecorators = {
    appHasRole: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
HasRoleDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appHasRole]'
    })
], HasRoleDirective);



/***/ }),

/***/ "8rMn":
/*!*******************************************!*\
  !*** ./src/app/_services/busy.service.ts ***!
  \*******************************************/
/*! exports provided: BusyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusyService", function() { return BusyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");



let BusyService = class BusyService {
    constructor(spinnerService) {
        this.spinnerService = spinnerService;
        this.busyRequestCount = 0;
    }
    busy() {
        this.busyRequestCount++;
        this.spinnerService.show(undefined, {
            type: 'line-scale-praty',
            bdColor: 'rgba(255,255,255,0)',
            color: '#333333'
        });
    }
    idle() {
        this.busyRequestCount--;
        if (this.busyRequestCount <= 0) {
            this.busyRequestCount = 0;
            this.spinnerService.hide();
        }
    }
};
BusyService.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
];
BusyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BusyService);



/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.css */ "RV7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomeComponent = class HomeComponent {
    constructor() {
        this.registerMode = false;
    }
    ngOnInit() {
    }
    registerToggle() {
        this.registerMode = !this.registerMode;
    }
    cancelRegisterModel(event) {
        this.registerMode = event;
    }
};
HomeComponent.ctorParameters = () => [];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeComponent);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Au4E":
/*!***************************************!*\
  !*** ./src/app/_models/pagination.ts ***!
  \***************************************/
/*! exports provided: PaginatedResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatedResult", function() { return PaginatedResult; });
class PaginatedResult {
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "BopY":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-messages/member-messages.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-body\">\n        <div *ngIf=\"(messageService.messageThread$ | async)?.length === 0\">\n            No messages yet... say hi by using the message box below\n        </div>\n\n        <ul #scrollMe\n            style=\"overflow-y: scroll; height: 500px;\"\n            [scrollTop]=\"scrollMe.scrollHeight\"\n            *ngIf=\"(messageService.messageThread$ | async).length > 0\" \n            class=\"chat\">\n            <li *ngFor=\"let message of (messageService.messageThread$ | async)\">\n                <div>\n                    <span class=\"chat-img float-right\">\n                        <img class=\"rounded-circle\" src=\"{{message.senderPhotoUrl || './assets/user.png'}}\" \n                            alt=\"{{message.senderUsername}}\">\n                    </span>\n                    <div class=\"chat-body\">\n                        <div class=\"header\">\n                            <small class=\"text-muted\">\n                                <span class=\"fa fa-clock-o\">{{message.messageSent | timeago}}</span>\n                                <span class=\"text-danger\" *ngIf=\"!message.dateRead \n                                    && message.senderUsername !== username\">\n                                    (unread)\n                                </span>\n                                <span class=\"text-success\" *ngIf=\"message.dateRead \n                                    && message.senderUsername !== username\">\n                                    (read {{message.dateRead | timeago}})\n                                </span>\n                            </small>\n                        </div>\n                        <p>{{message.content}}</p>\n                    </div>\n                </div>\n            </li>\n        </ul>\n    </div>\n\n    <div class=\"card-footer\">\n        <form #messageForm=\"ngForm\" (submit)=\"sendMessage()\" autocomplete=\"off\">\n            <div class=\"input-group\">\n                <input\n                    name=\"messageContent\"\n                    required\n                    [(ngModel)]=\"messageContent\" \n                    type=\"text\" \n                    class=\"form-control input-sm\" \n                    placeholder=\"Send a private message\">\n                <div class=\"input-group-append\">\n                    <button [disabled]=\"!messageForm.valid\" class=\"btn btn-primary\" type=\"submit\">Send</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "Btx/":
/*!**************************************************!*\
  !*** ./src/app/_interceptors/jwt.interceptor.ts ***!
  \**************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/account.service */ "5ZPe");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let JwtInterceptor = class JwtInterceptor {
    constructor(accountService) {
        this.accountService = accountService;
    }
    intercept(request, next) {
        let currentUser;
        this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(user => currentUser = user);
        if (currentUser) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }
];
JwtInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "Cegr":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/roles-modal/roles-modal.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Edit roles for {{user.username}}</h4>\n    <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n      <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form #rolesForm=\"ngForm\" id=\"rolesForm\">\n        <div class=\"form-check\" *ngFor=\"let role of roles\">\n            <input type=\"checkbox\"\n                class=\"form-check-input\"\n                [checked]=\"role.checked\"\n                value=\"role.name\"\n                (change)=\"role.checked = !role.checked\"\n                [disabled]=\"role.name === 'Admin' && user.username === 'admin'\"\n            >\n            <label>{{role.name}}</label>\n        </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"updateRoles()\">Submit</button>\n  </div>");

/***/ }),

/***/ "DruN":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_messages_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./messages.component.html */ "rt/O");
/* harmony import */ var _messages_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages.component.css */ "Okie");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_confirm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/confirm.service */ "xuvy");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/message.service */ "Qskx");






let MessagesComponent = class MessagesComponent {
    constructor(messageService, confirmService) {
        this.messageService = messageService;
        this.confirmService = confirmService;
        this.messages = [];
        this.container = 'Unread';
        this.pageNumber = 1;
        this.pageSize = 5;
        this.loading = false;
    }
    ngOnInit() {
        this.loadMessages();
    }
    loadMessages() {
        this.loading = true;
        this.messageService.getMessages(this.pageNumber, this.pageSize, this.container).subscribe(response => {
            this.messages = response.result;
            this.pagination = response.pagination;
            this.loading = false;
        });
    }
    deleteMessage(id) {
        this.confirmService.confirm('Confirm delete message', 'This cannot be undone').subscribe(result => {
            if (result) {
                this.messageService.deleteMessage(id).subscribe(() => {
                    this.messages.splice(this.messages.findIndex(m => m.id === id), 1);
                });
            }
        });
    }
    pageChanged(event) {
        this.pageNumber = event.page;
        this.loadMessages();
    }
};
MessagesComponent.ctorParameters = () => [
    { type: _services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
    { type: _services_confirm_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmService"] }
];
MessagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-messages',
        template: _raw_loader_messages_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_messages_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MessagesComponent);



/***/ }),

/***/ "FRJe":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/photo-editor/photo-editor.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-2\" *ngFor=\"let photo of member.photos\">\n        <img src=\"{{photo.url}}\" alt=\"{{photo.url}}\" class=\"img-thumbnail p-1\">\n        <div class=\"text-center\">\n            <button \n                [disabled]=\"photo.isMain\"\n                (click)=\"setMainPhoto(photo)\"\n                [ngClass]='photo.isMain ? \"btn-success active\" : \"btn-outline-success\"'\n                class=\"btn btn-sm\"\n            >Main</button>\n            <button\n                [disabled]=\"photo.isMain\" \n                (click)=\"deletePhoto(photo.id)\"\n                class=\"btn btn-sm btn-danger\"\n            ><i class=\"fa fa-trash\"></i></button>\n        </div>\n    </div>\n</div>\n\n<div class=\"row mt-3\">\n \n    <div class=\"col-md-3\">\n  \n        <h3>Add photos</h3>\n\n        <div ng2FileDrop\n             [ngClass]=\"{'nv-file-over': hasBaseDropzoneOver}\"\n             (fileOver)=\"fileOverBase($event)\"\n             [uploader]=\"uploader\"\n             class=\"card bg-faded p-3 text-center mb-3 my-drop-zone\">\n             <i class=\"fa fa-upload fa-3x\"></i>\n            Drop photos here\n        </div>\n\n        Multiple\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\n\n        Single\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n    </div>\n\n    <div class=\"col-md-9\" style=\"margin-bottom: 40px\" *ngIf=\"uploader?.queue?.length\">\n\n        <h3>Upload queue</h3>\n        <p>Queue length: {{ uploader?.queue?.length }}</p>\n\n        <table class=\"table\">\n            <thead>\n            <tr>\n                <th width=\"50%\">Name</th>\n                <th>Size</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let item of uploader.queue\">\n                <td><strong>{{ item?.file?.name }}</strong></td>\n                <td *ngIf=\"uploader.options.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n            </tr>\n            </tbody>\n        </table>\n\n        <div>\n            <div>\n                Queue progress:\n                <div class=\"progress\" style=\"\">\n                    <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                </div>\n            </div>\n            <button type=\"button\" class=\"btn btn-success btn-s\"\n                    (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                <span class=\"fa fa-upload\"></span> Upload all\n            </button>\n            <button type=\"button\" class=\"btn btn-warning btn-s\"\n                    (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                <span class=\"fa fa-ban\"></span> Cancel all\n            </button>\n            <button type=\"button\" class=\"btn btn-danger btn-s\"\n                    (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                <span class=\"fa fa-trash\"></span> Remove all\n            </button>\n        </div>\n\n    </div>\n\n</div>");

/***/ }),

/***/ "GCkI":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-management/user-management.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <table class=\"table\">\n        <tr>\n            <th style=\"width: 30%\">Username</th>\n            <th style=\"width: 40%\">Active roles</th>\n            <th style=\"width: 30%\"></th>\n        </tr>\n        <tr *ngFor=\"let user of users\">\n            <td>{{user.username}}</td>\n            <td>{{user.roles}}</td>\n            <td><button (click)=\"openRolesModal(user)\" class=\"btn btn-info\">Edit Roles</button></td>\n        </tr>\n    </table>\n</div>");

/***/ }),

/***/ "GOUF":
/*!**************************************************************!*\
  !*** ./src/app/errors/test-errors/test-errors.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9ycy90ZXN0LWVycm9ycy90ZXN0LWVycm9ycy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "GV+h":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/photo-management/photo-management.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>photo-management works!</p>\n");

/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-5\">\n    <div *ngIf=\"!registerMode\" style=\"text-align: center;\">\n    <h1>Find your match</h1>\n    <p class=\"lead\">Come on in to view your matches... all you need to do is sign up!</p>\n        <div class=\"text-center\">\n            <button (click)=\"registerToggle()\" class=\"btn btn-primary btn-lg mr-2\">Register</button>\n            <button class=\"btn btn-info btn-lg \">Learn more</button>\n        </div>\n    </div>\n\n    <div *ngIf=\"registerMode\" class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-4\">\n                <app-register  (cancelRegister)=\"cancelRegisterModel($event)\"></app-register>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "Gxrn":
/*!***********************************************************************!*\
  !*** ./src/app/admin/photo-management/photo-management.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Bob3RvLW1hbmFnZW1lbnQvcGhvdG8tbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "IiJT":
/*!*******************************************!*\
  !*** ./src/app/_modules/shared.module.ts ***!
  \*******************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "44PX");
/* harmony import */ var _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @kolkov/ngx-gallery */ "XGsO");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "7pIB");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "s3T5");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-timeago */ "twue");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");













let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot({
                positionClass: 'toastr-bottom-right'
            }),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
            _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_6__["NgxGalleryModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"].forRoot(),
            ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"].forRoot(),
            ngx_timeago__WEBPACK_IMPORTED_MODULE_11__["TimeagoModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"].forRoot()
        ],
        exports: [
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"],
            _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_6__["NgxGalleryModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"],
            ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"],
            ngx_timeago__WEBPACK_IMPORTED_MODULE_11__["TimeagoModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"]
        ],
    })
], SharedModule);



/***/ }),

/***/ "LXXr":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/errors/test-errors/test-errors.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container >\n    <button (click)=\"get500Error()\" class=\"btn btn-outline-primary mr-3\">Test 500 Error</button>\n    <button (click)=\"get400Error()\" class=\"btn btn-outline-primary mr-3\">Test 400 Error</button>\n    <button (click)=\"get401Error()\" class=\"btn btn-outline-primary mr-3\">Test 401 Error</button>\n    <button (click)=\"get404Error()\" class=\"btn btn-outline-primary mr-3\">Test 404 Error</button>\n    <button (click)=\"get400ValidationError()\" class=\"btn btn-outline-primary mr-3\">Test 400 Validation Error</button>\n    \n    <div class=\"row mt-5\" *ngIf=\"validationErrors.length > 0\">\n        <ul class=\"text-danger\">\n            <li *ngFor=\"let error of validationErrors\">\n                {{error}}\n            </li>\n        </ul>\n    </div>\n</ng-container>");

/***/ }),

/***/ "LlU7":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lists/lists.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center mt-3\">\n    <h2>{{predicate === 'liked' ? 'Members I like' : 'Members who like me'}}</h2>\n</div>\n\n<div class=\"container mt-3\">\n    <div class=\"row\">\n        <div class=\"btn-group\" name=\"predicate\">\n            <button class=\"btn btn-primary\" btnRadio=\"liked\" \n                [(ngModel)]=\"predicate\" (click)=\"loadLikes()\">Members I like</button>\n            <button class=\"btn btn-primary\" btnRadio=\"likedBy\" \n                [(ngModel)]=\"predicate\" (click)=\"loadLikes()\">Members who like me</button>\n        </div>\n    </div>    \n\n    <div class=\"row mt-3\">\n        <div class=\"col-2\" *ngFor=\"let member of members\">\n            <app-member-card [member]=\"member\"></app-member-card>\n        </div>\n    </div>\n</div>\n\n<div class=\"d-flex justify-content-center\" *ngIf=\"pagination\">\n    <pagination \n        [boundaryLinks]=\"true\" \n        [totalItems]='pagination.totalItems'\n        [itemsPerPage]='pagination.itemsPerPage'\n        [(ngModel)]=\"pagination.currentPage\"\n        (pageChanged)=\"pageChanged($event)\"\n        previousText=\"&lsaquo;\" \n        nextText=\"&rsaquo;\" \n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n</pagination>\n</div>");

/***/ }),

/***/ "MMab":
/*!****************************************************!*\
  !*** ./src/app/_interceptors/error.interceptor.ts ***!
  \****************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let ErrorInterceptor = class ErrorInterceptor {
    constructor(router, toastr) {
        this.router = router;
        this.toastr = toastr;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            if (error) {
                switch (error.status) {
                    case 400:
                        if (error.error.errors) {
                            const modalStateErrors = [];
                            for (const key in error.error.errors) {
                                if (error.error.errors[key]) {
                                    modalStateErrors.push(error.error.errors[key]);
                                }
                            }
                            throw modalStateErrors.flat();
                        }
                        else if (typeof (error.error) === 'object') {
                            error.statusText = 'Bad Request';
                            this.toastr.error(error.statusText, error.status);
                        }
                        else {
                            this.toastr.error(error.error, error.status);
                        }
                        break;
                    case 401:
                        error.statusText = 'Unauthorized';
                        this.toastr.error(error.statusText, error.status);
                        break;
                    case 404:
                        this.router.navigateByUrl('/not-found');
                        break;
                    case 500:
                        const navigationExtras = { state: { error: error.error } };
                        this.router.navigateByUrl('/server-error', navigationExtras);
                        break;
                    default:
                        this.toastr.error('Something unexpected went wrong');
                        console.log(error);
                        break;
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "MhCG":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/errors/server-error/server-error.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4>Internal server errror - refreshing the page will make the error disappear!</h4>\n<ng-container *ngIf=\"error\">\n    <h5 class=\"text-danger\">Error: {{error.message}}</h5>\n    <p class=\"font-weight-bold\">Note: If you are seeing this then Angular is probably not to blame</p>\n    <p>what to do next?</p>\n    <ol>\n        <li>Open the chrome dev tools</li>\n        <li>Inspect the network tab</li>\n        <li>Check the failing request</li>\n        <li>Examine the request URL - make sure it is correct</li>\n        <li>Reproduce the error in Postman - if we see the same respone, then the issue is not with Angular</li>\n    </ol>\n    <p>Following is the strack trace - this is where your investigation should start!</p>\n    <code class=\"mt-5\" style=\"background-color: whitesmoke;\">{{error.details}}</code>\n</ng-container>\n");

/***/ }),

/***/ "NWYD":
/*!****************************************!*\
  !*** ./src/app/_guards/admin.guard.ts ***!
  \****************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/account.service */ "5ZPe");





let AdminGuard = class AdminGuard {
    constructor(accountService, toastr) {
        this.accountService = accountService;
        this.toastr = toastr;
    }
    canActivate() {
        return this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(user => {
            if (user && (user.roles.includes('Admin') || user.roles.includes('Moderator'))) {
                return true;
            }
            else {
                this.toastr.error('You cannot enter this area');
                return false;
            }
        }));
    }
};
AdminGuard.ctorParameters = () => [
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
AdminGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminGuard);



/***/ }),

/***/ "OMJ/":
/*!********************************************!*\
  !*** ./src/app/_services/admin.service.ts ***!
  \********************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let AdminService = class AdminService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    getUsersWithRoles() {
        return this.http.get(this.baseUrl + 'admin/users-with-roles');
    }
    updateUserRoles(username, roles) {
        return this.http.post(this.baseUrl + 'admin/edit-roles/' + username + '?roles=' + roles, {});
    }
};
AdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AdminService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AdminService);



/***/ }),

/***/ "OOnH":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"registerForm\" (ngSubmit)=\"registerForm.valid && register()\" autocomplete=\"off\">\n    <h2 class=\"text-center text-primary\">Sign up</h2>\n    <hr>\n    <div class=\"form-group\">\n        <label class=\"control-label\" style=\"margin-right: 10px;\">I am a:</label>\n        <label class=\"radio-inline\">\n            <input type=\"radio\" value=\"made\" formControlName='gender'>Male\n        </label>\n        <label class=\"radio-inline\">\n            <input type=\"radio\" value=\"female\" formControlName='gender' class=\"ml-3\">Female\n        </label>\n    </div>\n    <app-text-input [formControl]='registerForm.controls[\"username\"]' [label] ='\"Username\"'></app-text-input>\n    \n    <app-text-input [formControl]='registerForm.controls[\"knownAs\"]' [label] ='\"Known As\"'></app-text-input>\n    \n    <app-date-input [formControl]='registerForm.controls[\"dateOfBirth\"]' \n    [label] ='\"Date Of Birth\"' [maxDate]='maxDate'></app-date-input>\n\n    <app-text-input [formControl]='registerForm.controls[\"city\"]' [label] ='\"City\"'></app-text-input>\n\n    <app-text-input [formControl]='registerForm.controls[\"country\"]' [label] ='\"Country\"'></app-text-input>\n\n    <app-text-input [formControl]='registerForm.controls[\"password\"]' [label] ='\"Password\"' \n    [type]='\"password\"'></app-text-input>\n    \n    <app-text-input [formControl]='registerForm.controls[\"confirmPassword\"]' \n    [label] ='\"Comfirm Password\"' \n    [type]='\"password\"'></app-text-input>\n\n    <div class=\"row\" *ngIf=\"validationErrors.length > 0\">\n        <ul class=\"text-danger\">\n            <li *ngFor=\"let error of validationErrors\">\n                {{error}}\n            </li>\n        </ul>\n    </div>\n\n    <div class=\"form-group text-center\">\n        <button [disabled]='!registerForm.valid'  class=\"btn btn-success mr-1\" type=\"submit\">Register</button>\n        <button class=\"btn btn-default mr-1\" (click)=\"cancel()\" type=\"button\">Cancel</button>\n    </div>\n  \n</form>\n\n\n");

/***/ }),

/***/ "OcPW":
/*!********************************************************************!*\
  !*** ./src/app/admin/user-management/user-management.component.ts ***!
  \********************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-management.component.html */ "GCkI");
/* harmony import */ var _user_management_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-management.component.css */ "nyuw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var src_app_modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modals/roles-modal/roles-modal.component */ "yNbP");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/admin.service */ "OMJ/");







let UserManagementComponent = class UserManagementComponent {
    constructor(adminService, modalService) {
        this.adminService = adminService;
        this.modalService = modalService;
    }
    ngOnInit() {
        this.getUsersWithRoles();
    }
    getUsersWithRoles() {
        this.adminService.getUsersWithRoles().subscribe(users => {
            this.users = users;
        });
    }
    openRolesModal(user) {
        const config = {
            class: 'modal-dialog-centered',
            initialState: {
                user,
                roles: this.getRolesArray(user)
            }
        };
        this.bsModalRef = this.modalService.show(src_app_modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_5__["RolesModalComponent"], config);
        this.bsModalRef.content.updateSelectedRoles.subscribe((values) => {
            const rolesToUpdate = {
                roles: [...values.filter((el) => el.checked === true).map((el) => el.name)]
            };
            if (rolesToUpdate) {
                this.adminService.updateUserRoles(user.username, rolesToUpdate.roles).subscribe(() => {
                    user.roles = [...rolesToUpdate.roles];
                });
            }
        });
    }
    getRolesArray(user) {
        const roles = [];
        const userRoles = user.roles;
        const availableRoles = [
            { name: 'Admin', value: 'Admin' },
            { name: 'Moderator', value: 'Moderator' },
            { name: 'Member', value: 'Member' }
        ];
        availableRoles.forEach(role => {
            let isMatch = false;
            for (const userRole of userRoles) {
                if (role.name === userRole) {
                    isMatch = true;
                    role.checked = true;
                    roles.push(role);
                    break;
                }
            }
            if (!isMatch) {
                role.checked = false;
                roles.push(role);
            }
        });
        return roles;
    }
};
UserManagementComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] }
];
UserManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-management',
        template: _raw_loader_user_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_management_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserManagementComponent);



/***/ }),

/***/ "Od0w":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/member-list.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center mt-3\">\n    <h2>Your matches - {{pagination?.totalItems}} found</h2>    \n</div>\n\n<div class=\"container mt-3\">\n    <form #form=\"ngForm\" class=\"form-inline mb-3\" (ngSubmit)=\"loadMembers()\" autocomplete=\"off\">\n        <div class=\"form-group\">\n            <label >Age from:</label>\n            <input type=\"number\" class=\"form-control ml-1\" style=\"width: 70px;\" name=\"minAge\" \n                [(ngModel)]=\"userParams.minAge\">\n        </div>   \n\n        <div class=\"form-group px-2\">\n            <label >Age to:</label>\n            <input type=\"number\" class=\"form-control ml-1\" style=\"width: 70px;\" name=\"maxAge\" \n                [(ngModel)]=\"userParams.maxAge\">\n        </div>  \n\n        <div class=\"form-group px-2\">\n            <label>Show: </label>\n            <select name=\"gender\" style=\"width: 130px;\" [(ngModel)]=\"userParams.gender\" class=\"form-control ml-1\">\n                <option *ngFor=\"let gender of genderList\" [value]=\"gender.value\">\n                    {{gender.display}}\n                </option>    \n            </select>\n        </div>\n\n        <button class=\"btn btn-primary ml-1\" type=\"submit\">Apply Filters</button>\n        <button (click)=\"resetFilters()\" class=\"btn btn-info ml-1\" type=\"submit\">Reset Filters</button>\n        <div class=\"col\">\n            <div class=\"btn-group float-right\">\n                <button\n                    type=\"button\" \n                    class=\"btn btn-primary\" \n                    name=\"orderBy\"\n                    (click)=\"loadMembers()\" \n                    btnRadio=\"lastActive\"\n                    [(ngModel)]=\"userParams.orderBy\">Last Active</button>\n    \n                <button\n                    type=\"button\" \n                    class=\"btn btn-primary\" \n                    name=\"orderBy\"\n                    (click)=\"loadMembers()\" \n                    btnRadio=\"created\"\n                    [(ngModel)]=\"userParams.orderBy\">Newest Members</button>\n            </div>\n        </div>\n        \n\n    </form>\n</div>\n\n<div class=\"row\">\n    <div *ngFor=\"let member of members\" class=\"col-2\">\n        <app-member-card [member]=\"member\"></app-member-card>\n    </div>\n</div>\n\n<div class=\"d-flex justify-content-center\" *ngIf=\"pagination\">\n    <pagination \n        [boundaryLinks]=\"true\" \n        [totalItems]='pagination.totalItems'\n        [itemsPerPage]='pagination.itemsPerPage'\n        [(ngModel)]=\"pagination.currentPage\"\n        (pageChanged)=\"pageChanged($event)\"\n        previousText=\"&lsaquo;\" \n        nextText=\"&rsaquo;\" \n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n</pagination>\n</div>\n");

/***/ }),

/***/ "Okie":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-circle {\r\n    max-height: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWNpcmNsZSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG59Il19 */");

/***/ }),

/***/ "PL33":
/*!******************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: MemberDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailComponent", function() { return MemberDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_member_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./member-detail.component.html */ "rw5Q");
/* harmony import */ var _member_detail_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./member-detail.component.css */ "Us+a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kolkov/ngx-gallery */ "XGsO");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/message.service */ "Qskx");
/* harmony import */ var src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/presence.service */ "mV+E");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");










let MemberDetailComponent = class MemberDetailComponent {
    constructor(presence, route, messageService, accountService, router) {
        this.presence = presence;
        this.route = route;
        this.messageService = messageService;
        this.accountService = accountService;
        this.router = router;
        this.messages = [];
        this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe(user => this.user = user);
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            this.member = data.member;
        });
        this.route.queryParams.subscribe(params => {
            params.tab ? this.selectTab(params.tab) : this.selectTab(0);
        });
        this.galleryOptions = [
            {
                width: '500px',
                height: '500px',
                imagePercent: 100,
                thumbnailsColumns: 4,
                imageAnimation: _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_5__["NgxGalleryAnimation"].Slide,
                preview: false
            }
        ];
        this.galleryImages = this.getImages();
    }
    getImages() {
        const imageUrls = [];
        // Kiểm tra xem this.member đã được xác định trước khi cố gắng truy cập thuộc tính photos
        if (this.member && this.member.photos) {
            for (const photo of this.member.photos) {
                imageUrls.push({
                    small: photo === null || photo === void 0 ? void 0 : photo.url,
                    medium: photo === null || photo === void 0 ? void 0 : photo.url,
                    big: photo === null || photo === void 0 ? void 0 : photo.url
                });
            }
        }
        return imageUrls;
    }
    loadMessages() {
        this.messageService.getMessageThread(this.member.username).subscribe(messages => {
            this.messages = messages;
        });
    }
    selectTab(tabId) {
        this.memberTabs.tabs[tabId].active = true;
    }
    onTabActivated(data) {
        this.activeTab = data;
        if (this.activeTab.heading === 'Messages' && this.messages.length === 0) {
            this.messageService.createHubConnection(this.user, this.member.username);
        }
        else {
            this.messageService.stopHubConnection();
        }
    }
    ngOnDestroy() {
        this.messageService.stopHubConnection();
    }
};
MemberDetailComponent.ctorParameters = () => [
    { type: src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_7__["PresenceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"] },
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
MemberDetailComponent.propDecorators = {
    memberTabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['memberTabs', { static: true },] }]
};
MemberDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-member-detail',
        template: _raw_loader_member_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_member_detail_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MemberDetailComponent);



/***/ }),

/***/ "PSoG":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/account.service */ "5ZPe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let AuthGuard = class AuthGuard {
    constructor(accounntService, toastr) {
        this.accounntService = accounntService;
        this.toastr = toastr;
    }
    canActivate() {
        return this.accounntService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            if (user)
                return true;
            this.toastr.error('You shall not pass!');
            return false;
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);

;


/***/ }),

/***/ "Qskx":
/*!**********************************************!*\
  !*** ./src/app/_services/message.service.ts ***!
  \**********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/signalr */ "6HpG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _paginationHelpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paginationHelpers */ "VkjZ");








let MessageService = class MessageService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.hubUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].hubUrl;
        this.messageThreadSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.messageThread$ = this.messageThreadSource.asObservable();
    }
    createHubConnection(user, otherUsername) {
        this.hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__["HubConnectionBuilder"]()
            .withUrl(this.hubUrl + 'message?user=' + otherUsername, {
            accessTokenFactory: () => user.token
        })
            .withAutomaticReconnect()
            .build();
        this.hubConnection.start().catch(error => console.log(error));
        this.hubConnection.on('ReceiveMessageThread', messages => {
            this.messageThreadSource.next(messages);
        });
        this.hubConnection.on('NewMessage', message => {
            this.messageThread$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(messages => {
                this.messageThreadSource.next([...messages, message]);
            });
        });
        this.hubConnection.on('UpdatedGroup', (group) => {
            if (group.connections.some(x => x.username === otherUsername)) {
                this.messageThread$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(messages => {
                    messages.forEach(message => {
                        if (!message.dateRead) {
                            message.dateRead = new Date(Date.now());
                        }
                    });
                    this.messageThreadSource.next([...messages]);
                });
            }
        });
        this.hubConnection.on('UpdatedGroup', (group) => {
            if (group.connections.some(x => x.username === otherUsername)) {
                this.messageThread$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(messages => {
                    messages.forEach(message => {
                        if (!message.dateRead) {
                            message.dateRead = new Date(Date.now());
                        }
                    });
                    this.messageThreadSource.next([...messages]);
                });
            }
        });
    }
    stopHubConnection() {
        if (this.hubConnection) {
            this.hubConnection.stop();
        }
    }
    getMessages(pageNumber, pageSize, container) {
        let params = Object(_paginationHelpers__WEBPACK_IMPORTED_MODULE_7__["getPaginationHeaders"])(pageNumber, pageSize);
        params = params.append('Container', container);
        return Object(_paginationHelpers__WEBPACK_IMPORTED_MODULE_7__["getPaginatedResult"])(this.baseUrl + 'messages', params, this.http);
    }
    getMessageThread(username) {
        return this.http.get(this.baseUrl + 'messages/thread/' + username);
    }
    async sendMessage(username, content) {
        return this.hubConnection.invoke('SendMessage', { recipientUsername: username, content })
            .catch(error => console.log(error));
    }
    deleteMessage(id) {
        return this.http.delete(this.baseUrl + 'messages/' + id);
    }
};
MessageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MessageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], MessageService);



/***/ }),

/***/ "R5SI":
/*!****************************************************************!*\
  !*** ./src/app/errors/server-error/server-error.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9ycy9zZXJ2ZXItZXJyb3Ivc2VydmVyLWVycm9yLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "RV7M":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Rv1c":
/*!**************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListComponent", function() { return MemberListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_member_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./member-list.component.html */ "Od0w");
/* harmony import */ var _member_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./member-list.component.css */ "V6PN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/members.service */ "YMan");





let MemberListComponent = class MemberListComponent {
    constructor(memberService) {
        this.memberService = memberService;
        this.genderList = [{ value: 'male', display: 'Males' }, { value: 'female', display: 'Females' }];
        this.userParams = this.memberService.getUserParams();
    }
    ngOnInit() {
        this.loadMembers();
    }
    loadMembers() {
        this.memberService.setUserParams(this.userParams);
        this.memberService.getMembers(this.userParams).subscribe(response => {
            this.members = response.result;
            this.pagination = response.pagination;
        });
    }
    resetFilters() {
        this.userParams = this.memberService.resetUserParams();
        this.loadMembers();
    }
    pageChanged(event) {
        this.userParams.pageNumber = event.page;
        this.memberService.setUserParams(this.userParams);
        this.loadMembers();
    }
};
MemberListComponent.ctorParameters = () => [
    { type: src_app_services_members_service__WEBPACK_IMPORTED_MODULE_4__["MembersService"] }
];
MemberListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-member-list',
        template: _raw_loader_member_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_member_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MemberListComponent);



/***/ }),

/***/ "SECP":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropdown-toggle, .dropdown-item {\r\n    cursor: pointer;\r\n}\r\n\r\nimg {\r\n    max-height: 50px;\r\n    border: 2px solid #fff;\r\n    display: inline;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi10b2dnbGUsIC5kcm9wZG93bi1pdGVtIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59Il19 */");

/***/ }),

/***/ "SFMN":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-edit/member-edit.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" *ngIf=\"member\">\n    <div class=\"col-4\">\n        <h1>Your profile</h1>\n    </div>\n    <div class=\"col-8\">\n        <div class=\"alert alert-info\" *ngIf=\"editForm.dirty\">\n            <strong>Information: </strong>You have made changes. Any unsaved changes will be lost\n        </div>\n    </div>\n    <div class=\"col-4\">\n        <div class=\"card\">\n            <img src=\"{{member.photoUrl || './assets/user.png'}}\" alt=\"{{member.knownAs}}\" \n                class=\"card-img-top img-thumbnail\">  \n            <div class=\"card-body\">\n                <div>\n                    <strong>Location:</strong>\n                    <p>{{member.city}}, {{member.country}}</p>\n                </div>\n                <div>\n                    <strong>Age:</strong>\n                    <p>{{member.age}}</p>\n                </div>\n                <div>\n                    <strong>Last Active:</strong>\n                    <p>{{member.lastActive | timeago}}</p>\n                </div>\n                <div>\n                    <strong>Member since:</strong>\n                    <p>{{member.created | date: 'dd MMM yyyy'}}</p>\n                </div>\n            </div>  \n            <div class=\"card-footer\">\n                <button [disabled]=\"!editForm.dirty\" form=\"editForm\" type=\"submit\" class=\"btn btn-success btn-block\">Save Changes</button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-8\">\n        <tabset class=\"member-tabset\"> \n            <tab heading=\"About {{member.knownAs}}\">\n                <form #editForm=\"ngForm\" id=\"editForm\" (ngSubmit)=\"updateMember()\">\n                    <h4>Desciption</h4>\n                    <textarea class=\"form-control\" [(ngModel)]=\"member.introduction\" name=\"introduction\" rows=\"6\"></textarea>\n                    <h4 class=\"mt-2\">Looking for</h4>\n                    <textarea class=\"form-control\" [(ngModel)]=\"member.lookingFor\" name=\"lookingFor\" rows=\"6\"></textarea>\n                    <h4 class=\"mt-2\">Interests</h4>\n                    <textarea class=\"form-control\" [(ngModel)]=\"member.interests\" name=\"interests\" rows=\"6\"></textarea>\n                    <h4 class=\"mt-2\">Location Details: </h4>\n                    <div class=\"form-inline\">\n                        <label for=\"city\">City: </label>\n                        <input [(ngModel)]=\"member.city\" type=\"text\" name=\"city\" class=\"form-control mx-2\">\n                        <label for=\"city\">Country: </label>\n                        <input [(ngModel)]=\"member.country\" type=\"text\" name=\"country\" class=\"form-control mx-2\">\n                    </div>\n                </form>\n            </tab>\n            <tab heading=\"Edit Photos\">\n                <app-photo-editor [member]=\"member\"></app-photo-editor>\n            </tab>\n        </tabset>\n    </div>\n</div>");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_services/account.service */ "5ZPe");
/* harmony import */ var _services_presence_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_services/presence.service */ "mV+E");






let AppComponent = class AppComponent {
    constructor(accountService, presence) {
        this.accountService = accountService;
        this.presence = presence;
        this.title = 'The Dating app';
    }
    ngOnInit() {
        this.setCurrentUser();
    }
    setCurrentUser() {
        const user = JSON.parse(localStorage.getItem('user') || null);
        if (user) {
            this.accountService.setCurrentUser(user);
            this.presence.createHubConnection(user);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] },
    { type: _services_presence_service__WEBPACK_IMPORTED_MODULE_5__["PresenceService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "Tkli":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/errors/not-found/not-found.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h1>Not found</h1>\n    <button class=\"btn btn-info btn-lg\" routerLink=\"/\">Return to home page</button>\n</div>\n");

/***/ }),

/***/ "U0OR":
/*!***************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-thumbnail {\r\n    margin: 25px;\r\n    width: 85%;\r\n    height: 85%;\r\n}\r\n\r\n.card-body {\r\n    padding: 0 25px;\r\n}\r\n\r\n.card-footer {\r\n    padding: 10px 15px;\r\n    background-color: #fff;\r\n    border-top: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItZWRpdC9tZW1iZXItZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL21lbWJlci1lZGl0L21lbWJlci1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXRodW1ibmFpbCB7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMCAyNXB4O1xyXG59XHJcblxyXG4uY2FyZC1mb290ZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbn0iXX0= */");

/***/ }),

/***/ "UpVr":
/*!************************************************************!*\
  !*** ./src/app/_forms/date-input/date-input.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19mb3Jtcy9kYXRlLWlucHV0L2RhdGUtaW5wdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "Ur/1":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-card/member-card.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mb-4\">\n    <div class=\"card-img-wrapper\">\n        <img src=\"{{member.photoUrl || './assets/user.png'}}\" alt=\"{{member.knownAs}}\" class=\"card-img-top\">\n        <ul class=\"list-inline member-icons animate text-center\">\n            <li class=\"list-inline-item\"><button routerLink=\"/members/{{member.username}}\" class=\"btn btn-primary\">\n                <i class=\"fa fa-user\"></i></button></li>\n            <li class=\"list-inline-item\"><button (click)=\"addLike(member)\" class=\"btn btn-primary\">\n                <i class=\"fa fa-heart\"></i></button></li>\n            <li class=\"list-inline-item\"><button \n                routerLink='/members/{{member.username}}'\n                [queryParams]='{tab: 3}'\n                 class=\"btn btn-primary\">\n                <i class=\"fa fa-envelope\"></i></button></li>\n        </ul>\n    </div>\n    <div class=\"card-body p-1\">\n        <h6 class=\"card-title text-center mb-1\">\n            <span [class.is-online]=\"(presence.onlineUsers$ | async).includes(member.username)\">\n                <i class=\"fa fa-user mr-2\"> </i>\n            </span>\n           \n            {{member.knownAs}}, {{member.age}}\n        </h6>\n        <p class=\"card-text text-muted text-center\">{{member.city}}</p>\n    </div>\n</div>");

/***/ }),

/***/ "Us+a":
/*!*******************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-thumbnail {\r\n    margin: 25px;\r\n    width: 85%;\r\n    height: 85%;\r\n}\r\n\r\n.card-body {\r\n    padding: 0 25px;\r\n}\r\n\r\n.card-footer {\r\n    padding: 10px 15px;\r\n    background-color: #fff;\r\n    border-top: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItZGV0YWlsL21lbWJlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9tZW1iZXItZGV0YWlsL21lbWJlci1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctdGh1bWJuYWlsIHtcclxuICAgIG1hcmdpbjogMjVweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwIDI1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxufSJdfQ== */");

/***/ }),

/***/ "V6PN":
/*!***************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvbWVtYmVyLWxpc3QvbWVtYmVyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "VNsv":
/*!******************************************************!*\
  !*** ./src/app/_interceptors/loading.interceptor.ts ***!
  \******************************************************/
/*! exports provided: LoadingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingInterceptor", function() { return LoadingInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_busy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/busy.service */ "8rMn");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let LoadingInterceptor = class LoadingInterceptor {
    constructor(busyService) {
        this.busyService = busyService;
    }
    intercept(request, next) {
        this.busyService.busy();
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
            this.busyService.idle();
        }));
    }
};
LoadingInterceptor.ctorParameters = () => [
    { type: _services_busy_service__WEBPACK_IMPORTED_MODULE_2__["BusyService"] }
];
LoadingInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoadingInterceptor);



/***/ }),

/***/ "VkjZ":
/*!************************************************!*\
  !*** ./src/app/_services/paginationHelpers.ts ***!
  \************************************************/
/*! exports provided: getPaginatedResult, getPaginationHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaginatedResult", function() { return getPaginatedResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaginationHeaders", function() { return getPaginationHeaders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/pagination */ "Au4E");



function getPaginatedResult(url, params, http) {
    const paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_2__["PaginatedResult"]();
    return http.get(url, { observe: 'response', params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => {
        var _a;
        paginatedResult.result = response.body;
        if (response.headers.get('Pagination') !== null) {
            paginatedResult.pagination = JSON.parse((_a = response.headers.get('Pagination')) !== null && _a !== void 0 ? _a : '');
        }
        return paginatedResult;
    }));
}
function getPaginationHeaders(pageNumber, pageSize) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    return params;
}


/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner>\r\n    <h3>Loading...</h3>\r\n</ngx-spinner>\r\n\r\n<app-nav></app-nav>\r\n\r\n<div class=\"container\" style=\"margin-top: 100px\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "YMan":
/*!**********************************************!*\
  !*** ./src/app/_services/members.service.ts ***!
  \**********************************************/
/*! exports provided: MembersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersService", function() { return MembersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_userParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_models/userParams */ "nXO7");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account.service */ "5ZPe");
/* harmony import */ var _paginationHelpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./paginationHelpers */ "VkjZ");









let MembersService = class MembersService {
    constructor(http, accountService) {
        this.http = http;
        this.accountService = accountService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.members = [];
        this.memberCache = new Map();
        this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(user => {
            this.user = this.user;
            this.userParams = new _models_userParams__WEBPACK_IMPORTED_MODULE_6__["UserParams"](user);
        });
    }
    getUserParams() {
        return this.userParams;
    }
    setUserParams(params) {
        this.userParams = params;
    }
    resetUserParams() {
        this.userParams = new _models_userParams__WEBPACK_IMPORTED_MODULE_6__["UserParams"](this.user);
        return this.userParams;
    }
    getMembers(userParams) {
        var response = this.memberCache.get(Object.values(userParams).join('-'));
        if (response) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(response);
        }
        let params = Object(_paginationHelpers__WEBPACK_IMPORTED_MODULE_8__["getPaginationHeaders"])(userParams.pageNumber, userParams.pageSize);
        params = params.append('minAge', userParams.minAge.toString());
        params = params.append('maxAge', userParams.maxAge.toString());
        params = params.append('gender', userParams.gender);
        params = params.append('orderBy', userParams.orderBy);
        return Object(_paginationHelpers__WEBPACK_IMPORTED_MODULE_8__["getPaginatedResult"])(this.baseUrl + 'users', params, this.http)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            this.memberCache.set(Object.values(userParams).join('-'), response);
            return response;
        }));
    }
    getMember(username) {
        const member = [...this.memberCache.values()]
            .reduce((arr, elem) => arr.concat(elem.result), [])
            .find((member) => member.username === username);
        if (member) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(member);
        }
        return this.http.get(this.baseUrl + 'users/' + username);
    }
    updateMember(member) {
        return this.http.put(this.baseUrl + 'users', member).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => {
            const index = this.members.indexOf(member);
            this.members[index] = member;
        }));
    }
    setMainPhoto(photoId) {
        return this.http.put(this.baseUrl + 'users/set-main-photo/' + photoId, {});
    }
    deletePhoto(photoId) {
        return this.http.delete(this.baseUrl + 'users/delete-photo/' + photoId);
    }
    addLike(username) {
        return this.http.post(this.baseUrl + 'likes/' + username, {});
    }
    getLikes(predicate, pageNumber, pageSize) {
        let params = Object(_paginationHelpers__WEBPACK_IMPORTED_MODULE_8__["getPaginationHeaders"])(pageNumber, pageSize);
        params = params.append('predicate', predicate);
        return Object(_paginationHelpers__WEBPACK_IMPORTED_MODULE_8__["getPaginatedResult"])(this.baseUrl + 'likes', params, this.http);
    }
};
MembersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"] }
];
MembersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], MembersService);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./members/member-list/member-list.component */ "Rv1c");
/* harmony import */ var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./members/member-detail/member-detail.component */ "PL33");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lists/lists.component */ "hnRM");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./messages/messages.component */ "DruN");
/* harmony import */ var _modules_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_modules/shared.module */ "IiJT");
/* harmony import */ var _errors_test_errors_test_errors_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./errors/test-errors/test-errors.component */ "/Lly");
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_interceptors/error.interceptor */ "MMab");
/* harmony import */ var _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./errors/not-found/not-found.component */ "4rg4");
/* harmony import */ var _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./errors/server-error/server-error.component */ "81j5");
/* harmony import */ var _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./members/member-card/member-card.component */ "kntC");
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_interceptors/jwt.interceptor */ "Btx/");
/* harmony import */ var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./members/member-edit/member-edit.component */ "u2he");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_interceptors/loading.interceptor */ "VNsv");
/* harmony import */ var _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./members/photo-editor/photo-editor.component */ "Zkt1");
/* harmony import */ var _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_forms/text-input/text-input.component */ "hOav");
/* harmony import */ var _forms_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_forms/date-input/date-input.component */ "0r7+");
/* harmony import */ var _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./members/member-messages/member-messages.component */ "2qCV");
/* harmony import */ var _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin/admin-panel/admin-panel.component */ "qPLm");
/* harmony import */ var _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./_directives/has-role.directive */ "8T1h");
/* harmony import */ var _admin_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./admin/user-management/user-management.component */ "OcPW");
/* harmony import */ var _admin_photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./admin/photo-management/photo-management.component */ "4+ph");
/* harmony import */ var _modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./modals/roles-modal/roles-modal.component */ "yNbP");
/* harmony import */ var _modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./modals/confirm-dialog/confirm-dialog.component */ "vMgs");



































let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
            _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_11__["MemberListComponent"],
            _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_12__["MemberDetailComponent"],
            _lists_lists_component__WEBPACK_IMPORTED_MODULE_13__["ListsComponent"],
            _messages_messages_component__WEBPACK_IMPORTED_MODULE_14__["MessagesComponent"],
            _errors_test_errors_test_errors_component__WEBPACK_IMPORTED_MODULE_16__["TestErrorsComponent"],
            _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"],
            _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_19__["ServerErrorComponent"],
            _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_20__["MemberCardComponent"],
            _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_22__["MemberEditComponent"],
            _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_25__["PhotoEditorComponent"],
            _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_26__["TextInputComponent"],
            _forms_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_27__["DateInputComponent"],
            _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_28__["MemberMessagesComponent"],
            _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_29__["AdminPanelComponent"],
            _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_30__["HasRoleDirective"],
            _admin_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_31__["UserManagementComponent"],
            _admin_photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_32__["PhotoManagementComponent"],
            _modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_33__["RolesModalComponent"],
            _modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_34__["ConfirmDialogComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _modules_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_23__["NgxSpinnerModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_17__["ErrorInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_21__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_24__["LoadingInterceptor"], multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "Zkt1":
/*!****************************************************************!*\
  !*** ./src/app/members/photo-editor/photo-editor.component.ts ***!
  \****************************************************************/
/*! exports provided: PhotoEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoEditorComponent", function() { return PhotoEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_photo_editor_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./photo-editor.component.html */ "FRJe");
/* harmony import */ var _photo_editor_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo-editor.component.css */ "cGH7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "7pIB");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/members.service */ "YMan");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");









let PhotoEditorComponent = class PhotoEditorComponent {
    constructor(accountService, memberService) {
        this.accountService = accountService;
        this.memberService = memberService;
        this.hasBaseDropZoneOver = false;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(user => this.user = user);
    }
    ngOnInit() {
        this.initializeUploader();
    }
    fileOverBase(e) {
        this.hasBaseDropZoneOver = e;
    }
    setMainPhoto(photo) {
        this.memberService.setMainPhoto(photo.id).subscribe(() => {
            this.user.photoUrl = photo.url;
            this.accountService.setCurrentUser(this.user);
            this.member.photoUrl = photo.url;
            this.member.photos.forEach(p => {
                if (p.isMain)
                    p.isMain = false;
                if (p.id === photo.id)
                    p.isMain = true;
            });
        });
    }
    deletePhoto(photoId) {
        this.memberService.deletePhoto(photoId).subscribe(() => {
            this.member.photos = this.member.photos.filter(x => x.id !== photoId);
        });
    }
    initializeUploader() {
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({
            url: this.baseUrl + 'users/add-photo',
            authToken: 'Bearer ' + this.user.token,
            isHTML5: true,
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 10 * 1024 * 1024
        });
        this.uploader.onAfterAddingFile = (file) => {
            file.withCredentials = false;
        };
        this.uploader.onSuccessItem = (item, response, status, headers) => {
            if (response) {
                const photo = JSON.parse(response);
                this.member.photos.push(photo);
                if (photo.isMain) {
                    this.user.photoUrl = photo.url;
                    this.member.photoUrl = photo.url;
                    this.accountService.setCurrentUser(this.user);
                }
            }
        };
    }
};
PhotoEditorComponent.ctorParameters = () => [
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] },
    { type: src_app_services_members_service__WEBPACK_IMPORTED_MODULE_7__["MembersService"] }
];
PhotoEditorComponent.propDecorators = {
    member: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PhotoEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-photo-editor',
        template: _raw_loader_photo_editor_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_photo_editor_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PhotoEditorComponent);



/***/ }),

/***/ "a8qC":
/*!********************************************************!*\
  !*** ./src/app/_resolvers/member-detailed.resolver.ts ***!
  \********************************************************/
/*! exports provided: MemberDetailedResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailedResolver", function() { return MemberDetailedResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_members_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/members.service */ "YMan");



let MemberDetailedResolver = class MemberDetailedResolver {
    constructor(memberService) {
        this.memberService = memberService;
    }
    resolve(route) {
        return this.memberService.getMember(route.paramMap.get('username'));
    }
};
MemberDetailedResolver.ctorParameters = () => [
    { type: _services_members_service__WEBPACK_IMPORTED_MODULE_2__["MembersService"] }
];
MemberDetailedResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MemberDetailedResolver);



/***/ }),

/***/ "cGH7":
/*!*****************************************************************!*\
  !*** ./src/app/members/photo-editor/photo-editor.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvcGhvdG8tZWRpdG9yL3Bob3RvLWVkaXRvci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "gTRF":
/*!**************************************************************!*\
  !*** ./src/app/modals/roles-modal/roles-modal.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9yb2xlcy1tb2RhbC9yb2xlcy1tb2RhbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "hOav":
/*!***********************************************************!*\
  !*** ./src/app/_forms/text-input/text-input.component.ts ***!
  \***********************************************************/
/*! exports provided: TextInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInputComponent", function() { return TextInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_text_input_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./text-input.component.html */ "n7CQ");
/* harmony import */ var _text_input_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-input.component.css */ "1f5s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





let TextInputComponent = class TextInputComponent {
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.label = '';
        this.type = 'text';
        this.ngControl.valueAccessor = this;
    }
    writeValue(obj) {
    }
    registerOnChange(fn) {
    }
    registerOnTouched(fn) {
    }
    setDisabledState(isDisabled) {
    }
    ngOnInit() {
    }
};
TextInputComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"] }] }
];
TextInputComponent.propDecorators = {
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
TextInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-text-input',
        template: _raw_loader_text_input_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_text_input_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TextInputComponent);



/***/ }),

/***/ "hnRM":
/*!******************************************!*\
  !*** ./src/app/lists/lists.component.ts ***!
  \******************************************/
/*! exports provided: ListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsComponent", function() { return ListsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lists_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lists.component.html */ "LlU7");
/* harmony import */ var _lists_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lists.component.css */ "zqoj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_members_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/members.service */ "YMan");





let ListsComponent = class ListsComponent {
    constructor(memberService) {
        this.memberService = memberService;
        this.predicate = 'liked';
        this.pageNumber = 1;
        this.pageSize = 5;
    }
    ngOnInit() {
        this.loadLikes();
    }
    loadLikes() {
        this.memberService.getLikes(this.predicate, this.pageNumber, this.pageSize).subscribe(response => {
            this.members = response.result;
            this.pagination = response.pagination;
        });
    }
    pageChanged(event) {
        this.pageNumber = event.page;
        this.loadLikes();
    }
};
ListsComponent.ctorParameters = () => [
    { type: _services_members_service__WEBPACK_IMPORTED_MODULE_4__["MembersService"] }
];
ListsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lists',
        template: _raw_loader_lists_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lists_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListsComponent);



/***/ }),

/***/ "hqKe":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-panel/admin-panel.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXBhbmVsL2FkbWluLXBhbmVsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "huGP":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/confirm-dialog/confirm-dialog.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">{{title}}</h4>\n  </div>\n  <div class=\"modal-body\">\n    <p>{{message}}</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"confirm()\">{{btnOkText}}</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"decline()\">{{btnCancelText}}</button>\n  </div>");

/***/ }),

/***/ "izVM":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nav.component.html */ "keMZ");
/* harmony import */ var _nav_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.component.css */ "SECP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/account.service */ "5ZPe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");







let NavComponent = class NavComponent {
    constructor(accountService, router, toastr) {
        this.accountService = accountService;
        this.router = router;
        this.toastr = toastr;
        this.model = {};
    }
    ngOnInit() {
    }
    login() {
        this.accountService.login(this.model).subscribe(response => {
            this.router.navigateByUrl('\members');
        });
    }
    logout() {
        this.accountService.logout();
        this.router.navigateByUrl('/');
    }
};
NavComponent.ctorParameters = () => [
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
];
NavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav',
        template: _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NavComponent);



/***/ }),

/***/ "keMZ":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-primary\">\n  <div class='container'>\n    <a class=\"navbar-brand\" routerLink='/' routerLinkActive=\"active\">Dating App</a>\n      \n    <ul class=\"navbar-nav mr-auto\">\n      <ng-container *ngIf=\"accountService.currentUser$ | async\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink='/members' routerLinkActive=\"active\">Matches</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink='/lists' routerLinkActive=\"active\">Lists</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink='/messages' routerLinkActive=\"active\">Messages</a>\n        </li>\n        <li *appHasRole='[\"Admin\", \"Moderator\"]' class=\"nav-item\">\n          <a class=\"nav-link\" routerLink='/admin' routerLinkActive=\"active\">Admin</a>\n        </li>\n      </ng-container>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink='/errors' routerLinkActive=\"active\">Errors</a>\n      </li>\n        \n      </ul>\n      <div class=\"dropdown\" *ngIf=\"accountService.currentUser$ | async as user\"  dropdown>\n        <img src=\"{{user.photoUrl || './assets/user.png'}}\" alt=\"{{user.username}}\">\n        <a class=\"dropdown-toggle text-light ml-2\" dropdownToggle>Welcome {{user.knownAs || user.username | titlecase}}</a>\n        <div class=\"dropdown-menu mt-3\" *dropdownMenu>\n          <a class=\"dropdown-item\"routerLink=\"/member/edit\" routerLinkActive=\"active\">Edit Profile</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" (click)=\"logout()\">Logout</a>\n        </div>\n      </div>\n      <form *ngIf=\"(accountService.currentUser$ | async) === null\" #loginForm=\"ngForm\" class=\"d-flex\" (ngSubmit)=\"login()\" \n      autocomplete=\"off\">\n        <input \n        name=\"username\"\n        [(ngModel)] = \"model.username\"\n        class=\"form-control mr-sm-2\" \n        type=\"text\" \n        placeholder=\"Username\">\n        <input \n        name=\"password\"\n        [(ngModel)] = \"model.password\"\n        class=\"form-control mr-sm-2\" \n        type=\"password\" \n        placeholder=\"Password\">\n        <button class=\"btn btn-success my-2 my-sm-0\" type=\"submit\">Login</button>\n      </form>\n    </div>\n</nav>\n  \n    \n");

/***/ }),

/***/ "kntC":
/*!**************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberCardComponent", function() { return MemberCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_member_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./member-card.component.html */ "Ur/1");
/* harmony import */ var _member_card_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./member-card.component.css */ "oXys");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/members.service */ "YMan");
/* harmony import */ var src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/presence.service */ "mV+E");







let MemberCardComponent = class MemberCardComponent {
    constructor(memberService, toastr, presence) {
        this.memberService = memberService;
        this.toastr = toastr;
        this.presence = presence;
    }
    ngOnInit() {
    }
    addLike(member) {
        this.memberService.addLike(member.username).subscribe(() => {
            this.toastr.success('You have liked ' + member.knownAs);
        });
    }
};
MemberCardComponent.ctorParameters = () => [
    { type: src_app_services_members_service__WEBPACK_IMPORTED_MODULE_5__["MembersService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_6__["PresenceService"] }
];
MemberCardComponent.propDecorators = {
    member: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
MemberCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-member-card',
        template: _raw_loader_member_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_member_card_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MemberCardComponent);



/***/ }),

/***/ "mV+E":
/*!***********************************************!*\
  !*** ./src/app/_services/presence.service.ts ***!
  \***********************************************/
/*! exports provided: PresenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresenceService", function() { return PresenceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/signalr */ "6HpG");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");








let PresenceService = class PresenceService {
    constructor(toastr, router) {
        this.toastr = toastr;
        this.router = router;
        this.hubUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].hubUrl;
        this.onlineUsersSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.onlineUsers$ = this.onlineUsersSource.asObservable();
    }
    createHubConnection(user) {
        this.hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__["HubConnectionBuilder"]()
            .withUrl(this.hubUrl + 'presence', {
            accessTokenFactory: () => user.token
        })
            .withAutomaticReconnect()
            .build();
        this.hubConnection
            .start()
            .catch(error => console.log(error));
        this.hubConnection.on('UserIsOnline', username => {
            this.onlineUsers$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(usernames => {
                this.onlineUsersSource.next([...usernames, username]);
            });
        });
        this.hubConnection.on('UserIsOffline', username => {
            this.onlineUsers$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(usernames => {
                this.onlineUsersSource.next([...usernames.filter(x => x !== username)]);
            });
        });
        this.hubConnection.on('GetOnlineUsers', (usernames) => {
            this.onlineUsersSource.next(usernames);
        });
        this.hubConnection.on('NewMessageReceived', ({ username, knownAs }) => {
            this.toastr.info(knownAs + ' has sent you a new message')
                .onTap
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
                .subscribe(() => this.router.navigateByUrl('/members/' + username + '?tab=3'));
        });
    }
    stopHubConnection() {
        this.hubConnection.stop().catch(error => console.log(error));
    }
};
PresenceService.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PresenceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PresenceService);



/***/ }),

/***/ "n7CQ":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_forms/text-input/text-input.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group\">\n    <input \n    [class.is-invalid]=\"ngControl.touched && ngControl.invalid\"\n    type={{type}}\n    class=\"form-control\"\n    [formControl]=\"ngControl.control\" \n    placeholder={{label}}>\n\n    <div *ngIf=\"ngControl.control?.errors?.required\" \n    class=\"invalid-feedback\">Please enter a {{label}}</div>\n\n    <div *ngIf=\"ngControl.control?.errors?.minlength\"\n    class=\"invalid-feedback\">\n    {{label}} must be least {{ngControl.control?.errors?.minlength['requiredLength']}}\n    </div>\n\n    <div *ngIf=\"ngControl.control?.errors?.maxlength\" \n    class=\"invalid-feedback\">\n    {{label}} must be most {{ngControl.control?.errors?.maxlength['requiredLength']}}\n    </div>\n\n    <div *ngIf=\"ngControl.control?.errors?.isMatching\" \n    class=\"invalid-feedback\">Passwords do not match</div>\n\n\n</div>");

/***/ }),

/***/ "nXO7":
/*!***************************************!*\
  !*** ./src/app/_models/userParams.ts ***!
  \***************************************/
/*! exports provided: UserParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserParams", function() { return UserParams; });
class UserParams {
    constructor(user) {
        this.minAge = 18;
        this.maxAge = 99;
        this.pageNumber = 1;
        this.pageSize = 5;
        this.orderBy = 'lastActive';
        this.gender = user && user.gender === 'female' ? 'male' : 'female';
    }
}


/***/ }),

/***/ "njUE":
/*!********************************************************************!*\
  !*** ./src/app/modals/confirm-dialog/confirm-dialog.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "nyuw":
/*!*********************************************************************!*\
  !*** ./src/app/admin/user-management/user-management.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "oXys":
/*!***************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card:hover img {\r\n    transform: scale(1.2, 1.2);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n    opacity: 0.7;\r\n}\r\n\r\n.card img {\r\n    transform: scale(1.0, 1.0);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;    \r\n}\r\n\r\n.card-img-wrapper {\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.member-icons {\r\n    position: absolute;\r\n    bottom: -30%;\r\n    left: 0;\r\n    right: 0;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    opacity: 0;\r\n}\r\n\r\n.card-img-wrapper:hover .member-icons {\r\n    opacity: 1;\r\n    bottom: 0;\r\n}\r\n\r\n.animate {\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n@keyframes fa-blink {\r\n    0% {opacity: 1;}\r\n    100% {opacity: 0.4;}\r\n}\r\n\r\n.is-online {\r\n    animation: fa-blink 1.5s linear infinite;\r\n    color: rgb(1, 180, 42);    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItY2FyZC9tZW1iZXItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixvQ0FBb0M7SUFDcEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxJQUFJLFVBQVUsQ0FBQztJQUNmLE1BQU0sWUFBWSxDQUFDO0FBQ3ZCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvbWVtYmVyLWNhcmQvbWVtYmVyLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkOmhvdmVyIGltZyB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4uY2FyZCBpbWcge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAsIDEuMCk7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDsgICAgXHJcbn1cclxuXHJcbi5jYXJkLWltZy13cmFwcGVyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5tZW1iZXItaWNvbnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMzAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY2FyZC1pbWctd3JhcHBlcjpob3ZlciAubWVtYmVyLWljb25zIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5hbmltYXRlIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhLWJsaW5rIHtcclxuICAgIDAlIHtvcGFjaXR5OiAxO31cclxuICAgIDEwMCUge29wYWNpdHk6IDAuNDt9XHJcbn1cclxuXHJcbi5pcy1vbmxpbmUge1xyXG4gICAgYW5pbWF0aW9uOiBmYS1ibGluayAxLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGNvbG9yOiByZ2IoMSwgMTgwLCA0Mik7ICAgIFxyXG59Il19 */");

/***/ }),

/***/ "qPLm":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-panel/admin-panel.component.ts ***!
  \************************************************************/
/*! exports provided: AdminPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function() { return AdminPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_panel_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-panel.component.html */ "2Hd7");
/* harmony import */ var _admin_panel_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-panel.component.css */ "hqKe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AdminPanelComponent = class AdminPanelComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminPanelComponent.ctorParameters = () => [];
AdminPanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-panel',
        template: _raw_loader_admin_panel_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_panel_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminPanelComponent);



/***/ }),

/***/ "rRnX":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_forms/date-input/date-input.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group\">\n    <input \n    type=\"text\"\n    [class.is-invalid]='ngControl.touched && ngControl.invalid'\n    class=\"form-control\"\n    [formControl]='ngControl.control'\n    placeholder=\"{{label}}\"\n    bsDatepicker\n    [bsConfig]='bsConfig'\n    [maxDate]='maxDate'\n>\n    <div *ngIf=\"ngControl.control?.errors?.required\" class=\"invalid-feedback\">{{label}} is required</div>\n</div>");

/***/ }),

/***/ "rt/O":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mb-4\">\n    <div class=\"btn-group\" name='container'>\n        <button class=\"btn btn-primary\" btnRadio='Unread' [(ngModel)]=\"container\" \n            (click)=\"loadMessages()\">\n            <i class=\"fa fa-envelope\"></i> Unread\n        </button>\n        <button class=\"btn btn-primary\" btnRadio='Inbox' [(ngModel)]=\"container\" \n            (click)=\"loadMessages()\">\n            <i class=\"fa fa-envelope-open\"></i> Inbox\n        </button>\n        <button class=\"btn btn-primary\" btnRadio='Outbox' [(ngModel)]=\"container\" \n            (click)=\"loadMessages()\">\n            <i class=\"fa fa-paper-plane\"></i> Outbox\n        </button>\n    </div>\n</div>\n\n<div class=\"row\" *ngIf=\"messages?.length === 0\">\n    <h3>No messages</h3>\n</div>\n\n<div class=\"row\" *ngIf=\"messages?.length > 0\">\n    <table class=\"table table-hover\" style=\"cursor: pointer;\">\n        <tr>\n            <th style=\"width: 40%;\">Message</th>\n            <th style=\"width: 20%;\">From / To</th>\n            <th style=\"width: 20%;\">Sent / Received</th>\n            <th style=\"width: 20%;\"></th>\n        </tr>\n        <tr [hidden]=\"loading\" *ngFor=\"let message of messages\" \n            routerLink='{{container === \"Outbox\" \n            ? \"/members/\" + message.recipientUsername \n            : \"/members/\" + message.senderUsername}}' [queryParams]=\"{tab: 3}\" >\n            <td>{{message.content}}</td>\n            <td>\n                <div *ngIf=\"containter === 'Outbox'\">\n                    <img \n                        class=\"img-circle rounded-circle mr-2\"\n                        src=\"{{message.recipientPhotoUrl || './assets/user.png'}}\" \n                        alt=\"{{message.recipientUsername}}\">\n                    <strong>{{message.recipientUsername | titlecase}}</strong>\n                </div>\n                <div *ngIf=\"containter !== 'Outbox'\">\n                    <img \n                        class=\"img-circle rounded-circle mr-2\"\n                        src=\"{{message.senderPhotoUrl || './assets/user.png'}}\" \n                        alt=\"{{message.senderUsername}}\">\n                    <strong>{{message.senderUsername | titlecase}}</strong>\n                </div>\n            </td>\n            <td>{{message.messageSent | timeago}}</td>\n            <td>\n                <button (click)=\"$event.stopPropagation()\" (click)=\"deleteMessage(message.id)\" class=\"btn btn-danger\">Delete</button>\n            </td>\n        </tr>\n    </table>\n</div>\n\n<div class=\"d-flex justify-content-center\" *ngIf=\"pagination && !loading\">\n    <pagination \n        [boundaryLinks]=\"true\" \n        [totalItems]='pagination.totalItems'\n        [itemsPerPage]='pagination.itemsPerPage'\n        [(ngModel)]=\"pagination.currentPage\"\n        (pageChanged)=\"pageChanged($event)\"\n        previousText=\"&lsaquo;\" \n        nextText=\"&rsaquo;\" \n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n</pagination>\n</div>\n");

/***/ }),

/***/ "rw5Q":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-detail/member-detail.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-4\">\n        <div class=\"card\">\n            <img src=\"{{member.photoUrl || './assets/user.png'}}\" alt=\"{{member.knownAs}}\" \n                class=\"card-img-top img-thumbnail\">  \n            <div class=\"card-body\">\n                <div class=\"mb-2\" *ngIf=\"(presence.onlineUsers$ | async).includes(member.username)\">\n                    <i class=\"fa fa-user-circle text-success\"></i> Online now\n                </div>\n                <div>\n                    <strong>Location:</strong>\n                    <p>{{member.city}}, {{member.country}}</p>\n                </div>\n                <div>\n                    <strong>Age:</strong>\n                    <p>{{member.age}}</p>\n                </div>\n                <div>\n                    <strong>Last Active:</strong>\n                    <p>{{member.lastActive | timeago}}</p>\n                </div>\n                <div>\n                    <strong>Member since:</strong>\n                    <p>{{member.created | date: 'dd mmmm yyyy'}}</p>\n                </div>\n            </div>  \n            <div class=\"card-footer\">\n                <div class=\"btn-group d-flex\">\n                    <button class=\"btn btn-primary\">Like</button>\n                    <button (click)=\"selectTab(3)\" class=\"btn btn-success\">Message</button>\n                </div>    \n            </div>\n        </div>\n    </div>\n    \n\n    <div class=\"col-8\">\n        <tabset class=\"member-tabset\" #memberTabs> \n            <tab heading=\"About {{member.knownAs}}\" (selectTab)=\"onTabActivated($event)\">\n                <h4>Desciption</h4>\n                <p>{{member.introduction}}</p>\n                <h4>Looking for</h4>\n                <p>{{member.lookingFor}}</p>\n            </tab>\n            <tab heading=\"Interests\" (selectTab)=\"onTabActivated($event)\">\n                <h4>Interests</h4>\n                <p>{{member.interests}}</p>\n            </tab>\n            <tab heading=\"Photos\" (selectTab)=\"onTabActivated($event)\">\n                <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\" \n                style=\"display: inline-block; margin-bottom: 20px;\"></ngx-gallery>\n            </tab>\n            <tab heading=\"Messages\" (selectTab)=\"onTabActivated($event)\">\n                <app-member-messages  [username]=\"member.username\"></app-member-messages>\n            </tab>\n        </tabset>\n    </div>\n</div>\n        ");

/***/ }),

/***/ "u2he":
/*!**************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberEditComponent", function() { return MemberEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_member_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./member-edit.component.html */ "SFMN");
/* harmony import */ var _member_edit_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./member-edit.component.css */ "U0OR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/members.service */ "YMan");








let MemberEditComponent = class MemberEditComponent {
    constructor(accountService, memberService, toastr) {
        this.accountService = accountService;
        this.memberService = memberService;
        this.toastr = toastr;
        this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(user => this.user = user);
    }
    unloadNotification($event) {
        if (this.editForm.dirty) {
            $event.returnValue = true;
        }
    }
    ngOnInit() {
        this.loadMember();
    }
    loadMember() {
        this.memberService.getMember(this.user.username).subscribe(member => {
            this.member = member;
        });
    }
    updateMember() {
        this.memberService.updateMember(this.member).subscribe(() => {
            this.toastr.success('Profile updated successfully');
            this.editForm.reset(this.member);
        });
    }
};
MemberEditComponent.ctorParameters = () => [
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] },
    { type: src_app_services_members_service__WEBPACK_IMPORTED_MODULE_7__["MembersService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
MemberEditComponent.propDecorators = {
    editForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['editForm',] }],
    unloadNotification: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:beforeunload', ['$event'],] }]
};
MemberEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-member-edit',
        template: _raw_loader_member_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_member_edit_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MemberEditComponent);



/***/ }),

/***/ "v9I1":
/*!**********************************************************!*\
  !*** ./src/app/_guards/prevent-unsaved-changes.guard.ts ***!
  \**********************************************************/
/*! exports provided: PreventUnsavedChangesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventUnsavedChangesGuard", function() { return PreventUnsavedChangesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/confirm.service */ "xuvy");



let PreventUnsavedChangesGuard = class PreventUnsavedChangesGuard {
    constructor(confirmService) {
        this.confirmService = confirmService;
    }
    canDeactivate(component) {
        if (component.editForm.dirty) {
            return this.confirmService.confirm();
        }
        return true;
    }
};
PreventUnsavedChangesGuard.ctorParameters = () => [
    { type: _services_confirm_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmService"] }
];
PreventUnsavedChangesGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PreventUnsavedChangesGuard);



/***/ }),

/***/ "vMgs":
/*!*******************************************************************!*\
  !*** ./src/app/modals/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_confirm_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./confirm-dialog.component.html */ "huGP");
/* harmony import */ var _confirm_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm-dialog.component.css */ "njUE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");





let ConfirmDialogComponent = class ConfirmDialogComponent {
    constructor(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    ngOnInit() {
    }
    confirm() {
        this.result = true;
        this.bsModalRef.hide();
    }
    decline() {
        this.result = false;
        this.bsModalRef.hide();
    }
};
ConfirmDialogComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] }
];
ConfirmDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm-dialog',
        template: _raw_loader_confirm_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirm_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ConfirmDialogComponent);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./members/member-list/member-list.component */ "Rv1c");
/* harmony import */ var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./members/member-detail/member-detail.component */ "PL33");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lists/lists.component */ "hnRM");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages/messages.component */ "DruN");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_guards/auth.guard */ "PSoG");
/* harmony import */ var _errors_test_errors_test_errors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./errors/test-errors/test-errors.component */ "/Lly");
/* harmony import */ var _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./errors/not-found/not-found.component */ "4rg4");
/* harmony import */ var _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./errors/server-error/server-error.component */ "81j5");
/* harmony import */ var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./members/member-edit/member-edit.component */ "u2he");
/* harmony import */ var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_guards/prevent-unsaved-changes.guard */ "v9I1");
/* harmony import */ var _resolvers_member_detailed_resolver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_resolvers/member-detailed.resolver */ "a8qC");
/* harmony import */ var _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/admin-panel/admin-panel.component */ "qPLm");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_guards/admin.guard */ "NWYD");

















const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        children: [
            { path: 'members', component: _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_4__["MemberListComponent"] },
            { path: 'members/:username', component: _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_5__["MemberDetailComponent"], resolve: { member: _resolvers_member_detailed_resolver__WEBPACK_IMPORTED_MODULE_14__["MemberDetailedResolver"] } },
            { path: 'member/edit', component: _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_12__["MemberEditComponent"], canDeactivate: [_guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_13__["PreventUnsavedChangesGuard"]] },
            { path: 'lists', component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_6__["ListsComponent"] },
            { path: 'messages', component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_7__["MessagesComponent"] },
            { path: 'admin', component: _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_15__["AdminPanelComponent"], canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_16__["AdminGuard"]] },
        ]
    },
    { path: 'errors', component: _errors_test_errors_test_errors_component__WEBPACK_IMPORTED_MODULE_9__["TestErrorsComponent"] },
    { path: 'not-found', component: _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"] },
    { path: 'server-error', component: _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_11__["ServerErrorComponent"] },
    { path: '**', component: _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"], pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "xuvy":
/*!**********************************************!*\
  !*** ./src/app/_services/confirm.service.ts ***!
  \**********************************************/
/*! exports provided: ConfirmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmService", function() { return ConfirmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/confirm-dialog/confirm-dialog.component */ "vMgs");





let ConfirmService = class ConfirmService {
    constructor(modalService) {
        this.modalService = modalService;
    }
    confirm(title = 'Confirmation', message = 'Are you sure you want to do this?', btnOkText = 'Ok', btnCancelText = 'Cancel') {
        const config = {
            initialState: {
                title,
                message,
                btnOkText,
                btnCancelText
            }
        };
        this.bsModelRef = this.modalService.show(_modals_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], config);
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](this.getResult());
    }
    getResult() {
        return (observer) => {
            const subcription = this.bsModelRef.onHidden.subscribe(() => {
                observer.next(this.bsModelRef.content.result);
                observer.complete();
            });
            return {
                unsubscribe() {
                    subcription.unsubscribe();
                }
            };
        };
    }
};
ConfirmService.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }
];
ConfirmService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConfirmService);



/***/ }),

/***/ "yNbP":
/*!*************************************************************!*\
  !*** ./src/app/modals/roles-modal/roles-modal.component.ts ***!
  \*************************************************************/
/*! exports provided: RolesModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesModalComponent", function() { return RolesModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_roles_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./roles-modal.component.html */ "Cegr");
/* harmony import */ var _roles_modal_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roles-modal.component.css */ "gTRF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");





let RolesModalComponent = class RolesModalComponent {
    constructor(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.updateSelectedRoles = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
    }
    updateRoles() {
        this.updateSelectedRoles.emit(this.roles);
        this.bsModalRef.hide();
    }
};
RolesModalComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] }
];
RolesModalComponent.propDecorators = {
    updateSelectedRoles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
RolesModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-roles-modal',
        template: _raw_loader_roles_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_roles_modal_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RolesModalComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");


Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zqoj":
/*!*******************************************!*\
  !*** ./src/app/lists/lists.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RzL2xpc3RzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2019.js.map