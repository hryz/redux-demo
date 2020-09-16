import React from 'react';
import './app.css';
import {Left, Right} from "..";
import {Route} from "react-router-dom";

export function App() {

    return (
        <div className="App">
            <Left text="Left"/>
            <Route path="/right/:id?" exact={false}>
                <Right text="Right"/>
            </Route>
        </div>
    );
}