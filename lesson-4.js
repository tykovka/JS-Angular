//Task 1
var ranks = {
  units: '',
  tens: '',
  hundreds: ''
};

// var number = +prompt('Введите число');
number = 222;

function splitRanks(num) {
  if (num >= 1000 || num <= 0) {
    console.log('Вы ввели неверное число ' + ranks);
  }
  if (num % 10 !== 0) {
    ranks.units = num % 10;
    ranks.tens = Math.floor(num / 10 % 10);
    ranks.hundreds = Math.floor(num / 100);
  }
  return ranks;
}

//Task 2

var cart = [{
  title: 'Куртка',
  count: '1',
  cost: '5000'
},
{
  title: 'Шапка',
  count: '1',
  cost: '800'
},
{
  title: 'Носки',
  count: '5',
  cost: '300'
}
]
var res = 0;
cart.forEach(el => res += el.count * el.cost);


//add-task 1
function conjugation(num, form1, form2, form3) {
  mod = num % 10;
  if (mod === 0 || num === 11) { return form3 };
  if (mod === 1) { return form1 };
  if (mod == 2) { return form2 }
  if (mod > 3 && mod < 5) { return form2 }
  return form3;
}

//add-task 2
function toNumSystem(num) {
  var hex = num.toString(16);
  if (hex.length === 1) {
    hex += '0';
  }
  return hex;
}

function rgbToHex(r, g, b) {
  if ( (r < 0 || g < 0 || b < 0) || (r > 255 || g > 255 || b > 255) ) {
    return "неверно введены числа";
  }
   else {
     return res = '#' + toNumSystem(r) + toNumSystem(g) + toNumSystem(b);
   }
}


