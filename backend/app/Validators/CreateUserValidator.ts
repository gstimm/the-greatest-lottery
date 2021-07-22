import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }),
    email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
    password: schema.string({}, [rules.confirmed()]),
  })

  public messages = {
    'required': 'The {{field}} is required to create a new account.',
    'unique': 'The {{field}} has already in use.',
    'confirmed': 'The {{field}} confirmation does not match.',
    'email': 'The {{field}} is not in a valid format.',
    '*': (field, rule) => {
      return `${rule} validation error on ${field}`
    },
  }
}
