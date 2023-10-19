import { DateTime } from 'luxon';
import { BaseModel, column, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm';
import Student from 'App/Models/Student';
import Course from 'App/Models/Course';

export default class Note extends BaseModel {
  static tableName: string = 'notes';

  @column({ isPrimary: true })
  public id: number;

  @column()
  public studentId: number;

  @column()
  public courseId: number;

  @column()
  public notes: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Student)
  public student: BelongsTo<typeof Student>;

  @belongsTo(() => Course)
  public course: BelongsTo<typeof Course>;
}
