import { Discount } from "../discount";
import { CartItem } from "./cart-item";

export interface ShoppingCartProtocol { // de acordo com o clean code, a classe está coesa quando ela trabalha somente com metodos de seus atributos
  items: Readonly<CartItem[]>;
  addItem(item: CartItem): void;
  removeItem(index: number): void;
  total(): number;
  totalWithDicount(): number;
  isEmpty(): boolean;
  clear(): void;
}

