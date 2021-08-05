import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ForgotPasswordUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    newPassword: schema.string({}, [rules.confirmed()]),
  })

  public messages = {
    'required': 'The {{field}} is required to create a new account.',
    'confirmed': 'The {{field}} confirmation does not match.',
    '*': (field, rule) => {
      return `${rule} validation error on ${field}`
    },
  }
}
