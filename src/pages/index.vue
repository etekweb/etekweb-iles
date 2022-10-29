<!-- <script lang="ts" setup>

</script> -->

<template>
  <div class="index">
    <div class="hero">
      <div class="lhs">
        <h1>Hello, World!</h1>
        <p>My name is Ethan Matzdorf.<br />I was born and raised in Cloquet, MN.</p>
        <p>
          From a young age, I have taken great interest in technology in various
          forms, exploring and learning about all of the many possibilities they
          contain.
        </p>
        <p>
          I am currently working at 24G, a digital experience agency, as a JavaScript
          developer.
        </p>
        <RouterLink class="link-btn" to="/about">More About Me</RouterLink>
      </div>
      <img src="@/assets/hero.jpeg" alt="Picture of Ethan Matzdorf standing in the woods" />
    </div>
    <SocialLinks />
    <div class="contact-cta">
      <h2>Want to connect?</h2>
      <RouterLink class="link-btn major" to="/contact">Contact Me</RouterLink>
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
    max-width: 380px;
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
    max-width: 60vw;
  }
  @media screen and (max-width: 670px) {
    flex-direction: column;
    align-items: center;
    .lhs {
      align-items: center;
      text-align: center;
    }
  }
}
.contact-cta {
  padding: 32px 0;
  text-align: center;
  h2 {
    margin-bottom: 16px;
  }
}
</style>