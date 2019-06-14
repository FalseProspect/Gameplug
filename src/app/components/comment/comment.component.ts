import { AppService } from "src/app/services/app.service";
import { Component, OnInit, Input } from "@angular/core";
import { Comment } from "../../models/comment";
@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.scss"]
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  targeted: boolean = true;

  constructor(public app: AppService) {}

  ngOnInit() {
    // console.log(this.comment);
    // FILTER out where children === comment.id from a comment bin 
  }

  replyComment(input: HTMLInputElement) {
    const message = input.value;
    const comment: Comment = {
      parentSection: this.comment.parentSection,
      parentComment: this.comment.id,
      message,
      author: "ADMIN-DEV",
    };
    this.app.db.makeComment(comment);
  }
}
