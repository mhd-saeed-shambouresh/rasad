"use strict";
(self["webpackChunkRasad"] = self["webpackChunkRasad"] || []).push([["src_app_core_layout_page404_page404_module_ts"],{

/***/ 3736:
/*!**********************************************************!*\
  !*** ./src/app/core/layout/page404/page404.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page404Component": () => (/* binding */ Page404Component)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nguniversal/express-engine/tokens */ 4256);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 214);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-lottie */ 8530);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 7514);









class Page404Component {
    constructor(platformId, injector, router, localizeRouterService) {
        this.platformId = platformId;
        this.injector = injector;
        this.router = router;
        this.localizeRouterService = localizeRouterService;
        this.options = {
            path: '/assets/lottie/404.json',
        };
    }
    ngOnInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformServer)(this.platformId)) {
            const response = this.injector.get(_nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_0__.RESPONSE);
            response.status(404);
        }
    }
    navigate() {
        let translatedPath = this.localizeRouterService.translateRoute(['/']);
        this.router.navigate(translatedPath);
    }
}
Page404Component.ɵfac = function Page404Component_Factory(t) { return new (t || Page404Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__.LocalizeRouterService)); };
Page404Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 8, vars: 7, consts: [[1, "container"], ["containerClass", "box404", 3, "options"], ["mat-flat-button", "", "color", "primary", 1, "btn", 3, "click"]], template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ng-lottie", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Page404Component_Template_button_click_5_listener() { return ctx.navigate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 3, "page404.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 5, "page404.home"), " ");
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, ngx_lottie__WEBPACK_IMPORTED_MODULE_1__.LottieComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  margin-top: -40px;\n}\n.container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  height: 48px;\n}\n.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  width: 30%;\n}\n@media (max-width: 991px) {\n  .container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2U0MDQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUVJO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQUFSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFBUjtBQUVJO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0FBQVI7QUFDUTtFQUhKO0lBSVEsV0FBQTtFQUVWO0FBQ0YiLCJmaWxlIjoicGFnZTQwNC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgXCJAYW5ndWxhci9tYXRlcmlhbFwiIGFzIG1hdDtcclxuQGltcG9ydCBcInNyYy90aGVtZS9fdmFyaWFibGVzLnNjc3NcIjtcclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoNCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgIH1cclxuICAgIC5idG4ge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 3617:
/*!*******************************************************!*\
  !*** ./src/app/core/layout/page404/page404.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page404Module": () => (/* binding */ Page404Module),
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 214);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ 5600);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lottie */ 8530);
/* harmony import */ var _page404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page404.component */ 3736);
/* harmony import */ var _pages404_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages404-routing.module */ 8514);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);










function playerFactory() {
    return __webpack_require__.e(/*! import() | lottie-web */ "lottie-web").then(__webpack_require__.t.bind(__webpack_require__, /*! lottie-web/build/player/lottie_light */ 477, 23));
}
class Page404Module {
}
Page404Module.ɵfac = function Page404Module_Factory(t) { return new (t || Page404Module)(); };
Page404Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: Page404Module });
Page404Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        ngx_lottie__WEBPACK_IMPORTED_MODULE_0__.LottieModule.forRoot({ player: playerFactory }),
        _pages404_routing_module__WEBPACK_IMPORTED_MODULE_2__.Page404RoutingModule,
        _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__.LocalizeRouterModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__.LazyLoadImageModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](Page404Module, { declarations: [_page404_component__WEBPACK_IMPORTED_MODULE_1__.Page404Component], imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, ngx_lottie__WEBPACK_IMPORTED_MODULE_0__.LottieModule, _pages404_routing_module__WEBPACK_IMPORTED_MODULE_2__.Page404RoutingModule,
        _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__.LocalizeRouterModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__.LazyLoadImageModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] }); })();


/***/ }),

/***/ 8514:
/*!****************************************************************!*\
  !*** ./src/app/core/layout/page404/pages404-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page404RoutingModule": () => (/* binding */ Page404RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _page404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page404.component */ 3736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _page404_component__WEBPACK_IMPORTED_MODULE_0__.Page404Component }];
class Page404RoutingModule {
}
Page404RoutingModule.ɵfac = function Page404RoutingModule_Factory(t) { return new (t || Page404RoutingModule)(); };
Page404RoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Page404RoutingModule });
Page404RoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Page404RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4256:
/*!**********************************************************************!*\
  !*** ./node_modules/@nguniversal/express-engine/fesm2015/tokens.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REQUEST": () => (/* binding */ REQUEST),
/* harmony export */   "RESPONSE": () => (/* binding */ RESPONSE)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

const REQUEST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('REQUEST');
const RESPONSE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('RESPONSE');
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



/***/ })

}]);
//# sourceMappingURL=src_app_core_layout_page404_page404_module_ts.js.map