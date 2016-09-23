import {initialStore} from './store';
import {SEARCH} from './actions';
import {search} from './actions';
import {store} from './store';
import {more, MORE,hide,HIDE} from './actions';

export function reducer (state = initialStore, action){

  switch (action.type) {
    /*--------------------------------------------*/
      case SEARCH:

           return Object.assign({}, state, {
                    symbol: action.symbol
                  });
    /*-------------------------------------------*/
      case MORE:

            return Object.assign({}, state, {
                    id: action.id
                  });
    /*-------------------------------------------*/
      case HIDE:

            return Object.assign({}, state, {
                    id: action.id
                  });
/*----------------------------------------------------*/
      break;
        default:
          return state
  };
};
