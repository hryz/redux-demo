import {AllActions, LocationState} from "../store";
import {Reducer} from "redux";
import {connectRouter, LOCATION_CHANGE, RouterState} from "connected-react-router";
import {History} from "history"


type RouterReducerFactory = (h:History<LocationState>) => Reducer<RouterState<LocationState>, AllActions>

export const createRouteReducer : RouterReducerFactory = (history) => {

    const router = connectRouter<LocationState>(history)
    const initialState: RouterState<LocationState> = {
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
