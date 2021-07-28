import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RowNotFoundException from 'App/Exceptions/RowNotFoundException'
import ValidationException from 'App/Exceptions/ValidationException'
import Game from 'App/Models/Game'
import GameStoreValidator from 'App/Validators/GameStoreValidator'
import GameUpdateValidator from 'App/Validators/GameUpdateValidator'

export default class GamesController {
  public async index({}: HttpContextContract) {
    const games = await Game.all()

    return games
  }

  public async store({ request }: HttpContextContract) {
    try {
      const data = await request.validate(GameStoreValidator)

      const game = await Game.create(data)

      return game
    } catch (err) {
      throw new ValidationException(err.message, err.status, err.code)
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const game = await Game.findByOrFail('id', params.id)

      if (!game) {
        return response.status(404).send({ error: { message: 'No game found for this ID.' } })
      }

      return game
    } catch (err) {
      throw new RowNotFoundException(err.message, err.status, err.code)
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    const data = await request.validate(GameUpdateValidator)
    try {
      const game = await Game.findBy('id', params.id)

      if (!game) {
        return response.status(404).send({ error: { message: 'No game found for this ID.' } })
      }

      game.merge(data)

      await game.save()

      return game
    } catch (err) {
      throw new ValidationException(err.message, err.status, err.code)
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const game = await Game.findBy('id', params.id)

      if (!game) {
        return response.status(404).send({ error: { message: 'No game found for this ID.' } })
      }

      await game.delete()

      return response.status(204)
    } catch (err) {
      return response.status(err.status).send({ error: { message: err.message } })
    }
  }
}
