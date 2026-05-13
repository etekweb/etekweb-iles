<script setup lang="ts">
import { ref } from "vue";

const input = ref("");
const output = ref("");

function removeSVGClipPaths() {
  const parser = new DOMParser();
  const doc = parser.parseFromString(input.value, "image/svg+xml");

  const parserError = doc.querySelector("parsererror");

  if (parserError) {
    output.value = "Invalid SVG";
    return;
  }

  const svg = doc.querySelector("svg") as SVGSVGElement | null;

  if (!svg) {
    output.value = "Invalid SVG";
    return;
  }

  unwrapGroupsWithAttribute(svg, "clip-path");
  unwrapGroupsWithAttribute(svg, "mask");

  svg.querySelectorAll("clipPath, mask").forEach((el) => {
    el.remove();
  });

  svg.querySelectorAll("defs").forEach((defs) => {
    if (!defs.children.length && !defs.textContent?.trim()) {
      defs.remove();
    }
  });

  output.value = new XMLSerializer().serializeToString(svg);
}

function unwrapGroupsWithAttribute(svg: SVGSVGElement, attrName: string) {
  const groups = Array.from(svg.querySelectorAll(`g[${attrName}]`));

  groups.forEach((group) => {
    const parent = group.parentNode;

    if (!parent) return;

    while (group.firstChild) {
      parent.insertBefore(group.firstChild, group);
    }

    group.remove();
  });
}
</script>

<template>
  <div class="svg-clip-path-removal-tool">
    <p>SVG code to remove clip path from:</p>

    <textarea v-model="input" rows="14" style="width: 100%"></textarea>

    <button class="btn major" @click="removeSVGClipPaths">Remove</button>

    <p>New SVG code:</p>

    <textarea v-model="output" rows="14" style="width: 100%"></textarea>
  </div>
</template>

<style scoped lang="scss">
textarea {
  margin-bottom: 16px;
}
</style>
