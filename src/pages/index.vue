<!-- <script lang="ts" setup>

</script> -->

<template>
  <div class="index">
    <section class="hero">
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
    </section>
    <SocialLinks />
    <section class="contact-cta">
      <h2>Want to connect?</h2>
      <RouterLink class="link-btn major" to="/contact">Contact Me</RouterLink>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  justify-content: center;
  gap: 5vw;
  padding-bottom: 32px;
  .lhs {
    max-width: 380px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    text-align: right;
    h1 {
      font-size: 32px;
      margin: 0 0 10px 0;
    }
    p {
      margin: 10px 0;
    }
    .link-btn {
      margin-top: 10px;
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
  padding: 48px 0;
  text-align: center;
  h2 {
    margin: 0 0 16px 0;
  }
}
</style>