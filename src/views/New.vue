<template>

  <AppNotice v-if="notice" />

  <form class="card" @submit.prevent="createTask" ref="taskForm">
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
  <button class="danger" @click="$store.commit('add', 5)">add 5</button>
</template>


<script>
import {ref, reactive, computed, watch, isRef} from 'vue'
import {useStore} from 'vuex'
import {useNotice} from "../use/notice";
import AppNotice from "../components/AppNotice";

export default {
  setup() {


    const store = useStore()
    const storeTasks = store.getters.tasks

    console.log(storeTasks)


    const task = reactive({
      title: '',
      date: '',
      description: '',
      status: 'active',
      timeStamp: Date.now()
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

    function createTask() {
      notice.value = true

      storeTasks.push(task)

      store.commit('increment')
      console.log(store.getters.counter)

      console.log(storeTasks)

      localStorage.setItem('tasks', JSON.stringify(storeTasks))

      resetForm()

      setTimeout(() => {notice.value = false}, 3000)

    }

    return {
      task,
      createTask,
      notice,
      validateForm
    }
  },
  components: {AppNotice}
}
</script>