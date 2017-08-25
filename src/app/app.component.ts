import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  temp = 'asdasd';
  menus = [
    {
      route: '/list',
      title: 'List'
    },
    {
      route: '/search',
      title: 'Search'
    },
    {
      route: '/details',
      title: 'Details'
    }
  ];
}
