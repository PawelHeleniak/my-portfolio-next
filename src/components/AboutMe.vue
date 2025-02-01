<template>
  <section class="flex items-center justify-center bg-slate-200">
    <div class="container py-24 mx-auto px-12 max-w-7xl">
      <h2 class="font-semibold text-5xl text-center p-4">O mnie</h2>
      <div class="about-section1">
        <div class="p-10 max-w-2xl about-container1">
          <h3 class="text-3xl font-semibold my-4">Aplikację internetowe</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam pariatur dolorum
            similique eaque temporibus ipsam. Modi quam beatae blanditiis nobis amet, eum
            consequatur aperiam perferendis minima! Deleniti dolorem exercitationem dolor.
          </p>
        </div>
      </div>
      <div class="about-section2">
        <div class="p-10 max-w-2xl about-container2">
          <h3 class="text-3xl font-semibold my-4">Strony internetowe</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam pariatur dolorum
            similique eaque temporibus ipsam. Modi quam beatae blanditiis nobis amet, eum
            consequatur aperiam perferendis minima! Deleniti dolorem exercitationem dolor.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.utils.toArray<HTMLElement>('.about-section1').forEach((section) => {
    gsap.from(section.querySelector('.about-container1')!, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 75%',
        end: 'top 45%',
      },
    })
  })

  gsap.utils.toArray<HTMLElement>('.about-section2').forEach((section) => {
    gsap.from(section.querySelector('.about-container2')!, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 75%',
        end: 'top 45%',
      },
    })
  })
})
</script>
