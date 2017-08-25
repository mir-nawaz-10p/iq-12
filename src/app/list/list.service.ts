import { Injectable } from '@angular/core';

import { List } from './list';

@Injectable()
export class ListService {
  private list : List[] = [
      { id: 0, name: 'Mr. Nice' },
      { id: 1, name: 'Narco' },
      { id: 2, name: 'Bombasto' },
      { id: 3, name: 'Celeritas' },
      { id: 4, name: 'Magneta' },
      { id: 5, name: 'RubberMan' },
      { id: 6, name: 'Dynama' },
      { id: 7, name: 'Dr IQ' },
      { id: 8, name: 'Magma' },
      { id: 9, name: 'Tornado' }
    ];

  private wildCardSearch(str: string, rule: string) : boolean{
    return new RegExp("^" + rule.split("*").join(".*") + "$").test(str);
  }

  getList(): List[] {
    return this.list;
  }

  getById(id: number): List {
    return this.list.find(li => li.id === id);
  }

}
