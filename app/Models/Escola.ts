import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Aluno from './Aluno'

export default class Escola extends BaseModel {
  @hasMany(() => Aluno)
  public alunos: HasMany<typeof Aluno>
  @column({ isPrimary: true })
  public id: number
  @column()
  public userId: number
  @column()
  public name: string
  @column()
  public street: string
  @column()
  public number: string
  @column()
  public neighborhood: string
  @column()
  public city: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
