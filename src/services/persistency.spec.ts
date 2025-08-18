describe('TESTANDO ALGUMA COISA', () => {
  it('should return one', () => {
    const number = 1;
    expect(number).not.toBe(1);
  }); // é igual ao test()
});

describe('TESTANDO OUTRA COISA', () => {
  test('should return Luiz', () => {
    const nome = 'Luiz';
    expect(nome).toBe('Luiz');
  }); // é igual ao it()
});
