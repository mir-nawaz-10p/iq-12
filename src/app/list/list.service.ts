import { Injectable } from '@angular/core';

import { List } from './list';

import { Http } from '@angular/http';

@Injectable()
export class ListService  {

  constructor(private http: Http) {};

  private list  = [];

  private wildCardSearch(str: string, rule: string) : boolean{
    return new RegExp("^" + rule.split("*").join(".*") + "$").test(str);
  }

  getList(): any {
    return this.http.get("https://api.github.com/users");
  }

  getById(id: number): List {
    return this.list.find(li => li.id === id);
  }

}
