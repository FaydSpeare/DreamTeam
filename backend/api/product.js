const express = require('express')
const router = express.Router()

const Product = require('../models/Product')

router.delete('/:id', (req, res) => {
    List.query().deleteById(req.params.id)
                .then(() => res.status(204).end())
                .catch(e => res.send(e))
})

// Search for products
router.search('/', (req, res) => {
    Product.query().where('product_name', 'like', req.body.regex)
                   .withGraphFetched(['brand', 'category'])
                   .then(products => res.json(products))
                   .catch(e => res.send(e))
})

module.exports = router