import { Component } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  categories : any;
  constructor(private rest:RestService,
              public toastController: ToastController,
              public loadingController: LoadingController) {

  }

  ngOnInit() {
    this.rest.get('category/list')
    .subscribe(val => {
      if(val.status){
        if(val.data){
          this.categories = val.data;
        }
      }
    }, err => {
      this.rest.presentToastWithOptions(err.message);
    });
  }
}
