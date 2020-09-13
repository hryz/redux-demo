import {Reducer} from "redux";
import {AllActions} from "../store";

export interface AppState {
    total: number
}

const initialState: AppState = {
    total: 100
}

export const AppReducer: Reducer<AppState, AllActions> =
    (state = initialState, action) => {
        switch (action.type) {
            //todo:

            default:
                return state;
        }
    }