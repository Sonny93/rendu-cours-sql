import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';
import { DateTime } from 'luxon';

export default class Cours extends BaseModel {
  static tableName: string = 'course';

  @column({ isPrimary: true })
  public id: number;

  @column()
  public titre: string;

  @column()
  public description: string;

  @column()
  public enseignant: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
