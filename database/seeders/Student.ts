import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import StudentFactory from 'Database/factories/StudentFactory';

export default class extends BaseSeeder {
  public async run() {
    const students = await StudentFactory.createMany(20);
    await Promise.all(students.map((student) => student.save()));
  }
}
