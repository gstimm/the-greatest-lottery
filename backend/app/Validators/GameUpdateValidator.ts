import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class GameUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    type: schema.string.optional({ trim: true }, [
      rules.unique({ table: 'games', column: 'type' }),
    ]),
    description: schema.string.optional(),
    color: schema.string.optional({}, [rules.regex(/^#?([0-9a-f]{6}|[0-9a-f]{3})$/i)]),
    range: schema.number.optional(),
    price: schema.number.optional(),
    max_number: schema.number.optional(),
    min_cart_value: schema.number.optional(),
  })

  public messages = {
    'unique': 'The {{field}} has already in use.',
    'regex': 'The {{field}} must be in a HEX color format.',
    '*': (field, rule) => {
      return `${rule} validation error on ${field}`
    },
  }
}
