const pizzaController = {};

pizzaController.getPizzas = (req, res) => {
  res.json({ message: 'hola que hace' });
};

module.exports = pizzaController;
