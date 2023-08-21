"use strict";
(self["webpackChunkRasad"] = self["webpackChunkRasad"] || []).push([["src_app_pages_contact-us_contact-us_module_ts"],{

/***/ 7854:
/*!***************************!*\
  !*** ./src/app/helper.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isLabelRequired": () => (/* binding */ isLabelRequired)
/* harmony export */ });
function isLabelRequired(label, formData) {
    var _a;
    var validators;
    if (label.includes('.') &&
        typeof ((_a = formData.get(label)) === null || _a === void 0 ? void 0 : _a.validator) === 'function') {
        validators = formData.get(label).validator({});
    }
    else if (formData.controls[label] &&
        typeof formData.controls[label].validator === 'function') {
        validators = formData.controls[label].validator({});
    }
    return validators ? validators.required : false;
}


/***/ }),

/***/ 5775:
/*!***************************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsRoutingModule": () => (/* binding */ ContactUsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us.component */ 9165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _contact_us_component__WEBPACK_IMPORTED_MODULE_0__.ContactUsComponent }];
class ContactUsRoutingModule {
}
ContactUsRoutingModule.ɵfac = function ContactUsRoutingModule_Factory(t) { return new (t || ContactUsRoutingModule)(); };
ContactUsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ContactUsRoutingModule });
ContactUsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactUsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9165:
/*!**********************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsComponent": () => (/* binding */ ContactUsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ 2864);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ 4854);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helper */ 7854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-device-detector */ 6618);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 214);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);
/* harmony import */ var ngx_mat_intl_tel_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-mat-intl-tel-input */ 838);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-lazyload-image */ 5600);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/text-field */ 1307);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 3365);























function ContactUsComponent_mat_error_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.getErrorMessage("first_name"));
} }
function ContactUsComponent_mat_error_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getErrorMessage("last_name"));
} }
function ContactUsComponent_mat_error_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.getErrorMessage("email"));
} }
function ContactUsComponent_mat_error_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.getErrorMessage("mobile"));
} }
function ContactUsComponent_mat_error_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.getErrorMessage("company"));
} }
function ContactUsComponent_mat_error_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.getErrorMessage("data"));
} }
function ContactUsComponent_ng_container_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "contact-us.form.privicyPolicy2"), " ");
} }
const _c0 = function () { return ["sa", "ae"]; };
class ContactUsComponent {
    constructor(router, spy, deviceDetectorService, translate, localizeRouterService) {
        this.router = router;
        this.spy = spy;
        this.deviceDetectorService = deviceDetectorService;
        this.translate = translate;
        this.localizeRouterService = localizeRouterService;
        this.faArrow = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faArrowRight;
        this.locales = this.localizeRouterService.parser.locales;
        this.currentUrl = '';
        this.isMobileOrTablet = true;
        this.isLabelRequired = _helper__WEBPACK_IMPORTED_MODULE_2__.isLabelRequired;
        this.autoCompleteOff = () => {
            if (typeof (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)() === 'undefined') {
                return 'off';
            }
            const { userAgent } = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)().navigator;
            return userAgent.includes('Mac') ? 'doNotAutoComplete' : 'off';
            // tslint:disable-next-line: semicolon
        };
        this.formData = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({});
    }
    onResize(event) {
        if (event.target.innerWidth > _constants__WEBPACK_IMPORTED_MODULE_1__.SCREEN_MD) {
            this.isMobileOrTablet = false;
        }
        else {
            this.isMobileOrTablet = true;
        }
    }
    detectDir() {
        this.faArrow =
            this.localizeRouterService.parser.currentLang == 'ar'
                ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faArrowLeft
                : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faArrowRight;
        this.spy.detectChanges();
    }
    ngOnInit() {
        this.formData = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(_constants__WEBPACK_IMPORTED_MODULE_1__.namePattern),
            ]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(_constants__WEBPACK_IMPORTED_MODULE_1__.namePattern),
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(localStorage.getItem('email'), [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(_constants__WEBPACK_IMPORTED_MODULE_1__.emailPattern),
            ]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', []),
            data: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', []),
        });
        this.detectDir();
        this.detectSize();
        this.router.events
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd))
            .subscribe(() => {
            this.detectDir();
        });
    }
    detectSize() {
        this.isMobileOrTablet =
            this.deviceDetectorService.isMobile() ||
                this.deviceDetectorService.isTablet();
    }
    noWhitespaceValidator(control) {
        const isWhitespace = (control.value || '').trim().length === 0;
        const isValid = !isWhitespace;
        return isValid ? null : { whitespace: true };
    }
    showInputError(control) {
        var _a;
        return ((_a = this.formData.get(control)) === null || _a === void 0 ? void 0 : _a.invalid) && this.getErrorMessage(control);
    }
    getErrorMessage(control) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if ((_a = this.formData.get(control)) === null || _a === void 0 ? void 0 : _a.hasError('required')) {
            return this.translate.instant('contact-us.form.thisFieldIsRequired');
        }
        if (control === 'first_name') {
            return ((_b = this.formData.get(control)) === null || _b === void 0 ? void 0 : _b.hasError('pattern')) ||
                ((_c = this.formData.get(control)) === null || _c === void 0 ? void 0 : _c.hasError('whitespace'))
                ? this.translate.instant('contact-us.form.notValidFirstName')
                : null;
        }
        if (control === 'last_name') {
            return ((_d = this.formData.get(control)) === null || _d === void 0 ? void 0 : _d.hasError('pattern')) ||
                ((_e = this.formData.get(control)) === null || _e === void 0 ? void 0 : _e.hasError('whitespace'))
                ? this.translate.instant('contact-us.form.notValidLastName')
                : null;
        }
        if (control === 'email') {
            return ((_f = this.formData.get(control)) === null || _f === void 0 ? void 0 : _f.hasError('email')) ||
                ((_g = this.formData.get(control)) === null || _g === void 0 ? void 0 : _g.hasError('pattern'))
                ? this.translate.instant('contact-us.form.notValidEmail')
                : null;
        }
        if (control === 'mobile') {
            return ((_h = this.formData.get(control)) === null || _h === void 0 ? void 0 : _h.hasError('validatePhoneNumber'))
                ? this.translate.instant('contact-us.form.notValidMobile')
                : null;
        }
        return null;
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_8__.DeviceDetectorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_10__.LocalizeRouterService)); };
ContactUsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], hostBindings: function ContactUsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function ContactUsComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    } }, decls: 94, vars: 79, consts: [[1, "main-banner", 3, "dir"], [1, "msg-part", "order-2", "order-lg-1"], [1, "container"], ["alt", "contact-us-icon", "lazyLoad", "assets/images/contact-us/icon.svg"], [1, "m-0", "p-medium"], [1, "customers"], [1, "customer"], ["lazyLoad", "/assets/images/customers/customer3.jpg", "alt", "General Authority For Awqaf", "aria-hidden", "false"], ["lazyLoad", "/assets/images/customers/customer1.jpg", "alt", "National Cybersecurit Authority ", "aria-hidden", "false"], ["lazyLoad", "/assets/images/customers/customer2.jpg", "alt", "Ministry of National Guard", "aria-hidden", "false"], ["lazyLoad", "/assets/images/customers/customer11.jpg", "alt", "Ad-diriyah Biennale Foundation", "aria-hidden", "false"], ["lazyLoad", "/assets/images/customers/customer10.jpg", "alt", "Ministry of National Guard", "aria-hidden", "false"], ["lazyLoad", "/assets/images/customers/customer5.jpg", "alt", "Saudi Food & Drug Authority", "aria-hidden", "false"], [1, "form", "order-1", "order-lg-2"], [1, "card"], [1, "m-0", "p-larg"], [1, "form", 3, "formGroup"], [1, "form-row", "mt-3", "mb-3"], [1, "form-group", "col-sm-12", "col-lg-6"], ["color", "accent", "appearance", "outline"], ["type", "text", "matInput", "", "formControlName", "first_name", "tabindex", "1", 3, "required", "autocomplete", "placeholder"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "last_name", "tabindex", "1", 3, "required", "autocomplete", "placeholder"], ["type", "email", "matInput", "", "placeholder", "email@example.com", "formControlName", "email", "tabindex", "3", 3, "required", "autocomplete"], ["appearance", "outline", "color", "accent", "floatLabel", "always"], ["formControlName", "mobile", 1, "ngx-floating", 2, "width", "100%", 3, "tabindex", "preferredCountries", "enableSearch", "enablePlaceholder"], [1, "form-group", "col-sm-12"], ["type", "text", "matInput", "", "formControlName", "company", "tabindex", "5", 3, "required", "autocomplete", "placeholder"], ["color", "accent", "appearance", "outline", 1, "text-area"], ["type", "text", "matInput", "", "formControlName", "data", "tabindex", "6", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "5", "cdkAutosizeMaxRows", "5", 3, "required", "autocomplete", "placeholder"], [1, "col-sm-12"], [1, "privicy-container"], [1, "p-small", "m-0", 2, "white-space", "pre-wrap"], [2, "text-decoration", "unset", "color", "#1033b1", 3, "routerLink"], ["mat-flat-button", "", "color", "primary", 1, "btn"], [1, "p-small", 3, "icon"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5)(11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 13)(24, "div", 2)(25, "div", 14)(26, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "form", 16)(33, "div", 17)(34, "div", 18)(35, "mat-form-field", 19)(36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, ContactUsComponent_mat_error_41_Template, 2, 1, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 18)(43, "mat-form-field", 19)(44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, ContactUsComponent_mat_error_49_Template, 2, 1, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 18)(51, "mat-form-field", 19)(52, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, ContactUsComponent_mat_error_56_Template, 2, 1, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 18)(58, "mat-form-field", 24)(59, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "ngx-mat-intl-tel-input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, ContactUsComponent_mat_error_63_Template, 2, 1, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 26)(65, "mat-form-field", 19)(66, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, ContactUsComponent_mat_error_71_Template, 2, 1, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 26)(73, "mat-form-field", 28)(74, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "textarea", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](79, ContactUsComponent_mat_error_79_Template, 2, 1, "mat-error", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 30)(81, "div", 31)(82, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](86, "localize");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](89, ContactUsComponent_ng_container_89_Template, 3, 3, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](92, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "fa-icon", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dir", ctx.localizeRouterService.parser.currentLang == "ar" ? "rtl" : "ltr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 42, "contact-us.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 44, "contact-us.sub-title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 46, "contact-us.contact-msg"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 48, "contact-us.contact-sub-msg"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](38, 50, "contact-us.form.firstName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](40, 52, "contact-us.form.firstName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("required", ctx.isLabelRequired("first_name", ctx.formData))("autocomplete", ctx.autoCompleteOff());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showInputError("first_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](46, 54, "contact-us.form.lastName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](48, 56, "contact-us.form.lastName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("required", ctx.isLabelRequired("last_name", ctx.formData))("autocomplete", ctx.autoCompleteOff());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showInputError("last_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](54, 58, "contact-us.form.email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("required", ctx.isLabelRequired("email", ctx.formData))("autocomplete", ctx.autoCompleteOff());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showInputError("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](61, 60, "contact-us.form.mobile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tabindex", 4)("preferredCountries", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](78, _c0))("enableSearch", false)("enablePlaceholder", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showInputError("mobile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](68, 62, "contact-us.form.company"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](70, 64, "contact-us.form.company"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("required", ctx.isLabelRequired("company", ctx.formData))("autocomplete", ctx.autoCompleteOff());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showInputError("company"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](76, 66, "contact-us.form.help"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](78, 68, "contact-us.form.help"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("required", ctx.isLabelRequired("data", ctx.formData))("autocomplete", ctx.autoCompleteOff());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showInputError("data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](84, 70, "contact-us.form.privicy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](86, 72, "/privacy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](88, 74, "contact-us.form.privicyPolicy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.localizeRouterService.parser.currentLang == "ar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](92, 76, "contact-us.form.submit"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faArrow);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Dir, ngx_mat_intl_tel_input__WEBPACK_IMPORTED_MODULE_13__.NgxMatIntlTelInputComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_14__.LazyLoadImageDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__.CdkTextareaAutosize, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_10__.LocalizeRouterPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["[_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #e9effe;\n  background-image: url(\"/assets/images/main-banner/background.svg\");\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  flex-direction: row;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .msg-part[_ngcontent-%COMP%] {\n  background-color: white;\n  flex-basis: 45% !important;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding-top: 76px;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .msg-part[_ngcontent-%COMP%] {\n    flex-basis: 100% !important;\n    padding-top: 0;\n  }\n}\n[_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .msg-part[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 1199px) {\n  [_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .msg-part[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    max-width: 500px;\n  }\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .msg-part[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n}\n[_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .msg-part[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .msg-part[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n[_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .msg-part[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .customers[_ngcontent-%COMP%] {\n  margin-top: 68px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n[_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .msg-part[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .customers[_ngcontent-%COMP%]   .customer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 60px;\n  width: 33.33%;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .msg-part[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .customers[_ngcontent-%COMP%]   .customer[_ngcontent-%COMP%] {\n    flex: 1;\n    width: unset;\n  }\n}\n[_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .msg-part[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .customers[_ngcontent-%COMP%]   .customer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0;\n  transform: scale(1.5);\n  -webkit-transform: scale(1.5);\n  height: 40px;\n  width: auto;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .msg-part[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .customers[_ngcontent-%COMP%]   .customer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    transform: unset;\n    -webkit-transform: unset;\n    height: 75px;\n  }\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .msg-part[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .customers[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n    justify-content: center;\n    align-items: flex-start;\n  }\n}\n[_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  flex-basis: 55% !important;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n    flex-basis: 100% !important;\n    background: #ffffff;\n  }\n}\n[_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 40px;\n  background: #ffffff;\n  \n  margin: 76px 116px;\n  box-shadow: 0px 7px 30px rgba(16, 51, 177, 0.1);\n  border-radius: 20px;\n}\n[_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p.p-larg[_ngcontent-%COMP%] {\n  color: #585d69;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin: 0;\n    border-radius: 0px;\n    box-shadow: unset;\n    padding: 0;\n    border: unset;\n    margin-top: 25px;\n  }\n  [_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 24px;\n    line-height: 32px;\n  }\n  [_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 17px;\n    line-height: 32px;\n  }\n  [_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .privicy-container[_ngcontent-%COMP%] {\n  gap: 10px;\n  grid-gap: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .privicy-container[_ngcontent-%COMP%]   .p-small[_ngcontent-%COMP%] {\n    font-weight: 400 !important;\n    font-size: 15px !important;\n    line-height: 24px !important;\n  }\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .privicy-container[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 24px;\n    grid-gap: 24px;\n  }\n}\n[_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .privicy-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 8px !important;\n  height: 48px !important;\n  width: 135px;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .privicy-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (hover: hover) and (pointer: fine) {\n  [_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .privicy-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background-color: #4c6ee6 !important;\n  }\n}\n[_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .privicy-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     .mat-button-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.2s ease-in;\n  gap: 8px;\n  grid-gap: 8px;\n}\n@media (hover: hover) and (pointer: fine) {\n  [_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .privicy-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     .mat-button-wrapper:hover {\n    gap: 12px;\n    grid-gap: 12px;\n  }\n}\n[_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #e7e8ea !important;\n}\n[_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]     .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #1033b1 !important;\n}\n[_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]     .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: #af0f32 !important;\n  opacity: 0.8 !important;\n}\n[_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]     .mat-input-element {\n  caret-color: #af0f32 !important;\n}\n[_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]     .mat-form-field-invalid .mat-input-element, [_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  caret-color: #af0f32 !important;\n}\n[_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]     .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.6) !important;\n}\n[_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: #af0f32 !important;\n}\n[_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  min-height: 80px !important;\n  max-height: 164px !important;\n}\n[_nghost-%COMP%]   .main-banner[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]     .mat-form-field-flex {\n  height: 190px !important;\n}\n[_nghost-%COMP%]   .ngx-floating[_ngcontent-%COMP%] {\n  outline: unset !important;\n}\n[_nghost-%COMP%]     .ngx-mat-tel-input-container {\n  outline: unset !important;\n}\n[_nghost-%COMP%]     .ngx-mat-tel-input-container input {\n  padding: 0 7px 0 105px !important;\n}\n[_nghost-%COMP%]     .ngx-mat-tel-input-container:focus-visible {\n  outline: unset !important;\n}\n[_nghost-%COMP%]     .ngx-mat-tel-input-container:focus {\n  outline: unset !important;\n}\n[_nghost-%COMP%]     .ngx-mat-tel-input-container:focus-within {\n  outline: unset !important;\n}\n[_nghost-%COMP%]     .ngx-mat-tel-input-container .country-selector {\n  display: flex !important;\n  align-items: center !important;\n  width: 86px !important;\n  background-position: right center;\n}\n[_nghost-%COMP%]     .ngx-mat-tel-input-container .country-selector:hover {\n  opacity: 1 !important;\n}\n[dir=rtl]   [_nghost-%COMP%]     .ngx-mat-tel-input-container .country-selector {\n  background-position: left center;\n}\n[_nghost-%COMP%]     .ngx-mat-tel-input-container .mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay, [_nghost-%COMP%]     .ngx-mat-tel-input-container .mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay .mat-stroked-button:active:not(.mat-button-disabled) .mat-button-focus-overlay {\n  opacity: 0 !important;\n}\n[_nghost-%COMP%]     .mat-form-field input.amount-input.mat-input-element {\n  text-align: left !important;\n  direction: ltr !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFx0aGVtZVxcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksV0FBQTtFQUNBLHlCQ0ZlO0VER2Ysa0VBQUE7RUFDQSxzQkFBQSxFQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUZSO0FBR1E7RUFYSjtJQVlRLHNCQUFBO0VBQVY7QUFDRjtBQUNRO0VBQ0ksdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFDWjtBQUFZO0VBUEo7SUFRUSwyQkFBQTtJQUNBLGNBQUE7RUFHZDtBQUNGO0FBRlk7RUFnQkksYUFBQTtFQUNBLHNCQUFBO0FBWGhCO0FBTGdCO0VBREo7SUFFUSxnQkFBQTtFQVFsQjtBQUNGO0FBUGdCO0VBSko7SUFLUSxnQkFBQTtFQVVsQjtBQUNGO0FBVGdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVdwQjtBQVRnQjtFQUNJLGtCQUFBO0FBV3BCO0FBTmdCO0VBZ0NJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBdkJwQjtBQVpvQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBY3hCO0FBYndCO0VBTko7SUFPUSxPQUFBO0lBQ0EsWUFBQTtFQWdCMUI7QUFDRjtBQWR3QjtFQUNJLFNBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFnQjVCO0FBZjRCO0VBTko7SUFPUSxnQkFBQTtJQUNBLHdCQUFBO0lBRUEsWUFBQTtFQWlCOUI7QUFDRjtBQWJvQjtFQTNCSjtJQTRCUSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsdUJBQUE7RUFnQnRCO0FBQ0Y7QUFQUTtFQUNJLDBCQUFBO0FBU1o7QUFSWTtFQUZKO0lBR1EsMkJBQUE7SUFDQSxtQkFBQTtFQVdkO0FBQ0Y7QUFWWTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQVloQjtBQVhnQjtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0FBYXBCO0FBWHdCO0VBQ0ksY0FBQTtBQWE1QjtBQVZvQjtFQWZKO0lBZ0JRLFNBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtFQWF0QjtFQVpzQjtJQUNJLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VBYzFCO0VBWnNCO0lBQ0ksZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUFjMUI7RUFac0I7SUFDSSxXQUFBO0VBYzFCO0FBQ0Y7QUFWWTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFXaEI7QUFUb0I7RUFESjtJQUVRLDJCQUFBO0lBQ0EsMEJBQUE7SUFDQSw0QkFBQTtFQVl0QjtBQUNGO0FBVmdCO0VBZEo7SUFlUSx1QkFBQTtJQUNBLHNCQUFBO0lBQ0EsU0FBQTtJQUNBLGNBQUE7RUFhbEI7QUFDRjtBQVpnQjtFQUNJLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBY3BCO0FBYm9CO0VBSko7SUFLUSxXQUFBO0VBZ0J0QjtBQUNGO0FBZm9CO0VBQ0k7SUFDSSxvQ0FBQTtFQWlCMUI7QUFDRjtBQWZvQjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBQWlCeEI7QUFmd0I7RUFDSTtJQUNJLFNBQUE7SUFDQSxjQUFBO0VBaUI5QjtBQUNGO0FBVFE7RUFDSSx5QkFBQTtBQVdaO0FBTlE7RUFDSSx5QkFBQTtBQVFaO0FBSlE7RUFHSSx5QkFBQTtFQUNBLHVCQUFBO0FBSVo7QUFBUTtFQUNJLCtCQUFBO0FBRVo7QUFFUTs7RUFFSSwrQkFBQTtBQUFaO0FBSVE7RUFDSSxvQ0FBQTtBQUZaO0FBT1E7RUFDSSx5QkFBQTtBQUxaO0FBUVk7RUFDSSwyQkFBQTtFQUNBLDRCQUFBO0FBTmhCO0FBUVk7RUFDSSx3QkFBQTtBQU5oQjtBQVVJO0VBQ0kseUJBQUE7QUFSUjtBQVVJO0VBQ0kseUJBQUE7QUFSUjtBQVNRO0VBQ0ksaUNBQUE7QUFQWjtBQVNRO0VBQ0kseUJBQUE7QUFQWjtBQVNRO0VBQ0kseUJBQUE7QUFQWjtBQVNRO0VBQ0kseUJBQUE7QUFQWjtBQVNRO0VBQ0ksd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBSUEsaUNBQUE7QUFWWjtBQU9ZO0VBQ0kscUJBQUE7QUFMaEI7QUFRWTtFQUNJLGdDQUFBO0FBTmhCO0FBU1E7O0VBS0kscUJBQUE7QUFWWjtBQWVZO0VBQ0ksMkJBQUE7RUFDQSx5QkFBQTtBQWJoQiIsImZpbGUiOiJjb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcIkBhbmd1bGFyL21hdGVyaWFsXCIgYXMgbWF0O1xyXG5AaW1wb3J0IFwic3JjL3RoZW1lL192YXJpYWJsZXMuc2Nzc1wiO1xyXG46aG9zdCB7XHJcbiAgICAubWFpbi1iYW5uZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5LWJsdWUyMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9tYWluLWJhbm5lci9iYWNrZ3JvdW5kLnN2Z1wiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiA8LS0tLS0tICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubXNnLXBhcnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogNDUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDc2cHg7XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLWxnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgLmN1c3RvbWVycyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmN1c3RvbWVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdW5zZXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtIHtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogNTUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIFByb2R1Y3QgQ2FyZCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNzZweCAxMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggN3B4IDMwcHggcmdiYSgxNiwgNTEsIDE3NywgMC4xKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLnAtbGFyZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU4NWQ2OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJpdmljeS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAucC1zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeS1ibHVlNzAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA6Om5nLWRlZXAgLm1hdC1idXR0b24td3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogOHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2lucHV0IG91dGxpbmUgY29sb3JcclxuICAgICAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZTdlOGVhICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC8vIG9wYWNpdHk6IDEhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9tYXQtaW5wdXQgZm9jdXNlZCBjb2xvclxyXG4gICAgICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICAgICAgICAgICAgY29sb3I6ICMxMDMzYjEgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG1hdC1pbnB1dCBlcnJvciBvdXRsaW5lIGNvbG9yXHJcbiAgICAgICAgOjpuZy1kZWVwXHJcbiAgICAgICAgICAgIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkXHJcbiAgICAgICAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICAgICAgICAgICAgY29sb3I6ICNhZjBmMzIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC44ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBtYXQtaW5wdXQgY2FyZW50IGNvbG9yXHJcbiAgICAgICAgOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgICAgICAgICAgIGNhcmV0LWNvbG9yOiAjYWYwZjMyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBtYXQtaW5wdXQgZXJyb3IgY2FyZW50IGNvbG9yXHJcbiAgICAgICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCxcclxuICAgICAgICAubWF0LXdhcm4gLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICAgICAgICAgICAgY2FyZXQtY29sb3I6ICNhZjBmMzIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG1hdC1sYWJlbCBub3JtYWwgc3RhdGUgc3R5bGVcclxuICAgICAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAvLyBjb2xvcjogJG1haW5Db2xvciFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBtYXQtbGFiZWwgZXJyb3Igc3R5bGVcclxuICAgICAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6ICNhZjBmMzIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtYXJlYSB7XHJcbiAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE2NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTkwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uZ3gtZmxvYXRpbmcge1xyXG4gICAgICAgIG91dGxpbmU6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICA6Om5nLWRlZXAgLm5neC1tYXQtdGVsLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgb3V0bGluZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgN3B4IDAgMTA1cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpmb2N1cy12aXNpYmxlIHtcclxuICAgICAgICAgICAgb3V0bGluZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Zm9jdXMtd2l0aGluIHtcclxuICAgICAgICAgICAgb3V0bGluZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvdW50cnktc2VsZWN0b3Ige1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDg2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xyXG4gICAgICAgICAgICBbZGlyPXJ0bF0gJiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LWJ1dHRvbjpob3Zlcjpub3QoLm1hdC1idXR0b24tZGlzYWJsZWQpIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksXHJcbiAgICAgICAgLm1hdC1zdHJva2VkLWJ1dHRvbjpob3Zlcjpub3QoLm1hdC1idXR0b24tZGlzYWJsZWQpXHJcbiAgICAgICAgICAgIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXlcclxuICAgICAgICAgICAgLm1hdC1zdHJva2VkLWJ1dHRvbjphY3RpdmU6bm90KC5tYXQtYnV0dG9uLWRpc2FibGVkKVxyXG4gICAgICAgICAgICAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgJi5hbW91bnQtaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBsdHIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIkY29sb3ItcHJpbWFyeS1ibHVlMTIwOiAjMTUyNjYzO1xyXG4kY29sb3ItcHJpbWFyeS1ibHVlMTAwOiAjMTAzM2IxO1xyXG4kY29sb3ItcHJpbWFyeS1ibHVlNzA6ICM0YzZlZTY7XHJcbiRjb2xvci1wcmltYXJ5LWJsdWUyMDogI2U5ZWZmZTtcclxuJGNvbG9yLXByaW1hcnktYmx1ZTEwOiAjZjNmNmZmO1xyXG5cclxuJGNvbG9yLWRhcmstMTAwOiAjMTExODI4O1xyXG4kY29sb3ItZGFyay03MDogIzU4NWQ2OTtcclxuJGNvbG9yLWRhcmstNTA6ICM4ODhiOTM7XHJcbiRjb2xvci1kYXJrLTMwOiAjYjhiYWJmO1xyXG4kY29sb3ItZGFyay0xMDogI2U3ZThlYTtcclxuJGNvbG9yLWRhcmstNTogI2ZhZmJmZjtcclxuJGNvbG9yLWRhcmstMDogI2ZmZmZmZjtcclxuXHJcbiRjb2xvci1zeXN0ZW0tc3VjY2VzczogIzQwOTMyOTtcclxuJGNvbG9yLXN5c3RlbS13YXJuaW5nOiAjZjNjZjQ4O1xyXG4kY29sb3Itc3lzdGVtLWRhbmdlcjogI2FmMGYzMjtcclxuXHJcbiRjb2xvci1lbGVtZW50cy1tYW5keTogI2U0NDg3MDtcclxuJGNvbG9yLWVsZW1lbnRzLWFxdWFtYXJpbmU6ICM2ZWRmY2Y7XHJcbiRjb2xvci1lbGVtZW50cy1QdXJwbGU6ICM1NjIxY2I7XHJcbiRjb2xvci1lbGVtZW50cy10YW5nZXJpbmU6ICNlYzhlNjU7XHJcbiRjb2xvci1lbGVtZW50cy1Eb2RnZXI6ICMzYThhZjc7XHJcbiRjb2xvci1lbGVtZW50cy1wYXN0ZWw6ICM3MGQ0OTU7XHJcbiRjb2xvci1lbGVtZW50cy1lbmVyZ3k6ICNmN2Q3NGU7XHJcblxyXG4kYm9keS1mb250LWZhbWlseTogXCJSZWFkZXggUHJvXCIsIHNhbnMtc2VyaWY7XHJcblxyXG4kZGlzcGxheS1odWdlOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgICAkZm9udC1zaXplOiA2NHB4LFxyXG4gICAgJGxpbmUtaGVpZ2h0OiA4OHB4LFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcbiRkaXNwbGF5LWxhcmc6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDQwMCxcclxuICAgICRmb250LXNpemU6IDU2cHgsXHJcbiAgICAkbGluZS1oZWlnaHQ6IDcycHgsXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuJGRpc3BsYXktbWVkaXVtOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgICAkZm9udC1zaXplOiA0OHB4LFxyXG4gICAgJGxpbmUtaGVpZ2h0OiA1NnB4LFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcbiRkaXNwbGF5LXNtYWxsOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgICAkZm9udC1zaXplOiAzNnB4LFxyXG4gICAgJGxpbmUtaGVpZ2h0OiA0OHB4LFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcbiRkaXNwbGF5LXhzbWFsbDogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4gICAgJGZvbnQtZmFtaWx5OiAkYm9keS1mb250LWZhbWlseSxcclxuICAgICRmb250LXdlaWdodDogNDAwLFxyXG4gICAgJGZvbnQtc2l6ZTogMjRweCxcclxuICAgICRsaW5lLWhlaWdodDogMzJweCxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG5cclxuJGJvZHktbGFyZzogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4gICAgJGZvbnQtZmFtaWx5OiAkYm9keS1mb250LWZhbWlseSxcclxuICAgICRmb250LXdlaWdodDogNDAwLFxyXG4gICAgJGZvbnQtc2l6ZTogMjBweCxcclxuICAgICRsaW5lLWhlaWdodDogMzJweCxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG4kYm9keS1tZWRpdW06IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDQwMCxcclxuICAgICRmb250LXNpemU6IDE3cHgsXHJcbiAgICAkbGluZS1oZWlnaHQ6IDMycHgsXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuJGJvZHktc21hbGw6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDQwMCxcclxuICAgICRmb250LXNpemU6IDE1cHgsXHJcbiAgICAkbGluZS1oZWlnaHQ6IDI0cHgsXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuJGJvZHkteHNtYWxsOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgICAkZm9udC1zaXplOiAxM3B4LFxyXG4gICAgJGxpbmUtaGVpZ2h0OiAyMnB4LFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcbiRidXR0b246IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDYwMCxcclxuICAgICRmb250LXNpemU6IDE3cHgsXHJcbiAgICAkbGluZS1oZWlnaHQ6IDMycHgsXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuJGlucHV0OiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA2MDAsXHJcbiAgICAkZm9udC1zaXplOiAxZW0sXHJcbiAgICAkbGluZS1oZWlnaHQ6IDFlbSxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG4vLyBCcmVhayBQb2ludHNcclxuJHNjcmVlbi14czogNTc1cHg7XHJcbiRzY3JlZW4tc206IDc2N3B4O1xyXG4kc2NyZWVuLW1kOiA5OTFweDtcclxuJHNjcmVlbi1sZzogMTE5OXB4O1xyXG5cclxuLy8gRGVmYXVsdCBzaXplXHJcbiRpbnB1dC1oZWlnaHQ6IDU2cHg7XHJcbiRpbnB1dC1mb250LXNpemU6IDE3cHg7XHJcbiRpbnB1dC1mb250LXdlaWdodDogNDAwO1xyXG4kaW5wdXQtbGFiZWwtZm9udC1zaXplOiAxM3B4O1xyXG4kaW5wdXQtbGFiZWwtbGluZS1oZWlnaHQ6IDIycHg7XHJcbi8vIHNtYWxsXHJcbiRpbnB1dC1oZWlnaHQtc206IDM1cHg7XHJcbiRpbnB1dC1mb250LXNpemUtc206IDEzcHg7XHJcbiRpbnB1dC1mb250LXdlaWdodC1zbTogNDAwO1xyXG4kaW5wdXQtbGFiZWwtZm9udC1zaXplLXNtOiAkaW5wdXQtZm9udC1zaXplLXNtO1xyXG4kaW5wdXQtbGFiZWwtbGluZS1oZWlnaHQtc206IDEuMztcclxuLy8geHRyYSBTbWFsbFxyXG4kaW5wdXQtaGVpZ2h0LXhzOiAzMHB4O1xyXG4kaW5wdXQtZm9udC1zaXplLXhzOiAxMnB4O1xyXG4kaW5wdXQtZm9udC13ZWlnaHQteHM6IDQwMDtcclxuJGlucHV0LWxhYmVsLWZvbnQtc2l6ZS14czogJGlucHV0LWZvbnQtc2l6ZS14cztcclxuJGlucHV0LWxhYmVsLWxpbmUtaGVpZ2h0LXhzOiAxLjE7XHJcbiRjb2xvci1ibGFjazogIzEzMTQxNDtcclxuJGxhYmVsLXJlcXVpcmVkLWNvbG9yOiAkY29sb3ItYmxhY2s7XHJcblxyXG4vLyBGb3Jtc1xyXG4kZm9ybS1ncmlkLWd1dHRlci13aWR0aDogMTBweCAhZGVmYXVsdDtcclxuJGZvcm0tZ3JvdXAtbWFyZ2luLWJvdHRvbTogMXJlbSAhZGVmYXVsdDtcclxuJGxhYmVsLXJlcXVpcmVkLWNvbG9yOiAkY29sb3ItYmxhY2s7XHJcbiJdfQ== */"] });


/***/ }),

/***/ 4754:
/*!*******************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsModule": () => (/* binding */ ContactUsModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 214);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ 5600);
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us-routing.module */ 5775);
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.component */ 9165);
/* harmony import */ var ngx_mat_intl_tel_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mat-intl-tel-input */ 838);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);












class ContactUsModule {
}
ContactUsModule.ɵfac = function ContactUsModule_Factory(t) { return new (t || ContactUsModule)(); };
ContactUsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ContactUsModule });
ContactUsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
        ngx_mat_intl_tel_input__WEBPACK_IMPORTED_MODULE_5__.NgxMatIntlTelInputComponent,
        _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactUsRoutingModule,
        _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__.LocalizeRouterModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__.LazyLoadImageModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ContactUsModule, { declarations: [_contact_us_component__WEBPACK_IMPORTED_MODULE_1__.ContactUsComponent], imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
        ngx_mat_intl_tel_input__WEBPACK_IMPORTED_MODULE_5__.NgxMatIntlTelInputComponent,
        _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactUsRoutingModule,
        _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__.LocalizeRouterModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__.LazyLoadImageModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 9975:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/divider.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatDivider": () => (/* binding */ MatDivider),
/* harmony export */   "MatDividerModule": () => (/* binding */ MatDividerModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ 6484);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 8133);




/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

class MatDivider {
  constructor() {
    this._vertical = false;
    this._inset = false;
  }
  /** Whether the divider is vertically aligned. */


  get vertical() {
    return this._vertical;
  }

  set vertical(value) {
    this._vertical = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(value);
  }
  /** Whether the divider is an inset divider. */


  get inset() {
    return this._inset;
  }

  set inset(value) {
    this._inset = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(value);
  }

}

MatDivider.ɵfac = function MatDivider_Factory(t) {
  return new (t || MatDivider)();
};

MatDivider.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MatDivider,
  selectors: [["mat-divider"]],
  hostAttrs: ["role", "separator", 1, "mat-divider"],
  hostVars: 7,
  hostBindings: function MatDivider_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-divider-vertical", ctx.vertical)("mat-divider-horizontal", !ctx.vertical)("mat-divider-inset", ctx.inset);
    }
  },
  inputs: {
    vertical: "vertical",
    inset: "inset"
  },
  decls: 0,
  vars: 0,
  template: function MatDivider_Template(rf, ctx) {},
  styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDivider, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'mat-divider',
      host: {
        'role': 'separator',
        '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
        '[class.mat-divider-vertical]': 'vertical',
        '[class.mat-divider-horizontal]': '!vertical',
        '[class.mat-divider-inset]': 'inset',
        'class': 'mat-divider'
      },
      template: '',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"]
    }]
  }], null, {
    vertical: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    inset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatDividerModule {}

MatDividerModule.ɵfac = function MatDividerModule_Factory(t) {
  return new (t || MatDividerModule)();
};

MatDividerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: MatDividerModule
});
MatDividerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDividerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule],
      exports: [MatDivider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule],
      declarations: [MatDivider]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 9282:
/*!*********************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/AsYouType.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AsYouType)
/* harmony export */ });
/* harmony import */ var _metadata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata.js */ 7211);
/* harmony import */ var _PhoneNumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PhoneNumber.js */ 3935);
/* harmony import */ var _AsYouTypeState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsYouTypeState.js */ 6520);
/* harmony import */ var _AsYouTypeFormatter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AsYouTypeFormatter.js */ 3114);
/* harmony import */ var _AsYouTypeFormatter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AsYouTypeFormatter.js */ 9087);
/* harmony import */ var _AsYouTypeParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AsYouTypeParser.js */ 5299);
/* harmony import */ var _helpers_getCountryByCallingCode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/getCountryByCallingCode.js */ 6269);
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}







var USE_NON_GEOGRAPHIC_COUNTRY_CODE = false;

var AsYouType = /*#__PURE__*/function () {
  /**
   * @param {(string|object)?} [optionsOrDefaultCountry] - The default country used for parsing non-international phone numbers. Can also be an `options` object.
   * @param {Object} metadata
   */
  function AsYouType(optionsOrDefaultCountry, metadata) {
    _classCallCheck(this, AsYouType);

    this.metadata = new _metadata_js__WEBPACK_IMPORTED_MODULE_0__["default"](metadata);

    var _this$getCountryAndCa = this.getCountryAndCallingCode(optionsOrDefaultCountry),
        _this$getCountryAndCa2 = _slicedToArray(_this$getCountryAndCa, 2),
        defaultCountry = _this$getCountryAndCa2[0],
        defaultCallingCode = _this$getCountryAndCa2[1];

    this.defaultCountry = defaultCountry;
    this.defaultCallingCode = defaultCallingCode;
    this.reset();
  }

  _createClass(AsYouType, [{
    key: "getCountryAndCallingCode",
    value: function getCountryAndCallingCode(optionsOrDefaultCountry) {
      // Set `defaultCountry` and `defaultCallingCode` options.
      var defaultCountry;
      var defaultCallingCode; // Turns out `null` also has type "object". Weird.

      if (optionsOrDefaultCountry) {
        if (_typeof(optionsOrDefaultCountry) === 'object') {
          defaultCountry = optionsOrDefaultCountry.defaultCountry;
          defaultCallingCode = optionsOrDefaultCountry.defaultCallingCode;
        } else {
          defaultCountry = optionsOrDefaultCountry;
        }
      }

      if (defaultCountry && !this.metadata.hasCountry(defaultCountry)) {
        defaultCountry = undefined;
      }

      if (defaultCallingCode) {
        /* istanbul ignore if */
        if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
          if (this.metadata.isNonGeographicCallingCode(defaultCallingCode)) {
            defaultCountry = '001';
          }
        }
      }

      return [defaultCountry, defaultCallingCode];
    }
    /**
     * Inputs "next" phone number characters.
     * @param  {string} text
     * @return {string} Formatted phone number characters that have been input so far.
     */

  }, {
    key: "input",
    value: function input(text) {
      var _this$parser$input = this.parser.input(text, this.state),
          digits = _this$parser$input.digits,
          justLeadingPlus = _this$parser$input.justLeadingPlus;

      if (justLeadingPlus) {
        this.formattedOutput = '+';
      } else if (digits) {
        this.determineTheCountryIfNeeded(); // Match the available formats by the currently available leading digits.

        if (this.state.nationalSignificantNumber) {
          this.formatter.narrowDownMatchingFormats(this.state);
        }

        var formattedNationalNumber;

        if (this.metadata.hasSelectedNumberingPlan()) {
          formattedNationalNumber = this.formatter.format(digits, this.state);
        }

        if (formattedNationalNumber === undefined) {
          // See if another national (significant) number could be re-extracted.
          if (this.parser.reExtractNationalSignificantNumber(this.state)) {
            this.determineTheCountryIfNeeded(); // If it could, then re-try formatting the new national (significant) number.

            var nationalDigits = this.state.getNationalDigits();

            if (nationalDigits) {
              formattedNationalNumber = this.formatter.format(nationalDigits, this.state);
            }
          }
        }

        this.formattedOutput = formattedNationalNumber ? this.getFullNumber(formattedNationalNumber) : this.getNonFormattedNumber();
      }

      return this.formattedOutput;
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this = this;

      this.state = new _AsYouTypeState_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        onCountryChange: function onCountryChange(country) {
          // Before version `1.6.0`, the official `AsYouType` formatter API
          // included the `.country` property of an `AsYouType` instance.
          // Since that property (along with the others) have been moved to
          // `this.state`, `this.country` property is emulated for compatibility
          // with the old versions.
          _this.country = country;
        },
        onCallingCodeChange: function onCallingCodeChange(callingCode, country) {
          _this.metadata.selectNumberingPlan(country, callingCode);

          _this.formatter.reset(_this.metadata.numberingPlan, _this.state);

          _this.parser.reset(_this.metadata.numberingPlan);
        }
      });
      this.formatter = new _AsYouTypeFormatter_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        state: this.state,
        metadata: this.metadata
      });
      this.parser = new _AsYouTypeParser_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
        defaultCountry: this.defaultCountry,
        defaultCallingCode: this.defaultCallingCode,
        metadata: this.metadata,
        state: this.state,
        onNationalSignificantNumberChange: function onNationalSignificantNumberChange() {
          _this.determineTheCountryIfNeeded();

          _this.formatter.reset(_this.metadata.numberingPlan, _this.state);
        }
      });
      this.state.reset(this.defaultCountry, this.defaultCallingCode);
      this.formattedOutput = '';
      return this;
    }
    /**
     * Returns `true` if the phone number is being input in international format.
     * In other words, returns `true` if and only if the parsed phone number starts with a `"+"`.
     * @return {boolean}
     */

  }, {
    key: "isInternational",
    value: function isInternational() {
      return this.state.international;
    }
    /**
     * Returns the "calling code" part of the phone number when it's being input
     * in an international format.
     * If no valid calling code has been entered so far, returns `undefined`.
     * @return {string} [callingCode]
     */

  }, {
    key: "getCallingCode",
    value: function getCallingCode() {
      // If the number is being input in national format and some "default calling code"
      // has been passed to `AsYouType` constructor, then `this.state.callingCode`
      // is equal to that "default calling code".
      //
      // If the number is being input in national format and no "default calling code"
      // has been passed to `AsYouType` constructor, then returns `undefined`,
      // even if a "default country" has been passed to `AsYouType` constructor.
      //
      if (this.isInternational()) {
        return this.state.callingCode;
      }
    } // A legacy alias.

  }, {
    key: "getCountryCallingCode",
    value: function getCountryCallingCode() {
      return this.getCallingCode();
    }
    /**
     * Returns a two-letter country code of the phone number.
     * Returns `undefined` for "non-geographic" phone numbering plans.
     * Returns `undefined` if no phone number has been input yet.
     * @return {string} [country]
     */

  }, {
    key: "getCountry",
    value: function getCountry() {
      var digits = this.state.digits; // Return `undefined` if no digits have been input yet.

      if (digits) {
        return this._getCountry();
      }
    }
    /**
     * Returns a two-letter country code of the phone number.
     * Returns `undefined` for "non-geographic" phone numbering plans.
     * @return {string} [country]
     */

  }, {
    key: "_getCountry",
    value: function _getCountry() {
      var country = this.state.country;
      /* istanbul ignore if */

      if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
        // `AsYouType.getCountry()` returns `undefined`
        // for "non-geographic" phone numbering plans.
        if (country === '001') {
          return;
        }
      }

      return country;
    }
  }, {
    key: "determineTheCountryIfNeeded",
    value: function determineTheCountryIfNeeded() {
      // Suppose a user enters a phone number in international format,
      // and there're several countries corresponding to that country calling code,
      // and a country has been derived from the number, and then
      // a user enters one more digit and the number is no longer
      // valid for the derived country, so the country should be re-derived
      // on every new digit in those cases.
      //
      // If the phone number is being input in national format,
      // then it could be a case when `defaultCountry` wasn't specified
      // when creating `AsYouType` instance, and just `defaultCallingCode` was specified,
      // and that "calling code" could correspond to a "non-geographic entity",
      // or there could be several countries corresponding to that country calling code.
      // In those cases, `this.country` is `undefined` and should be derived
      // from the number. Again, if country calling code is ambiguous, then
      // `this.country` should be re-derived with each new digit.
      //
      if (!this.state.country || this.isCountryCallingCodeAmbiguous()) {
        this.determineTheCountry();
      }
    } // Prepends `+CountryCode ` in case of an international phone number

  }, {
    key: "getFullNumber",
    value: function getFullNumber(formattedNationalNumber) {
      var _this2 = this;

      if (this.isInternational()) {
        var prefix = function prefix(text) {
          return _this2.formatter.getInternationalPrefixBeforeCountryCallingCode(_this2.state, {
            spacing: text ? true : false
          }) + text;
        };

        var callingCode = this.state.callingCode;

        if (!callingCode) {
          return prefix("".concat(this.state.getDigitsWithoutInternationalPrefix()));
        }

        if (!formattedNationalNumber) {
          return prefix(callingCode);
        }

        return prefix("".concat(callingCode, " ").concat(formattedNationalNumber));
      }

      return formattedNationalNumber;
    }
  }, {
    key: "getNonFormattedNationalNumberWithPrefix",
    value: function getNonFormattedNationalNumberWithPrefix() {
      var _this$state = this.state,
          nationalSignificantNumber = _this$state.nationalSignificantNumber,
          complexPrefixBeforeNationalSignificantNumber = _this$state.complexPrefixBeforeNationalSignificantNumber,
          nationalPrefix = _this$state.nationalPrefix;
      var number = nationalSignificantNumber;
      var prefix = complexPrefixBeforeNationalSignificantNumber || nationalPrefix;

      if (prefix) {
        number = prefix + number;
      }

      return number;
    }
  }, {
    key: "getNonFormattedNumber",
    value: function getNonFormattedNumber() {
      var nationalSignificantNumberMatchesInput = this.state.nationalSignificantNumberMatchesInput;
      return this.getFullNumber(nationalSignificantNumberMatchesInput ? this.getNonFormattedNationalNumberWithPrefix() : this.state.getNationalDigits());
    }
  }, {
    key: "getNonFormattedTemplate",
    value: function getNonFormattedTemplate() {
      var number = this.getNonFormattedNumber();

      if (number) {
        return number.replace(/[\+\d]/g, _AsYouTypeFormatter_js__WEBPACK_IMPORTED_MODULE_4__.DIGIT_PLACEHOLDER);
      }
    }
  }, {
    key: "isCountryCallingCodeAmbiguous",
    value: function isCountryCallingCodeAmbiguous() {
      var callingCode = this.state.callingCode;
      var countryCodes = this.metadata.getCountryCodesForCallingCode(callingCode);
      return countryCodes && countryCodes.length > 1;
    } // Determines the country of the phone number
    // entered so far based on the country phone code
    // and the national phone number.

  }, {
    key: "determineTheCountry",
    value: function determineTheCountry() {
      this.state.setCountry((0,_helpers_getCountryByCallingCode_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this.isInternational() ? this.state.callingCode : this.defaultCallingCode, this.state.nationalSignificantNumber, this.metadata));
    }
    /**
     * Returns a E.164 phone number value for the user's input.
     *
     * For example, for country `"US"` and input `"(222) 333-4444"`
     * it will return `"+12223334444"`.
     *
     * For international phone number input, it will also auto-correct
     * some minor errors such as using a national prefix when writing
     * an international phone number. For example, if the user inputs
     * `"+44 0 7400 000000"` then it will return an auto-corrected
     * `"+447400000000"` phone number value.
     *
     * Will return `undefined` if no digits have been input,
     * or when inputting a phone number in national format and no
     * default country or default "country calling code" have been set.
     *
     * @return {string} [value]
     */

  }, {
    key: "getNumberValue",
    value: function getNumberValue() {
      var _this$state2 = this.state,
          digits = _this$state2.digits,
          callingCode = _this$state2.callingCode,
          country = _this$state2.country,
          nationalSignificantNumber = _this$state2.nationalSignificantNumber; // Will return `undefined` if no digits have been input.

      if (!digits) {
        return;
      }

      if (this.isInternational()) {
        if (callingCode) {
          return '+' + callingCode + nationalSignificantNumber;
        } else {
          return '+' + digits;
        }
      } else {
        if (country || callingCode) {
          var callingCode_ = country ? this.metadata.countryCallingCode() : callingCode;
          return '+' + callingCode_ + nationalSignificantNumber;
        }
      }
    }
    /**
     * Returns an instance of `PhoneNumber` class.
     * Will return `undefined` if no national (significant) number
     * digits have been entered so far, or if no `defaultCountry` has been
     * set and the user enters a phone number not in international format.
     */

  }, {
    key: "getNumber",
    value: function getNumber() {
      var _this$state3 = this.state,
          nationalSignificantNumber = _this$state3.nationalSignificantNumber,
          carrierCode = _this$state3.carrierCode,
          callingCode = _this$state3.callingCode; // `this._getCountry()` is basically same as `this.state.country`
      // with the only change that it return `undefined` in case of a
      // "non-geographic" numbering plan instead of `"001"` "internal use" value.

      var country = this._getCountry();

      if (!nationalSignificantNumber) {
        return;
      }

      if (!country && !callingCode) {
        return;
      }

      var phoneNumber = new _PhoneNumber_js__WEBPACK_IMPORTED_MODULE_6__["default"](country || callingCode, nationalSignificantNumber, this.metadata.metadata);

      if (carrierCode) {
        phoneNumber.carrierCode = carrierCode;
      } // Phone number extensions are not supported by "As You Type" formatter.


      return phoneNumber;
    }
    /**
     * Returns `true` if the phone number is "possible".
     * Is just a shortcut for `PhoneNumber.isPossible()`.
     * @return {boolean}
     */

  }, {
    key: "isPossible",
    value: function isPossible() {
      var phoneNumber = this.getNumber();

      if (!phoneNumber) {
        return false;
      }

      return phoneNumber.isPossible();
    }
    /**
     * Returns `true` if the phone number is "valid".
     * Is just a shortcut for `PhoneNumber.isValid()`.
     * @return {boolean}
     */

  }, {
    key: "isValid",
    value: function isValid() {
      var phoneNumber = this.getNumber();

      if (!phoneNumber) {
        return false;
      }

      return phoneNumber.isValid();
    }
    /**
     * @deprecated
     * This method is used in `react-phone-number-input/source/input-control.js`
     * in versions before `3.0.16`.
     */

  }, {
    key: "getNationalNumber",
    value: function getNationalNumber() {
      return this.state.nationalSignificantNumber;
    }
    /**
     * Returns the phone number characters entered by the user.
     * @return {string}
     */

  }, {
    key: "getChars",
    value: function getChars() {
      return (this.state.international ? '+' : '') + this.state.digits;
    }
    /**
     * Returns the template for the formatted phone number.
     * @return {string}
     */

  }, {
    key: "getTemplate",
    value: function getTemplate() {
      return this.formatter.getTemplate(this.state) || this.getNonFormattedTemplate() || '';
    }
  }]);

  return AsYouType;
}();



/***/ }),

/***/ 3125:
/*!*********************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternMatcher.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PatternMatcher)
/* harmony export */ });
/* harmony import */ var _AsYouTypeFormatter_PatternParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsYouTypeFormatter.PatternParser.js */ 1905);
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}



var PatternMatcher = /*#__PURE__*/function () {
  function PatternMatcher(pattern) {
    _classCallCheck(this, PatternMatcher);

    this.matchTree = new _AsYouTypeFormatter_PatternParser_js__WEBPACK_IMPORTED_MODULE_0__["default"]().parse(pattern);
  }

  _createClass(PatternMatcher, [{
    key: "match",
    value: function match(string) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          allowOverflow = _ref.allowOverflow;

      if (!string) {
        throw new Error('String is required');
      }

      var result = _match(string.split(''), this.matchTree, true);

      if (result && result.match) {
        delete result.matchedChars;
      }

      if (result && result.overflow) {
        if (!allowOverflow) {
          return;
        }
      }

      return result;
    }
  }]);

  return PatternMatcher;
}();
/**
 * Matches `characters` against a pattern compiled into a `tree`.
 * @param  {string[]} characters
 * @param  {Tree} tree — A pattern compiled into a `tree`. See the `*.d.ts` file for the description of the `tree` structure.
 * @param  {boolean} last — Whether it's the last (rightmost) subtree on its level of the match tree.
 * @return {object} See the `*.d.ts` file for the description of the result object.
 */




function _match(characters, tree, last) {
  // If `tree` is a string, then `tree` is a single character.
  // That's because when a pattern is parsed, multi-character-string parts
  // of a pattern are compiled into arrays of single characters.
  // I still wrote this piece of code for a "general" hypothetical case
  // when `tree` could be a string of several characters, even though
  // such case is not possible with the current implementation.
  if (typeof tree === 'string') {
    var characterString = characters.join('');

    if (tree.indexOf(characterString) === 0) {
      // `tree` is always a single character.
      // If `tree.indexOf(characterString) === 0`
      // then `characters.length === tree.length`.

      /* istanbul ignore else */
      if (characters.length === tree.length) {
        return {
          match: true,
          matchedChars: characters
        };
      } // `tree` is always a single character.
      // If `tree.indexOf(characterString) === 0`
      // then `characters.length === tree.length`.

      /* istanbul ignore next */


      return {
        partialMatch: true // matchedChars: characters

      };
    }

    if (characterString.indexOf(tree) === 0) {
      if (last) {
        // The `else` path is not possible because `tree` is always a single character.
        // The `else` case for `characters.length > tree.length` would be
        // `characters.length <= tree.length` which means `characters.length <= 1`.
        // `characters` array can't be empty, so that means `characters === [tree]`,
        // which would also mean `tree.indexOf(characterString) === 0` and that'd mean
        // that the `if (tree.indexOf(characterString) === 0)` condition before this
        // `if` condition would be entered, and returned from there, not reaching this code.

        /* istanbul ignore else */
        if (characters.length > tree.length) {
          return {
            overflow: true
          };
        }
      }

      return {
        match: true,
        matchedChars: characters.slice(0, tree.length)
      };
    }

    return;
  }

  if (Array.isArray(tree)) {
    var restCharacters = characters.slice();
    var i = 0;

    while (i < tree.length) {
      var subtree = tree[i];

      var result = _match(restCharacters, subtree, last && i === tree.length - 1);

      if (!result) {
        return;
      } else if (result.overflow) {
        return result;
      } else if (result.match) {
        // Continue with the next subtree with the rest of the characters.
        restCharacters = restCharacters.slice(result.matchedChars.length);

        if (restCharacters.length === 0) {
          if (i === tree.length - 1) {
            return {
              match: true,
              matchedChars: characters
            };
          } else {
            return {
              partialMatch: true // matchedChars: characters

            };
          }
        }
      } else {
        /* istanbul ignore else */
        if (result.partialMatch) {
          return {
            partialMatch: true // matchedChars: characters

          };
        } else {
          throw new Error("Unsupported match result:\n".concat(JSON.stringify(result, null, 2)));
        }
      }

      i++;
    } // If `last` then overflow has already been checked
    // by the last element of the `tree` array.

    /* istanbul ignore if */


    if (last) {
      return {
        overflow: true
      };
    }

    return {
      match: true,
      matchedChars: characters.slice(0, characters.length - restCharacters.length)
    };
  }

  switch (tree.op) {
    case '|':
      var partialMatch;

      for (var _iterator = _createForOfIteratorHelperLoose(tree.args), _step; !(_step = _iterator()).done;) {
        var branch = _step.value;

        var _result = _match(characters, branch, last);

        if (_result) {
          if (_result.overflow) {
            return _result;
          } else if (_result.match) {
            return {
              match: true,
              matchedChars: _result.matchedChars
            };
          } else {
            /* istanbul ignore else */
            if (_result.partialMatch) {
              partialMatch = true;
            } else {
              throw new Error("Unsupported match result:\n".concat(JSON.stringify(_result, null, 2)));
            }
          }
        }
      }

      if (partialMatch) {
        return {
          partialMatch: true // matchedChars: ...

        };
      } // Not even a partial match.


      return;

    case '[]':
      for (var _iterator2 = _createForOfIteratorHelperLoose(tree.args), _step2; !(_step2 = _iterator2()).done;) {
        var _char = _step2.value;

        if (characters[0] === _char) {
          if (characters.length === 1) {
            return {
              match: true,
              matchedChars: characters
            };
          }

          if (last) {
            return {
              overflow: true
            };
          }

          return {
            match: true,
            matchedChars: [_char]
          };
        }
      } // No character matches.


      return;

    /* istanbul ignore next */

    default:
      throw new Error("Unsupported instruction tree: ".concat(tree));
  }
}

/***/ }),

/***/ 1905:
/*!********************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternParser.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PatternParser)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

var PatternParser = /*#__PURE__*/function () {
  function PatternParser() {
    _classCallCheck(this, PatternParser);
  }

  _createClass(PatternParser, [{
    key: "parse",
    value: function parse(pattern) {
      this.context = [{
        or: true,
        instructions: []
      }];
      this.parsePattern(pattern);

      if (this.context.length !== 1) {
        throw new Error('Non-finalized contexts left when pattern parse ended');
      }

      var _this$context$ = this.context[0],
          branches = _this$context$.branches,
          instructions = _this$context$.instructions;

      if (branches) {
        return {
          op: '|',
          args: branches.concat([expandSingleElementArray(instructions)])
        };
      }
      /* istanbul ignore if */


      if (instructions.length === 0) {
        throw new Error('Pattern is required');
      }

      if (instructions.length === 1) {
        return instructions[0];
      }

      return instructions;
    }
  }, {
    key: "startContext",
    value: function startContext(context) {
      this.context.push(context);
    }
  }, {
    key: "endContext",
    value: function endContext() {
      this.context.pop();
    }
  }, {
    key: "getContext",
    value: function getContext() {
      return this.context[this.context.length - 1];
    }
  }, {
    key: "parsePattern",
    value: function parsePattern(pattern) {
      if (!pattern) {
        throw new Error('Pattern is required');
      }

      var match = pattern.match(OPERATOR);

      if (!match) {
        if (ILLEGAL_CHARACTER_REGEXP.test(pattern)) {
          throw new Error("Illegal characters found in a pattern: ".concat(pattern));
        }

        this.getContext().instructions = this.getContext().instructions.concat(pattern.split(''));
        return;
      }

      var operator = match[1];
      var before = pattern.slice(0, match.index);
      var rightPart = pattern.slice(match.index + operator.length);

      switch (operator) {
        case '(?:':
          if (before) {
            this.parsePattern(before);
          }

          this.startContext({
            or: true,
            instructions: [],
            branches: []
          });
          break;

        case ')':
          if (!this.getContext().or) {
            throw new Error('")" operator must be preceded by "(?:" operator');
          }

          if (before) {
            this.parsePattern(before);
          }

          if (this.getContext().instructions.length === 0) {
            throw new Error('No instructions found after "|" operator in an "or" group');
          }

          var _this$getContext = this.getContext(),
              branches = _this$getContext.branches;

          branches.push(expandSingleElementArray(this.getContext().instructions));
          this.endContext();
          this.getContext().instructions.push({
            op: '|',
            args: branches
          });
          break;

        case '|':
          if (!this.getContext().or) {
            throw new Error('"|" operator can only be used inside "or" groups');
          }

          if (before) {
            this.parsePattern(before);
          } // The top-level is an implicit "or" group, if required.


          if (!this.getContext().branches) {
            // `branches` are not defined only for the root implicit "or" operator.

            /* istanbul ignore else */
            if (this.context.length === 1) {
              this.getContext().branches = [];
            } else {
              throw new Error('"branches" not found in an "or" group context');
            }
          }

          this.getContext().branches.push(expandSingleElementArray(this.getContext().instructions));
          this.getContext().instructions = [];
          break;

        case '[':
          if (before) {
            this.parsePattern(before);
          }

          this.startContext({
            oneOfSet: true
          });
          break;

        case ']':
          if (!this.getContext().oneOfSet) {
            throw new Error('"]" operator must be preceded by "[" operator');
          }

          this.endContext();
          this.getContext().instructions.push({
            op: '[]',
            args: parseOneOfSet(before)
          });
          break;

        /* istanbul ignore next */

        default:
          throw new Error("Unknown operator: ".concat(operator));
      }

      if (rightPart) {
        this.parsePattern(rightPart);
      }
    }
  }]);

  return PatternParser;
}();



function parseOneOfSet(pattern) {
  var values = [];
  var i = 0;

  while (i < pattern.length) {
    if (pattern[i] === '-') {
      if (i === 0 || i === pattern.length - 1) {
        throw new Error("Couldn't parse a one-of set pattern: ".concat(pattern));
      }

      var prevValue = pattern[i - 1].charCodeAt(0) + 1;
      var nextValue = pattern[i + 1].charCodeAt(0) - 1;
      var value = prevValue;

      while (value <= nextValue) {
        values.push(String.fromCharCode(value));
        value++;
      }
    } else {
      values.push(pattern[i]);
    }

    i++;
  }

  return values;
}

var ILLEGAL_CHARACTER_REGEXP = /[\(\)\[\]\?\:\|]/;
var OPERATOR = new RegExp( // any of:
'(' + // or operator
'\\|' + // or
'|' + // or group start
'\\(\\?\\:' + // or
'|' + // or group end
'\\)' + // or
'|' + // one-of set start
'\\[' + // or
'|' + // one-of set end
'\\]' + ')');

function expandSingleElementArray(array) {
  if (array.length === 1) {
    return array[0];
  }

  return array;
}

/***/ }),

/***/ 5059:
/*!***************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/AsYouTypeFormatter.complete.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canFormatCompleteNumber": () => (/* binding */ canFormatCompleteNumber),
/* harmony export */   "default": () => (/* binding */ formatCompleteNumber)
/* harmony export */ });
/* harmony import */ var _helpers_checkNumberLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/checkNumberLength.js */ 6601);
/* harmony import */ var _helpers_parseDigits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/parseDigits.js */ 323);
/* harmony import */ var _helpers_formatNationalNumberUsingFormat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/formatNationalNumberUsingFormat.js */ 5897);



function formatCompleteNumber(state, format, _ref) {
  var metadata = _ref.metadata,
      shouldTryNationalPrefixFormattingRule = _ref.shouldTryNationalPrefixFormattingRule,
      getSeparatorAfterNationalPrefix = _ref.getSeparatorAfterNationalPrefix;
  var matcher = new RegExp("^(?:".concat(format.pattern(), ")$"));

  if (matcher.test(state.nationalSignificantNumber)) {
    return formatNationalNumberWithAndWithoutNationalPrefixFormattingRule(state, format, {
      metadata: metadata,
      shouldTryNationalPrefixFormattingRule: shouldTryNationalPrefixFormattingRule,
      getSeparatorAfterNationalPrefix: getSeparatorAfterNationalPrefix
    });
  }
}
function canFormatCompleteNumber(nationalSignificantNumber, metadata) {
  return (0,_helpers_checkNumberLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(nationalSignificantNumber, metadata) === 'IS_POSSIBLE';
}

function formatNationalNumberWithAndWithoutNationalPrefixFormattingRule(state, format, _ref2) {
  var metadata = _ref2.metadata,
      shouldTryNationalPrefixFormattingRule = _ref2.shouldTryNationalPrefixFormattingRule,
      getSeparatorAfterNationalPrefix = _ref2.getSeparatorAfterNationalPrefix; // `format` has already been checked for `nationalPrefix` requirement.

  var nationalSignificantNumber = state.nationalSignificantNumber,
      international = state.international,
      nationalPrefix = state.nationalPrefix,
      carrierCode = state.carrierCode; // Format the number with using `national_prefix_formatting_rule`.
  // If the resulting formatted number is a valid formatted number, then return it.
  //
  // Google's AsYouType formatter is different in a way that it doesn't try
  // to format using the "national prefix formatting rule", and instead it
  // simply prepends a national prefix followed by a " " character.
  // This code does that too, but as a fallback.
  // The reason is that "national prefix formatting rule" may use parentheses,
  // which wouldn't be included has it used the simpler Google's way.
  //

  if (shouldTryNationalPrefixFormattingRule(format)) {
    var formattedNumber = formatNationalNumber(state, format, {
      useNationalPrefixFormattingRule: true,
      getSeparatorAfterNationalPrefix: getSeparatorAfterNationalPrefix,
      metadata: metadata
    });

    if (formattedNumber) {
      return formattedNumber;
    }
  } // Format the number without using `national_prefix_formatting_rule`.


  return formatNationalNumber(state, format, {
    useNationalPrefixFormattingRule: false,
    getSeparatorAfterNationalPrefix: getSeparatorAfterNationalPrefix,
    metadata: metadata
  });
}

function formatNationalNumber(state, format, _ref3) {
  var metadata = _ref3.metadata,
      useNationalPrefixFormattingRule = _ref3.useNationalPrefixFormattingRule,
      getSeparatorAfterNationalPrefix = _ref3.getSeparatorAfterNationalPrefix;
  var formattedNationalNumber = (0,_helpers_formatNationalNumberUsingFormat_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state.nationalSignificantNumber, format, {
    carrierCode: state.carrierCode,
    useInternationalFormat: state.international,
    withNationalPrefix: useNationalPrefixFormattingRule,
    metadata: metadata
  });

  if (!useNationalPrefixFormattingRule) {
    if (state.nationalPrefix) {
      // If a national prefix was extracted, then just prepend it,
      // followed by a " " character.
      formattedNationalNumber = state.nationalPrefix + getSeparatorAfterNationalPrefix(format) + formattedNationalNumber;
    } else if (state.complexPrefixBeforeNationalSignificantNumber) {
      formattedNationalNumber = state.complexPrefixBeforeNationalSignificantNumber + ' ' + formattedNationalNumber;
    }
  }

  if (isValidFormattedNationalNumber(formattedNationalNumber, state)) {
    return formattedNationalNumber;
  }
} // Check that the formatted phone number contains exactly
// the same digits that have been input by the user.
// For example, when "0111523456789" is input for `AR` country,
// the extracted `this.nationalSignificantNumber` is "91123456789",
// which means that the national part of `this.digits` isn't simply equal to
// `this.nationalPrefix` + `this.nationalSignificantNumber`.
//
// Also, a `format` can add extra digits to the `this.nationalSignificantNumber`
// being formatted via `metadata[country].national_prefix_transform_rule`.
// For example, for `VI` country, it prepends `340` to the national number,
// and if this check hasn't been implemented, then there would be a bug
// when `340` "area coude" is "duplicated" during input for `VI` country:
// https://github.com/catamphetamine/libphonenumber-js/issues/318
//
// So, all these "gotchas" are filtered out.
//
// In the original Google's code, the comments say:
// "Check that we didn't remove nor add any extra digits when we matched
// this formatting pattern. This usually happens after we entered the last
// digit during AYTF. Eg: In case of MX, we swallow mobile token (1) when
// formatted but AYTF should retain all the number entered and not change
// in order to match a format (of same leading digits and length) display
// in that way."
// "If it's the same (i.e entered number and format is same), then it's
// safe to return this in formatted number as nothing is lost / added."
// Otherwise, don't use this format.
// https://github.com/google/libphonenumber/commit/3e7c1f04f5e7200f87fb131e6f85c6e99d60f510#diff-9149457fa9f5d608a11bb975c6ef4bc5
// https://github.com/google/libphonenumber/commit/3ac88c7106e7dcb553bcc794b15f19185928a1c6#diff-2dcb77e833422ee304da348b905cde0b
//


function isValidFormattedNationalNumber(formattedNationalNumber, state) {
  return (0,_helpers_parseDigits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(formattedNationalNumber) === state.getNationalDigits();
}

/***/ }),

/***/ 3114:
/*!******************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/AsYouTypeFormatter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIGIT_PLACEHOLDER": () => (/* reexport safe */ _AsYouTypeFormatter_util_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT_PLACEHOLDER),
/* harmony export */   "default": () => (/* binding */ AsYouTypeFormatter)
/* harmony export */ });
/* harmony import */ var _AsYouTypeFormatter_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsYouTypeFormatter.util.js */ 9087);
/* harmony import */ var _AsYouTypeFormatter_complete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AsYouTypeFormatter.complete.js */ 5059);
/* harmony import */ var _AsYouTypeFormatter_PatternMatcher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AsYouTypeFormatter.PatternMatcher.js */ 3125);
/* harmony import */ var _helpers_parseDigits_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/parseDigits.js */ 323);
/* harmony import */ var _helpers_formatNationalNumberUsingFormat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/formatNationalNumberUsingFormat.js */ 5897);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ 2976);
/* harmony import */ var _helpers_applyInternationalSeparatorStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/applyInternationalSeparatorStyle.js */ 3109);
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}








 // Used in phone number format template creation.
// Could be any digit, I guess.

var DUMMY_DIGIT = '9'; // I don't know why is it exactly `15`

var LONGEST_NATIONAL_PHONE_NUMBER_LENGTH = 15; // Create a phone number consisting only of the digit 9 that matches the
// `number_pattern` by applying the pattern to the "longest phone number" string.

var LONGEST_DUMMY_PHONE_NUMBER = (0,_AsYouTypeFormatter_util_js__WEBPACK_IMPORTED_MODULE_0__.repeat)(DUMMY_DIGIT, LONGEST_NATIONAL_PHONE_NUMBER_LENGTH); // A set of characters that, if found in a national prefix formatting rules, are an indicator to
// us that we should separate the national prefix from the number when formatting.

var NATIONAL_PREFIX_SEPARATORS_PATTERN = /[- ]/; // Deprecated: Google has removed some formatting pattern related code from their repo.
// https://github.com/googlei18n/libphonenumber/commit/a395b4fef3caf57c4bc5f082e1152a4d2bd0ba4c
// "We no longer have numbers in formatting matching patterns, only \d."
// Because this library supports generating custom metadata
// some users may still be using old metadata so the relevant
// code seems to stay until some next major version update.

var SUPPORT_LEGACY_FORMATTING_PATTERNS = true; // A pattern that is used to match character classes in regular expressions.
// An example of a character class is "[1-4]".

var CREATE_CHARACTER_CLASS_PATTERN = SUPPORT_LEGACY_FORMATTING_PATTERNS && function () {
  return /\[([^\[\]])*\]/g;
}; // Any digit in a regular expression that actually denotes a digit. For
// example, in the regular expression "80[0-2]\d{6,10}", the first 2 digits
// (8 and 0) are standalone digits, but the rest are not.
// Two look-aheads are needed because the number following \\d could be a
// two-digit number, since the phone number can be as long as 15 digits.


var CREATE_STANDALONE_DIGIT_PATTERN = SUPPORT_LEGACY_FORMATTING_PATTERNS && function () {
  return /\d(?=[^,}][^,}])/g;
}; // A regular expression that is used to determine if a `format` is
// suitable to be used in the "as you type formatter".
// A `format` is suitable when the resulting formatted number has
// the same digits as the user has entered.
//
// In the simplest case, that would mean that the format
// doesn't add any additional digits when formatting a number.
// Google says that it also shouldn't add "star" (`*`) characters,
// like it does in some Israeli formats.
// Such basic format would only contain "valid punctuation"
// and "captured group" identifiers ($1, $2, etc).
//
// An example of a format that adds additional digits:
//
// Country: `AR` (Argentina).
// Format:
// {
//    "pattern": "(\\d)(\\d{2})(\\d{4})(\\d{4})",
//    "leading_digits_patterns": ["91"],
//    "national_prefix_formatting_rule": "0$1",
//    "format": "$2 15-$3-$4",
//    "international_format": "$1 $2 $3-$4"
// }
//
// In the format above, the `format` adds `15` to the digits when formatting a number.
// A sidenote: this format actually is suitable because `national_prefix_for_parsing`
// has previously removed `15` from a national number, so re-adding `15` in `format`
// doesn't actually result in any extra digits added to user's input.
// But verifying that would be a complex procedure, so the code chooses a simpler path:
// it simply filters out all `format`s that contain anything but "captured group" ids.
//
// This regular expression is called `ELIGIBLE_FORMAT_PATTERN` in Google's
// `libphonenumber` code.
//


var NON_ALTERING_FORMAT_REG_EXP = new RegExp('[' + _constants_js__WEBPACK_IMPORTED_MODULE_1__.VALID_PUNCTUATION + ']*' + // Google developers say:
// "We require that the first matching group is present in the
//  output pattern to ensure no data is lost while formatting."
'\\$1' + '[' + _constants_js__WEBPACK_IMPORTED_MODULE_1__.VALID_PUNCTUATION + ']*' + '(\\$\\d[' + _constants_js__WEBPACK_IMPORTED_MODULE_1__.VALID_PUNCTUATION + ']*)*' + '$'); // This is the minimum length of the leading digits of a phone number
// to guarantee the first "leading digits pattern" for a phone number format
// to be preemptive.

var MIN_LEADING_DIGITS_LENGTH = 3;

var AsYouTypeFormatter = /*#__PURE__*/function () {
  function AsYouTypeFormatter(_ref) {
    var state = _ref.state,
        metadata = _ref.metadata;

    _classCallCheck(this, AsYouTypeFormatter);

    this.metadata = metadata;
    this.resetFormat();
  }

  _createClass(AsYouTypeFormatter, [{
    key: "resetFormat",
    value: function resetFormat() {
      this.chosenFormat = undefined;
      this.template = undefined;
      this.nationalNumberTemplate = undefined;
      this.populatedNationalNumberTemplate = undefined;
      this.populatedNationalNumberTemplatePosition = -1;
    }
  }, {
    key: "reset",
    value: function reset(numberingPlan, state) {
      this.resetFormat();

      if (numberingPlan) {
        this.isNANP = numberingPlan.callingCode() === '1';
        this.matchingFormats = numberingPlan.formats();

        if (state.nationalSignificantNumber) {
          this.narrowDownMatchingFormats(state);
        }
      } else {
        this.isNANP = undefined;
        this.matchingFormats = [];
      }
    }
    /**
     * Formats an updated phone number.
     * @param  {string} nextDigits — Additional phone number digits.
     * @param  {object} state — `AsYouType` state.
     * @return {[string]} Returns undefined if the updated phone number can't be formatted using any of the available formats.
     */

  }, {
    key: "format",
    value: function format(nextDigits, state) {
      var _this = this; // See if the phone number digits can be formatted as a complete phone number.
      // If not, use the results from `formatNationalNumberWithNextDigits()`,
      // which formats based on the chosen formatting pattern.
      //
      // Attempting to format complete phone number first is how it's done
      // in Google's `libphonenumber`, so this library just follows it.
      // Google's `libphonenumber` code doesn't explain in detail why does it
      // attempt to format digits as a complete phone number
      // instead of just going with a previoulsy (or newly) chosen `format`:
      //
      // "Checks to see if there is an exact pattern match for these digits.
      //  If so, we should use this instead of any other formatting template
      //  whose leadingDigitsPattern also matches the input."
      //


      if ((0,_AsYouTypeFormatter_complete_js__WEBPACK_IMPORTED_MODULE_2__.canFormatCompleteNumber)(state.nationalSignificantNumber, this.metadata)) {
        for (var _iterator = _createForOfIteratorHelperLoose(this.matchingFormats), _step; !(_step = _iterator()).done;) {
          var format = _step.value;
          var formattedCompleteNumber = (0,_AsYouTypeFormatter_complete_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state, format, {
            metadata: this.metadata,
            shouldTryNationalPrefixFormattingRule: function shouldTryNationalPrefixFormattingRule(format) {
              return _this.shouldTryNationalPrefixFormattingRule(format, {
                international: state.international,
                nationalPrefix: state.nationalPrefix
              });
            },
            getSeparatorAfterNationalPrefix: function getSeparatorAfterNationalPrefix(format) {
              return _this.getSeparatorAfterNationalPrefix(format);
            }
          });

          if (formattedCompleteNumber) {
            this.resetFormat();
            this.chosenFormat = format;
            this.setNationalNumberTemplate(formattedCompleteNumber.replace(/\d/g, _AsYouTypeFormatter_util_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT_PLACEHOLDER), state);
            this.populatedNationalNumberTemplate = formattedCompleteNumber; // With a new formatting template, the matched position
            // using the old template needs to be reset.

            this.populatedNationalNumberTemplatePosition = this.template.lastIndexOf(_AsYouTypeFormatter_util_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT_PLACEHOLDER);
            return formattedCompleteNumber;
          }
        }
      } // Format the digits as a partial (incomplete) phone number
      // using the previously chosen formatting pattern (or a newly chosen one).


      return this.formatNationalNumberWithNextDigits(nextDigits, state);
    } // Formats the next phone number digits.

  }, {
    key: "formatNationalNumberWithNextDigits",
    value: function formatNationalNumberWithNextDigits(nextDigits, state) {
      var previouslyChosenFormat = this.chosenFormat; // Choose a format from the list of matching ones.

      var newlyChosenFormat = this.chooseFormat(state);

      if (newlyChosenFormat) {
        if (newlyChosenFormat === previouslyChosenFormat) {
          // If it can format the next (current) digits
          // using the previously chosen phone number format
          // then return the updated formatted number.
          return this.formatNextNationalNumberDigits(nextDigits);
        } else {
          // If a more appropriate phone number format
          // has been chosen for these "leading digits",
          // then re-format the national phone number part
          // using the newly selected format.
          return this.formatNextNationalNumberDigits(state.getNationalDigits());
        }
      }
    }
  }, {
    key: "narrowDownMatchingFormats",
    value: function narrowDownMatchingFormats(_ref2) {
      var _this2 = this;

      var nationalSignificantNumber = _ref2.nationalSignificantNumber,
          nationalPrefix = _ref2.nationalPrefix,
          international = _ref2.international;
      var leadingDigits = nationalSignificantNumber; // "leading digits" pattern list starts with a
      // "leading digits" pattern fitting a maximum of 3 leading digits.
      // So, after a user inputs 3 digits of a national (significant) phone number
      // this national (significant) number can already be formatted.
      // The next "leading digits" pattern is for 4 leading digits max,
      // and the "leading digits" pattern after it is for 5 leading digits max, etc.
      // This implementation is different from Google's
      // in that it searches for a fitting format
      // even if the user has entered less than
      // `MIN_LEADING_DIGITS_LENGTH` digits of a national number.
      // Because some leading digit patterns already match for a single first digit.

      var leadingDigitsPatternIndex = leadingDigits.length - MIN_LEADING_DIGITS_LENGTH;

      if (leadingDigitsPatternIndex < 0) {
        leadingDigitsPatternIndex = 0;
      }

      this.matchingFormats = this.matchingFormats.filter(function (format) {
        return _this2.formatSuits(format, international, nationalPrefix) && _this2.formatMatches(format, leadingDigits, leadingDigitsPatternIndex);
      }); // If there was a phone number format chosen
      // and it no longer holds given the new leading digits then reset it.
      // The test for this `if` condition is marked as:
      // "Reset a chosen format when it no longer holds given the new leading digits".
      // To construct a valid test case for this one can find a country
      // in `PhoneNumberMetadata.xml` yielding one format for 3 `<leadingDigits>`
      // and yielding another format for 4 `<leadingDigits>` (Australia in this case).

      if (this.chosenFormat && this.matchingFormats.indexOf(this.chosenFormat) === -1) {
        this.resetFormat();
      }
    }
  }, {
    key: "formatSuits",
    value: function formatSuits(format, international, nationalPrefix) {
      // When a prefix before a national (significant) number is
      // simply a national prefix, then it's parsed as `this.nationalPrefix`.
      // In more complex cases, a prefix before national (significant) number
      // could include a national prefix as well as some "capturing groups",
      // and in that case there's no info whether a national prefix has been parsed.
      // If national prefix is not used when formatting a phone number
      // using this format, but a national prefix has been entered by the user,
      // and was extracted, then discard such phone number format.
      // In Google's "AsYouType" formatter code, the equivalent would be this part:
      // https://github.com/google/libphonenumber/blob/0a45cfd96e71cad8edb0e162a70fcc8bd9728933/java/libphonenumber/src/com/google/i18n/phonenumbers/AsYouTypeFormatter.java#L175-L184
      if (nationalPrefix && !format.usesNationalPrefix() && // !format.domesticCarrierCodeFormattingRule() &&
      !format.nationalPrefixIsOptionalWhenFormattingInNationalFormat()) {
        return false;
      } // If national prefix is mandatory for this phone number format
      // and there're no guarantees that a national prefix is present in user input
      // then discard this phone number format as not suitable.
      // In Google's "AsYouType" formatter code, the equivalent would be this part:
      // https://github.com/google/libphonenumber/blob/0a45cfd96e71cad8edb0e162a70fcc8bd9728933/java/libphonenumber/src/com/google/i18n/phonenumbers/AsYouTypeFormatter.java#L185-L193


      if (!international && !nationalPrefix && format.nationalPrefixIsMandatoryWhenFormattingInNationalFormat()) {
        return false;
      }

      return true;
    }
  }, {
    key: "formatMatches",
    value: function formatMatches(format, leadingDigits, leadingDigitsPatternIndex) {
      var leadingDigitsPatternsCount = format.leadingDigitsPatterns().length; // If this format is not restricted to a certain
      // leading digits pattern then it fits.
      // The test case could be found by searching for "leadingDigitsPatternsCount === 0".

      if (leadingDigitsPatternsCount === 0) {
        return true;
      } // Start narrowing down the list of possible formats based on the leading digits.
      // (only previously matched formats take part in the narrowing down process)
      // `leading_digits_patterns` start with 3 digits min
      // and then go up from there one digit at a time.


      leadingDigitsPatternIndex = Math.min(leadingDigitsPatternIndex, leadingDigitsPatternsCount - 1);
      var leadingDigitsPattern = format.leadingDigitsPatterns()[leadingDigitsPatternIndex]; // Google imposes a requirement on the leading digits
      // to be minimum 3 digits long in order to be eligible
      // for checking those with a leading digits pattern.
      //
      // Since `leading_digits_patterns` start with 3 digits min,
      // Google's original `libphonenumber` library only starts
      // excluding any non-matching formats only when the
      // national number entered so far is at least 3 digits long,
      // otherwise format matching would give false negatives.
      //
      // For example, when the digits entered so far are `2`
      // and the leading digits pattern is `21` –
      // it's quite obvious in this case that the format could be the one
      // but due to the absence of further digits it would give false negative.
      //
      // Also, `leading_digits_patterns` doesn't always correspond to a single
      // digits count. For example, `60|8` pattern would already match `8`
      // but the `60` part would require having at least two leading digits,
      // so the whole pattern would require inputting two digits first in order to
      // decide on whether it matches the input, even when the input is "80".
      //
      // This library — `libphonenumber-js` — allows filtering by `leading_digits_patterns`
      // even when there's only 1 or 2 digits of the national (significant) number.
      // To do that, it uses a non-strict pattern matcher written specifically for that.
      //

      if (leadingDigits.length < MIN_LEADING_DIGITS_LENGTH) {
        // Before leading digits < 3 matching was implemented:
        // return true
        //
        // After leading digits < 3 matching was implemented:
        try {
          return new _AsYouTypeFormatter_PatternMatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"](leadingDigitsPattern).match(leadingDigits, {
            allowOverflow: true
          }) !== undefined;
        } catch (error)
        /* istanbul ignore next */
        {
          // There's a slight possibility that there could be some undiscovered bug
          // in the pattern matcher code. Since the "leading digits < 3 matching"
          // feature is not "essential" for operation, it can fall back to the old way
          // in case of any issues rather than halting the application's execution.
          console.error(error);
          return true;
        }
      } // If at least `MIN_LEADING_DIGITS_LENGTH` digits of a national number are
      // available then use the usual regular expression matching.
      //
      // The whole pattern is wrapped in round brackets (`()`) because
      // the pattern can use "or" operator (`|`) at the top level of the pattern.
      //


      return new RegExp("^(".concat(leadingDigitsPattern, ")")).test(leadingDigits);
    }
  }, {
    key: "getFormatFormat",
    value: function getFormatFormat(format, international) {
      return international ? format.internationalFormat() : format.format();
    }
  }, {
    key: "chooseFormat",
    value: function chooseFormat(state) {
      var _this3 = this;

      var _loop = function _loop() {
        var format = _step2.value; // If this format is currently being used
        // and is still suitable, then stick to it.

        if (_this3.chosenFormat === format) {
          return "break";
        } // Sometimes, a formatting rule inserts additional digits in a phone number,
        // and "as you type" formatter can't do that: it should only use the digits
        // that the user has input.
        //
        // For example, in Argentina, there's a format for mobile phone numbers:
        //
        // {
        //    "pattern": "(\\d)(\\d{2})(\\d{4})(\\d{4})",
        //    "leading_digits_patterns": ["91"],
        //    "national_prefix_formatting_rule": "0$1",
        //    "format": "$2 15-$3-$4",
        //    "international_format": "$1 $2 $3-$4"
        // }
        //
        // In that format, `international_format` is used instead of `format`
        // because `format` inserts `15` in the formatted number,
        // and `AsYouType` formatter should only use the digits
        // the user has actually input, without adding any extra digits.
        // In this case, it wouldn't make a difference, because the `15`
        // is first stripped when applying `national_prefix_for_parsing`
        // and then re-added when using `format`, so in reality it doesn't
        // add any new digits to the number, but to detect that, the code
        // would have to be more complex: it would have to try formatting
        // the digits using the format and then see if any digits have
        // actually been added or removed, and then, every time a new digit
        // is input, it should re-check whether the chosen format doesn't
        // alter the digits.
        //
        // Google's code doesn't go that far, and so does this library:
        // it simply requires that a `format` doesn't add any additonal
        // digits to user's input.
        //
        // Also, people in general should move from inputting phone numbers
        // in national format (possibly with national prefixes)
        // and use international phone number format instead:
        // it's a logical thing in the modern age of mobile phones,
        // globalization and the internet.
        //

        /* istanbul ignore if */


        if (!NON_ALTERING_FORMAT_REG_EXP.test(_this3.getFormatFormat(format, state.international))) {
          return "continue";
        }

        if (!_this3.createTemplateForFormat(format, state)) {
          // Remove the format if it can't generate a template.
          _this3.matchingFormats = _this3.matchingFormats.filter(function (_) {
            return _ !== format;
          });
          return "continue";
        }

        _this3.chosenFormat = format;
        return "break";
      }; // When there are multiple available formats, the formatter uses the first
      // format where a formatting template could be created.
      //
      // For some weird reason, `istanbul` says "else path not taken"
      // for the `for of` line below. Supposedly that means that
      // the loop doesn't ever go over the last element in the list.
      // That's true because there always is `this.chosenFormat`
      // when `this.matchingFormats` is non-empty.
      // And, for some weird reason, it doesn't think that the case
      // with empty `this.matchingFormats` qualifies for a valid "else" path.
      // So simply muting this `istanbul` warning.
      // It doesn't skip the contents of the `for of` loop,
      // it just skips the `for of` line.
      //

      /* istanbul ignore next */


      for (var _iterator2 = _createForOfIteratorHelperLoose(this.matchingFormats.slice()), _step2; !(_step2 = _iterator2()).done;) {
        var _ret = _loop();

        if (_ret === "break") break;
        if (_ret === "continue") continue;
      }

      if (!this.chosenFormat) {
        // No format matches the national (significant) phone number.
        this.resetFormat();
      }

      return this.chosenFormat;
    }
  }, {
    key: "createTemplateForFormat",
    value: function createTemplateForFormat(format, state) {
      // The formatter doesn't format numbers when numberPattern contains '|', e.g.
      // (20|3)\d{4}. In those cases we quickly return.
      // (Though there's no such format in current metadata)

      /* istanbul ignore if */
      if (SUPPORT_LEGACY_FORMATTING_PATTERNS && format.pattern().indexOf('|') >= 0) {
        return;
      } // Get formatting template for this phone number format


      var template = this.getTemplateForFormat(format, state); // If the national number entered is too long
      // for any phone number format, then abort.

      if (template) {
        this.setNationalNumberTemplate(template, state);
        return true;
      }
    }
  }, {
    key: "getSeparatorAfterNationalPrefix",
    value: function getSeparatorAfterNationalPrefix(format) {
      // `US` metadata doesn't have a `national_prefix_formatting_rule`,
      // so the `if` condition below doesn't apply to `US`,
      // but in reality there shoudl be a separator
      // between a national prefix and a national (significant) number.
      // So `US` national prefix separator is a "special" "hardcoded" case.
      if (this.isNANP) {
        return ' ';
      } // If a `format` has a `national_prefix_formatting_rule`
      // and that rule has a separator after a national prefix,
      // then it means that there should be a separator
      // between a national prefix and a national (significant) number.


      if (format && format.nationalPrefixFormattingRule() && NATIONAL_PREFIX_SEPARATORS_PATTERN.test(format.nationalPrefixFormattingRule())) {
        return ' ';
      } // At this point, there seems to be no clear evidence that
      // there should be a separator between a national prefix
      // and a national (significant) number. So don't insert one.


      return '';
    }
  }, {
    key: "getInternationalPrefixBeforeCountryCallingCode",
    value: function getInternationalPrefixBeforeCountryCallingCode(_ref3, options) {
      var IDDPrefix = _ref3.IDDPrefix,
          missingPlus = _ref3.missingPlus;

      if (IDDPrefix) {
        return options && options.spacing === false ? IDDPrefix : IDDPrefix + ' ';
      }

      if (missingPlus) {
        return '';
      }

      return '+';
    }
  }, {
    key: "getTemplate",
    value: function getTemplate(state) {
      if (!this.template) {
        return;
      } // `this.template` holds the template for a "complete" phone number.
      // The currently entered phone number is most likely not "complete",
      // so trim all non-populated digits.


      var index = -1;
      var i = 0;
      var internationalPrefix = state.international ? this.getInternationalPrefixBeforeCountryCallingCode(state, {
        spacing: false
      }) : '';

      while (i < internationalPrefix.length + state.getDigitsWithoutInternationalPrefix().length) {
        index = this.template.indexOf(_AsYouTypeFormatter_util_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT_PLACEHOLDER, index + 1);
        i++;
      }

      return (0,_AsYouTypeFormatter_util_js__WEBPACK_IMPORTED_MODULE_0__.cutAndStripNonPairedParens)(this.template, index + 1);
    }
  }, {
    key: "setNationalNumberTemplate",
    value: function setNationalNumberTemplate(template, state) {
      this.nationalNumberTemplate = template;
      this.populatedNationalNumberTemplate = template; // With a new formatting template, the matched position
      // using the old template needs to be reset.

      this.populatedNationalNumberTemplatePosition = -1; // For convenience, the public `.template` property
      // contains the whole international number
      // if the phone number being input is international:
      // 'x' for the '+' sign, 'x'es for the country phone code,
      // a spacebar and then the template for the formatted national number.

      if (state.international) {
        this.template = this.getInternationalPrefixBeforeCountryCallingCode(state).replace(/[\d\+]/g, _AsYouTypeFormatter_util_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT_PLACEHOLDER) + (0,_AsYouTypeFormatter_util_js__WEBPACK_IMPORTED_MODULE_0__.repeat)(_AsYouTypeFormatter_util_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT_PLACEHOLDER, state.callingCode.length) + ' ' + template;
      } else {
        this.template = template;
      }
    }
    /**
     * Generates formatting template for a national phone number,
     * optionally containing a national prefix, for a format.
     * @param  {Format} format
     * @param  {string} nationalPrefix
     * @return {string}
     */

  }, {
    key: "getTemplateForFormat",
    value: function getTemplateForFormat(format, _ref4) {
      var nationalSignificantNumber = _ref4.nationalSignificantNumber,
          international = _ref4.international,
          nationalPrefix = _ref4.nationalPrefix,
          complexPrefixBeforeNationalSignificantNumber = _ref4.complexPrefixBeforeNationalSignificantNumber;
      var pattern = format.pattern();
      /* istanbul ignore else */

      if (SUPPORT_LEGACY_FORMATTING_PATTERNS) {
        pattern = pattern // Replace anything in the form of [..] with \d
        .replace(CREATE_CHARACTER_CLASS_PATTERN(), '\\d') // Replace any standalone digit (not the one in `{}`) with \d
        .replace(CREATE_STANDALONE_DIGIT_PATTERN(), '\\d');
      } // Generate a dummy national number (consisting of `9`s)
      // that fits this format's `pattern`.
      //
      // This match will always succeed,
      // because the "longest dummy phone number"
      // has enough length to accomodate any possible
      // national phone number format pattern.
      //


      var digits = LONGEST_DUMMY_PHONE_NUMBER.match(pattern)[0]; // If the national number entered is too long
      // for any phone number format, then abort.

      if (nationalSignificantNumber.length > digits.length) {
        return;
      } // Get a formatting template which can be used to efficiently format
      // a partial number where digits are added one by one.
      // Below `strictPattern` is used for the
      // regular expression (with `^` and `$`).
      // This wasn't originally in Google's `libphonenumber`
      // and I guess they don't really need it
      // because they're not using "templates" to format phone numbers
      // but I added `strictPattern` after encountering
      // South Korean phone number formatting bug.
      //
      // Non-strict regular expression bug demonstration:
      //
      // this.nationalSignificantNumber : `111111111` (9 digits)
      //
      // pattern : (\d{2})(\d{3,4})(\d{4})
      // format : `$1 $2 $3`
      // digits : `9999999999` (10 digits)
      //
      // '9999999999'.replace(new RegExp(/(\d{2})(\d{3,4})(\d{4})/g), '$1 $2 $3') = "99 9999 9999"
      //
      // template : xx xxxx xxxx
      //
      // But the correct template in this case is `xx xxx xxxx`.
      // The template was generated incorrectly because of the
      // `{3,4}` variability in the `pattern`.
      //
      // The fix is, if `this.nationalSignificantNumber` has already sufficient length
      // to satisfy the `pattern` completely then `this.nationalSignificantNumber`
      // is used instead of `digits`.


      var strictPattern = new RegExp('^' + pattern + '$');
      var nationalNumberDummyDigits = nationalSignificantNumber.replace(/\d/g, DUMMY_DIGIT); // If `this.nationalSignificantNumber` has already sufficient length
      // to satisfy the `pattern` completely then use it
      // instead of `digits`.

      if (strictPattern.test(nationalNumberDummyDigits)) {
        digits = nationalNumberDummyDigits;
      }

      var numberFormat = this.getFormatFormat(format, international);
      var nationalPrefixIncludedInTemplate; // If a user did input a national prefix (and that's guaranteed),
      // and if a `format` does have a national prefix formatting rule,
      // then see if that national prefix formatting rule
      // prepends exactly the same national prefix the user has input.
      // If that's the case, then use the `format` with the national prefix formatting rule.
      // Otherwise, use  the `format` without the national prefix formatting rule,
      // and prepend a national prefix manually to it.

      if (this.shouldTryNationalPrefixFormattingRule(format, {
        international: international,
        nationalPrefix: nationalPrefix
      })) {
        var numberFormatWithNationalPrefix = numberFormat.replace(_helpers_formatNationalNumberUsingFormat_js__WEBPACK_IMPORTED_MODULE_4__.FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule()); // If `national_prefix_formatting_rule` of a `format` simply prepends
        // national prefix at the start of a national (significant) number,
        // then such formatting can be used with `AsYouType` formatter.
        // There seems to be no `else` case: everywhere in metadata,
        // national prefix formatting rule is national prefix + $1,
        // or `($1)`, in which case such format isn't even considered
        // when the user has input a national prefix.

        /* istanbul ignore else */

        if ((0,_helpers_parseDigits_js__WEBPACK_IMPORTED_MODULE_5__["default"])(format.nationalPrefixFormattingRule()) === (nationalPrefix || '') + (0,_helpers_parseDigits_js__WEBPACK_IMPORTED_MODULE_5__["default"])('$1')) {
          numberFormat = numberFormatWithNationalPrefix;
          nationalPrefixIncludedInTemplate = true; // Replace all digits of the national prefix in the formatting template
          // with `DIGIT_PLACEHOLDER`s.

          if (nationalPrefix) {
            var i = nationalPrefix.length;

            while (i > 0) {
              numberFormat = numberFormat.replace(/\d/, _AsYouTypeFormatter_util_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT_PLACEHOLDER);
              i--;
            }
          }
        }
      } // Generate formatting template for this phone number format.


      var template = digits // Format the dummy phone number according to the format.
      .replace(new RegExp(pattern), numberFormat) // Replace each dummy digit with a DIGIT_PLACEHOLDER.
      .replace(new RegExp(DUMMY_DIGIT, 'g'), _AsYouTypeFormatter_util_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT_PLACEHOLDER); // If a prefix of a national (significant) number is not as simple
      // as just a basic national prefix, then just prepend such prefix
      // before the national (significant) number, optionally spacing
      // the two with a whitespace.

      if (!nationalPrefixIncludedInTemplate) {
        if (complexPrefixBeforeNationalSignificantNumber) {
          // Prepend the prefix to the template manually.
          template = (0,_AsYouTypeFormatter_util_js__WEBPACK_IMPORTED_MODULE_0__.repeat)(_AsYouTypeFormatter_util_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT_PLACEHOLDER, complexPrefixBeforeNationalSignificantNumber.length) + ' ' + template;
        } else if (nationalPrefix) {
          // Prepend national prefix to the template manually.
          template = (0,_AsYouTypeFormatter_util_js__WEBPACK_IMPORTED_MODULE_0__.repeat)(_AsYouTypeFormatter_util_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT_PLACEHOLDER, nationalPrefix.length) + this.getSeparatorAfterNationalPrefix(format) + template;
        }
      }

      if (international) {
        template = (0,_helpers_applyInternationalSeparatorStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(template);
      }

      return template;
    }
  }, {
    key: "formatNextNationalNumberDigits",
    value: function formatNextNationalNumberDigits(digits) {
      var result = (0,_AsYouTypeFormatter_util_js__WEBPACK_IMPORTED_MODULE_0__.populateTemplateWithDigits)(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition, digits);

      if (!result) {
        // Reset the format.
        this.resetFormat();
        return;
      }

      this.populatedNationalNumberTemplate = result[0];
      this.populatedNationalNumberTemplatePosition = result[1]; // Return the formatted phone number so far.

      return (0,_AsYouTypeFormatter_util_js__WEBPACK_IMPORTED_MODULE_0__.cutAndStripNonPairedParens)(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1); // The old way which was good for `input-format` but is not so good
      // for `react-phone-number-input`'s default input (`InputBasic`).
      // return closeNonPairedParens(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1)
      // 	.replace(new RegExp(DIGIT_PLACEHOLDER, 'g'), ' ')
    }
  }, {
    key: "shouldTryNationalPrefixFormattingRule",
    value: function shouldTryNationalPrefixFormattingRule(format, _ref5) {
      var international = _ref5.international,
          nationalPrefix = _ref5.nationalPrefix;

      if (format.nationalPrefixFormattingRule()) {
        // In some countries, `national_prefix_formatting_rule` is `($1)`,
        // so it applies even if the user hasn't input a national prefix.
        // `format.usesNationalPrefix()` detects such cases.
        var usesNationalPrefix = format.usesNationalPrefix();

        if (usesNationalPrefix && nationalPrefix || !usesNationalPrefix && !international) {
          return true;
        }
      }
    }
  }]);

  return AsYouTypeFormatter;
}();



/***/ }),

/***/ 9087:
/*!***********************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/AsYouTypeFormatter.util.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIGIT_PLACEHOLDER": () => (/* binding */ DIGIT_PLACEHOLDER),
/* harmony export */   "closeNonPairedParens": () => (/* binding */ closeNonPairedParens),
/* harmony export */   "countOccurences": () => (/* binding */ countOccurences),
/* harmony export */   "cutAndStripNonPairedParens": () => (/* binding */ cutAndStripNonPairedParens),
/* harmony export */   "populateTemplateWithDigits": () => (/* binding */ populateTemplateWithDigits),
/* harmony export */   "repeat": () => (/* binding */ repeat),
/* harmony export */   "stripNonPairedParens": () => (/* binding */ stripNonPairedParens)
/* harmony export */ });
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
} // Should be the same as `DIGIT_PLACEHOLDER` in `libphonenumber-metadata-generator`.


var DIGIT_PLACEHOLDER = 'x'; // '\u2008' (punctuation space)

var DIGIT_PLACEHOLDER_MATCHER = new RegExp(DIGIT_PLACEHOLDER); // Counts all occurences of a symbol in a string.
// Unicode-unsafe (because using `.split()`).

function countOccurences(symbol, string) {
  var count = 0; // Using `.split('')` to iterate through a string here
  // to avoid requiring `Symbol.iterator` polyfill.
  // `.split('')` is generally not safe for Unicode,
  // but in this particular case for counting brackets it is safe.
  // for (const character of string)

  for (var _iterator = _createForOfIteratorHelperLoose(string.split('')), _step; !(_step = _iterator()).done;) {
    var character = _step.value;

    if (character === symbol) {
      count++;
    }
  }

  return count;
} // Repeats a string (or a symbol) N times.
// http://stackoverflow.com/questions/202605/repeat-string-javascript

function repeat(string, times) {
  if (times < 1) {
    return '';
  }

  var result = '';

  while (times > 1) {
    if (times & 1) {
      result += string;
    }

    times >>= 1;
    string += string;
  }

  return result + string;
}
function cutAndStripNonPairedParens(string, cutBeforeIndex) {
  if (string[cutBeforeIndex] === ')') {
    cutBeforeIndex++;
  }

  return stripNonPairedParens(string.slice(0, cutBeforeIndex));
}
function closeNonPairedParens(template, cut_before) {
  var retained_template = template.slice(0, cut_before);
  var opening_braces = countOccurences('(', retained_template);
  var closing_braces = countOccurences(')', retained_template);
  var dangling_braces = opening_braces - closing_braces;

  while (dangling_braces > 0 && cut_before < template.length) {
    if (template[cut_before] === ')') {
      dangling_braces--;
    }

    cut_before++;
  }

  return template.slice(0, cut_before);
}
function stripNonPairedParens(string) {
  var dangling_braces = [];
  var i = 0;

  while (i < string.length) {
    if (string[i] === '(') {
      dangling_braces.push(i);
    } else if (string[i] === ')') {
      dangling_braces.pop();
    }

    i++;
  }

  var start = 0;
  var cleared_string = '';
  dangling_braces.push(string.length);

  for (var _i = 0, _dangling_braces = dangling_braces; _i < _dangling_braces.length; _i++) {
    var index = _dangling_braces[_i];
    cleared_string += string.slice(start, index);
    start = index + 1;
  }

  return cleared_string;
}
function populateTemplateWithDigits(template, position, digits) {
  // Using `.split('')` to iterate through a string here
  // to avoid requiring `Symbol.iterator` polyfill.
  // `.split('')` is generally not safe for Unicode,
  // but in this particular case for `digits` it is safe.
  // for (const digit of digits)
  for (var _iterator2 = _createForOfIteratorHelperLoose(digits.split('')), _step2; !(_step2 = _iterator2()).done;) {
    var digit = _step2.value; // If there is room for more digits in current `template`,
    // then set the next digit in the `template`,
    // and return the formatted digits so far.
    // If more digits are entered than the current format could handle.

    if (template.slice(position + 1).search(DIGIT_PLACEHOLDER_MATCHER) < 0) {
      return;
    }

    position = template.search(DIGIT_PLACEHOLDER_MATCHER);
    template = template.replace(DIGIT_PLACEHOLDER_MATCHER, digit);
  }

  return [template, position];
}

/***/ }),

/***/ 5299:
/*!***************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/AsYouTypeParser.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AsYouTypeParser),
/* harmony export */   "extractFormattedDigitsAndPlus": () => (/* binding */ extractFormattedDigitsAndPlus)
/* harmony export */ });
/* harmony import */ var _helpers_extractCountryCallingCode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/extractCountryCallingCode.js */ 1378);
/* harmony import */ var _helpers_extractCountryCallingCodeFromInternationalNumberWithoutPlusSign_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/extractCountryCallingCodeFromInternationalNumberWithoutPlusSign.js */ 52);
/* harmony import */ var _helpers_extractNationalNumberFromPossiblyIncompleteNumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/extractNationalNumberFromPossiblyIncompleteNumber.js */ 1707);
/* harmony import */ var _helpers_stripIddPrefix_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/stripIddPrefix.js */ 4634);
/* harmony import */ var _helpers_parseDigits_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/parseDigits.js */ 323);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ 2976);
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}







var VALID_FORMATTED_PHONE_NUMBER_DIGITS_PART = '[' + _constants_js__WEBPACK_IMPORTED_MODULE_0__.VALID_PUNCTUATION + _constants_js__WEBPACK_IMPORTED_MODULE_0__.VALID_DIGITS + ']+';
var VALID_FORMATTED_PHONE_NUMBER_DIGITS_PART_PATTERN = new RegExp('^' + VALID_FORMATTED_PHONE_NUMBER_DIGITS_PART + '$', 'i');
var VALID_FORMATTED_PHONE_NUMBER_PART = '(?:' + '[' + _constants_js__WEBPACK_IMPORTED_MODULE_0__.PLUS_CHARS + ']' + '[' + _constants_js__WEBPACK_IMPORTED_MODULE_0__.VALID_PUNCTUATION + _constants_js__WEBPACK_IMPORTED_MODULE_0__.VALID_DIGITS + ']*' + '|' + '[' + _constants_js__WEBPACK_IMPORTED_MODULE_0__.VALID_PUNCTUATION + _constants_js__WEBPACK_IMPORTED_MODULE_0__.VALID_DIGITS + ']+' + ')';
var AFTER_PHONE_NUMBER_DIGITS_END_PATTERN = new RegExp('[^' + _constants_js__WEBPACK_IMPORTED_MODULE_0__.VALID_PUNCTUATION + _constants_js__WEBPACK_IMPORTED_MODULE_0__.VALID_DIGITS + ']+' + '.*' + '$'); // Tests whether `national_prefix_for_parsing` could match
// different national prefixes.
// Matches anything that's not a digit or a square bracket.

var COMPLEX_NATIONAL_PREFIX = /[^\d\[\]]/;

var AsYouTypeParser = /*#__PURE__*/function () {
  function AsYouTypeParser(_ref) {
    var defaultCountry = _ref.defaultCountry,
        defaultCallingCode = _ref.defaultCallingCode,
        metadata = _ref.metadata,
        onNationalSignificantNumberChange = _ref.onNationalSignificantNumberChange;

    _classCallCheck(this, AsYouTypeParser);

    this.defaultCountry = defaultCountry;
    this.defaultCallingCode = defaultCallingCode;
    this.metadata = metadata;
    this.onNationalSignificantNumberChange = onNationalSignificantNumberChange;
  }

  _createClass(AsYouTypeParser, [{
    key: "input",
    value: function input(text, state) {
      var _extractFormattedDigi = extractFormattedDigitsAndPlus(text),
          _extractFormattedDigi2 = _slicedToArray(_extractFormattedDigi, 2),
          formattedDigits = _extractFormattedDigi2[0],
          hasPlus = _extractFormattedDigi2[1];

      var digits = (0,_helpers_parseDigits_js__WEBPACK_IMPORTED_MODULE_1__["default"])(formattedDigits); // Checks for a special case: just a leading `+` has been entered.

      var justLeadingPlus;

      if (hasPlus) {
        if (!state.digits) {
          state.startInternationalNumber();

          if (!digits) {
            justLeadingPlus = true;
          }
        }
      }

      if (digits) {
        this.inputDigits(digits, state);
      }

      return {
        digits: digits,
        justLeadingPlus: justLeadingPlus
      };
    }
    /**
     * Inputs "next" phone number digits.
     * @param  {string} digits
     * @return {string} [formattedNumber] Formatted national phone number (if it can be formatted at this stage). Returning `undefined` means "don't format the national phone number at this stage".
     */

  }, {
    key: "inputDigits",
    value: function inputDigits(nextDigits, state) {
      var digits = state.digits;
      var hasReceivedThreeLeadingDigits = digits.length < 3 && digits.length + nextDigits.length >= 3; // Append phone number digits.

      state.appendDigits(nextDigits); // Attempt to extract IDD prefix:
      // Some users input their phone number in international format,
      // but in an "out-of-country" dialing format instead of using the leading `+`.
      // https://github.com/catamphetamine/libphonenumber-js/issues/185
      // Detect such numbers as soon as there're at least 3 digits.
      // Google's library attempts to extract IDD prefix at 3 digits,
      // so this library just copies that behavior.
      // I guess that's because the most commot IDD prefixes are
      // `00` (Europe) and `011` (US).
      // There exist really long IDD prefixes too:
      // for example, in Australia the default IDD prefix is `0011`,
      // and it could even be as long as `14880011`.
      // An IDD prefix is extracted here, and then every time when
      // there's a new digit and the number couldn't be formatted.

      if (hasReceivedThreeLeadingDigits) {
        this.extractIddPrefix(state);
      }

      if (this.isWaitingForCountryCallingCode(state)) {
        if (!this.extractCountryCallingCode(state)) {
          return;
        }
      } else {
        state.appendNationalSignificantNumberDigits(nextDigits);
      } // If a phone number is being input in international format,
      // then it's not valid for it to have a national prefix.
      // Still, some people incorrectly input such numbers with a national prefix.
      // In such cases, only attempt to strip a national prefix if the number becomes too long.
      // (but that is done later, not here)


      if (!state.international) {
        if (!this.hasExtractedNationalSignificantNumber) {
          this.extractNationalSignificantNumber(state.getNationalDigits(), function (stateUpdate) {
            return state.update(stateUpdate);
          });
        }
      }
    }
  }, {
    key: "isWaitingForCountryCallingCode",
    value: function isWaitingForCountryCallingCode(_ref2) {
      var international = _ref2.international,
          callingCode = _ref2.callingCode;
      return international && !callingCode;
    } // Extracts a country calling code from a number
    // being entered in internatonal format.

  }, {
    key: "extractCountryCallingCode",
    value: function extractCountryCallingCode(state) {
      var _extractCountryCallin = (0,_helpers_extractCountryCallingCode_js__WEBPACK_IMPORTED_MODULE_2__["default"])('+' + state.getDigitsWithoutInternationalPrefix(), this.defaultCountry, this.defaultCallingCode, this.metadata.metadata),
          countryCallingCode = _extractCountryCallin.countryCallingCode,
          number = _extractCountryCallin.number;

      if (countryCallingCode) {
        state.setCallingCode(countryCallingCode);
        state.update({
          nationalSignificantNumber: number
        });
        return true;
      }
    }
  }, {
    key: "reset",
    value: function reset(numberingPlan) {
      if (numberingPlan) {
        this.hasSelectedNumberingPlan = true;

        var nationalPrefixForParsing = numberingPlan._nationalPrefixForParsing();

        this.couldPossiblyExtractAnotherNationalSignificantNumber = nationalPrefixForParsing && COMPLEX_NATIONAL_PREFIX.test(nationalPrefixForParsing);
      } else {
        this.hasSelectedNumberingPlan = undefined;
        this.couldPossiblyExtractAnotherNationalSignificantNumber = undefined;
      }
    }
    /**
     * Extracts a national (significant) number from user input.
     * Google's library is different in that it only applies `national_prefix_for_parsing`
     * and doesn't apply `national_prefix_transform_rule` after that.
     * https://github.com/google/libphonenumber/blob/a3d70b0487875475e6ad659af404943211d26456/java/libphonenumber/src/com/google/i18n/phonenumbers/AsYouTypeFormatter.java#L539
     * @return {boolean} [extracted]
     */

  }, {
    key: "extractNationalSignificantNumber",
    value: function extractNationalSignificantNumber(nationalDigits, setState) {
      if (!this.hasSelectedNumberingPlan) {
        return;
      }

      var _extractNationalNumbe = (0,_helpers_extractNationalNumberFromPossiblyIncompleteNumber_js__WEBPACK_IMPORTED_MODULE_3__["default"])(nationalDigits, this.metadata),
          nationalPrefix = _extractNationalNumbe.nationalPrefix,
          nationalNumber = _extractNationalNumbe.nationalNumber,
          carrierCode = _extractNationalNumbe.carrierCode;

      if (nationalNumber === nationalDigits) {
        return;
      }

      this.onExtractedNationalNumber(nationalPrefix, carrierCode, nationalNumber, nationalDigits, setState);
      return true;
    }
    /**
     * In Google's code this function is called "attempt to extract longer NDD".
     * "Some national prefixes are a substring of others", they say.
     * @return {boolean} [result] — Returns `true` if extracting a national prefix produced different results from what they were.
     */

  }, {
    key: "extractAnotherNationalSignificantNumber",
    value: function extractAnotherNationalSignificantNumber(nationalDigits, prevNationalSignificantNumber, setState) {
      if (!this.hasExtractedNationalSignificantNumber) {
        return this.extractNationalSignificantNumber(nationalDigits, setState);
      }

      if (!this.couldPossiblyExtractAnotherNationalSignificantNumber) {
        return;
      }

      var _extractNationalNumbe2 = (0,_helpers_extractNationalNumberFromPossiblyIncompleteNumber_js__WEBPACK_IMPORTED_MODULE_3__["default"])(nationalDigits, this.metadata),
          nationalPrefix = _extractNationalNumbe2.nationalPrefix,
          nationalNumber = _extractNationalNumbe2.nationalNumber,
          carrierCode = _extractNationalNumbe2.carrierCode; // If a national prefix has been extracted previously,
      // then it's always extracted as additional digits are added.
      // That's assuming `extractNationalNumberFromPossiblyIncompleteNumber()`
      // doesn't do anything different from what it currently does.
      // So, just in case, here's this check, though it doesn't occur.

      /* istanbul ignore if */


      if (nationalNumber === prevNationalSignificantNumber) {
        return;
      }

      this.onExtractedNationalNumber(nationalPrefix, carrierCode, nationalNumber, nationalDigits, setState);
      return true;
    }
  }, {
    key: "onExtractedNationalNumber",
    value: function onExtractedNationalNumber(nationalPrefix, carrierCode, nationalSignificantNumber, nationalDigits, setState) {
      var complexPrefixBeforeNationalSignificantNumber;
      var nationalSignificantNumberMatchesInput; // This check also works with empty `this.nationalSignificantNumber`.

      var nationalSignificantNumberIndex = nationalDigits.lastIndexOf(nationalSignificantNumber); // If the extracted national (significant) number is the
      // last substring of the `digits`, then it means that it hasn't been altered:
      // no digits have been removed from the national (significant) number
      // while applying `national_prefix_transform_rule`.
      // https://gitlab.com/catamphetamine/libphonenumber-js/-/blob/master/METADATA.md#national_prefix_for_parsing--national_prefix_transform_rule

      if (nationalSignificantNumberIndex >= 0 && nationalSignificantNumberIndex === nationalDigits.length - nationalSignificantNumber.length) {
        nationalSignificantNumberMatchesInput = true; // If a prefix of a national (significant) number is not as simple
        // as just a basic national prefix, then such prefix is stored in
        // `this.complexPrefixBeforeNationalSignificantNumber` property and will be
        // prepended "as is" to the national (significant) number to produce
        // a formatted result.

        var prefixBeforeNationalNumber = nationalDigits.slice(0, nationalSignificantNumberIndex); // `prefixBeforeNationalNumber` is always non-empty,
        // because `onExtractedNationalNumber()` isn't called
        // when a national (significant) number hasn't been actually "extracted":
        // when a national (significant) number is equal to the national part of `digits`,
        // then `onExtractedNationalNumber()` doesn't get called.

        if (prefixBeforeNationalNumber !== nationalPrefix) {
          complexPrefixBeforeNationalSignificantNumber = prefixBeforeNationalNumber;
        }
      }

      setState({
        nationalPrefix: nationalPrefix,
        carrierCode: carrierCode,
        nationalSignificantNumber: nationalSignificantNumber,
        nationalSignificantNumberMatchesInput: nationalSignificantNumberMatchesInput,
        complexPrefixBeforeNationalSignificantNumber: complexPrefixBeforeNationalSignificantNumber
      }); // `onExtractedNationalNumber()` is only called when
      // the national (significant) number actually did change.

      this.hasExtractedNationalSignificantNumber = true;
      this.onNationalSignificantNumberChange();
    }
  }, {
    key: "reExtractNationalSignificantNumber",
    value: function reExtractNationalSignificantNumber(state) {
      // Attempt to extract a national prefix.
      //
      // Some people incorrectly input national prefix
      // in an international phone number.
      // For example, some people write British phone numbers as `+44(0)...`.
      //
      // Also, in some rare cases, it is valid for a national prefix
      // to be a part of an international phone number.
      // For example, mobile phone numbers in Mexico are supposed to be
      // dialled internationally using a `1` national prefix,
      // so the national prefix will be part of an international number.
      //
      // Quote from:
      // https://www.mexperience.com/dialing-cell-phones-in-mexico/
      //
      // "Dialing a Mexican cell phone from abroad
      // When you are calling a cell phone number in Mexico from outside Mexico,
      // it’s necessary to dial an additional “1” after Mexico’s country code
      // (which is “52”) and before the area code.
      // You also ignore the 045, and simply dial the area code and the
      // cell phone’s number.
      //
      // If you don’t add the “1”, you’ll receive a recorded announcement
      // asking you to redial using it.
      //
      // For example, if you are calling from the USA to a cell phone
      // in Mexico City, you would dial +52 – 1 – 55 – 1234 5678.
      // (Note that this is different to calling a land line in Mexico City
      // from abroad, where the number dialed would be +52 – 55 – 1234 5678)".
      //
      // Google's demo output:
      // https://libphonenumber.appspot.com/phonenumberparser?number=%2b5215512345678&country=MX
      //
      if (this.extractAnotherNationalSignificantNumber(state.getNationalDigits(), state.nationalSignificantNumber, function (stateUpdate) {
        return state.update(stateUpdate);
      })) {
        return true;
      } // If no format matches the phone number, then it could be
      // "a really long IDD" (quote from a comment in Google's library).
      // An IDD prefix is first extracted when the user has entered at least 3 digits,
      // and then here — every time when there's a new digit and the number
      // couldn't be formatted.
      // For example, in Australia the default IDD prefix is `0011`,
      // and it could even be as long as `14880011`.
      //
      // Could also check `!hasReceivedThreeLeadingDigits` here
      // to filter out the case when this check duplicates the one
      // already performed when there're 3 leading digits,
      // but it's not a big deal, and in most cases there
      // will be a suitable `format` when there're 3 leading digits.
      //


      if (this.extractIddPrefix(state)) {
        this.extractCallingCodeAndNationalSignificantNumber(state);
        return true;
      } // Google's AsYouType formatter supports sort of an "autocorrection" feature
      // when it "autocorrects" numbers that have been input for a country
      // with that country's calling code.
      // Such "autocorrection" feature looks weird, but different people have been requesting it:
      // https://github.com/catamphetamine/libphonenumber-js/issues/376
      // https://github.com/catamphetamine/libphonenumber-js/issues/375
      // https://github.com/catamphetamine/libphonenumber-js/issues/316


      if (this.fixMissingPlus(state)) {
        this.extractCallingCodeAndNationalSignificantNumber(state);
        return true;
      }
    }
  }, {
    key: "extractIddPrefix",
    value: function extractIddPrefix(state) {
      // An IDD prefix can't be present in a number written with a `+`.
      // Also, don't re-extract an IDD prefix if has already been extracted.
      var international = state.international,
          IDDPrefix = state.IDDPrefix,
          digits = state.digits,
          nationalSignificantNumber = state.nationalSignificantNumber;

      if (international || IDDPrefix) {
        return;
      } // Some users input their phone number in "out-of-country"
      // dialing format instead of using the leading `+`.
      // https://github.com/catamphetamine/libphonenumber-js/issues/185
      // Detect such numbers.


      var numberWithoutIDD = (0,_helpers_stripIddPrefix_js__WEBPACK_IMPORTED_MODULE_4__["default"])(digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata);

      if (numberWithoutIDD !== undefined && numberWithoutIDD !== digits) {
        // If an IDD prefix was stripped then convert the IDD-prefixed number
        // to international number for subsequent parsing.
        state.update({
          IDDPrefix: digits.slice(0, digits.length - numberWithoutIDD.length)
        });
        this.startInternationalNumber(state, {
          country: undefined,
          callingCode: undefined
        });
        return true;
      }
    }
  }, {
    key: "fixMissingPlus",
    value: function fixMissingPlus(state) {
      if (!state.international) {
        var _extractCountryCallin2 = (0,_helpers_extractCountryCallingCodeFromInternationalNumberWithoutPlusSign_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata),
            newCallingCode = _extractCountryCallin2.countryCallingCode,
            number = _extractCountryCallin2.number;

        if (newCallingCode) {
          state.update({
            missingPlus: true
          });
          this.startInternationalNumber(state, {
            country: state.country,
            callingCode: newCallingCode
          });
          return true;
        }
      }
    }
  }, {
    key: "startInternationalNumber",
    value: function startInternationalNumber(state, _ref3) {
      var country = _ref3.country,
          callingCode = _ref3.callingCode;
      state.startInternationalNumber(country, callingCode); // If a national (significant) number has been extracted before, reset it.

      if (state.nationalSignificantNumber) {
        state.resetNationalSignificantNumber();
        this.onNationalSignificantNumberChange();
        this.hasExtractedNationalSignificantNumber = undefined;
      }
    }
  }, {
    key: "extractCallingCodeAndNationalSignificantNumber",
    value: function extractCallingCodeAndNationalSignificantNumber(state) {
      if (this.extractCountryCallingCode(state)) {
        // `this.extractCallingCode()` is currently called when the number
        // couldn't be formatted during the standard procedure.
        // Normally, the national prefix would be re-extracted
        // for an international number if such number couldn't be formatted,
        // but since it's already not able to be formatted,
        // there won't be yet another retry, so also extract national prefix here.
        this.extractNationalSignificantNumber(state.getNationalDigits(), function (stateUpdate) {
          return state.update(stateUpdate);
        });
      }
    }
  }]);

  return AsYouTypeParser;
}();
/**
 * Extracts formatted phone number from text (if there's any).
 * @param  {string} text
 * @return {string} [formattedPhoneNumber]
 */




function extractFormattedPhoneNumber(text) {
  // Attempt to extract a possible number from the string passed in.
  var startsAt = text.search(VALID_FORMATTED_PHONE_NUMBER_PART);

  if (startsAt < 0) {
    return;
  } // Trim everything to the left of the phone number.


  text = text.slice(startsAt); // Trim the `+`.

  var hasPlus;

  if (text[0] === '+') {
    hasPlus = true;
    text = text.slice('+'.length);
  } // Trim everything to the right of the phone number.


  text = text.replace(AFTER_PHONE_NUMBER_DIGITS_END_PATTERN, ''); // Re-add the previously trimmed `+`.

  if (hasPlus) {
    text = '+' + text;
  }

  return text;
}
/**
 * Extracts formatted phone number digits (and a `+`) from text (if there're any).
 * @param  {string} text
 * @return {any[]}
 */


function _extractFormattedDigitsAndPlus(text) {
  // Extract a formatted phone number part from text.
  var extractedNumber = extractFormattedPhoneNumber(text) || ''; // Trim a `+`.

  if (extractedNumber[0] === '+') {
    return [extractedNumber.slice('+'.length), true];
  }

  return [extractedNumber];
}
/**
 * Extracts formatted phone number digits (and a `+`) from text (if there're any).
 * @param  {string} text
 * @return {any[]}
 */


function extractFormattedDigitsAndPlus(text) {
  var _extractFormattedDigi3 = _extractFormattedDigitsAndPlus(text),
      _extractFormattedDigi4 = _slicedToArray(_extractFormattedDigi3, 2),
      formattedDigits = _extractFormattedDigi4[0],
      hasPlus = _extractFormattedDigi4[1]; // If the extracted phone number part
  // can possibly be a part of some valid phone number
  // then parse phone number characters from a formatted phone number.


  if (!VALID_FORMATTED_PHONE_NUMBER_DIGITS_PART_PATTERN.test(formattedDigits)) {
    formattedDigits = '';
  }

  return [formattedDigits, hasPlus];
}

/***/ }),

/***/ 6520:
/*!**************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/AsYouTypeState.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AsYouTypeState)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

var AsYouTypeState = /*#__PURE__*/function () {
  function AsYouTypeState(_ref) {
    var onCountryChange = _ref.onCountryChange,
        onCallingCodeChange = _ref.onCallingCodeChange;

    _classCallCheck(this, AsYouTypeState);

    this.onCountryChange = onCountryChange;
    this.onCallingCodeChange = onCallingCodeChange;
  }

  _createClass(AsYouTypeState, [{
    key: "reset",
    value: function reset(defaultCountry, defaultCallingCode) {
      this.international = false;
      this.IDDPrefix = undefined;
      this.missingPlus = undefined;
      this.callingCode = undefined;
      this.digits = '';
      this.resetNationalSignificantNumber();
      this.initCountryAndCallingCode(defaultCountry, defaultCallingCode);
    }
  }, {
    key: "resetNationalSignificantNumber",
    value: function resetNationalSignificantNumber() {
      this.nationalSignificantNumber = this.getNationalDigits();
      this.nationalSignificantNumberMatchesInput = true;
      this.nationalPrefix = undefined;
      this.carrierCode = undefined;
      this.complexPrefixBeforeNationalSignificantNumber = undefined;
    }
  }, {
    key: "update",
    value: function update(properties) {
      for (var _i = 0, _Object$keys = Object.keys(properties); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        this[key] = properties[key];
      }
    }
  }, {
    key: "initCountryAndCallingCode",
    value: function initCountryAndCallingCode(country, callingCode) {
      this.setCountry(country);
      this.setCallingCode(callingCode);
    }
  }, {
    key: "setCountry",
    value: function setCountry(country) {
      this.country = country;
      this.onCountryChange(country);
    }
  }, {
    key: "setCallingCode",
    value: function setCallingCode(callingCode) {
      this.callingCode = callingCode;
      this.onCallingCodeChange(callingCode, this.country);
    }
  }, {
    key: "startInternationalNumber",
    value: function startInternationalNumber(country, callingCode) {
      // Prepend the `+` to parsed input.
      this.international = true; // If a default country was set then reset it
      // because an explicitly international phone
      // number is being entered.

      this.initCountryAndCallingCode(country, callingCode);
    }
  }, {
    key: "appendDigits",
    value: function appendDigits(nextDigits) {
      this.digits += nextDigits;
    }
  }, {
    key: "appendNationalSignificantNumberDigits",
    value: function appendNationalSignificantNumberDigits(nextDigits) {
      this.nationalSignificantNumber += nextDigits;
    }
    /**
     * Returns the part of `this.digits` that corresponds to the national number.
     * Basically, all digits that have been input by the user, except for the
     * international prefix and the country calling code part
     * (if the number is an international one).
     * @return {string}
     */

  }, {
    key: "getNationalDigits",
    value: function getNationalDigits() {
      if (this.international) {
        return this.digits.slice((this.IDDPrefix ? this.IDDPrefix.length : 0) + (this.callingCode ? this.callingCode.length : 0));
      }

      return this.digits;
    }
  }, {
    key: "getDigitsWithoutInternationalPrefix",
    value: function getDigitsWithoutInternationalPrefix() {
      if (this.international) {
        if (this.IDDPrefix) {
          return this.digits.slice(this.IDDPrefix.length);
        }
      }

      return this.digits;
    }
  }]);

  return AsYouTypeState;
}();



/***/ }),

/***/ 9480:
/*!**********************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/ParseError.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ParseError)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
} // https://stackoverflow.com/a/46971044/970769
// "Breaking changes in Typescript 2.1"
// "Extending built-ins like Error, Array, and Map may no longer work."
// "As a recommendation, you can manually adjust the prototype immediately after any super(...) calls."
// https://github.com/Microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work


var ParseError = /*#__PURE__*/function (_Error) {
  _inherits(ParseError, _Error);

  var _super = _createSuper(ParseError);

  function ParseError(code) {
    var _this;

    _classCallCheck(this, ParseError);

    _this = _super.call(this, code); // Set the prototype explicitly.
    // Any subclass of FooError will have to manually set the prototype as well.

    Object.setPrototypeOf(_assertThisInitialized(_this), ParseError.prototype);
    _this.name = _this.constructor.name;
    return _this;
  }

  return _createClass(ParseError);
}( /*#__PURE__*/_wrapNativeSuper(Error));



/***/ }),

/***/ 3935:
/*!***********************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/PhoneNumber.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PhoneNumber)
/* harmony export */ });
/* harmony import */ var _metadata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata.js */ 7211);
/* harmony import */ var _isPossibleNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isPossibleNumber_.js */ 2892);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validate_.js */ 1490);
/* harmony import */ var _helpers_getNumberType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/getNumberType.js */ 2328);
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./format_.js */ 9256);
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}







var USE_NON_GEOGRAPHIC_COUNTRY_CODE = false;

var PhoneNumber = /*#__PURE__*/function () {
  function PhoneNumber(countryCallingCode, nationalNumber, metadata) {
    _classCallCheck(this, PhoneNumber);

    if (!countryCallingCode) {
      throw new TypeError('`country` or `countryCallingCode` not passed');
    }

    if (!nationalNumber) {
      throw new TypeError('`nationalNumber` not passed');
    }

    if (!metadata) {
      throw new TypeError('`metadata` not passed');
    }

    var _metadata = new _metadata_js__WEBPACK_IMPORTED_MODULE_0__["default"](metadata); // If country code is passed then derive `countryCallingCode` from it.
    // Also store the country code as `.country`.


    if (isCountryCode(countryCallingCode)) {
      this.country = countryCallingCode;

      _metadata.country(countryCallingCode);

      countryCallingCode = _metadata.countryCallingCode();
    } else {
      /* istanbul ignore if */
      if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
        if (_metadata.isNonGeographicCallingCode(countryCallingCode)) {
          this.country = '001';
        }
      }
    }

    this.countryCallingCode = countryCallingCode;
    this.nationalNumber = nationalNumber;
    this.number = '+' + this.countryCallingCode + this.nationalNumber;
    this.metadata = metadata;
  }

  _createClass(PhoneNumber, [{
    key: "setExt",
    value: function setExt(ext) {
      this.ext = ext;
    }
  }, {
    key: "isPossible",
    value: function isPossible() {
      return (0,_isPossibleNumber_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, {
        v2: true
      }, this.metadata);
    }
  }, {
    key: "isValid",
    value: function isValid() {
      return (0,_validate_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, {
        v2: true
      }, this.metadata);
    }
  }, {
    key: "isNonGeographic",
    value: function isNonGeographic() {
      var metadata = new _metadata_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.metadata);
      return metadata.isNonGeographicCallingCode(this.countryCallingCode);
    }
  }, {
    key: "isEqual",
    value: function isEqual(phoneNumber) {
      return this.number === phoneNumber.number && this.ext === phoneNumber.ext;
    } // // Is just an alias for `this.isValid() && this.country === country`.
    // // https://github.com/googlei18n/libphonenumber/blob/master/FAQ.md#when-should-i-use-isvalidnumberforregion
    // isValidForRegion(country) {
    // 	return isValidNumberForRegion(this, country, { v2: true }, this.metadata)
    // }

  }, {
    key: "getType",
    value: function getType() {
      return (0,_helpers_getNumberType_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, {
        v2: true
      }, this.metadata);
    }
  }, {
    key: "format",
    value: function format(_format, options) {
      return (0,_format_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _format, options ? _objectSpread(_objectSpread({}, options), {}, {
        v2: true
      }) : {
        v2: true
      }, this.metadata);
    }
  }, {
    key: "formatNational",
    value: function formatNational(options) {
      return this.format('NATIONAL', options);
    }
  }, {
    key: "formatInternational",
    value: function formatInternational(options) {
      return this.format('INTERNATIONAL', options);
    }
  }, {
    key: "getURI",
    value: function getURI(options) {
      return this.format('RFC3966', options);
    }
  }]);

  return PhoneNumber;
}();



var isCountryCode = function isCountryCode(value) {
  return /^[A-Z]{2}$/.test(value);
};

/***/ }),

/***/ 2976:
/*!*********************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/constants.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAX_LENGTH_COUNTRY_CODE": () => (/* binding */ MAX_LENGTH_COUNTRY_CODE),
/* harmony export */   "MAX_LENGTH_FOR_NSN": () => (/* binding */ MAX_LENGTH_FOR_NSN),
/* harmony export */   "MIN_LENGTH_FOR_NSN": () => (/* binding */ MIN_LENGTH_FOR_NSN),
/* harmony export */   "PLUS_CHARS": () => (/* binding */ PLUS_CHARS),
/* harmony export */   "VALID_DIGITS": () => (/* binding */ VALID_DIGITS),
/* harmony export */   "VALID_PUNCTUATION": () => (/* binding */ VALID_PUNCTUATION),
/* harmony export */   "WHITESPACE": () => (/* binding */ WHITESPACE)
/* harmony export */ });
// The minimum length of the national significant number.
var MIN_LENGTH_FOR_NSN = 2; // The ITU says the maximum length should be 15,
// but one can find longer numbers in Germany.

var MAX_LENGTH_FOR_NSN = 17; // The maximum length of the country calling code.

var MAX_LENGTH_COUNTRY_CODE = 3; // Digits accepted in phone numbers
// (ascii, fullwidth, arabic-indic, and eastern arabic digits).

var VALID_DIGITS = "0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9"; // `DASHES` will be right after the opening square bracket of the "character class"

var DASHES = "-\u2010-\u2015\u2212\u30FC\uFF0D";
var SLASHES = "\uFF0F/";
var DOTS = "\uFF0E.";
var WHITESPACE = " \xA0\xAD\u200B\u2060\u3000";
var BRACKETS = "()\uFF08\uFF09\uFF3B\uFF3D\\[\\]"; // export const OPENING_BRACKETS = '(\uFF08\uFF3B\\\['

var TILDES = "~\u2053\u223C\uFF5E"; // Regular expression of acceptable punctuation found in phone numbers. This
// excludes punctuation found as a leading character only. This consists of dash
// characters, white space characters, full stops, slashes, square brackets,
// parentheses and tildes. Full-width variants are also present.

var VALID_PUNCTUATION = "".concat(DASHES).concat(SLASHES).concat(DOTS).concat(WHITESPACE).concat(BRACKETS).concat(TILDES);
var PLUS_CHARS = "+\uFF0B"; // const LEADING_PLUS_CHARS_PATTERN = new RegExp('^[' + PLUS_CHARS + ']+')

/***/ }),

/***/ 9256:
/*!*******************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/format_.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatNumber)
/* harmony export */ });
/* harmony import */ var _helpers_matchesEntirely_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/matchesEntirely.js */ 6188);
/* harmony import */ var _helpers_formatNationalNumberUsingFormat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/formatNationalNumberUsingFormat.js */ 5897);
/* harmony import */ var _metadata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata.js */ 7211);
/* harmony import */ var _helpers_getIddPrefix_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/getIddPrefix.js */ 4938);
/* harmony import */ var _helpers_RFC3966_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/RFC3966.js */ 3845);
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} // This is a port of Google Android `libphonenumber`'s
// `phonenumberutil.js` of December 31th, 2018.
//
// https://github.com/googlei18n/libphonenumber/commits/master/javascript/i18n/phonenumbers/phonenumberutil.js







var DEFAULT_OPTIONS = {
  formatExtension: function formatExtension(formattedNumber, extension, metadata) {
    return "".concat(formattedNumber).concat(metadata.ext()).concat(extension);
  }
}; // Formats a phone number
//
// Example use cases:
//
// ```js
// formatNumber('8005553535', 'RU', 'INTERNATIONAL')
// formatNumber('8005553535', 'RU', 'INTERNATIONAL', metadata)
// formatNumber({ phone: '8005553535', country: 'RU' }, 'INTERNATIONAL')
// formatNumber({ phone: '8005553535', country: 'RU' }, 'INTERNATIONAL', metadata)
// formatNumber('+78005553535', 'NATIONAL')
// formatNumber('+78005553535', 'NATIONAL', metadata)
// ```
//

function formatNumber(input, format, options, metadata) {
  // Apply default options.
  if (options) {
    options = _objectSpread(_objectSpread({}, DEFAULT_OPTIONS), options);
  } else {
    options = DEFAULT_OPTIONS;
  }

  metadata = new _metadata_js__WEBPACK_IMPORTED_MODULE_0__["default"](metadata);

  if (input.country && input.country !== '001') {
    // Validate `input.country`.
    if (!metadata.hasCountry(input.country)) {
      throw new Error("Unknown country: ".concat(input.country));
    }

    metadata.country(input.country);
  } else if (input.countryCallingCode) {
    metadata.selectNumberingPlan(input.countryCallingCode);
  } else return input.phone || '';

  var countryCallingCode = metadata.countryCallingCode();
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone; // This variable should have been declared inside `case`s
  // but Babel has a bug and it says "duplicate variable declaration".

  var number;

  switch (format) {
    case 'NATIONAL':
      // Legacy argument support.
      // (`{ country: ..., phone: '' }`)
      if (!nationalNumber) {
        return '';
      }

      number = formatNationalNumber(nationalNumber, input.carrierCode, 'NATIONAL', metadata, options);
      return addExtension(number, input.ext, metadata, options.formatExtension);

    case 'INTERNATIONAL':
      // Legacy argument support.
      // (`{ country: ..., phone: '' }`)
      if (!nationalNumber) {
        return "+".concat(countryCallingCode);
      }

      number = formatNationalNumber(nationalNumber, null, 'INTERNATIONAL', metadata, options);
      number = "+".concat(countryCallingCode, " ").concat(number);
      return addExtension(number, input.ext, metadata, options.formatExtension);

    case 'E.164':
      // `E.164` doesn't define "phone number extensions".
      return "+".concat(countryCallingCode).concat(nationalNumber);

    case 'RFC3966':
      return (0,_helpers_RFC3966_js__WEBPACK_IMPORTED_MODULE_1__.formatRFC3966)({
        number: "+".concat(countryCallingCode).concat(nationalNumber),
        ext: input.ext
      });
    // For reference, here's Google's IDD formatter:
    // https://github.com/google/libphonenumber/blob/32719cf74e68796788d1ca45abc85dcdc63ba5b9/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberUtil.java#L1546
    // Not saying that this IDD formatter replicates it 1:1, but it seems to work.
    // Who would even need to format phone numbers in IDD format anyway?

    case 'IDD':
      if (!options.fromCountry) {
        return; // throw new Error('`fromCountry` option not passed for IDD-prefixed formatting.')
      }

      var formattedNumber = formatIDD(nationalNumber, input.carrierCode, countryCallingCode, options.fromCountry, metadata);
      return addExtension(formattedNumber, input.ext, metadata, options.formatExtension);

    default:
      throw new Error("Unknown \"format\" argument passed to \"formatNumber()\": \"".concat(format, "\""));
  }
}

function formatNationalNumber(number, carrierCode, formatAs, metadata, options) {
  var format = chooseFormatForNumber(metadata.formats(), number);

  if (!format) {
    return number;
  }

  return (0,_helpers_formatNationalNumberUsingFormat_js__WEBPACK_IMPORTED_MODULE_2__["default"])(number, format, {
    useInternationalFormat: formatAs === 'INTERNATIONAL',
    withNationalPrefix: format.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && options && options.nationalPrefix === false ? false : true,
    carrierCode: carrierCode,
    metadata: metadata
  });
}

function chooseFormatForNumber(availableFormats, nationalNnumber) {
  for (var _iterator = _createForOfIteratorHelperLoose(availableFormats), _step; !(_step = _iterator()).done;) {
    var format = _step.value; // Validate leading digits.
    // The test case for "else path" could be found by searching for
    // "format.leadingDigitsPatterns().length === 0".

    if (format.leadingDigitsPatterns().length > 0) {
      // The last leading_digits_pattern is used here, as it is the most detailed
      var lastLeadingDigitsPattern = format.leadingDigitsPatterns()[format.leadingDigitsPatterns().length - 1]; // If leading digits don't match then move on to the next phone number format

      if (nationalNnumber.search(lastLeadingDigitsPattern) !== 0) {
        continue;
      }
    } // Check that the national number matches the phone number format regular expression


    if ((0,_helpers_matchesEntirely_js__WEBPACK_IMPORTED_MODULE_3__["default"])(nationalNnumber, format.pattern())) {
      return format;
    }
  }
}

function addExtension(formattedNumber, ext, metadata, formatExtension) {
  return ext ? formatExtension(formattedNumber, ext, metadata) : formattedNumber;
}

function formatIDD(nationalNumber, carrierCode, countryCallingCode, fromCountry, metadata) {
  var fromCountryCallingCode = (0,_metadata_js__WEBPACK_IMPORTED_MODULE_0__.getCountryCallingCode)(fromCountry, metadata.metadata); // When calling within the same country calling code.

  if (fromCountryCallingCode === countryCallingCode) {
    var formattedNumber = formatNationalNumber(nationalNumber, carrierCode, 'NATIONAL', metadata); // For NANPA regions, return the national format for these regions
    // but prefix it with the country calling code.

    if (countryCallingCode === '1') {
      return countryCallingCode + ' ' + formattedNumber;
    } // If regions share a country calling code, the country calling code need
    // not be dialled. This also applies when dialling within a region, so this
    // if clause covers both these cases. Technically this is the case for
    // dialling from La Reunion to other overseas departments of France (French
    // Guiana, Martinique, Guadeloupe), but not vice versa - so we don't cover
    // this edge case for now and for those cases return the version including
    // country calling code. Details here:
    // http://www.petitfute.com/voyage/225-info-pratiques-reunion
    //


    return formattedNumber;
  }

  var iddPrefix = (0,_helpers_getIddPrefix_js__WEBPACK_IMPORTED_MODULE_4__["default"])(fromCountry, undefined, metadata.metadata);

  if (iddPrefix) {
    return "".concat(iddPrefix, " ").concat(countryCallingCode, " ").concat(formatNationalNumber(nationalNumber, null, 'INTERNATIONAL', metadata));
  }
}

/***/ }),

/***/ 959:
/*!****************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/getExampleNumber.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getExampleNumber)
/* harmony export */ });
/* harmony import */ var _PhoneNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhoneNumber.js */ 3935);

function getExampleNumber(country, examples, metadata) {
  if (examples[country]) {
    return new _PhoneNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](country, examples[country], metadata);
  }
}

/***/ }),

/***/ 3845:
/*!***************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/RFC3966.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatRFC3966": () => (/* binding */ formatRFC3966),
/* harmony export */   "parseRFC3966": () => (/* binding */ parseRFC3966)
/* harmony export */ });
/* harmony import */ var _isViablePhoneNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isViablePhoneNumber.js */ 3846);
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

 // https://www.ietf.org/rfc/rfc3966.txt

/**
 * @param  {string} text - Phone URI (RFC 3966).
 * @return {object} `{ ?number, ?ext }`.
 */

function parseRFC3966(text) {
  var number;
  var ext; // Replace "tel:" with "tel=" for parsing convenience.

  text = text.replace(/^tel:/, 'tel=');

  for (var _iterator = _createForOfIteratorHelperLoose(text.split(';')), _step; !(_step = _iterator()).done;) {
    var part = _step.value;

    var _part$split = part.split('='),
        _part$split2 = _slicedToArray(_part$split, 2),
        name = _part$split2[0],
        value = _part$split2[1];

    switch (name) {
      case 'tel':
        number = value;
        break;

      case 'ext':
        ext = value;
        break;

      case 'phone-context':
        // Only "country contexts" are supported.
        // "Domain contexts" are ignored.
        if (value[0] === '+') {
          number = value + number;
        }

        break;
    }
  } // If the phone number is not viable, then abort.


  if (!(0,_isViablePhoneNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(number)) {
    return {};
  }

  var result = {
    number: number
  };

  if (ext) {
    result.ext = ext;
  }

  return result;
}
/**
 * @param  {object} - `{ ?number, ?extension }`.
 * @return {string} Phone URI (RFC 3966).
 */

function formatRFC3966(_ref) {
  var number = _ref.number,
      ext = _ref.ext;

  if (!number) {
    return '';
  }

  if (number[0] !== '+') {
    throw new Error("\"formatRFC3966()\" expects \"number\" to be in E.164 format.");
  }

  return "tel:".concat(number).concat(ext ? ';ext=' + ext : '');
}

/***/ }),

/***/ 3109:
/*!****************************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/applyInternationalSeparatorStyle.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ applyInternationalSeparatorStyle)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ 2976);
 // Removes brackets and replaces dashes with spaces.
//
// E.g. "(999) 111-22-33" -> "999 111 22 33"
//
// For some reason Google's metadata contains `<intlFormat/>`s with brackets and dashes.
// Meanwhile, there's no single opinion about using punctuation in international phone numbers.
//
// For example, Google's `<intlFormat/>` for USA is `+1 213-373-4253`.
// And here's a quote from WikiPedia's "North American Numbering Plan" page:
// https://en.wikipedia.org/wiki/North_American_Numbering_Plan
//
// "The country calling code for all countries participating in the NANP is 1.
// In international format, an NANP number should be listed as +1 301 555 01 00,
// where 301 is an area code (Maryland)."
//
// I personally prefer the international format without any punctuation.
// For example, brackets are remnants of the old age, meaning that the
// phone number part in brackets (so called "area code") can be omitted
// if dialing within the same "area".
// And hyphens were clearly introduced for splitting local numbers into memorizable groups.
// For example, remembering "5553535" is difficult but "555-35-35" is much simpler.
// Imagine a man taking a bus from home to work and seeing an ad with a phone number.
// He has a couple of seconds to memorize that number until it passes by.
// If it were spaces instead of hyphens the man wouldn't necessarily get it,
// but with hyphens instead of spaces the grouping is more explicit.
// I personally think that hyphens introduce visual clutter,
// so I prefer replacing them with spaces in international numbers.
// In the modern age all output is done on displays where spaces are clearly distinguishable
// so hyphens can be safely replaced with spaces without losing any legibility.
//

function applyInternationalSeparatorStyle(formattedNumber) {
  return formattedNumber.replace(new RegExp("[".concat(_constants_js__WEBPACK_IMPORTED_MODULE_0__.VALID_PUNCTUATION, "]+"), 'g'), ' ').trim();
}

/***/ }),

/***/ 6601:
/*!*************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/checkNumberLength.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkNumberLengthForType": () => (/* binding */ checkNumberLengthForType),
/* harmony export */   "default": () => (/* binding */ checkNumberLength)
/* harmony export */ });
/* harmony import */ var _mergeArrays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeArrays.js */ 943);

function checkNumberLength(nationalNumber, metadata) {
  return checkNumberLengthForType(nationalNumber, undefined, metadata);
} // Checks whether a number is possible for the country based on its length.
// Should only be called for the "new" metadata which has "possible lengths".

function checkNumberLengthForType(nationalNumber, type, metadata) {
  var type_info = metadata.type(type); // There should always be "<possiblePengths/>" set for every type element.
  // This is declared in the XML schema.
  // For size efficiency, where a sub-description (e.g. fixed-line)
  // has the same "<possiblePengths/>" as the "general description", this is missing,
  // so we fall back to the "general description". Where no numbers of the type
  // exist at all, there is one possible length (-1) which is guaranteed
  // not to match the length of any real phone number.

  var possible_lengths = type_info && type_info.possibleLengths() || metadata.possibleLengths(); // let local_lengths    = type_info && type.possibleLengthsLocal() || metadata.possibleLengthsLocal()
  // Metadata before version `1.0.18` didn't contain `possible_lengths`.

  if (!possible_lengths) {
    return 'IS_POSSIBLE';
  }

  if (type === 'FIXED_LINE_OR_MOBILE') {
    // No such country in metadata.

    /* istanbul ignore next */
    if (!metadata.type('FIXED_LINE')) {
      // The rare case has been encountered where no fixedLine data is available
      // (true for some non-geographic entities), so we just check mobile.
      return checkNumberLengthForType(nationalNumber, 'MOBILE', metadata);
    }

    var mobile_type = metadata.type('MOBILE');

    if (mobile_type) {
      // Merge the mobile data in if there was any. "Concat" creates a new
      // array, it doesn't edit possible_lengths in place, so we don't need a copy.
      // Note that when adding the possible lengths from mobile, we have
      // to again check they aren't empty since if they are this indicates
      // they are the same as the general desc and should be obtained from there.
      possible_lengths = (0,_mergeArrays_js__WEBPACK_IMPORTED_MODULE_0__["default"])(possible_lengths, mobile_type.possibleLengths()); // The current list is sorted; we need to merge in the new list and
      // re-sort (duplicates are okay). Sorting isn't so expensive because
      // the lists are very small.
      // if (local_lengths) {
      // 	local_lengths = mergeArrays(local_lengths, mobile_type.possibleLengthsLocal())
      // } else {
      // 	local_lengths = mobile_type.possibleLengthsLocal()
      // }
    }
  } // If the type doesn't exist then return 'INVALID_LENGTH'.
  else if (type && !type_info) {
    return 'INVALID_LENGTH';
  }

  var actual_length = nationalNumber.length; // In `libphonenumber-js` all "local-only" formats are dropped for simplicity.
  // // This is safe because there is never an overlap beween the possible lengths
  // // and the local-only lengths; this is checked at build time.
  // if (local_lengths && local_lengths.indexOf(nationalNumber.length) >= 0)
  // {
  // 	return 'IS_POSSIBLE_LOCAL_ONLY'
  // }

  var minimum_length = possible_lengths[0];

  if (minimum_length === actual_length) {
    return 'IS_POSSIBLE';
  }

  if (minimum_length > actual_length) {
    return 'TOO_SHORT';
  }

  if (possible_lengths[possible_lengths.length - 1] < actual_length) {
    return 'TOO_LONG';
  } // We skip the first element since we've already checked it.


  return possible_lengths.indexOf(actual_length, 1) >= 0 ? 'IS_POSSIBLE' : 'INVALID_LENGTH';
}

/***/ }),

/***/ 9112:
/*!****************************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/extension/createExtensionPattern.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createExtensionPattern)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants.js */ 2976);
 // The RFC 3966 format for extensions.

var RFC3966_EXTN_PREFIX = ';ext=';
/**
 * Helper method for constructing regular expressions for parsing. Creates
 * an expression that captures up to max_length digits.
 * @return {string} RegEx pattern to capture extension digits.
 */

var getExtensionDigitsPattern = function getExtensionDigitsPattern(maxLength) {
  return "([".concat(_constants_js__WEBPACK_IMPORTED_MODULE_0__.VALID_DIGITS, "]{1,").concat(maxLength, "})");
};
/**
 * Helper initialiser method to create the regular-expression pattern to match
 * extensions.
 * Copy-pasted from Google's `libphonenumber`:
 * https://github.com/google/libphonenumber/blob/55b2646ec9393f4d3d6661b9c82ef9e258e8b829/javascript/i18n/phonenumbers/phonenumberutil.js#L759-L766
 * @return {string} RegEx pattern to capture extensions.
 */


function createExtensionPattern(purpose) {
  // We cap the maximum length of an extension based on the ambiguity of the way
  // the extension is prefixed. As per ITU, the officially allowed length for
  // extensions is actually 40, but we don't support this since we haven't seen real
  // examples and this introduces many false interpretations as the extension labels
  // are not standardized.

  /** @type {string} */
  var extLimitAfterExplicitLabel = '20';
  /** @type {string} */

  var extLimitAfterLikelyLabel = '15';
  /** @type {string} */

  var extLimitAfterAmbiguousChar = '9';
  /** @type {string} */

  var extLimitWhenNotSure = '6';
  /** @type {string} */

  var possibleSeparatorsBetweenNumberAndExtLabel = "[ \xA0\\t,]*"; // Optional full stop (.) or colon, followed by zero or more spaces/tabs/commas.

  /** @type {string} */

  var possibleCharsAfterExtLabel = "[:\\.\uFF0E]?[ \xA0\\t,-]*";
  /** @type {string} */

  var optionalExtnSuffix = "#?"; // Here the extension is called out in more explicit way, i.e mentioning it obvious
  // patterns like "ext.".

  /** @type {string} */

  var explicitExtLabels = "(?:e?xt(?:ensi(?:o\u0301?|\xF3))?n?|\uFF45?\uFF58\uFF54\uFF4E?|\u0434\u043E\u0431|anexo)"; // One-character symbols that can be used to indicate an extension, and less
  // commonly used or more ambiguous extension labels.

  /** @type {string} */

  var ambiguousExtLabels = "(?:[x\uFF58#\uFF03~\uFF5E]|int|\uFF49\uFF4E\uFF54)"; // When extension is not separated clearly.

  /** @type {string} */

  var ambiguousSeparator = "[- ]+"; // This is the same as possibleSeparatorsBetweenNumberAndExtLabel, but not matching
  // comma as extension label may have it.

  /** @type {string} */

  var possibleSeparatorsNumberExtLabelNoComma = "[ \xA0\\t]*"; // ",," is commonly used for auto dialling the extension when connected. First
  // comma is matched through possibleSeparatorsBetweenNumberAndExtLabel, so we do
  // not repeat it here. Semi-colon works in Iphone and Android also to pop up a
  // button with the extension number following.

  /** @type {string} */

  var autoDiallingAndExtLabelsFound = "(?:,{2}|;)";
  /** @type {string} */

  var rfcExtn = RFC3966_EXTN_PREFIX + getExtensionDigitsPattern(extLimitAfterExplicitLabel);
  /** @type {string} */

  var explicitExtn = possibleSeparatorsBetweenNumberAndExtLabel + explicitExtLabels + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterExplicitLabel) + optionalExtnSuffix;
  /** @type {string} */

  var ambiguousExtn = possibleSeparatorsBetweenNumberAndExtLabel + ambiguousExtLabels + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterAmbiguousChar) + optionalExtnSuffix;
  /** @type {string} */

  var americanStyleExtnWithSuffix = ambiguousSeparator + getExtensionDigitsPattern(extLimitWhenNotSure) + "#";
  /** @type {string} */

  var autoDiallingExtn = possibleSeparatorsNumberExtLabelNoComma + autoDiallingAndExtLabelsFound + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterLikelyLabel) + optionalExtnSuffix;
  /** @type {string} */

  var onlyCommasExtn = possibleSeparatorsNumberExtLabelNoComma + "(?:,)+" + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterAmbiguousChar) + optionalExtnSuffix; // The first regular expression covers RFC 3966 format, where the extension is added
  // using ";ext=". The second more generic where extension is mentioned with explicit
  // labels like "ext:". In both the above cases we allow more numbers in extension than
  // any other extension labels. The third one captures when single character extension
  // labels or less commonly used labels are used. In such cases we capture fewer
  // extension digits in order to reduce the chance of falsely interpreting two
  // numbers beside each other as a number + extension. The fourth one covers the
  // special case of American numbers where the extension is written with a hash
  // at the end, such as "- 503#". The fifth one is exclusively for extension
  // autodialling formats which are used when dialling and in this case we accept longer
  // extensions. The last one is more liberal on the number of commas that acts as
  // extension labels, so we have a strict cap on the number of digits in such extensions.

  return rfcExtn + "|" + explicitExtn + "|" + ambiguousExtn + "|" + americanStyleExtnWithSuffix + "|" + autoDiallingExtn + "|" + onlyCommasExtn;
}

/***/ }),

/***/ 930:
/*!**********************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/extension/extractExtension.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ extractExtension)
/* harmony export */ });
/* harmony import */ var _createExtensionPattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createExtensionPattern.js */ 9112);
 // Regexp of all known extension prefixes used by different regions followed by
// 1 or more valid digits, for use when parsing.

var EXTN_PATTERN = new RegExp('(?:' + (0,_createExtensionPattern_js__WEBPACK_IMPORTED_MODULE_0__["default"])() + ')$', 'i'); // Strips any extension (as in, the part of the number dialled after the call is
// connected, usually indicated with extn, ext, x or similar) from the end of
// the number, and returns it.

function extractExtension(number) {
  var start = number.search(EXTN_PATTERN);

  if (start < 0) {
    return {};
  } // If we find a potential extension, and the number preceding this is a viable
  // number, we assume it is an extension.


  var numberWithoutExtension = number.slice(0, start);
  var matches = number.match(EXTN_PATTERN);
  var i = 1;

  while (i < matches.length) {
    if (matches[i]) {
      return {
        number: numberWithoutExtension,
        ext: matches[i]
      };
    }

    i++;
  }
}

/***/ }),

/***/ 1378:
/*!*********************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCode.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ extractCountryCallingCode)
/* harmony export */ });
/* harmony import */ var _stripIddPrefix_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stripIddPrefix.js */ 4634);
/* harmony import */ var _extractCountryCallingCodeFromInternationalNumberWithoutPlusSign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extractCountryCallingCodeFromInternationalNumberWithoutPlusSign.js */ 52);
/* harmony import */ var _metadata_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../metadata.js */ 7211);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ 2976);




/**
 * Converts a phone number digits (possibly with a `+`)
 * into a calling code and the rest phone number digits.
 * The "rest phone number digits" could include
 * a national prefix, carrier code, and national
 * (significant) number.
 * @param  {string} number — Phone number digits (possibly with a `+`).
 * @param  {string} [country] — Default country.
 * @param  {string} [callingCode] — Default calling code (some phone numbering plans are non-geographic).
 * @param  {object} metadata
 * @return {object} `{ countryCallingCode: string?, number: string }`
 * @example
 * // Returns `{ countryCallingCode: "1", number: "2133734253" }`.
 * extractCountryCallingCode('2133734253', 'US', null, metadata)
 * extractCountryCallingCode('2133734253', null, '1', metadata)
 * extractCountryCallingCode('+12133734253', null, null, metadata)
 * extractCountryCallingCode('+12133734253', 'RU', null, metadata)
 */

function extractCountryCallingCode(number, country, callingCode, metadata) {
  if (!number) {
    return {};
  } // If this is not an international phone number,
  // then either extract an "IDD" prefix, or extract a
  // country calling code from a number by autocorrecting it
  // by prepending a leading `+` in cases when it starts
  // with the country calling code.
  // https://wikitravel.org/en/International_dialling_prefix
  // https://github.com/catamphetamine/libphonenumber-js/issues/376


  if (number[0] !== '+') {
    // Convert an "out-of-country" dialing phone number
    // to a proper international phone number.
    var numberWithoutIDD = (0,_stripIddPrefix_js__WEBPACK_IMPORTED_MODULE_0__["default"])(number, country, callingCode, metadata); // If an IDD prefix was stripped then
    // convert the number to international one
    // for subsequent parsing.

    if (numberWithoutIDD && numberWithoutIDD !== number) {
      number = '+' + numberWithoutIDD;
    } else {
      // Check to see if the number starts with the country calling code
      // for the default country. If so, we remove the country calling code,
      // and do some checks on the validity of the number before and after.
      // https://github.com/catamphetamine/libphonenumber-js/issues/376
      if (country || callingCode) {
        var _extractCountryCallin = (0,_extractCountryCallingCodeFromInternationalNumberWithoutPlusSign_js__WEBPACK_IMPORTED_MODULE_1__["default"])(number, country, callingCode, metadata),
            countryCallingCode = _extractCountryCallin.countryCallingCode,
            shorterNumber = _extractCountryCallin.number;

        if (countryCallingCode) {
          return {
            countryCallingCode: countryCallingCode,
            number: shorterNumber
          };
        }
      }

      return {
        number: number
      };
    }
  } // Fast abortion: country codes do not begin with a '0'


  if (number[1] === '0') {
    return {};
  }

  metadata = new _metadata_js__WEBPACK_IMPORTED_MODULE_2__["default"](metadata); // The thing with country phone codes
  // is that they are orthogonal to each other
  // i.e. there's no such country phone code A
  // for which country phone code B exists
  // where B starts with A.
  // Therefore, while scanning digits,
  // if a valid country code is found,
  // that means that it is the country code.
  //

  var i = 2;

  while (i - 1 <= _constants_js__WEBPACK_IMPORTED_MODULE_3__.MAX_LENGTH_COUNTRY_CODE && i <= number.length) {
    var _countryCallingCode = number.slice(1, i);

    if (metadata.hasCallingCode(_countryCallingCode)) {
      metadata.selectNumberingPlan(_countryCallingCode);
      return {
        countryCallingCode: _countryCallingCode,
        number: number.slice(i)
      };
    }

    i++;
  }

  return {};
}

/***/ }),

/***/ 52:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCodeFromInternationalNumberWithoutPlusSign.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ extractCountryCallingCodeFromInternationalNumberWithoutPlusSign)
/* harmony export */ });
/* harmony import */ var _getCountryCallingCode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getCountryCallingCode.js */ 7211);
/* harmony import */ var _matchesEntirely_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matchesEntirely.js */ 6188);
/* harmony import */ var _extractNationalNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extractNationalNumber.js */ 9159);
/* harmony import */ var _checkNumberLength_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkNumberLength.js */ 6601);





/**
 * Sometimes some people incorrectly input international phone numbers
 * without the leading `+`. This function corrects such input.
 * @param  {string} number — Phone number digits.
 * @param  {string?} country
 * @param  {string?} callingCode
 * @param  {object} metadata
 * @return {object} `{ countryCallingCode: string?, number: string }`.
 */

function extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(number, country, callingCode, metadata) {
  var countryCallingCode = country ? (0,_getCountryCallingCode_js__WEBPACK_IMPORTED_MODULE_0__.getCountryCallingCode)(country, metadata) : callingCode;

  if (number.indexOf(countryCallingCode) === 0) {
    metadata = new _getCountryCallingCode_js__WEBPACK_IMPORTED_MODULE_0__["default"](metadata);
    metadata.selectNumberingPlan(country, callingCode);
    var possibleShorterNumber = number.slice(countryCallingCode.length);

    var _extractNationalNumbe = (0,_extractNationalNumber_js__WEBPACK_IMPORTED_MODULE_1__["default"])(possibleShorterNumber, metadata),
        possibleShorterNationalNumber = _extractNationalNumbe.nationalNumber;

    var _extractNationalNumbe2 = (0,_extractNationalNumber_js__WEBPACK_IMPORTED_MODULE_1__["default"])(number, metadata),
        nationalNumber = _extractNationalNumbe2.nationalNumber; // If the number was not valid before but is valid now,
    // or if it was too long before, we consider the number
    // with the country calling code stripped to be a better result
    // and keep that instead.
    // For example, in Germany (+49), `49` is a valid area code,
    // so if a number starts with `49`, it could be both a valid
    // national German number or an international number without
    // a leading `+`.


    if (!(0,_matchesEntirely_js__WEBPACK_IMPORTED_MODULE_2__["default"])(nationalNumber, metadata.nationalNumberPattern()) && (0,_matchesEntirely_js__WEBPACK_IMPORTED_MODULE_2__["default"])(possibleShorterNationalNumber, metadata.nationalNumberPattern()) || (0,_checkNumberLength_js__WEBPACK_IMPORTED_MODULE_3__["default"])(nationalNumber, metadata) === 'TOO_LONG') {
      return {
        countryCallingCode: countryCallingCode,
        number: possibleShorterNumber
      };
    }
  }

  return {
    number: number
  };
}

/***/ }),

/***/ 9159:
/*!*****************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/extractNationalNumber.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ extractNationalNumber)
/* harmony export */ });
/* harmony import */ var _extractNationalNumberFromPossiblyIncompleteNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extractNationalNumberFromPossiblyIncompleteNumber.js */ 1707);
/* harmony import */ var _matchesEntirely_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matchesEntirely.js */ 6188);
/* harmony import */ var _checkNumberLength_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkNumberLength.js */ 6601);



/**
 * Strips national prefix and carrier code from a complete phone number.
 * The difference from the non-"FromCompleteNumber" function is that
 * it won't extract national prefix if the resultant number is too short
 * to be a complete number for the selected phone numbering plan.
 * @param  {string} number — Complete phone number digits.
 * @param  {Metadata} metadata — Metadata with a phone numbering plan selected.
 * @return {object} `{ nationalNumber: string, carrierCode: string? }`.
 */

function extractNationalNumber(number, metadata) {
  // Parsing national prefixes and carrier codes
  // is only required for local phone numbers
  // but some people don't understand that
  // and sometimes write international phone numbers
  // with national prefixes (or maybe even carrier codes).
  // http://ucken.blogspot.ru/2016/03/trunk-prefixes-in-skype4b.html
  // Google's original library forgives such mistakes
  // and so does this library, because it has been requested:
  // https://github.com/catamphetamine/libphonenumber-js/issues/127
  var _extractNationalNumbe = (0,_extractNationalNumberFromPossiblyIncompleteNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(number, metadata),
      carrierCode = _extractNationalNumbe.carrierCode,
      nationalNumber = _extractNationalNumbe.nationalNumber;

  if (nationalNumber !== number) {
    if (!shouldHaveExtractedNationalPrefix(number, nationalNumber, metadata)) {
      // Don't strip the national prefix.
      return {
        nationalNumber: number
      };
    } // Check the national (significant) number length after extracting national prefix and carrier code.
    // Legacy generated metadata (before `1.0.18`) didn't support the "possible lengths" feature.


    if (metadata.possibleLengths()) {
      // The number remaining after stripping the national prefix and carrier code
      // should be long enough to have a possible length for the country.
      // Otherwise, don't strip the national prefix and carrier code,
      // since the original number could be a valid number.
      // This check has been copy-pasted "as is" from Google's original library:
      // https://github.com/google/libphonenumber/blob/876268eb1ad6cdc1b7b5bef17fc5e43052702d57/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberUtil.java#L3236-L3250
      // It doesn't check for the "possibility" of the original `number`.
      // I guess it's fine not checking that one. It works as is anyway.
      if (!isPossibleIncompleteNationalNumber(nationalNumber, metadata)) {
        // Don't strip the national prefix.
        return {
          nationalNumber: number
        };
      }
    }
  }

  return {
    nationalNumber: nationalNumber,
    carrierCode: carrierCode
  };
} // In some countries, the same digit could be a national prefix
// or a leading digit of a valid phone number.
// For example, in Russia, national prefix is `8`,
// and also `800 555 35 35` is a valid number
// in which `8` is not a national prefix, but the first digit
// of a national (significant) number.
// Same's with Belarus:
// `82004910060` is a valid national (significant) number,
// but `2004910060` is not.
// To support such cases (to prevent the code from always stripping
// national prefix), a condition is imposed: a national prefix
// is not extracted when the original number is "viable" and the
// resultant number is not, a "viable" national number being the one
// that matches `national_number_pattern`.

function shouldHaveExtractedNationalPrefix(nationalNumberBefore, nationalNumberAfter, metadata) {
  // The equivalent in Google's code is:
  // https://github.com/google/libphonenumber/blob/e326fa1fc4283bb05eb35cb3c15c18f98a31af33/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberUtil.java#L2969-L3004
  if ((0,_matchesEntirely_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nationalNumberBefore, metadata.nationalNumberPattern()) && !(0,_matchesEntirely_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nationalNumberAfter, metadata.nationalNumberPattern())) {
    return false;
  } // This "is possible" national number (length) check has been commented out
  // because it's superceded by the (effectively) same check done in the
  // `extractNationalNumber()` function after it calls `shouldHaveExtractedNationalPrefix()`.
  // In other words, why run the same check twice if it could only be run once.
  // // Check the national (significant) number length after extracting national prefix and carrier code.
  // // Fixes a minor "weird behavior" bug: https://gitlab.com/catamphetamine/libphonenumber-js/-/issues/57
  // // (Legacy generated metadata (before `1.0.18`) didn't support the "possible lengths" feature).
  // if (metadata.possibleLengths()) {
  // 	if (isPossibleIncompleteNationalNumber(nationalNumberBefore, metadata) &&
  // 		!isPossibleIncompleteNationalNumber(nationalNumberAfter, metadata)) {
  // 		return false
  // 	}
  // }


  return true;
}

function isPossibleIncompleteNationalNumber(nationalNumber, metadata) {
  switch ((0,_checkNumberLength_js__WEBPACK_IMPORTED_MODULE_2__["default"])(nationalNumber, metadata)) {
    case 'TOO_SHORT':
    case 'INVALID_LENGTH':
      // This library ignores "local-only" phone numbers (for simplicity).
      // See the readme for more info on what are "local-only" phone numbers.
      // case 'IS_POSSIBLE_LOCAL_ONLY':
      return false;

    default:
      return true;
  }
}

/***/ }),

/***/ 1707:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/extractNationalNumberFromPossiblyIncompleteNumber.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ extractNationalNumberFromPossiblyIncompleteNumber)
/* harmony export */ });
/**
 * Strips any national prefix (such as 0, 1) present in a
 * (possibly incomplete) number provided.
 * "Carrier codes" are only used  in Colombia and Brazil,
 * and only when dialing within those countries from a mobile phone to a fixed line number.
 * Sometimes it won't actually strip national prefix
 * and will instead prepend some digits to the `number`:
 * for example, when number `2345678` is passed with `VI` country selected,
 * it will return `{ number: "3402345678" }`, because `340` area code is prepended.
 * @param {string} number — National number digits.
 * @param {object} metadata — Metadata with country selected.
 * @return {object} `{ nationalNumber: string, nationalPrefix: string? carrierCode: string? }`. Even if a national prefix was extracted, it's not necessarily present in the returned object, so don't rely on its presence in the returned object in order to find out whether a national prefix has been extracted or not.
 */
function extractNationalNumberFromPossiblyIncompleteNumber(number, metadata) {
  if (number && metadata.numberingPlan.nationalPrefixForParsing()) {
    // See METADATA.md for the description of
    // `national_prefix_for_parsing` and `national_prefix_transform_rule`.
    // Attempt to parse the first digits as a national prefix.
    var prefixPattern = new RegExp('^(?:' + metadata.numberingPlan.nationalPrefixForParsing() + ')');
    var prefixMatch = prefixPattern.exec(number);

    if (prefixMatch) {
      var nationalNumber;
      var carrierCode; // https://gitlab.com/catamphetamine/libphonenumber-js/-/blob/master/METADATA.md#national_prefix_for_parsing--national_prefix_transform_rule
      // If a `national_prefix_for_parsing` has any "capturing groups"
      // then it means that the national (significant) number is equal to
      // those "capturing groups" transformed via `national_prefix_transform_rule`,
      // and nothing could be said about the actual national prefix:
      // what is it and was it even there.
      // If a `national_prefix_for_parsing` doesn't have any "capturing groups",
      // then everything it matches is a national prefix.
      // To determine whether `national_prefix_for_parsing` matched any
      // "capturing groups", the value of the result of calling `.exec()`
      // is looked at, and if it has non-undefined values where there're
      // "capturing groups" in the regular expression, then it means
      // that "capturing groups" have been matched.
      // It's not possible to tell whether there'll be any "capturing gropus"
      // before the matching process, because a `national_prefix_for_parsing`
      // could exhibit both behaviors.

      var capturedGroupsCount = prefixMatch.length - 1;
      var hasCapturedGroups = capturedGroupsCount > 0 && prefixMatch[capturedGroupsCount];

      if (metadata.nationalPrefixTransformRule() && hasCapturedGroups) {
        nationalNumber = number.replace(prefixPattern, metadata.nationalPrefixTransformRule()); // If there's more than one captured group,
        // then carrier code is the second one.

        if (capturedGroupsCount > 1) {
          carrierCode = prefixMatch[1];
        }
      } // If there're no "capturing groups",
      // or if there're "capturing groups" but no
      // `national_prefix_transform_rule`,
      // then just strip the national prefix from the number,
      // and possibly a carrier code.
      // Seems like there could be more.
      else {
        // `prefixBeforeNationalNumber` is the whole substring matched by
        // the `national_prefix_for_parsing` regular expression.
        // There seem to be no guarantees that it's just a national prefix.
        // For example, if there's a carrier code, it's gonna be a
        // part of `prefixBeforeNationalNumber` too.
        var prefixBeforeNationalNumber = prefixMatch[0];
        nationalNumber = number.slice(prefixBeforeNationalNumber.length); // If there's at least one captured group,
        // then carrier code is the first one.

        if (hasCapturedGroups) {
          carrierCode = prefixMatch[1];
        }
      } // Tries to guess whether a national prefix was present in the input.
      // This is not something copy-pasted from Google's library:
      // they don't seem to have an equivalent for that.
      // So this isn't an "officially approved" way of doing something like that.
      // But since there seems no other existing method, this library uses it.


      var nationalPrefix;

      if (hasCapturedGroups) {
        var possiblePositionOfTheFirstCapturedGroup = number.indexOf(prefixMatch[1]);
        var possibleNationalPrefix = number.slice(0, possiblePositionOfTheFirstCapturedGroup); // Example: an Argentinian (AR) phone number `0111523456789`.
        // `prefixMatch[0]` is `01115`, and `$1` is `11`,
        // and the rest of the phone number is `23456789`.
        // The national number is transformed via `9$1` to `91123456789`.
        // National prefix `0` is detected being present at the start.
        // if (possibleNationalPrefix.indexOf(metadata.numberingPlan.nationalPrefix()) === 0) {

        if (possibleNationalPrefix === metadata.numberingPlan.nationalPrefix()) {
          nationalPrefix = metadata.numberingPlan.nationalPrefix();
        }
      } else {
        nationalPrefix = prefixMatch[0];
      }

      return {
        nationalNumber: nationalNumber,
        nationalPrefix: nationalPrefix,
        carrierCode: carrierCode
      };
    }
  }

  return {
    nationalNumber: number
  };
}

/***/ }),

/***/ 5897:
/*!***************************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/formatNationalNumberUsingFormat.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FIRST_GROUP_PATTERN": () => (/* binding */ FIRST_GROUP_PATTERN),
/* harmony export */   "default": () => (/* binding */ formatNationalNumberUsingFormat)
/* harmony export */ });
/* harmony import */ var _applyInternationalSeparatorStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyInternationalSeparatorStyle.js */ 3109);
 // This was originally set to $1 but there are some countries for which the
// first group is not used in the national pattern (e.g. Argentina) so the $1
// group does not match correctly. Therefore, we use `\d`, so that the first
// group actually used in the pattern will be matched.

var FIRST_GROUP_PATTERN = /(\$\d)/;
function formatNationalNumberUsingFormat(number, format, _ref) {
  var useInternationalFormat = _ref.useInternationalFormat,
      withNationalPrefix = _ref.withNationalPrefix,
      carrierCode = _ref.carrierCode,
      metadata = _ref.metadata;
  var formattedNumber = number.replace(new RegExp(format.pattern()), useInternationalFormat ? format.internationalFormat() : // This library doesn't use `domestic_carrier_code_formatting_rule`,
  // because that one is only used when formatting phone numbers
  // for dialing from a mobile phone, and this is not a dialing library.
  // carrierCode && format.domesticCarrierCodeFormattingRule()
  // 	// First, replace the $CC in the formatting rule with the desired carrier code.
  // 	// Then, replace the $FG in the formatting rule with the first group
  // 	// and the carrier code combined in the appropriate way.
  // 	? format.format().replace(FIRST_GROUP_PATTERN, format.domesticCarrierCodeFormattingRule().replace('$CC', carrierCode))
  // 	: (
  // 		withNationalPrefix && format.nationalPrefixFormattingRule()
  // 			? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule())
  // 			: format.format()
  // 	)
  withNationalPrefix && format.nationalPrefixFormattingRule() ? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule()) : format.format());

  if (useInternationalFormat) {
    return (0,_applyInternationalSeparatorStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(formattedNumber);
  }

  return formattedNumber;
}

/***/ }),

/***/ 6269:
/*!*******************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/getCountryByCallingCode.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCountryByCallingCode)
/* harmony export */ });
/* harmony import */ var _metadata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../metadata.js */ 7211);
/* harmony import */ var _getNumberType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNumberType.js */ 2328);
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}



var USE_NON_GEOGRAPHIC_COUNTRY_CODE = false;
function getCountryByCallingCode(callingCode, nationalPhoneNumber, metadata) {
  /* istanbul ignore if */
  if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
    if (metadata.isNonGeographicCallingCode(callingCode)) {
      return '001';
    }
  } // Is always non-empty, because `callingCode` is always valid


  var possibleCountries = metadata.getCountryCodesForCallingCode(callingCode);

  if (!possibleCountries) {
    return;
  } // If there's just one country corresponding to the country code,
  // then just return it, without further phone number digits validation.


  if (possibleCountries.length === 1) {
    return possibleCountries[0];
  }

  return selectCountryFromList(possibleCountries, nationalPhoneNumber, metadata.metadata);
}

function selectCountryFromList(possibleCountries, nationalPhoneNumber, metadata) {
  // Re-create `metadata` because it will be selecting a `country`.
  metadata = new _metadata_js__WEBPACK_IMPORTED_MODULE_0__["default"](metadata);

  for (var _iterator = _createForOfIteratorHelperLoose(possibleCountries), _step; !(_step = _iterator()).done;) {
    var country = _step.value;
    metadata.country(country); // Leading digits check would be the simplest and fastest one.
    // Leading digits patterns are only defined for about 20% of all countries.
    // https://gitlab.com/catamphetamine/libphonenumber-js/blob/master/METADATA.md#leading_digits
    // Matching "leading digits" is a sufficient but not necessary condition.

    if (metadata.leadingDigits()) {
      if (nationalPhoneNumber && nationalPhoneNumber.search(metadata.leadingDigits()) === 0) {
        return country;
      }
    } // Else perform full validation with all of those
    // fixed-line/mobile/etc regular expressions.
    else if ((0,_getNumberType_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      phone: nationalPhoneNumber,
      country: country
    }, undefined, metadata.metadata)) {
      return country;
    }
  }
}

/***/ }),

/***/ 4938:
/*!********************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/getIddPrefix.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getIddPrefix)
/* harmony export */ });
/* harmony import */ var _metadata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../metadata.js */ 7211);

/**
 * Pattern that makes it easy to distinguish whether a region has a single
 * international dialing prefix or not. If a region has a single international
 * prefix (e.g. 011 in USA), it will be represented as a string that contains
 * a sequence of ASCII digits, and possibly a tilde, which signals waiting for
 * the tone. If there are multiple available international prefixes in a
 * region, they will be represented as a regex string that always contains one
 * or more characters that are not ASCII digits or a tilde.
 */

var SINGLE_IDD_PREFIX_REG_EXP = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/; // For regions that have multiple IDD prefixes
// a preferred IDD prefix is returned.

function getIddPrefix(country, callingCode, metadata) {
  var countryMetadata = new _metadata_js__WEBPACK_IMPORTED_MODULE_0__["default"](metadata);
  countryMetadata.selectNumberingPlan(country, callingCode);

  if (countryMetadata.defaultIDDPrefix()) {
    return countryMetadata.defaultIDDPrefix();
  }

  if (SINGLE_IDD_PREFIX_REG_EXP.test(countryMetadata.IDDPrefix())) {
    return countryMetadata.IDDPrefix();
  }
}

/***/ }),

/***/ 2328:
/*!*********************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/getNumberType.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNumberType),
/* harmony export */   "isNumberTypeEqualTo": () => (/* binding */ isNumberTypeEqualTo)
/* harmony export */ });
/* harmony import */ var _metadata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../metadata.js */ 7211);
/* harmony import */ var _matchesEntirely_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matchesEntirely.js */ 6188);
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}



var NON_FIXED_LINE_PHONE_TYPES = ['MOBILE', 'PREMIUM_RATE', 'TOLL_FREE', 'SHARED_COST', 'VOIP', 'PERSONAL_NUMBER', 'PAGER', 'UAN', 'VOICEMAIL']; // Finds out national phone number type (fixed line, mobile, etc)

function getNumberType(input, options, metadata) {
  // If assigning the `{}` default value is moved to the arguments above,
  // code coverage would decrease for some weird reason.
  options = options || {}; // When `parse()` returned `{}`
  // meaning that the phone number is not a valid one.

  if (!input.country) {
    return;
  }

  metadata = new _metadata_js__WEBPACK_IMPORTED_MODULE_0__["default"](metadata);
  metadata.selectNumberingPlan(input.country, input.countryCallingCode);
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone; // The following is copy-pasted from the original function:
  // https://github.com/googlei18n/libphonenumber/blob/3ea547d4fbaa2d0b67588904dfa5d3f2557c27ff/javascript/i18n/phonenumbers/phonenumberutil.js#L2835
  // Is this national number even valid for this country

  if (!(0,_matchesEntirely_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nationalNumber, metadata.nationalNumberPattern())) {
    return;
  } // Is it fixed line number


  if (isNumberTypeEqualTo(nationalNumber, 'FIXED_LINE', metadata)) {
    // Because duplicate regular expressions are removed
    // to reduce metadata size, if "mobile" pattern is ""
    // then it means it was removed due to being a duplicate of the fixed-line pattern.
    //
    if (metadata.type('MOBILE') && metadata.type('MOBILE').pattern() === '') {
      return 'FIXED_LINE_OR_MOBILE';
    } // `MOBILE` type pattern isn't included if it matched `FIXED_LINE` one.
    // For example, for "US" country.
    // Old metadata (< `1.0.18`) had a specific "types" data structure
    // that happened to be `undefined` for `MOBILE` in that case.
    // Newer metadata (>= `1.0.18`) has another data structure that is
    // not `undefined` for `MOBILE` in that case (it's just an empty array).
    // So this `if` is just for backwards compatibility with old metadata.


    if (!metadata.type('MOBILE')) {
      return 'FIXED_LINE_OR_MOBILE';
    } // Check if the number happens to qualify as both fixed line and mobile.
    // (no such country in the minimal metadata set)

    /* istanbul ignore if */


    if (isNumberTypeEqualTo(nationalNumber, 'MOBILE', metadata)) {
      return 'FIXED_LINE_OR_MOBILE';
    }

    return 'FIXED_LINE';
  }

  for (var _iterator = _createForOfIteratorHelperLoose(NON_FIXED_LINE_PHONE_TYPES), _step; !(_step = _iterator()).done;) {
    var type = _step.value;

    if (isNumberTypeEqualTo(nationalNumber, type, metadata)) {
      return type;
    }
  }
}
function isNumberTypeEqualTo(nationalNumber, type, metadata) {
  type = metadata.type(type);

  if (!type || !type.pattern()) {
    return false;
  } // Check if any possible number lengths are present;
  // if so, we use them to avoid checking
  // the validation pattern if they don't match.
  // If they are absent, this means they match
  // the general description, which we have
  // already checked before a specific number type.


  if (type.possibleLengths() && type.possibleLengths().indexOf(nationalNumber.length) < 0) {
    return false;
  }

  return (0,_matchesEntirely_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nationalNumber, type.pattern());
}

/***/ }),

/***/ 3846:
/*!***************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/isViablePhoneNumber.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VALID_PHONE_NUMBER": () => (/* binding */ VALID_PHONE_NUMBER),
/* harmony export */   "VALID_PHONE_NUMBER_WITH_EXTENSION": () => (/* binding */ VALID_PHONE_NUMBER_WITH_EXTENSION),
/* harmony export */   "default": () => (/* binding */ isViablePhoneNumber),
/* harmony export */   "isViablePhoneNumberStart": () => (/* binding */ isViablePhoneNumberStart)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ 2976);
/* harmony import */ var _extension_createExtensionPattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extension/createExtensionPattern.js */ 9112);

 //  Regular expression of viable phone numbers. This is location independent.
//  Checks we have at least three leading digits, and only valid punctuation,
//  alpha characters and digits in the phone number. Does not include extension
//  data. The symbol 'x' is allowed here as valid punctuation since it is often
//  used as a placeholder for carrier codes, for example in Brazilian phone
//  numbers. We also allow multiple '+' characters at the start.
//
//  Corresponds to the following:
//  [digits]{minLengthNsn}|
//  plus_sign*
//  (([punctuation]|[star])*[digits]){3,}([punctuation]|[star]|[digits]|[alpha])*
//
//  The first reg-ex is to allow short numbers (two digits long) to be parsed if
//  they are entered as "15" etc, but only if there is no punctuation in them.
//  The second expression restricts the number of digits to three or more, but
//  then allows them to be in international form, and to have alpha-characters
//  and punctuation. We split up the two reg-exes here and combine them when
//  creating the reg-ex VALID_PHONE_NUMBER_PATTERN itself so we can prefix it
//  with ^ and append $ to each branch.
//
//  "Note VALID_PUNCTUATION starts with a -,
//   so must be the first in the range" (c) Google devs.
//  (wtf did they mean by saying that; probably nothing)
//

var MIN_LENGTH_PHONE_NUMBER_PATTERN = '[' + _constants_js__WEBPACK_IMPORTED_MODULE_0__.VALID_DIGITS + ']{' + _constants_js__WEBPACK_IMPORTED_MODULE_0__.MIN_LENGTH_FOR_NSN + '}'; //
// And this is the second reg-exp:
// (see MIN_LENGTH_PHONE_NUMBER_PATTERN for a full description of this reg-exp)
//

var VALID_PHONE_NUMBER = '[' + _constants_js__WEBPACK_IMPORTED_MODULE_0__.PLUS_CHARS + ']{0,1}' + '(?:' + '[' + _constants_js__WEBPACK_IMPORTED_MODULE_0__.VALID_PUNCTUATION + ']*' + '[' + _constants_js__WEBPACK_IMPORTED_MODULE_0__.VALID_DIGITS + ']' + '){3,}' + '[' + _constants_js__WEBPACK_IMPORTED_MODULE_0__.VALID_PUNCTUATION + _constants_js__WEBPACK_IMPORTED_MODULE_0__.VALID_DIGITS + ']*'; // This regular expression isn't present in Google's `libphonenumber`
// and is only used to determine whether the phone number being input
// is too short for it to even consider it a "valid" number.
// This is just a way to differentiate between a really invalid phone
// number like "abcde" and a valid phone number that a user has just
// started inputting, like "+1" or "1": both these cases would be
// considered `NOT_A_NUMBER` by Google's `libphonenumber`, but this
// library can provide a more detailed error message — whether it's
// really "not a number", or is it just a start of a valid phone number.

var VALID_PHONE_NUMBER_START_REG_EXP = new RegExp('^' + '[' + _constants_js__WEBPACK_IMPORTED_MODULE_0__.PLUS_CHARS + ']{0,1}' + '(?:' + '[' + _constants_js__WEBPACK_IMPORTED_MODULE_0__.VALID_PUNCTUATION + ']*' + '[' + _constants_js__WEBPACK_IMPORTED_MODULE_0__.VALID_DIGITS + ']' + '){1,2}' + '$', 'i');
var VALID_PHONE_NUMBER_WITH_EXTENSION = VALID_PHONE_NUMBER + // Phone number extensions
'(?:' + (0,_extension_createExtensionPattern_js__WEBPACK_IMPORTED_MODULE_1__["default"])() + ')?'; // The combined regular expression for valid phone numbers:
//

var VALID_PHONE_NUMBER_PATTERN = new RegExp( // Either a short two-digit-only phone number
'^' + MIN_LENGTH_PHONE_NUMBER_PATTERN + '$' + '|' + // Or a longer fully parsed phone number (min 3 characters)
'^' + VALID_PHONE_NUMBER_WITH_EXTENSION + '$', 'i'); // Checks to see if the string of characters could possibly be a phone number at
// all. At the moment, checks to see that the string begins with at least 2
// digits, ignoring any punctuation commonly found in phone numbers. This method
// does not require the number to be normalized in advance - but does assume
// that leading non-number symbols have been removed, such as by the method
// `extract_possible_number`.
//

function isViablePhoneNumber(number) {
  return number.length >= _constants_js__WEBPACK_IMPORTED_MODULE_0__.MIN_LENGTH_FOR_NSN && VALID_PHONE_NUMBER_PATTERN.test(number);
} // This is just a way to differentiate between a really invalid phone
// number like "abcde" and a valid phone number that a user has just
// started inputting, like "+1" or "1": both these cases would be
// considered `NOT_A_NUMBER` by Google's `libphonenumber`, but this
// library can provide a more detailed error message — whether it's
// really "not a number", or is it just a start of a valid phone number.

function isViablePhoneNumberStart(number) {
  return VALID_PHONE_NUMBER_START_REG_EXP.test(number);
}

/***/ }),

/***/ 6188:
/*!***********************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/matchesEntirely.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ matchesEntirely)
/* harmony export */ });
/**
 * Checks whether the entire input sequence can be matched
 * against the regular expression.
 * @return {boolean}
 */
function matchesEntirely(text, regular_expression) {
  // If assigning the `''` default value is moved to the arguments above,
  // code coverage would decrease for some weird reason.
  text = text || '';
  return new RegExp('^(?:' + regular_expression + ')$').test(text);
}

/***/ }),

/***/ 943:
/*!*******************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/mergeArrays.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeArrays)
/* harmony export */ });
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
/**
 * Merges two arrays.
 * @param  {*} a
 * @param  {*} b
 * @return {*}
 */


function mergeArrays(a, b) {
  var merged = a.slice();

  for (var _iterator = _createForOfIteratorHelperLoose(b), _step; !(_step = _iterator()).done;) {
    var element = _step.value;

    if (a.indexOf(element) < 0) {
      merged.push(element);
    }
  }

  return merged.sort(function (a, b) {
    return a - b;
  }); // ES6 version, requires Set polyfill.
  // let merged = new Set(a)
  // for (const element of b) {
  // 	merged.add(i)
  // }
  // return Array.from(merged).sort((a, b) => a - b)
}

/***/ }),

/***/ 323:
/*!*******************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/parseDigits.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIGITS": () => (/* binding */ DIGITS),
/* harmony export */   "default": () => (/* binding */ parseDigits),
/* harmony export */   "parseDigit": () => (/* binding */ parseDigit)
/* harmony export */ });
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
} // These mappings map a character (key) to a specific digit that should
// replace it for normalization purposes. Non-European digits that
// may be used in phone numbers are mapped to a European equivalent.
//
// E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
//


var DIGITS = {
  '0': '0',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  "\uFF10": '0',
  // Fullwidth digit 0
  "\uFF11": '1',
  // Fullwidth digit 1
  "\uFF12": '2',
  // Fullwidth digit 2
  "\uFF13": '3',
  // Fullwidth digit 3
  "\uFF14": '4',
  // Fullwidth digit 4
  "\uFF15": '5',
  // Fullwidth digit 5
  "\uFF16": '6',
  // Fullwidth digit 6
  "\uFF17": '7',
  // Fullwidth digit 7
  "\uFF18": '8',
  // Fullwidth digit 8
  "\uFF19": '9',
  // Fullwidth digit 9
  "\u0660": '0',
  // Arabic-indic digit 0
  "\u0661": '1',
  // Arabic-indic digit 1
  "\u0662": '2',
  // Arabic-indic digit 2
  "\u0663": '3',
  // Arabic-indic digit 3
  "\u0664": '4',
  // Arabic-indic digit 4
  "\u0665": '5',
  // Arabic-indic digit 5
  "\u0666": '6',
  // Arabic-indic digit 6
  "\u0667": '7',
  // Arabic-indic digit 7
  "\u0668": '8',
  // Arabic-indic digit 8
  "\u0669": '9',
  // Arabic-indic digit 9
  "\u06F0": '0',
  // Eastern-Arabic digit 0
  "\u06F1": '1',
  // Eastern-Arabic digit 1
  "\u06F2": '2',
  // Eastern-Arabic digit 2
  "\u06F3": '3',
  // Eastern-Arabic digit 3
  "\u06F4": '4',
  // Eastern-Arabic digit 4
  "\u06F5": '5',
  // Eastern-Arabic digit 5
  "\u06F6": '6',
  // Eastern-Arabic digit 6
  "\u06F7": '7',
  // Eastern-Arabic digit 7
  "\u06F8": '8',
  // Eastern-Arabic digit 8
  "\u06F9": '9' // Eastern-Arabic digit 9

};
function parseDigit(character) {
  return DIGITS[character];
}
/**
 * Parses phone number digits from a string.
 * Drops all punctuation leaving only digits.
 * Also converts wide-ascii and arabic-indic numerals to conventional numerals.
 * E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
 * @param  {string} string
 * @return {string}
 * @example
 * ```js
 * parseDigits('8 (800) 555')
 * // Outputs '8800555'.
 * ```
 */

function parseDigits(string) {
  var result = ''; // Using `.split('')` here instead of normal `for ... of`
  // because the importing application doesn't neccessarily include an ES6 polyfill.
  // The `.split('')` approach discards "exotic" UTF-8 characters
  // (the ones consisting of four bytes) but digits
  // (including non-European ones) don't fall into that range
  // so such "exotic" characters would be discarded anyway.

  for (var _iterator = _createForOfIteratorHelperLoose(string.split('')), _step; !(_step = _iterator()).done;) {
    var character = _step.value;
    var digit = parseDigit(character);

    if (digit) {
      result += digit;
    }
  }

  return result;
}

/***/ }),

/***/ 4634:
/*!**********************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/helpers/stripIddPrefix.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ stripIddPrefix)
/* harmony export */ });
/* harmony import */ var _metadata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata.js */ 7211);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ 2976);


var CAPTURING_DIGIT_PATTERN = new RegExp('([' + _constants_js__WEBPACK_IMPORTED_MODULE_0__.VALID_DIGITS + '])');
function stripIddPrefix(number, country, callingCode, metadata) {
  if (!country) {
    return;
  } // Check if the number is IDD-prefixed.


  var countryMetadata = new _metadata_js__WEBPACK_IMPORTED_MODULE_1__["default"](metadata);
  countryMetadata.selectNumberingPlan(country, callingCode);
  var IDDPrefixPattern = new RegExp(countryMetadata.IDDPrefix());

  if (number.search(IDDPrefixPattern) !== 0) {
    return;
  } // Strip IDD prefix.


  number = number.slice(number.match(IDDPrefixPattern)[0].length); // If there're any digits after an IDD prefix,
  // then those digits are a country calling code.
  // Since no country code starts with a `0`,
  // the code below validates that the next digit (if present) is not `0`.

  var matchedGroups = number.match(CAPTURING_DIGIT_PATTERN);

  if (matchedGroups && matchedGroups[1] != null && matchedGroups[1].length > 0) {
    if (matchedGroups[1] === '0') {
      return;
    }
  }

  return number;
}

/***/ }),

/***/ 2892:
/*!*****************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/isPossibleNumber_.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPossiblePhoneNumber),
/* harmony export */   "isPossibleNumber": () => (/* binding */ isPossibleNumber)
/* harmony export */ });
/* harmony import */ var _metadata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata.js */ 7211);
/* harmony import */ var _helpers_checkNumberLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/checkNumberLength.js */ 6601);


function isPossiblePhoneNumber(input, options, metadata) {
  /* istanbul ignore if */
  if (options === undefined) {
    options = {};
  }

  metadata = new _metadata_js__WEBPACK_IMPORTED_MODULE_0__["default"](metadata);

  if (options.v2) {
    if (!input.countryCallingCode) {
      throw new Error('Invalid phone number object passed');
    }

    metadata.selectNumberingPlan(input.countryCallingCode);
  } else {
    if (!input.phone) {
      return false;
    }

    if (input.country) {
      if (!metadata.hasCountry(input.country)) {
        throw new Error("Unknown country: ".concat(input.country));
      }

      metadata.country(input.country);
    } else {
      if (!input.countryCallingCode) {
        throw new Error('Invalid phone number object passed');
      }

      metadata.selectNumberingPlan(input.countryCallingCode);
    }
  } // Old metadata (< 1.0.18) had no "possible length" data.


  if (metadata.possibleLengths()) {
    return isPossibleNumber(input.phone || input.nationalNumber, metadata);
  } else {
    // There was a bug between `1.7.35` and `1.7.37` where "possible_lengths"
    // were missing for "non-geographical" numbering plans.
    // Just assume the number is possible in such cases:
    // it's unlikely that anyone generated their custom metadata
    // in that short period of time (one day).
    // This code can be removed in some future major version update.
    if (input.countryCallingCode && metadata.isNonGeographicCallingCode(input.countryCallingCode)) {
      // "Non-geographic entities" did't have `possibleLengths`
      // due to a bug in metadata generation process.
      return true;
    } else {
      throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
    }
  }
}
function isPossibleNumber(nationalNumber, metadata) {
  //, isInternational) {
  switch ((0,_helpers_checkNumberLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nationalNumber, metadata)) {
    case 'IS_POSSIBLE':
      return true;
    // This library ignores "local-only" phone numbers (for simplicity).
    // See the readme for more info on what are "local-only" phone numbers.
    // case 'IS_POSSIBLE_LOCAL_ONLY':
    // 	return !isInternational

    default:
      return false;
  }
}

/***/ }),

/***/ 7211:
/*!********************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/metadata.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Metadata),
/* harmony export */   "getCountryCallingCode": () => (/* binding */ getCountryCallingCode),
/* harmony export */   "getExtPrefix": () => (/* binding */ getExtPrefix),
/* harmony export */   "isSupportedCountry": () => (/* binding */ isSupportedCountry),
/* harmony export */   "validateMetadata": () => (/* binding */ validateMetadata)
/* harmony export */ });
/* harmony import */ var _tools_semver_compare_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools/semver-compare.js */ 7868);
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

 // Added "possibleLengths" and renamed
// "country_phone_code_to_countries" to "country_calling_codes".

var V2 = '1.0.18'; // Added "idd_prefix" and "default_idd_prefix".

var V3 = '1.2.0'; // Moved `001` country code to "nonGeographic" section of metadata.

var V4 = '1.7.35';
var DEFAULT_EXT_PREFIX = ' ext. ';
var CALLING_CODE_REG_EXP = /^\d+$/;
/**
 * See: https://gitlab.com/catamphetamine/libphonenumber-js/blob/master/METADATA.md
 */

var Metadata = /*#__PURE__*/function () {
  function Metadata(metadata) {
    _classCallCheck(this, Metadata);

    validateMetadata(metadata);
    this.metadata = metadata;
    setVersion.call(this, metadata);
  }

  _createClass(Metadata, [{
    key: "getCountries",
    value: function getCountries() {
      return Object.keys(this.metadata.countries).filter(function (_) {
        return _ !== '001';
      });
    }
  }, {
    key: "getCountryMetadata",
    value: function getCountryMetadata(countryCode) {
      return this.metadata.countries[countryCode];
    }
  }, {
    key: "nonGeographic",
    value: function nonGeographic() {
      if (this.v1 || this.v2 || this.v3) return; // `nonGeographical` was a typo.
      // It's present in metadata generated from `1.7.35` to `1.7.37`.
      // The test case could be found by searching for "nonGeographical".

      return this.metadata.nonGeographic || this.metadata.nonGeographical;
    }
  }, {
    key: "hasCountry",
    value: function hasCountry(country) {
      return this.getCountryMetadata(country) !== undefined;
    }
  }, {
    key: "hasCallingCode",
    value: function hasCallingCode(callingCode) {
      if (this.getCountryCodesForCallingCode(callingCode)) {
        return true;
      }

      if (this.nonGeographic()) {
        if (this.nonGeographic()[callingCode]) {
          return true;
        }
      } else {
        // A hacky workaround for old custom metadata (generated before V4).
        var countryCodes = this.countryCallingCodes()[callingCode];

        if (countryCodes && countryCodes.length === 1 && countryCodes[0] === '001') {
          return true;
        }
      }
    }
  }, {
    key: "isNonGeographicCallingCode",
    value: function isNonGeographicCallingCode(callingCode) {
      if (this.nonGeographic()) {
        return this.nonGeographic()[callingCode] ? true : false;
      } else {
        return this.getCountryCodesForCallingCode(callingCode) ? false : true;
      }
    } // Deprecated.

  }, {
    key: "country",
    value: function country(countryCode) {
      return this.selectNumberingPlan(countryCode);
    }
  }, {
    key: "selectNumberingPlan",
    value: function selectNumberingPlan(countryCode, callingCode) {
      // Supports just passing `callingCode` as the first argument.
      if (countryCode && CALLING_CODE_REG_EXP.test(countryCode)) {
        callingCode = countryCode;
        countryCode = null;
      }

      if (countryCode && countryCode !== '001') {
        if (!this.hasCountry(countryCode)) {
          throw new Error("Unknown country: ".concat(countryCode));
        }

        this.numberingPlan = new NumberingPlan(this.getCountryMetadata(countryCode), this);
      } else if (callingCode) {
        if (!this.hasCallingCode(callingCode)) {
          throw new Error("Unknown calling code: ".concat(callingCode));
        }

        this.numberingPlan = new NumberingPlan(this.getNumberingPlanMetadata(callingCode), this);
      } else {
        this.numberingPlan = undefined;
      }

      return this;
    }
  }, {
    key: "getCountryCodesForCallingCode",
    value: function getCountryCodesForCallingCode(callingCode) {
      var countryCodes = this.countryCallingCodes()[callingCode];

      if (countryCodes) {
        // Metadata before V4 included "non-geographic entity" calling codes
        // inside `country_calling_codes` (for example, `"881":["001"]`).
        // Now the semantics of `country_calling_codes` has changed:
        // it's specifically for "countries" now.
        // Older versions of custom metadata will simply skip parsing
        // "non-geographic entity" phone numbers with new versions
        // of this library: it's not considered a bug,
        // because such numbers are extremely rare,
        // and developers extremely rarely use custom metadata.
        if (countryCodes.length === 1 && countryCodes[0].length === 3) {
          return;
        }

        return countryCodes;
      }
    }
  }, {
    key: "getCountryCodeForCallingCode",
    value: function getCountryCodeForCallingCode(callingCode) {
      var countryCodes = this.getCountryCodesForCallingCode(callingCode);

      if (countryCodes) {
        return countryCodes[0];
      }
    }
  }, {
    key: "getNumberingPlanMetadata",
    value: function getNumberingPlanMetadata(callingCode) {
      var countryCode = this.getCountryCodeForCallingCode(callingCode);

      if (countryCode) {
        return this.getCountryMetadata(countryCode);
      }

      if (this.nonGeographic()) {
        var metadata = this.nonGeographic()[callingCode];

        if (metadata) {
          return metadata;
        }
      } else {
        // A hacky workaround for old custom metadata (generated before V4).
        // In that metadata, there was no concept of "non-geographic" metadata
        // so metadata for `001` country code was stored along with other countries.
        // The test case can be found by searching for:
        // "should work around `nonGeographic` metadata not existing".
        var countryCodes = this.countryCallingCodes()[callingCode];

        if (countryCodes && countryCodes.length === 1 && countryCodes[0] === '001') {
          return this.metadata.countries['001'];
        }
      }
    } // Deprecated.

  }, {
    key: "countryCallingCode",
    value: function countryCallingCode() {
      return this.numberingPlan.callingCode();
    } // Deprecated.

  }, {
    key: "IDDPrefix",
    value: function IDDPrefix() {
      return this.numberingPlan.IDDPrefix();
    } // Deprecated.

  }, {
    key: "defaultIDDPrefix",
    value: function defaultIDDPrefix() {
      return this.numberingPlan.defaultIDDPrefix();
    } // Deprecated.

  }, {
    key: "nationalNumberPattern",
    value: function nationalNumberPattern() {
      return this.numberingPlan.nationalNumberPattern();
    } // Deprecated.

  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      return this.numberingPlan.possibleLengths();
    } // Deprecated.

  }, {
    key: "formats",
    value: function formats() {
      return this.numberingPlan.formats();
    } // Deprecated.

  }, {
    key: "nationalPrefixForParsing",
    value: function nationalPrefixForParsing() {
      return this.numberingPlan.nationalPrefixForParsing();
    } // Deprecated.

  }, {
    key: "nationalPrefixTransformRule",
    value: function nationalPrefixTransformRule() {
      return this.numberingPlan.nationalPrefixTransformRule();
    } // Deprecated.

  }, {
    key: "leadingDigits",
    value: function leadingDigits() {
      return this.numberingPlan.leadingDigits();
    } // Deprecated.

  }, {
    key: "hasTypes",
    value: function hasTypes() {
      return this.numberingPlan.hasTypes();
    } // Deprecated.

  }, {
    key: "type",
    value: function type(_type) {
      return this.numberingPlan.type(_type);
    } // Deprecated.

  }, {
    key: "ext",
    value: function ext() {
      return this.numberingPlan.ext();
    }
  }, {
    key: "countryCallingCodes",
    value: function countryCallingCodes() {
      if (this.v1) return this.metadata.country_phone_code_to_countries;
      return this.metadata.country_calling_codes;
    } // Deprecated.

  }, {
    key: "chooseCountryByCountryCallingCode",
    value: function chooseCountryByCountryCallingCode(callingCode) {
      return this.selectNumberingPlan(callingCode);
    }
  }, {
    key: "hasSelectedNumberingPlan",
    value: function hasSelectedNumberingPlan() {
      return this.numberingPlan !== undefined;
    }
  }]);

  return Metadata;
}();



var NumberingPlan = /*#__PURE__*/function () {
  function NumberingPlan(metadata, globalMetadataObject) {
    _classCallCheck(this, NumberingPlan);

    this.globalMetadataObject = globalMetadataObject;
    this.metadata = metadata;
    setVersion.call(this, globalMetadataObject.metadata);
  }

  _createClass(NumberingPlan, [{
    key: "callingCode",
    value: function callingCode() {
      return this.metadata[0];
    } // Formatting information for regions which share
    // a country calling code is contained by only one region
    // for performance reasons. For example, for NANPA region
    // ("North American Numbering Plan Administration",
    //  which includes USA, Canada, Cayman Islands, Bahamas, etc)
    // it will be contained in the metadata for `US`.

  }, {
    key: "getDefaultCountryMetadataForRegion",
    value: function getDefaultCountryMetadataForRegion() {
      return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
    } // Is always present.

  }, {
    key: "IDDPrefix",
    value: function IDDPrefix() {
      if (this.v1 || this.v2) return;
      return this.metadata[1];
    } // Is only present when a country supports multiple IDD prefixes.

  }, {
    key: "defaultIDDPrefix",
    value: function defaultIDDPrefix() {
      if (this.v1 || this.v2) return;
      return this.metadata[12];
    }
  }, {
    key: "nationalNumberPattern",
    value: function nationalNumberPattern() {
      if (this.v1 || this.v2) return this.metadata[1];
      return this.metadata[2];
    } // "possible length" data is always present in Google's metadata.

  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      if (this.v1) return;
      return this.metadata[this.v2 ? 2 : 3];
    }
  }, {
    key: "_getFormats",
    value: function _getFormats(metadata) {
      return metadata[this.v1 ? 2 : this.v2 ? 3 : 4];
    } // For countries of the same region (e.g. NANPA)
    // formats are all stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".

  }, {
    key: "formats",
    value: function formats() {
      var _this = this;

      var formats = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
      return formats.map(function (_) {
        return new Format(_, _this);
      });
    }
  }, {
    key: "nationalPrefix",
    value: function nationalPrefix() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }
  }, {
    key: "_getNationalPrefixFormattingRule",
    value: function _getNationalPrefixFormattingRule(metadata) {
      return metadata[this.v1 ? 4 : this.v2 ? 5 : 6];
    } // For countries of the same region (e.g. NANPA)
    // national prefix formatting rule is stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".

  }, {
    key: "nationalPrefixFormattingRule",
    value: function nationalPrefixFormattingRule() {
      return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "_nationalPrefixForParsing",
    value: function _nationalPrefixForParsing() {
      return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
    }
  }, {
    key: "nationalPrefixForParsing",
    value: function nationalPrefixForParsing() {
      // If `national_prefix_for_parsing` is not set explicitly,
      // then infer it from `national_prefix` (if any)
      return this._nationalPrefixForParsing() || this.nationalPrefix();
    }
  }, {
    key: "nationalPrefixTransformRule",
    value: function nationalPrefixTransformRule() {
      return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
    }
  }, {
    key: "_getNationalPrefixIsOptionalWhenFormatting",
    value: function _getNationalPrefixIsOptionalWhenFormatting() {
      return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
    } // For countries of the same region (e.g. NANPA)
    // "national prefix is optional when formatting" flag is
    // stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".

  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
      return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "leadingDigits",
    value: function leadingDigits() {
      return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
    }
  }, {
    key: "types",
    value: function types() {
      return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
    }
  }, {
    key: "hasTypes",
    value: function hasTypes() {
      // Versions 1.2.0 - 1.2.4: can be `[]`.

      /* istanbul ignore next */
      if (this.types() && this.types().length === 0) {
        return false;
      } // Versions <= 1.2.4: can be `undefined`.
      // Version >= 1.2.5: can be `0`.


      return !!this.types();
    }
  }, {
    key: "type",
    value: function type(_type2) {
      if (this.hasTypes() && getType(this.types(), _type2)) {
        return new Type(getType(this.types(), _type2), this);
      }
    }
  }, {
    key: "ext",
    value: function ext() {
      if (this.v1 || this.v2) return DEFAULT_EXT_PREFIX;
      return this.metadata[13] || DEFAULT_EXT_PREFIX;
    }
  }]);

  return NumberingPlan;
}();

var Format = /*#__PURE__*/function () {
  function Format(format, metadata) {
    _classCallCheck(this, Format);

    this._format = format;
    this.metadata = metadata;
  }

  _createClass(Format, [{
    key: "pattern",
    value: function pattern() {
      return this._format[0];
    }
  }, {
    key: "format",
    value: function format() {
      return this._format[1];
    }
  }, {
    key: "leadingDigitsPatterns",
    value: function leadingDigitsPatterns() {
      return this._format[2] || [];
    }
  }, {
    key: "nationalPrefixFormattingRule",
    value: function nationalPrefixFormattingRule() {
      return this._format[3] || this.metadata.nationalPrefixFormattingRule();
    }
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
      return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
  }, {
    key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
    value: function nationalPrefixIsMandatoryWhenFormattingInNationalFormat() {
      // National prefix is omitted if there's no national prefix formatting rule
      // set for this country, or when the national prefix formatting rule
      // contains no national prefix itself, or when this rule is set but
      // national prefix is optional for this phone number format
      // (and it is not enforced explicitly)
      return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    } // Checks whether national prefix formatting rule contains national prefix.

  }, {
    key: "usesNationalPrefix",
    value: function usesNationalPrefix() {
      return this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a "dummy" one.
      !FIRST_GROUP_ONLY_PREFIX_PATTERN.test(this.nationalPrefixFormattingRule()) // In compressed metadata, `this.nationalPrefixFormattingRule()` is `0`
      // when `national_prefix_formatting_rule` is not present.
      // So, `true` or `false` are returned explicitly here, so that
      // `0` number isn't returned.
      ? true : false;
    }
  }, {
    key: "internationalFormat",
    value: function internationalFormat() {
      return this._format[5] || this.format();
    }
  }]);

  return Format;
}();
/**
 * A pattern that is used to determine if the national prefix formatting rule
 * has the first group only, i.e., does not start with the national prefix.
 * Note that the pattern explicitly allows for unbalanced parentheses.
 */


var FIRST_GROUP_ONLY_PREFIX_PATTERN = /^\(?\$1\)?$/;

var Type = /*#__PURE__*/function () {
  function Type(type, metadata) {
    _classCallCheck(this, Type);

    this.type = type;
    this.metadata = metadata;
  }

  _createClass(Type, [{
    key: "pattern",
    value: function pattern() {
      if (this.metadata.v1) return this.type;
      return this.type[0];
    }
  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      if (this.metadata.v1) return;
      return this.type[1] || this.metadata.possibleLengths();
    }
  }]);

  return Type;
}();

function getType(types, type) {
  switch (type) {
    case 'FIXED_LINE':
      return types[0];

    case 'MOBILE':
      return types[1];

    case 'TOLL_FREE':
      return types[2];

    case 'PREMIUM_RATE':
      return types[3];

    case 'PERSONAL_NUMBER':
      return types[4];

    case 'VOICEMAIL':
      return types[5];

    case 'UAN':
      return types[6];

    case 'PAGER':
      return types[7];

    case 'VOIP':
      return types[8];

    case 'SHARED_COST':
      return types[9];
  }
}

function validateMetadata(metadata) {
  if (!metadata) {
    throw new Error('[libphonenumber-js] `metadata` argument not passed. Check your arguments.');
  } // `country_phone_code_to_countries` was renamed to
  // `country_calling_codes` in `1.0.18`.


  if (!is_object(metadata) || !is_object(metadata.countries)) {
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(is_object(metadata) ? 'an object of shape: { ' + Object.keys(metadata).join(', ') + ' }' : 'a ' + type_of(metadata) + ': ' + metadata, "."));
  }
} // Babel transforms `typeof` into some "branches"
// so istanbul will show this as "branch not covered".

/* istanbul ignore next */

var is_object = function is_object(_) {
  return _typeof(_) === 'object';
}; // Babel transforms `typeof` into some "branches"
// so istanbul will show this as "branch not covered".

/* istanbul ignore next */


var type_of = function type_of(_) {
  return _typeof(_);
};
/**
 * Returns extension prefix for a country.
 * @param  {string} country
 * @param  {object} metadata
 * @return {string?}
 * @example
 * // Returns " ext. "
 * getExtPrefix("US")
 */


function getExtPrefix(country, metadata) {
  metadata = new Metadata(metadata);

  if (metadata.hasCountry(country)) {
    return metadata.country(country).ext();
  }

  return DEFAULT_EXT_PREFIX;
}
/**
 * Returns "country calling code" for a country.
 * Throws an error if the country doesn't exist or isn't supported by this library.
 * @param  {string} country
 * @param  {object} metadata
 * @return {string}
 * @example
 * // Returns "44"
 * getCountryCallingCode("GB")
 */

function getCountryCallingCode(country, metadata) {
  metadata = new Metadata(metadata);

  if (metadata.hasCountry(country)) {
    return metadata.country(country).countryCallingCode();
  }

  throw new Error("Unknown country: ".concat(country));
}
function isSupportedCountry(country, metadata) {
  // metadata = new Metadata(metadata)
  // return metadata.hasCountry(country)
  return metadata.countries[country] !== undefined;
}

function setVersion(metadata) {
  var version = metadata.version;

  if (typeof version === 'number') {
    this.v1 = version === 1;
    this.v2 = version === 2;
    this.v3 = version === 3;
    this.v4 = version === 4;
  } else {
    if (!version) {
      this.v1 = true;
    } else if ((0,_tools_semver_compare_js__WEBPACK_IMPORTED_MODULE_0__["default"])(version, V3) === -1) {
      this.v2 = true;
    } else if ((0,_tools_semver_compare_js__WEBPACK_IMPORTED_MODULE_0__["default"])(version, V4) === -1) {
      this.v3 = true;
    } else {
      this.v4 = true;
    }
  }
} // const ISO_COUNTRY_CODE = /^[A-Z]{2}$/
// function isCountryCode(countryCode) {
// 	return ISO_COUNTRY_CODE.test(countryCodeOrCountryCallingCode)
// }

/***/ }),

/***/ 3998:
/*!**************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/parseIncompletePhoneNumber.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseIncompletePhoneNumber),
/* harmony export */   "parsePhoneNumberCharacter": () => (/* binding */ parsePhoneNumberCharacter)
/* harmony export */ });
/* harmony import */ var _helpers_parseDigits_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/parseDigits.js */ 323);
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}


/**
 * Parses phone number characters from a string.
 * Drops all punctuation leaving only digits and the leading `+` sign (if any).
 * Also converts wide-ascii and arabic-indic numerals to conventional numerals.
 * E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
 * @param  {string} string
 * @return {string}
 * @example
 * ```js
 * // Outputs '8800555'.
 * parseIncompletePhoneNumber('8 (800) 555')
 * // Outputs '+7800555'.
 * parseIncompletePhoneNumber('+7 800 555')
 * ```
 */

function parseIncompletePhoneNumber(string) {
  var result = ''; // Using `.split('')` here instead of normal `for ... of`
  // because the importing application doesn't neccessarily include an ES6 polyfill.
  // The `.split('')` approach discards "exotic" UTF-8 characters
  // (the ones consisting of four bytes) but digits
  // (including non-European ones) don't fall into that range
  // so such "exotic" characters would be discarded anyway.

  for (var _iterator = _createForOfIteratorHelperLoose(string.split('')), _step; !(_step = _iterator()).done;) {
    var character = _step.value;
    result += parsePhoneNumberCharacter(character, result) || '';
  }

  return result;
}
/**
 * Parses next character while parsing phone number digits (including a `+`)
 * from text: discards everything except `+` and digits, and `+` is only allowed
 * at the start of a phone number.
 * For example, is used in `react-phone-number-input` where it uses
 * [`input-format`](https://gitlab.com/catamphetamine/input-format).
 * @param  {string} character - Yet another character from raw input string.
 * @param  {string?} prevParsedCharacters - Previous parsed characters.
 * @param  {object} meta - Optional custom use-case-specific metadata.
 * @return {string?} The parsed character.
 */

function parsePhoneNumberCharacter(character, prevParsedCharacters) {
  // Only allow a leading `+`.
  if (character === '+') {
    // If this `+` is not the first parsed character
    // then discard it.
    if (prevParsedCharacters) {
      return;
    }

    return '+';
  } // Allow digits.


  return (0,_helpers_parseDigits_js__WEBPACK_IMPORTED_MODULE_0__.parseDigit)(character);
}

/***/ }),

/***/ 1863:
/*!****************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/parsePhoneNumber.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parsePhoneNumber),
/* harmony export */   "normalizeArguments": () => (/* binding */ normalizeArguments)
/* harmony export */ });
/* harmony import */ var _parsePhoneNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsePhoneNumber_.js */ 7942);
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}


function parsePhoneNumber() {
  var _normalizeArguments = normalizeArguments(arguments),
      text = _normalizeArguments.text,
      options = _normalizeArguments.options,
      metadata = _normalizeArguments.metadata;

  return (0,_parsePhoneNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(text, options, metadata);
}
function normalizeArguments(args) {
  var _Array$prototype$slic = Array.prototype.slice.call(args),
      _Array$prototype$slic2 = _slicedToArray(_Array$prototype$slic, 4),
      arg_1 = _Array$prototype$slic2[0],
      arg_2 = _Array$prototype$slic2[1],
      arg_3 = _Array$prototype$slic2[2],
      arg_4 = _Array$prototype$slic2[3];

  var text;
  var options;
  var metadata; // If the phone number is passed as a string.
  // `parsePhoneNumber('88005553535', ...)`.

  if (typeof arg_1 === 'string') {
    text = arg_1;
  } else throw new TypeError('A text for parsing must be a string.'); // If "default country" argument is being passed then move it to `options`.
  // `parsePhoneNumber('88005553535', 'RU', [options], metadata)`.


  if (!arg_2 || typeof arg_2 === 'string') {
    if (arg_4) {
      options = arg_3;
      metadata = arg_4;
    } else {
      options = undefined;
      metadata = arg_3;
    }

    if (arg_2) {
      options = _objectSpread({
        defaultCountry: arg_2
      }, options);
    }
  } // `defaultCountry` is not passed.
  // Example: `parsePhoneNumber('+78005553535', [options], metadata)`.
  else if (isObject(arg_2)) {
    if (arg_3) {
      options = arg_2;
      metadata = arg_3;
    } else {
      metadata = arg_2;
    }
  } else throw new Error("Invalid second argument: ".concat(arg_2));

  return {
    text: text,
    options: options,
    metadata: metadata
  };
} // Otherwise istanbul would show this as "branch not covered".

/* istanbul ignore next */

var isObject = function isObject(_) {
  return _typeof(_) === 'object';
};

/***/ }),

/***/ 3717:
/*!**************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/parsePhoneNumberFromString.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parsePhoneNumberFromString)
/* harmony export */ });
/* harmony import */ var _parsePhoneNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsePhoneNumber.js */ 1863);
/* harmony import */ var _parsePhoneNumberFromString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsePhoneNumberFromString_.js */ 2719);


function parsePhoneNumberFromString() {
  var _normalizeArguments = (0,_parsePhoneNumber_js__WEBPACK_IMPORTED_MODULE_0__.normalizeArguments)(arguments),
      text = _normalizeArguments.text,
      options = _normalizeArguments.options,
      metadata = _normalizeArguments.metadata;

  return (0,_parsePhoneNumberFromString_js__WEBPACK_IMPORTED_MODULE_1__["default"])(text, options, metadata);
}

/***/ }),

/***/ 2719:
/*!***************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/parsePhoneNumberFromString_.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parsePhoneNumberFromString)
/* harmony export */ });
/* harmony import */ var _parsePhoneNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsePhoneNumber_.js */ 7942);
/* harmony import */ var _ParseError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ParseError.js */ 9480);
/* harmony import */ var _metadata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata.js */ 7211);
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}




function parsePhoneNumberFromString(text, options, metadata) {
  // Validate `defaultCountry`.
  if (options && options.defaultCountry && !(0,_metadata_js__WEBPACK_IMPORTED_MODULE_0__.isSupportedCountry)(options.defaultCountry, metadata)) {
    options = _objectSpread(_objectSpread({}, options), {}, {
      defaultCountry: undefined
    });
  } // Parse phone number.


  try {
    return (0,_parsePhoneNumber_js__WEBPACK_IMPORTED_MODULE_1__["default"])(text, options, metadata);
  } catch (error) {
    /* istanbul ignore else */
    if (error instanceof _ParseError_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {//
    } else {
      throw error;
    }
  }
}

/***/ }),

/***/ 7942:
/*!*****************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/parsePhoneNumber_.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parsePhoneNumber)
/* harmony export */ });
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse_.js */ 6419);
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


function parsePhoneNumber(text, options, metadata) {
  return (0,_parse_js__WEBPACK_IMPORTED_MODULE_0__["default"])(text, _objectSpread(_objectSpread({}, options), {}, {
    v2: true
  }), metadata);
}

/***/ }),

/***/ 6419:
/*!******************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/parse_.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parse)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ 2976);
/* harmony import */ var _ParseError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ParseError.js */ 9480);
/* harmony import */ var _metadata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCountryCallingCode.js */ 7211);
/* harmony import */ var _helpers_isViablePhoneNumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/isViablePhoneNumber.js */ 3846);
/* harmony import */ var _helpers_extension_extractExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/extension/extractExtension.js */ 930);
/* harmony import */ var _parseIncompletePhoneNumber_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parseIncompletePhoneNumber.js */ 3998);
/* harmony import */ var _isPossibleNumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isPossibleNumber_.js */ 2892);
/* harmony import */ var _helpers_RFC3966_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/RFC3966.js */ 3845);
/* harmony import */ var _PhoneNumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PhoneNumber.js */ 3935);
/* harmony import */ var _helpers_matchesEntirely_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/matchesEntirely.js */ 6188);
/* harmony import */ var _helpers_extractCountryCallingCode_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/extractCountryCallingCode.js */ 1378);
/* harmony import */ var _helpers_extractNationalNumber_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/extractNationalNumber.js */ 9159);
/* harmony import */ var _helpers_getCountryByCallingCode_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/getCountryByCallingCode.js */ 6269);
// This is a port of Google Android `libphonenumber`'s
// `phonenumberutil.js` of December 31th, 2018.
//
// https://github.com/googlei18n/libphonenumber/commits/master/javascript/i18n/phonenumbers/phonenumberutil.js















 // We don't allow input strings for parsing to be longer than 250 chars.
// This prevents malicious input from consuming CPU.

var MAX_INPUT_STRING_LENGTH = 250; // This consists of the plus symbol, digits, and arabic-indic digits.

var PHONE_NUMBER_START_PATTERN = new RegExp('[' + _constants_js__WEBPACK_IMPORTED_MODULE_0__.PLUS_CHARS + _constants_js__WEBPACK_IMPORTED_MODULE_0__.VALID_DIGITS + ']'); // Regular expression of trailing characters that we want to remove.
// A trailing `#` is sometimes used when writing phone numbers with extensions in US.
// Example: "+1 (645) 123 1234-910#" number has extension "910".

var AFTER_PHONE_NUMBER_END_PATTERN = new RegExp('[^' + _constants_js__WEBPACK_IMPORTED_MODULE_0__.VALID_DIGITS + '#' + ']+$');
var USE_NON_GEOGRAPHIC_COUNTRY_CODE = false; // Examples:
//
// ```js
// parse('8 (800) 555-35-35', 'RU')
// parse('8 (800) 555-35-35', 'RU', metadata)
// parse('8 (800) 555-35-35', { country: { default: 'RU' } })
// parse('8 (800) 555-35-35', { country: { default: 'RU' } }, metadata)
// parse('+7 800 555 35 35')
// parse('+7 800 555 35 35', metadata)
// ```
//

function parse(text, options, metadata) {
  // If assigning the `{}` default value is moved to the arguments above,
  // code coverage would decrease for some weird reason.
  options = options || {};
  metadata = new _metadata_js__WEBPACK_IMPORTED_MODULE_1__["default"](metadata); // Validate `defaultCountry`.

  if (options.defaultCountry && !metadata.hasCountry(options.defaultCountry)) {
    if (options.v2) {
      throw new _ParseError_js__WEBPACK_IMPORTED_MODULE_2__["default"]('INVALID_COUNTRY');
    }

    throw new Error("Unknown country: ".concat(options.defaultCountry));
  } // Parse the phone number.


  var _parseInput = parseInput(text, options.v2, options.extract),
      formattedPhoneNumber = _parseInput.number,
      ext = _parseInput.ext,
      error = _parseInput.error; // If the phone number is not viable then return nothing.


  if (!formattedPhoneNumber) {
    if (options.v2) {
      if (error === 'TOO_SHORT') {
        throw new _ParseError_js__WEBPACK_IMPORTED_MODULE_2__["default"]('TOO_SHORT');
      }

      throw new _ParseError_js__WEBPACK_IMPORTED_MODULE_2__["default"]('NOT_A_NUMBER');
    }

    return {};
  }

  var _parsePhoneNumber = parsePhoneNumber(formattedPhoneNumber, options.defaultCountry, options.defaultCallingCode, metadata),
      country = _parsePhoneNumber.country,
      nationalNumber = _parsePhoneNumber.nationalNumber,
      countryCallingCode = _parsePhoneNumber.countryCallingCode,
      carrierCode = _parsePhoneNumber.carrierCode;

  if (!metadata.hasSelectedNumberingPlan()) {
    if (options.v2) {
      throw new _ParseError_js__WEBPACK_IMPORTED_MODULE_2__["default"]('INVALID_COUNTRY');
    }

    return {};
  } // Validate national (significant) number length.


  if (!nationalNumber || nationalNumber.length < _constants_js__WEBPACK_IMPORTED_MODULE_0__.MIN_LENGTH_FOR_NSN) {
    // Won't throw here because the regexp already demands length > 1.

    /* istanbul ignore if */
    if (options.v2) {
      throw new _ParseError_js__WEBPACK_IMPORTED_MODULE_2__["default"]('TOO_SHORT');
    } // Google's demo just throws an error in this case.


    return {};
  } // Validate national (significant) number length.
  //
  // A sidenote:
  //
  // They say that sometimes national (significant) numbers
  // can be longer than `MAX_LENGTH_FOR_NSN` (e.g. in Germany).
  // https://github.com/googlei18n/libphonenumber/blob/7e1748645552da39c4e1ba731e47969d97bdb539/resources/phonenumber.proto#L36
  // Such numbers will just be discarded.
  //


  if (nationalNumber.length > _constants_js__WEBPACK_IMPORTED_MODULE_0__.MAX_LENGTH_FOR_NSN) {
    if (options.v2) {
      throw new _ParseError_js__WEBPACK_IMPORTED_MODULE_2__["default"]('TOO_LONG');
    } // Google's demo just throws an error in this case.


    return {};
  }

  if (options.v2) {
    var phoneNumber = new _PhoneNumber_js__WEBPACK_IMPORTED_MODULE_3__["default"](countryCallingCode, nationalNumber, metadata.metadata);

    if (country) {
      phoneNumber.country = country;
    }

    if (carrierCode) {
      phoneNumber.carrierCode = carrierCode;
    }

    if (ext) {
      phoneNumber.ext = ext;
    }

    return phoneNumber;
  } // Check if national phone number pattern matches the number.
  // National number pattern is different for each country,
  // even for those ones which are part of the "NANPA" group.


  var valid = (options.extended ? metadata.hasSelectedNumberingPlan() : country) ? (0,_helpers_matchesEntirely_js__WEBPACK_IMPORTED_MODULE_4__["default"])(nationalNumber, metadata.nationalNumberPattern()) : false;

  if (!options.extended) {
    return valid ? result(country, nationalNumber, ext) : {};
  } // isInternational: countryCallingCode !== undefined


  return {
    country: country,
    countryCallingCode: countryCallingCode,
    carrierCode: carrierCode,
    valid: valid,
    possible: valid ? true : options.extended === true && metadata.possibleLengths() && (0,_isPossibleNumber_js__WEBPACK_IMPORTED_MODULE_5__.isPossibleNumber)(nationalNumber, metadata) ? true : false,
    phone: nationalNumber,
    ext: ext
  };
}
/**
 * Extracts a formatted phone number from text.
 * Doesn't guarantee that the extracted phone number
 * is a valid phone number (for example, doesn't validate its length).
 * @param  {string} text
 * @param  {boolean} [extract] — If `false`, then will parse the entire `text` as a phone number.
 * @param  {boolean} [throwOnError] — By default, it won't throw if the text is too long.
 * @return {string}
 * @example
 * // Returns "(213) 373-4253".
 * extractFormattedPhoneNumber("Call (213) 373-4253 for assistance.")
 */

function extractFormattedPhoneNumber(text, extract, throwOnError) {
  if (!text) {
    return;
  }

  if (text.length > MAX_INPUT_STRING_LENGTH) {
    if (throwOnError) {
      throw new _ParseError_js__WEBPACK_IMPORTED_MODULE_2__["default"]('TOO_LONG');
    }

    return;
  }

  if (extract === false) {
    return text;
  } // Attempt to extract a possible number from the string passed in


  var startsAt = text.search(PHONE_NUMBER_START_PATTERN);

  if (startsAt < 0) {
    return;
  }

  return text // Trim everything to the left of the phone number
  .slice(startsAt) // Remove trailing non-numerical characters
  .replace(AFTER_PHONE_NUMBER_END_PATTERN, '');
}
/**
 * @param  {string} text - Input.
 * @param  {boolean} v2 - Legacy API functions don't pass `v2: true` flag.
 * @param  {boolean} [extract] - Whether to extract a phone number from `text`, or attempt to parse the entire text as a phone number.
 * @return {object} `{ ?number, ?ext }`.
 */


function parseInput(text, v2, extract) {
  // Parse RFC 3966 phone number URI.
  if (text && text.indexOf('tel:') === 0) {
    return (0,_helpers_RFC3966_js__WEBPACK_IMPORTED_MODULE_6__.parseRFC3966)(text);
  }

  var number = extractFormattedPhoneNumber(text, extract, v2); // If the phone number is not viable, then abort.

  if (!number) {
    return {};
  }

  if (!(0,_helpers_isViablePhoneNumber_js__WEBPACK_IMPORTED_MODULE_7__["default"])(number)) {
    if ((0,_helpers_isViablePhoneNumber_js__WEBPACK_IMPORTED_MODULE_7__.isViablePhoneNumberStart)(number)) {
      return {
        error: 'TOO_SHORT'
      };
    }

    return {};
  } // Attempt to parse extension first, since it doesn't require region-specific
  // data and we want to have the non-normalised number here.


  var withExtensionStripped = (0,_helpers_extension_extractExtension_js__WEBPACK_IMPORTED_MODULE_8__["default"])(number);

  if (withExtensionStripped.ext) {
    return withExtensionStripped;
  }

  return {
    number: number
  };
}
/**
 * Creates `parse()` result object.
 */


function result(country, nationalNumber, ext) {
  var result = {
    country: country,
    phone: nationalNumber
  };

  if (ext) {
    result.ext = ext;
  }

  return result;
}
/**
 * Parses a viable phone number.
 * @param {string} formattedPhoneNumber — Example: "(213) 373-4253".
 * @param {string} [defaultCountry]
 * @param {string} [defaultCallingCode]
 * @param {Metadata} metadata
 * @return {object} Returns `{ country: string?, countryCallingCode: string?, nationalNumber: string? }`.
 */


function parsePhoneNumber(formattedPhoneNumber, defaultCountry, defaultCallingCode, metadata) {
  // Extract calling code from phone number.
  var _extractCountryCallin = (0,_helpers_extractCountryCallingCode_js__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_parseIncompletePhoneNumber_js__WEBPACK_IMPORTED_MODULE_10__["default"])(formattedPhoneNumber), defaultCountry, defaultCallingCode, metadata.metadata),
      countryCallingCode = _extractCountryCallin.countryCallingCode,
      number = _extractCountryCallin.number; // Choose a country by `countryCallingCode`.


  var country;

  if (countryCallingCode) {
    metadata.selectNumberingPlan(countryCallingCode);
  } // If `formattedPhoneNumber` is in "national" format
  // then `number` is defined and `countryCallingCode` isn't.
  else if (number && (defaultCountry || defaultCallingCode)) {
    metadata.selectNumberingPlan(defaultCountry, defaultCallingCode);

    if (defaultCountry) {
      country = defaultCountry;
    } else {
      /* istanbul ignore if */
      if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
        if (metadata.isNonGeographicCallingCode(defaultCallingCode)) {
          country = '001';
        }
      }
    }

    countryCallingCode = defaultCallingCode || (0,_metadata_js__WEBPACK_IMPORTED_MODULE_1__.getCountryCallingCode)(defaultCountry, metadata.metadata);
  } else return {};

  if (!number) {
    return {
      countryCallingCode: countryCallingCode
    };
  }

  var _extractNationalNumbe = (0,_helpers_extractNationalNumber_js__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_parseIncompletePhoneNumber_js__WEBPACK_IMPORTED_MODULE_10__["default"])(number), metadata),
      nationalNumber = _extractNationalNumbe.nationalNumber,
      carrierCode = _extractNationalNumbe.carrierCode; // Sometimes there are several countries
  // corresponding to the same country phone code
  // (e.g. NANPA countries all having `1` country phone code).
  // Therefore, to reliably determine the exact country,
  // national (significant) number should have been parsed first.
  //
  // When `metadata.json` is generated, all "ambiguous" country phone codes
  // get their countries populated with the full set of
  // "phone number type" regular expressions.
  //


  var exactCountry = (0,_helpers_getCountryByCallingCode_js__WEBPACK_IMPORTED_MODULE_12__["default"])(countryCallingCode, nationalNumber, metadata);

  if (exactCountry) {
    country = exactCountry;
    /* istanbul ignore if */

    if (exactCountry === '001') {// Can't happen with `USE_NON_GEOGRAPHIC_COUNTRY_CODE` being `false`.
      // If `USE_NON_GEOGRAPHIC_COUNTRY_CODE` is set to `true` for some reason,
      // then remove the "istanbul ignore if".
    } else {
      metadata.country(country);
    }
  }

  return {
    country: country,
    countryCallingCode: countryCallingCode,
    nationalNumber: nationalNumber,
    carrierCode: carrierCode
  };
}

/***/ }),

/***/ 7868:
/*!********************************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/tools/semver-compare.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copy-pasted from:
// https://github.com/substack/semver-compare/blob/master/index.js
//
// Inlining this function because some users reported issues with
// importing from `semver-compare` in a browser with ES6 "native" modules.
//
// Fixes `semver-compare` not being able to compare versions with alpha/beta/etc "tags".
// https://github.com/catamphetamine/libphonenumber-js/issues/381
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  a = a.split('-');
  b = b.split('-');
  var pa = a[0].split('.');
  var pb = b[0].split('.');

  for (var i = 0; i < 3; i++) {
    var na = Number(pa[i]);
    var nb = Number(pb[i]);
    if (na > nb) return 1;
    if (nb > na) return -1;
    if (!isNaN(na) && isNaN(nb)) return 1;
    if (isNaN(na) && !isNaN(nb)) return -1;
  }

  if (a[1] && b[1]) {
    return a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0;
  }

  return !a[1] && b[1] ? 1 : a[1] && !b[1] ? -1 : 0;
}

/***/ }),

/***/ 1490:
/*!*********************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/validate_.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValidNumber)
/* harmony export */ });
/* harmony import */ var _metadata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata.js */ 7211);
/* harmony import */ var _helpers_matchesEntirely_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/matchesEntirely.js */ 6188);
/* harmony import */ var _helpers_getNumberType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/getNumberType.js */ 2328);



/**
 * Checks if a given phone number is valid.
 *
 * If the `number` is a string, it will be parsed to an object,
 * but only if it contains only valid phone number characters (including punctuation).
 * If the `number` is an object, it is used as is.
 *
 * The optional `defaultCountry` argument is the default country.
 * I.e. it does not restrict to just that country,
 * e.g. in those cases where several countries share
 * the same phone numbering rules (NANPA, Britain, etc).
 * For example, even though the number `07624 369230`
 * belongs to the Isle of Man ("IM" country code)
 * calling `isValidNumber('07624369230', 'GB', metadata)`
 * still returns `true` because the country is not restricted to `GB`,
 * it's just that `GB` is the default one for the phone numbering rules.
 * For restricting the country see `isValidNumberForRegion()`
 * though restricting a country might not be a good idea.
 * https://github.com/googlei18n/libphonenumber/blob/master/FAQ.md#when-should-i-use-isvalidnumberforregion
 *
 * Examples:
 *
 * ```js
 * isValidNumber('+78005553535', metadata)
 * isValidNumber('8005553535', 'RU', metadata)
 * isValidNumber('88005553535', 'RU', metadata)
 * isValidNumber({ phone: '8005553535', country: 'RU' }, metadata)
 * ```
 */

function isValidNumber(input, options, metadata) {
  // If assigning the `{}` default value is moved to the arguments above,
  // code coverage would decrease for some weird reason.
  options = options || {};
  metadata = new _metadata_js__WEBPACK_IMPORTED_MODULE_0__["default"](metadata); // This is just to support `isValidNumber({})`
  // for cases when `parseNumber()` returns `{}`.

  if (!input.country) {
    return false;
  }

  metadata.selectNumberingPlan(input.country, input.countryCallingCode); // By default, countries only have type regexps when it's required for
  // distinguishing different countries having the same `countryCallingCode`.

  if (metadata.hasTypes()) {
    return (0,_helpers_getNumberType_js__WEBPACK_IMPORTED_MODULE_1__["default"])(input, options, metadata.metadata) !== undefined;
  } // If there are no type regexps for this country in metadata then use
  // `nationalNumberPattern` as a "better than nothing" replacement.


  var national_number = options.v2 ? input.nationalNumber : input.phone;
  return (0,_helpers_matchesEntirely_js__WEBPACK_IMPORTED_MODULE_2__["default"])(national_number, metadata.nationalNumberPattern());
}

/***/ }),

/***/ 49:
/*!*************************************************************!*\
  !*** ./node_modules/libphonenumber-js/metadata.min.json.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// This file is a workaround for a bug in web browsers' "native"
// ES6 importing system which is uncapable of importing "*.json" files.
// https://github.com/catamphetamine/libphonenumber-js/issues/239
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "version": 4,
  "country_calling_codes": {
    "1": ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
    "7": ["RU", "KZ"],
    "20": ["EG"],
    "27": ["ZA"],
    "30": ["GR"],
    "31": ["NL"],
    "32": ["BE"],
    "33": ["FR"],
    "34": ["ES"],
    "36": ["HU"],
    "39": ["IT", "VA"],
    "40": ["RO"],
    "41": ["CH"],
    "43": ["AT"],
    "44": ["GB", "GG", "IM", "JE"],
    "45": ["DK"],
    "46": ["SE"],
    "47": ["NO", "SJ"],
    "48": ["PL"],
    "49": ["DE"],
    "51": ["PE"],
    "52": ["MX"],
    "53": ["CU"],
    "54": ["AR"],
    "55": ["BR"],
    "56": ["CL"],
    "57": ["CO"],
    "58": ["VE"],
    "60": ["MY"],
    "61": ["AU", "CC", "CX"],
    "62": ["ID"],
    "63": ["PH"],
    "64": ["NZ"],
    "65": ["SG"],
    "66": ["TH"],
    "81": ["JP"],
    "82": ["KR"],
    "84": ["VN"],
    "86": ["CN"],
    "90": ["TR"],
    "91": ["IN"],
    "92": ["PK"],
    "93": ["AF"],
    "94": ["LK"],
    "95": ["MM"],
    "98": ["IR"],
    "211": ["SS"],
    "212": ["MA", "EH"],
    "213": ["DZ"],
    "216": ["TN"],
    "218": ["LY"],
    "220": ["GM"],
    "221": ["SN"],
    "222": ["MR"],
    "223": ["ML"],
    "224": ["GN"],
    "225": ["CI"],
    "226": ["BF"],
    "227": ["NE"],
    "228": ["TG"],
    "229": ["BJ"],
    "230": ["MU"],
    "231": ["LR"],
    "232": ["SL"],
    "233": ["GH"],
    "234": ["NG"],
    "235": ["TD"],
    "236": ["CF"],
    "237": ["CM"],
    "238": ["CV"],
    "239": ["ST"],
    "240": ["GQ"],
    "241": ["GA"],
    "242": ["CG"],
    "243": ["CD"],
    "244": ["AO"],
    "245": ["GW"],
    "246": ["IO"],
    "247": ["AC"],
    "248": ["SC"],
    "249": ["SD"],
    "250": ["RW"],
    "251": ["ET"],
    "252": ["SO"],
    "253": ["DJ"],
    "254": ["KE"],
    "255": ["TZ"],
    "256": ["UG"],
    "257": ["BI"],
    "258": ["MZ"],
    "260": ["ZM"],
    "261": ["MG"],
    "262": ["RE", "YT"],
    "263": ["ZW"],
    "264": ["NA"],
    "265": ["MW"],
    "266": ["LS"],
    "267": ["BW"],
    "268": ["SZ"],
    "269": ["KM"],
    "290": ["SH", "TA"],
    "291": ["ER"],
    "297": ["AW"],
    "298": ["FO"],
    "299": ["GL"],
    "350": ["GI"],
    "351": ["PT"],
    "352": ["LU"],
    "353": ["IE"],
    "354": ["IS"],
    "355": ["AL"],
    "356": ["MT"],
    "357": ["CY"],
    "358": ["FI", "AX"],
    "359": ["BG"],
    "370": ["LT"],
    "371": ["LV"],
    "372": ["EE"],
    "373": ["MD"],
    "374": ["AM"],
    "375": ["BY"],
    "376": ["AD"],
    "377": ["MC"],
    "378": ["SM"],
    "380": ["UA"],
    "381": ["RS"],
    "382": ["ME"],
    "383": ["XK"],
    "385": ["HR"],
    "386": ["SI"],
    "387": ["BA"],
    "389": ["MK"],
    "420": ["CZ"],
    "421": ["SK"],
    "423": ["LI"],
    "500": ["FK"],
    "501": ["BZ"],
    "502": ["GT"],
    "503": ["SV"],
    "504": ["HN"],
    "505": ["NI"],
    "506": ["CR"],
    "507": ["PA"],
    "508": ["PM"],
    "509": ["HT"],
    "590": ["GP", "BL", "MF"],
    "591": ["BO"],
    "592": ["GY"],
    "593": ["EC"],
    "594": ["GF"],
    "595": ["PY"],
    "596": ["MQ"],
    "597": ["SR"],
    "598": ["UY"],
    "599": ["CW", "BQ"],
    "670": ["TL"],
    "672": ["NF"],
    "673": ["BN"],
    "674": ["NR"],
    "675": ["PG"],
    "676": ["TO"],
    "677": ["SB"],
    "678": ["VU"],
    "679": ["FJ"],
    "680": ["PW"],
    "681": ["WF"],
    "682": ["CK"],
    "683": ["NU"],
    "685": ["WS"],
    "686": ["KI"],
    "687": ["NC"],
    "688": ["TV"],
    "689": ["PF"],
    "690": ["TK"],
    "691": ["FM"],
    "692": ["MH"],
    "850": ["KP"],
    "852": ["HK"],
    "853": ["MO"],
    "855": ["KH"],
    "856": ["LA"],
    "880": ["BD"],
    "886": ["TW"],
    "960": ["MV"],
    "961": ["LB"],
    "962": ["JO"],
    "963": ["SY"],
    "964": ["IQ"],
    "965": ["KW"],
    "966": ["SA"],
    "967": ["YE"],
    "968": ["OM"],
    "970": ["PS"],
    "971": ["AE"],
    "972": ["IL"],
    "973": ["BH"],
    "974": ["QA"],
    "975": ["BT"],
    "976": ["MN"],
    "977": ["NP"],
    "992": ["TJ"],
    "993": ["TM"],
    "994": ["AZ"],
    "995": ["GE"],
    "996": ["KG"],
    "998": ["UZ"]
  },
  "countries": {
    "AC": ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]],
    "AD": ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]],
    "AE": ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"],
    "AF": ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"],
    "AG": ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([457]\\d{6})$", "268$1", 0, "268"],
    "AI": ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2457]\\d{6})$", "264$1", 0, "264"],
    "AL": ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"],
    "AM": ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"],
    "AO": ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]],
    "AR": ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"],
    "AS": ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "1|([267]\\d{6})$", "684$1", 0, "684"],
    "AT": ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"],
    "AU": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "0|(183[12])", 0, 0, 0, [["(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:83[0-38]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"],
    "AW": ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]],
    "AX": ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"],
    "AZ": ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"],
    "BA": ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"],
    "BB": ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "246$1", 0, "246"],
    "BD": ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"],
    "BE": ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"],
    "BF": ["226", "00", "[025-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]]],
    "BG": ["359", "00", "[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"],
    "BH": ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[047]"]]]],
    "BI": ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]],
    "BJ": ["229", "00", "(?:[25689]\\d|40)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]]],
    "BL": ["590", "00", "(?:590|(?:69|80)\\d|976)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|5[12]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["976[01]\\d{5}"]]],
    "BM": ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-8]\\d{6})$", "441$1", 0, "441"],
    "BN": ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]],
    "BO": ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"],
    "BQ": ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"],
    "BR": ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"],
    "BS": ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([3-8]\\d{6})$", "242$1", 0, "242"],
    "BT": ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]]],
    "BW": ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-79]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]],
    "BY": ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"],
    "BZ": ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]],
    "CA": ["1", "011", "(?:[2-8]\\d|90)\\d{8}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|6[578])|4(?:03|1[68]|3[178]|50|68|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|13|39|47|72)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-7]|33|44|66|77|88)|622)[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]],
    "CC": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:83[0-38]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"],
    "CD": ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]], "0"],
    "CF": ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]],
    "CG": ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]],
    "CH": ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"],
    "CI": ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]],
    "CK": ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]],
    "CL": ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]],
    "CM": ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]],
    "CN": ["86", "00|1(?:[12]\\d|79)\\d\\d00", "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "(?:10|2[0-57-9])(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "0|(1(?:[12]\\d|79)\\d\\d)", 0, 0, 0, 0, "00"],
    "CO": ["57", "00(?:4(?:[14]4|56)|[579])", "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}", [10, 11], [["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["[39]"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0(4(?:[14]4|56)|[579])?"],
    "CR": ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"],
    "CU": ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"],
    "CV": ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]],
    "CW": ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"],
    "CX": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:83[0-38]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"],
    "CY": ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]],
    "CZ": ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]],
    "DE": ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[02-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|[23]1|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"],
    "DJ": ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]],
    "DK": ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]],
    "DM": ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "767$1", 0, "767"],
    "DO": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"],
    "DZ": ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"],
    "EC": ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"],
    "EE": ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]],
    "EG": ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[189]"], "0$1"]], "0"],
    "EH": ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"],
    "ER": ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"],
    "ES": ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]],
    "ET": ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"],
    "FI": ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[12]00|[368]|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[1245]|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"],
    "FJ": ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    "FK": ["500", "00", "[2-7]\\d{4}", [5]],
    "FM": ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]],
    "FO": ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"],
    "FR": ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"],
    "GA": ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"],
    "GB": ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[01359])|(?:5[0-26-9]|[78][0-49])\\d\\d|6(?:[0-4]\\d\\d|50[0-79]))|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|8(?:[02]\\d|1[0-26-9])))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"],
    "GD": ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "473$1", 0, "473"],
    "GE": ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"],
    "GF": ["594", "00", "(?:[56]94|80\\d|976)\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
    "GG": ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "0|([25-9]\\d{5})$", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]],
    "GH": ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"],
    "GI": ["350", "00", "(?:[25]\\d\\d|606)\\d{5}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]],
    "GL": ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]],
    "GM": ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]],
    "GN": ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]],
    "GP": ["590", "00", "(?:590|(?:69|80)\\d|976)\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1289]|5[3-579]|6[0-289]|7[08]|8[0-689]|9\\d)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["976[01]\\d{5}"]]],
    "GQ": ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]],
    "GR": ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]],
    "GT": ["502", "00", "(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]],
    "GU": ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "1|([3-9]\\d{6})$", "671$1", 0, "671"],
    "GW": ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]],
    "GY": ["592", "001", "9008\\d{3}|(?:[2-467]\\d\\d|862)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46-9]"]]]],
    "HK": ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    "HN": ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]],
    "HR": ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9], [["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"],
    "HT": ["509", "00", "[2-489]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-489]"]]]],
    "HU": ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"],
    "ID": ["62", "00[89]", "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"],
    "IE": ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
    "IL": ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"],
    "IM": ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "0|([25-8]\\d{5})$", "1624$1", 0, "74576|(?:16|7[56])24"],
    "IN": ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"],
    "IO": ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]],
    "IQ": ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"],
    "IR": ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"],
    "IS": ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    "IT": ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, [["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]],
    "JE": ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "0|([0-24-8]\\d{5})$", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]],
    "JM": ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"],
    "JO": ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"],
    "JP": ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9]|636)|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9]|636[457-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[27-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|51|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]], "0"],
    "KE": ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"],
    "KG": ["996", "00", "8\\d{9}|(?:[235-8]\\d|99)\\d{7}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
    "KH": ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"],
    "KI": ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"],
    "KM": ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]],
    "KN": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "869$1", 0, "869"],
    "KP": ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"],
    "KR": ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"],
    "KW": ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]],
    "KY": ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "345$1", 0, "345"],
    "KZ": ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"],
    "LA": ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"],
    "LB": ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"],
    "LC": ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "1|([2-8]\\d{6})$", "758$1", 0, "758"],
    "LI": ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "0|(1001)"],
    "LK": ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"],
    "LR": ["231", "00", "(?:2|33|5\\d|77|88)\\d{7}|[4-6]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3578]"], "0$1"]], "0"],
    "LS": ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]],
    "LT": ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]], "8", 0, "[08]"],
    "LU": ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"],
    "LV": ["371", "00", "(?:[268]\\d|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]]],
    "LY": ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"],
    "MA": ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{5})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29[89]|389)", "5(?:29[89]|389)0"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892", "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:29(?:[189][05]|2[29]|3[01])|389[05])\\d{4}|5(?:2(?:[0-25-7]\\d|3[1-578]|4[02-46-8]|8[0235-7]|90)|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[08]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[017]\\d|2[0-2]|6[0-8]))\\d{6}"], ["80\\d{7}"], ["89\\d{7}"], 0, 0, 0, 0, ["592(?:4[0-2]|93)\\d{4}"]]],
    "MC": ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"],
    "MD": ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"],
    "ME": ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"],
    "MF": ["590", "00", "(?:590|(?:69|80)\\d|976)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["976[01]\\d{5}"]]],
    "MG": ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "0|([24-9]\\d{6})$", "20$1"],
    "MH": ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"],
    "MK": ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"],
    "ML": ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]],
    "MM": ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"],
    "MN": ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"],
    "MO": ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]],
    "MP": ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "670$1", 0, "670"],
    "MQ": ["596", "00", "(?:69|80)\\d{7}|(?:59|97)6\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
    "MR": ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]],
    "MS": ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "1|([34]\\d{6})$", "664$1", 0, "664"],
    "MT": ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]],
    "MU": ["230", "0(?:0|[24-7]0|3[03])", "(?:5|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["5"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"],
    "MV": ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9[13-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    "MW": ["265", "00", "(?:[129]\\d|31|77|88)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"],
    "MX": ["52", "0[09]", "1(?:(?:44|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[017]\\d|[235][1-9]|4[0-35-9]|6[0-46-9]|8[1-79]|9[1-8])|[2-9]\\d)\\d{8}", [10, 11], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], 0, 1], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1]], "01", 0, "0(?:[12]|4[45])|1", 0, 0, 0, 0, "00"],
    "MY": ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"],
    "MZ": ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]],
    "NA": ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"],
    "NC": ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]],
    "NE": ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[04]"]]]],
    "NF": ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"],
    "NG": ["234", "009", "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", [7, 8, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"],
    "NI": ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]],
    "NL": ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"],
    "NO": ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]|59"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"],
    "NP": ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"],
    "NR": ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]]],
    "NU": ["683", "00", "(?:[47]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]],
    "NZ": ["64", "0(?:0|161)", "[29]\\d{7,9}|50\\d{5}(?:\\d{2,3})?|6[0-35-9]\\d{6}|7\\d{7,8}|8\\d{4,9}|(?:11\\d|[34])\\d{7}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-579]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|[89]0", "50(?:[0367]|88)|[89]0"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[59]|80"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7|86"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"],
    "OM": ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]],
    "PA": ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]],
    "PE": ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "],
    "PF": ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]],
    "PG": ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    "PH": ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"],
    "PK": ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"],
    "PL": ["48", "00", "6\\d{5}(?:\\d{2})?|8\\d{9}|[1-9]\\d{6}(?:\\d{2})?", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]],
    "PM": ["508", "00", "(?:[45]|80\\d\\d)\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
    "PR": ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"],
    "PS": ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"],
    "PT": ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]],
    "PW": ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]],
    "PY": ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-6])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"],
    "QA": ["974", "00", "[2-7]\\d{7}|800\\d{4}(?:\\d{2})?|2\\d{6}", [7, 8, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["2[126]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]]]],
    "RE": ["262", "00", "976\\d{6}|(?:26|[68]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]], "0", 0, 0, 0, 0, "26[23]|69|[89]"],
    "RO": ["40", "00", "(?:[2378]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "],
    "RS": ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"],
    "RU": ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"],
    "RW": ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]]], "0"],
    "SA": ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"],
    "SB": ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]]],
    "SC": ["248", "010|0[0-2]", "800\\d{4}|(?:[249]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    "SD": ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"],
    "SE": ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"],
    "SG": ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-5]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]],
    "SH": ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"],
    "SI": ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"],
    "SJ": ["47", "00", "0\\d{4}|(?:[489]\\d|[57]9)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"],
    "SK": ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"],
    "SL": ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"],
    "SM": ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"],
    "SN": ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]],
    "SO": ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["24|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3478]|64|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6(?:0[5-7]|[1-35-9])|9[2-9]"]]], "0"],
    "SR": ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]]],
    "SS": ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"],
    "ST": ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]],
    "SV": ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]],
    "SX": ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|(5\\d{6})$", "721$1", 0, "721"],
    "SY": ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]], "0"],
    "SZ": ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]],
    "TA": ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"],
    "TC": ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "1|([2-479]\\d{6})$", "649$1", 0, "649"],
    "TD": ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    "TG": ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]],
    "TH": ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"],
    "TJ": ["992", "810", "(?:00|[1-57-9]\\d)\\d{7}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"],
    "TK": ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]],
    "TL": ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]],
    "TM": ["993", "810", "[1-6]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"],
    "TN": ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]],
    "TO": ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]],
    "TR": ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"],
    "TT": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-46-8]\\d{6})$", "868$1", 0, "868"],
    "TV": ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]],
    "TW": ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"],
    "TZ": ["255", "00[056]", "(?:[26-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"],
    "UA": ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"],
    "UG": ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"],
    "US": ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["5(?:05(?:[2-57-9]\\d\\d|6(?:[0-35-9]\\d|44))|82(?:2(?:0[0-3]|[268]2)|3(?:0[02]|22|33)|4(?:00|4[24]|65|82)|5(?:00|29|58|83)|6(?:00|66|82)|7(?:58|77)|8(?:00|42|5[25]|88)|9(?:00|9[89])))\\d{4}|(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[0-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-289]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}"]]],
    "UY": ["598", "0(?:0|1[3-9]\\d)", "4\\d{9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["405|8|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["4"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "],
    "UZ": ["998", "810", "(?:33|55|[679]\\d|88)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[35-9]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"],
    "VA": ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698"],
    "VC": ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "784$1", 0, "784"],
    "VE": ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"],
    "VG": ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-578]\\d{6})$", "284$1", 0, "284"],
    "VI": ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "340$1", 0, "340"],
    "VN": ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"],
    "VU": ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]],
    "WF": ["681", "00", "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]],
    "WS": ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]],
    "XK": ["383", "00", "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]], "0"],
    "YE": ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"],
    "YT": ["262", "00", "80\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, "269|63"],
    "ZA": ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"],
    "ZM": ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], "0"],
    "ZW": ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"]
  },
  "nonGeographic": {
    "800": ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]],
    "808": ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]],
    "870": ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]],
    "878": ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]],
    "881": ["881", 0, "[0-36-9]\\d{8}", [9], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-36-9]"]]], 0, 0, 0, 0, 0, 0, [0, ["[0-36-9]\\d{8}"]]],
    "882": ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|285\\d{9}|(?:[19]\\d|49)\\d{6}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["4"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[19]"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["34[57]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-3]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|3(?:2|47|7\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:(?:285\\d\\d|3(?:45|[69]\\d{3}))\\d|9[89])\\d{6}"]]],
    "883": ["883", 0, "(?:210|370\\d\\d)\\d{7}|51\\d{7}(?:\\d{3})?", [9, 10, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[35]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:210|(?:370[1-9]|51[013]0)\\d)\\d{7}|5100\\d{5}"]]],
    "888": ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]],
    "979": ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]]
  }
});

/***/ }),

/***/ 6917:
/*!*****************************************************************!*\
  !*** ./node_modules/libphonenumber-js/min/exports/AsYouType.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsYouType": () => (/* binding */ AsYouType)
/* harmony export */ });
/* harmony import */ var _metadata_min_json_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../metadata.min.json.js */ 49);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/index.js */ 9282);
// Importing from a ".js" file is a workaround for Node.js "ES Modules"
// importing system which is even uncapable of importing "*.json" files.


function AsYouType(country) {
  return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, country, _metadata_min_json_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
}
AsYouType.prototype = Object.create(_core_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype, {});
AsYouType.prototype.constructor = AsYouType;

/***/ }),

/***/ 3727:
/*!************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/min/exports/getExampleNumber.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getExampleNumber": () => (/* binding */ getExampleNumber)
/* harmony export */ });
/* harmony import */ var _withMetadataArgument_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withMetadataArgument.js */ 4635);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/index.js */ 959);


function getExampleNumber() {
  return (0,_withMetadataArgument_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_core_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], arguments);
}

/***/ }),

/***/ 2547:
/*!**********************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/min/exports/parsePhoneNumberFromString.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parsePhoneNumberFromString": () => (/* binding */ parsePhoneNumberFromString)
/* harmony export */ });
/* harmony import */ var _withMetadataArgument_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withMetadataArgument.js */ 4635);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/index.js */ 3717);


function parsePhoneNumberFromString() {
  return (0,_withMetadataArgument_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_core_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], arguments);
}

/***/ }),

/***/ 3004:
/*!*********************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/min/exports/parsePhoneNumberWithError.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parsePhoneNumberWithError": () => (/* binding */ parsePhoneNumberWithError)
/* harmony export */ });
/* harmony import */ var _withMetadataArgument_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withMetadataArgument.js */ 4635);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/index.js */ 1863);


function parsePhoneNumberWithError() {
  return (0,_withMetadataArgument_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_core_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], arguments);
}

/***/ }),

/***/ 4635:
/*!****************************************************************************!*\
  !*** ./node_modules/libphonenumber-js/min/exports/withMetadataArgument.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ withMetadataArgument)
/* harmony export */ });
/* harmony import */ var _metadata_min_json_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../metadata.min.json.js */ 49);
// Importing from a ".js" file is a workaround for Node.js "ES Modules"
// importing system which is even uncapable of importing "*.json" files.

function withMetadataArgument(func, _arguments) {
  var args = Array.prototype.slice.call(_arguments);
  args.push(_metadata_min_json_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  return func.apply(this, args);
}

/***/ }),

/***/ 838:
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-mat-intl-tel-input/fesm2015/ngx-mat-intl-tel-input.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxMatIntlTelInputComponent": () => (/* binding */ NgxMatIntlTelInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var libphonenumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libphonenumber-js */ 3004);
/* harmony import */ var libphonenumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! libphonenumber-js */ 3727);
/* harmony import */ var libphonenumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! libphonenumber-js */ 2547);
/* harmony import */ var libphonenumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! libphonenumber-js */ 6917);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ 6484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ 4128);





















/* eslint-disable */

class CountryCode {
  constructor() {
    this.allCountries = [['Afghanistan (‫افغانستان‬‎)', 'af', '93'], ['Albania (Shqipëri)', 'al', '355'], ['Algeria (‫الجزائر‬‎)', 'dz', '213'], ['American Samoa', 'as', '1684'], ['Andorra', 'ad', '376'], ['Angola', 'ao', '244'], ['Anguilla', 'ai', '1264'], ['Antigua and Barbuda', 'ag', '1268'], ['Argentina', 'ar', '54'], ['Armenia (Հայաստան)', 'am', '374'], ['Aruba', 'aw', '297'], ['Australia', 'au', '61', 0], ['Austria (Österreich)', 'at', '43'], ['Azerbaijan (Azərbaycan)', 'az', '994'], ['Bahamas', 'bs', '1242'], ['Bahrain (‫البحرين‬‎)', 'bh', '973'], ['Bangladesh (বাংলাদেশ)', 'bd', '880'], ['Barbados', 'bb', '1246'], ['Belarus (Беларусь)', 'by', '375'], ['Belgium (België)', 'be', '32'], ['Belize', 'bz', '501'], ['Benin (Bénin)', 'bj', '229'], ['Bermuda', 'bm', '1441'], ['Bhutan (འབྲུག)', 'bt', '975'], ['Bolivia', 'bo', '591'], ['Bosnia and Herzegovina (Босна и Херцеговина)', 'ba', '387'], ['Botswana', 'bw', '267'], ['Brazil (Brasil)', 'br', '55'], ['British Indian Ocean Territory', 'io', '246'], ['British Virgin Islands', 'vg', '1284'], ['Brunei', 'bn', '673'], ['Bulgaria (България)', 'bg', '359'], ['Burkina Faso', 'bf', '226'], ['Burundi (Uburundi)', 'bi', '257'], ['Cambodia (កម្ពុជា)', 'kh', '855'], ['Cameroon (Cameroun)', 'cm', '237'], ['Canada', 'ca', '1', 1, ['204', '226', '236', '249', '250', '289', '306', '343', '365', '387', '403', '416', '418', '431', '437', '438', '450', '506', '514', '519', '548', '579', '581', '587', '604', '613', '639', '647', '672', '705', '709', '742', '778', '780', '782', '807', '819', '825', '867', '873', '902', '905']], ['Cape Verde (Kabu Verdi)', 'cv', '238'], ['Caribbean Netherlands', 'bq', '599', 1], ['Cayman Islands', 'ky', '1345'], ['Central African Republic (République centrafricaine)', 'cf', '236'], ['Chad (Tchad)', 'td', '235'], ['Chile', 'cl', '56'], ['China (中国)', 'cn', '86'], ['Christmas Island', 'cx', '61', 2], ['Cocos (Keeling) Islands', 'cc', '61', 1], ['Colombia', 'co', '57'], ['Comoros (‫جزر القمر‬‎)', 'km', '269'], ['Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)', 'cd', '243'], ['Congo (Republic) (Congo-Brazzaville)', 'cg', '242'], ['Cook Islands', 'ck', '682'], ['Costa Rica', 'cr', '506'], ['Côte d’Ivoire', 'ci', '225'], ['Croatia (Hrvatska)', 'hr', '385'], ['Cuba', 'cu', '53'], ['Curaçao', 'cw', '599', 0], ['Cyprus (Κύπρος)', 'cy', '357'], ['Czech Republic (Česká republika)', 'cz', '420'], ['Denmark (Danmark)', 'dk', '45'], ['Djibouti', 'dj', '253'], ['Dominica', 'dm', '1767'], ['Dominican Republic (República Dominicana)', 'do', '1', 2, ['809', '829', '849']], ['Ecuador', 'ec', '593'], ['Egypt (‫مصر‬‎)', 'eg', '20'], ['El Salvador', 'sv', '503'], ['Equatorial Guinea (Guinea Ecuatorial)', 'gq', '240'], ['Eritrea', 'er', '291'], ['Estonia (Eesti)', 'ee', '372'], ['Ethiopia', 'et', '251'], ['Falkland Islands (Islas Malvinas)', 'fk', '500'], ['Faroe Islands (Føroyar)', 'fo', '298'], ['Fiji', 'fj', '679'], ['Finland (Suomi)', 'fi', '358', 0], ['France', 'fr', '33'], ['French Guiana (Guyane française)', 'gf', '594'], ['French Polynesia (Polynésie française)', 'pf', '689'], ['Gabon', 'ga', '241'], ['Gambia', 'gm', '220'], ['Georgia (საქართველო)', 'ge', '995'], ['Germany (Deutschland)', 'de', '49'], ['Ghana (Gaana)', 'gh', '233'], ['Gibraltar', 'gi', '350'], ['Greece (Ελλάδα)', 'gr', '30'], ['Greenland (Kalaallit Nunaat)', 'gl', '299'], ['Grenada', 'gd', '1473'], ['Guadeloupe', 'gp', '590', 0], ['Guam', 'gu', '1671'], ['Guatemala', 'gt', '502'], ['Guernsey', 'gg', '44', 1], ['Guinea (Guinée)', 'gn', '224'], ['Guinea-Bissau (Guiné Bissau)', 'gw', '245'], ['Guyana', 'gy', '592'], ['Haiti', 'ht', '509'], ['Honduras', 'hn', '504'], ['Hong Kong (香港)', 'hk', '852'], ['Hungary (Magyarország)', 'hu', '36'], ['Iceland (Ísland)', 'is', '354'], ['India (भारत)', 'in', '91'], ['Indonesia', 'id', '62'], ['Iran (‫ایران‬‎)', 'ir', '98'], ['Iraq (‫العراق‬‎)', 'iq', '964'], ['Ireland', 'ie', '353'], ['Isle of Man', 'im', '44', 2], ['Israel (‫ישראל‬‎)', 'il', '972'], ['Italy (Italia)', 'it', '39', 0], ['Jamaica', 'jm', '1', 4, ['876', '658']], ['Japan (日本)', 'jp', '81'], ['Jersey', 'je', '44', 3], ['Jordan (‫الأردن‬‎)', 'jo', '962'], ['Kazakhstan (Казахстан)', 'kz', '7', 1], ['Kenya', 'ke', '254'], ['Kiribati', 'ki', '686'], ['Kosovo', 'xk', '383'], ['Kuwait (‫الكويت‬‎)', 'kw', '965'], ['Kyrgyzstan (Кыргызстан)', 'kg', '996'], ['Laos (ລາວ)', 'la', '856'], ['Latvia (Latvija)', 'lv', '371'], ['Lebanon (‫لبنان‬‎)', 'lb', '961'], ['Lesotho', 'ls', '266'], ['Liberia', 'lr', '231'], ['Libya (‫ليبيا‬‎)', 'ly', '218'], ['Liechtenstein', 'li', '423'], ['Lithuania (Lietuva)', 'lt', '370'], ['Luxembourg', 'lu', '352'], ['Macau (澳門)', 'mo', '853'], ['Macedonia (FYROM) (Македонија)', 'mk', '389'], ['Madagascar (Madagasikara)', 'mg', '261'], ['Malawi', 'mw', '265'], ['Malaysia', 'my', '60'], ['Maldives', 'mv', '960'], ['Mali', 'ml', '223'], ['Malta', 'mt', '356'], ['Marshall Islands', 'mh', '692'], ['Martinique', 'mq', '596'], ['Mauritania (‫موريتانيا‬‎)', 'mr', '222'], ['Mauritius (Moris)', 'mu', '230'], ['Mayotte', 'yt', '262', 1], ['Mexico (México)', 'mx', '52'], ['Micronesia', 'fm', '691'], ['Moldova (Republica Moldova)', 'md', '373'], ['Monaco', 'mc', '377'], ['Mongolia (Монгол)', 'mn', '976'], ['Montenegro (Crna Gora)', 'me', '382'], ['Montserrat', 'ms', '1664'], ['Morocco (‫المغرب‬‎)', 'ma', '212', 0], ['Mozambique (Moçambique)', 'mz', '258'], ['Myanmar (Burma) (မြန်မာ)', 'mm', '95'], ['Namibia (Namibië)', 'na', '264'], ['Nauru', 'nr', '674'], ['Nepal (नेपाल)', 'np', '977'], ['Netherlands (Nederland)', 'nl', '31'], ['New Caledonia (Nouvelle-Calédonie)', 'nc', '687'], ['New Zealand', 'nz', '64'], ['Nicaragua', 'ni', '505'], ['Niger (Nijar)', 'ne', '227'], ['Nigeria', 'ng', '234'], ['Niue', 'nu', '683'], ['Norfolk Island', 'nf', '672'], ['North Korea (조선 민주주의 인민 공화국)', 'kp', '850'], ['Northern Mariana Islands', 'mp', '1670'], ['Norway (Norge)', 'no', '47', 0], ['Oman (‫عُمان‬‎)', 'om', '968'], ['Pakistan (‫پاکستان‬‎)', 'pk', '92'], ['Palau', 'pw', '680'], ['Palestine (‫فلسطين‬‎)', 'ps', '970'], ['Panama (Panamá)', 'pa', '507'], ['Papua New Guinea', 'pg', '675'], ['Paraguay', 'py', '595'], ['Peru (Perú)', 'pe', '51'], ['Philippines', 'ph', '63'], ['Poland (Polska)', 'pl', '48'], ['Portugal', 'pt', '351'], ['Puerto Rico', 'pr', '1', 3, ['787', '939']], ['Qatar (‫قطر‬‎)', 'qa', '974'], ['Réunion (La Réunion)', 're', '262', 0], ['Romania (România)', 'ro', '40'], ['Russia (Россия)', 'ru', '7', 0], ['Rwanda', 'rw', '250'], ['Saint Barthélemy', 'bl', '590', 1], ['Saint Helena', 'sh', '290'], ['Saint Kitts and Nevis', 'kn', '1869'], ['Saint Lucia', 'lc', '1758'], ['Saint Martin (Saint-Martin (partie française))', 'mf', '590', 2], ['Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)', 'pm', '508'], ['Saint Vincent and the Grenadines', 'vc', '1784'], ['Samoa', 'ws', '685'], ['San Marino', 'sm', '378'], ['São Tomé and Príncipe (São Tomé e Príncipe)', 'st', '239'], ['Saudi Arabia (‫المملكة العربية السعودية‬‎)', 'sa', '966'], ['Senegal (Sénégal)', 'sn', '221'], ['Serbia (Србија)', 'rs', '381'], ['Seychelles', 'sc', '248'], ['Sierra Leone', 'sl', '232'], ['Singapore', 'sg', '65'], ['Sint Maarten', 'sx', '1721'], ['Slovakia (Slovensko)', 'sk', '421'], ['Slovenia (Slovenija)', 'si', '386'], ['Solomon Islands', 'sb', '677'], ['Somalia (Soomaaliya)', 'so', '252'], ['South Africa', 'za', '27'], ['South Korea (대한민국)', 'kr', '82'], ['South Sudan (‫جنوب السودان‬‎)', 'ss', '211'], ['Spain (España)', 'es', '34'], ['Sri Lanka (ශ්‍රී ලංකාව)', 'lk', '94'], ['Sudan (‫السودان‬‎)', 'sd', '249'], ['Suriname', 'sr', '597'], ['Svalbard and Jan Mayen', 'sj', '47', 1], ['Swaziland', 'sz', '268'], ['Sweden (Sverige)', 'se', '46'], ['Switzerland (Schweiz)', 'ch', '41'], ['Syria (‫سوريا‬‎)', 'sy', '963'], ['Taiwan (台灣)', 'tw', '886'], ['Tajikistan', 'tj', '992'], ['Tanzania', 'tz', '255'], ['Thailand (ไทย)', 'th', '66'], ['Timor-Leste', 'tl', '670'], ['Togo', 'tg', '228'], ['Tokelau', 'tk', '690'], ['Tonga', 'to', '676'], ['Trinidad and Tobago', 'tt', '1868'], ['Tunisia (‫تونس‬‎)', 'tn', '216'], ['Turkey (Türkiye)', 'tr', '90'], ['Turkmenistan', 'tm', '993'], ['Turks and Caicos Islands', 'tc', '1649'], ['Tuvalu', 'tv', '688'], ['U.S. Virgin Islands', 'vi', '1340'], ['Uganda', 'ug', '256'], ['Ukraine (Україна)', 'ua', '380'], ['United Arab Emirates (‫الإمارات العربية المتحدة‬‎)', 'ae', '971'], ['United Kingdom', 'gb', '44', 0], ['United States', 'us', '1', 0], ['Uruguay', 'uy', '598'], ['Uzbekistan (Oʻzbekiston)', 'uz', '998'], ['Vanuatu', 'vu', '678'], ['Vatican City (Città del Vaticano)', 'va', '39', 1], ['Venezuela', 've', '58'], ['Vietnam (Việt Nam)', 'vn', '84'], ['Wallis and Futuna (Wallis-et-Futuna)', 'wf', '681'], ['Western Sahara (‫الصحراء الغربية‬‎)', 'eh', '212', 1], ['Yemen (‫اليمن‬‎)', 'ye', '967'], ['Zambia', 'zm', '260'], ['Zimbabwe', 'zw', '263'], ['Åland Islands', 'ax', '358', 1]];
  }

}

CountryCode.ɵfac = function CountryCode_Factory(t) {
  return new (t || CountryCode)();
};

CountryCode.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: CountryCode,
  factory: CountryCode.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryCode, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

const Examples = {
  '001': '001',
  AC: '40123',
  AD: '312345',
  AE: '501234567',
  AF: '701234567',
  AG: '2684641234',
  AI: '2642351234',
  AL: '662123456',
  AM: '77123456',
  AO: '923123456',
  AR: '91123456789',
  AS: '6847331234',
  AT: '664123456',
  AU: '412345678',
  AW: '5601234',
  AX: '412345678',
  AZ: '401234567',
  BA: '61123456',
  BB: '2462501234',
  BD: '1812345678',
  BE: '470123456',
  BF: '70123456',
  BG: '48123456',
  BH: '36001234',
  BI: '79561234',
  BJ: '90011234',
  BL: '690001234',
  BM: '4413701234',
  BN: '7123456',
  BO: '71234567',
  BQ: '3181234',
  BR: '11961234567',
  BS: '2423591234',
  BT: '17123456',
  BW: '71123456',
  BY: '294911911',
  BZ: '6221234',
  CA: '5062345678',
  CC: '412345678',
  CD: '991234567',
  CF: '70012345',
  CG: '061234567',
  CH: '781234567',
  CI: '01234567',
  CK: '71234',
  CL: '221234567',
  CM: '671234567',
  CN: '13123456789',
  CO: '3211234567',
  CR: '83123456',
  CU: '51234567',
  CV: '9911234',
  CW: '95181234',
  CX: '412345678',
  CY: '96123456',
  CZ: '601123456',
  DE: '15123456789',
  DJ: '77831001',
  DK: '32123456',
  DM: '7672251234',
  DO: '8092345678',
  DZ: '551234567',
  EC: '991234567',
  EE: '51234567',
  EG: '1001234567',
  EH: '650123456',
  ER: '7123456',
  ES: '612345678',
  ET: '911234567',
  FI: '412345678',
  FJ: '7012345',
  FK: '51234',
  FM: '3501234',
  FO: '211234',
  FR: '612345678',
  GA: '06031234',
  GB: '7400123456',
  GD: '4734031234',
  GE: '555123456',
  GF: '694201234',
  GG: '7781123456',
  GH: '231234567',
  GI: '57123456',
  GL: '221234',
  GM: '3012345',
  GN: '601123456',
  GP: '690001234',
  GQ: '222123456',
  GR: '6912345678',
  GT: '51234567',
  GU: '6713001234',
  GW: '955012345',
  GY: '6091234',
  HK: '51234567',
  HN: '91234567',
  HR: '921234567',
  HT: '34101234',
  HU: '201234567',
  ID: '812345678',
  IE: '850123456',
  IL: '502345678',
  IM: '7924123456',
  IN: '8123456789',
  IO: '3801234',
  IQ: '7912345678',
  IR: '9123456789',
  IS: '6111234',
  IT: '3123456789',
  JE: '7797712345',
  JM: '8762101234',
  JO: '790123456',
  JP: '9012345678',
  KE: '712123456',
  KG: '700123456',
  KH: '91234567',
  KI: '72001234',
  KM: '3212345',
  KN: '8697652917',
  KP: '1921234567',
  KR: '1000000000',
  KW: '50012345',
  KY: '3453231234',
  KZ: '7710009998',
  LA: '2023123456',
  LB: '71123456',
  LC: '7582845678',
  LI: '660234567',
  LK: '712345678',
  LR: '770123456',
  LS: '50123456',
  LT: '61234567',
  LU: '628123456',
  LV: '21234567',
  LY: '912345678',
  MA: '650123456',
  MC: '612345678',
  MD: '62112345',
  ME: '67622901',
  MF: '690001234',
  MG: '321234567',
  MH: '2351234',
  MK: '72345678',
  ML: '65012345',
  MM: '92123456',
  MN: '88123456',
  MO: '66123456',
  MP: '6702345678',
  MQ: '696201234',
  MR: '22123456',
  MS: '6644923456',
  MT: '96961234',
  MU: '52512345',
  MV: '7712345',
  MW: '991234567',
  MX: '12221234567',
  MY: '123456789',
  MZ: '821234567',
  NA: '811234567',
  NC: '751234',
  NE: '93123456',
  NF: '381234',
  NG: '8021234567',
  NI: '81234567',
  NL: '612345678',
  NO: '40612345',
  NP: '9841234567',
  NR: '5551234',
  NU: '8884012',
  NZ: '211234567',
  OM: '92123456',
  PA: '61234567',
  PE: '912345678',
  PF: '87123456',
  PG: '70123456',
  PH: '9051234567',
  PK: '3012345678',
  PL: '512345678',
  PM: '551234',
  PR: '7872345678',
  PS: '599123456',
  PT: '912345678',
  PW: '6201234',
  PY: '961456789',
  QA: '33123456',
  RE: '692123456',
  RO: '712034567',
  RS: '601234567',
  RU: '9123456789',
  RW: '720123456',
  SA: '512345678',
  SB: '7421234',
  SC: '2510123',
  SD: '911231234',
  SE: '701234567',
  SG: '81234567',
  SH: '51234',
  SI: '31234567',
  SJ: '41234567',
  SK: '912123456',
  SL: '25123456',
  SM: '66661212',
  SN: '701234567',
  SO: '71123456',
  SR: '7412345',
  SS: '977123456',
  ST: '9812345',
  SV: '70123456',
  SX: '7215205678',
  SY: '944567890',
  SZ: '76123456',
  TA: '8999',
  TC: '6492311234',
  TD: '63012345',
  TG: '90112345',
  TH: '812345678',
  TJ: '917123456',
  TK: '7290',
  TL: '77212345',
  TM: '66123456',
  TN: '20123456',
  TO: '7715123',
  TR: '5012345678',
  TT: '8682911234',
  TV: '901234',
  TW: '912345678',
  TZ: '621234567',
  UA: '501234567',
  UG: '712345678',
  US: '2015550123',
  UY: '94231234',
  UZ: '912345678',
  VA: '3123456789',
  VC: '7844301234',
  VE: '4121234567',
  VG: '2843001234',
  VI: '3406421234',
  VN: '912345678',
  VU: '5912345',
  WF: '501234',
  WS: '7212345',
  XK: '43201234',
  YE: '712345678',
  YT: '639012345',
  ZA: '711234567',
  ZM: '955123456',
  ZW: '712345678'
};

const phoneNumberValidator = control => {
  const error = {
    validatePhoneNumber: true
  };
  let numberInstance;

  if (control.value) {
    try {
      numberInstance = (0,libphonenumber_js__WEBPACK_IMPORTED_MODULE_1__.parsePhoneNumberWithError)(control.value);
    } catch (e) {
      control.setValue(null);
      return error;
    }

    if (numberInstance && !numberInstance.isValid()) {
      control.setValue(null);

      if (!control.touched) {
        control.markAsTouched();
      }

      return error;
    }
  }

  return null;
};

class SearchPipe {
  // country | search:'searchCriteria'
  transform(country, searchCriteria) {
    if (!searchCriteria || searchCriteria === '') {
      return true;
    }

    return `${country.name}+${country.dialCode}`.toLowerCase().includes(searchCriteria.toLowerCase());
  }

}

SearchPipe.ɵfac = function SearchPipe_Factory(t) {
  return new (t || SearchPipe)();
};

SearchPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "search",
  type: SearchPipe,
  pure: true,
  standalone: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'search',
      standalone: true
    }]
  }], null, null);
})();
/* eslint-disable @typescript-eslint/member-ordering, no-underscore-dangle, id-blacklist,
id-match, @typescript-eslint/naming-convention */


function NgxMatIntlTelInputComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", ctx_r0.selectedCountry.dialCode, "");
  }
}

function NgxMatIntlTelInputComponent_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NgxMatIntlTelInputComponent_input_6_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.searchCriteria = $event);
    })("click", function NgxMatIntlTelInputComponent_input_6_Template_input_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.searchCriteria)("placeholder", ctx_r2.searchPlaceholder);
  }
}

function NgxMatIntlTelInputComponent_button_7_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const country_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", country_r10.dialCode, "");
  }
}

function NgxMatIntlTelInputComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatIntlTelInputComponent_button_7_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const country_r10 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.onCountrySelect(country_r10, _r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxMatIntlTelInputComponent_button_7_span_5_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const country_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", country_r10.flagClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r10.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", country_r10 == null ? null : country_r10.dialCode);
  }
}

function NgxMatIntlTelInputComponent_mat_divider_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider");
  }
}

function NgxMatIntlTelInputComponent_ng_container_9_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatIntlTelInputComponent_ng_container_9_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const country_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.onCountrySelect(country_r15, _r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const country_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", country_r15.flagClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", country_r15.name, " +", country_r15.dialCode, " ");
  }
}

function NgxMatIntlTelInputComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatIntlTelInputComponent_ng_container_9_button_1_Template, 5, 3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const country_r15 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, country_r15, ctx_r5.searchCriteria));
  }
}

class NgxMatIntlTelInputBase {
  constructor(_defaultErrorStateMatcher, _parentForm, _parentFormGroup,
  /** @docs-private */
  ngControl) {
    this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
    this._parentForm = _parentForm;
    this._parentFormGroup = _parentFormGroup;
    this.ngControl = ngControl;
    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }

}

const _NgxMatIntlTelInputMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinErrorState)(NgxMatIntlTelInputBase);

class NgxMatIntlTelInputComponent extends _NgxMatIntlTelInputMixinBase {
  constructor(_changeDetectorRef, countryCodeData, fm, elRef, ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher) {
    super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
    this._changeDetectorRef = _changeDetectorRef;
    this.countryCodeData = countryCodeData;
    this.fm = fm;
    this.elRef = elRef;
    this.ngControl = ngControl;
    this.preferredCountries = [];
    this.enablePlaceholder = true;
    this.onlyCountries = [];
    this.errorStateMatcher = new _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher();
    this.enableSearch = false;
    this.describedBy = '';
    this._required = false;
    this._disabled = false;
    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.focused = false;
    this.id = `ngx-mat-intl-tel-input-${NgxMatIntlTelInputComponent.nextId++}`;
    this.allCountries = [];
    this.preferredCountriesInDropDown = [];
    this.countryChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._format = 'default';

    this.onTouched = () => {};

    this.propagateChange = _ => {};

    fm.monitor(elRef, true).subscribe(origin => {
      if (this.focused && !origin) {
        this.onTouched();
      }

      this.focused = !!origin;
      this.stateChanges.next(undefined);
    });
    this.fetchCountryData();

    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  get format() {
    return this._format;
  }

  set format(value) {
    this._format = value;
    this.phoneNumber = this.formattedPhoneNumber;
    this.stateChanges.next(undefined);
  }

  static getPhoneNumberPlaceHolder(countryISOCode) {
    const result = (0,libphonenumber_js__WEBPACK_IMPORTED_MODULE_4__.getExampleNumber)(countryISOCode, Examples);
    return !!result ? result.number.toString() : undefined;
  }

  ngOnInit() {
    if (!this.searchPlaceholder) {
      this.searchPlaceholder = 'Search ...';
    }

    if (this.preferredCountries.length) {
      this.preferredCountries.forEach(iso2 => {
        const preferredCountry = this.allCountries.filter(c => c.iso2 === iso2).shift();

        if (preferredCountry) {
          this.preferredCountriesInDropDown.push(preferredCountry);
        }
      });
    }

    if (this.onlyCountries.length) {
      this.allCountries = this.allCountries.filter(c => this.onlyCountries.includes(c.iso2));
    }

    if (this.numberInstance && this.numberInstance.country) {
      // If an existing number is present, we use it to determine selectedCountry
      this.selectedCountry = this.getCountry(this.numberInstance.country);
    } else {
      if (this.preferredCountriesInDropDown.length) {
        this.selectedCountry = this.preferredCountriesInDropDown[0];
      } else {
        this.selectedCountry = this.allCountries[0];
      }
    }

    this.countryChanged.emit(this.selectedCountry);

    this._changeDetectorRef.markForCheck();

    this.stateChanges.next(undefined);
  }

  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
    }
  }

  onPhoneNumberChange() {
    var _a, _b, _c, _d, _e;

    try {
      this.numberInstance = (0,libphonenumber_js__WEBPACK_IMPORTED_MODULE_5__.parsePhoneNumberFromString)(((_a = this.phoneNumber) === null || _a === void 0 ? void 0 : _a.toString()) || '', (_b = this.selectedCountry) === null || _b === void 0 ? void 0 : _b.iso2.toUpperCase());
      this.formatAsYouTypeIfEnabled();
      this.value = (_c = this.numberInstance) === null || _c === void 0 ? void 0 : _c.number;

      if (this.numberInstance && this.numberInstance.isValid()) {
        if (this.phoneNumber !== this.formattedPhoneNumber) {
          this.phoneNumber = this.formattedPhoneNumber;
        }

        if (((_d = this.selectedCountry) === null || _d === void 0 ? void 0 : _d.iso2) !== this.numberInstance.country && !!this.numberInstance.country) {
          this.selectedCountry = this.getCountry(this.numberInstance.country);
          this.countryChanged.emit(this.selectedCountry);
        }
      }
    } catch (e) {
      // if no possible numbers are there,
      // then the full number is passed so that validator could be triggered and proper error could be shown
      this.value = (_e = this.phoneNumber) === null || _e === void 0 ? void 0 : _e.toString();
    }

    this.propagateChange(this.value);

    this._changeDetectorRef.markForCheck();
  }

  onCountrySelect(country, el) {
    var _a;

    if (this.phoneNumber) {
      this.phoneNumber = (_a = this.numberInstance) === null || _a === void 0 ? void 0 : _a.nationalNumber;
    }

    this.selectedCountry = country;
    this.countryChanged.emit(this.selectedCountry);
    this.onPhoneNumberChange();
    el.focus();
  }

  getCountry(code) {
    return this.allCountries.find(c => c.iso2 === code.toLowerCase()) || {
      name: 'UN',
      iso2: 'UN',
      dialCode: '',
      priority: 0,
      areaCodes: undefined,
      flagClass: 'UN',
      placeHolder: ''
    };
  }

  onInputKeyPress(event) {
    const pattern = /[0-9+\- ]/;

    if (!pattern.test(event.key)) {
      event.preventDefault();
    }
  }

  fetchCountryData() {
    this.countryCodeData.allCountries.forEach(c => {
      const country = {
        name: c[0].toString(),
        iso2: c[1].toString(),
        dialCode: c[2].toString(),
        priority: +c[3] || 0,
        areaCodes: c[4] || undefined,
        flagClass: c[1].toString().toUpperCase(),
        placeHolder: ''
      };

      if (this.enablePlaceholder) {
        country.placeHolder = NgxMatIntlTelInputComponent.getPhoneNumberPlaceHolder(country.iso2.toUpperCase());
      }

      this.allCountries.push(country);
    });
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled) {
    this.disabled = isDisabled;

    this._changeDetectorRef.markForCheck();

    this.stateChanges.next(undefined);
  }

  writeValue(value) {
    if (value) {
      this.numberInstance = (0,libphonenumber_js__WEBPACK_IMPORTED_MODULE_5__.parsePhoneNumberFromString)(value);

      if (this.numberInstance) {
        const countryCode = this.numberInstance.country;
        this.phoneNumber = this.formattedPhoneNumber;

        if (!countryCode) {
          return;
        }

        setTimeout(() => {
          this.selectedCountry = this.getCountry(countryCode);

          if (this.selectedCountry.dialCode && !this.preferredCountries.includes(this.selectedCountry.iso2)) {
            this.preferredCountriesInDropDown.push(this.selectedCountry);
          }

          this.countryChanged.emit(this.selectedCountry); // Initial value is set

          this._changeDetectorRef.markForCheck();

          this.stateChanges.next(undefined);
        }, 1);
      } else {
        this.phoneNumber = value;
      }
    } // Value is set from outside using setValue()


    this._changeDetectorRef.markForCheck();

    this.stateChanges.next(undefined);
  }

  get empty() {
    return !this.phoneNumber;
  }

  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  get placeholder() {
    return this._placeholder || '';
  }

  set placeholder(value) {
    this._placeholder = value;
    this.stateChanges.next(undefined);
  }

  get required() {
    return this._required;
  }

  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceBooleanProperty)(value);
    this.stateChanges.next(undefined);
  }

  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceBooleanProperty)(value);
    this.stateChanges.next(undefined);
  }

  setDescribedByIds(ids) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event) {
    if (event.target.tagName.toLowerCase() !== 'input') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.elRef.nativeElement.querySelector('input').focus();
    }
  }

  reset() {
    this.phoneNumber = '';
    this.propagateChange(null);

    this._changeDetectorRef.markForCheck();

    this.stateChanges.next(undefined);
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef);
  }

  get formattedPhoneNumber() {
    var _a;

    if (!this.numberInstance) {
      return ((_a = this.phoneNumber) === null || _a === void 0 ? void 0 : _a.toString()) || '';
    }

    switch (this.format) {
      case 'national':
        return this.numberInstance.formatNational();

      case 'international':
        return this.numberInstance.formatInternational();

      default:
        return this.numberInstance.nationalNumber.toString();
    }
  }

  formatAsYouTypeIfEnabled() {
    var _a, _b, _c;

    if (this.format === 'default') {
      return;
    }

    const asYouType = new libphonenumber_js__WEBPACK_IMPORTED_MODULE_7__.AsYouType((_a = this.selectedCountry) === null || _a === void 0 ? void 0 : _a.iso2.toUpperCase()); // To avoid caret positioning we apply formatting only if the caret is at the end:

    if ((_b = this.phoneNumber) === null || _b === void 0 ? void 0 : _b.toString().startsWith(this.previousFormattedNumber || '')) {
      this.phoneNumber = asYouType.input(this.phoneNumber.toString());
    }

    this.previousFormattedNumber = (_c = this.phoneNumber) === null || _c === void 0 ? void 0 : _c.toString();
  }

}

NgxMatIntlTelInputComponent.nextId = 0;

NgxMatIntlTelInputComponent.ɵfac = function NgxMatIntlTelInputComponent_Factory(t) {
  return new (t || NgxMatIntlTelInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CountryCode), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher));
};

NgxMatIntlTelInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxMatIntlTelInputComponent,
  selectors: [["ngx-mat-intl-tel-input"]],
  viewQuery: function NgxMatIntlTelInputComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenu, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.matMenu = _t.first);
    }
  },
  hostVars: 3,
  hostBindings: function NgxMatIntlTelInputComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngx-floating", ctx.shouldLabelFloat);
    }
  },
  inputs: {
    preferredCountries: "preferredCountries",
    enablePlaceholder: "enablePlaceholder",
    inputPlaceholder: "inputPlaceholder",
    cssClass: "cssClass",
    name: "name",
    onlyCountries: "onlyCountries",
    errorStateMatcher: "errorStateMatcher",
    enableSearch: "enableSearch",
    searchPlaceholder: "searchPlaceholder",
    describedBy: "describedBy",
    format: "format",
    placeholder: "placeholder",
    required: "required",
    disabled: "disabled"
  },
  outputs: {
    countryChanged: "countryChanged"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CountryCode, {
    provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldControl,
    useExisting: NgxMatIntlTelInputComponent
  }, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NG_VALIDATORS,
    useValue: phoneNumberValidator,
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 12,
  vars: 14,
  consts: [[1, "ngx-mat-tel-input-container"], ["type", "button", "mat-button", "", 1, "country-selector", 3, "matMenuTriggerFor", "disabled"], [1, "country-selector-flag", "flag", 3, "ngClass"], ["class", "country-selector-code", 4, "ngIf"], ["backdropClass", "ngx-mat-tel-input-overlay-backdrop", "overlayPanelClass", "ngx-mat-tel-input-overlay-pane", 1, "ngx-mat-tel-input-mat-menu-panel"], ["menu", "matMenu"], ["class", "country-search", "type", "text", 3, "ngModel", "placeholder", "ngModelChange", "click", 4, "ngIf"], ["type", "button", "mat-menu-item", "", "class", "country-list-button", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["matInput", "", "type", "tel", "autocomplete", "off", 3, "ngClass", "ngModel", "errorStateMatcher", "placeholder", "disabled", "aria-describedby", "blur", "keypress", "ngModelChange"], ["focusable", ""], [1, "country-selector-code"], ["type", "text", 1, "country-search", 3, "ngModel", "placeholder", "ngModelChange", "click"], ["type", "button", "mat-menu-item", "", 1, "country-list-button", 3, "click"], [1, "icon-wrapper"], [1, "flag", 3, "ngClass"], [1, "label-wrapper"], ["type", "button", "mat-menu-item", "", "class", "country-list-button", 3, "click", 4, "ngIf"]],
  template: function NgxMatIntlTelInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxMatIntlTelInputComponent_span_3_Template, 2, 1, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgxMatIntlTelInputComponent_input_6_Template, 1, 2, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NgxMatIntlTelInputComponent_button_7_Template, 6, 3, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgxMatIntlTelInputComponent_mat_divider_8_Template, 1, 0, "mat-divider", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgxMatIntlTelInputComponent_ng_container_9_Template, 3, 4, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function NgxMatIntlTelInputComponent_Template_input_blur_10_listener() {
        return ctx.onTouched();
      })("keypress", function NgxMatIntlTelInputComponent_Template_input_keypress_10_listener($event) {
        return ctx.onInputKeyPress($event);
      })("ngModelChange", function NgxMatIntlTelInputComponent_Template_input_ngModelChange_10_listener($event) {
        return ctx.phoneNumber = $event;
      })("ngModelChange", function NgxMatIntlTelInputComponent_Template_input_ngModelChange_10_listener() {
        return ctx.onPhoneNumberChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1)("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selectedCountry == null ? null : ctx.selectedCountry.flagClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedCountry == null ? null : ctx.selectedCountry.dialCode);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enableSearch);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.preferredCountriesInDropDown);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.preferredCountriesInDropDown == null ? null : ctx.preferredCountriesInDropDown.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allCountries);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.cssClass)("ngModel", ctx.phoneNumber)("errorStateMatcher", ctx.errorStateMatcher)("placeholder", ctx.inputPlaceholder)("disabled", ctx.disabled)("aria-describedby", ctx.describedBy);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuTrigger, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, SearchPipe],
  styles: ["input[_ngcontent-%COMP%]:not(.country-search){border:none;background:none;outline:none;font:inherit;width:100%;box-sizing:border-box;padding:0 6px 0 90px;position:relative;z-index:0;margin-top:0!important;margin-bottom:0!important;margin-right:0;margin-left:0}input.country-search[_ngcontent-%COMP%]{width:100%;height:34px;border:none;border-bottom:1px solid #ddd;font-size:14px;padding:20px 20px 24px}.icon-wrapper[_ngcontent-%COMP%]{padding-right:24px}.flag[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAABw4CAMAAAAs8X1iAAADAFBMVEUAAAD////OESYAJH0AAAAAK3/80RbtKTn/ywDRETPQFCvYJx7/AAAAejkAI5UANpV0rt0AZTTvKy3BAQPCJy1Bid3eKg8AnUkAlETgGx3VAQD93QXtHCQAeF8AN6YBhU0AakLeChcAAIzKLzwAKWb91AActTr94wAAo17209YAbcsCrsnHDR/kABLoES0AcsEiRY1LktoAak4DJ4s6ecn38/ABHqERSK8DaacBod3GDDDYFDsAgAASrSsDlsAHiTBpuuYCKKYAmzpKrdYAP4j9zyT1s7YAZgAAV6VmzP8ormbeFh4EUZkkSaX630X0rgG6CC6eLzoPPHytHSX33xYZigABPppKl88BPxw6gj3WZHTe5/DZECNbl7H6uBEAlWcBS6joKDoAAGYaRJHlAjb1xsrZJBEAXbsCf/3gUmEjnkLNDCwANrKdqsrVJyftHSjjPDIvmzAMBwTnbnKMGj3mqK/B0eT8OjKyIjQhXDNAWInzlpX950kNXq8ei0M+bU3////c29r/cgDsho3idQnsAAD9TRQ+XrivDgv2gwFLqFZeteMWFpbgACXuxQmakKswVpmnp6X+xh3PSFB/rY8AUbrgTwf+mjIjXEI7eCgAmQDasjM/mQEiG1ASiAeozbbGvcOLJyqNqdbPf4ejyuxRfMB/msPelZ0NrS00sjBtg7hLaaPxK0IZIG0/PnEwkAngUCWwigqxxNpTSgfCHhp/teHG0rzk7uYOdCjy3roAUPBNL2rSuhy1uAglMXTHujMxLRHFpV59CRBvjTp4YmiUsjy1oyHqkBdguI3CdyFtaZFHlHNUWlWLgyqOh4ZyhnMpd2XseCNnXDOmUzh7awhLiKQzDw2yNFDvQ02RqGZagyxpoKt6tB5PaIWRxZrFQBxDTEB5flJsOE9SCxp6MBimuIf24p3sf0nltl5Ds5PYw4DPrJzAfVf22XudPyMSOTn///8CNwPAGTilUGUCi0b////MECjvKiwAMoze8+gABhCSwecEfcgAOJTnESwetTri0eK2AAABAHRSTlMA/////////////////////////////////////////////////////////////////v////3///7///////////7//f/////+///////////+//////7//////////f/////////////9/vz//////////v3//f///////////vz///7////////////////+//7/////////////////+////v/9/v7///////////7//v///v////7//////f///////v///////v////7//////v/+///+//v//////////v/////+//3//v/////U/9f7pY6kfJrKwsC2SaOqKyxZfwAAjiFJREFUeJzsvQ1cVNe97z0bBgRiG6MkPY3JPecTYsy0NiGtu/Ym57WN0z5pDBGbkyvTcNpL6DnkdIgZyphAm2QufKIxdhyETxIfkjIRHW+GlPLmTPhkVEDlRWEIiESivImgAtLTa3uf89zzfO591tovM/tlrb3XShyc0P1Thz17/7/r//uvtfaW2TOzt8kUcxXkM/bMRChLWpqFW8jck1OQn4iRCW7kEQHI5NdggcQ8EeEAITwPFw+ARBGBADo8SQpYIipOSyuOPotG14Xn9niiQBpGkYjMudkrs35yIOn06a1bR0owlqwIS+dvA+qXFZ1pZ/ILcvbAovmlTGnBdadPv316NCkKCOF5fLfmKZCk2pz5+fnrBbURQAyPDJyAiEBOz/x8T09PjpjCJIZLpgaHRIAz85U9GZW1ESBRW0kuS9AC/rpIgUT/5Etnz740GRkI3QxNI/uczn0jTYRAUu11T93x43We62IR2kB9uL3dxe77lHW1t4frCYCS+dnZPb66Ot+e2dn5EhJL4enp2VnuX0WYqAagURA/PRp5qg8oFI/AUtAX9NgqA3SPrUpA99iamHjvvZTA229jLamOrUl1nqTstyeOJkWyaB9bk0r8Z79ZMnqqxPf2X5UkCYD2sTXz42zPKPhXEjmQ6RxbR0vqTo2+fVtJnfg/hM6x9eipUX/JaP3vR0f7j0ZrwOvomVMlTU32Jqf91IkzRwmAE/MnRnfUeTx1nlMnLl/UB949c+ZEid3+d39n31PfP7/5t7rAxfcmj2b/4O8ef/xL/5h9dHL+I13goxOj9W9/s9vpOv3NV97uPXNRFzh66tSpV9721NVt+viU/9RovS6QXT9aUn80Me/WxLrRU/X12boASksCWApaLtGXCGQAsQcYfb1qANTAqwSSAWYCGUBsgEWRPOcqmf5vmQzg8wHrWuiAlkqgjBZiID0DEC3p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);background-size:100% auto;filter:drop-shadow(1px 1px 1px rgba(0,0,0,.54));height:14px;width:24px}.icon-wrapper[_ngcontent-%COMP%], .label-wrapper[_ngcontent-%COMP%]{display:table-cell;vertical-align:middle}.country-selector[_ngcontent-%COMP%]{border-radius:0;color:#000000de;flex-shrink:0;height:auto;height:initial;line-height:inherit;width:90px;padding:1px;opacity:0;transition:opacity .2s;position:absolute;z-index:1;top:0;bottom:0;right:auto;left:0;font-size:inherit;font-weight:inherit;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAAIUlEQVQoz2NgGAUkgtKG0v9IsIGwsgbCpjUQtrRhZAUzAB5rGRmoZRO5AAAAAElFTkSuQmCC);background-position:right center;background-repeat:no-repeat;background-size:18px auto}.country-selector[_ngcontent-%COMP%]:disabled{color:#00000061}.ngx-floating[_nghost-%COMP%]   .country-selector[_ngcontent-%COMP%]{opacity:1!important}.country-selector-flag[_ngcontent-%COMP%]{display:inline-block;margin-right:.5ex}.country-list-button[_ngcontent-%COMP%]{color:#000000de;direction:ltr;font-size:16px;font-weight:400;height:auto;height:initial;line-height:normal;min-height:48px;padding:14px 24px;text-align:left;text-transform:none;width:100%}.flag.KY[_ngcontent-%COMP%]{background-position:0 0}.flag.AC[_ngcontent-%COMP%]{background-position:0 -14px}.flag.AE[_ngcontent-%COMP%]{background-position:0 -28px}.flag.AF[_ngcontent-%COMP%]{background-position:0 -42px}.flag.AG[_ngcontent-%COMP%]{background-position:0 -56px}.flag.AI[_ngcontent-%COMP%]{background-position:0 -70px}.flag.AL[_ngcontent-%COMP%]{background-position:0 -84px}.flag.AM[_ngcontent-%COMP%]{background-position:0 -98px}.flag.AO[_ngcontent-%COMP%]{background-position:0 -112px}.flag.AQ[_ngcontent-%COMP%]{background-position:0 -126px}.flag.AR[_ngcontent-%COMP%]{background-position:0 -140px}.flag.AS[_ngcontent-%COMP%]{background-position:0 -154px}.flag.AT[_ngcontent-%COMP%]{background-position:0 -168px}.flag.AU[_ngcontent-%COMP%]{background-position:0 -182px}.flag.AW[_ngcontent-%COMP%]{background-position:0 -196px}.flag.AX[_ngcontent-%COMP%]{background-position:0 -210px}.flag.AZ[_ngcontent-%COMP%]{background-position:0 -224px}.flag.BA[_ngcontent-%COMP%]{background-position:0 -238px}.flag.BB[_ngcontent-%COMP%]{background-position:0 -252px}.flag.BD[_ngcontent-%COMP%]{background-position:0 -266px}.flag.BE[_ngcontent-%COMP%]{background-position:0 -280px}.flag.BF[_ngcontent-%COMP%]{background-position:0 -294px}.flag.BG[_ngcontent-%COMP%]{background-position:0 -308px}.flag.BH[_ngcontent-%COMP%]{background-position:0 -322px}.flag.BI[_ngcontent-%COMP%]{background-position:0 -336px}.flag.BJ[_ngcontent-%COMP%]{background-position:0 -350px}.flag.BL[_ngcontent-%COMP%]{background-position:0 -364px}.flag.BM[_ngcontent-%COMP%]{background-position:0 -378px}.flag.BN[_ngcontent-%COMP%]{background-position:0 -392px}.flag.BO[_ngcontent-%COMP%]{background-position:0 -406px}.flag.BQ[_ngcontent-%COMP%]{background-position:0 -420px}.flag.BR[_ngcontent-%COMP%]{background-position:0 -434px}.flag.BS[_ngcontent-%COMP%]{background-position:0 -448px}.flag.BT[_ngcontent-%COMP%]{background-position:0 -462px}.flag.BV[_ngcontent-%COMP%]{background-position:0 -476px}.flag.BW[_ngcontent-%COMP%]{background-position:0 -490px}.flag.BY[_ngcontent-%COMP%]{background-position:0 -504px}.flag.BZ[_ngcontent-%COMP%]{background-position:0 -518px}.flag.CA[_ngcontent-%COMP%]{background-position:0 -532px}.flag.CC[_ngcontent-%COMP%]{background-position:0 -546px}.flag.CD[_ngcontent-%COMP%]{background-position:0 -560px}.flag.CF[_ngcontent-%COMP%]{background-position:0 -574px}.flag.CG[_ngcontent-%COMP%]{background-position:0 -588px}.flag.CH[_ngcontent-%COMP%]{background-position:0 -602px}.flag.CI[_ngcontent-%COMP%]{background-position:0 -616px}.flag.CK[_ngcontent-%COMP%]{background-position:0 -630px}.flag.CL[_ngcontent-%COMP%]{background-position:0 -644px}.flag.CM[_ngcontent-%COMP%]{background-position:0 -658px}.flag.CN[_ngcontent-%COMP%]{background-position:0 -672px}.flag.CO[_ngcontent-%COMP%]{background-position:0 -686px}.flag.CP[_ngcontent-%COMP%]{background-position:0 -700px}.flag.CR[_ngcontent-%COMP%]{background-position:0 -714px}.flag.CU[_ngcontent-%COMP%]{background-position:0 -728px}.flag.CV[_ngcontent-%COMP%]{background-position:0 -742px}.flag.CW[_ngcontent-%COMP%]{background-position:0 -756px}.flag.CX[_ngcontent-%COMP%]{background-position:0 -770px}.flag.CY[_ngcontent-%COMP%]{background-position:0 -784px}.flag.CZ[_ngcontent-%COMP%]{background-position:0 -798px}.flag.DE[_ngcontent-%COMP%]{background-position:0 -812px}.flag.DG[_ngcontent-%COMP%]{background-position:0 -826px}.flag.DJ[_ngcontent-%COMP%]{background-position:0 -840px}.flag.DK[_ngcontent-%COMP%]{background-position:0 -854px}.flag.DM[_ngcontent-%COMP%]{background-position:0 -868px}.flag.DO[_ngcontent-%COMP%]{background-position:0 -882px}.flag.DZ[_ngcontent-%COMP%]{background-position:0 -896px}.flag.EA[_ngcontent-%COMP%]{background-position:0 -910px}.flag.EC[_ngcontent-%COMP%]{background-position:0 -924px}.flag.EE[_ngcontent-%COMP%]{background-position:0 -938px}.flag.EG[_ngcontent-%COMP%]{background-position:0 -952px}.flag.EH[_ngcontent-%COMP%]{background-position:0 -966px}.flag.ER[_ngcontent-%COMP%]{background-position:0 -980px}.flag.ES[_ngcontent-%COMP%]{background-position:0 -994px}.flag.ET[_ngcontent-%COMP%]{background-position:0 -1008px}.flag.EU[_ngcontent-%COMP%]{background-position:0 -1022px}.flag.FI[_ngcontent-%COMP%]{background-position:0 -1036px}.flag.FJ[_ngcontent-%COMP%]{background-position:0 -1050px}.flag.FK[_ngcontent-%COMP%]{background-position:0 -1064px}.flag.FM[_ngcontent-%COMP%]{background-position:0 -1078px}.flag.FO[_ngcontent-%COMP%]{background-position:0 -1092px}.flag.FR[_ngcontent-%COMP%]{background-position:0 -1106px}.flag.GA[_ngcontent-%COMP%]{background-position:0 -1120px}.flag.GB[_ngcontent-%COMP%]{background-position:0 -1134px}.flag.GD[_ngcontent-%COMP%]{background-position:0 -1148px}.flag.GE[_ngcontent-%COMP%]{background-position:0 -1162px}.flag.GF[_ngcontent-%COMP%]{background-position:0 -1176px}.flag.GG[_ngcontent-%COMP%]{background-position:0 -1190px}.flag.GH[_ngcontent-%COMP%]{background-position:0 -1204px}.flag.GI[_ngcontent-%COMP%]{background-position:0 -1218px}.flag.GL[_ngcontent-%COMP%]{background-position:0 -1232px}.flag.GM[_ngcontent-%COMP%]{background-position:0 -1246px}.flag.GN[_ngcontent-%COMP%]{background-position:0 -1260px}.flag.GP[_ngcontent-%COMP%]{background-position:0 -1274px}.flag.GQ[_ngcontent-%COMP%]{background-position:0 -1288px}.flag.GR[_ngcontent-%COMP%]{background-position:0 -1302px}.flag.GS[_ngcontent-%COMP%]{background-position:0 -1316px}.flag.GT[_ngcontent-%COMP%]{background-position:0 -1330px}.flag.GU[_ngcontent-%COMP%]{background-position:0 -1344px}.flag.GW[_ngcontent-%COMP%]{background-position:0 -1358px}.flag.GY[_ngcontent-%COMP%]{background-position:0 -1372px}.flag.HK[_ngcontent-%COMP%]{background-position:0 -1386px}.flag.HM[_ngcontent-%COMP%]{background-position:0 -1400px}.flag.HN[_ngcontent-%COMP%]{background-position:0 -1414px}.flag.HR[_ngcontent-%COMP%]{background-position:0 -1428px}.flag.HT[_ngcontent-%COMP%]{background-position:0 -1442px}.flag.HU[_ngcontent-%COMP%]{background-position:0 -1456px}.flag.IC[_ngcontent-%COMP%]{background-position:0 -1470px}.flag.ID[_ngcontent-%COMP%]{background-position:0 -1484px}.flag.IE[_ngcontent-%COMP%]{background-position:0 -1498px}.flag.IL[_ngcontent-%COMP%]{background-position:0 -1512px}.flag.IM[_ngcontent-%COMP%]{background-position:0 -1526px}.flag.IN[_ngcontent-%COMP%]{background-position:0 -1540px}.flag.IO[_ngcontent-%COMP%]{background-position:0 -1554px}.flag.IQ[_ngcontent-%COMP%]{background-position:0 -1568px}.flag.IR[_ngcontent-%COMP%]{background-position:0 -1582px}.flag.IS[_ngcontent-%COMP%]{background-position:0 -1596px}.flag.IT[_ngcontent-%COMP%]{background-position:0 -1610px}.flag.JE[_ngcontent-%COMP%]{background-position:0 -1624px}.flag.JM[_ngcontent-%COMP%]{background-position:0 -1638px}.flag.JO[_ngcontent-%COMP%]{background-position:0 -1652px}.flag.JP[_ngcontent-%COMP%]{background-position:0 -1666px}.flag.KE[_ngcontent-%COMP%]{background-position:0 -1680px}.flag.KG[_ngcontent-%COMP%]{background-position:0 -1694px}.flag.KH[_ngcontent-%COMP%]{background-position:0 -1708px}.flag.KI[_ngcontent-%COMP%]{background-position:0 -1722px}.flag.KM[_ngcontent-%COMP%]{background-position:0 -1736px}.flag.KN[_ngcontent-%COMP%]{background-position:0 -1750px}.flag.KP[_ngcontent-%COMP%]{background-position:0 -1764px}.flag.KR[_ngcontent-%COMP%]{background-position:0 -1778px}.flag.KW[_ngcontent-%COMP%]{background-position:0 -1792px}.flag.AD[_ngcontent-%COMP%]{background-position:0 -1806px}.flag.KZ[_ngcontent-%COMP%]{background-position:0 -1820px}.flag.LA[_ngcontent-%COMP%]{background-position:0 -1834px}.flag.LB[_ngcontent-%COMP%]{background-position:0 -1848px}.flag.LC[_ngcontent-%COMP%]{background-position:0 -1862px}.flag.LI[_ngcontent-%COMP%]{background-position:0 -1876px}.flag.LK[_ngcontent-%COMP%]{background-position:0 -1890px}.flag.LR[_ngcontent-%COMP%]{background-position:0 -1904px}.flag.LS[_ngcontent-%COMP%]{background-position:0 -1918px}.flag.LT[_ngcontent-%COMP%]{background-position:0 -1932px}.flag.LU[_ngcontent-%COMP%]{background-position:0 -1946px}.flag.LV[_ngcontent-%COMP%]{background-position:0 -1960px}.flag.LY[_ngcontent-%COMP%]{background-position:0 -1974px}.flag.MA[_ngcontent-%COMP%]{background-position:0 -1988px}.flag.MC[_ngcontent-%COMP%]{background-position:0 -2002px}.flag.MD[_ngcontent-%COMP%]{background-position:0 -2016px}.flag.ME[_ngcontent-%COMP%]{background-position:0 -2030px}.flag.MF[_ngcontent-%COMP%]{background-position:0 -2044px}.flag.MG[_ngcontent-%COMP%]{background-position:0 -2058px}.flag.MH[_ngcontent-%COMP%]{background-position:0 -2072px}.flag.MK[_ngcontent-%COMP%]{background-position:0 -2086px}.flag.ML[_ngcontent-%COMP%]{background-position:0 -2100px}.flag.MM[_ngcontent-%COMP%]{background-position:0 -2114px}.flag.MN[_ngcontent-%COMP%]{background-position:0 -2128px}.flag.MO[_ngcontent-%COMP%]{background-position:0 -2142px}.flag.MP[_ngcontent-%COMP%]{background-position:0 -2156px}.flag.MQ[_ngcontent-%COMP%]{background-position:0 -2170px}.flag.MR[_ngcontent-%COMP%]{background-position:0 -2184px}.flag.MS[_ngcontent-%COMP%]{background-position:0 -2198px}.flag.MT[_ngcontent-%COMP%]{background-position:0 -2212px}.flag.MU[_ngcontent-%COMP%]{background-position:0 -2226px}.flag.MV[_ngcontent-%COMP%]{background-position:0 -2240px}.flag.MW[_ngcontent-%COMP%]{background-position:0 -2254px}.flag.MX[_ngcontent-%COMP%]{background-position:0 -2268px}.flag.MY[_ngcontent-%COMP%]{background-position:0 -2282px}.flag.MZ[_ngcontent-%COMP%]{background-position:0 -2296px}.flag.NA[_ngcontent-%COMP%]{background-position:0 -2310px}.flag.NC[_ngcontent-%COMP%]{background-position:0 -2324px}.flag.NE[_ngcontent-%COMP%]{background-position:0 -2338px}.flag.NF[_ngcontent-%COMP%]{background-position:0 -2352px}.flag.NG[_ngcontent-%COMP%]{background-position:0 -2366px}.flag.NI[_ngcontent-%COMP%]{background-position:0 -2380px}.flag.NL[_ngcontent-%COMP%]{background-position:0 -2394px}.flag.NO[_ngcontent-%COMP%]{background-position:0 -2408px}.flag.NP[_ngcontent-%COMP%]{background-position:0 -2422px}.flag.NR[_ngcontent-%COMP%]{background-position:0 -2436px}.flag.NU[_ngcontent-%COMP%]{background-position:0 -2450px}.flag.NZ[_ngcontent-%COMP%]{background-position:0 -2464px}.flag.OM[_ngcontent-%COMP%]{background-position:0 -2478px}.flag.PA[_ngcontent-%COMP%]{background-position:0 -2492px}.flag.PE[_ngcontent-%COMP%]{background-position:0 -2506px}.flag.PF[_ngcontent-%COMP%]{background-position:0 -2520px}.flag.PG[_ngcontent-%COMP%]{background-position:0 -2534px}.flag.PH[_ngcontent-%COMP%]{background-position:0 -2548px}.flag.PK[_ngcontent-%COMP%]{background-position:0 -2562px}.flag.PL[_ngcontent-%COMP%]{background-position:0 -2576px}.flag.PM[_ngcontent-%COMP%]{background-position:0 -2590px}.flag.PN[_ngcontent-%COMP%]{background-position:0 -2604px}.flag.PR[_ngcontent-%COMP%]{background-position:0 -2618px}.flag.PS[_ngcontent-%COMP%]{background-position:0 -2632px}.flag.PT[_ngcontent-%COMP%]{background-position:0 -2646px}.flag.PW[_ngcontent-%COMP%]{background-position:0 -2660px}.flag.PY[_ngcontent-%COMP%]{background-position:0 -2674px}.flag.QA[_ngcontent-%COMP%]{background-position:0 -2688px}.flag.RE[_ngcontent-%COMP%]{background-position:0 -2702px}.flag.RO[_ngcontent-%COMP%]{background-position:0 -2716px}.flag.RS[_ngcontent-%COMP%]{background-position:0 -2730px}.flag.RU[_ngcontent-%COMP%]{background-position:0 -2744px}.flag.RW[_ngcontent-%COMP%]{background-position:0 -2758px}.flag.SA[_ngcontent-%COMP%]{background-position:0 -2772px}.flag.SB[_ngcontent-%COMP%]{background-position:0 -2786px}.flag.SC[_ngcontent-%COMP%]{background-position:0 -2800px}.flag.SD[_ngcontent-%COMP%]{background-position:0 -2814px}.flag.SE[_ngcontent-%COMP%]{background-position:0 -2828px}.flag.SG[_ngcontent-%COMP%]{background-position:0 -2842px}.flag.SH[_ngcontent-%COMP%]{background-position:0 -2856px}.flag.SI[_ngcontent-%COMP%]{background-position:0 -2870px}.flag.SJ[_ngcontent-%COMP%]{background-position:0 -2884px}.flag.SK[_ngcontent-%COMP%]{background-position:0 -2898px}.flag.SL[_ngcontent-%COMP%]{background-position:0 -2912px}.flag.SM[_ngcontent-%COMP%]{background-position:0 -2926px}.flag.SN[_ngcontent-%COMP%]{background-position:0 -2940px}.flag.SO[_ngcontent-%COMP%]{background-position:0 -2954px}.flag.SR[_ngcontent-%COMP%]{background-position:0 -2968px}.flag.SS[_ngcontent-%COMP%]{background-position:0 -2982px}.flag.ST[_ngcontent-%COMP%]{background-position:0 -2996px}.flag.SV[_ngcontent-%COMP%]{background-position:0 -3010px}.flag.SX[_ngcontent-%COMP%]{background-position:0 -3024px}.flag.SY[_ngcontent-%COMP%]{background-position:0 -3038px}.flag.SZ[_ngcontent-%COMP%]{background-position:0 -3052px}.flag.TA[_ngcontent-%COMP%]{background-position:0 -3066px}.flag.TC[_ngcontent-%COMP%]{background-position:0 -3080px}.flag.TD[_ngcontent-%COMP%]{background-position:0 -3094px}.flag.TF[_ngcontent-%COMP%]{background-position:0 -3108px}.flag.TG[_ngcontent-%COMP%]{background-position:0 -3122px}.flag.TH[_ngcontent-%COMP%]{background-position:0 -3136px}.flag.TJ[_ngcontent-%COMP%]{background-position:0 -3150px}.flag.TK[_ngcontent-%COMP%]{background-position:0 -3164px}.flag.TL[_ngcontent-%COMP%]{background-position:0 -3178px}.flag.TM[_ngcontent-%COMP%]{background-position:0 -3192px}.flag.TN[_ngcontent-%COMP%]{background-position:0 -3206px}.flag.TO[_ngcontent-%COMP%]{background-position:0 -3220px}.flag.TR[_ngcontent-%COMP%]{background-position:0 -3234px}.flag.TT[_ngcontent-%COMP%]{background-position:0 -3248px}.flag.TV[_ngcontent-%COMP%]{background-position:0 -3262px}.flag.TW[_ngcontent-%COMP%]{background-position:0 -3276px}.flag.TZ[_ngcontent-%COMP%]{background-position:0 -3290px}.flag.UA[_ngcontent-%COMP%]{background-position:0 -3304px}.flag.UG[_ngcontent-%COMP%]{background-position:0 -3318px}.flag.UM[_ngcontent-%COMP%]{background-position:0 -3332px}.flag.UN[_ngcontent-%COMP%]{background-position:0 -3346px}.flag.US[_ngcontent-%COMP%]{background-position:0 -3360px}.flag.UY[_ngcontent-%COMP%]{background-position:0 -3374px}.flag.UZ[_ngcontent-%COMP%]{background-position:0 -3388px}.flag.VA[_ngcontent-%COMP%]{background-position:0 -3402px}.flag.VC[_ngcontent-%COMP%]{background-position:0 -3416px}.flag.VE[_ngcontent-%COMP%]{background-position:0 -3430px}.flag.VG[_ngcontent-%COMP%]{background-position:0 -3444px}.flag.VI[_ngcontent-%COMP%]{background-position:0 -3458px}.flag.VN[_ngcontent-%COMP%]{background-position:0 -3472px}.flag.VU[_ngcontent-%COMP%]{background-position:0 -3486px}.flag.WF[_ngcontent-%COMP%]{background-position:0 -3500px}.flag.WS[_ngcontent-%COMP%]{background-position:0 -3514px}.flag.XK[_ngcontent-%COMP%]{background-position:0 -3528px}.flag.YE[_ngcontent-%COMP%]{background-position:0 -3542px}.flag.YT[_ngcontent-%COMP%]{background-position:0 -3556px}.flag.ZA[_ngcontent-%COMP%]{background-position:0 -3570px}.flag.ZM[_ngcontent-%COMP%]{background-position:0 -3584px}.flag.ZW[_ngcontent-%COMP%]{background-position:0 -3598px}"],
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatIntlTelInputComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-mat-intl-tel-input',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, SearchPipe],
      providers: [CountryCode, {
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldControl,
        useExisting: NgxMatIntlTelInputComponent
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NG_VALIDATORS,
        useValue: phoneNumberValidator,
        multi: true
      }],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<div class=\"ngx-mat-tel-input-container\">\r\n  <button\r\n    type=\"button\"\r\n    mat-button\r\n    [matMenuTriggerFor]=\"menu\"\r\n    class=\"country-selector\"\r\n    [disabled]=\"disabled\"\r\n  >\r\n    <span\r\n      class=\"country-selector-flag flag\"\r\n      [ngClass]=\"selectedCountry?.flagClass\"\r\n    ></span>\r\n    <span class=\"country-selector-code\" *ngIf=\"selectedCountry?.dialCode\"\r\n      >+{{ selectedCountry.dialCode }}</span\r\n    >\r\n  </button>\r\n  <mat-menu #menu=\"matMenu\"\r\n    class=\"ngx-mat-tel-input-mat-menu-panel\"\r\n    backdropClass=\"ngx-mat-tel-input-overlay-backdrop\"\r\n    overlayPanelClass=\"ngx-mat-tel-input-overlay-pane\">\r\n    <input\r\n      *ngIf=\"enableSearch\"\r\n      class=\"country-search\"\r\n      [(ngModel)]=\"searchCriteria\"\r\n      type=\"text\"\r\n      [placeholder]=\"searchPlaceholder\"\r\n      (click)=\"$event.stopPropagation()\"\r\n    />\r\n    <button\r\n      type=\"button\"\r\n      mat-menu-item\r\n      class=\"country-list-button\"\r\n      *ngFor=\"let country of preferredCountriesInDropDown\"\r\n      (click)=\"onCountrySelect(country, focusable)\"\r\n    >\r\n      <div class=\"icon-wrapper\">\r\n        <div class=\"flag\" [ngClass]=\"country.flagClass\"></div>\r\n      </div>\r\n      <div class=\"label-wrapper\">\r\n        {{ country.name }}\r\n        <span *ngIf=\"country?.dialCode\">+{{ country.dialCode }}</span>\r\n      </div>\r\n    </button>\r\n    <mat-divider *ngIf=\"preferredCountriesInDropDown?.length\"></mat-divider>\r\n    <ng-container *ngFor=\"let country of allCountries\">\r\n      <button\r\n        type=\"button\"\r\n        mat-menu-item\r\n        class=\"country-list-button\"\r\n        *ngIf=\"country | search: searchCriteria\"\r\n        (click)=\"onCountrySelect(country, focusable)\"\r\n      >\r\n        <div class=\"icon-wrapper\">\r\n          <div class=\"flag\" [ngClass]=\"country.flagClass\"></div>\r\n        </div>\r\n        <div class=\"label-wrapper\">\r\n          {{ country.name }} +{{ country.dialCode }}\r\n        </div>\r\n      </button>\r\n    </ng-container>\r\n  </mat-menu>\r\n\r\n  <input\r\n    matInput\r\n    type=\"tel\"\r\n    autocomplete=\"off\"\r\n    [ngClass]=\"cssClass\"\r\n    (blur)=\"onTouched()\"\r\n    (keypress)=\"onInputKeyPress($event)\"\r\n    [(ngModel)]=\"phoneNumber\"\r\n    (ngModelChange)=\"onPhoneNumberChange()\"\r\n    [errorStateMatcher]=\"errorStateMatcher\"\r\n    [placeholder]=\"inputPlaceholder\"\r\n    [disabled]=\"disabled\"\r\n    [aria-describedby]=\"describedBy\"\r\n    #focusable\r\n  />\r\n</div>\r\n",
      styles: ["input:not(.country-search){border:none;background:none;outline:none;font:inherit;width:100%;box-sizing:border-box;padding:0 6px 0 90px;position:relative;z-index:0;margin-top:0!important;margin-bottom:0!important;margin-right:0;margin-left:0}input.country-search{width:100%;height:34px;border:none;border-bottom:1px solid #ddd;font-size:14px;padding:20px 20px 24px}.icon-wrapper{padding-right:24px}.flag{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAABw4CAMAAAAs8X1iAAADAFBMVEUAAAD////OESYAJH0AAAAAK3/80RbtKTn/ywDRETPQFCvYJx7/AAAAejkAI5UANpV0rt0AZTTvKy3BAQPCJy1Bid3eKg8AnUkAlETgGx3VAQD93QXtHCQAeF8AN6YBhU0AakLeChcAAIzKLzwAKWb91AActTr94wAAo17209YAbcsCrsnHDR/kABLoES0AcsEiRY1LktoAak4DJ4s6ecn38/ABHqERSK8DaacBod3GDDDYFDsAgAASrSsDlsAHiTBpuuYCKKYAmzpKrdYAP4j9zyT1s7YAZgAAV6VmzP8ormbeFh4EUZkkSaX630X0rgG6CC6eLzoPPHytHSX33xYZigABPppKl88BPxw6gj3WZHTe5/DZECNbl7H6uBEAlWcBS6joKDoAAGYaRJHlAjb1xsrZJBEAXbsCf/3gUmEjnkLNDCwANrKdqsrVJyftHSjjPDIvmzAMBwTnbnKMGj3mqK/B0eT8OjKyIjQhXDNAWInzlpX950kNXq8ei0M+bU3////c29r/cgDsho3idQnsAAD9TRQ+XrivDgv2gwFLqFZeteMWFpbgACXuxQmakKswVpmnp6X+xh3PSFB/rY8AUbrgTwf+mjIjXEI7eCgAmQDasjM/mQEiG1ASiAeozbbGvcOLJyqNqdbPf4ejyuxRfMB/msPelZ0NrS00sjBtg7hLaaPxK0IZIG0/PnEwkAngUCWwigqxxNpTSgfCHhp/teHG0rzk7uYOdCjy3roAUPBNL2rSuhy1uAglMXTHujMxLRHFpV59CRBvjTp4YmiUsjy1oyHqkBdguI3CdyFtaZFHlHNUWlWLgyqOh4ZyhnMpd2XseCNnXDOmUzh7awhLiKQzDw2yNFDvQ02RqGZagyxpoKt6tB5PaIWRxZrFQBxDTEB5flJsOE9SCxp6MBimuIf24p3sf0nltl5Ds5PYw4DPrJzAfVf22XudPyMSOTn///8CNwPAGTilUGUCi0b////MECjvKiwAMoze8+gABhCSwecEfcgAOJTnESwetTri0eK2AAABAHRSTlMA/////////////////////////////////////////////////////////////////v////3///7///////////7//f/////+///////////+//////7//////////f/////////////9/vz//////////v3//f///////////vz///7////////////////+//7/////////////////+////v/9/v7///////////7//v///v////7//////f///////v///////v////7//////v/+///+//v//////////v/////+//3//v/////U/9f7pY6kfJrKwsC2SaOqKyxZfwAAjiFJREFUeJzsvQ1cVNe97z0bBgRiG6MkPY3JPecTYsy0NiGtu/Ym57WN0z5pDBGbkyvTcNpL6DnkdIgZyphAm2QufKIxdhyETxIfkjIRHW+GlPLmTPhkVEDlRWEIiESivImgAtLTa3uf89zzfO591tovM/tlrb3XShyc0P1Thz17/7/r//uvtfaW2TOzt8kUcxXkM/bMRChLWpqFW8jck1OQn4iRCW7kEQHI5NdggcQ8EeEAITwPFw+ARBGBADo8SQpYIipOSyuOPotG14Xn9niiQBpGkYjMudkrs35yIOn06a1bR0owlqwIS+dvA+qXFZ1pZ/ILcvbAovmlTGnBdadPv316NCkKCOF5fLfmKZCk2pz5+fnrBbURQAyPDJyAiEBOz/x8T09PjpjCJIZLpgaHRIAz85U9GZW1ESBRW0kuS9AC/rpIgUT/5Etnz740GRkI3QxNI/uczn0jTYRAUu11T93x43We62IR2kB9uL3dxe77lHW1t4frCYCS+dnZPb66Ot+e2dn5EhJL4enp2VnuX0WYqAagURA/PRp5qg8oFI/AUtAX9NgqA3SPrUpA99iamHjvvZTA229jLamOrUl1nqTstyeOJkWyaB9bk0r8Z79ZMnqqxPf2X5UkCYD2sTXz42zPKPhXEjmQ6RxbR0vqTo2+fVtJnfg/hM6x9eipUX/JaP3vR0f7j0ZrwOvomVMlTU32Jqf91IkzRwmAE/MnRnfUeTx1nlMnLl/UB949c+ZEid3+d39n31PfP7/5t7rAxfcmj2b/4O8ef/xL/5h9dHL+I13goxOj9W9/s9vpOv3NV97uPXNRFzh66tSpV9721NVt+viU/9RovS6QXT9aUn80Me/WxLrRU/X12boASksCWApaLtGXCGQAsQcYfb1qANTAqwSSAWYCGUBsgEWRPOcqmf5vmQzg8wHrWuiAlkqgjBZiID0DEC3p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);background-size:100% auto;filter:drop-shadow(1px 1px 1px rgba(0,0,0,.54));height:14px;width:24px}.icon-wrapper,.label-wrapper{display:table-cell;vertical-align:middle}.country-selector{border-radius:0;color:#000000de;flex-shrink:0;height:auto;height:initial;line-height:inherit;width:90px;padding:1px;opacity:0;transition:opacity .2s;position:absolute;z-index:1;top:0;bottom:0;right:auto;left:0;font-size:inherit;font-weight:inherit;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAAIUlEQVQoz2NgGAUkgtKG0v9IsIGwsgbCpjUQtrRhZAUzAB5rGRmoZRO5AAAAAElFTkSuQmCC);background-position:right center;background-repeat:no-repeat;background-size:18px auto}.country-selector:disabled{color:#00000061}:host.ngx-floating .country-selector{opacity:1!important}.country-selector-flag{display:inline-block;margin-right:.5ex}.country-list-button{color:#000000de;direction:ltr;font-size:16px;font-weight:400;height:auto;height:initial;line-height:normal;min-height:48px;padding:14px 24px;text-align:left;text-transform:none;width:100%}.flag.KY{background-position:0 0}.flag.AC{background-position:0 -14px}.flag.AE{background-position:0 -28px}.flag.AF{background-position:0 -42px}.flag.AG{background-position:0 -56px}.flag.AI{background-position:0 -70px}.flag.AL{background-position:0 -84px}.flag.AM{background-position:0 -98px}.flag.AO{background-position:0 -112px}.flag.AQ{background-position:0 -126px}.flag.AR{background-position:0 -140px}.flag.AS{background-position:0 -154px}.flag.AT{background-position:0 -168px}.flag.AU{background-position:0 -182px}.flag.AW{background-position:0 -196px}.flag.AX{background-position:0 -210px}.flag.AZ{background-position:0 -224px}.flag.BA{background-position:0 -238px}.flag.BB{background-position:0 -252px}.flag.BD{background-position:0 -266px}.flag.BE{background-position:0 -280px}.flag.BF{background-position:0 -294px}.flag.BG{background-position:0 -308px}.flag.BH{background-position:0 -322px}.flag.BI{background-position:0 -336px}.flag.BJ{background-position:0 -350px}.flag.BL{background-position:0 -364px}.flag.BM{background-position:0 -378px}.flag.BN{background-position:0 -392px}.flag.BO{background-position:0 -406px}.flag.BQ{background-position:0 -420px}.flag.BR{background-position:0 -434px}.flag.BS{background-position:0 -448px}.flag.BT{background-position:0 -462px}.flag.BV{background-position:0 -476px}.flag.BW{background-position:0 -490px}.flag.BY{background-position:0 -504px}.flag.BZ{background-position:0 -518px}.flag.CA{background-position:0 -532px}.flag.CC{background-position:0 -546px}.flag.CD{background-position:0 -560px}.flag.CF{background-position:0 -574px}.flag.CG{background-position:0 -588px}.flag.CH{background-position:0 -602px}.flag.CI{background-position:0 -616px}.flag.CK{background-position:0 -630px}.flag.CL{background-position:0 -644px}.flag.CM{background-position:0 -658px}.flag.CN{background-position:0 -672px}.flag.CO{background-position:0 -686px}.flag.CP{background-position:0 -700px}.flag.CR{background-position:0 -714px}.flag.CU{background-position:0 -728px}.flag.CV{background-position:0 -742px}.flag.CW{background-position:0 -756px}.flag.CX{background-position:0 -770px}.flag.CY{background-position:0 -784px}.flag.CZ{background-position:0 -798px}.flag.DE{background-position:0 -812px}.flag.DG{background-position:0 -826px}.flag.DJ{background-position:0 -840px}.flag.DK{background-position:0 -854px}.flag.DM{background-position:0 -868px}.flag.DO{background-position:0 -882px}.flag.DZ{background-position:0 -896px}.flag.EA{background-position:0 -910px}.flag.EC{background-position:0 -924px}.flag.EE{background-position:0 -938px}.flag.EG{background-position:0 -952px}.flag.EH{background-position:0 -966px}.flag.ER{background-position:0 -980px}.flag.ES{background-position:0 -994px}.flag.ET{background-position:0 -1008px}.flag.EU{background-position:0 -1022px}.flag.FI{background-position:0 -1036px}.flag.FJ{background-position:0 -1050px}.flag.FK{background-position:0 -1064px}.flag.FM{background-position:0 -1078px}.flag.FO{background-position:0 -1092px}.flag.FR{background-position:0 -1106px}.flag.GA{background-position:0 -1120px}.flag.GB{background-position:0 -1134px}.flag.GD{background-position:0 -1148px}.flag.GE{background-position:0 -1162px}.flag.GF{background-position:0 -1176px}.flag.GG{background-position:0 -1190px}.flag.GH{background-position:0 -1204px}.flag.GI{background-position:0 -1218px}.flag.GL{background-position:0 -1232px}.flag.GM{background-position:0 -1246px}.flag.GN{background-position:0 -1260px}.flag.GP{background-position:0 -1274px}.flag.GQ{background-position:0 -1288px}.flag.GR{background-position:0 -1302px}.flag.GS{background-position:0 -1316px}.flag.GT{background-position:0 -1330px}.flag.GU{background-position:0 -1344px}.flag.GW{background-position:0 -1358px}.flag.GY{background-position:0 -1372px}.flag.HK{background-position:0 -1386px}.flag.HM{background-position:0 -1400px}.flag.HN{background-position:0 -1414px}.flag.HR{background-position:0 -1428px}.flag.HT{background-position:0 -1442px}.flag.HU{background-position:0 -1456px}.flag.IC{background-position:0 -1470px}.flag.ID{background-position:0 -1484px}.flag.IE{background-position:0 -1498px}.flag.IL{background-position:0 -1512px}.flag.IM{background-position:0 -1526px}.flag.IN{background-position:0 -1540px}.flag.IO{background-position:0 -1554px}.flag.IQ{background-position:0 -1568px}.flag.IR{background-position:0 -1582px}.flag.IS{background-position:0 -1596px}.flag.IT{background-position:0 -1610px}.flag.JE{background-position:0 -1624px}.flag.JM{background-position:0 -1638px}.flag.JO{background-position:0 -1652px}.flag.JP{background-position:0 -1666px}.flag.KE{background-position:0 -1680px}.flag.KG{background-position:0 -1694px}.flag.KH{background-position:0 -1708px}.flag.KI{background-position:0 -1722px}.flag.KM{background-position:0 -1736px}.flag.KN{background-position:0 -1750px}.flag.KP{background-position:0 -1764px}.flag.KR{background-position:0 -1778px}.flag.KW{background-position:0 -1792px}.flag.AD{background-position:0 -1806px}.flag.KZ{background-position:0 -1820px}.flag.LA{background-position:0 -1834px}.flag.LB{background-position:0 -1848px}.flag.LC{background-position:0 -1862px}.flag.LI{background-position:0 -1876px}.flag.LK{background-position:0 -1890px}.flag.LR{background-position:0 -1904px}.flag.LS{background-position:0 -1918px}.flag.LT{background-position:0 -1932px}.flag.LU{background-position:0 -1946px}.flag.LV{background-position:0 -1960px}.flag.LY{background-position:0 -1974px}.flag.MA{background-position:0 -1988px}.flag.MC{background-position:0 -2002px}.flag.MD{background-position:0 -2016px}.flag.ME{background-position:0 -2030px}.flag.MF{background-position:0 -2044px}.flag.MG{background-position:0 -2058px}.flag.MH{background-position:0 -2072px}.flag.MK{background-position:0 -2086px}.flag.ML{background-position:0 -2100px}.flag.MM{background-position:0 -2114px}.flag.MN{background-position:0 -2128px}.flag.MO{background-position:0 -2142px}.flag.MP{background-position:0 -2156px}.flag.MQ{background-position:0 -2170px}.flag.MR{background-position:0 -2184px}.flag.MS{background-position:0 -2198px}.flag.MT{background-position:0 -2212px}.flag.MU{background-position:0 -2226px}.flag.MV{background-position:0 -2240px}.flag.MW{background-position:0 -2254px}.flag.MX{background-position:0 -2268px}.flag.MY{background-position:0 -2282px}.flag.MZ{background-position:0 -2296px}.flag.NA{background-position:0 -2310px}.flag.NC{background-position:0 -2324px}.flag.NE{background-position:0 -2338px}.flag.NF{background-position:0 -2352px}.flag.NG{background-position:0 -2366px}.flag.NI{background-position:0 -2380px}.flag.NL{background-position:0 -2394px}.flag.NO{background-position:0 -2408px}.flag.NP{background-position:0 -2422px}.flag.NR{background-position:0 -2436px}.flag.NU{background-position:0 -2450px}.flag.NZ{background-position:0 -2464px}.flag.OM{background-position:0 -2478px}.flag.PA{background-position:0 -2492px}.flag.PE{background-position:0 -2506px}.flag.PF{background-position:0 -2520px}.flag.PG{background-position:0 -2534px}.flag.PH{background-position:0 -2548px}.flag.PK{background-position:0 -2562px}.flag.PL{background-position:0 -2576px}.flag.PM{background-position:0 -2590px}.flag.PN{background-position:0 -2604px}.flag.PR{background-position:0 -2618px}.flag.PS{background-position:0 -2632px}.flag.PT{background-position:0 -2646px}.flag.PW{background-position:0 -2660px}.flag.PY{background-position:0 -2674px}.flag.QA{background-position:0 -2688px}.flag.RE{background-position:0 -2702px}.flag.RO{background-position:0 -2716px}.flag.RS{background-position:0 -2730px}.flag.RU{background-position:0 -2744px}.flag.RW{background-position:0 -2758px}.flag.SA{background-position:0 -2772px}.flag.SB{background-position:0 -2786px}.flag.SC{background-position:0 -2800px}.flag.SD{background-position:0 -2814px}.flag.SE{background-position:0 -2828px}.flag.SG{background-position:0 -2842px}.flag.SH{background-position:0 -2856px}.flag.SI{background-position:0 -2870px}.flag.SJ{background-position:0 -2884px}.flag.SK{background-position:0 -2898px}.flag.SL{background-position:0 -2912px}.flag.SM{background-position:0 -2926px}.flag.SN{background-position:0 -2940px}.flag.SO{background-position:0 -2954px}.flag.SR{background-position:0 -2968px}.flag.SS{background-position:0 -2982px}.flag.ST{background-position:0 -2996px}.flag.SV{background-position:0 -3010px}.flag.SX{background-position:0 -3024px}.flag.SY{background-position:0 -3038px}.flag.SZ{background-position:0 -3052px}.flag.TA{background-position:0 -3066px}.flag.TC{background-position:0 -3080px}.flag.TD{background-position:0 -3094px}.flag.TF{background-position:0 -3108px}.flag.TG{background-position:0 -3122px}.flag.TH{background-position:0 -3136px}.flag.TJ{background-position:0 -3150px}.flag.TK{background-position:0 -3164px}.flag.TL{background-position:0 -3178px}.flag.TM{background-position:0 -3192px}.flag.TN{background-position:0 -3206px}.flag.TO{background-position:0 -3220px}.flag.TR{background-position:0 -3234px}.flag.TT{background-position:0 -3248px}.flag.TV{background-position:0 -3262px}.flag.TW{background-position:0 -3276px}.flag.TZ{background-position:0 -3290px}.flag.UA{background-position:0 -3304px}.flag.UG{background-position:0 -3318px}.flag.UM{background-position:0 -3332px}.flag.UN{background-position:0 -3346px}.flag.US{background-position:0 -3360px}.flag.UY{background-position:0 -3374px}.flag.UZ{background-position:0 -3388px}.flag.VA{background-position:0 -3402px}.flag.VC{background-position:0 -3416px}.flag.VE{background-position:0 -3430px}.flag.VG{background-position:0 -3444px}.flag.VI{background-position:0 -3458px}.flag.VN{background-position:0 -3472px}.flag.VU{background-position:0 -3486px}.flag.WF{background-position:0 -3500px}.flag.WS{background-position:0 -3514px}.flag.XK{background-position:0 -3528px}.flag.YE{background-position:0 -3542px}.flag.YT{background-position:0 -3556px}.flag.ZA{background-position:0 -3570px}.flag.ZM{background-position:0 -3584px}.flag.ZW{background-position:0 -3598px}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: CountryCode
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__.FocusMonitor
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControl,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher
    }];
  }, {
    preferredCountries: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    enablePlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cssClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onlyCountries: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    errorStateMatcher: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    enableSearch: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    searchPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    describedBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    matMenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenu]
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding
    }],
    countryChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    shouldLabelFloat: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ngx-floating']
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/*
 * Public API Surface of ngx-mat-intl-tel-input
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_pages_contact-us_contact-us_module_ts.js.map