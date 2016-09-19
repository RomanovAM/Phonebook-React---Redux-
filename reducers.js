import {initialStore} from './actions';
import {SEARCH} from './actions';
import {search} from './actions';
import {store} from './store';

export function reducer (state = initialStore, action){
  //console.log(state.searchInput.symbol);
  //console.log(action.symbol);
  //let a = state.searchInput.symbol + action.symbol;
  //console.log(state.searchInput.symbol);
  switch (action.type) {
      case SEARCH:
           return Object.assign({}, state, {
                    symbol: action.symbol
                  });
      default:
            return state
  };
};
