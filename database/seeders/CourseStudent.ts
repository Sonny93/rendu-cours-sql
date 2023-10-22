import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import GetRelations from 'Database/services/GetRelations';
import Student from 'App/Models/Student';

export default class extends BaseSeeder {
  public async run() {
    const { studentsIds, coursesIds } = await GetRelations.run();
    for (const studentId of studentsIds) {
      // Génère un nombre aléatoire entre 1 et 5
      const numberOfCourses = Math.floor(Math.random() * 5) + 1;

      // Sélectionne X IDs de cours aléatoirement
      for (let i = 0; i < numberOfCourses; i++) {
        const randomIndex = Math.floor(Math.random() * coursesIds.length);
        let selectedCourseId = coursesIds[randomIndex];
        const student = await Student.findOrFail(studentId);
        await student.related('courses').attach({
          [selectedCourseId]: {
            notes: (Math.random() * 20).toFixed(2),
          },
        });
      }
    }
  }
}
