const { Router } = require('express');
const ContactController = require('./app/controllers/ContactController');
const CategoryController = require('./app/controllers/CategoryController');

const router = Router();

router.get('/contacts/:id', ContactController.show);
router.get('/contacts', ContactController.index);
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.updated);

router.get('/categories', CategoryController.index);
router.post('/categories', CategoryController.store);
router.get('/teste', CategoryController.teste);

module.exports = router;
