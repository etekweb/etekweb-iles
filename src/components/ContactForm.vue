<script setup lang="ts">
import { VueRecaptcha } from 'vue-recaptcha';
import { computed, ref } from 'vue';

const success = ref(false);
const status = ref('');

const isDarkMode = computed(() => {
  if (typeof window !== "undefined") {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false;
});

const form = ref<HTMLFormElement>();
async function handleSubmit(event: Event) {
  event.preventDefault();
  success.value = false;
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
      status.value = 'Thanks for your submission!';
      form?.value?.reset()
    } else {
      success.value = false;
      status.value = 'Please confirm the above form is filled out completely, then try again.';
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.value = data["errors"].map((error: any) => error["message"]).join(", ");
        }
      })
    }
  }).catch(error => {
    success.value = false;
    status.value = 'Please check your Internet connection and try again.';
  });
}
</script>

<template>
  <form
    @submit="handleSubmit"
    method="POST"
    action="https://formspree.io/f/mjvzaldg"
    class="contact-form"
    ref="form"
  >
    <label for="full-name">Your Name</label>
    <input type="text" name="name" id="full-name" required>
    <label for="email-address">Your Email Address</label>
    <input type="email" name="_replyto" id="email-address" required>
    <label for="message">Your Message</label>
    <textarea rows="8" name="message" id="message" required></textarea>
    <VueRecaptcha class="g-recaptcha" sitekey="6LfCCLUUAAAAADRkxjo3gHcVXlZGouubHmdEpxYa"
      :theme="isDarkMode ? 'dark' : 'light'" />
    <button class="link-btn major" type="submit">Submit</button>
  </form>
  <div v-if="status" class="status">
    <h2>{{ success ? 'Form submitted!' : 'Sorry, there was an error.' }}</h2>
    <p>{{ status }}</p>
    <button v-if="success" class="link-btn" @click="status = ''">Back to Form</button>
  </div>
</template>

<style lang="scss" scoped>
.contact-form {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 16px;

  label {
    text-align: right;
    margin-top: 7px;
  }

  input,
  textarea {
    border: 1px solid var(--color-border);
    background-color: var(--color-form-bg);
    padding: 6px;
    font-family: inherit;
    font-size: 16px;
    color: var(--color-text);
    border-radius: 3px;
  }

  .g-recaptcha,
  button {
    grid-column: 2 / 3;
    justify-self: end;
  }

  .g-recaptcha {
    margin-right: -2.5px;
  }

  button {
    font-size: 16px;
  }
}
</style>