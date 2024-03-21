export default [
  {
    name: 'edit',
    path: '/edit',
    file: '~/pages/edit/Edit',
    children: [
      {
        name: 'edit-profile',
        path: '',
        file: '~/pages/edit/EditProfile'
      },
      {
        name: 'edit-avatar',
        path: 'avatar',
        file: '~/pages/edit/EditAvatar'
      }
    ]
  }
]
