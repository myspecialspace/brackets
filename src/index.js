module.exports = function check(str, bracketsConfig) {
    //const OPEN_BRACKETS = ['(', '{', '[', '|',]; //типы открыв.скобок

    /*const bracketsConfig = {  //какие закрыв. им соотв.,надо преобразовать в объект - [ключ]:значение
      [')']: '(',
      ['}']: '{',
      [']']: '[',
      ['|']: '|',
    };*/

  let stack = [];

  let bracketsObj = Object.fromEntries(bracketsConfig);//преобр. в Object { foo: "bar", ключ: значение }

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i]; //выбир.текущий символ кот.рассматриваем
    let topElement = stack[stack.length - 1];//верхний элемент стека (какой лежит на верхушке)

     if (stack.length === 0) { //стек пуст?
          stack.push(currentSymbol); //push() добавляем текущ.скобку в конец массива и возвращаем новую длину массива
     } else if (currentSymbol == bracketsObj[topElement]) { //если стек был не пуст(была скобка) - смотрим какой элемент лежит на верхушке стека и равен ли он текущему
          stack.pop();//если ок, то удаляем посл.элем.стека
     } else {
          stack.push(currentSymbol); //если не было закрывающей пары до, то добавляем скобку в стек ( + (
     }
  }return stack.length === 0; //в конце проверим стек пуст? все ли пары закрыты
}
