<template>
  <div class="card" v-if="isCorrectLink">
    <h2>{{ currentTask.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="currentTask.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date().toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{ currentTask.description }}</p>
    <div>
      <button class="btn" @click="changeStatus(currentTask, 'pending')">Взять в работу</button>
      <button class="btn primary" @click="changeStatus(currentTask, 'done')">Завершить</button>
      <button class="btn danger" @click="changeStatus(currentTask, 'cancelled')">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ $route.params.taskId }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
import {ref, computed} from 'vue'

export default {
  components: {AppStatus},
  setup () {
    const route = useRoute()
    const store = useStore()

    const currentTask = computed(() => {
      return store.state.tasks.find(task => task.id == route.params.taskId)
    })

    const isCorrectLink = ref(true)
    if (!currentTask.value) {
      isCorrectLink.value = false
    }

    function changeStatus(state, newStatus)  {
      store.commit('changeTaskStatus', {
        id: store.state.tasks.findIndex(task => task.id == currentTask.value.id),
        status: newStatus
      })
    }

    return {
      isCorrectLink,
      currentTask,
      changeStatus
    }
  }
}
</script>
