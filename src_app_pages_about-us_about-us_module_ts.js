"use strict";
(self["webpackChunkRasad"] = self["webpackChunkRasad"] || []).push([["src_app_pages_about-us_about-us_module_ts"],{

/***/ 5790:
/*!***********************************************************!*\
  !*** ./src/app/pages/about-us/about-us-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsRoutingModule": () => (/* binding */ AboutUsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _about_us_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us.component */ 1534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _about_us_component__WEBPACK_IMPORTED_MODULE_0__.AboutUsComponent }];
class AboutUsRoutingModule {
}
AboutUsRoutingModule.ɵfac = function AboutUsRoutingModule_Factory(t) { return new (t || AboutUsRoutingModule)(); };
AboutUsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AboutUsRoutingModule });
AboutUsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutUsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 1534:
/*!******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsComponent": () => (/* binding */ AboutUsComponent)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ 4854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-device-detector */ 6618);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 214);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-lottie */ 8530);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-lazyload-image */ 5600);
/* harmony import */ var _core_layout_ready_for_change_ready_for_change_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/layout/ready-for-change/ready-for-change.component */ 9887);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 7514);









function AboutUsComponent_img_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 29);
} }
class AboutUsComponent {
    constructor(deviceDetectorService, localizeRouterService) {
        this.deviceDetectorService = deviceDetectorService;
        this.localizeRouterService = localizeRouterService;
        this.locales = this.localizeRouterService.parser.locales;
        this.currentUrl = '';
        this.isMobileOrTablet = true;
        this.options = {
            path: '/assets/lottie/stars.json',
        };
    }
    onResize(event) {
        if (event.target.innerWidth > _constants__WEBPACK_IMPORTED_MODULE_0__.SCREEN_MD) {
            this.isMobileOrTablet = false;
        }
        else {
            this.isMobileOrTablet = true;
        }
    }
    ngOnInit() {
        this.detectSize();
    }
    detectSize() {
        this.isMobileOrTablet =
            this.deviceDetectorService.isMobile() ||
                this.deviceDetectorService.isTablet();
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__.DeviceDetectorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__.LocalizeRouterService)); };
AboutUsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], hostBindings: function AboutUsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function AboutUsComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    } }, decls: 54, vars: 17, consts: [[1, "about-us-container"], [1, "container", "header"], ["alt", "about-us-icon", "lazyLoad", "assets/images/about-us/icon.svg", 1, "icon"], [1, "title-contianer"], ["alt", "contact-us-line", "lazyLoad", "assets/images/main-banner/line.svg"], [1, "part2"], [1, "container"], [1, "data"], [1, "desc"], [1, "sub-title"], [1, "name"], [1, "postion"], ["alt", "avatar-image", "style", "transform: scale(0.75)", "lazyLoad", "assets/images/about-us/avatar.svg", 4, "ngIf"], [1, "part3"], ["containerClass", "moving-box", 3, "options"], [1, "customers"], [1, "img-warp"], ["alt", "National Cybersecurit Authority ", "lazyLoad", "assets/images/customers/customer1.jpg"], ["lazyLoad", "assets/images/customers/customer2.jpg", "alt", "Ministry of National Guard"], ["lazyLoad", "assets/images/customers/customer3.jpg", "alt", "General Authority For Awqaf"], ["lazyLoad", "assets/images/customers/customer4.jpg", "alt", "General Authority For Awqaf"], ["lazyLoad", "assets/images/customers/customer5.jpg", "alt", "Saudi Food & Drug Authority"], ["lazyLoad", "assets/images/customers/customer6.jpg", "alt", "Next Level"], ["lazyLoad", "assets/images/customers/customer7.jpg", "alt", "Sharqia Development Authority"], ["lazyLoad", "assets/images/customers/customer8.jpg", "alt", "decision support center"], ["lazyLoad", "assets/images/customers/customer9.jpg", "alt", "Sports Boulevard"], ["lazyLoad", "assets/images/customers/customer10.jpg", "alt", "Thiqah"], ["lazyLoad", "assets/images/customers/customer11.jpg", "alt", "Ad-diriyah Biennale Foundation"], ["lazyLoad", "assets/images/customers/customer12.jpg", "alt", "Ahad"], ["alt", "avatar-image", "lazyLoad", "assets/images/about-us/avatar.svg", 2, "transform", "scale(0.75)"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9)(15, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, AboutUsComponent_img_21_Template, 1, 0, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 13)(23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "ng-lottie", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 15)(29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "app-ready-for-change");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 7, "about-us.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 9, "about-us.part2.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 11, "about-us.part2.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 13, "about-us.part2.sub-title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isMobileOrTablet);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 15, "about-us.part3.title"));
    } }, dependencies: [ngx_lottie__WEBPACK_IMPORTED_MODULE_1__.LottieComponent, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_6__.LazyLoadImageDirective, _core_layout_ready_for_change_ready_for_change_component__WEBPACK_IMPORTED_MODULE_2__.ReadyForChangeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["[_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 100px;\n  padding-bottom: 100px;\n  gap: 50px;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n    gap: 22.5px;\n    padding-top: 60px;\n    padding-bottom: 60px;\n  }\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 70px;\n  }\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .title-contianer[_ngcontent-%COMP%] {\n  position: relative;\n  white-space: pre-wrap;\n  z-index: 1;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .title-contianer[_ngcontent-%COMP%] {\n    margin-top: 31px;\n    margin-bottom: 35px;\n  }\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .title-contianer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #111828;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .title-contianer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 32px;\n    line-height: 48px;\n  }\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .title-contianer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  z-index: -1;\n  bottom: -3px;\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n[dir=rtl]   [_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .title-contianer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  left: 0;\n  margin: unset;\n  right: unset;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .title-contianer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    bottom: 4px;\n    position: absolute;\n    right: 0;\n    max-width: 281px;\n  }\n  [dir=rtl]   [_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .title-contianer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n  }\n}\n[_nghost-%COMP%]   .part2[_ngcontent-%COMP%] {\n  background-color: #1033b1;\n  background-image: url(\"/assets/images/main-banner/background.svg\");\n  background-size: cover; \n  background-repeat: no-repeat;\n  background-position: center center;\n}\n[_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  padding-top: 60px;\n  padding-bottom: 60px;\n  justify-content: center;\n  align-items: center;\n  gap: 80px;\n}\n[_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 40px;\n  color: #ffffff;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 32px;\n  }\n}\n[_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #f3f6ff;\n}\n[_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]   .postion[_ngcontent-%COMP%] {\n  color: #4c6ee5;\n}\n[_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n  height: 441px;\n}\n[_nghost-%COMP%]   .part3[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .part3[_ngcontent-%COMP%] {\n    margin-top: 60px;\n    margin-bottom: 60px;\n  }\n}\n[_nghost-%COMP%]   .part3[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 44px;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .part3[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 24px;\n    line-height: 32px;\n  }\n}\n[_nghost-%COMP%]   .part3[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .customers[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .part3[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .customers[_ngcontent-%COMP%]   .img-warp[_ngcontent-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%]   .part3[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .customers[_ngcontent-%COMP%]   .img-warp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 120px;\n  width: auto;\n  margin-bottom: 60px;\n  transform: scale(0.8);\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .part3[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .customers[_ngcontent-%COMP%]   .img-warp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 72px;\n    margin-bottom: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0FBRlI7QUFHUTtFQVJKO0lBU1EsV0FBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7RUFBVjtBQUNGO0FBQ1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNaO0FBQVk7RUFISjtJQUlRLFdBQUE7SUFDQSxZQUFBO0VBR2Q7QUFDRjtBQUFRO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUFFWjtBQURZO0VBSko7SUFLUSxnQkFBQTtJQUNBLG1CQUFBO0VBSWQ7QUFDRjtBQUhZO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBS2hCO0FBSmdCO0VBSEo7SUFJUSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQU9sQjtBQUNGO0FBTFk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFPaEI7QUFOZ0I7RUFDSSxPQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFRcEI7QUFOZ0I7RUFkSjtJQWVRLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxnQkFBQTtFQVNsQjtFQVJrQjtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxPQUFBO0lBQ0EsUUFBQTtFQVV0QjtBQUNGO0FBTEk7RUFDSSx5QkFBQTtFQUNBLGtFQUFBO0VBQ0Esc0JBQUEsRUFBQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtBQU9SO0FBTlE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBUVo7QUFQWTtFQUNJLFNBQUE7QUFTaEI7QUFQWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFTaEI7QUFSZ0I7RUFSSjtJQVNRLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VBV2xCO0FBQ0Y7QUFWZ0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFZcEI7QUFYb0I7RUFDSSxjQUFBO0FBYXhCO0FBWG9CO0VBQ0ksY0FBQTtBQWF4QjtBQVRZO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFXaEI7QUFQSTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUFTUjtBQVJRO0VBSEo7SUFJUSxnQkFBQTtJQUNBLG1CQUFBO0VBV1Y7QUFDRjtBQVZRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVlaO0FBVGdCO0VBREo7SUFFUSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQVlsQjtBQUNGO0FBVlk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBWWhCO0FBWGdCO0VBQ0ksT0FBQTtBQWFwQjtBQVpvQjtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQWN4QjtBQWJ3QjtFQUxKO0lBTVEsWUFBQTtJQUNBLG1CQUFBO0VBZ0IxQjtBQUNGIiwiZmlsZSI6ImFib3V0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcIkBhbmd1bGFyL21hdGVyaWFsXCIgYXMgbWF0O1xyXG5AaW1wb3J0IFwic3JjL3RoZW1lL192YXJpYWJsZXMuc2Nzc1wiO1xyXG46aG9zdCB7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gICAgICAgIGdhcDogNTBweDtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgICAgICBnYXA6IDIyLjVweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlLWNvbnRpYW5lciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzFweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxMTE4Mjg7XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTNweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgW2Rpcj1cInJ0bFwiXSAmIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyODFweDtcclxuICAgICAgICAgICAgICAgICAgICBbZGlyPVwicnRsXCJdICYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucGFydDIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDMzYjE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbWFpbi1iYW5uZXIvYmFja2dyb3VuZC5zdmdcIik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogPC0tLS0tLSAqL1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiA4MHB4O1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGF0YSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGdhcDogNDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zdWItdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjNmNmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucG9zdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNGM2ZWU1O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ0MXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBhcnQzIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZ2FwOiA0NHB4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY3VzdG9tZXJzIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgLmltZy13YXJwIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 9902:
/*!***************************************************!*\
  !*** ./src/app/pages/about-us/about-us.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsModule": () => (/* binding */ AboutUsModule),
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 214);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-lazyload-image */ 5600);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lottie */ 8530);
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us-routing.module */ 5790);
/* harmony import */ var _about_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us.component */ 1534);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);









function playerFactory() {
    return __webpack_require__.e(/*! import() | lottie-web */ "lottie-web").then(__webpack_require__.t.bind(__webpack_require__, /*! lottie-web/build/player/lottie_light */ 477, 23));
}
class AboutUsModule {
}
AboutUsModule.ɵfac = function AboutUsModule_Factory(t) { return new (t || AboutUsModule)(); };
AboutUsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AboutUsModule });
AboutUsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [ngx_lottie__WEBPACK_IMPORTED_MODULE_0__.LottieModule.forRoot({ player: playerFactory }),
        _about_us_routing_module__WEBPACK_IMPORTED_MODULE_1__.AboutUsRoutingModule,
        _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__.LocalizeRouterModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__.LazyLoadImageModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AboutUsModule, { declarations: [_about_us_component__WEBPACK_IMPORTED_MODULE_2__.AboutUsComponent], imports: [ngx_lottie__WEBPACK_IMPORTED_MODULE_0__.LottieModule, _about_us_routing_module__WEBPACK_IMPORTED_MODULE_1__.AboutUsRoutingModule,
        _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__.LocalizeRouterModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__.LazyLoadImageModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_about-us_about-us_module_ts.js.map