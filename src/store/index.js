import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comments: JSON.parse(localStorage.getItem("comments") || "[]"),
  },
  mutations: {
    SET_COMMENT: (state, payload) => {
      state.comments.push(payload)
      localStorage.setItem("comments", JSON.stringify(state.comments))
    },
  },
  actions: {
  },
  getters: {
    comments: (state) => state.comments
  },
  modules: {
  }
})
