import { defineStore } from 'pinia'
import { useAuthStore } from '~/features/auth/stores/useAuthStore.js'

async function fetchPreferences() {
  return {
    isEnabledEmailNotifications: true,
    theme: 'dark'
  }
}

export const useSettingsStore = defineStore('settings', {
  state: () => (
    {
      isAuthenticated: false,
      preferences: null as UserPreferences | null,
    }
  ),
  actions: {
    async fetchUserPreferences() {
      const auth = useAuthStore()

      if (auth.isAuthenticated) {
        this.preferences = await fetchPreferences()
      } else {
        throw new Error('User must be authenticated')
      }
    }
  },
})

interface UserPreferences {
  isEnabledEmailNotifications: boolean
  theme: string
}