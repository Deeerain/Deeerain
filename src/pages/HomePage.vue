<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRepositoriesStore } from '../storage';
import Glitch from '../components/Glitch.vue';

const repositoriesStore = useRepositoriesStore()

onMounted(() => {
  repositoriesStore.load('deeerain')
})

let time = ref()

let updateTime = () => {
  const now = new Date()
  time.value = now.toLocaleTimeString()
}

onMounted(() => {
  setInterval(updateTime, 1000)
})
</script>

<template>
  <div class="presentation">
    <h1>Привет&#9995, меня зовут
      <Glitch :text="repositoriesStore.user.name" />&#128578.
    </h1>
    <p>Стараюсь пройти путь от новичка до настоящего
      <Glitch text="разработчика" />, шаг за шагом совершенствуя свои
      <Glitch text="навыки" />.
    </p>
  </div>
</template>

<style scoped lang="scss">
.presentation {
  padding: 1rem;
}
</style>
