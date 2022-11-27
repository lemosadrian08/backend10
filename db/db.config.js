const envConfig = require('../config');
const firebaseConfig = require('./firebase/firebase.config.json');

module.exports = {
/*   file: { */
/*     users: './data/users.json', */
/*     products: './data/products.json'
  },
  mongodb: {
    uri: `mongodb+srv://lemosadrian08:${envConfig.DB_PASSWORD}@cluster0.gs1l0ic.mongodb.net/Users?retryWrites=true&w=majority`
  }, */
  firebase: {
    credentials: firebaseConfig
  },
}