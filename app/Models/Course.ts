import { ManyToMany, column, manyToMany } from '@ioc:Adonis/Lucid/Orm';
import { DateTime } from 'luxon';
import AppBaseModel from 'App/Models/AppBaseModel';
import Student from 'App/Models/Student';

export default class Course extends AppBaseModel {
  // @no-swagger
  public static tableName: string = 'courses';

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

  @manyToMany(() => Student, {
    localKey: 'id',
    pivotTable: 'course_student',
    pivotForeignKey: 'course_id',
    pivotRelatedForeignKey: 'student_id',
    pivotColumns: ['date_inscription', 'notes'],
    pivotTimestamps: true,
  })
  public students: ManyToMany<typeof Student>;
}
