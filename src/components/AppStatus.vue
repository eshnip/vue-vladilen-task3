<template>
  <span :class="['badge', style]">{{ label }}</span>
</template>


<script>
import {computed} from 'vue'
import {useStore} from 'vuex'
export default {
  props: ['type'],
  setup(props) {

    const store = useStore()

    const label = computed(() => {
      if (props.type === 'active') return 'Активен'
      if (props.type === 'done') return 'Завершена'
      if (props.type === 'cancelled') return 'Отменена'
      if (props.type === 'pending') return 'Выполняется'
      return 'В обработке'
    })

    const style = computed(() => {
      if (props.type === 'active') return 'primary'
      if (props.type === 'done') return 'primary'
      if (props.type === 'cancelled') return 'danger'
      if (props.type === 'pending') return 'warning'
      return 'warning'
    })

    return {
      label,
      style
    }
  }
}
</script>