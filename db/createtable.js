const dbconfig = require("./config");
const knex = require("knex")(dbconfig.sqlite);

(async () => {
	try {
		const tableExist = await knex.schema.hasTable("mesagges");
		if (!tableExist) {
			await knex.schema.createTable("messages", (table) => {
				table.increments("id"); // id => primary key
				table.string("date");
				table.string("author");
				table.string("text");
			});
			console.log("Table Created ");
		} else {
			console.log("Skipping creation,already exists...");
		}
	} catch (error) {
		console.log(error);
		throw error;
	} finally {
		knex.destroy();
	}
})();