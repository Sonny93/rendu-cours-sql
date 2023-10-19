import Course from 'App/Models/Course';
import Factory from '@ioc:Adonis/Lucid/Factory';

export default Factory.define(Course, ({ faker }) => {
  return {
    title: faker.lorem.words({ min: 1, max: 3 }),
    description: faker.lorem.paragraph(1),
    teacher: faker.person.fullName(),
  };
}).build();
