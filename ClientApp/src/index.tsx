import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './components';
import {Provider} from 'react-redux';
import {store, history} from "./redux/store";
import {ConnectedRouter} from "connected-react-router";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);