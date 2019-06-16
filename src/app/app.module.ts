import { HomeComponent } from './components/home/home.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { environment } from "../environments/environment";

import { FirebaseService } from "./services/firebase.service";
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { FeedComponent } from './components/feed/feed.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PromoComponent } from './components/promo/promo.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentFilterPipe } from './pipes/comment-filter.pipe';
import { SectionsComponent } from './components/sections/sections.component';
import { SectionComponent } from './components/section/section.component';
import { PostingComponent } from './components/posting/posting.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    NewPostComponent,
    ProfileComponent,
    HomeComponent,
    MainMenuComponent,
    NavigationComponent,
    LoadingComponent,
    PromoComponent,
    TutorialComponent,
    NewsletterComponent,
    CommentSectionComponent,
    CommentComponent,
    CommentFilterPipe,
    SectionsComponent,
    SectionComponent,
    PostingComponent,
    NotFoundComponent,
    // NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule
  ],
  providers: [
    FirebaseService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
