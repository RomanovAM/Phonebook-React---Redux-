import  ReactDOM  from 'react-dom';
import {Component} from 'react';
import { Provider } from 'react-redux';
import {store} from './store';
import React from 'react';
import {connect} from 'react-redux';
import {search, more, MORE,hide,HIDE} from './actions';
import { initialStore} from './store';
/********************************************************************************/
export class Contact extends Component {
  render(){
    var number = this.props.data.number,
        surname = this.props.data.surname,
        name = this.props.data.name,
        visible = false,
        id = this.props.data.id,
        patronymic = this.props.data.patronymic;

    return (
        <div className='list'>
            <p className="contact_number">Телефон: {number}</p>
            <p className="contact_surname">Фамилия: {surname}</p>
            <a className='contact_details' id={id} href='#' onClick={this.props.moreClk}>{(visible ? 'Скрыть': 'Подробнее')}</a>
        </div>
    )
  }
};
/********************************************************************************/
export class List extends Component {
  render(){
    let data = this.props.data;
    let moreClk = this.props.onclk;
    let list;
    if (data.length > 0){
      list = data.map(function(item, index) {
          return (
              <div key={index} >
                  <Contact moreClk={moreClk}  data={item} />
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
/********************************************************************************/
export class Search extends Component {
  render() {
    let searchInput = this.props.data.search.symbol.toLowerCase();
    let contactData = this.props.data.search.contactData.filter(function(element){
      var searchSurname = element.surname.toLowerCase();
      return searchSurname.indexOf(searchInput) !== -1;
    });
    return (
      <div className='mainsearch'>
        <div className='search'>
          <input className='input' defaultValue='введите Фамилию' onChange={this.props.data.contactSearch}/>
        </div>
        <List onclk={this.props.data.clickMore} data={contactData}/>
      </div>
      )
    }
};
/********************************************************************************/
export class MoreContact extends Component {
  render(){
    var number = this.props.data.number,
        surname = this.props.data.surname,
        name = this.props.data.name,
        id = this.props.data.id,
        patronymic = this.props.data.patronymic;

    return (
        <div className='list'>
            <p className="contact_number">Телефон: {number}</p>
            <p className="contact_surname">Фамилия: {surname}</p>
            <p className="contact_surname">Имя: {name}</p>
            <p className="contact_surname">Отчество: {patronymic}</p>
            <div>
              <button>Редактировать</button>
              <button onClick={this.props.hideClk}>Скрыть</button>
            </div>
        </div>
    )
  }
};
/********************************************************************************/
export class MoreList extends Component {
  render() {
    let data = this.props.data;
    let hideClk = this.props.onclk;
    let list;
      list = data.map(function(item, index) {
          return (
              <div key={index} >
                  <MoreContact hideClk={hideClk}  data={item} />
              </div>
          )
      })
      return (
        <div className = 'moreList'>
          {list}
        </div>
      )
    }
};
/********************************************************************************/
export class More extends Component {
  render() {
    let searchId = this.props.data.more.id;
      let contactData = this.props.data.more.contactData.filter(function(element){
        let dataId = element.id;
        return dataId == searchId;
      });
    return (
      <div className = 'mainMore'>
        <MoreList onclk={this.props.data.clickHide}  data={contactData}/>
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
          <More data = {this.props}/>
        </div>
      )
    }
};
/********************************************************************************/
