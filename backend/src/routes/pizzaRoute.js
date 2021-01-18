const { Router } = require('express');
const router = Router();
const pizzaController = require('../controllers/pizza.controllers');

router.route('/').get(pizzaController.getPizzas).post().put();

// router
//   .route('/:id')
//   .get(userControllers.getUser)
//   .post()
//   .delete(userControllers.deleteUser)
//   .put();

module.exports = router;
