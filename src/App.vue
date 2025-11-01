<script setup>
import HeroSection from './components/HeroSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <main>
    <HeroSection />
    <ProjectSection />
    <ContactSection />
  </main>
</template>

<style lang="scss" scoped>
main {
  padding: 40px;
  max-width: 1440px;
  margin: 0 auto;
}
</style>
