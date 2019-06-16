import { Component, OnInit, Input } from '@angular/core';
import { ProjectSection } from 'src/app/models/projectSection';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() section: ProjectSection
  constructor() { }

  ngOnInit() {
  }

}