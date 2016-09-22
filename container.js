import  ReactDOM  from 'react-dom';
import {Component} from 'react';
import { Provider } from 'react-redux'
import {store} from './store';
import React from 'react';
import {connect} from 'react-redux';
import {search, initialStore, searchFiltr, FILTR} from './actions';

export class Contact extends Component {
  render(){
    var number = this.props.data.number,
        surname = this.props.data.surname,
        name = this.props.data.name,
        patronymic = this.props.data.patronymic;

    return (
        <div className='list'>
            <p className="contact_number">Телефон: <input value={number}/></p>
            <p className="contact_surname">Фамилия: <input value={surname}/></p>

            <p className={"contact_name"}>Имя: <input value={name}/></p>
            <p className={"contact_patronymic"}>Отчество: <input value={patronymic}/></p>
            <div className={"contact_button"}>
                <button>Редактировать контакт</button>
                <button>Удалить контакт</button>
            </div>
        </div>
    )
  }
}






export class List extends Component {
  render(){
    let data = this.props.data;
    let list;
    if (data.length > 0){
      list = data.map(function(item, index) {
          return (
              <div key={index}>
                  <Contact data={item} />
              </div>
          )
      })
    }
    else {
        list = <p>К сожалению справочник пуст</p>
    }
    return (
        <div className='cntact_list'>
            {list}
        </div>
    );
  }
};








export class Search extends Component {
/***************************************************************************/
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
  /************************************************************************/
  render() {
    let searchInput = this.props.data.search.symbol.toLowerCase();
    let contactData = this.props.data.search.contactData.filter(function(element){
      var searchSurname = element.surname.toLowerCase();
      return searchSurname.indexOf(searchInput) !== -1;
    });
    console.log(contactData);

    return (
      <div className='mainsearch'>
        <div className='search'>
          <input className='input' defaultValue='введите Фамилию' onChange={this.props.data.contactSearch}/>
        </div>
        <List data={contactData}/>
      </div>
      )
    }
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
