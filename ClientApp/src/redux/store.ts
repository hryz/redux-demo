import {AppActions} from "../components/app/actions";
import {LeftActions} from "../components/left/actions";
import {RightActions} from "../components/right/actions";
import {AppReducer, AppState} from "./reducers/app-reducer";
import {LeftReducer, LeftState} from "./reducers/left-reducer";
import {RightReducer, RightState} from "./reducers/right-reducer";

import {Action, applyMiddleware, combineReducers, createStore, Dispatch} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import { createBrowserHistory } from 'history'
import {RouterAction, routerMiddleware, RouterRootState} from 'connected-react-router'
import {createRouteReducer} from "./reducers/router-reducer";

export type AllActions =
    | AppActions
    | LeftActions
    | RightActions
    | RouterAction

export interface RootState extends RouterRootState{
    app: AppState
    left: LeftState
    right: RightState
}

export const history = createBrowserHistory()
const rootReducer = combineReducers<RootState, AllActions>({
    app: AppReducer,
    left: LeftReducer,
    right: RightReducer,
    router: createRouteReducer(history),
})

let preloadedState: RootState | undefined;
try { preloadedState = JSON.parse(window.location.search) as RootState} catch (e) { }


export const store =
    createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history),
                thunk)));



export type AsyncAction<TAction extends Action> = ThunkAction<void, RootState, unknown, TAction>
export type AsyncDispatch<TAction extends Action> = ThunkDispatch<RootState, void, TAction>

export const useAsyncDispatch = <T extends Action>(): AsyncDispatch<T> => useDispatch<AsyncDispatch<T>>();
export const useSyncDispatch = <T extends Action>(): Dispatch<T> => useDispatch<Dispatch<T>>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const delay = (ms:number) => new Promise<void>(resolve => setTimeout(resolve, ms))

