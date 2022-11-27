const  {faker}  = require('@faker-js/faker');

const { commerce, image } = faker;

const generateProducts = (num) => {
	const array = [];
	for (let i = 1; i <= num; i++) {
		array.push({
			Title: commerce.productName(),
			Price: commerce.price(),
			Thumbnail: image.imageUrl(),
		});
	}
	return array;
};


module.exports = generateProducts;