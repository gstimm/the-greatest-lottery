import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { string } from '@ioc:Adonis/Core/Helpers'
import Mail from '@ioc:Adonis/Addons/Mail'
import Env from '@ioc:Adonis/Core/Env'
import moment from 'moment'

export default class ForgotPasswordsController {
  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only(['email'])

      const user = await User.findByOrFail('email', data.email)

      user.token = string.generateRandom(32)
      user.token_created_at = new Date()

      await user.save()

      await Mail.sendLater((message) => {
        message
          .from(Env.get('ADMIN_EMAIL'))
          .to('e8843b72d8-a5925f@inbox.mailtrap.io')
          .subject('Password Reset Request for TGL')
          .htmlView('emails/forgot_password.edge', {
            user: user.name,
            email: user.email,
            link: `https://localhost:3000/forgot-password/${user.token}`,
          })
      })

      console.log(user.token)
    } catch (err) {
      return response.status(err.status).send({ error: { message: err.message } })
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const data = request.only(['newPassword'])
      const token = params.token

      const user = await User.findByOrFail('token', token)

      const tokenExpired = moment().subtract('2', 'days').isAfter(user.token_created_at)

      if (tokenExpired) {
        return response.status(401).send({ error: { message: 'Expired or Invalid Token' } })
      }

      user.token = null
      user.token_created_at = null
      user.password = data.newPassword

      await user.save()
    } catch (err) {
      return response.status(err.status).send({ error: { message: err.message } })
    }
  }
}
