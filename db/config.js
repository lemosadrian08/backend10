const path = require("path");
const firebaseConfig = require('./firebase/firebase.config.json');

module.exports={
    mariaDB: {
		client: 'mysql',
		connection: {
			host: "127.0.0.1",
			port: 3306,
			user: "root",
			password: "",
			database: "backendDB",
		},
		useNullAsDefault: true,
	},
	sqlite: {
		client: "sqlite3",
		connection:{
			filename: path.resolve(__dirname, "chat.sqlite")
		},
		useNullAsDefault: true
	},
	firebase: {
		credential: firebaseConfig,
	}
}