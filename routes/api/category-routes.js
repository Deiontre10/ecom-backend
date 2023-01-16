const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const data = await Category.findAll({
      include: [{
        model: Product,

      }]
    }
    );
    res.json(data);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const data = await Category.findByPk(req.params.id, {
      include: [{
        model: Product,

      }]
    }
    );
    res.json(data);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const data = await Category.create(req.body);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const data = await Category.update(req.body, {
      where: { id: req.params.id }
    });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const data = await Category.destroy({
      where: { id: req.params.id }
    });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
