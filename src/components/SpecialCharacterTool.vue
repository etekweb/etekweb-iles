<script setup lang="ts">
import { ref } from "vue";

const characters = [
  { char: "’", name: "apostrophe" },
  { char: "“", name: "open quote" },
  { char: "”", name: "close quote" },
  { char: "…", name: "ellipsis" },
  { char: "—", name: "em dash" },
  { char: "–", name: "en dash" },
  { char: "©", name: "copyright" },
  { char: "™", name: "trademark" },
  { char: "®", name: "registered trademark" },
  { char: "°", name: "degree" },
  { char: "℃", name: "degree celsius" },
  { char: "℉", name: "degree fahrenheit" },
  { char: "•", name: "bullet" },
  { char: "±", name: "plus-minus" },
  { char: "µ", name: "micro" },
  { char: "§", name: "section" },
];

const copiedCharacter = ref("");
let timeout: ReturnType<typeof setTimeout>;

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
  copiedCharacter.value = text;
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    copiedCharacter.value = "";
  }, 1000);
}
</script>

<template>
  <div class="special-character-tool">
    <h1>Special Characters</h1>
    <p>Click to copy the special character to your clipboard:</p>
    <div class="characters-wrap">
      <button
        v-for="(c, i) in characters"
        :key="i"
        @click="copyToClipboard(c.char)"
      >
        <strong>{{ c.char }}</strong>
        <span>{{ c.name }}</span>
      </button>
    </div>
    <p v-if="copiedCharacter">Copied {{ copiedCharacter }}</p>
  </div>
</template>

<style scoped>
.characters-wrap {
  display: flex;
  gap: 20px;
  max-width: 700px;
  flex-wrap: wrap;

  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 120px));
  gap: 20px;
  max-width: 600px;
  justify-content: start; */
}
.characters-wrap button {
  width: 150px;
  height: 100px;
  padding: 20px;
  border: none;
  background: transparent;
  font-family: inherit;
  border: 1px solid var(--color-text);
  color: var(--color-text);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.characters-wrap button:hover {
  color: #000;
  background: rgba(255, 255, 255, 0.5);
}
.characters-wrap button strong {
  font-size: 2em;
  border-bottom: 1px dashed var(--color-text);
}
</style>
