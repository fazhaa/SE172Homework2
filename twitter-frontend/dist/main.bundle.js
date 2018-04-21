webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div >\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n</div>\n<div >\n  <ul>\n    <mz-card class=\"blue-grey darken-1 black-text center-align\" [hoverable]=\"true\">\n      <mz-card-title>\n        Search Tweets\n      </mz-card-title>\n      <mz-card-content class=\"card-content\">\n        <input type=\"text\" name=\"searchInput\" [(ngModel)]=\"searchVal\"/>\n        <button (click)=\"getSearch()\" type=\"submit\" >Search</button>\n      </mz-card-content>\n    </mz-card>\n    <li>\n      <h2><button (click)=\"getHomeTimeline()\">get/home_timeline</button></h2>\n    </li>\n    <mz-card *ngIf=\"userPage\"  class=\"blue-grey darken-1 white-text\" [hoverable]=\"true\">\n      <mz-card-title>\n        {{userInfo.name}}\n        <i mz-icon-mdi\n          title=\"{{userInfo.following ? 'Unfollow' : 'Follow'}}\"\n          (click)=\"toggleFollow(userInfo)\"\n          [align]=\"'right'\"\n          [icon]=\"userInfo.following ? 'account-multiple-minus' : 'account-multiple-plus'\">\n        </i>\n      </mz-card-title>\n      <mz-card-content class=\"card-content\">\n        <p>\n          Followers: {{userInfo.followers_count}}\n          <i mz-icon-mdi\n              [align]=\"'right'\"\n              [icon]=\"'account-multiple-outline'\">\n            </i>\n        </p>\n        <p>\n          {{userInfo.description}}\n        </p>\n        <img src=\"{{userInfo.profile_background_image_url_https}}\">\n      </mz-card-content>\n    </mz-card>\n    <mz-card *ngFor=\"let result of results; let i = index\"\n      class=\"blue-grey darken-1 white-text\" [hoverable]=\"true\">\n        <mz-card-title>\n          <p>\n            <span (click)=\"getUserInfo(result.user.id_str)\">\n              @{{result.user.name}} - {{result.created_at | date:'medium'}}\n            </span>\n            \n            <i mz-icon-mdi\n              (click)=\"toggleFavorite(result)\"\n              [align]=\"'right'\"\n              [icon]=\"result.favorited ? 'star' : 'star-outline'\"\n              [size]=\"'medium'\">\n            </i>\n          </p>\n        </mz-card-title>\n        <mz-card-content class=\"card-content\">\n          <i mz-icon-mdi\n            title=\"{{result.retweeted ? 'Undo Retweet' : 'Retweet'}}\"\n            (click)=\"toggleRetweet(result)\"\n            [align]=\"'left'\"\n            [icon]=\"result.retweeted ? 'account-multiple' : 'account-multiple-outline'\">\n          </i>\n          <p>\n            {{result.full_text ? result.full_text : result.text}}\n          </p>\n          <img *ngIf=\"result.entities.media && result.entities.media.length\" \n            src=\"{{result.entities.media[0].media_url}}\">\n        </mz-card-content>\n    </mz-card>\n  </ul>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'Twitter Test App';
        this.results = [];
        this.searchVal = "";
        this.userPage = false;
        this.userInfo = {};
    }
    AppComponent.prototype.getHomeTimeline = function () {
        var _this = this;
        this.http.get('http://localhost:3000/api/home')
            .subscribe(function (data) {
            console.log(data['data']);
            _this.results = data['data'];
            _this.userPage = false;
        });
    };
    AppComponent.prototype.getSearch = function () {
        var _this = this;
        console.log(this.searchVal);
        this.http.post('http://localhost:3000/api/search', { "qString": this.searchVal })
            .subscribe(function (data) {
            console.log(data['data']);
            _this.results = data['data']['statuses'];
            _this.userPage = false;
        });
    };
    AppComponent.prototype.toggleFavorite = function (result) {
        var _this = this;
        console.log(result['id']);
        console.log(result['favorited']);
        result['favorited'] = !result['favorited'];
        this.http.post('http://localhost:3000/api/favorite', { state: result['favorited'], id: result['id_str'] })
            .subscribe(function (data) {
            console.log(data);
            result = data['data'];
            _this.userPage = false;
        });
    };
    AppComponent.prototype.toggleRetweet = function (result) {
        var _this = this;
        result['retweeted'] = !result['retweeted'];
        this.http.post('http://localhost:3000/api/retweet', { state: result['retweeted'], id: result['id_str'] })
            .subscribe(function (data) {
            console.log(data);
            result = data['data'];
            _this.userPage = false;
        });
    };
    AppComponent.prototype.getUserInfo = function (userID) {
        var _this = this;
        console.log(userID);
        this.http.post('http://localhost:3000/api/user/show', { user_id: userID })
            .subscribe(function (data) {
            console.log(data['data']);
            _this.results = [];
            _this.userInfo = data['data'];
            _this.userPage = true;
        });
    };
    AppComponent.prototype.toggleFollow = function (userInfo) {
        var _this = this;
        userInfo['following'] = !userInfo['following'];
        this.http.post('http://localhost:3000/api/user/follow', { user_id: userInfo['id_str'], state: userInfo['following'] })
            .subscribe(function (data) {
            console.log(data['data']);
            if (data['data']) {
                data['data']['following'] = userInfo['following'];
            }
            _this.userInfo = data['data'];
            _this.userPage = true;
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_materialize__ = __webpack_require__("./node_modules/ng2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_materialize__["MzCardModule"],
                __WEBPACK_IMPORTED_MODULE_4_ng2_materialize__["MzIconModule"],
                __WEBPACK_IMPORTED_MODULE_4_ng2_materialize__["MzIconMdiModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map