import NoteModel from 'App/Models/Note';
import Factory, { FactoryContextContract } from '@ioc:Adonis/Lucid/Factory';
import GetRelations from 'Database/services/GetRelations';

export default Factory.define(NoteModel, async ({ faker }: FactoryContextContract) => {
  const { studentIds, coursIds } = await GetRelations.run();

  return {
    studentId: studentIds[Math.floor(Math.random() * studentIds.length)],
    courseId: coursIds[Math.floor(Math.random() * coursIds.length)],
    notes: faker.number.float({ min: 0, max: 20, precision: 0.01 }),
  };
}).build();
