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
    <div class="container">
        <div class="presentation">
            <h1>Привет&#9995, меня зовут <Glitch text="Роман"/>&#128578.</h1>
            <p>Стараюсь пройти путь от новичка до настоящего <Glitch text="разработчика"/>, шаг за шагом совершенствуя свои <Glitch text="навыки"/>.</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.presentation-bg {
    position: absolute;
    transform-style: preserve-3d;
    perspective: 800px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
