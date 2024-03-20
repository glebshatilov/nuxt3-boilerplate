import commonRoutes from './common.routes'
import editProfileRoutes from './editProfile.routes'
import usersRoutes from './users.routes'
import _exampleRoutes from './_example.routes'

export function getRoutes() {
  const routes = [
    ...commonRoutes,
    ...editProfileRoutes,
    ...usersRoutes,
    ..._exampleRoutes
  ]

  return routes
}

export default getRoutes
