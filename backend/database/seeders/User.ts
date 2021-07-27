import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    await User.updateOrCreateMany('email', [
      {
        name: 'Admin',
        email: 'admin@tgl.com',
        password: '1234',
        isAdmin: true,
      },
      {
        name: 'User',
        email: 'user@tgl.com',
        password: '1234',
      },
    ])
  }
}
