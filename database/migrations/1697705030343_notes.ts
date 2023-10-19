import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'notes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.foreign('student_id').references('id').inTable('students').onDelete('CASCADE').notNullable()
      table.foreign('cours_id').references('id').inTable('cours').onDelete('CASCADE').notNullable()
      table.float('notes', 2).notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
