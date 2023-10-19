import { column } from '@ioc:Adonis/Lucid/Orm';
import { DateTime } from 'luxon';
import AppBaseModel from './AppBaseModel';

export default class Student extends AppBaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public firstname: string;

  @column.date({
    serialize: (value: DateTime) => value.toISODate(),
  })
  public birthday: DateTime;

  @column()
  public email: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
