<script lang="ts" setup>
import { ref } from "vue";

const menuOpen = ref(false);

const links = [
  {
    path: "/",
    name: "Home",
    enabled: true,
  },
  {
    path: "/about",
    name: "About",
    enabled: true,
  },
  {
    path: "/projects",
    name: "Projects",
    enabled: true,
  },
  {
    path: "/services",
    name: "Services",
    enabled: false,
  },
  {
    path: "/blog",
    name: "Blog",
    enabled: false,
  },
  {
    path: "/contact",
    name: "Contact Me",
    enabled: true,
  },
];
</script>

<template>
  <div class="navigation-wrap">
    <nav class="navigation-bar" role="navigation">
      <RouterLink to="/"><h2>Ethan Matzdorf</h2></RouterLink>
      <div @click="menuOpen = !menuOpen" class="nav-menu-btn">
        <svg
          v-if="menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
          />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </div>
      <div class="nav-links" :class="{ 'menu-open': menuOpen }">
        <RouterLink
          v-for="link of links"
          v-show="link.enabled"
          :to="link.path"
          class="link"
          :class="{ major: $route.path === link.path }"
          :key="link.path"
        >
          {{ link.name }}
        </RouterLink>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.navigation-wrap {
  width: 100%;
  height: 60px;
  background-color: var(--color-navbar);
}
.navigation-bar {
  max-width: var(--width-constraint);
  height: 100%;
  margin: 0 auto;
  padding: 0 32px 0 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h2 {
  color: var(--color-navbar-title);
  padding: 0 4px;
  margin: 0;
}
.nav-links {
  display: flex;
  gap: 16px;
}
.nav-menu-btn {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid var(--color-link-btn);
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    height: 16px;
    path {
      fill: var(--color-link-btn);
    }
  }
}
@media screen and (max-width: 670px) {
  .navigation-bar {
    // justify-content: center;
    padding: 0 32px;
    position: relative;
  }
  .nav-menu-btn {
    display: flex;
  }
  .nav-links {
    display: none;
    &.menu-open {
      display: flex;
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      align-items: center;
      flex-direction: column;
      background-color: var(--color-navbar);
      z-index: 10;
      padding-bottom: 16px;
    }
  }
}
</style>
