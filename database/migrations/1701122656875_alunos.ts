import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'alunos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("name")
      table.string("last_name")
      table.string("gender")
      table.string("street")
      table.string("neighborhood")
      table.string("city")
      table.string("zip_code")
      table.string("number")
      table.string("age")
      table.string("complement")
      table.string("turn")
      table.string("parent_document_number")
      table.string("latitude")
      table.string("longitude")
      table.string("image")

      table.integer("escola_id").unsigned().references("escolas.id").onDelete('CASCADE')
      table.integer("user_id").unsigned().references("users.id").onDelete('CASCADE')
      table.integer("parent_id").unsigned().references("parents.id").onDelete('CASCADE')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
