const knex = require('knex')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
module.exports.up = async function(knex) {
    const exist = await knex.schema.hasTable('products');
    if (!exist){
        return knex.schema.createTable('products', (table)=>{
            table.increments('id');
            table.string('title').notNullable();
            table.integer('price').notNullable();
            table.string('thumbnail').notNullable();
        });
    };  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
module.exports.down = async function(knex) {
    const exist = await knex.schema.hasTable('products');
    if (exist){
        return knex.schema.dropTable('products');
    };  
};
