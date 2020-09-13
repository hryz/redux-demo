import React from 'react';
import './app.css';
import {Left, Right} from "..";

export function App() {

    return (
        <div className="App">
            <Left text="Left"/>
            <Right text="Right"/>
        </div>
    );
}