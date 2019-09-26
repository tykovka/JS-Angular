//Task 1
/**
 * const foo = (function() {
  var counterCalls = 0;
  return function() {
     return counterCalls++;
  }
})();
 * В данном случае замыкание позволяет забирать из функции ее промежуточные данные. 
 Можно удобно отслеживать состояние функции

 * */

/** 
(function timeToDo(toDo, i) {
  setTimeout((function (i) {
    return function foo() {
      if (i > 0) {
        console.log(i--);
        return foo()
      }
      console.log('⏲ Пора ' + toDo);
    }
  })(i), 100)
})('учить замыкания', 3);
Так же замыкание отлично подходит для работы с различными ассинхронностями или функциями, в которых теряется контекст
*/

//Task 2

/** 
if (!("a" in window)) {
  var a = 1;
  }
  alert(a);

  var a всплывает наверх и равна undefind, a есть в объекте window =>  a = undefind
*/

/**
 * var b = function a(x) {
  x && a(--x);
  };
  alert(a); 
  a не определена, создавая function a(x) мы сразу кладем ее в переменную b и не инициализируем

 */

/** 
  function a (x) {
      return x * 2;
  }
  var a;
  alert(a);
в var инициализуирется вызов функции а 
*/

/**
 * function b(x, y, a) {
arguments[2] = 10;
alert(a);
}
b(1, 2, 3);

arguments соберет все аргументы в массивоподобный объект и элементу с индексом 2 (те а) присвоит 10
 */

/** 
function a() {
  alert(this);
}
a.call(null);
this ни на что не указывает, значит поднимется до глобального объекта window a.call(null) вернет window 

*/





