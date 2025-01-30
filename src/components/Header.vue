<template>
  <section class="flex items-center justify-center">
    <div class="container py-24 mx-auto px-12 max-w-7xl">
      <div class="max-w-2xl">
        <h1 class="text-7xl font-semibold mb-6 leading-[1.2]">
          Cześć, jestem Paweł Heleniak Frontend Developer
        </h1>
        <p class="text-slate-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aperiam perferendis
          eligendi tempora, eaque dicta sequi quibusdam molestiae fuga minus culpa iusto voluptatum
          similique voluptas, totam perspiciatis facilis officia odio!
        </p>
      </div>
      <div></div>
    </div>
  </section>
</template>
<!-- <section class="mx-2 flex items-center justify-start">
  <div class="m-10 relative max-w-  screen-2xl">
    <div class="mb-10">
      <p class="text-xl font-medium">Cześć, jestem</p>
      <h1 class="text-balance text-5xl font-semibold">Paweł Heleniak</h1>
      <p class="text-xl font-medium text-end">Frontend developer</p>
    </div>
    <div class="mb-4 text-xl bottom-0">
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
</section> -->
<script lang="ts">
export default {
  data() {
    // return {
    //   textArray: [
    //     'Lubie tworzyć...',
    //     'Lubie...',
    //     'Stale pogłębiam swoje umiejętności...',
    //   ] as string[],
    //   textIndex: 0 as number,
    // }
  },
  methods: {
    // stepText() {
    //   setInterval(() => {
    //     this.textIndex = this.textIndex + 1
    //     if (this.textIndex === 3) this.textIndex = 0
    //   }, 3000)
    // },
  },
  mounted() {
    // this.stepText()
  },
}
</script>
