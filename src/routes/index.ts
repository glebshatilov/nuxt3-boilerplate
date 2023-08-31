import editProfileRoutes from './editProfile.routes.js'

export function getRoutes() {
  const routes = [
    {
      name: 'index',
      path: '/',
      file: '~/pages/Index.page.vue'
    },
    ...editProfileRoutes
  ]

  return routes
}

export default getRoutes