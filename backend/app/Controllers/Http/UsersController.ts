import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {
    const users = await User.all()

    return users
  }

  public async store({ request, response, auth }: HttpContextContract) {
    try {
      const data = request.only(['name', 'email', 'password'])

      const user = await User.create(data)

      const { token } = await auth.attempt(data.email, data.password)

      return { user, token }
    } catch (err) {
      response.send({ error: { message: err.message } })
    }
  }

  // public async show({ params }: HttpContextContract) {
  //   const user = await User.findOrFail(params.id)

  //   return user
  // }

  // public async update({ request, params }: HttpContextContract) {
  //   const user = await User.findOrFail(params.id)

  //   const data = request.only(['password'])

  //   user.merge(data)

  //   return user
  // }

  // public async destroy({ params }: HttpContextContract) {
  //   const user = await User.findOrFail(params.id)

  //   await user.delete()
  // }
}
