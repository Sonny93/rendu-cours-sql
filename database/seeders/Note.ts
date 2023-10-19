import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import NoteFactory from 'Database/factories/NoteFactory';

export default class extends BaseSeeder {
  public async run() {
    const notes = await NoteFactory.createMany(40);
    await Promise.all(notes.map((note) => note.save()));
  }
}
