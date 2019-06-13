import { Component, OnInit } from '@angular/core';

export interface Listing {
  image: string;
  catergory: string;
  name: string;
  author: string;
  publishDate: string;
  caption: string;
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  headline: Listing = {
    image: "https://s3-us-west-2.amazonaws.com/cyberscoop-media/wp-content/uploads/2018/01/29155454/data-map.jpg",
    catergory: "string",
    name: "Ongoing state-sponsored DNS hijacking campaign has compromised 40 entities",
    author: "string",
    publishDate: "string",
    caption: "Using the DNS records, attackers are capable of rerouting user traffic and stealing credentials from what appears to be a legitimate website."
  }
  listings: Listing[] = [];

  constructor() { }

  ngOnInit() {

    for (let i = 0; i < 5; i++) {
      this.listings.push({
        image: "string",
        catergory: "string",
        name: "string",
        author: "string",
        publishDate: "string",
        caption: "string"
      });
    }
    
  }

}
