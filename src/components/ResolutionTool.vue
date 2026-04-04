<script setup lang="ts">
import { reactive, onMounted, onUnmounted, ref } from "vue";

type Dimensions = {
  width: number;
  height: number;
};

const baseValue: Dimensions = {
  width: -1,
  height: -1,
};

const nativeResolution = reactive<Dimensions>(structuredClone(baseValue));
function setNativeResolution() {
  if (typeof screen !== "undefined" && typeof window !== "undefined") {
    nativeResolution.width = screen.width * window.devicePixelRatio;
    nativeResolution.height = screen.height * window.devicePixelRatio;
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

const pixelRatio = ref<number>(-1);
function setPixelRatio() {
  if (typeof window !== "undefined") {
    pixelRatio.value = window.devicePixelRatio;
  }
}

onMounted(() => {
  setNativeResolution();
  setLogicalResolution();
  setWindowDimensions();
  setPixelRatio();
  if (typeof window !== "undefined") {
    window.addEventListener("resize", setWindowDimensions);
  }
});
onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", setWindowDimensions);
  }
});
</script>

<template>
  <div class="resolution-tool">
    <dl class="resolution-list">
      <div class="resolution-item">
        <dt>Your physical (native) resolution</dt>
        <dd>{{ nativeResolution.width }} x {{ nativeResolution.height }}</dd>
      </div>

      <div class="resolution-item">
        <dt>Your pixel ratio</dt>
        <dd>{{ pixelRatio }}</dd>
      </div>

      <div class="resolution-item">
        <dt>Your logical (viewport) resolution</dt>
        <dd>{{ logicalResolution.width }} x {{ logicalResolution.height }}</dd>
      </div>

      <div class="resolution-item">
        <dt>Your window dimensions</dt>
        <dd>{{ windowDimensions.width }} x {{ windowDimensions.height }}</dd>
      </div>
    </dl>
  </div>
</template>

<style scoped>
.resolution-list {
  margin: 16px 0 0 0;
}

.resolution-item + .resolution-item {
  margin-top: 1.5rem;
}

.resolution-item dt {
  margin-bottom: 1rem;
}

.resolution-item dd {
  margin: 0;
  font-size: 2em;
  font-weight: 500;
  line-height: 1.1;
}
</style>
