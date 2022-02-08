<template>
  <div class="w-10/12 md:w-6/12 mx-auto">
    <form action="#" @submit.prevent="login">
      <h2 class="text-xl text-center mb-3">Login</h2>
      <div class="mb-3">
        <label for="email" class="inline-block text-sm mb-2">Email</label>
        <input v-model="form.email" class="w-full border-2 border-gray-200 h-10 px-3 rounded-md" type="text" id="email">
      </div>
      <div class="mb-3">
        <label for="password" class="inline-block text-sm mb-2">Password</label>
        <input v-model="form.password" class="w-full border-2 border-gray-200 h-10 px-3 rounded-md" type="password" id="password">
      </div>
      <button class="px-3 py-2 rounded-md bg-indigo-600 text-white" type="submit">Login</button>
      <p class="mt-3 text-sm text-gray-800">Not joined yet? <a class="text-indigo-600" href="">Create an account</a></p>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      loginAction: 'auth/login'
    }),

    async login() {
      await this.loginAction(this.form)
      this.$router.replace({name: 'Home'})
    }
  },
}
</script>