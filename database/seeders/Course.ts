import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import CourFactory from 'Database/factories/CourseFactory';

export default class extends BaseSeeder {
  public async run() {
    const courses = await CourFactory.createMany(10);
    await Promise.all(courses.map((course) => course.save()));
  }
}
