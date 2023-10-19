import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
  protected previousTableName = 'cours';
  protected newTableName = 'courses';

  public async up() {
    this.schema.renameTable(this.previousTableName, this.newTableName);
  }

  public async down() {
    this.schema.renameTable(this.newTableName, this.previousTableName);
  }
}
