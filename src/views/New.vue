<template>

  <AppNotice v-if="notice" />

  <form class="card" @submit.prevent="addNewTask" ref="taskForm">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="task.title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="task.date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="task.description"></textarea>
    </div>

    <button
        type="submit"
        class="btn primary"
        :disabled="validateForm"
    >Создать</button>


  </form>
</template>


<script>
import {reactive, computed} from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import {useNotice} from "../use/notice";
import AppNotice from "../components/AppNotice";

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    const task = reactive({
      title: '',
      date: '',
      description: '',
      id: '',
      status: '',
    })

    const validateForm = computed(() => {
        return (task.title === '' || task.date === '' || task.description === '')
    })

    const {notice} = useNotice()

    function resetForm() {
      task.title = ''
      task.date = ''
      task.description = ''
    }

    function addNewTask() {
      task.id =  Date.now()
      task.status = new Date(task.date).getTime() < task.id ? 'cancelled' : 'active'

      store.commit('createTask', Object.assign({}, task))

      notice.value = true
      resetForm()
      setTimeout(() => {
        notice.value = false
        router.push('/tasks')
      }, 1500)
    }

    return {
      task,
      addNewTask,
      notice,
      validateForm
    }
  },
  components: {AppNotice}
}
</script>