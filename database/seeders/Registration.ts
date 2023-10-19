import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import RegistrationFactory from 'Database/factories/RegistrationFactory';

export default class extends BaseSeeder {
  public async run() {
    const registrations = await RegistrationFactory.createMany(100);
    await Promise.all(registrations.map((registration) => registration.save()));
  }
}
