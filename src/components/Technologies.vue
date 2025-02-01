<template>
  <section class="min-h-screen flex items-center justify-center bg-slate-900 text-white">
    <div class="container py-24 mx-auto px-12 max-w-7xl">
      <div class="about-section my-10">
        <h2 class="font-semibold text-5xl text-center p-4 about-text">Technologie</h2>
      </div>
      <div class="technologies grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10 max-w-5xl">
        <div
          v-for="tech in technologies"
          :key="tech.name"
          class="tech-tile flex items-center justify-center p-6 rounded-xl shadow-lg text-xl font-bold"
          :class="tech.color"
        >
          {{ tech.name }}
        </div>
      </div>
      <div class="about-section my-10">
        <p class="font-semibold text-xl text-center p-4 about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sequi nesciunt,
          architecto incidunt itaque praesentium commodi repellendus unde iusto dolorem porro
          repudiandae, corrupti illum neque ullam optio earum dolore voluptatum.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const technologies = ref([
  { name: 'Vue', color: 'bg-green-500' },
  { name: 'Angular', color: 'bg-red-500' },
  { name: 'WordPress', color: 'bg-blue-500' },
  { name: 'Next.js', color: 'bg-black text-white' },
])

onMounted(() => {
  gsap.from('.about-text', {
    opacity: 0,
    y: 100,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top 75%',
      end: 'top 45%',
    },
  })
  gsap.from('.tech-tile', {
    opacity: 0,
    x: -100,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.technologies',
      start: 'top 75%',
      end: 'top 45%',
    },
  })
})
</script>
