import { Exception } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ValidationException extends Exception {
  public async handle(error: this, ctx: HttpContextContract) {
    if (error.code === 'E_VALIDATION_FAILURE') {
      return ctx.response
        .status(422)
        .send({ message: 'Validation Error! Please check the fields.' })
    }

    if (error.code === 'E_INVALID_AUTH_UID' || error.code === 'E_INVALID_AUTH_PASSWORD') {
      return ctx.response
        .status(400)
        .send({ message: 'User not found! Please check email and password and try again.' })
    }

    return ctx.response.status(error.status).send({ message: 'Not Found' })
  }
}
