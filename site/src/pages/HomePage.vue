<script setup lang="ts">
import { onMounted } from 'vue';
import { useRepositoriesStore } from '../storage';
import ProjectList from '../components/ProjectList.vue';

const repositoriesStore = useRepositoriesStore()

onMounted(() => {
    repositoriesStore.load('deeerain')
})

</script>

<template>
    <ProjectList :projects="repositoriesStore.items"/>
</template>
