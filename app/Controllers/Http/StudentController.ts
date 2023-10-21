import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Student from 'App/Models/Student';
import StudentValidator from 'App/Validators/StudentValidator';

export default class StudentController {
  // @no-swagger
  public async showStudent({ request, inertia }: HttpContextContract) {
    const student = await this.getStudentById(request.param('studentId'));
    return inertia.render('Students/ShowStudent', { student });
  }

  // @no-swagger
  public async showCreate({ inertia }: HttpContextContract) {
    return inertia.render('Students/Create');
  }

  // @no-swagger
  public async showEdit({ request, inertia }: HttpContextContract) {
    const student = await this.getStudentById(request.param('studentId'));
    return inertia.render('Students/Edit', { student });
  }

  // @no-swagger
  public async showDelete({ request, inertia }: HttpContextContract) {
    const student = await Student.findOrFail(request.param('studentId'));
    return inertia.render('Students/Delete', { student });
  }

  public async index({ response }: HttpContextContract) {
    const students = await Student.query().preload('courses');
    return response.json({ students });
  }

  public async getStudent({ response, request }: HttpContextContract) {
    const students = await Student.findBy('id', request.param('studentId'));
    return response.json({ students });
  }

  public async createStudent({ response, request }: HttpContextContract) {
    const data = await request.validate(StudentValidator);
    const student = await Student.create(data);
    return response.json({ message: 'Student created', student });
  }

  public async editStudent({ response, request }: HttpContextContract) {
    const data = await request.validate(StudentValidator);
    const studentId = request.param('studentId');
    if (!studentId) {
      throw new Error('Missing student id');
    }

    const student = await Student.updateOrCreate(studentId, data);
    return response.json({ message: 'Course modifié avec succès', student });
  }

  public async deleteStudent({ response, request }: HttpContextContract) {
    const studentId = request.param('studentId');
    if (!studentId) {
      throw new Error('Missing student id');
    }

    const course = await Student.findOrFail(studentId);
    await course.delete();
    return response.json({ message: 'Student deleted', course });
  }

  private async getStudentById(studentId: number) {
    const student = await Student.findOrFail(studentId);
    await student.load('courses');
    return student;
  }
}
