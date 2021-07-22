import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Session from 'App/Validators/SessionValidator'

export default class SessionsController {
  public async store({ request, response, auth }: HttpContextContract) {
    await request.validate(Session)

    try {
      const { email, password } = request.only(['email', 'password'])

      const token = await auth.use('api').attempt(email, password, { expiresIn: '60mins' })

      return token
    } catch (err) {
      return response.status(err.status).send({ error: { message: err.message } })
    }
  }

  public async destroy({ response, auth }: HttpContextContract) {
    try {
      await auth.use('api').revoke()

      return {
        revoked: true,
      }
    } catch (err) {
      return response.status(err.status).send({ error: { message: err.message } })
    }
  }
}
