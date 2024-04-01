const request = require('supertest');
const { client } = require('../../database');
const CategoriesRepository = require('../repositories/CategoriesRepository');
const { app } = require('../../app');

describe('CategoryController', () => {
  afterAll(async () => {
    await client.end();
  });

  it('Deve cadastrar a categoria', async () => {
    const response = await request(app)
      .post('/categories')
      .send({
        name: 'Test jest',
      });

    console.log(response.data);
    expect(response.status).toBe(200);
  });

  it('Deve salvar no banco de dados', async () => {
    const categoryCreated = await CategoriesRepository.create({
      name: 'Coritinhas',
    });

    expect(categoryCreated).toHaveProperty('id');
    expect(categoryCreated.name).toBe('Coritinhas');
  });

  it('Deve buscar o usuário', async () => {
    const categoryCreated = await CategoriesRepository.findAll();

    expect(categoryCreated).toBeInstanceOf(Array);
  });
});
