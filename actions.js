
/*Определяем действия*/
export const    SEARCH = "SEARCH",
                MORE = "MORE",
                HIDE = "HIDE";






/*Создаём действие*/

export function search(symbol) {
  return {
    type: SEARCH,
    symbol: symbol
    }
};
export function more(id) {
  return {
    type: MORE,
    id: id
    }
};
export function hide() {
  return {
    type: HIDE,
    id: ""
    }
};
