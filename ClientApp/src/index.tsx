import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './components';
import {Provider} from 'react-redux';
import {store, history} from "./redux/store";
import {ConnectedRouter} from "connected-react-router";
import { Route } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App/>
                <Route path="/home/:id" exact={false}>
                    home, sweet home
                </Route>
            </ConnectedRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);