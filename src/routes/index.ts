import editProfileRoutes from './editProfile.routes.js'
import usersRoutes from './users.routes.js'
import _exampleRoutes from './_example.routes.js'

export function getRoutes() {
  const routes = [
    {
      name: 'index',
      path: '/',
      file: '~/pages/Index/Index.page.vue'
    },
    ...editProfileRoutes,
    ...usersRoutes,
    ..._exampleRoutes
  ]

  return routes
}

export default getRoutes
