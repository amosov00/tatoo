import Vue from 'vue'
import Vuex from 'vuex'
import {registration, checkLogin, loginRquest} from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuth: 'loading',
    data: '',
    error: '',
    timer: ''
  },
  mutations: {
    setRes(state, data) {
      state.data = data
    },
    setAuth(state, data) {
      state.isAuth = data
    },
    setError(state, data) {
      state.error = data
    },
    setTimer(state, data) {
      state.timer = data
    },
    clear(state) {
      if (state.timer !== '') {
        clearTimeout(state.timer)
      }
    }
  },
  actions: {
    async auth({commit, dispatch}, {login, password, email}) {
      try {
        const res = await registration(login, password, email)
        if (!res.data.isSuccees) {
          dispatch('error', res.data.errorText)
        } else {
          commit('setRes', res.data)
        }
      } catch (e) {
        dispatch('error', e)
      }
    },
    async login({commit, dispatch}, {login, password}) {
      try {
        const res = await loginRquest(login, password)
        if (!res.data.isSuccees) {
          dispatch('error', res.data.errorText)
        } else {
          commit('setRes', res.data)
          commit('setAuth', true)
        }
      } catch (e) {
        dispatch('error', e)
      }
    },
    async check({commit}) {
      const res = await checkLogin()
      commit('setAuth', res.data.isAuthorizated)
    },
    async error({commit}, data) {
      commit('clear')
      commit('setError', data)
      const timer = setTimeout(()=>{
        commit('setError', '')
      }, 5000)
      commit('setTimer', timer)
    }
  },
  modules: {
  }
})
