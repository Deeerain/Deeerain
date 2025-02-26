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
    <div class="container">
        <div class="projects">
            <div class="projects__header">
                <h1>Проекты</h1>
            </div>
            <ProjectList :projects="projectsStorage.items"></ProjectList>
        </div>
    </div>
</template>

<style scoped lang="scss">
.projects {
    padding: 0.8rem;
    .project-list {
        margin-top: 1rem;
    }
}
</style>