<script setup lang="ts">
import { computed, ref } from 'vue';

const isDarkMode = computed(() => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
});

const success = ref(false);
const status = ref('');

const form = ref<HTMLFormElement>();
async function handleSubmit(event: Event) {
  event.preventDefault();
  status.value = '';
  const target = event.target as HTMLFormElement;
  const data = new FormData(target);
  fetch(target.action, {
    method: form?.value?.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      success.value = true;
      status.value = "Thanks for your submission!";
      form?.value?.reset()
    } else {
      success.value = false;
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.value = data["errors"].map((error: any) => error["message"]).join(", ")
        } else {
          status.value = "Please confirm the above form is filled out completely, then try again."
        }
      })
    }
  }).catch(error => {
    success.value = false;
    status.value = "Please check your Internet connection and try again."
  });
}
</script>

<template>
  <div class="contact-me">
    <h1>Contact Me</h1>
    <form
      v-if="!success"
      ref="form"
      action="https://formspree.io/f/mjvzaldg"
      @submit="handleSubmit"
      method="POST"
    >
      <label for="full-name">Your Name</label>
      <input type="text" name="name" id="full-name" required>
      <label for="email-address">Your Email Address</label>
      <input type="email" name="_replyto" id="email-address" required>
      <label for="message">Your Message</label>
      <textarea rows="8" name="message" id="message" required></textarea>
      <div
        class="g-recaptcha"
        data-sitekey="6LfCCLUUAAAAADRkxjo3gHcVXlZGouubHmdEpxYa"
        :data-theme="isDarkMode ? 'dark' : 'light'"
      />
      <button class="link-btn major" type="submit">Submit</button>
    </form>
    <div v-if="status" class="status">
      <h2>{{ success ? 'Form submitted!' : 'Sorry, there was an error.' }}</h2>
      <p>{{ status }}</p>
      <button v-if="success" class="link-btn" @click="status = ''">Back to Form</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-me {
  form {
    display: grid;
    grid-template-columns: 150px 450px;
    gap: 16px;
    label {
      text-align: right;
      margin-top: 7px;
    }
    input, textarea {
      border: 1px solid var(--color-border);
      background-color: var(--color-form-bg);
      padding: 6px;
      font-family: inherit;
      font-size: 16px;
      color: var(--color-text);
      border-radius: 3px;
    }
    .g-recaptcha, button {
      grid-column: 2 / 3;
      justify-self: end;
    }
    .g-recaptcha {
      margin-right: -1px;
    }
    button {
      font-size: 16px;
    }
  }
}
.status {
  .link-btn {
    background-color: unset;
  }
}
</style>