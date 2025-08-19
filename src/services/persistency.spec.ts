// describe('TESTANDO ALGUMA COISA', () => {
//   it('should return one', () => {
//     const number = 1;
//     // expect(number).not.toBe(1);
//     expect(number).toBe(1);
//   }); // é igual ao test()
// });

// describe('TESTANDO OUTRA COISA', () => {
//   test('should return Luiz', () => {
//     const nome = 'Luiz';
//     expect(nome).toBe('Luiz');
//   }); // é igual ao it()
// });

import { Persistency } from "./persistency";

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks()); // depois de cada um dos testes, limpar os mocks

  it('should return undefined', () => {
    // System under test
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log'); // vai ficar obaservando o comportamento
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1); // verifica se vai ser chamado somente uma vez
  });

  it('should call console.log with "Pedido salvo com sucesso..."', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log'); // vai ficar obaservando o comportamento
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...'); // verifica se vai ser chamado somente uma vez
  });
});
