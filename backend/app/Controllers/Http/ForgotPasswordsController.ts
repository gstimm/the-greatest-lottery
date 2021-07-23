import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { string } from '@ioc:Adonis/Core/Helpers'
import Mail from '@ioc:Adonis/Addons/Mail'
import Env from '@ioc:Adonis/Core/Env'

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
            token: user.token,
            link: 'https://localhost:3333/forgot-password',
          })
      })

      console.log(user.token)
    } catch (err) {
      return response.status(err.status).send({ error: { message: err.message } })
    }
  }
}
