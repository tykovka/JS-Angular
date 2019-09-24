//Task1
// $button = document.querySelector('button');
// $button.addEventListener('click', () => {
//   return fetch('http://localhost:3000/users')
//     .then(response => response.json())
//     .then((users) => {
//       console.log(users);
//     });
// });

//Task2

// const $catalog = document.getElementById('catalog');

// const products = [
//   {
//     img: 'img/jacket.jpeg',
//     title: 'Куртка',
//     count: 1,
//     cost: '5000'
//   }, {
//     img: 'img/cap.jpeg',
//     title: 'Шапка',
//     count: 1,
//     cost: '800'
//   }, {
//     img: 'img/socks.jpg',
//     title: 'Носки',
//     count: 1,
//     cost: '300'
//   }
// ];

// const cart = [];

// class GoodsList {
//   constructor(title, count, cost) { //создание экземпляра класса
//     this.title = title;
//     this.count = count;
//     this.cost = cost;
//   }

//   renderCatalog() {
//     products.forEach(product => {
//       $wrapper = document.createElement('div');
//       $wrapper.classList.add('wrapper');
//       $button = document.createElement('button');
//       $button.textContent = 'Купить';
//       $button.classList.add('button');
//       $button.addEventListener('click', () => addToCart(product));

//       for (key in product) {
//         if (key === 'img') {
//           $link = document.createElement('a');
//           $link.href = product[key];
//           $img = document.createElement('img');
//           $img.classList.add('image')
//           $img.src = product[key];
//           $link.appendChild($img);
//           $wrapper.appendChild($link);
//         }
//         else {
//           $row = document.createElement('span');
//           $row.textContent = product[key];
//           $wrapper.appendChild($row);
//         }
//         $wrapper.appendChild($button);
//         $catalog.appendChild($wrapper);
//       }
//     });
//     $cart = document.createElement('div');
//     $cart.id = 'cart';
//     $catalog.appendChild($cart);
//   }

//   addToCart(item) {
//     cart.push(item);
//     updateCart();
//   }

//   removeFromCart(item) {
//     cart.splice(cart.indexOf(item), 1);
//     updateCart();
//   }

//   updateCart() {
//     const $cartWrapper = document.createElement('div');
//     $cartWrapper.classList.add('cartWrapper');
//     const $title = document.createElement('h2');
//     $title.textContent = 'Корзина';
//     $cartWrapper.appendChild($title);
//     const $cart = document.getElementById('cart');
//     $cart.innerHTML = '';
//     let sumTotal = 0;
//     cart.forEach(item => {
//       sumTotal = sumTotal + +item.cost;
//       $cartItem = document.createElement('div');
//       $cartItem.classList.add('cart')
//       $button = document.createElement('button');
//       $button.textContent = '❌';
//       $button.classList.add('removeBtn')
//       $button.addEventListener('click', () => removeFromCart(item));

//       for (key in item) {
//         if (key !== 'img') {
//           $row = document.createElement('span');
//           $row.textContent = item[key];

//           $cartItem.appendChild($row);
//           $cartItem.appendChild($button);
//           $cartWrapper.appendChild($cartItem)
//           $cart.appendChild($cartWrapper);
//         };
//       };
//     }
// }
// sumTotal() {
//   $sumTotal = document.createElement('p');
//   $sumTotal.textContent = 'Общая сумма: ' + sumTotal;
//   $cart.appendChild($sumTotal);
// }


// Task4
// str = 'Sed ut perspiciatis unde omnis:\'iste natus error sit\' don\'t some';
// str = str.replace(/'+/g, '"');
// console.log(str);

// Task5
str = 'Sed ut perspiciatis unde omnis: \'iste natus error sit \' don\'t some';
str = str.replace(/(?!'|[a-z]'[a-z])([\s])'|^'/g, ' "')
console.log(str);

//Task6 