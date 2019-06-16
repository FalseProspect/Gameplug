import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { UserComment } from "../models/userComment";
import { AuthService } from "./auth.service";
import { AngularFirestoreCollection } from "@angular/fire/firestore";
import * as firebase from "firebase";
import { ProjectSection } from "../models/projectSection";

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  user: any;

  constructor(public auth: AuthService, public db: AngularFirestore) {}

  // ! CRITICAL PROBLEM: BEING CALLED BEFORE FULLY INITALIZED
  // ! Refactor

  verifyUser() {
    this.user = this.auth.getUserData();
    // console.log(this.user)
    return this.user;
  }

  getSections(){
    return this.db.collection(`sections`).valueChanges();
  }

  makeSection(section: ProjectSection) {
    section.id = this.db.createId();
    return this.db.doc(`sections/${section.id}`).set(section);
  }

  getComments(parentID) {
    return this.db.collection(`sections/${parentID}/comments`).valueChanges();
  }

  makeComment(comment: UserComment) {
    comment.id = this.db.createId();
    // Append ID to its parenting
    if (comment.parentComment !== null)
      this.db
        .doc(
          `sections/${comment.parentSection}/comments/${comment.parentComment}`
        )
        .update({
          children: firebase.firestore.FieldValue.arrayUnion(comment.id)
        });
    return this.db
      .collection(`sections/${comment.parentSection}/comments`)
      .doc(comment.id)
      .set(comment);
  }

  getUserProfileData() {
    if (this.verifyUser()) {
      return this.auth.afs.doc(`users/${this.user.uid}`).valueChanges();
    }
  }
}
