// auth.js must be add to store/index.js's module

import axios from 'axios'

export default {

    namespaced: true,

    state: {
        authenticated: false,
        user: null
    },
    getters: {
        authenticated(state){
            return state.authenticated
        },
        user(state){
            return state.user
        }
    },
  
    mutations:{
        SET_AUTHENTICATED (state, authenticated){
            state.authenticated = authenticated
        },
        SET_USER (state, user){
            state.user = user
        }
    },
  
    actions: {
        async login ({dispatch}, credentials) {
            await axios.get('/sanctum/csrf-cookie')
            await axios.post('/api/login', credentials)
            dispatch('authenticate')
        },

        authenticate ({commit}) {
            return axios.get('/api/user').then((response) => {
                commit('SET_AUTHENTICATED', true)
                commit('SET_USER', response.data)
            }).catch(() => {
                commit('SET_AUTHENTICATED', false)
                commit('SET_USER', null)
            })
  
        },

        async logout ({dispatch}) {
            await axios.get('/api/logout')
            dispatch('authenticate')
        }
        
    }
}