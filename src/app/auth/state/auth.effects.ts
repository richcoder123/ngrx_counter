import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from "../../services/auth.service";
import { loginStart, loginSuccess } from './auth.actions';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { Store } from "@ngrx/store";
import { IAppState } from "src/app/store/app.state";
import { setErrorMessage, setLoadingSpinner } from "src/app/store/shared/shared.actions";
import { of } from "rxjs";
import { Router } from "@angular/router";


@Injectable()

export class AuthEffects {
    constructor(private actions$: Actions,
        private authService: AuthService,
        private store: Store<IAppState>,
        private router: Router,
    ) {}

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this.authService.login(action.email, action.password).pipe(
                    map((data) => {
                        this.store.dispatch(setLoadingSpinner({
                            status: false,
                        }));
                        this.store.dispatch(setErrorMessage({
                            message: '',                            
                        }));
                        const user = this.authService.formatUser(data);
                        return loginSuccess({ user });
                    }),
                    catchError((errorResp) => {
                        this.store.dispatch(setLoadingSpinner({
                            status: false,
                        }));
                        const errorMsg = this.authService.getErrorMessage(errorResp.error.error.errorMessage)
                        return of(setErrorMessage({
                            message: errorMsg
                        }));
                    }),
                );
            })
        );
    });

    loginRedirect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginSuccess),
            tap((action) => {
                this.router.navigate(['/']);
            })
        )
    }, { dispatch: false});
}

