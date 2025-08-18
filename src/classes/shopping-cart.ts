import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';
import { ShoppingCartProtocol } from './interfaces/shoppint-cart-protocol';

// quantas pessoas vão vir pedir para alterar alguma coisa que esteja relacionada com esta classe? Se for mais de uma então esta classe tem mais de uma responsabilidade

export class ShoppingCart implements ShoppingCartProtocol { // de acordo com o clean code, a classe está coesa quando ela trabalha somente com metodos de seus atributos, ele agora cumpre com o contrato de ShoppingCartProtocol
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return +this._items.reduce((total, next) => total + next.price, 0).toFixed(2); // colocar o + na frente converte de string para number
  }

  totalWithDicount(): number {
    return this.discount.calculate(this.total());
  }

  // como só tem esta validação aqui, pode manter
  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo...');
    this._items.length = 0;
  }
}
