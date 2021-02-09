import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { RestService } from './rest.service';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'

})
export class AppComponent {
  activePage: any;

  appPages: any;
  //screenOrientation: any;
  // public appPages = [
  //   {
  //     title: 'Home',
  //     url: '/home',
  //     icon: ''
  //   },
  //   {
  //     title: 'Popular',
  //     url: '/popular',
  //     icon: ''
  //   },
  //   {
  //     title: 'Recent',
  //     icon: ''
  //     //url: '/popular',
  //   },
  //   {
  //     title: 'All Videos',
  //     icon: '',
  //     url: '/allvideos'
  //   },
  //   {
  //     title: 'Favorites',
  //     icon: 'bookmark'

  //   },
  //   {
  //     title: 'Rate Apps',
  //     icon: 'star'
  //   },
  //   {
  //     title: 'logo',
  //     icon: ''
  //   }
  // ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    public api: RestService,
    public alertController: AlertController,
    private network: Network
  ) {
    this.initializeApp();
  }

  

  initializeApp() {
    this.network.onDisconnect().subscribe(() => {
       this.presentAlertOffline();
    });
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#7b7c7c');
      //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      if(this.network.type == 'none' || !this.network.type){
        //this.presentAlertOffline();
      }
      this.api.get('category/list')
        .subscribe(val => {
          this.appPages = [];
          if (val.status) {
            if (val.data) {
              for (let cat of val.data) {
                let data = { title: cat.name, url: '/video/' + cat.id + '/' + cat.name, icon: '' };
                this.appPages.push(data);
              }
            }
          }
        }, err => {
          this.appPages = [];
          //this.api.presentToastWithOptions(err.message);
        });
      this.splashScreen.hide();
    });
  }

  async presentAlertOffline() {
    const alert = await this.alertController.create({
      header: 'Connection lost!',
      message: '  You are not connected to internet',
      backdropDismiss : false,
      buttons: [{
        text: 'Retry',
        handler: ()=>{
          this.splashScreen.show();
          location.reload();
        }
      }]
    });
    await alert.present();
  }
}
