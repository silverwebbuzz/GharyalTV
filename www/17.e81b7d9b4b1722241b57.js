(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{cvJE:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),i=t("mrSG"),e=t("Z4OH"),o=t("2yus"),s=t("ZZ/e"),r=t("CjQN"),a=t("sXiW"),c=t("EVdn"),d=t.n(c),b=function(){function l(l,n,t,u,i){this.streamingMedia=l,this.rest=n,this.platform=t,this.socialSharing=u,this.videoPlayer=i,this.message="Check out the GharyalTV!",this.url="http://gharyal.com/",this.isFavorite=!1,this.options={successCallback:function(){console.log("Video played")},errorCallback:function(l){console.log(l)},orientation:"portrait|landscape",shouldAutoClose:!0,controls:!1},this.SlideOption={loop:!1,centeredSlides:!1,slidesPerView:3,direction:"vertical",speed:100,pager:!1,initialSlide:0,zoom:!1,freeMode:!0,spaceBetween:0}}return l.prototype.ngOnInit=function(){var l=this;this.rest.presentLoading(),this.rest.getAllFavoriteFilms().then(function(n){l.rest.dismissLoading(),n.length>0&&l.rest.get("category/allvideo").subscribe(function(t){if(l.rest.dismissLoading(),t.status&&t.data){var u=t.data.filter(function(l){return-1!=this.indexOf(l.id)},n.map(function(l){return l}));l.videos=u}},function(n){l.rest.presentToastWithOptions(n.message)})})},l.prototype.start=function(l){this.platform.is("android"),this.streamingMedia.playVideo(l,this.options)},l.prototype.unFav=function(l){var n=this;this.rest.unfavoriteFilm(l).then(function(){n.rest.getAllFavoriteFilms().then(function(l){0==l.length&&(n.videos=null),l.length>0&&n.rest.get("category/allvideo").subscribe(function(t){if(t.status&&t.data){var u=t.data.filter(function(l){return-1!=this.indexOf(l.id)},l.map(function(l){return l}));n.videos=u}},function(l){n.rest.presentToastWithOptions(l.message)})})})},l.prototype.sharePicker=function(){return i.b(this,void 0,void 0,function(){var l=this;return i.e(this,function(n){return this.platform.ready().then(function(){l.socialSharing.share(l.message,null,null,l.url).then(function(l){console.log("Shared via SharePicker")}).catch(function(l){console.log("Was not shared via SharePicker")})}),[2]})})},l.prototype.slideChanged=function(l){var n=this;this.slider.getActiveIndex().then(function(l){n.clickFunction(l+0)})},l.prototype.clickFunction=function(l){d()(".card-size").addClass("grey"),d()(".swiper-slide").addClass("hidden-content"),d()(document).find("#slides_"+l+" .card-size").removeClass("grey"),d()(document).find("#slides_"+l).removeClass("hidden-content")},l}(),p=function(){return function(){}}(),h=t("pMnS"),f=t("oBZk"),g=t("Ip0R"),v=u.nb({encapsulation:0,styles:[[".hand[_ngcontent-%COMP%]{height:20px;width:15px}.no_video_div[_ngcontent-%COMP%]{position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);text-align:center}"]],data:{}});function m(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"img",[],[[8,"src",4],[8,"className",0]],null,null,null,null)),u.Ab(1,1)],null,function(l,n){var t=l(n,1,0,n.parent.context.$implicit.img_src);l(n,0,0,t,u.rb(1,"card-size ",0==n.parent.context.index?"":"grey",""))})}function x(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,26,"ion-slide",[],[[8,"className",0],[8,"id",0]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.clickFunction(l.context.index)&&u),u},f.P,f.s)),u.ob(1,49152,null,0,s.nb,[u.h,u.k],null,null),(l()(),u.gb(16777216,null,0,1,null,m)),u.ob(3,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.pb(4,0,null,0,3,"div",[["class","card-title"]],null,null,null,null,null)),(l()(),u.Fb(5,null,[""," "])),(l()(),u.pb(6,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Fb(7,null,["",""])),(l()(),u.pb(8,0,null,0,3,"div",[["class","card-star"]],null,null,null,null,null)),(l()(),u.pb(9,0,null,null,2,"ion-button",[["class","btn-fav"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.unFav(l.context.$implicit.id)&&u),u},f.z,f.c)),u.ob(10,49152,null,0,s.i,[u.h,u.k],null,null),(l()(),u.pb(11,0,null,0,0,"img",[["class","fav"],["src","../assets/icon/hand-copy.png"]],null,null,null,null,null)),(l()(),u.pb(12,0,null,0,6,"div",[["class","card-add"]],null,null,null,null,null)),(l()(),u.pb(13,0,null,null,5,"ion-fab",[["class","fab"],["horizontal","start"],["slot","fixed"],["vertical","top"]],null,null,null,f.E,f.g)),u.ob(14,49152,null,0,s.u,[u.h,u.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.pb(15,0,null,0,3,"ion-fab-button",[["class","fab"],["size","small"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.sharePicker()&&u),u},f.D,f.h)),u.ob(16,49152,null,0,s.v,[u.h,u.k],{size:[0,"size"]},null),(l()(),u.pb(17,0,null,0,1,"ion-icon",[["class","share"],["mode","md"],["name","share"]],null,null,null,f.G,f.j)),u.ob(18,49152,null,0,s.A,[u.h,u.k],{mode:[0,"mode"],name:[1,"name"]},null),(l()(),u.pb(19,0,null,0,3,"div",[["class","card-play"]],null,null,null,null,null)),(l()(),u.pb(20,0,null,null,2,"ion-button",[["fill","clear"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.start(l.context.$implicit.vid_src)&&u),u},f.z,f.c)),u.ob(21,49152,null,0,s.i,[u.h,u.k],{fill:[0,"fill"]},null),(l()(),u.pb(22,0,null,0,0,"img",[["class","video"],["src","../assets/icon/video.png"]],null,null,null,null,null)),(l()(),u.pb(23,0,null,0,3,"div",[["class","card-time"]],null,null,null,null,null)),(l()(),u.pb(24,0,null,null,2,"ion-badge",[["color","transparent"]],null,null,null,f.y,f.b)),u.ob(25,49152,null,0,s.h,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.Fb(26,0,["",""]))],function(l,n){l(n,3,0,n.context.$implicit.img_src),l(n,14,0,"start","top"),l(n,16,0,"small"),l(n,18,0,"md","share"),l(n,21,0,"clear"),l(n,25,0,"transparent")},function(l,n){l(n,0,0,u.rb(1,"slide-height ",0==n.context.index?"":"hidden-content",""),u.rb(1,"","slides_"+n.context.index,"")),l(n,5,0,n.context.$implicit.name),l(n,7,0,n.context.$implicit.desc),l(n,26,0,n.context.$implicit.vidDuration)})}function k(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,3,"ion-slides",[["class","slide home_slider"],["scrollbar","false"]],null,[[null,"ionSlideDidChange"]],function(l,n,t){var u=!0;return"ionSlideDidChange"===n&&(u=!1!==l.component.slideChanged(t.target)&&u),u},f.Q,f.t)),u.ob(1,49152,[[1,4],["Slides_banner",4]],0,s.ob,[u.h,u.k],{options:[0,"options"],scrollbar:[1,"scrollbar"]},null),(l()(),u.gb(16777216,null,0,1,null,x)),u.ob(3,278528,null,0,g.h,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,1,0,t.SlideOption,"false"),l(n,3,0,t.videos)},null)}function y(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,2,"div",[["class","no_video_div"]],null,null,null,null,null)),(l()(),u.pb(1,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["No Videos Found."]))],null,null)}function F(l){return u.Hb(0,[u.Db(671088640,1,{slider:0}),(l()(),u.pb(1,0,null,null,12,"ion-header",[],null,null,null,f.F,f.i)),u.ob(2,49152,null,0,s.z,[u.h,u.k],null,null),(l()(),u.pb(3,0,null,0,6,"ion-toolbar",[["class","head"],["text-center",""]],null,null,null,f.T,f.w)),u.ob(4,49152,null,0,s.zb,[u.h,u.k],null,null),(l()(),u.pb(5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,f.A,f.d)),u.ob(6,49152,null,0,s.j,[u.h,u.k],null,null),(l()(),u.pb(7,0,null,0,1,"ion-menu-button",[["color","light"]],null,null,null,f.K,f.o)),u.ob(8,49152,null,0,s.P,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(9,0,null,0,0,"img",[["class","logo"],["src","../assets/img/logo.png"]],null,null,null,null,null)),(l()(),u.pb(10,0,null,0,3,"ion-title",[["class","text"]],null,null,null,f.S,f.v)),u.ob(11,49152,null,0,s.xb,[u.h,u.k],null,null),(l()(),u.pb(12,0,null,0,0,"img",[["src","../assets/icon/hand-copy.png"],["style","height:20px;"]],null,null,null,null,null)),(l()(),u.Fb(-1,0,[" FAVORITES "])),(l()(),u.pb(14,0,null,null,5,"ion-content",[["class","card-background-page"]],null,null,null,f.C,f.f)),u.ob(15,49152,null,0,s.s,[u.h,u.k],null,null),(l()(),u.gb(16777216,null,0,1,null,k)),u.ob(17,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,0,1,null,y)),u.ob(19,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,8,0,"light"),l(n,17,0,t.videos),l(n,19,0,!t.videos)},null)}function C(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-favorites",[],null,null,null,F,v)),u.ob(1,114688,null,0,b,[e.a,o.a,s.Gb,r.a,a.a],null,null)],function(l,n){l(n,1,0)},null)}var O=u.lb("app-favorites",b,C,{},{},[]),S=t("gIcY"),z=t("ZYCi");t.d(n,"FavoritesPageModuleNgFactory",function(){return _});var _=u.mb(p,[],function(l){return u.wb([u.xb(512,u.j,u.bb,[[8,[h.a,O]],[3,u.j],u.x]),u.xb(4608,g.k,g.j,[u.u,[2,g.r]]),u.xb(4608,S.c,S.c,[]),u.xb(4608,s.b,s.b,[u.z,u.g]),u.xb(4608,s.Eb,s.Eb,[s.b,u.j,u.q,g.c]),u.xb(4608,s.Hb,s.Hb,[s.b,u.j,u.q,g.c]),u.xb(1073742336,g.b,g.b,[]),u.xb(1073742336,S.b,S.b,[]),u.xb(1073742336,S.a,S.a,[]),u.xb(1073742336,s.Bb,s.Bb,[]),u.xb(1073742336,z.p,z.p,[[2,z.v],[2,z.m]]),u.xb(1073742336,p,p,[]),u.xb(1024,z.k,function(){return[[{path:"",component:b}]]},[])])})}}]);