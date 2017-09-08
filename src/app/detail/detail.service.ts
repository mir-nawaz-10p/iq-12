import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

@Injectable()
export class DetailService  {

  constructor(private http: Http) {};

  getUserDetails(name:string): any {
    return this.http.get("https://api.github.com/users/"+name);
  }

}
