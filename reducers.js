import {initialStore} from './actions';
import {SEARCH} from './actions';
import {search} from './actions';
import {store} from './store';
import {searchFiltr, FILTR} from './actions';

export function reducer (state = initialStore, action){

  switch (action.type) {
    /*--------------------------------------------*/
      case SEARCH:

           return Object.assign({}, state, {
                    symbol: action.symbol
                  });
    /*-------------------------------------------*/
      case FILTR:
            
            return Object.assign({}, state, {
                    contactData: action.contactData
                  });
/*----------------------------------------------------*/
        break;
      default:
            return state
  };
};
