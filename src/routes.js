import api from './api'
import slides from './slides'

const routes = function(app) {
  app.use('/api', api)
  app.use('/slides', slides)
}

export default routes
