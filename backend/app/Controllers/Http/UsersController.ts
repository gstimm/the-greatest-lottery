import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UserStoreValidator from 'App/Validators/UserStoreValidator'
import UserUpdateValidator from 'App/Validators/UserUpdateValidator'
import Mail from '@ioc:Adonis/Addons/Mail'
import Env from '@ioc:Adonis/Core/Env'
import Bet from 'App/Models/Bet'

export default class UsersController {
  public async index({ request }: HttpContextContract) {
    const { page, perPage } = request.qs()

    const users = await User.query().paginate(page, perPage)

    return users
  }

  public async store({ request, response, auth }: HttpContextContract) {
    const data = await request.validate(UserStoreValidator)
    try {
      const user = await User.create(data)
      const { token } = await auth.attempt(data.email, data.password)

      await Mail.sendLater((message) => {
        message
          .from(Env.get('ADMIN_EMAIL'))
          .to(user.email)
          .subject('Welcome Onboard!')
          .htmlView('emails/welcome.edge', { user: user.name })
      })

      return { user, token }
    } catch (err) {
      return response.send({ error: { message: err.message } })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const user = await User.findByOrFail('id', params.id)

      const bets = await Bet.query().where('user_id', user.id)

      if (!user) {
        return response.send({ message: 'User not found' })
      }

      return { user, bets }
    } catch (err) {
      return response.status(err.status).send({ error: { message: err.message } })
    }
  }

  public async update({ request, response, params, auth }: HttpContextContract) {
    const data = await request.validate(UserUpdateValidator)
    try {
      const user = await User.findBy('id', params.id)

      if (!user) {
        return response.status(404).send({ error: { message: 'User not found for this ID.' } })
      }

      if (auth.user?.id !== user.id) {
        return response
          .status(401)
          .send({ error: { message: 'You dont have permission to update this user.' } })
      }

      user.merge(data)

      user.save()

      return user
    } catch (err) {
      return response.status(err.status).send({ error: { message: err.message } })
    }
  }

  public async destroy({ params, response, auth }: HttpContextContract) {
    try {
      const user = await User.findBy('id', params.id)

      if (!user) {
        return response.status(404).send({ error: { message: 'User not found for this ID.' } })
      }

      if (auth.user?.id !== user.id) {
        return response
          .status(401)
          .send({ error: { message: 'You dont have permission to delete this user.' } })
      }

      await user.delete()

      return response.status(204)
    } catch (err) {
      return response.status(err.status).send({ error: { message: err.message } })
    }
  }
}
