import {Reducer} from "redux";
import {AllActions} from "../store";
import {leftDecreased, leftIncreased} from "../../components/left/actions";

export interface LeftState {
    leftValue: number
}

const initialState: LeftState = {
    leftValue: 50
}

export const LeftReducer: Reducer<LeftState, AllActions> =
    (state = initialState, action) => {
        switch (action.type) {
            case leftIncreased :
                return {leftValue : state.leftValue + action.increment}

            case leftDecreased :
                return {leftValue: state.leftValue + action.decrement}

            default:
                return state;
        }
    }
