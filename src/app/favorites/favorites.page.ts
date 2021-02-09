import { Component, OnInit, ViewChild } from '@angular/core';
import { StreamingVideoOptions, StreamingMedia } from '@ionic-native/streaming-media/ngx';
import { RestService } from '../rest.service';
import { Platform, IonSlides } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import $ from "jquery";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage {
  @ViewChild('Slides_banner') slider: IonSlides;
  message = 'Check out the GharyalTV!';
  url = 'http://gharyal.com/';
  videos : any;
  isFavorite = false;
  options: StreamingVideoOptions = {
    successCallback: () => { console.log('Video played') },
    errorCallback: (err) => { console.log(err) },
    orientation: 'portrait|landscape',
    shouldAutoClose: true,
    controls: false,
    
  };

  SlideOption = {
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
  constructor(private streamingMedia: StreamingMedia,private rest:RestService,
    private platform: Platform,
    private socialSharing: SocialSharing,
    private videoPlayer: VideoPlayer) { 
  }

  ngOnInit(){
    this.rest.presentLoading();
    this.rest.getAllFavoriteFilms().then(result => {
      this.rest.dismissLoading();
      if(result.length > 0){
        this.rest.get('category/allvideo')
        .subscribe(val => {
          this.rest.dismissLoading();
          if(val.status){
            if(val.data){
              const lstData = val.data.filter(function (x) {
                return this.indexOf(x.id) != -1;
              }, result.map(x => { return x; }));
              this.videos = lstData;
            }
          }
        }, err => {
          this.rest.presentToastWithOptions(err.message);
        });
      }else{
        
        //this.rest.presentToastWithOptions('We Are not Fav list Found.');
      }
    });
  }
  start(url){  
    if(this.platform.is('android')){
      this.streamingMedia.playVideo(url, this.options);
    }else{
    this.streamingMedia.playVideo(url, this.options);
  }
  }

  unFav(videoId){
    this.rest.unfavoriteFilm(videoId).then(()=>{
      this.rest.getAllFavoriteFilms().then(result => {
        if(result.length == 0){
          this.videos = null;
        }
        if(result.length > 0){
          this.rest.get('category/allvideo')
          .subscribe(val => {
            if(val.status){
              if(val.data){
                const lstData = val.data.filter(function (x) {
                  return this.indexOf(x.id) != -1;
                }, result.map(x => { return x; }));
                this.videos = lstData;
              }
            }
          }, err => {
            this.rest.presentToastWithOptions(err.message);
          });
        }else{
          //this.rest.presentToastWithOptions('We Are not Fav list Found.');
        }
      });
    });
  }

  async sharePicker()
   {
      this.platform.ready()
      .then(() =>
      {

         this.socialSharing.share(this.message, null, null, this.url)
         .then((data) =>
         {
            console.log('Shared via SharePicker');
         })
         .catch((err) =>
         {
            console.log('Was not shared via SharePicker');
         });

      });
   }
   slideChanged(event) {
    let index: number;
    this.slider.getActiveIndex().then(val => {
      index = val;
      this.clickFunction(index + 0);
    });
  }
  clickFunction(ind) {
    $('.card-size').addClass('grey');
    $('.swiper-slide').addClass('hidden-content');
    $(document).find('#slides_' + ind + ' .card-size').removeClass('grey');
    $(document).find('#slides_' + ind).removeClass('hidden-content');
  }

}
