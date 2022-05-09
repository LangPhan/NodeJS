const coursesRouter = require('./course')
const newsRouter = require('./news')
const siteRouter = require('./site')
const userRouter = require('./user')
const meRouter = require('./me')

function route(app){
  app.use('/me', meRouter)

  app.use('/user', userRouter)

  app.use('/courses',coursesRouter)

  app.use('/news',newsRouter)

  app.use('/search',siteRouter) 

  app.use('/',siteRouter)
  
}

module.exports = route;
