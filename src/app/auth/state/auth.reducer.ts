import { initialState } from "./auth.state";
import { createReducer, on } from '@ngrx/store';
import { loginSuccess, signupSuccess } from "./auth.actions";

const _authReducer = createReducer(initialState, on(loginSuccess, (state, action) => {
	console.log(action);
	return {
		...state,
		user: action.user,
	}
},
), 
on(signupSuccess, (state, action) => {
	return {
		...state,
		user: action.user,
	}
})
);

export function AuthReducer(state, action) {
	return _authReducer(state, action);
}

