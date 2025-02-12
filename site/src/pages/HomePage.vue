<script setup lang="ts">
import { onMounted } from 'vue';
import { useRepositoriesStore } from '../storage';

const repositoriesStore = useRepositoriesStore()

onMounted(() => {
    repositoriesStore.load('deeerain')
})

</script>

<template>
    <div class="container">
        <div class="presentation">
            <h1>Привет&#9995, меня зовут Роман&#128578.</h1>
            <p>Стараюсь пройти путь от новичка до настоящего разработчика, шаг за шагом совершенствуя свои навыки.</p>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>
