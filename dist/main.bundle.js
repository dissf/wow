webpackJsonp([1,4],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, ".btn-group-justified {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.btn-group-justified .btn:first-child {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: left;\n}\n\n.btn-group-justified .dropdown-menu {\n  width: 100%;\n}\n.btn-group-justified .dropdown-item{\n  cursor: pointer;\n}\n.btn-group-justified .dropdown-item.active{\n  cursor: default;\n}\n.btn-group-justified .dropdown-item:active {\n  background: transparent;\n  color: inherit;\n}\n.btn-group-justified .dropdown-item:focus{\n  outline:none !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <form novalidate [formGroup]=\"signUpForm\" (submit)=\"submitForm($event);\">\n    <div class=\"form-group\">\n      <label>User Name</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"user_name\">\n    </div>\n    <validator-message [field]=\"signUpForm.get('user_name')\"></validator-message>\n\n    <fieldset formGroupName=\"address\">\n      <legend>Address</legend>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Country</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"country\">\n          </div>\n          <validator-message [field]=\"signUpForm.get('address').get('country')\"></validator-message>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>City</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"city\">\n          </div>\n          <validator-message [field]=\"signUpForm.get('address').get('city')\"></validator-message>\n        </div>\n      </div>\n    </fieldset>\n\n    <fieldset formArrayName=\"contacts\">\n      <legend>Contacts</legend>\n      <div class=\"form-group\" *ngFor=\"let contact of contacts.controls; let i = index\">\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <custom-select [options]=\"contactTypes\" [formControl]=\"contact.controls['type']\"></custom-select>\n          </div>\n          <div class=\"col-md-8\">\n            <input type=\"text\" class=\"form-control\" [formControl]=\"contact.controls['value']\">\n            <br>\n            <validator-message [field]=\"contact.controls['value']\"></validator-message>\n          </div>\n          <div class=\"col-md-1\">\n            <button class=\"btn btn-danger btn-block\" type=\"button\" (click)=\"removeContact(i);\">X</button>\n          </div>\n        </div>\n      </div>\n      <validator-message [field]=\"signUpForm.get('contacts')\"></validator-message>\n\n      <div class=\"clearfix text-right\">\n        <button class=\"btn btn-info\" type=\"button\" (click)=\"addContact();\">Add new</button>\n      </div>\n    </fieldset>\n\n    <fieldset formGroupName=\"passwords\">\n      <legend>Password</legend>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Type password</label>\n            <input type=\"password\" formControlName=\"pwd\" class=\"form-control\">\n          </div>\n          <validator-message [field]=\"signUpForm.get('passwords').get('pwd')\"></validator-message>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Confirm password</label>\n            <input type=\"password\" formControlName=\"confirm\" class=\"form-control\">\n          </div>\n          <validator-message [field]=\"signUpForm.get('passwords').get('confirm')\"></validator-message>\n        </div>\n        <div class=\"col-md-12\">\n          <br>\n          <validator-message [field]=\"signUpForm.get('passwords')\"></validator-message>\n        </div>\n      </div>\n    </fieldset>\n\n    <div class=\"clearfix text-right\">\n      <button class=\"btn btn-success btn-lg\" type=\"submit\">Submit</button>\n    </div>\n  </form>\n\n  <div *ngIf=\"userData\">\n    <hr>\n    <h3>Ok, you can send this data to server.</h3>\n    <pre>{{userData|json:2}}</pre>\n  </div>\n</div>\n"

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(75);


/***/ }),

/***/ 74:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 74;


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(85);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(fb) {
        this.fb = fb;
        this.signUpForm = null;
        this.userData = null;
        this.contactTypes = [
            { value: 'phone', title: 'Phone', validators: [this.phoneValidator(), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required] },
            { value: 'e-mail', title: 'E-mail', validators: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required] },
            { value: 'skype', title: 'Skype', validators: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, this.skypeLoginValidator()] }
        ];
        var pwdValidators = [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(20)];
        this.signUpForm = fb.group({
            user_name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, this.userNameValidator()]],
            address: fb.group({
                country: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]],
                city: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]]
            }),
            contacts: fb.array([], this.contactsLenValidator()),
            passwords: fb.group({
                pwd: ['', pwdValidators],
                confirm: ['', pwdValidators]
            }, { validator: this.passwordsAreEqual() })
        });
    }
    AppComponent.prototype.getContactValidatorsByType = function (type) {
        return this.contactTypes.filter(function (el) { return el.value === type; })[0].validators;
    };
    Object.defineProperty(AppComponent.prototype, "contacts", {
        get: function () {
            return this.signUpForm.get('contacts');
        },
        enumerable: true,
        configurable: true
    });
    // methods for contact manipulation
    AppComponent.prototype.addContact = function () {
        var _this = this;
        var newItemType = this.contactTypes[0].value;
        this.signUpForm.get('contacts').push(this.fb.group({
            type: [newItemType, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            value: ['', this.getContactValidatorsByType(newItemType)]
        }));
        var contactControls = this.signUpForm.get('contacts')['controls'];
        var currentContactGroup = contactControls[contactControls.length - 1];
        currentContactGroup.get('type').valueChanges.subscribe(function (type) {
            var valueCtrl = currentContactGroup.get('value');
            valueCtrl.setValidators(_this.getContactValidatorsByType(type));
            valueCtrl.updateValueAndValidity();
        });
    };
    AppComponent.prototype.removeContact = function (i) {
        this.signUpForm.get('contacts').removeAt(i);
    };
    // end methods for contact manipulation
    // custom validators
    AppComponent.prototype.contactsLenValidator = function () {
        return function (contacts) {
            if (contacts.length !== 0) {
                return null;
            }
            return {
                custom: 'At least one contact info should be added'
            };
        };
    };
    AppComponent.prototype.passwordsAreEqual = function () {
        console.log('here');
        return function (group) {
            if (!(group.dirty || group.touched) || group.get('pwd').value === group.get('confirm').value) {
                return null;
            }
            return {
                custom: 'Passwords are not equal'
            };
        };
    };
    AppComponent.prototype.skypeLoginValidator = function () {
        var pattern = /^[a-z][a-z0-9\.,\-_]{5,31}$/i;
        return function (control) {
            if (!(control.dirty || control.touched)) {
                return null;
            }
            else {
                return pattern.test(control.value) ? null : { custom: "Invalid skype login" };
            }
        };
    };
    AppComponent.prototype.phoneValidator = function () {
        var pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return function (control) {
            if (!(control.dirty || control.touched)) {
                return null;
            }
            else {
                return pattern.test(control.value) ? null : { custom: "Invalid phone number" };
            }
        };
    };
    AppComponent.prototype.userNameValidator = function () {
        var pattern = /^[\w\.\$@\*\!]{5,30}$/;
        return function (control) {
            if (!(control.dirty || control.touched)) {
                return null;
            }
            else {
                return pattern.test(control.value) ? null : { custom: "Min length:5, can't contain whitespaces & special symbols." };
            }
        };
    };
    // end custom validators
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addContact();
        // clear user data, if form invalid
        this.signUpForm.statusChanges.subscribe(function (status) {
            if (status === 'INVALID' && !!_this.userData) {
                _this.userData = null;
            }
        });
    };
    AppComponent.prototype.markControlsAsTouched = function (form) {
        for (var control in form.controls) {
            form.controls[control].markAsTouched();
            if (form.controls[control].controls) {
                this.markControlsAsTouched(form.controls[control]);
            }
        }
    };
    // submit form method
    AppComponent.prototype.submitForm = function (e) {
        e.preventDefault();
        console.log(this.signUpForm);
        if (this.signUpForm.invalid) {
            this.markControlsAsTouched(this.signUpForm);
            return false;
        }
        this.userData = this.signUpForm.value;
        // todo: send data to server
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(142),
        styles: [__webpack_require__(139)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validator_message_directive__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_custom_select_custom_select_component__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__validator_message_directive__["a" /* ValidatorMessageComponent */],
            __WEBPACK_IMPORTED_MODULE_6__shared_custom_select_custom_select_component__["a" /* CustomSelectComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomSelectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomSelectComponent = CustomSelectComponent_1 = (function () {
    function CustomSelectComponent() {
        this.options = [];
        this.open = false;
        this.onChange = function () {
        };
        this.onTouched = function () {
        };
    }
    Object.defineProperty(CustomSelectComponent.prototype, "placeholder", {
        get: function () {
            return this.selectedOption && this.selectedOption.hasOwnProperty('title') ? this.selectedOption.title : 'Select';
        },
        enumerable: true,
        configurable: true
    });
    CustomSelectComponent.prototype.optionSelect = function (option) {
        this.writeValue(option.value);
        this.onTouched();
        this.open = false;
    };
    CustomSelectComponent.prototype.toggleOpen = function () {
        this.open = !this.open;
    };
    Object.defineProperty(CustomSelectComponent.prototype, "isOpen", {
        get: function () {
            return this.open;
        },
        enumerable: true,
        configurable: true
    });
    CustomSelectComponent.prototype.writeValue = function (value) {
        if (!value || typeof value !== 'string') {
            return;
        }
        var selectedEl = this.options.find(function (el) { return el.value === value; });
        if (selectedEl) {
            this.selectedOption = selectedEl;
            this.onChange(this.selectedOption.value);
        }
    };
    CustomSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    CustomSelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return CustomSelectComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Array)
], CustomSelectComponent.prototype, "options", void 0);
CustomSelectComponent = CustomSelectComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'custom-select',
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* forwardRef */])(function () { return CustomSelectComponent_1; }),
                multi: true,
            }
        ],
        template: "\n    <div class=\"btn-group btn-group-justified\" [ngClass]=\"{'show':isOpen}\">\n      <button type=\"button\" class=\"btn btn-secondary\">{{ placeholder }}</button>\n      <button type=\"button\" class=\"btn btn-secondary dropdown-toggle dropdown-toggle-split\" (click)=\"toggleOpen();\">\n        <span class=\"sr-only\">Toggle Dropdown</span>\n      </button>\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n        <button\n          type=\"button\"\n          class=\"dropdown-item\"\n          *ngFor=\"let option of options\"\n          [ngClass]=\"{'active':option.value === value}\"\n          (click)=\"optionSelect(option);\">\n          {{option.title}}\n        </button>\n        <div class=\"dropdown-item\" *ngIf=\"!options.length\">No items for select</div>\n      </div>\n    </div>\n  ",
        styles: [__webpack_require__(140)]
    })
], CustomSelectComponent);

var CustomSelectComponent_1;
//# sourceMappingURL=custom-select.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorMessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidatorMessageComponent = (function () {
    function ValidatorMessageComponent() {
    }
    Object.defineProperty(ValidatorMessageComponent.prototype, "validatorMessages", {
        get: function () {
            var field = this.field;
            if (!field || !field.errors) {
                return false;
            }
            var errors = [];
            var config = {
                required: 'Field is required',
                requiredTrue: 'Value should be positive',
                email: 'Field should contain e-mail',
                pattern: 'Field does not match to pattern'
            };
            if (field.errors.hasOwnProperty('custom')) {
                config['custom'] = (typeof field.errors.custom === 'string' && field.errors.custom.length) ?
                    field.errors.custom :
                    'Does not match to format';
            }
            if (field.errors.hasOwnProperty('minlength')) {
                config['minlength'] = "Minimum length " + field.errors.minlength.requiredLength;
            }
            if (field.errors.hasOwnProperty('maxlength')) {
                config['maxlength'] = "Maximum length " + field.errors.maxlength.requiredLength;
            }
            Object.keys(field.errors).forEach(function (error) {
                errors.push(config[error]);
            });
            return errors;
        },
        enumerable: true,
        configurable: true
    });
    return ValidatorMessageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]) === "function" && _a || Object)
], ValidatorMessageComponent.prototype, "field", void 0);
ValidatorMessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'validator-message',
        template: "\n    <div class=\"alert alert-danger\" *ngIf=\"field.invalid && field.touched && validatorMessages?.length\">\n      <li *ngFor=\"let errMsg of validatorMessages\"> {{errMsg}}</li>\n    </div>\n  "
    })
], ValidatorMessageComponent);

var _a;
//# sourceMappingURL=validator-message.directive.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[167]);
//# sourceMappingURL=main.bundle.js.map