import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../interfaces/user';
import { BaseLinkService } from '../services/base-link.service';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class UserService {

  constructor(public http: Http) { }

  // tslint:disable-next-line:member-ordering
  public _url = BaseLinkService.GetBaseUrl() + 'User';

  public SaveUser(user: User): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this._url, user, options)
      .map(data => data.json())
      .catch(this.handleErrorObservable);
  }

  public SaveUserAddress(userID, oldAddress, newAddress): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const data = {
      userID: userID,
      OldAddress: oldAddress,
      NewAddress: newAddress
    };
    return this.http.post(BaseLinkService.GetBaseUrl() + '/UserAddress', data, options)
      .map(ret => ret.json())
      .catch(this.handleErrorObservable);
  }


  public getUser(userID): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this._url + '?id=' + userID)
      .map(data => data.json())
      .catch(this.handleErrorObservable);
  }


  public getUserOldNewAddress(userID): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(BaseLinkService.GetBaseUrl() +  '/UserAddress' +  '?id=' + userID)
      .map(data => data.json())
      .catch(this.handleErrorObservable);
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  public  getLoggedInUserID(){
    return 9;
  }

}
