<script setup lang="ts">
import type { IRepository } from '../api/types';
defineProps<{
    projects: Array<IRepository>
}>()
</script>

<template>
    <div class="project-list project-list--grid">
        <div class="project-list__item project" v-for="item in projects" :key="item.id">
            <a :href="item.html_url" class="project__title"><h3>{{ item.name }}</h3></a>
            <p class="project__description">{{ item.description }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.project-list {
    display: grid;
    gap: 1rem;

    &.project-list--grid {
        grid-template-columns: auto auto auto;
    }
}
</style>