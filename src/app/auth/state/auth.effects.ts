import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from "../../services/auth.service";
import { loginStart, loginSuccess } from './auth.actions';
import { exhaustMap, map } from 'rxjs/operators';
import { Store } from "@ngrx/store";
import { IAppState } from "src/app/store/app.state";
import { setLoadingSpinner } from "src/app/store/shared/shared.actions";


@Injectable()

export class AuthEffects {
    constructor(private actions$: Actions,
        private authService: AuthService,
        private store: Store<IAppState>
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
                        const user = this.authService.formatUser(data);
                        return loginSuccess({ user });
                    })
                );
            })
        );
    })
}

