import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { List } from './list';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  lists: List[];

  constructor(
    private listService: ListService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getList();
  }
  
  getList(): void {
    this.listService.getList()
    .subscribe((res)=>{
            this.lists = res.json();
        });
  }

  gotoDetail(list:Object):void{
    this.router.navigate(['/details', list['login']]);
  }
}
