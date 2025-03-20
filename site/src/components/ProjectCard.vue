<script setup lang="ts">

defineProps<{
    name: string,
    description?: string | undefined,
    url: string,
    lang?: string | undefined,
    image?: string | undefined,
}>()

</script>

<template>
    <div class="project-card" :href="url">
        <h2 class="project-card__header">
            <a :href="url">{{ name }}</a>
        </h2>

        <p class="project-card__body">{{ description }}</p>

        <div class="project-card__tags">
            <span>{{ lang }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.project-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    border: 1px solid var(--orange-color);
    border-radius: .3rem;
    min-height: 200px;

    .project-card__header {
        background-color: var(--orange-color);
        font-size: 20pt;
        padding: .2rem;
    }

    .project-card__body {
        flex-grow: 1;
        padding: .2rem;
        text-overflow: ellipsis;
    }

    .project-card__tags {
        border-top: 1px solid var(--orange-color);
        margin: .2rem;
        padding: .2rem;
    }
}

</style>