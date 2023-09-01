<script setup lang="ts">
import useApiSignIn from '../../apiComposables/useApiSignIn.js'

const { mutate, error } = useApiSignIn()

const variables = {
  email: 'test@test.test',
  password: 'test'
}

const onClick = async () => {
  await signInUser()
}

const signInUser = async () => {
  const response = await mutate(variables)

  console.log('response', response)
}
</script>

<template>
  <div>
    <button @click="onClick">
      SignIn
    </button>
  </div>
</template>

<style scoped lang="scss">

</style>
