import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Game from './Game'

export default class Bet extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public gameId: number

  @column()
  public numbers: string

  @column()
  public price: number

  @column.dateTime({
    autoCreate: true,
    serialize: (value: DateTime | null) => {
      return value ? value.setZone('utc').toISO() : value
    },
  })
  public createdAt: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    serialize: (value: DateTime | null) => {
      return value ? value.setZone('utc').toISO() : value
    },
  })
  public updatedAt: DateTime

  @belongsTo(() => Game)
  public game: BelongsTo<typeof Game>
}
