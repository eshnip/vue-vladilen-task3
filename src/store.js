import { createStore } from 'vuex'


export default createStore({
  state() {
    return {
      tasks: [],
      counter: 1
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    add(state, payload) {
      state.counter += payload
    }
  },
  getters: {
    tasks(state) {
      return state.tasks
    },
    counter(state) {
      return state.counter
    },
    doubleCounter(_, getters) {
      return getters.counter * 2
    },
    activeTasksCount(state) {
      console.log(tasks.length)
      return tasks.length
    }
  }
})