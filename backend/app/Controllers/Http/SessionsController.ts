import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SessionStoreValidator from 'App/Validators/SessionStoreValidator'

export default class SessionsController {
  public async store({ request, response, auth }: HttpContextContract) {
    try {
      const data = await request.validate(SessionStoreValidator)

      const token = await auth
        .use('api')
        .attempt(data.email, data.password, { expiresIn: '60mins' })

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
