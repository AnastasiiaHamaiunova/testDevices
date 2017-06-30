import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {itemReducer} from './reducer/reducer';
import Item from './components/item/item';
import jsonData from 'json-loader!./data/data.json';
import App from './components/App/App';

let store = createStore(itemReducer, jsonData);

ReactDOM.render(
    <Provider store={store}>
        <App/>   
    </Provider>,
document.getElementById('items'));