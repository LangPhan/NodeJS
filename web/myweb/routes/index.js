const coursesRouter = require('./course')
const newsRouter = require('./news')
const siteRouter = require('./site')

function route(app){
  app.use('/courses',coursesRouter)

  app.use('/news',newsRouter)

  app.use('/search',siteRouter) 

  app.use('/',siteRouter)
}

module.exports = route;
