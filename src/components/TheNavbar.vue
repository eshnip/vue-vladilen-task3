<template>
  <nav class="navbar">
    <h3>
      <router-link to="/">Freelance</router-link>
      {{ $store.getters.counter }}
      *{{ $store.getters.doubleCounter }}*
    </h3>

    <ul class="navbar-menu">
      <li>
        <router-link to="/">Все задачи</router-link>
      </li>
      <li>
        <router-link to="/new">Создать</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import {computed} from "vue";
import {useStore} from 'vuex'

export default {
  setup() {
    const store = useStore()

    return {

    }
  }
}
</script>

<style scoped>

</style>