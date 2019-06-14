import { FirebaseService } from "./firebase.service";
import { CssThemeingService } from "./css-themeing.service";
/*
 * Top level security and manager
 * Detects network status ['Offline', 'Online'] to direct data flow
 * Inspects state data to authorize + notorize transactions and request
 */

import { Injectable } from "@angular/core";
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  NavigationStart
} from "@angular/router";
import { auth } from "firebase/app";

import { NotificationService } from "./notification.service";
import { AuthService } from "./auth.service";
import { Subscription } from "rxjs";
// import { ItemManagerService } from './item-manager.service';

@Injectable({
  providedIn: "root"
})
export class AppService {
  online: boolean = navigator.onLine;
  userData: any;
  commentBin: any = {};

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public themer: CssThemeingService,
    // public manager: ItemManagerService,
    public db: FirebaseService,
    public authorizer: AuthService,
    public notifier: NotificationService
  ) {
    this.userData = this.authorizer.getUserData();
  }


  getComments(sectionID){
    this.db.getComments(sectionID).subscribe(data => {
      // if(!this.commentBin[sectionID])
      this.commentBin[sectionID] = data;
      console.log(this.commentBin)
    })
  }

  openNetworkStatusListeners() {
    window.addEventListener("offline", () => {
      this.notifier.notify("Connection: offline");
    });

    window.addEventListener("online", () => {
      this.notifier.notify("Connection: Online");
    });
  }

  async signOut() {
    await this.authorizer.signOut();
    this.userData = this.authorizer.getUserData();
    this.notifier.notify("Logout Successful");
    this.notifier.notify("Using Local Database");
  }

  // Sign in with Google
  async googleAuth() {
    await this.authorizer.authLogin(new auth.GoogleAuthProvider());
    this.userData = this.authorizer.getUserData();
    this.notifier.notify("Login Successful");
  }

  async terminateAccount() {
    await this.authorizer.terminateAccount();
    this.userData = this.authorizer.getUserData();
    return setTimeout(() => {
      this.router.navigate(["promo"]);
    }, 2000);
  }
}
