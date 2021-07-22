import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import User from '../../Models/User'
import Session from 'App/Validators/SessionValidator'

export default class SessionsController {
  public async store({ request, response, auth }: HttpContextContract) {
    await request.validate(Session)

    try {
      const { email, password } = request.only(['email', 'password'])

      const user = await User.findBy('email', email)

      if (!user) {
        return response.status(404).json({ message: 'User not found' })
      }

      const isValid = await Hash.verify(user.password, password)

      if (!isValid) {
        return response.status(403).json({ message: 'Email or password incorrect.' })
      }

      const token = await auth.use('api').generate(user, {
        expiresIn: '60mins',
      })

      return token
    } catch (err) {
      return response.status(err.status).send({ error: { message: err.message } })
    }
  }
}
