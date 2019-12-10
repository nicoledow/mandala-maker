import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import handleDrawings from './reducers/handledrawings';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import * as serviceWorker from './serviceWorker';

let store = createStore(handleDrawings);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root')
);

serviceWorker.unregister();

