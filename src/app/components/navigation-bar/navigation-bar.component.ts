import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  // navList:Object[] = [
  //   {name:'HOME', link:'main'},
  //   {name:'NEW POST', link:'new'},
  //   {name:'PROFILE', link:'dashboard'},
  // ];

  constructor(public authService:AuthService) { }

  ngOnInit() {
  }

}
