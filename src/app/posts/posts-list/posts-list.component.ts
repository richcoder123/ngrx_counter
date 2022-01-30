import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IAppState } from 'src/app/store/app.state';
import { getPosts } from '../state/posts.selector';
import { IPost } from 'src/app/models/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts$: Observable<IPost[]>;
  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
  }

}
