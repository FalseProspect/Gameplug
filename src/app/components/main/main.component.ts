import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  dummyFeed = [
    {type:'project'},
    {type:'listing'},
    {type:'project'},
    {type:'project'},
    {type:'listing'}
  ]

  // TODO: Listings are devs lookign form groups to start
  // TODO: Projects are devs look for help, more expected of the post

  constructor(public authService:AuthService, public firebase:FirebaseService) { }

  ngOnInit() {
  }

  toggleSidenav(elem:HTMLElement){
    elem.classList.toggle('open')
    console.log(elem)
  }
  
  toggleAuxSidebar(elem:HTMLElement){
    elem.classList.toggle('open')
    console.log(elem)
  }


  @HostListener('click', ['$event']) onClick(event) {
    const target: HTMLElement = event.target;
    if(target.classList.contains('open'))
      target.classList.toggle('open')
  }

}
