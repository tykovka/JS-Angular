//Task 1
var ranks = {
  units : '',
  tens: '',
  hundreds: ''
};

var number = +prompt('Введите число');

function splitRanks(num) {
  if (num >= 1000 || num <= 0) {
    console.log('Вы ввели неверное число ' + ranks);
  }
  if (num % 10 !==0) {
    ranks.units = num % 10;
    ranks.tens = Math.floor(num / 10 % 10);
    ranks.hundreds = Math.floor(num / 100);
  }
  return ranks;
}

//Task 2

var cart = [ {
  title : 'Куртка',
  count : '1',
  cost : '5000'
  }, 
  {
    title : 'Шапка',
    count : '1',
    cost : '800'
  },
  {
    title : 'Носки',
    count : '5',
    cost : '300'
  }
 ]
 var res = 0;

 cart.forEach( el => res += el.count * el.cost);
 console.log(res);
