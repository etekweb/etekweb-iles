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
    <div class="contact-form">
      <ContactForm client:idle />
    </div>
    <div class="calendar-info">
      Looking to set a meeting?
      <RouterLink to="/calendar" target="_blank" class="btn">View Free/Busy Calendar</RouterLink>
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

.contact-form {
  grid-column: 1 / 2;
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
  .btn {
    background-color: unset;
  }
  @media screen and (max-width: 670px) {
    grid-column: 1 / 2;
    align-items: center
  }
}
</style>