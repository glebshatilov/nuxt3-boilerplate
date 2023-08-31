<script setup lang="ts">
import useApiSignIn from '~/features/auth/apiComposables/useApiSignIn.js'
import useApiGetAllUsers from '~/features/users/apiComposables/useApiGetAllUsers.js'

const variables = {
  email: 'test@test.test',
  password: 'test'
}

const { signInHandler, error, loading } = useApiSignIn()

const onClick = async () => {
  const data = await signInHandler(variables)

  console.log('resp2', data)
}

const { data: allUsersData } = await useApiGetAllUsers()

console.log('allUsersData', allUsersData)

</script>

<template>
  <div>
    Everything is okay
  </div>
  <p>There are {{ allUsersData?.users?.length || 0 }} ships.</p>
  <ul>
    <li v-for="userData in allUsersData?.users">{{userData.id}}</li>
  </ul>
  <div v-if="error">
    EROROROROR: {{error}}
  </div>
  <button @click="onClick">
    SignIn
  </button>
</template>

<style lang="scss">

</style>