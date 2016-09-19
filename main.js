import {SEARCH, search, initialStore} from './actions';
import  ReactDOM  from 'react-dom';
import { Provider } from 'react-redux'
import {store} from './store';
import {App} from './container';
import React from 'react';
import {connect} from 'react-redux';


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

function mapStateToProps (state) {

    return {
        search: state.symbol
    }
};

const Containerr = connect(mapStateToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <Containerr/>
    </Provider>,
    document.getElementById('root'));
