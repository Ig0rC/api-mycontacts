const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();

    return response.json(categories);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.create({ name });

    return response.json(category);
  }

  async teste(request, response) {
    const values = await CategoriesRepository.teste();
    console.log(values);
    return response.json(values);
  }
}

module.exports = new CategoryController();
