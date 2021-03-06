import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AdminAuth {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    if (auth.user?.isAdmin) {
      return await next()
    }

    return response.status(401).send({ message: 'Only Admin Users can access this route.' })
  }
}
