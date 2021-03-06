import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './ui/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./bll/store";
import {HashRouter} from "react-router-dom";
import 'react-app-polyfill/ie9'
import 'core-js/es/set'
import 'core-js/es/map'

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
