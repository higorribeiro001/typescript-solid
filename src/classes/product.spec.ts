import { Product } from "./product";

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks()); // depois de cada um dos testes, limpar os mocks

  it('should return undefined', () => {
    // System under test
    const sut = createSut('Camiseta', 49.90);
    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut.price).toBeCloseTo(49.90);
  });
});
