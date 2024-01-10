// app/Models/Aluno.ts
import { BaseModel, column, } from '@ioc:Adonis/Lucid/Orm';
import { DateTime } from 'luxon';

export default class Aluno extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public last_name: string;

  @column()
  public gender: string;

  @column()
  public street: string;

  @column()
  public neighborhood: string;

  @column()
  public city: string;

  @column()
  public zipCode: string;

  @column()
  public number: string;

  @column()
  public age: string;

  @column()
  public complement: string;

  @column()
  public turn: string;

  @column()
  public parentDocumentNumber: string;

  @column()
  public latitude: string;

  @column()
  public longitude: string;

  @column()
  public image: string;

  @column()
  public escolaId: number;

  @column()
  public userId: number;

  @column()
  public parentId: number;


  @column.dateTime({ autoCreate: true })
  public created_at: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime;
}
