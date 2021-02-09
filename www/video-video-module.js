(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-video-module"],{

/***/ "./src/app/video/video.module.ts":
/*!***************************************!*\
  !*** ./src/app/video/video.module.ts ***!
  \***************************************/
/*! exports provided: VideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPageModule", function() { return VideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video.page */ "./src/app/video/video.page.ts");







var routes = [
    {
        path: '',
        component: _video_page__WEBPACK_IMPORTED_MODULE_6__["VideoPage"]
    }
];
var VideoPageModule = /** @class */ (function () {
    function VideoPageModule() {
    }
    VideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_video_page__WEBPACK_IMPORTED_MODULE_6__["VideoPage"]]
        })
    ], VideoPageModule);
    return VideoPageModule;
}());



/***/ }),

/***/ "./src/app/video/video.page.html":
/*!***************************************!*\
  !*** ./src/app/video/video.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"head\" text-center>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <img src=\"../assets/img/logo.png\" class=\"logo\" />\n  </ion-toolbar>\n  <ion-title class=\"text\" mode=\"md\">\n    {{ catName | uppercase }}\n  </ion-title>\n</ion-header>\n\n<ion-content class=\"card-background-page\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-slides *ngIf=\"videos\" class=\"slide home_slider\" #Slides_banner [options]=\"SlideOption\" scrollbar=false (ionSlideDidChange)=\"slideChanged($event.target)\" >\n      <ion-slide *ngFor=\"let v of videos; let i=index;\" class=\"slide-height {{ i == 0 ? '' : 'hidden-content'}}\"  data-id=\"{{'slides_'+i}}\" (click)=\"clickFunction(i)\">\n            <img *ngIf=\"v.img_src\" [src]=\"[v.img_src]\" class=\"card-size {{ i == 0 ? '' : 'grey'}}\"   />\n            \n            <div class=\"card-title\">{{v.name}} <br>{{v.desc}}</div>\n        \n            <div *ngIf=\"!v.isFavorite\" class=\"card-star\" (click)=\"addtofav(v.id, i)\">\n              <ion-button class=\"btn-unfav\">\n                <img src=\"../assets/icon/fav-icon.png\" class=\"notFav\" />\n              </ion-button>\n            </div>\n        \n            <div class=\"card-star\">\n              <ion-button *ngIf=\"v.isFavorite\" class=\"btn-fav\" (click)=\"unFav(v.id,i)\">\n                <img src=\"../assets/icon/hand-copy.png\" class=\"fav\" />\n                <!-- {{myimage}}\" (click)=\"addEvent();\" -->\n              </ion-button>\n            </div>\n        \n            <div class=\"card-add\">\n              <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"fab\">\n                <ion-fab-button size=\"small\" class=\"fab\" (click)=\"sharePicker()\">\n                  <!-- <img src=\"../assets/icon/share.png\" class=\"share\" /> -->\n                  <ion-icon name=\"share\" class=\"share\" mode=\"md\"></ion-icon>\n                </ion-fab-button>\n              </ion-fab>\n            </div>\n        \n            <div class=\"card-play\">\n              <ion-button (click)=\"start(v.vid_src)\" fill=\"clear\">\n                <img src=\"../assets/icon/video.png\" class=\"video\" />\n              </ion-button>\n            </div>\n        \n            <div class=\"card-time\">\n              <ion-badge color=\"transparent\">{{v.vidDuration}}</ion-badge>\n            </div>\n      </ion-slide>\n  </ion-slides>\n  <!-- <div *ngIf=\"!videos\" class=\"no_video_div\">\n    <p>No Videos Found.</p>\n  </div> -->\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/video/video.page.scss":
/*!***************************************!*\
  !*** ./src/app/video/video.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no_video_div {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvZmluYWwtZ2hhcnlhbC10di9zcmMvYXBwL3ZpZGVvL3ZpZGVvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlkZW8vdmlkZW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vX3ZpZGVvX2RpdntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/video/video.page.ts":
/*!*************************************!*\
  !*** ./src/app/video/video.page.ts ***!
  \*************************************/
/*! exports provided: VideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPage", function() { return VideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_video_player_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/video-player/ngx */ "./node_modules/@ionic-native/video-player/ngx/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);










var VideoPage = /** @class */ (function () {
    function VideoPage(streamingMedia, route, rest, socialSharing, file, platform, videoPlayer) {
        this.streamingMedia = streamingMedia;
        this.route = route;
        this.rest = rest;
        this.socialSharing = socialSharing;
        this.file = file;
        this.platform = platform;
        this.videoPlayer = videoPlayer;
        this.message = 'Check out the GharyalTV!';
        this.url = 'http://gharyal.com/';
        this.options = {
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
    VideoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.rest.presentLoading();
        this.catId = this.route.snapshot.paramMap.get('id');
        this.catName = this.route.snapshot.paramMap.get('name');
        this.rest.getAllFavoriteFilms().then(function (result) {
            if (result.length == 0) {
                _this.favVideos = null;
            }
            if (result.length > 0) {
                _this.favVideos = result;
            }
        });
        this.rest.get('category/videocat/' + this.catId)
            .subscribe(function (val) {
            if (val.status) {
                if (val.data) {
                    if (_this.favVideos && _this.favVideos.length > 0) {
                        var finalArray = [];
                        var lstData = val.data.map(function (x) { x.isFavorite = false; return x; });
                        var _loop_1 = function (i) {
                            var element = lstData[i];
                            var hasElement = _this.favVideos.find(function (x) { return x == element.id; });
                            if (hasElement) {
                                element.isFavorite = true;
                            }
                            ;
                            finalArray.push(element);
                        };
                        for (var i = 0; i < lstData.length; i++) {
                            _loop_1(i);
                        }
                        ;
                        _this.videos = finalArray;
                    }
                    else {
                        _this.videos = val.data.map(function (x) { x.isFavorite = false; return x; });
                    }
                }
            }
        }, function (err) {
            //this.rest.presentToastWithOptions(err.message);
        });
        this.rest.dismissLoading();
    };
    VideoPage.prototype.start = function (url) {
        if (this.platform.is('android')) {
            this.streamingMedia.playVideo(url, this.options);
        }
        else {
            this.streamingMedia.playVideo(url, this.options);
        }
    };
    VideoPage.prototype.doRefresh = function (event) {
        var _this = this;
        this.rest.get('category/videocat/' + this.catId)
            .subscribe(function (val) {
            if (val.status) {
                if (val.data) {
                    _this.videos = val.data.map(function (x) { x.isFavorite = false; return x; });
                }
            }
            event.target.complete();
        }, function (err) {
            //this.rest.presentToastWithOptions(err.message);
            event.target.complete();
        });
    };
    VideoPage.prototype.shareTwitter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.socialSharing.shareViaTwitter(null, null, this.Url).then(function () {
                }).catch(function (e) {
                });
                return [2 /*return*/];
            });
        });
    };
    VideoPage.prototype.addtofav = function (video, index) {
        var _this = this;
        this.rest.isFavorite(video).then(function (isFav) {
            if (isFav) {
                _this.rest.presentToast('This Video Already Exists in Fav List.');
            }
            else {
                if (index > -1) {
                    _this.videos[index].isFavorite = true;
                }
                _this.rest.favoriteFilm(video).then(function () {
                    _this.rest.presentToast('Added in Fav List.');
                });
            }
        });
    };
    VideoPage.prototype.unFav = function (videoId, index) {
        var _this = this;
        this.rest.unfavoriteFilm(videoId).then(function () {
            _this.rest.getAllFavoriteFilms().then(function (result) {
                if (index > -1) {
                    _this.videos[index].isFavorite = false;
                }
            });
        });
    };
    VideoPage.prototype.sharePicker = function () {
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
    VideoPage.prototype.slideChanged = function (event) {
        var _this = this;
        var index;
        this.slider.getActiveIndex().then(function (val) {
            index = val;
            _this.clickFunction(index + 0);
        });
    };
    VideoPage.prototype.clickFunction = function (ind) {
        jquery__WEBPACK_IMPORTED_MODULE_9___default()('.card-size').addClass('grey');
        jquery__WEBPACK_IMPORTED_MODULE_9___default()('.swiper-slide').addClass('hidden-content');
        jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).find('#slides_' + ind + ' .card-size').removeClass('grey');
        jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).find('#slides_' + ind).removeClass('hidden-content');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Slides_banner'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonSlides"])
    ], VideoPage.prototype, "slider", void 0);
    VideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! ./video.page.html */ "./src/app/video/video.page.html"),
            styles: [__webpack_require__(/*! ./video.page.scss */ "./src/app/video/video.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_4__["StreamingMedia"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
            _ionic_native_video_player_ngx__WEBPACK_IMPORTED_MODULE_8__["VideoPlayer"]])
    ], VideoPage);
    return VideoPage;
}());



/***/ })

}]);
//# sourceMappingURL=video-video-module.js.map