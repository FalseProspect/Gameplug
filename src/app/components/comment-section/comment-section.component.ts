import { AppService } from "src/app/services/app.service";
import { Component, OnInit, Input } from "@angular/core";
import { UserComment } from "../../models/userComment";

@Component({
  selector: "app-comment-section",
  templateUrl: "./comment-section.component.html",
  styleUrls: ["./comment-section.component.scss"]
})
export class CommentSectionComponent implements OnInit {
  @Input() sectionID: string = 'Default';

  constructor(public app: AppService) {}

  ngOnInit() {
    this.getComments(this.sectionID)
  }

  // TODO: Need a way to sort index
  getComments(input: string){
    this.app.getComments(input)
  }

  makeComment(input: HTMLInputElement) {
    const message = input.value;
    const comment: UserComment = {
      parentSection: this.sectionID,
      parentComment: null,
      message,
      author: "ADMIN-DEV",
    };
    this.app.db.makeComment(comment);
    input.value = "";
    console.log(message);
  }
}
