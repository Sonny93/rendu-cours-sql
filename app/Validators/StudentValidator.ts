import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class StudentValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }, [rules.required(), rules.maxLength(50)]),
    firstname: schema.string({ trim: true }, [rules.required(), rules.maxLength(50)]),
    birthday: schema.date({}, [rules.required()]),
    email: schema.string({ trim: true }, [rules.required(), rules.maxLength(255)]),
  });

  public messages: CustomMessages = {};
}
