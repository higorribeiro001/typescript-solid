describe('Primitive values', () => {
  it('should test jest assetions', () => {
    const number = 10;

    expect(number).toBeLessThan(11); // menor que 11
    expect(number).toBeLessThanOrEqual(10); // menor ou igual 10

    expect(number).toBeCloseTo(10.001); // espero que 10 esteja perto de 10

    expect(number).toHaveProperty('toString'); // verifica se há a existência da propriedade toString em number
  });

  it('should split tests', () => {
    const number = 10;

    expect(number).toBe(10); // para valores primitivos
    expect(number).toEqual(10); // para objetos

    expect(number).not.toBeNull();

    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();

    expect(number).toBeGreaterThan(9); // maior que 9
    expect(number).toBeGreaterThanOrEqual(10); // maior ou igual a 10
  });
});

describe('Objects', () => {
  it('should test jest assetions with objects', () => {
    const person = { name: 'Luiz', age: 30 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
    expect(person).toHaveProperty('age', 30); // verifica se age existe e se o valor é 30

    expect(person.name).toBe('Luiz');
  });
});
