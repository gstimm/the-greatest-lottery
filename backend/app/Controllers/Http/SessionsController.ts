import { AuthenticationException } from '@adonisjs/auth/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SessionStoreValidator from 'App/Validators/SessionStoreValidator'

export default class SessionsController {
  public async store({ request, response, auth }: HttpContextContract) {
    const { email, password } = await request.validate(SessionStoreValidator)
    try {
      const { user, token } = await auth
        .use('api')
        .attempt(email, password, { expiresIn: '60mins' })

      return { user, token }
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Invalid Email or Password.' } })
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
