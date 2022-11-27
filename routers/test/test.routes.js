const { Router } = require("express");
const generateProducts = require('../../utils/mocks.utils')
const router = Router();


router.post('/', (req, res) => {
	res.json(generateProducts(5));
});



module.exports = router;