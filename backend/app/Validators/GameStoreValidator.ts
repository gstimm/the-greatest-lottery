import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class GameStoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    type: schema.string({ trim: true }, [rules.unique({ table: 'games', column: 'type' })]),
    description: schema.string(),
    color: schema.string({}, [rules.regex(/^#?([0-9a-f]{6}|[0-9a-f]{3})$/i)]),
    range: schema.number(),
    price: schema.number(),
    max_number: schema.number(),
    min_cart_value: schema.number(),
  })

  public messages = {
    'required': 'The {{field}} is required to create a new account.',
    'unique': 'The {{field}} has already in use.',
    'regex': 'The {{field}} must be in a HEX color format.',
    '*': (field, rule) => {
      return `${rule} validation error on ${field}`
    },
  }
}
