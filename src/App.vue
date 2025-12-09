<script setup>
import NavigationSection from './components/NavigationSection.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import AboutSection from './components/AboutSection.vue'
</script>

<template>
  <main>
    <NavigationSection />
    <HeroSection />
    <AboutSection />
    <ProjectSection />
    <ContactSection />
    <FooterSection />
  </main>
</template>

<style lang="scss" scoped>
main {
  padding: 4rem;
  max-width: 1440px;
  margin: 0 auto;
}
</style>
