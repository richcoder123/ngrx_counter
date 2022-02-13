import { User } from "src/app/models/User.model";

export interface IAuthState {
    user: User | null;
}

export const initialState: IAuthState = {
    user: null,
};