import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Game from 'App/Models/Game'
import GameStoreValidator from 'App/Validators/GameStoreValidator'
import GameUpdateValidator from 'App/Validators/GameUpdateValidator'

export default class GamesController {
  public async index({}: HttpContextContract) {
    const games = await Game.all()

    return games
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = await request.validate(GameStoreValidator)

      const game = await Game.create(data)

      return game
    } catch (err) {
      return response.status(err.status).send({ error: { message: err.message } })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const game = await Game.findByOrFail('id', params.id)

      return game
    } catch (err) {
      return response.status(err.status).send({ error: { message: err.message } })
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const data = await request.validate(GameUpdateValidator)

      const game = await Game.findByOrFail('id', params.id)

      game.merge(data)

      await game.save()

      return game
    } catch (err) {
      return response.status(err.status).send({ error: { message: err.message } })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const game = await Game.findByOrFail('id', params.id)

      await game.delete()

      return response.status(204)
    } catch (err) {
      return response.status(err.status).send({ error: { message: err.message } })
    }
  }
}
