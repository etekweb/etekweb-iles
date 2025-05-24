<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

const ipv4 = ref('');
const hostname = ref('');
const isp = ref('');
const location = ref('');
function getIPv4Data() {
  fetch('https://ipv4.wtfismyip.com/json').then(data => {
    return data.json();
  }).then(data => {
    ipv4.value = data.YourFuckingIPAddress;
    hostname.value = data.YourFuckingHostname;
    isp.value = data.YourFuckingISP;
    location.value = data.YourFuckingLocation;
  });
}

const ipv6 = ref('');
function getIPv6Data() {
  fetch('https://wtfismyip.com/json').then(data => {
    return data.json();
  }).then(data => {
    if (data.YourFuckingIPAddress.indexOf(':') !== -1) {
      ipv6.value = data.YourFuckingIPAddress;
    } else {
      ipv6.value = 'NONE';
    }
  });
}

onMounted(() => {
  getIPv4Data();
  getIPv6Data();
});

const loaded = computed(() => {
  return ipv4.value !== '' || hostname.value !== '' || isp.value !== '' || location.value !== '' || ipv6.value !== '';
});
</script>

<template>
  <div class="ip-address-tool" v-if="loaded">
    <p>Your IPv4 Address:</p>
    <h1>{{ ipv4 }}</h1>

    <p>Your hostname:</p>
    <h1>{{ hostname }}</h1>

    <p>Your ISP:</p>
    <h1>{{ isp }}</h1>

    <p>Your location:</p>
    <h1>{{ location }}</h1>

    <p>Your IPv6 Address:</p>
    <h1>{{ ipv6 }}</h1>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<style scoped>

</style>