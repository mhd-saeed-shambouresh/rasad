"use strict";
(self["webpackChunkRasad"] = self["webpackChunkRasad"] || []).push([["src_app_pages_products_products_module_ts"],{

/***/ 3458:
/*!*****************************************************************!*\
  !*** ./src/app/pages/products/product/part1/part1.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Part1Component": () => (/* binding */ Part1Component)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants */ 4854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 214);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-device-detector */ 6618);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ 5600);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 7514);














const _c0 = function (a0, a1) { return { background: a0, color: a1 }; };
const _c1 = function (a0) { return { rotate: a0 }; };
const _c2 = function (a0) { return { height: a0 }; };
class Part1Component {
    constructor(localizeRouterService, router, spy, deviceDetectorService) {
        this.localizeRouterService = localizeRouterService;
        this.router = router;
        this.spy = spy;
        this.deviceDetectorService = deviceDetectorService;
        this.id = '';
        this.color = '';
        this.btnColor = '';
        this.fontColor = '';
        this.locales = this.localizeRouterService.parser.locales;
        this.faArrow = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faArrowRight;
        this.isMobileOrTablet = true;
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
        this.detectDir();
        this.detectSize();
        this.router.events
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd))
            .subscribe(() => {
            this.detectDir();
        });
    }
    detectSize() {
        this.isMobileOrTablet =
            this.deviceDetectorService.isMobile() ||
                this.deviceDetectorService.isTablet();
    }
    detectDir() {
        this.faArrow =
            this.localizeRouterService.parser.currentLang == 'ar'
                ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faArrowLeft
                : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faArrowRight;
        this.spy.detectChanges();
    }
}
Part1Component.ɵfac = function Part1Component_Factory(t) { return new (t || Part1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__.LocalizeRouterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__.DeviceDetectorService)); };
Part1Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: Part1Component, selectors: [["app-part1"]], hostBindings: function Part1Component_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function Part1Component_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    } }, inputs: { data: "data", id: "id", color: "color", btnColor: "btnColor", fontColor: "fontColor" }, decls: 21, vars: 30, consts: [[1, "part1"], [1, "container"], [1, "data"], [1, "title"], [3, "lazyLoad"], ["mat-flat-button", "", "color", "primary", 3, "routerLink", "ngStyle"], [1, "p-small", 3, "icon"], [3, "ngClass", "lazyLoad", "ngStyle"]], template: function Part1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "localize");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("lazyLoad", ctx.data.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 13, ctx.data.header), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 15, ctx.data.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 17, ctx.data["sub-title"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 19, "/contact-us"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](23, _c0, ctx.color, ctx.btnColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 21, "header.request-demo"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faArrow);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](26, _c1, ctx.localizeRouterService.parser.currentLang == "ar" && ctx.id == "ERP"))("lazyLoad", ctx.data.image)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](28, _c2, ctx.isMobileOrTablet ? ctx.data.heightSmall : ctx.data.height));
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__.LazyLoadImageDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__.LocalizeRouterPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: [".part1[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  margin: 85px 0px;\n}\n@media (max-width: 991px) {\n  .part1[_ngcontent-%COMP%] {\n    margin: 53px 0 72px 0px;\n  }\n}\n.part1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 17px;\n  grid-gap: 17px;\n  padding: 0;\n  justify-content: space-between;\n}\n@media (max-width: 991px) {\n  .part1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 42px;\n    grid-gap: 42px;\n    padding: 0px 21px !important;\n    align-items: center;\n  }\n}\n.part1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 630px;\n}\n.part1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  grid-gap: 12px;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.part1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n}\n@media (max-width: 991px) {\n  .part1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n}\n.part1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n}\n@media (max-width: 991px) {\n  .part1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 32px;\n  }\n}\n.part1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #111828;\n  margin-bottom: 24px;\n}\n@media (max-width: 991px) {\n  .part1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 32px;\n    line-height: 48px;\n    margin-bottom: 16px;\n  }\n}\n.part1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #585d69;\n  margin-bottom: 40px;\n}\n@media (max-width: 991px) {\n  .part1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 17px;\n    line-height: 32px;\n    margin-bottom: 32px;\n  }\n}\n.part1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  height: 56px;\n  font-weight: 600;\n  font-size: 17px;\n  line-height: 32px;\n  max-width: 336px;\n}\n@media (max-width: 991px) {\n  .part1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.part1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     .mat-button-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.2s ease-in;\n  gap: 8px;\n  grid-gap: 8px;\n}\n@media (hover: hover) and (pointer: fine) {\n  .part1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     .mat-button-wrapper:hover {\n    gap: 12px;\n    grid-gap: 12px;\n  }\n}\n.part1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n}\n.part1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   img.rotate[_ngcontent-%COMP%] {\n  transform: scale(-1, 1);\n  -webkit-transform: scale(-1, 1);\n  border: unset;\n}\n@media (max-width: 991px) {\n  .part1[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 374px;\n    height: 262px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnQxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUZKO0FBR0k7RUFISjtJQUlRLHVCQUFBO0VBQU47QUFDRjtBQUNJO0VBQ0ksYUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0FBQ1I7QUFBUTtFQU5KO0lBT1Esc0JBQUE7SUFDQSxTQUFBO0lBQ0EsY0FBQTtJQUNBLDRCQUFBO0lBQ0EsbUJBQUE7RUFHVjtBQUNGO0FBRlE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUlaO0FBSFk7RUFDSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBS2hCO0FBSmdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFNcEI7QUFMb0I7RUFISjtJQUlRLFdBQUE7SUFDQSxZQUFBO0VBUXRCO0FBQ0Y7QUFOZ0I7RUFDSSxTQUFBO0FBUXBCO0FBUG9CO0VBRko7SUFHUSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQVV0QjtBQUNGO0FBUFk7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUFTaEI7QUFSZ0I7RUFISjtJQUlRLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7RUFXbEI7QUFDRjtBQVRZO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FBV2hCO0FBVmdCO0VBSEo7SUFJUSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0VBYWxCO0FBQ0Y7QUFYWTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFhaEI7QUFaZ0I7RUFQSjtJQVFRLGVBQUE7RUFlbEI7QUFDRjtBQWRnQjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBQWdCcEI7QUFmb0I7RUFDSTtJQUNJLFNBQUE7SUFDQSxjQUFBO0VBaUIxQjtBQUNGO0FBWlE7RUFDSSxXQUFBO0FBY1o7QUFiWTtFQUNJLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0FBZWhCO0FBYlk7RUFQSjtJQVFRLFlBQUE7SUFDQSxhQUFBO0VBZ0JkO0FBQ0YiLCJmaWxlIjoicGFydDEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIiBhcyBtYXQ7XHJcbkBpbXBvcnQgXCJzcmMvdGhlbWUvX3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4ucGFydDEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbjogODVweCAwcHg7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgIG1hcmdpbjogNTNweCAwIDcycHggMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBnYXA6IDE3cHg7XHJcbiAgICAgICAgZ3JpZC1nYXA6IDE3cHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZ2FwOiA0MnB4O1xyXG4gICAgICAgICAgICBncmlkLWdhcDogNDJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDIxcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhdGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYzMHB4O1xyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGdhcDogMTJweDtcclxuICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNThweDtcclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxMTE4Mjg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDhweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTg1ZDY5O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMzZweDtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICYucm90YXRlIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLTEsIDEpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiB1bnNldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM3NHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNjJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 3401:
/*!*****************************************************************!*\
  !*** ./src/app/pages/products/product/part2/part2.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Part2Component": () => (/* binding */ Part2Component)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants */ 4854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 214);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-device-detector */ 6618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 7514);






function Part2Component_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("fill", ctx_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 2, option_r4), " ");
} }
const _c0 = function (a0, a1, a2, a3) { return { "order-lg-1": a0, "order-lg-2": a1, left: a2, right: a3 }; };
const _c1 = function (a0) { return { "background-image": a0 }; };
const _c2 = function (a0, a1) { return { "order-lg-1": a0, "order-lg-2": a1 }; };
function Part2Component_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, Part2Component_div_2_div_6_Template, 7, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](7, _c0, i_r2 % 2 == 0, i_r2 % 2 != 0, i_r2 % 2 == 0, i_r2 % 2 != 0))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c1, item_r1.image));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](14, _c2, i_r2 % 2 != 0, i_r2 % 2 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 5, item_r1.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r1.options);
} }
class Part2Component {
    constructor(localizeRouterService, deviceDetectorService) {
        this.localizeRouterService = localizeRouterService;
        this.deviceDetectorService = deviceDetectorService;
        this.color = '';
        this.locales = this.localizeRouterService.parser.locales;
        this.isMobileOrTablet = true;
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
Part2Component.ɵfac = function Part2Component_Factory(t) { return new (t || Part2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_2__.LocalizeRouterService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__.DeviceDetectorService)); };
Part2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Part2Component, selectors: [["app-part2"]], hostBindings: function Part2Component_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function Part2Component_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { data: "data", color: "color" }, decls: 3, vars: 1, consts: [[1, "part2"], [1, "container"], ["class", "section", "data-aos", "fade-up", "data-aos-duration", "1750", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "1750", 1, "section"], [1, "image-container", "order-1", 3, "ngClass", "ngStyle"], [1, "data", "order-2", 3, "ngClass"], ["style", "display: flex; gap: 12px;grid-gap: 12px; margin-bottom: 20px", 4, "ngFor", "ngForOf"], [2, "display", "flex", "gap", "12px", "grid-gap", "12px", "margin-bottom", "20px"], ["_ngcontent-jfm-c153", "", 2, "width", "20px", "height", "20px", "margin-top", "6px"], ["_ngcontent-jfm-c153", "", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["_ngcontent-jfm-c153", "", "d", "M7.3335 10.934L4.20016 7.80065L5.1335 6.86732L7.3335 9.06732L12.9335 3.46732C11.6668 2.20065 9.9335 1.33398 8.00016 1.33398C4.3335 1.33398 1.3335 4.33398 1.3335 8.00065C1.3335 11.6673 4.3335 14.6673 8.00016 14.6673C11.6668 14.6673 14.6668 11.6673 14.6668 8.00065C14.6668 6.73398 14.3335 5.60065 13.7335 4.60065L7.3335 10.934Z"], [1, "p-larg", "m-0"]], template: function Part2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Part2Component_div_2_Template, 7, 17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["[_nghost-%COMP%]   .part2[_ngcontent-%COMP%] {\n  background-color: #f3f6ff;\n  padding: 76px 0 72px 0px;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .part2[_ngcontent-%COMP%] {\n    padding: 46px 0 69px 0px;\n  }\n}\n[_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 64px;\n  grid-gap: 64px;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 0px 21px !important;\n    align-items: center;\n  }\n}\n[_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  gap: 70px;\n  grid-gap: 70px;\n  justify-content: space-between;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 27px;\n    grid-gap: 27px;\n  }\n}\n[_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 445px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  flex: 1;\n}\n[_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .image-container.left[_ngcontent-%COMP%] {\n  background-position: left;\n}\n[dir=rtl]   [_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .image-container.left[_ngcontent-%COMP%] {\n  background-position: right;\n}\n[_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .image-container.right[_ngcontent-%COMP%] {\n  background-position: right;\n}\n[dir=rtl]   [_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .image-container.right[_ngcontent-%COMP%] {\n  background-position: left;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n    display: block;\n    position: relative;\n    width: 100%;\n    height: 0;\n    padding-bottom: 45%;\n    background-size: contain;\n    background-position: center !important;\n  }\n}\n@media (max-width: 767px) {\n  [_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n    display: block;\n    position: relative;\n    width: 100%;\n    height: 0;\n    padding-bottom: 70%;\n    background-size: contain;\n    background-position: center !important;\n  }\n}\n[_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 445px;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 240.42px;\n  }\n}\n[_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  color: #111828;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-weight: 600;\n    margin-bottom: 20px;\n    font-size: 24px;\n    line-height: 32px;\n  }\n}\n[_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #111828;\n  margin: 0;\n  margin-bottom: 20px;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .part2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 17px;\n    line-height: 32px;\n    margin-bottom: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnQyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0kseUJBQUE7RUFDQSx3QkFBQTtBQUZSO0FBR1E7RUFISjtJQUlRLHdCQUFBO0VBQVY7QUFDRjtBQUNRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFDWjtBQUFZO0VBTEo7SUFNUSxzQkFBQTtJQUNBLDRCQUFBO0lBQ0EsbUJBQUE7RUFHZDtBQUNGO0FBRlk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQUloQjtBQUhnQjtFQVBKO0lBUVEsc0JBQUE7SUFDQSxTQUFBO0lBQ0EsY0FBQTtFQU1sQjtBQUNGO0FBTGdCO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBYUEsT0FBQTtBQUxwQjtBQVBvQjtFQUNJLHlCQUFBO0FBU3hCO0FBUndCO0VBQ0ksMEJBQUE7QUFVNUI7QUFQb0I7RUFDSSwwQkFBQTtBQVN4QjtBQVJ3QjtFQUNJLHlCQUFBO0FBVTVCO0FBTm9CO0VBbEJKO0lBbUJRLGNBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0EsbUJBQUE7SUFDQSx3QkFBQTtJQUNBLHNDQUFBO0VBU3RCO0FBQ0Y7QUFSb0I7RUEzQko7SUE0QlEsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxtQkFBQTtJQUNBLHdCQUFBO0lBQ0Esc0NBQUE7RUFXdEI7QUFDRjtBQVRnQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBV3BCO0FBVm9CO0VBSEo7SUFJUSxnQkFBQTtFQWF0QjtBQUNGO0FBWGdCO0VBQ0ksT0FBQTtBQWFwQjtBQVpvQjtFQUZKO0lBR1EsV0FBQTtFQWV0QjtBQUNGO0FBZG9CO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBZ0J4QjtBQWZ3QjtFQUhKO0lBSVEsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQWtCMUI7QUFDRjtBQWhCb0I7RUFDSSxjQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBa0J4QjtBQWpCd0I7RUFKSjtJQUtRLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7RUFvQjFCO0FBQ0YiLCJmaWxlIjoicGFydDIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIiBhcyBtYXQ7XHJcbkBpbXBvcnQgXCJzcmMvdGhlbWUvX3ZhcmlhYmxlcy5zY3NzXCI7XHJcbjpob3N0IHtcclxuICAgIC5wYXJ0MiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjZmZjtcclxuICAgICAgICBwYWRkaW5nOiA3NnB4IDAgNzJweCAwcHg7XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNDZweCAwIDY5cHggMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZ2FwOiA2NHB4O1xyXG4gICAgICAgICAgICBncmlkLWdhcDogNjRweDtcclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMjFweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZ2FwOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiAyN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAyN3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICYubGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXI9cnRsXSAmIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYucmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2Rpcj1ydGxdICYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLXNtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA3MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjQwLjQycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRhdGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxMTE4Mjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzExMTgyODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 9755:
/*!*****************************************************************!*\
  !*** ./src/app/pages/products/product/part3/part3.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Part3Component": () => (/* binding */ Part3Component)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants */ 4854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 214);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-device-detector */ 6618);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-lazyload-image */ 5600);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _shared_TrimPipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/TrimPipe */ 5858);















const _c0 = function (a0) { return { color: a0 }; };
function Part3Component_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("lazyLoad", option_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx_r0.fontColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 3, option_r1.title), " ");
} }
const _c1 = function (a0) { return { background: a0 }; };
class Part3Component {
    constructor(localizeRouterService, router, spy, deviceDetectorService) {
        this.localizeRouterService = localizeRouterService;
        this.router = router;
        this.spy = spy;
        this.deviceDetectorService = deviceDetectorService;
        this.color = '';
        this.fontColor = '';
        this.locales = this.localizeRouterService.parser.locales;
        this.faArrow = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faArrowRight;
        this.isMobileOrTablet = true;
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
        this.detectDir();
        this.detectSize();
        this.router.events
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd))
            .subscribe(() => {
            this.detectDir();
        });
    }
    detectSize() {
        this.isMobileOrTablet =
            this.deviceDetectorService.isMobile() ||
                this.deviceDetectorService.isTablet();
    }
    detectDir() {
        this.faArrow =
            this.localizeRouterService.parser.currentLang == 'ar'
                ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faArrowLeft
                : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faArrowRight;
        this.spy.detectChanges();
    }
}
Part3Component.ɵfac = function Part3Component_Factory(t) { return new (t || Part3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__.LocalizeRouterService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__.DeviceDetectorService)); };
Part3Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Part3Component, selectors: [["app-part3"]], hostBindings: function Part3Component_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function Part3Component_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, inputs: { color: "color", fontColor: "fontColor", data: "data" }, decls: 16, vars: 19, consts: [[1, "part3"], [1, "container", "shine-btn"], [1, "get-start", "shiny", 3, "ngStyle"], [1, "title"], [1, "bold", 3, "ngStyle"], ["mat-flat-button", "", "color", "primary", 3, "routerLink"], [1, "p-small", 3, "icon"], [1, "details"], ["class", "option-item", 4, "ngFor", "ngForOf"], [1, "option-item"], [3, "lazyLoad"], [1, "p-larg", "m-0", 3, "ngStyle"]], template: function Part3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "trim");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "localize");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, Part3Component_div_15_Template, 5, 7, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c1, ctx.data.background));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c0, ctx.fontColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 9, ctx.data.title)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 11, "/contact-us"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 13, "header.request-demo"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faArrow);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.data.options);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_9__.LazyLoadImageDirective, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__.LocalizeRouterPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _shared_TrimPipe__WEBPACK_IMPORTED_MODULE_1__.TrimPipe], styles: [".part3[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 85px 0 0px 0px;\n}\n@media (max-width: 991px) {\n  .part3[_ngcontent-%COMP%] {\n    padding: 34px 0 34px 0px;\n  }\n}\n.part3[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 64px;\n  grid-gap: 64px;\n  justify-content: center;\n  align-items: center;\n}\n.part3[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .get-start[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 60px;\n  border-radius: 20px;\n  gap: 40px;\n  grid-gap: 40px;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 991px) {\n  .part3[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .get-start[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 24px;\n    gap: 24px;\n    align-items: flex-start;\n  }\n}\n.part3[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .get-start[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.part3[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .get-start[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 39px;\n  white-space: pre-line;\n}\n@media (max-width: 991px) {\n  .part3[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .get-start[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 36px;\n    line-height: 48px;\n    margin-bottom: 20px;\n  }\n}\n.part3[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .get-start[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  height: 56px;\n  background: #ffffff;\n  color: #111828;\n  font-weight: 600;\n  font-size: 17px;\n  line-height: 32px;\n  width: 90%;\n}\n@media (max-width: 991px) {\n  .part3[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .get-start[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    max-width: 100%;\n    width: 100%;\n  }\n}\n.part3[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .get-start[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     .mat-button-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.2s ease-in;\n  gap: 8px;\n  grid-gap: 8px;\n}\n@media (hover: hover) and (pointer: fine) {\n  .part3[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .get-start[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     .mat-button-wrapper:hover {\n    gap: 12px;\n    grid-gap: 12px;\n  }\n}\n.part3[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .get-start[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.part3[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .get-start[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  flex: 2;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  grid-gap: 20px;\n}\n.part3[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .get-start[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .option-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 13.3px;\n  grid-gap: 13.3px;\n}\n@media (max-width: 991px) {\n  .part3[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .get-start[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .option-item[_ngcontent-%COMP%]   .p-larg[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 17px;\n    line-height: 32px;\n  }\n}\n.part3[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .get-start[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .option-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  margin-top: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnQzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQUZKO0FBR0k7RUFISjtJQUlRLHdCQUFBO0VBQU47QUFDRjtBQUNJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFBUTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFWjtBQURZO0VBUko7SUFTUSxzQkFBQTtJQUNBLGFBQUE7SUFDQSxTQUFBO0lBQ0EsdUJBQUE7RUFJZDtBQUNGO0FBSFk7RUFDSSxXQUFBO0FBS2hCO0FBSFk7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0FBS2hCO0FBSmdCO0VBSEo7SUFJUSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0VBT2xCO0FBQ0Y7QUFMWTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQU9oQjtBQU5nQjtFQVRKO0lBVVEsZUFBQTtJQUNBLFdBQUE7RUFTbEI7QUFDRjtBQVJnQjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBQVVwQjtBQVRvQjtFQUNJO0lBQ0ksU0FBQTtJQUNBLGNBQUE7RUFXMUI7QUFDRjtBQVBZO0VBQ0ksT0FBQTtBQVNoQjtBQVBZO0VBQ0ksT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBU2hCO0FBUmdCO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVVwQjtBQVJ3QjtFQURKO0lBRVEsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUFXMUI7QUFDRjtBQVRvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVd4QiIsImZpbGUiOiJwYXJ0My5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgXCJAYW5ndWxhci9tYXRlcmlhbFwiIGFzIG1hdDtcclxuQGltcG9ydCBcInNyYy90aGVtZS9fdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5wYXJ0MyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogODVweCAwIDBweCAwcHg7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgIHBhZGRpbmc6IDM0cHggMCAzNHB4IDBweDtcclxuICAgIH1cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBnYXA6IDY0cHg7XHJcbiAgICAgICAgZ3JpZC1nYXA6IDY0cHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAuZ2V0LXN0YXJ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcGFkZGluZzogNjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgZ2FwOiA0MHB4O1xyXG4gICAgICAgICAgICBncmlkLWdhcDogNDBweDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjRweDtcclxuICAgICAgICAgICAgICAgIGdhcDogMjRweDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzOXB4O1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDhweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxMTE4Mjg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA6Om5nLWRlZXAgLm1hdC1idXR0b24td3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbjtcclxuICAgICAgICAgICAgICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBncmlkLWdhcDogMjBweDtcclxuICAgICAgICAgICAgICAgIC5vcHRpb24taXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBnYXA6IDEzLjNweDtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogMTMuM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIC5wLWxhcmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 5782:
/*!*****************************************************************!*\
  !*** ./src/app/pages/products/product/part4/part4.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Part4Component": () => (/* binding */ Part4Component)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants */ 4854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 214);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-device-detector */ 6618);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-lazyload-image */ 5600);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 7514);







function Part4Component_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("fill", ctx_r2.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 2, option_r3), " ");
} }
const _c0 = function (a0) { return { small: a0 }; };
const _c1 = function (a0) { return { flex: a0 }; };
function Part4Component_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, Part4Component_div_2_div_6_Template, 7, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, item_r1.type != "big"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c1, item_r1.type == "big" ? " 0 0 100%" : 0.5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", item_r1.icone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, item_r1.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lazyLoad", item_r1.image);
} }
class Part4Component {
    constructor(localizeRouterService, deviceDetectorService) {
        this.localizeRouterService = localizeRouterService;
        this.deviceDetectorService = deviceDetectorService;
        this.color = '';
        this.locales = this.localizeRouterService.parser.locales;
        this.isMobileOrTablet = true;
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
Part4Component.ɵfac = function Part4Component_Factory(t) { return new (t || Part4Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_2__.LocalizeRouterService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__.DeviceDetectorService)); };
Part4Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Part4Component, selectors: [["app-part4"]], hostBindings: function Part4Component_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function Part4Component_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { data: "data", color: "color" }, decls: 3, vars: 1, consts: [[1, "part4"], [1, "container"], ["class", "item", 3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], [1, "item", 3, "ngClass", "ngStyle"], [1, "data"], [3, "lazyLoad"], [1, "bold"], ["style", "display: flex; gap: 12px; grid-gap: 12px; margin-bottom: 20px", 4, "ngFor", "ngForOf"], [2, "display", "flex", "gap", "12px", "grid-gap", "12px", "margin-bottom", "20px"], [2, "width", "20px", "height", "20px", "margin-top", "6px"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M7.3335 10.934L4.20016 7.80065L5.1335 6.86732L7.3335 9.06732L12.9335 3.46732C11.6668 2.20065 9.9335 1.33398 8.00016 1.33398C4.3335 1.33398 1.3335 4.33398 1.3335 8.00065C1.3335 11.6673 4.3335 14.6673 8.00016 14.6673C11.6668 14.6673 14.6668 11.6673 14.6668 8.00065C14.6668 6.73398 14.3335 5.60065 13.7335 4.60065L7.3335 10.934Z"], [1, "p-larg", "m-0"]], template: function Part4Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Part4Component_div_2_Template, 8, 12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, dependencies: [ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__.LazyLoadImageDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: ["[_nghost-%COMP%]   .part4[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 85px 0 85px 0px;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .part4[_ngcontent-%COMP%] {\n    padding: 24px 0 24px 0px;\n  }\n}\n[_nghost-%COMP%]   .part4[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  gap: 24px;\n  grid-gap: 24px;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .part4[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .part4[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  background: #f3f6ff;\n  border-radius: 16px;\n  isolation: isolate;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  grid-gap: 20px;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .part4[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    overflow: hidden;\n    flex-direction: column;\n    flex: unset !important;\n  }\n}\n[_nghost-%COMP%]   .part4[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1.3;\n  margin: 40px 0px 40px 40px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .part4[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  margin: 40px 40px 0px 40px;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .part4[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n    margin: 24px;\n    margin-bottom: 0;\n  }\n}\n[_nghost-%COMP%]   .part4[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  margin-bottom: 32px;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .part4[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n}\n[_nghost-%COMP%]   .part4[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .part4[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 24px;\n    line-height: 32px;\n  }\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .part4[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .p-larg[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 17px;\n    line-height: 32px;\n  }\n}\n[_nghost-%COMP%]   .part4[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40%;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .part4[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (min-width: 991px) {\n  [_nghost-%COMP%]   .part4[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item.small[_ngcontent-%COMP%] {\n    flex-direction: column;\n    flex-direction: column;\n    overflow: hidden;\n    position: relative;\n  }\n  [_nghost-%COMP%]   .part4[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item.small[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    margin: 0;\n    padding: 40px;\n    padding-bottom: 0;\n  }\n  [_nghost-%COMP%]   .part4[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .item.small[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnQ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksc0JBQUE7RUFDQSx3QkFBQTtBQUZSO0FBR1E7RUFISjtJQUlRLHdCQUFBO0VBQVY7QUFDRjtBQUNRO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBQ1o7QUFBWTtFQU5KO0lBT1Esc0JBQUE7RUFHZDtBQUNGO0FBRlk7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQUloQjtBQUhnQjtFQVJKO0lBU1EsZ0JBQUE7SUFDQSxzQkFBQTtJQUNBLHNCQUFBO0VBTWxCO0FBQ0Y7QUFMZ0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7QUFPcEI7QUFOb0I7RUFDSSwwQkFBQTtBQVF4QjtBQUxvQjtFQVRKO0lBVVEsWUFBQTtJQUNBLGdCQUFBO0VBUXRCO0FBQ0Y7QUFQb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBU3hCO0FBUndCO0VBSko7SUFLUSxXQUFBO0lBQ0EsWUFBQTtFQVcxQjtBQUNGO0FBVG9CO0VBQ0ksbUJBQUE7QUFXeEI7QUFWd0I7RUFGSjtJQUdRLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VBYTFCO0FBQ0Y7QUFWd0I7RUFESjtJQUVRLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VBYTFCO0FBQ0Y7QUFWZ0I7RUFDSSxVQUFBO0FBWXBCO0FBWG9CO0VBRko7SUFHUSxXQUFBO0VBY3RCO0FBQ0Y7QUFYZ0I7RUFDSTtJQUNJLHNCQUFBO0lBQ0Esc0JBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VBYXRCO0VBWnNCO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsT0FBQTtJQUNBLFNBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7RUFjMUI7RUFac0I7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQWMxQjtBQUNGIiwiZmlsZSI6InBhcnQ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcIkBhbmd1bGFyL21hdGVyaWFsXCIgYXMgbWF0O1xyXG5AaW1wb3J0IFwic3JjL3RoZW1lL192YXJpYWJsZXMuc2Nzc1wiO1xyXG46aG9zdCB7XHJcbiAgICAucGFydDQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogODVweCAwIDg1cHggMHB4O1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDI0cHggMCAyNHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgZ2FwOiAyNHB4O1xyXG4gICAgICAgICAgICBncmlkLWdhcDogMjRweDtcclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW0ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YzZjZmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBpc29sYXRpb246IGlzb2xhdGU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGdhcDogMjBweDtcclxuICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kYXRhIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMS4zO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNDBweCAwcHggNDBweCA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIFtkaXI9cnRsXSAmIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA0MHB4IDQwcHggMHB4IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucC1sYXJnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAmLnNtYWxsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF0YSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 9813:
/*!*************************************************************!*\
  !*** ./src/app/pages/products/product/product.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductComponent": () => (/* binding */ ProductComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 7490);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ssr-window */ 2864);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _core_layout_ready_for_change_ready_for_change_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/layout/ready-for-change/ready-for-change.component */ 9887);
/* harmony import */ var _core_layout_customer_section_customer_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/layout/customer-section/customer-section.component */ 7322);
/* harmony import */ var _part1_part1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./part1/part1.component */ 3458);
/* harmony import */ var _part2_part2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./part2/part2.component */ 3401);
/* harmony import */ var _part3_part3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./part3/part3.component */ 9755);
/* harmony import */ var _part4_part4_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./part4/part4.component */ 5782);











class ProductComponent {
    constructor(document, router) {
        this.document = document;
        this.router = router;
        this.products = {
            CRM: {
                id: 'CRM',
                color: '#6EDFCF',
                fontColor: '#111828',
                btnColor: '#111828',
                part1: {
                    header: 'products.CRM.Part1.header',
                    title: 'products.CRM.Part1.title',
                    'sub-title': 'products.CRM.Part1.sub-title',
                    icon: 'assets/images/main-banner/crm.svg',
                    image: 'assets/images/products/crm/part1Image.png',
                    altIcon: 'crm',
                    almage: 'crm part1 image',
                    height: '410px',
                    heightSmall: '262px',
                },
                part2: [
                    {
                        title: 'products.CRM.Part2.section1.title',
                        options: [
                            'products.CRM.Part2.section1.option1',
                            'products.CRM.Part2.section1.option2',
                            'products.CRM.Part2.section1.option3',
                            'products.CRM.Part2.section1.option4',
                        ],
                        image: "url('/assets/images/products/crm/part2section1.png')",
                        imageIcon: 'crm part2 section1 image',
                    },
                    {
                        title: 'products.CRM.Part2.section2.title',
                        options: [
                            'products.CRM.Part2.section2.option1',
                            'products.CRM.Part2.section2.option2',
                        ],
                        image: "url('/assets/images/products/crm/part2section2.png')",
                        imageIcon: 'crm part2 section2 image',
                    },
                    {
                        title: 'products.CRM.Part2.section3.title',
                        options: [
                            'products.CRM.Part2.section3.option1',
                            'products.CRM.Part2.section3.option2',
                        ],
                        image: "url('/assets/images/products/crm/part2section3.png')",
                        imageIcon: 'crm part2 section3 image',
                    },
                    {
                        title: 'products.CRM.Part2.section4.title',
                        options: [
                            'products.CRM.Part2.section4.option1',
                            'products.CRM.Part2.section4.option2',
                        ],
                        image: "url('/assets/images/products/crm/part2section4.png')",
                        imageIcon: 'crm part2 section4 image',
                    },
                    {
                        title: 'products.CRM.Part2.section5.title',
                        options: [
                            'products.CRM.Part2.section5.option1',
                            'products.CRM.Part2.section5.option2',
                            'products.CRM.Part2.section5.option3',
                        ],
                        image: "url('/assets/images/products/crm/part2section5.png')",
                        imageIcon: 'crm part2 section5 image',
                    },
                ],
                part3: {
                    title: 'products.CRM.Part3.title',
                    background: 'linear-gradient(85.2deg, #6EDFCF 0.89%, #C0FFF6 100%)',
                    options: [
                        {
                            title: 'products.CRM.Part3.option1',
                            icon: 'assets/images/products/crm/part3Option1.svg',
                            imageIcon: 'crm part2 section5 image',
                        },
                        {
                            title: 'products.CRM.Part3.option2',
                            icon: 'assets/images/products/crm/part3Option2.svg',
                        },
                        {
                            title: 'products.CRM.Part3.option3',
                            icon: 'assets/images/products/crm/part3Option3.svg',
                        },
                    ],
                },
                part4: [
                    {
                        title: 'products.CRM.Part4.section1.title',
                        icone: 'assets/images/products/crm/part4Section1Icon.svg',
                        image: 'assets/images/products/crm/part4Section1Image.png',
                        type: 'big',
                        options: [
                            'products.CRM.Part4.section1.option1',
                            'products.CRM.Part4.section1.option2',
                            'products.CRM.Part4.section1.option3',
                            'products.CRM.Part4.section1.option4',
                        ],
                    },
                    {
                        title: 'products.CRM.Part4.section2.title',
                        icone: 'assets/images/products/crm/part4Section2Icon.svg',
                        image: 'assets/images/products/crm/part4Section2Image.png',
                        type: 'small',
                        options: [
                            'products.CRM.Part4.section2.option1',
                            'products.CRM.Part4.section2.option2',
                        ],
                    },
                    {
                        title: 'products.CRM.Part4.section3.title',
                        icone: 'assets/images/products/crm/part4Section3Icon.svg',
                        image: 'assets/images/products/crm/part4Section3Image.png',
                        type: 'small',
                        options: [
                            'products.CRM.Part4.section3.option1',
                            'products.CRM.Part4.section3.option2',
                            'products.CRM.Part4.section3.option3',
                        ],
                    },
                ],
            },
            ERP: {
                id: 'ERP',
                color: '#5621CB',
                fontColor: '#ffffff',
                btnColor: '#FFFFFF',
                part1: {
                    header: 'products.ERP.Part1.header',
                    title: 'products.ERP.Part1.title',
                    'sub-title': 'products.ERP.Part1.sub-title',
                    icon: 'assets/images/main-banner/erp.svg',
                    image: 'assets/images/products/erp/part1Image.png',
                    height: ' 520px',
                    heightSmall: 'auto',
                },
                part2: [
                    {
                        title: 'products.ERP.Part2.section1.title',
                        options: [
                            'products.ERP.Part2.section1.option1',
                            'products.ERP.Part2.section1.option2',
                            'products.ERP.Part2.section1.option3',
                        ],
                        image: "url('/assets/images/products/erp/part2section1.png')",
                    },
                    {
                        title: 'products.ERP.Part2.section2.title',
                        options: ['products.ERP.Part2.section2.option1'],
                        image: "url('/assets/images/products/erp/part2section2.png')",
                    },
                    {
                        title: 'products.ERP.Part2.section3.title',
                        options: [
                            'products.ERP.Part2.section3.option1',
                            'products.ERP.Part2.section3.option2',
                            'products.ERP.Part2.section3.option3',
                            'products.ERP.Part2.section3.option4',
                        ],
                        image: "url('/assets/images/products/erp/part2section3.png')",
                    },
                    {
                        title: 'products.ERP.Part2.section4.title',
                        options: [
                            'products.ERP.Part2.section4.option1',
                            'products.ERP.Part2.section4.option2',
                            'products.ERP.Part2.section4.option3',
                        ],
                        image: "url('/assets/images/products/erp/part2section4.png')",
                    },
                    {
                        title: 'products.ERP.Part2.section5.title',
                        options: [
                            'products.ERP.Part2.section5.option1',
                            'products.ERP.Part2.section5.option2',
                        ],
                        image: "url('/assets/images/products/erp/part2section5.png')",
                    },
                ],
                part3: {
                    title: 'products.ERP.Part3.title',
                    background: 'linear-gradient(85.2deg, #9747FF 0.89%, #B082EB 100%)',
                    options: [
                        {
                            title: 'products.ERP.Part3.option1',
                            icon: 'assets/images/products/erp/part3Option1.svg',
                        },
                        {
                            title: 'products.ERP.Part3.option2',
                            icon: 'assets/images/products/erp/part3Option2.svg',
                        },
                        {
                            title: 'products.ERP.Part3.option3',
                            icon: 'assets/images/products/erp/part3Option3.svg',
                        },
                    ],
                },
                part4: [
                    {
                        title: 'products.ERP.Part4.section1.title',
                        icone: 'assets/images/products/erp/part4Section1Icon.svg',
                        image: 'assets/images/products/erp/part4Section1Image.png',
                        type: 'big',
                        options: ['products.ERP.Part4.section1.option1'],
                    },
                    {
                        title: 'products.ERP.Part4.section2.title',
                        icone: 'assets/images/products/erp/part4Section2Icon.svg',
                        image: 'assets/images/products/erp/part4Section2Image.png',
                        type: 'small',
                        options: [
                            'products.ERP.Part4.section2.option1',
                            'products.ERP.Part4.section2.option2',
                        ],
                    },
                    {
                        title: 'products.ERP.Part4.section3.title',
                        icone: 'assets/images/products/erp/part4Section3Icon.svg',
                        image: 'assets/images/products/erp/part4Section3Image.png',
                        type: 'small',
                        options: ['products.ERP.Part4.section3.option1'],
                    },
                ],
            },
            HR: {
                id: 'HR',
                color: '#EC8E65',
                fontColor: '#111828',
                btnColor: '#FFFFFF',
                part1: {
                    header: 'products.HR.Part1.header',
                    title: 'products.HR.Part1.title',
                    'sub-title': 'products.HR.Part1.sub-title',
                    icon: 'assets/images/main-banner/hr.svg',
                    image: 'assets/images/products/hr/part1Image.png',
                    height: ' 520px',
                    heightSmall: 'auto',
                },
                part2: [
                    {
                        title: 'products.HR.Part2.section1.title',
                        options: [
                            'products.HR.Part2.section1.option1',
                            'products.HR.Part2.section1.option2',
                        ],
                        image: "url('/assets/images/products/hr/part2section1.png')",
                    },
                    {
                        title: 'products.HR.Part2.section2.title',
                        options: [
                            'products.HR.Part2.section2.option1',
                            'products.HR.Part2.section2.option2',
                            'products.HR.Part2.section2.option3',
                        ],
                        image: "url('/assets/images/products/hr/part2section2.png')",
                    },
                    {
                        title: 'products.HR.Part2.section3.title',
                        options: [
                            'products.HR.Part2.section3.option1',
                            'products.HR.Part2.section3.option2',
                        ],
                        image: "url('/assets/images/products/hr/part2section3.png')",
                    },
                    {
                        title: 'products.HR.Part2.section4.title',
                        options: [
                            'products.HR.Part2.section4.option1',
                            'products.HR.Part2.section4.option2',
                        ],
                        image: "url('/assets/images/products/hr/part2section4.png')",
                    },
                ],
                part3: {
                    title: 'products.HR.Part3.title',
                    background: 'linear-gradient(85.2deg, #F5BF4F 0.89%, #FFD377 100%)',
                    options: [
                        {
                            title: 'products.HR.Part3.option1',
                            icon: 'assets/images/products/hr/part3Option1.svg',
                        },
                        {
                            title: 'products.HR.Part3.option2',
                            icon: 'assets/images/products/hr/part3Option2.svg',
                        },
                        {
                            title: 'products.HR.Part3.option3',
                            icon: 'assets/images/products/hr/part3Option3.svg',
                        },
                    ],
                },
                part4: [
                    {
                        title: 'products.HR.Part4.section1.title',
                        icone: 'assets/images/products/hr/part4Section1Icon.svg',
                        image: 'assets/images/products/hr/part4Section1Image.png',
                        type: 'big',
                        options: ['products.HR.Part4.section1.option1'],
                    },
                    {
                        title: 'products.HR.Part4.section2.title',
                        icone: 'assets/images/products/hr/part4Section2Icon.svg',
                        image: 'assets/images/products/hr/part4Section2Image.png',
                        type: 'small',
                        options: ['products.HR.Part4.section2.option1'],
                    },
                    {
                        title: 'products.HR.Part4.section3.title',
                        icone: 'assets/images/products/hr/part4Section3Icon.svg',
                        image: 'assets/images/products/hr/part4Section3Image.png',
                        type: 'small',
                        options: [
                            'products.HR.Part4.section3.option1',
                            'products.HR.Part4.section3.option2',
                        ],
                    },
                ],
            },
            SME: {
                id: 'SME',
                color: '#E44870',
                fontColor: '#111828',
                btnColor: '#FFFFFF',
                part1: {
                    header: 'products.SME.Part1.header',
                    title: 'products.SME.Part1.title',
                    'sub-title': 'products.SME.Part1.sub-title',
                    icon: 'assets/images/main-banner/sme.svg',
                    image: 'assets/images/products/sme/part1Image.png',
                    height: ' 520px',
                    heightSmall: 'auto',
                },
                part2: [
                    {
                        title: 'products.SME.Part2.section1.title',
                        options: ['products.SME.Part2.section1.option1'],
                        image: "url('/assets/images/products/sme/part2section1.png')",
                    },
                    {
                        title: 'products.SME.Part2.section2.title',
                        options: ['products.SME.Part2.section2.option1'],
                        image: "url('/assets/images/products/sme/part2section2.png')",
                    },
                    {
                        title: 'products.SME.Part2.section3.title',
                        options: [
                            'products.SME.Part2.section3.option1',
                            'products.SME.Part2.section3.option2',
                        ],
                        image: "url('/assets/images/products/sme/part2section3.png')",
                    },
                    {
                        title: 'products.SME.Part2.section4.title',
                        options: [
                            'products.SME.Part2.section4.option1',
                            'products.SME.Part2.section4.option2',
                        ],
                        image: "url('/assets/images/products/sme/part2section4.png')",
                    },
                    {
                        title: 'products.SME.Part2.section5.title',
                        options: [
                            'products.SME.Part2.section5.option1',
                            'products.SME.Part2.section5.option2',
                        ],
                        image: "url('/assets/images/products/sme/part2section5.png')",
                    },
                ],
                part3: {
                    title: 'products.SME.Part3.title',
                    background: 'linear-gradient(85.2deg, #ED6A5F 0.89%, #F19E97 100%)',
                    options: [
                        {
                            title: 'products.SME.Part3.option1',
                            icon: 'assets/images/products/sme/part3Option1.svg',
                        },
                        {
                            title: 'products.SME.Part3.option2',
                            icon: 'assets/images/products/sme/part3Option2.svg',
                        },
                        {
                            title: 'products.SME.Part3.option3',
                            icon: 'assets/images/products/sme/part3Option3.svg',
                        },
                    ],
                },
                part4: [
                    {
                        title: 'products.SME.Part4.section1.title',
                        icone: 'assets/images/products/sme/part4Section1Icon.svg',
                        image: 'assets/images/products/sme/part4Section1Image.png',
                        type: 'big',
                        options: ['products.SME.Part4.section1.option1'],
                    },
                    {
                        title: 'products.SME.Part4.section2.title',
                        icone: 'assets/images/products/sme/part4Section2Icon.svg',
                        image: 'assets/images/products/sme/part4Section2Image.png',
                        type: 'small',
                        options: ['products.SME.Part4.section2.option1'],
                    },
                    {
                        title: 'products.SME.Part4.section3.title',
                        icone: 'assets/images/products/sme/part4Section3Icon.svg',
                        image: 'assets/images/products/sme/part4Section3Image.png',
                        type: 'small',
                        options: ['products.SME.Part4.section3.option1'],
                    },
                ],
            },
            'E-Invoice': {
                id: 'E-Invoice',
                color: '#3A8AF7',
                fontColor: '#111828',
                btnColor: '#FFFFFF',
                part1: {
                    header: 'products.E-Invoice.Part1.header',
                    title: 'products.E-Invoice.Part1.title',
                    'sub-title': 'products.E-Invoice.Part1.sub-title',
                    icon: 'assets/images/main-banner/e-invoice.svg',
                    image: 'assets/images/products/e-invoice/part1Image.png',
                    height: ' 520px',
                    heightSmall: 'auto',
                },
                part2: [
                    {
                        title: 'products.E-Invoice.Part2.section1.title',
                        options: ['products.E-Invoice.Part2.section1.option1'],
                        image: "url('/assets/images/products/e-invoice/part2section1.png')",
                    },
                    {
                        title: 'products.E-Invoice.Part2.section2.title',
                        options: ['products.E-Invoice.Part2.section2.option1'],
                        image: "url('/assets/images/products/e-invoice/part2section2.png')",
                    },
                    {
                        title: 'products.E-Invoice.Part2.section3.title',
                        options: [
                            'products.E-Invoice.Part2.section3.option1',
                            'products.E-Invoice.Part2.section3.option2',
                        ],
                        image: "url('/assets/images/products/e-invoice/part2section3.png')",
                    },
                ],
                part3: {
                    title: 'products.E-Invoice.Part3.title',
                    background: 'linear-gradient(35.1deg, #3A8AF7 0%, #8DBDFF 100%)',
                    options: [
                        {
                            title: 'products.E-Invoice.Part3.option1',
                            icon: 'assets/images/products/e-invoice/part3Option1.svg',
                        },
                        {
                            title: 'products.E-Invoice.Part3.option2',
                            icon: 'assets/images/products/e-invoice/part3Option2.svg',
                        },
                        {
                            title: 'products.E-Invoice.Part3.option3',
                            icon: 'assets/images/products/e-invoice/part3Option3.svg',
                        },
                    ],
                },
                part4: [
                    {
                        title: 'products.E-Invoice.Part4.section1.title',
                        icone: 'assets/images/products/e-invoice/part4Section1Icon.svg',
                        image: 'assets/images/products/e-invoice/part4Section1Image.png',
                        type: 'small',
                        options: [
                            'products.E-Invoice.Part4.section1.option1',
                            'products.E-Invoice.Part4.section1.option2',
                        ],
                    },
                    {
                        title: 'products.E-Invoice.Part4.section2.title',
                        icone: 'assets/images/products/e-invoice/part4Section2Icon.svg',
                        image: 'assets/images/products/e-invoice/part4Section2Image.png',
                        type: 'small',
                        options: ['products.E-Invoice.Part4.section2.option1'],
                    },
                ],
            },
            Media: {
                id: 'Media',
                color: '#70D495',
                fontColor: '#111828',
                btnColor: '#111828',
                part1: {
                    header: 'products.Media.Part1.header',
                    title: 'products.Media.Part1.title',
                    'sub-title': 'products.Media.Part1.sub-title',
                    icon: 'assets/images/main-banner/media.svg',
                    image: 'assets/images/products/media/part1Image.png',
                    height: ' 520px',
                    heightSmall: 'auto',
                },
                part2: [
                    {
                        title: 'products.Media.Part2.section1.title',
                        options: [
                            'products.Media.Part2.section1.option1',
                            'products.Media.Part2.section1.option2',
                        ],
                        image: "url('/assets/images/products/media/part2section1.png')",
                    },
                    {
                        title: 'products.Media.Part2.section2.title',
                        options: [
                            'products.Media.Part2.section2.option1',
                            'products.Media.Part2.section2.option2',
                        ],
                        image: "url('/assets/images/products/media/part2section2.png')",
                    },
                    {
                        title: 'products.Media.Part2.section3.title',
                        options: ['products.Media.Part2.section3.option1'],
                        image: "url('/assets/images/products/media/part2section3.png')",
                    },
                    {
                        title: 'products.Media.Part2.section4.title',
                        options: [
                            'products.Media.Part2.section4.option1',
                            'products.Media.Part2.section4.option2',
                            'products.Media.Part2.section4.option3',
                            'products.Media.Part2.section4.option4',
                        ],
                        image: "url('/assets/images/products/media/part2section4.png')",
                    },
                ],
                part3: {
                    title: 'products.Media.Part3.title',
                    background: 'linear-gradient(35.1deg, #70D495 0%, #93FBBA 100%)',
                    options: [
                        {
                            title: 'products.Media.Part3.option1',
                            icon: 'assets/images/products/media/part3Option1.svg',
                        },
                        {
                            title: 'products.Media.Part3.option2',
                            icon: 'assets/images/products/media/part3Option2.svg',
                        },
                        {
                            title: 'products.Media.Part3.option3',
                            icon: 'assets/images/products/media/part3Option3.svg',
                        },
                    ],
                },
                part4: [
                    {
                        title: 'products.Media.Part4.section1.title',
                        icone: 'assets/images/products/media/part4Section1Icon.svg',
                        image: 'assets/images/products/media/part4Section1Image.png',
                        type: 'big',
                        options: [
                            'products.Media.Part4.section1.option1',
                            'products.Media.Part4.section1.option2',
                        ],
                    },
                    {
                        title: 'products.Media.Part4.section2.title',
                        icone: 'assets/images/products/media/part4Section2Icon.svg',
                        image: 'assets/images/products/media/part4Section2Image.png',
                        type: 'small',
                        options: ['products.Media.Part4.section2.option1'],
                    },
                    {
                        title: 'products.Media.Part4.section3.title',
                        icone: 'assets/images/products/media/part4Section3Icon.svg',
                        image: 'assets/images/products/media/part4Section3Image.png',
                        type: 'small',
                        options: ['products.Media.Part4.section3.option1'],
                    },
                ],
            },
            Accounting: {
                id: 'Accounting',
                color: '#F7D74E',
                fontColor: '#111828',
                btnColor: '#111828',
                part1: {
                    header: 'products.Accounting.Part1.header',
                    title: 'products.Accounting.Part1.title',
                    'sub-title': 'products.Accounting.Part1.sub-title',
                    icon: 'assets/images/main-banner/acc.svg',
                    image: 'assets/images/products/accounting/part1Image.png',
                    height: ' 520px',
                    heightSmall: 'auto',
                },
                part2: [
                    {
                        title: 'products.Accounting.Part2.section1.title',
                        options: ['products.Accounting.Part2.section1.option1'],
                        image: "url('/assets/images/products/accounting/part2section1.png')",
                    },
                    {
                        title: 'products.Accounting.Part2.section2.title',
                        options: ['products.Accounting.Part2.section2.option1'],
                        image: "url('/assets/images/products/accounting/part2section2.png')",
                    },
                    {
                        title: 'products.Accounting.Part2.section3.title',
                        options: ['products.Accounting.Part2.section3.option1'],
                        image: "url('/assets/images/products/accounting/part2section3.png')",
                    },
                ],
                part3: {
                    title: 'products.Accounting.Part3.title',
                    background: 'linear-gradient(35.1deg, #F7D74E 0%, #FFEDA2 100%)',
                    options: [
                        {
                            title: 'products.Accounting.Part3.option1',
                            icon: 'assets/images/products/accounting/part3Option1.svg',
                        },
                        {
                            title: 'products.Accounting.Part3.option2',
                            icon: 'assets/images/products/accounting/part3Option2.svg',
                        },
                        {
                            title: 'products.Accounting.Part3.option3',
                            icon: 'assets/images/products/accounting/part3Option3.svg',
                        },
                    ],
                },
                part4: [
                    {
                        title: 'products.Accounting.Part4.section1.title',
                        icone: 'assets/images/products/accounting/part4Section1Icon.svg',
                        image: 'assets/images/products/accounting/part4Section1Image.png',
                        type: 'big',
                        options: ['products.Accounting.Part4.section1.option1'],
                    },
                    {
                        title: 'products.Accounting.Part4.section2.title',
                        icone: 'assets/images/products/accounting/part4Section2Icon.svg',
                        image: 'assets/images/products/accounting/part4Section2Image.png',
                        type: 'small',
                        options: ['products.Accounting.Part4.section2.option1'],
                    },
                    {
                        title: 'products.Accounting.Part4.section3.title',
                        icone: 'assets/images/products/accounting/part4Section3Icon.svg',
                        image: 'assets/images/products/accounting/part4Section3Image.png',
                        type: 'small',
                        options: ['products.Accounting.Part4.section3.option1'],
                    },
                ],
            },
        };
    }
    ngOnInit() {
        var _a;
        const currentTab = ((_a = this.router.url.split('/').pop()) === null || _a === void 0 ? void 0 : _a.split('?')[0]) || '';
        if (currentTab == 'CRM')
            this.currentProduct = this.products.CRM;
        if (currentTab == 'ERP')
            this.currentProduct = this.products.ERP;
        if (currentTab == 'HR')
            this.currentProduct = this.products.HR;
        if (currentTab == 'SME')
            this.currentProduct = this.products.SME;
        if (currentTab == 'E-Invoice')
            this.currentProduct = this.products['E-Invoice'];
        if (currentTab == 'Media')
            this.currentProduct = this.products.Media;
        if (currentTab == 'Accounting')
            this.currentProduct = this.products.Accounting;
        if ((0,ssr_window__WEBPACK_IMPORTED_MODULE_1__.getWindow)())
            aos__WEBPACK_IMPORTED_MODULE_0___default().init({
                once: false,
            });
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router)); };
ProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 6, vars: 12, consts: [[3, "data", "id", "color", "btnColor", "fontColor"], [3, "data", "color"], [3, "fontColor", "data", "color"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-part1", 0)(1, "app-part2", 1)(2, "app-part3", 2)(3, "app-part4", 1)(4, "app-customer-section")(5, "app-ready-for-change");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx.currentProduct.part1)("id", ctx.currentProduct.id)("color", ctx.currentProduct.color)("btnColor", ctx.currentProduct.btnColor)("fontColor", ctx.currentProduct.fontColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx.currentProduct.part2)("color", ctx.currentProduct.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("fontColor", ctx.currentProduct.fontColor)("data", ctx.currentProduct.part3)("color", ctx.currentProduct.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx.currentProduct.part4)("color", ctx.currentProduct.color);
    } }, dependencies: [_core_layout_ready_for_change_ready_for_change_component__WEBPACK_IMPORTED_MODULE_2__.ReadyForChangeComponent, _core_layout_customer_section_customer_section_component__WEBPACK_IMPORTED_MODULE_3__.CustomerSectionComponent, _part1_part1_component__WEBPACK_IMPORTED_MODULE_4__.Part1Component, _part2_part2_component__WEBPACK_IMPORTED_MODULE_5__.Part2Component, _part3_part3_component__WEBPACK_IMPORTED_MODULE_6__.Part3Component, _part4_part4_component__WEBPACK_IMPORTED_MODULE_7__.Part4Component], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9653:
/*!***********************************************************!*\
  !*** ./src/app/pages/products/products-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "productRoutingModule": () => (/* binding */ productRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product/product.component */ 9813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const PRODUCTS_ROUTES = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'CRM',
                pathMatch: 'full',
            },
            {
                path: 'CRM',
                component: _product_product_component__WEBPACK_IMPORTED_MODULE_0__.ProductComponent,
            },
            {
                path: 'ERP',
                component: _product_product_component__WEBPACK_IMPORTED_MODULE_0__.ProductComponent,
            },
            {
                path: 'HR',
                component: _product_product_component__WEBPACK_IMPORTED_MODULE_0__.ProductComponent,
            },
            {
                path: 'SME',
                component: _product_product_component__WEBPACK_IMPORTED_MODULE_0__.ProductComponent,
            },
            {
                path: 'E-Invoice',
                component: _product_product_component__WEBPACK_IMPORTED_MODULE_0__.ProductComponent,
            },
            {
                path: 'Media',
                component: _product_product_component__WEBPACK_IMPORTED_MODULE_0__.ProductComponent,
            },
            {
                path: 'Accounting',
                component: _product_product_component__WEBPACK_IMPORTED_MODULE_0__.ProductComponent,
            },
        ],
    },
];
class productRoutingModule {
}
productRoutingModule.ɵfac = function productRoutingModule_Factory(t) { return new (t || productRoutingModule)(); };
productRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: productRoutingModule });
productRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(PRODUCTS_ROUTES), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](productRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5712:
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModule": () => (/* binding */ ProductsModule)
/* harmony export */ });
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-routing.module */ 9653);
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/product.component */ 9813);
/* harmony import */ var _product_part1_part1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/part1/part1.component */ 3458);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _product_part2_part2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/part2/part2.component */ 3401);
/* harmony import */ var _product_part3_part3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/part3/part3.component */ 9755);
/* harmony import */ var _product_part4_part4_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/part4/part4.component */ 5782);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-lazyload-image */ 5600);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 214);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);














class ProductsModule {
}
ProductsModule.ɵfac = function ProductsModule_Factory(t) { return new (t || ProductsModule)(); };
ProductsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_8__.LocalizeRouterModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__.LazyLoadImageModule,
        _products_routing_module__WEBPACK_IMPORTED_MODULE_0__.productRoutingModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FontAwesomeModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule.forChild(),
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_product_product_component__WEBPACK_IMPORTED_MODULE_1__.ProductComponent,
        _product_part1_part1_component__WEBPACK_IMPORTED_MODULE_2__.Part1Component,
        _product_part2_part2_component__WEBPACK_IMPORTED_MODULE_3__.Part2Component,
        _product_part3_part3_component__WEBPACK_IMPORTED_MODULE_4__.Part3Component,
        _product_part4_part4_component__WEBPACK_IMPORTED_MODULE_5__.Part4Component], imports: [_gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_8__.LocalizeRouterModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__.LazyLoadImageModule,
        _products_routing_module__WEBPACK_IMPORTED_MODULE_0__.productRoutingModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FontAwesomeModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_products_products_module_ts.js.map