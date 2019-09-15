const $catalog = document.getElementById('catalog');

const products = [
  {
    title: 'Куртка',
    count: 1,
    cost: '5000'

  }, {
    title: 'Шапка',
    count: 1,
    cost: '800'
  }, {
    title: 'Носки',
    count: 1,
    cost: '300'
  }
];

const cart = [];

const updateCart = () => {
  const $cartWrapper = document.createElement('div');
  $cartWrapper.classList.add('cartWrapper');
  const $title =  document.createElement('h2');
  $title.textContent = 'Корзина';
  $cartWrapper.appendChild($title);
  const $cart = document.getElementById('cart');
  $cart.innerHTML = '';
  let sumTotal = 0;
  cart.forEach(item => {
    sumTotal = sumTotal + +item.cost;
    $cartItem = document.createElement('div');
    $cartItem.classList.add('cart')
    $button = document.createElement('button');
    $button.textContent = '❌';
    $button.classList.add('removeBtn')
    $button.addEventListener('click', () => removeFromCart(item));

    for (key in item) {
      $row = document.createElement('span');
      $row.textContent = item[key];  

      $cartItem.appendChild($row);
      $cartItem .appendChild($button);
      $cartWrapper.appendChild($cartItem )
      $cart.appendChild($cartWrapper);

    }
  });
  $sumTotal = document.createElement('p');
  $sumTotal.textContent = 'Общая сумма: ' + sumTotal; 
  $cart.appendChild($sumTotal);
}
const removeFromCart = item => {
  console.log(item);
  cart.splice(cart.indexOf(item),1);
  updateCart();
}
const addToCart = item => {
  cart.push(item);
  updateCart();
}

const renderCatalog = () => {
  products.forEach(product => {
    $wrapper = document.createElement('div');
    $wrapper.classList.add('wrapper');
    $button = document.createElement('button');
    $button.textContent = 'Купить';
    $button.classList.add('button');
    $button.addEventListener('click', () => addToCart(product));

    for (key in product) {
      $row = document.createElement('span');
      $row.textContent = product[key];

      $wrapper.appendChild($row);
      $wrapper.appendChild($row);
      $wrapper.appendChild($button);
      $catalog.appendChild($wrapper);
    }
  });
  $cart = document.createElement('div');
  $cart.id = 'cart';
  $catalog.appendChild($cart);
}

renderCatalog();















// const order = (item) => {
//   $cart = document.createElement('div');
//   for (key in item) {
//     $row = document.createElement('span');
//     $row.textContent = item[key];
//     $cart.appendChild($row);
//   }
//   $catalog.appendChild($cart);
// };

// const sumOrder = () => {

// }

// product.forEach(el => {
//   const valOfProduct = Object.values(el);

//   $wrapper = document.createElement('div');
//   $wrapper.classList.add('wrapper');

//   $button = document.createElement('button');
//   $button.textContent = 'Купить';
//   $button.classList.add('button');
//   $button.addEventListener('click', () => order(el));


//   valOfProduct.forEach(item => {
//     $row = document.createElement('span');
//     $row.textContent = item;

//     $wrapper.appendChild($row);
//     $wrapper.appendChild($row);
//     $wrapper.appendChild($button);
//     $catalog.appendChild($wrapper);
//   })
// })


