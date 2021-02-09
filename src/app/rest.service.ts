import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { ToastController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'favoriteVideos';

const httpOptions = {
  headers: new HttpHeaders()
};
const API_URL = "http://gharyal.com/gharyaltv/api";
@Injectable({
  providedIn: 'root'
})
export class RestService {
  isLoading = false;
  constructor(private http: HttpClient,public toastCtrl: ToastController, public loadingController: LoadingController,public storage: Storage) { }

  private handleError(error: HttpErrorResponse) {
    //console.log('log : ',error);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      //console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      // console.error(
      //   `Backend returned code ${error.status}, ` +
      //   `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(error.error);
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  get(URL: string): Observable<any>{
    let url = `${API_URL}/${URL}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  async presentToastWithOptions(message?, cssClass?, position?) {
    const toast = await this.toastCtrl.create({
      message: message ? message : null,
      duration: 5000,
      position: position ? position : 'bottom',
      cssClass: cssClass ? cssClass : 'dark-trans login-toster',
      closeButtonText: 'OK',
      showCloseButton: true
    });
    toast.present();
  }

  async presentToast(message?) {
    const toast = await this.toastCtrl.create({
      message: message ? message : null,
      duration: 2000,
      showCloseButton: false
    });
    toast.present();
  }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  async dismissLoading(){
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }
  
  isFavorite(vidId) {
    return this.getAllFavoriteFilms().then(result => {
      return result && result.indexOf(vidId) !== -1;
    });
  }

  favoriteFilm(vidId) {
    return this.getAllFavoriteFilms().then(result => {
      if (result) {
        result.push(vidId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [vidId]);
      }
    });
  }

  unfavoriteFilm(vidId) {
    return this.getAllFavoriteFilms().then(result => {
      if (result) {
        var index = result.indexOf(vidId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }
  getAllFavoriteFilms() {
    return this.storage.get(STORAGE_KEY);
  }

}
