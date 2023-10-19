import Registration from 'App/Models/Registration';
import Factory, { FactoryContextContract } from '@ioc:Adonis/Lucid/Factory';
import GetRelations from 'Database/services/GetRelations';
import { DateTime } from 'luxon';

export default Factory.define(Registration, async ({ faker }: FactoryContextContract) => {
  const { studentIds, coursIds } = await GetRelations.run();

  return {
    studentId: studentIds[Math.floor(Math.random() * studentIds.length)],
    courseId: coursIds[Math.floor(Math.random() * coursIds.length)],
    dateInscription: DateTime.fromISO(faker.date.future().toISOString().slice(0, 10)),
  };
}).build();
