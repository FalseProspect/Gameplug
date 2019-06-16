import { CommentSectionComponent } from './components/comment-section/comment-section.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPostComponent } from "./components/new-post/new-post.component";
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { SectionsComponent } from './components/sections/sections.component';
import { PostingComponent } from './components/posting/posting.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'comments', component: CommentSectionComponent},
  { path: 'sections', component: SectionsComponent},
  { path: 'post', children: [
    {path: ':id', component: PostingComponent},
    {path: '', component: SectionsComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'},
  ]},
  { path: 'new', component: NewPostComponent},
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
