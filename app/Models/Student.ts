import { ManyToMany, column, computed, manyToMany } from '@ioc:Adonis/Lucid/Orm';
import AppBaseModel from 'App/Models/AppBaseModel';
import Course from 'App/Models/Course';
import { DateTime } from 'luxon';

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

  @manyToMany(() => Course, {
    localKey: 'id',
    pivotTable: 'course_student',
    pivotForeignKey: 'student_id',
    pivotRelatedForeignKey: 'course_id',
    pivotColumns: ['date_inscription', 'notes'],
    pivotTimestamps: true,
  })
  public courses: ManyToMany<typeof Course>;

  @computed()
  public get fullname() {
    return `${this.firstname} ${this.name.toUpperCase()}`;
  }
}
