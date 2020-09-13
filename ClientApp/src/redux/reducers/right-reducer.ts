import {Reducer} from "redux";
import {AllActions} from "../store";

export interface RightState {
    rightValue: number
}

const initialState: RightState = {
    rightValue: 50
}

export const RightReducer: Reducer<RightState, AllActions> =
    (state = initialState, action) => {
        switch (action.type) {
            //todo:

            default:
                return state;
        }
    }
