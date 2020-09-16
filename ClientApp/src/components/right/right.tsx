import React from 'react';
import './right.css'
import { useParams } from 'react-router-dom';
import {createMatchSelector, RouterRootState} from "connected-react-router";
import {useAppSelector} from "../../redux/store";

export interface RightProps {
    text: string
}

interface RightRouteParams {
    id?:string
}

export function Right({text}: RightProps) {

    //doesn't seem right: put data into store, but get data from router not from store 🤦‍
    const p = useParams<RightRouteParams>()

    //ugly and disfunctioning way to get a match from the store
    const sel = createMatchSelector<RouterRootState, RightRouteParams>('/right/id:?')
    const match = sel(useAppSelector(x => x)) //this 💩 was invented for connectStateToProps

    return (
        <div>
            <div>{text}</div>
            <div>{p.id ?? 'N/A'}</div>
            <div>{match?.params?.id ?? 'N/A'}</div>
        </div>
    )
}