import { AuthenticationException } from '@adonisjs/auth/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ValidationException from 'App/Exceptions/ValidationException'
import SessionStoreValidator from 'App/Validators/SessionStoreValidator'

export default class SessionsController {
  public async store({ request, auth }: HttpContextContract) {
    try {
      const data = await request.validate(SessionStoreValidator)

      const token = await auth
        .use('api')
        .attempt(data.email, data.password, { expiresIn: '60mins' })

      return token
    } catch (err) {
      throw new ValidationException(err.message, err.status, err.code)
    }
  }

  public async destroy({ auth }: HttpContextContract) {
    try {
      await auth.use('api').revoke()

      return {
        revoked: true,
      }
    } catch (err) {
      throw new AuthenticationException(err.message, err.status, err.code)
    }
  }
}
