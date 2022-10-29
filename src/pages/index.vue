<!-- <script lang="ts" setup>

</script> -->

<template>
  <div class="index">
    <div class="hero">
      <div class="lhs">
        <h1>Hello, World!</h1>
        <p>My name is Ethan Matzdorf.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis gravida vulputate. Fusce gravida congue
        dolor.</p>
        <RouterLink class="link-btn" to="/about">More About Me</RouterLink>
      </div>
      <img src="@/assets/hero.jpeg" alt="Picture of Ethan Matzdorf standing in the woods" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  justify-content: center;
  gap: 5vw;
  padding: 32px 0;
  .lhs {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    text-align: right;
    gap: 20px;
    .link {
      background-color: rgba(0,0,0,0);
      color: var(--color-link);
      border: 1px solid var(--color-link);
      border-radius: 6px;
      padding: 4px 8px;
    }
  }
  img {
    width: 320px;
  }
}
</style>