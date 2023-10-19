import { HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm';
import { DateTime } from 'luxon';
import AppBaseModel from './AppBaseModel';
import Note from './Note';
import Registration from './Registration';

export default class Course extends AppBaseModel {
  public static tableName: string = 'course';

  @column({ isPrimary: true })
  public id: number;

  @column()
  public title: string;

  @column()
  public description: string;

  @column()
  public teacher: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Note)
  public notes: HasMany<typeof Note>;

  @hasMany(() => Registration) // Nouvelle relation
  public registrations: HasMany<typeof Registration>;
}
