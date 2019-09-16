// //Task 1 
var ROWS = 8;
var COLS = 8;
var letters = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

var $wrapper = document.getElementById('wrapper')
var $tabel = document.createElement('tabel');
$wrapper.appendChild($tabel);

var $row = document.createElement('tr');

//создаем строку с буквами 
for (var n = 0; n <= COLS; n++) {
  var $cell = document.createElement('td')
  $cell.classList.add('td');
  $cell.textContent = letters[n];
  $row.appendChild($cell);
  $tabel.appendChild($row);
}

// генерируем поле
for (var i = 0; i < ROWS; i++) {
  var $row = document.createElement('tr');

  for (var j = 0; j <= COLS; j++) {
    var $cell = document.createElement('td')
    $cell.classList.add('td');

    //создаем колонку с цифрами
    if (j === 0) {
      var $cell = document.createElement('td')
      $cell.classList.add('td');
      for (k = 0; k < COLS; k++) {
        $cell.textContent = i + 1;
        $cell.classList.add('white');
      }

    }
    if (i % 2 ==  j % 2) {
      $cell.classList.add('white')
    }
    else {
      $cell.classList.add('dark');
    }

    $row.appendChild($cell);
  }

  $tabel.appendChild($row);
}

//Task 2 - 3 

var product = [
  {
    title: 'Куртка',
    count: 1,
    cost: '5000'
  },
  {
    title: 'Шапка',
    count: 1,
    cost: '800'
  },
  {
    title: 'Носки',
    count: 5,
    cost: '300'
  }
]

var $cart = document.getElementById('cart');
var $catalog = document.getElementById('catalog');
var resSum = 0;
var resCount = 0;
var resName = ' ';


function fillingCart(product) {
  product.forEach(el => resSum += el.count * el.cost);
  product.forEach(el => resCount += el.count);
  product.forEach(el => resName += el.title + ' ');
  console.log(resCount)
  if (resSum === 0 && resCount === 0) {
    $cart.textContent = "Корзина пуста"
  }
  $cart.textContent = `В корзине: ${resCount} товаров на сумму ${resSum} рублей`
  $catalog.textContent = `Каталог: ${resName}  `

}

fillingCart(product);

