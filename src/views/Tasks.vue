<template>
  <h1 v-if="!createdTasks" class="text-white center" >Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: 0</h3>
    <template
      v-for="(task, idx) in createdTasks"
      :key="idx"
    >
      <div class="card">
        <h2 class="card-title">
          {{ task.title }}
          <AppStatus :type="'done'" />
        </h2>
        <p>
          <strong>
            <small>
              {{new Date().toLocaleDateString()}}
            </small>
          </strong>
        </p>
        <button class="btn primary">Посмотреть</button>
      </div>
    </template>
  </template>
</template>

<script>
import AppStatus from '../components/AppStatus'


export default {
  setup() {

    const createdTasks = JSON.parse(localStorage.getItem('tasks'))

    return {
      createdTasks
    }
  },
  components: {AppStatus}
}
</script>
