import Mail from '@ioc:Adonis/Addons/Mail'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Bet from 'App/Models/Bet'
import User from 'App/Models/User'
import BetStoreValidator from 'App/Validators/BetStoreValidator'
import Env from '@ioc:Adonis/Core/Env'
import BetUpdateValidator from 'App/Validators/BetUpdateValidator'

export default class BetsController {
  public async index({ auth }: HttpContextContract) {
    const bets = await Bet.query()
      .where('user_id', `${auth.user?.id}`)
      .preload('game')
      .orderBy('id', 'desc')

    return bets
  }

  public async store({ request, response, auth }: HttpContextContract) {
    try {
      const user = await User.findByOrFail('id', auth.user?.id)

      const data = await request.validate(BetStoreValidator)

      console.log(data)

      const bets = await Bet.createMany(
        data.bets.map((item: {}) => (item = { ...item, userId: auth.user?.id }))
      )

      let totalPrice = 0

      data.bets.map((item) => (totalPrice += item.price))

      await Mail.send((message) => {
        message
          .from(Env.get('ADMIN_EMAIL'))
          .to('e8843b72d8-a5925f@inbox.mailtrap.io')
          .subject('New Bet!')
          .htmlView('emails/new_bet.edge', {
            user: user.name,
            totalPrice: totalPrice.toFixed(2).replace('.', ','),
            link: `https://localhost:3000/home`,
          })
      })

      return { bets, totalPrice }
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
