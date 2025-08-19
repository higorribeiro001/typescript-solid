import { Messaging } from "./messaging";

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks()); // depois de cada um dos testes, limpar os mocks

  it('should return undefined', () => {
    // System under test
    const sut = createSut();
    expect(sut.sendMessage('teste')).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log'); // vai ficar obaservando o comportamento
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1); // verifica se vai ser chamado somente uma vez
  });

  it('should call console.log with "Mensagem enviada:" and msg', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log'); // vai ficar obaservando o comportamento
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'teste'); // verifica se vai ser chamado somente uma vez
  });
});
