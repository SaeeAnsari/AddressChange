import { Injectable } from '@angular/core';

@Injectable()
export class BaseLinkService {

  constructor() { }

  
  // tslint:disable-next-line:member-ordering
  static GetBaseUrl() {

     return 'http://localhost:51633/api/';
   }

}
