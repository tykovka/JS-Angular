class GoodsList {
  constructor(title, count, cost) { //создание экземпляра класса
    this.title = title;
    this.count = count;
    this.cost = cost;
  }

  renderCatalog() {
    //отрисовать каталог
  }

  addToCart() {
    //добавить в корзину
  }

  removeFromCart() {
    //удалить из корзины
  }

  updateCart() {
    //обновить и отрисовать корзину
  }

  sumTotal() {
    //рассчет стоимости
  }
}


class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) { this.toppings.push(topping) }

  removeTopping(topping) { this.toppings = this.toppings.filter(item => item !== topping) }

  getToppings() { return this.toppings }

  getSize() { return this.size; }

  getStuffing() { return this.stuffing }

  calculatePrice() { 
    return this.size.price + 
    this.stuffing.reduce((sum, item) => sum += item.price, 0) + 
    this.toppings.reduce((sum, item) => sum += item.price, 0); 
  }

  calculateCalories() { 
    return this.size.kkal + 
    this.stuffing.reduce((sum, item) => sum +=  item.kkal, 0) + 
    this.toppings.reduce((sum, item) => sum +=  item.kkal, 0); 
  }
}


const sizes = {
  big: {
    name: 'big',
    price: 100,
    kkal: 40
  },
  small: {
    name: 'small',
    price: 50,
    kkal: 20
  }
};

const stuffings = {
  cheese: {
    name: 'cheese',
    price: 10,
    kkal: 20
  },
  salat: {
    name: 'salat',
    price: 20,
    kkal: 5
  },
  bacon: {
    name: 'bacon',
    price: 50,
    kkal: 150
  }
}

const burger = new Hamburger(sizes.big, [stuffings.cheese, stuffings.salat])
burger.addTopping(stuffings.bacon);
console.log(burger.calculateCalories())
