import { DateTime } from 'luxon';
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Course from 'App/Models/Course';
import Student from 'App/Models/Student';

export default class Registration extends BaseModel {
  static tableName: string = 'registrations';

  @column({ isPrimary: true })
  public id: number;

  @column()
  public studentId: number;

  @column()
  public courseId: number;

  @column.date()
  public dateInscription: DateTime;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Student)
  public student: BelongsTo<typeof Student>;

  @belongsTo(() => Course)
  public course: BelongsTo<typeof Course>;
}
