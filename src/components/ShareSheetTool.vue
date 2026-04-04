<script setup lang="ts">
import { ref, onMounted } from "vue";
import heroImageUrl from "@/assets/hero.jpg";

const title = ref("Hello, world!");
const text = ref("This is some text to share");
const url = ref("https://etekweb.net");
const files = ref<File[]>([]);

const includeTitle = ref(true);
const includeText = ref(true);
const includeURL = ref(true);
const includeFiles = ref(true);
const fileInputRef = ref<HTMLInputElement | null>(null);

function getParsedShareText(value: string) {
  // Normalize all line endings so share targets receive consistent newlines.
  return value.replace(/\r\n?/g, "\n");
}

function syncInputWithFiles() {
  const input = fileInputRef.value;
  if (!input) return;

  try {
    const dataTransfer = new DataTransfer();
    files.value.forEach((file) => dataTransfer.items.add(file));
    input.files = dataTransfer.files;
  } catch (error) {
    // Some browsers block programmatic file input assignment.
    console.warn("Could not sync file input UI with files array", error);
  }
}

function onFilesChange(event: Event) {
  const input = event.target as HTMLInputElement | null;
  files.value = Array.from(input?.files ?? []);
}

function testShareSupportGeneral() {
  // @ts-expect-error - canShare may not exist on Navigator
  if (navigator.canShare) {
    alert("Web Share API is supported");
  } else {
    alert("Web Share API is not supported");
  }
}

function testShareSupport() {
  const obj: Record<string, any> = {};
  if (includeTitle.value) {
    obj.title = title.value;
  }
  if (includeText.value) {
    obj.text = getParsedShareText(text.value);
  }
  if (includeURL.value) {
    obj.url = url.value;
  }
  if (includeFiles.value && files.value.length) {
    obj.files = files.value;
  }
  if (navigator.canShare?.(obj)) {
    alert("Web Share API can share this data");
  } else {
    alert("Web Share API cannot share this data");
  }
}

function attemptShare() {
  const obj: Record<string, any> = {};
  if (includeTitle.value) {
    obj.title = title.value;
  }
  if (includeText.value) {
    obj.text = getParsedShareText(text.value);
  }
  if (includeURL.value) {
    obj.url = url.value;
  }
  if (includeFiles.value && files.value.length) {
    obj.files = files.value;
  }
  try {
    navigator.share(obj);
  } catch (error) {
    alert("Share failed: " + error);
  }
}

onMounted(async () => {
  try {
    const response = await fetch(heroImageUrl);
    const blob = await response.blob();
    files.value = [
      new File([blob], "hero.jpg", { type: blob.type || "image/jpeg" }),
    ];
    syncInputWithFiles();
  } catch (error) {
    // Keep the tool usable even if preloading the default asset fails.
    console.error("Failed to preload hero.jpg", error);
  }
});
</script>

<template>
  <div class="share-sheet-tool">
    <h1>Share Sheet Test Tool</h1>
    <button @click="testShareSupportGeneral">
      Test Share Support (general)
    </button>
    <p>Select which fields you want included in the share sheet:</p>
    <fieldset>
      <legend>Data to include</legend>
      <div class="field-wrap">
        <!-- title -->
        <input id="title" type="checkbox" v-model="includeTitle" />
        <label for="title">Title</label>
        <input type="text" v-model="title" :disabled="!includeTitle" />
        <!-- text -->
        <input id="text" type="checkbox" v-model="includeText" />
        <label for="text">Text</label>
        <textarea
          id="text-input"
          v-model="text"
          :disabled="!includeText"
          rows="4"
        />
        <!-- url -->
        <input id="url" type="checkbox" v-model="includeURL" />
        <label for="url">URL</label>
        <input type="text" v-model="url" :disabled="!includeURL" />
        <!-- files -->
        <input id="files" type="checkbox" v-model="includeFiles" />
        <label for="files">Files</label>
        <input
          ref="fileInputRef"
          type="file"
          multiple
          @change="onFilesChange"
          :disabled="!includeFiles"
        />
      </div>
    </fieldset>
    <div class="test-with-data-btns">
      <button @click="testShareSupport">Test Share Support</button>
      <button @click="attemptShare">Attempt Share</button>
    </div>
    <a href="https://caniuse.com/web-share" target="_blank">
      caniuse listing for Web Share API
    </a>
  </div>
</template>

<style scoped>
.share-sheet-tool fieldset {
  margin: 16px 0;
}
.share-sheet-tool button {
  padding: 4px 8px;
}
.field-wrap {
  display: grid;
  grid-template-columns: auto auto minmax(0, 1fr);
  max-width: 300px;
  gap: 8px;
  align-items: start;
}
.field-wrap input[type="text"] {
  width: 100%;
  font-family: inherit;
}
.field-wrap textarea {
  width: 100%;
  resize: vertical;
  font-family: inherit;
}
.test-with-data-btns {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
</style>
