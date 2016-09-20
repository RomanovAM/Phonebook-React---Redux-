import  ReactDOM  from 'react-dom';
import {Component} from 'react';
import { Provider } from 'react-redux'
import {store} from './store';
import React from 'react';
import {connect} from 'react-redux';
import {search, initialStore, searchFiltr, FILTR} from './actions';


export class Search extends Component {

  contactSearch(e) {
    store.dispatch(search(e.target.value));
    //console.log(this.Search/*.props.data.search*/);
  };

  dataFiltr(data){
    //console.log(data.search);
    let searchInput = data.search.symbol.toLowerCase();
    let contactData = data.search.contactData.filter(function(element){
      var searchSurname = element.surname.toLowerCase();
      return searchSurname.indexOf(searchInput) !== -1;
    });
    //console.log(contactData);
    store.dispatch(searchFiltr(contactData));
  };

  render() {
  //  console.log(this.props.data.search.contactData);
    //this.dataFiltr(this.props.data);
    return (
      <div className='mainsearch'>
                <div className='search'>
              <input className='input' defaultValue='введите Фамилию' onChange={this.contactSearch}/>
              </div>

            </div>
      )
    };
};
/********************************************************************************/
export class App extends Component {
  render() {
    return (
        <div className='mainComponent'>
          <Search data = {this.props}/>

        </div>
      )
    }
};
/********************************************************************************/
