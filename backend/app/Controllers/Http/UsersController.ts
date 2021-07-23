import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import CreateUser from 'App/Validators/CreateUserValidator'
import UpdateUser from 'App/Validators/UpdateUserValidator'
import Mail from '@ioc:Adonis/Addons/Mail'
import Env from '@ioc:Adonis/Core/Env'

export default class UsersController {
  public async index({}: HttpContextContract) {
    const users = await User.all()

    return users
  }

  public async store({ request, response, auth }: HttpContextContract) {
    await request.validate(CreateUser)

    try {
      const data = request.only(['name', 'email', 'password'])
      const user = await User.create(data)
      const { token } = await auth.attempt(data.email, data.password)

      await Mail.sendLater((message) => {
        message
          .from(Env.get('ADMIN_EMAIL'))
          .to('e8843b72d8-a5925f@inbox.mailtrap.io')
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
      const user = await User.findOrFail(params.id)

      if (!user) {
        return response.send({ message: 'User not found' })
      }

      return user
    } catch (err) {
      return response.status(err.status).send({ error: { message: err.message } })
    }
  }

  public async update({ request, response, params, auth }: HttpContextContract) {
    await request.validate(UpdateUser)

    try {
      const user = await User.findOrFail(params.id)

      if (auth.user?.id !== user.id) {
        return response
          .status(401)
          .send({ error: { message: 'You dont have permission to update this user.' } })
      }

      const data = request.only(['name', 'email', 'password'])

      user.merge(data)

      user.save()

      return user
    } catch (err) {
      return response.status(err.status).send({ error: { message: err.message } })
    }
  }

  public async destroy({ params, response, auth }: HttpContextContract) {
    try {
      const user = await User.findOrFail(params.id)

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