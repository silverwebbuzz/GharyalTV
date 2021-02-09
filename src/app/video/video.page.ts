import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform, IonSlides } from '@ionic/angular';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import $ from "jquery";

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  @ViewChild('Slides_banner') slider: IonSlides;
  message = 'Check out the GharyalTV!';
  url = 'http://gharyal.com/';
  catId: any;
  catName: any;
  videos: any;
  Url: 'http://gharyal.com/';
  favoriteItem: Array<any>;
  isFavorite: false;
  favVideos: any;
  options: StreamingVideoOptions = {
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
  constructor(private streamingMedia: StreamingMedia, private route: ActivatedRoute, private rest: RestService,
    private socialSharing: SocialSharing, private file: File,
    private platform: Platform,
    private videoPlayer: VideoPlayer) {
    
  }

  ngOnInit() {
    this.rest.presentLoading();
    this.catId = this.route.snapshot.paramMap.get('id');
    this.catName = this.route.snapshot.paramMap.get('name');

    this.rest.getAllFavoriteFilms().then(result => {
      if (result.length == 0) {
        this.favVideos = null;
      }
      if (result.length > 0) {
        this.favVideos = result;
      }
    });
    this.rest.get('category/videocat/' + this.catId)
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
    if (this.platform.is('android')) {
      this.streamingMedia.playVideo(url, this.options);
    } else {
      this.streamingMedia.playVideo(url, this.options);
    }
  }

  doRefresh(event) {
    this.rest.get('category/videocat/' + this.catId)
      .subscribe(val => {
        if (val.status) {
          if (val.data) {
            this.videos = val.data.map(x => { x.isFavorite = false; return x; });
          }
        }
        event.target.complete();
      }, err => {
        //this.rest.presentToastWithOptions(err.message);
        event.target.complete();
      });
  }

  async shareTwitter() {
    this.socialSharing.shareViaTwitter(null, null, this.Url).then(() => {
    }).catch((e) => {
    });
  }

  addtofav(video, index) {
    this.rest.isFavorite(video).then(isFav => {
      if (isFav) {
        this.rest.presentToast('This Video Already Exists in Fav List.');
      } else {
        if (index > -1) {
          this.videos[index].isFavorite = true;
        }
        this.rest.favoriteFilm(video).then(() => {
          this.rest.presentToast('Added in Fav List.');
        })
      }
    });

  }

  unFav(videoId, index) {
    this.rest.unfavoriteFilm(videoId).then(() => {
      this.rest.getAllFavoriteFilms().then(result => {
        if (index > -1) {
          this.videos[index].isFavorite = false;
        }
      });
    });
  }

  async sharePicker() {
    this.platform.ready()
      .then(() => {

        this.socialSharing.share(this.message, null, null, this.url)
          .then((data) => {
            console.log('Shared via SharePicker');
          })
          .catch((err) => {
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
