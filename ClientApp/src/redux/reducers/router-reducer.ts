import {AllActions} from "../store";
import {Reducer} from "redux";
import {connectRouter, LOCATION_CHANGE, RouterState} from "connected-react-router";
import {History} from "history"


type RouterReducerFactory = (h:History) => Reducer<RouterState, AllActions>

export const createRouteReducer : RouterReducerFactory = (history) => {

    const router = connectRouter(history)
    const initialState: RouterState = {
        action: history.action,
        location: history.location
    }

    return (state = initialState , action ) => {
        switch (action.type){

            case LOCATION_CHANGE:
                return  router(state, action)

            default: return state;
        }
    }
}
