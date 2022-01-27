const faker = require('faker')

function createRecord(knex, id) {
	return knex('products_db').insert({
		product_id: id,
		product_title: faker.commerce.productName(),
		product_desc: faker.commerce.productDescription(),
		product_price: faker.commerce.price(),
		created_at: faker.datatype.datetime(),
	})
}

exports.seed = (knex) => knex('products_db').del()
    .then(() => {
        const records = []

        // eslint-disable-next-line no-plusplus
        for (let i = 1; i < 10; i++) {
            records.push(createRecord(knex, i))
        }

        return Promise.all(records)
    })
