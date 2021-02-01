<template>
  <h1 v-if="!$store.state.tasks" class="text-white center">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{$store.getters.getActiveTasksAmount}}</h3>
    <template
      v-for="task in $store.state.tasks"
      :key="task.id"
    >
      <div class="card">
        <h2 class="card-title">
          {{ task.title }}
          <AppStatus :type="task.status" />
        </h2>
        <p>
          <strong>
            <small>
              {{new Date().toLocaleDateString()}}
            </small>
          </strong>
        </p>
        <router-link :to="'/task/' + task.id">
          <button class="btn primary">Посмотреть</button>
        </router-link>
      </div>
    </template>
  </template>
</template>

<script>
import AppStatus from '../components/AppStatus'

export default {
  components: {AppStatus}
}
</script>
