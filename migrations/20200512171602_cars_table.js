
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl.string("vin", 255).notNullable().unique();
    tbl.string("make", 128).notNullable();
    tbl.string("model", 128).notNullable();
    tbl.integer("mileage", 255).notNullable();
    tbl.string("transmission", 128);
    tbl.string("title(clean/salvage,etc.)", 128);

    tbl.timestamp(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
