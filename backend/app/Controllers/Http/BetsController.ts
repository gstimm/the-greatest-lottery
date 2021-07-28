import Mail from '@ioc:Adonis/Addons/Mail'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Bet from 'App/Models/Bet'
import User from 'App/Models/User'
import BetStoreValidator from 'App/Validators/BetStoreValidator'
import Env from '@ioc:Adonis/Core/Env'
import BetUpdateValidator from 'App/Validators/BetUpdateValidator'
import Game from 'App/Models/Game'

export default class BetsController {
  public async index({ auth, request }: HttpContextContract) {
    const { page, perPage } = request.qs()
    const bets = await Bet.query()
      .where('user_id', `${auth.user?.id}`)
      .preload('game')
      .orderBy('id', 'desc')
      .paginate(page, perPage)

    return bets
  }

  public async store({ request, response, auth }: HttpContextContract) {
    try {
      const user = await User.findByOrFail('id', auth.user?.id)
      const data = await request.validate(BetStoreValidator)
      const games = await Game.query()

      const hasGameId = data.bets.every((bet) => games.some((game) => game.id === bet.game_id))

      if (!hasGameId) {
        return response.status(404).send({
          error: {
            message:
              'At least one of the IDs provided does not match the games registered in the system!',
          },
        })
      }

      const bets = await Bet.createMany(
        data.bets.map((item: {}) => (item = { ...item, userId: auth.user?.id }))
      )

      await Mail.send((message) => {
        message
          .from(Env.get('ADMIN_EMAIL'))
          .to(user.email)
          .subject('New Bet!')
          .htmlView('emails/new_bet.edge', {
            user: user.name,
            link: `${Env.get('FRONTEND_LINK')}/home`,
          })
      })

      return bets
    } catch (err) {
      return response.send({ error: { message: err.message } })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const bet = await Bet.findByOrFail('id', params.id)

      return bet
    } catch (err) {
      return response.send({ error: { message: err.message } })
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const bet = await Bet.findByOrFail('id', params.id)
      const data = await request.validate(BetUpdateValidator)

      bet.merge(data)
      bet.save()

      return bet
    } catch (err) {
      return response.send({ error: { message: err.message } })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const bet = await Bet.findByOrFail('id', params.id)

      await bet.delete()

      return response.status(204)
    } catch (err) {
      return response.send({ error: { message: err.message } })
    }
  }
}
