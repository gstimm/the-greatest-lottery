import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import User from '../../Models/User'

export default class SessionsController {
  public async store({ request, response, auth }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])

    const user = await User.findBy('email', email)

    if (!user) {
      return response.status(404).json({ message: 'User not found' })
    }

    const isValid = await Hash.verify(user.password, password)

    if (!isValid) {
      return response.json({ message: 'Incorrect password' })
    }

    const token = await auth.use('api').generate(user, {
      expiresIn: '60mins',
    })

    return token
  }
}
