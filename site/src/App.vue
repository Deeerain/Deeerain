<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import routes from './router/routes';

</script>

<template>
  <div class="wrapper">
    <header>
      <div class="container">
        <nav class="nav">
          <div class="logo">
              <RouterLink :to="{name: 'home'}">Deerain</RouterLink>
          </div>
          <div class="nav nav__links">
            <RouterLink :to="{name: item.name}" v-for="item, index in routes" :key="index">{{ item.meta?.text }}</RouterLink>
          </div>
        </nav>
      </div>
    </header>
    <main>
      <RouterView></RouterView>
    </main>
    <footer>
      <div class="container">
        <nav class="nav">
          <div class="nav nav__links">
            <a href="https://t.me/d33i2"><font-awesome-icon :icon="fab.faTelegram" /></a>
            <a href="https://github.com/Deeerain"><font-awesome-icon :icon="fab.faGithub" /></a>
            <a href="mailto:1deerain1@gmail.com"><font-awesome-icon :icon="fas.faEnvelope" /></a>
          </div>
        </nav>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100vh;
}

.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &.nav__links {
    gap: 1rem;
  }
}

header {
  padding: 0.8rem;
  border-bottom: 1px solid var(--dark-gray-color);
}

main {
  flex-grow: 1;
}

footer {
  border-top: 1px solid var(--dark-gray-color);
  padding: 0.8rem;
}
</style>
