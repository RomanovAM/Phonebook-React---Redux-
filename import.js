import {SEARCH, search, initialStore} from './actions';
import  ReactDOM  from 'react-dom';
import { Provider } from 'react-redux'
import {store} from './store';
import {App} from './container';
import React from 'react';
import {connect} from 'react-redux';
import {Component} from 'react';
import { createStore } from 'redux';
import {reducer} from './reducers';
import { applyMiddleware, compose } from 'redux';
