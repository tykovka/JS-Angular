class GoodsList {
  constructor (title, count, cost) { //создание экземпляра класса
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
  constructor(size, stuffing) { ... }
  addTopping(topping) { // Добавить добавку }
  removeTopping(topping) { // Убрать добавку }
  getToppings(topping) { // Получить список добавок }
  getSize() { // Узнать размер гамбургера }
  getStuffing() { // Узнать начинку гамбургера }
  calculatePrice() { // Узнать цену }
  calculateCalories() { // Узнать калорийность }
  }