import { ShoppingCart } from "./shopping-cart";
import { Discount } from "./discount";
import { CartItem } from "./interfaces/cart-item";

// iremos fazer o teste com mocks para fazer teste isolado
// mocks são objetos que fingirá ser a dependencia

// factories
const createSut = () => {
  class DiscointMock extends Discount {}
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
}

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
}

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }

  return new CartItemMock(name, price);
}

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();

  const cardItem1 = createCartItem('Camiseta', 40);
  const cardItem2 = createCartItem('Caneta', 1);
  sut.addItem(cardItem1);
  sut.addItem(cardItem2);
  return { sut, discountMock };
}

// end factories

describe('ShoppingCart', () => {
  it('should be an empty cart when no produto is added', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 cart items', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  it('should test total and totalWithDiscount', () => {
    const { sut } = createSutWithProducts();
    expect(sut.total()).toBe(41);
    expect(sut.totalWithDicount()).toBe(41);
  });

  it('should add products and clear cart', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should remove products', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
    sut.removeItem(0);
    expect(sut.isEmpty()).toBe(true);
  });
})
