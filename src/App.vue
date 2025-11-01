<script setup>
import HeroSection from './components/HeroSection.vue'
import ProjectSection from './components/ProjectSection.vue'
console.log('s')
</script>

<template>
  <main>
    <HeroSection />
    <ProjectSection />
  </main>
</template>

<style lang="scss" scoped>
main {
  padding: 40px;
  max-width: 1440px;
  margin: 0 auto;
}
</style>
