const ContactsRepository = require('../repositories/ContactsRepository');
const isValidUUID = require('../utils/isValidUUID');

class ContactController {
  async index(request, response) {
    const { orderBy } = request.query;

    const contacts = await ContactsRepository.findAll(orderBy);

    return response.status(200).json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(404).json('invalid user id');
    }

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({
        error: 'User Not Found',
      });
    }

    return response.status(200).json(contact);
  }

  async store(request, response) {
    const {
      name, email, phone, category_id,
    } = request.body;

    if (category_id && !isValidUUID(category_id)) {
      return response.status(404).json('invalid category id');
    }

    if (!name || !email || !phone) {
      return response.status(404).json({ error: 'Name, email, phone and category is required' });
    }

    const contactExists = await ContactsRepository.findByEmail(email);

    if (contactExists) {
      return response.status(400).json({
        error: 'This e-mail is already in use',
      });
    }

    const contact = await ContactsRepository.store({
      name,
      email,
      phone,
      category_id: category_id || null,
    });
    return response.json(contact);
  }

  async updated(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(404).json('invalid category id');
    }

    const {
      phone, email, name, category_id,
    } = request.body;

    if (!name || !email || !phone) {
      return response.status(404).json({ error: 'Name, email, phone and category is required' });
    }

    if (category_id && !isValidUUID(category_id)) {
      return response.status(404).json('invalid category id');
    }

    const contactExists = await ContactsRepository.findById(id);

    if (!contactExists) {
      return response.status(404).json({ error: 'user not found' });
    }

    const emailExists = await ContactsRepository.findByEmail(email);

    if (emailExists && emailExists.id !== id) {
      return response.status(404).json({ error: 'user not found' });
    }

    const contact = await ContactsRepository.update(id, {
      name,
      email,
      phone,
      category_id: category_id || null,
    });

    return response.json(contact);
  }

  async delete(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(404).json('invalid category id');
    }

    await ContactsRepository.delete(id);

    return response.sendStatus(204);
  }
}

module.exports = new ContactController();
