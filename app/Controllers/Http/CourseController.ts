import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Course from 'App/Models/Course';
import CoursValidator from 'App/Validators/CoursValidator';

export default class CoursController {
  /**
   * @index
   * @description Returns array of courses
   * @responseBody 200 - <Course[]>
   */
  public async index({ response }: HttpContextContract) {
    const courses = await Course.all();
    return response.json({ courses });
  }

  /**
   * @getCours
   * @description Return course from id
   * @responseBody 200 - <Course>
   * @responseBody 404 - Course could not be found
   * @requestBody <Course>
   */
  public async getCours({ response, request }: HttpContextContract) {
    const course = await Course.findBy('id', request.param('courseId'));
    return response.json({ course });
  }

  /**
   * @createCours
   * @description Create course
   * @responseBody 200 - <Course>
   * @responseBody 404 - Course could not be found
   * @requestBody <Course>
   */
  public async createCours({ response, request }: HttpContextContract) {
    const data = await request.validate(CoursValidator);
    const course = await Course.create(data);
    return response.json({ message: 'Course créé avec succès', course });
  }

  /**
   * @editCours
   * @description Edit course
   * @responseBody 200 - <Course>
   * @responseBody 404 - Course could not be found
   * @requestBody <Course>
   */
  public async editCours({ response, request }: HttpContextContract) {
    const data = await request.validate(CoursValidator);
    const courseId = request.param('courseId');
    if (!courseId) {
      throw new Error('Missing course id');
    }

    const course = await Course.updateOrCreate(courseId, data);
    return response.json({ message: 'Course modifié avec succès', course });
  }

  /**
   * @deleteCours
   * @description Delete course
   * @responseBody 200 - <Course>
   * @responseBody 404 - Course could not be found
   * @requestBody <Course>
   */
  public async deleteCours({ response, request }: HttpContextContract) {
    const courseId = request.param('courseId');
    if (!courseId) {
      throw new Error('Missing course id');
    }

    const course = await Course.findOrFail(courseId);
    await course.delete();
    return response.json({ message: 'Course supprimé avec succès', course });
  }
}
