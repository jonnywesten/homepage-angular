(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n\r\n<section id=\"start\">\r\n  <app-landing></app-landing>\r\n</section>\r\n\r\n<section id=\"about\">\r\n  <app-about></app-about>\r\n</section>\r\n\r\n<section id =\"projects\">\r\n  <app-projects></app-projects>\r\n</section>\r\n\r\n<section id=\"contact\">\r\n  <app-contact></app-contact>\r\n</section>\r\n\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content pt-5 pb-5\">\r\n\r\n  <i class=\"mdi mdi-periodic-table mdi-bg\"></i>\r\n\r\n\r\n  <div class=\"row mt-5 py-3 mx-auto about-inner\">\r\n    <div class=\"col-12\">\r\n      <h5 class=\"mb-2 text-inherit\">Hi, my name is Daniel Elport</h5>\r\n    </div>\r\n    <div class=\"col-md-9\">\r\n      <h1 class=\"mt-0 mb-3 mr-2\">\r\n        I create&nbsp;\r\n        <br class=\"d-md-none\" />\r\n        <div class=\"animated-words\">\r\n          <span>applications</span>\r\n          <span>sites</span>\r\n          <span>components</span>\r\n        </div>\r\n        <br />\r\n        for the web.\r\n      </h1>\r\n    </div>\r\n\r\n    <div class=\"col-md-3 text-left text-md-right\">\r\n      <img src=\"../../../assets/img/me.png\">\r\n    </div>\r\n\r\n    <div class=\"mx-3 border-top my-3 w-100\"></div>\r\n\r\n    <div class=\"col-md-12 mb-4\">\r\n      <p class=\"text-large\">\r\n        I'm a frontend engineer based in Germany who enjoys building (and occasionally designing) exceptional,\r\n        high-quality websites and applications.\r\n        Fork me on\r\n        <a href=\"https://github.com/DanielElport?tab=repositories\" target=\"_blank\">GitHub</a>\r\n        or see full resume at\r\n        <a href=\"https://www.linkedin.com/in/daniel-elport-a86b93123/\" target=\"_blank\">LinkedIn.</a>\r\n\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\"col-12\">\r\n      <div class=\"row mt-3 mb-5  \">\r\n\r\n        <div *ngFor=\"let col of skills\" class=\"col-6 col-sm-4 mb-3 skill-col\">\r\n          <i class=\"mdi {{col.icon}}\"></i>\r\n          <h4>\r\n            {{col.title}}\r\n          </h4>\r\n\r\n          <div *ngFor=\"let item of col.items\">\r\n            <span>{{item}}</span>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content pt-4 pb-5\">\r\n\r\n  <i class=\"mdi mdi-periodic-table mdi-bg\"></i>\r\n\r\n  <div class=\"row my-5 py-3 mx-auto\">\r\n\r\n    <div class=\"col-12 mb\">\r\n      <h5 class=\"mb-0 text-inherit\">Get In Touch</h5>\r\n      <h2 class=\"mt-0 mb-4\">Contact</h2>\r\n    </div>\r\n\r\n    <div class=\"mx-3 border-top my-3 w-100\"></div>\r\n\r\n    <div class=\"col-12 mb-4\">\r\n      <p>\r\n        If you'd like to work with me, would like more information, or if you'd just like to chat then email me to get\r\n        in touch.\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\"col-12 pt-5 contact-sent\" *ngIf=\"sent\">\r\n      Thank you! Your message has been sent.\r\n    </div>\r\n\r\n    <div class=\"col-12 contact-form\" *ngIf=\"!sent\">\r\n\r\n      <div class=\"error-msg\" *ngIf=\"errorMsg\">\r\n        {{errorMsg}}\r\n      </div>\r\n\r\n      <div class=\"form__group\">\r\n        <input type=\"text\" id=\"name\" class=\"form__field\" placeholder=\"Your Name\" [(ngModel)]=\"name\">\r\n        <label for=\"name\" class=\"form__label\">Name</label>\r\n      </div>\r\n\r\n      <div class=\"form__group\">\r\n        <input type=\"email\" id=\"email\" class=\"form__field\" placeholder=\"Your Email\" [(ngModel)]=\"email\">\r\n        <label for=\"email\" class=\"form__label\">Email</label>\r\n      </div>\r\n\r\n      <div class=\"form__group\">\r\n        <textarea id=\"message\" class=\"form__field\" placeholder=\"Your Message\" rows=\"6\" [(ngModel)]=\"message\"></textarea>\r\n        <label for=\"message\" class=\"form__label\">Message</label>\r\n      </div>\r\n\r\n      <div class=\"col-xs-12 mt-2 text-right\">\r\n\r\n        <div class=\"link my-3\" (click)=\"submit()\">\r\n          <i class=\"mdi mdi-send\"></i>\r\n          SEND\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"text-center\">\r\n  <div class=\"overlay\"></div>\r\n  \r\n  <div class=\"col-12 pt-4 pb-2\">\r\n    <div class=\"btn mr-2 text-large\">\r\n      <i class=\"mdi mdi-github-circle\"></i>\r\n    </div>\r\n    <div class=\"btn text-large\">\r\n      <i class=\"mdi mdi-linkedin-box\"></i>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-12  pb-4\">\r\n    Daniel Elport <span class=\"lightblue\">&copy;2020</span>\r\n  </div>\r\n\r\n\r\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"landing-container fullscreen\">\r\n\r\n  <div class=\"twinkling fullscreen\"></div>\r\n\r\n  <div class=\"overlay fullscreen\"></div>\r\n\r\n  <div class=\"sun\"></div>\r\n\r\n  <div class=\"horizon\"></div>\r\n\r\n  <div class=\"glow\"></div>\r\n\r\n  <div class=\"ground\"></div>\r\n\r\n  <div class=\"midnightGrid\">\r\n    <div class=\"gridInner\">\r\n      <div class=\"grid-x\"></div>\r\n      <div class=\"grid-y\"></div>\r\n    </div>\r\n    <div class=\"gridInner gridInner-2\">\r\n      <div class=\"grid-x\"></div>\r\n      <div class=\"grid-y\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"logo\">\r\n    <h1>\r\n      <div class=\"chrome80s centered\" data-text=\"CODE\">CODE</div>\r\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n        <defs>\r\n          <filter id=\"bevel\">\r\n            <feMorphology operator=\"dilate\" radius=\"3\" in=\"SourceGraphic\" result=\"bevel\" />\r\n          </filter>\r\n        </defs>\r\n      </svg> \r\n    </h1>\r\n    <h2>Smart</h2>\r\n    <svg height=\"320\" width=\"400\" class=\"logo-triangle\">\r\n      <defs>\r\n        <linearGradient id=\"grad1\" x1=\"0%\" y1=\"100%\" x2=\"100%\" y2=\"0%\">\r\n          <stop offset=\"0%\" style=\"stop-color:rgb(50,50,50);stop-opacity:1\" />\r\n          <stop offset=\"100%\" style=\"stop-color:black;stop-opacity:1\" />\r\n        </linearGradient>\r\n      </defs>\r\n      <filter id=\"dropshadow\" height=\"130%\">\r\n        <feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"3\" />\r\n        <feOffset dx=\"2\" dy=\"2\" result=\"offsetblur\" />\r\n        <feMerge>\r\n          <feMergeNode />\r\n          <feMergeNode in=\"SourceGraphic\" />\r\n        </feMerge>\r\n      </filter>\r\n      <polygon points=\"0,0 400,0 200,300\" stroke=\"#3e7ef5\" stroke-width=\"3\" />\r\n    </svg>\r\n  </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-menu/nav-menu.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-menu/nav-menu.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-dark\" [ngClass]=\"{'filled': filled}\">\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n    <span class=\"code\">code smart</span>\r\n    <span class=\"smart\"></span>\r\n  </a>\r\n  <button class=\"navbar-toggler\" (click)=\"toggleNav()\" type=\"button\" data-toggle=\"collapse\"\r\n    data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\"\r\n    aria-label=\"Toggle navigation\">\r\n    <div class='threebar hamburger' [ngClass]=\"{'cross': open}\">\r\n      <div class='bar'></div>\r\n      <div class='bar'></div>\r\n      <div class='bar'></div>\r\n    </div>\r\n  </button>\r\n\r\n  <div class=\"navbar-collapse\" [ngClass]=\"{'collapse': !open}\">\r\n    <ul class=\"navbar-nav mr-0 ml-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"scrollToElement('#start')\">Start</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"scrollToElement('#about')\">About Me</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"scrollToElement('#projects')\">Projects</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"scrollToElement('#contact')\">Contact</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Privacy</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Impress</a>\r\n      </li>\r\n\r\n    </ul>\r\n\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\r\n\r\n  <div class=\"col-12 p-5\" id=\"active-item\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-12 order-first\">\r\n        <h5 class=\"mb-0 lightblue\">Recent Projects</h5>\r\n      </div>\r\n      <div class=\"col-12 order-first\">\r\n        <h2 class=\"mt-1 mb-0\">\r\n          {{activeItem.name}}\r\n        </h2>\r\n      </div>\r\n\r\n      <div class=\"mx-3 border-top my-3 w-100 order-first\"></div>\r\n\r\n      <div class=\"col-md-6 mt-4 item-description-container\">\r\n\r\n        <p class=\"mb-4 item-description\" [innerHTML]=\"activeItem.description\">\r\n        </p>\r\n\r\n        <p class=\"mb-4\">\r\n          <span *ngFor=\"let badge of activeItem.badges\">\r\n            <div class=\"d-inline-block mt-2 mr-2 item-badge\">{{badge}}</div>\r\n          </span>\r\n        </p>\r\n\r\n        <a class=\"link my-3\" href=\"{{activeItem.url}}\" target=\"_blank\">\r\n          <i class=\"mdi mdi-launch\"></i>\r\n          VISIT PAGE..\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"col-md-6 mt-4 order-first order-md-last item-image-container\">\r\n        <div class=\"item-image h-100\" [style.background-image]=\"'url(./assets/img/projects/'+ activeItem.img + ')'\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"d-block d-md-none\">\r\n      <div class=\"rightRs mr-2\" (click)=\"selectNext()\">\r\n        <i class=\"mdi mdi-chevron-right\"></i>\r\n      </div>\r\n      <div class=\"leftRs ml-2\" (click)=\"selectPrevious()\">\r\n        <i class=\"mdi mdi-chevron-left\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-12 p-5 d-none d-md-block\">\r\n\r\n    <ngu-carousel #myCarousel [inputs]=\"carouselConfig\" [dataSource]=\"items\">\r\n\r\n      <div *nguCarouselDef=\"let item;let i = index\" class=\"item\" (click)=\"selectItem(i)\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-3 pr-0\">\r\n\r\n            <div class=\"image\" [ngClass]=\"isActive(i)\"\r\n              [style.background-image]=\"'url(./assets/img/projects/' + item.thumb + ')'\"></div>\r\n          </div>\r\n          <div class=\"col-9\">\r\n            <h5 class=\"col-12 pb-0 px-0 mb-1 mt-2 title\">{{item.name}}</h5>\r\n            <p class=\"text\">{{item.description}}</p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div NguCarouselNext class=\"rightRs\">\r\n        <i class=\"mdi mdi-chevron-right\"></i>\r\n      </div>\r\n      <div NguCarouselPrev class=\"leftRs\">\r\n        <i class=\"mdi mdi-chevron-left\"></i>\r\n      </div>\r\n\r\n    </ngu-carousel>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.imgs = new Array();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.load('stars.png', 'horizon.png', 'twinkling.png', 'me.png');
        setTimeout(function () {
            document.getElementById('loading-overlay').style.opacity = '0';
        }, 500);
    };
    AppComponent.prototype.load = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var i = 0; i < args.length; i++) {
            this.imgs[i] = new Image();
            this.imgs[i].src = 'assets/img/' + args[i];
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/fesm5/ngu-carousel.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nav-menu/nav-menu.component */ "./src/app/components/nav-menu/nav-menu.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"],
                _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__["NavMenuComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_12__["ProjectsComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ngu_carousel__WEBPACK_IMPORTED_MODULE_5__["NguCarouselModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#about {\n  background: linear-gradient(to bottom, #061624, #3e1025);\n  background: linear-gradient(to bottom, #061624, #152e4c);\n  color: #afbac7;\n}\n\n#projects {\n  background: #152e4c;\n  color: #afbac7;\n  padding-bottom: 5rem;\n}\n\n.lightblue {\n  color: #5fa8ff;\n}\n\n#contact {\n  background: #152e4c;\n  color: #afbac7;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  color: #fff;\n}\n\n.text-inherit {\n  color: inherit;\n}\n\n.content {\n  /* i {\n     transition: all .15s linear;\n     cursor: pointer;\n     &:hover {\n       color: #fff;\n     }\n   }*/\n}\n\n.content h1 {\n  color: #fff;\n}\n\n.content .animated-words {\n  display: inline;\n}\n\n.content .animated-words span {\n  position: absolute;\n  opacity: 0;\n  overflow: hidden;\n  color: #5fa8ff;\n  -webkit-animation: animateWord 9s ease-out infinite 0s;\n          animation: animateWord 9s ease-out infinite 0s;\n}\n\n.content .animated-words span:nth-child(2) {\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s;\n}\n\n.content .animated-words span:nth-child(3) {\n  -webkit-animation-delay: 6s;\n          animation-delay: 6s;\n}\n\n@-webkit-keyframes animateWord {\n  0% {\n    opacity: 0;\n  }\n  2% {\n    opacity: 0;\n    -webkit-transform: translateY(-30px);\n  }\n  5% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n  }\n  27% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n  }\n  30% {\n    opacity: 0;\n    -webkit-transform: translateY(30px);\n  }\n  80% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes animateWord {\n  0% {\n    opacity: 0;\n  }\n  2% {\n    opacity: 0;\n    -webkit-transform: translateY(-30px);\n  }\n  5% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n  }\n  27% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n  }\n  30% {\n    opacity: 0;\n    -webkit-transform: translateY(30px);\n  }\n  80% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.content .skill-col {\n  font-size: 14px;\n}\n\n.content .skill-col > i {\n  color: #fff;\n  font-size: 86px;\n}\n\n.content .skill-col h4 {\n  margin-top: -15px;\n  margin-bottom: 10px;\n}\n\n.content img {\n  -webkit-filter: brightness(0.8);\n          filter: brightness(0.8);\n  width: 100px;\n  max-width: 100%;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9DOlxcVXNlcnNcXGRhblxcRGVza3RvcFxcZ2l0aHViXFxob21lcGFnZS1hbmd1bGFyL3NyY1xcc3R5bGVzXFxjb2xvcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9DOlxcVXNlcnNcXGRhblxcRGVza3RvcFxcZ2l0aHViXFxob21lcGFnZS1hbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSx3REFBQTtFQUNBLHdEQUFBO0VBQ0EsY0FQVTtBQ0VaOztBRFFBO0VBQ0UsbUJBQUE7RUFDQSxjQVpVO0VBYVYsb0JBQUE7QUNMRjs7QURRQTtFQUNFLGNBZlU7QUNVWjs7QURRQTtFQUNFLG1CQUFBO0VBQ0EsY0F0QlU7QUNpQlo7O0FEUUE7RUFDRSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxjQUFBO0FDTEY7O0FDekJBO0VBMERDOzs7Ozs7S0FBQTtBRHZCRDs7QUNqQ0U7RUFDRSxXQUFBO0FEbUNKOztBQ2hDRTtFQUNFLGVBQUE7QURrQ0o7O0FDaENJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjRlhNO0VFWU4sc0RBQUE7VUFBQSw4Q0FBQTtBRGtDTjs7QUNoQ007RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0FEa0NSOztBQ2hDTTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7QURrQ1I7O0FDM0JFO0VBQ0U7SUFBSyxVQUFBO0VEOEJQO0VDN0JFO0lBQUssVUFBQTtJQUFZLG9DQUFBO0VEaUNuQjtFQ2hDRTtJQUFLLFVBQUE7SUFBWSxrQ0FBQTtFRG9DbkI7RUNuQ0U7SUFBTSxVQUFBO0lBQVksa0NBQUE7RUR1Q3BCO0VDdENFO0lBQU0sVUFBQTtJQUFZLG1DQUFBO0VEMENwQjtFQ3pDRTtJQUFNLFVBQUE7RUQ0Q1I7RUMzQ0U7SUFBTyxVQUFBO0VEOENUO0FBQ0Y7O0FDdERFO0VBQ0U7SUFBSyxVQUFBO0VEOEJQO0VDN0JFO0lBQUssVUFBQTtJQUFZLG9DQUFBO0VEaUNuQjtFQ2hDRTtJQUFLLFVBQUE7SUFBWSxrQ0FBQTtFRG9DbkI7RUNuQ0U7SUFBTSxVQUFBO0lBQVksa0NBQUE7RUR1Q3BCO0VDdENFO0lBQU0sVUFBQTtJQUFZLG1DQUFBO0VEMENwQjtFQ3pDRTtJQUFNLFVBQUE7RUQ0Q1I7RUMzQ0U7SUFBTyxVQUFBO0VEOENUO0FBQ0Y7O0FDNUNFO0VBQ0UsZUFBQTtBRDhDSjs7QUM1Q0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBRDhDTjs7QUMzQ0k7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FENkNOOztBQ3pDRTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FEMkNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRyZWQ6ICNDMjAwNTY7XHJcbiRibHVlOiAjM2U3ZWY1O1xyXG4kbGlnaHRncmV5OiAjYWZiYWM3O1xyXG4kZGFya2JsdWU6ICMxMDE0MWY7XHJcbiRsaWdodGJsdWU6ICM1ZmE4ZmY7XHJcblxyXG4jYWJvdXR7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzA2MTYyNCwgIzNlMTAyNSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzA2MTYyNCwgIzE1MmU0Yyk7XHJcbiAgY29sb3I6ICRsaWdodGdyZXk7XHJcbn1cclxuXHJcbiNwcm9qZWN0c3tcclxuICBiYWNrZ3JvdW5kOiAjMTUyZTRjO1xyXG4gIGNvbG9yOiAkbGlnaHRncmV5O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xyXG59XHJcblxyXG4ubGlnaHRibHVle1xyXG4gIGNvbG9yOiAkbGlnaHRibHVlO1xyXG59XHJcblxyXG4jY29udGFjdHtcclxuICBiYWNrZ3JvdW5kOiAgIzE1MmU0YztcclxuICBjb2xvcjogJGxpZ2h0Z3JleTtcclxufVxyXG5cclxuaDEsIGgyICwgaDMsIGg0LCBoNSwgaDZ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50ZXh0LWluaGVyaXR7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuIiwiI2Fib3V0IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzA2MTYyNCwgIzNlMTAyNSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwNjE2MjQsICMxNTJlNGMpO1xuICBjb2xvcjogI2FmYmFjNztcbn1cblxuI3Byb2plY3RzIHtcbiAgYmFja2dyb3VuZDogIzE1MmU0YztcbiAgY29sb3I6ICNhZmJhYzc7XG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xufVxuXG4ubGlnaHRibHVlIHtcbiAgY29sb3I6ICM1ZmE4ZmY7XG59XG5cbiNjb250YWN0IHtcbiAgYmFja2dyb3VuZDogIzE1MmU0YztcbiAgY29sb3I6ICNhZmJhYzc7XG59XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRleHQtaW5oZXJpdCB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4uY29udGVudCB7XG4gIC8qIGkge1xuICAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cyBsaW5lYXI7XG4gICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgJjpob3ZlciB7XG4gICAgICAgY29sb3I6ICNmZmY7XG4gICAgIH1cbiAgIH0qL1xufVxuLmNvbnRlbnQgaDEge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jb250ZW50IC5hbmltYXRlZC13b3JkcyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5jb250ZW50IC5hbmltYXRlZC13b3JkcyBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogIzVmYThmZjtcbiAgYW5pbWF0aW9uOiBhbmltYXRlV29yZCA5cyBlYXNlLW91dCBpbmZpbml0ZSAwcztcbn1cbi5jb250ZW50IC5hbmltYXRlZC13b3JkcyBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogM3M7XG59XG4uY29udGVudCAuYW5pbWF0ZWQtd29yZHMgc3BhbjpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IDZzO1xufVxuQGtleWZyYW1lcyBhbmltYXRlV29yZCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDIlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgfVxuICA1JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG4gIDI3JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG4gIDMwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcbiAgfVxuICA4MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLmNvbnRlbnQgLnNraWxsLWNvbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jb250ZW50IC5za2lsbC1jb2wgPiBpIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogODZweDtcbn1cbi5jb250ZW50IC5za2lsbC1jb2wgaDQge1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jb250ZW50IGltZyB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xuICB3aWR0aDogMTAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvY29sb3JzXCI7XHJcblxyXG4uY29udGVudCB7XHJcblxyXG4gIGgxe1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICB9XHJcblxyXG4gIC5hbmltYXRlZC13b3JkcyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgY29sb3I6ICRsaWdodGJsdWU7XHJcbiAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZVdvcmQgOXMgZWFzZS1vdXQgaW5maW5pdGUgMHM7XHJcblxyXG4gICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzcztcclxuICAgICAgfVxyXG4gICAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiA2cztcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGFuaW1hdGVXb3JkIHtcclxuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxyXG4gICAgMiUgeyBvcGFjaXR5OiAwOyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7IH1cclxuICAgIDUlIHsgb3BhY2l0eTogMTsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTt9XHJcbiAgICAyNyUgeyBvcGFjaXR5OiAxOyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XHJcbiAgICAzMCUgeyBvcGFjaXR5OiAwOyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTsgfVxyXG4gICAgODAlIHsgb3BhY2l0eTogMDsgfVxyXG4gICAgMTAwJSB7IG9wYWNpdHk6IDA7IH1cclxuICB9XHJcblxyXG4gIC5za2lsbC1jb2wge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgID4gaSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LXNpemU6IDg2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBmaWx0ZXI6YnJpZ2h0bmVzcygwLjgpO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuXHJcbiAvKiBpIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMTVzIGxpbmVhcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9Ki9cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.skills = [
            {
                icon: 'mdi-codepen',
                title: 'Languages',
                items: ['JavaScript (ES6)', 'TypeScript', 'HTML', '(S)CSS', 'Java', 'PHP', 'R']
            },
            {
                icon: 'mdi-electron-framework',
                title: 'Frameworks',
                items: ['Angular', 'React', 'Bootstrap', 'nodeJS', 'Spring']
            },
            {
                icon: 'mdi-cog-clockwise',
                title: 'Tools',
                items: ['Git/SVN', 'npm', 'gulp', 'gradle', 'nginx', 'Docker', 'AWS']
            }
        ];
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")).default]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#about {\n  background: linear-gradient(to bottom, #061624, #3e1025);\n  background: linear-gradient(to bottom, #061624, #152e4c);\n  color: #afbac7;\n}\n\n#projects {\n  background: #152e4c;\n  color: #afbac7;\n  padding-bottom: 5rem;\n}\n\n.lightblue {\n  color: #5fa8ff;\n}\n\n#contact {\n  background: #152e4c;\n  color: #afbac7;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  color: #fff;\n}\n\n.text-inherit {\n  color: inherit;\n}\n\n.content .mdi-bg {\n  bottom: auto;\n  top: -50vh;\n  right: auto;\n  left: -5vh;\n  transform: rotate(180deg);\n}\n\n.content .contact-sent {\n  min-height: 339px;\n  text-align: center;\n}\n\n.content .contact-form .form__group {\n  position: relative;\n  padding: 15px 0 0;\n  margin-top: 10px;\n}\n\n.content .contact-form .error-msg {\n  color: red;\n}\n\n.content .contact-form .form__field {\n  font-family: inherit;\n  width: 100%;\n  border: 0;\n  border-bottom: 1px solid #afbac7;\n  outline: 0;\n  font-size: 12px;\n  padding: 7px 0;\n  background: transparent;\n  transition: border-color 0.2s;\n  resize: vertical;\n  color: #fff;\n}\n\n.content .contact-form .form__field::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.content .contact-form .form__field::-moz-placeholder {\n  color: transparent;\n}\n\n.content .contact-form .form__field::-ms-input-placeholder {\n  color: transparent;\n}\n\n.content .contact-form .form__field::placeholder {\n  color: transparent;\n}\n\n.content .contact-form .form__field:placeholder-shown ~ .form__label {\n  font-size: 12px;\n  cursor: text;\n  top: 20px;\n}\n\n.content .contact-form label,\n.content .contact-form .form__field:focus ~ .form__label {\n  position: absolute;\n  top: 0;\n  display: block;\n  transition: 0.2s;\n  font-size: 10px;\n}\n\n.content .contact-form .form__field:focus ~ .form__label {\n  color: #5fa8ff;\n}\n\n.content .contact-form .form__field:focus {\n  padding-bottom: 6px;\n  border-bottom: 2px solid #5fa8ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L0M6XFxVc2Vyc1xcZGFuXFxEZXNrdG9wXFxnaXRodWJcXGhvbWVwYWdlLWFuZ3VsYXIvc3JjXFxzdHlsZXNcXGNvbG9ycy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L0M6XFxVc2Vyc1xcZGFuXFxEZXNrdG9wXFxnaXRodWJcXGhvbWVwYWdlLWFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSx3REFBQTtFQUNBLHdEQUFBO0VBQ0EsY0FQVTtBQ0VaOztBRFFBO0VBQ0UsbUJBQUE7RUFDQSxjQVpVO0VBYVYsb0JBQUE7QUNMRjs7QURRQTtFQUNFLGNBZlU7QUNVWjs7QURRQTtFQUNFLG1CQUFBO0VBQ0EsY0F0QlU7QUNpQlo7O0FEUUE7RUFDRSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxjQUFBO0FDTEY7O0FDdEJFO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FEeUJKOztBQ3RCRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUR3Qko7O0FDbkJJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FEcUJOOztBQ2xCSTtFQUNFLFVBQUE7QURvQk47O0FDakJJO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBRG1CTjs7QUNoQkk7RUFDRSxrQkFBQTtBRGtCTjs7QUNuQkk7RUFDRSxrQkFBQTtBRGtCTjs7QUNuQkk7RUFDRSxrQkFBQTtBRGtCTjs7QUNuQkk7RUFDRSxrQkFBQTtBRGtCTjs7QUNmSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBRGlCTjs7QUNkSTs7RUFFRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FEZ0JOOztBQ2JJO0VBQ0UsY0Y1RE07QUMyRVo7O0FDWkk7RUFDRSxtQkFBQTtFQUNBLGdDQUFBO0FEY04iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRyZWQ6ICNDMjAwNTY7XHJcbiRibHVlOiAjM2U3ZWY1O1xyXG4kbGlnaHRncmV5OiAjYWZiYWM3O1xyXG4kZGFya2JsdWU6ICMxMDE0MWY7XHJcbiRsaWdodGJsdWU6ICM1ZmE4ZmY7XHJcblxyXG4jYWJvdXR7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzA2MTYyNCwgIzNlMTAyNSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzA2MTYyNCwgIzE1MmU0Yyk7XHJcbiAgY29sb3I6ICRsaWdodGdyZXk7XHJcbn1cclxuXHJcbiNwcm9qZWN0c3tcclxuICBiYWNrZ3JvdW5kOiAjMTUyZTRjO1xyXG4gIGNvbG9yOiAkbGlnaHRncmV5O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xyXG59XHJcblxyXG4ubGlnaHRibHVle1xyXG4gIGNvbG9yOiAkbGlnaHRibHVlO1xyXG59XHJcblxyXG4jY29udGFjdHtcclxuICBiYWNrZ3JvdW5kOiAgIzE1MmU0YztcclxuICBjb2xvcjogJGxpZ2h0Z3JleTtcclxufVxyXG5cclxuaDEsIGgyICwgaDMsIGg0LCBoNSwgaDZ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50ZXh0LWluaGVyaXR7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuIiwiI2Fib3V0IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzA2MTYyNCwgIzNlMTAyNSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwNjE2MjQsICMxNTJlNGMpO1xuICBjb2xvcjogI2FmYmFjNztcbn1cblxuI3Byb2plY3RzIHtcbiAgYmFja2dyb3VuZDogIzE1MmU0YztcbiAgY29sb3I6ICNhZmJhYzc7XG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xufVxuXG4ubGlnaHRibHVlIHtcbiAgY29sb3I6ICM1ZmE4ZmY7XG59XG5cbiNjb250YWN0IHtcbiAgYmFja2dyb3VuZDogIzE1MmU0YztcbiAgY29sb3I6ICNhZmJhYzc7XG59XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRleHQtaW5oZXJpdCB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4uY29udGVudCAubWRpLWJnIHtcbiAgYm90dG9tOiBhdXRvO1xuICB0b3A6IC01MHZoO1xuICByaWdodDogYXV0bztcbiAgbGVmdDogLTV2aDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5jb250ZW50IC5jb250YWN0LXNlbnQge1xuICBtaW4taGVpZ2h0OiAzMzlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbnQgLmNvbnRhY3QtZm9ybSAuZm9ybV9fZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDE1cHggMCAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmNvbnRlbnQgLmNvbnRhY3QtZm9ybSAuZXJyb3ItbXNnIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5jb250ZW50IC5jb250YWN0LWZvcm0gLmZvcm1fX2ZpZWxkIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWZiYWM3O1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDdweCAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnM7XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNvbnRlbnQgLmNvbnRhY3QtZm9ybSAuZm9ybV9fZmllbGQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmNvbnRlbnQgLmNvbnRhY3QtZm9ybSAuZm9ybV9fZmllbGQ6cGxhY2Vob2xkZXItc2hvd24gfiAuZm9ybV9fbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGN1cnNvcjogdGV4dDtcbiAgdG9wOiAyMHB4O1xufVxuLmNvbnRlbnQgLmNvbnRhY3QtZm9ybSBsYWJlbCxcbi5jb250ZW50IC5jb250YWN0LWZvcm0gLmZvcm1fX2ZpZWxkOmZvY3VzIH4gLmZvcm1fX2xhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uY29udGVudCAuY29udGFjdC1mb3JtIC5mb3JtX19maWVsZDpmb2N1cyB+IC5mb3JtX19sYWJlbCB7XG4gIGNvbG9yOiAjNWZhOGZmO1xufVxuLmNvbnRlbnQgLmNvbnRhY3QtZm9ybSAuZm9ybV9fZmllbGQ6Zm9jdXMge1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYThmZjtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbG9yc1wiO1xyXG5cclxuXHJcbi5jb250ZW50IHtcclxuXHJcbiAgLm1kaS1iZyB7XHJcbiAgICBib3R0b206IGF1dG87XHJcbiAgICB0b3A6IC01MHZoO1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgICBsZWZ0OiAtNXZoO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB9XHJcblxyXG4gIC5jb250YWN0LXNlbnQge1xyXG4gICAgbWluLWhlaWdodDogMzM5cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1mb3JtIHtcclxuXHJcbiAgICAuZm9ybV9fZ3JvdXAge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMCAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5lcnJvci1tc2cge1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtX19maWVsZCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpZ2h0Z3JleTtcclxuICAgICAgb3V0bGluZTogMDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBwYWRkaW5nOiA3cHggMDtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzO1xyXG4gICAgICByZXNpemU6IHZlcnRpY2FsO1xyXG4gICAgICBjb2xvcjojZmZmO1xyXG4gICAgIH1cclxuXHJcbiAgICAuZm9ybV9fZmllbGQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtX19maWVsZDpwbGFjZWhvbGRlci1zaG93bn4uZm9ybV9fbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGN1cnNvcjogdGV4dDtcclxuICAgICAgdG9wOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGxhYmVsLFxyXG4gICAgLmZvcm1fX2ZpZWxkOmZvY3Vzfi5mb3JtX19sYWJlbCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtX19maWVsZDpmb2N1c34uZm9ybV9fbGFiZWwge1xyXG4gICAgICBjb2xvcjogJGxpZ2h0Ymx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybV9fZmllbGQ6Zm9jdXMge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGxpZ2h0Ymx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ContactComponent = /** @class */ (function () {
    function ContactComponent(http) {
        this.http = http;
        this.sent = false;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.submit = function () {
        var _this = this;
        this.errorMsg = '';
        if (!this.name || !this.email || !this.message) {
            this.errorMsg = 'Please enter your name, email and message';
        }
        else if (!this.validateEmail(this.email)) {
            this.errorMsg = 'Please enter a valid email address';
        }
        else {
            this.http.post('http://code-smart.com/mail/contact_me.php', {
                name: this.name,
                email: this.email,
                message: this.message
            })
                .toPromise()
                .then(function () {
                _this.sent = true;
            })
                .catch(function () {
                _this.errorMsg = 'There was an error submitting the form. Please try again later.';
            });
        }
    };
    ContactComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ContactComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")).default]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#about {\n  background: linear-gradient(to bottom, #061624, #3e1025);\n  background: linear-gradient(to bottom, #061624, #152e4c);\n  color: #afbac7;\n}\n\n#projects {\n  background: #152e4c;\n  color: #afbac7;\n  padding-bottom: 5rem;\n}\n\n.lightblue {\n  color: #5fa8ff;\n}\n\n#contact {\n  background: #152e4c;\n  color: #afbac7;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  color: #fff;\n}\n\n.text-inherit {\n  color: inherit;\n}\n\nfooter {\n  background: #10141f;\n  color: #eee;\n}\n\nfooter .overlay {\n  height: 100%;\n  /*background: url(https://i.gifer.com/757H.gif);*/\n  opacity: 0.15;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxkYW5cXERlc2t0b3BcXGdpdGh1YlxcaG9tZXBhZ2UtYW5ndWxhci9zcmNcXHN0eWxlc1xcY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxkYW5cXERlc2t0b3BcXGdpdGh1YlxcaG9tZXBhZ2UtYW5ndWxhci9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSx3REFBQTtFQUNBLHdEQUFBO0VBQ0EsY0FQVTtBQ0VaOztBRFFBO0VBQ0UsbUJBQUE7RUFDQSxjQVpVO0VBYVYsb0JBQUE7QUNMRjs7QURRQTtFQUNFLGNBZlU7QUNVWjs7QURRQTtFQUNFLG1CQUFBO0VBQ0EsY0F0QlU7QUNpQlo7O0FEUUE7RUFDRSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxjQUFBO0FDTEY7O0FDekJBO0VBRUUsbUJGRFM7RUVFVCxXQUFBO0FEMkJGOztBQ3hCRTtFQUNFLFlBQUE7RUFDQSxpREFBQTtFQUNBLGFBQUE7QUQwQkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcmVkOiAjQzIwMDU2O1xyXG4kYmx1ZTogIzNlN2VmNTtcclxuJGxpZ2h0Z3JleTogI2FmYmFjNztcclxuJGRhcmtibHVlOiAjMTAxNDFmO1xyXG4kbGlnaHRibHVlOiAjNWZhOGZmO1xyXG5cclxuI2Fib3V0e1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwNjE2MjQsICMzZTEwMjUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwNjE2MjQsICMxNTJlNGMpO1xyXG4gIGNvbG9yOiAkbGlnaHRncmV5O1xyXG59XHJcblxyXG4jcHJvamVjdHN7XHJcbiAgYmFja2dyb3VuZDogIzE1MmU0YztcclxuICBjb2xvcjogJGxpZ2h0Z3JleTtcclxuICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcclxufVxyXG5cclxuLmxpZ2h0Ymx1ZXtcclxuICBjb2xvcjogJGxpZ2h0Ymx1ZTtcclxufVxyXG5cclxuI2NvbnRhY3R7XHJcbiAgYmFja2dyb3VuZDogICMxNTJlNGM7XHJcbiAgY29sb3I6ICRsaWdodGdyZXk7XHJcbn1cclxuXHJcbmgxLCBoMiAsIGgzLCBoNCwgaDUsIGg2e1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udGV4dC1pbmhlcml0e1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcbiIsIiNhYm91dCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwNjE2MjQsICMzZTEwMjUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDYxNjI0LCAjMTUyZTRjKTtcbiAgY29sb3I6ICNhZmJhYzc7XG59XG5cbiNwcm9qZWN0cyB7XG4gIGJhY2tncm91bmQ6ICMxNTJlNGM7XG4gIGNvbG9yOiAjYWZiYWM3O1xuICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcbn1cblxuLmxpZ2h0Ymx1ZSB7XG4gIGNvbG9yOiAjNWZhOGZmO1xufVxuXG4jY29udGFjdCB7XG4gIGJhY2tncm91bmQ6ICMxNTJlNGM7XG4gIGNvbG9yOiAjYWZiYWM3O1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50ZXh0LWluaGVyaXQge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzEwMTQxZjtcbiAgY29sb3I6ICNlZWU7XG59XG5mb290ZXIgLm92ZXJsYXkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaS5naWZlci5jb20vNzU3SC5naWYpOyovXG4gIG9wYWNpdHk6IDAuMTU7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9jb2xvcnNcIjtcclxuXHJcbmZvb3RlcntcclxuXHJcbiAgYmFja2dyb3VuZDogJGRhcmtibHVlO1xyXG4gIGNvbG9yOiAjZWVlO1xyXG4gIFxyXG5cclxuICAub3ZlcmxheXtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8qYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaS5naWZlci5jb20vNzU3SC5naWYpOyovXHJcbiAgICBvcGFjaXR5OiAwLjE1O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/landing.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#about {\n  background: linear-gradient(to bottom, #061624, #3e1025);\n  background: linear-gradient(to bottom, #061624, #152e4c);\n  color: #afbac7;\n}\n\n#projects {\n  background: #152e4c;\n  color: #afbac7;\n  padding-bottom: 5rem;\n}\n\n.lightblue {\n  color: #5fa8ff;\n}\n\n#contact {\n  background: #152e4c;\n  color: #afbac7;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  color: #fff;\n}\n\n.text-inherit {\n  color: inherit;\n}\n\n@font-face {\n  font-family: \"Indelible\";\n  src: url('Indelible.otf');\n  src: url('Indelible.woff');\n}\n\n.fullscreen {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 102vh;\n}\n\n@-moz-document url-prefix() {\n  .twinkling {\n    display: none;\n  }\n}\n\n.landing-container {\n  background: #000 url('stars.png') repeat top center;\n  background-size: cover;\n  overflow: hidden;\n}\n\n.landing-container .twinkling {\n  background: transparent url('twinkling.png') repeat top center;\n  z-index: 1;\n  -webkit-animation: move-twink-back 300s linear infinite;\n          animation: move-twink-back 300s linear infinite;\n}\n\n@-webkit-keyframes move-twink-back {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: -10000px 5000px;\n  }\n}\n\n@keyframes move-twink-back {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: -10000px 5000px;\n  }\n}\n\n.landing-container .overlay {\n  display: block;\n  background: linear-gradient(to top, #0000002b 25%, #bd1d93 25%, #61348e);\n  opacity: 0.3;\n  z-index: 3;\n}\n\n.landing-container .sun {\n  background: linear-gradient(to bottom, #FFFF05 0%, #FF4700 50%);\n  border-radius: 50%;\n  box-shadow: 0 0 26px 20px rgba(255, 255, 5, 0.5);\n  position: absolute;\n  z-index: 1;\n  height: 36vw;\n  width: 36vw;\n  left: calc(50% - 18vw);\n  top: calc(75% - 36vw);\n}\n\n@media (min-width: 1440px) {\n  .landing-container .sun {\n    height: 520px;\n    width: 520px;\n    left: calc(50% - 260px);\n    top: calc(75% - 520px);\n  }\n}\n\n.landing-container .sun:after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: repeating-linear-gradient(transparent, transparent 2%, #000 2%, #000 4%);\n  opacity: 0.1;\n  border-radius: 50%;\n}\n\n.landing-container .horizon {\n  width: 100%;\n  height: 20vw;\n  background: transparent url('horizon.png') repeat-x bottom center;\n  background-size: contain;\n  position: absolute;\n  bottom: 25%;\n  z-index: 3;\n  max-height: 260px;\n}\n\n.landing-container .glow {\n  height: 25%;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  z-index: 4;\n  box-shadow: 0 0 7vh -1vh #3e7ef5;\n  background: linear-gradient(to bottom, transparent 80%, #061624);\n}\n\n.landing-container .ground {\n  position: absolute;\n  width: 100%;\n  height: 25%;\n  background: black;\n  bottom: 0;\n  z-index: 1;\n}\n\n.landing-container .logo {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  top: 8%;\n  z-index: 13;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n\n@media (max-width: 768px) {\n  .landing-container .logo {\n    transform: scale(0.7);\n    top: 5%;\n  }\n}\n\n@media (min-width: 1921px) {\n  .landing-container .logo {\n    transform: scale(1.4);\n    top: 16%;\n  }\n}\n\n.landing-container .logo h1 {\n  color: #c6cbf5;\n  font-family: \"Orbitron\", sans-serif;\n  font-size: 125px;\n  font-weight: 900;\n  font-style: italic;\n  line-height: 1.2;\n  left: 50%;\n  margin: 0 0 0 -205px;\n  position: absolute;\n  text-transform: uppercase;\n  top: 36px;\n  width: 410px;\n  z-index: 11;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.landing-container .logo h1 .chrome80s {\n  background-image: -webkit-linear-gradient(#010012 25%, #4694c9 45%, #fdf9f7 60%, #010923 69%, #e65555 80%, #ffffff 90%, #0e0500 95%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -webkit-text-stroke-width: 0.05rem;\n  -webkit-text-stroke-color: rgba(0, 0, 0, 0.2);\n  width: 110%;\n}\n\n.landing-container .logo h1 .chrome80s:before {\n  content: attr(data-text);\n  -webkit-filter: url(#bevel);\n          filter: url(#bevel);\n  background: -webkit-linear-gradient(#58bee4 30%, #204a68 60%, #62a7d1 80%) 0% 0% repeat;\n  -webkit-background-clip: text;\n  position: absolute;\n  z-index: -1;\n  width: 110%;\n}\n\n.landing-container .logo h1 .chrome80s:after {\n  content: attr(data-text);\n  position: absolute;\n  text-shadow: 0 0 25px rgba(255, 255, 255, 0.5);\n  transform: translate(-100%);\n  z-index: -2;\n}\n\n.landing-container .logo h2 {\n  color: #cc0000;\n  display: block;\n  width: 100%;\n  position: absolute;\n  text-align: center;\n  z-index: 11;\n  font-family: \"Indelible\", cursive;\n  font-size: 100px;\n  transform: skew(-5deg) rotate(-10deg);\n  text-decoration: none;\n  font-weight: 600;\n  top: 148px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n@media (min-width: 768px) and (min-height: 768px) {\n  .landing-container .logo h2 {\n    color: rgba(204, 0, 0, 0.7);\n    background: #cc0000 -webkit-gradient(linear, left top, right top, from(#cc0000), to(#cc0000), color-stop(0.5, #fff)) 0 0 no-repeat;\n    -webkit-background-size: 300px;\n    -webkit-background-clip: text;\n    -webkit-animation-name: shine;\n    -webkit-animation-duration: 4.5s;\n    -webkit-animation-iteration-count: infinite;\n  }\n}\n\n.landing-container .logo h2 .chrome80s {\n  font-family: \"Commando\", sans-serif;\n  font-size: 8rem;\n  font-weight: 100;\n  position: relative;\n  white-space: nowrap;\n  background-image: linear-gradient(#010012 20%, #4694c9 40%, #fdf9f7 50%, #010923 50%, #d7674f 60%, #ffc2a4 70%, #edb18c 90%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -webkit-text-stroke-width: 0.1rem;\n  -webkit-text-stroke-color: rgba(0, 0, 0, 0.2);\n}\n\n.landing-container .logo h2 .chrome80s:before {\n  content: attr(data-text);\n  -webkit-filter: url(#bevel);\n          filter: url(#bevel);\n  background: linear-gradient(#ffffff 20%, #58bee4 30%, #204a68 50%, #62a7d1 70%, #ffffff 80%) 0% 0% repeat;\n  -webkit-background-clip: text;\n  position: absolute;\n  z-index: -1;\n}\n\n.landing-container .logo h2 .chrome80s:after {\n  content: attr(data-text);\n  position: absolute;\n  text-shadow: 0 0 25px rgba(255, 255, 255, 0.5);\n  transform: translate(-100%);\n  z-index: -2;\n}\n\n@-webkit-keyframes shine {\n  0% {\n    background-position: -200px;\n  }\n  100% {\n    background-position: 150% 0%;\n  }\n}\n\n.landing-container .logo .logo-triangle {\n  -webkit-animation: dash 6s linear forwards;\n          animation: dash 6s linear forwards;\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s;\n  fill: url(#grad1);\n  -webkit-filter: url(#dropshadow);\n          filter: url(#dropshadow);\n  left: 50%;\n  margin-left: -200px;\n  position: relative;\n  stroke-dasharray: 1200;\n  stroke-dashoffset: 1200;\n  top: 48px;\n  z-index: 8;\n}\n\n@-webkit-keyframes dash {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n\n@keyframes dash {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n\n.landing-container .midnightGrid {\n  position: absolute;\n  z-index: 2;\n  top: 75%;\n  width: 100%;\n  height: 100%;\n  transform-origin: 50% 0%;\n  transform: perspective(40vh) rotateX(77deg);\n  overflow-y: hidden;\n}\n\n.landing-container .midnightGrid:after {\n  content: \"\";\n  background: linear-gradient(to top, rgba(0, 50, 100, 0.15) 60%, rgba(28, 126, 224, 0.35) 90%);\n  display: block;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  z-index: 9;\n}\n\n.landing-container .midnightGrid .gridInner {\n  -webkit-animation: animatedGrid 24s linear infinite;\n          animation: animatedGrid 24s linear infinite;\n}\n\n.landing-container .midnightGrid .gridInner .grid-x,\n.landing-container .midnightGrid .gridInner .grid-y {\n  width: 100vh;\n  height: 100vh;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background: repeating-linear-gradient(to top, rgba(62, 126, 245, 0), rgba(62, 126, 245, 0), rgba(62, 126, 245, 0) 2vw, #3e7ef5 2vw, #3e7ef5 2.16vw);\n}\n\n@media screen and (orientation: landscape) {\n  .landing-container .midnightGrid .gridInner .grid-x,\n.landing-container .midnightGrid .gridInner .grid-y {\n    width: 100vw;\n    height: 100vw;\n  }\n}\n\n@media screen and (max-width: 512px) {\n  .landing-container .midnightGrid .gridInner .grid-x,\n.landing-container .midnightGrid .gridInner .grid-y {\n    background: repeating-linear-gradient(to top, rgba(62, 126, 245, 0), rgba(62, 126, 245, 0), rgba(62, 126, 245, 0) 2vh, #3e7ef5 2vh, #3e7ef5 2.16vh);\n  }\n}\n\n.landing-container .midnightGrid .gridInner-2 .grid-x,\n.landing-container .midnightGrid .gridInner-2 .grid-y {\n  bottom: -3px;\n  left: -4px;\n  background: repeating-linear-gradient(to top, rgba(62, 126, 245, 0), rgba(62, 126, 245, 0) 2vw, rgba(62, 126, 245, 0.2) 2vw, rgba(62, 126, 245, 0.4) 2.16vw);\n}\n\n@media screen and (max-width: 512px) {\n  .landing-container .midnightGrid .gridInner-2 .grid-x,\n.landing-container .midnightGrid .gridInner-2 .grid-y {\n    background: repeating-linear-gradient(to top, rgba(62, 126, 245, 0), rgba(62, 126, 245, 0) 2vh, rgba(62, 126, 245, 0.2) 2vh, rgba(62, 126, 245, 0.4) 2.16vh);\n  }\n}\n\n.landing-container .midnightGrid .gridInner .grid-y {\n  transform: rotate(90deg);\n}\n\n@-webkit-keyframes animatedGrid {\n  from {\n    transform: translateY(50vh);\n  }\n  to {\n    transform: translateY(100vh);\n  }\n}\n\n@keyframes animatedGrid {\n  from {\n    transform: translateY(50vh);\n  }\n  to {\n    transform: translateY(100vh);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL0M6XFxVc2Vyc1xcZGFuXFxEZXNrdG9wXFxnaXRodWJcXGhvbWVwYWdlLWFuZ3VsYXIvc3JjXFxzdHlsZXNcXGNvbG9ycy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL0M6XFxVc2Vyc1xcZGFuXFxEZXNrdG9wXFxnaXRodWJcXGhvbWVwYWdlLWFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxhbmRpbmdcXGxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSx3REFBQTtFQUNBLHdEQUFBO0VBQ0EsY0FQVTtBQ0VaOztBRFFBO0VBQ0UsbUJBQUE7RUFDQSxjQVpVO0VBYVYsb0JBQUE7QUNMRjs7QURRQTtFQUNFLGNBZlU7QUNVWjs7QURRQTtFQUNFLG1CQUFBO0VBQ0EsY0F0QlU7QUNpQlo7O0FEUUE7RUFDRSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxjQUFBO0FDTEY7O0FDekJBO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FENEJGOztBQ3pCQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FEMkJGOztBQ3hCQTtFQUNFO0lBQ0UsYUFBQTtFRDJCRjtBQUNGOztBQ3hCQTtFQUNFLG1EQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBRDBCRjs7QUN4QkU7RUFDRSw4REFBQTtFQUNBLFVBQUE7RUFDQSx1REFBQTtVQUFBLCtDQUFBO0FEMEJKOztBQ3ZCRTtFQUNFO0lBQ0Usd0JBQUE7RUR5Qko7RUN0QkU7SUFDRSxvQ0FBQTtFRHdCSjtBQUNGOztBQy9CRTtFQUNFO0lBQ0Usd0JBQUE7RUR5Qko7RUN0QkU7SUFDRSxvQ0FBQTtFRHdCSjtBQUNGOztBQ3JCRTtFQUNFLGNBQUE7RUFDQSx3RUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FEdUJKOztBQ3BCRTtFQUNFLCtEQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBRHNCSjs7QUNwQkk7RUFYRjtJQVlJLGFBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7SUFDQSxzQkFBQTtFRHVCSjtBQUNGOztBQ3JCSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0ZBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUR1Qk47O0FDbkJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpRUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FEcUJKOztBQ2xCRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0VBQUE7QURvQko7O0FDakJFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QURtQko7O0FDaEJFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QURrQko7O0FDaEJJO0VBVkY7SUFXSSxxQkFBQTtJQUNBLE9BQUE7RURtQko7QUFDRjs7QUNqQkk7RUFmRjtJQWdCSSxxQkFBQTtJQUNBLFFBQUE7RURvQko7QUFDRjs7QUNsQkk7RUFDRSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBRG9CTjs7QUNsQk07RUFDRSxvSUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsV0FBQTtBRG9CUjs7QUNsQlE7RUFDRSx3QkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSx1RkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRG9CVjs7QUNqQlE7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QURtQlY7O0FDZEk7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QURnQk47O0FDZE07RUFmRjtJQWdCSSwyQkFBQTtJQUNBLGtJQUFBO0lBQ0EsOEJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsZ0NBQUE7SUFDQSwyQ0FBQTtFRGlCTjtBQUNGOztBQ2ZNO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsNEhBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSw2Q0FBQTtBRGdCUjs7QUNkUTtFQUNFLHdCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlHQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QURnQlY7O0FDYlE7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QURlVjs7QUNWSTtFQUNFO0lBQ0UsMkJBQUE7RURZTjtFQ1RJO0lBQ0UsNEJBQUE7RURXTjtBQUNGOztBQ1JJO0VBQ0UsMENBQUE7VUFBQSxrQ0FBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBRFVOOztBQ1BJO0VBQ0U7SUFDRSxvQkFBQTtFRFNOO0FBQ0Y7O0FDWkk7RUFDRTtJQUNFLG9CQUFBO0VEU047QUFDRjs7QUNMRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBRE9KOztBQ0xJO0VBQ0UsV0FBQTtFQUNBLDZGQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FET047O0FDSkk7RUFDRSxtREFBQTtVQUFBLDJDQUFBO0FETU47O0FDSk07O0VBRUUsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsbUpBQUE7QURNUjs7QUNKUTtFQVRGOztJQVVJLFlBQUE7SUFDQSxhQUFBO0VEUVI7QUFDRjs7QUNOUTtFQWRGOztJQWVJLG1KQUFBO0VEVVI7QUFDRjs7QUNMUTs7RUFFRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDRKQUFBO0FET1Y7O0FDTFU7RUFORjs7SUFPSSw0SkFBQTtFRFNWO0FBQ0Y7O0FDTE07RUFDRSx3QkFBQTtBRE9SOztBQ0ZFO0VBQ0U7SUFDRSwyQkFBQTtFRElKO0VDREU7SUFDRSw0QkFBQTtFREdKO0FBQ0Y7O0FDVkU7RUFDRTtJQUNFLDJCQUFBO0VESUo7RUNERTtJQUNFLDRCQUFBO0VER0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHJlZDogI0MyMDA1NjtcclxuJGJsdWU6ICMzZTdlZjU7XHJcbiRsaWdodGdyZXk6ICNhZmJhYzc7XHJcbiRkYXJrYmx1ZTogIzEwMTQxZjtcclxuJGxpZ2h0Ymx1ZTogIzVmYThmZjtcclxuXHJcbiNhYm91dHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDYxNjI0LCAjM2UxMDI1KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDYxNjI0LCAjMTUyZTRjKTtcclxuICBjb2xvcjogJGxpZ2h0Z3JleTtcclxufVxyXG5cclxuI3Byb2plY3Rze1xyXG4gIGJhY2tncm91bmQ6ICMxNTJlNGM7XHJcbiAgY29sb3I6ICRsaWdodGdyZXk7XHJcbiAgcGFkZGluZy1ib3R0b206IDVyZW07XHJcbn1cclxuXHJcbi5saWdodGJsdWV7XHJcbiAgY29sb3I6ICRsaWdodGJsdWU7XHJcbn1cclxuXHJcbiNjb250YWN0e1xyXG4gIGJhY2tncm91bmQ6ICAjMTUyZTRjO1xyXG4gIGNvbG9yOiAkbGlnaHRncmV5O1xyXG59XHJcblxyXG5oMSwgaDIgLCBoMywgaDQsIGg1LCBoNntcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRleHQtaW5oZXJpdHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG4iLCIjYWJvdXQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDYxNjI0LCAjM2UxMDI1KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzA2MTYyNCwgIzE1MmU0Yyk7XG4gIGNvbG9yOiAjYWZiYWM3O1xufVxuXG4jcHJvamVjdHMge1xuICBiYWNrZ3JvdW5kOiAjMTUyZTRjO1xuICBjb2xvcjogI2FmYmFjNztcbiAgcGFkZGluZy1ib3R0b206IDVyZW07XG59XG5cbi5saWdodGJsdWUge1xuICBjb2xvcjogIzVmYThmZjtcbn1cblxuI2NvbnRhY3Qge1xuICBiYWNrZ3JvdW5kOiAjMTUyZTRjO1xuICBjb2xvcjogI2FmYmFjNztcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udGV4dC1pbmhlcml0IHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJJbmRlbGlibGVcIjtcbiAgc3JjOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL0luZGVsaWJsZS5vdGYpO1xuICBzcmM6IHVybCguLi8uLi8uLi9hc3NldHMvZm9udHMvSW5kZWxpYmxlLndvZmYpO1xufVxuLmZ1bGxzY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAydmg7XG59XG5cbkAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gIC50d2lua2xpbmcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5sYW5kaW5nLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICMwMDAgdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvc3RhcnMucG5nKSByZXBlYXQgdG9wIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5sYW5kaW5nLWNvbnRhaW5lciAudHdpbmtsaW5nIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvdHdpbmtsaW5nLnBuZykgcmVwZWF0IHRvcCBjZW50ZXI7XG4gIHotaW5kZXg6IDE7XG4gIGFuaW1hdGlvbjogbW92ZS10d2luay1iYWNrIDMwMHMgbGluZWFyIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBtb3ZlLXR3aW5rLWJhY2sge1xuICBmcm9tIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gIH1cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMDAwMHB4IDUwMDBweDtcbiAgfVxufVxuLmxhbmRpbmctY29udGFpbmVyIC5vdmVybGF5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwMDAwMDAyYiAyNSUsICNiZDFkOTMgMjUlLCAjNjEzNDhlKTtcbiAgb3BhY2l0eTogMC4zO1xuICB6LWluZGV4OiAzO1xufVxuLmxhbmRpbmctY29udGFpbmVyIC5zdW4ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRkZGRjA1IDAlLCAjRkY0NzAwIDUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAwIDI2cHggMjBweCByZ2JhKDI1NSwgMjU1LCA1LCAwLjUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGhlaWdodDogMzZ2dztcbiAgd2lkdGg6IDM2dnc7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTh2dyk7XG4gIHRvcDogY2FsYyg3NSUgLSAzNnZ3KTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgLmxhbmRpbmctY29udGFpbmVyIC5zdW4ge1xuICAgIGhlaWdodDogNTIwcHg7XG4gICAgd2lkdGg6IDUyMHB4O1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjYwcHgpO1xuICAgIHRvcDogY2FsYyg3NSUgLSA1MjBweCk7XG4gIH1cbn1cbi5sYW5kaW5nLWNvbnRhaW5lciAuc3VuOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCAyJSwgIzAwMCAyJSwgIzAwMCA0JSk7XG4gIG9wYWNpdHk6IDAuMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmxhbmRpbmctY29udGFpbmVyIC5ob3Jpem9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjB2dztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaG9yaXpvbi5wbmcpIHJlcGVhdC14IGJvdHRvbSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDI1JTtcbiAgei1pbmRleDogMztcbiAgbWF4LWhlaWdodDogMjYwcHg7XG59XG4ubGFuZGluZy1jb250YWluZXIgLmdsb3cge1xuICBoZWlnaHQ6IDI1JTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiA0O1xuICBib3gtc2hhZG93OiAwIDAgN3ZoIC0xdmggIzNlN2VmNTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQgODAlLCAjMDYxNjI0KTtcbn1cbi5sYW5kaW5nLWNvbnRhaW5lciAuZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNSU7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG59XG4ubGFuZGluZy1jb250YWluZXIgLmxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDglO1xuICB6LWluZGV4OiAxMztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5sYW5kaW5nLWNvbnRhaW5lciAubG9nbyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICAgIHRvcDogNSU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxOTIxcHgpIHtcbiAgLmxhbmRpbmctY29udGFpbmVyIC5sb2dvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gICAgdG9wOiAxNiU7XG4gIH1cbn1cbi5sYW5kaW5nLWNvbnRhaW5lciAubG9nbyBoMSB7XG4gIGNvbG9yOiAjYzZjYmY1O1xuICBmb250LWZhbWlseTogXCJPcmJpdHJvblwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEyNXB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luOiAwIDAgMCAtMjA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdG9wOiAzNnB4O1xuICB3aWR0aDogNDEwcHg7XG4gIHotaW5kZXg6IDExO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5sYW5kaW5nLWNvbnRhaW5lciAubG9nbyBoMSAuY2hyb21lODBzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIzAxMDAxMiAyNSUsICM0Njk0YzkgNDUlLCAjZmRmOWY3IDYwJSwgIzAxMDkyMyA2OSUsICNlNjU1NTUgODAlLCAjZmZmZmZmIDkwJSwgIzBlMDUwMCA5NSUpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwLjA1cmVtO1xuICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHdpZHRoOiAxMTAlO1xufVxuLmxhbmRpbmctY29udGFpbmVyIC5sb2dvIGgxIC5jaHJvbWU4MHM6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xuICBmaWx0ZXI6IHVybCgjYmV2ZWwpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjNThiZWU0IDMwJSwgIzIwNGE2OCA2MCUsICM2MmE3ZDEgODAlKSAwJSAwJSByZXBlYXQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTEwJTtcbn1cbi5sYW5kaW5nLWNvbnRhaW5lciAubG9nbyBoMSAuY2hyb21lODBzOmFmdGVyIHtcbiAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtc2hhZG93OiAwIDAgMjVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlKTtcbiAgei1pbmRleDogLTI7XG59XG4ubGFuZGluZy1jb250YWluZXIgLmxvZ28gaDIge1xuICBjb2xvcjogI2NjMDAwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMTE7XG4gIGZvbnQtZmFtaWx5OiBcIkluZGVsaWJsZVwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDEwMHB4O1xuICB0cmFuc2Zvcm06IHNrZXcoLTVkZWcpIHJvdGF0ZSgtMTBkZWcpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRvcDogMTQ4cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDc2OHB4KSB7XG4gIC5sYW5kaW5nLWNvbnRhaW5lciAubG9nbyBoMiB7XG4gICAgY29sb3I6IHJnYmEoMjA0LCAwLCAwLCAwLjcpO1xuICAgIGJhY2tncm91bmQ6ICNjYzAwMDAgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oI2NjMDAwMCksIHRvKCNjYzAwMDApLCBjb2xvci1zdG9wKDAuNSwgI2ZmZikpIDAgMCBuby1yZXBlYXQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IDMwMHB4O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNoaW5lO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA0LjVzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIH1cbn1cbi5sYW5kaW5nLWNvbnRhaW5lciAubG9nbyBoMiAuY2hyb21lODBzIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29tbWFuZG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA4cmVtO1xuICBmb250LXdlaWdodDogMTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDEwMDEyIDIwJSwgIzQ2OTRjOSA0MCUsICNmZGY5ZjcgNTAlLCAjMDEwOTIzIDUwJSwgI2Q3Njc0ZiA2MCUsICNmZmMyYTQgNzAlLCAjZWRiMThjIDkwJSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuMXJlbTtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmxhbmRpbmctY29udGFpbmVyIC5sb2dvIGgyIC5jaHJvbWU4MHM6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xuICBmaWx0ZXI6IHVybCgjYmV2ZWwpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZmZmZiAyMCUsICM1OGJlZTQgMzAlLCAjMjA0YTY4IDUwJSwgIzYyYTdkMSA3MCUsICNmZmZmZmYgODAlKSAwJSAwJSByZXBlYXQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xufVxuLmxhbmRpbmctY29udGFpbmVyIC5sb2dvIGgyIC5jaHJvbWU4MHM6YWZ0ZXIge1xuICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1zaGFkb3c6IDAgMCAyNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUpO1xuICB6LWluZGV4OiAtMjtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzaGluZSB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTUwJSAwJTtcbiAgfVxufVxuLmxhbmRpbmctY29udGFpbmVyIC5sb2dvIC5sb2dvLXRyaWFuZ2xlIHtcbiAgYW5pbWF0aW9uOiBkYXNoIDZzIGxpbmVhciBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAzcztcbiAgZmlsbDogdXJsKCNncmFkMSk7XG4gIGZpbHRlcjogdXJsKCNkcm9wc2hhZG93KTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDEyMDA7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAxMjAwO1xuICB0b3A6IDQ4cHg7XG4gIHotaW5kZXg6IDg7XG59XG5Aa2V5ZnJhbWVzIGRhc2gge1xuICB0byB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbn1cbi5sYW5kaW5nLWNvbnRhaW5lciAubWlkbmlnaHRHcmlkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDc1JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwdmgpIHJvdGF0ZVgoNzdkZWcpO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG4ubGFuZGluZy1jb250YWluZXIgLm1pZG5pZ2h0R3JpZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgNTAsIDEwMCwgMC4xNSkgNjAlLCByZ2JhKDI4LCAxMjYsIDIyNCwgMC4zNSkgOTAlKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTtcbn1cbi5sYW5kaW5nLWNvbnRhaW5lciAubWlkbmlnaHRHcmlkIC5ncmlkSW5uZXIge1xuICBhbmltYXRpb246IGFuaW1hdGVkR3JpZCAyNHMgbGluZWFyIGluZmluaXRlO1xufVxuLmxhbmRpbmctY29udGFpbmVyIC5taWRuaWdodEdyaWQgLmdyaWRJbm5lciAuZ3JpZC14LFxuLmxhbmRpbmctY29udGFpbmVyIC5taWRuaWdodEdyaWQgLmdyaWRJbm5lciAuZ3JpZC15IHtcbiAgd2lkdGg6IDEwMHZoO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoNjIsIDEyNiwgMjQ1LCAwKSwgcmdiYSg2MiwgMTI2LCAyNDUsIDApLCByZ2JhKDYyLCAxMjYsIDI0NSwgMCkgMnZ3LCAjM2U3ZWY1IDJ2dywgIzNlN2VmNSAyLjE2dncpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmxhbmRpbmctY29udGFpbmVyIC5taWRuaWdodEdyaWQgLmdyaWRJbm5lciAuZ3JpZC14LFxuLmxhbmRpbmctY29udGFpbmVyIC5taWRuaWdodEdyaWQgLmdyaWRJbm5lciAuZ3JpZC15IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2dztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTEycHgpIHtcbiAgLmxhbmRpbmctY29udGFpbmVyIC5taWRuaWdodEdyaWQgLmdyaWRJbm5lciAuZ3JpZC14LFxuLmxhbmRpbmctY29udGFpbmVyIC5taWRuaWdodEdyaWQgLmdyaWRJbm5lciAuZ3JpZC15IHtcbiAgICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSg2MiwgMTI2LCAyNDUsIDApLCByZ2JhKDYyLCAxMjYsIDI0NSwgMCksIHJnYmEoNjIsIDEyNiwgMjQ1LCAwKSAydmgsICMzZTdlZjUgMnZoLCAjM2U3ZWY1IDIuMTZ2aCk7XG4gIH1cbn1cbi5sYW5kaW5nLWNvbnRhaW5lciAubWlkbmlnaHRHcmlkIC5ncmlkSW5uZXItMiAuZ3JpZC14LFxuLmxhbmRpbmctY29udGFpbmVyIC5taWRuaWdodEdyaWQgLmdyaWRJbm5lci0yIC5ncmlkLXkge1xuICBib3R0b206IC0zcHg7XG4gIGxlZnQ6IC00cHg7XG4gIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDYyLCAxMjYsIDI0NSwgMCksIHJnYmEoNjIsIDEyNiwgMjQ1LCAwKSAydncsIHJnYmEoNjIsIDEyNiwgMjQ1LCAwLjIpIDJ2dywgcmdiYSg2MiwgMTI2LCAyNDUsIDAuNCkgMi4xNnZ3KTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUxMnB4KSB7XG4gIC5sYW5kaW5nLWNvbnRhaW5lciAubWlkbmlnaHRHcmlkIC5ncmlkSW5uZXItMiAuZ3JpZC14LFxuLmxhbmRpbmctY29udGFpbmVyIC5taWRuaWdodEdyaWQgLmdyaWRJbm5lci0yIC5ncmlkLXkge1xuICAgIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDYyLCAxMjYsIDI0NSwgMCksIHJnYmEoNjIsIDEyNiwgMjQ1LCAwKSAydmgsIHJnYmEoNjIsIDEyNiwgMjQ1LCAwLjIpIDJ2aCwgcmdiYSg2MiwgMTI2LCAyNDUsIDAuNCkgMi4xNnZoKTtcbiAgfVxufVxuLmxhbmRpbmctY29udGFpbmVyIC5taWRuaWdodEdyaWQgLmdyaWRJbm5lciAuZ3JpZC15IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuQGtleWZyYW1lcyBhbmltYXRlZEdyaWQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTB2aCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbG9yc1wiO1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdJbmRlbGlibGUnO1xyXG4gIHNyYzogdXJsKC4uLy4uLy4uL2Fzc2V0cy9mb250cy9JbmRlbGlibGUub3RmKTtcclxuICBzcmM6IHVybCguLi8uLi8uLi9hc3NldHMvZm9udHMvSW5kZWxpYmxlLndvZmYpO1xyXG59XHJcblxyXG4uZnVsbHNjcmVlbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMnZoO1xyXG59XHJcblxyXG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xyXG4gIC50d2lua2xpbmcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5sYW5kaW5nLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogIzAwMCB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9zdGFycy5wbmcpIHJlcGVhdCB0b3AgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLnR3aW5rbGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy90d2lua2xpbmcucG5nKSByZXBlYXQgdG9wIGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBhbmltYXRpb246IG1vdmUtdHdpbmstYmFjayAzMDBzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgbW92ZS10d2luay1iYWNrIHtcclxuICAgIGZyb20ge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAwMDBweCA1MDAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAub3ZlcmxheSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwMDAwMDAyYiAyNSUsICNiZDFkOTMgMjUlLCAjNjEzNDhlKTtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgfVxyXG5cclxuICAuc3VuIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRkZGMDUgMCUsICNGRjQ3MDAgNTAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAyNnB4IDIwcHggcmdiYSgyNTUsIDI1NSwgNSwgMC41KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDM2dnc7XHJcbiAgICB3aWR0aDogMzZ2dztcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTh2dyk7XHJcbiAgICB0b3A6IGNhbGMoNzUlIC0gMzZ2dyk7XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gICAgICBoZWlnaHQ6IDUyMHB4O1xyXG4gICAgICB3aWR0aDogNTIwcHg7XHJcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjYwcHgpO1xyXG4gICAgICB0b3A6IGNhbGMoNzUlIC0gNTIwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCAyJSwgIzAwMCAyJSwgIzAwMCA0JSk7XHJcbiAgICAgIG9wYWNpdHk6IDAuMTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhvcml6b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwdnc7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9ob3Jpem9uLnBuZykgcmVwZWF0LXggYm90dG9tIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMjUlO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIG1heC1oZWlnaHQ6IDI2MHB4O1xyXG4gIH1cclxuXHJcbiAgLmdsb3cge1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHotaW5kZXg6IDQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgN3ZoIC0xdmggIzNlN2VmNTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50IDgwJSwgIzA2MTYyNCk7XHJcbiAgfVxyXG5cclxuICAuZ3JvdW5kIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuICAubG9nbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogOCU7XHJcbiAgICB6LWluZGV4OiAxMztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC41cztcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xyXG4gICAgICB0b3A6IDUlO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxOTIxcHgpIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xyXG4gICAgICB0b3A6IDE2JTtcclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIGNvbG9yOiAjYzZjYmY1O1xyXG4gICAgICBmb250LWZhbWlseTogJ09yYml0cm9uJywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zaXplOiAxMjVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIG1hcmdpbjogMCAwIDAgLTIwNXB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIHRvcDogMzZweDtcclxuICAgICAgd2lkdGg6IDQxMHB4O1xyXG4gICAgICB6LWluZGV4OiAxMTtcclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgICAuY2hyb21lODBzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjMDEwMDEyIDI1JSwgIzQ2OTRjOSA0NSUsICNmZGY5ZjcgNjAlLCAjMDEwOTIzIDY5JSwgI2U2NTU1NSA4MCUsICNmZmZmZmYgOTAlLCAjMGUwNTAwIDk1JSk7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuMDVyZW07XHJcbiAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIHdpZHRoOiAxMTAlO1xyXG5cclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XHJcbiAgICAgICAgICBmaWx0ZXI6IHVybCgjYmV2ZWwpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIzU4YmVlNCAzMCUsICMyMDRhNjggNjAlLCAjNjJhN2QxIDgwJSkgMCUgMCUgcmVwZWF0O1xyXG4gICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgIHdpZHRoOiAxMTAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDI1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUpO1xyXG4gICAgICAgICAgei1pbmRleDogLTI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBjb2xvcjogI2NjMDAwMDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkluZGVsaWJsZVwiLCBjdXJzaXZlO1xyXG4gICAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHNrZXcoLTVkZWcpIHJvdGF0ZSgtMTBkZWcpO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHRvcDogMTQ4cHg7XHJcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDc2OHB4KSB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoI2NjMDAwMCwgMC43KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjY2MwMDAwIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCNjYzAwMDApLCB0bygjY2MwMDAwKSwgY29sb3Itc3RvcCgwLjUsICNmZmYpKSAwIDAgbm8tcmVwZWF0O1xyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAzMDBweDtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzaGluZTtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNC41cztcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2hyb21lODBzIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0NvbW1hbmRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDhyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwMTAwMTIgMjAlLCAjNDY5NGM5IDQwJSwgI2ZkZjlmNyA1MCUsICMwMTA5MjMgNTAlLCAjZDc2NzRmIDYwJSwgI2ZmYzJhNCA3MCUsICNlZGIxOGMgOTAlKTtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC4xcmVtO1xyXG4gICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xyXG4gICAgICAgICAgZmlsdGVyOiB1cmwoI2JldmVsKTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZmZmZmIDIwJSwgIzU4YmVlNCAzMCUsICMyMDRhNjggNTAlLCAjNjJhN2QxIDcwJSwgI2ZmZmZmZiA4MCUpIDAlIDAlIHJlcGVhdDtcclxuICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMjVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSk7XHJcbiAgICAgICAgICB6LWluZGV4OiAtMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2hpbmUge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNTAlIDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ28tdHJpYW5nbGUge1xyXG4gICAgICBhbmltYXRpb246IGRhc2ggNnMgbGluZWFyIGZvcndhcmRzO1xyXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDNzO1xyXG4gICAgICBmaWxsOiB1cmwoI2dyYWQxKTtcclxuICAgICAgZmlsdGVyOiB1cmwoI2Ryb3BzaGFkb3cpO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMjAwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMTIwMDtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEyMDA7XHJcbiAgICAgIHRvcDogNDhweDtcclxuICAgICAgei1pbmRleDogODtcclxuICAgIH1cclxuXHJcbiAgICBAa2V5ZnJhbWVzIGRhc2gge1xyXG4gICAgICB0byB7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5taWRuaWdodEdyaWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHRvcDogNzUlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwdmgpIHJvdGF0ZVgoNzdkZWcpO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDUwLCAxMDAsIDAuMTUpIDYwJSwgcmdiYSgyOCwgMTI2LCAyMjQsIDAuMzUpIDkwJSk7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHotaW5kZXg6IDk7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyaWRJbm5lciB7XHJcbiAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZWRHcmlkIDI0cyBsaW5lYXIgaW5maW5pdGU7XHJcblxyXG4gICAgICAuZ3JpZC14LFxyXG4gICAgICAuZ3JpZC15IHtcclxuICAgICAgICB3aWR0aDogMTAwdmg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoJGJsdWUsIDApLCByZ2JhKCRibHVlLCAwKSwgcmdiYSgkYmx1ZSwgMCkgMnZ3LCByZ2JhKCRibHVlLCAxKSAydncsIHJnYmEoJGJsdWUsIDEpIDIuMTZ2dyk7XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjpsYW5kc2NhcGUpIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgIGhlaWdodDogMTAwdnc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MTJweCkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoJGJsdWUsIDApLCByZ2JhKCRibHVlLCAwKSwgcmdiYSgkYmx1ZSwgMCkgMnZoLCByZ2JhKCRibHVlLCAxKSAydmgsIHJnYmEoJGJsdWUsIDEpIDIuMTZ2aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLTIge1xyXG5cclxuICAgICAgICAuZ3JpZC14LFxyXG4gICAgICAgIC5ncmlkLXkge1xyXG4gICAgICAgICAgYm90dG9tOiAtM3B4O1xyXG4gICAgICAgICAgbGVmdDogLTRweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKCRibHVlLCAwKSwgcmdiYSgkYmx1ZSwgMCkgMnZ3LCByZ2JhKCRibHVlLCAwLjIpIDJ2dywgcmdiYSgkYmx1ZSwgMC40KSAyLjE2dncpO1xyXG5cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUxMnB4KSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKCRibHVlLCAwKSwgcmdiYSgkYmx1ZSwgMCkgMnZoLCByZ2JhKCRibHVlLCAwLjIpIDJ2aCwgcmdiYSgkYmx1ZSwgMC40KSAyLjE2dmgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmdyaWQteSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGFuaW1hdGVkR3JpZCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwdmgpXHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpXHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.component.scss */ "./src/app/components/landing/landing.component.scss")).default]
        })
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-menu/nav-menu.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/nav-menu/nav-menu.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#about {\n  background: linear-gradient(to bottom, #061624, #3e1025);\n  background: linear-gradient(to bottom, #061624, #152e4c);\n  color: #afbac7;\n}\n\n#projects {\n  background: #152e4c;\n  color: #afbac7;\n  padding-bottom: 5rem;\n}\n\n.lightblue {\n  color: #5fa8ff;\n}\n\n#contact {\n  background: #152e4c;\n  color: #afbac7;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  color: #fff;\n}\n\n.text-inherit {\n  color: inherit;\n}\n\n.navbar {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 15;\n  transition: 0.2s all ease-in;\n  padding: 0 1rem;\n}\n\n.navbar.filled {\n  background: rgba(4, 8, 20, 0.95);\n}\n\n.navbar .navbar-toggler {\n  padding: 8px 5px 0;\n  font-size: 12px;\n  line-height: 1;\n  background-color: transparent;\n  border: navajowhite;\n  border-radius: 0;\n  width: 3.5em;\n  outline: none !important;\n}\n\n.navbar .nav-item {\n  transition: 0.1s color linear;\n}\n\n.navbar .nav-item:hover {\n  color: #fff;\n}\n\n.navbar .navbar-collapse {\n  transition: 0.2s all ease-in;\n  height: 218px;\n  max-height: 218px;\n}\n\n@media screen and (max-width: 768px) {\n  .navbar .navbar-collapse {\n    overflow: hidden;\n  }\n}\n\n.navbar .navbar-collapse.collapse:not(.show) {\n  max-height: 0;\n  height: 0px;\n  display: block;\n}\n\nspan.code {\n  font-family: \"Orbitron\", sans-serif;\n}\n\n.smart {\n  font-family: \"Indelible\", cursive;\n}\n\n.threebar {\n  position: relative;\n  height: 3em;\n}\n\n.threebar .bar {\n  position: absolute;\n  width: 2em;\n  height: 3px;\n  background: #ccc;\n  top: 1em;\n  transition: all 0.5s ease;\n}\n\n.threebar .bar:nth-child(1) {\n  transform: translateY(-250%);\n}\n\n.threebar .bar:nth-child(3) {\n  transform: translateY(250%);\n}\n\n.threebar.cross .bar:nth-child(1) {\n  transform: rotate(45deg);\n}\n\n.threebar.cross .bar:nth-child(3) {\n  transform: rotate(-45deg);\n}\n\n.threebar.cross .bar:nth-child(2) {\n  opacity: 0;\n}\n\n.threebar:hover .bar {\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtbWVudS9DOlxcVXNlcnNcXGRhblxcRGVza3RvcFxcZ2l0aHViXFxob21lcGFnZS1hbmd1bGFyL3NyY1xcc3R5bGVzXFxjb2xvcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9uYXYtbWVudS9uYXYtbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9uYXYtbWVudS9DOlxcVXNlcnNcXGRhblxcRGVza3RvcFxcZ2l0aHViXFxob21lcGFnZS1hbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXYtbWVudVxcbmF2LW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSx3REFBQTtFQUNBLHdEQUFBO0VBQ0EsY0FQVTtBQ0VaOztBRFFBO0VBQ0UsbUJBQUE7RUFDQSxjQVpVO0VBYVYsb0JBQUE7QUNMRjs7QURRQTtFQUNFLGNBZlU7QUNVWjs7QURRQTtFQUNFLG1CQUFBO0VBQ0EsY0F0QlU7QUNpQlo7O0FEUUE7RUFDRSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxjQUFBO0FDTEY7O0FDMUJBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBRDZCRjs7QUMxQkU7RUFDRSxnQ0FBQTtBRDRCSjs7QUN4QkU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FEMEJKOztBQ3RCRTtFQUNFLDZCQUFBO0FEd0JKOztBQ3ZCSTtFQUNFLFdBQUE7QUR5Qk47O0FDckJFO0VBQ0UsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUR1Qko7O0FDdEJJO0VBSkY7SUFNRSxnQkFBQTtFRHdCRjtBQUNGOztBQ3JCRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0MsY0FBQTtBRHVCTDs7QUNuQkE7RUFDRSxtQ0FBQTtBRHNCRjs7QUNsQkE7RUFDRSxpQ0FBQTtBRHFCRjs7QUNoQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QURtQkY7O0FDakJFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0FEbUJKOztBQ2pCSTtFQUNFLDRCQUFBO0FEbUJOOztBQ2hCSTtFQUNFLDJCQUFBO0FEa0JOOztBQ2JJO0VBQ0Usd0JBQUE7QURlTjs7QUNaSTtFQUNFLHlCQUFBO0FEY047O0FDWEk7RUFDRSxVQUFBO0FEYU47O0FDUkk7RUFDRSxnQkFBQTtBRFVOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXYtbWVudS9uYXYtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRyZWQ6ICNDMjAwNTY7XHJcbiRibHVlOiAjM2U3ZWY1O1xyXG4kbGlnaHRncmV5OiAjYWZiYWM3O1xyXG4kZGFya2JsdWU6ICMxMDE0MWY7XHJcbiRsaWdodGJsdWU6ICM1ZmE4ZmY7XHJcblxyXG4jYWJvdXR7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzA2MTYyNCwgIzNlMTAyNSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzA2MTYyNCwgIzE1MmU0Yyk7XHJcbiAgY29sb3I6ICRsaWdodGdyZXk7XHJcbn1cclxuXHJcbiNwcm9qZWN0c3tcclxuICBiYWNrZ3JvdW5kOiAjMTUyZTRjO1xyXG4gIGNvbG9yOiAkbGlnaHRncmV5O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xyXG59XHJcblxyXG4ubGlnaHRibHVle1xyXG4gIGNvbG9yOiAkbGlnaHRibHVlO1xyXG59XHJcblxyXG4jY29udGFjdHtcclxuICBiYWNrZ3JvdW5kOiAgIzE1MmU0YztcclxuICBjb2xvcjogJGxpZ2h0Z3JleTtcclxufVxyXG5cclxuaDEsIGgyICwgaDMsIGg0LCBoNSwgaDZ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50ZXh0LWluaGVyaXR7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuIiwiI2Fib3V0IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzA2MTYyNCwgIzNlMTAyNSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwNjE2MjQsICMxNTJlNGMpO1xuICBjb2xvcjogI2FmYmFjNztcbn1cblxuI3Byb2plY3RzIHtcbiAgYmFja2dyb3VuZDogIzE1MmU0YztcbiAgY29sb3I6ICNhZmJhYzc7XG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xufVxuXG4ubGlnaHRibHVlIHtcbiAgY29sb3I6ICM1ZmE4ZmY7XG59XG5cbiNjb250YWN0IHtcbiAgYmFja2dyb3VuZDogIzE1MmU0YztcbiAgY29sb3I6ICNhZmJhYzc7XG59XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRleHQtaW5oZXJpdCB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4ubmF2YmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxNTtcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGwgZWFzZS1pbjtcbiAgcGFkZGluZzogMCAxcmVtO1xufVxuLm5hdmJhci5maWxsZWQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQsIDgsIDIwLCAwLjk1KTtcbn1cbi5uYXZiYXIgLm5hdmJhci10b2dnbGVyIHtcbiAgcGFkZGluZzogOHB4IDVweCAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBuYXZham93aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgd2lkdGg6IDMuNWVtO1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG4ubmF2YmFyIC5uYXYtaXRlbSB7XG4gIHRyYW5zaXRpb246IDAuMXMgY29sb3IgbGluZWFyO1xufVxuLm5hdmJhciAubmF2LWl0ZW06aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZSB7XG4gIHRyYW5zaXRpb246IDAuMnMgYWxsIGVhc2UtaW47XG4gIGhlaWdodDogMjE4cHg7XG4gIG1heC1oZWlnaHQ6IDIxOHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG59XG4ubmF2YmFyIC5uYXZiYXItY29sbGFwc2UuY29sbGFwc2U6bm90KC5zaG93KSB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIGhlaWdodDogMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuc3Bhbi5jb2RlIHtcbiAgZm9udC1mYW1pbHk6IFwiT3JiaXRyb25cIiwgc2Fucy1zZXJpZjtcbn1cblxuLnNtYXJ0IHtcbiAgZm9udC1mYW1pbHk6IFwiSW5kZWxpYmxlXCIsIGN1cnNpdmU7XG59XG5cbi50aHJlZWJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAzZW07XG59XG4udGhyZWViYXIgLmJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDJlbTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIHRvcDogMWVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuLnRocmVlYmFyIC5iYXI6bnRoLWNoaWxkKDEpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNTAlKTtcbn1cbi50aHJlZWJhciAuYmFyOm50aC1jaGlsZCgzKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNTAlKTtcbn1cbi50aHJlZWJhci5jcm9zcyAuYmFyOm50aC1jaGlsZCgxKSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi50aHJlZWJhci5jcm9zcyAuYmFyOm50aC1jaGlsZCgzKSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4udGhyZWViYXIuY3Jvc3MgLmJhcjpudGgtY2hpbGQoMikge1xuICBvcGFjaXR5OiAwO1xufVxuLnRocmVlYmFyOmhvdmVyIC5iYXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvY29sb3JzXCI7XHJcbi5uYXZiYXJ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxNTtcclxuICB0cmFuc2l0aW9uOiAuMnMgYWxsIGVhc2UtaW47XHJcbiAgcGFkZGluZzogMCAxcmVtO1xyXG5cclxuXHJcbiAgJi5maWxsZWR7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCMwNDA4MTQsIDAuOTUpO1xyXG4gXHJcbiAgfVxyXG5cclxuICAubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgcGFkZGluZzogOHB4IDVweCAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbmF2YWpvd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgd2lkdGg6IDMuNWVtO1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuICAubmF2LWl0ZW17XHJcbiAgICB0cmFuc2l0aW9uOiAuMXMgY29sb3IgbGluZWFyO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLWNvbGxhcHNle1xyXG4gICAgdHJhbnNpdGlvbjogLjJzIGFsbCBlYXNlLWluO1xyXG4gICAgaGVpZ2h0OiAyMThweDtcclxuICAgIG1heC1oZWlnaHQ6IDIxOHB4O1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAgIFxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5uYXZiYXItY29sbGFwc2UuY29sbGFwc2U6bm90KC5zaG93KSB7XHJcbiAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG5zcGFuLmNvZGV7XHJcbiAgZm9udC1mYW1pbHk6ICdPcmJpdHJvbicsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG4uc21hcnR7XHJcbiAgZm9udC1mYW1pbHk6IFwiSW5kZWxpYmxlXCIsIGN1cnNpdmU7XHJcblxyXG59XHJcblxyXG5cclxuLnRocmVlYmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAzZW07IFxyXG5cclxuICAuYmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyZW07XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICB0b3A6IDFlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcblxyXG4gICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1MCUpO1xyXG4gICAgfVxyXG5cclxuICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1MCUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5jcm9zcyB7XHJcbiAgICAuYmFyOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAuYmFyOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLmJhcjpudGgtY2hpbGQoMikge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICAuYmFyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/nav-menu/nav-menu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-menu/nav-menu.component.ts ***!
  \***********************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var smoothscroll_polyfill_dist_smoothscroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! smoothscroll-polyfill/dist/smoothscroll.js */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill_dist_smoothscroll_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill_dist_smoothscroll_js__WEBPACK_IMPORTED_MODULE_2__);



var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
        var _this = this;
        this.open = false;
        this.filled = false;
        this.scroll = function () {
            _this.filled = window.pageYOffset > window.innerHeight;
        };
        smoothscroll_polyfill_dist_smoothscroll_js__WEBPACK_IMPORTED_MODULE_2___default.a.polyfill();
    }
    NavMenuComponent.prototype.ngOnInit = function () {
        window.addEventListener('scroll', this.scroll, true);
        this.scroll();
    };
    NavMenuComponent.prototype.scrollToElement = function (el) {
        var $element = document.querySelector(el);
        $element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        this.open = false;
    };
    NavMenuComponent.prototype.toggleNav = function () {
        this.open = !this.open;
        this.scroll();
        if (this.open) {
            this.filled = true;
        }
    };
    NavMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-menu',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-menu/nav-menu.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-menu.component.scss */ "./src/app/components/nav-menu/nav-menu.component.scss")).default]
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/projects.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/projects/projects.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#about {\n  background: linear-gradient(to bottom, #061624, #3e1025);\n  background: linear-gradient(to bottom, #061624, #152e4c);\n  color: #afbac7;\n}\n\n#projects {\n  background: #152e4c;\n  color: #afbac7;\n  padding-bottom: 5rem;\n}\n\n.lightblue {\n  color: #5fa8ff;\n}\n\n#contact {\n  background: #152e4c;\n  color: #afbac7;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  color: #fff;\n}\n\n.text-inherit {\n  color: inherit;\n}\n\n.content {\n  background: #10141f;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);\n  z-index: 1;\n}\n\n@media screen and (max-width: 1030px) {\n  .content {\n    margin: 0 15px;\n  }\n}\n\n.content #active-item {\n  transition: 0.2s all ease-out;\n  background: rgba(255, 255, 255, 0.03);\n}\n\n.content #active-item .item-description-container {\n  min-height: 300px;\n}\n\n.content #active-item .item-description {\n  line-height: 1.6;\n  text-align: justify;\n}\n\n.content #active-item .item-badge {\n  border-radius: 2px;\n  background: #416da5;\n  padding: 4px 8px;\n  color: #fff;\n  font-size: 11px;\n}\n\n.content #active-item .item-image-container {\n  min-height: 240px;\n}\n\n.content #active-item .item-image-container .item-image {\n  background-size: cover;\n  background-position: 50% 0%;\n  background-repeat: no-repeat;\n  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.48);\n  border-radius: 2px;\n}\n\n.content #active-item .rightRs,\n.content #active-item .leftRs {\n  top: 230px;\n}\n\n.content .rightRs,\n.content .leftRs {\n  font-size: 42px;\n  width: 42px;\n  height: 42px;\n  line-height: 1;\n  position: absolute;\n  top: 13px;\n  left: -13px;\n}\n\n.content .rightRs {\n  left: auto;\n  right: -13px;\n}\n\n.content ngu-carousel {\n  width: 100%;\n}\n\n.content ngu-carousel .item {\n  padding: 8px 18px 0;\n  cursor: pointer;\n}\n\n.content ngu-carousel .item h5 {\n  color: #fff;\n}\n\n.content ngu-carousel .item .text {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.content ngu-carousel .item .image {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  background-size: cover;\n  background-position: 50% 50%;\n  /*filter: grayscale(1);*/\n  transition: 0s linear;\n  margin-right: 0;\n  margin-left: auto;\n  border: 3px solid #adadad;\n}\n\n.content ngu-carousel .item .image.isActive {\n  -webkit-filter: grayscale(0);\n          filter: grayscale(0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9DOlxcVXNlcnNcXGRhblxcRGVza3RvcFxcZ2l0aHViXFxob21lcGFnZS1hbmd1bGFyL3NyY1xcc3R5bGVzXFxjb2xvcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9DOlxcVXNlcnNcXGRhblxcRGVza3RvcFxcZ2l0aHViXFxob21lcGFnZS1hbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9qZWN0c1xccHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSx3REFBQTtFQUNBLHdEQUFBO0VBQ0EsY0FQVTtBQ0VaOztBRFFBO0VBQ0UsbUJBQUE7RUFDQSxjQVpVO0VBYVYsb0JBQUE7QUNMRjs7QURRQTtFQUNFLGNBZlU7QUNVWjs7QURRQTtFQUNFLG1CQUFBO0VBQ0EsY0F0QlU7QUNpQlo7O0FEUUE7RUFDRSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxjQUFBO0FDTEY7O0FDekJBO0VBQ0UsbUJBQUE7RUFDQSwyRUFBQTtFQUNBLFVBQUE7QUQ0QkY7O0FDMUJFO0VBTEY7SUFNSSxjQUFBO0VENkJGO0FBQ0Y7O0FDMUJFO0VBQ0UsNkJBQUE7RUFDQSxxQ0FBQTtBRDRCSjs7QUN6Qkk7RUFDRSxpQkFBQTtBRDJCTjs7QUN4Qkk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FEMEJOOztBQ3ZCSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FEeUJOOztBQ3RCSTtFQUNFLGlCQUFBO0FEd0JOOztBQ3RCTTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QUR3QlI7O0FDcEJJOztFQUVFLFVBQUE7QURzQk47O0FDakJFOztFQUVFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FEbUJKOztBQ2hCRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FEa0JKOztBQ2ZFO0VBQ0UsV0FBQTtBRGlCSjs7QUNmSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBRGlCTjs7QUNmTTtFQUNFLFdBQUE7QURpQlI7O0FDZE07RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QURnQlI7O0FDYk07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBRGVSOztBQ2JRO0VBQ0UsNEJBQUE7VUFBQSxvQkFBQTtBRGVWIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRyZWQ6ICNDMjAwNTY7XHJcbiRibHVlOiAjM2U3ZWY1O1xyXG4kbGlnaHRncmV5OiAjYWZiYWM3O1xyXG4kZGFya2JsdWU6ICMxMDE0MWY7XHJcbiRsaWdodGJsdWU6ICM1ZmE4ZmY7XHJcblxyXG4jYWJvdXR7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzA2MTYyNCwgIzNlMTAyNSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzA2MTYyNCwgIzE1MmU0Yyk7XHJcbiAgY29sb3I6ICRsaWdodGdyZXk7XHJcbn1cclxuXHJcbiNwcm9qZWN0c3tcclxuICBiYWNrZ3JvdW5kOiAjMTUyZTRjO1xyXG4gIGNvbG9yOiAkbGlnaHRncmV5O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xyXG59XHJcblxyXG4ubGlnaHRibHVle1xyXG4gIGNvbG9yOiAkbGlnaHRibHVlO1xyXG59XHJcblxyXG4jY29udGFjdHtcclxuICBiYWNrZ3JvdW5kOiAgIzE1MmU0YztcclxuICBjb2xvcjogJGxpZ2h0Z3JleTtcclxufVxyXG5cclxuaDEsIGgyICwgaDMsIGg0LCBoNSwgaDZ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50ZXh0LWluaGVyaXR7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuIiwiI2Fib3V0IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzA2MTYyNCwgIzNlMTAyNSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwNjE2MjQsICMxNTJlNGMpO1xuICBjb2xvcjogI2FmYmFjNztcbn1cblxuI3Byb2plY3RzIHtcbiAgYmFja2dyb3VuZDogIzE1MmU0YztcbiAgY29sb3I6ICNhZmJhYzc7XG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xufVxuXG4ubGlnaHRibHVlIHtcbiAgY29sb3I6ICM1ZmE4ZmY7XG59XG5cbiNjb250YWN0IHtcbiAgYmFja2dyb3VuZDogIzE1MmU0YztcbiAgY29sb3I6ICNhZmJhYzc7XG59XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRleHQtaW5oZXJpdCB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4uY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMxMDE0MWY7XG4gIGJveC1zaGFkb3c6IDAgMTlweCAzOHB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAxNXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgei1pbmRleDogMTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMzBweCkge1xuICAuY29udGVudCB7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG4gIH1cbn1cbi5jb250ZW50ICNhY3RpdmUtaXRlbSB7XG4gIHRyYW5zaXRpb246IDAuMnMgYWxsIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpO1xufVxuLmNvbnRlbnQgI2FjdGl2ZS1pdGVtIC5pdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuLmNvbnRlbnQgI2FjdGl2ZS1pdGVtIC5pdGVtLWRlc2NyaXB0aW9uIHtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5jb250ZW50ICNhY3RpdmUtaXRlbSAuaXRlbS1iYWRnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogIzQxNmRhNTtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5jb250ZW50ICNhY3RpdmUtaXRlbSAuaXRlbS1pbWFnZS1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAyNDBweDtcbn1cbi5jb250ZW50ICNhY3RpdmUtaXRlbSAuaXRlbS1pbWFnZS1jb250YWluZXIgLml0ZW0taW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJveC1zaGFkb3c6IDAgMTVweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC40OCk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5jb250ZW50ICNhY3RpdmUtaXRlbSAucmlnaHRScyxcbi5jb250ZW50ICNhY3RpdmUtaXRlbSAubGVmdFJzIHtcbiAgdG9wOiAyMzBweDtcbn1cbi5jb250ZW50IC5yaWdodFJzLFxuLmNvbnRlbnQgLmxlZnRScyB7XG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxM3B4O1xuICBsZWZ0OiAtMTNweDtcbn1cbi5jb250ZW50IC5yaWdodFJzIHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IC0xM3B4O1xufVxuLmNvbnRlbnQgbmd1LWNhcm91c2VsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGVudCBuZ3UtY2Fyb3VzZWwgLml0ZW0ge1xuICBwYWRkaW5nOiA4cHggMThweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGVudCBuZ3UtY2Fyb3VzZWwgLml0ZW0gaDUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jb250ZW50IG5ndS1jYXJvdXNlbCAuaXRlbSAudGV4dCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNvbnRlbnQgbmd1LWNhcm91c2VsIC5pdGVtIC5pbWFnZSB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgLypmaWx0ZXI6IGdyYXlzY2FsZSgxKTsqL1xuICB0cmFuc2l0aW9uOiAwcyBsaW5lYXI7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJvcmRlcjogM3B4IHNvbGlkICNhZGFkYWQ7XG59XG4uY29udGVudCBuZ3UtY2Fyb3VzZWwgLml0ZW0gLmltYWdlLmlzQWN0aXZlIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9jb2xvcnNcIjtcclxuXHJcbi5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiAkZGFya2JsdWU7XHJcbiAgYm94LXNoYWRvdzogMCAxOXB4IDM4cHggcmdiYSgwLCAwLCAwLCAwLjMwKSwgMCAxNXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuICB6LWluZGV4OiAxO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDMwcHgpIHtcclxuICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gIH1cclxuXHJcblxyXG4gICNhY3RpdmUtaXRlbSB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBlYXNlLW91dDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMyk7XHJcblxyXG5cclxuICAgIC5pdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLWRlc2NyaXB0aW9uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbS1iYWRnZSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogIzQxNmRhNTtcclxuICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbS1pbWFnZS1jb250YWluZXIge1xyXG4gICAgICBtaW4taGVpZ2h0OiAyNDBweDtcclxuXHJcbiAgICAgIC5pdGVtLWltYWdlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTVweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC40OCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJpZ2h0UnMsXHJcbiAgICAubGVmdFJzIHtcclxuICAgICAgdG9wOiAyMzBweDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAucmlnaHRScyxcclxuICAubGVmdFJzIHtcclxuICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEzcHg7XHJcbiAgICBsZWZ0OiAtMTNweDtcclxuICB9XHJcblxyXG4gIC5yaWdodFJzIHtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogLTEzcHg7XHJcbiAgfVxyXG5cclxuICBuZ3UtY2Fyb3VzZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLml0ZW0ge1xyXG4gICAgICBwYWRkaW5nOiA4cHggMThweCAwO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICBoNSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50ZXh0IHtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICAgICAgLypmaWx0ZXI6IGdyYXlzY2FsZSgxKTsqL1xyXG4gICAgICAgIHRyYW5zaXRpb246IC4wcyBsaW5lYXI7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNhZGFkYWQ7XHJcblxyXG4gICAgICAgICYuaXNBY3RpdmUge1xyXG4gICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(elRef, cdr) {
        this.elRef = elRef;
        this.cdr = cdr;
        this.carouselConfig = {
            grid: { xs: 2, sm: 2, md: 3, lg: 3, all: 0 },
            load: 6,
            interval: { timing: 9999999, initialDelay: 9999999 },
            loop: true,
            touch: true,
            slide: 1,
            velocity: 0,
            point: {
                visible: true,
                hideOnSingleSlide: true
            }
        };
        this.items = [
            {
                name: 'Neurolympics.nl',
                thumb: 'nl-thumb.jpg',
                img: 'nl.jpg',
                url: 'https://neurolympics.nl/demo',
                badges: ['JavaScript', 'jQuery', 'webGL', 'PixiJS', 'Bootstrap', 'REST Api'],
                description: 'Gamification - The NeurOlympics games measure cognitive abilities in a fun and playful way. ' +
                    'Released by <a href="https://brainsfirst.com/" target="_blank">BrainsFirst </a>' +
                    'the games are used for streamlining recruiting processes by companies such ' +
                    'as McKinsey, Deloitte and LVNL. <br/>The games and UI are mostly written jQuery and use pixiJS for delivering smooth webGL ' +
                    'performance. I\'ve been working as lead-frontend developer on this project for several years together with the ' +
                    'great guys from <a href="http://www.essentialsln.com/" target="_blank">Essential Solutions</a> who took care of the backend development.'
            },
            {
                name: 'IT Consulting',
                thumb: 'mr-thumb.jpg',
                img: 'mr.jpg',
                url: 'https://metallrente.com/aksr',
                badges: ['JavaScript', 'TypeScript', 'Angular', 'Highcharts', 'Java', 'Spring', 'Maven'],
                description: 'Full Stack Development - Angular, Java, Spring. During the last years I have been working in an IT-Consultancy and developing highly-specialized software for the ' +
                    'insurance industry. <br/>Working on the front-, as well as on the backend I have been responsible for all steps in the user-interaction ' +
                    'form data input and validation to calculation using 3rd party software as well as PDF generation. <br/>It was great learning experience ' +
                    'working with complex datasets, server infrastructure and agile software development (Scrum).'
            },
            {
                name: 'FließenConcept Eskuche',
                thumb: 'fce-thumb.jpg',
                img: 'fce.jpg',
                url: 'https://www.fliesenconcept-eskuche.biz/',
                badges: ['Webdesign', 'Bootstrap', 'jQuery', 'Google Maps Api', 'HTML', 'CSS'],
                description: 'Pure HTML website for a local tiler company. My client wanted a plain online representation of his business without ' +
                    'too much user interaction or dynamic content, so we decided to go for a simple one pager.<br/> The site was created within a few days by utilizing ' +
                    'a HTML template based on Twitter Bootstrap and doing some customization.<br/> After we inserted the texts and images describing ' +
                    'his business my client was very happy with his new homepage.'
            },
            {
                name: 'Neurolympics Dashboard',
                thumb: 'nld-thumb.jpg',
                img: 'nld.jpg',
                url: 'https://neurolympics.nl/dashboard',
                badges: ['React', 'webpack', 'Material UI', 'ChartJS', 'SheetJS', 'REST Api'],
                description: 'Data management frontend for the NeurOlympics games. Clients can view the assessment data and contact '
                    + 'potential candidates through this single page application.<br/> Written in React and using Material UI the app provides a smooth look and feel. ' +
                    'ChartJS has been used for data visualization, while SheetJS handles Excel and CSV spreadsheets. Communication with the backend is implemented via REST.'
            },
            {
                name: 'LiBO Chatbot',
                thumb: 'libo-thumb.jpg',
                img: 'libo.jpg',
                url: 'https://kvg.de',
                badges: ['Angular', 'PHP', 'Google Dialogflow', 'NLP', '3rd party Api', 'WebSocket', 'Facebook intergration'],
                description: 'Live Traffic information - LiBO offers life information on public transport routes, arrivals and departure times. Google Dialogflow ' +
                    'is used for natural language processing (NLP). <br/>A WebSocket based backend written in PHP offers live monitoring of chats and the option ' +
                    'for manual answers. LiBO ist intergrated within a Typo3 website via HTML snippet as an angular frontend as well as within a chatbot ' +
                    'within a facebook business page.'
            },
            {
                name: 'aestheticology.net',
                thumb: 'aes-thumb.jpg',
                img: 'aes.jpg',
                url: 'https://aestheticology.net',
                badges: ['Drupal', 'CMS', 'HTML', 'CSS', 'jQuery'],
                description: 'Drupal website - Aestheticology.net is website for UK-based aesthetic Doctor Kam Lally, who offers non-surgical facial ' +
                    'rejuvenation using dermal fillers and anti-wrinkle injections. <br/>I created a custom Drupal website for him based on the desgin of his ' +
                    'already existing print marketing material. The website also incorparates the use of some 3rd party Apis such as Google Maps and Mailchimp.'
            }
        ];
        this.activeItemIndex = 0;
        this.activeItem = this.items[this.activeItemIndex];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent.prototype.ngAfterViewInit = function () {
        this.cdr.detectChanges();
    };
    ProjectsComponent.prototype.selectItem = function (i) {
        var _this = this;
        document.getElementById('active-item').style.opacity = '0';
        setTimeout(function () {
            _this.activeItem = _this.items[i];
            document.getElementById('active-item').style.opacity = '1';
        }, 200);
    };
    ProjectsComponent.prototype.selectNext = function () {
        this.activeItemIndex++;
        if (this.activeItemIndex >= this.items.length) {
            this.activeItemIndex = 0;
        }
        this.selectItem(this.activeItemIndex);
    };
    ProjectsComponent.prototype.selectPrevious = function () {
        this.activeItemIndex--;
        if (this.activeItemIndex <= 0) {
            this.activeItemIndex = this.items.length - 1;
        }
        this.selectItem(this.activeItemIndex);
    };
    ProjectsComponent.prototype.isActive = function (i) {
        return this.items.indexOf(this.activeItem) === i ? 'isActive' : '';
    };
    ProjectsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myCarousel', { static: false })
    ], ProjectsComponent.prototype, "myCarousel", void 0);
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.scss */ "./src/app/components/projects/projects.component.scss")).default]
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dan\Desktop\github\homepage-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map