import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import CreateUser from 'App/Validators/CreateUserValidator'
import UpdateUser from 'App/Validators/UpdateUserValidator'

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

      return { user, token }
    } catch (err) {
      return response.status(err.status).send({ error: { message: err.message } })
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

  public async update({ request, response, params }: HttpContextContract) {
    await request.validate(UpdateUser)

    try {
      const user = await User.findOrFail(params.id)

      const data = request.only(['name', 'email', 'password'])

      user.merge(data)

      user.save()

      return user
    } catch (err) {
      return response.status(err.status).send({ error: { message: err.message } })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const user = await User.findOrFail(params.id)

      await user.delete()

      return response.status(204)
    } catch (err) {
      return response.status(err.status).send({ error: { message: err.message } })
    }
  }
}
