const { Router } = require("express");
const productsRoutes = require('./products/products.routes');
const testRoutes = require('./test/test.routes')


const router = Router();


router.use('/products', productsRoutes)
router.use('/products-test', testRoutes)




module.exports = router;