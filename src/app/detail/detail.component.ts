import { Component, OnInit } from '@angular/core';

import { DetailService } from './detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  list: any;

  constructor(
  	private DetailService: DetailService
  	) { }

  ngOnInit() {
  	this.DetailService.getUserDetails("mojombo")
    .subscribe((res)=>{
            this.list = res.json();
        });
  }

}
