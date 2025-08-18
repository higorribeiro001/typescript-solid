import { OrderStatus } from "./interfaces/order-status";
import { Messaging } from "../services/messaging";
import { Persistency } from "../services/persistency";
import { ShoppingCart } from "./shopping-cart";
import { CustomerOrder } from "./interfaces/customer-protocol";
import { ShoppingCartProtocol } from "./interfaces/shoppint-cart-protocol";
import { MessagingProtocol } from "./interfaces/messaging-protocol";
import { PersistencyProtocol } from "./interfaces/persistence-protocol";

export class Order { // classe de alto nível
  private _orderStatus: OrderStatus = 'open'; //precisa ter o status da ordem do pedido?

  constructor(
    private readonly cart: ShoppingCartProtocol, // agora Order depende da abstração (interface) e não de outra classe
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder
  ) {} // injeção de dependencias

  // precisa retornar o status do pedido?
  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  // não devia estar em carrinho
  checkout(): void {
    if (this.cart.isEmpty()) { // precisa fazer esta validação
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(`Seu pedido com total de ${this.cart.totalWithDicount()} foi recebido.`);
    this.persistency.saveOrder();
    this.cart.clear();
    console.log('O cliente é: ', this.customer.getName(), this.customer.getIDN())
  }
}
