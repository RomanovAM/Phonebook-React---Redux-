import {SEARCH, more, MORE,hide, HIDE} from './actions';
import {initialStore} from './store';
import  ReactDOM  from 'react-dom';
import { Provider } from 'react-redux'
import {store} from './store';
import {App} from './container';
import Search from './container';
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {search} from './actions';


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

function mapStateToProps (state) {
    return {
        search: state,
        more: state
    }
};

function mapDispatchToProps(dispatch) {
  return {
    contactSearch: (e) => {
      dispatch(search(e.target.value))
    },
    clickMore: (e) => {
      dispatch(more(e.target.id))
    },
    clickHide: (e) => {
      dispatch(more(e.target.id))
    }
  }
};


const Containerr = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <Containerr/>
    </Provider>,
    document.getElementById('root'));
