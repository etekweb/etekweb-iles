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
    <div class="socials">
      <p>Find me on:</p>
      <a href="https://www.facebook.com/ethan.matzdorf" target="_blank">
        <img src="@/assets/social-logos/facebook.png" alt="Facebook link" class="social-link" />
      </a>
      <a href="https://www.instagram.com/ethan_m218" target="_blank">
        <img src="@/assets/social-logos/instagram.png" alt="Instagram link" class="social-link" />
      </a>
      <a href="https://www.linkedin.com/in/ethan-matzdorf-9493b4137" target="_blank">
        <img src="@/assets/social-logos/linkedin.png" alt="Linkedin link" class="social-link" />
      </a>
      <a href="https://github.com/etekweb" target="_blank">
        <img src="@/assets/social-logos/github.png" alt="GitHub link" class="social-link" />
      </a>
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
.socials {
  background-color: var(--color-divider);
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  box-shadow: 0px 0px 9px rgba(213, 213, 213, 0.6);
  @media (prefers-color-scheme: dark) {
    box-shadow: 0px 0px 9px rgba(83, 83, 83, 0.6);
  }
  .social-link {
    margin-top: 4px;
  }
  p {
    font-size: 28px;
    margin-bottom: 2px;
  }
  img {
    height: 70px;
  }
}
</style>