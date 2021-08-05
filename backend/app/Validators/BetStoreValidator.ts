import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BetStoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    bets: schema.array().members(
      schema.object().members({
        game_id: schema.number(),
        numbers: schema.array().members(schema.number()),
      })
    ),
  })

  public messages = {
    'required': 'The {{field}} is required to create a new account.',
    '*': (field, rule) => {
      return `${rule} validation error on ${field}`
    },
  }
}
