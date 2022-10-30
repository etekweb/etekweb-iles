<template>
  <NavigationBar />
  <main>
    <slot />
  </main>
  <TheFooter />
</template>

<style lang="scss">
@import '~/assets/base.css';

main {
  padding: 24px 32px;
  max-width: var(--width-constraint);
  margin: 0 auto;
  min-height: calc(100vh - 120px);
}

.md-img {
  float: right;
  margin-left: 16px;
  width: 450px;
  @media screen and (max-width: 800px) {
    float: unset;
    margin-left: unset;
    max-width: 80vw;
  }
}
</style>
