/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('random').truncate()
  await knex('random').insert([
    {id: 1, gibberish: 'rowValue1'},
    {id: 2, gibberish: 'rowValue2'},
    {id: 3, gibberish: 'rowValue3'}
  ]);
};
