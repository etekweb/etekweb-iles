<script lang="ts" setup>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3';
import timeGridPlugin from '@fullcalendar/timegrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

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
  initialView: 'timeGridWeek'
};
</script>

<template>
  <FullCalendar :options="calendarOptions" />
</template>

<style lang="scss">
// FullCalendar style overrides
.fc-event {
  pointer-events: none;
  cursor: default;
}
.fc-event-title {
  color: orange;
}
.fc-event-title::before {
  content: 'busy';
  color: black;
}
</style>