import { MessagingProtocol } from "../classes/interfaces/messaging-protocol";

export class Messaging implements MessagingProtocol {
  // também não é responsabilidade do carrinho e nem do pedido (order)
  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }
}
