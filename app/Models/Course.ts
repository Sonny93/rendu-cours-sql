import { DateTime } from 'luxon';
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm';
import Note from 'App/Models/Note';
import Registration from 'App/Models/Registration';

export default class Cours extends BaseModel {
  static tableName: string = 'course';

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
