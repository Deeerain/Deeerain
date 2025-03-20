<script setup lang="ts">
import type { IRepository } from '../api/types';
import ProjectCard from './ProjectCard.vue';
defineProps<{
    projects: Array<IRepository>
}>()
</script>

<template>
    <div class="project-list project-list--grid">
        <ProjectCard :name="item.name" :url="item.html_url" :lang="item.language" :description="item.description" v-for="item in projects" :key="item.id" />
    </div>
</template>

<style scoped lang="scss">
.project-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;

    &__item {
        border: 1px solid var(--dark-gray-color);
        border-radius: 0.3rem;
        padding: 0.8rem;
    }
}

.project {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__description {
        margin-top: 5px;
        flex-grow: 1;
    }
}
</style>