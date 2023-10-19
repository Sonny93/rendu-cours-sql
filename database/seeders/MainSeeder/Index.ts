import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';

export default class IndexSeeder extends BaseSeeder {
  private async runSeeder(Seeder: { default: typeof BaseSeeder }) {
    await new Seeder.default(this.client).run();
  }

  /**
   * This method will be called by the DatabaseSeeder
   * class when executing the seeds
   */
  public async run() {
    await this.runSeeder(await import('../Student'));
    await this.runSeeder(await import('../Course'));
    await this.runSeeder(await import('../Note'));
    await this.runSeeder(await import('../Registration'));
  }
}
