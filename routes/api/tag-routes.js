const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const data = await Tag.findAll({
      include: [{
        model: Product,
      },
    ]
    });

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one tag by its `id` value
  try {
    const data = await Tag.findByPk(req.params.id, {
      include: [{
        model: Product,

      }]
    }
    );
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const data = await Tag.create(req.body);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag by its `id` value
  try {
    const data = await Tag.update(req.body, {
      where: { id: req.params.id }
    });
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a tag by its `id` value
  try {
    const data = await Tag.destroy({
      where: { id: req.params.id }
    });
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
