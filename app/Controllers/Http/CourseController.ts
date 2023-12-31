import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Course from 'App/Models/Course';
import CoursValidator from 'App/Validators/CoursValidator';

export default class CourseController {
  public async index({ inertia }: HttpContextContract) {
    const courses = await this.getAllCourses();
    return inertia.render('Home', { courses });
  }

  public async showCourse({ request, inertia }: HttpContextContract) {
    const course = await this.getCourseById(request.param('courseId'));
    await course.load('students');
    return inertia.render('Courses/ShowCourse', { course });
  }

  public async showCreate({ inertia }: HttpContextContract) {
    return inertia.render('Courses/Create');
  }

  public async showEdit({ request, inertia }: HttpContextContract) {
    const course = await this.getCourseById(request.param('courseId'));
    return inertia.render('Courses/Edit', { course });
  }

  public async showDelete({ request, inertia }: HttpContextContract) {
    const course = await this.getCourseById(request.param('courseId'));
    return inertia.render('Courses/Delete', { course });
  }

  /**
   * @description Returns array of courses
   * @responseBody 200 - <Course[]>
   */
  public async handleGetAllCourses({ response }: HttpContextContract) {
    return response.json({ courses: this.getAllCourses() });
  }

  /**
   * @description Return course from id
   * @responseBody 200 - <Course>
   * @requestBody <Course>
   */
  public async handleGetCourse({ response, request }: HttpContextContract) {
    const course = await this.getCourseById(request.param('courseId'));
    return response.json({ course });
  }

  /**
   * @description Create course
   * @responseBody 200 - <Course>
   * @requestBody <Course>
   */
  public async handleCreateCourse({ response, request }: HttpContextContract) {
    const data = await request.validate(CoursValidator);
    return response.json({
      message: 'Course successfully created',
      course: await this.createCourse(data),
    });
  }

  /**
   * @description Edit course
   * @responseBody 200 - <Course>
   * @requestBody <Course>
   */
  public async handleEditCours({ response, request }: HttpContextContract) {
    const data = await request.validate(CoursValidator);
    const course = await this.editCourse(request.param('courseId'), data);
    return response.json({ message: 'Course successfully edited', course });
  }

  /**
   * @description Delete course
   * @responseBody 200 - <Course>
   * @requestBody <Course>
   */
  public async handleDeleteCours({ response, request }: HttpContextContract) {
    const courseId = request.param('courseId');
    if (!courseId) {
      throw new Error('Missing course id');
    }

    const course = await Course.findOrFail(courseId);
    await course.delete();
    return response.json({ message: 'Cours supprimé avec succès' });
  }

  public async getAllCourses() {
    return await Course.all();
  }

  public async getCourseById(id: Course['id']) {
    const course = await Course.findByOrFail('id', id);
    return course;
  }

  public async createCourse(payload: Pick<Course, 'title' | 'description' | 'teacher'>) {
    const course = await Course.create(payload);
    return course;
  }

  public async editCourse(
    id: Course['id'],
    payload: Pick<Course, 'title' | 'description' | 'teacher'>
  ) {
    await this.getCourseById(id);
    return await Course.updateOrCreate({ id }, payload);
  }

  public async deleteCourse(id: Course['id']) {
    const course = await this.getCourseById(id);
    return await course.delete();
  }
}
