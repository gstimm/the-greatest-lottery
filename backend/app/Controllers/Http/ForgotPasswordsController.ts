import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { string } from '@ioc:Adonis/Core/Helpers'
import Mail from '@ioc:Adonis/Addons/Mail'
import Env from '@ioc:Adonis/Core/Env'
import moment from 'moment'
import ForgotPasswordStoreValidator from 'App/Validators/ForgotPasswordStoreValidator'
import ForgotPasswordUpdateValidator from 'App/Validators/ForgotPasswordUpdateValidator'

export default class ForgotPasswordsController {
  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(ForgotPasswordStoreValidator)
    try {
      const user = await User.findBy('email', data.email)

      if (!user) {
        return response.status(404).send({ error: { message: 'No user found for this Email.' } })
      }

      user.token = string.generateRandom(32)
      user.tokenCreatedAt = new Date()

      await user.save()

      await Mail.sendLater((message) => {
        message
          .from(Env.get('ADMIN_EMAIL'))
          .to(user.email)
          .subject('Password Reset | TGL')
          .htmlView('emails/forgot_password.edge', {
            user: user.name,
            email: user.email,
            link: `${Env.get('FRONTEND_LINK')}/forgot-password/${user.token}`,
          })
      })

      return response.status(200).send({
        message: 'Request made successfully! Check your email to change your password!',
        token: user.token,
      })
    } catch (err) {
      return response.status(err.status).send({ error: { message: err.message } })
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    const data = await request.validate(ForgotPasswordUpdateValidator)
    try {
      const token = params.token

      if (!token) {
        return response.status(404).send({ error: { message: 'No token found.' } })
      }

      const user = await User.findBy('token', token)

      if (!user) {
        return response.status(404).send({ error: { message: 'No user found for this Token.' } })
      }

      const tokenExpired = moment().subtract('2', 'days').isAfter(user.tokenCreatedAt)

      if (tokenExpired) {
        return response.status(401).send({ error: { message: 'Expired or Invalid Token' } })
      }

      user.token = null
      user.tokenCreatedAt = null
      user.password = data.newPassword

      await user.save()
    } catch (err) {
      return response.status(err.status).send({ error: { message: err.message } })
    }
  }
}
