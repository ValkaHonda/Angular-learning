(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div> \r\n    <custom-header class=\"col-sm-12\"></custom-header>\r\n    <article-list (articleEvent)=\"receiveArticle($event)\" [articleContener]=\"articleContener\" class=\"col-sm-2\"></article-list>\r\n    <app-control-menu (backgroundColorEvent)=\"receivebackgroundColorEvent($event)\" (textColorEvent)=\"receiveTextColorEvent($event)\" (textSizeEmiter)=\"receiveSize($event)\" *ngIf=\"show\" class=\"col-sm-10\"></app-control-menu>\r\n    <app-article *ngIf=\"show\" [textSize]=\"textSize\" [textColor]=\"textColor\" [textBackgroundColor]=\"textBackgroundColor\" [currentArticle]=\"currentArticle\" class=\"col-sm-10\"></app-article>\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/data */ "./src/app/data/data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.articleContener = new _data_data__WEBPACK_IMPORTED_MODULE_1__["Data"]();
        this.show = false;
        this.textColor = "black";
        this.textBackgroundColor = "green";
        this.textSize = 30;
    }
    AppComponent.prototype.receiveArticle = function ($event) {
        this.currentArticle = $event;
        this.show = true;
    };
    AppComponent.prototype.receivebackgroundColorEvent = function ($event) {
        if ($event != null) {
            this.textBackgroundColor = $event;
        }
    };
    AppComponent.prototype.receiveTextColorEvent = function ($event) {
        if ($event != null) {
            this.textColor = $event;
        }
    };
    AppComponent.prototype.receiveSize = function ($event) {
        if ($event != null) {
            this.textSize = $event;
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _articleList_articleList_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./articleList/articleList.component */ "./src/app/articleList/articleList.component.ts");
/* harmony import */ var _controls_control_menu_control_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls/control-menu/control-menu.component */ "./src/app/controls/control-menu/control-menu.component.ts");
/* harmony import */ var _article_article_article_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./article/article/article.component */ "./src/app/article/article/article.component.ts");
/* harmony import */ var _controls_control_menu_text_color_text_color_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controls/control-menu/text-color/text-color.component */ "./src/app/controls/control-menu/text-color/text-color.component.ts");
/* harmony import */ var _controls_control_menu_text_background_text_background_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controls/control-menu/text-background/text-background.component */ "./src/app/controls/control-menu/text-background/text-background.component.ts");
/* harmony import */ var _controls_control_menu_text_size_text_size_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controls/control-menu/text-size/text-size.component */ "./src/app/controls/control-menu/text-size/text-size.component.ts");
/* harmony import */ var _article_image_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./article/image/image.component */ "./src/app/article/image/image.component.ts");
/* harmony import */ var _article_title_title_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./article/title/title.component */ "./src/app/article/title/title.component.ts");
/* harmony import */ var _article_text_text_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./article/text/text.component */ "./src/app/article/text/text.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // current progres











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _articleList_articleList_component__WEBPACK_IMPORTED_MODULE_5__["ArtComponent"],
                _controls_control_menu_control_menu_component__WEBPACK_IMPORTED_MODULE_6__["ControlMenuComponent"],
                _article_article_article_component__WEBPACK_IMPORTED_MODULE_7__["ArticleComponent"],
                _controls_control_menu_text_color_text_color_component__WEBPACK_IMPORTED_MODULE_8__["TextColorComponent"],
                _controls_control_menu_text_background_text_background_component__WEBPACK_IMPORTED_MODULE_9__["TextBackgroundComponent"],
                _controls_control_menu_text_size_text_size_component__WEBPACK_IMPORTED_MODULE_10__["TextSizeComponent"],
                _article_image_image_component__WEBPACK_IMPORTED_MODULE_11__["ImageComponent"],
                _article_title_title_component__WEBPACK_IMPORTED_MODULE_12__["TitleComponent"],
                _article_text_text_component__WEBPACK_IMPORTED_MODULE_13__["TextComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"] // current progres
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article/article/article.component.css":
/*!*******************************************************!*\
  !*** ./src/app/article/article/article.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/article/article/article.component.html":
/*!********************************************************!*\
  !*** ./src/app/article/article/article.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-image [currentArticle]=\"currentArticle\" class=\"col-sm-6\"></app-image>\r\n<app-title [currentArticle]=\"currentArticle\" class=\"col-sm-6\"></app-title>\r\n<app-text [textSizeValue]=\"textSize\" [textColor]=\"textColor\" [backgroundColor]=\"textBackgroundColor\" [currentArticle]=\"currentArticle\" class=\"col-sm-12\"></app-text>\r\n"

/***/ }),

/***/ "./src/app/article/article/article.component.ts":
/*!******************************************************!*\
  !*** ./src/app/article/article/article.component.ts ***!
  \******************************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/Article */ "./src/app/data/Article.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleComponent = /** @class */ (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    ArticleComponent.prototype.ngOnChanges = function (changes) {
        if (this.currentArticle != null) {
            this.title = this.currentArticle.title;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _data_Article__WEBPACK_IMPORTED_MODULE_1__["Article"])
    ], ArticleComponent.prototype, "currentArticle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ArticleComponent.prototype, "textColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ArticleComponent.prototype, "textBackgroundColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ArticleComponent.prototype, "textSize", void 0);
    ArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/article/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.css */ "./src/app/article/article/article.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/article/image/image.component.css":
/*!***************************************************!*\
  !*** ./src/app/article/image/image.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/article/image/image.component.html":
/*!****************************************************!*\
  !*** ./src/app/article/image/image.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"{{imgUrl}}\" alt=\"car\" height=\"300\" width=\"400\">\r\n"

/***/ }),

/***/ "./src/app/article/image/image.component.ts":
/*!**************************************************!*\
  !*** ./src/app/article/image/image.component.ts ***!
  \**************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/Article */ "./src/app/data/Article.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageComponent = /** @class */ (function () {
    function ImageComponent() {
    }
    ImageComponent.prototype.ngOnInit = function () {
    };
    ImageComponent.prototype.ngOnChanges = function (changes) {
        if (this.currentArticle != null) {
            this.imgUrl = this.currentArticle.imgUrl;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _data_Article__WEBPACK_IMPORTED_MODULE_1__["Article"])
    ], ImageComponent.prototype, "currentArticle", void 0);
    ImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image',
            template: __webpack_require__(/*! ./image.component.html */ "./src/app/article/image/image.component.html"),
            styles: [__webpack_require__(/*! ./image.component.css */ "./src/app/article/image/image.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageComponent);
    return ImageComponent;
}());



/***/ }),

/***/ "./src/app/article/text/text.component.css":
/*!*************************************************!*\
  !*** ./src/app/article/text/text.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n    text-align: end\r\n}"

/***/ }),

/***/ "./src/app/article/text/text.component.html":
/*!**************************************************!*\
  !*** ./src/app/article/text/text.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p [ngStyle]=\"{'color': textColor, 'font-size': textSize, 'background-color': backgroundColor}\" class=\"h1\">\r\n  {{description}}\r\n</p>\r\n<div>\r\n    <button [attr.disabled]=\"disableFlag ? true : null\" (click)=\"readMore()\" type=\"button\" class=\"btn btn-primary btn-lg\">\r\n      Read more\r\n    </button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/article/text/text.component.ts":
/*!************************************************!*\
  !*** ./src/app/article/text/text.component.ts ***!
  \************************************************/
/*! exports provided: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return TextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/Article */ "./src/app/data/Article.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextComponent = /** @class */ (function () {
    function TextComponent() {
        this.disableFlag = false;
        this.truncateLimit = 250;
        this.backgroundColor = "green";
        this.textColor = "black";
        this.changeTextSize(30, "px"); // Input data
    }
    TextComponent.prototype.ngOnInit = function () {
    };
    TextComponent.prototype.ngOnChanges = function (changes) {
        if (this.currentArticle != null) {
            this.description = this.currentArticle.description.substring(0, this.truncateLimit);
            ;
            if (this.currentArticle.description.length > this.truncateLimit) {
                this.description += '...';
            }
        }
        if (this.textSizeValue != null) {
            this.changeTextSize(this.textSizeValue, "px");
        }
    };
    TextComponent.prototype.readMore = function () {
        this.updateDescriptionSize();
    };
    TextComponent.prototype.updateDescriptionSize = function () {
        if (this.truncateLimit > this.currentArticle.description.length) {
            this.description = this.description.substring(0, this.description.length - 4);
            this.disableFlag = true;
        }
        else {
            this.truncateLimit += 250;
            this.description = this.currentArticle.description.substring(0, this.truncateLimit);
            this.description += '...';
        }
    };
    TextComponent.prototype.disable = function () {
        return this.disableFlag;
    };
    TextComponent.prototype.changeTextSize = function (size, measure) {
        this.textSize = String(size) + measure;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _data_Article__WEBPACK_IMPORTED_MODULE_1__["Article"])
    ], TextComponent.prototype, "currentArticle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TextComponent.prototype, "textColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TextComponent.prototype, "backgroundColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TextComponent.prototype, "textSizeValue", void 0);
    TextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-text',
            template: __webpack_require__(/*! ./text.component.html */ "./src/app/article/text/text.component.html"),
            styles: [__webpack_require__(/*! ./text.component.css */ "./src/app/article/text/text.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TextComponent);
    return TextComponent;
}());



/***/ }),

/***/ "./src/app/article/title/title.component.css":
/*!***************************************************!*\
  !*** ./src/app/article/title/title.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/article/title/title.component.html":
/*!****************************************************!*\
  !*** ./src/app/article/title/title.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n    {{title}}\r\n</h1>\r\n<h2>\r\n  author:\r\n</h2>\r\n<h3>\r\n  {{author}}\r\n</h3>\r\n"

/***/ }),

/***/ "./src/app/article/title/title.component.ts":
/*!**************************************************!*\
  !*** ./src/app/article/title/title.component.ts ***!
  \**************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/Article */ "./src/app/data/Article.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
    }
    TitleComponent.prototype.ngOnInit = function () {
    };
    TitleComponent.prototype.ngOnChanges = function (changes) {
        if (this.currentArticle != null) {
            this.title = this.currentArticle.title;
        }
        if (this.currentArticle != null) {
            this.author = this.currentArticle.author;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _data_Article__WEBPACK_IMPORTED_MODULE_1__["Article"])
    ], TitleComponent.prototype, "currentArticle", void 0);
    TitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title',
            template: __webpack_require__(/*! ./title.component.html */ "./src/app/article/title/title.component.html"),
            styles: [__webpack_require__(/*! ./title.component.css */ "./src/app/article/title/title.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TitleComponent);
    return TitleComponent;
}());



/***/ }),

/***/ "./src/app/articleList/articleList.component.css":
/*!*******************************************************!*\
  !*** ./src/app/articleList/articleList.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n    font-size: 30px;\r\n}\r\nbutton:hover{\r\n    background-color: green;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/articleList/articleList.component.html":
/*!********************************************************!*\
  !*** ./src/app/articleList/articleList.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>    \r\n    <div *ngFor=\"let item of articleContener.items; let myIndex = index\">\r\n        <button type=\"button\" (click)=\"choseArticle(item)\" class=\"btn col-sm-12\">{{item.title}}</button>\r\n    </div> \r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/articleList/articleList.component.ts":
/*!******************************************************!*\
  !*** ./src/app/articleList/articleList.component.ts ***!
  \******************************************************/
/*! exports provided: ArtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtComponent", function() { return ArtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data */ "./src/app/data/data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArtComponent = /** @class */ (function () {
    function ArtComponent() {
        this.articleEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ArtComponent.prototype.choseArticle = function (item) {
        this.chosenArticle = item;
        this.sendArticle();
    };
    ArtComponent.prototype.sendArticle = function () {
        this.articleEvent.emit(this.chosenArticle);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _data_data__WEBPACK_IMPORTED_MODULE_1__["Data"])
    ], ArtComponent.prototype, "articleContener", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ArtComponent.prototype, "articleEvent", void 0);
    ArtComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'article-list',
            template: __webpack_require__(/*! ./articleList.component.html */ "./src/app/articleList/articleList.component.html"),
            styles: [__webpack_require__(/*! ./articleList.component.css */ "./src/app/articleList/articleList.component.css")]
        })
    ], ArtComponent);
    return ArtComponent;
}());



/***/ }),

/***/ "./src/app/controls/control-menu/control-menu.component.css":
/*!******************************************************************!*\
  !*** ./src/app/controls/control-menu/control-menu.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/controls/control-menu/control-menu.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/controls/control-menu/control-menu.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-text-color (textColorEvent)=\"receiveColorEvent($event)\" class=\"col-sm-2 col-sm-offset-2\"></app-text-color>\r\n<app-text-background (backgroundColorEvent)=\"receiveBackgroundColorEvent($event)\" class=\"col-sm-3 col-sm-offset-1\"></app-text-background>\r\n<app-text-size (textSizeEvent)=\"receiveSize($event)\" class=\"col-sm-2\"></app-text-size>\r\n"

/***/ }),

/***/ "./src/app/controls/control-menu/control-menu.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/controls/control-menu/control-menu.component.ts ***!
  \*****************************************************************/
/*! exports provided: ControlMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlMenuComponent", function() { return ControlMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ControlMenuComponent = /** @class */ (function () {
    function ControlMenuComponent() {
        this.textColorEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.backgroundColorEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.textSizeEmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.textColor = "black";
        this.textBackgroundColor = "Green";
    }
    ControlMenuComponent.prototype.ngOnInit = function () {
    };
    ControlMenuComponent.prototype.sendTextColorEvent = function () {
        this.textColorEvent.emit(this.textColor);
    };
    ControlMenuComponent.prototype.receiveColorEvent = function ($event) {
        if ($event != null) {
            this.textColor = $event;
            this.sendTextColorEvent();
        }
    };
    ControlMenuComponent.prototype.sendBackgroundColorEvent = function () {
        this.backgroundColorEvent.emit(this.textBackgroundColor);
    };
    ControlMenuComponent.prototype.receiveBackgroundColorEvent = function ($event) {
        if ($event != null) {
            this.textBackgroundColor = $event;
            this.sendBackgroundColorEvent();
        }
    };
    ControlMenuComponent.prototype.receiveSize = function ($event) {
        if ($event != null) {
            this.textSizeEmiter.emit($event);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ControlMenuComponent.prototype, "textColorEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ControlMenuComponent.prototype, "backgroundColorEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ControlMenuComponent.prototype, "textSizeEmiter", void 0);
    ControlMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-control-menu',
            template: __webpack_require__(/*! ./control-menu.component.html */ "./src/app/controls/control-menu/control-menu.component.html"),
            styles: [__webpack_require__(/*! ./control-menu.component.css */ "./src/app/controls/control-menu/control-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ControlMenuComponent);
    return ControlMenuComponent;
}());



/***/ }),

/***/ "./src/app/controls/control-menu/text-background/text-background.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/controls/control-menu/text-background/text-background.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#green-option{\r\n    background-color: rgb(25, 231, 6);\r\n}\r\n#red-option{\r\n    background-color: red;\r\n}\r\n#blue-option{\r\n    background-color: blue;\r\n}\r\n#black-option{\r\n    background-color: black;\r\n}\r\noption{\r\n    color: yellow;\r\n}\r\nlabel{\r\n    font-size: 25px;\r\n}\r\nselect{\r\n    font-size: 25px; \r\n}\r\noption{\r\n    font-size: 25px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/controls/control-menu/text-background/text-background.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/controls/control-menu/text-background/text-background.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label for=\"select\">background color:</label>\r\n<select (change)=\"getColor($event)\">\r\n    <option id=\"green-option\" value=\"green\">green</option>\r\n    <option id=\"red-option\" value=\"red\">red</option>\r\n    <option id=\"black-option\" value=\"black\">black</option>\r\n    <option id=\"blue-option\" value=\"blue\">blue</option>\r\n</select>"

/***/ }),

/***/ "./src/app/controls/control-menu/text-background/text-background.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/controls/control-menu/text-background/text-background.component.ts ***!
  \************************************************************************************/
/*! exports provided: TextBackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextBackgroundComponent", function() { return TextBackgroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextBackgroundComponent = /** @class */ (function () {
    function TextBackgroundComponent() {
        this.backgroundColorEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TextBackgroundComponent.prototype.ngOnInit = function () {
    };
    TextBackgroundComponent.prototype.getColor = function ($event) {
        if ($event != null) {
            this.chosenColor = $event.target.value;
            this.sendBackgroundColor();
        }
    };
    TextBackgroundComponent.prototype.sendBackgroundColor = function () {
        this.backgroundColorEvent.emit(this.chosenColor);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TextBackgroundComponent.prototype, "backgroundColorEvent", void 0);
    TextBackgroundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-text-background',
            template: __webpack_require__(/*! ./text-background.component.html */ "./src/app/controls/control-menu/text-background/text-background.component.html"),
            styles: [__webpack_require__(/*! ./text-background.component.css */ "./src/app/controls/control-menu/text-background/text-background.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TextBackgroundComponent);
    return TextBackgroundComponent;
}());



/***/ }),

/***/ "./src/app/controls/control-menu/text-color/text-color.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/controls/control-menu/text-color/text-color.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#green-option{\r\n    color: rgb(25, 231, 6);\r\n}\r\n#red-option{\r\n    color: red;\r\n}\r\n#blue-option{\r\n    color: blue;\r\n}\r\n#black-option{\r\n    color: black;\r\n}\r\nlabel{\r\n    font-size: 25px;\r\n}\r\nselect{\r\n    font-size: 25px; \r\n}\r\noption{\r\n    font-size: 25px;\r\n}"

/***/ }),

/***/ "./src/app/controls/control-menu/text-color/text-color.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/controls/control-menu/text-color/text-color.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label for=\"select\">text color:</label>\r\n<select (change)=\"getColor($event)\">\r\n    <option id=\"black-option\" value=\"black\">black</option>\r\n    <option id=\"green-option\" value=\"green\">green</option>\r\n    <option id=\"red-option\" value=\"red\">red</option>\r\n    <option id=\"blue-option\" value=\"blue\">blue</option>\r\n</select>"

/***/ }),

/***/ "./src/app/controls/control-menu/text-color/text-color.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/controls/control-menu/text-color/text-color.component.ts ***!
  \**************************************************************************/
/*! exports provided: TextColorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextColorComponent", function() { return TextColorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextColorComponent = /** @class */ (function () {
    function TextColorComponent() {
        this.textColorEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TextColorComponent.prototype.ngOnInit = function () {
    };
    TextColorComponent.prototype.getColor = function ($event) {
        this.chosenColor = $event.target.value;
        this.sendTextColor();
    };
    TextColorComponent.prototype.sendTextColor = function () {
        this.textColorEvent.emit(this.chosenColor);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TextColorComponent.prototype, "textColorEvent", void 0);
    TextColorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-text-color',
            template: __webpack_require__(/*! ./text-color.component.html */ "./src/app/controls/control-menu/text-color/text-color.component.html"),
            styles: [__webpack_require__(/*! ./text-color.component.css */ "./src/app/controls/control-menu/text-color/text-color.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TextColorComponent);
    return TextColorComponent;
}());



/***/ }),

/***/ "./src/app/controls/control-menu/text-size/text-size.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/controls/control-menu/text-size/text-size.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/controls/control-menu/text-size/text-size.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/controls/control-menu/text-size/text-size.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img (click)=\"increaseTextSize()\" src=\"http://pluspng.com/img-png/a-plus-logo-vector-png-free-vector-plus-icon-png-560.png\" alt=\"plus symbol\" height=\"80\" width=\"80\">\r\n<img (click)=\"decreaseTextSize()\" src=\"https://stickeroid.com/uploads/pic/full-pngimg/09a1bf81499e7db8a7a33d7c040650126f426d62.png\" alt=\"minus symbol\" height=\"42\" width=\"42\">"

/***/ }),

/***/ "./src/app/controls/control-menu/text-size/text-size.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/controls/control-menu/text-size/text-size.component.ts ***!
  \************************************************************************/
/*! exports provided: TextSizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextSizeComponent", function() { return TextSizeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextSizeComponent = /** @class */ (function () {
    function TextSizeComponent() {
        this.textSizeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.textSize = 30;
        this.sendTextSize();
    }
    TextSizeComponent.prototype.ngOnInit = function () {
    };
    TextSizeComponent.prototype.increaseTextSize = function () {
        this.textSize++;
        this.sendTextSize();
    };
    TextSizeComponent.prototype.decreaseTextSize = function () {
        this.textSize--;
        this.sendTextSize();
    };
    TextSizeComponent.prototype.sendTextSize = function () {
        this.textSizeEvent.emit(this.textSize);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TextSizeComponent.prototype, "textSizeEvent", void 0);
    TextSizeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-text-size',
            template: __webpack_require__(/*! ./text-size.component.html */ "./src/app/controls/control-menu/text-size/text-size.component.html"),
            styles: [__webpack_require__(/*! ./text-size.component.css */ "./src/app/controls/control-menu/text-size/text-size.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TextSizeComponent);
    return TextSizeComponent;
}());



/***/ }),

/***/ "./src/app/data/Article.ts":
/*!*********************************!*\
  !*** ./src/app/data/Article.ts ***!
  \*********************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
var Article = /** @class */ (function () {
    function Article(title, description, author, imgUrl) {
        this.title = title;
        this.description = description;
        this.author = author;
        this.imgUrl = imgUrl;
    }
    return Article;
}());



/***/ }),

/***/ "./src/app/data/data.ts":
/*!******************************!*\
  !*** ./src/app/data/data.ts ***!
  \******************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article */ "./src/app/data/Article.ts");

var Data = /** @class */ (function () {
    function Data() {
        this.items = [
            new _Article__WEBPACK_IMPORTED_MODULE_0__["Article"]('Honda', "Honda Motor Company, Ltd. (Japanese: \u672C\u7530\u6280\u7814\u5DE5\u696D\u682A\u5F0F\u4F1A\u793E Hepburn: Honda Giken K\u014Dgy\u014D KK, IPA: [honda] (About this sound listen); /\u02C8h\u0252nd\u0259/) is a Japanese public multinational conglomerate corporation primarily known as a manufacturer of automobiles, aircraft, motorcycles, and power equipment.\n\n            Honda has been the world's largest motorcycle manufacturer since 1959,[2][3] as well as the world's largest manufacturer of internal combustion engines measured by volume, producing more than 14 million internal combustion engines each year.[4] Honda became the second-largest Japanese automobile manufacturer in 2001.[5][6] Honda was the eighth largest automobile manufacturer in the world behind Toyota, Volkswagen Group, Hyundai Motor Group, General Motors, Ford, Nissan, and Fiat Chrysler Automobiles in 2015.[7]\n            \n            Honda was the first Japanese automobile manufacturer to release a dedicated luxury brand, Acura, in 1986. Aside from their core automobile and motorcycle businesses, Honda also manufactures garden equipment, marine engines, personal watercraft and power generators, and other products. Since 1986, Honda has been involved with artificial intelligence/robotics research and released their ASIMO robot in 2000. They have also ventured into aerospace with the establishment of GE Honda Aero Engines in 2004 and the Honda HA-420 HondaJet, which began production in 2012. Honda has three joint-ventures in China (Honda China, Dongfeng Honda, and Guangqi Honda).\n            \n            In 2013, Honda invested about 5.7% (US$6.8 billion) of its revenues in research and development.[8] Also in 2013, Honda became the first Japanese automaker to be a net exporter from the United States, exporting 108,705 Honda and Acura models, while importing only 88,357", 'Valka', 'https://cars.honda.bg/wp-content/uploads/sites/2/2015/04/civics.png'),
            new _Article__WEBPACK_IMPORTED_MODULE_0__["Article"]('VW', 'It is nicer car', 'Ivan', 'http://www.pngmart.com/files/1/Volkswagen-PNG-Picture.png'),
            new _Article__WEBPACK_IMPORTED_MODULE_0__["Article"]('Lada', 'This is car from Russia', 'Valka', 'https://cliki.cityliferpg.com/images/5/53/Red_Lada.png'),
            new _Article__WEBPACK_IMPORTED_MODULE_0__["Article"]('BMW', 'This is a car for diferent type of people', 'Phil', 'http://pngimg.com/uploads/bmw/bmw_PNG1710.png'),
            new _Article__WEBPACK_IMPORTED_MODULE_0__["Article"]('Toyota', 'Very realable car', 'Martin', 'http://www.pngmart.com/files/1/Toyota-PNG-Image.png'),
            new _Article__WEBPACK_IMPORTED_MODULE_0__["Article"]('Ford', 'American peace of nothing', 'Nikola', 'http://pngimg.com/uploads/ford/ford_PNG12207.png'),
            new _Article__WEBPACK_IMPORTED_MODULE_0__["Article"]('Subaru', 'Very capable car!', 'Elly', 'data:image/jpeg;base64,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'),
        ];
    }
    return Data;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{headerTitle}}</h1>  \r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.headerTitle = "Articles";
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lenny\Documents\Lenny\projects\js\Angular\Angular-learning\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map