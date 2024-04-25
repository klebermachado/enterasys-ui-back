import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Port extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare switchId: number

  @column()
  declare vlanId: number

  @column()
  declare slug: number

  @column()
  declare alias: number

  @column()
  declare description: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
