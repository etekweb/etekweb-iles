<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

const ipv4 = ref("");
const hostname = ref("");
const isp = ref("");
const location = ref("");
function getIPv4Data() {
  fetch("https://ipv4.wtfismyip.com/json")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      ipv4.value = data.YourFuckingIPAddress;
      hostname.value = data.YourFuckingHostname;
      isp.value = data.YourFuckingISP;
      location.value = data.YourFuckingLocation;
    });
}

const ipv6 = ref("");
function getIPv6Data() {
  fetch("https://wtfismyip.com/json")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      if (data.YourFuckingIPAddress.indexOf(":") !== -1) {
        ipv6.value = data.YourFuckingIPAddress;
      } else {
        ipv6.value = "NONE";
      }
    });
}

onMounted(() => {
  getIPv4Data();
  getIPv6Data();
});

const loaded = computed(() => {
  return (
    ipv4.value !== "" ||
    hostname.value !== "" ||
    isp.value !== "" ||
    location.value !== "" ||
    ipv6.value !== ""
  );
});
</script>

<template>
  <div class="ip-address-tool" v-if="loaded">
    <dl class="ip-address-list">
      <div class="ip-address-item">
        <dt>Your IPv4 Address</dt>
        <dd>{{ ipv4 }}</dd>
      </div>

      <div class="ip-address-item">
        <dt>Your hostname</dt>
        <dd>{{ hostname }}</dd>
      </div>

      <div class="ip-address-item">
        <dt>Your ISP</dt>
        <dd>{{ isp }}</dd>
      </div>

      <div class="ip-address-item">
        <dt>Your location</dt>
        <dd>{{ location }}</dd>
      </div>

      <div class="ip-address-item">
        <dt>Your IPv6 Address</dt>
        <dd>{{ ipv6 }}</dd>
      </div>
    </dl>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<style scoped>
.ip-address-list {
  margin: 16px 0 0 0;
}

.ip-address-item + .ip-address-item {
  margin-top: 1.5rem;
}

.ip-address-item dt {
  margin-bottom: 1rem;
}

.ip-address-item dd {
  margin: 0;
  font-size: 2em;
  font-weight: 500;
  line-height: 1.1;
}
</style>
