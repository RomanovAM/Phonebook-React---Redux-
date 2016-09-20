import {SEARCH, search, initialStore, searchFiltr, FILTR} from './actions';
import  ReactDOM  from 'react-dom';
import { Provider } from 'react-redux'
import {store} from './store';
import {App} from './container';
import React from 'react';
import {connect} from 'react-redux';


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

function mapStateToProps (state) {
    //console.log(state);
    return {
        search: state
        //contactData: state
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: () => {
      store.dispatch(searchFiltr(contactData));
    }
  };
};

const Containerr = connect(mapStateToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <Containerr/>
    </Provider>,
    document.getElementById('root'));
