import Route from '@ioc:Adonis/Core/Route'

Route.get('/games', 'GamesController.index')

Route.post('/login', 'SessionsController.store')

Route.resource('/users', 'UsersController').only(['store'])

Route.post('/forgot-password', 'ForgotPasswordsController.store')
Route.put('/forgot-password/:token', 'ForgotPasswordsController.update')

Route.group(() => {
  Route.resource('/users', 'UsersController').apiOnly().except(['store'])
  Route.delete('/logout', 'SessionsController.destroy')
  Route.resource('/bets', 'BetsController').apiOnly()
}).middleware(['auth'])

Route.group(() => {
  Route.resource('/games', 'GamesController').apiOnly().except(['index'])
}).middleware(['auth', 'adminAuth'])
