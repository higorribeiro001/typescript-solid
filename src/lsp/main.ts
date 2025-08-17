// Liskov Substition Principle: Subtipos precisam ser substituíveis por seus tipos de base.

// descrição mais simples: Se meu programa espera um Animal, algo do tipo Cachorro (que herda de Animal) deve servir como qualquer outro Animal.

// É muito dificil quebrar este principio por conta da tipagem, já que mudar o tipo de retorno da função mudando o seu comportamente quebra este principio

import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart";
import { FiftyPercentDiscount } from "./classes/discount";

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);
shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.checkout());
console.log(order.orderStatus);
