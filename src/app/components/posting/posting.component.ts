import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.scss']
})
export class PostingComponent implements OnInit {
  posting: any;
  notfound: boolean;
  commentsExpaned: boolean;
  
  constructor(public app: AppService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.app.db.getSection(this.route.snapshot.params.id).subscribe(doc => {
      if(!doc)
        this.notfound = true;
        console.log('Nothing found')
      this.posting = doc
      console.log(this.posting)
    })
  }

  toggleCommentSection(){
    this.commentsExpaned = !this.commentsExpaned;
  }


}
