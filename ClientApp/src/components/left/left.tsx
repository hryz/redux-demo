import React, {useEffect, useState} from 'react';
import {AsyncAction, delay, useAppSelector, useAsyncDispatch} from "../../redux/store";
import {LeftActions, leftDecreased, leftIncreased} from "./actions";
import './left.css'

export interface LeftProps {
    text: string
}

//kinda command handlers
const handleClick = (currentValue:number) : AsyncAction<LeftActions>  =>
    async (dispatch, getState) => {

    const rootState = getState() //if you really really want, you can get the whole app state here

    if(new Date().getSeconds() % 2 === 0){ // business logic 😂
        dispatch({type: leftIncreased, increment: 10}) //dispatch changed state (e.g. is loading)
        await delay(1000) //REST call
        dispatch({type: leftIncreased, increment: 5}) //dispatch the result
    } else {
        dispatch({type: leftDecreased, decrement: 10}) //dispatch changed state (e.g. is loading)
        await delay(1000) //REST call
        dispatch({type: leftDecreased, decrement: 5}) //dispatch the result
    }
};

//kinda view
export function Left({text}: LeftProps) {

    //you can keep some state local
    const [isLoading, setLoading] = useState(false)

    //get value from store
    const { leftValue } = useAppSelector(x => x.left)

    //update value by emitting events
    const dispatch = useAsyncDispatch<LeftActions>()

    //async action that uses state modification
    useEffect(() => {
        (async () => {
            await delay(1000);
            dispatch({type:leftDecreased, decrement: 1})
        })()
    },[dispatch])

    return (
    <div>
        <b>{text}</b>
        <span>{leftValue}</span>
        <button onClick={() => dispatch(handleClick(leftValue))}>
            Click me!
        </button>
    </div>)
}