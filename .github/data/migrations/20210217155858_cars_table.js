const e = require("express");

exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    table.increments()
    table.text('VIN', 20).unique().notNullable()
    table.text('make',40)
    table.text('model', 40)
    table.text('mileage',999999)
    table.text('transmission', 40)
    table.text('title status', 40)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
