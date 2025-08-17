export class Messaging {
  // também não é responsabilidade do carrinho e nem do pedido (order)
  sendMessage(msg: string): void {
    console.log('Mensagem enviada: ', msg);
  }
}
