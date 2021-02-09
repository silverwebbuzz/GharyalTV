import { Component, OnInit, ViewChild } from '@angular/core';
import { StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Platform, IonSlides } from '@ionic/angular';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import $ from "jquery";


@Component({
  selector: 'app-allvideos',
  templateUrl: './allvideos.page.html',
  styleUrls: ['./allvideos.page.scss'],
})

export class AllvideosPage implements OnInit {
  @ViewChild('Slides_banner') slider: IonSlides;
  id: string;
  videos: any;
  isFavorite = false;
  favVideos: any;
  options: StreamingVideoOptions = {
    orientation: 'portrait|landscape',
    shouldAutoClose: true,
    controls: true,

  };

  optionsAndroid: StreamingVideoOptions = {
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
  message = 'Check out the GharyalTV!';
  url = 'http://gharyal.com/';

  constructor(private streamingMedia: StreamingMedia, 
    private route: ActivatedRoute, 
    private rest: RestService,
    private socialSharing: SocialSharing,
    private platform: Platform,
    private videoPlayer: VideoPlayer) {
      

  }

  ngOnInit() {
    this.rest.presentLoading();
    this.rest.getAllFavoriteFilms().then(result => {
      if (result.length == 0) {
        this.favVideos = null;
      }
      if (result.length > 0) {
        this.favVideos = result;
      }
    });
    this.rest.get('category/allvideo')
    .subscribe(val => {
      if (val.status) {
        if (val.data) {
          if (this.favVideos && this.favVideos.length > 0) {
            let finalArray = [];
            const lstData = val.data.map(x => { x.isFavorite = false; return x; });
            for (let i = 0; i < lstData.length; i++) {
              const element = lstData[i];
              const hasElement = this.favVideos.find(x => x == element.id);
              if (hasElement) {
                element.isFavorite = true;
              };
              finalArray.push(element);
            };
            
            
            this.videos = finalArray;
          } else {
            this.videos = val.data.map(x => { x.isFavorite = false; return x; });
            
          }
        }
      }
    }, err => {
      //this.rest.presentToastWithOptions(err.message);
    });
    this.rest.dismissLoading();
  }

  start(url) {
    if(this.platform.is('android')){
      this.streamingMedia.playVideo(url, this.optionsAndroid);
    }else{
    this.streamingMedia.playVideo(url, this.options);
  }
  }

  doRefresh(event) {

    this.rest.getAllFavoriteFilms().then(result => {
      if (result.length == 0) {
        this.favVideos = null;
      }
      if (result.length > 0) {
        this.favVideos = result;
      }
    });
    this.rest.get('category/allvideo')
      .subscribe(val => {
        if (val.status) {
          if (val.data) {
            if (this.favVideos && this.favVideos.length > 0) {
              let finalArray = [];
              const lstData = val.data.map(x => { x.isFavorite = false; return x; });
              for (let i = 0; i < lstData.length; i++) {
                const element = lstData[i];
                const hasElement = this.favVideos.find(x => x == element.id);
                if (hasElement) {
                  element.isFavorite = true;
                };
                finalArray.push(element);
              };

              this.videos = finalArray;
            } else {
              this.videos = val.data.map(x => { x.isFavorite = false; return x; });
            }
          }
        }
      }, err => {
        this.rest.presentToastWithOptions(err.message);
      });
      event.target.complete();
  }

  addtofav(videoId, index) {
    this.rest.isFavorite(videoId).then(isFav => {
      if (isFav) {
        this.rest.presentToast('This Video Already Exists in Fav List.');
      } else {
        if (index > -1) {
          this.videos[index].isFavorite = true;
        }
        // this.isFavorite = true;
        this.rest.favoriteFilm(videoId).then(() => {
          this.rest.presentToast('Added in Fav List.');
        })
      }
    });
  }

  unFav(videoId, index) {
    this.rest.unfavoriteFilm(videoId).then(() => {
      this.rest.getAllFavoriteFilms().then(result => {
        this.videos[index].isFavorite = false;
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
