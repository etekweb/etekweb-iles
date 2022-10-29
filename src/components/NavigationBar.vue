<!-- <script lang="ts" setup>

</script> -->

<template>
  <div class="navigation-wrap">
    <nav class="navigation-bar" role="navigation">
      <RouterLink to="/"><h2>Ethan Matzdorf</h2></RouterLink>
      <div class="nav-links">
        <RouterLink class="link-btn" to="/about">About</RouterLink>
        <!-- <RouterLink class="link-btn" to="/projects">Projects</RouterLink>
        <RouterLink class="link-btn" to="/services">Services</RouterLink>
        <RouterLink class="link-btn" to="/blog">Blog</RouterLink> -->
        <RouterLink class="link-btn major" to="/contact">Contact Me</RouterLink>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.navigation-wrap {
  width: 100%;
  height: 60px;
  background-color: var(--color-navbar);
  --color-navbar: #c8dae8;
  --color-h2: var(--vt-c-black);
  @media (prefers-color-scheme: dark) {
    --color-navbar: #475057;
    --color-h2: var(--vt-c-white);
  }
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
  color: var(--color-h2);
  padding: 0 4px;
}
.nav-links {
  display: flex;
  gap: 8px;
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