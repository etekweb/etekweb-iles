<script setup lang="ts">
import { ref } from 'vue';
import JSZip from 'jszip';
import FileSaver from 'file-saver';
const { saveAs } = FileSaver;

const urlBox = ref('');
const shouldGenerateZIP = ref(true);

async function startDownload() {
  const urls = urlBox.value.split('\n');
  // Create empty zip folder if needed
  let zip: JSZip | undefined;
  if (shouldGenerateZIP.value) {
    zip = JSZip();
  }
  // For each URL in textarea
  for (let i = 0; i < urls.length; i += 1) {
    const url = urls[i];
    // Keep original filename from URL
    const urlParts = url.split('/');
    const targetFileName = urlParts[urlParts.length - 1];
    // Get file by URL
    await fetch(url).then(data => {
      return data.blob();
    }).then(data => {
      if (zip) {
        // Add to ZIP folder
        zip.file(targetFileName, data, { binary: true });
      } else {
        // Trigger individual file download
        saveAs(data, targetFileName);
      }
    });
  }
  // Generate final ZIP file
  if (zip) {
    zip.generateAsync({type:"blob"}).then(function(content) {
      saveAs(content, `files_${new Date().valueOf()}.zip`);
    });
  }
}
</script>

<template>
  <div class="bulk-download-tool">
    <h1>Bulk Download</h1>
    <p>Paste in the URLs you want to download, separated by line breaks:</p>
    <textarea v-model="urlBox" rows="14" style="width: 100%;"></textarea>
    <fieldset>
      <legend>Download as</legend>
      <div>
        <input id="zip" type="radio" :checked="shouldGenerateZIP" @input="shouldGenerateZIP = true">
        <label for="zip">ZIP file</label>
      </div>
      <div>
        <input id="nozip" type="radio" :checked="!shouldGenerateZIP" @input="shouldGenerateZIP = false">
        <label for="nozip">Individual files</label>
      </div>
      <p v-if="!shouldGenerateZIP" style="margin-bottom: 0;">
        Note: You may need to manually allow multiple file downloads in your browser
      </p>
    </fieldset>
    <button @click="startDownload">Download Files</button>
  </div>
</template>

<style scoped>
.bulk-download-tool fieldset {
  margin: 16px 0;
}
.bulk-download-tool button {
  padding: 4px 8px;
}
</style>