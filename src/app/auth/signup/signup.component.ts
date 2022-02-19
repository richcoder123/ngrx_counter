import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from 'src/app/store/shared/shared.actions';
import { signupStart } from '../state/auth.actions';
import { IAuthState } from '../state/auth.state';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	signupForm: FormGroup;

	constructor(private store: Store<IAuthState>) { }

	ngOnInit(): void {
		this.signupForm = new FormGroup({
			email: new FormControl(null, [Validators.required, Validators.email]),
			password: new FormControl(null, [Validators.required])
		});
	}

	onSignup() {
		let email = this.signupForm.value.email;
		let password = this.signupForm.value.password;
		this.store.dispatch(setLoadingSpinner({
			status: true
		}));
		this.store.dispatch(signupStart({
			email, password
		}));
	}

}
