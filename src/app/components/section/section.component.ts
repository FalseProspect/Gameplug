import { Component, OnInit, Input } from '@angular/core';
import { ProjectSection } from 'src/app/models/projectSection';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() section: ProjectSection;
  commentsExpaned: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleCommentSection(){
    this.commentsExpaned = !this.commentsExpaned;
  }

  openPosting($event:MouseEvent){
    if(!($event.target as HTMLElement).classList.contains('toggle-comments'))
      return
    console.log($event.target)
  }

}
