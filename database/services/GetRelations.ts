import StudentModel from 'App/Models/Student';
import CoursModel from 'App/Models/Course';

export default class GetRelations {
  public static async run(): Promise<{ studentIds: number[]; coursIds: number[] }> {
    const students = await StudentModel.all();
    const studentIds = students.map((student) => student.id);

    const cours = await CoursModel.all();
    const coursIds = cours.map((cours) => cours.id);

    return {
      studentIds,
      coursIds,
    };
  }
}
