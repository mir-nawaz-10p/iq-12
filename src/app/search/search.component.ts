import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( 
  	private heroService: SearchService,
    private router: Router) { }

  ngOnInit() {
  }
  
  search(term: string): void {
   
   setTimeout(() => {
      console.log(term);
    }, 1000);
   
  }

  gotoDetail(list: Object): void {
    let link = ['/detail', list['login']];
    this.router.navigate(link);
  }
}
