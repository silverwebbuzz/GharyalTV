(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{oLyD:function(l,n,t){"use strict";t.r(n);var i=t("CcnG"),e=t("mrSG"),u=t("2yus"),o=t("Z4OH"),r=t("CjQN"),s=t("t8sF"),a=t("ZZ/e"),c=t("sXiW"),d=t("EVdn"),b=t.n(d),p=function(){function l(l,n,t,i,e,u,o){this.streamingMedia=l,this.route=n,this.rest=t,this.socialSharing=i,this.file=e,this.platform=u,this.videoPlayer=o,this.message="Check out the GharyalTV!",this.url="http://gharyal.com/",this.options={orientation:"portrait|landscape",shouldAutoClose:!0,controls:!1},this.SlideOption={loop:!1,centeredSlides:!1,slidesPerView:3,direction:"vertical",speed:100,pager:!1,initialSlide:0,zoom:!1,freeMode:!0,spaceBetween:0}}return l.prototype.ngOnInit=function(){var l=this;this.rest.presentLoading(),this.catId=this.route.snapshot.paramMap.get("id"),this.catName=this.route.snapshot.paramMap.get("name"),this.rest.getAllFavoriteFilms().then(function(n){0==n.length&&(l.favVideos=null),n.length>0&&(l.favVideos=n)}),this.rest.get("category/videocat/"+this.catId).subscribe(function(n){if(n.status&&n.data)if(l.favVideos&&l.favVideos.length>0){for(var t=[],i=n.data.map(function(l){return l.isFavorite=!1,l}),e=function(n){var e=i[n];l.favVideos.find(function(l){return l==e.id})&&(e.isFavorite=!0),t.push(e)},u=0;u<i.length;u++)e(u);l.videos=t}else l.videos=n.data.map(function(l){return l.isFavorite=!1,l})},function(l){}),this.rest.dismissLoading()},l.prototype.start=function(l){this.platform.is("android"),this.streamingMedia.playVideo(l,this.options)},l.prototype.doRefresh=function(l){var n=this;this.rest.get("category/videocat/"+this.catId).subscribe(function(t){t.status&&t.data&&(n.videos=t.data.map(function(l){return l.isFavorite=!1,l})),l.target.complete()},function(n){l.target.complete()})},l.prototype.shareTwitter=function(){return e.b(this,void 0,void 0,function(){return e.e(this,function(l){return this.socialSharing.shareViaTwitter(null,null,this.Url).then(function(){}).catch(function(l){}),[2]})})},l.prototype.addtofav=function(l,n){var t=this;this.rest.isFavorite(l).then(function(i){i?t.rest.presentToast("This Video Already Exists in Fav List."):(n>-1&&(t.videos[n].isFavorite=!0),t.rest.favoriteFilm(l).then(function(){t.rest.presentToast("Added in Fav List.")}))})},l.prototype.unFav=function(l,n){var t=this;this.rest.unfavoriteFilm(l).then(function(){t.rest.getAllFavoriteFilms().then(function(l){n>-1&&(t.videos[n].isFavorite=!1)})})},l.prototype.sharePicker=function(){return e.b(this,void 0,void 0,function(){var l=this;return e.e(this,function(n){return this.platform.ready().then(function(){l.socialSharing.share(l.message,null,null,l.url).then(function(l){console.log("Shared via SharePicker")}).catch(function(l){console.log("Was not shared via SharePicker")})}),[2]})})},l.prototype.slideChanged=function(l){var n=this;this.slider.getActiveIndex().then(function(l){n.clickFunction(l+0)})},l.prototype.clickFunction=function(l){b()(".card-size").addClass("grey"),b()(".swiper-slide").addClass("hidden-content"),b()(document).find("#slides_"+l+" .card-size").removeClass("grey"),b()(document).find("#slides_"+l).removeClass("hidden-content")},l}(),h=function(){return function(){}}(),f=t("pMnS"),g=t("oBZk"),v=t("Ip0R"),m=t("ZYCi"),x=i.nb({encapsulation:0,styles:[[".no_video_div[_ngcontent-%COMP%]{position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);text-align:center}"]],data:{}});function k(l){return i.Hb(0,[(l()(),i.pb(0,0,null,null,1,"img",[],[[8,"src",4],[8,"className",0]],null,null,null,null)),i.Ab(1,1)],null,function(l,n){var t=l(n,1,0,n.parent.context.$implicit.img_src);l(n,0,0,t,i.rb(1,"card-size ",0==n.parent.context.index?"":"grey",""))})}function F(l){return i.Hb(0,[(l()(),i.pb(0,0,null,null,3,"div",[["class","card-star"]],null,[[null,"click"]],function(l,n,t){var i=!0;return"click"===n&&(i=!1!==l.component.addtofav(l.parent.context.$implicit.id,l.parent.context.index)&&i),i},null,null)),(l()(),i.pb(1,0,null,null,2,"ion-button",[["class","btn-unfav"]],null,null,null,g.z,g.c)),i.ob(2,49152,null,0,a.i,[i.h,i.k],null,null),(l()(),i.pb(3,0,null,0,0,"img",[["class","notFav"],["src","../assets/icon/fav-icon.png"]],null,null,null,null,null))],null,null)}function y(l){return i.Hb(0,[(l()(),i.pb(0,0,null,null,2,"ion-button",[["class","btn-fav"]],null,[[null,"click"]],function(l,n,t){var i=!0;return"click"===n&&(i=!1!==l.component.unFav(l.parent.context.$implicit.id,l.parent.context.index)&&i),i},g.z,g.c)),i.ob(1,49152,null,0,a.i,[i.h,i.k],null,null),(l()(),i.pb(2,0,null,0,0,"img",[["class","fav"],["src","../assets/icon/hand-copy.png"]],null,null,null,null,null))],null,null)}function S(l){return i.Hb(0,[(l()(),i.pb(0,0,null,null,27,"ion-slide",[],[[8,"className",0],[8,"id",0]],[[null,"click"]],function(l,n,t){var i=!0;return"click"===n&&(i=!1!==l.component.clickFunction(l.context.index)&&i),i},g.P,g.s)),i.ob(1,49152,null,0,a.nb,[i.h,i.k],null,null),(l()(),i.gb(16777216,null,0,1,null,k)),i.ob(3,16384,null,0,v.i,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.pb(4,0,null,0,3,"div",[["class","card-title"]],null,null,null,null,null)),(l()(),i.Fb(5,null,[""," "])),(l()(),i.pb(6,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),i.Fb(7,null,["",""])),(l()(),i.gb(16777216,null,0,1,null,F)),i.ob(9,16384,null,0,v.i,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.pb(10,0,null,0,2,"div",[["class","card-star"]],null,null,null,null,null)),(l()(),i.gb(16777216,null,null,1,null,y)),i.ob(12,16384,null,0,v.i,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.pb(13,0,null,0,6,"div",[["class","card-add"]],null,null,null,null,null)),(l()(),i.pb(14,0,null,null,5,"ion-fab",[["class","fab"],["horizontal","start"],["slot","fixed"],["vertical","top"]],null,null,null,g.E,g.g)),i.ob(15,49152,null,0,a.u,[i.h,i.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),i.pb(16,0,null,0,3,"ion-fab-button",[["class","fab"],["size","small"]],null,[[null,"click"]],function(l,n,t){var i=!0;return"click"===n&&(i=!1!==l.component.sharePicker()&&i),i},g.D,g.h)),i.ob(17,49152,null,0,a.v,[i.h,i.k],{size:[0,"size"]},null),(l()(),i.pb(18,0,null,0,1,"ion-icon",[["class","share"],["mode","md"],["name","share"]],null,null,null,g.G,g.j)),i.ob(19,49152,null,0,a.A,[i.h,i.k],{mode:[0,"mode"],name:[1,"name"]},null),(l()(),i.pb(20,0,null,0,3,"div",[["class","card-play"]],null,null,null,null,null)),(l()(),i.pb(21,0,null,null,2,"ion-button",[["fill","clear"]],null,[[null,"click"]],function(l,n,t){var i=!0;return"click"===n&&(i=!1!==l.component.start(l.context.$implicit.vid_src)&&i),i},g.z,g.c)),i.ob(22,49152,null,0,a.i,[i.h,i.k],{fill:[0,"fill"]},null),(l()(),i.pb(23,0,null,0,0,"img",[["class","video"],["src","../assets/icon/video.png"]],null,null,null,null,null)),(l()(),i.pb(24,0,null,0,3,"div",[["class","card-time"]],null,null,null,null,null)),(l()(),i.pb(25,0,null,null,2,"ion-badge",[["color","transparent"]],null,null,null,g.y,g.b)),i.ob(26,49152,null,0,a.h,[i.h,i.k],{color:[0,"color"]},null),(l()(),i.Fb(27,0,["",""]))],function(l,n){l(n,3,0,n.context.$implicit.img_src),l(n,9,0,!n.context.$implicit.isFavorite),l(n,12,0,n.context.$implicit.isFavorite),l(n,15,0,"start","top"),l(n,17,0,"small"),l(n,19,0,"md","share"),l(n,22,0,"clear"),l(n,26,0,"transparent")},function(l,n){l(n,0,0,i.rb(1,"slide-height ",0==n.context.index?"":"hidden-content",""),i.rb(1,"","slides_"+n.context.index,"")),l(n,5,0,n.context.$implicit.name),l(n,7,0,n.context.$implicit.desc),l(n,27,0,n.context.$implicit.vidDuration)})}function w(l){return i.Hb(0,[(l()(),i.pb(0,0,null,null,3,"ion-slides",[["class","slide home_slider"],["scrollbar","false"]],null,[[null,"ionSlideDidChange"]],function(l,n,t){var i=!0;return"ionSlideDidChange"===n&&(i=!1!==l.component.slideChanged(t.target)&&i),i},g.Q,g.t)),i.ob(1,49152,[[1,4],["Slides_banner",4]],0,a.ob,[i.h,i.k],{options:[0,"options"],scrollbar:[1,"scrollbar"]},null),(l()(),i.gb(16777216,null,0,1,null,S)),i.ob(3,278528,null,0,v.h,[i.O,i.L,i.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,1,0,t.SlideOption,"false"),l(n,3,0,t.videos)},null)}function I(l){return i.Hb(0,[i.Bb(0,v.n,[]),i.Db(671088640,1,{slider:0}),(l()(),i.pb(2,0,null,null,12,"ion-header",[],null,null,null,g.F,g.i)),i.ob(3,49152,null,0,a.z,[i.h,i.k],null,null),(l()(),i.pb(4,0,null,0,6,"ion-toolbar",[["class","head"],["text-center",""]],null,null,null,g.T,g.w)),i.ob(5,49152,null,0,a.zb,[i.h,i.k],null,null),(l()(),i.pb(6,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,g.A,g.d)),i.ob(7,49152,null,0,a.j,[i.h,i.k],null,null),(l()(),i.pb(8,0,null,0,1,"ion-menu-button",[["color","light"]],null,null,null,g.K,g.o)),i.ob(9,49152,null,0,a.P,[i.h,i.k],{color:[0,"color"]},null),(l()(),i.pb(10,0,null,0,0,"img",[["class","logo"],["src","../assets/img/logo.png"]],null,null,null,null,null)),(l()(),i.pb(11,0,null,0,3,"ion-title",[["class","text"],["mode","md"]],null,null,null,g.S,g.v)),i.ob(12,49152,null,0,a.xb,[i.h,i.k],null,null),(l()(),i.Fb(13,0,[" "," "])),i.Cb(14,1),(l()(),i.pb(15,0,null,null,7,"ion-content",[["class","card-background-page"]],null,null,null,g.C,g.f)),i.ob(16,49152,null,0,a.s,[i.h,i.k],null,null),(l()(),i.pb(17,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(l,n,t){var i=!0;return"ionRefresh"===n&&(i=!1!==l.component.doRefresh(t)&&i),i},g.O,g.q)),i.ob(18,49152,null,0,a.ab,[i.h,i.k],null,null),(l()(),i.pb(19,0,null,0,1,"ion-refresher-content",[["pullingIcon","arrow-dropdown"],["pullingText","Pull to refresh"],["refreshingSpinner","circles"],["refreshingText","Refreshing..."]],null,null,null,g.N,g.r)),i.ob(20,49152,null,0,a.bb,[i.h,i.k],{pullingIcon:[0,"pullingIcon"],pullingText:[1,"pullingText"],refreshingSpinner:[2,"refreshingSpinner"],refreshingText:[3,"refreshingText"]},null),(l()(),i.gb(16777216,null,0,1,null,w)),i.ob(22,16384,null,0,v.i,[i.O,i.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,9,0,"light"),l(n,20,0,"arrow-dropdown","Pull to refresh","circles","Refreshing..."),l(n,22,0,t.videos)},function(l,n){var t=n.component,e=i.Gb(n,13,0,l(n,14,0,i.zb(n,0),t.catName));l(n,13,0,e)})}function z(l){return i.Hb(0,[(l()(),i.pb(0,0,null,null,1,"app-video",[],null,null,null,I,x)),i.ob(1,114688,null,0,p,[o.a,m.a,u.a,r.a,s.a,a.Gb,c.a],null,null)],function(l,n){l(n,1,0)},null)}var C=i.lb("app-video",p,z,{},{},[]),O=t("gIcY");t.d(n,"VideoPageModuleNgFactory",function(){return T});var T=i.mb(h,[],function(l){return i.wb([i.xb(512,i.j,i.bb,[[8,[f.a,C]],[3,i.j],i.x]),i.xb(4608,v.k,v.j,[i.u,[2,v.r]]),i.xb(4608,O.c,O.c,[]),i.xb(4608,a.b,a.b,[i.z,i.g]),i.xb(4608,a.Eb,a.Eb,[a.b,i.j,i.q,v.c]),i.xb(4608,a.Hb,a.Hb,[a.b,i.j,i.q,v.c]),i.xb(1073742336,v.b,v.b,[]),i.xb(1073742336,O.b,O.b,[]),i.xb(1073742336,O.a,O.a,[]),i.xb(1073742336,a.Bb,a.Bb,[]),i.xb(1073742336,m.p,m.p,[[2,m.v],[2,m.m]]),i.xb(1073742336,h,h,[]),i.xb(1024,m.k,function(){return[[{path:"",component:p}]]},[])])})}}]);