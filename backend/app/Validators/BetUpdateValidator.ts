import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BetUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    numbers: schema.string(),
  })

  public messages = {
    'required': 'The {{field}} is required to create a new account.',
    '*': (field, rule) => {
      return `${rule} validation error on ${field}`
    },
  }
}
