<template>
  <header class="flex flex-wrap md:flex-nowrap items-center justify-between mb-6">
      <ul class="flex items-center">
        <li>
          <router-link :to="{name: 'Home'}" class="text-sm inline-block p-3 text-gray-800">Home</router-link>
        </li>
        <li>
          <router-link :to="{name: 'Home'}" class="text-sm inline-block p-3 text-gray-800">Files</router-link>
        </li>
      </ul>
      <ul class="flex items-center">
        <li>
          <router-link v-if="!authenticated" :to="{name: 'Login'}" class="text-sm inline-block p-3 text-gray-800">Sign in</router-link>
        </li>
        <li v-if="authenticated">
          <router-link :to="{name: 'Home'}" class="text-sm inline-block p-3 text-gray-800">Account</router-link>
        </li>
        <li v-if="authenticated">
          <a href="" @click.prevent="logout" class="text-sm inline-block p-3 text-gray-800">Logout</a>
        </li>
      </ul>
    </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
    })
  },

  methods: {
    ...mapActions({
      logoutAction: 'auth/logout'
    }),

    logout() {
      this.logoutAction()
      this.$router.push({name: 'Home'})
    }
  },
}
</script>