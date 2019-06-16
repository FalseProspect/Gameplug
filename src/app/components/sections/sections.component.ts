import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { ProjectSection } from 'src/app/models/projectSection';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  constructor(public app: AppService) { }

  ngOnInit() {
    this.getSections();
  }

  getSections(){
    this.app.getSections()
  }

  makeSection(input: HTMLInputElement) {
    const content = input.value;
    const section: ProjectSection = {
      parentSection: null,
      content,
      author: "ADMIN-DEV",
    };
    this.app.db.makeSection(section);
    input.value = "";
    console.log(section);
  }

}
