import { AppService } from "src/app/services/app.service";
import { Component, OnInit } from "@angular/core";
import { Comment } from "../../models/comment";

@Component({
  selector: "app-comment-section",
  templateUrl: "./comment-section.component.html",
  styleUrls: ["./comment-section.component.scss"]
})
export class CommentSectionComponent implements OnInit {
  sectionID: string = "Deafult";
  comments: Comment[];

  constructor(public app: AppService) {}

  ngOnInit() {
    this.getComments(this.sectionID)
  }

  getComments(input: string){
    this.app.getComments(input)
  }

  makeComment(input: HTMLInputElement) {
    const message = input.value;
    const comment: Comment = {
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
