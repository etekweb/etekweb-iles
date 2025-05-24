<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { v4 } from 'uuid';

const numBulkUUIDs = ref(1);
const uuidBulk = ref('');
const copiedBulk = ref<boolean | null>(null);
let copiedBulkTimeout: ReturnType<typeof setTimeout>;

const copyBtnText = computed(() => {
    if (copiedBulk.value === null) {
        return 'Copy';
    } else if (copiedBulk.value) {
        return 'Copied!';
    } else {
        return 'Copy Error';
    }
})

function generateBulkUUIDs() {
    uuidBulk.value = '';
    for (let i = 0; i < numBulkUUIDs.value; i++) {
        uuidBulk.value += `${v4()}\n`;
    }
    if (copiedBulkTimeout) {
        clearTimeout(copiedBulkTimeout);
    }
    copiedBulk.value = null;
}

function copyUUIDBulk() {
    if (uuidBulk.value) {
        navigator.clipboard.writeText(uuidBulk.value)
            .then(() => {
                copiedBulk.value = true;
            })
            .catch(err => {
                copiedBulk.value = false;
                console.error('Failed to copy UUID: ', err);
            })
            .finally(() => {
                if (copiedBulkTimeout) {
                    clearTimeout(copiedBulkTimeout);
                }
                copiedBulkTimeout = setTimeout(() => {
                    copiedBulk.value = null;
                }, 2000);
            });
    }
}


onMounted(() => {
    // generateUUID();
    generateBulkUUIDs();
});
</script>

<template>
  <div class="uuid-generator-tool">
    <div class="num-uuids">
        <p>Number of UUIDs to generate (v4):</p>
        <input type="number" min="1" v-model.number="numBulkUUIDs" />
        <button class="btn" @click="generateBulkUUIDs">Generate</button>
    </div>
    <textarea v-model="uuidBulk" rows="14" style="width: 100%;"></textarea>
    <button class="btn major" @click="copyUUIDBulk">{{ copyBtnText }}</button>
  </div>
</template>

<style scoped lang="scss">
.num-uuids {
    display: flex;
    gap: 16px;
    margin: 16px 0;
    p {
        margin: 0;
    }
    input {
        width: 100px;
    }
}
textarea {
    margin-bottom: 16px;
}
</style>