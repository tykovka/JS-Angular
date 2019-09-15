const $catalog = document.getElementById('catalog');

const products = [
  {
    img: 'img/jacket.jpeg',
    title: 'Куртка',
    count: 1,
    cost: '5000'
  }, {
    img: 'img/cap.jpeg',
    title: 'Шапка',
    count: 1,
    cost: '800'
  }, {
    img: 'img/socks.jpg',
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
      if ( key !== 'img') {
      $row = document.createElement('span');
      $row.textContent = item[key];  

      $cartItem.appendChild($row);
      $cartItem .appendChild($button);
      $cartWrapper.appendChild($cartItem )
      $cart.appendChild($cartWrapper);
      }
    }
  });
  $sumTotal = document.createElement('p');
  $sumTotal.textContent = 'Общая сумма: ' + sumTotal; 
  $cart.appendChild($sumTotal);
}
const removeFromCart = item => {
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
      if (key === 'img') {
        $link = document.createElement('a');
        $link.href = product[key]; 
        $img = document.createElement('img');
        $img.classList.add('image')
        $img.src = product[key]; 
        $link.appendChild($img);
        $wrapper.appendChild($link);      
      }
      else {
        $row = document.createElement('span');
        $row.textContent = product[key];
        $wrapper.appendChild($row);    
      }
      $wrapper.appendChild($button);
      $catalog.appendChild($wrapper);
    }
  });
  $cart = document.createElement('div');
  $cart.id = 'cart';
  $catalog.appendChild($cart);
}

renderCatalog();
