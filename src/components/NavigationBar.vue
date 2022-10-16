<!-- <script lang="ts" setup>

</script> -->

<template>
  <nav class="navigation-bar" role="navigation">
    <RouterLink to="/"><h2>Ethan Matzdorf</h2></RouterLink>
    <div class="nav-links">
      <RouterLink class="link" to="/about">About</RouterLink>
      <RouterLink class="link" to="/projects">Projects</RouterLink>
      <RouterLink class="link" to="/services">Services</RouterLink>
      <RouterLink class="link" to="/blog">Blog</RouterLink>
      <RouterLink class="link major" to="/contact">Contact Me</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.navigation-bar {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px 0 28px;
  background-color: var(--color-navbar);
  --color-navbar: #c8dae8;
  --color-link: #00658e;
  --color-h2: var(--vt-c-black);
}
@media (prefers-color-scheme: dark) {
  .navigation-bar {
    --color-navbar: #475057;
    --color-link: #00a2e3;
    --color-h2: var(--vt-c-white);
  }
}
h2 {
  color: var(--color-h2);
  padding: 0 4px;
}
.nav-links {
  display: flex;
  gap: 8px;
}
.link {
  border: 1px solid var(--color-link);
  border-radius: 6px;
  padding: 4px 8px;
}
.link.major {
  background-color: var(--color-link);
  color: var(--vt-c-white);
}
</style>