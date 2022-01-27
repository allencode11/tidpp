exports.up = function(knex) {
    return knex.schema.createTable('products_db', table => {
        table.increments('product_id').notNullable()
        table.string('product_title').notNullable()
        table.string('product_desc').notNullable()
        table.integer('product_price').notNullable()
        table.dateTime('created_at').notNullable()
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('product_id')
}
