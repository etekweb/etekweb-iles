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
      <p>Find me on</p>
      <div class="social-links">
        <div class="group">
          <p>Personal</p>
          <a href="https://www.facebook.com/ethan.matzdorf" target="_blank">
            <img src="@/assets/social-logos/facebook.png" alt="Facebook link" class="social-link" />
          </a>
          <a href="https://www.instagram.com/ethan_m218" target="_blank">
            <img src="@/assets/social-logos/instagram.png" alt="Instagram link" class="social-link" />
          </a>
          <a href="https://www.youtube.com/@etekweb" target="_blank">
            <img src="@/assets/social-logos/youtube.png" alt="YouTube link" class="social-link" />
          </a>
        </div>
        <div class="vertical-divider" />
        <div class="group">
          <p>Professional</p>
          <a href="https://www.linkedin.com/in/ethan-matzdorf-9493b4137" target="_blank">
            <img src="@/assets/social-logos/linkedin.png" alt="Linkedin link" class="social-link" />
          </a>
          <a href="https://github.com/etekweb" target="_blank">
            <img src="@/assets/social-logos/github.png" alt="GitHub link" class="social-link" />
          </a>
        </div>
      </div>
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
  @media screen and (max-width: 670px) {
    flex-direction: column;
    align-items: center;
    .lhs {
      align-items: center;
      text-align: center;
    }
  }
}
.socials {
  background-color: var(--color-divider);
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 9px rgba(213, 213, 213, 0.6);
  @media (prefers-color-scheme: dark) {
    box-shadow: 0px 0px 9px rgba(83, 83, 83, 0.6);
  }
  p {
    font-size: 32px;
    margin-bottom: 16px;
  }
  .social-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    .group {
      width: 350px;
      display: flex;
      align-items: center;
      gap: 16px;
    }
    a:hover {
      background-color: unset;
    }
    .social-link {
      margin-top: 4px;
    }
    img {
      height: 70px;
    }
    p {
      font-size: 24px;
      margin-bottom: 2px;
    }
    @media screen and (max-width: 670px) {
      flex-direction: column;
      .vertical-divider {
        display: none;
      }
    }
  }
  .vertical-divider {
    width: 1px;
    margin: 0 8px;
    height: 78px;
    opacity: 0.65;
    background-color: var(--color-text);
  }
}
</style>