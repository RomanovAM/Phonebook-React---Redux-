import {SEARCH, initialStore, searchFiltr, FILTR} from './actions';
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
    //console.log(state);
    return {
        search: state
        //contactData: state
    }
};

function mapDispatchToProps(dispatch) {
  return {
    contactSearch: (e) => {
      dispatch(search(e.target.value))
    }
  }
};


const Containerr = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <Containerr/>
    </Provider>,
    document.getElementById('root'));
