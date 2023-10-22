import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database';
import Student from 'App/Models/Student';
import StudentValidator from 'App/Validators/StudentValidator';

export default class StudentController {
  public async index({ inertia }: HttpContextContract) {
    const students = await this.getAllStudents();
    return inertia.render('Students/ShowList', { students });
  }

  public async showStudent({ request, inertia }: HttpContextContract) {
    const student = await this.getStudentWithRelatedCourses(request.param('studentId'));
    const studentAverage = await this.getStudentNotesAverage(student.id);
    return inertia.render('Students/ShowStudent', { student, studentAverage });
  }

  public async showCreate({ inertia }: HttpContextContract) {
    return inertia.render('Students/Create');
  }

  public async showEdit({ request, inertia }: HttpContextContract) {
    const student = await this.getStudentWithRelatedCourses(request.param('studentId'));
    return inertia.render('Students/Edit', { student });
  }

  public async showDelete({ request, inertia }: HttpContextContract) {
    const student = await Student.findOrFail(request.param('studentId'));
    return inertia.render('Students/Delete', { student });
  }

  /**
   * @description Returns array of students
   * @responseBody 200 - <Student[]>
   */
  public async handleGetAllStudents({ response }: HttpContextContract) {
    return response.json({ students: this.getAllStudents() });
  }

  /**
   * @description Return student from id
   * @responseBody 200 - <Student>
   * @requestBody <Student>
   */
  public async handleGetStudent({ response, request }: HttpContextContract) {
    const students = await this.getStudentWithRelatedCourses(request.param('studentId'));
    const studentAverage = await this.getStudentNotesAverage(students.id);
    return response.json({ students, studentAverage });
  }

  /**
   * @description Create student
   * @responseBody 200 - <Student>
   * @requestBody <Student>
   */
  public async handleCreateStudent({ response, request }: HttpContextContract) {
    const data = await request.validate(StudentValidator);
    const student = await Student.create(data);
    return response.json({ message: 'Student created', student });
  }

  /**
   * @description Edit student
   * @responseBody 200 - <Student>
   * @requestBody <Student>
   */
  public async handleEditStudent({ response, request }: HttpContextContract) {
    const data = await request.validate(StudentValidator);
    if (!request.param('studentId')) {
      throw new Error('Missing student id');
    }

    const student = await Student.findOrFail(request.param('studentId'));
    student.merge(data);
    await student.save();
    return response.json({ message: 'Student edited with success', student });
  }

  /**
   * @description Delete student
   * @responseBody 200 - <Student>
   * @requestBody <Student>
   */
  public async handleDeleteStudent({ response, request }: HttpContextContract) {
    if (!request.param('studentId')) {
      throw new Error('Missing student id');
    }

    const student = await Student.findOrFail(request.param('studentId'));
    await student.delete();
    return response.json({ message: 'Student deleted', student });
  }

  private async getStudentNotesAverage(studentId: number) {
    const result = await Database.rawQuery('CALL StudentNotesAverage(?)', [studentId]);
    return result[0][0][0];
  }

  private async getAllStudents() {
    const students = await Student.all();
    return students;
  }

  private async getStudentWithRelatedCourses(studentId: number) {
    const student = await Student.findOrFail(studentId);
    await student.load('courses');
    return student;
  }
}
