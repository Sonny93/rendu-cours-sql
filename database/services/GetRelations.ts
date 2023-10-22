import Student from 'App/Models/Student';
import Course from 'App/Models/Course';

export default class GetRelations {
  public static async run(): Promise<{ studentsIds: number[]; coursesIds: number[] }> {
    const students = await Student.all();
    const studentsIds = students.map((student) => student.id).sort((a, b) => a - b);

    const courses = await Course.all();
    const coursesIds = courses.map((course) => course.id).sort((a, b) => a - b);

    return {
      studentsIds,
      coursesIds,
    };
  }
}
