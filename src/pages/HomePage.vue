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
  <div v-if="repositoriesStore.user" class="presentation">
    <div class="presentation__avatar">
      <img :src="repositoriesStore.user.avatar_url" alt="">
    </div>
    <div class="presentation__bio">
      <h1>Привет&#9995, меня зовут
        <Glitch :text="repositoriesStore.user.name" />&#128578.
      </h1>
      <p>Стараюсь пройти путь от новичка до настоящего
        <Glitch text="разработчика" />, шаг за шагом совершенствуя свои
        <Glitch text="навыки" />.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.presentation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  gap: 1rem;

  &__avatar {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 400px;
    overflow: hidden;
    align-self: center;

    img {
      width: 100%;
      height: auto;
      border-radius: 50%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
    }
  }

  &__bio {
    align-self: center;
    text-align: center;
  }
}
</style>
