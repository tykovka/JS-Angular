'use strict'
//Task 1
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2, тк сперва выполнится инкремент и а увеличится на 1
// d = b++; alert(d);           // 1, тк сперва идет вывод, а затем инкремент
// c = (2+ ++a); alert(c);      // 5, в а уже лежит 2, мы инкрементом увеличиваем еще на 1 и просто прибавляем 2
// d = (2+ b++); alert(d);      // 4, аналогично предыдущему, но b увеличится на 1 после вывода
// alert(a);                    // 3, после всех операций в а осталась 3
// alert(b);                    // 3, после вывода сработал инкремент, b увеличилось на 1

//Task 2
// var a = 2;
// var x = 1 + (a *= 2); 
//x = 5, тк (a *= 2) = 4

//Task 3
var a = 10;
var b = 15;
function compare() {
  if (a > 0 && b > 0) {
    alert(a - b);
  }
  else if (a < 0 && b < 0) {
    alert(a * b);
  }
  else if ( (a < 0 && b > 0) || (a > 0 && b < 0)) {
   alert(a + b);
  }
}
compare();

// Task 4
// Зададим рандомное число a, 
// можно так же просто попросить его ввести a = +prompt('Введите число');
function random(min,max) {
 var a =  min + Math.random() * (max - min);
 return Math.round(a);
}
var a = random(1,15);
console.log(a);
var res = ' ';
switch (a) {
  case 1 :
    res = res +  '1 ';
  case 2 :
    res = res + '2 '; 
  case 3 :
    res = res + '3 ';
  case 4:
    res = res + '4 ';
  case 5:
    res = res + '5 ';
  case 6:
    res = res + '6 ';
  case 7:
    res = res + '7 ';
  case 8:
    res = res + '8 ';
  case 9:
    res = res + '9 ';
  case 10:
    res = res + '10 ';
  case 11:
    res = res + '11 ';
  case 12:
    res = res + '12 ';
  case 13:
    res = res + '13 ';
  case 14:
    res = res + '14 ';
  case 15:
    res = res + '15';
    console.log(res)
    break;
}

//Task 5
function sum(a,b) {
  var sum = a + b;
  return sum;
}

function diff (a,b) {
  var diff = a - b;
  return diff;
}

function multip (a,b) {
  var multip = a * b;
  return multip;
}

function div (a,b) {
  var div = a / b;
  return div;
}
// var sum = sum(10, 11);
// var diff = diff(4, 5);
// var multip = multip(5, 6);
// var div = div(10, 2);
// var res = `sum = ${sum}, diff = ${diff}, multip = ${multip}, div = ${div}`;
// console.log(res);


//Task 6
function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case 'sum':
      return sum(arg1,arg2);
      break;
    case 'diff':
      return diff(arg1,arg2);
      break;
    case 'multip':
      return diff(arg1,arg2);  
      break;
    case 'div':  
      return div(arg1,arg2); 
  }
}

//Task7
// console.log(null=== 0); //false null имеет тип object,используется для обозначения отсутствия значения у переменной,
//можно считать своего рода "заглушкой",мы не забыли указать переменной значение, но ничего в него не положили
//0 имеет тип number и является обычным значением переменной



//Task 8 
function power(val, pow) {
  var res = val * val;
  if (pow > 2) {
    res = val * power(val, pow - 1);
  }
  return res;
} 

var res = power(2,3);
// console.log(res);