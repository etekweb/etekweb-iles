<script lang="ts" setup>
const links = [
  {
    path: '/',
    name: 'Home',
    enabled: true
  },
  {
    path: '/about',
    name: 'About',
    enabled: true
  },
  {
    path: '/projects',
    name: 'Projects',
    enabled: true
  },
  {
    path: '/services',
    name: 'Services',
    enabled: false
  },
  {
    path: '/blog',
    name: 'Blog',
    enabled: false
  },
  {
    path: '/contact',
    name: 'Contact Me',
    enabled: true
  },
]
</script>

<template>
  <div class="navigation-wrap">
    <nav class="navigation-bar" role="navigation">
      <RouterLink to="/"><h2>Ethan Matzdorf</h2></RouterLink>
      <div class="nav-links">
        <RouterLink
          v-for="link of links"
          v-show="link.enabled"
          :to="link.path"
          class="link"
          :class="{major: $route.path === link.path}"
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
@media screen and (max-width: 670px) {
  .navigation-bar {
    justify-content: center;
    padding: 0 32px;
  }
  .nav-links {
    display: none;
  }
}
</style>