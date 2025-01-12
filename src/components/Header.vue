<template>
  <header class="flex items-center justify-center">
    <div class="m-10 relative">
      <div class="mb-10">
        <p class="text-xl font-medium">Cześć, jestem</p>
        <h1 class="text-balance text-5xl font-semibold">Paweł Heleniak</h1>
        <p class="text-xl font-medium text-end">Frontend developer</p>
      </div>
      <div class="mb-10 text-xl absolute bottom-0">
        <p>{{ textArray[textIndex] }}</p>
      </div>
      <div class="flex gap-4 justify-center">
        <button
          type="button"
          class="bg-teal-600 hover:bg-teal-700 text-slate-100 h-10 w-24 rounded-md"
        >
          Kontakt
        </button>
      </div>
    </div>
    <div></div>
  </header>
</template>

<script lang="ts">
export default {
  data() {
    return {
      textArray: [
        'Lubie tworzyć...',
        'Lubie...',
        'Stale pogłębiam swoje umiejętności...',
      ] as string[],
      textIndex: 0 as number,
    }
  },
  methods: {
    stepText() {
      setInterval(() => {
        this.textIndex = this.textIndex + 1
        if (this.textIndex === 3) this.textIndex = 1
      }, 3000)
    },
  },
  mounted() {
    this.stepText()
  },
}
</script>
