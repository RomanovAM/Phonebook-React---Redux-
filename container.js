import  ReactDOM  from 'react-dom';
import {Component} from 'react';
import { Provider } from 'react-redux'
import {store} from './store';
import React from 'react';
import {connect} from 'react-redux';
import {search, initialStore} from './actions';


export class Search extends Component {

  contactSearch(e) {
    store.dispatch(search(e.target.value));
  }

  render() {
    return (
      <div className='mainsearch'>
              <input className='input' defaultValue='введите Фамилию' onChange={this.contactSearch}/>
      </div>
      )
    }
};
/********************************************************************************/
export class App extends Component {
  render() {
    return (
        <div className='mainComponent'>
          <Search/>
          {this.props.search}
        </div>
      )
    }
};
/********************************************************************************/
