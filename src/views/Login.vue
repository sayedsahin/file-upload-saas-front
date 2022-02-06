<template>
    <div>
        <form @submit.prevent="login">
            <button class="p-3 rounded-sm bg-indigo-600 text-white" type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions({
            loginAction: 'auth/login'
        }),

        login() {
            this.loginAction({email: 'sayed@gmail.com', password: 'password'})
        }
    },
}
</script>