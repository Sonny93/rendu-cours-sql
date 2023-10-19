import { DateTime } from 'luxon';
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm';
import Note from 'App/Models/Note';
import Registration from 'App/Models/Registration';

export default class Student extends BaseModel {
  static tableName: string = 'students';

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

  @hasMany(() => Note)
  public notes: HasMany<typeof Note>;

  @hasMany(() => Registration)
  public registrations: HasMany<typeof Registration>;
}
