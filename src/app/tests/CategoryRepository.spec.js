const { client } = require('../../database');
const CategoriesRepository = require('../repositories/CategoriesRepository');

describe('CategoryRepository', () => {
  afterAll(async () => {
    await client.end();
  });

  it('Deve salvar categoria no banco de dados', async () => {
    const categoryCreated = await CategoriesRepository.create({
      name: 'Coritinhas',
    });

    expect(categoryCreated).toHaveProperty('id');
    expect(categoryCreated.name).toBe('Coritinhas');
  });

  it('Deve listar as categorias', async () => {
    const categories = await CategoriesRepository.findAll();

    expect(categories).toBeInstanceOf(Array);
    expect(categories).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: expect.any(String) }),
        expect.objectContaining({ name: expect.any(String) }),
      ]),
    );
  });
});
