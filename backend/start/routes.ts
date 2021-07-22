import Route from '@ioc:Adonis/Core/Route'

Route.post('/login', 'SessionsController.store')

Route.resource('/users', 'UsersController').only(['store'])

Route.group(() => {
  Route.resource('/users', 'UsersController').apiOnly().except(['store'])
  Route.delete('/logout', 'SessionsController.destroy')
}).middleware(['auth'])
