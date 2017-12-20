import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

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
export class PayeeService {


  public _url = BaseLinkService.GetBaseUrl() + 'Payee';

  constructor(public http: Http) { }

  public SavePayee(payee): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this._url, payee, options)
      .map(data => data.json())
      .catch(this.handleErrorObservable);
  }

  public GetPayees(userID, searchVal) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this._url + '?userID=' + userID + '&searchTerm=' + searchVal)
      .map(data => data.json())
      .catch(this.handleErrorObservable);
  }


  public SaveUserPayee(userID, payeeID, accountNumber) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this._url + '/SaveUserPayee?userID=' + userID + '&payeeID=' + payeeID + '&accountNumber=' + accountNumber)
      .map(data => data.json())
      .catch(this.handleErrorObservable);
  }

  public DeleteUserPayee(userID, payeeID){
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this._url + '/DeleteUserPayee?userID=' + userID + '&payeeID=' + payeeID)
      .map(data => data.json())
      .catch(this.handleErrorObservable);
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }





}
