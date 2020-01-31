import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "redux/configureStore";

import App from 'App';
import 'index.css';

console.log(store.getState());
store.dispatch({ type: "HELLO"});

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
