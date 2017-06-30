import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {itemReducer} from './reducer/reducer';
import Item from './components/item/item';
import jsonData from 'json-loader!./data/data.json';

let store = createStore(itemReducer, jsonData);

ReactDOM.render(
    <Provider store={store}>
        <Item/>
    </Provider>,
document.getElementById('items'));