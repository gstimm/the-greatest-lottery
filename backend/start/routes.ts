import Route from '@ioc:Adonis/Core/Route'

Route.resource('/users', 'UsersController').apiOnly()

Route.resource('/login', 'SessionsController').apiOnly()
