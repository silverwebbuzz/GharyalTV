(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorites-favorites-module"],{

/***/ "./src/app/favorites/favorites.module.ts":
/*!***********************************************!*\
  !*** ./src/app/favorites/favorites.module.ts ***!
  \***********************************************/
/*! exports provided: FavoritesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageModule", function() { return FavoritesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favorites.page */ "./src/app/favorites/favorites.page.ts");







var routes = [
    {
        path: '',
        component: _favorites_page__WEBPACK_IMPORTED_MODULE_6__["FavoritesPage"]
    }
];
var FavoritesPageModule = /** @class */ (function () {
    function FavoritesPageModule() {
    }
    FavoritesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_6__["FavoritesPage"]]
        })
    ], FavoritesPageModule);
    return FavoritesPageModule;
}());



/***/ }),

/***/ "./src/app/favorites/favorites.page.html":
/*!***********************************************!*\
  !*** ./src/app/favorites/favorites.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"head\" text-center>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <img src=\"../assets/img/logo.png\" class=\"logo\" />\n  </ion-toolbar>\n  <ion-title class=\"text\">\n    <img src=\"../assets/icon/hand-copy.png\" style=\"height:20px;\" />\n    FAVORITES\n  </ion-title>\n</ion-header>\n\n<ion-content class=\"card-background-page\">\n  <ion-slides *ngIf=\"videos\" class=\"slide home_slider\" #Slides_banner [options]=\"SlideOption\" scrollbar=false\n    (ionSlideDidChange)=\"slideChanged($event.target)\">\n    <ion-slide *ngFor=\"let v of videos; let i=index;\" class=\"slide-height {{ i == 0 ? '' : 'hidden-content'}}\"\n      data-id=\"{{'slides_'+i}}\" (click)=\"clickFunction(i)\">\n      <img *ngIf=\"v.img_src\" [src]=\"[v.img_src]\" class=\"card-size {{ i == 0 ? '' : 'grey'}}\" />\n\n      <div class=\"card-title\">{{v.name}} <br>{{v.desc}}</div>\n\n      <div class=\"card-star\">\n        <ion-button class=\"btn-fav\" (click)=\"unFav(v.id)\">\n          <img src=\"../assets/icon/hand-copy.png\" class=\"fav\" />\n          <!-- {{myimage}}\" (click)=\"addEvent();\" -->\n        </ion-button>\n      </div>\n\n      <div class=\"card-add\">\n        <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"fab\">\n          <ion-fab-button size=\"small\" class=\"fab\" (click)=\"sharePicker()\">\n            <!-- <img src=\"../assets/icon/share.png\" class=\"share\" /> -->\n            <ion-icon name=\"share\" class=\"share\" mode=\"md\"></ion-icon>\n          </ion-fab-button>\n        </ion-fab>\n      </div>\n\n      <div class=\"card-play\">\n        <ion-button (click)=\"start(v.vid_src)\" fill=\"clear\">\n          <img src=\"../assets/icon/video.png\" class=\"video\" />\n        </ion-button>\n      </div>\n\n      <div class=\"card-time\">\n        <ion-badge color=\"transparent\">{{v.vidDuration}}</ion-badge>\n      </div>\n    </ion-slide>\n\n  </ion-slides>\n  <div *ngIf=\"!videos\" class=\"no_video_div\">\n    <p>No Videos Found.</p>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/favorites/favorites.page.scss":
/*!***********************************************!*\
  !*** ./src/app/favorites/favorites.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hand {\n  height: 20px;\n  width: 15px; }\n\n.no_video_div {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZmluYWwtZ2hhcnlhbC10di9zcmMvYXBwL2Zhdm9yaXRlcy9mYXZvcml0ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmF2b3JpdGVzL2Zhdm9yaXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFuZHtcclxuICAgIGhlaWdodDoyMHB4OyBcclxuICAgIHdpZHRoOiAxNXB4O1xyXG59XHJcblxyXG4ubm9fdmlkZW9fZGl2e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/favorites/favorites.page.ts":
/*!*********************************************!*\
  !*** ./src/app/favorites/favorites.page.ts ***!
  \*********************************************/
/*! exports provided: FavoritesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPage", function() { return FavoritesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/ngx/index.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_video_player_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/video-player/ngx */ "./node_modules/@ionic-native/video-player/ngx/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);








var FavoritesPage = /** @class */ (function () {
    function FavoritesPage(streamingMedia, rest, platform, socialSharing, videoPlayer) {
        this.streamingMedia = streamingMedia;
        this.rest = rest;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.videoPlayer = videoPlayer;
        this.message = 'Check out the GharyalTV!';
        this.url = 'http://gharyal.com/';
        this.isFavorite = false;
        this.options = {
            successCallback: function () { console.log('Video played'); },
            errorCallback: function (err) { console.log(err); },
            orientation: 'portrait|landscape',
            shouldAutoClose: true,
            controls: false,
        };
        this.SlideOption = {
            loop: false,
            centeredSlides: false,
            slidesPerView: 3,
            direction: 'vertical',
            speed: 100,
            pager: false,
            initialSlide: 0,
            zoom: false,
            freeMode: true,
            spaceBetween: 0
        };
    }
    FavoritesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.rest.presentLoading();
        this.rest.getAllFavoriteFilms().then(function (result) {
            _this.rest.dismissLoading();
            if (result.length > 0) {
                _this.rest.get('category/allvideo')
                    .subscribe(function (val) {
                    _this.rest.dismissLoading();
                    if (val.status) {
                        if (val.data) {
                            var lstData = val.data.filter(function (x) {
                                return this.indexOf(x.id) != -1;
                            }, result.map(function (x) { return x; }));
                            _this.videos = lstData;
                        }
                    }
                }, function (err) {
                    _this.rest.presentToastWithOptions(err.message);
                });
            }
            else {
                //this.rest.presentToastWithOptions('We Are not Fav list Found.');
            }
        });
    };
    FavoritesPage.prototype.start = function (url) {
        if (this.platform.is('android')) {
            this.streamingMedia.playVideo(url, this.options);
        }
        else {
            this.streamingMedia.playVideo(url, this.options);
        }
    };
    FavoritesPage.prototype.unFav = function (videoId) {
        var _this = this;
        this.rest.unfavoriteFilm(videoId).then(function () {
            _this.rest.getAllFavoriteFilms().then(function (result) {
                if (result.length == 0) {
                    _this.videos = null;
                }
                if (result.length > 0) {
                    _this.rest.get('category/allvideo')
                        .subscribe(function (val) {
                        if (val.status) {
                            if (val.data) {
                                var lstData = val.data.filter(function (x) {
                                    return this.indexOf(x.id) != -1;
                                }, result.map(function (x) { return x; }));
                                _this.videos = lstData;
                            }
                        }
                    }, function (err) {
                        _this.rest.presentToastWithOptions(err.message);
                    });
                }
                else {
                    //this.rest.presentToastWithOptions('We Are not Fav list Found.');
                }
            });
        });
    };
    FavoritesPage.prototype.sharePicker = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.platform.ready()
                    .then(function () {
                    _this.socialSharing.share(_this.message, null, null, _this.url)
                        .then(function (data) {
                        console.log('Shared via SharePicker');
                    })
                        .catch(function (err) {
                        console.log('Was not shared via SharePicker');
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    FavoritesPage.prototype.slideChanged = function (event) {
        var _this = this;
        var index;
        this.slider.getActiveIndex().then(function (val) {
            index = val;
            _this.clickFunction(index + 0);
        });
    };
    FavoritesPage.prototype.clickFunction = function (ind) {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('.card-size').addClass('grey');
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('.swiper-slide').addClass('hidden-content');
        jquery__WEBPACK_IMPORTED_MODULE_7___default()(document).find('#slides_' + ind + ' .card-size').removeClass('grey');
        jquery__WEBPACK_IMPORTED_MODULE_7___default()(document).find('#slides_' + ind).removeClass('hidden-content');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Slides_banner'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])
    ], FavoritesPage.prototype, "slider", void 0);
    FavoritesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! ./favorites.page.html */ "./src/app/favorites/favorites.page.html"),
            styles: [__webpack_require__(/*! ./favorites.page.scss */ "./src/app/favorites/favorites.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_2__["StreamingMedia"], _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"],
            _ionic_native_video_player_ngx__WEBPACK_IMPORTED_MODULE_6__["VideoPlayer"]])
    ], FavoritesPage);
    return FavoritesPage;
}());



/***/ })

}]);
//# sourceMappingURL=favorites-favorites-module.js.map