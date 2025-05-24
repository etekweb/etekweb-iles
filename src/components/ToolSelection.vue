<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';

const tabs = [
  { id: 'none', name: 'None' },
  { id: 'resolution', name: 'Screen Resolution' },
  { id: 'ip', name: 'IP Address' },
  { id: 'bulkDownload', name: 'Bulk Download' },
  { id: 'uuidGenerator', name: 'UUID Generator' },
];

const currentTab = ref('none');

// Helper to get query parameters from the URL
function getQueryParam(param: string): string | null {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Helper to set query parameters in the URL
function setQueryParam(param: string, value: string) {
  const url = new URL(window.location.href);
  url.searchParams.set(param, value);
  window.history.pushState({}, '', url.toString());
}

// Sync currentTab with the URL query parameter
onMounted(() => {
  const tabFromQuery = getQueryParam('tab');
  if (tabFromQuery && tabs.some(tab => tab.id === tabFromQuery)) {
    currentTab.value = tabFromQuery;
  }
});

// Update the URL query parameter when currentTab changes
watch(currentTab, (newTab) => {
  setQueryParam('tab', newTab);
});
</script>

<template>
  <div class="tools-page">
    <div class="lhs">
      <h2>Tools</h2>
      <a
        v-for="tab in tabs.slice(1)" 
        :key="tab.id" 
        href="#" 
        @click.prevent="currentTab = tab.id" 
        :class="{ selected: currentTab === tab.id }"
      >
        {{ tab.name }}
      </a>
    </div>
    <div class="rhs">
      <ResolutionTool v-if="currentTab === 'resolution'" />
      <IPAddressTool v-else-if="currentTab === 'ip'" />
      <BulkDownloadTool v-else-if="currentTab === 'bulkDownload'" />
      <UUIDGeneratorTool v-else-if="currentTab === 'uuidGenerator'" />
      <p class="no-tool" v-else="currentTab === 'none'">Select a tool from the left sidebar</p>
    </div>
  </div>
</template>

<style scoped>
.tools-page {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 16px;
}
.lhs {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.lhs h2 {
  margin: 16px 0;
}
.lhs a {
  padding: 8px;
  border: 1px solid var(--color-link);
}
.lhs a.selected {
  font-weight: bold;
}
.no-tool {
  margin-top: 16px;
}
</style>