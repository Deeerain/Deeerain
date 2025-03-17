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
        <div class="projects__header">
            <h1>Проекты</h1>
        </div>
        <ProjectList :projects="projectsStorage.items"></ProjectList>
    </div>
</template>

<style scoped lang="scss">
.projects {
    .project-list {
        margin-top: 1rem;
    }
}
</style>