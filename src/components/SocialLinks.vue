<!-- <script lang="ts" setup>

</script> -->

<template>
  <section class="socials">
    <h2>Find me on</h2>
    <div class="social-links">
      <div class="group">
        <h3>Personal</h3>
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
        <h3>Professional</h3>
        <a href="https://www.linkedin.com/in/ethan-matzdorf-9493b4137" target="_blank">
          <img src="@/assets/social-logos/linkedin.png" alt="Linkedin link" class="social-link" />
        </a>
        <a href="https://github.com/etekweb" target="_blank">
          <img src="@/assets/social-logos/github.png" alt="GitHub link" class="social-link" />
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.socials {
  background-color: var(--color-section-overlay);
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 0px 0px 9px rgba(213, 213, 213, 0.6);

  @media (prefers-color-scheme: dark) {
    box-shadow: 0px 0px 9px rgba(83, 83, 83, 0.6);
  }

  h2 {
    // font-size: 24px;
    margin: 0 0 16px 0;
  }

  .social-links {
    display: grid;
    grid-template-columns: 1fr 17px 1fr;
    align-items: center;
    justify-content: center;
    gap: 16px;

    .group {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 16px;
    }

    .vertical-divider {
      width: 1px;
      margin: 0 8px;
      height: 78px;
      opacity: 0.65;
      background-color: var(--color-text);
      flex-shrink: 0;
    }

    .social-link {
      margin-top: 4px;
    }
    a:hover {
      background-color: unset;
    }

    img {
      height: 70px;
      aspect-ratio: 1 / 1;
    }

    h3 {
      width: 90px;
      text-align: right;
      font-size: 16px;
      margin: 0 0 2px 0;
    }

    @media screen and (max-width: 850px) {
      grid-template-columns: 1fr;

      .vertical-divider {
        display: none;
      }
    }

    @media screen and (max-width: 450px) {
      width: 100%;
      padding: 0 32px;
      .group {
        display: grid;
        justify-content: center;
        width: 100%;
        grid-template-columns: repeat(auto-fill, 70px);
        h3 {
          grid-column: 1 / -1;
          width: 100%;
          text-align: center;
        }
      }
    }
  }
}
</style>