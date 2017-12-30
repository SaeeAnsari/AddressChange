import { Injectable } from '@angular/core';

@Injectable()
export class BaseLinkService {

  constructor() { }

  
  // tslint:disable-next-line:member-ordering
  static GetBaseUrl() {

     return 'http://saeedansari-001-site5.itempurl.com/api/';
   }

}
