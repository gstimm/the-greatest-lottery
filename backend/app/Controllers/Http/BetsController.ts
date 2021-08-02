import Mail from '@ioc:Adonis/Addons/Mail'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Bet from 'App/Models/Bet'
import User from 'App/Models/User'
import BetStoreValidator from 'App/Validators/BetStoreValidator'
import Env from '@ioc:Adonis/Core/Env'
import BetUpdateValidator from 'App/Validators/BetUpdateValidator'
import Game from 'App/Models/Game'

interface BetInterface {
  userId: number
  gameId: number
  price: number
  numbers: string
  color: string
}

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
    const { bets } = await request.validate(BetStoreValidator)
    let minCartValue = 0
    let totalCartValue = 0
    const newBets: BetInterface[] = []
    try {
      const user = await User.findBy('id', auth.user?.id)

      if (!user) {
        return response.status(404).send({ error: { message: `User not found!` } })
      }

      for (const bet of bets) {
        const game = await Game.findBy('id', bet.game_id)

        if (game) {
          if (bet.numbers.length !== game.maxNumber) {
            return response.status(400).send({
              error: {
                message: `Incorrect amount of numbers in ${game?.type}(ID: ${game?.id}) bet.`,
              },
            })
          }

          console.log(bet)

          totalCartValue += game.price

          // if (minCartValue < game.minCartValue) {
          //   minCartValue = game.minCartValue
          // }

          let data = {
            userId: user.id,
            gameId: game.id,
            price: game.price,
            numbers: bet.numbers.join(','),
            color: game.color,
          }

          newBets.push(data)

          if (totalCartValue < minCartValue) {
            return response.status(400).send({
              error: { message: `Your bet needs to be at least R$${minCartValue}.` },
            })
          }
        } else {
          return response
            .status(404)
            .send({ error: { message: `No game found for ID: ${bet.game_id}` } })
        }
      }

      await Bet.createMany(newBets)

      await Mail.sendLater((message) => {
        message
          .from(Env.get('ADMIN_EMAIL'))
          .to(user.email)
          .subject('New Bet!')
          .htmlView('emails/new_bet.edge', {
            user: user.name,
            link: `${Env.get('FRONTEND_LINK')}/home`,
          })
      })

      return newBets
    } catch (err) {
      return response.send({ error: { message: err.message } })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const bet = await Bet.findBy('id', params.id)

      if (!bet) {
        return response.status(404).send({ error: { message: 'No bet found for this ID.' } })
      }

      return bet
    } catch (err) {
      return response.send({ error: { message: err.message } })
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    const { numbers } = await request.validate(BetUpdateValidator)
    try {
      const bet = await Bet.findBy('id', params.id)

      if (!bet) {
        return response.status(404).send({ error: { message: 'No bet found for this ID.' } })
      }

      const game = await Game.find(bet.gameId)

      if (game) {
        if (numbers.length !== game.maxNumber) {
          return response.status(400).send({
            error: {
              message: `Incorrect amount of numbers in ${game?.type}(ID: ${game?.id}) bet.`,
            },
          })
        }
        bet.merge({ numbers: numbers.join(',') })
        bet.save()
      } else {
        return response.status(404).send({ error: { message: 'No game found for this id.' } })
      }

      return bet
    } catch (err) {
      return response.send({ error: { message: err.message } })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const bet = await Bet.findBy('id', params.id)

      if (!bet) {
        return response.status(404).send({ error: { message: 'No bet found for this ID.' } })
      }

      await bet.delete()

      return response.status(204)
    } catch (err) {
      return response.send({ error: { message: err.message } })
    }
  }
}
