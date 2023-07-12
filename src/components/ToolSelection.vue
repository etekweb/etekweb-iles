<script setup lang="ts">
import { ref } from 'vue';
// import ResolutionTool from '@/components/ResolutionTool.vue';
// import IPAddressTool from '@/components/IPAddressTool.vue';

const currentTab = ref(0);
</script>

<template>
  <div class="tools-page">
    <div class="lhs">
      <h2>Tools</h2>
      <a href="#" @click.prevent="currentTab = 1" :class="{ selected: currentTab === 1 }">Screen Resolution</a>
      <a href="#" @click.prevent="currentTab = 2" :class="{ selected: currentTab === 2 }">IP Address</a>
      <a href="#" @click.prevent="currentTab = 3" :class="{ selected: currentTab === 3 }">Bulk Download</a>
    </div>
    <!-- <div class="rhs">
      <p class="no-tool" v-show="currentTab === 0">Select a tool from the left sidebar</p>
      <ResolutionTool v-show="currentTab === 1" />
      <IPAddressTool v-show="currentTab === 2" />
      <BulkDownloadTool v-show="currentTab === 3" />
    </div> -->
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