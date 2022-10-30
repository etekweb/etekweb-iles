<script setup lang="ts">
import { ref } from 'vue';

const success = ref(false);
const status = ref('');

function updateStatus(o: {success: boolean, status: string}) {
  success.value = o.success;
  status.value = o.status;
}
</script>

<template>
  <div class="contact-me">
    <h1>Contact Me</h1>
    <p>
      Looking to send me a message? You've come to the right place!
    </p>
    <p>
      Feel free to reach out about anything here, be it questions, feedback, business opportunities, or just wanting to connect.
      I'll get back to you as soon as I can.
    </p>
    <ContactForm v-if="!success" @status-update="updateStatus" />
    <div v-if="status" class="status">
      <h2>{{ success ? 'Form submitted!' : 'Sorry, there was an error.' }}</h2>
      <p>{{ status }}</p>
      <button v-if="success" class="link-btn" @click="status = ''">Back to Form</button>
    </div>
    <div class="calendar-info" v-show="false">
      Looking to set a meeting?
      <button class="link-btn">View Free/Busy Calendar</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-me {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 16px 32px;
  @media screen and (max-width: 670px) {
    grid-template-columns: 1fr;
  }
  h1 {
    grid-column: 1 / 3;
    margin-bottom: 0;
  }
  p {
    grid-column: 1 / 2;
    margin: 0;
  }
}

.status {
  grid-column: 1 / 2;
}

.calendar-info {
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  .link-btn {
    background-color: unset;
  }
  @media screen and (max-width: 670px) {
    grid-column: 1 / 2;
    align-items: center
  }
}
</style>