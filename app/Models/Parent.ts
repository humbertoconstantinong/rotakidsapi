import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Aluno from './Aluno'

export default class Parent extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasMany(() => Aluno)
  public alunos: HasMany<typeof Aluno>
  
  @column()
  public name: string
  
  @column()
  public last_name: string

  @column()
  public phone: string

  @column()
  public document_number: string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
