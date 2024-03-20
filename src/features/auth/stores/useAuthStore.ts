import { defineStore } from 'pinia'
import { useApiSignIn } from '../apiComposables/useApiSignIn.js'

export const useAuthStore = defineStore('auth', {
  state: () => (
    {
      isAuthenticated: false,
      user: null as UserInfo | null,
    }
  ),
  getters: {
    checkIfThisUser: (state) => {
      return (userId: string) => state?.user?.id === userId
    }
  },
  actions: {
    async signIn() {
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
