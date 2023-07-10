<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from 'vue';

type Dimensions = {
  width: number;
  height: number;
};

const baseValue: Dimensions = {
  width: -1,
  height: -1,
}

const nativeResolution = reactive<Dimensions>(structuredClone(baseValue));
function setNativeResolution() {
  if (typeof screen !== "undefined" && typeof window !== "undefined") {
    nativeResolution.width = (screen.width * window.devicePixelRatio);
    nativeResolution.height = (screen.height * window.devicePixelRatio);
  }
}

const logicalResolution = reactive<Dimensions>(structuredClone(baseValue));
function setLogicalResolution() {
  if (typeof screen !== "undefined") {
    logicalResolution.width = screen.width;
    logicalResolution.height = screen.height;
  }
}

const windowDimensions = reactive<Dimensions>(structuredClone(baseValue));
function setWindowDimensions() {
  if (typeof window !== "undefined") {
    windowDimensions.width = window.innerWidth;
    windowDimensions.height = window.innerHeight;
  }
}

onMounted(() => {
  setNativeResolution();
  setLogicalResolution();
  setWindowDimensions();
  if (typeof window !== "undefined") {
    window.addEventListener('resize', setWindowDimensions);
  }
});
onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener('resize', setWindowDimensions);
  }
});
</script>

<template>
  <div class="resolution-tool">
    <p>Your physical (native) resolution:</p>
    <h1>{{ nativeResolution.width }} x {{ nativeResolution.height }}</h1>
    
    <p>Your logical resolution:</p>
    <h1>{{ logicalResolution.width }} x {{ logicalResolution.height }}</h1>

    <p>Your window dimensions:</p>
    <h1>{{ windowDimensions.width }} x {{ windowDimensions.height }}</h1>
  </div>
</template>

<style scoped>

</style>