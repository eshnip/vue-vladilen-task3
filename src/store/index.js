import { createStore } from 'vuex'

export default createStore({

    state() {
      return {
        tasks: [],
      }
    },
    mutations: {
      loadCurrentTasks(state) {
        const localStorageTasks = localStorage.getItem('tasks')
        if (localStorageTasks) {
            state.tasks.push(...JSON.parse(localStorageTasks))
            console.log('pushed to global state tasks from localStorage')
        }
      },
      createTask(state, task) {
        state.tasks.push(task)
        console.log('pushed to global state tasks')
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
        console.log('pushed to local storage')
      },
      changeTaskStatus(state, {id, status}) {
          state.tasks[id].status = status
          localStorage.setItem('tasks', JSON.stringify(state.tasks))
      }
    },
    getters: {
        getActiveTasksAmount(state) {
           return state.tasks.filter(task => task.status === 'active').length
        }
    },
    actions: {
        // async mutations
    }
})