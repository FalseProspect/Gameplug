import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Item } from "../models/item";
import { Comment } from "../models/comment";
import { AuthService } from "./auth.service";
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import * as firebase from 'firebase';

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
  
  getComments(parentID){
    const comments: AngularFirestoreCollection<Comment> = this.db.collection(`commentSections/${parentID}/comments`);
    return comments.valueChanges()
  }
  
  makeComment(comment:Comment){
    comment.id = this.db.createId();
    if(comment.parentComment !== null){
      const parentComment: AngularFirestoreDocument<Comment> = this.db.doc(`commentSections/${comment.parentSection}/comments/${comment.parentComment}`);
      parentComment.update({children: firebase.firestore.FieldValue.arrayUnion(comment.id)})
    }
    console.log(comment)
    const comments: AngularFirestoreCollection<Comment> = this.db.collection(`commentSections/${comment.parentSection}/comments`);
    return comments.doc(comment.id).set(comment);
  }

  getUserProfileData() {
    if (this.verifyUser()) {
      return this.auth.afs.doc(`users/${this.user.uid}`).valueChanges();
    }
  }
}
