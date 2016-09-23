import { createStore } from 'redux';
import {reducer} from './reducers';
import { applyMiddleware, compose } from 'redux';

export let initialStore = {
                contactData:[
                {
                  id: 1,
                  number: "+7 (986) 563-33-44",
                  surname: "Иванов",
                  name: "Иван",
                  patronymic: "Иванович"
                },
                {
                  id: 2,
                  number: "+7 (536)963-55-76",
                  surname: "Петров",
                  name: "Сергей",
                  patronymic: "Степанович"
                },
                {
                  id: 3,
                  number: "+7 (457) 369-22-11",
                  surname: "Сидоров",
                  name: "Николай",
                  patronymic: "Гаврилович"
                }
              ],
              symbol: "",
              id: ""

};
export let store = createStore(reducer,window.devToolsExtension && window.devToolsExtension());
