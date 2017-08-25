import { Component, OnInit } from '@angular/core';

import { List } from './list';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  lists: List[];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.getList();
  }
  
  getList(): void {
    this.lists = this.listService.getList();
  }

}
