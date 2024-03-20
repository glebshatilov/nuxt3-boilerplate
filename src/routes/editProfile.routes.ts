export default [
  {
    name: 'edit',
    path: '/edit',
    file: '~/pages/edit/Edit/Edit.page.vue',
    children: [
      {
        name: 'edit-profile',
        path: '',
        file: '~/pages/edit/EditProfile/EditProfile.page.vue'
      },
      {
        name: 'edit-avatar',
        path: 'avatar',
        file: '~/pages/edit/EditAvatar/EditAvatar.page.vue'
      }
    ]
  }
]
