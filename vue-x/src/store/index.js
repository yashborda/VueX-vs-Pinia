import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    counterapi: 0,
    colorCode: "red"
  },
  mutations: {
    decreaseCounter(state) {
      state.counter--;
    },
    increaseCounter(state) {
      state.counter++;
    },
    decreaseCounterApi(state, random) {
      state.counterapi -= random;
    },
    increaseCounterApi(state, random) {
      state.counterapi += random;
    },
    setColorCode(state, value) {
        state.colorCode = value
    }
  },
  actions: {
    decreaseCounterApi({ commit }) {
      axios('https://www.randomnumberapi.com/api/v1.0/random?min=1&max=5&count=1')
        .then(res => {
          commit('decreaseCounterApi', res.data[0])
        })
    },
    increaseCounterApi({ commit }) {
      axios('https://www.randomnumberapi.com/api/v1.0/random?min=1&max=5&count=1')
        .then(res => {
          commit('increaseCounterApi', res.data[0])
        })
    }
  },
  getters: {
    couterSquared(state) {
      return state.counterapi * state.counterapi
    }
  },
  modules: {
  }
})
