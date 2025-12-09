<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import routes from './router/routes';
import { ref } from 'vue';
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <nav class="nav">
        <div class="nav nav__links">
          <RouterLink class="nav-link" to="/">Deerain</RouterLink>
          <RouterLink class="nav-link" :to="{ name: item.name }" v-for="item, index in routes.filter(i => i.meta)"
            :key="index">{{ item.meta?.text }}</RouterLink>
        </div>
      </nav>
    </header>
    <main>
      <RouterView></RouterView>
    </main>
    <footer class="footer">
      <nav class="nav">
        <div class="nav nav__links">
          <a class="nav-link" href="https://t.me/d33i2"><font-awesome-icon :icon="fab.faTelegram" /></a>
          <a class="nav-link" href="https://github.com/Deeerain"><font-awesome-icon :icon="fab.faGithub" /></a>
          <a class="nav-link" href="mailto:1deerain1@gmail.com"><font-awesome-icon :icon="fas.faEnvelope" /></a>
        </div>
      </nav>
      <span> &copy; Copyright {{ new Date().getFullYear() }}</span>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  height: 100vh;
}

.nav {
  display: flex;
  text-transform: uppercase;
  justify-content: space-between;
  align-items: center;
  writing-mode: vertical-rl;
  gap: 1rem;
  flex-grow: 1;
}

.header,
.footer {
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  gap: 1rem;

  a {
    color: black;
  }

  &::after,
  &::before {
    display: block;
    content: "";
    width: 2px;
    background-color: var(--orange-color);
    flex-grow: 1;
    align-self: center;
  }
}

.header {
  transition: 0.5s;
  background-color: var(--orange-color);
  height: 100%;
  min-width: 200px;

  .nav {
    font-size: clamp(0.3rem, 3vw, 1rem);
    letter-spacing: clamp(0.1rem, 2vw, 0.3rem);
  }

  &::after,
  &::before {
    background-color: black;
  }

  .open-menu {
    background-color: black;
    display: none;
  }
}


main {
  flex-grow: 1;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }
}

.footer {
  color: var(--orange-color);

  .nav {
    justify-content: center;
    flex-grow: 1;

    a {
      color: var(--orange-color);
    }
  }

  span {
    writing-mode: vertical-rl;
    flex-grow: 1;
  }
}

@media screen and (max-width: 800px) {
  .wrapper {
    flex-direction: column;
  }

  .header,
  .footer {
    height: auto;
    flex-direction: row;

    .nav {
      writing-mode: unset;
    }

    &::after,
    &::before {
      content: "";
      height: 2px;
    }
  }

  .footer {
    &::after {
      background-color: var(--orange-color);
    }

    span {
      writing-mode: unset;
    }
  }
}
</style>
