<script lang="ts" setup>
// import '@fullcalendar/core/vdom.js' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3';
import timeGridPlugin from '@fullcalendar/timegrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

const hasDocument = typeof document !== "undefined";

const calendarOptions = {
  plugins: [timeGridPlugin, googleCalendarPlugin],
  googleCalendarApiKey: import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY,
  eventSources: [
    {
      googleCalendarId: import.meta.env.VITE_PERSONAL_CALENDAR_ID,
      color: 'blue'
    },
    {
      googleCalendarId: import.meta.env.VITE_BUSINESS_CALENDAR_ID,
      color: 'orange',
      textColor: 'black'
    }
  ],
  initialView: 'timeGridWeek',
  slotMinTime: "08:00:00",
  slotMaxTime: "21:00:00"
};
</script>

<template>
  <FullCalendar v-if="hasDocument" :options="calendarOptions" />
</template>

<style lang="scss">
// FullCalendar style overrides
.fc {
  height: 768px;
  @media screen and (max-width: 640px) {
    height: 787px;
  }
  @media screen and (max-width: 430px) {
    height: 826px;
  }
}
.fc-event {
  pointer-events: none;
  cursor: default;
}
.fc-event-title {
  visibility: hidden;
}
.fc-event-title::before {
  content: 'busy';
  visibility: visible;
}
</style>