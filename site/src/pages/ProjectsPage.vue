<script setup lang="ts">
import { computed } from 'vue';
import ProjectList from '../components/ProjectList.vue';
import { useRepositoriesStore } from '../storage';

const projectsStorage = useRepositoriesStore()


computed(() => {
    projectsStorage.load('deeerain')
})
</script>

<template>
    <div class="projects">
        <ProjectList :projects="projectsStorage.items"></ProjectList>
    </div>
</template>

<style scoped lang="scss">
.projects {
    padding: 1rem;
    min-height: 100vh;
}
</style>