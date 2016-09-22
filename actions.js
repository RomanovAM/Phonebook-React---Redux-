
/*Определяем действия*/
export const    SEARCH = "SEARCH",
                FILTR = "FILTR";





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

              symbol: ""

};
/*Создаём действие*/

export function search(symbol) {
  console.log(`Создание действия SEARCH, Получение строки ${symbol}`);
  return {
    type: SEARCH,
    symbol: symbol
    }
};
export function searchFiltr(contactData) {
  console.log(`Создание действия FILTR, Получение массива контактов ${contactData}`);
  return {
    type: FILTR,
    contactData: contactData
    }
};
