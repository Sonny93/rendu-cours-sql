import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { CustomMessages, rules, schema } from '@ioc:Adonis/Core/Validator';

export default class CoursValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    titre: schema.string({ trim: true }, [rules.required(), rules.maxLength(100)]),
    description: schema.string({ trim: true }, [rules.required(), rules.maxLength(255)]),
    enseignant: schema.string({ trim: true }, [rules.required(), rules.maxLength(50)]),
  });

  public messages: CustomMessages = {};
}
