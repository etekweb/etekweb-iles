<template>
  <NavigationBar />
  <main>
    <slot />
  </main>
</template>

<style>
@import '~/assets/base.css';

main {
  padding: 24px 32px;
}
</style>
