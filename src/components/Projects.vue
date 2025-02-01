<template>
  <!-- <section class="flex items-center justify-center">
    <div class="container py-24 mx-auto px-12 max-w-7xl"></div>
  </section> -->
  <div class="h-[300vh] bg-slate-300 flex">
    <div class="w-1/2 h-screen sticky top-0 flex items-center justify-center bg-slate-100">
      <h2 class="text-5xl font-bold">Projekty/Nie wiem</h2>
    </div>
    <div class="w-1/2">
      <div class="text-fade text-2xl p-24 min-h-screen flex flex-col justify-center">
        <h3 class="text-4xl font-semibold mb-2">Nazwa projektu?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique assumenda earum
          optio odio, quasi error est ad, tempora eius accusantium perferendis deleniti,
          necessitatibus corporis sed quaerat aut ipsam dolorum.
        </p>
      </div>
      <div class="text-fade text-2xl p-24 min-h-screen flex flex-col justify-center">
        <h3 class="text-4xl font-semibold mb-2">Nazwa projektu 2?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique assumenda earum
          optio odio, quasi error est ad, tempora eius accusantium perferendis deleniti,
          necessitatibus corporis sed quaerat aut ipsam dolorum.
        </p>
      </div>
      <div class="text-fade text-2xl p-24 min-h-screen flex flex-col justify-center">
        <h3 class="text-4xl font-semibold mb-2">Nazwa projektu 3?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique assumenda earum
          optio odio, quasi error est ad, tempora eius accusantium perferendis deleniti,
          necessitatibus corporis sed quaerat aut ipsam dolorum.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.text-fade', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    scrollTrigger: {
      trigger: '.text-fade',
      start: 'top 75%',
      end: 'top 45%',
      scrub: true,
    },
  })
})
</script>
