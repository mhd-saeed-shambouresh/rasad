"use strict";
(self["webpackChunkRasad"] = self["webpackChunkRasad"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("src_app_pages_main_main_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/main/main.module */ 9582)).then((m) => m.MainModule),
    },
    {
        path: 'about-us',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-node_modules_ngx-lottie_fesm2015_ngx-lottie_mjs"), __webpack_require__.e("src_app_pages_about-us_about-us_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/about-us/about-us.module */ 9902)).then((m) => m.AboutUsModule),
    },
    {
        path: 'contact-us',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("src_app_pages_contact-us_contact-us_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/contact-us/contact-us.module */ 4754)).then((m) => m.ContactUsModule),
    },
    {
        path: 'terms',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_pages_terms_terms_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/terms/terms.module */ 7498)).then((m) => m.TermsModule),
    },
    {
        path: 'products',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_pages_products_products_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/products/products.module */ 5712)).then((m) => m.ProductsModule),
    },
    {
        path: '**',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-node_modules_ngx-lottie_fesm2015_ngx-lottie_mjs"), __webpack_require__.e("src_app_core_layout_page404_page404_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/layout/page404/page404.module */ 3617)).then((m) => m.Page404Module),
        data: { title: 'Page Not Found' },
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
            initialNavigation: 'disabled',
        }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 7490);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ssr-window */ 2864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _core_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/layout/footer/footer.component */ 7930);
/* harmony import */ var _core_layout_call_call_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/layout/call/call.component */ 2646);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _core_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/layout/header/header.component */ 3261);
/* harmony import */ var _core_layout_header_sub_header_sub_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/layout/header/sub-header/sub-header.component */ 2957);
/* harmony import */ var _core_layout_header_sub_header_product_sub_menu_product_sub_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/layout/header/sub-header/product-sub-menu/product-sub-menu.component */ 537);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 214);

















const _c0 = function (a0) { return { open: a0 }; };
class AppComponent {
    constructor(translateService, document, router) {
        this.translateService = translateService;
        this.document = document;
        this.router = router;
        this.panelOpenState = false;
        this.translateService.stream('DIR').subscribe((dir) => {
            this.directionChanged(dir);
        });
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd)) {
                return;
            }
            (0,ssr_window__WEBPACK_IMPORTED_MODULE_1__.getWindow)().scrollTo(0, 0);
        });
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_0___default().init({
            once: true,
        });
    }
    directionChanged(dir) {
        const htmlTag = this.document.getElementsByTagName('html')[0];
        htmlTag.dir = dir === 'rtl' ? 'rtl' : 'ltr';
    }
    changeCssFile(dir) {
        return;
        const headTag = this.document.getElementsByTagName('head')[0];
        const existingLink = this.document.getElementById('bootstrap-css');
        const bundleName = dir === 'rtl' ? 'bootstrap.rtl.min.css' : 'bootstrap.min.css';
        if (existingLink) {
            existingLink.href = bundleName;
        }
        else {
            const newLink = this.document.createElement('link');
            newLink.rel = 'stylesheet';
            newLink.id = 'bootstrap-css';
            newLink.href = bundleName;
            headTag.insertBefore(newLink, headTag.firstChild);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 33, vars: 22, consts: [[3, "icon", "sidenavToggle"], ["role", "navigation"], ["sidenav", ""], [1, "mat-side-nav-container", 3, "ngClass"], [3, "opened", "closed"], [1, "disable_ripple"], [3, "sidenavToggleSub"], ["disabled", "", 3, "routerLink", "click"], [2, "display", "flex", "flex-direction", "column", "flex", "1", "grid-gap", "20px", "gap", "20px"], [1, "btns"], ["mat-flat-button", "", "color", "primary", 1, "btn", "contact", 3, "routerLink", "click"], ["mat-stroked-button", "", 1, "btn", "login"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "app-sub-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("sidenavToggle", function AppComponent_Template_app_sub_header_sidenavToggle_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r0.toggle()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-sidenav-container")(3, "mat-sidenav", 1, 2)(5, "div", 3)(6, "mat-accordion")(7, "mat-expansion-panel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("opened", function AppComponent_Template_mat_expansion_panel_opened_7_listener() { return ctx.panelOpenState = true; })("closed", function AppComponent_Template_mat_expansion_panel_closed_7_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-expansion-panel-header", 5)(9, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "app-product-sub-menu", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("sidenavToggleSub", function AppComponent_Template_app_product_sub_menu_sidenavToggleSub_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r0.toggle()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-expansion-panel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_mat_expansion_panel_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r0.toggle()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "localize");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "mat-expansion-panel-header", 5)(17, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "app-call");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 9)(23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r0.toggle()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](24, "localize");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](31, "router-outlet")(32, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", _r0.opened ? "close" : "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](20, _c0, ctx.panelOpenState));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 8, "header.menu.menu1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 10, "/about-us"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 12, "header.menu.menu3"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](24, 14, "/contact-us"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](26, 16, "header.menu.contact"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](29, 18, "header.menu.logIn"), " ");
    } }, dependencies: [_core_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _core_layout_call_call_component__WEBPACK_IMPORTED_MODULE_3__.CallComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionPanelTitle, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavContent, _core_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _core_layout_header_sub_header_sub_header_component__WEBPACK_IMPORTED_MODULE_5__.SubHeaderComponent, _core_layout_header_sub_header_product_sub_menu_product_sub_menu_component__WEBPACK_IMPORTED_MODULE_6__.ProductSubMenuComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_14__.LocalizeRouterPipe], styles: ["mat-sidenav[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: white !important;\n}\n\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: white !important;\n}\n\n.mat-side-nav-container[_ngcontent-%COMP%] {\n  margin: 20px 20px 20px 20px;\n  margin-top: 130px;\n  display: flex;\n  flex-direction: column;\n  height: calc(100% - 143px);\n  flex: 1;\n  margin-bottom: 0px;\n}\n\n.mat-side-nav-container.open[_ngcontent-%COMP%] {\n  height: unset;\n  margin-bottom: 20px;\n}\n\n.mat-side-nav-container[_ngcontent-%COMP%]   .mat-accordion[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.mat-side-nav-container[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%] {\n  box-shadow: unset !important;\n}\n\n@media (hover: hover) and (pointer: fine) {\n  .mat-side-nav-container[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]:hover {\n    background-color: white !important;\n  }\n}\n\n.mat-side-nav-container[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]     .mat-expansion-panel-header, .mat-side-nav-container[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]     .mat-expansion-panel-body {\n  padding: 0;\n}\n\n.mat-side-nav-container[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .mat-side-nav-container[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  font-weight: 600 !important;\n  font-size: 17px !important;\n  line-height: 32px !important;\n}\n\n.mat-side-nav-container[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%] {\n  height: 48px;\n}\n\n.mat-side-nav-container[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]     .mat-content {\n  flex: unset;\n}\n\n.mat-side-nav-container[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px;\n  flex: 1;\n  gap: 12px;\n  grid-gap: 12px;\n  margin-bottom: 20px;\n}\n\n.mat-side-nav-container[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  height: 48px;\n}\n\n.mat-side-nav-container[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .btn.login[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #111828;\n  color: #111828;\n}\n\n@media (hover: hover) and (pointer: fine) {\n  .mat-side-nav-container[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .btn.login[_ngcontent-%COMP%]:hover {\n    background-color: #f3f6ff !important;\n  }\n}\n\n.mat-side-nav-container[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .btn.contact[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #1033b1;\n  color: #f3f6ff;\n}\n\n@media (hover: hover) and (pointer: fine) {\n  .mat-side-nav-container[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .btn.contact[_ngcontent-%COMP%]:hover {\n    background-color: #4c6ee6 !important;\n  }\n}\n\nhr[_ngcontent-%COMP%] {\n  background-color: #e7e8ea;\n  transform: rotate(180deg);\n  -webkit-transform: rotate(180deg);\n}\n\n.mat-drawer[_ngcontent-%COMP%]:not(.mat-drawer-side) {\n  position: fixed;\n}\n\n.mat-drawer-backdrop[_ngcontent-%COMP%] {\n  position: fixed !important;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  margin-top: 130px;\n}\n\n@media (max-width: 991px) {\n  mat-sidenav-container[_ngcontent-%COMP%] {\n    margin-top: 106px;\n  }\n}\n\n.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%] {\n  color: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFx0aGVtZVxcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksV0FBQTtFQUNBLGtDQUFBO0FBRko7O0FBSUE7RUFDSSxrQ0FBQTtBQURKOztBQUdBO0VBQ0ksMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDUjs7QUFDSTtFQUNJLE9BQUE7QUFDUjs7QUFDSTtFQUNJLDRCQUFBO0FBQ1I7O0FBQVE7RUFDSTtJQUNJLGtDQUFBO0VBRWQ7QUFDRjs7QUFBUTs7RUFFSSxVQUFBO0FBRVo7O0FBQVE7O0VBRUksMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FBRVo7O0FBQVE7RUFDSSxZQUFBO0FBRVo7O0FBQVE7RUFDSSxXQUFBO0FBRVo7O0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFDUjs7QUFBUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUVaOztBQURZO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0M1REM7QUQrRGpCOztBQUZnQjtFQUNJO0lBQ0ksb0NBQUE7RUFJdEI7QUFDRjs7QUFEWTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGNDeEVPO0FEMkV2Qjs7QUFGZ0I7RUFDSTtJQUNJLG9DQUFBO0VBSXRCO0FBQ0Y7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7QUFFSjs7QUFDQTtFQUNJLDBCQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtBQUdKOztBQUZJO0VBRko7SUFHUSxpQkFBQTtFQUtOO0FBQ0Y7O0FBSEE7RUFDSSxZQUFBO0FBTUoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcIkBhbmd1bGFyL21hdGVyaWFsXCIgYXMgbWF0O1xyXG5AaW1wb3J0IFwic3JjL3RoZW1lL192YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxubWF0LXNpZGVuYXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtc2lkZS1uYXYtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE0M3B4KTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAmLm9wZW4ge1xyXG4gICAgICAgIGhlaWdodDogdW5zZXQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIC5tYXQtYWNjb3JkaW9uIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcixcclxuICAgICAgICA6Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcclxuICAgICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIubWF0LWV4cGFuZGVkIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICA6Om5nLWRlZXAgLm1hdC1jb250ZW50IHtcclxuICAgICAgICAgICAgZmxleDogdW5zZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0bnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGdhcDogMTJweDtcclxuICAgICAgICBncmlkLWdhcDogMTJweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgICAgJi5sb2dpbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1kYXJrLTEwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItZGFyay0xMDA7XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5LWJsdWUxMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmNvbnRhY3Qge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItcHJpbWFyeS1ibHVlMTAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5LWJsdWUxMDtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnktYmx1ZTcwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmhyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2U4ZWE7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcbi5tYXQtZHJhd2VyOm5vdCgubWF0LWRyYXdlci1zaWRlKSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbi5tYXQtZHJhd2VyLWJhY2tkcm9wIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG59XHJcbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMzBweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTA2cHg7XHJcbiAgICB9XHJcbn1cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9XCJ0cnVlXCJdIHtcclxuICAgIGNvbG9yOiB1bnNldDtcclxufVxyXG4iLCIkY29sb3ItcHJpbWFyeS1ibHVlMTIwOiAjMTUyNjYzO1xyXG4kY29sb3ItcHJpbWFyeS1ibHVlMTAwOiAjMTAzM2IxO1xyXG4kY29sb3ItcHJpbWFyeS1ibHVlNzA6ICM0YzZlZTY7XHJcbiRjb2xvci1wcmltYXJ5LWJsdWUyMDogI2U5ZWZmZTtcclxuJGNvbG9yLXByaW1hcnktYmx1ZTEwOiAjZjNmNmZmO1xyXG5cclxuJGNvbG9yLWRhcmstMTAwOiAjMTExODI4O1xyXG4kY29sb3ItZGFyay03MDogIzU4NWQ2OTtcclxuJGNvbG9yLWRhcmstNTA6ICM4ODhiOTM7XHJcbiRjb2xvci1kYXJrLTMwOiAjYjhiYWJmO1xyXG4kY29sb3ItZGFyay0xMDogI2U3ZThlYTtcclxuJGNvbG9yLWRhcmstNTogI2ZhZmJmZjtcclxuJGNvbG9yLWRhcmstMDogI2ZmZmZmZjtcclxuXHJcbiRjb2xvci1zeXN0ZW0tc3VjY2VzczogIzQwOTMyOTtcclxuJGNvbG9yLXN5c3RlbS13YXJuaW5nOiAjZjNjZjQ4O1xyXG4kY29sb3Itc3lzdGVtLWRhbmdlcjogI2FmMGYzMjtcclxuXHJcbiRjb2xvci1lbGVtZW50cy1tYW5keTogI2U0NDg3MDtcclxuJGNvbG9yLWVsZW1lbnRzLWFxdWFtYXJpbmU6ICM2ZWRmY2Y7XHJcbiRjb2xvci1lbGVtZW50cy1QdXJwbGU6ICM1NjIxY2I7XHJcbiRjb2xvci1lbGVtZW50cy10YW5nZXJpbmU6ICNlYzhlNjU7XHJcbiRjb2xvci1lbGVtZW50cy1Eb2RnZXI6ICMzYThhZjc7XHJcbiRjb2xvci1lbGVtZW50cy1wYXN0ZWw6ICM3MGQ0OTU7XHJcbiRjb2xvci1lbGVtZW50cy1lbmVyZ3k6ICNmN2Q3NGU7XHJcblxyXG4kYm9keS1mb250LWZhbWlseTogXCJSZWFkZXggUHJvXCIsIHNhbnMtc2VyaWY7XHJcblxyXG4kZGlzcGxheS1odWdlOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgICAkZm9udC1zaXplOiA2NHB4LFxyXG4gICAgJGxpbmUtaGVpZ2h0OiA4OHB4LFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcbiRkaXNwbGF5LWxhcmc6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDQwMCxcclxuICAgICRmb250LXNpemU6IDU2cHgsXHJcbiAgICAkbGluZS1oZWlnaHQ6IDcycHgsXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuJGRpc3BsYXktbWVkaXVtOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgICAkZm9udC1zaXplOiA0OHB4LFxyXG4gICAgJGxpbmUtaGVpZ2h0OiA1NnB4LFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcbiRkaXNwbGF5LXNtYWxsOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgICAkZm9udC1zaXplOiAzNnB4LFxyXG4gICAgJGxpbmUtaGVpZ2h0OiA0OHB4LFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcbiRkaXNwbGF5LXhzbWFsbDogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4gICAgJGZvbnQtZmFtaWx5OiAkYm9keS1mb250LWZhbWlseSxcclxuICAgICRmb250LXdlaWdodDogNDAwLFxyXG4gICAgJGZvbnQtc2l6ZTogMjRweCxcclxuICAgICRsaW5lLWhlaWdodDogMzJweCxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG5cclxuJGJvZHktbGFyZzogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4gICAgJGZvbnQtZmFtaWx5OiAkYm9keS1mb250LWZhbWlseSxcclxuICAgICRmb250LXdlaWdodDogNDAwLFxyXG4gICAgJGZvbnQtc2l6ZTogMjBweCxcclxuICAgICRsaW5lLWhlaWdodDogMzJweCxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG4kYm9keS1tZWRpdW06IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDQwMCxcclxuICAgICRmb250LXNpemU6IDE3cHgsXHJcbiAgICAkbGluZS1oZWlnaHQ6IDMycHgsXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuJGJvZHktc21hbGw6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDQwMCxcclxuICAgICRmb250LXNpemU6IDE1cHgsXHJcbiAgICAkbGluZS1oZWlnaHQ6IDI0cHgsXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuJGJvZHkteHNtYWxsOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgICAkZm9udC1zaXplOiAxM3B4LFxyXG4gICAgJGxpbmUtaGVpZ2h0OiAyMnB4LFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcbiRidXR0b246IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDYwMCxcclxuICAgICRmb250LXNpemU6IDE3cHgsXHJcbiAgICAkbGluZS1oZWlnaHQ6IDMycHgsXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuJGlucHV0OiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA2MDAsXHJcbiAgICAkZm9udC1zaXplOiAxZW0sXHJcbiAgICAkbGluZS1oZWlnaHQ6IDFlbSxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG4vLyBCcmVhayBQb2ludHNcclxuJHNjcmVlbi14czogNTc1cHg7XHJcbiRzY3JlZW4tc206IDc2N3B4O1xyXG4kc2NyZWVuLW1kOiA5OTFweDtcclxuJHNjcmVlbi1sZzogMTE5OXB4O1xyXG5cclxuLy8gRGVmYXVsdCBzaXplXHJcbiRpbnB1dC1oZWlnaHQ6IDU2cHg7XHJcbiRpbnB1dC1mb250LXNpemU6IDE3cHg7XHJcbiRpbnB1dC1mb250LXdlaWdodDogNDAwO1xyXG4kaW5wdXQtbGFiZWwtZm9udC1zaXplOiAxM3B4O1xyXG4kaW5wdXQtbGFiZWwtbGluZS1oZWlnaHQ6IDIycHg7XHJcbi8vIHNtYWxsXHJcbiRpbnB1dC1oZWlnaHQtc206IDM1cHg7XHJcbiRpbnB1dC1mb250LXNpemUtc206IDEzcHg7XHJcbiRpbnB1dC1mb250LXdlaWdodC1zbTogNDAwO1xyXG4kaW5wdXQtbGFiZWwtZm9udC1zaXplLXNtOiAkaW5wdXQtZm9udC1zaXplLXNtO1xyXG4kaW5wdXQtbGFiZWwtbGluZS1oZWlnaHQtc206IDEuMztcclxuLy8geHRyYSBTbWFsbFxyXG4kaW5wdXQtaGVpZ2h0LXhzOiAzMHB4O1xyXG4kaW5wdXQtZm9udC1zaXplLXhzOiAxMnB4O1xyXG4kaW5wdXQtZm9udC13ZWlnaHQteHM6IDQwMDtcclxuJGlucHV0LWxhYmVsLWZvbnQtc2l6ZS14czogJGlucHV0LWZvbnQtc2l6ZS14cztcclxuJGlucHV0LWxhYmVsLWxpbmUtaGVpZ2h0LXhzOiAxLjE7XHJcbiRjb2xvci1ibGFjazogIzEzMTQxNDtcclxuJGxhYmVsLXJlcXVpcmVkLWNvbG9yOiAkY29sb3ItYmxhY2s7XHJcblxyXG4vLyBGb3Jtc1xyXG4kZm9ybS1ncmlkLWd1dHRlci13aWR0aDogMTBweCAhZGVmYXVsdDtcclxuJGZvcm0tZ3JvdXAtbWFyZ2luLWJvdHRvbTogMXJlbSAhZGVmYXVsdDtcclxuJGxhYmVsLXJlcXVpcmVkLWNvbG9yOiAkY29sb3ItYmxhY2s7XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3179);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _core_utils_translate_browser_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/utils/translate-browser.loader */ 6768);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 7281);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 214);
/* harmony import */ var _core_utils_localize_browser_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/utils/localize-browser.loader */ 5413);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _core_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/layout/header/header.component */ 3261);
/* harmony import */ var _core_layout_header_sub_header_sub_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/layout/header/sub-header/sub-header.component */ 2957);
/* harmony import */ var _core_layout_header_sub_header_product_sub_menu_product_sub_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/layout/header/sub-header/product-sub-menu/product-sub-menu.component */ 537);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _core_layout_call_call_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/layout/call/call.component */ 2646);
/* harmony import */ var _core_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/layout/footer/footer.component */ 7930);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-lazyload-image */ 5600);
/* harmony import */ var _core_layout_ready_for_change_ready_for_change_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/layout/ready-for-change/ready-for-change.component */ 9887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);





























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_core_layout_ready_for_change_ready_for_change_component__WEBPACK_IMPORTED_MODULE_9__.ReadyForChangeComponent,
        _core_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent,
        _core_layout_call_call_component__WEBPACK_IMPORTED_MODULE_7__.CallComponent,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavModule,
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_14__.LazyLoadImageModule,
        _core_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent,
        _core_layout_header_sub_header_sub_header_component__WEBPACK_IMPORTED_MODULE_5__.SubHeaderComponent,
        _core_layout_header_sub_header_product_sub_menu_product_sub_menu_component__WEBPACK_IMPORTED_MODULE_6__.ProductSubMenuComponent,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_18__.CollapseModule.forRoot(),
        ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_19__.BsDropdownModule.forRoot(),
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateLoader,
                useFactory: _core_utils_translate_browser_loader__WEBPACK_IMPORTED_MODULE_2__.translateBrowserLoaderFactory,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClient, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.TransferState],
            },
        }),
        _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_21__.LocalizeRouterModule.forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.routes, {
            parser: {
                provide: _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_21__.LocalizeParser,
                useFactory: _core_utils_localize_browser_loader__WEBPACK_IMPORTED_MODULE_3__.localizeBrowserLoaderFactory,
                deps: [
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateService,
                    _angular_common__WEBPACK_IMPORTED_MODULE_22__.Location,
                    _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_21__.LocalizeRouterSettings,
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClient,
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.TransferState,
                ],
            },
            initialNavigation: true,
        }),
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__.FontAwesomeModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_core_layout_ready_for_change_ready_for_change_component__WEBPACK_IMPORTED_MODULE_9__.ReadyForChangeComponent,
        _core_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent,
        _core_layout_call_call_component__WEBPACK_IMPORTED_MODULE_7__.CallComponent,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavModule,
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_14__.LazyLoadImageModule,
        _core_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent,
        _core_layout_header_sub_header_sub_header_component__WEBPACK_IMPORTED_MODULE_5__.SubHeaderComponent,
        _core_layout_header_sub_header_product_sub_menu_product_sub_menu_component__WEBPACK_IMPORTED_MODULE_6__.ProductSubMenuComponent, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_18__.CollapseModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_19__.BsDropdownModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_21__.LocalizeRouterModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__.FontAwesomeModule] }); })();


/***/ }),

/***/ 4854:
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LANGUAGES": () => (/* binding */ LANGUAGES),
/* harmony export */   "REGIONS": () => (/* binding */ REGIONS),
/* harmony export */   "SCREEN_LG": () => (/* binding */ SCREEN_LG),
/* harmony export */   "SCREEN_MD": () => (/* binding */ SCREEN_MD),
/* harmony export */   "SCREEN_SM": () => (/* binding */ SCREEN_SM),
/* harmony export */   "SCREEN_XS": () => (/* binding */ SCREEN_XS),
/* harmony export */   "emailPattern": () => (/* binding */ emailPattern),
/* harmony export */   "namePattern": () => (/* binding */ namePattern),
/* harmony export */   "saudiMobilePattern": () => (/* binding */ saudiMobilePattern)
/* harmony export */ });
const REGIONS = [
    { code: 'sa', isDefault: true },
    { code: 'us', isDefault: false },
];
const LANGUAGES = [
    { code: 'en', isDefault: true },
    { code: 'ar', isDefault: false },
];
const SCREEN_LG = 1199;
const SCREEN_MD = 991;
const SCREEN_SM = 767;
const SCREEN_XS = 575;
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const saudiMobilePattern = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;
const namePattern = /^[^0-9\!\@\#\$\%\^\&\*\(\)\{\}\:\"\?\>\<\;\|\`\~\=\+\[\]\\]+$/i;


/***/ }),

/***/ 2646:
/*!****************************************************!*\
  !*** ./src/app/core/layout/call/call.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallComponent": () => (/* binding */ CallComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



class CallComponent {
    constructor(translate) {
        this.translate = translate;
    }
    ngOnInit() { }
}
CallComponent.ɵfac = function CallComponent_Factory(t) { return new (t || CallComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
CallComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CallComponent, selectors: [["app-call"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]], decls: 8, vars: 3, consts: [[1, "call"], [1, "p-xsmall"], ["alt", "calls", "src", "assets/images/shared/call.svg"], ["dir", "ltr", "href", "tel:+966 800 1110 980", 1, "p-small"]], template: function CallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " +966 800 1110 980");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "header.menu.freeNumber"));
    } }, dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe], styles: ["[_nghost-%COMP%]   .call[_ngcontent-%COMP%] {\n  margin-inline-end: 40px;\n}\n[_nghost-%COMP%]   .call[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-inline-end: 4px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .call[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(-1, 1);\n}\n[_nghost-%COMP%]   .call[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #888b93;\n  margin: 0 !important;\n}\n[_nghost-%COMP%]   .call[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #111828;\n  text-decoration: unset;\n}\n@media (hover: hover) and (pointer: fine) {\n  [_nghost-%COMP%]   .call[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #4c6ee6;\n  }\n}\n[_nghost-%COMP%]   .call[_ngcontent-%COMP%]   .p-xsmall[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n}\n[_nghost-%COMP%]   .call[_ngcontent-%COMP%]   .p-small[_ngcontent-%COMP%] {\n  font-size: 17px !important;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGwuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcdGhlbWVcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLHVCQUFBO0FBRlI7QUFHUTtFQUNJLHNCQUFBO0FBRFo7QUFHWTtFQUNJLHVCQUFBO0FBRGhCO0FBSVE7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7QUFGWjtBQUlRO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0FBRlo7QUFHWTtFQUNJO0lBQ0ksY0NuQkc7RURrQnJCO0FBQ0Y7QUFJUTtFQUNJLDBCQUFBO0FBRlo7QUFJUTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7QUFGWiIsImZpbGUiOiJjYWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcIkBhbmd1bGFyL21hdGVyaWFsXCIgYXMgbWF0O1xyXG5AaW1wb3J0IFwic3JjL3RoZW1lL192YXJpYWJsZXMuc2Nzc1wiO1xyXG46aG9zdCB7XHJcbiAgICAuY2FsbCB7XHJcbiAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDQwcHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDRweDtcclxuXHJcbiAgICAgICAgICAgIFtkaXI9cnRsXSAmIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogIzg4OGI5MztcclxuICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzExMTgyODtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldDtcclxuICAgICAgICAgICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5LWJsdWU3MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucC14c21hbGwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnAtc21hbGwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiJGNvbG9yLXByaW1hcnktYmx1ZTEyMDogIzE1MjY2MztcclxuJGNvbG9yLXByaW1hcnktYmx1ZTEwMDogIzEwMzNiMTtcclxuJGNvbG9yLXByaW1hcnktYmx1ZTcwOiAjNGM2ZWU2O1xyXG4kY29sb3ItcHJpbWFyeS1ibHVlMjA6ICNlOWVmZmU7XHJcbiRjb2xvci1wcmltYXJ5LWJsdWUxMDogI2YzZjZmZjtcclxuXHJcbiRjb2xvci1kYXJrLTEwMDogIzExMTgyODtcclxuJGNvbG9yLWRhcmstNzA6ICM1ODVkNjk7XHJcbiRjb2xvci1kYXJrLTUwOiAjODg4YjkzO1xyXG4kY29sb3ItZGFyay0zMDogI2I4YmFiZjtcclxuJGNvbG9yLWRhcmstMTA6ICNlN2U4ZWE7XHJcbiRjb2xvci1kYXJrLTU6ICNmYWZiZmY7XHJcbiRjb2xvci1kYXJrLTA6ICNmZmZmZmY7XHJcblxyXG4kY29sb3Itc3lzdGVtLXN1Y2Nlc3M6ICM0MDkzMjk7XHJcbiRjb2xvci1zeXN0ZW0td2FybmluZzogI2YzY2Y0ODtcclxuJGNvbG9yLXN5c3RlbS1kYW5nZXI6ICNhZjBmMzI7XHJcblxyXG4kY29sb3ItZWxlbWVudHMtbWFuZHk6ICNlNDQ4NzA7XHJcbiRjb2xvci1lbGVtZW50cy1hcXVhbWFyaW5lOiAjNmVkZmNmO1xyXG4kY29sb3ItZWxlbWVudHMtUHVycGxlOiAjNTYyMWNiO1xyXG4kY29sb3ItZWxlbWVudHMtdGFuZ2VyaW5lOiAjZWM4ZTY1O1xyXG4kY29sb3ItZWxlbWVudHMtRG9kZ2VyOiAjM2E4YWY3O1xyXG4kY29sb3ItZWxlbWVudHMtcGFzdGVsOiAjNzBkNDk1O1xyXG4kY29sb3ItZWxlbWVudHMtZW5lcmd5OiAjZjdkNzRlO1xyXG5cclxuJGJvZHktZm9udC1mYW1pbHk6IFwiUmVhZGV4IFByb1wiLCBzYW5zLXNlcmlmO1xyXG5cclxuJGRpc3BsYXktaHVnZTogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4gICAgJGZvbnQtZmFtaWx5OiAkYm9keS1mb250LWZhbWlseSxcclxuICAgICRmb250LXdlaWdodDogNDAwLFxyXG4gICAgJGZvbnQtc2l6ZTogNjRweCxcclxuICAgICRsaW5lLWhlaWdodDogODhweCxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG4kZGlzcGxheS1sYXJnOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgICAkZm9udC1zaXplOiA1NnB4LFxyXG4gICAgJGxpbmUtaGVpZ2h0OiA3MnB4LFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcbiRkaXNwbGF5LW1lZGl1bTogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4gICAgJGZvbnQtZmFtaWx5OiAkYm9keS1mb250LWZhbWlseSxcclxuICAgICRmb250LXdlaWdodDogNDAwLFxyXG4gICAgJGZvbnQtc2l6ZTogNDhweCxcclxuICAgICRsaW5lLWhlaWdodDogNTZweCxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG4kZGlzcGxheS1zbWFsbDogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4gICAgJGZvbnQtZmFtaWx5OiAkYm9keS1mb250LWZhbWlseSxcclxuICAgICRmb250LXdlaWdodDogNDAwLFxyXG4gICAgJGZvbnQtc2l6ZTogMzZweCxcclxuICAgICRsaW5lLWhlaWdodDogNDhweCxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG4kZGlzcGxheS14c21hbGw6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDQwMCxcclxuICAgICRmb250LXNpemU6IDI0cHgsXHJcbiAgICAkbGluZS1oZWlnaHQ6IDMycHgsXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuXHJcbiRib2R5LWxhcmc6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDQwMCxcclxuICAgICRmb250LXNpemU6IDIwcHgsXHJcbiAgICAkbGluZS1oZWlnaHQ6IDMycHgsXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuJGJvZHktbWVkaXVtOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgICAkZm9udC1zaXplOiAxN3B4LFxyXG4gICAgJGxpbmUtaGVpZ2h0OiAzMnB4LFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcbiRib2R5LXNtYWxsOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgICAkZm9udC1zaXplOiAxNXB4LFxyXG4gICAgJGxpbmUtaGVpZ2h0OiAyNHB4LFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcbiRib2R5LXhzbWFsbDogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4gICAgJGZvbnQtZmFtaWx5OiAkYm9keS1mb250LWZhbWlseSxcclxuICAgICRmb250LXdlaWdodDogNDAwLFxyXG4gICAgJGZvbnQtc2l6ZTogMTNweCxcclxuICAgICRsaW5lLWhlaWdodDogMjJweCxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG4kYnV0dG9uOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA2MDAsXHJcbiAgICAkZm9udC1zaXplOiAxN3B4LFxyXG4gICAgJGxpbmUtaGVpZ2h0OiAzMnB4LFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcbiRpbnB1dDogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4gICAgJGZvbnQtZmFtaWx5OiAkYm9keS1mb250LWZhbWlseSxcclxuICAgICRmb250LXdlaWdodDogNjAwLFxyXG4gICAgJGZvbnQtc2l6ZTogMWVtLFxyXG4gICAgJGxpbmUtaGVpZ2h0OiAxZW0sXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuLy8gQnJlYWsgUG9pbnRzXHJcbiRzY3JlZW4teHM6IDU3NXB4O1xyXG4kc2NyZWVuLXNtOiA3NjdweDtcclxuJHNjcmVlbi1tZDogOTkxcHg7XHJcbiRzY3JlZW4tbGc6IDExOTlweDtcclxuXHJcbi8vIERlZmF1bHQgc2l6ZVxyXG4kaW5wdXQtaGVpZ2h0OiA1NnB4O1xyXG4kaW5wdXQtZm9udC1zaXplOiAxN3B4O1xyXG4kaW5wdXQtZm9udC13ZWlnaHQ6IDQwMDtcclxuJGlucHV0LWxhYmVsLWZvbnQtc2l6ZTogMTNweDtcclxuJGlucHV0LWxhYmVsLWxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4vLyBzbWFsbFxyXG4kaW5wdXQtaGVpZ2h0LXNtOiAzNXB4O1xyXG4kaW5wdXQtZm9udC1zaXplLXNtOiAxM3B4O1xyXG4kaW5wdXQtZm9udC13ZWlnaHQtc206IDQwMDtcclxuJGlucHV0LWxhYmVsLWZvbnQtc2l6ZS1zbTogJGlucHV0LWZvbnQtc2l6ZS1zbTtcclxuJGlucHV0LWxhYmVsLWxpbmUtaGVpZ2h0LXNtOiAxLjM7XHJcbi8vIHh0cmEgU21hbGxcclxuJGlucHV0LWhlaWdodC14czogMzBweDtcclxuJGlucHV0LWZvbnQtc2l6ZS14czogMTJweDtcclxuJGlucHV0LWZvbnQtd2VpZ2h0LXhzOiA0MDA7XHJcbiRpbnB1dC1sYWJlbC1mb250LXNpemUteHM6ICRpbnB1dC1mb250LXNpemUteHM7XHJcbiRpbnB1dC1sYWJlbC1saW5lLWhlaWdodC14czogMS4xO1xyXG4kY29sb3ItYmxhY2s6ICMxMzE0MTQ7XHJcbiRsYWJlbC1yZXF1aXJlZC1jb2xvcjogJGNvbG9yLWJsYWNrO1xyXG5cclxuLy8gRm9ybXNcclxuJGZvcm0tZ3JpZC1ndXR0ZXItd2lkdGg6IDEwcHggIWRlZmF1bHQ7XHJcbiRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b206IDFyZW0gIWRlZmF1bHQ7XHJcbiRsYWJlbC1yZXF1aXJlZC1jb2xvcjogJGNvbG9yLWJsYWNrO1xyXG4iXX0= */"] });


/***/ }),

/***/ 7930:
/*!********************************************************!*\
  !*** ./src/app/core/layout/footer/footer.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ 4854);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 214);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-lazyload-image */ 5600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-device-detector */ 6618);











class FooterComponent {
    constructor(deviceDetectorService, localizeRouterService) {
        this.deviceDetectorService = deviceDetectorService;
        this.localizeRouterService = localizeRouterService;
        this.locales = this.localizeRouterService.parser.locales;
        this.currentUrl = '';
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
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__.DeviceDetectorService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_3__.LocalizeRouterService)); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], hostBindings: function FooterComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function FooterComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]], decls: 119, vars: 96, consts: [[1, "footer"], [1, "container"], [1, "footer-container"], [1, "logo"], ["alt", "logo-white", "lazyLoad", "assets/images/shared/logo-white.svg"], [1, "title"], [1, "venome-container"], ["lazyLoad", "assets/images/footer/venome.svg"], [1, "partner", "m-0", "p-medium"], [1, "logo", "menu"], [1, "m-0", 2, "color", "#585d69"], ["href", "javascript:;", 3, "routerLink"], [1, "m-0"], ["href", "javascript:;"], ["href", "mailto:info@rasad.com.sa"], [2, "display", "flex", "grid-gap", "5px", "gap", "5px"], ["lazyLoad", "assets/images/footer/email.svg", 2, "width", "20px", "height", "20px"], ["href", "https://www.google.com/maps/place/Riyadh+St+-+Dubai/@25.2383113,55.3219829,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f5d3864cff63f:0x2bf11fe2b8712a91!8m2!3d25.2383113!4d55.3241716"], ["alt", "map", "lazyLoad", "assets/images/footer/map.svg", 2, "width", "20px", "height", "20px"], ["href", "tel:+96612345678"], ["alt", "call", "lazyLoad", "assets/images/footer/call.svg", 2, "width", "20px", "height", "20px"], ["dir", "ltr", 1, "m-0"], [2, "display", "flex", "gap", "5px", "gap", "21px", "grid-gap", "21px", "margin-top", "24px"], ["alt", "twitter-log", "lazyLoad", "assets/images/footer/twitter.svg", 2, "width", "24px", "height", "24px", "flex", "1"], ["alt", "facebook-logo", "lazyLoad", "assets/images/footer/facebook.svg", 2, "width", "24px", "height", "24px", "flex", "1"], ["alt", "whatsapp-logo", "lazyLoad", "assets/images/footer/whatsapp.svg", 2, "width", "24px", "height", "24px", "flex", "1"], ["alt", "linkedin-logo", "lazyLoad", "assets/images/footer/linkedin.svg", 2, "width", "24px", "height", "24px", "flex", "1"], ["href", "https://maroof.sa/131331", "target", "_blank", 2, "margin-top", "12px"], ["alt", "maroof-logo", "lazyLoad", "assets/images/footer/marrof.svg"], [1, "sub-footer"], [1, "p-small", "title", "order-2", "order-lg-1"], [1, "terms", "order-1", "order-lg-2"], [1, "p-small", "title"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9)(14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "localize");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "localize");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "localize");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "localize");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "localize");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "localize");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](48, "localize");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 9)(53, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](57, "localize");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](62, "localize");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](67, "localize");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "a", 13)(72, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 9)(76, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "a", 14)(80, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "a", 17)(86, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "a", 19)(92, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](96, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 22)(98, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 29)(110, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](112, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 31)(114, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](115, "localize");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](118, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 32, ctx.isMobileOrTablet ? "main.main-banner.titleNormal" : "main.main-banner.titleMidume"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 34, "main.main-banner.partner"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 36, "header.menu.menu1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 38, "/products/CRM"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 40, "main.products.products.product1.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 42, "/products/SME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 44, "main.products.products.product2.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 46, "/products/E-Invoice"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 48, "main.products.products.product3.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 50, "/products/ERP"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 52, "main.products.products.product4.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 54, "/products/HR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 56, "main.products.products.product5.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 58, "/products/Media"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 60, "main.products.products.product6.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](48, 62, "/products/Accounting"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](51, 64, "main.products.products.product7.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 66, "footer.Links.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](57, 68, "/"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](60, 70, "footer.Links.option1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](62, 72, "/about-us"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](65, 74, "footer.Links.option2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](67, 76, "/contact-us"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](70, 78, "footer.Links.option3"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](74, 80, "footer.Links.option4"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](78, 82, "footer.reachus.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](84, 84, "footer.reachus.email"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](90, 86, "footer.reachus.map"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](96, 88, "footer.reachus.call"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](112, 90, "footer.copy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](115, 92, "/terms"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](118, 94, "footer.terms"));
    } }, dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_3__.LocalizeRouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_3__.LocalizeRouterPipe, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_6__.LazyLoadImageModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_6__.LazyLoadImageDirective], styles: [".footer[_ngcontent-%COMP%] {\n  background-color: #111828;\n}\n.footer[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n  padding-top: 101px;\n  padding-bottom: 60px;\n  display: flex;\n  justify-content: space-between;\n}\n.footer[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-direction: column;\n  gap: 32px;\n  grid-gap: 32px;\n}\n.footer[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .logo.menu[_ngcontent-%COMP%] {\n  gap: 8px;\n  grid-gap: 8px;\n}\n.footer[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #f3f6ff;\n  width: auto;\n  white-space: pre-line;\n}\n@media (max-width: 991px) {\n  .footer[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 32px;\n    white-space: unset;\n  }\n}\n.footer[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .venome-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.footer[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .partner[_ngcontent-%COMP%] {\n  color: #f3f6ff;\n  opacity: 0.7;\n}\n@media (max-width: 991px) {\n  .footer[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 40px;\n    grid-gap: 40px;\n    padding: 40px 20px;\n  }\n}\n.footer[_ngcontent-%COMP%]   .sub-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-bottom: 100px;\n}\n.footer[_ngcontent-%COMP%]   .sub-footer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 24px;\n  color: #888b93;\n  margin: 0;\n}\n@media (hover: hover) and (pointer: fine) {\n  .footer[_ngcontent-%COMP%]   .sub-footer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:hover {\n    color: #1033b1 !important;\n  }\n}\n@media (max-width: 991px) {\n  .footer[_ngcontent-%COMP%]   .sub-footer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 17px;\n    line-height: 32px;\n  }\n}\n.footer[_ngcontent-%COMP%]   .sub-footer[_ngcontent-%COMP%]   .terms[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  grid-gap: 32px;\n}\n@media (max-width: 991px) {\n  .footer[_ngcontent-%COMP%]   .sub-footer[_ngcontent-%COMP%]   .terms[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\na[_ngcontent-%COMP%] {\n  text-decoration: unset !important;\n  color: #f3f6ff;\n}\n@media (hover: hover) and (pointer: fine) {\n  a[_ngcontent-%COMP%]:hover {\n    color: #1033b1 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFx0aGVtZVxcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJBQUE7QUFESjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQStCQSxhQUFBO0VBQ0EsOEJBQUE7QUE5QlI7QUFEUTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQUdaO0FBRlk7RUFDSSxRQUFBO0VBQ0EsYUFBQTtBQUloQjtBQURRO0VBQ0ksY0NoQlc7RURpQlgsV0FBQTtFQUNBLHFCQUFBO0FBR1o7QUFGWTtFQUpKO0lBS1EsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUFLZDtBQUNGO0FBSFE7RUFDSSxhQUFBO0VBQ0EsU0FBQTtBQUtaO0FBSFE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQUtaO0FBRFE7RUFuQ0o7SUFvQ1Esc0JBQUE7SUFDQSxTQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0VBSVY7QUFDRjtBQUZJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBSVI7QUFGUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQU1BLFNBQUE7QUFEWjtBQUpZO0VBQ0k7SUFDSSx5QkFBQTtFQU1sQjtBQUNGO0FBSFk7RUFYSjtJQVlRLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VBTWQ7QUFDRjtBQUhRO0VBQ0ksYUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBS1o7QUFKWTtFQUpKO0lBS1EsV0FBQTtFQU9kO0FBQ0Y7QUFIQTtFQUNJLGlDQUFBO0VBQ0EsY0FBQTtBQU1KO0FBTEk7RUFDSTtJQUNJLHlCQUFBO0VBT1Y7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIiBhcyBtYXQ7XHJcbkBpbXBvcnQgXCJzcmMvdGhlbWUvX3ZhcmlhYmxlcy5zY3NzXCI7XHJcbi5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTgyODtcclxuICAgIC5mb290ZXItY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAxcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbiAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBnYXA6IDMycHg7XHJcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAzMnB4O1xyXG4gICAgICAgICAgICAmLm1lbnUge1xyXG4gICAgICAgICAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBncmlkLWdhcDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeS1ibHVlMTA7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiB1bnNldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudmVub21lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhcnRuZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI2YzZjZmZjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBnYXA6IDQwcHg7XHJcbiAgICAgICAgICAgIGdyaWQtZ2FwOiA0MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN1Yi1mb290ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjODg4YjkzO1xyXG4gICAgICAgICAgICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnktYmx1ZTEwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRlcm1zIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZ2FwOiAzMnB4O1xyXG4gICAgICAgICAgICBncmlkLWdhcDogMzJweDtcclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmM2Y2ZmY7XHJcbiAgICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeS1ibHVlMTAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIiRjb2xvci1wcmltYXJ5LWJsdWUxMjA6ICMxNTI2NjM7XHJcbiRjb2xvci1wcmltYXJ5LWJsdWUxMDA6ICMxMDMzYjE7XHJcbiRjb2xvci1wcmltYXJ5LWJsdWU3MDogIzRjNmVlNjtcclxuJGNvbG9yLXByaW1hcnktYmx1ZTIwOiAjZTllZmZlO1xyXG4kY29sb3ItcHJpbWFyeS1ibHVlMTA6ICNmM2Y2ZmY7XHJcblxyXG4kY29sb3ItZGFyay0xMDA6ICMxMTE4Mjg7XHJcbiRjb2xvci1kYXJrLTcwOiAjNTg1ZDY5O1xyXG4kY29sb3ItZGFyay01MDogIzg4OGI5MztcclxuJGNvbG9yLWRhcmstMzA6ICNiOGJhYmY7XHJcbiRjb2xvci1kYXJrLTEwOiAjZTdlOGVhO1xyXG4kY29sb3ItZGFyay01OiAjZmFmYmZmO1xyXG4kY29sb3ItZGFyay0wOiAjZmZmZmZmO1xyXG5cclxuJGNvbG9yLXN5c3RlbS1zdWNjZXNzOiAjNDA5MzI5O1xyXG4kY29sb3Itc3lzdGVtLXdhcm5pbmc6ICNmM2NmNDg7XHJcbiRjb2xvci1zeXN0ZW0tZGFuZ2VyOiAjYWYwZjMyO1xyXG5cclxuJGNvbG9yLWVsZW1lbnRzLW1hbmR5OiAjZTQ0ODcwO1xyXG4kY29sb3ItZWxlbWVudHMtYXF1YW1hcmluZTogIzZlZGZjZjtcclxuJGNvbG9yLWVsZW1lbnRzLVB1cnBsZTogIzU2MjFjYjtcclxuJGNvbG9yLWVsZW1lbnRzLXRhbmdlcmluZTogI2VjOGU2NTtcclxuJGNvbG9yLWVsZW1lbnRzLURvZGdlcjogIzNhOGFmNztcclxuJGNvbG9yLWVsZW1lbnRzLXBhc3RlbDogIzcwZDQ5NTtcclxuJGNvbG9yLWVsZW1lbnRzLWVuZXJneTogI2Y3ZDc0ZTtcclxuXHJcbiRib2R5LWZvbnQtZmFtaWx5OiBcIlJlYWRleCBQcm9cIiwgc2Fucy1zZXJpZjtcclxuXHJcbiRkaXNwbGF5LWh1Z2U6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDQwMCxcclxuICAgICRmb250LXNpemU6IDY0cHgsXHJcbiAgICAkbGluZS1oZWlnaHQ6IDg4cHgsXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuJGRpc3BsYXktbGFyZzogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4gICAgJGZvbnQtZmFtaWx5OiAkYm9keS1mb250LWZhbWlseSxcclxuICAgICRmb250LXdlaWdodDogNDAwLFxyXG4gICAgJGZvbnQtc2l6ZTogNTZweCxcclxuICAgICRsaW5lLWhlaWdodDogNzJweCxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG4kZGlzcGxheS1tZWRpdW06IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDQwMCxcclxuICAgICRmb250LXNpemU6IDQ4cHgsXHJcbiAgICAkbGluZS1oZWlnaHQ6IDU2cHgsXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuJGRpc3BsYXktc21hbGw6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDQwMCxcclxuICAgICRmb250LXNpemU6IDM2cHgsXHJcbiAgICAkbGluZS1oZWlnaHQ6IDQ4cHgsXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuJGRpc3BsYXkteHNtYWxsOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgICAkZm9udC1zaXplOiAyNHB4LFxyXG4gICAgJGxpbmUtaGVpZ2h0OiAzMnB4LFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcblxyXG4kYm9keS1sYXJnOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgICAkZm9udC1zaXplOiAyMHB4LFxyXG4gICAgJGxpbmUtaGVpZ2h0OiAzMnB4LFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcbiRib2R5LW1lZGl1bTogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4gICAgJGZvbnQtZmFtaWx5OiAkYm9keS1mb250LWZhbWlseSxcclxuICAgICRmb250LXdlaWdodDogNDAwLFxyXG4gICAgJGZvbnQtc2l6ZTogMTdweCxcclxuICAgICRsaW5lLWhlaWdodDogMzJweCxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG4kYm9keS1zbWFsbDogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4gICAgJGZvbnQtZmFtaWx5OiAkYm9keS1mb250LWZhbWlseSxcclxuICAgICRmb250LXdlaWdodDogNDAwLFxyXG4gICAgJGZvbnQtc2l6ZTogMTVweCxcclxuICAgICRsaW5lLWhlaWdodDogMjRweCxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG4kYm9keS14c21hbGw6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDQwMCxcclxuICAgICRmb250LXNpemU6IDEzcHgsXHJcbiAgICAkbGluZS1oZWlnaHQ6IDIycHgsXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuJGJ1dHRvbjogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4gICAgJGZvbnQtZmFtaWx5OiAkYm9keS1mb250LWZhbWlseSxcclxuICAgICRmb250LXdlaWdodDogNjAwLFxyXG4gICAgJGZvbnQtc2l6ZTogMTdweCxcclxuICAgICRsaW5lLWhlaWdodDogMzJweCxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG4kaW5wdXQ6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDYwMCxcclxuICAgICRmb250LXNpemU6IDFlbSxcclxuICAgICRsaW5lLWhlaWdodDogMWVtLFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcbi8vIEJyZWFrIFBvaW50c1xyXG4kc2NyZWVuLXhzOiA1NzVweDtcclxuJHNjcmVlbi1zbTogNzY3cHg7XHJcbiRzY3JlZW4tbWQ6IDk5MXB4O1xyXG4kc2NyZWVuLWxnOiAxMTk5cHg7XHJcblxyXG4vLyBEZWZhdWx0IHNpemVcclxuJGlucHV0LWhlaWdodDogNTZweDtcclxuJGlucHV0LWZvbnQtc2l6ZTogMTdweDtcclxuJGlucHV0LWZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRpbnB1dC1sYWJlbC1mb250LXNpemU6IDEzcHg7XHJcbiRpbnB1dC1sYWJlbC1saW5lLWhlaWdodDogMjJweDtcclxuLy8gc21hbGxcclxuJGlucHV0LWhlaWdodC1zbTogMzVweDtcclxuJGlucHV0LWZvbnQtc2l6ZS1zbTogMTNweDtcclxuJGlucHV0LWZvbnQtd2VpZ2h0LXNtOiA0MDA7XHJcbiRpbnB1dC1sYWJlbC1mb250LXNpemUtc206ICRpbnB1dC1mb250LXNpemUtc207XHJcbiRpbnB1dC1sYWJlbC1saW5lLWhlaWdodC1zbTogMS4zO1xyXG4vLyB4dHJhIFNtYWxsXHJcbiRpbnB1dC1oZWlnaHQteHM6IDMwcHg7XHJcbiRpbnB1dC1mb250LXNpemUteHM6IDEycHg7XHJcbiRpbnB1dC1mb250LXdlaWdodC14czogNDAwO1xyXG4kaW5wdXQtbGFiZWwtZm9udC1zaXplLXhzOiAkaW5wdXQtZm9udC1zaXplLXhzO1xyXG4kaW5wdXQtbGFiZWwtbGluZS1oZWlnaHQteHM6IDEuMTtcclxuJGNvbG9yLWJsYWNrOiAjMTMxNDE0O1xyXG4kbGFiZWwtcmVxdWlyZWQtY29sb3I6ICRjb2xvci1ibGFjaztcclxuXHJcbi8vIEZvcm1zXHJcbiRmb3JtLWdyaWQtZ3V0dGVyLXdpZHRoOiAxMHB4ICFkZWZhdWx0O1xyXG4kZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tOiAxcmVtICFkZWZhdWx0O1xyXG4kbGFiZWwtcmVxdWlyZWQtY29sb3I6ICRjb2xvci1ibGFjaztcclxuIl19 */"] });


/***/ }),

/***/ 3261:
/*!********************************************************!*\
  !*** ./src/app/core/layout/header/header.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 214);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ 4854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-device-detector */ 6618);


















function HeaderComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "header.try-rasad"));
} }
function HeaderComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9)(1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u0627\u0644\u0639\u0631\u0628\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/ar/", ctx_r1.currentUrl, "");
} }
function HeaderComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9)(1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " English");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/en/", ctx_r2.currentUrl, "");
} }
class HeaderComponent {
    constructor(localizeRouterService, router, spy, deviceDetectorService) {
        this.localizeRouterService = localizeRouterService;
        this.router = router;
        this.spy = spy;
        this.deviceDetectorService = deviceDetectorService;
        this.locales = this.localizeRouterService.parser.locales;
        this.currentUrl = '';
        this.faArrow = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faArrowRight;
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
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd))
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
        this.currentUrl = this.router.url
            .replace('/' + this.localizeRouterService.parser.currentLang, '')
            .split('?')[0];
        this.faArrow =
            this.localizeRouterService.parser.currentLang == 'ar'
                ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faArrowLeft
                : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faArrowRight;
        this.spy.detectChanges();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__.LocalizeRouterService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__.DeviceDetectorService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function HeaderComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]], decls: 13, vars: 10, consts: [["color", "primary"], [1, "container"], [1, "demo"], ["class", "p-small hide-on-mobile", 4, "ngIf"], [1, "p-small", "demo-txt", 3, "routerLink"], [1, "p-small", 2, "width", "10px", "height", "10px", "font-size", "15px", 3, "icon"], [1, "lang"], ["class", "dropdown-item", "queryParamsHandling", "merge", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], [1, "p-small", "hide-on-mobile"], ["queryParamsHandling", "merge", "routerLinkActive", "active", 1, "dropdown-item", 3, "routerLink"], [1, "p-small"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HeaderComponent_span_3_Template, 3, 3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "localize");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HeaderComponent_a_11_Template, 3, 1, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HeaderComponent_a_12_Template, 3, 1, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobileOrTablet);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, "/contact-us"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 8, "header.request-demo"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faArrow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.localizeRouterService.parser.currentLang == "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.localizeRouterService.parser.currentLang == "ar");
    } }, dependencies: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__.LocalizeRouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__.LocalizeRouterPipe, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FaIconComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  height: 50px;\n  left: 0px;\n  top: 0px;\n  position: fixed;\n  position: -webkit-fixed;\n  z-index: 1000;\n}\nmat-toolbar[_ngcontent-%COMP%]     .mat-button-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.2s ease-in;\n  gap: 8px;\n  grid-gap: 8px;\n}\n@media (hover: hover) and (pointer: fine) {\n  mat-toolbar[_ngcontent-%COMP%]     .mat-button-wrapper:hover {\n    gap: 12px;\n    grid-gap: 12px;\n  }\n}\nmat-toolbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #f3f6ff;\n}\nmat-toolbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  align-items: center;\n  padding: 0px;\n  gap: 20px;\n  grid-gap: 20px;\n}\nmat-toolbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .demo-txt[_ngcontent-%COMP%] {\n  display: flex;\n  transition: 0.2s ease-in;\n  gap: 8px;\n  grid-gap: 8px;\n  cursor: pointer;\n}\n@media (hover: hover) and (pointer: fine) {\n  mat-toolbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .demo-txt[_ngcontent-%COMP%]:hover {\n    gap: 12px;\n    grid-gap: 12px;\n  }\n}\nmat-toolbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .lang[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n@media (hover: hover) and (pointer: fine) {\n  mat-toolbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .lang[_ngcontent-%COMP%]:hover {\n    color: #4c6ee6;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFx0aGVtZVxcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUZKO0FBR0k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7QUFEUjtBQUVRO0VBQ0k7SUFDSSxTQUFBO0lBQ0EsY0FBQTtFQUFkO0FBQ0Y7QUFHSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0N4QmU7QUR1QnZCO0FBRVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBQVo7QUFFUTtFQUNJLGFBQUE7RUFDQSx3QkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUFaO0FBQ1k7RUFDSTtJQUNJLFNBQUE7SUFDQSxjQUFBO0VBQ2xCO0FBQ0Y7QUFHUTtFQUNJLGVBQUE7QUFEWjtBQUVZO0VBQ0k7SUFDSSxjQ3RERztFRHNEckI7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIiBhcyBtYXQ7XHJcbkBpbXBvcnQgXCJzcmMvdGhlbWUvX3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5tYXQtdG9vbGJhciB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHBvc2l0aW9uOiAtd2Via2l0LWZpeGVkO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIDo6bmctZGVlcCAubWF0LWJ1dHRvbi13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluO1xyXG4gICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgIGdyaWQtZ2FwOiA4cHg7XHJcbiAgICAgICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGdhcDogMTJweDtcclxuICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnktYmx1ZTEwO1xyXG4gICAgICAgIC5kZW1vIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgICAgICAgICBncmlkLWdhcDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlbW8tdHh0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluO1xyXG4gICAgICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDhweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBnYXA6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sYW5nIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnktYmx1ZTcwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIiRjb2xvci1wcmltYXJ5LWJsdWUxMjA6ICMxNTI2NjM7XHJcbiRjb2xvci1wcmltYXJ5LWJsdWUxMDA6ICMxMDMzYjE7XHJcbiRjb2xvci1wcmltYXJ5LWJsdWU3MDogIzRjNmVlNjtcclxuJGNvbG9yLXByaW1hcnktYmx1ZTIwOiAjZTllZmZlO1xyXG4kY29sb3ItcHJpbWFyeS1ibHVlMTA6ICNmM2Y2ZmY7XHJcblxyXG4kY29sb3ItZGFyay0xMDA6ICMxMTE4Mjg7XHJcbiRjb2xvci1kYXJrLTcwOiAjNTg1ZDY5O1xyXG4kY29sb3ItZGFyay01MDogIzg4OGI5MztcclxuJGNvbG9yLWRhcmstMzA6ICNiOGJhYmY7XHJcbiRjb2xvci1kYXJrLTEwOiAjZTdlOGVhO1xyXG4kY29sb3ItZGFyay01OiAjZmFmYmZmO1xyXG4kY29sb3ItZGFyay0wOiAjZmZmZmZmO1xyXG5cclxuJGNvbG9yLXN5c3RlbS1zdWNjZXNzOiAjNDA5MzI5O1xyXG4kY29sb3Itc3lzdGVtLXdhcm5pbmc6ICNmM2NmNDg7XHJcbiRjb2xvci1zeXN0ZW0tZGFuZ2VyOiAjYWYwZjMyO1xyXG5cclxuJGNvbG9yLWVsZW1lbnRzLW1hbmR5OiAjZTQ0ODcwO1xyXG4kY29sb3ItZWxlbWVudHMtYXF1YW1hcmluZTogIzZlZGZjZjtcclxuJGNvbG9yLWVsZW1lbnRzLVB1cnBsZTogIzU2MjFjYjtcclxuJGNvbG9yLWVsZW1lbnRzLXRhbmdlcmluZTogI2VjOGU2NTtcclxuJGNvbG9yLWVsZW1lbnRzLURvZGdlcjogIzNhOGFmNztcclxuJGNvbG9yLWVsZW1lbnRzLXBhc3RlbDogIzcwZDQ5NTtcclxuJGNvbG9yLWVsZW1lbnRzLWVuZXJneTogI2Y3ZDc0ZTtcclxuXHJcbiRib2R5LWZvbnQtZmFtaWx5OiBcIlJlYWRleCBQcm9cIiwgc2Fucy1zZXJpZjtcclxuXHJcbiRkaXNwbGF5LWh1Z2U6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDQwMCxcclxuICAgICRmb250LXNpemU6IDY0cHgsXHJcbiAgICAkbGluZS1oZWlnaHQ6IDg4cHgsXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuJGRpc3BsYXktbGFyZzogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4gICAgJGZvbnQtZmFtaWx5OiAkYm9keS1mb250LWZhbWlseSxcclxuICAgICRmb250LXdlaWdodDogNDAwLFxyXG4gICAgJGZvbnQtc2l6ZTogNTZweCxcclxuICAgICRsaW5lLWhlaWdodDogNzJweCxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG4kZGlzcGxheS1tZWRpdW06IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDQwMCxcclxuICAgICRmb250LXNpemU6IDQ4cHgsXHJcbiAgICAkbGluZS1oZWlnaHQ6IDU2cHgsXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuJGRpc3BsYXktc21hbGw6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDQwMCxcclxuICAgICRmb250LXNpemU6IDM2cHgsXHJcbiAgICAkbGluZS1oZWlnaHQ6IDQ4cHgsXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuJGRpc3BsYXkteHNtYWxsOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgICAkZm9udC1zaXplOiAyNHB4LFxyXG4gICAgJGxpbmUtaGVpZ2h0OiAzMnB4LFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcblxyXG4kYm9keS1sYXJnOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgICAkZm9udC1zaXplOiAyMHB4LFxyXG4gICAgJGxpbmUtaGVpZ2h0OiAzMnB4LFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcbiRib2R5LW1lZGl1bTogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4gICAgJGZvbnQtZmFtaWx5OiAkYm9keS1mb250LWZhbWlseSxcclxuICAgICRmb250LXdlaWdodDogNDAwLFxyXG4gICAgJGZvbnQtc2l6ZTogMTdweCxcclxuICAgICRsaW5lLWhlaWdodDogMzJweCxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG4kYm9keS1zbWFsbDogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4gICAgJGZvbnQtZmFtaWx5OiAkYm9keS1mb250LWZhbWlseSxcclxuICAgICRmb250LXdlaWdodDogNDAwLFxyXG4gICAgJGZvbnQtc2l6ZTogMTVweCxcclxuICAgICRsaW5lLWhlaWdodDogMjRweCxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG4kYm9keS14c21hbGw6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDQwMCxcclxuICAgICRmb250LXNpemU6IDEzcHgsXHJcbiAgICAkbGluZS1oZWlnaHQ6IDIycHgsXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuJGJ1dHRvbjogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4gICAgJGZvbnQtZmFtaWx5OiAkYm9keS1mb250LWZhbWlseSxcclxuICAgICRmb250LXdlaWdodDogNjAwLFxyXG4gICAgJGZvbnQtc2l6ZTogMTdweCxcclxuICAgICRsaW5lLWhlaWdodDogMzJweCxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG4kaW5wdXQ6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDYwMCxcclxuICAgICRmb250LXNpemU6IDFlbSxcclxuICAgICRsaW5lLWhlaWdodDogMWVtLFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcbi8vIEJyZWFrIFBvaW50c1xyXG4kc2NyZWVuLXhzOiA1NzVweDtcclxuJHNjcmVlbi1zbTogNzY3cHg7XHJcbiRzY3JlZW4tbWQ6IDk5MXB4O1xyXG4kc2NyZWVuLWxnOiAxMTk5cHg7XHJcblxyXG4vLyBEZWZhdWx0IHNpemVcclxuJGlucHV0LWhlaWdodDogNTZweDtcclxuJGlucHV0LWZvbnQtc2l6ZTogMTdweDtcclxuJGlucHV0LWZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRpbnB1dC1sYWJlbC1mb250LXNpemU6IDEzcHg7XHJcbiRpbnB1dC1sYWJlbC1saW5lLWhlaWdodDogMjJweDtcclxuLy8gc21hbGxcclxuJGlucHV0LWhlaWdodC1zbTogMzVweDtcclxuJGlucHV0LWZvbnQtc2l6ZS1zbTogMTNweDtcclxuJGlucHV0LWZvbnQtd2VpZ2h0LXNtOiA0MDA7XHJcbiRpbnB1dC1sYWJlbC1mb250LXNpemUtc206ICRpbnB1dC1mb250LXNpemUtc207XHJcbiRpbnB1dC1sYWJlbC1saW5lLWhlaWdodC1zbTogMS4zO1xyXG4vLyB4dHJhIFNtYWxsXHJcbiRpbnB1dC1oZWlnaHQteHM6IDMwcHg7XHJcbiRpbnB1dC1mb250LXNpemUteHM6IDEycHg7XHJcbiRpbnB1dC1mb250LXdlaWdodC14czogNDAwO1xyXG4kaW5wdXQtbGFiZWwtZm9udC1zaXplLXhzOiAkaW5wdXQtZm9udC1zaXplLXhzO1xyXG4kaW5wdXQtbGFiZWwtbGluZS1oZWlnaHQteHM6IDEuMTtcclxuJGNvbG9yLWJsYWNrOiAjMTMxNDE0O1xyXG4kbGFiZWwtcmVxdWlyZWQtY29sb3I6ICRjb2xvci1ibGFjaztcclxuXHJcbi8vIEZvcm1zXHJcbiRmb3JtLWdyaWQtZ3V0dGVyLXdpZHRoOiAxMHB4ICFkZWZhdWx0O1xyXG4kZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tOiAxcmVtICFkZWZhdWx0O1xyXG4kbGFiZWwtcmVxdWlyZWQtY29sb3I6ICRjb2xvci1ibGFjaztcclxuIl19 */"] });


/***/ }),

/***/ 537:
/*!**********************************************************************************************!*\
  !*** ./src/app/core/layout/header/sub-header/product-sub-menu/product-sub-menu.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductSubMenuComponent": () => (/* binding */ ProductSubMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 214);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../constants */ 4854);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-device-detector */ 6618);
















function ProductSubMenuComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "header.menu.menu1"), " ");
} }
const _c0 = function (a0, a1) { return { "p-larg": a0, "p-small": a1 }; };
const _c1 = function (a0) { return { "font-weight": a0 }; };
const _c2 = function (a0, a1) { return { "p-small": a0, "p-xsmall": a1 }; };
function ProductSubMenuComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductSubMenuComponent_div_4_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const product_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.navigate(product_r3.url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9)(3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", product_r3.alt)("src", product_r3.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c0, !ctx_r1.isMobileOrTablet, ctx_r1.isMobileOrTablet))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c1, ctx_r1.isMobileOrTablet ? 600 : 400));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 7, product_r3.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](16, _c2, !ctx_r1.isMobileOrTablet, ctx_r1.isMobileOrTablet));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 9, product_r3.subTitle), " ");
} }
function ProductSubMenuComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "fa-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 18)(14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 19)(18, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "+966 800 1110 980");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, "main.products.call1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 7, "/contact-us"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 9, "main.products.touch"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r2.faArrowTouch);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 11, "header.menu.call"));
} }
class ProductSubMenuComponent {
    constructor(localizeRouterService, spy, deviceDetectorService, router) {
        this.localizeRouterService = localizeRouterService;
        this.spy = spy;
        this.deviceDetectorService = deviceDetectorService;
        this.router = router;
        this.sidenavToggleSub = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.faArrowTouch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faArrowRight;
        this.productsList = [
            {
                title: 'main.products.products.product1.title',
                subTitle: 'main.products.products.product1.sub-title',
                icon: 'assets/images/main-banner/crm.svg',
                alt: 'crm-image',
                url: '/products/CRM',
            },
            {
                title: 'main.products.products.product5.title',
                subTitle: 'main.products.products.product5.sub-title',
                icon: 'assets/images/main-banner/hr.svg',
                url: '/products/HR',
                alt: 'hr-image',
            },
            {
                title: 'main.products.products.product2.title',
                subTitle: 'main.products.products.product2.sub-title',
                icon: 'assets/images/main-banner/sme.svg',
                url: '/products/SME',
                alt: 'sme-image',
            },
            {
                title: 'main.products.products.product6.title',
                subTitle: 'main.products.products.product6.sub-title',
                icon: 'assets/images/main-banner/media.svg',
                url: '/products/Media',
                alt: 'media-image',
            },
            {
                title: 'main.products.products.product3.title',
                subTitle: 'main.products.products.product3.sub-title',
                icon: 'assets/images/main-banner/e-invoice.svg',
                url: '/products/E-Invoice',
                alt: 'e-invoice-image',
            },
            {
                title: 'main.products.products.product7.title',
                subTitle: 'main.products.products.product7.sub-title',
                icon: 'assets/images/main-banner/acc.svg',
                url: '/products/Accounting',
                alt: 'acc-image',
            },
            {
                title: 'main.products.products.product4.title',
                subTitle: 'main.products.products.product4.sub-title',
                icon: 'assets/images/main-banner/erp.svg',
                url: '/products/ERP',
                alt: 'erp-image',
            },
        ];
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
        this.router.events
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd))
            .subscribe(() => {
            this.detectDir();
        });
    }
    navigate(url) {
        if (this.isMobileOrTablet)
            this.sidenavToggleSub.emit();
        let translatedPath = this.localizeRouterService.translateRoute([url]);
        this.router.navigate(translatedPath);
    }
    detectSize() {
        this.isMobileOrTablet =
            this.deviceDetectorService.isMobile() ||
                this.deviceDetectorService.isTablet();
    }
    detectDir() {
        this.faArrowTouch =
            this.localizeRouterService.parser.currentLang == 'ar'
                ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faArrowLeft
                : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faArrowRight;
        this.spy.detectChanges();
    }
}
ProductSubMenuComponent.ɵfac = function ProductSubMenuComponent_Factory(t) { return new (t || ProductSubMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__.LocalizeRouterService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__.DeviceDetectorService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
ProductSubMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductSubMenuComponent, selectors: [["app-product-sub-menu"]], hostBindings: function ProductSubMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function ProductSubMenuComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, outputs: { sidenavToggleSub: "sidenavToggleSub" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]], decls: 6, vars: 4, consts: [[1, "sub-menu"], [1, "product-part"], ["class", "p-small", 4, "ngIf"], [1, "products"], ["class", "product", 3, "click", 4, "ngFor", "ngForOf"], ["class", "d-lg-none d-xl-block", 4, "ngIf"], [1, "p-small"], [1, "product", 3, "click"], [3, "alt", "src"], [1, "data"], [1, "header", 3, "ngClass", "ngStyle"], [1, "subTitle", 3, "ngClass"], [1, "d-lg-none", "d-xl-block"], [1, "call-part"], ["alt", "cycle-img", "src", "assets/images/main-banner/cyclie.svg"], [1, "touch"], ["mat-stroked-button", "", "color", "basic", 1, "btn", "touchBtn", 3, "routerLink"], [1, "p-small", 3, "icon"], [1, "call"], ["dir", "ltr", "href", "tel:+966 800 1110 980", 2, "text-decoration", "unset", "color", "#111828"]], template: function ProductSubMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProductSubMenuComponent_p_2_Template, 3, 3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProductSubMenuComponent_div_4_Template, 9, 19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProductSubMenuComponent_div_5_Template, 20, 13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("dir", ctx.localizeRouterService.parser.currentLang == "ar" ? "rtl" : "ltr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobileOrTablet);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.productsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobileOrTablet);
    } }, dependencies: [_gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__.LocalizeRouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__.LocalizeRouterPipe, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle], styles: ["[_nghost-%COMP%]   .sub-menu[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .product-part[_ngcontent-%COMP%] {\n  padding: 40px;\n  max-width: 833px !important;\n  border-inline-end: 2px solid #e7e8ea !important;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .product-part[_ngcontent-%COMP%] {\n    padding: 0 !important;\n    max-width: unset !important;\n    border-inline-end: unset !important;\n  }\n}\n[_nghost-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .product-part[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #585d69;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .product-part[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .product-part[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%] {\n    padding-top: 22.6px;\n    margin-top: 22.6px;\n    border-top: 1px solid #e7e8ea;\n  }\n}\n[_nghost-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .product-part[_ngcontent-%COMP%]   .products.products[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1 1 304px;\n}\n@media (hover: hover) and (pointer: fine) {\n  [_nghost-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .product-part[_ngcontent-%COMP%]   .products.products[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:hover {\n    background-color: rgba(243, 246, 255, 0.7);\n    cursor: pointer;\n  }\n}\n[_nghost-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .product-part[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  grid-gap: 14px;\n  margin-inline-end: 57px;\n  margin-bottom: 19px;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .product-part[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%] {\n    margin-inline-end: unset;\n  }\n}\n[_nghost-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .product-part[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n}\n@media (max-width: 991px) {\n  [_nghost-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .product-part[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n}\n[_nghost-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .product-part[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n[_nghost-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .product-part[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .p-larg[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #111828;\n}\n[_nghost-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .product-part[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0px;\n}\n[_nghost-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .product-part[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  color: #111828;\n}\n[_nghost-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .call-part[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 45px;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  grid-gap: 40px;\n  justify-content: center;\n  align-items: flex-start;\n  height: 100%;\n}\n[_nghost-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .call-part[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n[dir=rtl]   [_nghost-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .call-part[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  right: unset;\n  left: 0;\n  transform: scale(-1, 1);\n  -webkit-transform: scale(-1, 1);\n}\n[_nghost-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .call-part[_ngcontent-%COMP%]   .touch[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  grid-gap: 20px;\n}\n[_nghost-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .call-part[_ngcontent-%COMP%]   .touch[_ngcontent-%COMP%]   .touchBtn[_ngcontent-%COMP%] {\n  align-items: center;\n  width: 178px;\n  height: 48px;\n  border: 1px solid #1033b1;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 17px;\n  line-height: 32px;\n  color: #1033b1;\n}\n[_nghost-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .call-part[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 2px solid #e7e8ea;\n}\n[_nghost-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .call-part[_ngcontent-%COMP%]   .call[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  grid-gap: 4px;\n}\n[_nghost-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .call-part[_ngcontent-%COMP%]   .call[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #585d69 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Qtc3ViLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDSSxhQUFBO0FBRlI7QUFHUTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLCtDQUFBO0FBRFo7QUFFWTtFQUpKO0lBS1EscUJBQUE7SUFDQSwyQkFBQTtJQUNBLG1DQUFBO0VBQ2Q7QUFDRjtBQUFZO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FBRWhCO0FBQVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRWhCO0FBRGdCO0VBSko7SUFLUSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsNkJBQUE7RUFJbEI7QUFDRjtBQUhnQjtFQUNJLGVBQUE7QUFLcEI7QUFKb0I7RUFDSTtJQUNJLDBDQUFBO0lBQ0EsZUFBQTtFQU0xQjtBQUNGO0FBSGdCO0VBQ0ksYUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBRUEsdUJBQUE7RUFJQSxtQkFBQTtBQUNwQjtBQUpvQjtFQU5KO0lBT1Esd0JBQUE7RUFPdEI7QUFDRjtBQUxvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBT3hCO0FBTndCO0VBSEo7SUFJUSxXQUFBO0lBQ0EsWUFBQTtFQVMxQjtBQUNGO0FBUG9CO0VBQ0ksb0JBQUE7QUFTeEI7QUFQb0I7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFTeEI7QUFQb0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFTeEI7QUFSd0I7RUFDSSxjQUFBO0FBVTVCO0FBSlE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUVBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBS1o7QUFKWTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFNaEI7QUFKZ0I7RUFDSSxZQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUFNcEI7QUFIWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBS2hCO0FBSGdCO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFLcEI7QUFGWTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQUloQjtBQUZZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7QUFJaEI7QUFGZ0I7RUFDSSxTQUFBO0VBQ0EseUJBQUE7QUFJcEIiLCJmaWxlIjoicHJvZHVjdC1zdWItbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgXCJAYW5ndWxhci9tYXRlcmlhbFwiIGFzIG1hdDtcclxuQGltcG9ydCBcInNyYy90aGVtZS9fdmFyaWFibGVzLnNjc3NcIjtcclxuOmhvc3Qge1xyXG4gICAgLnN1Yi1tZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5wcm9kdWN0LXBhcnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgzM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1pbmxpbmUtZW5kOiAycHggc29saWQgI2U3ZThlYSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWlubGluZS1lbmQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU4NWQ2OTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjIuNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIyLjZweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZThlYTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYucHJvZHVjdHMgPiAqIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgMzA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyNDYsIDI1NSwgMC43KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGdhcDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogMTRweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDU3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wLWxhcmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzExMTgyODtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTExODI4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxsLXBhcnQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDQ1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGdhcDogNDBweDtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDQwcHg7XHJcblxyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG5cclxuICAgICAgICAgICAgICAgIFtkaXI9cnRsXSAmIHtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50b3VjaCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGdhcDogMjBweDtcclxuICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC50b3VjaEJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTc4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMDMzYjE7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTAzM2IxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2U3ZThlYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2FsbCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGdhcDogNHB4O1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDRweDtcclxuXHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1ODVkNjkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 2957:
/*!***********************************************************************!*\
  !*** ./src/app/core/layout/header/sub-header/sub-header.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubHeaderComponent": () => (/* binding */ SubHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 214);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _product_sub_menu_product_sub_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-sub-menu/product-sub-menu.component */ 537);
/* harmony import */ var _call_call_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../call/call.component */ 2646);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constants */ 4854);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-device-detector */ 6618);























function SubHeaderComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, "/"));
} }
function SubHeaderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 9)(5, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-menu", 12, 13)(11, "app-product-sub-menu", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("sidenavToggleSub", function SubHeaderComponent_div_3_Template_app_product_sub_menu_sidenavToggleSub_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.onSidenavToggleSub()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 6, "/"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 8, "header.menu.menu1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r1.faArrow);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 10, "/about-us"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 12, "header.menu.menu3"), " ");
} }
function SubHeaderComponent_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubHeaderComponent_mat_icon_4_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.onToggleSidenav()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.icon, " ");
} }
function SubHeaderComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-call");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "localize");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 3, "header.menu.logIn"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 5, "/contact-us"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 7, "header.menu.contact"), " ");
} }
const _c0 = function (a0) { return { "menu-open": a0 }; };
class SubHeaderComponent {
    constructor(deviceDetectorService, localizeRouterService) {
        this.deviceDetectorService = deviceDetectorService;
        this.localizeRouterService = localizeRouterService;
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.icon = '';
        this.locales = this.localizeRouterService.parser.locales;
        this.currentUrl = '';
        this.faArrow = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faChevronDown;
        this.isMobileOrTablet = true;
        this.onToggleSidenav = () => {
            this.sidenavToggle.emit();
        };
    }
    onResize(event) {
        if (event.target.innerWidth > _constants__WEBPACK_IMPORTED_MODULE_2__.SCREEN_MD) {
            this.isMobileOrTablet = false;
        }
        else {
            this.isMobileOrTablet = true;
        }
    }
    ngOnInit() {
        this.detectSize();
    }
    onSidenavToggleSub() {
        this.sidenavToggle.emit();
    }
    detectSize() {
        this.isMobileOrTablet =
            this.deviceDetectorService.isMobile() ||
                this.deviceDetectorService.isTablet();
    }
}
SubHeaderComponent.ɵfac = function SubHeaderComponent_Factory(t) { return new (t || SubHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__.DeviceDetectorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__.LocalizeRouterService)); };
SubHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SubHeaderComponent, selectors: [["app-sub-header"]], hostBindings: function SubHeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function SubHeaderComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    } }, inputs: { icon: "icon" }, outputs: { sidenavToggle: "sidenavToggle" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]], decls: 6, vars: 7, consts: [[3, "ngClass"], [1, "container"], [3, "routerLink", 4, "ngIf"], ["class", "menu", 4, "ngIf"], ["style", "cursor: pointer", 3, "click", 4, "ngIf"], ["class", "btns", 4, "ngIf"], [3, "routerLink"], ["alt", "logo-image", "src", "assets/images/shared/logo.svg"], [1, "menu"], [1, "menu-item"], ["mat-button", "", 3, "matMenuTriggerFor"], [1, "p-small", 3, "icon"], [1, "mat-menu-panel-custom"], ["menu", "matMenu"], [3, "sidenavToggleSub"], [1, "menu-item", 3, "routerLink"], ["mat-button", ""], [2, "cursor", "pointer", 3, "click"], [1, "btns"], ["mat-stroked-button", "", 1, "btn", "login"], ["mat-flat-button", "", "color", "primary", 1, "btn", "contact", 3, "routerLink"]], template: function SubHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SubHeaderComponent_a_2_Template, 3, 3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SubHeaderComponent_div_3_Template, 17, 14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SubHeaderComponent_mat_icon_4_Template, 2, 1, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SubHeaderComponent_div_5_Template, 9, 9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx.icon == "close"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isMobileOrTablet);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isMobileOrTablet);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isMobileOrTablet);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isMobileOrTablet);
    } }, dependencies: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuTrigger, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__.LocalizeRouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_6__.LocalizeRouterPipe, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FaIconComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _product_sub_menu_product_sub_menu_component__WEBPACK_IMPORTED_MODULE_0__.ProductSubMenuComponent,
        _call_call_component__WEBPACK_IMPORTED_MODULE_1__.CallComponent], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  grid-gap: 10px;\n  -webkit-backdrop-filter: blur(16px);\n          backdrop-filter: blur(16px);\n  height: 80px;\n  left: 0px;\n  top: 50px;\n  position: fixed;\n  position: -webkit-fixed; \n  z-index: 1000; \n  background: rgba(243, 246, 255, 0.7) !important;\n  width: 100%;\n}\n@media (max-width: 991px) {\n  mat-toolbar[_ngcontent-%COMP%] {\n    padding: 0;\n    height: 56px;\n  }\n}\nmat-toolbar.menu-open[_ngcontent-%COMP%] {\n  border: 1px solid #e7e8ea;\n}\nmat-toolbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #f3f6ff;\n}\nmat-toolbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  align-items: center;\n  padding: 0px;\n  gap: 20px;\n  grid-gap: 20px;\n}\n@media (max-width: 1199px) {\n  mat-toolbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n    gap: 0px;\n    grid-gap: 0px;\n  }\n}\n@media (max-width: 991px) {\n  mat-toolbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n    gap: 20px;\n    grid-gap: 20px;\n  }\n}\nmat-toolbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 32px;\n}\nmat-toolbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Readex Pro\" !important;\n  font-style: normal !important;\n  font-weight: 600 !important;\n  font-size: 17px !important;\n  line-height: 32px !important;\n  color: #111828 !important;\n}\nmat-toolbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  margin-inline-start: 9px;\n}\nmat-toolbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #041333;\n}\nmat-toolbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  align-items: center;\n  padding: 0px;\n  gap: 12px;\n  grid-gap: 12px;\n}\nmat-toolbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  height: 48px;\n}\nmat-toolbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .btn.login[_ngcontent-%COMP%] {\n  border: 1px solid #111828;\n  color: #111828;\n}\n@media (hover: hover) and (pointer: fine) {\n  mat-toolbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .btn.login[_ngcontent-%COMP%]:hover {\n    color: #4c6ee6;\n    border-color: #4c6ee6;\n  }\n}\nmat-toolbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .btn.contact[_ngcontent-%COMP%] {\n  border: 1px solid #1033b1;\n  color: #f3f6ff;\n}\n@media (hover: hover) and (pointer: fine) {\n  mat-toolbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   .btn.contact[_ngcontent-%COMP%]:hover {\n    background-color: #4c6ee6 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Yi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHRoZW1lXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBLEVBQUEseUJBQUE7RUFDQSxhQUFBLEVBQUEsK0RBQUE7RUFDQSwrQ0FBQTtFQUVBLFdBQUE7QUFISjtBQUlJO0VBakJKO0lBa0JRLFVBQUE7SUFDQSxZQUFBO0VBRE47QUFDRjtBQUVJO0VBQ0kseUJBQUE7QUFBUjtBQUVJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQzNCZTtBRDJCdkI7QUFDUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFDWjtBQUNZO0VBVEo7SUFVUSxRQUFBO0lBQ0EsYUFBQTtFQUVkO0FBQ0Y7QUFBWTtFQWRKO0lBZVEsU0FBQTtJQUNBLGNBQUE7RUFHZDtBQUNGO0FBRFk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUdoQjtBQURZO0VBQ0ksb0NBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0FBR2hCO0FBRmdCO0VBQ0ksd0JBQUE7QUFJcEI7QUFBUTtFQUNJLGNBQUE7QUFFWjtBQUFRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQUVaO0FBQVk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFFaEI7QUFEZ0I7RUFDSSx5QkFBQTtFQUNBLGNDOUVIO0FEaUZqQjtBQUZvQjtFQUNJO0lBQ0ksY0NyRkw7SURzRksscUJDdEZMO0VEMEZyQjtBQUNGO0FBRGdCO0VBQ0kseUJBQUE7RUFDQSxjQzFGRztBRDZGdkI7QUFGb0I7RUFDSTtJQUNJLG9DQUFBO0VBSTFCO0FBQ0YiLCJmaWxlIjoic3ViLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgXCJAYW5ndWxhci9tYXRlcmlhbFwiIGFzIG1hdDtcclxuQGltcG9ydCBcInNyYy90aGVtZS9fdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbm1hdC10b29sYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1maXhlZDsgLyogRm9yIG1hY09TL2lPUyBTYWZhcmkgKi9cclxuICAgIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSB0aGF0IHlvdXIgYXBwJ3MgY29udGVudCBkb2Vzbid0IG92ZXJsYXAgdGhlIHRvb2xiYXIgKi9cclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDMsIDI0NiwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgfVxyXG4gICAgJi5tZW51LW9wZW4ge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlN2U4ZWE7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeS1ibHVlMTA7XHJcbiAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbGcpIHtcclxuICAgICAgICAgICAgICAgIGdhcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDBweDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICAgICAgICAgIGdhcDogMjBweDtcclxuICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJSZWFkZXggUHJvXCIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxMTE4MjggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGZhLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDlweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDQxMzMzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRucyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIGdhcDogMTJweDtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDEycHg7XHJcblxyXG4gICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgICAgICAgICYubG9naW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1kYXJrLTEwMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWRhcmstMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnktYmx1ZTcwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcHJpbWFyeS1ibHVlNzA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLmNvbnRhY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1wcmltYXJ5LWJsdWUxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5LWJsdWUxMDtcclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnktYmx1ZTcwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iLCIkY29sb3ItcHJpbWFyeS1ibHVlMTIwOiAjMTUyNjYzO1xyXG4kY29sb3ItcHJpbWFyeS1ibHVlMTAwOiAjMTAzM2IxO1xyXG4kY29sb3ItcHJpbWFyeS1ibHVlNzA6ICM0YzZlZTY7XHJcbiRjb2xvci1wcmltYXJ5LWJsdWUyMDogI2U5ZWZmZTtcclxuJGNvbG9yLXByaW1hcnktYmx1ZTEwOiAjZjNmNmZmO1xyXG5cclxuJGNvbG9yLWRhcmstMTAwOiAjMTExODI4O1xyXG4kY29sb3ItZGFyay03MDogIzU4NWQ2OTtcclxuJGNvbG9yLWRhcmstNTA6ICM4ODhiOTM7XHJcbiRjb2xvci1kYXJrLTMwOiAjYjhiYWJmO1xyXG4kY29sb3ItZGFyay0xMDogI2U3ZThlYTtcclxuJGNvbG9yLWRhcmstNTogI2ZhZmJmZjtcclxuJGNvbG9yLWRhcmstMDogI2ZmZmZmZjtcclxuXHJcbiRjb2xvci1zeXN0ZW0tc3VjY2VzczogIzQwOTMyOTtcclxuJGNvbG9yLXN5c3RlbS13YXJuaW5nOiAjZjNjZjQ4O1xyXG4kY29sb3Itc3lzdGVtLWRhbmdlcjogI2FmMGYzMjtcclxuXHJcbiRjb2xvci1lbGVtZW50cy1tYW5keTogI2U0NDg3MDtcclxuJGNvbG9yLWVsZW1lbnRzLWFxdWFtYXJpbmU6ICM2ZWRmY2Y7XHJcbiRjb2xvci1lbGVtZW50cy1QdXJwbGU6ICM1NjIxY2I7XHJcbiRjb2xvci1lbGVtZW50cy10YW5nZXJpbmU6ICNlYzhlNjU7XHJcbiRjb2xvci1lbGVtZW50cy1Eb2RnZXI6ICMzYThhZjc7XHJcbiRjb2xvci1lbGVtZW50cy1wYXN0ZWw6ICM3MGQ0OTU7XHJcbiRjb2xvci1lbGVtZW50cy1lbmVyZ3k6ICNmN2Q3NGU7XHJcblxyXG4kYm9keS1mb250LWZhbWlseTogXCJSZWFkZXggUHJvXCIsIHNhbnMtc2VyaWY7XHJcblxyXG4kZGlzcGxheS1odWdlOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgICAkZm9udC1zaXplOiA2NHB4LFxyXG4gICAgJGxpbmUtaGVpZ2h0OiA4OHB4LFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcbiRkaXNwbGF5LWxhcmc6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDQwMCxcclxuICAgICRmb250LXNpemU6IDU2cHgsXHJcbiAgICAkbGluZS1oZWlnaHQ6IDcycHgsXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuJGRpc3BsYXktbWVkaXVtOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgICAkZm9udC1zaXplOiA0OHB4LFxyXG4gICAgJGxpbmUtaGVpZ2h0OiA1NnB4LFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcbiRkaXNwbGF5LXNtYWxsOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgICAkZm9udC1zaXplOiAzNnB4LFxyXG4gICAgJGxpbmUtaGVpZ2h0OiA0OHB4LFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcbiRkaXNwbGF5LXhzbWFsbDogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4gICAgJGZvbnQtZmFtaWx5OiAkYm9keS1mb250LWZhbWlseSxcclxuICAgICRmb250LXdlaWdodDogNDAwLFxyXG4gICAgJGZvbnQtc2l6ZTogMjRweCxcclxuICAgICRsaW5lLWhlaWdodDogMzJweCxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG5cclxuJGJvZHktbGFyZzogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4gICAgJGZvbnQtZmFtaWx5OiAkYm9keS1mb250LWZhbWlseSxcclxuICAgICRmb250LXdlaWdodDogNDAwLFxyXG4gICAgJGZvbnQtc2l6ZTogMjBweCxcclxuICAgICRsaW5lLWhlaWdodDogMzJweCxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG4kYm9keS1tZWRpdW06IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDQwMCxcclxuICAgICRmb250LXNpemU6IDE3cHgsXHJcbiAgICAkbGluZS1oZWlnaHQ6IDMycHgsXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuJGJvZHktc21hbGw6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDQwMCxcclxuICAgICRmb250LXNpemU6IDE1cHgsXHJcbiAgICAkbGluZS1oZWlnaHQ6IDI0cHgsXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuJGJvZHkteHNtYWxsOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgICAkZm9udC1zaXplOiAxM3B4LFxyXG4gICAgJGxpbmUtaGVpZ2h0OiAyMnB4LFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcbiRidXR0b246IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDYwMCxcclxuICAgICRmb250LXNpemU6IDE3cHgsXHJcbiAgICAkbGluZS1oZWlnaHQ6IDMycHgsXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuJGlucHV0OiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA2MDAsXHJcbiAgICAkZm9udC1zaXplOiAxZW0sXHJcbiAgICAkbGluZS1oZWlnaHQ6IDFlbSxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG4vLyBCcmVhayBQb2ludHNcclxuJHNjcmVlbi14czogNTc1cHg7XHJcbiRzY3JlZW4tc206IDc2N3B4O1xyXG4kc2NyZWVuLW1kOiA5OTFweDtcclxuJHNjcmVlbi1sZzogMTE5OXB4O1xyXG5cclxuLy8gRGVmYXVsdCBzaXplXHJcbiRpbnB1dC1oZWlnaHQ6IDU2cHg7XHJcbiRpbnB1dC1mb250LXNpemU6IDE3cHg7XHJcbiRpbnB1dC1mb250LXdlaWdodDogNDAwO1xyXG4kaW5wdXQtbGFiZWwtZm9udC1zaXplOiAxM3B4O1xyXG4kaW5wdXQtbGFiZWwtbGluZS1oZWlnaHQ6IDIycHg7XHJcbi8vIHNtYWxsXHJcbiRpbnB1dC1oZWlnaHQtc206IDM1cHg7XHJcbiRpbnB1dC1mb250LXNpemUtc206IDEzcHg7XHJcbiRpbnB1dC1mb250LXdlaWdodC1zbTogNDAwO1xyXG4kaW5wdXQtbGFiZWwtZm9udC1zaXplLXNtOiAkaW5wdXQtZm9udC1zaXplLXNtO1xyXG4kaW5wdXQtbGFiZWwtbGluZS1oZWlnaHQtc206IDEuMztcclxuLy8geHRyYSBTbWFsbFxyXG4kaW5wdXQtaGVpZ2h0LXhzOiAzMHB4O1xyXG4kaW5wdXQtZm9udC1zaXplLXhzOiAxMnB4O1xyXG4kaW5wdXQtZm9udC13ZWlnaHQteHM6IDQwMDtcclxuJGlucHV0LWxhYmVsLWZvbnQtc2l6ZS14czogJGlucHV0LWZvbnQtc2l6ZS14cztcclxuJGlucHV0LWxhYmVsLWxpbmUtaGVpZ2h0LXhzOiAxLjE7XHJcbiRjb2xvci1ibGFjazogIzEzMTQxNDtcclxuJGxhYmVsLXJlcXVpcmVkLWNvbG9yOiAkY29sb3ItYmxhY2s7XHJcblxyXG4vLyBGb3Jtc1xyXG4kZm9ybS1ncmlkLWd1dHRlci13aWR0aDogMTBweCAhZGVmYXVsdDtcclxuJGZvcm0tZ3JvdXAtbWFyZ2luLWJvdHRvbTogMXJlbSAhZGVmYXVsdDtcclxuJGxhYmVsLXJlcXVpcmVkLWNvbG9yOiAkY29sb3ItYmxhY2s7XHJcbiJdfQ== */"] });


/***/ }),

/***/ 9887:
/*!****************************************************************************!*\
  !*** ./src/app/core/layout/ready-for-change/ready-for-change.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReadyForChangeComponent": () => (/* binding */ ReadyForChangeComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 214);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-lazyload-image */ 5600);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ 4854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-device-detector */ 6618);


















class ReadyForChangeComponent {
    constructor(localizeRouterService, router, spy, deviceDetectorService) {
        this.localizeRouterService = localizeRouterService;
        this.router = router;
        this.spy = spy;
        this.deviceDetectorService = deviceDetectorService;
        this.image = '/assets/images/shared/footer-image.jpg';
        this.locales = this.localizeRouterService.parser.locales;
        this.currentUrl = '';
        this.faArrow = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faArrowRight;
        this.isMobileOrTablet = true;
    }
    onResize(event) {
        if (event.target.innerWidth > _constants__WEBPACK_IMPORTED_MODULE_0__.SCREEN_MD) {
            this.isMobileOrTablet = false;
            this.image = '/assets/images/shared/footer-image.jpg';
        }
        else {
            this.isMobileOrTablet = true;
            this.image = '/assets/images/shared/footer-image-mobile.jpg';
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
        if (this.isMobileOrTablet) {
            this.image = '/assets/images/shared/footer-image-mobile.jpg';
        }
        else {
            this.image = '/assets/images/shared/footer-image.jpg';
        }
    }
    detectDir() {
        this.faArrow =
            this.localizeRouterService.parser.currentLang == 'ar'
                ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faArrowLeft
                : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faArrowRight;
        this.spy.detectChanges();
    }
    navigate() {
        let translatedPath = this.localizeRouterService.translateRoute([
            '/contact-us',
        ]);
        this.router.navigate(translatedPath);
    }
}
ReadyForChangeComponent.ɵfac = function ReadyForChangeComponent_Factory(t) { return new (t || ReadyForChangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__.LocalizeRouterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__.DeviceDetectorService)); };
ReadyForChangeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ReadyForChangeComponent, selectors: [["app-ready-for-change"]], hostBindings: function ReadyForChangeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function ReadyForChangeComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    } }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]], decls: 14, vars: 11, consts: [[1, "ready-for-change", 3, "lazyLoad"], [1, "container"], [1, "title"], [1, "demo"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "p-small", 3, "icon"]], template: function ReadyForChangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3)(6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReadyForChangeComponent_Template_button_click_9_listener() { return ctx.navigate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("lazyLoad", ctx.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 5, "ready.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 7, "ready.exp"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 9, "header.request-demo"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faArrow);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FaIconComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__.LocalizeRouterModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule,
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__.LazyLoadImageModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__.LazyLoadImageDirective], styles: [".ready-for-change[_ngcontent-%COMP%] {\n  height: 337px;\n  width: 100%;\n  background-size: cover !important;\n  background-repeat: no-repeat;\n}\n@media (max-width: 991px) {\n  .ready-for-change[_ngcontent-%COMP%] {\n    height: unset;\n  }\n}\n.ready-for-change[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  justify-content: space-between;\n}\n@media (max-width: 991px) {\n  .ready-for-change[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 42px 26px;\n  }\n}\n.ready-for-change[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #f3f6ff;\n  flex: 1;\n}\n@media (max-width: 991px) {\n  .ready-for-change[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 36px;\n    line-height: 48px;\n    margin-bottom: 20px;\n  }\n}\n.ready-for-change[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 28px;\n  grid-gap: 28px;\n}\n.ready-for-change[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #f3f6ff;\n}\n@media (max-width: 991px) {\n  .ready-for-change[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 17px;\n    line-height: 32px;\n  }\n}\n.ready-for-change[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  height: 48px;\n  height: 56px;\n  border: 1px solid #1033b1;\n  color: #f3f6ff;\n}\n@media (hover: hover) and (pointer: fine) {\n  .ready-for-change[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background-color: #4c6ee6 !important;\n  }\n}\n@media (max-width: 991px) {\n  .ready-for-change[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 17px;\n    line-height: 32px;\n  }\n}\n.ready-for-change[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     .mat-button-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.2s ease-in;\n  gap: 8px;\n  grid-gap: 8px;\n}\n@media (hover: hover) and (pointer: fine) {\n  .ready-for-change[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     .mat-button-wrapper:hover {\n    gap: 12px;\n    grid-gap: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWR5LWZvci1jaGFuZ2UuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcdGhlbWVcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBRUEsaUNBQUE7RUFDQSw0QkFBQTtBQUhKO0FBSUk7RUFOSjtJQU9RLGFBQUE7RUFETjtBQUNGO0FBR0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUFEUjtBQUVRO0VBTEo7SUFNUSxzQkFBQTtJQUNBLGtCQUFBO0VBQ1Y7QUFDRjtBQUNRO0VBQ0ksY0FBQTtFQUNBLE9BQUE7QUFDWjtBQUFZO0VBSEo7SUFJUSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0VBR2Q7QUFDRjtBQURRO0VBQ0ksT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFHWjtBQUZZO0VBQ0ksY0FBQTtBQUloQjtBQUhnQjtFQUZKO0lBR1EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUFNbEI7QUFDRjtBQUpZO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0NqRE87QUR1RHZCO0FBTGdCO0VBQ0k7SUFDSSxvQ0FBQTtFQU90QjtBQUNGO0FBTGdCO0VBWEo7SUFZUSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQVFsQjtBQUNGO0FBUGdCO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0FBU3BCO0FBUm9CO0VBQ0k7SUFDSSxTQUFBO0lBQ0EsY0FBQTtFQVUxQjtBQUNGIiwiZmlsZSI6InJlYWR5LWZvci1jaGFuZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIiBhcyBtYXQ7XHJcbkBpbXBvcnQgXCJzcmMvdGhlbWUvX3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4ucmVhZHktZm9yLWNoYW5nZSB7XHJcbiAgICBoZWlnaHQ6IDMzN3B4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvL2JhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL3NoYXJlZC9mb290ZXItaW1hZ2UuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICAgICAgaGVpZ2h0OiB1bnNldDtcclxuICAgICAgLy8gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL3NoYXJlZC9mb290ZXItaW1hZ2UtbW9iaWxlLmpwZ1wiKTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDQycHggMjZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjNmNmZmO1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVtbyB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBnYXA6IDI4cHg7XHJcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAyOHB4O1xyXG4gICAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2YzZjZmZjtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1wcmltYXJ5LWJsdWUxMDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnktYmx1ZTEwO1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeS1ibHVlNzAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiJGNvbG9yLXByaW1hcnktYmx1ZTEyMDogIzE1MjY2MztcclxuJGNvbG9yLXByaW1hcnktYmx1ZTEwMDogIzEwMzNiMTtcclxuJGNvbG9yLXByaW1hcnktYmx1ZTcwOiAjNGM2ZWU2O1xyXG4kY29sb3ItcHJpbWFyeS1ibHVlMjA6ICNlOWVmZmU7XHJcbiRjb2xvci1wcmltYXJ5LWJsdWUxMDogI2YzZjZmZjtcclxuXHJcbiRjb2xvci1kYXJrLTEwMDogIzExMTgyODtcclxuJGNvbG9yLWRhcmstNzA6ICM1ODVkNjk7XHJcbiRjb2xvci1kYXJrLTUwOiAjODg4YjkzO1xyXG4kY29sb3ItZGFyay0zMDogI2I4YmFiZjtcclxuJGNvbG9yLWRhcmstMTA6ICNlN2U4ZWE7XHJcbiRjb2xvci1kYXJrLTU6ICNmYWZiZmY7XHJcbiRjb2xvci1kYXJrLTA6ICNmZmZmZmY7XHJcblxyXG4kY29sb3Itc3lzdGVtLXN1Y2Nlc3M6ICM0MDkzMjk7XHJcbiRjb2xvci1zeXN0ZW0td2FybmluZzogI2YzY2Y0ODtcclxuJGNvbG9yLXN5c3RlbS1kYW5nZXI6ICNhZjBmMzI7XHJcblxyXG4kY29sb3ItZWxlbWVudHMtbWFuZHk6ICNlNDQ4NzA7XHJcbiRjb2xvci1lbGVtZW50cy1hcXVhbWFyaW5lOiAjNmVkZmNmO1xyXG4kY29sb3ItZWxlbWVudHMtUHVycGxlOiAjNTYyMWNiO1xyXG4kY29sb3ItZWxlbWVudHMtdGFuZ2VyaW5lOiAjZWM4ZTY1O1xyXG4kY29sb3ItZWxlbWVudHMtRG9kZ2VyOiAjM2E4YWY3O1xyXG4kY29sb3ItZWxlbWVudHMtcGFzdGVsOiAjNzBkNDk1O1xyXG4kY29sb3ItZWxlbWVudHMtZW5lcmd5OiAjZjdkNzRlO1xyXG5cclxuJGJvZHktZm9udC1mYW1pbHk6IFwiUmVhZGV4IFByb1wiLCBzYW5zLXNlcmlmO1xyXG5cclxuJGRpc3BsYXktaHVnZTogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4gICAgJGZvbnQtZmFtaWx5OiAkYm9keS1mb250LWZhbWlseSxcclxuICAgICRmb250LXdlaWdodDogNDAwLFxyXG4gICAgJGZvbnQtc2l6ZTogNjRweCxcclxuICAgICRsaW5lLWhlaWdodDogODhweCxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG4kZGlzcGxheS1sYXJnOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgICAkZm9udC1zaXplOiA1NnB4LFxyXG4gICAgJGxpbmUtaGVpZ2h0OiA3MnB4LFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcbiRkaXNwbGF5LW1lZGl1bTogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4gICAgJGZvbnQtZmFtaWx5OiAkYm9keS1mb250LWZhbWlseSxcclxuICAgICRmb250LXdlaWdodDogNDAwLFxyXG4gICAgJGZvbnQtc2l6ZTogNDhweCxcclxuICAgICRsaW5lLWhlaWdodDogNTZweCxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG4kZGlzcGxheS1zbWFsbDogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4gICAgJGZvbnQtZmFtaWx5OiAkYm9keS1mb250LWZhbWlseSxcclxuICAgICRmb250LXdlaWdodDogNDAwLFxyXG4gICAgJGZvbnQtc2l6ZTogMzZweCxcclxuICAgICRsaW5lLWhlaWdodDogNDhweCxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG4kZGlzcGxheS14c21hbGw6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDQwMCxcclxuICAgICRmb250LXNpemU6IDI0cHgsXHJcbiAgICAkbGluZS1oZWlnaHQ6IDMycHgsXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuXHJcbiRib2R5LWxhcmc6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1sZXZlbChcclxuICAgICRmb250LWZhbWlseTogJGJvZHktZm9udC1mYW1pbHksXHJcbiAgICAkZm9udC13ZWlnaHQ6IDQwMCxcclxuICAgICRmb250LXNpemU6IDIwcHgsXHJcbiAgICAkbGluZS1oZWlnaHQ6IDMycHgsXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuJGJvZHktbWVkaXVtOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgICAkZm9udC1zaXplOiAxN3B4LFxyXG4gICAgJGxpbmUtaGVpZ2h0OiAzMnB4LFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcbiRib2R5LXNtYWxsOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgICAkZm9udC1zaXplOiAxNXB4LFxyXG4gICAgJGxpbmUtaGVpZ2h0OiAyNHB4LFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcbiRib2R5LXhzbWFsbDogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4gICAgJGZvbnQtZmFtaWx5OiAkYm9keS1mb250LWZhbWlseSxcclxuICAgICRmb250LXdlaWdodDogNDAwLFxyXG4gICAgJGZvbnQtc2l6ZTogMTNweCxcclxuICAgICRsaW5lLWhlaWdodDogMjJweCxcclxuICAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4pO1xyXG4kYnV0dG9uOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbiAgICAkZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5LFxyXG4gICAgJGZvbnQtd2VpZ2h0OiA2MDAsXHJcbiAgICAkZm9udC1zaXplOiAxN3B4LFxyXG4gICAgJGxpbmUtaGVpZ2h0OiAzMnB4LFxyXG4gICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbik7XHJcbiRpbnB1dDogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4gICAgJGZvbnQtZmFtaWx5OiAkYm9keS1mb250LWZhbWlseSxcclxuICAgICRmb250LXdlaWdodDogNjAwLFxyXG4gICAgJGZvbnQtc2l6ZTogMWVtLFxyXG4gICAgJGxpbmUtaGVpZ2h0OiAxZW0sXHJcbiAgICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCxcclxuKTtcclxuLy8gQnJlYWsgUG9pbnRzXHJcbiRzY3JlZW4teHM6IDU3NXB4O1xyXG4kc2NyZWVuLXNtOiA3NjdweDtcclxuJHNjcmVlbi1tZDogOTkxcHg7XHJcbiRzY3JlZW4tbGc6IDExOTlweDtcclxuXHJcbi8vIERlZmF1bHQgc2l6ZVxyXG4kaW5wdXQtaGVpZ2h0OiA1NnB4O1xyXG4kaW5wdXQtZm9udC1zaXplOiAxN3B4O1xyXG4kaW5wdXQtZm9udC13ZWlnaHQ6IDQwMDtcclxuJGlucHV0LWxhYmVsLWZvbnQtc2l6ZTogMTNweDtcclxuJGlucHV0LWxhYmVsLWxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4vLyBzbWFsbFxyXG4kaW5wdXQtaGVpZ2h0LXNtOiAzNXB4O1xyXG4kaW5wdXQtZm9udC1zaXplLXNtOiAxM3B4O1xyXG4kaW5wdXQtZm9udC13ZWlnaHQtc206IDQwMDtcclxuJGlucHV0LWxhYmVsLWZvbnQtc2l6ZS1zbTogJGlucHV0LWZvbnQtc2l6ZS1zbTtcclxuJGlucHV0LWxhYmVsLWxpbmUtaGVpZ2h0LXNtOiAxLjM7XHJcbi8vIHh0cmEgU21hbGxcclxuJGlucHV0LWhlaWdodC14czogMzBweDtcclxuJGlucHV0LWZvbnQtc2l6ZS14czogMTJweDtcclxuJGlucHV0LWZvbnQtd2VpZ2h0LXhzOiA0MDA7XHJcbiRpbnB1dC1sYWJlbC1mb250LXNpemUteHM6ICRpbnB1dC1mb250LXNpemUteHM7XHJcbiRpbnB1dC1sYWJlbC1saW5lLWhlaWdodC14czogMS4xO1xyXG4kY29sb3ItYmxhY2s6ICMxMzE0MTQ7XHJcbiRsYWJlbC1yZXF1aXJlZC1jb2xvcjogJGNvbG9yLWJsYWNrO1xyXG5cclxuLy8gRm9ybXNcclxuJGZvcm0tZ3JpZC1ndXR0ZXItd2lkdGg6IDEwcHggIWRlZmF1bHQ7XHJcbiRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b206IDFyZW0gIWRlZmF1bHQ7XHJcbiRsYWJlbC1yZXF1aXJlZC1jb2xvcjogJGNvbG9yLWJsYWNrO1xyXG4iXX0= */"] });


/***/ }),

/***/ 5413:
/*!*******************************************************!*\
  !*** ./src/app/core/utils/localize-browser.loader.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalizeBrowserLoader": () => (/* binding */ LocalizeBrowserLoader),
/* harmony export */   "localizeBrowserLoaderFactory": () => (/* binding */ localizeBrowserLoaderFactory)
/* harmony export */ });
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 214);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _gilsdav_ngx_translate_router_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gilsdav/ngx-translate-router-http-loader */ 4299);



class LocalizeBrowserLoader extends _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_0__.LocalizeParser {
    constructor(translateService, location, settings, data) {
        super(translateService, location, settings);
        this.data = data;
        this.translateService = translateService;
        this.LocalLocation = location;
        this.localizeRouterSettings = settings;
    }
    load(routes) {
        return new Promise((resolve) => {
            this.locales = this.data.locales;
            this.prefix = this.data.prefix;
            this.init(routes).then(resolve);
        });
    }
}
function localizeBrowserLoaderFactory(translate, location, settings, httpClient, transferState) {
    const key = (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.makeStateKey)('transfer-locales');
    const data = transferState.get(key, null);
    if (data) {
        return new LocalizeBrowserLoader(translate, location, settings, data);
    }
    else {
        return new _gilsdav_ngx_translate_router_http_loader__WEBPACK_IMPORTED_MODULE_2__.LocalizeRouterHttpLoader(translate, location, settings, httpClient);
    }
}


/***/ }),

/***/ 6768:
/*!********************************************************!*\
  !*** ./src/app/core/utils/translate-browser.loader.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslateBrowserLoader": () => (/* binding */ TranslateBrowserLoader),
/* harmony export */   "translateBrowserLoaderFactory": () => (/* binding */ translateBrowserLoaderFactory)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 5347);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 318);



class TranslateBrowserLoader {
    constructor(http, transferState) {
        this.http = http;
        this.transferState = transferState;
    }
    getTranslation(lang) {
        const key = (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.makeStateKey)('transfer-translate-' + lang);
        const data = this.transferState.get(key, null);
        // if none found, http load as fallback
        if (data) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((observer) => {
                observer.next(data);
                observer.complete();
            });
        }
        else {
            return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(this.http).getTranslation(lang);
        }
    }
}
function translateBrowserLoaderFactory(httpClient, transferState) {
    return new TranslateBrowserLoader(httpClient, transferState);
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map