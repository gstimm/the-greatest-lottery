import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ForgotPasswordStoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string({}, [rules.email()]),
  })

  public messages = {
    'required': 'The {{field}} is a required field.',
    'email': 'The {{field}} is not in a valid format.',
    '*': (field, rule) => {
      return `${rule} validation error on ${field}`
    },
  }
}
