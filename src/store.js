import Vue from 'vue'
import Vuex from 'vuex'

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";
const ADD_TO_SAVE = "ADD_TO_SAVE";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    forSavedApp:[],
    isUserLogin: localStorage.getItem("usertoken"),
  },
  mutations: {
    [LOGIN](state) {
      state.pending = false;
    },
    [LOGIN_SUCCESS](state) {
      state.isUserLogin = true;
    },
    [LOGOUT](state) {
      state.isUserLogin = false;
    },
    [ADD_TO_SAVE](state, data) {
      state.forSavedApp = data
    }
  },
  actions: {
    async forSavedApp(context, data) {
      context.commit('ADD_TO_SAVE', data)
    },

    async logout({
      commit
    }) {
      await localStorage.removeItem("usertoken");
      axios.defaults.headers.common['Authorization'] = null;
      commit(LOGOUT);
    },
  },
  getters: {
    isUserLogin: state => {
      return state.isUserLogin
    },
    forSavedApp: state => state.forSavedApp,
  }
})
