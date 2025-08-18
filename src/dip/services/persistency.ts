import { PersistencyProtocol } from "../classes/interfaces/persistence-protocol";

export class Persistency implements PersistencyProtocol {
  // também não é responsabilidade do carrinho
  saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }
}
