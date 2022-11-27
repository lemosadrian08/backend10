const envConfig = require("../../config");


let ProductsDao;

switch(envConfig.DATASOURCE) {
  case 'firebase':
    ProductsDao = require('./products/products.firebase.dao');
    break
  default:
    throw new Error("Invalid Datasou,rce");
}

module.exports = {
  ProductsDao
}