import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { CustomMessages, rules, schema } from '@ioc:Adonis/Core/Validator';

export default class CoursValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ trim: true }, [rules.required(), rules.maxLength(100)]),
    description: schema.string({ trim: true }, [rules.required(), rules.maxLength(255)]),
    teacher: schema.string({ trim: true }, [rules.required(), rules.maxLength(50)]),
  });

  public messages: CustomMessages = {};
}
