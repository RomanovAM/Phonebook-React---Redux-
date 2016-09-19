import { createStore } from 'redux';
import {reducer} from './reducers';
import { applyMiddleware, compose } from 'redux';


export let store = createStore(reducer);
