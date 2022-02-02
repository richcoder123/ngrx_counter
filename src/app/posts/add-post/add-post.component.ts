import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IPost } from 'src/app/models/post.model';
import { IAppState } from 'src/app/store/app.state';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postForm: FormGroup; 

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
	  this.postForm = new FormGroup({
		  title: new FormControl(null, [
			  Validators.required,
			  Validators.minLength(5)
		  ]),
		  description: new FormControl(null, [
			  Validators.required,
			  Validators.minLength(10)
		  ]),
	  });
	}

	onAddPost() {
		const post: IPost = {
			title: this.postForm.value.title,
			description: this.postForm.value.description
		};
		this.store.dispatch(addPost({
			post
		}));
	}

}
