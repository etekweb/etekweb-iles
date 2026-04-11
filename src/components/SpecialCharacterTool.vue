<script setup lang="ts">
import { onMounted, ref } from "vue";

const characterSets = {
  grammar: {
    name: "Grammar",
    characters: [
      {
        char: "’",
        name: "apostrophe",
        keyboard: {
          macos: "⌥ ⇧ ]",
          windows: "Alt 0146",
        },
      },
      {
        char: "“",
        name: "open quote",
        keyboard: {
          macos: "⌥ [",
          windows: "Alt 0147",
        },
      },
      {
        char: "”",
        name: "close quote",
        keyboard: {
          macos: "⌥ ⇧ [",
          windows: "Alt 0148",
        },
      },
      {
        char: "…",
        name: "ellipsis",
        keyboard: {
          macos: "⌥ ;",
          windows: "Alt 0133",
        },
      },
      {
        char: "—",
        name: "em dash",
        keyboard: {
          macos: "⌥ ⇧ -",
          windows: "Alt 0151",
        },
      },
      {
        char: "–",
        name: "en dash",
        keyboard: {
          macos: "⌥ -",
          windows: "Alt 0150",
        },
      },
    ],
  },
  formatting: {
    name: "Formatting",
    characters: [
      {
        char: "←",
        name: "left arrow",
        keyboard: {
          macos: "N/A",
          windows: "Alt 27",
        },
      },
      {
        char: "↓",
        name: "down arrow",
        keyboard: {
          macos: "N/A",
          windows: "Alt 25",
        },
      },
      {
        char: "↑",
        name: "up arrow",
        keyboard: {
          macos: "N/A",
          windows: "Alt 24",
        },
      },
      {
        char: "→",
        name: "right arrow",
        keyboard: {
          macos: "N/A",
          windows: "Alt 26",
        },
      },
      {
        char: "•",
        name: "bullet",
        keyboard: {
          macos: "⌥ 8",
          windows: "Alt 0149",
        },
      },
    ],
  },
  currency: {
    name: "Currency",
    characters: [
      {
        char: "¢",
        name: "cent",
        keyboard: {
          macos: "⌥ 4",
          windows: "Alt 0162",
        },
      },
      {
        char: "£",
        name: "pound",
        keyboard: {
          macos: "⌥ 3",
          windows: "Alt 0163",
        },
      },
      {
        char: "€",
        name: "euro",
        keyboard: {
          macos: "⌥ Shift 2",
          windows: "Alt 0128",
        },
      },
      {
        char: "¥",
        name: "yen",
        keyboard: {
          macos: "⌥ Y",
          windows: "Alt 0165",
        },
      },
    ],
  },
  math: {
    name: "Math & Science",
    characters: [
      {
        char: "°",
        name: "degree",
        keyboard: {
          macos: "⌥ ⇧ 8",
          windows: "Alt 0176",
        },
      },
      {
        char: "±",
        name: "plus-minus",
        keyboard: {
          macos: "⌥ ⇧ =",
          windows: "Alt 0177",
        },
      },
      {
        char: "÷",
        name: "division",
        keyboard: {
          macos: "⌥ /",
          windows: "Alt 0247",
        },
      },
      {
        char: "×",
        name: "multiplication",
        keyboard: {
          macos: "N/A",
          windows: "Alt 0215",
        },
      },
    ],
  },

  legal: {
    name: "Legal",
    characters: [
      {
        char: "©",
        name: "copyright",
        keyboard: {
          macos: "⌥ G",
          windows: "Alt 0169",
        },
      },
      {
        char: "™",
        name: "trademark",
        keyboard: {
          macos: "⌥ 2",
          windows: "Alt 0153",
        },
      },
      {
        char: "®",
        name: "registered",
        keyboard: {
          macos: "⌥ R",
          windows: "Alt 0174",
        },
      },
      {
        char: "§",
        name: "section",
        keyboard: {
          macos: "⌥ 6",
          windows: "Alt 0167",
        },
      },
    ],
  },
};

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

const platform = ref<"macos" | "windows" | "">("");

function autoDetectPlatform() {
  const userAgent = navigator.userAgent;
  if (userAgent.includes("Macintosh")) {
    platform.value = "macos";
  } else if (userAgent.includes("Windows")) {
    platform.value = "windows";
  }
}

onMounted(() => {
  autoDetectPlatform();
});
</script>

<template>
  <div class="special-character-tool">
    <h1>Special Characters</h1>
    <p>
      Click to copy the special character to your clipboard, or use the keyboard
      shortcut below the character.
    </p>
    <div class="platform-select">
      Platform for keyboard shortcuts:
      <select v-model="platform">
        <option disabled selected>Platform</option>
        <option value="windows">Windows</option>
        <option value="macos">macOS</option>
        <option value="">Other</option>
      </select>
    </div>
    <div class="disclaimer">
      <small v-if="platform === 'windows'">
        Full-size keyboard required for keyboard shortcuts. Use the numeric
        keypad for entering codes.<br />
        Key codes listed are from US English layout. May vary with other
        layouts.
      </small>
      <small v-else-if="platform === 'macos'">
        Keyboard shortcuts listed are from US English layout. May vary with
        other layouts.
      </small>
    </div>
    <template v-for="(group, i) in characterSets" :key="i">
      <h3>{{ group.name }}</h3>
      <div class="characters-wrap">
        <button
          v-for="(c, j) in group.characters"
          :class="{ copied: c.char === copiedCharacter }"
          :key="j"
          @click="copyToClipboard(c.char)"
        >
          <strong>{{ c.char }}</strong>
          <span>{{ c.name }}</span>
          <small>{{ platform ? c.keyboard[platform] : "" }}</small>
        </button>
      </div>
    </template>
    <p v-if="copiedCharacter">Copied {{ copiedCharacter }}</p>
  </div>
</template>

<style scoped>
.characters-wrap {
  display: flex;
  gap: 20px;
  max-width: 700px;
  flex-wrap: wrap;
  margin-bottom: 20px;

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
  transition:
    background 0.2s,
    color 0.2s;
}
.characters-wrap button:hover {
  color: #000;
  background: rgba(255, 255, 255, 0.5);
}
.characters-wrap button.copied {
  color: #000;
  background: rgba(144, 238, 144, 0.8);
}
.characters-wrap button strong {
  font-size: 2em;
  border-bottom: 1px dashed var(--color-text);
}
.platform-select {
  color: var(--color-text);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
}
.platform-select select {
  padding: 4px;
  background: transparent;
  font-family: inherit;
  border: 1px solid var(--color-text);
  color: var(--color-text);
}
.disclaimer {
  margin-top: 12px;
  max-width: 700px;
}
.disclaimer small {
  display: block;
}
</style>
