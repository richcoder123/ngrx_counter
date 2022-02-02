import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.state';
import { updatePost } from '../state/posts.actions';
import { getPostById } from '../state/posts.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  postForm: FormGroup;
  post;
  id;

  constructor(private route: ActivatedRoute,
	private store: Store<IAppState>,
	private router: Router) {

   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
		const id = params.get('id');
		this.id = id;
		this.store.select(getPostById, { id }).subscribe((data) => {
			this.post = data;
			this.createForm();
		});
	});
  }

  createForm() {

	this.postForm = new FormGroup({
    	title: new FormControl(this.post.title),
      	description: new FormControl(this.post.description)
    });

  }

  onUpdate() {
	  let post = {
		id: this.id,
    	title: this.postForm.value.title,
    	description: this.postForm.value.description,
	};
		console.log('on update', post);
		this.store.dispatch(updatePost({post}));
		this.router.navigate(['posts']);
	};
	

}

