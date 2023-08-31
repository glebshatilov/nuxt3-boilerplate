import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => (
    {
      isAuthenticated: false,
      user: null as UserInfo | null,
    }
  ),
  getters: {
    checkIfThisUser: (state) => {
      return (userId) => state.user.id === userId
    }
  },
  actions: {
    async signIn(login, password) {
      try {
        // this.userData = await $fetch('/')
        this.isAuthenticated = true
        this.user = {
          id: '52563',
          name: 'Name Surname',
          avatar: 'https://link.com/gdrgdgwr3rwr.jpg',
        }
      } catch (error) {
        // let the form component display the error
        return error
      }
    }
  },
})

interface UserInfo {
  id: string
  name: string
  avatar: string
}
