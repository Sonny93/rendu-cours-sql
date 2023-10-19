import Student from 'App/Models/Student';
import Factory from '@ioc:Adonis/Lucid/Factory';
import { DateTime } from 'luxon';

export default Factory.define(Student, ({ faker }) => {
  return {
    name: faker.person.lastName(),
    firstname: faker.person.firstName(),
    birthday: DateTime.fromISO(
      faker.date.between({ from: '1990-01-01', to: '2005-12-31' }).toISOString().slice(0, 10)
    ),
    email: faker.internet.email(),
  };
}).build();
