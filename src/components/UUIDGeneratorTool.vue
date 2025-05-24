<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { v4 } from 'uuid';

const uuid = ref('');

const copied = ref<boolean | null>(null);
let copiedTimeout: ReturnType<typeof setTimeout>;

function generateUUID() {
    uuid.value = v4();
    copied.value = null;
    if (copiedTimeout) {
        clearTimeout(copiedTimeout);
    }
}

function copyUUID() {
    if (uuid.value) {
        navigator.clipboard.writeText(uuid.value)
            .then(() => {
                copied.value = true;
            })
            .catch(err => {
                copied.value = false;
                console.error('Failed to copy UUID: ', err);
            })
            .finally(() => {
                if (copiedTimeout) {
                    clearTimeout(copiedTimeout);
                }
                copiedTimeout = setTimeout(() => {
                    copied.value = null;
                }, 2000);
            });
    }
}
onMounted(() => {
    generateUUID();
});
</script>

<template>
  <div class="ip-address-tool">
    <p>UUID (v4):</p>
    <h1>{{ uuid }}</h1>
    <div class="buttons">
      <button class="btn major" v-if="copied === null" @click="copyUUID">Copy</button>
      <button class="btn major" v-else disabled>{{ copied ? 'Copied!' : 'Copy Error' }}</button>
      <button class="btn" @click="generateUUID">Generate New</button>
    </div>
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
  gap: 8px;
}
</style>